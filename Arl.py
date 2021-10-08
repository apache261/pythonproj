# @param factor,  factor
# @param rnge, the range or limit




def optimized(factor,rnge):
	Sum = 0;
	m = rnge/factor

	Sum = m * (m+1)/2
	ans = Sum * factor

	return ans

      

def sum_multiple(factor, rnge):
	# init Variables
	num = 0
	sum = 0
	# for (int num = factor; a < range; num += factor)
	for num in range(factor,rnge,(num +factor)):
		# check for remainder 
		# if the remainder is ZERO
		# then it is a multiple
		# add the multiple
		if(num % factor ==0):
			# sum = sum + num
			sum += num
	return sum

# Calculate the sum of multiples of two factors
def calculate_Total_Sum(fNum, sNum, rnge):
	return sum_multiple(fNum,rnge) + sum_multiple(sNum,rnge)

#Main
# Getting via user input can be way also
first = 3
second = 5
rnge = 1000
sumOfMultiple = calculate_Total_Sum(first,second,rnge)


print("Num: " ,first, " AND ", second)
print("Range: ",rnge)
print("SUM: " , sumOfMultiple)
