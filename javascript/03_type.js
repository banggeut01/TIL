/*
    * 원시타입(primitive data type)
        - boolean
        - null
        - undefined
        - number
        - string
        - symbol (ES6+)

    * 객체타입(object)
        - object
*/
 
// number
3
-5
3.14
3.14e4
3.14e-4
Infinity
typeof Infinity 
NaN // Not a Number. ex: 0/0
0/0 // NaN
10/0 // Infinity

// string
let myName = '탁희'
myName = "탁\n희"
// `(backtick) : ES6+ 템플릿리터럴(템플릿리터럴에서 줄바꿈하면 그대로 출력된다.)
// string interpolation, 줄바꿈(개행)
myName = `탁
희`
console.log(`안녕하세요, ${myName}입니다.`) 

// boolean
true
false

// empty value
undefined // type -> undefined
null // type -> object
typeof null
typeof undefined