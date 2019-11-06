// 변수 선언 키워드 사용 안하면 함수/블록안에서 선언되더라도 무조건 전역변수 취급!
function myFunction1 () {
    for( p=0; p < 1; p++) {
    console.log(p) // 0
    }
    console.log(p) // 1
}
myFunction1()
console.log(p) // 확인 1
console.log(window.p) // 확인 1

// 블록 스코프 - let, const
for(var j=0; j < 1; j++) {
    console.log(j) //0
    }
console.log(j) // 확인 1
for(let i=0; i<1; i++) {
    console.log(i) // 0
}
// console.log(i) // error referenceError 
// 함수 스코프 - var
const myFunction = function () {
    for(var k=0; k < 1; k++) {
        console.log(k) // 0
    }
    console.log(k) // 확인 1
}
myFunction()
// console.log(k) // 확인 error referenceError 

/*
typeof(true)
"boolean"
typeof(null)
"object"
typeof(undefined)
"undefined"
typeof(Infinity)
"number"
typeof(0/0)
"number"
typeof(100/0)
"number"
typeof('asf')
"string"
typeof({'name': 'park'})
"object"
*/

const numbers = [1, 2, 3, 4]
undefined
numbers[0]
1
numbers[-1]
undefined
numbers.length
4
numbers.reverse()
(4) [4, 3, 2, 1]
numbers
(4) [4, 3, 2, 1]
numbers.push('a') // 오른쪽에서 삽입
5
numbers
(5) [4, 3, 2, 1, "a"]
numbers.unshift('a') // 왼쪽에서 삽입
6
numbers
(6) ["a", 4, 3, 2, 1, "a"]
numbers.shift() // 왼쪽에서 삭제
"a"
numbers
(5) [4, 3, 2, 1, "a"]
numbers.pop() // 오른쪽에서 삭제
"a"
numbers
(4) [4, 3, 2, 1]