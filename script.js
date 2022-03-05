var currentDay = moment().format("dddd");
var dayContainer = $("#currentDayInWeek");
var container = $(".container");
// empty taskList that gets added to.
var taskList = {};


function displayDay() {
  // 3. Inside of this function, add current day to p tag.
  $(dayContainer).html(`Today is ${currentDay}`);
}


// localStorage item name = "Schedule"
// Need to check localStorage to see if there is a saved schedule already present. Must occur before displaying schedule.



displayDay();
checkForSaved();

// DISPLAY TIMEBLOCKS FOR BIZ HOURS (9A-5P). 1 BLOCK PER HOUR
// ----------------------

function displayNew() {
  // 1. Loop to create timeblocks w/ class "block".
  taskList = {
    taskBlocks: [
      {time: "9:00 AM", content:""},
      {time: "10:00 AM", content:""},
      {time: "11:00 AM", content:""},
      {time: "12:00 PM", content:""},
      {time: "1:00 PM", content:""},
      {time: "2:00 PM", content:""},
      {time: "3:00 PM", content:""},
      {time: "4:00 PM", content:""}
    ]
  };
  
  for (var i = 0; i < taskList.taskBlocks.length; i++) {
    var blockLabel = $("<label></label>");
    $(blockLabel).html(taskList.taskBlocks[i]);
    // Creates block w/ ID's set to military time equivalent.
    var newBlock = $(`<div id="${[i + 9]+":00"}" class="block">`);
    $(container).append(blockLabel);
    $(container).append(newBlock);
    // Applies default styling to new HTML elements.
    $(".block").css({
      height: "50px",
      width: "85vw",
      margin: "10px 10px",
      "background-color": "grey",
    });
  }
  console.log("blocks = created");
};

function checkForSaved() {
  console.log("Checking storage for existing schedule.")
  var savedSchedule = JSON.parse(localStorage.getItem("schedule"));
  if (savedSchedule == null) {
    console.log("No saved schedules. Loading empty schedule.")
    displayNew()
  } else {
    console.log("Loading saved schedule.")
    displaySaved()
  }
};


// CLICKING TIMEBLOCK ALLOWS FOR USER INPUT OF A CALENDAR EVENT
// ----------------------


// function displayModal(){
//   console.log("Modal Test");
//   // 2. Define Boostrap modal and provide the required inputs.
//   var modal = $("#myModal").dialog();
// };


// 1. Add click event to timeblock.
// 3. On click, display the jQuery modal to collect user inputs.
$(".container").on("click", "button", function(event){
  if ($(event.currentTarget).hasClass("saveEventBtn")) {
    saveEvent(event);
  }

  if ($(event.currentTarget).hasClass("deleteEventBtn")) {
    deleteEvent(event);
  }
});
























// Clicking 'save' stores the text in local storage
// ----------------------
// 1. Create button inside of modal titled "save".
// 2. Add click event to button.
// 3. On click, save user input to local storage.
// 4. On click, close the modal.

// If app is refreshed, these events remain in place
// ----------------------
// 1.

// Style timeblocks based on past, present, or future.
// ----------------------
// var currentTime = moment().format("LTS");
// 1.
