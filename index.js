const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.info h1');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const sizes = document.querySelector('.sizes ');
const description = document.querySelector('.info h3');




container.addEventListener("mousemove", (e) => {
    let xAxis = ( e.pageX - window.innerWidth/2 )/15;
    let yAxis = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    

} 
);

container.addEventListener('mouseenter', (e) =>{
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-60deg)"
    sneaker.style.width = "16rem";
    purchase.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";


});

container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    sneaker.style.width = "20rem";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
});

