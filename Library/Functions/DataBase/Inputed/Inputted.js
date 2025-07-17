export const CLICK=(ELEMENT,callback)=>{

    ELEMENT.addEventListener("input", callback(ELEMENT.value));
    
};