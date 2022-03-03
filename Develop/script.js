// DISPLAY CURRENT DAY W/ MOMENT.JS WHEN PAGE IS LOADED
// ----------------------

// 2. Use Moment.js and use correct format to display current day.
var currentDay = moment().format("dddd");
var dayContainer = $('#currentDayInWeek');

// 1. Create function that runs on page load.
function displayDay(){
    // 3. Inside of this function, add current day to p tag.
    $(dayContainer).html(`${currentDay}`);
};

displayDay();



// DISPLAY TIMEBLOCKS FOR BIZ HOURS (9A-5P). 1 BLOCK PER HOUR
// ----------------------
// 1. Create object holding a timeblock for each hour
// 2. Use object properties to ... 


// Clicking timeblock allows for user input of an event
// ----------------------
// 1. Add click event to timeblock.
// 2. Define jQuery modal and provide the required inputs.
// 3. On click, display the jQuery modal to collect user inputs.

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