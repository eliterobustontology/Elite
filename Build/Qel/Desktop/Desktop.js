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

        ICON(ELEMENT,WHITERETRYICON,"","30px","30px","auto 5% auto auto",(ELEMENTAS)=>{

            CLICK(ELEMENTAS,()=>{

                RELOAD();

            });

        });

        ICON(ELEMENT,WHITEADDICON,"","30px","30px","auto 5% auto auto",()=>{

        });

        ICON(ELEMENT,WHITEUSERPROFILEICON,"","30px","30px","auto 5% auto auto",()=>{

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