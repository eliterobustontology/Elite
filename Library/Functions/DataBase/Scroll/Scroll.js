export const SCROLL = (ELEMENT, callback) => {

    ELEMENT.addEventListener("scroll", () => {

        callback();

    });
    
};