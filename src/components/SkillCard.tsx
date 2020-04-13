export const SkillCard = () => {
  return (
    <>
      <div className="skill-card-wrap">
        <div>
          <img src="/react.svg" width="32"></img>
          <h5>React</h5>
        </div>
      </div>
      <style jsx>{`
        .skill-card-wrap {
          color: #61dafb;
          background: #20232a;
          border-radius: 3px;
          min-width: 74px;
          min-height: 74px;
          display: grid;
          align-content: center;
          justify-content: center;
        }

        h5 {
          margin: 0;
        }
      `}</style>
    </>
  )
}
