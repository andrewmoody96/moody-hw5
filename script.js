var currentDay = moment().format("dddd");
var dayContainer = $("#currentDayInWeek");
var container = $(".container");
var blocks = $(".block");
var list = $(".list");
var userinput = null;
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

function displayDay() {
  // 3. Inside of this function, add current day to p tag.
  $(dayContainer).html(`Today is ${currentDay}`);
}

function displayNew() {
  $(".container").empty();

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
    var taskText = $("<ul>")
      .val(taskBlock.content)
      .addClass("col-9 list")
      .appendTo(blockContainer);

    var deleteBtn = $("<button>")
      .addClass("deleteButton")
      .appendTo(blockContainer);
  });

  console.log("Timeblocks Created");
}

// LOAD SAVED SCHEDULE --- COME BACK TO THIS
function displaySaved() {
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
    var taskText = $("<textarea readonly>")
      .val(taskBlock.content)
      .addClass("col-9")
      .appendTo(blockContainer);
    var deleteBtn = $("<button>")
      .addClass("deleteButton")
      .appendTo(blockContainer);
  });

  console.log("Timeblocks Created");
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

function saveTask(e) {
  e.stopPropagation();
  // Print to UI
  userinput = $("#taskInput").val();
  list = $("div.activeBlock").find("ul")
  var listItem = $("<li>");
  $(listItem).text(userinput);
  $(listItem).appendTo(list);
  $("#taskModal").modal("toggle");
  console.log("Task Saved");
  // return(userinput);
};



function displayModal() {
  console.log("Displaying input fields.");
  var modal = $(`<div id="taskModal" class="modal" tabindex="-1" role="button">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add A Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input id="taskInput" placeholder="Add event details here..."></input>
        </div>
        <div class="modal-footer">
          <button type="button" id="saveButton" class="btn btn-primary saveBtn">Save changes</button>
        </div>
      </div>
    </div>
  </div>`);
  
  $(modal).appendTo(".container");
  $(modal).modal();

  

  // // Save to local storage
  // taskList.taskBlocks.forEach((taskBlock) => {
  //   taskBlock.content = clickedBlock.siblings("li").val();
  //   console.log(`${listItem.content}`)
  //   });
  //   localStorage.setItem("Tasks", JSON.stringify(taskList));
};

// Functions running on load
displayDay();
checkForSaved();

// 1. Add click event to timeblock.
$(".timeBlock").on("click", function (addTask) {
  // Removes class from previously clicked block.
  $(blocks).removeClass("activeBlock");
  blocks = addTask.currentTarget;
  // Addd class to newly clicked block.
  $(blocks).addClass("activeBlock");
  displayModal();
});

// $("#saveButton").on("click", function(save) {
//   console.log("Saving Task...");
//   save.stopPropagation();
//   saveTask(save);
// });

// Click Event to Delete Tasks
$(".deleteButton").on("click", function (del) {
  console.log("Deleting Task...");
  del.stopPropagation();
  // deleteEvent(del);
});

$(".container").on("click", "#saveButton", function (save) {
  // save.preventDefault();
  save.stopPropagation();
  console.log("Saving Task...");
  saveTask(save);
});


// If app is refreshed, these events remain in place
// ----------------------
// 1.

// Style timeblocks based on past, present, or future.
// ----------------------
// var currentTime = moment().format("LTS");
// 1.
