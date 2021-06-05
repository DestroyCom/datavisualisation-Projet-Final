from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
import time

where = str(input('Enter the URL of the page of the group whose data you want to retrieve : '))

driver = webdriver.Firefox()
driver.get(where)

header = ['Titre', 'Label', 'Date de sortie', 'Niveau max atteint', 'top 1', 'top 10', 'top 20', 'top 40', 'top 75',
          ' top 100']

datasSingle = []

time.sleep(10)
driver.find_element_by_class_name('css-47sehv').click()

who = driver.find_element_by_css_selector('#main > article > div > div.grid__cell.unit-2-3--desktop > header > h1').text
who = who + '.csv'

try:
    singles = driver.find_elements_by_class_name('chart-runs-icon')
    for icone in singles:
        try:
            icone.click()
        except Exception as e:
            driver.find_element_by_css_selector('#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > nav > ul > li:nth-child(2) > a').click()
            icone.click()
            datasSingle.append(['Albums'])
            print(e)
        time.sleep(3)
        data = []

        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.track-info > div > div.grid__cell.unit-7-12--desktop > table > tbody > tr:nth-child(1) > td:nth-child(2)').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.track-info > div > div.grid__cell.unit-7-12--desktop > table > tbody > tr:nth-child(3) > td:nth-child(2)').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.track-info > div > div.grid__cell.unit-7-12--desktop > table > tbody > tr:nth-child(5) > td:nth-child(2)').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.track-info > div > div.grid__cell.unit-2-12--desktop > div > span').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(2) > div > div').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(3) > div > div').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(4) > div > div').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(5) > div > div').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(6) > div > div').text)
        data.append(driver.find_element_by_css_selector(
            '#main > article > div > div.grid__cell.unit-2-3--desktop > section.artist-charts > div.tab-page.selected > div > table > tbody > tr.chart-runs > td > div > div.weeks-in > div > section > div:nth-child(7) > div > div').text)

        datasSingle.append(data)

        icone.click()
except Exception as e:
    print('oklm singles', e)


with open(str(who), 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow(header)
    writer.writerow(['Singles', ''])
    writer.writerows(datasSingle)

    f.close()

driver.close()
print('The datas is now exported !')
