# Vue 정리

* [vue_directive.html](./vue_directive.html)

  * for, if문

  * **v-model 쓰고 싶으면, data 내에 초기화 반드시 필요하다.**

    ```
    vue.js:634 [Vue warn]: Property or method "userText" is not defined on the instance but referenced during render.
    ```

  * 반응형

    * v, v-model

  * 속성값은 v-bind이다.

  * Method 정의

  * v-on

    * v-on 단축어 @

* 디렉티브

  * `v-bind`: HTML 속성 갱신
  * `v-on`: 이벤트 핸들링

* 새로 고침할 때 초기화 되지 않도록 local에 저장하기

  ```js
  myObj = {name:'tak'}
  JSON.stringify(myObj) // 문자열 형태로 변환, object-> JSON
  jsonData = JSON.stringify(myObj)
  JSON.parse(jsonData) // JSON을 object로
  localStorage.setItem('me', jsonData) // 로컬에 저장
  ```




# 폼 입력 바인딩

[링크](https://kr.vuejs.org/v2/guide/forms.html)

* `v-on` 을 사용(이벤트 리스너같이) 하지 않고도, data를 변경할 수 있음.

  * `v-model`: `message`에 binding
  * 만약 `data`에 `message`를 초기화하지 않으면 error

  ```html
  <body>
    <div id="app">
      <input v-model.trim="message" type="text"><br> <!-- trim 앞뒤 공백 제거 -->
      <input v-model.number="number" type="number"> <!-- .number 형변환 -->
    </div>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '',
          number: 0 // 문자열로 바인딩
        }
      }) 
    </script>
  </body>
  ```

  

# 컴포넌트

- [간결한 todo html](./03_todo2.html)

  - 사용자 입력 받고 버튼 누르면,

    - todos 변수에 추가(addTodo)

  - 각 todo 들에게 삭제 버튼

    - 해당 todo 삭제(removeTodo)

  - 컴포넌트

    - [공식문서](https://kr.vuejs.org/v2/guide/components.html)
    - 재사용성
    - 반복되는 작업들, 내용들을 정의해놓고 가져다 쓸 수 있음
    - 데이터는 반드시 함수여야한다.
      - object 리턴!
    - 컴포넌트는 부모-자식 관계를 가진다.
      - app -> todo-list 
      - 부모->자식 방향으로 데이터를 전송할 때 props를 사용해야한다.
      - 자식 -> 부모로 데이터 전송할 때 이벤트 사용해야 한다.
      - vuex
        - [링크](https://vuex.vuejs.org/kr/)
        - 데이터를 중앙에 모아놓고 뿌려준다.

  - props

    - 하위컴포넌트로 데이터 전송 + 검증

    - 하위에 있는 데이터를 상위로 올리고 싶을 때 

      이벤트 사용해야한다.

      ```js
      props: ['category'],
      ```

      

    - Prop도 검증할 수 있다.

      - 타입 명시해주기

      ```js
      props: {
        category: String,
        required: true // 항상 필요하다.
      },// 하위컴포넌트로 데이터 전송 + 검증
      ```

  - 싱글 파일 컴포넌트

    - 자바스크립트는 모듈이라는 개념이 없다.
      - 모듈 EX) 파이썬 - from a import b
    - webpack : 자바스크립트 모듈화해줌. 하나의 자바 스크립트 파일로 만들어줌.
      - 모듈 번들러 : 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 라이브러리

    * npm: node package manager. python의 pip 같은 역할. `node`먼저 깔아야함.

      * node: 자바 스크립트 런타임

      ```shell
      $ npm init # enter 계속
      ```

      * 비어있는 `package.json` 생성

    * vue, webpack 설치

      ```shell
      $ npm install vue
      ```

      ```shell
      $ npm install webpack webpack-cli -D
      # D 옵션 : 개발버젼에서만 사용
      ```

      * webpack은 개발환경에서 모듈 번들러로써 활용하기 위한 것이므로 `-D` 옵션을 사용해 `package.json`에서  `devDependences`에 추가

    * `package.json`(python에서 requirement.txt와 같은 역할), `package-lock.json`(상세 파일) 생성된다.

    * `webpack.config.js` 파일 만들기

      ```js
      // webpack 설정
      const VueLoaderPlugin = require('vue-loader/lib/plugin')
      const path = require('path')
      
      module.exports = {
          mode: 'development', // vue에서 개발자 도구 쓰게 해줌 
          // 여러개의 파일을 읽어오기
          entry: {
              app: path.join(__dirname, 'src', 'main.js') // src에 있는 main.js
          },
          // 관련된 모듈
          module: {
              rules: [
                  {
                      test: /\.vue$/, // .vue 확장자는
                      use: 'vue-loader', // 모두 vue-loader로 번역을 해라
                  }
              ]
          },
          plugins: [
              new VueLoaderPlugin() // vue loader가 가지고 있는 plugin을 불러오겠다.
          ],
          // 최종 결과 (.js)
          output: {
              filename: 'app.js',
              path: path.join(__dirname, 'dist') // 결과를 이 경로로 던져줘!
          }
      }
      ```

    * src 폴더 > main.js 생성

      ```js
      import vue from 'vue' // vue 자체를 불러옴
      import App from './App.vue' // 내가 만든 vue 파일
      
      new Vue({
          el: '#app', 
          // 렌더링
          render: function(createElement) {
              createElement(App)
          }
      })
      ```

    * src > App.vue 생성

      ```vue
      <!-- 기본 구조 --> 
      <template>
          <h1> 이게 싱글파일컴포넌트, 최상위 컴포넌트입니다. </h1>
      </template>
      <script>
      export default {
      
      }
      </script>
      <style lang="">
      
      </style>
      ```

# Vue 개발환경

## 1. vue 파일

```shell
$ npm install vue-loader vue-template-compiler -D
```

- vue-loader: vue 파일을 불러오는 역할
- vue-template-compiler: 해석하는 역할

## 2. style

```shell
$ npm install vue-style-loader css-loader -D
```

* vue-style-loader: vue의 style
* css-loader: webpack css 불러오는 로더

# npm install -g @vue/cli

✨ ⚙ ? 🚀 📦  ⚓ 📄 🎉 👉

# vue create {프로젝트 이름}

enter

*  default (babel, )

cd todo-vue-cli

npm run serve => 액세스 허용

# Youtube 기능 구현하기

```
$ vue create youtube
```

youtube 폴더에서 서버 실행해봄

```
$ npm run serve
```

* extension : `Vue 2 Snippets`, `vetur`

## 컴포넌트 구조

```
App
  |----SearchBar
  |----VideoList
  				|----VideoListItem
  |----VideoDetail
```

## `SearchBar`

* [코드]() 

* `SearchBar`에서 `App`으로 검색어(input값) 전달해야한다.
* `App`은 Youtube API에 검색어로 요청 후 video를 `Videolist`, `VideoListIemp`으로 전달

* `v-model`을 사용하는 대신 input값이 변경될 때마다 onInput함수 실행

  ```html
  <input @change="onInput" type="text"> 
  ```

* 콘솔로 입력값 확인

  * `package.json` 에 rules 옵션 추가해줌

  * console.log 활용 가능한 옵션

    ```
        "rules": {
          "no-console": "off" 
        },
    ```

* 상위 컴포넌트로 데이터 전송하기 - 이벤트 발생

  * Cf) 상위 -> 하위 컴포넌트 데이터 전송시엔 props를 사용한다.

  ```js
  methods: {
          onInput(event) {
              console.log('==SearchBar==')
              console.log(event.target.value)
              // $emit(이벤트이름, 값) : 커스텀 이벤트 발생
              // 이벤트이름의 이벤트를 발생 시킴(트리거)
              this.$emit('input-change-event', event.target.value)
          }
      }
  ```

  * 부모 컴포넌트 App.vue에 추가

    ```vue
    <template>
      <div id="app">
        <Search-bar @input-change-event="onInputChange"></Search-bar> <!-- 출력 -->
      </div>
    </template>
    ```

## youtube api

[구글 개발자 콘솔](https://console.developers.google.com/)

프로젝트 만들기 > 라이브러리 > 'youtube data v3' 클릭 > 사용 설정 > Create Credentials

youtube data api v3, 웹브라우저(js), 공개데이터 체크 후 파란 버튼

api 키 복사 후 완료

---

[youtube api 공식 문서](https://developers.google.com/youtube/v3/getting-started?hl=ko)

왼쪽 메뉴에서 Freebase 주제로 검색 클릭 > 

### axios 쓰기

> CDN 대신 npm으로 쓰기

```
$ npm install axios
```

```vue
<script>
import axios from 'axios'
...
export default {
    ...
    methods: {
        onInputChange(value) {
          console.log('==App==')
          console.log(value)
          axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: API_KEY,
              part: 'snippet', 
              q: value
            }
          }).then(response => {
            console.log(response)
          })
        }
      }
    }
}
```

## `VideoDetail`

* `VideoListItem`에서 (li태그)클릭하면 `VideoDetail`에서 동영상을 보여줌
* VideoListItem -> VideoList -> VideoDetail 로 데이터 보내야 함

## App - SearchBar

* input 태그에 등록된 이벤트 (@input)

* trigger : input 값이 변경 되면, 
* 인자로 `event`
* `onInput` method 실행

---

* search-bar 컴포넌트에 등록된 이벤트(@input-change-event)

* trigger : `$emit` 메서드 실행되면, (자식 컴포넌트)
* 인자로 `event.target.value`
* `onInputChange`실행