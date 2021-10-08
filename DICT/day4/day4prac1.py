# Day 4 Prac 1
# Powered by DICT Region VI
# Mr. Lynol Ibarra
# Random name


import random
from os import system


# Program Strings
continue_msg 	= " Do you want to generate a new name? [y/n]: "
out_name_msg 	= "Your new name is "
bye_msg 		= "Thank you!"
gen_msg 		= "List of names generated: "
ask 			= "Y"

# Get random name based on the list provided
def rand_word(targetList, index):
	return targetList[index]

# Concat names
def generate_full_name(lstfirst, lstmid, lstlast):
	target_index		= random.randint(0,4)
	return ("%s %s %s "%(rand_word(lstfirst, target_index), rand_word(lstmid, target_index), rand_word(lstlast, target_index)))

def detect_collision
# print list
def print_list(lst):
	for item in lst:
		print(item)



lst_lname		= ["Dela Cruz", "Mabini", "Rizal", "Aguinaldo", "Del Pilar"]
lst_mname		= ["Carba", "Mel", "Xi", "Lee", "Aquino"]
lst_fname		= ["Jose", "Mark", "Christian", "John", "Justin"]
generated_names	= list()



while ask.upper() == "Y":
	ask				= str(input(continue_msg)).upper()
	if ask == "Y":
		system("cls")
		tmp_fullname	= generate_full_name(lst_fname, lst_mname, lst_lname) # generate full name
		generated_names.append(tmp_fullname.title())									# push to the list

		print(f"{out_name_msg} {tmp_fullname} ")

print(bye_msg)
print(gen_msg)
print_list(generated_names)		# print generated list of names
