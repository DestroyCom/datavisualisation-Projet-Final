from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
import time

#Create the header
header = ['ID', 'Pays', 'Nmb de concert']

#Ask to the user which band they want the data of
where = str(input('Enter the name of the band whose data you want to retrieve : '))

#Create a firefox instance & Go on the setList Website
driver = webdriver.Firefox()
driver.get('https://www.setlist.fm/')

#Search the band in the setlist database & enter
searchQuery = driver.find_element_by_xpath('/html/body/div[2]/div[3]/div[1]/div/div/div/form/div/input')
searchQuery.send_keys(where)
searchQuery.send_keys(Keys.RETURN)

#Wait till the cookies popup apparition
time.sleep(5)

#accept the cookies
driver.find_element_by_xpath('/html/body/div[1]/div/div/div/div[2]/div/button[2]').click()

#Create the path & the name of the global csv file
who = './bots/setList-Scraper/data/' + where + '-SetList.csv'

try :
    #Go on the data concert tab
    driver.find_element_by_xpath('/html/body/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div/div[2]/ul/li[2]/a').click()
    driver.find_element_by_xpath('/html/body/div[2]/div[3]/div[3]/div/div/div[2]/div/div[2]/div/div[1]/ul/li[6]/a').click()
except Exception as e:
    print(e)
    whereTwo = str(input('ERROR ! Enter the Setlist URL of the band whose data you want to retrieve : '))
    driver.close()
    driver = webdriver.Firefox()
    driver.get(whereTwo)
    driver.find_element_by_xpath('/html/body/div[2]/div[3]/div[3]/div/div/div[2]/div/div[2]/div/div[1]/ul/li[6]/a').click()

#Select all the datas
nomPays = driver.find_elements_by_css_selector('.songName>a>span')
placeDuPays = driver.find_elements_by_css_selector('.countId')
nombreDeConcert = driver.find_elements_by_css_selector('.barChart>span')

#get the page URL for later
getURL = driver.current_url

#Initialize some var
datas = []
i = 0

#Get the data into a list
for pays in nomPays:
    data = []
    data.append(i + 1)
    data.append(pays.text)
    data.append(nombreDeConcert[i].text)
    i = i + 1
    datas.append(data)
 
#Write the csv file
with open(str(who), 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow(header)
    writer.writerows(datas)

    f.close()


#Selectionne le nombre d'année cliquable & leurs texte
selectYear = driver.find_elements_by_css_selector('.artistplayCounts div>ul>li>a:nth-child(1)')
selectYearText = driver.find_elements_by_css_selector('.artistplayCounts div>ul>li>a:nth-child(1)>span')

#Donne la date de départ + 1
dateStarted = int(selectYearText[0].text) + 1

#calcul le nombre de concert du grp
numberOfYears = int(selectYearText[0].text ) - int(selectYearText[len(selectYearText) - 1].text)

#Ajoute les data pour chaque année
for h in range(numberOfYears+1):
    #Change l'année selectionné
    dateStarted = dateStarted - 1
    newPlace = getURL + '?year=' + str(dateStarted)
    driver.get(str(newPlace)) 
   
    nomPaysDate = driver.find_elements_by_css_selector('.songName>a>span')
    placeDuPaysDate = driver.find_elements_by_css_selector('.countId')
    nombreDeConcertDate = driver.find_elements_by_css_selector('.barChart>span')
    
    #Initialize some var
    datasDate = []
    y = 0

    #Get the data into a list
    for pays in nomPaysDate:
        dataDate = []
        dataDate.append(y + 1)
        dataDate.append(pays.text)
        dataDate.append(nombreDeConcertDate[y].text)
        y = y + 1
        datasDate.append(dataDate)
    
    whoDate = './bots/setList-Scraper/data/' + str(dateStarted) + '-' + where + '-SetList.csv'

    #Write the csv file for the date
    with open(str(whoDate), 'w', encoding='UTF8', newline='') as file:
        writer = csv.writer(file)

        writer.writerow(header)
        writer.writerows(datasDate)

        f.close()
    
    

#Close the firefox tab & display a message
driver.close()


print('The datas is now exported !')
