export const HEADER=(HOLDER,COLOR,callback)=>{
    
    ELEMENTED(HOLDER,"header",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"width","100%");
        STYLED(ELEMENTS,"height","50px");
        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"left","0");
        STYLED(ELEMENTS,"top","0");
        STYLED(ELEMENTS,"display","inline-flex");
    
        callback(ELEMENTS);
    
    });

};