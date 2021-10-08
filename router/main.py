from datetime import datetime, timezone
import time
import requests as req
import pytz




tz = pytz.timezone('Asia/Taipei')
message_api_endpoint = 'http://192.168.254.254/goform/goform_get_cmd_process?isTest=true&cmd=sms_data_total&page=0&data_per_page=5&mem_store=1&order_by=order%20by%20id%20desc&tags=0&_={}'
delay_seconds = 2
def get_message(milliseconds):
	return req.get(message_api_endpoint.format(milliseconds))
def get_milleseconds():
	return round((datetime.now().astimezone(tz)).timestamp() * 1e3)

while True:
	milliseconds = get_milleseconds()
	print(get_message(1618456730463).text)
	time.sleep(delay_seconds)

