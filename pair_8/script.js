// function name(аргументи){
//     код
// }
//
// function hello(){
//     alert("Hello world!")
// }
//
// hello();
// hello();
// hello();

// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані")
//     console.log("Графік роботи: 08:00 - 21:00")
//     console.log(`Товар: ${name}, вартість: ${price}грн.`)
//     console.log(`Сума до оплати: ${count * price}`)
// }
// showInfo('Зелений чай', 100, 4);

// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma;
//     if(suma>= 5000){
//         discount = 0.1;
//     }
//     else{
//         discount = 0;
//     }
//
//     totalSuma = suma * (1- discount);
//     return totalSuma;
// }
//
// let total = calculateTotal(500, 3);
// console.log(total);


// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 08:00 - 21:00")
// }
//
// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscount(total){
//     if(total >= 10000){
//         return 15
//     }
//     else if(total >= 5000){
//         return 10
//     }
//     else if(total >= 2000){
//         return 5
//     }
//     else{
//         return 0
//     }
// }
//
// function getDiscountValue(total, percent){
//     return total * percent/100;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Введіть назву товару:");
// let productPrice = +prompt("Введіть вартість товару:");
// let productCount = +prompt("Введіть кількість товару:");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscount(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice}`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal}`);
// console.log(`Знижка: ${discountPercent}`);
// console.log(`Сума знижки: ${discountValue}`);
// console.log(`До сплати: ${finalPrice}`);



//________________________

// function calculateTickets(price, count){
//     return price * count;
// }
//
// function getTicketDiscount(total){
//     if(total > 1500){
//         return 15
//     }
//     else if(total > 1000){
//         return 10
//     }
//     else if(total > 500){
//         return 5
//     }
//     else{
//         return 0;
//     }
// }
//
//
// function calculateTicketDiscount(total, percent){
//     let sum = getTicketDiscount * total/100;
//     return sum;
// }
//
// function calculateTicketFinalPrice(total, discount){
//     return totalFinalPrice = total -calculateTicketDiscount;
// }

//---------

let savedLogin = "";
let savedPassword = "";


function registerUser() {
    savedLogin = prompt("Введіть новий Login:");
    savedPassword = prompt("Введіть новий password:");
    alert("Реєстрація успішна!");
}


function loginUser() {
    if (!savedLogin || !savedPassword) {
        alert("Спочатку зареєструйтеся (варіант 1)!");
        return;
    }

    let attempts = 3;

    while (attempts > 0) {
        let userLogin = prompt(`Вхід. Залишилось спроб: ${attempts}\nВведіть userLogin:`);
        let userPassword = prompt("Введіть userPassword:");

        if (userLogin === savedLogin && userPassword === savedPassword) {
            alert("Вхід успішний! Вітаємо в системі");
            return;
        } else {
            attempts--;
            if (attempts > 0) {
                alert("Неправильний логін або пароль. Спробуйте ще раз");
            } else {
                alert("Спроби вичерпано! Повернення до головного меню");
            }
        }
    }
}

while (true) {
    let choice = prompt("Виберіть дію:\n1 - реєстрація\n2 - вхід\n0 - закрити");

    if (choice === "1") {
        registerUser();
    } else if (choice === "2") {
        loginUser();
    } else if (choice === "0") {
        alert("Програму закрито");
        break;
    } else {
        alert("Некоректний вибір. Спробуйте ще раз");
    }
}
