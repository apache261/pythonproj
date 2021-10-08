# Programming Languages O4 Task Performance
# Global
# To easily update constants incase of changes
lvl_subtrahend  	= 1 # level - 1
lvl_add				= 1 # 1 + bonus
round_index 		= 3 # round 3 decimal places

# Init for future changes
base_atk_speed 		= 0.00
bonus_atk_speed		= 0.00
level				= 0
current_attack_speed= 0.00


# Convert Percent to Decimal
# @param1 float
# @return float
def percent_to_decimal(percent):
	return percent/100

# Compute current Attack Speed
# @param1 float base_speed
# @param2 float percent_bonus
# @param3 int lvl 
# @return float current attack speed
def calc_cur_atk_speed(base_speed, percent_bonus, lvl):
	inner_computation = percent_to_decimal(percent_bonus) * (lvl - lvl_subtrahend)
	return round(base_speed * (lvl_add + inner_computation), round_index)

# @return String
def get_numeric(message):
	while True:
		tmp = input(message)
		if tmp.strip().replace('.','').isdigit():
			return tmp;
		else:
			print("Invalid Number")

# Driver

# Get 
base_atk_speed 		= float(get_numeric("Enter the base attack speed: "))
bonus_atk_speed 	= float(get_numeric("Enter the bonus attack speed %: "))
level				= int(get_numeric("Enter the level: "))
# start compute
current_attack_speed= calc_cur_atk_speed(base_atk_speed,bonus_atk_speed,level)

# Print
print("The character's current attack speed is {}.".format(current_attack_speed))
