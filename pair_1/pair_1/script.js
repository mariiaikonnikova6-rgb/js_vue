// alert("Привіт");
// const name = "Іван";
//
// let age = 0;
//
// const isStudent = true;
//
// console.log(typeof isStudent);

let cash = prompt("Enter a cash");
let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");
let delivery = +prompt("Enter your delivery price");
let salePercent = +prompt("Enter your sale (%)");

let fullPrice = (productPrice * productCount) + delivery;
let discountAmount = (fullPrice * salePercent) / 100;
let totalPrice = fullPrice - discountAmount;

console.log(`Product name: ${productName}, Total price without sale: ${fullPrice}`);
console.log(`Discount amount: ${discountAmount}, Final price: ${totalPrice}`);

alert("Product: " + productName + "\nTotal price to pay is: " + totalPrice);

let isEnough = cash >= totalPrice;
let message = (isEnough && `Коштів достатньо! Решта: ${cash - totalPrice}`) || `Недостатньо коштів. Бракує: ${totalPrice - cash}`;
alert(message);
