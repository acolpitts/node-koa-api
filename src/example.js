const name = 'Freddy'
typeof name === 'string'

if (!('serviceWorker' in navigator)) {
  // you have an old browser :-(
}

const greeting = 'hello'
console.log(`${greeting} world!`)
;[(1, 2, 3)].forEach(x => console.log(x))

const person = {
  name,
  age: 21,
}

console.log(person.name)

const {age} = person

console.log(age)
