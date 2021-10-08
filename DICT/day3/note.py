useraction		= str(input("user Input: "))
compaction		= ["R", "P", "S"]
compbet 		= compaction[random.randint(0,2)]

print(f"User bet: {useraction}")
print(f"Computer bet: {comp_bet}")


if useraction.lower() == compbet.lower():
	print("Tie")
elif (useraction.lower() == "p") and compbet.lower() == "r" :
	print("User Wins")
	print("Paper cover rock")
elif (useraction.lower() == "r") and compbet.lower() == "p" :
	print("computer Wins")
	print("Paper cover rock")
elif (useraction.lower() == "p") and compbet.lower() == "s" :
	print("Computer Wins")
	print("Scissors cut paper")
elif (useraction.lower() == "s") and compbet.lower() == "p" :
	print("User Wins")
	print("Scissors cut paper")
elif (useraction.lower() == "s") and compbet.lower() == "r" :
	print("Computer Wins")
	print("Rock breaks Scissors")
elif (useraction.lower() == "r") and compbet.lower() == "s" :
	print("user Wins")
	print("Rock breaks Scissors")