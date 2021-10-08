#	Lynol Ibarra
# 	Activity #2
#	Determine the level of a score input by a user.
# 	91-100 Excellent
# 	81-90 Good
# 	71-80 Medium
# 	0-70 Bad

# Global String Variables to easily apply changes
excel 		= "Excellent"
good 		= "Good"
med			= "Medium"
bad			= "Bad"
err 		= "Error"
level		= ""
in_msg		= "Enter Score: "
out_msg		= lambda score, lvl : "%d is %s \n" %(score, lvl)	# formatted output message 

# @param Integer int_score
# @return String interpreration
def interpret_data(score):
	str_interpretation = ""
	if int_score > 90 and int_score <= 100: 	# values higher than 90 but less/ equal 100
		str_interpretation = excel

	elif int_score > 80 and int_score <= 90:	# values higher than 80 but less/ equal 90
		str_interpretation	= good

	elif int_score > 70 and int_score <= 80: 	# values higher than 70 but less/ equal 80
		str_interpretation = med

	elif int_score >= 0 and int_score <= 70:	# values from 0 until 70 inclusive
		str_interpretation = bad
	else:										# Negative or Above 100
		str_interpretation = err

	return str_interpretation

# ***** DRIVER *****

str_score		 = input(in_msg)				# Receive input data as String
int_score		 = int(str_score)				# Convert String Score to integer Assume No decimal

level 			 = interpret_data(int_score)	# check and generate score level

print(out_msg(int_score,level))					# Print Result