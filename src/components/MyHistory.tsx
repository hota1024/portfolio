import { Timeline, TimelineProps } from './Timeline'

export const MyHistory = () => {
  const items: TimelineProps['items'] = [
    {
      date: '2013/9',
      content: 'Scratchコミュニティに参加',
    },
    {
      date: '2015',
      content: 'Vine LinuxでC言語の学習を開始',
    },
    {
      date: '2017/3',
      content: 'RESASアプリコンテスト ジェイティービー賞受賞',
    },
    {
      date: '2019/4',
      content: 'コードアカデミー高等学校 入学',
    },
    {
      date: '2020/2',
      content: 'ジュニアプロコン2020 in 静岡 高校生ソフトウェア部門優勝',
    },
    {
      date: '2020/3',
      content: 'HackForSpringに参加',
    },
  ]

  return (
    <>
      <Timeline items={items} />

      <style jsx>{``}</style>
    </>
  )
}
