def fun(a, b, c):
    d = [0] * b
     
    for value in a:
        d[value%b] += 1
     
    result = 0
    for i in xrange(1, (b+1)//2):
        result += max(d[i], d[b-i])
    if b % 2 == 0 and d[b//2]:
        result += 1
    if d[0]:
        result += 1
    return result
     
c, b = map(int, raw_input().split())
a = map(int, raw_input().split())
print fun(a, b, c)