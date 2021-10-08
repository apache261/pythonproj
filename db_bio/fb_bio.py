import requests as req
from bs4 import BeautifulSoup as BS
from datetime import datetime
import time
import pytz

bioEndpoint = 'https://mbasic.facebook.com/profile/intro/bio/save/'
bioForm = 'https://mbasic.facebook.com/profile/basic/intro/bio'
#Main
cookies = 'datr=XDeaX3oxLPSBzEk31o8G5cCp; sb=c0OaX8cjYEbPgQNBMUfbq57-; _fbp=fb.1.1614179212779.1530857465; c_user=100007760077419; xs=17%3AXa6at0bwrHyMkg%3A2%3A1616683255%3A7267%3A7963; dpr=2; fr=0V5aRdUwAVLBJuIcd.AWXyH4PhmJ7A9yCSFnV2GvEcdWQ.BfmjZn.IH.GBd.0.0.BgaRpH.; dnonce=AWkJTeHJvUw4EazbVrbFFxZ2ausVaXygqbnIx6kj5RfDvVi7S1nPzro9X5UhNycAghcmENwyRGIBnC_ehzi8uYDj; zsh=ASQQUU3LDHlAGpgo-PqE-UWHlSY6HV4BW3YpTBbSizdcYUaX_IqciH6XxgTTiOjG4s2B0pIrsvpUtZB9KjPoIcxVY5tjdBg53u0Z3WrS04xkcDJRqZ7-6afVPvrRMSCmxJRYRSinCiMaahczPMqR5Pmg3Nw6p6Wj7v1cpQ0F37RS6TV3MnM2s7CeqjVahMtMe_qmnqbkYtT-ZkKlxd9h-R8g1yunSQ_GHMe-D0QX7yH-bWkRG76W590PJmAiCjQPtRTVZz1W48NMNkXs2mek0eWHn9VSOhD9aqdZlsKidlpmX8IttVGnhsGAVzHUJa7C; m_pixel_ratio=2; wd=360x524; x-referer=eyJyIjoiL0x5bmUuYWxsP21kcz0lMkZwcm9maWxlJTJGaW50cm8lMkZlZGl0JTJGYmlvJTJGJm1kZj0xIiwiaCI6Ii9MeW5lLmFsbD9tZHM9JTJGcHJvZmlsZSUyRmludHJvJTJGZWRpdCUyRmJpbyUyRiZtZGY9MSIsInMiOiJtIn0%3D'

#Secondary
#cookies = 'datr=HlwbYC_rfr0ckFeYjhYrU9GY; sb=sGUbYJ-OAv9xoCFacJrYFH6_; _fbp=fb.1.1614302165485.161401436; c_user=100004516770908; presence=EDvF3EtimeF1615980976EuserFA21B04516770908A2EstateFDutF0CEchF_7bCC; dnonce=AWkfqsvH9QSbDlpqs2JdsWWucg61mKwPFXbngSncvLjCsF6kBb70Luosa06Z08uU9Pz_UrfCaEBjN0qszalQEzPM; zsh=ASSRYSRUfVVNvlfw8ePcRBYNomRFSlLGoTU68fnZ5DzODbaPUeI53m5PtYVoT1tW3wtDO4jCuIknrkvxzoofziwXvZXYQY5s5G9bSBGZIflyMz0g9afwPLGZRqQ04QsdGB8DVnTNIdTTxGTO-NjyVUVj20pZYJI-4mCtD5DDa0K8uVCI9B3jUEaB9EKhvcPdn7nvDhFxntA2XfZePG5JZ6Vx0lVBlIlDisFLPfRrPPG-XNCzhtAcxGbaErNIEIBkj138ZcwkOh6dr5cATAf7jopVBhhF-GsJnLJGQTZLIAzjbzQ1i6xU0zJ06ukz3HPS; m_pixel_ratio=2; wd=561x740; xs=46%3A2orobRuImxFw0A%3A2%3A1614922339%3A2702%3A14743%3A%3AAcUgK28S9zRtBYeljmX-Rq3CwCAEl-HVDLHjvP5mr5g; fr=1Rr80YGyEsbvZcrV0.AWVhOoNCDBQ_4mL0Xe3giv44SoY.Bgauew.3v.AAA.0.0.Bgauew.AWW0VkIkqJU; x-referer=eyJyIjoiL2x5bm9sLmliYXJyYS4zP21kcz0lMkZwcm9maWxlJTJGaW50cm8lMkZlZGl0JTJGYmlvJTJGJm1kZj0xIiwiaCI6Ii9seW5vbC5pYmFycmEuMz9tZHM9JTJGcHJvZmlsZSUyRmludHJvJTJGZWRpdCUyRmJpbyUyRiZtZGY9MSIsInMiOiJtIn0%3D'
#third
# cookies = 'datr=HlwbYC_rfr0ckFeYjhYrU9GY; sb=sGUbYJ-OAv9xoCFacJrYFH6_; _fbp=fb.1.1614302165485.161401436; zsh=ASSRYSRUfVVNvlfw8ePcRBYNomRFSlLGoTU68fnZ5DzODbaPUeI53m5PtYVoT1tW3wtDO4jCuIknrkvxzoofziwXvZXYQY5s5G9bSBGZIflyMz0g9afwPLGZRqQ04QsdGB8DVnTNIdTTxGTO-NjyVUVj20pZYJI-4mCtD5DDa0K8uVCI9B3jUEaB9EKhvcPdn7nvDhFxntA2XfZePG5JZ6Vx0lVBlIlDisFLPfRrPPG-XNCzhtAcxGbaErNIEIBkj138ZcwkOh6dr5cATAf7jopVBhhF-GsJnLJGQTZLIAzjbzQ1i6xU0zJ06ukz3HPS; locale=en_US; c_user=100012342729398; xs=47%3AHh45kTPr6pkc0g%3A2%3A1617685691%3A18800%3A8034; fr=1IMxmjlaKvguJ9cOp.AWWo76BMgAvAYLQjHu8Ys8twJ8A.Bga-yz.3v.AAA.0.0.Bga-y6.AWV4lnIWRdc; presence=C%7B%22t3%22%3A%5B%7B%22i%22%3A%22p.447686715562578%22%7D%5D%2C%22utc3%22%3A1617687256244%2C%22v%22%3A1%7D; m_pixel_ratio=2; wd=242x740; x-referer=eyJyIjoiL2l2YW4uaGV4ZWRpdD9tZHM9JTJGcHJvZmlsZSUyRmludHJvJTJGZWRpdCUyRmJpbyUyRiZtZGY9MSIsImgiOiIvaXZhbi5oZXhlZGl0P21kcz0lMkZwcm9maWxlJTJGaW50cm8lMkZlZGl0JTJGYmlvJTJGJm1kZj0xIiwicyI6Im0ifQ%3D%3D'

userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68'

headers = {
	"user-agent": userAgent,
	"Cookie": cookies
}


csrf_token = ''
jazoest_token = ''
html_content = '';
WAIT_TIME_SECONDS = 3600
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

while True:
	current_datetime = datetime.now().astimezone(tz).strftime("%B %d, %Y %I:%M %p")
	soup = get_web_source(bioForm, headers)
	csrf_token = get_csrf_token(soup)
	jazoest_token = get_jazoest_token(soup)
	payload = generate_payload(csrf_token,jazoest_token,current_datetime)
	r = req.post(bioEndpoint,headers=headers,data=payload)
	print(current_datetime)
	time.sleep(WAIT_TIME_SECONDS)
