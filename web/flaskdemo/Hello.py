from flask import Flask,render_template
from markupsafe import escape

app = Flask(__name__)



@app.route('/')
def hello_world():
    return 'helfgdfgdfep!'

@app.route('/page1')
def first_page():
	return 'This page 1'


@app.route('/name/<username>')
def show_user_profile(username):
    return 'User %s' % escape(username)


@app.route('/page2')
def page_two():

	param1='Lynol'
	param2 = 21
	return render_template('home.html',author=param1,age=param2)