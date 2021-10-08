


class Student:
	def __init__(self, name, math, science, english):
		self.name		= name 
		self.gr_math	= math
		self.gr_science	= science
		self.gr_english	= english
		
	def get_average(self):
		avg	= (self.gr_math + self.gr_english + self.gr_science) /3
		return avg
	def get_remarks(self):
		if self.get_average() >= 75:
			return "Passed"
		else:
			return "Fail"
			
	def print_result(self):
		print(f"Name: {self.name}" )
		print(f"Math: {self.gr_math}")
		print(f"Science: {self.gr_science}")
		print(f"English: {self.gr_english}")
		print(f"Average: {round(self.get_average(),2)} ({self.get_remarks()})")


std1 	= Student("John", 90,87,89)
print(std1.print_result())