import { CLEAR } from "../../../Functions/DataBase/Clear/Clear.js";
import { STYLED } from "../../../Functions/DataBase/Styled/Styled.js";
import { DIV } from "../Div/Div.js";
import { FOOTER } from "../Footer/Footer.js";

export const FOOTERVIEW=(HOLDERS,VIEWCOLOR,callback,HEADERCOLOR,callbackTwo)=>{

    CLEAR(HOLDERS);

    DIV(HOLDERS,"100%","auto",VIEWCOLOR,"block","auto","auto",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","0px");
        STYLED(ELEMENT,"bottom","50px");

        callbackTwo(ELEMENT);

    });

    FOOTER(HOLDERS,HEADERCOLOR,(ELEMENT)=>{

        callback(ELEMENT);

    });

};