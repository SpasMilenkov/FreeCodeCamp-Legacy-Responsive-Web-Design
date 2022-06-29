const targets = document.querySelectorAll("h1");
const cards =  [...document.getElementsByClassName("card")];

const transition = target =>{
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
targets.forEach(transition);
cards.forEach(cardTransition);