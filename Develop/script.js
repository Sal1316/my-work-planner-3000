
$(document).ready();
$('#currentDay').text(`Current date:  ${headerTime()}`); // add current date to header.
bgColorChanger();
console.log('this: ', this);

// Main Function:
$(function () {
  var userArray = []; // holds the user object
  var userObj = {}; // holds the time value and description entered.
  
  // Event listener: 
  $(".time-block").on("click", function () {
    var timeBlockId = $(this).attr("id"); // returns the id value
    console.log("timeBlockId: ", timeBlockId);
    var userInput = $(this).find(".description").val(); // return the value inputed by user.
    console.log("userInput: ", userInput);

    userObj.time = timeBlockId;
    userObj.description = userInput;

    userArray.push(userObj);

    localStorage.setItem("userArray", JSON.stringify(userArray));
    var localDesc = JSON.parse(localStorage.getItem("userArray"));
    var localHolder = localDesc[0].description

    $(this).find("description").val(localHolder); //NOT WORKING.
    
    // headerTime(); // done
    // getCurrentTime(); // done
    bgColorChanger(timeBlockId); // should be standalone function that runs when page loads.
    // getLocalValues();
  
  
  });
});

// Helper Functions: 
function headerTime() {
  var hTime =  dayjs().format("MM DD, YYYY");
  return hTime;
} 
function getCurrentTime() { 
  var currentTime = dayjs().format("H:mm:ss");
  return currentTime;
}
function bgColorChanger() { // compares time with preseent time and assigns bg-color to all textarea boxes.
  $(".row").each(function() {
    var currentTime = dayjs().format("H");
    var timeBlockTime = parseInt($(this).attr("id").split("-")[1]); // means split on the '-' and return the array at postion 1.
    
    console.log("currentTime: ", currentTime);
    console.log("timeBlockTime: ", timeBlockTime);
    
    if(timeBlockTime < currentTime) {
      $(this).removeClass("present", "future");
      $(this).find(".description").addClass("past");
    } else if(timeBlockTime > currentTime) {
      $(this).removeClass("past", "present");
      $(this).find(".description").addClass("future");
    } else {
      $(this).removeClass("past", "future");
      $(this).find(".description").addClass("present");
    }
  })
  
 
  
}
function getLocalValues() {
  /* 
  Add code to get any user input that was saved in localStorage and set
  the values of the corresponding textarea elements. 
  HINT: How can the id attribute of each time-block be used to do this?
  */
//  how do we get the local storage base on the I 
var calendarTime = parseInt(hourId.split("-"))
}

