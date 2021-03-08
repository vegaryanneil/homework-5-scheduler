// // var currentHour = moment().format("LT");
// var taskContainer = document.getElementsByClassName("task-container");
// var currentHour = moment().format("LT");
// var parseHour = parseInt(currentHour);
// var val = parseInt(taskContainer);

// $(".task-container").each(function () {
//   if (val > parseHour) {
//     $(".task-container").css("backgroundColor", "#d3d3d3");
//   } else if (val < parseHour) {
//     $(".task-container").css("backgroundColor", "#77dd77");
//   } else if (val === parseHour) {
//     $(".task-container").css("backgroundColor", "#ff6961");
//   }
// });

$(document).ready(function () {
  // used moment.js to grab the current date and time
  var time = moment().format("LLLL");
  //displayed current date and time on page in p ID "currentDay".
  $("#currentDay").text(time);
  //setting up localstorage to store info added on calendar time blocks
  var getThis = JSON.parse(localStorage.getItem("getThis")) || [];
  //pulling each hour block to compare to current time to change color of timeblock to reflect the time of day future, past, or present.
  $(".hour").each(function () {
    var diffTimes = parseInt($(this).attr("id"));
    var timeNow = parseInt(moment().hours());
    //if timeblock is beyond the time now, it should be the past
    if (diffTimes < timeNow) {
      $(this).siblings().addClass("past");
    }
    //if timeblock over the time now, it is the future
    if (diffTimes > timeNow) {
      $(this).siblings().addClass("future");
    }
    //if time block is equal to time now then it should be red
    if (diffTimes === timeNow) {
      $(this).siblings().addClass("present");
    }
  });
  // when the page loads lets retrieve in localstorage and pop in any box saved
  $("input").each(function () {
    var timeAgain = $(this).prev().attr("id");
    for (var i = 0; i < getThis.length; i++) {
      if (timeAgain === getThis[i].time) {
        $(this).val(getThis[i].note);
      }
    }
  });
  //when the save button is clicked........
  $(".saveBtn").on("click", function () {
    //make a variable to call on the input box
    var addToCalendar = $(this).prev().val();
    //created variable to grab time by ID of area with input box that has info
    var time = $(this).prev().prev().attr("id");
    //used that time to create object to push to localstorage along with message to create array
    getThis.push({ time: time, note: addToCalendar });
    //took that object getThis and saved a string version into local storage
    localStorage.setItem("getThis", JSON.stringify(getThis));
  });
});
