import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/e");
  },
  // Get all events by sort
  getEventsBySort: function(sort, order) {
    return axios.get("/api/e/" + sort + "/" + order);
  },
  // Create new event
  createEvent: function(eventData) {
    console.log(eventData);
    return axios.post("/api/e", eventData)
  },
  createUser: function(userData){
    console.log(userData)
    return axios.post("/api/u",userData)
  },
  getUserID: function(username){
    console.log("finding DB ID for user", username)
    return axios.get("/api/u/find/"+username)
  },
  getUser: function(userID){
    console.log("finding user", userID)
    return axios.get("api/u/"+userID)
  },
  saveEvent: function(eventID,userID){
    console.log("saving event",eventID,"to user",userID);
    return axios.put("")
  }

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
