//ARRAY OF WORDS
var words = ["javascript", "monkey", "amazing", "pancake"];

//SELECT A WORD FROM THE ARRAY USING A RANDOM INDEX
var word = words[Math.floor(Math.random() * words.length)];

// console.log(words);
// console.log(word);

//ADD IN THE ARRAY AN '_' (UNDERSCORE) FOR EACH LETTER IN THE word VARIABLE
 var answerArray = [];
  for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
 }
 var remainingLetters = word.length;

 while (remainingLetters > 0){
    //while loop starts here
//Show the player their progress
alert(answerArray.join(" "));

//Take input from the player
var guess = prompt("Guess a letter, or click Esc to stop playing")
 
if(guess === null){
    break;
} else if (guess.length !==1){
    alert("Please enter a single letter." + guess);
} else {
    //Update the game state with the guess

for (var j = 0; j < word.length; j++){
    if (word[j] === guess){
        answerArray[j] = guess;
        remainingLetters--;
    }

 }
}
//While loop end here
 }
 if(guess !== null) {
    alert(answerArray.join(' '));
    alert("Good job! The answer was" + word);
    }else { 
    alert("Player has quit the game");
  };