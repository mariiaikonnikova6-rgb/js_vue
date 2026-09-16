// let num = 1;
// while(num <= 5){
//     console.log(num);
//     num++;
// }

// let userNumber = +prompt('Enter your number');
// while(userNumber <1 || userNumber > 10){
//     userNumber = +prompt('Error. Enter your number');
//     console.log("error");
// }

// let age = +prompt('Enter your age');
// while(Number.isNaN(age) || age >= 100){
//     age = +prompt('Error. Enter your age');
// }
//
// console.log(age);


// const correctPin = 1234;
//
// let userPin = +prompt('Enter a valid pin');
// let attempts = 1;
// while(correctPin !== userPin && attempts < 3){
//     userPin = +prompt('Error. Enter a valid pin');
//     attempts++;
// }
// if (userPin ===correctPin){
//     console.log("Welcome");
// }
// else{
//     console.log("Заблоковано");
// }

// const correctPin = 1234;
// let attempts = 1;
// while(attempts <= 3){
//     let userPin = +prompt('Enter valid pin');
//     if(userPin === correctPin){
//         console.log("You entered a valid pin");
//         break;
//     }
//     console.log("error pin");
//     attempts++;
// }

let menuChoice;

// do{
//     menuChoice = prompt("What is your choice? \n 1 = переглянути профіль \n 2 = налаштування \n 3 = статистика \n 0 = вийти");
//     if(menuChoice === "1"){
//         console.log("Відкриваємо профіль");
//     }
//     else if(menuChoice === "2"){
//         console.log("ВІдкиваємо налаштування");
//     }
//     else if(menuChoice === "3"){
//         console.log("ВІдкиваємо статистику");
//     }
//     else if(menuChoice === "0"){
//         console.log("Вийти");
//     }
//     else{
//         console.log("вибір неправилльний");
//     }
// } while(menuChoice !== "0");

// do{
//     menuChoice = prompt("What is your choice? \n 1 = переглянути профіль \n 2 = налаштування \n 3 = статистика \n 0 = вийти");
//     switch (Number(menuChoice)) {
//         case 1:
//             console.log("Відкриваємо профіль");
//             break;
//         case 2:
//             console.log("Відкриваємо налаштування");
//             break;
//         case 3:
//             console.log("Відкриваємо статистику");
//             break;
//         case 0:
//             console.log("Вийти");
//             break;
//         default:
//             console.log("Вибір неправильний");
//             break;
//     }
// } while(menuChoice !== "0");


// let count = 0;
// let sum = 0;
//
// while(count < 5){
//     let grade = +prompt(`Enter grade # ${count + 1}`);
//     if(Number.isInteger(grade) || grade < 1 || grade > 12){
//         alert("некоректна оцінка. Введи ще раз")
//         continue
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);


// let questionsNumber = 1, score = 0;
// while(questionsNumber <= 5){
//     let questions = '', correctAnswer = '';
//     switch(questionsNumber){
//         case 1:
//             questions = "Ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//             case 2:
//                 questions = "оператор and"
//                 correctAnswer = '&&';
//                 break;
//                 case 3:
//                     questions = "оператор or";
//                     correctAnswer = 'or';
//                     break;
//                     case 4:
//                         questions = "як зупинити цикл?";
//                         correctAnswer = 'break';
//                         break;
//                         case 5:
//                             questions = "строга рівність позначається";
//                             correctAnswer = '===';
//                             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5\n ${questions}`);
//     if(answer === ''){
//         alert("відповідь не може бути пуста");
//         continue
//     }
//     if(answer === correctAnswer){
//         alert("вірно!");
//         score++;
//     }
//     else{
//         alert("не вірно")
//     }
//     questionsNumber++;
// }
//
// if(score === 5){
//     console.log("ти молодець!");
// }
// else if(score >= 3){
//     console.log("ок")
// }
// else{
//     console.log("треба вчитись")
// }

//---------------------------

let age;

while (true) {
    age = Number(prompt("Введіть свій вік (від 12 до 90):"));

    if (age >= 12 && age <= 90) {
        break;
    } else {
        alert("Некоректне значення! Спробуйте ще раз.");
    }
}

const correctPin = 4321;
let attempts = 0;
let isAccessGranted = false;

while (attempts < 3) {
    let enteredPin = Number(prompt("Введіть PIN-код:"));
    attempts++;

    if (enteredPin === correctPin) {
        isAccessGranted = true;
        break;
    } else {
        alert("Неправильний PIN! Залишилось спроб: " + (3 - attempts));
    }
}

if (isAccessGranted) {
    let choice;

    do {
        choice = Number(prompt(
            "--- МЕНЮ ТЕРМІНАЛУ ---\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід\n\n" +
            "Виберіть пункт:"
        ));

        switch (choice) {
            case 1:
                alert("Ви обрали: Особистий кабінет.");
                break;
            case 2:
                alert("Ви обрали: Повідомлення.");
                break;
            case 3:
                alert("Ви обрали: Налаштування.");
                break;
            case 0:
                alert("Вихід з програми. До побачення!");
                break;
            default:
                alert("Такого пункту немає.");
                break;
        }
    } while (choice !== 0);

} else {
    alert("Доступ заблоковано! Ви використали 3 спроби.");
}
