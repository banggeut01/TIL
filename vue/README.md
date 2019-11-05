해당 작업을 하는 함수를 인자로 받아서  나중에 저 함수를 부르자(callback)



우선 Promise object를 리턴한다.

나중에(작업이 끝나면) then/catch를 실행한다.

* Promise object 상태
  * pending -> 작업 진행중
  * resolved -> resolve 함수 호출(작업 성공시)
  * rejected -> reject 함수 호출(작업 실패시)
* resolve -> then에서 처리, reject -> catch에서 처리

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

* 새로 고침할 때 초기화 되지 않도록 local에 저장하기

  ```js
  myObj = {name:'tak'}
  JSON.stringify(myObj) // 문자열 형태로 변환, object-> JSON
  jsonData = JSON.stringify(myObj)
  JSON.parse(jsonData) // JSON을 object로
  localStorage.setItem('me', jsonData) // 로컬에 저장
  ```

  