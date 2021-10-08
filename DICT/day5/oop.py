class Person:
	species = "human"
	def __init__(self, name, age):		# constructor
		self.name = name 
		self.age = age
		self.__stat = 0 				# Private

p1 = Person("John",40)


print(f"this object is a {p1.__class__.species}")
print(p1.name)
print(p1.age)


p2 = Person("Kent",20)

print(f"this object is a {p2.__class__.species}")
print(p2.name)
print(p2.age)