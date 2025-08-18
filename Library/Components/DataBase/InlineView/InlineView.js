export const INLINEVIEW=(HOLDER,WIDTH,HEIGHT,COLOR,SCROLL,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"display","inline-flex");
        STYLED(ELEMENTS,"flexShrink","0");
        STYLED(ELEMENTS,"overflowX",SCROLL||"hidden");
        STYLED(ELEMENTS,"overflowY","hidden");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};