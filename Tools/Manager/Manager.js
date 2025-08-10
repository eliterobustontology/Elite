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