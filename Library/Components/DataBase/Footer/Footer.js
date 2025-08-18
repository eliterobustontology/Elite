export const FOOTER=(HOLDER,COLOR,callback)=>{

    ELEMENTED(HOLDER,"footer",(ELEMENTS)=>{

        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"width","100%");
        STYLED(ELEMENTS,"height","50px");
        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"left","0");
        STYLED(ELEMENTS,"bottom","0");
        STYLED(ELEMENTS,"top","auto");
        STYLED(ELEMENTS,"display","inline-flex");

        callback(ELEMENTS);

    });

};