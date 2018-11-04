import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
browser = webdriver.Chrome("C:\\Users\\vedan\\Desktop\\React-Pros-Challenge\\pros-challenge\\src\\chromedriver.exe", options=options)
site = webdriver.Chrome("C:\\Users\\vedan\\Desktop\\React-Pros-Challenge\\pros-challenge\\src\\chromedriver.exe", options=options)
while not os.path.exists("data.txt"):
	time.sleep(1)

f=open("data.txt", "r")
depart = f.readline()
arrive = f.readline()
depDateYMD = f.readline()
f.close()

os.remove("data.txt")


browser.get("https://www.google.com/flights#flt="+depart+"."+arrive+"."+depDateYMD+";c:USD;e:1;sd:1;t:f;tt:o")
site.get("localhost:3000")

for entry in site.get_log('browser'):
	print(entry)

browser.implicitly_wait(4)
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
index = 3

count = 0

for array in lines:
	if "Operated" in array:
		del lines[lines.index(array)]

len(lines)

while index+5 < len(lines):
	o.write(lines[index]+"---" +lines[index+1]+"---" +lines[index+2]+"---"+ lines[index+3]+"---"+ lines[index+5]+"\n")
	#print(lines[index]+"\t" +lines[index+1]+"\t" +lines[index+2]+"\t"+ lines[index+3]+"\t"+ lines[index+5]+"\n")
	index += 6

#print(lines)
o.close()
browser.quit()
