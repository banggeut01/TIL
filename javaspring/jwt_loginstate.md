처음

- Server에서 로그인 성공 유무와 해당 사용자 정보를 Client에 보냄
- 로그인 유무 및 정보를 Vuex를 통해 상태를 저장

-> 문제점! : 새로고침하면 로그인 유지 불가능

-----------------------

다음

- 정보를 localStorage에 저장해서 상태 유지

  -> 문제점! : 사용자 정보에 대한 노출 가능성

----------------

현재

- Server에서 로그인 성공시 JWT(Json Web Token) 으로 사용자 정보를 암호화하여 Client에 전송

- Client는 Token 정보만 localStorage에 저장

- HTTP 통신간 Header에 Token정보를 담아 Token 유효성 검사를 통해 사용자 검증 가능

  -> 문제점 ! : XSS 해킹 방법에 의해 토큰이 탈취되면 결국 노출 가능성이 있다.

----------------

추후

- Firebase API를 통해 소셜 로그인을 구현?
- Spring-Security-auth 도입하여 소셜 로그인과 함께 구현 가능? 





정리

**Agile 방법에 따라 처음에는 간단한 로그인 구현만 했다가**

**현재는 JWT 토큰 정보를 HTTP Header에 담아 송수신하며 사용자 정보를 인증하는 방법을 구현했습니다.**



추후에는 소셜 로그인 구현에 대하여 Firebase API와 Spring Security auth 구현 방법 사이에 고민 중입니다.

