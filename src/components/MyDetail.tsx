import clsx from 'clsx'

type Field = {
  name: string
  content: string | string[]
}

export const MyDetail = () => {
  const fields: Field[] = [
    {
      name: '本名',
      content: '納本穂高（おくもと ほたか）',
    },
    {
      name: '活動名',
      content: ['hota1024', 'ほた'],
    },
    {
      name: '生まれた日',
      content: '2003年10月24日',
    },
    {
      name: '住んでるところ',
      content: '静岡県',
    },
    {
      name: '性格',
      content: ['マイペース', 'ぴょんぴょん', '過集中'],
    },
    {
      name: '好きなこと',
      content: [
        'プログラミング',
        'ゲーム',
        'アニメ鑑賞',
        '漫画',
        '読書',
        '登山',
      ],
    },
    {
      name: '好きなもの',
      content: [
        '紅茶',
        'コーヒー',
        '甘いもの',
        'ちょっと辛いもの',
        'かわいいもの',
        'かっこいいもの',
        'シンプルなもの',
      ],
    },
    {
      name: '好きな作品',
      content: [
        'やはり俺の青春ラブコメは間違っている',
        '物語シリーズ',
        'ご注文はうさぎですか？',
        'まちカドまぞく',
        'ドラえもん',
      ],
    },
  ]

  return (
    <>
      <div className="hobbies">
        {fields.map((field, index) => (
          <div key={index} className="hobby-item">
            <h4
              className={clsx(
                index === 0 && 'first',
                index === fields.length - 1 && 'last'
              )}
            >
              {field.name}
            </h4>
            <p
              className={clsx(
                index === 0 && 'first',
                index === fields.length - 1 && 'last'
              )}
            >
              {Array.isArray(field.content)
                ? field.content.join(', ')
                : field.content}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hobbies {
          max-width: 600px;
          margin: 32px auto;
          box-shadow: 0 0 64px rgba(0, 0, 0, 0.2);
        }

        .hobbies * {
          font-size: 13px;
          font-weight: 600;
          box-sizing: border-box;
        }

        .hobby-item {
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        h4 {
          width: 30%;
          padding: 1em;
          background: #bbdefb;
          border-right: dashed 1px #404040;
          border-bottom: dashed 1px #404040;
          text-align: center;
          font-style: normal;
          margin: 0;
        }

        p {
          width: 70%;
          padding: 1em;
          background: white;
          border-bottom: dashed 1px #404040;
          font-style: normal;
          margin: 0;
          text-align: left;
        }

        h4.first {
          border-top-left-radius: 3px;
        }

        p.first {
          border-top-right-radius: 3px;
        }

        h4.last {
          border-bottom: none;
          border-bottom-left-radius: 3px;
        }

        p.last {
          border-bottom: none;
          border-bottom-right-radius: 3px;
        }
      `}</style>
    </>
  )
}
