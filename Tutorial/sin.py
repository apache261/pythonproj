def factorial(num):
    factorial =1
    for x in range(1, num+1):
       factorial *= x # fact = fact * x
    return factorial
def compute_sin(x, n):
    newexponent = 1
    sign = -1
    sum = 0
    for count in range(1,n+1):
        sign *= -1
        numerator = x**newexponent;
        fact = factorial(newexponent)
        sum += sign * (numerator/fact)
        newexponent = (2*count) + 1
    return sum
print(compute_sin(2,8))