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

            TEXT(ELEMENTS,"h3","#FFFFFF","","20px","ELITE ROBUST ONTOLOGY",()=>{

            });

        });

        DIV(ELEMENT,"100%","50px","Transparent","inline-flex","hidden","auto",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","0");
 
            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","About Us",()=>{

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","Products",()=>{

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","20px","Contact Us",()=>{

            });

        });

    },"transparent",(ELEMENT)=>{

        STYLED(ELEMENT,"top","100px");

        INLINEVIEW(ELEMENT,"100%","50px","transparent","hidden","",(ELEMENTIS)=>{

            TEXT(ELEMENTIS,"h1","#FFFFFF","auto","16px","Imagine",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid teal ");
                STYLED(ELEMENTS,"width","20%");
                STYLED(ELEMENTS,"padding","2%");
                STYLED(ELEMENTS,"border-radius","10px");
                
            });

            TEXT(ELEMENTIS,"h1","#FFFFFF","auto","20px","Innovate",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid #05143d ");
                STYLED(ELEMENTS,"width","35%");
                STYLED(ELEMENTS,"padding","2%");
                STYLED(ELEMENTS,"border-radius","10px");
                
            });

            TEXT(ELEMENTIS,"h1","#FFFFFF","auto","16px","Inspire",(ELEMENTS)=>{

                STYLED(ELEMENTS,"border","1px solid forestgreen ");
                STYLED(ELEMENTS,"width","20%");
                STYLED(ELEMENTS,"padding","2%");
                STYLED(ELEMENTS,"border-radius","10px");
                
            });

        });

        ICON(ELEMENT,WHITEMOBILEDEVELOPMENTICON,"transparent","50px","50px","2% auto",()=>{

        });

        const Message=`Software Development Company that Uses Cloud Native Technology to Power and Build Apps,Websites,Desktop and Systems.`

        LEFTTEXT(ELEMENT,"p","#FFFFFF","2%","20px",Message,()=>{

        });

        ICON(ELEMENT,WHITELOCATIONICON,"transparent","50px","50px","5% auto",()=>{

        });

        const Message2=`Located In Mbale City,Uganda <br> We are Honored to Recieve Our Clients. `;

        LEFTTEXT(ELEMENT,"p","#FFFFFF","2%","20px",Message2,()=>{

        });

        TEXT(ELEMENT,"h1","#FFFFFF","","20px","Services",(ELEMENTS)=>{

            STYLED(ELEMENTS,"border","1px solid #05143d ");
            STYLED(ELEMENTS,"width","50%");
            STYLED(ELEMENTS,"padding","2%");
            STYLED(ELEMENTS,"border-radius","20px");
            
        });

        BREAK(ELEMENT);

        DIV(ELEMENT,"90%","300px","transparent","block","hidden","",(ELEMENTS)=>{

            TABLEVIEW(ELEMENTS,"45%","45%","#05143d","hidden","2%",()=>{

            });

            TABLEVIEW(ELEMENTS,"45%","45%","#05143d","hidden","2%",()=>{

            });

            TABLEVIEW(ELEMENTS,"45%","45%","#05143d","hidden","2%",()=>{

            });

            TABLEVIEW(ELEMENTS,"45%","45%","#05143d","hidden","2%",()=>{

            });

        });

        TEXT(ELEMENT,"p","#FFFFFF","2% auto auto 8%","20px","lets Innovate Together",(ELEMENTS)=>{

            STYLED(ELEMENTS,"border","1px solid #05143d ");
            STYLED(ELEMENTS,"width","80%");
            STYLED(ELEMENTS,"padding","2%");
            STYLED(ELEMENTS,"border-radius","20px");

        });

        BUTTON(ELEMENT,"90%","50px","#05143d","#ffffff","10px","Book Now","2%",()=>{

        });

        BREAK(ELEMENT);BREAK(ELEMENT);

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