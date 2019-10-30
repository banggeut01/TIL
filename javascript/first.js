console.log('Happy!')

// var
console.log(a) // undefined => NULL
var a = '변수' // 재할당 o, 재선언 o
// 변수 hoisting(호이스팅: "끌어올린다") 
// : 해당 스코프 범위 내에서 최상단에 변수의 선언을 함.
// var a
// console.log(a)
// a = '변수'

// let (ES6+)
console.log(b) // Error : Reference error!
let b = '변수' // 재할당 o, 재선언 x

// const (ES6+)
const c = '상수' // 재할당 x, 재선언 x
c = '다른 값' // 재할당 => type error
const c = '다른 상수' // 재선언 => syntax error
const tak // syntax error

// let, const vs var
// 재선언 x    vs 재선언 o
// 블록 스코프  vs 함수 스코프
var outerVar = '밖'
if (true) {
    var outerVar = '안'
    console.log(outerVar)
}
console.log(outerVar)
// 결과 안 안

let outerVar = '밖'
if (true) {
    let outerVar = '안'
    console.log(outerVar)
}
console.log(outerVar)
// 결과 안 밖