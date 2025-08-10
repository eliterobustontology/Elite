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

        TEXT(ELEMENT,"h1","#ffffff","auto auto auto 2%","25px","Qel Manager",(ELEMENTS)=>{

        });

        DIV(ELEMENT,"30%","100%","transparent","inline-flex","auto","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");

            ICON(ELEMENTS,WHITERETRYICON,"","","","auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    RELOAD();

                });

            });

            ICON(ELEMENTS,WHITEADDICON,"","","","auto ",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    LOCALSTORE("NewProduct","[]");

                    ROUTE(" ",NEWCLIENT,"HOMEPAGE");

                });

            });

            ICON(ELEMENTS,WHITEUSERPROFILEICON,"","","","auto",()=>{

            });

        });
        
    });

    DIV("","","auto","transparent","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","50px");
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

                                STYLED(ELEMENT,"background","red");

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

        TEXT(ELEMENT,"h1","#ffffff","auto auto auto 2%","25px","Qel Manager",(ELEMENTS)=>{

        });

        DIV(ELEMENT,"30%","100%","transparent","inline-flex","auto","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"left","30%");

            LOCALDEJSONDATA ('NewProduct', (data)=>{

                SUMARRAY(data, "ProductName", "ProductPrice", ({ items, total }) => {

                    MONEYPARTISION(total,(finalMoney)=>{

                        TEXT(ELEMENTS,"h1","#ffffff","auto","25px",finalMoney||'Nil',(ELEMENTS)=>{
    
                        });

                    });

                });
 
            });

        });

        DIV(ELEMENT,"30%","100%","transparent","inline-flex","auto","",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");

            ICON(ELEMENTS,WHITERETRYICON,"","","","auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    NEWCLIENT();

                });

            });

            ICON(ELEMENTS,WHITEDELETEICON,"","","","auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    ROUTE("",HOMEPAGE,"HOMEPAGE");

                });

            });

            ICON(ELEMENTS,WHITEPENCILICON,"","","","auto",(ELEMENTAS)=>{

                CLICK(ELEMENTAS,()=>{

                    LOCALDEJSONDATA ('NewProduct', (data)=>{

                        CHECKER(data.length != 0,()=>{

                            ROUTE("",RECIPTPAGE,"NEWCLIENT");

                        });

                    });

                });

            });

        });

    });

    DIV("","100%","auto","transparent","block","hidden","",(ELEMENTA)=>{

        STYLED(ELEMENTA,"position","absolute");
        STYLED(ELEMENTA,"top","50px");
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

                                    CHECKER(element.ProductNumber === 0,()=>{

                                        STYLED(ELEMENTEIS,"background","red");
                                            
                                    });
    
                                ICON(ELEMENTSE,WHITEADDICON,"transparent","","","",(ELEMENTIS)=>{

                                    CLICK(ELEMENTEIS,()=>{

                                        CONDITION(element.ProductNumber === 0,()=>{

                                            STYLED(ELEMENTEIS,"background","red");
                                            
                                        },()=>{

                                            JSONADDER(localStorage.getItem("NewProduct"), [element],(datate)=>{
    
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

            ROUNDINPUT(ELEMENTS,"90%","32px","10px","5%auto","#ffffff","text","Find Your Product",(ELE)=>{
                
                INPUTED(ELE,(Data)=>{

                    DIV(ELEMENTS,"100%","auto","transparent","block","auto","",(ELEMENTEES)=>{

                        STYLED(ELEMENTEES,"position","absolute");
                        STYLED(ELEMENTEES,"left","0%");
                        STYLED(ELEMENTEES,"top","50px");
                        
                        GETINDEXEDDATA("Products", "Products", (element)=>{
        
                            SEARCH(element, "ProductName", Data.value, (results) => {
    
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
                        

                                                CHECKER(element.ProductNumber === 0,()=>{

                                                    STYLED(ELEMENTEIS,"background","red");
                                                            
                                                });

                                                STYLED(ELEMENTSE,"position","absolute");
                                                STYLED(ELEMENTSE,"right","5px");
                                                STYLED(ELEMENTSE,"bottom","0px");
                        
                                                ICON(ELEMENTSE,WHITEADDICON,"transparent","","","",(ELEMENTIS)=>{
        
                                                    CLICK(ELEMENTEIS,()=>{
        
                                                        CONDITION(element.ProductNumber === 0,()=>{
                
                                                        },()=>{
        
                                                            JSONADDER(localStorage.getItem("NewProduct"), [element],(datate)=>{
                        
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
        
                    });

                });

            });

        });
  
        DIV(ELEMENTA,"30%","100%","transparent","block","auto","",(ELEMENTS)=>{

            DISPLAY(ELEMENTS,"");
    
            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"right","0");

            LOCALDEJSONDATA ('NewProduct', (element)=>{

                REDUX(element,(elements)=>{

                    DIV(ELEMENTS,"95%","50px","transparent","inline-flex","10px","",(ELEMENTIS)=>{

                        STYLED(ELEMENTIS,"border","1px solid green");
                        STYLED(ELEMENTIS,"top","10px");
                        STYLED(ELEMENTIS,"margin-bottom","10px");
                        STYLED(ELEMENTIS,"border-radius","10px");

                        TEXT(ELEMENTIS,"h1","#ffffff","auto","18px",elements.ProductName,(ELEMENTS)=>{

                            CLICK(ELEMENTS,()=>{

                                JSONREMOVER(localStorage.getItem('NewProduct'),[elements.id],(datate)=>{

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

};

const RECIPTPAGE=()=>{

    CLEAR();

    DIV("","100%","auto","#ffffff","block","auto","",(ELEMENTA)=>{

        STYLED(ELEMENTA,"position","absolute");
        STYLED(ELEMENTA,"top","0px");
        STYLED(ELEMENTA,"bottom","0");

        DIV(ELEMENTA,"100%","18%","transparent","block","auto","2%",(ELEMENTA)=>{

            TEXT(ELEMENTA,"h1","#000000","0.5% auto auto 1%","25px","QEL Medistore Limited ",(ELEMENTS)=>{});

            TEXT(ELEMENTA,"p","#000000","0.5% auto auto 1%","16px","Enhancing Logistics",(ELEMENTS)=>{});

            TEXT(ELEMENTA,"p","#000000","0.5% auto auto 1%","16px","P.O BOX 000,Mbale (UGANDA)",(ELEMENTS)=>{});

            TEXT(ELEMENTA,"p","#000000","0.5% auto auto 1%","16px","Tel:+256 700905008 || +256 760319513",(ELEMENTS)=>{});
            
            TEXT(ELEMENTA,"p","#000000","0.5% auto auto 1%","16px","Email:qelmedistore@gmail.com",(ELEMENTS)=>{});

        });

        DIV(ELEMENTA,"90%","auto","transparent","block","hidden","auto auto auto 5%",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"top","22%");
            STYLED(ELEMENTS,"bottom","100px");
            STYLED(ELEMENTS,"border","1px solid #000000");

            DIV(ELEMENTS,"100%","50px","transparent","block","hidden","auto",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"top","0");
                STYLED(ELEMENTS,"border-bottom","1px solid #000000");

                DIV(ELEMENTS,"40%","100%","transparent","inline-flex","hidden","auto",(ELEMENTIS)=>{

                    STYLED(ELEMENTIS,"position","absolute");
                    STYLED(ELEMENTIS,"left","0");
                    STYLED(ELEMENTIS,"border-right","1px solid #000000");

                    TEXT(ELEMENTIS,"h1","#000","auto","20px","Item Description",(ELEMENTS)=>{});
    
                });

                DIV(ELEMENTS,"10%","100%","transparent","inline-flex","hidden","0",(ELEMENTIS)=>{

                    STYLED(ELEMENTIS,"position","absolute");
                    STYLED(ELEMENTIS,"left","40%");
                     STYLED(ELEMENTIS,"border-right","1px solid #000000");

                    TEXT(ELEMENTIS,"h1","#000","auto","20px","Quantity",(ELEMENTS)=>{});
    
                });

                DIV(ELEMENTS,"25%","100%","transparent","inline-flex","hidden","0",(ELEMENTIS)=>{

                    STYLED(ELEMENTIS,"position","absolute");
                    STYLED(ELEMENTIS,"left","50%");
                    STYLED(ELEMENTIS,"border-right","1px solid #000000");

                    TEXT(ELEMENTIS,"h1","#000","auto","20px","Price",(ELEMENTS)=>{});
    
                });

                DIV(ELEMENTS,"25%","100%","transparent","inline-flex","hidden","0",(ELEMENTIS)=>{

                    STYLED(ELEMENTIS,"position","absolute");
                    STYLED(ELEMENTIS,"left","75%");

                    TEXT(ELEMENTIS,"h1","#000","auto","20px","Total",(ELEMENTS)=>{});
    
                });

            });

            DIV(ELEMENTS,"40%","auto","transparent","block","hidden","0",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"top","50px");
                STYLED(ELEMENTS,"bottom","50px");
                STYLED(ELEMENTS,"border-right","1px solid #000000");

                LOCALDEJSONDATA ('NewProduct', (data)=>{

                    GROUP(data, (datata)=>{

                        REDUX(datata,(element)=>{

                            TEXT(ELEMENTS,"h1","#000000","2% auto auto 5%","20px",element.ProductName,(ELEMENTS)=>{

                                STYLED(ELEMENTS,"text-align","left");

                            });
                                
                        });
        
                    });
 
                });

            });

            DIV(ELEMENTS,"10%","auto","transparent","block","hidden","0",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"top","50px");
                STYLED(ELEMENTS,"bottom","50px");
                STYLED(ELEMENTS,"left","40%");
                STYLED(ELEMENTS,"border-right","1px solid #000000");

                LOCALDEJSONDATA ('NewProduct', (data)=>{

                    GROUP(data, (datata)=>{

                        REDUX(datata,(element)=>{

                            TEXT(ELEMENTS,"h1","#000000","8% auto auto 10%","20px",element.quantity,(ELEMENTS)=>{

                                STYLED(ELEMENTS,"text-align","left");

                            });
                                
                        });
        
                    });
 
                });

            });

            DIV(ELEMENTS,"25%","auto","transparent","block","hidden","0",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"top","50px");
                STYLED(ELEMENTS,"bottom","50px");
                STYLED(ELEMENTS,"left","50%");
                STYLED(ELEMENTS,"border-right","1px solid #000000");

                LOCALDEJSONDATA ('NewProduct', (data)=>{

                    GROUP(data, (datata)=>{

                        REDUX(datata,(element)=>{

                            MONEYPARTISION(element.ProductPrice,(FinalMoney)=>{

                                TEXT(ELEMENTS,"h1","#000000","3.2% auto auto 5%","20px",FinalMoney,(ELEMENTS)=>{
    
                                    STYLED(ELEMENTS,"text-align","left");
    
                                });

                            });
     
                        });
        
                    });
 
                });

            });

            DIV(ELEMENTS,"25%","auto","transparent","block","hidden","0",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"top","50px");
                STYLED(ELEMENTS,"bottom","50px");
                STYLED(ELEMENTS,"left","75%");

                LOCALDEJSONDATA ('NewProduct', (data)=>{

                    GROUP(data, (datata)=>{

                        REDUX(datata,(element)=>{

                            MONEYPARTISION(element.ProductPrice*element.quantity,(FinalMoney)=>{

                                TEXT(ELEMENTS,"h1","#000000","3.2% auto auto 5%","20px",FinalMoney,(ELEMENTS)=>{
    
                                    STYLED(ELEMENTS,"text-align","left");
    
                                });
                                    
                            });

                        });
        
                    });
 
                });

            });

            DIV(ELEMENTS,"100%","50px","transparent","inline-flex","hidden","0",(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"bottom","0");
                STYLED(ELEMENTS,"left","0");
                STYLED(ELEMENTS,"border-top","1px solid #000000");

                TEXT(ELEMENTS,"h1","#000000","auto auto auto 1%","25px","TOTAL",(ELEMENTS)=>{});

                LOCALDEJSONDATA ('NewProduct', (data)=>{

                    SUMARRAY(data, "ProductName", "ProductPrice", ({ items, total }) => {

                        MONEYPARTISION(total,(FinalMoney)=>{

                            TEXT(ELEMENTS,"h1","#000000","auto","25px","UGX"+FinalMoney||'Nil',(ELEMENTS)=>{
    
                            });

                        });

                    });
    
                });

            });

        });

        /*
        LOCALDEJSONDATA ('NewProduct', (data)=>{

            GROUP(data, (datata)=>{

                REDUX(datata,(element)=>{

                    DIV(ELEMENTA,"98%","50px","transparent","inline-flex","hidden","2%",(ELEMENTA)=>{

                        TEXT(ELEMENTA,"h1","#ffffff","auto auto auto 1%","25px",element.ProductName,(ELEMENTS)=>{

                        });

                        TEXT(ELEMENTA,"h1","#ffffff","auto auto auto auto","25px",element.quantity,(ELEMENTS)=>{

                        });

                        TEXT(ELEMENTA,"h1","#ffffff","auto auto auto auto","25px",element.ProductPrice,(ELEMENTS)=>{

                        });

                        TEXT(ELEMENTA,"h1","#ffffff","auto 1% auto auto","25px",element.ProductPrice*element.quantity,(ELEMENTS)=>{

                        });

                    });
                        
                });
 
            });
 
        });
        */

    });

};

const LOGINPAGE=()=>{

    CLEAR();

    TEXT("","h1","#ffffff","5%","25px","Qel  Manager",()=>{

    });

    ROUNDINPUT("","90%","50px","10px","","#ffffff","email","Enter Admin Email",()=>{

    });

    ROUNDINPUT("","90%","50px","10px","2% auto","#ffffff","password","Enter Admin Password",()=>{

    });

    BUTTON("","90%","50px","green","#ffffff","10px","Log In","2% auto",()=>{

    });

};