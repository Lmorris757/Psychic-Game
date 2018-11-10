var Alphabet = ["a", "b", "c", "d", "e", "f", "g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["cat", "pizza", "mississippi", "tomahawk"];

var correct = 0;
var incorrect = 0;
var guessesLeft = 5;
var gameOver = false;


var wordSelect = words[Math.floor(Math.random() * words.length)];
console.log(wordSelect);

var wordArray =	wordSelect.split('');
console.log(wordArray);



$( "#begin" ).click(function() {
    $( "#gameBoard" ).fadeIn( "slow", function() {});
    $("#word").empty();
    $("#spaces").empty();
    gameOver = false;
$("#gameOver").hide();
$("#gameWin").hide();

    reset();

    for (var i = 0; i < wordSelect.length; i++) {
        $("#word").append("<strong class=" + wordSelect[i] + "> " + wordSelect[i] + " <strong>");
        var letterClass = "." + wordArray[i]; 
    $(letterClass).addClass("d-none");
    $("#spaces").append("<strong>_</strong> "); 
  }

});





document.onkeyup = function(event) {
var userChoice = event.key;
if (gameOver==false){



    
if( wordSelect.indexOf(userChoice) != -1 ){
    var numOccurences = $.grep(wordSelect, function(elem) {
        return elem === userChoice;
      }).length;
  
      if (numOccurences > 1) { 
        correct += numOccurences;
      }
      else {correct++};
      var letterClass = '.' + userChoice; 
      $(letterClass).removeClass("d-none");
    console.log("That letter is Correct!");
}
else {
incorrect++;
 guessesLeft--;
 console.log("That is incorrect.");
} 

if (guessesLeft <=0) {
    $("#gameBoard").hide();
    $("#gameOver").show();
    gameOver = true
}

if (correct >=wordSelect.length) {
    $("#gameBoard").hide();
    $("#gameWin").show();
    gameOver = true;
}



document.getElementById("correct").innerHTML =  correct;
document.getElementById("incorrect").innerHTML = incorrect;
document.getElementById("guessesLeft").innerHTML =  guessesLeft;
}}

function reset() {
    correct = 0;
    incorrect = 0;
    guessesLeft = 10;
    $("#guessesLeft").text("Lives: " + guessesLeft);
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    wordSelect = words[Math.floor(Math.random() * words.length)];
    wordLength = words.length;
    wordArray = wordSelect.split("");
    console.log(words);
}
