gsap.from("#container4 img ", {
    delay: 0,
    scale: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#container4 img",
        scroller:"body"
    }
})

gsap.from("#left-text h1", {
    y: -40,
    duration: 3,
    delay: 1,
    scrollTrigger:{
        trigger:"#left-text h1",
        scroller:"body"
    }
})

function Anim() {
    var fixed = document.querySelector("#fixed-img")
    var elemContainer = document.querySelector("#elem-container")

    elemContainer.addEventListener("mouseenter", function(){
        fixed.style.display = "block";
    });

    elemContainer.addEventListener("mouseleave", () => {
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter", () =>{
            let image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

function swiperAnim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

swiperAnim()
Anim()
menuAnimation()