// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var exceptions = ["qu", "y"];
// var output = [];



// function to check input for vowels at beginning of words
var translate = function(word) {
    if (word.toLowerCase().indexOf("a") === 0
      || word.toLowerCase().indexOf("e") === 0
      || word.toLowerCase().indexOf("i") === 0
      || word.toLowerCase().indexOf("o") === 0
      || word.toLowerCase().indexOf("u") === 0) {
      word = word + "ay";
    }
    alert(word);
}






// UI logic
$(document).ready(function(){

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput input").val();
    var inputArray = input.split(" ");

    inputArray.forEach(function(word) {
      translate(word);
    });


  });
});

























// end
