// add functionality so when user clicks into time block:
//  - can edit the text content on focus
//  - hardcode the content on blur
// when user clicks the save button icon the text for the event saves into local storage via an array object
// when user refreshes page - get the object array from local storage and recreate the events on the page

// GLOBAL VARIABLES
// selected the save button
var saveButton = $(`.saveBtn`);
// select the text area
var textArea = $(`#textarea`);
// stores current time
var currentTime = dayjs().format('hA');
// stores current time in number value
var currentTimeNumber = dayjs().format('h')
console.log(currentTimeNumber);
// select the time container to apply past/present/future class???
var numberHour = $(`.row`);
// array of numbers of work hours
var arrayHourNumber = ['hour-9', `hour-10`, `hour-11`, `hour-12`, `hour-13`, `hour-14`, `hour-15`, `hour-16`, `hour-17`,];

// isn't this the code below jQuery document ready function?
$(function () {
  var currentDay = dayjs();
  $(`#currentDay`).text(currentDay.format(`dddd, MMMM D YYYY, h:mm:ss a`));

// Listener for click events on the save button.  Is the code below correct?  Am I supposed to save the whole row in local storage?
  saveButton.on('click', function () {
    console.log(`I was clicked!`)
    var savedEvent = $(`.time-block`);

    localStorage.setItem('savedEvent', savedEvent);
  });
// Else If statement to assign past, present, or future class
  // what do I put for x so that it uses the div id=#
     numberHour.each(function () {
       if (x < currentTimeNumber) {
          numberHour.addClass(`past`);
       } else if (x === currentTimeNumber) {
          numberHour.addClass(`present`);
          numberHour.removeClass(`past`);
       } else {
          numberHour.addClass(`future`);
          numberHour.removeClass(`past`);
          numberHour.removeClass(`present`);
        }
      })

  //  HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
