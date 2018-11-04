from selenium import webdriver

browser = webdriver.Chrome()
browser.set_window_position(-2000, 0)

browser.get("https://www.google.com/flights#flt=HOU.DFW.2018-11-19*DFW.HOU.2018-11-23;c:USD;e:1;sd:1;t:f")
browser.implicitly_wait(2)
nav = browser.find_element_by_class_name("gws-flights-results__best-flights")

print(nav.text)
browser.quit()
