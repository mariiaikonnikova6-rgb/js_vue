
//1

// let age = prompt("Enter your age number");
// let reg = confirm("Чи зареєстрований?");
//
// if(reg === true && age >= 18) {
//     alert("Доступ дозволено");
// }
// else{
//     alert("Доступ відмовлено");
// }

//3

// let reg = confirm("Are you registrated?");
// if (reg) {
//     let age = prompt("Please enter your age number");
//     if (age >= 18) {
//         alert("You can enter");
//     }
//     else{
//         alert("You can't enter");
//     }
// }
// else{
//     alert("You can't enter");
// }


//4

// let grade = +prompt("Enter your grade");

//90-100 - відмінно, 80-70 - незадовільно, 60-69-задовільно, 0-59 - незадовільно
// switch (true) {
//     case(grade>= 90):
//         alert("відмінно");
//         break;
//
//     case(grade >= 70):
//         alert("задовільно");
//         break;
//
//     case(grade >= 60):
//         alert("незадовільно");
//         break;
//
//     default:
//         alert("незадовільно");
//         break;
//
// }


//5

// let status = prompt("Who are you?");
// let block = confirm("Is your account blocked?");
// if (status === "Teacher") {
//     if(!block) {
//         alert("Welcome to Teacher!");
//     }
//     else{
//         alert("Account Blocked!");
//     }
// }
// else if(status === "student") {
//     if(!block) {
//         sub = confirm("Do you have a sub?");
//         if (sub) {
//             alert("Welcome to student!");
//         }
//         else{
//             alert("Account Blocked!");
//         }
//     }
//
// }
//
// else{
//     alert("Your role is regognized");
// }

//6

// назва товару, кількість товару, вартість товару за шт. магазин дає знижку якщо: 1. користувач зареєстрований 2. сума покупки 1000+ 3. у користувача є промокод або віп статус.
// промокод: "sale". знижка 10 відсотків і виводимо повну вартість, якщо ні- просто вартіcть
const sale = 'sale';
const discount = 0.1;
let sum = 0;
let name = prompt("Enter product name");
let count = prompt("Enter product number");
let price = prompt("Enter product price");
sum = count * price
let access = confirm("Are you registered?")
if (access === true && sum >= 1000 && (prompt("Enter promocode") === sale || confirm("Do you have a vip status?"))) {
    alert("You have a discount: " + (sum - (sum * discount)))}
else {
    alert("Your total price: " + sum);
}

