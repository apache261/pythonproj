# Day 2 Activity
# Powered by DICT Region VI
# Lynol Ibarra
# Student Status


# ***** PROGRAM STRINGS *****
name_msg		= "Enter Name: "
math_msg		= "Enter Math: "
sci_msg			= "Enter Science: "
eng_msg			= "Enter English: "
avg_msg			= "Average Grade: "
cong_msg		= "Congratulations! \nYou passed the Semester"
fail_msg		= "You failed the semester"

# Get User define input
std_name		= str(input(name_msg))
math_gr			= float(input(math_msg))
sci_gr			= float(input(sci_msg))
eng_gr			= float(input(eng_msg))

# Compute for Average
# sum of all grades and divide by the number of grades
avg 			= (math_gr + sci_gr + eng_gr) /3

# Conditional Printing
print("%s %.2f"%(avg_msg,avg))


if avg >= 75:
	print(cong_msg)
else:
	print(fail_msg)

