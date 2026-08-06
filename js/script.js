/* ==========================================
LOGÍSTICA ECA
SCRIPT.JS
========================================== */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".menu-backdrop");

if(hamburger){

    hamburger.addEventListener("click",()=>{

        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        backdrop.classList.toggle("active");

    });

}

if(backdrop){

    backdrop.addEventListener("click",()=>{

        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        backdrop.classList.remove("active");

    });

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        backdrop.classList.remove("active");

    });

});

/* ==========================================
MENU SCROLL
========================================== */

const nav = document.querySelector("nav");

function updateNavbar(){

    if(window.scrollY>60){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

}

window.addEventListener("scroll",updateNavbar);

updateNavbar();

/* ==========================================
SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
GALERIA
========================================== */

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});

/* ==========================================
PRELOAD HERO VIDEO
========================================== */

const heroVideo = document.getElementById("heroVideo");

if(heroVideo){

    heroVideo.muted = true;
    heroVideo.play().catch(()=>{});

}

console.log("Logística ECA carregada.");

/*==========================
SCROLL REVEAL
==========================*/

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("active");

        }

    });

}

["load","scroll","resize"].forEach(event => {

    window.addEventListener(event, revealOnScroll);

});