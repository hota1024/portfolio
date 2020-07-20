import { FC } from 'react'
import clsx from 'clsx'

export type TimelineItemProps = {
  date: string
  content: string
  pos: 'left' | 'right'
}

export const TimelineItem: FC<TimelineItemProps> = (props) => {
  return (
    <>
      <div className={clsx('timeline-item', props.pos)}>
        <div className="timeline-item-content">
          <h2>{props.date}</h2>
          <p>{props.content}</p>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          right: -17px;
          background-color: white;
          border: 4px solid #d0e8d0;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .left {
          left: 0;
        }

        .right {
          left: 50%;
        }

        .left::before {
          content: ' ';
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          right: 30px;
          border: medium solid white;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent white;
        }

        .right::before {
          content: ' ';
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          left: 30px;
          border: medium solid white;
          border-width: 10px 10px 10px 0;
          border-color: transparent white transparent transparent;
        }

        .right::after {
          left: -16px;
        }

        .timeline-item-content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 3px;
        }

        @media screen and (max-width: 600px) {
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

          .timeline-item::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
          }

          .left::after,
          .right::after {
            left: 15px;
          }

          .right {
            left: 0%;
          }
        }
      `}</style>
    </>
  )
}