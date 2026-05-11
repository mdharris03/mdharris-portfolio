particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#c77dff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            color: "#9d4edd"
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});
var typed = new Typed(".typing", {

    strings: [
        "Mechatronics Student",
        "Tech Enthusiast",
        "Anime Lover",
        "Future Developer",
        "AI Explorer"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    loop: true

});

VanillaTilt.init(document.querySelectorAll(".tilt"), {

    max: 15,

    speed: 400,

    glare: true,

    "max-glare": 0.3

});

window.addEventListener("scroll", reveal);

function reveal(){

    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;

        var revealTop = reveals[i].getBoundingClientRect().top;

        var revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

        else{

            reveals[i].classList.remove("active");

        }

    }

}

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});