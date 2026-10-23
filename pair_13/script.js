// let heading = document.getElementsByTagName('p');
// let heading2 = document.getElementsByTagName('profile-name');
// let profileName = document.getElementsByClassName('profile-role');
// let heading3 = document.querySelector('.profile-role');
// let skills = document.querySelectorAll('.skill');
// console.log(heading);

let student = {
    name: "Vlada",
    role: "11 IT",
    city: "Kyiv",
    portfolio: "https://github.com/",
}
let nameElement = document.querySelector("#name");
let roleElemement = document.querySelector(".profile-role");
let cityElemement = document.querySelector(".profile-city");
let portfolioElement = document.querySelector("#profile-portfolio")

nameElement.textContent = student.name;
roleElemement.textContent = student.role;
cityElemement.textContent = student.city;
portfolioElement.setAttribute('href', student.portfolio);


let skills_arr = ["HTML","CSS","Javascript"];

let skills = document.querySelectorAll(".skill");
for(let i = 0; i<skills.length; i++) {
    skills[i].textContent = skillsArr[i];
}
// skills[0].textContent = "HTML";
// skills[1].textContent = "CSS";
// skills[2].textContent = "Javascript";