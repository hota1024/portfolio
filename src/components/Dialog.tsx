import clsx from 'clsx'
import { FC, useEffect } from 'react'
import { Button } from './Button'

export const Dialog: FC<{
  show: boolean
  onClose?: () => void
  background?: string
  color?: string
}> = (props) => {
  useEffect(() => {
    document.body.style.overflow = props.show ? 'hidden' : ''
  }, [props.show])

  return (
    <>
      <div className={clsx('dialog-wrap', props.show && 'is-show')}>
        <div className="dialog">
          <div className="dialog-content">{props.children}</div>
          <Button
            background={props.color}
            color={props.background}
            onClick={props.onClose}
          >
            とじる
          </Button>
        </div>
      </div>

      <style jsx>{`
        .dialog-wrap {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dialog-wrap.is-show {
          opacity: 1;
          visibility: visible;
        }

        .dialog {
          width: 90%;
          max-width: 600px;
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.3);
          padding: 1em;
          border-radius: 3px;
          background: ${props.background};
          color: ${props.color};
        }

        .dialog-content {
          margin-bottom: 16px;
          margin-top: 16px;
        }
      `}</style>
    </>
  )
}

Dialog.defaultProps = {
  onClose: () => void 0,
  background: 'white',
  color: '#404040',
}
