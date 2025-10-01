//alert("this is chapter 8");
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// //PICK A RANDOM BODY PART FROM THE randomBodyParts array:
// var randomBodyPart =   randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// var randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// var pickRandomWord = function (words){
// return words[Math.floor(Math.random() * words.length)];
// }

// var generateRandomInsult = function () {
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// //JOIN ALL THE RANDOM STRINGS INTO A SENTENCE:
// var randomString = "Your " +
//  pickRandomWord(randomBodyParts) + 
//  " is like a " + pickRandomWord(randomAdjectives) +
//  " "  + pickRandomWord(randomWords) + "!!!";
// return randomString;
// };

// console.log(generateRandomInsult());

// var fifthLetter = function (name){
// if (name.length < 5) {
//         return "Your name " + name.toUpperCase() + " is too short";
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
// };

// var medalForScore = function (score) {
//     if (score < 3){
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold";
// };

//LONGHAND FUNCTION
// var double = function (number) {
//     return number * 2;
// }; 
//SHORTHAND FUNCTION
// function double(number) {
//     return number * 2;
// }
