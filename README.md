# Pig Latin Translator App
#### This app translates English to Pig Latin.
#### By Author
## Description
This app receives user input, and checks for vowels and consonants to appropriately manipulate the word into Pig Latin. The translated phrase will be displayed to the user.
<!-- ## Setup/Installation Requirements
* list item 1
* list item 2
* list item 3 -->


## Specs for Pig Latin App
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * **Example Input**: 3
  * **Example Output**: 3
* The program adds "ay" to single-letter words beginning with a vowel.
  * **Example Input**: I
  * **Example Output**: Iay
* The program adds "ay" to multi-letter words beginning with a vowel.
  * **Example Input**: Apple
  * **Example Output**: Appleay
* The program adds "ay" to multi-letter words beginning with a vowel in a sentence.
  * **Example Input**: Apple is red
  * **Example Output**: Appleay isay red
* The program moves all of the consecutive consonants from the beginning of the word, to the end of the word and adds "ay" to multi-letter words beginning with a consonant.
  * **Example Input**: Red
  * **Example Output**: edRay
* The program moves all of the consecutive consonants from the beginning of the word, to the end of the word and adds "ay" to multi-letter words beginning with a consonant within a sentence.
  * **Example Input**: Red apples are great
  * **Example Output**: edRay applesay areay eatgray
* The program will handle "Y" at the beginning of a word as a consonant.
  * **Example Input**: Yell
  * **Example Output**: ellYay
* The program will handle "Y" within a word as a vowel.
  * **Example Input**: My
  * **Example Output**: yMay
* If a word begins with "qu," the program moves both the "q" and "u" characters to the end of the word, and add "ay" after the "qu."
  * **Example Input**: Red apples are quite great
  * **Example Output**: edRay applesay areay itequay eatgray
* The program handles all strings in the same manner, regardless of case.
  * **Example Input**: mY aPPle iS reD
  * **Example Output**: Ymay aPPleay iSay eDray


<!--


## Known Bugs
List known bugs or issues here
## Technologies Used
* Tech 1
* Tech 2
* Tech 3
## Support and contact details
_contact info here_
### License
_MIT_
Copyright (c) _year_ **Author or Organization** -->
