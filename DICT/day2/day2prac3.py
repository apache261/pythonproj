# Day 2 Activity 3
# Powered by DICT Region VI
# Lynol Ibarra
# Lowest Highest



# **** PROGRAM STRINGS ****

n1_msg		= "Enter First Number: "
n2_msg		= "Enter Second Number: "
n3_msg		= "Enter Third Number: "
low_msg		= "Lowest: "
high_msg	= "Highest: "
sum_msg		= "Sum: "

# Capture
highest		= 0
lowest		= 0
sum 		= 0

# **** GET USER INPUT ****

num1	= int(input(n1_msg))
num2	= int(input(n2_msg))
num3	= int(input(n3_msg))

# identify lowest and highest

# Find high and low
if num1 > num2:
	if num2 > num3:
		highest 		= num1
		lowest			= num3
	else:
		if num3 > num1:
			highest		= num3
		lowest			= num2
else:
	if num1 > num3:
		highest			= num2
		lowest			= num3
	else:
		if num3 > num2:
			highest		= num3
		lowest			= num1


# Get sum
sum 	= lowest + highest

print(low_msg + str(lowest))
print(high_msg + str(highest))
print(sum_msg + str(sum))