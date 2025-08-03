const LINK="https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing";

const NOVASTART=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

    });

    DOWNLOADSAVEINDEX(LINK,"Catergory","Catergory","Catergory",()=>{

    });

    CONDITION(localStorage.getItem("UserData"),()=>{

        ROUTE("",HOMEPAGE,"HOMEPAGE");

    },()=>{

        ROUTE("",HOMEPAGE,"HOMEPAGE");        

    });

};

const HOMEPAGE=()=>{

    CLEAR();

    HEADER("","green",(ELEMENT)=>{

        STYLED(ELEMENT,"height","100px");

        TEXT(ELEMENT,"h1","#ffffff","auto auto auto 2%","25px","Qel Manager",(ELEMENTS)=>{

        });

        DIV(ELEMENT,"30%","100%","transparent","inline-flex","auto","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");

            ICON(ELEMENTS,WHITERETRYICON,"","30px","30px","auto 5% auto auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    RELOAD();

                });

            });

            ICON(ELEMENTS,WHITEADDICON,"","30px","30px","auto 5% auto auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    LOCALSTORE("NewProduct","[]");

                    ROUTE(" ",NEWCLIENT,"HOMEPAGE");

                });

            });

            ICON(ELEMENTS,WHITEUSERPROFILEICON,"","30px","30px","auto 5% auto auto",()=>{

            });

        });
        
    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","100px");
        STYLED(ELEMENT,"bottom","0");

        GETINDEXEDDATA("Products", "Products", (element)=>{

            DIV(ELEMENT,"250px","250px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{

                STYLED(ELEMENTEIS,"flex-shrink","0");
                STYLED(ELEMENTEIS,"border-radius","5px");
                STYLED(ELEMENTEIS,"border","1px solid green");
                STYLED(ELEMENTEIS,"flexShrink","0");

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

                            CONDITION(element.ProductNumber === 0,()=>{

                                ICON(ELEMENTSE,WHITECLOSEICON,"transparent","","","",(ELEMENTIS)=>{

                                });
                            
                            },()=>{
                                
                                ICON(ELEMENTSE,WHITECHECKICON,"transparent","","","",(ELEMENTIS)=>{

                                });
                            });

                        });

                    });

                });
            
            });

        });

    });

};

const NEWCLIENT=()=>{

    CLEAR();

    HEADER("","green",(ELEMENT)=>{

        STYLED(ELEMENT,"height","100px");

        TEXT(ELEMENT,"h1","#ffffff","auto auto auto 2%","25px","Qel Manager",(ELEMENTS)=>{

        });

        DIV(ELEMENT,"30%","100%","transparent","inline-flex","auto","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");


            ICON(ELEMENTS,WHITERETRYICON,"","30px","30px","auto 5% auto auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    RELOAD();

                });

            });

            ICON(ELEMENTS,WHITEDELETEICON,"","30px","30px","auto 5% auto auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    ROUTE("",HOMEPAGE,"HOMEPAGE");

                });

            });

            ICON(ELEMENTS,WHITEPENCILICON,"","30px","30px","auto 5% auto auto",()=>{

            });

        });

    });

    DIV("","100%","auto","transparent","block","hidden","",(ELEMENTA)=>{

        STYLED(ELEMENTA,"position","absolute");
        STYLED(ELEMENTA,"top","100px");
        STYLED(ELEMENTA,"bottom","0");

        DIV(ELEMENTA,"40%","100%","transparent","block","auto","",(ELEMENTS)=>{
    
            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"left","0");
    
            GETINDEXEDDATA("Products", "Products", (element)=>{
    
                DIV(ELEMENTS,"250px","250px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{
    
                    STYLED(ELEMENTEIS,"flex-shrink","0");
                    STYLED(ELEMENTEIS,"border-radius","5px");
                    STYLED(ELEMENTEIS,"border","1px solid green");
                    STYLED(ELEMENTEIS,"flexShrink","0");
    
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
    
                                ICON(ELEMENTSE,WHITEADDICON,"transparent","","","",(ELEMENTIS)=>{

                                    CLICK(ELEMENTEIS,()=>{

                                        CONDITION(element.ProductNumber === 0,()=>{

                                            TOAST("Product Currently Out Of Stock");
                                            
                                        },()=>{
                                                
                                            const NEWW={
                                                "Name":element.ProductName,
                                                "Price":element.ProductPrice,
                                                "ProductId":element.ID
                                            }

                                            JSONADDER(localStorage.getItem("NewProduct"), [NEWW],(datate)=>{

                                                LOCALSTORE("NewProduct",datate);

                                                NEWCLIENT();

                                            });

                                        });

                                    });
        
                                });
                            });

                        });
    
                    });
                
                });
    
            });
    
        });

        DIV(ELEMENTA,"30%","100%","transparent","block","auto","",(ELEMENTS)=>{
    
            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"left","40%");

            ROUNDINPUT(ELEMENTS,"90%","50px","10px","auto","#ffffff","text","Find Your Product",(ELE)=>{
                
                INPUTED(ELE,(Data)=>{

                    DIV(ELEMENTS,"100%","auto","transparent","block","auto","",(ELEMENTEES)=>{

                        STYLED(ELEMENTEES,"position","absolute");
                        STYLED(ELEMENTEES,"left","0%");
                        STYLED(ELEMENTEES,"top","70px");

                        GETINDEXEDDATA("Products", "Products", (element)=>{
    
                            CONDITION(element.ProductName.includes(Data) && Data != ""  ,()=>{
    
                                DIV(ELEMENTEES,"250px","250px","transparent","inline-table","hidden","2%",(ELEMENTEIS)=>{
        
                                    STYLED(ELEMENTEIS,"flex-shrink","0");
                                    STYLED(ELEMENTEIS,"border-radius","5px");
                                    STYLED(ELEMENTEIS,"border","1px solid green");
                                    STYLED(ELEMENTEIS,"flexShrink","0");
                    
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

                                                CONDITION(element.ProductNumber === 0,()=>{
                                                
                                                    TOAST("Product Currently Out Of Stock");

                                                },()=>{
                                                
                                                    ICON(ELEMENTSE,WHITEADDICON,"transparent","","","",(ELEMENTIS)=>{
        
                                                        CLICK(ELEMENTEIS,()=>{

                                                            ELE.value=""; 
        
                                                            const NEWW={
                                                                "Name":element.ProductName,
                                                                "Price":element.ProductPrice,
                                                                "ProductId":element.ID
                                                            }
        
                                                            JSONADDER(localStorage.getItem("NewProduct"), [NEWW],(datate)=>{
        
                                                                LOCALSTORE("NewProduct",datate);
        
                                                                NEWCLIENT();

                                                            });
        
                                                        });
                        
                                                    });
                                                })
                    
                                            });
                    
                                        });
                    
                                    });
                            
                                });
                                
                            },()=>{
                                
                                CLEAR(ELEMENTEES);

                            });
                     
                        });

                    });
    
                });

            });

        });
    
        DIV(ELEMENTA,"30%","100%","orange","block","auto","",(ELEMENTS)=>{

            DISPLAY(ELEMENTS,"");
    
            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");

            JSONIFICATION(localStorage.getItem("NewProduct"),(Data)=>{

            });

        });

    });

};

const LOGINPAGE=()=>{

    CLEAR();

    TEXT("","h1","#ffffff","5%","25px","Qel Manager",()=>{

    });

    ROUNDINPUT("","90%","50px","10px","","#ffffff","email","Enter Admin Email",()=>{

    });

    ROUNDINPUT("","90%","50px","10px","2% auto","#ffffff","password","Enter Admin Password",()=>{

    });

    BUTTON("","90%","50px","green","#ffffff","10px","Log In","2% auto",()=>{

    });

};