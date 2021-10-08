# Day 2 Activity 2
# Powered by DICT Region VI
# Lynol Ibarra
# Student Status


# ***** PROGRAM STRINGS *****
subj_math		= "Math"
subj_eng		= "English"
subj_sci		= "Science"
name_msg		= "Enter Name: "
math_msg		= "Enter %s: "%(subj_math)
sci_msg			= "Enter %s: "%(subj_sci)
eng_msg			= "Enter %s: "%(subj_eng)
avg_msg			= "Average Grade: "
cong_msg		= "Congratulations! \nYou passed the Semester"
fail_msg		= "You failed the semester"
retake_msg		= ",but you need to take the following subjects(s): \n"
list_failed		= ""									# Failed subjects list


# Const
PASSING 		= 75
ttl_subj		= 3
# Check if the student has a grade below PASSING
hasFailed		= False

# Get User define input
std_name		= str(input(name_msg))
math_gr			= float(input(math_msg))
sci_gr			= float(input(sci_msg))
eng_gr			= float(input(eng_msg))

# Compute for the Average
# sum of all grades and divide by the number of grades
avg 			= (math_gr + sci_gr + eng_gr) /ttl_subj

# Conditional Printing
print("%s %.2f"%(avg_msg,avg))


if avg >= PASSING:
	print(cong_msg)					#	Print this as long the Average is >= Passsing
	if math_gr < PASSING:			# Check if the student pass the subj Math
		list_failed += subj_math + "\n"
		hasFailed	= True
	if eng_gr < PASSING: 			# Check if the student pass the subj ENG
		list_failed += subj_eng +"\n"
		hasFailed	= True
	if sci_gr < PASSING:			# Check if the student pass the subj SCI
		list_failed += subj_sci +"\n"
		hasFailed	= True

	if hasFailed:					# Print only if has failed subjects
		print("%s %s"%(retake_msg, list_failed))
else:
	print(fail_msg)