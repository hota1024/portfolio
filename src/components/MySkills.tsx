import { SkillCard } from './SkillCard'

type SkillData = {
  name: string
  logoSrc: string
  color: string
  background: string
}

export const MySkills = () => {
  const skills: SkillData[] = [
    {
      name: 'React',
      logoSrc: '/react.svg',
      color: '#61DAFB',
      background: '#20232A',
    },
    {
      name: 'Vue.js',
      logoSrc: '/vue.svg',
      color: '#4DBA87',
      background: 'white',
    },
    {
      name: 'TypeScript',
      logoSrc: '/typescript.svg',
      color: '#235a97',
      background: 'white',
    },
    {
      name: 'Laravel',
      logoSrc: '/laravel.svg',
      color: '#fb503b',
      background: 'white',
    },
    {
      name: 'Nuxt.js',
      logoSrc: '/nuxt.svg',
      color: 'white',
      background: '#2F495E',
    },
    {
      name: 'Next.js',
      logoSrc: '/nextjs.svg',
      color: 'black',
      background: 'white',
    },
    {
      name: 'Unity',
      logoSrc: '/unity.svg',
      color: '#222C37',
      background: 'white',
    },
    {
      name: 'OpenSiv3D',
      logoSrc: '/opensiv3d.png',
      color: '#4290E2',
      background: '#fafafa',
    },
    {
      name: 'SASS/SCSS',
      logoSrc: '/sass.svg',
      color: '#CF649A',
      background: '#FFFFFF',
    },
    {
      name: 'Vuetify',
      logoSrc: '/vuetify.svg',
      color: '#AEDDFF',
      background: '#121212',
    },
    {
      name: 'Material-UI',
      logoSrc: '/material-ui.svg',
      color: '#00B0FF',
      background: '#212121',
    },
    {
      name: 'Adobe Illustrator',
      logoSrc: '/ai.svg',
      color: '#F37021',
      background: '#360100',
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
