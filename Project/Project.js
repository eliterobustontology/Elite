const LINK="https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing";

const NOVASTART=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

        ROUTE("",HOMEPAGE,"HOMEPAGE");

    });

    ROUTE("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

    DOWNLOADSAVEINDEX(LINK,"Products","Products","Products",()=>{

    });

    CLEAR("");

    DIV("","","auto","orange","block","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","50px");
        STYLED(ELEMENT,"top","0px");

    });

    FOOTER("","forestgreen",(ELEMENT)=>{

        ICON(ELEMENT,WHITEGRIDICON,"transparent","","","",()=>{

        });

        ICON(ELEMENT,WHITESAVEDICON,"transparent","","","",()=>{

        });

        ICON(ELEMENT,WHITEUSERPROFILEICON,"transparent","","","",()=>{

        });
        
    });

};