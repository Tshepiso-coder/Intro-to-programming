//  var myNumber = prompt("Enter your favorite day of the week!");
//  var theResponse;
//  switch (myNumber) {
//   case "Monday":
//     theResponse = "Ack!";
//     break;
//   case "Tuesday":
//     theResponse = "Taco day!";
//     break;
//   case "Wednesday":
//     theResponse = "Halfway there!";
//     break;
//   case "Thursday":
//     theResponse = "It's the new Friday!";
//     break;
//   case "Friday":
//     theResponse = "TGIF! Yeah!";
//     break;
//   case "Saturday":
//     theResponse = "What a day!";
//     break;
//   case "Sunday":
//     theResponse = "Sunday = Funday!";
//     break;
//   default:
//     theResponse = "I haven't heard of that one!";
//     break;
//  }
//  alert (theResponse);
 //=============================================================

// var myDate = new Date();
//  myDate

//   myDate.getDay();
//  myDate.getMonth();

//  var myNewDate = new Date();
//  console.log(myNewDate.setMonth(7));
//  console.log(myNewDate);

//  myNewDate;
// myNewDate.setMonth(7);
//==================================================
 var todayDate = document.getElementById("todaysdate");
 var todoButton = document.getElementById("whattodo");
 // add a listener to the whattodo button
 todoButton.addEventListener("click", displayActivity);
 // create a new Date object
 var d = new Date();
 // call the displayDate() function
 displayDate();
 function displayDate() {
    // todo: display the current date in the todaysdate 
div
 }
 function displayActivity() {
    var dayOfWeek = d.getDay();
    var youShould;
    switch(dayOfWeek) {
        case 0:
            youShould = "It's a Sunday, Church";
            break;
        case 1:
            youShould = "It's a Monday, go to school";
            break;
        case 2:
            youShould = "It's a Tuesday, go to school";
            break;
        case 3:
            youShould = "It's a Wednesday, go to school";
            break;
        case 4:
            youShould = "It's a Thursday, go to school";
            break;
        case 5:
            youShould = "It's a Friday, go to school";
            break;
        case 6:
            youShould = "It's a Saturday, relax";
             break;
        default:
            youShould = "Not a valid week day";
             break;
    
    }
    // todo: find out the day of the week
  /* todo: set a variable, called youShould, with a 
different string based on what day of the 
week it is. */
    // todo: output the value of youShould into the 
//thingToDo div
 };
 //============================================

 function displayDate() {
 todayDate.innerHTML = d;
todayDate.innerHTML = d.toDateString();
 }
