function toggleMenu() {
document.getElementById('navigation').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



let date = new Date();

console.log(date);

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('.last').textContent = ('Last Updated: ' + currentdate);

let year = date.getFullYear();

console.log(year);

document.querySelector('.year').textContent = year;
