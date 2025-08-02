const LINK="https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing";

const NOVASTART=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

        ROUTE("",HOMEPAGE,"HOMEPAGE");

    });

    DOWNLOADSAVEINDEX(LINK,"Catergory","Catergory","Catergory",()=>{


    });

    ROUTE("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

    });

    CLEAR("");

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","50px");
        STYLED(ELEMENT,"top","0px");

        DIV(ELEMENT,"100%","50px","transparent","block","hidden","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"border-bottom","1px solid green");

            DIV(ELEMENTS,"20%","50px","transparent","inline-flex","hidden","",(ELEMENTSE)=>{

                STYLED(ELEMENTSE,"position","absolute");
                STYLED(ELEMENTSE,"left","0px");

                ICON(ELEMENTSE,QEL,"transparent","","","",(ELEMENTIS)=>{

                });

            });

            DIV(ELEMENTS,"80%","50px","transparent","inline-flex","hidden","",(ELEMENTSE)=>{

                STYLED(ELEMENTSE,"position","absolute");
                STYLED(ELEMENTSE,"right","0px");

                ROUNDINPUT(ELEMENTSE,"95%","35px","5px","auto","green","text","Search Products",()=>{

                });

            });

        });

        DIV(ELEMENT,"100%","auto","transparent","block","auto","",(ELEMENTSE)=>{

            STYLED(ELEMENTSE,"bottom","0px");
            STYLED(ELEMENTSE,"top","0px");

            TEXT(ELEMENTSE,"h1","#FFFFFF","3%","20px","Catergories",(ELEMENTIIS)=>{

                STYLED(ELEMENTIIS,"text-align","left");

            });

            DIV(ELEMENTSE,"100%","200px","transparent","inline-flex","hidden","",(ELEMENTE)=>{

                STYLED(ELEMENTE,"overflowX","auto");

                CLEAR(ELEMENTE);

                GETINDEXEDDATA("Catergory", "Catergory", (element)=>{

                    DIV(ELEMENTE,"100px","180px","blue","block","hidden","2% ",(ELEMENTEIS)=>{

                        STYLED(ELEMENTEIS,"flex-shrink","0");
                        

                    });

                });

            });

            TEXT(ELEMENTSE,"h1","#FFFFFF","3%","20px","Catergories",(ELEMENTIIS)=>{

                STYLED(ELEMENTIIS,"text-align","left");

            });

            DIV(ELEMENTSE,"100%","200px","transparent","inline-flex","hidden","",(ELEMENTE)=>{

                STYLED(ELEMENTE,"overflowX","auto");

                CLEAR(ELEMENTE);

                GETINDEXEDDATA("Catergory", "Catergory", (element)=>{

                    DIV(ELEMENTE,"100px","180px","blue","block","hidden","2% ",(ELEMENTEIS)=>{

                        STYLED(ELEMENTEIS,"flex-shrink","0");
                        

                    });

                });

            });

            TEXT(ELEMENTSE,"h1","#FFFFFF","3%","20px","Catergories",(ELEMENTIIS)=>{

                STYLED(ELEMENTIIS,"text-align","left");

            });

            DIV(ELEMENTSE,"100%","200px","transparent","inline-flex","hidden","",(ELEMENTE)=>{

                STYLED(ELEMENTE,"overflowX","auto");

                CLEAR(ELEMENTE);

                GETINDEXEDDATA("Catergory", "Catergory", (element)=>{

                    DIV(ELEMENTE,"100px","180px","blue","block","hidden","2% ",(ELEMENTEIS)=>{

                        STYLED(ELEMENTEIS,"flex-shrink","0");

  
                    });

                });

            });

        });

    });

    FOOTER("","forestgreen",(ELEMENT)=>{

        ICON(ELEMENT,WHITEGRIDICON,"transparent","","","",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",CATERGORYPAGE,"HOMEPAGE");

            });

        });

        ICON(ELEMENT,WHITESAVEDICON,"transparent","","","",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",SAVEDPAGE,"HOMEPAGE");

            });

        });

        ICON(ELEMENT,WHITEUSERPROFILEICON,"transparent","","","",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",USERACCOUNTPAGE,"HOMEPAGE");

            });

        });
        
    });

};

const CATERGORYPAGE=()=>{

    CLEAR();

    HEADER("","forestgreen",(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,"","20px","20px","auto 2%",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","auto auto auto  63%","20px","Catergory",()=>{

        });

    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"top","50px");

        CLEAR(ELEMENT);

        GETINDEXEDDATA("Catergory", "Catergory", (element)=>{

            console.log(element);

            DIV(ELEMENT,"45%","180px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{

                STYLED(ELEMENTEIS,"flex-shrink","0");
                STYLED(ELEMENTEIS,"border-radius","5px");
                STYLED(ELEMENTEIS,"border","1px solid green");

                IMAGE(ELEMENTEIS,element.ProductImage,"","100%","100%","",(ELEMENTER)=>{

                    STYLED(ELEMENTER,"position","absolute");
                    STYLED(ELEMENTER,"left","0");

                });

                FOOTER(ELEMENTEIS,"forestgreen",(ELEMENT)=>{

                    TEXT(ELEMENT,"h1","#FFFFFF","auto","14px",element.ProductName,()=>{

                    });

                });
    
            });

        });

    });

};

const SAVEDPAGE=()=>{

    CLEAR();

    HEADER("","forestgreen",(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,"","20px","20px","auto 2%",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","auto auto auto  55%","20px","Saved Items",()=>{

        });

    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"top","50px");

    });

};

const USERACCOUNTPAGE=()=>{

    CLEAR();

    HEADER("","forestgreen",(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,"","20px","20px","auto 2%",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","auto auto auto  63%","20px","Profile",()=>{

        });

    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"top","50px");

    });

};