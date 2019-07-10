# Python 기본 예제

1. 문자열 String

   * 첫번째 요소 : string[0]

   * 마지막 요소 : string[-1]

   * 마지막에서 두번째 : string[-2]

   * *주의!) string은 list처럼 값을 바꿀 수 없다! 

     ```python
     string = 'apple'
     string[0] = 'b' #=> x
     ```

2. input() : 표준 입력

   * 키보드로 입력받기

     ```python
     number = int(input('숫자 입력하세요. : '))
     ```

3. 홀수/짝수 구분

   ```python
   number % 2 == 0: #=> 짝수면 True 반환
   number % 2: #=> 홀수면 1 반환
   not number % 2: #=> 짝수면 True 반환
   ```

4. 문자열 나누기 : `.split(';')`은 문자열을 ';'을 기준으로 나누는 명령어

5. 형변환

   * string 요소로 이루어진 리스트를 int형 요소로 변환하기 예제

     ```python
     price = ['500', '5000', '60']
     
     # 1. 반복문
     int_price = []
     for p in range(price):
       int_price.append(int(p))
     
     # 2. list comprehension
     int_price = [int(p) for p in price]
     print(int_price)
     
     #3. map
     int_price = list(map(int, price))
     type(map(int, price)) #=> class 타입인 것을 확인할 수 있다.
     ```

   * `map` : 첫 번째 인자의 함수를 두 번째 인자를 반복하며 적용한다. 반복 가능한 객체에 함수를 각각 적용한다.

   * `map`은 한 번씩 쓰고 반환해주기 때문에 메모리에 계속 남는 것이 아니다. 따라서 `list`에 저장해서 쓰면 된다. 만약, 반복문에서만 사용할 경우 `list`로 변환할 필요 없다.

6. sort() vs sorted()

   * list.sort() : return이 None. 원본 리스트 자체를 변경.
   * sorted(list) : return이 정렬된 리스트. 원본 자체는 변경하지 않음.
   * 따라서, sorted()를 사용하는 것을 권장함!