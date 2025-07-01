export const ADD=(ELEMENT,DATA)=>{

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.append(DATA);
        
    } else {

        BODY.append(DATA);
        
    };

};