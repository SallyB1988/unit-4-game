var jewels = [
  {
    image: "./assets/images/gem_1.png",
    value: 0,
  },
  {
    image: "./assets/images/gem_2.png",
    value: 0,
  },
  {
    image: "./assets/images/gem_3.png",
    value: 0,
  },
  {
    image: "./assets/images/gem_4.png",
    value: 0,
  },
  {
    image: "./assets/images/gem_5.png",
    value: 0,
  },
  {
    image: "./assets/images/gem_6.png",
    value: 0,
  },
]
// ===== Variables =======================
var goalNumber = 0;
var total = 0;
var gamesWon = 0;
var gamesLost = 0;
var maxJewels = 0;

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
  return Math.floor(Math.random()*numberSpan) + min;
}

/**
 * Generates goal number 
 */
const pickGoalNumber = () => {
  goalNumber = getRandomNumber(19,120);
}

/**
 * Generates values for jewels
 */
const assignJewelvalues = () => {
  for (var j = 0; j < maxJewels; j++ ) {
    jewels[j].value = getRandomNumber(1,12);
  }
}

// ===== JQuery ============================
$(document).ready(function() {
  
  // When document is ready, insert jewels into the jewel-box div
  // The number of jewels can vary, so find which is selected
  maxJewels = $("option").filter(":selected").text();

  const fillJewelBox = () => {
    var $jewelBox = $("#jewel-box");
    $jewelBox.empty();
    for( var i = 0; i < maxJewels; i++) {
      $jewelBox.append(`<img id="jewel-${i}" class="p-2 gem-img" src=${jewels[i].image} >`);
    }
  }

  /**
   * Set inital values for a game. Reset the total to 0. Pick a new goal number. Determine the
   * number of jewels to use and create them. Assign values to the jewels.
   */
  const initializeGame = () => {
    total = 0;
    pickGoalNumber();
    fillJewelBox();
    assignJewelvalues();
    $("#goal-value").html(goalNumber);
    $("#total-value").html(total);
  }

  // Reset the game when the number of jewels in the jewel box changes
  $("#num-jewels").on("change", () => {
    maxJewels=$("option").filter(":selected").text();
    initializeGame();
  })

  // ===== Jewel click ===================
  // Use the last character(s) of id name to get the index to use for 
  // the jewels array.  All id names begin with 'jewel-'
  $("#jewel-box").on("click", function(e) {
    var index = e.target.id.slice(6);
    total += jewels[index].value;
    
    // update calculatedNumber displayed
    $("#total-value").html(total)
    // check for end of game
    if (total === goalNumber) {
      gamesWon++;
      $("#wins-value").html(gamesWon.toString());
      initializeGame();
    } else if(total > goalNumber) {
      gamesLost++;
      $("#losses-value").html(gamesLost.toString());
      initializeGame();
    }
  })

  // ===== BEGIN GAME ====================
  initializeGame();
})

