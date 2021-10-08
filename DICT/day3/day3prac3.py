from os import system

phonebook 	= dict()
ch 			= ""

while ch.upper() != "X":
	system("cls")			# clear Screen
	print("\t\tSimple Phonebook")
	print("\t\t[A] - Add Data")
	print("\t\t[D] - Delete Data")
	print("\t\t[X] - End")
	ch = str(input("\t\tEnter Choice: "))

	if ch.upper() == "A":
		system("cls")
		print("\t\tAdd Data")
		key	= str(input("\t\tEnter Key: "))
		value = str(input("\t\tEnter Value: "))
		phonebook[key]	= value

		input("\t\tPress any key to Continue... ")

	elif ch.upper() == "D":
		system("cls")
		print("\t\tDelete Data")
		key		= str(input("\t\tEnter Key: "))
		# remove using pop(key)
		phonebook.pop(key)
		# for contact in phonebook:
		# 	print(f"\t\t- {contact} : {phonebook[contact]} ")
		input("\t\tDeleted! Press any key Continue...")


system("cls")
print ("Thank You".upper())