# 개발 환경 설정

## 프로그램 설치

* Java 13.0.2 (JDK)
  * [Java SE Development Kit 13.0.2 download](https://www.oracle.com/technetwork/java/javase/downloads/jdk13-downloads-5672538.html)
* [Eclipse Photon (4.8)](https://www.eclipse.org/downloads/packages/release/photon/r)
  * [Eclipse IDE for Java EE Developers download](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/photon/R/eclipse-jee-photon-R-win32-x86_64.zip)
* MySQL
  * [MySQL 워크벤치 download](https://dev.mysql.com/downloads/file/?id=492814)

## Java Eclipse 환경설정

1. 기본 위치 (ex. C:\Program Files\Java\jdk-13.0.2)  경로 복사
2. 환경변수 설정
   1.  윈도우 시스템 환경 변수 편집
   2. 시스템변수 새로 만들기
   3. 변수이름 `JAVA_HOME`, 변수값: `복붙(ex. C:\Program Files\Java\jdk-13.0.2) ` 
   4. 시스템변수 path  새로 만들기 
   5.  `%JAVA_HOME%\bin` 엔터 후 맨위로 올리기



## Java Spring 기본 흐름

> Java Eclipse 에서 프로젝트 생성부터 Java Spring(WAS) 구축 후 서버 구동까지 범위 포함
>
> 이 예제에서는 회원가입을 구현해보았다.

### 프로젝트 생성 및 설정

* 프로젝트 생성
  * new > Maven project > next  > `quickstart` 선택 > next > 

    `Group Id` : `com.ssafy.itda` (이 프로젝트의 기본이 되는 주소)  

    `Artifack Id` : `itda_test`  프로젝트명이다.  > finish

* 프로젝트 설정

  * `itda_test` 오른쪽 > `Properties` > `Project facets` > 링크 클릭 > `java` 1.8 Version 체크 확인 > apply 
  * `Java Build Path` > `JRE System Library` > `Workspace default JRE` 체크 > Finish > apply
  * `Java compiler` > `Use default compliance settings` 체크해제 > `Generated .class files compatibility`  1.8  확인 > apply > close

* pom 설정
  * [pom.xml 소스보기](./java_setting_files/project_setting/pom.xml)
  * `pom.xml` 설정 파일 덮어쓰기
    * Java Spring 쓸 때 기본적으로 많이 쓰는 것들
    * `<dependency>` : 내가 쓸 라이브러리 추가하는 공간
    * 저장, bulid 하면 `Maven Dependencies` 폴더 생성
  * 기본적으로 `src/main/java/com.ssafy.itda/itda_test/`에는 `App.java` 파일 하나만 있다. 이 파일은 손대지 않는 파일이다.



* 프로젝트 에러 해결 방법

  * 여기까지 수행하면 project error 가 발생한다.

  * `pom.xml`

    ```xml
    <!-- 수정 전 -->
    <artifactId>itda_test</artifactId>
    
    <!-- 수정 후 -->
    <artifactId>itda_test2</artifactId>
    ```

    `pom.xml` 파일에서 `artifactId`와 프로젝트 명을 수정한다. (같은 이름으로)

    그 후 다시 수정 전으로 돌려주면 error가 해결된다.

* **cf! 프로젝트 삭제시 꼭 체크! 체크안하면 보이는 곳에서만 없어짐**

### 개발 과정

* 프로젝트 기본 개발 설정

  * `src/main/java/com.ssafy.itda.itda_test` 위치에 `SSAFYApplication.java`, `SwaggerConfig.java` 파일 복사하기

    * [SSAFYApplication.java 소스보기](./java_setting_files/src_main_java_package/SSAFYApplication.java)
    * [SwaggerConfig.java 소스보기](./java_setting_files/src_main_java_package/SwaggerConfig.java)

  * `src/main/java` 우클릭 > New > package > `com.ssafy.itda.itda_test.controller`(dao, help, model, service) 만들기

  * `src` > `main` > `resources` 폴더 만들기 > 파일들 복붙

    * [resources 소스보기](./java_setting_files/src_main_resource)

    * `resources` 폴더의 `application.properties` 

      ```
      <!-- 변경 전-->
      spring.datasource.url=jdbc:mysql://192.168.xx.xx:3306/...
      
      <!-- 변경 후-->
      spring.datasource.url=jdbc:mysql://localhost:3306/...
      
      ```

      주소 변경

* 폴더 설명
  * `controller` : 클라이언트에서 API 요청 시 해당 api 주소와 매핑되어 실행하게 될 함수들 정의 부분
  * `model` : DB table과 동일한 구조(=dto)
  * `help` : 클라이언트에게 API 호출 시 반환해 줄 데이터 구조(=Response)
  * `service` : controller에서 호출하여 처리해 줄 함수 정의
    * Interface와 그 Interface를 상속 받아 함수를 구현할 클래스가 있다.
    * ex) `IUserService.java` : 함수 정의 / `UserServiceImpl.java` : 함수 구현
  * `dao` : `src/main/java/resources/mapper` 에 있는 xml과 매핑되어 JPA를 실행할 함수 정의
    * = JPA Repository (참고한 블로그에서 말하는 부분)
    * [JPA(Java Persistent API)란? 블로그 링크](https://blog.woniper.net/255)
* 흐름
  * 요청 => `Client` -> `controller` -> `service` -> `dao` -> `xml` -> `Database Server`
  * 반환 => `dao` -> `service` -> `controller` ->`help` -> `Client` 

#### #Model

* model -> new -> class -> 모델 명 ( 앞에만 대문자, ex. User)
* ex) 모델명 User -> Interface -> Serializable -> finish

1. Field 선언 -> private '타입명' '변수명'
2. 상단 바에서 `Source` -> Generate Constructor from Superclass
3. `Source` -> Generate Constructor using field
4. `Source` -> Generate Getters and Setters -> Select All -> Generate
5. `Source` -> Generate toString() -> Generate



#### Controller

* controller -> new -> class -> XxxController -> finish

  기본 세팅은.... 복붙 ㅎㅎ ^^

1. 각 기능별 함수 구현

2. Response에 대한 결과 값만 잘 맞춰서 주면 됩니다!

   ```java
   return new ResponseEntity<returnResult>('return 결과 변수 명', HttpStatus.OK);
   ```

   emailCheck 예시)
   
   ```java
   @ApiOperation(value = " email 중복을 확인한다.", response = UserResult.class)
   @RequestMapping(value = "/emailCheck/{eamil}", method = RequestMethod.GET)
   public ResponseEntity<UserResult> signUp(@PathVariable String email) throws Exception {
       logger.info("1-2-------------emailCheck-------------------------" + new Date());
       logger.info("1-2-------------emailCheck-------------------------" + email);
   
       // 'email'이라는 email 을 가지고 있는 객체 user에 저장
       User user = userService.emailCheck(email);
       // 새로운 UserResult 생성, 반환객체
       UserResult ur = new UserResult();
       if (user != null) {
           ur.setMsg("중복된 아이디입니다.");
           ur.setState("fail");
       } else {
           ur.setMsg("사용가능한 아이디입니다.");
           ur.setState("success");
       }
       return new ResponseEntity<UserResult>(ur, HttpStatus.OK);
   }
   ```
   
   * `RequestMethod`가 `GET`일 때 `@PathVariable`
   
   * `POST`일 때 `@RequestBody`
   
   * 주의) `user`는 객체이므로 `if (user)`가 아닌 `if (user != null)`로 써줘야한다.
   
   * controller 기본세팅
   
     ```java
     package com.ssafy.itda.itda_test.controller;
     ​
     import java.util.Date;
     import java.util.List;
     ​
     import org.slf4j.Logger;
     import org.slf4j.LoggerFactory;
     import org.springframework.beans.factory.annotation.Autowired;
     import org.springframework.http.HttpStatus;
     import org.springframework.http.ResponseEntity;
     import org.springframework.web.bind.annotation.CrossOrigin;
     import org.springframework.web.bind.annotation.PathVariable;
     import org.springframework.web.bind.annotation.RequestBody;
     import org.springframework.web.bind.annotation.RequestMapping;
     import org.springframework.web.bind.annotation.RequestMethod;
     import org.springframework.web.bind.annotation.RestController;
     ​
     import com.ssafy.itda.itda_test.model.User;
     import com.ssafy.itda.itda_test.service.IUserService;
     ​
     import io.swagger.annotations.Api;
     import io.swagger.annotations.ApiOperation;
     ​
     //http://localhost:8197/humans/swagger-ui.html
     @CrossOrigin(origins = { "*" }, maxAge = 6000)
     @RestController
     @RequestMapping("/api")
     @Api(value = "SSAFY", description = "SSAFY Resouces Management 2019")
     public class UserController {
     	public static final Logger logger = LoggerFactory.getLogger(UserController.class);
     ​
     	@Autowired
     	private IUserService memService;
     ​
     	@ApiOperation(value = "모든 회원의 정보를 반환한다.", response = List.class)
     	@RequestMapping(value = "/Users", method = RequestMethod.GET)
     	public ResponseEntity<List<User>> Users() throws Exception {
     		logger.info("1-------------Users-----------------------------" + new Date());
     		List<User> mems = memService.getAllUsers();
     		if (mems.isEmpty()) {
     			return new ResponseEntity(HttpStatus.NO_CONTENT);
     		}
     		return new ResponseEntity<List<User>>(mems, HttpStatus.OK);
     	}
     ​
     	@ApiOperation(value = "ID에 해당하는 회원의 정보를 반환한다.", response = User.class)
     	@RequestMapping(value = "/User/{id}", method = RequestMethod.GET)
     	public ResponseEntity<User> User(@PathVariable String id) throws Exception {
     		logger.info("1-------------User-----------------------------" + new Date());
     		User mem = memService.getUser(id);
     		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
     			return new ResponseEntity(HttpStatus.NO_CONTENT);
     		}
     		return new ResponseEntity<User>(mem, HttpStatus.OK);
     	}
     ​
     	@ApiOperation(value = " 새로운 회원의 정보를 입력한다.", response = UserResult.class)
     	@RequestMapping(value = "/signUp", method = RequestMethod.POST)
     	public ResponseEntity<UserResult> signUp(@RequestBody User dto) throws Exception {
     		logger.info("5-------------signUp-----------------------------" + new Date());
     		logger.info("5-------------signUp-----------------------------" + dto);
     		if (dto.getAllergys() != null) {
     			String[] allergys = dto.getAllergys();
     			StringBuilder sb = new StringBuilder();
     			for (int i = 0; i < allergys.length; i++) {
     				if (i == allergys.length - 1) {
     					sb.append(allergys[i]);
     				} else {
     					sb.append(allergys[i]).append(",");
     				}
     			}
     			dto.setAllergy(sb.toString());
     		}
     ​
     		User mem = memService.getUser(dto.getId());
     		UserResult mr = new UserResult();
     		if (mem != null) {
     			mr.setName("이미 존재하는 회원ID입니다.");
     			mr.setState("false");
     			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     		}
     		mem = memService.emailCheck(dto.getEmail());
     		if (mem != null) {
     			mr.setName("이미 존재하는 email입니다.");
     			mr.setState("false");
     			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     		}
     		memService.signUp(dto);
     		mr.setId(dto.getId());
     		mr.setName("성공적으로 회원가입이 완료되었습니다.");
     		mr.setState("succ");
     		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     	}
     ​
     	@ApiOperation(value = " 회원의 정보가 일치하면 로그인한다.", response = UserResult.class)
     	@RequestMapping(value = "/signIn", method = RequestMethod.POST)
     	public ResponseEntity<UserResult> signIn(@RequestBody User dto) throws Exception {
     		logger.info("5-------------signIn-----------------------------" + new Date());
     		logger.info("5-------------signIn-----------------------------" + dto);
     		System.out.println(dto.getAllergy());
     		User mem = memService.signIn(dto);
     		UserResult mr = new UserResult();
     		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
     			mr.setLogin(false);
     			mr.setName("로그인에 실패했습니다.");
     			mr.setState("fail");
     			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     		}
     		mr.setId(mem.getId());
     		mr.setLogin(true);
     		mr.setEmail(mem.getEmail());
     		mr.setAllergy(mem.getAllergy());
     		mr.setAuth(mem.getAuth());
     		mr.setName("성공적으로 로그인이 완료되었습니다.");
     		mr.setState("succ");
     		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     	}
     ​
     	@ApiOperation(value = " 해당 회원의 정보를 삭제한다.", response = BoolResult.class)
     	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
     	public ResponseEntity<BoolResult> deleteUser(@PathVariable String id) throws Exception {
     		logger.info("1-------------deleteUser-----------------------------" + new Date());
     		logger.info("1-------------deleteUser-----------------------------" + id);
     		User mem = memService.getUser(id);
     		BoolResult br = new BoolResult();
     		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
     			return new ResponseEntity(HttpStatus.NO_CONTENT);
     		} else {
     			memService.deleteUser(id);
     			br.setName("회원탈퇴가 성공적으로 처리되었습니다.");
     			br.setState("succ");
     			return new ResponseEntity<BoolResult>(br, HttpStatus.OK);
     		}
     	}
     ​
     	@ApiOperation(value = " 회원의 정보를 수정한다.", response = UserResult.class)
     	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
     	public ResponseEntity<UserResult> updateUser(@RequestBody User dto) throws Exception {
     		logger.info("5-------------updateUser-----------------------------" + new Date());
     		logger.info("5-------------updateUser-----------------------------" + dto);
     		if (dto.getAllergys() != null) {
     			String[] allergys = dto.getAllergys();
     			StringBuilder sb = new StringBuilder();
     			for (int i = 0; i < allergys.length; i++) {
     				if (i == allergys.length - 1) {
     					sb.append(allergys[i]);
     				} else {
     					sb.append(allergys[i]).append(",");
     				}
     			}
     			if(sb.toString().contains("해당없음")) {
     				dto.setAllergy(null);
     			}else {
     				dto.setAllergy(sb.toString());
     			}
     		}
     		memService.updateUser(dto);
     		User mem = memService.getUser(dto.getId());
     		UserResult mr = new UserResult();
     		if (mem == null || mem.getId() == null || mem.getId().equals("")) {
     			mr.setId("");
     			mr.setName("회원 수정에 실패했습니다.");
     			mr.setState("fail");
     			return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     		}
     		mr.setId(mem.getId());
     		mr.setLogin(true);
     		mr.setEmail(mem.getEmail());
     		mr.setAllergy(mem.getAllergy());
     		mr.setAuth(mem.getAuth());
     		mr.setName("성공적으로 회원 수정을 완료했습니다.");
     		mr.setState("succ");
     		return new ResponseEntity<UserResult>(mr, HttpStatus.OK);
     	}
     }
     ```
   
     

#### Service

* service -> new -> Interface -> 인터페이스명 (IXxxService) -> finish

1. 사용할 함수를 **선언**만

2. 규칙 : 'return 타입' '함수 명'('파라미터')

   emailCheck 예제)

   ```java
   package com.ssafy.itda.itda_test.service;
   
   import com.ssafy.itda.itda_test.model.User;
   
   public interface IUserService {
   	void signUp(User u);
   	void emailCheck(String email);
   }
   ```

   

* service -> new -> class -> 클래스명(XxxServiceImpl) -> Interface -> IXxxService -> finish

1. public class ... 위에 `@Service` 를 작성 ( 어노테이션 )

2. [dao 먼저 정의하기](#dao)

3. #service autowired
   
   ```java
   @Autowired
private XxxDao xxxDao;
   ```
   
4. 함수 구현 

   ```java
   @Override
   public void 함수명(파라미터){
       xxxDao.함수명(파라미터);
   }
   ```

   * emailCheck 예시)

     ```java
     public void signUp(User u) {
         // TODO Auto-generated method stub
         userDao.signUp(u);
     }
     
     @Override
     public User emailCheck(String email) {
         return userDao.emailCheck(email);
     }
     ```

     * `signUp()`은 반환 결과가 없다. DB에서 insert
     * `emailCheck()`는 반환결과가 User 객체이다. DB에서 select

#### #Dao

* dao -> new -> class -> 클래스명 (XxxDao) -> finish

1. public class ... 위에 `@Repository` 를 치고 ctrl + 스페이스바로 import

2. String ns = "" ->  src/main/java/resources에서 `mapper` 의 xxx.xml 파일과 매핑. 동일하게

   **xml에서 <mapper namespace ="~~"** 여기 뒤에는 점이없다.

   dao에서는 ns = "~~**.**" 뒤에 점을 붙인다!

3. ```java
   @Autowired
   private SqlSession sqlSession;
   ```

   이 sqlSession이라는 객체를 통해서 Mybatis로 DB로 sql문을 사용할 수 있게 해줍니다.

4. 함수 정의

   ```java
   public void 함수명(파라미터){
       sqlSession.[insert|selectOne|selectList|delete|update](ns + "함수명", (파라미터))
   }
   ```

5. [다시 Service 로 가기](#service-autowired)

   * emailCheck 예시)

     ```java
     public void signUp(User u) {
         sqlSession.insert(ns + "signUp", u);
     }
     
     public User emailCheck(String email) {
         return sqlSession.selectOne(ns + "emailCheck",  email);
     }
     ```

     

#### XML

* src/main/java/resources/mapper 위치에 있는 xxx.xml 파일에서 sql문 정의

  ```xml
  <[select|insert|update|delete] id="함수명"
   (parameterType="Model의 경로 or java.lang.(String|Integer ...)")
   (resultType="Model의 경로 or java.lang.(String|Integer ...)")>
   	SQL 문
   </[select|insert|update|delete]>
  ```

  SQL 문 안에 모델의 데이터는 `#{ 변수명(소문자) }` 으로 작성
  
  * emailCheck 예시)
  
    ```java
    <!-- sha1 : sha1이라는 보안기법에 의해 pw 자동 변환 -->
    <insert id="signUp" 
        parameterType="com.ssafy.itda.itda_test.model.User">
        INSERT INTO USER_T(EMAIL, PW, UNAME)
        VALUES ( #{email}, sha1(#{pw}), #{uname} ) 
    </insert>
    
    <select id="emailCheck"
        parameterType="String"
        resultType="com.ssafy.itda.itda_test.model.User">
        SELECT *
        FROM USER_T
        WHERE EMAIL = #{email}
    </select>
    ```
  
    * `insert` 문은 리턴이 없다. 

#### Help

* 응답 결과를 반환 해줄 클래스

* help -> new -> class -> 클래스명(XxxResult) -> finish

* [Model](#model)과 동일한 방식으로 구현

응답 결과에 담을 변수들을 정의

#### 실행

* `SSAFYApplication.java` 실행하면 레스트풀 메인 시작
* 브라우저에서 아래 주소로 접속
  * http://localhost:8197/ssafyvue/swagger-ui.html