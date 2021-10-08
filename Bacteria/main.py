# @Subject Programming Languages
# @Instructor Mr. De Los Santos
# @Title 07 Task Performance 1 - ARG

import math

#const
binary 				= 2 	# binary
generation_time		= 20	# 20 minutes
one_hour			= 60	# 1 hr or 60 minutes

# Convert hour to minutes then divide by 20 minutes
# @param num_hrs
# @return time | time | (hr/s * 60) / 20
def get_time(num_hrs):
	return (num_hrs * one_hour)/generation_time

# The number of binary fissions those
# bacteria have undergone during that time (n)
# @param number of hrs
# @return number of binary fission over n | 2^n
def get_binary_fission(num_hrs):
	exponent = get_time(num_hrs)
	return pow(binary,exponent)

# The relationship between the number of bacteria in a population at a given time
# @param1 init_bacteria | original number of bacteria
# @param2 number of hrs
# @return bacteria population at a given time| Nsub(t) |  Nsub(0) * 2^n
def get_total_growth(init_bacteria, num_hrs):
	return init_bacteria * get_binary_fission(num_hrs)

# The original number of bacterial cells in the population (N sub(0))
initial_num_bacteria 		=  int(input("Enter initial count of bacteria: "))
number_hours			=  float(input("Enter the number of hours: "))  # float | user may enter decimal value such as 2.5 hrs.

total_bacteria			=  get_total_growth(initial_num_bacteria,number_hours)
exponential_growth		=  get_binary_fission(number_hours)

# Divide the total bacteria (5)
elapse_hours 			= math.floor(total_bacteria/exponential_growth);
bacteria_over_hour 		= exponential_growth;

# Accumulate the number of bacteria over the number of elapse_hours
# by looping | the results are cast into INT to prevent decimal |  # of bacteria cannot be express as decimal
# bacteria * number of hr 
print("The number of bacteria per hour will be:")
for x in range (elapse_hours):
	print("Hour {} = {}".format(x+1, int(bacteria_over_hour*(x+1))))
