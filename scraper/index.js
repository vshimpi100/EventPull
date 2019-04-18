const cheerio = require("cheerio");

// basic request placeholder
const exampleReq = {
  dwell: 30, // how long to wait between loading the page and scraping in seconds
  startURL: "venkmans.com", // the URL that contains links to all other base URLs
  baseURL: "venkmans.com", // the domain base or base for all event pages
  childURLSelector: "", // the pattern to follow for individual event URLs
  dateFormat: "", // the format (See Moment.js docs) for the dates on the page
  dateStart: "", // the date to start scraping from
  dateEnd: "", // the date to stop scraping from
  selectors: {
    // will contain all JQuery selectors for the website
    title: {
      query: "",
      modifier: "",
      attribute: "",
    }, // title of the event
    description: {
      query: "",
      modifier: "",
      attribute: ""
    }, // description of the event
    price: {
      query: "",
      modifier: "",
      attribute: ""
    }, // price of the event
    location: {
      query: "",
      modifier: "",
      attribute: ""
    }, // location
    date: {
      query: "",
      modifier: "",
      attribute: ""
    }, // date
    image: {
      query: "",
      modifier: "",
      attribute: ""
    }, // image
    link: {
      query: "",
      modifier: "",
      attribute: ""
    }, // link
    tickets: {
      query: "",
      modifier: "",
      attribute: ""
    }, // tickets
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

    // check the event's date falls where we need it to
    const eventDate = 

    // scrape the data of the event
    setTimeout(function(){
      for (const key in selectors) {
        if (key.hasOwnProperty(key)) {
          const selector = selectors[key];
          if ($(selector.query)){
            switch (selector.modifier) {
              case "attr":
                scrapedData[key] = $(selector.query).attr(selector.attribute);
                break;
              case "text":
                scrapedData[key] = $(selector.query).text();
                break;
              case "trim":
                scrapedData[key] = $(selector.query).text().trim();
                break;
              default:
                scrapedData[key] = $(selector.query);
                break;
            }
          }
        }
      }
    },dwell*1000)
  })
}