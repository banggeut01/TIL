import requests
import pprint
import csv
import datetime

key = '2c6010411226af12f598c9e149bfeca8'
# targetDt = '20190713'
weekGb = '0' # 주간
movies = {} # 50 주간 영화 저장할 딕셔너리

def target_date(week):
    dt = datetime.datetime(2019, 7, 13) - datetime.timedelta(weeks=week)
    return dt.strftime('%Y%m%d')

# 주간 리스트 받아오기 for문 시작
for week in range(49, -1, -1): # 49주전부터 0주전(현재 2019.07.13)까지 50주 동안
    # targetDT 받아오는 함수 호출
    targetDt = target_date(week)
    api_url = f'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key={key}&targetDt={targetDt}&weekGb={weekGb}'
    response = requests.get(api_url).json()

    for movie_info in response.get('boxOfficeResult').get('weeklyBoxOfficeList'):
        movieCd = movie_info.get('movieCd')
        movieNm = movie_info.get('movieNm')
        audiAcc = movie_info.get('audiAcc')
        movies[movieCd] = {'movieCd': movieCd, 'movieNm': movieNm, 'audiAcc': audiAcc}

with open('boxoffice.csv', 'w', encoding='utf-8') as f:
    fieldnames = ['movieCd', 'movieNm', 'audiAcc'] # 헤더와 딕셔너리 키 값을 맞춰줘야함.
    csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
    csv_writer.writeheader()
    for movie in movies.values():
        csv_writer.writerow(movie)

