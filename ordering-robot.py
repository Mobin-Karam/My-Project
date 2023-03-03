from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


options = Options()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()),
                          options=options)

driver.get("https://food.razi.ac.ir/")
driver.maximize_window()


uname = driver.find_element("id", "username")
uname.send_keys("4019503020")
upass = driver.find_element("id", "password")
upass.send_keys("3220219039")
driver.find_element(By.TAG_NAME, "button").click()

links = driver.find_elements(
    "xpath", "//ul[contains(@class, 'sidebar-menu tree')][.//li[contains(@class, 'treeview')]][..//a[text()[contains(., رزرو غذا)]]]")

for link in links:
    if "رزرو غذا" in link.get_attribute("innerHTML"):
        link.click()
        break

# label_finds = driver.find_elements(By.XPATH, "//a[@href]")
# for label_find in label_finds:
#     print(label_find.get_attribute("innerHTML"))
