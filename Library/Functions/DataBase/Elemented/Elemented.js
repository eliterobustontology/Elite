export const ELEMENTED=(HOLDER,ELEMENT,callback)=>{

    const BODY=document.querySelector('body');

    const ELEMENTS=document.createElement(ELEMENT);

    if (HOLDER) {
 
        HOLDER.append(ELEMENTS);
        
    } else {

        BODY.append(ELEMENTS);
        
    };

    callback(ELEMENTS);

};