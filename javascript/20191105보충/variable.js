// let
// 선언은 한번만 가능
// 재할당은 가능
let x = 1
// let x = 2 // already been declared
x = 3
console.log(x)

// const
// const 선언시에 초기값을 생략하면 에러 발생
// const SAMPLE
// 재선언 & 재할당 불가능

const SAMPLE = 7

// SAMPLE = 10

// var SAMPLE = 20
// let SAMPLE = 20

if (SAMPLE === 7) {
  const SAMPLE = 20
  console.log(SAMPLE) // 20
}
console.log(SAMPLE) // 7

// scope
function varFuc() {
  var x = 10
  if (true) {
    var x = 20
    console.log(x) // 20
  }
  console.log(x) // 20
}
varFuc()

function varFuc() {
  let x = 10 
  if (true) {
    let x = 20
    console.log(x) // 20
  }
  console.log(x) // 10
}
varFuc()

var z = 30

function get() { // 인자 받고 있는 것이 없음. 전역변수 z를 참조
  return z
}
var result = get(20) // 20은 의미가 없다.
console.log(result) // 30

///////////////////////////////////////////////////////////////
var y = 30

function get() {
  return y // var는 함수 스코프 이기 때문에 함수 안에 없으면 전역 변수를 참조함!
}

function set(value) {
  var y = value // 10
}

set(10)
var result = get(20)
console.log(result) // 30