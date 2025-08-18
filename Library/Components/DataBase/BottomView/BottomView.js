export const BOTTOMVIEW=(HOLDER)=>{

    CLEAR(HOLDER);

    DIV(HOLDER,"100%","auto","green","block","hidden","auto",(ELEMENTIS)=>{

        STYLED(ELEMENTIS,"position","absolute");
        STYLED(ELEMENTIS,"top","30%");
        STYLED(ELEMENTIS,"bottom","0");
        STYLED(ELEMENTIS,"border-radius","10px 10px 0px 0px");

        HEADER(ELEMENTIS,"transparent",(ELSESE)=>{

            LEFTTEXT(ELSESE,"h1","#FFFFFF","2%","20px",data.Name,()=>{

            });

            RIGHTIMAGE(ELSESE,WHITECLOSEICON,"","20px","20px","2%",(ELES)=>{

                CLICK(ELES,()=>{

                    STYLED(ELEMENTIS,"display","none");

                });

            });

        });

        DIV(ELEMENTIS,"100%","auto","green","block","auto","auto",(ELEMENTISA)=>{

            STYLED(ELEMENTISA,"position","absolute");
            STYLED(ELEMENTISA,"top","50px");
            STYLED(ELEMENTISA,"bottom","0");
            STYLED(ELEMENTISA,"border-top","1px solid #cdcdcd");

            TEXT(ELEMENTISA,"p","#FFFFFF","auto","20px",data.Data,(ELEMENTS)=>{

            });

            BREAK(ELEMENTISA);

            INLINEVIEW(ELEMENTISA,"100%","50px","transparent","hidden","auto",(ELSYES)=>{

                BUTTON(ELSYES,"45%","45px","orange","#FFFFFF","10px","Call Now","",(ELESIS)=>{

                                            CLICK(ELESIS,()=>{

                                                CALL("+254794094414");

                                            });

                                        });

                                        BUTTON(ELSYES,"45%","45px","orange","#FFFFFF","10px","Whats App Now","",(ELESIS)=>{

                                            CLICK(ELESIS,()=>{

                                                WHATSAPP("+254794094414");

                                            });

                                        });

                                    });

                                });
                            
                            });



};