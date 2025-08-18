export const BOTTOMVIEW=(HOLDER,TOP,COLORED,TOPCOLOR,NAMED,callback)=>{

    DIV(HOLDER,"100%","auto",COLORED,"block","hidden","auto",(ELEMENTIS)=>{

        STYLED(ELEMENTIS,"position","absolute");
        STYLED(ELEMENTIS,"top",TOP||"30%");
        STYLED(ELEMENTIS,"bottom","0");
        STYLED(ELEMENTIS,"border-radius","10px 10px 0px 0px");

        HEADER(ELEMENTIS,TOPCOLOR||"transparent",(ELSESE)=>{

            LEFTTEXT(ELSESE,"h1","#FFFFFF","2%","20px",NAMED,()=>{

            });

            RIGHTIMAGE(ELSESE,WHITECLOSEICON,"","20px","20px","2%",(ELES)=>{

                CLICK(ELES,()=>{

                    STYLED(ELEMENTIS,"display","none");

                });

            });

        });

        DIV(ELEMENTIS,"100%","auto","transparent","block","auto","auto",(ELEMENTISA)=>{

            STYLED(ELEMENTISA,"position","absolute");
            STYLED(ELEMENTISA,"top","50px");
            STYLED(ELEMENTISA,"bottom","0");
            STYLED(ELEMENTISA,"border-top","1px solid #cdcdcd");

            callback(ELEMENTISA);

        });
                            
    });

};