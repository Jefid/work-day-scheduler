
var hourBlocks = [
"09:00",
"10:00",
"11:00",
"12:00",
"13:00",
"14:00",
"15:00",
"16:00",
"17:00"];

//inserting time and day and time into Current day

window.setInterval(function () {
    $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
  }, 1000);