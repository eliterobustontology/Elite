const NOVASTART=()=>{

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        LEFTTEXT(ELEMENT,"h1","#ffffff","1%","20px","Manager",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEADDICON,"transparent","25px","25px","5%",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITESETTINGSICON,"transparent","25px","25px","5%",()=>{

        });

        RIGHTIMAGE(ELEMENT,WHITEUSERPROFILEICON,"transparent","25px","25px","5%",()=>{

        });

    },"red",(ELEMENTA)=>{

        
        GETINDEXEDDATA("APPMANAGER","APPMANAGER",(data)=>{

            TABLEVIEW(ELEMENTA,"200px","200px","orange","","2%",()=>{

            });

        });

    });

};