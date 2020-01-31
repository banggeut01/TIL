# API 명세

# User

## 1. 회원가입

1. `POST /api/signUp` : 새로운 회원의 정보를 DB에 저장

   - Parameter : User

     ```json
     { "email" : "string",
      "pw" : "string",
      "uname" : "string",
      }
     ```
     
     회원가입 시 **email, pw, uname** 만 입력하여 회원가입하도록 한다.

   - return : 회원가입 성공 유무를 결과로 반환. state 결과 success/fail로 확인

     ```json
{ "msg" : "string",
      "state" : "string" }
     ```
     
     ex)
     
     ```json
     { "msg" : "성공적으로 회원가입이 완료되었습니다. ",
      "state" : "success" }
     ```
   
2. `GET /api/emailCheck/{email}` : 입력한 email이 사용가능 한지 중복 체크

   - Parameter : String

   - return : 중복 유무에 대한 결과 반환.  state 결과 success/fail로 확인

     ```json
{ "msg" : "string",
      "state" : "string" }
     ```
     
     ex)
     
     ```json
     {"msg" : "사용할 수 있는 email입니다.", "state" : "success" }
     ```



-----------

## 2. 로그인

1. `POST /api/login` : 사용자의 정보(email, pw)가 일치하면 로그인

   - Parameter : User의 email, pw

     ```json
   { "email" : "string",
      "pw" : "string",
    "uname" : "string",
      "auth" : 0,
    "major" : "string",
      "uimg" : "string" }
     ```
     
     로그인시 **email, pw ** 만 입력하여 로그인 한다.
     
   - return : 로그인 성공 유무를 결과로 반환. state 결과 success/fail로 확인
   
     ```json
     { "uid" : 0, 
      "email" : "string",
      "auth" : 0,
      "msg" : "string",
      "state" : "string" }
     ```
     
     ex)
     
     ```json
     { "uid" : 10, 
      "email" : "admin@it.da",
      "auth" : 0,
      "msg" : "이메일 또는 비밀번호가 일치하지 않습니다.",
      "state" : "fail" }
     ```

-------------

## 회원관리

1. `GET /api/getAllUsers` : 전체 회원의 목록을 확인한다.

   - Parameter : {}

   - return : 전체 회원의 목록을 반환 `List`

     - 회원의 비밀번호를 제외한 모든 정보를 반환한다.

     ```json
     [
         {
             "uid" : 1,
             "email" : "admin@it.da",
             "pw" : null,
             "auth" : 0,
             "major" : "컴퓨터공학과",
             "uimg" : "C:\img\myimg.jpg",
             
         },
         {
         	...   
         }
     ]
     ```

2. `GET /api/getUser/{uid}` : 회원의 정보를 확인한다.

   - Parameter : Integer

   - return : uid에 해당하는 회원의 정보를 반환

     - 회원의 비밀번호를 제외한 모든 정보를 반환한다.

     ```json
     {
         "uid" : 1,
         "email" : "admin@it.da",
         "pw" : null,
         "auth" : 0,
         "major" : "컴퓨터공학과",
         "uimg" : "C:\img\myimg.jpg",
         "stack" : [
             {"tname" : "Java", ...}
         ]
     }
     ```

3. `UPDATE /api/updateUser` : 회원의 정보를 수정한다.

   - Parameter : User

     - uid, email, auth는 변경이 불가능하다.
     - pw, major, uimg, uname 변경 가능

     ```json
     {
         "uid" : 0,
         "uname" : "String",
         "email" : "String",
         "pw" : "String",
         "auth" : 0,
         "major" : "String",
         "uimg" : "String"
     }
```
     
   
4. `DELETE /api/deleteUser/{uid}` : uid에 해당하는 회원의 정보를 삭제한다.

   * Parameter : Integer

   * return : 회원 탈퇴에 대한 결과 반환.  state 결과 success/fail로 확인

     ```json
     { "msg" : "string",
      "state" : "string" }
     ```

     ex)

     ```json
     {"msg" : "성공적으로 탈퇴되었습니다.", "state" : "success" }
     ```

5. `UPDATE /api/updatePermission/{uid}` : uid에 해당하는 회원의 권한을 수정한다.

   * Parameter : Integer

   * return : 회원 권한 수정에 대한 결과 반환.  state 결과 success/fail로 확인

     ```json
     { "msg" : "string",
      "state" : "string" }
     ```

     ex)

     ```json
     {"msg" : "성공적으로 회원 권한이 수정되었습니다.", "state" : "success" }
     ```

--------------------



## 공고

1. `GET /api/getWantedByRecent` : 최신 공고 목록을 요청 받아 응답한다.

   * Parameter : {}

   * return : 최신 공고 목록 최대 20개 반환

     * 기업로고, 기업명, 공고 제목, D-day을 출력한다.
     * 추후 기술스택 추가 필요 ######

     ```json
     [
         { "wid" : 1,
     	  "wantedTitle" : "2020년 IBK기업은행 신입행원 채용공고",
           "cid" : 100,
           "corpNm" : "IBK기업은행",
           "logo" : "",
           "endDate" : ""
         },
         {
             ...
         }
     ]
     ```

2. `GET /api/getWantedByCloseEnd` :  마감순 공고 목록을 요청 받아 응답한다.

   * Parameter : {}

   * return : 마감순 공고 목록 20개 반환

     ```json
     [
         { "wid" : 1,
           "cid" : 100,
           "corpNm" : "IBK기업은행",
           "endDate" : "2020-03-21 18:00:00" // 마감일
         },
         {
             ...
         }
     ]
     ```

   조회수*, 스크랩수*, 기술스택

3. `GET /api/getWantedByView` : 조회순 공고 목록을 요청 받아 응답한다.

   * Parameter : {}

   * return : 조회순 공고 목록 20개 반환

     ```json
     [
         { "wid" : 1,
           "cid" : 100,
           "corpNm" : "IBK기업은행",
     	  "vcnt" : 14300 // 조회수
         },
         {
             ...
         }
     ]
     ```

     

4. `GET /api/getWantedByScrap` : 스크랩 공고 목록을 요청 받아 응답한다.

   * Parameter : {}

   * return : 스크랩순 공고 목록 20개 반환

     ```json
     [
         { "wid" : 1,
           "cid" : 100,
           "corpNm" : "IBK기업은행",
     	  "scrapCnt" : 14300 // 스크랩수
         },
         {
             ...
         }
     ]
     ```

     

5. `GET /api/getWantedByViewAndScrap` : 스크랩 + 마감순 공고 목록을 요청 받아 응답한다.

   * Parameter : {}

   * return : 1)마감순, 2)스크랩순으로 공고 목록 20개 반환.

     ```json
     [
         { "wid" : 1,
           "cid" : 100,
           "corpNm" : "IBK기업은행",
           "endDate" : "2020-03-21 18:00:00", // 마감일
     	  "scrapCnt" : 14300 // 스크랩수
         },
         {
             ...
         }
     ]
     ```

     

6. `GET /api/getWantedByStack` : 기술스택별 공고 목록을 요청 받아 응답한다.

   * Parameter : {}
   * return : 최신 공고 목록 20개 반환 ################## 
   * **보류** 추천방식?! 조회순, 스크랩순, 싸피취업인순, 마감일순
   * **스크랩수 공고테이블에 필드 추가할지 말지???** ###########

7. `GET /api/SearchWantedByCompany/{name}` : 특정 기업명을 포함한 공고 목록을 요청 받아 응답한다.

   * Parameter : String

   * return : 검색된 모든 목록 반환

     로고 / 회사명, 종료일, 직무 / 조회수 / 스크랩수 

     ```json
     // List<Wanted> active
     [
         { "wid" : 1,
           "cid" : 100,
           "corpNm" : "IBK기업은행",
           "endDate" : "2020-03-21 18:00:00", // 마감일
           "vcnt" : 14300, // 조회수
     	  "scrapCnt" : 27, // 스크랩수,
           "logo" : "", // 로고
           "jobs" : ["IT인프라", "보안"], // 직무
           "stacks" : ["MySQL", "JAVA"]
         },
         {
             ...
         }
     ]
     
     // List<Wanted> inactive
     [
         ...
     ]
     ```

   

8. `GET /api/SearchWantedByStack/{name}` : 기술스택을 포함한 공고 목록을 요청 받아 응답한다.

   * Parameter : String
   * return : 검색된 모든 목록 반환

9. `GET /api/SearchWantedByID/{wid}` : 특정 공고 상세 정보 반환

   * Parameter : Integer

   * return : 특정 공고 반환. 

     * 추후 기술스택, 자격증, 스크랩 추가 ##############
     * 댓글 논의 필요 ##############

     ```json
     { "wid" : 1,
       "wantedTitle" : "2020년 IBK기업은행 신입행원 채용공고",
       "active" : 0,
       "startDate" : "2020-03-06 09:00:00",
       "endDate" : "2020-03-21 18:00:00",
       "process" : "",
       "etc" : "",
       "question" : "",
       "vcnt" : 1001,
       "cid" : 100,
       "corpNm" : "",
       "totPsncnt" : 0,
       "busiSize" : "",
       "yrSalesAmt" : 0,
       "corpAddr" : "",
       "homePg" : "",
       "busiCont" : "",
       "logo" : "",
       "jobs" : [
           {
               "jid" : 101,
               "to" : "00",
               "jname" : "웹 프론트엔드 개발",
               "jdetail" : "",
               "jtype" : "",
               "require" : "",
               "extra" : "",
               "place" : "",
               
           },
           {
               ...
           }
       ]
     }
     
     ```

     