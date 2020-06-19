//Globals
var dayText = $(".description");

//1. Display current time using Moment.js
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
var currentTime = moment().format("YYYY-MM-DD HH:mm");

//2. Click event to save text area content to local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  //Grabbing the previous elements value
  var preValue = $(this).prev("textarea").val();
  var time = $(this).attr("data-time");
  localStorage.setItem(time, preValue);

});

//3. When app opens, display content for each time block from local storage.
//It can be done with a loop (more efficient) or by targeting each time block separately.
$("#nineam").val(localStorage.getItem("9"));
$("#tenam").val(localStorage.getItem("10"));
$("#elevenam").val(localStorage.getItem("11"));
$("#twelvepm").val(localStorage.getItem("12"));
$("#onepm").val(localStorage.getItem("1"));
$("#twopm").val(localStorage.getItem("2"));
$("#threepm").val(localStorage.getItem("3"));
$("#fourpm").val(localStorage.getItem("4"));
$("#fivepm").val(localStorage.getItem("5"));


//4. Change time block background-color depending on the current hour (past, present, and future).
function timeSlot() {
  const timeRightNow = moment().hours();
  $(".row").each(function () {
    const appRow = parseInt($(this).attr("id").split("-")[1]);

    if (appRow < timeRightNow) {
      $(this).addClass("future");
    }
    else if (appRow === timeRightNow) {
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");


    }

  });
}
timeSlot()
