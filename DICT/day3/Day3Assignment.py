# Day 3 Prac 2
# Powered by DICT Region VI
# Lynol Ibarra
# WORD BANK

from os import system					# import system module to use cls

# Program Strings
title_msg		= "Simple Word Bank"
wrd_msg			= "Enter a word: "
retry_msg		= "Do you want to enter another word? [Y/N]: "
answer			= "y".upper()
count_msg		= "Words in the WordBank: "
# Collection
wordlist		= list()							# storage area for words


# execution starts here
# Loop until the user enter Y 
while answer.upper() == "Y":

	system("cls")									# NT clear Screen
	print(title_msg)								# title of the program
	newWord			= str(input(wrd_msg))			# prompt user to enter new word
	wordlist.append(newWord)						# Assert the new word on to the list

	answer			= str(input(retry_msg))			# Prompt user to retry


system("cls")

print(f"{count_msg} {len(wordlist)}")				# print the size of the wordlist
for word in wordlist:								# iterate to the content of wordlist
	print(f"- {word}")