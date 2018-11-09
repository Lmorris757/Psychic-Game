
$( "#begin" ).click(function() {
    $( "#gameBoard" ).fadeIn( "slow", function() {});
});
var Alphabet = ["a", "b", "c", "d", "e", "f", "g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["cat", "pizza", "mississippi", "tomahawk"];

var correct = 0;
var incorrect = 0;
var guessesLeft = 5;

var wordSelect = words[Math.floor(Math.random() * words.length)];
console.log(wordSelect);

var wordArray =	wordSelect.split('');
console.log(wordArray);

document.onkeyup = function(event) {
var userChoice = event.key;
if( wordSelect.indexOf(userChoice) != -1 ){
   correct++;
    console.log("That letter is Correct!");
}
else{
incorrect++;
 guessesLeft--;
 console.log("That is incorrect.");
} 

document.getElementById("correct").innerHTML =  correct;
document.getElementById("incorrect").innerHTML = incorrect;
document.getElementById("guessesLeft").innerHTML =  guessesLeft;
}