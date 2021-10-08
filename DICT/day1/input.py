# use of input() method

name	= str(input("Enter your name: "))
age		= int(input("Enter your age: " ))
print(f"My name is: {name}")
print(f"My age is: {age}")


#BMI

wkg		= float(input("Enter your weight in kilograms: "))
hf		= float(input("Enter your height in feet: "))
hi 		= float(input("Enter your heigh in inches: "))


# feet to inches
hm 		= ((hf*30.48) + (hi * 2.54))/100

# compute BMI
bmi		= wkg/(hm**2)


print(f"Your Body Mass Index is {round(bmi,2)}")


# Simple addition
n1 		= int(input("Enter first number: "))
n2		= int(input("Enter second number: "))

sum		= n1+ n2

print(f"The sum of {n1} and {n2} is {sum}")
