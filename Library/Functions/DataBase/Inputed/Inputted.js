export const INPUTED = (ELEMENT, callback) => {
    
    ELEMENT.addEventListener("input", () => {

        callback(ELEMENT.value);

    });

};
