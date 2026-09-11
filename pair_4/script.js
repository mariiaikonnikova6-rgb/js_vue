// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// for(let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }


// for(let i = 20; i >0; i--) {
//     console.log(i);
// }

// let count = 0;
// for(let i = 20; i >0; i--) {
//     console.log(count += i);
// }


// let sum = 0;
// for (let i = 1; i <=50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);


//________________#1

// for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

//_______________#2
// for(let i = 1; i <= 100; i++) {
//     if(i > 25 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }


//_______________#3
// for(let i = 1; i <= 30; i++) {
//     if(i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }


//______________#4
// let pupils = +prompt("Кількість учнів");
// let sum = 0;
// let goodGrade = 0;
// let badGrade = 0;
// let maxGrade = 1;
// let minGrade = 12;
// let countless7 = 0;
// let countmore7 = 0;
// for (let i = 0; i < pupils; i++) {
//     let mark = +prompt("write mark" + i);
//     if(!(mark >= 1 && mark <= 12)){
//         alert("error");
//         i--;
//         continue;
//     }
//     sum+= mark;
//     if(i >=7){
//         goodGrade ++;
//     }
//     else{
//         badGrade ++;
//     }
//
//     if(mark> maxGrade){
//         maxGrade = mark;
//     }
//     if(minGrade < minGrade){
//         minGrade = mark;
//     }
//
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
// console.log(maxGrade);
// console.log(minGrade);


//_________________________________#2
let pupils = +prompt("Кількість учнів");
let res = 0, highres = 0, midleres = 0, lowres = 0, absolut = -1;
let maxGrade = 1;
let minGrade = 12;
for (let i = 0; i < pupils; i++) {
    let mark = +prompt("write mark" + i);
    if(!(mark >= 0 && mark <= 100)){
        alert("error");
        i--;
        continue;
    }
    res+=mark;
    if(mark>=90 && mark<=100){
        if(mark===100 && absolut === -1){
            absolut = i;
            break;
        }
        highres++;
    }
    else if(mark>=60 && mark<=89){
        midleres++;
    }
    else{
        lowres++;
    }
    if(mark> maxGrade){
        maxGrade = mark;
    }
    if(minGrade < minGrade){
        minGrade = mark;
    }
}

let average = res/pupils;

console.log(average);
console.log(highres);
console.log(midleres);
console.log(lowres);
console.log(maxGrade);
console.log(minGrade);
console.log(absolut);
