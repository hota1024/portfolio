import { TimelineItemProps, TimelineItem } from './TimelineItem'
import { FC } from 'react'

export type TimelineProps = {
  items: Partial<TimelineItemProps>[]
}

export const Timeline: FC<TimelineProps> = (props) => {
  return (
    <>
      <div className="timeline">
        {props.items.map((item, index) => (
          <TimelineItem
            key={index}
            pos={index % 2 === 0 ? 'left' : 'right'}
            date=""
            content=""
            {...item}
          />
        ))}
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: white;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }

        @media screen and (max-width: 600px) {
          .timeline::after {
            left: 31px;
          }
        }
      `}</style>
    </>
  )
}
