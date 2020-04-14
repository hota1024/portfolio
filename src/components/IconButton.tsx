import { FC, CSSProperties } from 'react'

export const IconButton: FC<{
  size?: number
  style?: CSSProperties
}> = (props) => {
  const style = {
    ...props.style,
    width: props.size,
    height: props.size,
  }

  return (
    <>
      <button style={style}>{props.children}</button>

      <style jsx>{`
        button {
          border: none;
          border-radius: 50%;
          display: flex;
          padding: 1em;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: #f0f0f0;
          color: #404040;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  )
}

IconButton.defaultProps = {
  size: 32,
}
