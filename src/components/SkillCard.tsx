import { FC } from 'react'

export const SkillCard: FC<{
  name: string
  color: string
  background: string
  logoSrc: string
}> = (props) => {
  return (
    <>
      <div
        className="skill-card-wrap"
        style={{ color: props.color, background: props.background }}
      >
        <div>
          <img src={props.logoSrc} width="32"></img>
          <h5>{props.name}</h5>
        </div>
      </div>
      <style jsx>{`
        .skill-card-wrap {
          border-radius: 3px;
          width: 96px;
          height: 96px;
          display: grid;
          align-content: center;
          justify-content: center;
          overflow: auto;
          min-width: 0;
          box-shadow: 0 2px 2px #a0a0a0;
        }

        h5 {
          margin: 0;
        }
      `}</style>
    </>
  )
}
