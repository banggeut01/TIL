class Word:
    def __init__(self):
        self.wordbook = {} # 빈 딕셔너리 만들기
        # print(type(self.wordbook))

    def add(self, eng, kor):
            self.wordbood[eng] = kor
    
    def delete(self, eng):
        if eng in self.wordbook: # wordbook의 키값

