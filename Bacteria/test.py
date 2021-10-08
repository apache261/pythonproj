
import math

def hour_to_minutes(hrs):
	return hrs * 60

def prof_time(hrs):
	return hour_to_minutes(hrs) / 20;

def binary_count(hrs):
	return pow(2,prof_time(hrs))

def total(num_bacteria, hrs):
	return num_bacteria * binary_count(hrs)


bacteria			=  int(input("Enter initial count of bacteria: "))
hrs					=  float(input("Enter the number of hours: "))

total				=  total(bacteria,hrs)
growth				=  binary_count(hrs)


max_hours 			= math.floor(total/growth)
per_hour			= growth;


print("The number of bacteria per hour will be:")
for x in range (max_hours):
	print("Hour ",x+1," = ", int(per_hour*(x+1)))
