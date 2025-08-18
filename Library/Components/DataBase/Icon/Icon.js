export const ICON=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"width",WIDTH||"20px");
        STYLED(ELEMENTS,"height",HEIGHT||"20px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"object=dit",'cover');
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};