const cheerio = require("cheerio");

// basic request placeholder
const exampleReq = {
  dwell: 30, // how long to wait between loading the page and scraping in seconds
  startURL: "venkmans.com", // the URL that contains links to all other base URLs
  baseURL: "venkmans.com", // the domain base or base for all event pages
  childURLSelector: "", // the pattern to follow for individual event URLs
  dateStart: "", // the date to start scraping from
  dateEnd: "", // the date to stop scraping from
  selectors: {
    // will contain all JQuery selectors for the website
    title: "", // title of the event
    description: "", // description of the event
    price: "", // price of the event
    location: "", // location
    date: "", // date
    image: "", // image
    link: "", // link
    tickets: "", // tickets
    date: ""
  }
};

// function to scrape the start for child links
async function findChildLinks(startURL, baseURL, childURLSelector) {
  // create an array of links to scrape
  let childLinks = [];

  // scrape the main page to find all child links
  await axios.get(startURL).then(function(response) {
    const $ = cheerio.load(response.data);
    $(childURLSelector).each((i, anchor)=>{
        let linkPath = $(anchor).attr("href");
        if(linkPath.includes(baseURL)){
            childLinks.push(linkPath);
        } else if (linkPath.startsWith("/") && baseURL[bareURL.length]==="/"){
          linkPath.substring(1);
          childLinks.push(baseURL+linkPath);
        }
        else{
            childLinks.push(baseURL+linkPath);
        }
        // add case for if baseURL and linkpath both contain /, which would be base//linkpath
    })
  });
  console.log(childLinks);

  return childLinks;
}

// function to scrape individual event page

async function scrapeEvent (eventURL,req) {
  const {selectors,dateStart,dateEnd} = req;
  let scrapedData = {};

  await axios.get(eventURL).then(function(response){
    const $ = cheerio.load(response.data);
    setTimeout(function(){
 
      // PUT FUNCTION HERE
    },dwell*1000)
  })
}