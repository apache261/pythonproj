import requests as req
import json as j

useragent 		= 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68';
accept 			= 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
host 			= 'www.itextpad.com'
targethost		= 'http://www.itextpad.com/jeelynn'
targetEndpoint	= 'http://www.itextpad.com/save/autoSave/0'
Origin			= 'http://www.itextpad.com'
path			= 'jeelynn'
target_cookie 	= 'iTextpad'
url_cookie		= 'uri'
name_pad 		= 'Untitled'
pad_id 			=  1
txtentry		= ''
contype 		= 'application/x-www-form-urlencoded; charset=UTF-8'
cookies			=  "name=value; name2=value2"

headers 		= {
					"User-Agent":	useragent,
					"Accept": 		accept,
					"Host":		 	host,
					"Cookie": 		cookies,
					"Content-Type": contype,
					"Origin":		Origin
				}

payload 		= {
					"padName":	name_pad,
					"padTabId":	pad_id,
					"padText": 	'',
					"uri": 		path
				}



# Perform Get Request
def performGet(url, header):
	return req.get(url, headers=header)

# Perfrom POST request
def performPost(url, header, content):
	return req.post(url,headers=header, data=content)


request = performGet(targethost, headers)

# get provided cookie
# overwrite iTextpad cookie cookie

newCookie = [url_cookie,'=',path,';',target_cookie,'=',request.cookies[target_cookie]]



headers["Cookie"] 		= ''.join(newCookie)
payload['padText']		= 'TESsdScxcvsdfsdfsdSS'
posted = performPost(targetEndpoint,headers,payload)

print(posted.json())

