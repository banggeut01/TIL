
def a_c(word):
    # 결과 통
    result = {}
    # 반복해서, 알파벳 하나씩
    for char in word:
        # 알파벳이 딕셔너리 키에 있으면, +1
        if char in result.keys():
            result[char] += 1
        # 없으면, 1
        else:
            result[char] = 1
    # print(type(result.keys()))
    return result

print(a_c('hello')) # : => {'h': 1, 'e':1, 'l':2, 'o':1}