export const LEFTIMAGE=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-left",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR);
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};