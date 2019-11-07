// filter
const USERS = [
  { admin: false, name: 'harry'},
  { admin: true, name: 'justin'},
  { admin: false, name: 'kim'},
  { admin: true, name: 'park'},  
]

const filterUsers = USERS.filter( function(user) {
  // return user.admin === true
  return user.admin
})

console.log(filterUsers)

// reduce
// 하나의 결과만 나옴! 배열의 총합, 평균
// map은 배열의 각 요소를 변형하지만 reduce는 배열 자체를 변형
const NUMBERS = [100, 82, 70, 34]

// 두개의 매개 변수 1) 함수, 2) 초기값
const result = NUMBERS.reduce( (total, number) => total += number, 0)
console.log(result)
// 초기값 생략 가능. 첫번째 total: 100, number: 82
const result2 = NUMBERS.reduce( (total, number) => total += number)
console.log(result2)
// 평균
const result3 = NUMBERS.reduce( (total, number) => total + number) / NUMBERS.length
console.log(result3)

// 시험 
/* 
axios 잘 보기
post 두번째 인자!
*/