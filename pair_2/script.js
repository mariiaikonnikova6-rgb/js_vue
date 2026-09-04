// > >=

// let a, b;
//
// a = "1";
// b = 1;
//
// console.log(a == b);

// let temp = prompt("Enter a temperature number");
// let result;
// if (temp <= 0) {
//     result = "холодно";
// }
// else if (temp > 10 && temp <= 10) {
//     result = "норм";
// }
// else if (temp > 10) {
//     result = "жарко";
// }
//
// alert(result);

//________________________


// let number = prompt("Enter a number");
// let result;
// if (number %2 === 0) {
//     result = "парне";
// }
// else if (number %2 === 1) {
//     result = "непарне";
// }
// alert(result);


//________________________

// const login = "admin";
// const password = "12345";
//
// let userLogin = prompt("Enter username");
// let userPassword = prompt("Enter password");
//
//
// if(userLogin === login && userPassword === password) {
//     alert("Вхід дозволений");
// }
// else{
//     alert("невірний пароль або логін");
// }


//________________________


//courier 200
//post 200
//pickup 0


// let cost, deliver = prompt("Яка доставка?");
//
// switch(deliver){
//     case "courier":
//         cost = 200;
//         break;
//     case "post":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//     default:
//         cost = "n|a";
// }
//
// console.log(cost);


//________________________

// let day, number = prompt("Який номер дня?");
//
// switch(number){
//     case "1":
//         day = "Monday"
//         break;
//     case "2":
//         day = "Tuesday";
//         break;
//     case "3":
//         day = "Wednesday";
//         break;
//     case "4":
//         day = "Thursday";
//         break;
//     case "5":
//         day = "Friday";
//         break;
//     case "6":
//         day = "Saturday";
//         break;
//     case "7":
//         day = "Sunday";
//         break;
//     default:
//         day = "n|a";
// }
//
// console.log(day);


//________________________


let productName = prompt("Enter your product name");
let productPrice = prompt("Enter your product price");
let productCount = prompt("Enter your product count");

let hasCard = confirm("Чи є у вас дисконтна карта?");//10%


let deliveryCost, deliveryType = prompt("Enter your delivery type: courier, post, pickup");

let totalPrice, discount = 0;

totalPrice = productPrice * productCount;


if(totalPrice > 1000) {
    discount = 0.05;
}
else if(totalPrice > 1000) {
    discount = 0.1;
}


if(hasCard) {
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1);
}
else{
    totalPrice = (totalPrice - (totalPrice * discount));
}

switch(deliveryType) {
    case "courier":
        deliveryCost = 200;
        break;
    case "post":
        deliveryCost = 100;
        break;
    case "pickup":
        deliveryCost = 0;
        break;
}


totalPrice = totalPrice + deliveryCost;

alert(productName + " " + totalPrice);

//________________________