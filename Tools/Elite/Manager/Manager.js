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

    CLEAR();

    TEXT("","h1","#FFFFFF","5% auto","20px","ELITE MANAGER",()=>{

    });

    TEXT("","p","#FFFFFF","3% auto","16px","Imagine | Innovate | Inspire ",()=>{

    });

    ROUNDINPUT("","90%","32px","5px","auto","#cdcdcd","email","Email",()=>{

    });

    ROUNDINPUT("","90%","32px","5px","3% auto","#cdcdcd","email","Email",()=>{

    });

    BUTTON("","92%","50px","forestgreen","#FFFFFF","5px","Sign In","2% auto",()=>{

    });

};

const HOMEMOBILEPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTTEXT(ELEMENT,"h2","#FFFFFF","1%","20px","Elite Manager",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEPOSTICON,"transparent","20px","20px","2%",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEDELETEICON,"transparent","20px","20px","2%",()=>{

        });

    },"transparent",(ELEMENT)=>{


    });

};

const DESKTOPPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

    },"transparent",(ELEMENT)=>{

        


    });

};