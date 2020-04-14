import { FC, useState } from 'react'
import { Dialog } from './Dialog'

export const SkillCard: FC<{
  name: string
  color: string
  background: string
  logoSrc: string
  detail?: string
}> = (props) => {
  const [showDialog, setShowDialog] = useState<boolean>()

  return (
    <>
      <button
        className="skill-card-wrap"
        style={{ color: props.color, background: props.background }}
        onClick={() => setShowDialog(true)}
      >
        <div>
          <img src={props.logoSrc} width="32"></img>
          <h5>{props.name}</h5>
        </div>
      </button>
      <Dialog
        show={showDialog}
        onClose={() => setShowDialog(false)}
        background={props.background}
        color={props.color}
      >
        <div className="detail">
          <img src={props.logoSrc} width="128px"></img>
          <div>
            <h5 style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              {props.name}
            </h5>
            <p style={{ padding: '1em' }}>{props.detail}</p>
          </div>
        </div>
        <hr className="divider" color={props.color} />
      </Dialog>
      <style jsx>{`
        .detail {
          text-align: center;
          margin: 0;
        }

        .skill-card-wrap {
          border: none;
          border-radius: 3px;
          width: 96px;
          height: 96px;
          font-size: 1em;
          cursor: pointer;
          display: grid;
          align-content: center;
          justify-content: center;
          overflow: auto;
          min-width: 0;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
          transition: 300ms;
        }

        .skill-card-wrap:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        h5 {
          margin: 0;
        }
      `}</style>
    </>
  )
}
