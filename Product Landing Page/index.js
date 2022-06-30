//INTERSECTION OBSERVER ANIMATIONS

const targets = document.querySelectorAll("h1");
const cards =  [...document.getElementsByClassName("card")];

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
animations("enterLeft", cards);
animations("enterBelow", targets);