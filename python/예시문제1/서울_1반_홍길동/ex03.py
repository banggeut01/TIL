# 파일명을 변경하지 마시오.
# 아래에 클래스 Point와 Circle을 선언하시오.
class Point:

    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f'Point:({x}, {y})'

class Circle:

    def __init__(self, other, r):
        x, y = other.x, other.y
        self.center = (x, y)
        self.r = r

    def get_area(self):
        area = self.r**2 * 3.14
        return area

    def get_perimeter(self):
        perimeter = 2 * 3.14 * self.r 
        return perimeter

    def get_center(self):
        return self.center

    def __str__(self):
        return f'Circle:({self.center[0]},{self.center[1]}),r:{self.r}'













# 실행 결과를 확인하기 위한 코드입니다. 수정하지 마시오.
if __name__ == '__main__':
    p1 = Point(0, 0)
    c1 = Circle(p1, 3)
    print(c1.get_area())
    print(c1.get_perimeter())
    print(c1.get_center())
    print(c1)
    p2 = Point(4, 5)
    c2 = Circle(p2, 1)
    print(c2.get_area())
    print(c2.get_perimeter())
    print(c2.get_center())
    print(c2)