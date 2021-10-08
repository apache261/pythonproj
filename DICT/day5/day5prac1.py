from tkinter import *



def get_product():
	res_txtvar.set(int(entry_num1.get()) * int(entry_num2.get()))
def get_sum():
	res_txtvar.set(int(entry_num1.get()) + int(entry_num2.get()))
def get_diff():
	res_txtvar.set(int(entry_num1.get()) - int(entry_num2.get()))
def get_quotient():
	res_txtvar.set(round(int(entry_num1.get()) / int(entry_num2.get()),2))

window	= Tk() 					# init
window.geometry("500x500")		# windows size
window.resizable(0,0)			# cannot be resize
# global

num1_txtvar		= StringVar()
num2_txtvar		= StringVar()
product_txtvar	= StringVar()
diff_txtvar		= StringVar()
sum_txtvar		= StringVar()
quo_txtvar		= StringVar()
res_txtvar 		= StringVar()

res_txtvar			= StringVar()
window.title("Calculator")	# title of the Program


lbl_header		= Label(window, text="Calculator", font="Arial")
lbl_header.place(x=180,y=20)		# Position

# NUM1
lbl_num1 	= Label(window, text="First Number: ", font="Arial")
lbl_num1.place(x=100, y= 100)
entry_num1 = Entry(window, bd=1, textvariable=num1_txtvar)		# text input
entry_num1.place(x=205, y=100)

# Num2
lbl_num2 	= Label(window, text="Second Number: ", font="Arial")
lbl_num2.place(x=70, y= 140)
entry_num2 = Entry(window, bd=1, textvariable=num2_txtvar)		# text input
entry_num2.place(x=205, y=140)

# BTN SUM
btn_sum	= Button(window, text="SUM", width=15,bg="#0096c7",fg="#ffffff", command = get_sum)
btn_sum.place(x = 120, y=180)
# BTN Diff
btn_diff	= Button(window, text="DIFFERENCE", width=15,bg="#0096c7",fg="#ffffff", command = get_diff)
btn_diff.place(x = 250, y=180)

# BTN PROD
btn_sum	= Button(window, text="PRODUCT", width=15,bg="#0096c7",fg="#ffffff", command = get_product)
btn_sum.place(x = 120, y=220)
# BTN QUO
btn_diff	= Button(window, text="QUOTIENT", width=15,bg="#0096c7",fg="#ffffff", command = get_quotient)
btn_diff.place(x = 250, y=220)

# LBL RES
lbl_res		= Label(window, text="RESULT", font="Arial")
lbl_res.place(x=220,y=270)		# Position

entry_res = Entry(window, bd=1, textvariable=res_txtvar)		# text input
entry_res.place(x=190, y=300)


window.mainloop()				# display the window
