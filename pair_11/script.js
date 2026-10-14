// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: 1840,
//     price: 500,
//     isAvailable: true,
// }
// console.log(book);
// console.log(book.title);

let books = [{
    id:1,
    title: "Кобзар",
    author: "Тарас Шевченко",
    year: 1840,
    price: 500,
    isAvailable: true,
},
    {
        id:2,
        title: "Лісова пісня",
        author: "Леся Українка",
        year: 1918,
        price: 600,
        isAvailable: true,
    },
    {
        id:3,
        title: "Тигролови",
        author: "Іван Багряний",
        year: 1944,
        price: 450,
        isAvailable: false,
    },
    {
        id:4,
        title: "Місто",
        author: "Валер'ян Підмогильний",
        year: 1928,
        price: 550,
        isAvailable: true,
    }]

for(let book of books){
    console.log(`book: ${book.id} - ${book.author}`); );
}
books.forEach(book => {
    console.log(`book: ${book.author}, ${book.isAvailable}`);
})

let isAvailableCount = 0;
let totalPrice = 0;

for(let book of books){
    if(book.isAvailable === true){
        isAvailableCount++;
        totalPrice += book.price;
    }
}
console.log(totalPrice);
console.log(isAvailableCount);

books[1].price = 750;
console.log(books);

books.push({
    id: 5,
    title: "Захар Беркут",
    author: "Іван Франко",
    year: 1882,
    price: 500,
    isAvailable: false

})

console.log(books);
let enterId = +prompt("Enter your book ID");
let bookFound = null;
for(let book of books){
    if(book.id === enterId){
        bookFound = book;
        break;
    }
}
if(bookFound !== null){
    let status = "Немає в наявності";
    if(bookFound.isAvailable === true){
        status = "У наявності";
    }
    alert(`Книга ${bookFound.title}. ${bookFound.price}грн. ${status}`);
}else{
    alert("Книжку не знайдено")
}