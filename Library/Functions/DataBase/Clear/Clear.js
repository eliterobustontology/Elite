export const CLEAR=(ELEMENT)=>{

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.innerHTML= "";
        
    } else {

        BODY.innerHTML= "";
        
    };

};