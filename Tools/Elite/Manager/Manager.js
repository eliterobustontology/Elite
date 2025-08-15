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

};

const DESKTOPPAGE=()=>{

};