// 1. Consider the following JavaScript code

const a = (function() {
  return parseInt('1.5')
})()
// answer Number

// 2. what is wrong with the following JavaScript code?

const testString = 'hello world';
const isAllCaps = false;
if (testString === testString.toUpperCase()) {
  isAllCaps = true;
}
// const isAllCaps should be replaced let isAllCaps

// 3. Consider the following JavaScript code: - what is a possible output on the console?
let p1 = new Promise((resolve, reject) => {
  resolve('foo')
})
let p2 = new Promise((resolve, reject) => {
  reject('bar')
})
console.log('bip')

p1.then(val => {
  console.log('----', val)
  return p2
})
.then(val => {
  console.log('baz')
})
.catch(err => {
  console.log(err)
})
console.log('bop')
// bip, bop, foo, bar

// 4. what is wrong with the following ES6 code?

class MyList extends Array {
  constructor(someArg) {
    this.someArg = [...someArg]
  }
}
let theList = new MyList('foo')
// super() needs to be called in the constructor

// 5. what is the value of a after this code runs?
function foo(obj) {
  return {
    a: obj.bar,
    b: obj.baz
  }
}

const { a } = foo({ bar: 27, baz: 41 })
// 27

// 6. what is output to the console?
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100);
}
// 5, 5, 5, 5, 5

// 7. what is the value k after the following JavaScript code runs?
// let i = 3;
let j = 4;
let k = 1;
for (let i = 0; i < 3; i++) {
  k += j;
  j = j - 1
}
console.log(k)
// 10

// 8. You are building a social media product with users and followers. Consider the following code;

class User {
  constructor(username, tags) {
    this.username = username;
    this.tags = tags;
    this.followers = [];
  }

  addFollower(user) {
    this.followers.push(user);
  }

  getFollowers(tag) {
    // answer
    return this.followers.filter(
      follower => follower.tags.filter(
        followerTag => tag === followerTag
      ).length > 0
    )
  }
}

// 9. 