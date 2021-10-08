# Pull Duplicate Items

numbers     = [2,-3,-2,2,34,-23,-23,-8,2,7] # Given List
outlist     = [] # Empty List

list_size    = len(numbers)

# We need to iteratively search for the duplicate items
# Algorithm
# 1. Check if the current number exist on the sliced list
# supposed we are in index 5 which is -23
# we can compare this value to [-23,-8,2,7] <=== sliced array [index+1,size of list)
# 2. if it Exist, check if this number already exist on the outlist, if not,
# add this number in the outlist

for index in range(0,list_size):
    if numbers[index] in numbers[index+1:list_size]:
        if numbers[index] not in outlist:
            outlist.append(numbers[index])

print(outlist)