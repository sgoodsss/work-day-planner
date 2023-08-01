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
// stores current time in 24 hour number value
var currentTimeNumber = dayjs().format(`HH`)
console.log(currentTimeNumber);
// select the time container to apply past/present/future class
// var numberHour = $(`.row`);
// var numberHour = $("div:data(id)");
var numberHour = document.querySelectorAll(`.time-block`);
// console.log(numberHour);
// isn't this the code below jQuery document ready function?
$(function () {
  var currentDay = dayjs();
  $(`#currentDay`).text(currentDay.format(`dddd, MMMM D YYYY, h:mm:ss a`));

// Listener for click events on the save button.  Is the code below correct?  Am I supposed to save the whole row in local storage?
  saveButton.on('click', function () {
    // console.log(`I was clicked!`)
    var savedEvent =this.parentElement.children[1].value;
    var key = (this.parentElement.id);
    console.log(savedEvent);
    localStorage.setItem(key, savedEvent);
  });
// Else If statement to assign past, present, or future class
     $(`.time-block`).each(function () {
      // Turns id into a number
      var parseNumber = parseInt(this.id);
      // select the time container to apply past/present/future class
      var colorDiv = this.children[1];
      console.log(colorDiv);
       if (parseNumber < currentTimeNumber) {
          colorDiv.classList.add(`past`);
       } else if (parseNumber === currentTimeNumber) {
          colorDiv.classList.add(`present`);
          colorDiv.classList.remove(`past`);
       } else {
          colorDiv.classList.add(`future`);
          colorDiv.classList.remove(`past`);
          colorDiv.classList.remove(`present`);
        }
      })

      // Copy for each number value of the 
      $(`#15 .description`).val(localStorage.getItem(`15`));
      $(`#16 .description`).val(localStorage.getItem(`16`));

});
