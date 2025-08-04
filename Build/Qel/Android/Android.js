const LINK="https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing";

const NOVASTART=()=>{

    GETDATA(LINK,"UserAccountPageDesign",(data)=>{

        JSONIFICATION(data,(UserData)=>{

            LOCALSTORE("UserAccountPageDesign",UserData);

        });

    });

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

            TEXT(ELEMENTSE,"h1","#FFFFFF","3% auto auto 2%","20px","Catergories",(ELEMENTIIS)=>{

                STYLED(ELEMENTIIS,"text-align","left");

            });

            DIV(ELEMENTSE,"100%","200px","transparent","inline-flex","hidden","",(ELEMENTE)=>{

                STYLED(ELEMENTE,"overflowX","auto");

                CLEAR(ELEMENTE);

                GETINDEXEDDATA("Catergory", "Catergory", (element)=>{

                    DIV(ELEMENTE,"45%","180px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{

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

        });

        TEXT(ELEMENT,"h1","#FFFFFF","2%","20px","Products",(ELEMENTIIS)=>{

        });

        DIV(ELEMENT,"","auto","transparent","block","auto","",(ELEMENT)=>{

            CLEAR(ELEMENT);

            GETINDEXEDDATA("Products", "Products", (element)=>{

                //console.log(element);

                DIV(ELEMENT,"45%","250px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{

                    STYLED(ELEMENTEIS,"flex-shrink","0");
                    STYLED(ELEMENTEIS,"border-radius","5px");
                    STYLED(ELEMENTEIS,"border","1px solid green");

                    IMAGE(ELEMENTEIS,element.ProductImage,"","100%","100%","",(ELEMENTER)=>{

                        STYLED(ELEMENTER,"position","absolute");
                        STYLED(ELEMENTER,"left","0");

                    });

                    FOOTER(ELEMENTEIS,"forestgreen",(ELEMENT)=>{

                        STYLED(ELEMENT,"height","100px");
                        STYLED(ELEMENT,"display","block");

                        TEXT(ELEMENT,"h1","#FFFFFF","5%","14px",element.ProductName,(ETET)=>{

                        });

                        DIV(ELEMENT,"100%","50px","transparent","inline-table","hidden","",(ELEMENTEIS)=>{

                            STYLED(ELEMENTEIS,"position","absolute");
                            STYLED(ELEMENTEIS,"bottom","0");
                            STYLED(ELEMENTEIS,"left","0");

                            TEXT(ELEMENTEIS,"h1","orange","5%","14px","UGX "+element.ProductPrice,(TETST)=>{
                            
                                STYLED(TETST,"text-align","left");

                            });

                            DIV(ELEMENTEIS,"20%","50px","transparent","inline-flex","hidden","",(ELEMENTSE)=>{

                                STYLED(ELEMENTSE,"position","absolute");
                                STYLED(ELEMENTSE,"right","5px");
                                STYLED(ELEMENTSE,"bottom","0px");

                                ICON(ELEMENTSE,WHITEUNHEARTICON,"transparent","","","",(ELEMENTIS)=>{

                                });

                            });

                        });

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

        TEXT(ELEMENT,"h1","#FFFFFF","auto 1% auto auto","20px","Catergory",()=>{

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

        TEXT(ELEMENT,"h1","#FFFFFF","auto 1% auto auto","20px","Saved Items",()=>{

        });

    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"top","50px");

    });

};

const USERACCOUNTPAGE=()=>{

    BACKPAGE("HOMEPAGE");

    CLEAR();

    HEADER("","forestgreen",(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,"","20px","20px","auto 2%",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","auto 1% auto auto","20px","Profile",(ELEMENTS)=>{
            
        });

    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"top","50px");

        DIV(ELEMENT,"96%","200px","transparent","block","","2%",(ELEMENTS)=>{

            STYLED(ELEMENTS,"border-radius","10px");
            STYLED(ELEMENTS,"border","1px solid green");

            DIV(ELEMENTS,"40%","100%","transparent","inline-flex","","",(ELEMENTSI)=>{

                STYLED(ELEMENTSI,"position","absolute");
                STYLED(ELEMENTSI,"left","0");

                IMAGE(ELEMENTSI,WHITEUSERPROFILEICON,"","90%","90%","auto",(ELEMENTER)=>{

                });

            });

            DIV(ELEMENTS,"60%","95%","transparent","block","","1%",(ELEMENTSI)=>{

                STYLED(ELEMENTSI,"position","absolute");
                STYLED(ELEMENTSI,"right","0");
                STYLED(ELEMENTSI,"border-radius","10px");
                STYLED(ELEMENTSI,"border","1px solid green");

                CONDITION(localStorage.getItem("UserData"),()=>{

                },()=>{

                    STYLED(ELEMENTSI,"display","inline-flex");

                    BUTTON(ELEMENTSI,"80%","50px","green","#ffffff","10px","Sign In","",()=>{

                    });

                });

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","3%","20px","Prefrences",(ELEMENTIIS)=>{

            STYLED(ELEMENTIIS,"text-align","left");

        });

        DIV(ELEMENT,"100%","auto","transparent","block","","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"border-top","1px solid green");

            DIV(ELEMENTS,"96%","50px","transparent","inline-flex","","2%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid green");
                STYLED(ELEMENTS,"border-radius","10px");

                TEXT(ELEMENTS,"h1","#FFFFFF","3% auto auto 2%","20px","Community",(ELEMENTIIS)=>{

                    STYLED(ELEMENTIIS,"text-align","left");

                });

                RIGHTIMAGE(ELEMENTS,WHITEBACKICON,"transparent","20px","20px","3%",(ELEMENTSE)=>{

                    STYLED(ELEMENTSE,"transform","rotate(180deg)");

                });

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",SETTINGSPAGE,"USERACCOUNTPAGE");
     
                });
    
            });

            DIV(ELEMENTS,"96%","50px","transparent","inline-flex","","2%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid green");
                STYLED(ELEMENTS,"border-radius","10px");

                TEXT(ELEMENTS,"h1","#FFFFFF","3% auto auto 2%","20px","Settings",(ELEMENTIIS)=>{

                    STYLED(ELEMENTIIS,"text-align","left");

                });

                RIGHTIMAGE(ELEMENTS,WHITEBACKICON,"transparent","20px","20px","3%",(ELEMENTSE)=>{

                    STYLED(ELEMENTSE,"transform","rotate(180deg)");

                });

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",SETTINGSPAGE,"USERACCOUNTPAGE");
     
                });
    
            });

            DIV(ELEMENTS,"96%","50px","transparent","inline-flex","","2%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid green");
                STYLED(ELEMENTS,"border-radius","10px");

                TEXT(ELEMENTS,"h1","#FFFFFF","3% auto auto 2%","20px","Help",(ELEMENTIIS)=>{

                    STYLED(ELEMENTIIS,"text-align","left");

                });

                RIGHTIMAGE(ELEMENTS,WHITEBACKICON,"transparent","20px","20px","3%",(ELEMENTSE)=>{

                    STYLED(ELEMENTSE,"transform","rotate(180deg)");

                });

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",SETTINGSPAGE,"USERACCOUNTPAGE");
     
                });
    
            });

            DIV(ELEMENTS,"96%","50px","transparent","inline-flex","","2%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid green");
                STYLED(ELEMENTS,"border-radius","10px");

                TEXT(ELEMENTS,"h1","#FFFFFF","3% auto auto 2%","20px","Contact Us",(ELEMENTIIS)=>{

                    STYLED(ELEMENTIIS,"text-align","left");

                });

                RIGHTIMAGE(ELEMENTS,WHITEBACKICON,"transparent","20px","20px","3%",(ELEMENTSE)=>{

                    STYLED(ELEMENTSE,"transform","rotate(180deg)");

                });

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",SETTINGSPAGE,"USERACCOUNTPAGE");
     
                });
    
            });

        });

    });

};

const SETTINGSPAGE=()=>{

    CLEAR();

    HEADER("","forestgreen",(ELEMENT)=>{

        IMAGE(ELEMENT,WHITEBACKICON,"","20px","20px","auto 2%",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",USERACCOUNTPAGE,"USERACCOUNTPAGE");

            });

        });

        TEXT(ELEMENT,"h1","#FFFFFF","auto 1% auto auto","20px","Settings",(ELEMENTS)=>{
            
        });

    });

};