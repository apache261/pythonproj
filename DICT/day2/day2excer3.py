# Day 2 Exer 1

# Powered by DICT Region VI
# Lynol Ibarra
# Student Status



yrs_msg		= "Enter years in service: "
off_msg		= "Enter office: "
amnt_msg	= "Amount given: "
amount		= 0

yrs 		= int(input(yrs_msg))
office		= str(input(off_msg))

office 		= office.upper() 		 # convert  input to Uppercase


# Base the amount given to years of service and office
if office == "IT":
	if yrs >= 10:
		amount	= 1000
	elif yrs < 10:
		amount	= 5000
elif office == "ACCT":
	if yrs >= 10:
		amount	= 12000
	elif yrs < 10:
		amount	= 6000
elif office == "HR":
	if yrs >= 10:
		amount	= 15000
	elif yrs < 10:
		amount	= 7500
else:
	print("Office not found!")

print(amnt_msg + str(amount))



