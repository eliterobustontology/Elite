export const EVENT = (ELEMENT,ACTION,callback) => {
    if (ELEMENT) {
        ELEMENT.addEventListener(ACTION, callback);
    } else {
        document.querySelector("body").addEventListener(ACTION, callback);
    }
};