const word = `hello
ssafy` // \n

console.log(word)

// template literal
const age = 10
const message = `hello, ${age}
bye`
// 문자열끼리 -, * , / 안됨! +는 가능!
console.log(message)

undefined
null // 대문자 아님 주의!

// undefined
// 값이 없을 경우 JS가 자동으로 할당해주는 값

// null
// 자동으로 부여하진 않음 값이 없음을 우리가 표현하기 위해서 인위적으로 사용하는 값

// 담????담????담다디 담???담??? 담?????????담다디담다디담다디담~

// 동등연산자 ==, != (예기치 않은 연산할 수 있으므로 권장하지 않음!, 자동으로 형변환후 비교 '1'과 1은 같음!)
// 일치연산자 ===, !==

console.log(3 * null) // 0, null은 0으로 환산
console.log('6' - 1) // 5
console.log('6' + 1) // 61 
console.log('six' * 3) // NaN, Not a Number

// 논리 연산자 (잘 알아두기!)
// and &&
// or ||
// not !

console.log(!true)

// 삼항 연산자
// 값 ? true : false
console.log(true ? 1 : 2) // 1
console.log('ssafy' ? 'class' : 'awesome') // class
const result = 'ssafy' ? 'class' : 'awesome'
console.log(result)

