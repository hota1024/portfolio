import { useEffect, useState, useRef } from 'react'
import {
  TinyGame,
  CanvasRenderer,
  CanvasInputManager,
  AnimationFrameRequestTicker,
  LineCap,
} from 'tiny-canvas'

const RGBToRGBA = (color: [number, number, number], alpha: number) =>
  `rgba(${color.join(',')},${alpha})`

interface Ripple {
  x: number
  y: number
  size: number
  maxSize: number
  color: [number, number, number]
}

type ShapeParams = [
  number,
  number,
  number,
  number,
  number,
  [number, number, number]
]

interface ShapeInterface {
  x: number
  y: number
  size: number
  angle: number
  speed: number
  color: [number, number, number]

  update(game: Background): boolean

  draw(game: Background): void
}

abstract class Shape implements ShapeInterface {
  fade = 0

  constructor(
    public x: number,
    public y: number,
    public size: number,
    public angle: number,
    public speed: number,
    public color: [number, number, number]
  ) {}

  update(game: Background) {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed

    this.fade += 1 / 60
    this.fade = Math.min(this.fade, 1)

    const overArea = this.size

    return (
      this.x > -overArea &&
      this.x < game.width + overArea &&
      this.y > -overArea &&
      this.y < game.height + overArea
    )
  }

  abstract draw(game: Background): void
}

class CircleShape extends Shape {
  draw(game: Background) {
    game.strokeCircle(
      this.x,
      this.y,
      this.size,
      RGBToRGBA(this.color, this.fade),
      4
    )
  }
}

class TriangleShape extends Shape {
  draw(game: Background) {
    game.strokePolygon(
      this.x,
      this.y,
      this.size,
      3,
      this.angle,
      RGBToRGBA(this.color, this.fade),
      4
    )
  }
}

class SquareShape extends Shape {
  draw(game: Background) {
    game.strokePolygon(
      this.x,
      this.y,
      this.size,
      4,
      this.angle,
      RGBToRGBA(this.color, this.fade),
      4
    )
  }
}

class CrossShape extends Shape {
  draw(game: Background) {
    let angle = this.angle
    for (let i = 0; i < 4; ++i) {
      game.line(
        this.x,
        this.y,
        this.x + Math.cos(angle) * this.size,
        this.y + Math.sin(angle) * this.size,
        RGBToRGBA(this.color, this.fade),
        4,
        LineCap.Round
      )
      angle += Math.PI / 2
    }
  }
}

class Background extends TinyGame {
  context: CanvasRenderingContext2D

  ripples: Ripple[] = []

  shapes: Shape[] = []

  maxShapes = 5

  constructor(canvas: HTMLCanvasElement) {
    super(
      new CanvasRenderer(canvas),
      new CanvasInputManager(document.body as HTMLCanvasElement),
      new AnimationFrameRequestTicker()
    )
    this.context = canvas.getContext('2d')

    for (let i = 0; i < this.maxShapes; ++i) {
      this.generateRandomShape()
    }

    window['bgGame'] = this
  }

  generateRandomShape() {
    const colors: [number, number, number][] = [
      [187, 222, 251],
      [200, 230, 201],
      [255, 224, 178],
      [209, 196, 233],
    ]
    const data: ShapeParams = [
      Math.random() * this.width,
      Math.random() * this.height,
      Math.random() * 64 + 16,
      Math.random() * Math.PI * 2 - Math.PI,
      0.5 + Math.random() * 2,
      colors[Math.floor(Math.random() * colors.length)],
    ]
    const shapeType = Math.floor(Math.random() * 4)

    if (shapeType === 0) {
      this.shapes.push(new CircleShape(...data))
    } else if (shapeType === 1) {
      this.shapes.push(new TriangleShape(...data))
    } else if (shapeType === 2) {
      this.shapes.push(new SquareShape(...data))
    } else if (shapeType === 3) {
      this.shapes.push(new CrossShape(...data))
    }
  }

  onFrame() {
    this.update()
    this.draw()
  }

  update() {
    // if (this.mouse.leftDown) {
    //   this.ripples.push({
    //     ...this.cursor,
    //     size: 0,
    //     maxSize: 128,
    //     // color: [187, 222, 251],
    //     color: [255, 255, 255],
    //   })
    // }
    // this.updateRipples()
    this.updateShapes()
  }

  draw() {
    // this.fillRect(0, 0, this.width, this.height, 'transparent')
    this.context.clearRect(0, 0, this.width, this.height)

    const length = Math.min(this.width, this.height) / 1.3
    this.fillVertices(
      [
        [0, 0],
        [length, 0],
        [0, length],
      ],
      'rgba(200,230,201,0.8)'
    )
    this.fillVertices(
      [
        [this.rightBottom.x, this.rightBottom.y],
        [this.rightBottom.x - length, this.rightBottom.y],
        [this.rightBottom.x, this.rightBottom.y - length],
      ],
      'rgba(187,222,251,0.8)'
    )
    this.drawRipples()
    this.drawShapes()
  }

  updateShapes() {
    this.shapes = this.shapes.filter((shape) => shape.update(this))

    for (let i = 0; i < this.maxShapes - this.shapes.length; ++i) {
      this.generateRandomShape()
    }
  }

  drawShapes() {
    for (const shape of this.shapes) {
      shape.draw(this)
    }
  }

  updateRipples() {
    this.ripples = this.ripples.filter((ripple) => {
      ripple.size += 2

      return ripple.size <= ripple.maxSize
    })
  }

  drawRipples() {
    for (const ripple of this.ripples) {
      this.fillCircle(
        ripple.x,
        ripple.y,
        ripple.size,
        `rgb(${ripple.color.join(',')},${1 - ripple.size / ripple.maxSize})`
      )
    }
  }
}

export const HomeBackground = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const canvasRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    updateSize()

    window.addEventListener('resize', () => {
      updateSize()
    })

    const background = new Background(canvasRef.current)
    background.start()
  })

  return (
    <>
      <div>
        <canvas width={width} height={height} ref={canvasRef}></canvas>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          height: 100vh;
        }

        canvas {
          background: transparent;
        }
      `}</style>
    </>
  )
}
