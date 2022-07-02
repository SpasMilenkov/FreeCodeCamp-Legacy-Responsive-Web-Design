//INTERSECTION OBSERVER ANIMATIONS

const targets = document.querySelectorAll("h1");
const cards =  [...document.getElementsByClassName("card")];
const container = document.getElementById("offers-grid");
const offers = [...container.children];
function animations(animationType, arr){
    const transition = target =>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const element = entry.target;
                        element.classList.add(animationType);
                        observer.disconnect();
                };
            });
        });
        observer.observe(target);
    };
    arr.forEach(transition)
}
function lazyLoad(arr){
    let counter = 1;
    const transition = target =>{
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const element = entry.target;
                    element.style.backgroundImage="url('/Product Landing Page/Pictures/display"+ counter +".webp')";
                    counter++;
                    observer.disconnect();
                };
            });
        });
        observer.observe(target);
    };
    arr.forEach(transition)
}
animations("enterLeft", cards);
animations("enterBelow", targets);
lazyLoad(offers);