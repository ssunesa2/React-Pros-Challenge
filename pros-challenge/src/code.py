import csv
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
browser = webdriver.Chrome(".\\chromedriver.exe", options=options)

depart = "PVR"
arrive = "LCY"
depDateYMD = "2018-11-19"
arrDateYMD = "2018-11-20"

browser.get("https://www.google.com/flights#flt="+depart+"."+arrive+"."+depDateYMD+"*"+arrive+"."+depart+"."+arrDateYMD+";c:USD;e:1;sd:1;t:f")

browser.implicitly_wait(2)
nav = browser.find_element_by_class_name("gws-flights-results__best-flights")

lines = nav.text.splitlines()
with open('flights.csv', 'w', newline='') as csvfile:
	csvwriter = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
	csvwriter.writerow(['Time', 'Airline', 'Duration', 'Airports', 'Cost'])
	index = 3
	while index+7 < len(lines):
		csvwriter.writerow([lines[index], lines[index+1], lines[index+3], lines[index+4], lines[index+7]])
		index += 9

browser.quit()