# Clean Code

"깨끗한 코드는 단순하고 직접적이다. 깨끗한 코드는 잘 쓴 문장처럼 읽힌다."

"깨끗한 코드에는 의미 있는 이름이 붙는다. 특정 목적을 달성하는 방법은 하나만 제공한다. 코드는 문학적으로 표현해야 마땅하다."

"깨끗한 코드는 손댈 곳이 없다."

## 왜 필요할까?

* 10 : 1 = 코드를 읽는 시간 : 코드를 짜는 시간

## 어떻게 만들까?

### 클린 코드의 주요 원칙

* Coding 표준, 아키텍쳐 표준 및 설계가이드를 준수하라

  * "" or ''?

* 단순한 것이 효율적, 복잡함을 최소화

* 캠핑장을 떠나기 전에 원래보다 깨끗하게 해야 한다.

  (참조되거나 수정되는 코드는 원래 보다 clean 하게 해야 함)

* 항상 **근본적인 원인**을 찾아라. 그렇지 않으면 반복될 것이다.

* 하나의 파일은 하나의 언어로 작성하라(Java, JavaScript, HTMl, ...)

* SOLID 원칙
* 명확하고 간결하게 주석달기
  * 설명을 위한 설명을 달지말 것
  * 함수를 수정하는 경우, 옳지 않은 주석이 달림
  * 코드만 남겨놓는것이 best
  * **to-do, 저작권** 등은 주석 필요

* 보기좋게 배치하고 꾸미기
  
  * 규칙적인 들여쓰기 줄바꿈
* 읽기 쉽게 흐름제어 만들기
  * if/else 사용하고 삼항 연산자는 매우 간단한 경우에만 사용한다.
  * do while loop 피하기

## 코드리뷰

* 왜 중요한가?
  * 서로에게 책임을 떠넘기지 않음.
  * 리뷰과정을 통해 서로가 그 코드를 같이 보장하고 검증했기 때문

# Secure Coding

* 보안사고의 75% 이상이 애플리케이션 취약성이 원인
  * 방화벽 0.5%
  * IDS/IPS 3%
  * 웹방화벽 10%
* Secure coding은 구현 단계
* 소프트웨어 개발보안은 요구사항 분석, 설계, 구현, 테스트 모든 과정에서의 보안 활동

### 최신 정보보호 동향

[파일 링크](https://openeg.co.kr/attachment/cfile7.uf@994F21505D2EA47A090A75.pdf)

* 크립토재킹
  * 암호화폐 + 납치
  * 웹사이트나 기기에 몰래 심어 둔 악성 코드를 황성화해 피해자의 CPU나 인터넷 대역폭을 몰래 끌어다 암호화폐 채굴에 이용하는 공격이다.
  * 암호화폐 가격 급등하면서 사이버 범죄 열풍 급격히 확신됨.
  * JS 많이 사용
  * 단 몇 줄의 코드를 사용하거나 브라우저를 통해 전달되므로 사이버 범죄자들이 이렇게 훔친 처리 능력과 클라우드 CPU 사용량을 이용하여 암호 화폐 채굴.
  * 코인 채굴로 인해 디바이스 속도가 줄어들고 배터리 과열되며, 코인 채굴로 인해 기업 네트워크가 중단되고 CPU 사용량이 급증하면서 비용이 증가함.
* 오버플로우와 언더플로우 취약점을 이용한 코인 탈취
  * 코인 무한복사 가능 SMP 사태로 시장 폭락... 후오비선 출금 중단

* SQL 인젝션 취약점으로 개인정보 유출사고