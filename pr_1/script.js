//Практична робота №1 Розгалуження та цикли JavaScript
// Консольний сервіс TicketFlow

let eventType;
let Price = 0;

while (true) {
    eventType = prompt("Виберіть тип події:\n1 - кіно \n2 - театр \n3 - концерт ");

    switch (eventType) {
        case "1":
            Price = 150;
            break
        case "2":
            Price = 220;
            break;
        case "3":
            Price = 350;
            break;
        default:
            alert("Неправильний номер події! Спробуйте ще раз");
            break;
    }
    if (Price > 0) break;
}

let dayType = prompt("Виберіть тип дня:\n1 - будній\n2 - вихідний");
while (dayType !== "1" && dayType !== "2") {
    dayType = prompt("Неправильне значення! Виберіть тип дня:\n1 — будній\n2 — вихідний");
}

if (dayType === "2") {
    Price = Price * 1.15;
}

let ticketCount = parseInt(prompt("Введіть кількість квитків від 1 до 6"));
while (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 6) {
    ticketCount = parseInt(prompt("Некоректна кількість! Введіть значення від 1 до 6"));
}

let totalProcessed = 0, freeCount = 0, discountCount = 0, fullPriceCount = 0, totalSum = 0;

for (let i = 1; i <= ticketCount; i++) {
    let age;

    let ageInput = prompt(`Квиток №${i}: Введіть вік користувача (або -1 для завершення оформлення)`);
    age = parseInt(ageInput);

    while ((isNaN(age) && ageInput !== "-1") || age < -1) {
        alert("Некоректний вік! Спробуйте ще раз.");
        ageInput = prompt(`Квиток №${i}: Введіть вік користувача (або -1 для завершення оформлення)`);
        age = parseInt(ageInput);
    }

    if (ageInput === "-1") {
        console.log("Оформлення перервано користувачем");
        break;
    }

    totalProcessed++;

    if (age >= 0 && age <= 5) {
        freeCount++;
        continue;
    }

    let discount = 0;
    let hasStudentDiscount = false;

    if (age >= 6 && age <= 12) {
        discount = 0.50;
        discountCount++;
    } else if (age >= 13 && age <= 17) {
        discount = 0.20;
        discountCount++;
    } else if (age >= 18 && age <= 59) {
        if (age <= 25) {
            let student = confirm("Маєте студентський квиток?");
            if (student === true) {
                discount = 0.10;
                hasStudentDiscount = true;
                discountCount++;
            } else {
                fullPriceCount++;
            }
        } else {
            fullPriceCount++;
        }
    } else if (age >= 60) {
        discount = 0.25;
        discountCount++;
    }

    let ticketPrice = Price * (1 - discount);
    totalSum += ticketPrice;
}

let finalSum = totalSum;
if (finalSum > 1000) {
    finalSum = finalSum * 0.95;
}

console.log(`Кількість оброблених квитків: ${totalProcessed}`);
console.log(`Безкоштовні: ${freeCount}`);
console.log(`Зі знижкою: ${discountCount}`);
console.log(`За повною ціною: ${fullPriceCount}`);
if (totalSum > 1000) {
    console.log(`Загальна сума (з додатковою знижкою 5% за замовлення >1000 грн): ${finalSum} грн`);
} else {
    console.log(`Загальна сума до сплати: ${finalSum} грн`);
}


