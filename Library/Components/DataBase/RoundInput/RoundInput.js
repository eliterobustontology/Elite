export const ROUNDINPUT=(HOLDER,WIDTH,HEIGHT,RADIUS,MARGIN,COLOR,TYPE,PLACE,callback)=>{

    ELEMENTED(HOLDER,"input",(ELEMENTS)=>{

        STYLED(ELEMENTS,"color",COLOR||"#FFFFFF");
        STYLED(ELEMENTS,"background","transparent");
        STYLED(ELEMENTS,"border","1px solid "+COLOR||"#ffffff");
        STYLED(ELEMENTS,"width",WIDTH||"95%");
        STYLED(ELEMENTS,"height",HEIGHT||"32px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"border-radius",RADIUS||"10px");
        STYLED(ELEMENTS,"outline","none");

        ELEMENTS.placeholder=PLACE||"Enter Text";
        ELEMENTS.type=TYPE||"text";
        
        callback(ELEMENTS);

    });

};