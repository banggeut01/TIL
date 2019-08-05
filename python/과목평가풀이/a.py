a = 1
def func_1():
    a = 5
    func_2()

def func_2():
    print(a, end='')

func_1()
print(a)