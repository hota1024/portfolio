import { FC } from 'react'

export type WorkCardProps = {
  name: string
  description: string
  image: string
  href: string
  background: string
}

export const WorkCard: FC<WorkCardProps> = (props) => {
  return (
    <>
      <a href={props.href} className="work-card" target="__blank">
        <div className="work-image-wrap">
          <img src={props.image}></img>
        </div>
        <div className="work-content">
          <h5>{props.name}</h5>
          <p>{props.description}</p>
        </div>
      </a>

      <style jsx>{`
        .work-card {
          width: 256px;
          height: 256px;
          display: grid;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
        }

        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
          transition: 160ms;
        }

        .work-card:hover img {
          transform: scale(1.1);
        }

        .work-card:hover .work-content {
          opacity: 1;
        }

        .work-image-wrap {
          width: 100%;
          height: 100%;
          background: ${props.background};
          position: absolute;
        }

        .work-content {
          opacity: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 160ms;
          background: rgba(0, 0, 0, 0.8);
        }

        .work-content h5 {
          font-size: 1.5rem;
          margin-bottom: 8px;
          border-bottom: solid 4px white;
        }

        .work-content p {
          width: 90%;
        }
      `}</style>
    </>
  )
}
