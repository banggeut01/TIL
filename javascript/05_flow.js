let userName = prompt('넌 누구니?')

let message

if (userName === 'ssafy') {
    message = '<h1>Hello SSAFY</h1>'
} else if (userName === '1q2w3e4r') {
    message = '<h1>Admin page입니다.</h1>'
} else {
    message = `<h1>${userName}님 환영합니다.</h1>`
}

document.write(message)

switch(userName) {
    case '1q2w3e4r': {
        message = '<h2>관리자님 충성충성 ^^7</h2>'
        break
    }
    case 'ssafy': {
        message = '<a href="https://edu.ssafy.com">싸피</a>'
        break
    }
    default: {
        message = `<h1>${userName} 환영합니다.</h1>`
        break
    }
}


document.write(message)

/*
    * 반복문
    var는 함수스코프를 가지고 있어서 for문 이후에 i변수에 값이 유지.
    let은 블록스코프를 가지고 있어서 for문 이후에 해당 변수는 없음.
*/

for (let i=0; i<3; i++) {
    console.log(i)
}
// console.log(i) // ReferenceError, let 블록 스코프
for (var i=0; i<3; i++) {
    console.log(i)
}
console.log(i) // 3 출력, var 함수 스코프 

let myArray = ['태우', '경호', '은비']
for (let name of myArray) {
    document.write(name) // console.log(name)
}