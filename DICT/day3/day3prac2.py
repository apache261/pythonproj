# Day 3 Prac 2
# Powered by DICT Region VI
# Lynol Ibarra
# odd even

# Program Strings
num1_msg	= "Enter first number: "
num2_msg	= "Enter second number: "
out_msg		= "The sum of two integers is"
odd 		= "Odd"
even		= "Even"
typpe 		= ""
ques_msg	= "Do you want to try again [y/n]: "
bye_msg		= "Thank you!"
ask 		= "y"

while ask.lower() == "y":
	# Storage
	sum 		= 0

	# Get user input
	num1		= int(input(num1_msg))
	num2 		= int(input(num2_msg))

	# Compute for sum
	sum 		= num1 + num2

	# Determine ODD or EVEN
	if sum % 2 == 0:
		typpe = even
	else:
		typpe = odd

	# Print result
	print(f"{out_msg} {typpe}")

	ask		= str(input(ques_msg))

# Bye Message
print(bye_msg)

