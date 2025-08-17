export const EVENT = (ELEMENT, ACTION, callback) => {

    const target = ELEMENT instanceof Element ? ELEMENT : document.body;

    if (target && typeof target.addEventListener === "function") {

        target.addEventListener(ACTION, callback);

    } else {

        console.warn("EVENT: Invalid target element.");

    }
    
};