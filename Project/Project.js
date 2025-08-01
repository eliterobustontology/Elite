const NOVASTART=()=>{

    CLEAR("");

    ROUTE("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

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