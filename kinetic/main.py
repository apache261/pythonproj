
#
#############################
# Kinetic Energy
# Source Code
# Programming Languages
############################

HALF = 0.5

def get_kinetic(mass,velocity):
	return HALF * (mass * pow(velocity,2))



input_mass = 0.00
input_velocity = 0.00

input_mass = float(input("Enter mass in kilograms: "))
input_velocity = float(input("Enter velocity in meters per second: "))

print("The object's kinetic energy is: {:.2f} J".format(get_kinetic(input_mass, input_velocity)))
#
#


