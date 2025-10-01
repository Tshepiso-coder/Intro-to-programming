// var fruits = [];
// fruits.push("banana");
// fruits.push("orange");
// fruits.push("Apple")

// var i = Math.floor(Math.random() * 3);
// var fruit = 
// console.log(fruits[i]);


// var fname = 'Tshepiso'
// console.log(fname);

// var dog
// dog={
// "pet name": "Milo"
// }
// dog.legs=4
// dog["is mixed"]=true

var total = 0;
var totalx = 0;
var product = {
    productName:'sugar',
    size: "500g",
    price: 50,
    quantity: 2,
    subtotal: 0
}

//CREATE ARRAY TO HOLD PRODUCTS
var grocery = [];
grocery.push(product);


product = {
    productName: "salt",
    size: "50 g",
    price: 25,
    quantity: 4,
    subtotal: 0
}

grocery.push(product);

product = {
    productName: "tea",
    size: "100 bags",
    price: 49,
    quantity: 1,
    subtotal: 0
}

grocery.push(product);


for (let i = 0; i < grocery.length; i++){
grocery[i].productName = grocery[i].productName + " SOLD";
grocery[i].subtotal = grocery[i].price * grocery[i].quantity;
total += grocery[i].subtotal * 1.15;
totalx += grocery[i].subtotal;
}

totalx *= 1.15;






