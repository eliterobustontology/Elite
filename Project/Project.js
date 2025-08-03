const NOVASTART=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

    });

    DOWNLOADSAVEINDEX(LINK,"Catergory","Catergory","Catergory",()=>{

    });

    CONDITION(localStorage.getItem("UserData"),()=>{

        ROUTE("",HOMEPAGE,"HOMEPAGE");

    },()=>{

        ROUTE("",LOGINPAGE,"HOMEPAGE");        

    });

};

const HOMEPAGE=()=>{

    CLEAR();

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