// function isHighScore(score) {
//     return score >= 10;
// }
//
// scores = [12, 5, 4, 11, 10, 9]
//
//
// let highScore = scores.filter(isHighScore)
// console.log(highScore)

// scores = [12, 5, 4, 11, 10, 9]
//
// let highestScore = scores.filter(score => score >= 10);
//
// console.log(highestScore);


let courses = [
    {id:1, title: "HTML", description: "HTML", price: 300, active: false},
    {id:2, title: "CSS", description: "CSS", price: 300, active: false},
    {id:3, title: "JavaScript", description: "JavaScript", price: 300, active: false},
    {id:4, title: "Vue", description: "Vue", price: 300, active: false},
]

// let idCourse = +prompt("What is the course of this course?");
// let found = courses.find(course => course.id === idCourse);
// if (found !== undefined) {
//     console.log(found);
// }
// else{
//     console.log("Такого курсу не знайдено")
// }
// let activeCourse = courses.find(course => course.active === true);
// console.log(activeCourse);
//
// let titleCourse = courses.map(course => course.title);
// let priceCourse = courses.map(course => course.price * 0.9);
// console.log(titleCourse);
// console.log(priceCourse);

// let jsSearch = courses.filter(course => course.description.includes('JS'))
// console.log(jsSearch);

// let books = [
//     {id:1, title: "HTML для початківців", author: "Олександра Серйозна", years: 2026, available: true},
//     {id:2, title: "CSS для початківців", author: "Олександра Весела", years: 2025, available: true},
//     {id:3, title: "JS для початківців", author: "Олександра Зла", years: 2025, available: true},
//     {id:4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", years: 2026, available: false},
// ]
//
// let year = +prompt("Рік видання")
// let existingBooks = books.filter((book) => book.author === year)
// console.log(existingBooks)
//
// let titleBooks = books.map((book) => book.title);
// console.log(titleBooks);
//
// let searchBooks = books.filter((book) => book.title.includes("Початківці"))
// console.log(searchBooks)

// let price = [500, 2000, 700]
// console.log(price.sort((a, b) => a - b))

let books = [
    {id:1, title: "HTML для початківців", author: "Олександра Серйозна", years: 2026, available: true},
    {id:2, title: "CSS для початківців", author: "Олександра Весела", years: 2025, available: true},
    {id:3, title: "JS для початківців", author: "Олександра Зла", years: 2025, available: true},
    {id:4, title: "JS + VUE для початківців", author: "Олександра Відповідальна", years: 2026, available: false},
]

// let lowerUpper = [...books].sort((a, b) => a.years - b.years);
// console.log(lowerUpper);

let existingBooks = books
    .filter(book => book.available === true)
    .sort((a, b) => a.price - b.price)
    .map(book => `${book.title} - ${book.author}`)
console.log(existingBooks);






