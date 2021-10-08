# Count Positve and negative from the list


# Initialize the List
numbers     = [2,-3,-2,34,-23,23,-8]

# set the initial value of
# Positive and Negative Variables to 0
positive = negative = 0

# Iterate to the list
# call each item on the numbers list
# as number
# If the number is greater than ZERO
# then it is positive, increment POSITIVE count by 1
# If the number is less than ZERO
# then it is negative, increment NEGATIVE count by 1
for number in numbers:
    if number > 0:
        positive +=1 # add 1 to positive count
    else:
        negative += 1 # Add 1 to negative count


# Print the result
# print("positive = %d negative = %d"%(positive,negative))
# print("positive= ",positive, " negative = ",negative)
print(f"positive = {positive} negative = {negative}")
