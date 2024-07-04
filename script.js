/*const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});*/

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

