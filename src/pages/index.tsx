import Head from 'next/head'
import { HomeBackground } from '../components/HomeBackground'
import { SkillCard } from '../components/SkillCard'
import { MySkills } from '../components/MySkills'

const Home = () => {
  return (
    <div>
      <Head>
        <title>hota1024</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="background-wrap">
          <HomeBackground />
        </div>
        <div className="content-wrap">
          <div className="container text-center section">
            <h1 id="my-name">hota1024</h1>
            <div id="my-description">Game and WebApp Creator</div>
          </div>
          <div className="container text-center section">
            <h2>About me</h2>
            <div>
              <img src="/hota1024.png" width="128"></img>
            </div>
            <div className="self-introduction-content">
              <h2>hota1024/納本穂高</h2>
              <p>ゲーム開発とWebアプリ開発が好きな高校生です。</p>
              <p>
                静岡県に住んでいて、CoderDojo静岡という場所でユースメンターとして子どもたちにプログラミングを教えています。
              </p>
            </div>
          </div>
          <div className="container text-center section">
            <h2>Skills</h2>
            <MySkills />
          </div>
        </div>
      </main>

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: #303030;
          font-family: 'Roboto', sans-serif;
        }

        .self-introduction-content {
          max-width: 500;
          padding: 1em;
          font-weight: 600;
        }

        .background-wrap {
          background: #eeeeee;
          transition: all 500ms;
          position: fixed;
          z-index: -1;
        }

        .content-wrap {
          z-index: 1;
        }

        .text-center {
          text-align: center;
        }

        .section {
          min-height: 100vh;
          margin: 0;
        }

        #my-name {
          font-size: 3rem;
          margin-bottom: 6px;
        }

        #my-description {
          font-size: 1.1rem;
        }

        .container {
          display: grid;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-content: center;
        }
      `}</style>
    </div>
  )
}

export default Home
