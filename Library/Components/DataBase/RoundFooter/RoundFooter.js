export const ROUNDFOOTER=(HOLDER,COLOR,WIDTH,HEIGHT,RADIUS,callback)=>{

    ELEMENTED(HOLDER,"footer",(ELEMENTS)=>{

        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"left","0");
        STYLED(ELEMENTS,"bottom","0");
        STYLED(ELEMENTS,"top","auto");
        STYLED(ELEMENTS,"display","inline-flex");
        STYLED(ELEMENTS,"border-radius",RADIUS||"50px");

        callback(ELEMENTS);

    });

};