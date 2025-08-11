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

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        STYLED(ELEMENT,"height","100px");

        DIV(ELEMENT,"100%","50px","Transparent","inline-flex","hidden","auto",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"top","0");

            LEFTIMAGE(ELEMENTS,WHITEHOMEICON,"","40px","40px","1%",(ELEMENTS)=>{

                STYLED(ELEMENTS,"margin-top","1%");

            });

            TEXT(ELEMENTS,"h1","#FFFFFF","","15px","Ash Shakur Charity and Orphanage Aid",()=>{

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

    },"red",(ELEMENT)=>{

        STYLED(ELEMENT,"top","100px");

    });

};

const DESKTOPVIEW=()=>{

};