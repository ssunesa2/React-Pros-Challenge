from selenium import webdriver

browser = webdriver.Chrome()
browser.set_window_position(-2000, 0)

depart = "HOU"
arrive = "DFW"
depDateYMD = "2018-11-19"
arrDateYMD = "2018-11-20"

browser.get("https://www.google.com/flights#flt="+depart+"."+arrive+"."+depDateYMD+"*"+arrive+"."+depart+"."+arrDateYMD+";c:USD;e:1;sd:1;t:f")

browser.implicitly_wait(2)
nav = browser.find_element_by_class_name("gws-flights-results__best-flights")

print(nav.text)

browser.quit()
