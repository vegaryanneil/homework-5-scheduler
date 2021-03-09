$(document).ready(function () {
  // moment.js to grab the current date and time
  var localTime = moment().format("LLL");
  setInterval(1000);
  //displayed current date on page in p ID "currentDay".
  $("#currentDay").text(localTime);
  //set up localstorage to store info added on calendar time blocks
  var getThis = JSON.parse(localStorage.getItem("getThis")) || [];
  //pulling each hour block to compare to current time to change color of timeblock to reflect the time of day future, past, or present.
  $(".time").each(function () {
    // creates integers of the time block and current time so I can compare the numbers
    var timeBlock = parseInt($(this).attr("id"));
    var currentTime = parseInt(moment().hours());
    // If time is in past time hour block current time - it will be set to past and color change based on CSS
    if (timeBlock < currentTime) {
      $(this).siblings().addClass("past");
    }
    // If time is in the future hour block compared to current time - it will be set to future
    if (timeBlock > currentTime) {
      $(this).siblings().addClass("future");
    }
    // If time is in the same hour block - it will be set to present
    if (timeBlock === currentTime) {
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
