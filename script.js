//Globals
var dayText = document.getElementsByClassName("description");



//1. Display current time using Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");

//2. Click event to save text area content to local storage
$(".saveBtn").click(function(){
    localStorage.setItem("dayText", JSON.stringify(dayText));
  
});
    
  


  	
  
//3. When app opens, display content for each time block from local storage.
    //It can be done with a loop (more efficient) or by targeting each time block separately.



    //4. Change time block background-color depending on the current hour (past, present, and future).