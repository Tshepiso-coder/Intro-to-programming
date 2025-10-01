//alert("Hello, chapter 7")

document.getElementById("righteye").style.backgroundColor = "purple";
document.getElementById("body").style.border = "2px solid green";
document.getElementById("mouth").style.borderRadius = "20px";
document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
document.getElementById("righteye").style.left = "11%";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("head").style.borderTop = "5px dotted black";

//----------- Animate the robot

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
document.getElementById("lefteye").addEventListener("click", moveUpDown);
document.getElementById("leftarm").addEventListener("click", moveRightLeft);

function moveUpDown(evt) {
   var robotPart = evt.target;
   var top = 0;
   var id = setInterval(frame, 100);

   function frame() {
    robotPart.style.top = top + "%";
    top++;

    if (top === 20) {
        clearInterval(id)
    }
   }
}


function moveRightLeft(evt) {
   var robotPart = evt.target;
   var left = 0;
   var id = setInterval(frame, 50);

   function frame() {
    robotPart.style.left = left + "%";
    left++;

    if (left === 70) {
        clearInterval(id)
    }
   }
}