//NAVIGATION TOGGLE


//INTERSECTION OBSERVER ANIMATIONS

const targets = document.querySelectorAll("h1");
const cards =  [...document.getElementsByClassName("card")];
//all h1s count mainly used for the first header in the promo element
const headerTransition = target =>{
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const element = entry.target;
                if(element.classList.contains("card")){
                    element.classList.add("enterRight");
                    observer.disconnect();
                }
                element.classList.add("enterBelow");
                observer.disconnect();
            };
        });
    });
    observer.observe(target);
};
//looks for the cards in the second part
const cardTransition = target =>{
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const element = entry.target;
                if(element.id=== "card2"){
                    element.classList.add("enterLeft");
                    observer.disconnect();
                }
                element.classList.add("enterRight");
                observer.disconnect();
            };
        });
    });
    observer.observe(target);
};
targets.forEach(headerTransition);
cards.forEach(cardTransition);