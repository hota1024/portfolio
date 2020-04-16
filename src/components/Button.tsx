import { FC } from 'react'
import clsx from 'clsx'

export const Button: FC<{
  background?: string
  color?: string
  href?: string
  className?: string
  onClick?: () => void
}> = (props) => {
  const onClick = () => {
    props.onClick()
  }

  return (
    <>
      {props.href ? (
        <a
          className={clsx('button', props.className)}
          href={props.href}
          target="__blank"
          onClick={onClick}
        >
          {props.children}
        </a>
      ) : (
        <button className={clsx('button', props.className)} onClick={onClick}>
          {props.children}
        </button>
      )}

      <style jsx>{`
        .button {
          border: none;
          border-radius: 3px;
          background: ${props.background};
          color: ${props.color};
          text-decoration: none;
          min-width: 200px;
          font-size: 1.05rem;
          padding: 0.5em;
          transition: 260ms;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .button:hover {
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
        }

        .button:active {
          box-shadow: none;
        }
      `}</style>
    </>
  )
}

Button.defaultProps = {
  background: 'white',
  color: '#404040',
  onClick: () => void 0,
}
