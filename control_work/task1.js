let age = +prompt("What is your age?");
let day = +prompt("What is day?");
let ticket = 0;
if (day === 1) {
    ticket = 200;
}
else if (day === 2) {
    ticket = 250;
}
else{
    alert("Помилка: неправильний тип дня");
    day = +prompt("What is day?");
}

if(age<=7){
    ticket = 0;
}
else if(age>=8 && age<=17){
    ticket = ticket*0.5;
}
else if(age>=18 && age<=59){
    ticket = ticket;
}
else{
    ticket = ticket*0.4;
}
console.log(ticket);