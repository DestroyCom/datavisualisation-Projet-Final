from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
import time
import os
from os.path import join, dirname
#from dotenv import load_dotenv

#dotenv_path = join(dirname(__file__), '.env')
#load_dotenv(dotenv_path)
#test = os.environ.get("EMAIL")
#print(test)

#Create the header
header = ['Ville, Pays',  'Auditeurs']

#Ask to the user which band they want the data of
where = str(input('Enter the name of the band whose data you want to retrieve : '))

#Create a firefox instance & Go on the setList Website
driver = webdriver.Firefox()
driver.get('https://open.spotify.com/search')

time.sleep(5)

cookies =  driver.find_element_by_xpath('//*[@id="onetrust-accept-btn-handler"]')
cookies.click()

search = driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/div[1]/header/div[3]/div/div/form/input')
search.send_keys(where)
search.send_keys(Keys.RETURN)

time.sleep(3)
group = driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/div[3]/main/div[2]/div[2]/div/div/div[2]/div/div/div/section[1]/div[2]/div/div/div/div[4]')
group.click()

time.sleep(3)
infos = driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/div[3]/main/div[2]/div[2]/div/div/div[2]/section/div/div[2]/div[3]/div[2]/div[1]/div')
infos.click()

auditPerMonth = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[3]/div[1]')

cityOne = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[4]/div[1]')
auditCityOne = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[4]/div[2]')
cityTwo = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[5]/div[1]')
auditCityTwo = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[5]/div[2]')
cityThree = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[6]/div[1]')
auditCityThree = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[6]/div[2]')
cityFour = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[7]/div[1]')
auditCityFour = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[7]/div[2]')
cityFive = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[8]/div[1]')
auditCityFive = driver.find_element_by_xpath('/html/body/div[13]/div/div/div/div[4]/div/div/div[2]/div/div[1]/div[8]/div[2]')


one = [cityOne.text, auditCityOne.text]
two = [cityTwo.text, auditCityTwo.text]
three = [cityThree.text,auditCityThree.text]
four = [cityFour.text, auditCityFour.text]
five = [cityFive.text, auditCityFive.text]

print(one)

who = './bots/spotify-Scraper/data/' + where + '-spotify.csv'

with open(str(who), 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow(header)
    writer.writerow(one)
    writer.writerow(two)
    writer.writerow(three)
    writer.writerow(four)
    writer.writerow(five)
    writer.writerow(['Auditeurs par mois'])
    writer.writerow([auditPerMonth.text])

    f.close()

driver.close()
print('The datas is now exported !')
