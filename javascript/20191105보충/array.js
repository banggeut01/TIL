// 잘 봐야함! pdf 배열도 보기! 직접 써보기!
const numbers = [1, 2, 3, 4]

console.log(numbers.length)
console.log(numbers[-2]) // undefined

console.log(numbers.reverse()) // 원본도 변경시킴! [4, 3, 2, 1]
numbers // [4, 3, 2, 1]

console.log(numbers.push(100)) // 배열의 길이를 리턴!
console.log(numbers.pop()) // 100 리턴! (배열의 마지막 요소 제거 후 return)
console.log(numbers.shift()) // 4 ( 배열의 첫번째 요소 제거 후 return, pop()이랑 반대)
console.log(numbers)
console.log(numbers.unshift(100)) // 배열의 첫번재 요소로 값 추가, 길이를 리턴!
console.log(numbers)
console.log(numbers.includes(1)) // 값이 있으면 true, 없으면 false

const numbers2 = [1, 2, 3, 4, 'a', 'a']
console.log(numbers2.indexOf('a')) // 4 => 처음 찾은 요소의 index(중복이 있어도 처음 찾은 요소의 index)
console.log(numbers2.indexOf(100)) // -1 찾고자 하는 요소가 없으면 -1

console.log(numbers2.join()) // 1,2,3,4,a,a
console.log(numbers2.join('')) // 1234aa
console.log(numbers2.join('-')) // '1-2-3-4-a-a' 

