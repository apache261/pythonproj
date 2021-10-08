from tkinter import *





def kg_grams():
	res = float(entry_weight.get()) * 1000
	res_txtvar.set(round(res,2))

def new_window():
	new_win 	= Toplevel(window)		# top of the main window, 
	new_win.geometry("500x500")
	new_win.resizable(0,0)
	new_win.title("New Window")
	new_win.grab_set()					# prevent user to interact to main 






window	= Tk() 					# init
window.geometry("600x600")		# windows size
window.resizable(0,0)			# cannot be resize
# global

heigh1_txtvar		= StringVar()
heigh2_txtvar		= StringVar()
weight_txtvar		= StringVar()

res_txtvar			= StringVar()
window.title("BMI Calculator")	# title of the Program


winLabel		= Label(window, text="Body Mass Index", font="Arial")

winLabel.place(x=180,y=20)		# Position

lbl_height 	= Label(window, text="Height in Feet: ", font="Arial")
lbl_height.place(x=100, y= 100)
entry_height = Entry(window, bd=1, textvariable=heigh1_txtvar)		# text input
entry_height.place(x=205, y=100)

lbl_height2 = Label(window, text="Height in inch: ", font="Arial")
lbl_height2.place(x=100, y= 200)
entry_height2 = Entry(window, bd=1, textvariable=heigh2_txtvar)		# text input
entry_height2.place(x=205, y=200)

lbl_weight = Label(window, text="Weight in Kg: ", font="Arial")
lbl_weight.place(x=100, y= 300)
entry_weight = Entry(window, bd=1, textvariable=weight_txtvar)		# text input
entry_weight.place(x=205, y=300)






outputLbl	= Label(window, text="dddd", font="Arial", textvariable=res_txtvar)
outputLbl.place(x=250, y = 400)

# buttons
btn_calc	= Button(window, text="Convert", width=8, command=kg_grams)
btn_calc.place(x = 140, y=420)


btn_clr	= Button(window, text="Clear", width=8)
btn_clr.place(x = 300, y=420)

btn_new_win	= Button(window, text="New Window", width=15, command=new_window)
btn_new_win.place(x = 150, y=480)

window.mainloop()				# display the window
