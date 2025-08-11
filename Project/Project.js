const NOVASTART=()=>{

    SWITCHER("800px",()=>{

        DESKTOPVIEW();

    },()=>{

        MOBILEVIEW();

    });

};

const MOBILEVIEW=()=>{

    ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

    HEADERVIEW("","#05143d",(ELEMENT)=>{

        STYLED(ELEMENT,"height","100px");

        DIV(ELEMENT,"100%","50px","Transparent","inline-flex","hidden","auto",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"top","0");

            LEFTIMAGE(ELEMENTS,ELITELOGO,"","40px","40px","1%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"margin-top","1%");

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","ELITE ROBUST ONTOLOGY",()=>{

            });

        });

        DIV(ELEMENT,"100%","50px","Transparent","inline-flex","hidden","auto",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","0");
 
            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","About Us",()=>{

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","Projects",()=>{

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","Contact Us",()=>{

            });

        });

    },"transparent",(ELEMENT)=>{

        STYLED(ELEMENT,"top","100px");

    });

};

const DESKTOPVIEW=()=>{

    ROUTE("",DESKTOPHOMEPAGE,"DESKTOPHOMEPAGE");

};

const DESKTOPHOMEPAGE=()=>{

    HEADERVIEW("","#05143d",(ELEMENT)=>{

        LEFTIMAGE(ELEMENT,ELITELOGO,"","40px","40px","1%",(ELEMENTS)=>{

        });

        TEXT(ELEMENT,"h5","#FFFFFF","auto 5% auto auto","20px","ELITE ROBUST ONTOLOGY",()=>{

        });

        RIGHTTEXT(ELEMENT,"p","#FFFFFF","2%","20px","About",()=>{

        });

        RIGHTTEXT(ELEMENT,"p","#FFFFFF","2%","20px","Services",()=>{

        });

        RIGHTTEXT(ELEMENT,"p","#FFFFFF","2%","20px","Contacts",()=>{

        });

   

    },"transparent",(ELEMENT)=>{


    });

};