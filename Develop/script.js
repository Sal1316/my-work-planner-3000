
$(document).ready();

// Event Handlers: 
$('.elTime').text(`Current date:  ${headerTime()}`); // add current date to header.
bgColorChanger(); // sets the colors base on the time from current time.
getLocalValues();


// Main Function:
$(function () {
  $(".saveBtn").on("click", saveBtnClick);
  getCurrentTime();
});

// Helper Functions: 
function headerTime() {
  var hTime = dayjs().format("dddd, MMMM DD, YYYY");
  return hTime;
}

function getCurrentTime() {
  var currentTime = dayjs().format("H:mm:ss");
  return currentTime;
}

function bgColorChanger() { // compares time with preseent time and assigns bg-color to all textarea boxes.
  $(".row").each(function () {
    //bug: might need to convert all time id's to 24 hrs..
    var currentTime = dayjs().format("H");
    var timeBlockTime = parseInt($(this).attr("id").split("hour")[1]); // means split on the '-' and return the array at postion 1.

    if (timeBlockTime < currentTime) {
      $(this).removeClass("present", "future");
      $(this).find(".description").addClass("past");
    } else if (timeBlockTime > currentTime) {
      $(this).removeClass("past", "present");
      $(this).find(".description").addClass("future");
    } else {
      $(this).removeClass("past", "future");
      $(this).find(".description").addClass("present");
    }
  })
}

function saveBtnClick() { // stores the values in Local.
  var userObj = {}; // holds the time value and description entered.

  var timeBlockId = $(this).parent().attr("id"); // returns the id value
  var userInput = $(this).parent().find(".description").val(); // return the value inputed by user.

  console.log('timeBlockId: ' + timeBlockId + ',\n' + 'userInput: ' + userInput)

  var userObjString = localStorage.getItem("userObj");
  var userObj = userObjString ? JSON.parse(userObjString) : {};

  userObj[timeBlockId] = userInput; // when using brackets, you are 'making' a key property.

  localStorage.setItem("userObj", JSON.stringify(userObj));

};

function getLocalValues() {
  // get the values from local storage:
  var localArr = JSON.parse(localStorage.getItem("userObj")) || [];
  // console.log('2-localArr: ', localArr);
  // console.log('2-localArr key: ', Object.keys(localArr)); // 9 items in array.

  // loop through the id's:
  $('[id]').each(function () {
    console.log('1. this: ', this);
   
    var key = this.id;
    var value = localArr[key];
    console.log('2. key: ', key); //refers to the current element in the loop and gives the ID of the current element
    console.log('3. value: ', value);
    
    $(this).find(".description").append(value || '');

  })
}



/* BUGS: 
 - should not be able to put any code if grey box?


 



*/ 