import request from 'superagent'

const CALENDAR_ID = 'https://calendar.google.com/calendar/embed?src=darup67%40gmail.com&ctz=America%2FNew_York'
const API_KEY = 'AIzaSyBfMsM5cgC0WckrJ73bckil5Nxzz4jOO48'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}