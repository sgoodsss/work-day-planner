// GLOBAL VARIABLES
// selected the save button
var saveButton = $(`.saveBtn`);
// select the text area
var textArea = $(`#textarea`);
// stores current time in 24 hour number value
var currentTimeNumber = dayjs().format(`HH`)
console.log(currentTimeNumber);
// select the div container to apply past/present/future class
var numberHour = document.querySelectorAll(`.time-block`);

// Document Ready Function
$(function () {
  // Prints Current Date & Time on the header element
  var currentDay = dayjs();
  $(`#currentDay`).text(currentDay.format(`dddd, MMMM D YYYY, h:mm:ss a`));

  // Listener for click events on the save button
  saveButton.on('click', function () {
    //Selects what is typed in the textarea element
    var savedEvent = this.parentElement.children[1].value;
    // Selects the number id for each div
    var key = (this.parentElement.id);
    // Stores the savedEvent to the individual key
    localStorage.setItem(key, savedEvent);
  });

  // Else If statement to assign past, present, or future class
  $(`.time-block`).each(function () {
    // Turns id into a number
    var parseNumber = parseInt(this.id);
    // select the textarea container to apply past/present/future class
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

  // How to get local storage
  $(`#9 .description`).val(localStorage.getItem(`9`));
  $(`#10 .description`).val(localStorage.getItem(`10`));
  $(`#11 .description`).val(localStorage.getItem(`11`));
  $(`#12 .description`).val(localStorage.getItem(`12`));
  $(`#13 .description`).val(localStorage.getItem(`13`));
  $(`#14 .description`).val(localStorage.getItem(`14`));
  $(`#15 .description`).val(localStorage.getItem(`15`));
  $(`#16 .description`).val(localStorage.getItem(`16`));
  $(`#17 .description`).val(localStorage.getItem(`17`));


});
