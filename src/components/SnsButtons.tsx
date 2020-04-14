import { SnsButton } from './SnsButton'

export const SnsButtons = () => {
  return (
    <>
      <div className="sns-buttons">
        <SnsButton
          icon={['fab', 'twitter']}
          color="#1da1f2"
          background="white"
          href="https://twitter.com/hota1024"
        />
        <SnsButton
          icon={['fab', 'github']}
          color="#24292E"
          background="white"
          href="https://github.com/hota1024"
        />
        <SnsButton
          icon={['fab', 'youtube']}
          color="#FF0000"
          background="white"
          href="https://www.youtube.com/channel/UCB2Nqti-QsC-pf09_xsypkQ?view_as=subscriber"
        />
        <SnsButton
          icon={['fas', 'pen']}
          color="#404040"
          background="white"
          href="https://qiita.com/hota1024"
        />
      </div>

      <style jsx>{`
        .sns-buttons {
          /* margin-top: 32px; */
          position: absolute;
          bottom: 6vh;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
