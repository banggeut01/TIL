

DOM

Html 문서는 tree 구조로 연결되어 있음

노드들로 구성

html에서 마크업이 중요하다. (id, class 등)



BOM

브라우저 조작 (윈도우 너비 등)



콜백함수 개념

비동기 방식 개념



<details>

​	<summary>접기/펼치기</summary>



내용

</details>



blocking

자바스크립트는 논블로킹(Non-blocking)으로 동작한다.

자바스크립트 동작하는 engine은 싱글쓰레드로 동작한다.

싱글쓰레드 : 혼자 일을 한다. 둘이 동시에 일을 할 수 없음.

이게 가능한 이유는 싱글쓰레드 구조 때문

callstack, event queue, web API(AJAX, time)

비동기 -> 빠르다.

[이벤트 루프와 비동기](https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-이벤트-루프와-비동기-프로그래밍의-부상-async-await을-이용한-코딩-팁-다섯-가지-df65ffb4e7e)

```python
# python - blocking
from time import sleep
def sleep_3(): 
    sleep(3)
    print('잘잤다!') # 2

print('잔다') # 1
sleep_3()
print('학교가자!') # 3
```

```
잔다
잘잤다!
학교가자!
```

```js
function a() {
    console.log('a') 
}
console.log('hi') // 1.
a()
setTimeout(a, 3000) // 3.
console.log('bye') // 2.
```

```
hi
a
bye
a
```

[loupe 사이트](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

call stack, evenv quequ, web API 함수 순서 보기

* 이벤트 루프 : call stack, callback queue 확인하는 역할
  * call stack이 비어있으면, callback queue에서 call stack으로 이동
  * 이벤트(함수실행..)
  * tick(틱)

```js
function printHello() {
    console.log('Hellooo')
}

function baz() {
    console.log('baz') // 1.
    setTimeout(printHello, 3000) // 3. 비동기로 동작하는 함수
    console.log('baz end') // 2.
}

function bar() {
    console.log('bar')
    baz()
}

function foo() {
    console.log('foo')
    bar()
}

foo()
```

```
foo
bar
baz
baz end
Hellooo
```

```js
function sum (x, callbackfn) {
    setTimeout(callbackfn, 1000, x+1) // 3번째 인자를 callbackfn함수의 인자로 x+1을 받음
}

var result = 0

sum(2, function(x) {
    result = x
    console.log(result) // 3
})

console.log(result) // 0
```

```
0
3
```



* 비동기로 동작하는 함수
  * setTimeout
* axios
  * JS에서 가장 핫한 라이브러리 중 하나.
  * HTTP 요청을 위한 라이브러리
  * xml을 http로 요청(json이 나오기 전에 xml로 데이터를 주고 받음)

* 구글 검색 자동완성
  * 이 정보들은 브라우저에 저장된 것이 아닌 구글로부터 온 정보
  * 개발자 도구 > 톱니바귀 > Log XMLHttpRequests 체크
  * 새로고침 후 검색 
  * Network > XHR에 요청 내역 나온다.
  * 클릭 후 Preview해보면 JSON 형식으로 데이터 가져온 것 볼 수 있음.

* synchronous/Asynchronous
  * 나중에 순서가 바뀌냐, 안바뀌냐
  * 작업에 대한 결과 순서
* blocking/non-blocking
  * 제어권과 관련된 개념
  * 블록킹 : 자신의 수행결과가 끝날 때까지 제어권을 갖고 있는 것을 의미.
  * 논블록킹 :  자신이 호출되었을 때 제어권을 바로 자신을 호출한 쪽으로 넘기며, 자신을 호출한 쪽에서 다른 일을 할 수 있도록 하는 것을 의미.
* 일반적으론 동기-블록킹, 비동기-논블록킹
* 파이썬에서 비동기 할 수 있는가?
  * 할 수 있다.
  * 파이썬 asyncio
* 자바스크립트 함수는 모두 비동기인가?
  * 아니다.

# axios

[axios github](https://github.com/axios/axios)

* Using cdn:

  ```
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  ```

* 브라우저(프론트 앤드)를 통해 요청을 보내는 툴

* 데이터는 장고 서버에 있음