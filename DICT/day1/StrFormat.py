name	= "John"
food	= "Burger"
game	= "Axie"

# Sequencial
text1	= "My name is {} I love {} and playing {}"
info1	= text1.format(name,food,game)
print(info1)

# Indexing
text2	= "My name is {2} I love {1} and playing{0}"
info2	= text2.format(name,food,game)
print(info2)

# Variable declaration
text3	= "My name is {newname} I love {newfood} and playing{newgame}"
info3	= text3.format(newname="Chris", newfood="Burger", newgame="Axie")
print(info3)


# % Placeholder
age		= 40
print("My name is %s, I am %d years old." %(name,age))

item 	= "milk"
price 	= 35.526

text 	= "The product %s costs %.2f" %(item,price)
print(text)

# f placeholder
item	= "milk"
price	= 35.526
print(f "The item {item} costs {price*2}")

# ceil() round up nearesr integer
# floor() round down nearest integer
# round()


# MATH LIBRARY

import math

print(math.ceil(5.14675))
print(math.floor(5.14675))
print(math.round(5.14675,2))
print(math.pow(5,3))

print("me".upper()) # Uppercase all letters
print("ME".lower()) # lowercase all letters
print("came came".capitalize()) # capitalize first letter
print("came came".title()) # upper every first letter of the word
print(" ".split("Came can cor"))
print(len("camrkfsd"))

lst		= ["Romeo", "Juliet", "Grapes"]

print(lst.count("Romeo"))

# replace()
msggg 	= " the dog is happy"	
res 	= msggg.replace("dog", "cat")
print(res)