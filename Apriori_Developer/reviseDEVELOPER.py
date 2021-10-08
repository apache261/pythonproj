import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

#To import library locally
# we first Import the 'sys 'library
# then We Set our PATH OF LIBRAY __ ' ' __
# Means our apriori2 library located the same as our revise.py
import sys
sys.path.insert(0, '') #import PAth to first index of the list paths

# we import the apriori2 library then get
# the runApriori function only
from apriori2 import runApriori


# CONVERT CSV TO SETS
# this will iterate to the data in CSV
# it will split the items using the delimeter comma
# then it will store the data into an immutable set (frozenset)
# 

# line (data)
# ONE ROW OF CSV

# with open(fname, 'r') as file_iter:
# OPEN HTHE CSV READ ONLY and make it as file_iter variable
# get each line or rows of csv by using for line in file_iter:

# STRIP(param)
# strip(param) -> Remove Trailing Character in the paramater eg line.strip('-') [remove succedding '-' chars]
# In our case No parameter strip() => WILL REMOVE SPACES 
# In the __ var line__ (1 row of csv) both leading and last 
# example 'sssmessss'.strip('s') return =>> "***me****" or "me"
# * => indicates deleted chars the output is 'me'
# APPLICATION line.strip() => remove Extra spaces in the line such as
# INPUT => "   Apple, Avodaco, Orange   "
# OUTPUT => "Apple, Avocado, Orange" (dont remove space between items)

# RSTRIP(param)
# rstrip(param) -> Remove characters to the RIGHT MOST
# No Param means remove right most SPACES eg. "me     " return "me" (space remove)
# APPLICATION line.rstrip(',')
# INPUT => ",,,Aple, Avocado, Orange,,,,,,,,,,,"
# OUTPUT => ",,,Apple, Avocado, Orange"

# line.strip().rstrip(',')
# INPUT => "  APPLE, ORANGE,,, AVOCADO,,,,  "
# After line.strip() => "APPLE, ORANGE,,, AVOCADO,,,,"
# After line.strip().rstrip(',') => "APPLE, ORANGE,,, AVOCADO"

# THEN the value of line will be transfer to frozenset(line.split(','))

# frozenset(input)
# Allow you to store immutable means once entered cannot be modify

# line.split(',')
# Split data using , delimeter
# INPUT => "apple,avocado,shake" [SINGLE GROUP]
# OUTPUT => "apple","avocado","shake" (separated to in dividual from group)

# frozenset(line.split(','))
# split the data in line using the comma and store each iteam as a set
# *note: frozenset also unordered same as SET()
# but you cannot modify the items inside the frozenset once they are inside (readonly)
# helpful to prevent accidental item manipulations
# INPUT => "apple,"orange","avocado"
# AFTER line.split(',') => "apple","orange","avocado"
# AFTER frozenset(line.split(',')) => {"apple","orange","avocado"}

# THEN returned data will be store to record

# Yield record
# using yield keyword means generator
# YIELD can store data without using return FASTESR DATA STRUCT 
# yield store individual frozensets
# However, you can only get its value ONCE, Once Iterated you cannot get the previous value
# Good for dealing Large data that need to be process once
# unlike array you can get its items unlimited
# the algorithm of yeild
# store the data from record then return and store another

# {{data1},{data2},{data3}}... expected OUTPUT of this function

def parseCSV(fname):
        with open(fname, 'r') as file_iter:
            for line in file_iter:
                    line = line.strip().rstrip(',')
                    record = frozenset(line.split(','))
                    yield record




# PASS THE TWO liSTS 
def printSuggestions(rules):
    a=0;

    # sorted the result of rules and the lamba here id  sort the value based on the second index 
    # which is the confidence {[{'Apple','Avocado'}{'ORANGE'}: {confidence:support}]}
    # Apple Avocado -> Orange : conf support
    for rule, results in sorted(rules, key=lambda x: x[1]) :
        pre, post = rule
        con,sup = results
        print("%d %s->%s,\t%.2f\t%.2f" % (a,(pre),(post), con,sup))
        a = a+1


#Minmimum Support in decimal
data_input = 'hi.csv'
min_support = 0.6
min_confidece = 0.8

#convert csv to dataset
dataset = parseCSV(data_input)


 #store the resuls.
rules = runApriori(dataset, min_support,min_confidece)

print("\n**********Suggestions************")
print("\nItem\t\tConfidence\tSupport")
printSuggestions(rules);