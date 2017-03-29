// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var exceptions = ["qu", "y"];
// var output = [];



// function to check input for vowels at beginning of words
var translate = function(word) {
  vowels.forEach(function(vowel) {
    if (word.toLowerCase().indexOf(vowel) === 0) {
      word = word + "ay";
    }
  });
  consonants.forEach(function(consonant) {
    if (word.toLowerCase().indexOf(consonant) === 0) {
      word = word.substr(1) + word.substr(0, 1);
      word = word + "ay";
    }
  });
  return word;
}






// UI logic
$(document).ready(function(){

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput input").val();
    var inputArray = input.split(" ");
    var translatedArray = [];

    inputArray.forEach(function(word) {
      var translatedWord = translate(word);
      translatedArray.push(translatedWord);
    });
    alert(translatedArray.join(" "));


  });
});

























// end
