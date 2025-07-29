const FOOTER=(HOLDER,COLOR,callback)=>{

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
const HEADER=(HOLDER,COLOR,callback)=>{
    
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
const TEXT=(HOLDER,TYPE,COLOR,MARGIN,SIZE,WORDS,callback)=>{
    
    ELEMENTED(HOLDER,TYPE||"p",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"font-size",SIZE||"20px");
        STYLED(ELEMENTS,"font-family","sans-serif");
        STYLED(ELEMENTS,"display","block");
        STYLED(ELEMENTS,"text-align","center");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        ELEMENTS.innerHTML=WORDS||"Your Text";
        
        callback(ELEMENTS);
    
    });

};
const IMAGE=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
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
const DIV=(HOLDER,WIDTH,HEIGHT,COLOR,DISPLAY,SCROLL,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"display",DISPLAY||"block");
        STYLED(ELEMENTS,"overflow",SCROLL||"hidden");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};
const LEFTIMAGE=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-left",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR);
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};
const RIGHTIMAGE=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-right",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR);
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};
const INPUT=(HOLDER,WIDTH,HEIGHT,MARGIN,COLOR,TYPE,PLACE,callback)=>{

    ELEMENTED(HOLDER,"input",(ELEMENTS)=>{

        STYLED(ELEMENTS,"color",COLOR||"#000000");
        STYLED(ELEMENTS,"width",WIDTH||"95%");
        STYLED(ELEMENTS,"height",HEIGHT||"32px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"outline","none");

        ELEMENTS.placeholder=PLACE||"Enter Text";
        ELEMENTS.type=TYPE||"text";
        
        callback(ELEMENTS);

    });

};
