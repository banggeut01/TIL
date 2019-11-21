[참고 링크](https://seongbeom.github.io/2017/02/28/oh-shit-git.html)

1. 특정 파일을 커밋 이력에서 삭제하고 싶다. 다만, 파일은 유지하고 싶을 때

   예) db.sqlite3가 이미 커밋이 되어버림

   ```bash
   $ git rm --cached db.sqlite3
   ```

   위의 명령어를 작성하고, `.gitignore`에 `db.sqlite3` 등록

2. unstage

   ```bash
   $ git reset HEAD <file>
   ```

3. 커밋 메시지 수정

   ```bash
   $ git commit --amend
   ```

   **반드시 push하기 전에 수정해야한다!**

   `$ git push -f origin master` 되도록 쓰지 않기! (덮어쓰기) - 특히 협업상황에서 쓰지 않기

   푸시 전에 무조건 커밋된것 확인하고 하기

4. 커밋 빼먹은 파일이 있는데 이미 커밋 했을 때

   ```bash
   $ git add [빼먹은 파일]
   $ git commit --amend
   ```

5. ㅇ

   ```bash
   $ git branch test
   $ git history # 모든 로그들
   ```

6. 내 working directory를 이전 커밋으로 돌리고 싶을 때

   ```
   $ git checkout -- <file>
   ```

   