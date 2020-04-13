import { FC } from 'react'

export const SkillCard: FC<{
  name: string
  color: string
  background: string
  logoSrc: string
}> = (props) => {
  return (
    <>
      <button
        className="skill-card-wrap"
        style={{ color: props.color, background: props.background }}
      >
        <div>
          <img src={props.logoSrc} width="32"></img>
          <h5>{props.name}</h5>
        </div>
      </button>
      <style jsx>{`
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
