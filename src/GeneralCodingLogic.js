// General Coding logic with JavaScript
import axios from 'axios'

// 1. function returns index of first matching element in an array
function firstIndexOfElementInArray(element, array) {
  let result = -1

  for (let i = 0; i < array.length; i++) {
    // ********* answer *********
    if (array[i] === element) {
      return i
    }
  }

  return result
}

// 2. Select the line of code that completes the function
function map(array, method) {
  let resultArray = []

  array.forEach(element => {
    // Call the method on the object
    const value = method(element)

    // ********* answer *********
    resultArray.push(value)
  });

  return resultArray
}

// 3. What is the value of the variable y after the following code runs?
function sortArray() {
  let x = ['1', '2', '15', '-7', '300']
  let y = x.sort()

  return y

  // ********* answer *********
  // ['-7', '1', '15', '2', '300']
}

// 4. Function recursively reverses a string
function recursiveStringReverse(string) {
  if (string.length <= 1) {
    return string
  }

  let firstChar = string.charAt(0)
  let lastChars = string.slice(1)

  // ********* answer *********
  return recursiveStringReverse(lastChars) + firstChar
}

// 5. what is the value of the variable tree after the following code runs?
function buildWordTreeFromSentences(sentenceList) {
  let root = {}
  sentenceList.forEach(sentence => {
    let base = root
    sentence.split(' ').forEach(word => {
      if(base[word] === undefined) {
        base[word] = {}
      }
      base = base[word]
    })
  })

  return JSON.stringify(root)

  // ********* answer *********
  // {"Hello":{"world":{},"there":{}}}
}

// 6. what is the value of the variable names after the following code runs?
function deleteBlankItems(items) {
  for (var i = 0; i < items.length; i++) {
    if(items[i].length == 0) {
      // remove 1 element at index i
      // modifies array in place
      items.splice(i, 1);
    }
  }

  // ********* answer *********
  // Rachel Meghana Tim
}

// 7. The following code attempts to detect whether an array contains positive and negative
// numbers in a single pass. which test input would reveal a bug by producing incorrect output?
function hasPosNeg(array) {
  let hasPos = false
  let hasNeg = false

  array.forEach(num => {
    hasPos = num > 0
    hasNeg = num < 0
  })

  return JSON.stringify([hasPos, hasNeg])

  // ********* answer *********
  // [-1, 0, 1]
}

// 8. what does the following code output?
function func(a, b) {
  a += 1
  b.push(1)

  // ********* answer *********
  // 0, [1]
}

// 9. what is the value of g after the following code block runs?
const f = n => n <= 1 ? 1 : n * f(n - 1)
  // ********* answer *********
  // 24

// 10. What is wrong with the following code?
function findFirstPosition(arr, fn) {
  let pos = false;
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i]
    for (let j = 0; j < row.length; j++) {
      if (fn(row[j])) {
        pos = [i, j];
        break;
      }
    }
  }

  return pos;
  // ********* answer *********
  // j is going to be returned incorrectly. it will always be the length of the row
}

// 11. what does the following code output?
const promises = [3, 2, 1].map(d => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve(d)
    }, d * 1000)
  })
))

Promise.race(promises).then(val => {
  console.log(val)
})
  // ********* answer *********
  // 3

// 12. what does the following code do?
function questiontwelve(func, items) {
  let i = 0
  for (let item of items) {
    if (func(item)) {
      items[i] = item
      i += 1
    }
  }

  items.splice(i)

  return items
  // ********* answer *********
  // Filter a sequence in-place for items which satisfy a predicate
}

// 13. the following code implements a random sample of items in a single pass.
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function sample(items, n) {
  let result = []
  items.forEach((item, i) => {
    if (i < n) {
      result.push(item)
    } else {
      let j = randInt(0, i) // random integer, inclusive
      if (j < n) {
        // ********* answer *********
        result[j] = item
      }
    }
  })

  return result
}

// 14. what is wrong with the following code snippet? fs-file reader
// const fs = require('fs').promises
// async function fileOpener(filepath) {
//   let file
//   try {
//     file = await fs(filepath)
//     let data = file.read()
//   } finally {
//     file.close()
//   }
// }

// ********* answer *********
// Not all bytes from the file are read

// 15. Given objects with name and date fields, the task is to sort the objects alphabetically by
// name, using most recent date as a tie-breaker. using the provided sortBy() method, which call(s)
// to a stable sort method would implement this correctly?
function sortBy(array, prop) {
  return array.sort((a, b) => {
    if(a[prop] < b[prop]) return -1
    if(a[prop] > b[prop]) return 1

    return 0
  })
}

function App() {
  // 6
  let names = ['Rachel', '', 'Meghana', '', '', 'Tim']

  // 8
  const a = 0
  const b = []

  // 15
  const objs = [{date: '2020', name: 'c'}, {date: '2020', name: 'a'}, {date: '2021', name: 'b'}]
  // ********* answer *********
  const sorted = sortBy(sortBy(objs, 'name'), 'date').reverse()

  return (
    <div className="App">
      <h1>1. function returns index of first matching element in an array</h1>
      <h4>{firstIndexOfElementInArray(1, [3, 4, 1, 2])}</h4>

      <h1>2. Select the line of code that completes the function</h1>
      <h4>{map([1, 2, 3], (el) => el)}</h4>

      <h1>3. What is the value of the variable y after the following code runs?</h1>
      <h4>{sortArray()}</h4>

      <h1>4. Function recursively reverses a string</h1>
      <h4>{recursiveStringReverse('Hello world')}</h4>

      <h1>5. what is the value of the variable tree after the following code runs?</h1>
      <h4>{buildWordTreeFromSentences(['Hello world', 'Hello there'])}</h4>

      <h1>6. what is the value of the variable names after the following code runs?</h1>
      <h4>{deleteBlankItems(names)}</h4>
      <h4>{names}</h4>

      <h1>7. has pos neg</h1>
      <h4>{hasPosNeg([-1, 0, 1])}</h4>

      <h1>8. what does the following code output?</h1>
      <h4>{func(a, b)}</h4>
      <h4>{a}{b}</h4>

      <h1>9. what is the value of g after the following code block runs?</h1>
      <h4>{f(4)}</h4>

      <h1>10. What is wrong with the following code?</h1>
      <h4>{findFirstPosition([[1, 1, 1], [2, 2, 2], [3, 3, 3]], el => el)}</h4>
      <h4>j is going to be returned incorrectly. it will always be the length of the row</h4>

      <h1>11. What is wrong with the following code? (promoise)</h1>
      <h4>3</h4>

      <h1>12. what does the following code do?</h1>
      <h4>Filter a sequence in-place for items which satisfy a predicate</h4>

      <h1>13. the following code implements a random sample of items in a single pass.</h1>
      <h4>{sample([3, 4, 6, 1], 3)}</h4>

      <h1>14. file opener</h1>
      <h4>Not all bytes from the file are read</h4>

      <h1>15. sortBy array and props</h1>
      <h4>{JSON.stringify(sorted)}</h4>

      <div style={{ display: 'flex' }}>
        <div className='elem1'/>
        <div className='elem2' />
      </div>
    </div>
  );
}

export default App;
