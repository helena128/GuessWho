from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import json
import random

def getLink(searchPhrase):
    searchUrl = 'https://www.google.com/search?tbm=isch&itp:face&tbs=isz:s&tbs=itp:photo&q=%s' % (
        searchPhrase.replace(" ", "+").replace(".", ""))

    req = Request(searchUrl, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'})
    resource = urlopen(req)
    webpage = resource.read().decode(resource.headers.get_content_charset())
    
    soup = BeautifulSoup(webpage, "html.parser")
    linkSource = soup.findAll("div", {"class": "rg_meta notranslate"})
    links = []

    for a in linkSource:
        links.append(json.loads(a.text)["ou"])

    #print(links[random.randint(0, len(links) - 1)])
    return links[random.randint(0, len(links) - 1)]


if __name__ == '__main__':
    getLink('Lzzy Hale')