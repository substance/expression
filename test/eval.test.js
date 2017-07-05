import { module } from 'substance-test'
import TestEngine from './engine/TestEngine'
import TestEngineComponent from './engine/TestEngineComponent'
import { wait, getMountPoint } from './testHelpers'

const test = module('Eval')

const MESSAGE_CELL_READY = 'Cell should be ready'
const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('Number', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('1')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 1, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Boolean', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('true')
  t.equal(cell.value, true, MESSAGE_CORRECT_VALUE)
  cell = engine.addExpression('false')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Var', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('x')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 4, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('String', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('"foo"')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, "foo", MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Array', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('[1,x,A1]')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, [1, 4, 10], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Object', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('{foo: 1, bar: x, baz: A1}')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, {foo: 1, bar: 4, baz: 10}, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Cell', (t) => {
  const { engine } = setup()
  engine.setValue('$data', [[0,0],[0,0],[0,10]])
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('B3')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Range', (t) => {
  const { engine } = setup()
  engine.setValue('$data', [[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('A1:C4')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, [[1,2,3],[4,5,6],[7,8,9],[10,11,12]], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Definition', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('x = 42')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 42, MESSAGE_CORRECT_VALUE)
  t.equal(cell.expr.name, 'x', 'Expression should have correct name')
  t.end()
})

test('Plus', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('1+2')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Times', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('2*3')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Minus', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('5-3')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Division', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('6/3')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Power', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('2^3')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 8, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('1+x+A1', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('1+x+A1')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.deepEqual(cell.value, 15, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Function call (sync)', (t) => {
  const { engine } = setup()
  engine.registerFunction('sum', sum)
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('sum(1,2,3)')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Function call (async)', (t) => {
  t.plan(4)
  const { engine } = setup()
  engine.registerFunction('sum', sumAsync)
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('sum(1,2,3)')
  t.ok(cell.isPending(), 'Cell should be pending')
  t.nil(cell.value, 'Value should be undefined first')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  }, 0)
})

test('Function call with positional and named arguments', (t) => {
  const { engine } = setup()
  // TODO: I am not sure yet how to define these functions
  engine.registerFunction('foo', (x=1,y=2,z=3) => {
    return x+y+z
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo(4,z=5)')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 11, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Nested function call (sync)', (t) => {
  const { engine } = setup()
  engine.registerFunction('foo', (val) => {
    return 2*val
  })
  engine.registerFunction('bar', (val) => {
    return val+1
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo(bar(2))')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Nested function call (async)', (t) => {
  t.plan(4)
  const { engine } = setup()
  engine.registerFunction('foo', (val) => {
    return 2*val
  })
  let go
  engine.registerFunction('bar', (val) => {
    return new Promise((resolve) => {
      go = () => {
        resolve(val+1)
      }
    })
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo(bar(2))')
  t.ok(cell.isPending(), 'Cell should be pending')
  t.equal(cell.value, undefined, 'Cell value should be undefined at first')
  go()
  setTimeout(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  }, 0)
})

test('Pipe operator', (t) => {
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return 5
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo() | bar()')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Pipe operator (with async calls)', (t) => {
  t.plan(2)
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return Promise.resolve(5)
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo() | bar()')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  }, 10)
})

test('Piping into a function using named arguments', (t) => {
  const { engine } = setup()
  engine.registerFunction('baz', (x=1,y=2,z=3) => {
    return x+y+z
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('5 | baz(z=42)')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 49, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Groups', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('(1+2)*(3+4)')
  t.deepEqual(cell.value, 21, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('#12: Eager propagation to prevent stalling of pipe-expressions', (t) => {
  t.plan(4)
  const { engine } = setup()
  let run = 1
  engine.registerFunction('foo', () => {
    return Promise.resolve(2)
  })
  engine.registerFunction('bar', () => {
    return Promise.resolve(run++)
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo() | bar()')
  Promise.resolve()
  .then(wait(10))
  .then(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 1, MESSAGE_CORRECT_VALUE)
  })
  .then(() => {
    cell.expr.propagate()
  })
  .then(wait(10))
  .then(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 2, MESSAGE_CORRECT_VALUE)
  })
})

function setup() {
  let engine = new TestEngine()
  return {engine}
}

function sum(...vals) {
  return vals.reduce((sum, x)=>{return sum+x}, 0)
}

function sumAsync(...vals){
  return new Promise((resolve) => {
    resolve(sum(...vals))
  })
}