// const test = {
//   name: 'ssafy',
//   'class number': '123456789', // key가 여러 단어 일 때는 문자열로 작성
//   'class_number': '000000000',
//   products: {
//     ipad: '2019',
//     iphone: '11 pro',
//     macbook: '2019 pro'
//   }
// }

// // 안되는 것 잘 보기 ! 
// test.name
// test['name']
// test.class number // 불가능
// test['class number'] // key가 여러 단어 일 때 반드시 []로 접근
// test.class_number // 불가능

let brands = ['Apple', 'Samsung']
let products = {
  'phone': ['iphone', 'galaxy'],
  'laptop': ['macbook', 'series9']
}

const shop = {
  brands, // brands: brands (key, value가 같으면 value 생략 가능!)
  products: products
}

// JSON javascript object notation 자바스크립트 오브젝트 표기법, key-value 형태
// 자바스크립트 객체 !== JSON (같지는 않다! 쓰려면 parsing 작업 필요!)

// Object => String
const jsonData = JSON.stringify({ // JSON -> String
  coffee: 'Latte',
  iceCream: 'Mint'
})
console.log(jsonData) // {"coffee":"Latte","iceCream":"Mint"}
console.log(typeof jsonData) // string

// String => Object
const parseData = JSON.parse(jsonData)
console.log(parseData) // { coffee: 'Latte', iceCream: 'Mint' }
console.log(typeof parseData) // object

/* obejct vs JSON 
  object
    JS이 KEY-VALUE  형태의 자료구조

  JSON
    데이터를 표현하기 위한 단순 문자열
*/