/*const hamburger=document.querySelector(".hamburger")
    const menu_bar =document.querySelector(".navbar-menu .menu-bar ")
    hamburger.addEventListener("click",()=>{ 
        menu_bar.classList.toggle("show")
});

document.querySelectorAll(".navbar-menu .menu-bar a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});


const links = document.querySelectorAll(".navbar-menu .menu-bar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});*/

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu .menu-bar");
const menuLinks = document.querySelectorAll(".navbar-menu .menu-bar a");

// Open/Close menu
hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});
