const URLLINK="https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing";

const HOMEPAGE=()=>{

    APPMODE("#333333");

    DOWNLOADSAVEINDEX(URLLINK,"APPMANAGER","APPMANAGER",()=>{

    });

    SWITCHER("800px",()=>{

        DESKTOPPAGE();

    },()=>{

        MOBILEPAGE();

    });

};

const MOBILEPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTTEXT(ELEMENT,"h2","#FFFFFF","1%","20px","Elite Manager",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEPOSTICON,"transparent","20px","20px","2%",()=>{

        });

    },"transparent",(ELEMENT)=>{


    });

};

const DESKTOPPAGE=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

    },"transparent",(ELEMENT)=>{

        


    });

};