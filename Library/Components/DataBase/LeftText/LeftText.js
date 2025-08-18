export const LEFTTEXT=(HOLDER,TYPE,COLOR,MARGIN,SIZE,WORDS,callback)=>{
    
    ELEMENTED(HOLDER,TYPE||"p",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"font-size",SIZE||"20px");
        STYLED(ELEMENTS,"font-family","sans-serif");
        STYLED(ELEMENTS,"display","block");
        STYLED(ELEMENTS,"text-align","left");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-left",MARGIN||"auto");

        ELEMENTS.innerHTML=WORDS||"Your Text";
        
        callback(ELEMENTS);
    
    });

};