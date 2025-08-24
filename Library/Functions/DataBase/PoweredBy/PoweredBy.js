export const POWEREDBY=(ELEMENT,COLOR)=>{

    const NAMES=document.createElement("p");

    DISPLAY(NAMES,"Powered By Elite Robust Ontology");

    STYLED(NAMES,"text-align","center");
    STYLED(NAMES,"color",COLOR||"#000000");

    CLICK(NAMES,()=>{

        WEBSITE("https://eroinnovations.site");

    });

    ADD(ELEMENT,NAMES);

};