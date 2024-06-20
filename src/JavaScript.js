// 1. What is the value of arr after this code runs?
function tryCatch () {
  const arr = []
  try {
    arr.push('try')
    throw new Error()
  } catch (e) {
    arr.push('catch')
  } finally {
    arr.push('finally')
  }

  // - answer -
  // ['try', 'catch', 'finally']
}

// 2. Which data serialization format can Javascript parse natively?

  // - answer - 
  // JSON

// 3. What is the output of this program?
function mySetTest () {
  const mySet = new Set()
  mySet.add(1)
  mySet.add(1)
  mySet.add('a')
  mySet.add('a')
  mySet.add(undefined)
  mySet.add(undefined)
  mySet.add({ prop: true })
  mySet.add({ prop: true })

  // - answer -
  // 5
}

// 4. What is logged when the function 'second' runs?
function LogTest () {
  let x = 'fog'
  function first () {
    console.log(x)
  }

  x = 'dog'
  function second () {
    let x = 'log'
    first()
  }

  // - answer -
  // dog
}

// 5. What is the output of the following program?
function ObjectTest () {
  const obj = { prop: 1 }
  console.log(obj.prop)

  Object.defineProperty(obj, 'prop', {
    writable: false,
    value: 2
  })
  console.log(obj.prop)

  obj.prop = 3
  console.log(obj.prop)

  // - answer -
  // 1, 2, TypeError: cannot assign to read only property 'prop' of object '#<object>'
}

// 6. What is the outpout of the following program?
function myFunction(y1, y2, ...y3) {
  const [x1, ...[result]] = y3

  // - answer - 
  // lizard
}

// 7. Which of the following does NOT create a valid function?
// function double = () => return x*2

// 8. What is the outpout of this program?
function* gen1() {
  console.log(yield 1)
  console.log(yield 2)
  console.log(yield 3)
}

const iterator = gen1()
// - answer -
// 1, b, 2, c, 3, a

// 9. This code does not throw an error, even though a variable is not explicitly declared.
// Which of these actions will make this code throw a JavaScript reference error?

function GreenTest() {
  try {
    let green;
    // grnee = false
    // console.log(grnee)  
  } catch (e) {
    console.log(e)
  }

  // - answer -
  // Put this code inside of a try-catch statement.
}

// 10. You are implementing a First In First Out (FIFO) Queue. Choose the Queue implementation such that the output of the code snippet below is true.
// - answer -
function Queue() {
  const backingArray = []
  return {
    enqueue: backingArray.push,
    dequeue: backingArray.shift
  }
}

const myQueue = Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
const r1 = myQueue.dequeue() === 1
const r2 = myQueue.dequeue() === 2

// 11. Below is the definition of an array, myArray. Note that myArray has a custom property.
function ArrayTest () {
  let myArray = [1, 2]
  myArray.customProperty = true

  // - answer -
  for (const index in myArray) {
    const element = myArray[index]
    console.log(element)
  }
}

// 12. Function apiCall takes 50ms to asynchronously return the string 'b', in what order do these letters log to the console?
async function apiCall () {
  return new Promise(resolve => {
    setTimeout(() => { resolve('b')}, 50)
  })
}

async function logger() {
  setTimeout(() => console.log('a'), 10)
  console.log(await apiCall())
  console.log('c')
}
// - answer -
// 'a', 'b', 'c'

// 13. You are trying to discover the best recipe for brewing coffee. Below is an array of trials with ratings. water and coffee are both measures of the mass of the water and coffee used,
// respectively. rating is score of how much you liked that brew. The ratio of the coffee to water is important, and it is calculated simply as coffee/water.
// Choose the implementation of calcAverageRating() that calculates the average rating for trials within a rang of ratios. The range is provided by the isRatioInRange predicate
const trials = [
  { water: 250, coffee: 15, temp: 96, rating: 4.5 },
  { water: 240, coffee: 14, temp: 98, rating: 3.7 },
  { water: 247, coffee: 14.5, temp: 94, rating: 4.2 },
  { water: 261, coffee: 16, temp: 99, rating: 3.4 },
  { water: 255, coffee: 13.5, temp: 93, rating: 2.7 },
  { water: 250, coffee: 17, temp: 94.5, rating: 3.1 }
]

const isRatioInRange = ratio => ratio >= 0.055 && ratio <= 0.06
const averageRating = calcAverageRating(trials, isRatioInRange)

// - answer -
function calcAverageRating(trials, isRatioInRange) {
  return trials.map(trial => (trial.coffee / trial.water))
  .filter(isRatioInRange)
  .reduce((accum, current, index, array) => (
    accum + (current / array.length)
  ), 0)
}

// 14. What is the outpout of the following program?
function ArrayLength () {
  const myArray = new Array(2)
  myArray[1] = 1
  myArray[3] = 3

  console.log('Length:', myArray.length)

  console.log('Elements:')
  for (const element of myArray) {
    console.log('\t', element)
  }

  // - answer -
  // length: 4, undefined, 1, undefined, 3
}

// 15. Suppose that there is a variable named TEST_ENV that is only declared in your test environment.
// In your production environment the TEST_ENV variable is never declared. 
// Choose the answer that logs to the console in your test environment and does not produce any errors in your production environment.

// - answer -
if (typeof process.env.REACT_APP_TEST_ENV !== undefined) {
  console.log('This is test')
}

function JavaScriptTest () {
  const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  return (
    <div>
      {/* <p>{ArrayLength()}</p> */}
    </div>
  )
}

export default JavaScriptTest
