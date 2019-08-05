# bootstrap

## CDN?

* Content Delivery(Distribution Network.
* 컨텐츠(CSS, JS, Image, Text 등)를 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템.
* 개별 end-user의 가까운 서버 통해 빠르게 전달(지리적 이점)
* 외부 서버 활용함으로써 본인 서버 부하 적어짐.
* 빠르게 로딩 가능.



https://getbootstrap.com/docs/4.3/utilities/borders/

## 1. Spacing

* `.m-0`?
  * margin: 0;
* `mx-0`? **시험**
  * x축을 바꿈.
  * margin-left: 0;
  * margin-right: 0;
* `.py-0`
* `.mt-1`
  * margin-top: 0.25rem?? 
  * 브라우저 기본 rem은 16px
  * 4px
* 0~5까지
  * 음수는 margin만 가능

## 2. Color

* 배경색
  * primary, secondary, success, ... 예쁜 색
  * `bg-primary` : background-color: primary;

* 텍스트색
* 여기저기에 써보자!
  * `btn-success`

## 3. border

```html
<head>
  <style>
    div {
      height: 100px;
    }
  </style>
</head>
```

이것을 해주는 이유는 div는 높이를 가질 수 없기 때문임.

## 4. Display

d-none

* `.d-sm-none .d-md-block` :모바일 크기부터 보여주고 태블릿 크기에선 block

## 5. Position

## 6. Text

VS Code beautify