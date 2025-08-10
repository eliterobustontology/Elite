const HOMEPAGE=()=>{

    APPMODE("#333333");

    SWITCHER("800px",()=>{

        ROUTE("",DESKTOPPAGE,"DESKTOPPAGE");

    },()=>{

        ROUTE("",MOBILEPAGE,"MOBILEPAGE");

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

};