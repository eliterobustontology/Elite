export const BUTTON=(HOLDER,WIDTH,HEIGHT,COLOR,WORDCOLOR,RADIUS,WORD,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"button",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"color",WORDCOLOR||"#FFFFFF");
        STYLED(ELEMENTS,"border-radius",RADIUS||"block");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"outline","none");
        DISPLAY(ELEMENTS,WORD||"Your Text");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};