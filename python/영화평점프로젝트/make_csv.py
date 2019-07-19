# with open('a.txt', 'w', encoding='utf-8') as f:
#     f.write('number, name\n')
#     for number, name in students.items():
#         f.write(f'{number}, {name}\n')


# students = {
#     'sdf' : {
#         '순번': '01',
#         '이름': '김성훈'
#     },
#     'sdf2' : {
#         '순번': '02',
#         '이름': '김은정'
#     }
# }

students2 = [
    {
        '순번': '01',
        '이름': '김성훈'
    },
    {
        '순번': '02',
        '이름': '김은정'
    }
]


import csv
with open('b.csv', 'w', encoding='utf-8') as f:
    fieldnames = ['순번', '이름'] # 여기만 변경
    csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
    csv_writer.writeheader()
    for item in students2: # 딕셔너리 만든 것 반복 for item in students.values():
        csv_writer.writerow(item)