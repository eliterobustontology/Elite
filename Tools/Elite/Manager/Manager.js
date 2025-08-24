const URLLINK="https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing";

const HOMEPAGE=()=>{

    APPMODE("#333333");

    DOWNLOADSAVEINDEX(URLLINK,"APPMANAGER","APPMANAGER",()=>{

    });

    SWITCHER("800px",()=>{

        DESKTOPPAGE();

    },()=>{

        MOBILESECTIONCHECK();
    });

};

const MOBILESECTIONCHECK=()=>{
    
    ACCOUNTCHECKER(()=>{
        
        HOMEMOBILEPAGE();

    }, ()=>{

    }, ()=>{

        LOGINMOBILEPAGE();

    });

};

const LOGINMOBILEPAGE=()=>{

    SESSIONDELETE("Email");

    SESSIONDELETE("Password");

    CLEAR();

    TEXT("","h1","#FFFFFF","5% auto","20px","ELITE MANAGER",()=>{

    });

    TEXT("","p","#FFFFFF","3% auto","16px","Imagine | Innovate | Inspire ",(ELEMENT)=>{

    });

    ROUNDINPUT("","90%","32px","5px","auto","#cdcdcd","email","Email",(ELEMENT)=>{

        INPUTED (ELEMENT, (data)=>{

            SESSIONSTORE("Email",data);

        });

    });

    ROUNDINPUT("","90%","32px","5px","3% auto","#cdcdcd","password","*******",(ELEMENT)=>{

        INPUTED (ELEMENT, (data)=>{

            SESSIONSTORE("Password",data);

        });

    });

    BUTTON("","92%","50px","forestgreen","#FFFFFF","5px","Log In","2% auto",(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            CONDITION(sessionStorage.getItem("Email"),()=>{

                CONDITION(sessionStorage.getItem("Password"),()=>{

                    TOAST("Please Wait");

                    GETDATA(URLLINK,"Users",(data)=>{

                        FINDER(data,"UserEmail",sessionStorage.getItem("Email"),(result)=>{

                            CONDITION(result === false,()=>{

                                TOAST("No User Email Found");

                            },()=>{

                                CONDITION(result.UserPassword === sessionStorage.getItem("Password"),()=>{

                                    LOCALSTORE("UserData",result.ID);

                                    HOMEPAGE();

                                },()=>{

                                    TOAST("Invalid User Password");

                                });

                            });

                        });

                    });

                },()=>{

                    TOAST("Enter Password");

                });

            },()=>{

                TOAST("Enter Email");

            });

        });

    });

    BUTTON("","92%","50px","teal","#FFFFFF","5px","Create Account","2% auto",(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            ROUTE(" ",CREATEMOBILEPAGE,"LOGINMOBILEPAGE");

        });

    });

};

const CREATEMOBILEPAGE=()=>{

    CLEAR();

    TEXT("","h1","#FFFFFF","5% auto","20px","ELITE MANAGER",()=>{

    });

    TEXT("","p","#FFFFFF","3% auto","16px","Imagine | Innovate | Inspire ",()=>{

    });

    ROUNDINPUT("","90%","32px","5px","auto","#cdcdcd","text","User Name",()=>{

    });

    ROUNDINPUT("","90%","32px","5px","3% auto","#cdcdcd","email","Email",()=>{

    });

    ROUNDINPUT("","90%","32px","5px","3% auto","#cdcdcd","password","*******",()=>{

    });

    BUTTON("","92%","50px","forestgreen","#FFFFFF","5px","Register","2% auto",()=>{

    });

    BUTTON("","92%","50px","teal","#FFFFFF","5px","Sign In","2% auto",(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            ROUTE("",LOGINMOBILEPAGE,"LOGINMOBILEPAGE");

        });

    });

};

const HOMEMOBILEPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTTEXT(ELEMENT,"h2","#FFFFFF","1%","20px","Elite Manager",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEPOSTICON,"transparent","20px","20px","2%",(ELS)=>{

            CLICK(ELS,()=>{

                ROUTE(" ",CREATENEWMOBILEPROJECT,"HOMEMOBILEPAGE");

            });

        });

        RIGHTIMAGE(ELEMENT,WHITEDELETEICON,"transparent","20px","20px","2%",()=>{

        });

    },"transparent",(ELEMENT)=>{

        GETINDEXEDDATA("APPMANAGER", "APPMANAGER", (data)=>{

            TABLEVIEW(ELEMENT,"45%","200px","orange","hidden","2%",(ELEMENT)=>{

            });

        });

    });

};

const CREATENEWMOBILEPROJECT=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,WHITEBACKICON,"transparent","20px","20px","2%",(ELS)=>{

            CLICK(ELS,()=>{

                ROUTE("",HOMEMOBILEPAGE,"HOMEMOBILEPAGE");

            });

        });

        RIGHTTEXT(ELEMENT,"h2","#FFFFFF","1%","20px","New Project",()=>{

        });

    },"transparent",(ELEMENT)=>{

        DIV(ELEMENT,"95%","400px","forestgreen","block","hidden","2%",(ELEMENTA)=>{

            IMAGE(ELEMENTA,ELITELOGO,"transparent","340px","95%","2%",(ELS)=>{

                FOOTER(ELEMENTA,"transparent",(ELESE)=>{

                    ICON(ELESE,WHITERETRYICON,"transparent","30px","30px","auto",(IMA)=>{

                        CLICK(IMA,()=>{

                            IMAGEPICKER(ELS, ()=>{

                            });

                        });

                    });

                    ICON(ELESE,WHITEDELETEICON,"transparent","30px","30px","auto",(IMA)=>{

                        CLICK(IMA,()=>{

                            SESSIONDELETE("TakenPhoto");

                            SOURCED(ELS,ELITELOGO);

                        });

                    });

                });

            });

        });

        ROUNDINPUT(ELEMENT,"95%","32PX","10px","2%","green","text","Enter Project Name",()=>{

        });

    });

};

const DESKTOPPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

    },"transparent",(ELEMENT)=>{

        


    });

};