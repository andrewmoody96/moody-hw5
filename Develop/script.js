// DISPLAY CURRENT DAY W/ MOMENT.JS WHEN PAGE IS LOADED
// ----------------------

// 2. Use Moment.js and use correct format to display current day.
var currentDay = moment().format("dddd");
var dayContainer = $("#currentDayInWeek");
var container = $("#blocks");

// 1. Create function that runs on page load.
function displayDay() {
  // 3. Inside of this function, add current day to p tag.
  $(dayContainer).html(`Today is ${currentDay}`);
}

displayDay();

// DISPLAY TIMEBLOCKS FOR BIZ HOURS (9A-5P). 1 BLOCK PER HOUR
// ----------------------

function createBlocks() {
  // 1. Loop to create timeblocks w/ class "block".
  var hours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];
  for (var i = 0; i < hours.length; i++) {
    var blockLabel = $("<label></label>");
    $(blockLabel).html(hours[i]);
    var newBlock = $('<div class="block">');
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

createBlocks();

// CLICKING TIMEBLOCK ALLOWS FOR USER INPUT OF A CALENDAR EVENT
// ----------------------
// 1. Add click event to timeblock.


function displayModal(click){
  console.log("Modal Test");
  // 2. Define jQuery modal and provide the required inputs.
  // var modal = $(".block").dialog();
  // $(".block").dialog("option", "modal", true);
};


// 3. On click, display the jQuery modal to collect user inputs.
$(".block").on("click", function(){
  displayModal();
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
