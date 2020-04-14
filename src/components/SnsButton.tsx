import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type SnsButtonProps = {
  icon: IconProp
  color: string
  background: string
  href: string
}

export const SnsButton: FC<SnsButtonProps> = (props) => {
  return (
    <>
      <a href={props.href} target="__blank">
        <FontAwesomeIcon icon={props.icon} />
      </a>

      <style jsx>{`
        a {
          width: 48px;
          height: 48px;
          line-height: 48px;
          background: white;
          border-radius: 50%;
          font-size: 1.4rem;
          margin: 0 8px;
          cursor: pointer;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
          transition: 300ms;
          color: ${props.color};
          background: ${props.background};
        }

        a:hover {
          color: ${props.background};
          background: ${props.color};
        }
      `}</style>
    </>
  )
}
