//Listing 18-1
//Logging Hello, JavaScript

// var i = 0;
// while (i < 500) {
//     console.log(i + " : Hello, Javascript!");
//     i++;
// };

//Listing 18-2
//Count Down with while

// var count = 10;
// while(count > 0){
// count--;
// }
// alert("Blast off!");

//Listing 18-3
//Looping through a list of Names

//  var people = ["Deborah","Carla","Mary","Suzen"];
//  var i = 0;

//  while (people[i]) {
//   alert(people[i]);
//   i++;
//  }
//=============================================
 // create days of week array
 var days = ["Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday"];

 // define types of weather
 var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", 
"Cloudy", "Raining", "Snowing", "Thunderstorm", 
"Foggy"];
 // set min and max temperatures
 var maxTemp = 100;
 var minTemp = 0;


 // cost (to you) of a cup of lemonade
  var lemonadeCost = 0.5;

 // array for storing daily temps
  var dailyTemp = [];

//generate weather for the week
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

generateWeather();

function generateWeather() {
    var weatherToday;
    var tempToday;

for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];

        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        dailyTemp[i] = tempToday;

        document.getElementById("5DayWeather").innerHTML +=
         "<div id='" + days[i] + "' class='" + 
        weatherToday +
         "'><b>Forecast for " +
          days[i] + 
          ":</b><br><br>" + 
          weatherToday +
           " and " + 
        tempToday +
         " degrees.</div>";
        };
 };



// Calculates glasses of lemonade sold
 function openTheStand() {
    var glassesSold = 0; // daily
    var totalGlasses = 0; // weekly
    var glassesLeft = 0; // left to sell

    
    resetForm(); // clear out previous results
    // get input
    var numGlasses = Number(document. getElementById("numGlasses").value);
    var glassPrice = Number(document. getElementById("glassPrice").value);
    
    for (var i = 0; i < days.length; i++) {
     glassesSold = Math.floor(dailyTemp[i] / glassPrice);
     glassesLeft = numGlasses - totalGlasses;

     //checks if there is enough stock for that day's sale
     if (glassesSold > glassesLeft) {
        glassesSold = glassesLeft;
     }
     //
     document.getElementById("result").innerHTML += "<p> On" + days[i] +
     ", you sold" + glassesSold + "glasses of lemonade.</P>";
    };
    displayResults(numGlasses, glassPrice, totalGlasses);
};
 
//Reset game for new order to be placed
function resetForm() {
    document.getElementById("result").innerHTML = "";
};
//Calculate results and display report
function displayResults(weeklyInventory, glassPlace, weeklySales) {
     
    var revenue = weeklySales * glassPrice;
    var expense = weeklyInventory * lemonadeCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    //document.getElementById("result").innerHTML += "<p>"

     // print out the weekly report
 document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales +
  " glasses of lemonade this week.</p>";
 document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
 document.getElementById("result").innerHTML += "<p>You have " + 
leftOver + " glasses of lemonade left over.</p>";
 document.getElementById("result").innerHTML += "<p>Each glasscosts you $" + lemonadeCost +
  ". Your profit was $" + profit + "...";
};