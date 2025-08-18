export const IMAGE=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"object=dit",'cover');
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};