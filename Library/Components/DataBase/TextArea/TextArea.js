export const TEXTAREA=(HOLDER,WIDTH,HEIGHT,RADIUS,MARGIN,COLOR,PLACE,callback)=>{

    ELEMENTED(HOLDER,"textarea",(ELEMENTS)=>{

        STYLED(ELEMENTS,"color",COLOR||"#FFFFFF");
        STYLED(ELEMENTS,"background","transparent");
        STYLED(ELEMENTS,"border","1px solid "+COLOR||"#ffffff");
        STYLED(ELEMENTS,"width",WIDTH||"95%");
        STYLED(ELEMENTS,"height",HEIGHT||"200px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"border-radius",RADIUS||"10px");
        STYLED(ELEMENTS,"outline","none");

        ELEMENTS.placeholder=PLACE||"Enter Text";
        ELEMENTS.type="text";
        
        callback(ELEMENTS);

    });

};