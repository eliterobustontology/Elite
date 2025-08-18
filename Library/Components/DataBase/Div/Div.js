export const DIV=(HOLDER,WIDTH,HEIGHT,COLOR,DISPLAY,SCROLL,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"overflow",SCROLL||"hidden");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        CONDITION(DISPLAY === "inline-flex",()=>{

            STYLED(ELEMENTS,"display",DISPLAY||"inline-flex");
            STYLED(ELEMENTS,"overflowX",SCROLL||"hidden");

        },()=>{

            STYLED(ELEMENTS,"display",DISPLAY||"block");
            STYLED(ELEMENTS,"overflowY",SCROLL||"hidden");

        });

        callback(ELEMENTS);
        
    });

};