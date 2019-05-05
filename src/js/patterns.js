'use strict'

function acorn (engine, i, j) {
  engine.set(i - 1, j)
  engine.set(i, j + 2)
  engine.set(i + 1, j - 1)
  engine.set(i + 1, j)
  engine.set(i + 1, j + 3)
  engine.set(i + 1, j + 4)
  engine.set(i + 1, j + 5)
}

function cross (engine, i, j) {
  engine.set(i - 1, j)
  engine.set(i, j - 1)
  engine.set(i, j)
  engine.set(i, j + 1)
  engine.set(i + 1, j)
}

function point (engine, i, j) {
  engine.set(i, j)
}

function erase (engine, i, j) {
  engine.set(i - 1, j - 1, 0)
  engine.set(i - 1, j, 0)
  engine.set(i - 1, j + 1, 0)
  engine.set(i, j - 1, 0)
  engine.set(i, j, 0)
  engine.set(i, j + 1, 0)
  engine.set(i + 1, j - 1, 0)
  engine.set(i + 1, j, 0)
  engine.set(i + 1, j + 1, 0)
}

function random (engine, i, j) {
  for (var row = 0; row < i; row++) {
    for(var col = 0; col < j; col++) {
      if (Math.random() < .01) acorn(engine, row, col)
    }
  }
}

export {
  acorn, cross, erase, point, random
}
