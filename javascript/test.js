// function sum (x, callbackfn) {
//     setTimeout(callbackfn, 1000, x+1)
// }

// var result = 0

// sum(2, function(x) {
//     result = x
//     console.log(result) // 3
// })

// console.log(result) // 0

// const array = [1, 2, 3]
// console.log(typeof(array))

// const greeting = function(message) {
//     return `${this.name} : ${message}`
// }
// const you = {
//     name: 'Yu',
//     greeting,
//     bye() {
//         return 'bye'
//     }
// }
// you.greeting('hi') // Yu : hi
// you.name = 'Jane'
// you.greeting('hello') // Jane : hello
// you.bye() // bye


// const myFunc2 =  name => {
//     console.log('happy hacking')
//     console.log(`welcome, ${name}`)
//     }
    
const num = 1
let square = num => console.log(num)
square(num) 