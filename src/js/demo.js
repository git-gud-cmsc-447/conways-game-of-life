'use strict'

import Engine from './engine'
import WasmEngine from './wasmEngine'
import {acorn, random, ggg, clear, custom, glider, lwss, eden, cord, homer, cow, puffer} from './patterns'
import Renderer from './renderer'
import MouseEventHandler from './events'
import queryString from 'query-string'

const defaultOptions = {
  canvasSelector: '#universe',
  fpsNodeSelector: '#fps-info',
  infoNodeSelector: '#cell-info',
  genNodeSelector: '#gen-info',
  playButtonSelector: '#ctrl-play-pause',
  switchShapeSelector: '#ctrl-avatar-shape',
  switchCellColorSelector: '#ctrl-color-cell',
  switchGridColorSelector: '#ctrl-color-grid',
  switchDeadColorSelector: '#ctrl-color-dead',
  switchPatternSelector: '#ctrl-pattern',
  switchWrapSelector: '#wrap',
  changeSpeedSelector: '#speed-slider',
  changeSkipsSelector: '#ctrl-skips',
  xSizeSelector: '#ctl-grid-x',
  ySizeSelector: '#ctl-grid-y',
  applySizeSelector: '#apply',
  desiredFPS: 30,
  width: 50,
  height: 20,
  pixelsPerCell: 10,
  customString: "",
  strokeStyle: 'rgba(255,118,5,0.1)',
  fillStyle: 'rgba(222,122,39,0.5)',
  showText: true,
  useWasm: true,
  shape: 'rectangle'
}
const urlOptions = queryString.parse(window.location.search)
if (urlOptions.desiredFPS || urlOptions.pixelsperCell) {
  defaultOptions.showText = false
}
const options = Object.assign(defaultOptions, urlOptions)
options.desiredFPS = parseInt(options.desiredFPS, 10)
options.pixelsperCell = parseInt(options.pixelsperCell, 10)
options.width = parseInt(options.width, 10)
options.height = parseInt(options.height, 10)

const gameOfLife = () => {
  const canvas = document.querySelector(options.canvasSelector)

  //const width = ~~(canvas.clientWidth / options.pixelsPerCell)
  //const height = ~~(canvas.clientHeight / options.pixelsPerCell)
  const width = options.width
  const height = options.height
  document.querySelector(options.xSizeSelector).value = width
  document.querySelector(options.ySizeSelector).value = height
  options.pixelsPerCell = ~~(canvas.clientWidth / width)
  const wasmEngine = new WasmEngine(width, height)
  const jsEngine = new Engine(width, height)
  var engine
  if (options.useWasm === true) {
    engine = wasmEngine
  } else {
    engine = jsEngine
  }
  window.engine = engine

  const renderer = new Renderer(canvas, engine, {
    desiredFPS: options.desiredFPS,
    pixelsPerCell: options.pixelsPerCell,
    fpsNode: document.querySelector(options.fpsNodeSelector),
    genNode: document.querySelector(options.genNodeSelector),
    cellNode: document.querySelector(options.infoNodeSelector),
    strokeStyle: options.strokeStyle,
    fillStyle: options.fillStyle
  })

  // mouse events
  const playPauseToggle = event => {
    renderer.togglePlay()
    event.target.textContent = event.target.textContent === 'Pause' ? 'Play' : 'Pause'
  }
  const hideContentToggle = event => {
    // var content = document.querySelector('.text-content')
    // content.classList.toggle('hidden')
    // event.target.textContent = event.target.textContent === 'Hide text' ? 'Show text' : 'Hide text'
  }
  const hideText = () => {
    // var content = document.querySelector('.text-content')
    // content.classList.add('hidden')
    // const hideButton = document.querySelector(options.hideButtonSelector)
    // hideButton.textContent = 'Show text'
  }
  if (options.showText === false) {
    // hideText()
  }
  const switchEngine = event => {
    if (engine instanceof WasmEngine) {
      engine = jsEngine
    } else {
      engine = wasmEngine
    }
    renderer.engine = engine
    events.engine = engine
    event.target.textContent = event.target.textContent === 'Use js engine' ? 'Use wasm engine' : 'Use js engine'
  }
  const changeShape = event => {
    console.log(event)
    renderer.changeShape(event.target.value)
  }
  const changePattern = event => {
    clear(engine, height, width)
    switch (event.target.value) {
      case 'random':
        random(engine, height, width)
        break;
      case 'acorn':
        acorn(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'gun':
        ggg(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'custom':
        custom(engine, ~~(height / 2), ~~(width / 2), options.customString)
        break;
      case 'glider':
        glider(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'lwss':
        lwss(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'eden':
        eden(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'cord':
        cord(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'homer':
        homer(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'cow':
        cow(engine, ~~(height / 2), ~~(width / 2))
        break;
      case 'puffer':
        puffer(engine, ~~(height / 2), ~~(width / 2))
        break;
      default:
    }
  }
  const changeCellColor = event => {
    console.log(event)
    renderer.changeColor('cell', event.target.value)
  }
  const changeGridColor = event => {
    renderer.changeColor('grid', event.target.value)
  }
  const changeFile = event => {
    var file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = function (target) {
      options.customString = target.target.result
      document.querySelector(options.switchPatternSelector).value = 'custom'
      changePattern({target: {value: 'custom'}})
    }
    reader.readAsBinaryString(file)
  }
  const changeDeadColor = event => {
    renderer.changeColor('dead', event.target.value)
  }
  const setWrap = event => {
    console.log(event)
    engine.setWrap(event.target.checked)
  }
  const setSize = event => {
    var newWidth = document.querySelector(options.xSizeSelector).value
    var newHeight = document.querySelector(options.ySizeSelector).value
    
    if (newWidth > 300 || newHeight > 300) {
      alert("Error: value is too large (max size = 300)")
    }
    else if (newWidth < 2 || newHeight < 2) { 
      alert("Error: value is too small (min size = 2) ")
    }
    else {  
      window.location.search = `width=${newWidth}&height=${newHeight}`
    }
  }
  const changeSpeed = event => {
    console.log(event)
    options.desiredFPS = event.target.value
    renderer.changeSpeed(options.desiredFPS)
  }
  const changeSkips = event => {
     if(event.target.value < 0) {
       event.target.value = 0
      alert("Error: value is too large (min size = 0)")
    }
    else if (event.target.value > 100) {
      event.target.value = 0 
      alert("Error: value is too large (max size = 100)")
    }
    else {
    renderer.changeSkips(event.target.value)
    }
      
  }
  const changeRuleSet = event => {
    var id = parseInt(event.target.id.substr(-1))
    var value
    switch (event.target.value) {
      case 'K':
        value = 0
        break;
      case 'G':
        value = 1
        break;
      case 'N':
        value = 2
        break;
    }
    console.log(`Setting ${id} to ${value}`)
    engine.setRule(id, value)
  }
  const events = new MouseEventHandler(canvas, engine, renderer)
  events.addEvents([
    {
      selector: options.playButtonSelector,
      eventType: 'click',
      callback: playPauseToggle
    },
    /*{
      selector: options.hideButtonSelector,
      eventType: 'click',
      callback: hideContentToggle
    },
    {
      selector: options.switchEngineSelector,
      eventType: 'click',
      callback: switchEngine
    },*/
    {
      selector: options.changeSkipsSelector,
      eventType: 'change',
      callback: changeSkips
    },
    {
      selector: options.changeSpeedSelector,
      eventType: 'change',
      callback: changeSpeed
    },
    {
      selector: options.switchShapeSelector,
      eventType: 'change',
      callback: changeShape
    },
    {
      selector: options.switchCellColorSelector,
      eventType: 'change',
      callback: changeCellColor
    },
    {
      selector: options.switchGridColorSelector,
      eventType: 'change',
      callback: changeGridColor
    },
    {
      selector: options.switchWrapSelector,
      eventType: 'change',
      callback: setWrap
    },
    {
      selector: options.applySizeSelector,
      eventType: 'click',
      callback: setSize
    },
    {
      selector: "#ctrl-file",
      eventType: 'change',
      callback: changeFile
    },
    {
      selector: options.switchPatternSelector,
      eventType: 'change',
      callback: changePattern
    },
    {
      selector: options.switchDeadColorSelector,
      eventType: 'change',
      callback: changeDeadColor
    }

  ])
  var newEvents = []
  for (var i = 0, len = 9; i < len; i++) {
    newEvents.push({
      selector: `#Rule${i}`,
      eventType: 'change',
      callback: changeRuleSet
    })
  }
  events.addEvents(newEvents)
  const checkFlag = () => {
    if (engine.module.calledRun !== true) {
      window.setTimeout(checkFlag.bind(this), 100)
    } else {
        // allocate the engines state memory
      wasmEngine.init()
      jsEngine.init()
        // initialize some cells at the center
      // acorn(wasmEngine, ~~(height / 2), ~~(width / 2))
      // acorn(wasmEngine, 0, 0)
      // acorn(jsEngine, ~~(height / 2), ~~(width / 2))
      // acorn(jsEngine, 0, 0)
      random(wasmEngine, height, width)
        // start
      renderer.start()
    }
  }
  checkFlag()
}

window.onload = gameOfLife
