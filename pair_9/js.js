let prices = [12, 5, 45, 78, 9];
// const prices2 = [120, 23, 45, 60, 55];
// console.log(prices[2]);
// prices2[1] = 30;
//
//
// console.log(prices2);
// console.log(prices.length);
// let suma = 0;
// for (let i = 0; i < prices2.length; i++) {
//     suma += prices[i]
//     if(prices[i] % 2 === 10) {
//         console.log(prices[i]);
//     }
// }
// console.log(suma);



function countLimit(prices, limit) {
    let count = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < limit) {
            count++;
        }
    }
    return count;
}

let prices = [50, 45, 30, 100, 55];
let limit = 50;
console.log(countLimit(prices, limit));

//------------------------#1
let arr = [20, 40, 30]
function averageArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / (arr.length - 1);
    return average;
}


//----------------------#2
function quiz() {
    let arr = [];
    let count = +prompt("Скільки чисел ви хочете ввести?");

    for (let i = 0; i < count; i++) {
        let num = +prompt(`Введіть число #${i + 1}:`);
        arr[arr.length] = num;
    }

    console.log("Отриманий масив:", arr);
    return arr;
}