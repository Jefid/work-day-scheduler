var hourBlocks = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
//variable to save current time to reference if time slot has passed
var currentTime = moment().format("HH") + ":00";

var domContainer = document.querySelector("#container");
//inserting time and day and time into Current day

window.setInterval(function () {
  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
}, 1000);

//creates row to store time block

var displayTimesBlocks = function () {
  //for loop runs for each time stored in hourBlocks
  for (i = 0; i < hourBlocks.length; i++) {
    //creates div to hold task
    var taskRow = document.createElement("div");
    taskRow.classList = "row time-block";
    //sets id of each elemnt to index value
    taskRow.id = hourBlocks.indexOf(hourBlocks[i]);

    //create timeslot

    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour";
    timeSlot.id = hourBlocks.indexOf(hourBlocks[i]);
    timeSlot.textContent = hourBlocks[i];
    //appending to task row
    taskRow.appendChild(timeSlot);

    //create input feild
    var taskInput = document.createElement("input")


//adding created elements to the form displayed
    domContainer.appendChild(taskRow);
  }
};

displayTimesBlocks();
