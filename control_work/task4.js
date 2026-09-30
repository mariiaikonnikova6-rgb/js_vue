let hours = 0;
let typeCar = 0;
let cost = 0;
let rightType = 0;
let electricityCar = 0;
let sum = 0;
let maxValue = 0;
for(i = 0; i < 7; i++) {
    hours = +prompt("Кількість годин стоянки");
    typeCar = +prompt("Тип автомобіля");
    if(hours === 0) {
        break;
    }
    else if(hours < 0 || hours >12) {
        continue;
    }
    else{
        if(typeCar === 1) {
            cost = hours *40;
            rightType++;
        }
        else if(typeCar === 2) {
            cost = hours *30;
            rightType++;
            electricityCar++;
        }
        else {
            alert ("Error");
            continue;
        }

        if(hours>5){
            cost = cost - cost*0.2;
        }
    }

    if(cost > maxValue){
        maxValue = cost;
    }

    sum = sum + cost;
}

console.log(`Кількість правильно оброблених автомобілів: ${rightType}`);
console.log(`Кількість електромобілів: ${electricityCar}`);
console.log(`Загальна сума оплати: ${sum}`);
console.log(`Найбільша оплата за один автомобіль: ${maxValue}`);