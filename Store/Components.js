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
const BUTTON=(HOLDER,WIDTH,HEIGHT,COLOR,WORDCOLOR,RADIUS,WORD,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"button",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"color",WORDCOLOR||"#FFFFFF");
        STYLED(ELEMENTS,"border-radius",RADIUS||"block");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"outline","none");
        DISPLAY(ELEMENTS,WORD||"Your Text");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};
const ROUNDINPUT=(HOLDER,WIDTH,HEIGHT,RADIUS,MARGIN,COLOR,TYPE,PLACE,callback)=>{

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
const ICON=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
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
const AUDIO=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"audio",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR||"#FFFFFF");
        ELEMENTS.audiocontrols=true;
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};
const TEXTAREA=(HOLDER,WIDTH,HEIGHT,RADIUS,MARGIN,COLOR,PLACE,callback)=>{

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
const ROUNDFOOTER=(HOLDER,COLOR,WIDTH,HEIGHT,RADIUS,callback)=>{

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
const LEFTTEXT=(HOLDER,TYPE,COLOR,MARGIN,SIZE,WORDS,callback)=>{
    
    ELEMENTED(HOLDER,TYPE||"p",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"font-size",SIZE||"20px");
        STYLED(ELEMENTS,"font-family","sans-serif");
        STYLED(ELEMENTS,"display","block");
        STYLED(ELEMENTS,"text-align","left");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-left",MARGIN||"auto");

        ELEMENTS.innerHTML=WORDS||"Your Text";
        
        callback(ELEMENTS);
    
    });

};
const RIGHTTEXT=(HOLDER,TYPE,COLOR,MARGIN,SIZE,WORDS,callback)=>{
    
    ELEMENTED(HOLDER,TYPE||"p",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"font-size",SIZE||"20px");
        STYLED(ELEMENTS,"font-family","sans-serif");
        STYLED(ELEMENTS,"display","block");
        STYLED(ELEMENTS,"text-align","right");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-right",MARGIN||"auto");

        ELEMENTS.innerHTML=WORDS||"Your Text";
        
        callback(ELEMENTS);
    
    });

};
const INLINEVIEW=(HOLDER,WIDTH,HEIGHT,COLOR,SCROLL,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"display","inline-flex");
        STYLED(ELEMENTS,"flexShrink","0");
        STYLED(ELEMENTS,"overflow",SCROLL||"hidden");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};
const TABLEVIEW=(HOLDER,WIDTH,HEIGHT,COLOR,SCROLL,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"display","inline-table");
        STYLED(ELEMENTS,"flexShrink","0");
        STYLED(ELEMENTS,"overflow",SCROLL||"hidden");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        callback(ELEMENTS);
        
    });

};
const FOOTERVIEW=(HOLDERS,VIEWCOLOR,callback,HEADERCOLOR,callbackTwo)=>{

    CLEAR(HOLDERS);

    DIV(HOLDERS,"100%","auto",VIEWCOLOR,"block","auto","auto",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","0px");
        STYLED(ELEMENT,"bottom","50px");

        callbackTwo(ELEMENT);

    });

    FOOTER(HOLDERS,HEADERCOLOR,(ELEMENT)=>{

        callback(ELEMENT);

    });

};
const HEADERVIEW=(HOLDERS,HEADERCOLOR,callback,VIEWCOLOR,callbackTwo)=>{

    CLEAR(HOLDERS);

    HEADER(HOLDERS,HEADERCOLOR,(ELEMENT)=>{

        callback(ELEMENT);

    });

    DIV(HOLDERS,"100%","auto",VIEWCOLOR,"block","auto","auto",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","50px");
        STYLED(ELEMENT,"bottom","0px");

        callbackTwo(ELEMENT);

    });

};
