let countStudents = +prompt("Enter student's count");
let sum = 0;
let highseven = 0;
let lowseven = 0;
let maxMark = 0;
for (let i = 0; i < countStudents; i++){
    let mark = +prompt("Enter your mark");
    if(mark<0 || mark>12){
        alert("Error");
        mark = +prompt("Enter your mark");
    }
    if(mark>= 7){
        highseven++;
    }
    else{
        lowseven++;
    }
    if (mark > maxMark) {
        maxMark = mark;
    }

    sum = sum + mark;
}
let middlemark = sum/countStudents;

console.log(`Сума: ${sum}`);
console.log(`Середня: ${middlemark}`);
console.log(`Оцінок 7 і вище: ${highseven}`);
console.log(`Оцінок нижче 7: ${lowseven}`);
console.log(`Найбільша оцінка: ${maxMark}`);