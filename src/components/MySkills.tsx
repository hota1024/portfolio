import { SkillCard } from './SkillCard'

type SkillData = {
  name: string
  logoSrc: string
  color: string
  background: string
  detail?: string
}

export const MySkills = () => {
  const skills: SkillData[] = [
    {
      name: 'React',
      logoSrc: '/react.svg',
      color: '#61DAFB',
      background: '#20232A',
      detail:
        'Facebook製のフロントエンドフレームワークです。最近はTypeScriptを使うことが多いためVue.jsよりもこちらを使うことが多いです。',
    },
    {
      name: 'Vue.js',
      logoSrc: '/vue.svg',
      color: '#4DBA87',
      background: 'white',
      detail:
        'コミュニティーが開発しているフロントエンドフレームワークです。Laravelと組み合わせて簡単なCMSを開発していました。',
    },
    {
      name: 'TypeScript',
      logoSrc: '/typescript.svg',
      color: '#235a97',
      background: 'white',
      detail:
        'Microsoftが開発しているAltJSです。JavaScriptい「型」という概念を付け加えた言語です。書きやすさと安全性から積極的に使用するようにしています。',
    },
    {
      name: 'Laravel',
      logoSrc: '/laravel.svg',
      color: '#fb503b',
      background: 'white',
      detail:
        'サーバーサイドの言語であるPHPのフルスタックフレームワークです。ルーターやBlade（テンプレートライブラリ）、Artisan（CLI）などをはじめ様々な便利な機能があります。簡単なAPIを作ったりCMSを作る際に利用しました。',
    },
    {
      name: 'Nuxt.js',
      logoSrc: '/nuxt.svg',
      color: 'white',
      background: '#2F495E',
      detail:
        'Vue.jsのためのフレームワークです。ルーティングをディレクトリ構造から生成してくれるため、スムーズに開発を行うことができます。Laravelと組み合わせて簡単なCMSを開発していました。',
    },
    {
      name: 'Next.js',
      logoSrc: '/nextjs.svg',
      color: 'black',
      background: 'white',
      detail:
        'Reactのためのフレームワークです。ルーティングをディレクトリ構造から生成してくれるため、スムーズに開発を行うことができます。最近はVue.jsよりもReactを使うことが多いのでNuxt.jsではなくNext.jsを利用しています。',
    },
    {
      name: 'Unity',
      logoSrc: '/unity.svg',
      color: '#222C37',
      background: 'white',
      detail:
        '2D/3D向けのゲームエンジンです。プログラムの設計に向いているC#を用いてプログラミングするため、スムーズかつ保守性が高い作品を作ることができます。',
    },
    {
      name: 'OpenSiv3D',
      logoSrc: '/opensiv3d.png',
      color: '#4290E2',
      background: '#fafafa',
      detail:
        'C++を用いたユニバーサールなアプリケーションを開発するためのライブラリです。オブジェクト指向的なAPIや豊富なヘルパー、当たり判定などが用意されているため素早く作品を開発することができます。',
    },
    {
      name: 'SASS/SCSS',
      logoSrc: '/sass.svg',
      color: '#CF649A',
      background: '#FFFFFF',
      detail:
        'CSSを拡張した構文の言語です。CSSにはない関数や繰り返しをはじめ、様々な機能があります。',
    },
    {
      name: 'Vuetify',
      logoSrc: '/vuetify.svg',
      color: '#AEDDFF',
      background: '#121212',
      detail:
        'Vue.jsのためのマテリアルデザインフレームです。Material Designのコンポーネントが一式実装されているため、スムーズに作品を開発することができます。簡単なCMSの開発に使用しました。',
    },
    {
      name: 'Material-UI',
      logoSrc: '/material-ui.svg',
      color: '#00B0FF',
      background: '#212121',
      detail:
        'Reactのためのマテリアルデザインフレームです。Material Designのコンポーネントが一式実装されているため、スムーズに作品を開発することができます。Reactらしい使い方ができるのでとても気に入っています。',
    },
    {
      name: 'Adobe Illustrator',
      logoSrc: '/ai.svg',
      color: '#F37021',
      background: '#360100',
      detail:
        'Adobe社が開発しているベクターイメージなどを作るためのソフトです。自分のアイコンやアプリのアイコンの作成に利用しています。',
    },
  ]

  return (
    <>
      <div className="cssgrid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>

      <style jsx>{`
        .cssgrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          justify-content: center;
          gap: 32px;
        }

        @media screen and (min-width: 375px) {
          .cssgrid {
            min-width: 200px;
          }
        }

        @media screen and (min-width: 578px) {
          .cssgrid {
            min-width: 300px;
          }
        }

        @media screen and (min-width: 934px) {
          .cssgrid {
            min-width: 400px;
          }
        }
      `}</style>
    </>
  )
}
