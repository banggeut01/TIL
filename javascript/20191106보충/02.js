// map 과 filter는 원본을 변경하지 않는다.
const numbers = [1, 2, 3]
var tripleNumbers = []

// for문으로
for (var i=0; i<numbers.length; i++) {
  tripleNumbers.push(numbers[i] * 3)
}
console.log(tripleNumbers)

// map으로
const tripleNumbers2 = numbers.map(number => number * 3) // return
console.log(tripleNumbers2)

//
const newNumbers = [9, 16, 25]
const root = newNumbers.map(Math.sqrt) // Math.sqrt 제곱근 "리턴"하는 함수!
console.log(root)

// 
const BRANDS = ['Marvel', 'DC']
const MOVIES = ['SpiderMan', 'BatMan']

// 출력
/* 
[ {name: 'Marvel', hero: 'SpiderMan'},
  {name: 'DC', hero: 'BatMan'}]
*/
const RESULT = BRANDS.map( function(x, i) {
  return { // return 이 객체
    name: x, hero: MOVIES[i]
  }
})
console.log(RESULT)

const RESULT2 = BRANDS.map( (x, i) => ({ name: x, hero: MOVIES[i] })) // return이 객체일 때 return을 지우려면 소괄호 써야함!
console.log(RESULT2)

