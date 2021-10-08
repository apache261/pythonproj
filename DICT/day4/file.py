# r read\
# a append 
# w write
# x create

import os

def read_file():
	try:
		file = open("data.txt", "r")

		content = file.read()
		print(content)

		file.close()
	except FileNotFoundError:
		print("File does not exists")

def write_file():
	try:
		file = open ("data.txt", "w")

		content = str(input("Enter Text: "))
		file.write(content)

		file.close()
	except FileNotFoundError:
		print("File does not exists")

def append_file():
	try:
		file = open ("data.txt", "a")

		content = str(input("Enter Text: "))
		file.write(content)
		file.close()
	except FileNotFoundError:
		print("File does not exists")

def remove_file():
	if os.path.exists("data.txt")
		os.remove("data.txt")
	else:
		print("File does not exists")

def remove_folder():
	os.rmdir("Folder")


write_file()
append_file()
read_file()