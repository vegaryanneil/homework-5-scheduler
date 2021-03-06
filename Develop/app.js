// Set up an interval to continously update the time
var dateTime = null,
  date = null;

var update = function () {
  date = moment(new Date());
  dateTime.html(date.format("LLLL"));
};

$(document).ready(function () {
  dateTime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

// Past Time
// function pastMode() {
//   if (dateTime < date) {
//     $(".col-6").addClass("pastMode").removeClass("presentMode");
//   } else {
//     // Else use ‘day’ theme
//     $(".col-6").addClass("presentMode").removeClass("pastMode");
//   }
// }
// $(document).ready(function () {
//   pastMode();
// });

// Present Time

// Future Time

// var currentHour = moment().format("LT");

// $(".colorcode").each(function () {
//   var time = parseInt($("#5"));

//   if (time > currentHour && time < currentHour + 6) {
//     $(this).css("background-color", "Blue");
//   } else if (time < currentHour && time > currentHour - 6) {
//     $(this).css("background-color", "red");
//   } else if (time === currentHour) {
//     $(this).css("background-color", "green");
//   } else {
//     $(this).css("background-color", "white");
//   }
// });

var currentHour = new Date().getHours();
var val = parseInt($(this).prop("id"));

$(".colorcode").each(function () {
  if (val > currentHour && val < currentHour + 6) {
    $(this).css("background-color", "Blue");
  } else if (val < currentHour && val > currentHour - 6) {
    $(this).css("background-color", "Red");
  } else if (val === currentHour) {
    $(this).css("background-color", "Green");
  } else {
    $(this).css("background-color", "White");
  }
});
