import { WorkCard, WorkCardProps } from './WorkCard'

export const MyWorks = () => {
  const works: WorkCardProps[] = [
    {
      name: 'MaterialJump Next',
      description:
        '矢印キーでタイミングよく床を移動させ、プレイヤーを上へ上げていくシンプルで気持ちいいアクションゲーム。',
      image: '/materialjumpnext.png',
      href: 'https://scratch.mit.edu/projects/357137675/',
      background: '#81D4FA',
    },
    {
      name: 'FlappyBOX',
      description:
        '右から迫ってくる障害物をジャンプで避ける、シンプルな3Dアクションゲーム。',
      image: '/flappybox.png',
      href: 'https://scratch.mit.edu/projects/205200338/',
      background: '#000000',
    },
    {
      name: 'Quro',
      description:
        'JavaScript/TypeScript向けのDiscordボットフレームワークです。リクエスト→処理→レスポンスの流れでボットを開発することを可能にする。',
      image: '/quro.png',
      href: 'https://github.com/hota1024/quro',
      background: '#2C2F33',
    },
    {
      name: 'Bisco.js',
      description:
        'JavaScript向けのDiscordボットライブラリです。Discord上で動くゲームを作るのに特化していて、またコマンドの定義を直感的にすることができます。',
      image: '/bisco.png',
      href: 'https://scrapbox.io/bisco/',
      background: '#2C2F33',
    },
    {
      name: 'Kuro-chan[WIP]',
      description:
        'Discord上のOSSコミュニティ向けのボットです。Githubとの連携やプログラマに嬉しい機能があります。',
      image: '/kuro.png',
      href: 'https://github.com/kuro-chan-bot',
      background: 'white',
    },
    {
      name: 'CoderDojo Shizuoka Bot[WIP]',
      description:
        'DiscordのCoderDojo静岡コミュニティのボットです。connpassの開催情報を元にCoderDojo静岡に関する情報を情報を発信してくれます。',
      image: '/coderdojoshizuokabot.png',
      href: '#',
      background: 'white',
    },
    {
      name: 'CoderDojo静岡',
      description:
        'CoderDojo静岡という場所でユースメンターとして参加し、ボランティアで子どもたちにプログラミングを教えています。',
      image: '/coderdojo-shizuoka.png',
      href: 'https://coderdojo-shizuoka.org/',
      background: 'white',
    },
    {
      name: 'HackForSpring',
      description:
        'COVID-19で休校になった小中学生を対象に、同級生と先輩と共にプログラミングの講座や様子を配信したプロジェクトです。',
      image: '/hackforspring.png',
      href: 'https://sites.google.com/castalia.co.jp/hackforspring',
      background: 'white',
    },
    {
      name: '静岡YLT',
      description:
        '静岡の学生クリエーターのコミュニティです。LTやもくもく回を中心に活動しています。',
      image: '/shizuoka-ylt.png',
      href: 'https://shizuoka-ylt.connpass.com/',
      background: 'white',
    },
    {
      name: 'Kuro言語',
      description: 'Web開発やアプリ開発向けの新しいプログラミング言語です。',
      image: '/kuro-lang.png',
      href: 'https://github.com/kuro-lang/',
      background: '#212121',
    },
  ]

  return (
    <>
      <div className="works">
        {works.map((work) => (
          <WorkCard key={work.name} {...work} />
        ))}
      </div>

      <style jsx>{`
        .works {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
          justify-content: center;
          gap: 32px;
        }

        @media screen and (min-width: 256px) {
          .works {
            min-width: 256px;
          }
        }

        @media screen and (min-width: 544px) {
          .works {
            min-width: 544px;
          }
        }

        @media screen and (min-width: 832px) {
          .works {
            min-width: 832px;
          }
        }

        @media screen and (min-width: 1120px) {
          .works {
            min-width: 1120px;
          }
        }
      `}</style>
    </>
  )
}
