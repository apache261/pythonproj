# Day 1 Activity
# Powered by DICT Region VI
# Lynol Ibarra
# Simple Payroll


# Program Strings 
name_msg		= "Enter Employee Name: "
hrs_msg			= "Enter Number of hours rendered: "
rate_msg		= "Enter rate per hour: "
gsis_msg		= "GSIS Premium: "
phil_msg		= "PhilHealth: "
hse_msg			= "Housing Loan: "
tax_msg			= "Tax rate: "
grs_msg			= "Gross Salary: "
ttl_deduct_msg	= "Total Deductions: "
net_msg			= "Net Salary: "

# Constant
ONEHDR			= 100

# ******** Execution Starts here ****** 

# Program prompt 
name 			= str(input(name_msg))
hrs_rendered	= float(input(hrs_msg))
rate_hr			= float(input(rate_msg))
# Deductions
gsis_prem		= float(input(gsis_msg))
philhlt			= float(input(phil_msg))
hourse_loan		= float(input(hse_msg))
tax_rate		= float(input(tax_msg))	# convert to decimal


# Computations Starts Here
gross			= hrs_rendered * rate_hr
tax_decimal		= tax_rate/ONEHDR # convert tax to decimal by dividing 100
tax_deduction	= gross * tax_decimal
total_deductions= tax_deduction + gsis_prem + philhlt + hourse_loan
net_income		= gross - total_deductions

# Printing

print("\n\n")
print("%s %d"%(grs_msg, gross))
print("%s %.1f"%(ttl_deduct_msg, total_deductions))
print("%s %.1f"%(net_msg, net_income))
print("\n\n")



