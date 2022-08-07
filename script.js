let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    bg.style.top= value * 0.5  + 'px' ;
    moon.style.left= - value * 0.5  + 'px' ;
    mountain.style.top= -value * 0.15  + 'px' ;
    road.style.top= value * 0.15  + 'px' ;
    text.style.top= value * 1  + 'px' ;
})

//typer
const texta = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        texta.textContent = "Web Dev!";
    }, 0);
    setTimeout(() => {
        texta.textContent = "Writing!";
    }, 4000);
    setTimeout(() => {
        texta.textContent = "Coding";
    }, 8000);
}
textLoad();
setInterval(textLoad,12000);
