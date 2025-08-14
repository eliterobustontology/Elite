export const HOVER = (ELEMENT, onEnter, onLeave) => {

    ELEMENT.addEventListener("mouseenter", () => onEnter(ELEMENT));

    ELEMENT.addEventListener("mouseleave", () => onLeave(ELEMENT));
    
};