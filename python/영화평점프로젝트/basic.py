import requests

key = '2c6010411226af12f598c9e149bfeca8'
targetDt = '20190713' # yyyymmdd 전주 계산 구글링
weekGb = '0'
api_url = f'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key={key}&targetDt={targetDt}&weekGb={weekGb}'
print(api_url)
# response = requests.get(api_url).json()
# print(response)
