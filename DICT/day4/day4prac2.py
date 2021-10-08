# Day 4 Prac 1
# Powered by DICT Region VI
# Mr. Lynol Ibarra
# Jack N Poy


import random


# Program Strings
prog_title	= "Jack N Poy Game"
legend		= "Legend: "
msg1		= "P/p - Paper"
msg2		= "R/r  -  Rock"
msg3 		= "S/s -  Scissors"
usrin_msg 	= "User input: "
comwin_msg	= "Computer Wins!"
tie_msg 	= "It is a tie!"
usrwin_msg	= "User Wins!"

winning		= list() # pull record

# equally distributed list of bets to lower probability
lst_bets	= ["P", "R", "S", "R","P","S", "S", "R", "P", "R", "R", "S", "P"]
# use power of each bet Dictionary example PR wins PAPER (P)
power		= {"RP": ["P", "Paper Covers Rock"],
				"PR":["P", "Paper Covers Rock"],
				"PS":["S", "Scissors cut Papers"],
				"SP":["S", "Scissors cut Papers"],
				"RS":["R", "Rock breaks Scissors"],
				"SR":["R", "Rock breaks Scissors"]
				}

# generate random index from 0 upto the lenght of list minus 1
def computer_bet():
	target_index = random.randint(0,len(lst_bets)-1)
	return lst_bets[target_index]

# check who is the winner by making the bet as dictionary Key
def judge(userbet, combet):
	key	= userbet+combet
	return power[key]

# find who is winner
# compare the bets using the dictionary 
# and compare the winning bet to the bet of user and computer 
# whoever matched the winning bet is the winner
# 1 user wins 
# 0 comp wins 
# -1 Tie
def get_winner(userbet, combet):
	if userbet == combet:
		winning.extend(["None",""])
		return -1
	else:
		winning.extend(judge(userbet, combet))
		if userbet == winning[0]:
			return 1
		else:
			return 0


# banner Printer
def print_banner():
	print(prog_title)
	print(legend)
	print(msg1)
	print(msg2)
	print(msg3)

# get user bet
print_banner()
usr_bet		= str(input(usrin_msg)).upper()
comp_bet 	= computer_bet().upper()
winner 		= get_winner(usr_bet,comp_bet)

if winner == -1:
	print(tie_msg)
elif winner == 0:
	print(comwin_msg)
elif winner == 1:
	print(usrwin_msg)

print(winning[1])			# print Message
print(f"Computer bet: {comp_bet}")
print(f"{usr_bet} vs {comp_bet}")
print(f"Winner: {winning[0]}")

