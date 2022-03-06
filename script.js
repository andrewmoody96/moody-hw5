var currentDay = moment().format("dddd");
var dayContainer = $("#currentDayInWeek");
var container = $(".container");
var blocks = $(".block");
// empty taskList that gets added to.
var taskList = {};

function displayDay() {
  // 3. Inside of this function, add current day to p tag.
  $(dayContainer).html(`Today is ${currentDay}`);
}

// DISPLAY TIMEBLOCKS FOR BIZ HOURS (9A-5P). 1 BLOCK PER HOUR
// ----------------------

function displayNew() {
  $(".container").empty();

  taskList = {
    taskBlocks: [
      { time: "9:00 AM", content: "" },
      { time: "10:00 AM", content: "" },
      { time: "11:00 AM", content: "" },
      { time: "12:00 PM", content: "" },
      { time: "1:00 PM", content: "" },
      { time: "2:00 PM", content: "" },
      { time: "3:00 PM", content: "" },
      { time: "4:00 PM", content: "" },
    ],
  };

  taskList.taskBlocks.forEach((taskBlock) => {
    var hour = taskBlock.time;
    var blockContainer = $("<div>")
      .addClass("row timeBlock")
      .attr("id", taskBlock.time)
      .appendTo(container);
    $("<div>")
      .addClass(
        "d-flex justify-content-center align-items-center text-center col-1 hour"
      )
      .text(hour)
      .appendTo(blockContainer);
    var taskText = $("<textarea readonly>").val(taskBlock.content).addClass("col-9").appendTo(blockContainer);
    var deleteBtn = $("<button>")
      .addClass("deleteButton")
      .appendTo(blockContainer);
  });

  // REPLACING WITH A TEXT SECTION INSIDE OF MY BLOCKS THAT SHOWS THE TIME
  // $(container).append(blockLabel);
  // $(container).append(newBlock);
  // // Applies default styling to new HTML elements.
  // $(".block").css({
  //   height: "50px",
  //   width: "85vw",
  //   margin: "10px 10px",
  //   "background-color": "grey",
  // });
  // }
  console.log("blocks = created");
}

// localStorage item name = "Schedule"
function checkForSaved() {
  console.log("Checking storage for existing schedule.");
  var savedSchedule = JSON.parse(localStorage.getItem("schedule"));
  if (savedSchedule == null) {
    console.log("No saved schedules. Loading empty schedule.");
    displayNew();
  } else {
    console.log("Loading saved schedule.");
    displaySaved();
  }
}

// CLICKING TIMEBLOCK ALLOWS FOR USER INPUT OF A CALENDAR EVENT
// ----------------------

// function displayModal(){
//   console.log("Modal Test");
//   // 2. Define Boostrap modal and provide the required inputs.
//   var modal = $("#myModal").dialog();
// };

// Functions running on load
displayDay();
checkForSaved();

// 1. Add click event to timeblock.
$(".time-row").on("click", function(event) {
  console.log("Displaying input fields.")
  // displayModal();
});

// 3. On click, display the jQuery modal to collect user inputs.
$(".container").on("click", "button", function(event) {
  if ($(event.currentTarget).hasClass("saveButton")) {
    saveEvent(event);
  }

  if ($(event.currentTarget).hasClass("deleteButton")) {
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
