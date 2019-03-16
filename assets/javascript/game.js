var jewels = [
  {
    image: "./assets/images/bees.jpg",
    value: 0,
  },
  {
    image: "./assets/images/dilbert.jpg",
    value: 0,
  },
  {
    image: "./assets/images/nemo.jpg",
    value: 0,
  },
  {
    image: "./assets/images/bread.jpg",
    value: 0,
  },
  {
    image: "./assets/images/nemo.jpg",
    value: 0,
  },
  {
    image: "./assets/images/bread.jpg",
    value: 0,
  },
]

var goalNumber = 0;
var totalNumber = 0;

/**
 * Returns a random number between (and including) the two limits.
 * @param {*} min 
 * @param {*} max 
 */
const getRandomNumber = (min,max) => {
  if (min > max) {
    [min, max] = [max, min];  // swap the values if min > max
  }
  var numberSpan = max - min + 1;
  value = Math.floor(Math.random()*numberSpan) + min;
  console.log(value);
  return value;
}

const pickComputerNumber = () => {
  goalNumber = getRandomNumber(19,120);
}

const assignJewelvalues = () => {
  jewels.forEach( (j) => {
    j.value = getRandomNumber(1,12);
  })
}

$(document).ready(function() {

  // When document is ready, insert jewels into the jewel-box div
  // The number of jewels allowed is unlimited!
  var jewelBox = $("#jewel-box");
  for( var i = 0; i < jewels.length; i++) {
    console.log('value is ' + jewels[i].value);
    jewelBox.append(`<img id="jewel-${i}" class="w-1 p-1 jewel-img" 
        src=${jewels[i].image} >`);
  }

  $("#goal-value").html(goalNumber)

  // Use the last character(s) of id name to get the index to use for 
  // the jewels array.  All id name begin with 'jewel-'
  $(".jewel-img").on("click", function() {
    var index = this.id.slice(6);
    totalNumber += jewels[index].value;

    // update calculatedNumber displayed
    $("#total-value").html(totalNumber)
  })




})

// ========================  Execute code
pickComputerNumber();
assignJewelvalues();

//===============================================  SAMPLE JQuery
// $(".operator").on("click", function() {
//   isOperator = !isOperator;
//   operator = $(this).val();
//   $("#operator").text(symbols[operator]);
// })
