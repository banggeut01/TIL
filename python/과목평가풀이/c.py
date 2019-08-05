d = {'a': 1, 'b':2}
a1 = d.update(c=3)
a2 = a1

# => a1이랑 a2가 같은 dictionary를 가리키고 있다. (x)
# => a1은 None, a2도 None