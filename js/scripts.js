// business logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var exceptions = ["qu", "y"];

// function to check input for vowels at beginning of word
var translate = function(input) {

  vowels.forEach(function(vowel) {
    if (input.toLowerCase().indexOf(vowel) === 0) {
      vowelInput = input + "ay";
      alert(vowelInput);
    }

  });

}



// UI logic
$(document).ready(function(){

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput input").val();

    // if (english.indexOf("a") === 0) {
    //   alert("a");
    // } else {
    //   alert("not a");
    // }

    translate(input);

    // $("#output").text(translate(english));

  });
});
