// find
// 조건에 맞는 인덱스가 아니라 요소 자체를 찾고 싶을 때 사용

const PEOPLE = [
  { id: 1, admin: false },
  { id: 2, admin: true },
  { id: 3, admin: false },
]

const admin = PEOPLE.find(function(person) {
  return person.admin === false
})

console.log(admin) // 첫번째 요소만 출력됨!

const admin2 = PEOPLE.find(function(person) {
  return person.admin === 1
})
console.log(admin2) // undefiend 없는 값 찾을 때! 

// some & every (boolean을 리턴)
// some : 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true를 return / 찾지 못하면 false / or 연산과 유사
// 빈 배열 일 때 - false (외우기)
// every : 배열의 모든 요소가 조건에 맞아야 true / 그렇지 않다면 false / and 연산과 유사
// 빈 배열 일 때 - true

// some - 하나라도 !
const arr = [1, 2, 3, 4, 5]
const result = arr.some(elem => elem % 2 === 0)
console.log(result) // true
// every - 모든 !
const result2 = arr.every(elem => elem % 2 === 0)
console.log(result2) // false

const name = '태수'
console.log(`집에 가고 싶다!!!!!!!
얼른 자고 싶다
배고프다!
${name} 술찌질이~~~~~~
에베레베레베베레`)

console.log(typeof(-Infinity)) // 음의 무한대 표현 -Infinity