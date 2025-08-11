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

