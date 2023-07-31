// create formatting feature to color code time block:
//  - grey for past
//  - red for in progress
//  - green for upcoming
// add functionality so when user clicks into time block:
//  - can edit the text content on focus
//  - hardcode the content on blur
// when user clicks the save button icon the text for the event saves into local storage via an array object
// when user refreshes page - get the object array from local storage and recreate the events on the page

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// GLOBAL VARIABLES
// selected the save button
var saveButton = $(`.saveBtn`);
// select the text area
var textArea = $(`#textarea`);
// stores current time
var currentTime = dayjs().format('hA')
// select time block ????

// isn't this the code below jQuery document ready function?
$(function () {
  var currentDay = dayjs();
  $(`#currentDay`).text(currentDay.format(`dddd, MMMM D YYYY, h:mm:ss a`));

  saveButton.on('click', function () {
    console.log(`I was clicked!`)
    var savedEvent = $(`.time-block`);

    localStorage.setItem('savedEvent', savedEvent);
  });
// Array to hold all hours of the workday.  Don't think I need this anymore...
  // var workHours = [
  //   dayjs().hour(9).format(`hA`),
  //   dayjs().hour(10).format(`hA`),
  //   dayjs().hour(11).format(`hA`),
  //   dayjs().hour(12).format(`hA`),
  //   dayjs().hour(13).format(`hA`),
  //   dayjs().hour(14).format(`hA`),
  //   dayjs().hour(15).format(`hA`),
  //   dayjs().hour(16).format(`hA`),
  //   dayjs().hour(17).format(`hA`),
  // ];

  function checkTime () {
    
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. Is the code above correct?  Am I supposed to save the whole row in local storage?
  
  //  HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
