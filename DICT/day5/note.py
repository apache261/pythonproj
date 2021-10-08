from tkinter import *




def appen_num(val):
	result_txtvar.set(result_txtvar.get() + str(val))
def clear():
	result_txtvar.set("")
def evaluate():
	try:
		x  = eval(result_txtvar.get())
		result_txtvar.set(str(x))
	except ZeroDivisionError:
		result_txtvar.set("Math Error")
	except:
		result_txtvar.set("Syntax Error")


main_window	= Tk()

main_window.geometry("400x400")
main_window.resizable(0,0)
main_window.title("Simple Calculator")
main_window.configure(background = "#14213d")

# Vars
result_txtvar 	= StringVar()

main_entry		= Entry(main_window,bd=2, font="Arial 20 bold", fg="black", bg="#A8C64E", textvariable=result_txtvar, justify=RIGHT)
main_entry.place(x=50, y=30, height=40, width=300)


btn_seven		= Button(main_window, text="7", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(7))
btn_seven.place(x=50,y=80)

btn_eight		= Button(main_window, text="8", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(8))
btn_eight.place(x=140,y=80)

btn_nine		= Button(main_window, text="9", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(9))
btn_nine.place(x=230,y=80)

btn_div		= Button(main_window, text="/", font="Arial", bg="#2b2d42", fg="#ffffff",width=2, command=lambda: appen_num("/"))
btn_div.place(x=320,y=80)


btn_four		= Button(main_window, text="4", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(4))
btn_four.place(x=50,y=120)

btn_five		= Button(main_window, text="5", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(5))
btn_five.place(x=140,y=120)

btn_six		= Button(main_window, text="6", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(6))
btn_six.place(x=230,y=120)


btn_mul		= Button(main_window, text="X", font="Arial", bg="#2b2d42", fg="#ffffff",width=2, command=lambda: appen_num("*"))
btn_mul.place(x=320,y=120)


btn_one		= Button(main_window, text="1", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(1))
btn_one.place(x=50,y=160)

btn_two		= Button(main_window, text="2", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(2))
btn_two.place(x=140,y=160)

btn_three	= Button(main_window, text="3", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(3))
btn_three.place(x=230,y=160)

btn_dif		= Button(main_window, text="-", font="Arial", width=2,  bg="#2b2d42", fg="#ffffff", command=lambda: appen_num("-"))
btn_dif.place(x=320,y=160)

btn_dot		= Button(main_window, text="Clear", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=clear)
btn_dot.place(x=50,y=200)

btn_zero	= Button(main_window, text="0", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=lambda: appen_num(0))
btn_zero.place(x=140,y=200)

btn_equal	= Button(main_window, text="=", font="Arial", bg="#2b2d42", fg="#ffffff",width=8, command=evaluate)
btn_equal.place(x=230,y=200)

btn_sum		= Button(main_window, text="+", font="Arial", bg="#2b2d42", fg="#ffffff",width=2, command=lambda: appen_num("+"))
btn_sum.place(x=320,y=200)

main_window.mainloop()