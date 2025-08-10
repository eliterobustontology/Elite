const URLLINK="https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing";

const HOMEPAGE=()=>{

    DOWNLOADSAVEINDEX(URLLINK,"APPMANAGER","APPMANAGER",()=>{

    });

    APPMODE("#333333");

    SWITCHER("800px",()=>{

        DESKTOPPAGE();

    },()=>{

        MOBILEPAGE();

    });

};

const MOBILEPAGE=()=>{

    CLEAR();

    ROUTE("",MOBILELOGINPAGE,"MOBILELOGINPAGE");

};

const MOBILELOGINPAGE=()=>{

    CLEAR();

    TEXT("","h1","#ffffff","5% auto","25px","Elite Manager",()=>{

    });

    TEXT("","h1","#ffffff","4% auto","16px","Admin Control",()=>{

    });

    INPUT("","95%","32px","","#ffffff","email","Enter Admin Email",(ELEMENT)=>{

        STYLED(ELEMENT,"background","transparent");
        STYLED(ELEMENT,"border","1px solid forestgreen");

        EVENT(ELEMENT,"input",()=>{

            console.log(data.value)

        });

    });

    INPUT("","95%","32px","3% auto","#ffffff","password","Enter Admin Password",(ELEMENT)=>{

        STYLED(ELEMENT,"background","transparent");
        STYLED(ELEMENT,"border","1px solid forestgreen");

    });

    DIV("","98%","50px","forestgreen","inline-flex","hidden","2% auto",(ELEMENTS)=>{

        STYLED(ELEMENTS,"border-radius","5px");

        TEXT(ELEMENTS,"h1","#ffffff","auto","20px","Sign In",()=>{

        });

    });

};

const DESKTOPPAGE=()=>{

    CLEAR();

    ROUTE("",DESKTOPHOMEPAGE,"DESKTOPHOMEPAGE");

};

const DESKTOPHOMEPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTTEXT(ELEMENT,"h1","#ffffff","1%","20px","Manager",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEADDICON,"transparent","25px","25px","5%",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITESETTINGSICON,"transparent","25px","25px","5%",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERPROFILEICON,"transparent","25px","25px","5%",()=>{

        });

    },"transparent",(ELEMENTA)=>{

        GETINDEXEDDATA("APPMANAGER","APPMANAGER",(data)=>{

            TABLEVIEW(ELEMENTA,"200px","200px","orange","","2%",()=>{

            });

        });

    });

};