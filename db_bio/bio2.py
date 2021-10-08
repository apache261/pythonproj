import requests as req
from bs4 import BeautifulSoup as BS
from datetime import date
import time
import pytz

bioEndpoint = 'https://mbasic.facebook.com/profile/intro/bio/save/'
bioForm = 'https://mbasic.facebook.com/profile/basic/intro/bio'
cookies = 'datr=HlwbYC_rfr0ckFeYjhYrU9GY; sb=sGUbYJ-OAv9xoCFacJrYFH6_; _fbp=fb.1.1614302165485.161401436; c_user=100004516770908; presence=EDvF3EtimeF1615980976EuserFA21B04516770908A2EstateFDutF0CEchF_7bCC; dnonce=AWkfqsvH9QSbDlpqs2JdsWWucg61mKwPFXbngSncvLjCsF6kBb70Luosa06Z08uU9Pz_UrfCaEBjN0qszalQEzPM; zsh=ASSRYSRUfVVNvlfw8ePcRBYNomRFSlLGoTU68fnZ5DzODbaPUeI53m5PtYVoT1tW3wtDO4jCuIknrkvxzoofziwXvZXYQY5s5G9bSBGZIflyMz0g9afwPLGZRqQ04QsdGB8DVnTNIdTTxGTO-NjyVUVj20pZYJI-4mCtD5DDa0K8uVCI9B3jUEaB9EKhvcPdn7nvDhFxntA2XfZePG5JZ6Vx0lVBlIlDisFLPfRrPPG-XNCzhtAcxGbaErNIEIBkj138ZcwkOh6dr5cATAf7jopVBhhF-GsJnLJGQTZLIAzjbzQ1i6xU0zJ06ukz3HPS; m_pixel_ratio=2; wd=561x740; xs=46%3A2orobRuImxFw0A%3A2%3A1614922339%3A2702%3A14743%3A%3AAcUgK28S9zRtBYeljmX-Rq3CwCAEl-HVDLHjvP5mr5g; fr=1Rr80YGyEsbvZcrV0.AWVhOoNCDBQ_4mL0Xe3giv44SoY.Bgauew.3v.AAA.0.0.Bgauew.AWW0VkIkqJU; x-referer=eyJyIjoiL2x5bm9sLmliYXJyYS4zP21kcz0lMkZwcm9maWxlJTJGaW50cm8lMkZlZGl0JTJGYmlvJTJGJm1kZj0xIiwiaCI6Ii9seW5vbC5pYmFycmEuMz9tZHM9JTJGcHJvZmlsZSUyRmludHJvJTJGZWRpdCUyRmJpbyUyRiZtZGY9MSIsInMiOiJtIn0%3D'
userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68'

headers = {
	"user-agent": userAgent,
	"Cookie": cookies
}


csrf_token = ''
jazoest_token = ''
html_content = '';
WAIT_TIME_SECONDS = 300
tz = pytz.timezone('Asia/Taipei')


def make_get_request(url,header):
	return req.get(url,headers = header)

def get_web_source(url,cookie):
	source = make_get_request(url,cookie).text
	return BS(source, "lxml")

def get_csrf_token(sop):
	token = '';
	try:
		token = sop.find('input', {'name': 'fb_dtsg'}).get('value')
	except:
		token = 'none'
	return token

def get_jazoest_token(sop):
	try:
		token = sop.find('input',{'name': 'jazoest'}).get('value')
	except:
		token = 'none'
	return token
def generate_payload(csrf, jazoest, bio):
	formdata = {
	'fb_dtsg':'',
	'jazoest': '',
	'bio': ''
}
	formdata['fb_dtsg'] = csrf
	formdata['jazoest'] = jazoest
	formdata['bio'] = bio
	return formdata
current_datetime = datetime.now().astimezone(tz).strftime("%B %d, %Y %I:%M %p")
soup = get_web_source(bioForm, headers)
csrf_token = get_csrf_token(soup)
jazoest_token = get_jazoest_token(soup)
payload = generate_payload(csrf_token,jazoest_token,current_datetime)
r = req.post(bioEndpoint,headers=headers,data=payload)
print(r)
