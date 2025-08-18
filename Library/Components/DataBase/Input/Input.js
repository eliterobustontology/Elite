export const INPUT=(HOLDER,WIDTH,HEIGHT,MARGIN,COLOR,TYPE,PLACE,callback)=>{

    ELEMENTED(HOLDER,"input",(ELEMENTS)=>{

        STYLED(ELEMENTS,"color",COLOR||"#FFFFFF");
        STYLED(ELEMENTS,"background","transparent");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"border-bottom","1px solid "+COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"width",WIDTH||"95%");
        STYLED(ELEMENTS,"height",HEIGHT||"32px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"outline","none");

        ELEMENTS.placeholder=PLACE||"Enter Text";
        ELEMENTS.type=TYPE||"text";
        
        callback(ELEMENTS);

    });

};