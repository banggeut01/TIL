const me = {
    name: 'kim',
    'phone number': '010-5325-3683',
    phone: {
        type: 'iphone X',
        color: 'black'
    },
    // 메서드 function 키워드만 작성하자!
    greeting: function() {
        console.log(this) // me. this는 me object
        console.log(`hi ${this.name}`) // greeting() : hi kim. 
    },
    greeting2: () => { // arrow function 쓰지 못했다.
        console.log(this) // 전역 객체인 window. this는 상위 object
        console.log(`hi ${this.name}`) // greeting2() : hi. 
    }
}
/*
    var name = 'kim'
    window.name // kim
    var는 window 객체
*/

console(me.name)
console(me['name'])
console(me.phone.type)

// ES6+ 오브젝트 리터럴
let book = '자바스크립트 완전 정복'
let albums = {
    IU: ['좋은날', '밤편지'],
    BTS: ['작은것들을 위한 시']
}

let bag = {
    book, 
    albums
}


// JSON 데이터를 파이썬으로 받으면 dictionary 형태로 parsing
// import json
// json dumps

// JSON (Javascrip object notaion - 자바스크립트 오브젝트 표기법)
// 자바스크립트 오브젝트 표기법을 가진 문자열이다. -> 원하는 환경에서 parsing해서 사용할 수 있다. (JS-object, array, python-dictionary 등))
// object -> JSON
let jsonData = JSON.stringify(me)
let myObject = JSON.parse(jsonData)