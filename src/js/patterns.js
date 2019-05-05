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

function ggg (engine, i, j) {
  const pattern = `........................O
......................O.O
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO
OO........O...O.OO....O.O
..........O.....O.......O
...........O...O
............OO`
  console.log(pattern)
  var x = 0, y = 0
  for (var char of pattern) {
    if (char == '\n') {
      x = 0
      y += 1
      continue
    }
    if (char == 'O') {
      engine.set(i + y, j + x)
      console.log(x + ', ' + y)
    }
    x += 1
  }
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
  for (var row = 0; row <= i; row++) {
    for(var col = 0; col <= j; col++) {
      if (Math.random() < .01) acorn(engine, row, col)
    }
  }
}

function clear (engine, i, j) {
  for (var row = 0; row <= i; row++) {
    for(var col = 0; col <= j; col++) {
      engine.set(row, col, 0)
    }
  }
}

export {
  acorn, cross, erase, point, random, clear, ggg
}
