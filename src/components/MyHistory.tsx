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
      content: '通信制の高校に入学',
    },
    {
      date: '2020/2',
      content: 'ジュニアプロコン2020 in 静岡 高校生ソフトウェア部門優勝',
    },
    {
      date: '2020/3',
      content: 'HackForSpringに参加',
    },
    {
      date: '2020/9',
      content:
        'DojoCon Japan in 2020 スタッフ(コンテストチームリーダー)として参加',
    },
    {
      date: '2020/10',
      content:
        '第2回 ジュニアプログラミングコンテスト in 静岡 高校生ソフトウェア部門優勝',
    },
    {
      date: '2020',
      content:
        'セキュリティ・キャンプ2020 Y-III Cコンパイラを自作してみよう！ゼミ 参加',
    },
    {
      date: '2021',
      content: 'SecHack365 2021 表現駆動コースにハッカーとして参加',
    },
    {
      date: '2021/10',
      content:
        '第3回 ジュニアプログラミングコンテスト in 静岡 高校生ソフトウェア部門優勝',
    },
    {
      date: '2022/4',
      content: '慶應義塾大学 環境情報学部 入学'
    },
  ]

  return (
    <>
      <Timeline items={items} />

      <style jsx>{``}</style>
    </>
  )
}
