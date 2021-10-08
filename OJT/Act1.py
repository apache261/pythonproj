#	Lynol Ibarra
# 	Activity #1
#	Compare two user define input numbers and print comparison

# ***** Program Strings ****
comparison_name     = "";                                       #   Comparison Result
str_higher          = "greater than the"                        #   greater msg
str_less            = "less than the"                           #   less msg
str_equal           = "equal to"                                #   equal msg
str_first           = "first"                                   
str_second          = "second"
in_msg              = lambda desc : "Enter %s number: "%(desc)  #   Input message
out_msg             = lambda msg  : "1st number is %s 2nd number\n"%(msg) # output msg

# **** LOGIC *****
#   Get user input
#   Cast input into integer
first_num           = int(input(in_msg(str_first)))
second_num          = int(input(in_msg(str_second)))

# Comparison using greater, less or equal
if first_num > second_num:
    comparison_name = str_higher
elif first_num < second_num:
    comparison_name = str_less
else:
    comparison_name = str_equal
    
print(out_msg(comparison_name))                             # Print Result