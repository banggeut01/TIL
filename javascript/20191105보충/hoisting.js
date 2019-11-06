// 1. var x  선언이 최상단     선언 + 초기화(undefined)
console.log(x) // undefined 2. 에러가 안남
var x = 10 // 3. x = 10 여기서 할당
console.log(x) // 10


// let, const도 hoisting 된다!!!!!!!!! 할당 과정때문에 차이가 생겨남!
// 1. let y  선언
// console.log(xx) // 참조 error -> 초기화 전에 참조하려 해서. 
let xx = 10 // 
console.log(xx)

/*
  var 할당 과정
  1. 선언 + 초기화 (동시 진행)
  2. 할당

  let 할당 과정
  1. 선언
  2. TDZ (시험에는 안나옴!) 임시적 사각지대
  3. 초기화
  4. 할당
*/

if (z !== 1) {
  console.log(y) // undefined
  var y = 3
  if (y === 3) {
    var z = 1
  }
  console.log(y) // 3
}
if (z === 1) {
  console.log(y) // 3
}