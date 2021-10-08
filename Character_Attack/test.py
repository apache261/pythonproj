
def calc_cur_atk_speed(base_speed, percent_bonus, lvl):
	right_compute = (percent_bonus/100) * (lvl - 1)
	return round(base_speed * (1 + right_compute), 3)


base_atk	= float(input("Enter the base attack speed: "))
bonus_speed = float(input("Enter the bonus attack speed %: "))
level		= int(input("Enter the level: "))

current_attack_speed= calc_cur_atk_speed(base_atk,bonus_speed,level)


print("The character's current attack speed is ", current_attack_speed, " .")
