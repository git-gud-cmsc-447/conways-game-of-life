'use strict'

class Renderer {
  constructor (canvas, engine, options = {}) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.engine = engine

    // options
    this.pixelsPerCell = options.pixelsPerCell || 5
    this.desiredFPS = options.desiredFPS || 30
    this.fpsNode = options.fpsNode || false
    this.cellNode = options.cellNode || false
    this.genNode = options.genNode || false
    this.strokeStyle = options.strokeStyle || 'rgba(255,118,5,0.5)'
    this.fillStyle = options.fillStyle || 'rgba(222,122,39,0.5)'
    this.deadStyle = options.deadStyle || 'rgba(222,122,39,0.1)'
    this.shape = options.shape || 'rectangle'

    // renderer variables
    this.play = false
    this.fpsTime = 0
    this.engineTime = 0
    this.fps = 0
    this.frameNumber = 0
    this.skips = 0

    this.genNumber = 0

    // setup canvas with correct size
    this.canvas.width = this.engine.width * this.pixelsPerCell
    this.canvas.height = this.engine.height * this.pixelsPerCell
  }

  togglePlay () {
    this.play = !this.play
  }

  draw (timeStamp) {
    window.requestAnimationFrame(this.draw.bind(this))

    // display engine state on each frame
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.strokeStyle = this.strokeStyle
    const shouldFillRect = this.pixelsPerCell > 1
    var alive = 0
    const total = this.engine.width * this.engine.height
    for (let i = 0; i < this.engine.height; i++) {
      const iPx = this.pixelsPerCell * i
      // Draw the horizontal grid
      this.context.beginPath()
      this.context.moveTo(0, iPx)
      this.context.lineTo(this.engine.width * this.pixelsPerCell, iPx)
      this.context.stroke()
      for (let j = 0; j < this.engine.width; j++) {
        const jPx = this.pixelsPerCell * j
        this.context.fillStyle = this.fillStyle

        // This is essentially the grid
        // this.context.strokeRect(
        //   jPx, iPx, this.pixelsPerCell, this.pixelsPerCell
        // )
        //

        // Draw the vertical grid
        if (i == 0) {
          this.context.beginPath()
          this.context.moveTo(jPx, 0)
          this.context.lineTo(jPx, this.engine.height * this.pixelsPerCell)
          this.context.stroke()
        }
        const safe = this.engine.cellSafe(i, j)
        const used = false
        if (!safe) { // this is an expensive call, be nice
          used = this.engine.cellUsed(i, j)
        }
        if (safe || used) {
          if (!safe) {
            this.context.fillStyle = this.deadStyle
          } else {
            alive++;
          }
          if (shouldFillRect) {
            // This is the actual shape inside of the grid
            switch (this.shape) {
              case 'rectangle':
                this.context.fillRect(
                  jPx, iPx, this.pixelsPerCell, this.pixelsPerCell
                )    
                break;
              case 'triangle':
                // Draw a pretty triangle
                this.context.beginPath();
                // Start at bottom left
                this.context.moveTo(jPx, iPx + this.pixelsPerCell)
                // Move to middle top
                this.context.lineTo(jPx + (this.pixelsPerCell / 2), iPx)
                // Now to bottom right
                this.context.lineTo(
                  jPx + this.pixelsPerCell, iPx + this.pixelsPerCell
                )
                this.context.fill()
                break;
              case 'circle':
                this.context.beginPath()
                this.context.arc(
                  jPx + (this.pixelsPerCell / 2),
                  iPx + (this.pixelsPerCell / 2),
                  this.pixelsPerCell / 2,
                  0,
                  (Math.PI / 180) * 360,
                )
                this.context.fill()
                break;
              default:
            }
          }
        }
      }
    }
    var addon = ""
    if (engine.getSteady()) addon = " Steady State!"
    this.cellNode.textContent = `${alive}/${total} Alive${addon}`
    this.genNode.textContent = `Generation: ${this.genNumber}`
    // compute engine next step with appropriate frequency
    const engineElapsed = timeStamp - this.engineTime
    if (engineElapsed > 1000 / this.desiredFPS && this.play) {
      if (alive == 0) {
        alert("Game over: No cells are left alive")
        location.reload()
      }
      this.engine.computeNextState()
      for (var i = 0; i < this.skips; i++) {
        this.engine.computeNextState()
        this.genNumber += 1
      }
      this.frameNumber += 1
      this.genNumber += 1
      this.engineTime = timeStamp - (engineElapsed % (1000 / this.desiredFPS))
    }

    // Update FPS display every half second
    if (this.fpsNode) {
      const fpsElapsed = timeStamp - this.fpsTime
      if (fpsElapsed > 500) {
        this.fps = 1000 / fpsElapsed * this.frameNumber
        this.fpsNode.textContent = `${this.fps.toFixed(2)} FPS`
        this.fpsTime = timeStamp
        this.frameNumber = 0
      }
    }
  }

  start () {
    // this.engine.computeNextState()
    this.play = false
    window.requestAnimationFrame(this.draw.bind(this))
  }

  changeShape (targetShape) {
    this.shape = targetShape
  }

  changeSpeed (targetSpeed) {
    this.desiredFPS = targetSpeed
  }

  changeSkips (targetSkips) {
    this.skips = targetSkips
  }

  changeColor (target, targetColor) {
    switch (target) {
      case 'cell':
        this.fillStyle = targetColor
        break;
      case 'grid':
        this.strokeStyle = targetColor
        break;
      case 'dead':
        this.deadStyle = targetColor
        break;
      
      default:
        
    }
  }
}

export {Renderer as default}
