# HTML

* html(Hyper text markup language)
* 하이퍼텍스트 : 링크, 연결된 문서들, markup : 문서에 구조를 만든다.
* HTTP : 프로토콜
* html파일 : html로 작성된 문서, 파일
* 크롬 웹스토어 > Web Developer 설치 > CSS > Disable All Style : 구조화된 모습 볼 수 있다.
* W3C(웹표준 만들던 컨소시움), WAHTWG -> HTML Living Standard (모질라, 애플, 구글, ms)



* Open Graph : 카톡 html 미리보기. 페이스북에서 가장 먼저 만듬.

* 주석 : <!-- 내 용 -->

* DOM TREE : 문서 객체 모델. 브라우저 F12에서 확인. 2space

* Semantic Tag !시험! 이 중 시맨틱태그가 아닌것은?

  * cf. non-semantic : division(레이아웃 짤 때 가장 기본이 되는 공간) -> 공간이 분리될 뿐 의미 x, span

  ```html
  <div> </div>
  ```

  * 시맨틱 태그 : header, nav, aside, section, article, footer
  * 의미를 담고 있음.
  * 검색 엔진 최적화(SEO)
  * web developer > info > view document outline

* HTML 기본 문법

  * [00_tags.html](00_tags.html)
  * [01_semantic.html](01_semantic.html)
  * [01_style.css](01_style.css)
  * [emmet.io > Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

```html
<!-- ! + tab -> emmet-->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>문서의 제목 - 여는태그/닫는태그</h1>
  <!-- 닫는 태그가 없는 self-closing 태그가 있습니다. -->
  <input type="text"> <br> <!-- 엔터(다음라인으로) -->
  <img src="bonobono.png" alt="보노보노사진">
  <hr> <!-- 수평선을 그려주는 태그 -->
  <div> <!-- 의미가 없지만, 레이아웃을 나누는 태그(display: block -->
    <p>div태그의 자식(child)</p>
    <p>위의 p태그와 형제(sibling)</p>
  </div>
  <footer><!-- 시맨틱 태그 (HTML5에서 추가된 태그) -->
    <p>똑같은 영역인데, 여기는 푸터!</p>
  </footer>
</body>
</html>  
```

* [02_tags.html](02_tags.html)
  * `<b></b>` `<strong></strong>`!시험!
  * `<i></i>` `<em></em>`!시험!
* 웹 접근성
  * 크롬 웹스토어  > open wax : 웹 접근성 검사
  * [널리](https://nuli.navercorp.com/) : 온라인장애체험
* HTML, CSS style code 예시 
  * [W3schools](https://www.w3schools.com/html/html_lists.asp)
  * [W3schools CSS list style](https://www.w3schools.com/cssref/pr_list-style-type.asp)
* [MDN 웹문서](https://developer.mozilla.org/ko/docs/Web)