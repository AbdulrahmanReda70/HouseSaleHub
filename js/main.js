let haeder = document.querySelector("header");
let logo = document.querySelector(".head-logo");
let navButtom = document.querySelector("header button");
let home = document.querySelector(".home");
let popular = document.querySelector(".popular");
let value = document.querySelector(".value");
let contact = document.querySelector(".contact");
let home_scroll = home.offsetHeight + home.offsetTop - innerHeight - 3;
let popular_scroll = popular.offsetHeight + popular.offsetTop - innerHeight - 3;
let value_scroll = value.offsetHeight + value.offsetTop - innerHeight - 3;
let contact_scroll = contact.offsetHeight + contact.offsetTop - innerHeight - 3;
let nav_list = document.querySelectorAll(".nav-link");
let scrollUp = document.querySelector(".scroll-up");

nav_list.forEach(ele => {
    ele.addEventListener('click', () => {
        let move = document.querySelector(`.${ele.dataset.move}`);
        move.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    });
});

window.onscroll = () => {
    if (window.scrollY > 150) {
        haeder.style.backgroundColor = "#FFF";
        logo.style.color = "var(--first-color)";
        navButtom.style.display = "block";
    } else {
        navButtom.style.display = "none";
        haeder.style.backgroundColor = "transparent";
        logo.style.color = "#fff";
    }

    if (scrollY > home_scroll && scrollY < popular_scroll) {
        nav_list.forEach(ele => {
            ele.classList.remove("active");
        });
        nav_list[0].classList.add("active");
    }
    if (scrollY > popular_scroll && scrollY < value_scroll) {
        nav_list.forEach(ele => {
            ele.classList.remove("active");
        });
        nav_list[1].classList.add("active");
    }
    if (scrollY > value_scroll && scrollY < contact_scroll) {
        nav_list.forEach(ele => {
            ele.classList.remove("active");
        });
        nav_list[2].classList.add("active");
    }
    if (scrollY > contact_scroll) {
        nav_list.forEach(ele => {
            ele.classList.remove("active");
        });
        nav_list[3].classList.add("active");
    }
    if (scrollY > 300) {
        scrollUp.classList.add("scrollUp-show");
    } else {
        scrollUp.classList.remove("scrollUp-show");
    }
};


// 

var swiper = new Swiper(".popular-container", {
    spaceBetween: 20,
    grapCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
});

//
let valeicon = document.querySelector(".value i:last-of-type");
let valueHeader = document.querySelectorAll(".value-boxes .header");
valueHeader.forEach(header => {
    header.addEventListener('click', () => {
        let valeicon = header.parentElement.querySelector("i:last-of-type");
        console.log(valeicon);
        let valuePrag = header.parentElement.querySelector(".description");
        if (valuePrag.classList.contains("open")) {
            valeicon.style.transform = "rotate(0deg)";
            valuePrag.removeAttribute("style");
            valuePrag.classList.remove("open");
        } else {
            valuePrag.classList.add("open");
            valuePrag.style.height = valuePrag.scrollHeight + "px";
            valeicon.style.transform = "rotate(180deg)";
        }
    });
});

// scroll up

////

const re = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

re.reveal('.home-data > h1');
re.reveal('.home-data > p', { delay: 500 });
re.reveal('.home-form', { delay: 600 });
re.reveal('.home-value', { delay: 700 });
re.reveal('.home-image', { delay: 800, origin: 'bottom' });
re.reveal('.log-container', { interval: 50 });
// 
re.reveal('.value .value-img', { origin: 'left' });
re.reveal('.AA', { origin: 'right' });
re.reveal('.subscripe-content,.footer', { origin: 'top' });
re.reveal('.home-image', { delay: 800, origin: 'bottom' });