'use strict'
import Module from './wasm/engine.js'

class WasmEngine {
  constructor (width, height) {
    this.wasm = true
    this.width = width
    this.height = height
    this.module = Module({wasmBinaryFile: 'js/engine.wasm'})
    //this.module = Module()
    window.module = this.module
  }

  init () {
    // _init returns a pointer to the array of the current game state
    // we'll save it to have a fast access to the state in cellSafe
    this.currentAdress = this.module._init(this.width, this.height)
  }

  cellSafe (i, j) {
    // cellSafe should only be called when we know i and j are within
    // the bounds of the game state array.
    var ret = this.module.HEAP8[this.currentAdress + (i + 1) * (this.width + 2) + j + 1]
    if (ret == 3) ret = 0
    return ret
    // return this.module.getValue(this.currentAdress + i * this.width + j, 'i8')
    // return this.module._cell(i + 1, j + 1)
  }

  cellUsed (i, j) {
    return this.module._cellUsed(i + 1, j + 1)
  }

  getSteady () {
    return this.module._getSteady()
  }

  computeNextState () {
    this.module._computeNextState()
  }

  set (i, j, value = 1) {
    this.module._set(i, j, value)
  }

  setWrap (value) {
    this.module._setWrap(value)
  }

  setRule (index, value) {
    this.module._setRule(index, value)
  }
}

export {WasmEngine as default}
