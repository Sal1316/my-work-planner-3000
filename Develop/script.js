
$(document).ready();


$(function () {
  var userArray = [];
  var userObj = {};
  $('#currentDay').text(`Current date:  ${headerTime()}`);

  // Event listener: 
  $(".time-block").on("click", function () {
    var timeBlockId = $(this).attr("id");
    console.log("timeBlockId: ", timeBlockId)
    var userInput = $(this).find(".description").val();
   
    userObj.time = timeBlockId;
    userObj.description = userInput;

    userArray.push(userObj);

    localStorage.setItem("userArray", JSON.stringify(userArray));
    var localDesc = JSON.parse(localStorage.getItem("userArray"));
    var localHolder = localDesc[0].description

    $(this).find("description").val(localHolder); //NOT WORKING.
    
    // headerTime(); // done
    // getCurrentTime(); // done
    hourBlockId(timeBlockId);
    // getLocalValues();
  
  
  });

  /*  TODO: 
    - Add code to apply the past, present, or future class to each 
      time-block by comparing the id to the current hour. 
      HINTS: How can the id attribute of each time-block be used to 
      conditionally add or remove the past, present, and future classes? 
  */

   


});

// Functions: 
function headerTime() { // done and working.
  var hTime =  dayjs().format("MM DD, YYYY");
  return hTime;
} 
function getCurrentTime() { // done and working.
  var currentTime = dayjs().format("H:mm:ss");
  return currentTime;
}
function hourBlockId(id) { // compares time with preseent time and assigns bg-color.
  var currentTime = dayjs().format("H")
  console.log(currentTime);
  console.log("event: ", id);
  
  for(var i = 0; i < 8; i++) {
    var calendarTime = parseInt($(this).attr("id").split("-")[1])
    console.log("calendarTime: ", calendarTime)
    if(calendarTime < currentTime) {
      //remove present or future class
      $(this).find(".description").addClass("past");
    } else if(calendarTime > currentTime) {
      $(this).find(".description").addClass("future");
    } else {
      $(this).find(".description").addClass("present");
    }
  }
  
}
function getLocalValues() {
  /* 
  Add code to get any user input that was saved in localStorage and set
  the values of the corresponding textarea elements. 
  HINT: How can the id attribute of each time-block be used to do this?
  */
//  how do we get the local storage base on the I 
}

