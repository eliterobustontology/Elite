export const BREAK=(ELEMENT)=>{

    let BR=document.createElement("br");

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.append(BR);
        
    } else {

        BODY.append(BR);
        
    };

};