#	Lynol Ibarra
# 	Activity #3
#	Recursive function that computes the
# 	first n integers input by the users


# String Variables
in_msg 			= "Enter a number: "
out_msg			= lambda n,summ: "The sum of the first %d integers is %d"%(n,summ)
# Int var
result			= 0

# find_sum recursive function
# if n is equal to 1 return 1 
# otherwise add the previous value of n and call the function recursively 
# while decrementing the value of n by 1
# @param Integer n start of recursion
# @return Integer sum of numbers from 1 to n
def find_sum(n):
	if n == 1:
		return 1
	else:
		return (n + find_sum(n-1))


# *** DRIVER ****
n 			= int(input(in_msg))	# get user String input and convert to Integer 
result 		= find_sum(n)			# obtain the summation

print (out_msg(n,result))			# print result