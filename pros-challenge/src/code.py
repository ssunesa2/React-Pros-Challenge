from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
# enable browser logging
d = DesiredCapabilities.CHROME
d['loggingPrefs'] = { 'browser':'ALL' }
options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
browser = webdriver.Chrome("C:\\Users\\vedan\\Desktop\\React-Pros-Challenge\\pros-challenge\\src\\chromedriver.exe", options=options)
site = webdriver.Chrome(desired_capabilities=d)

site.get("localhost:3000")

split = []
while len(split) == 0:
	entry = site.get_log('browser')
	for log in entry:
		if "IMPORTANT" in str(log) and "2018" in str(log):
			split = str(log).split(" ")



departxy = str(split[6]).replace('"','').replace("'", "").replace(',','')
arrivexy = str(split[7]).replace('"','').replace("'", "").replace(',','')
depDateYMD = str(split[8]).replace('"','').replace("'", "").replace(',','')
#print(split[6].replace('"','').replace("'", "").replace(',',''))
# print(split[7])

uuuu = F"https://www.google.com/flights#flt={str(split[6])}.{str(split[7])}.{depDateYMD};c:USD;e:1;sd:1;t:f;tt:o"
#print(uuuu)
browser.get("https://www.google.com/flights#flt="+departxy+"."+arrivexy+"."+depDateYMD+";c:USD;e:1;sd:1;t:f;tt:o")

#print(uuuu)
#print(browser.current_url)
#browser.implicitly_wait(2)
nav = browser.find_element_by_class_name("gws-flights-results__best-flights")

#print(nav.text)

lines = nav.text.splitlines()
# with open('flights.csv', 'w', newline='') as csvfile:
# 	csvwriter = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
# 	csvwriter.writerow(['Time', 'Airline', 'Duration', 'Airports', 'Cost'])
# 	index = 3
# 	while index+7 < len(lines):
# 		csvwriter.writerow([lines[index], lines[index+1], lines[index+3], lines[index+4], lines[index+7]])
# 		index += 8
o=open("flights.txt", "w+")
o.write("Time\tAirline\tDuration\tAirports\tCost\n")


for array in lines:
	if "Operated" in array:
		del lines[lines.index(array)]

index = 3
while index+5 < len(lines):
	o.write(lines[index]+"---" +lines[index+1]+"---" +lines[index+2]+"---"+ lines[index+3]+"---"+ lines[index+5]+"\n")
	#print(lines[index]+"\t" +lines[index+1]+"\t" +lines[index+2]+"\t"+ lines[index+3]+"\t"+ lines[index+5]+"\n")
	index += 6

#print(lines)
o.close()
browser.quit()
