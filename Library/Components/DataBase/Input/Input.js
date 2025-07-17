import { ELEMENTED } from "../../../Functions/DataBase/Elemented/Elemented.js";
import { STYLED } from "../../../Functions/DataBase/Styled/Styled.js";

export const INPUT=(HOLDER,WIDTH,HEIGHT,MARGIN,COLOR,TYPE,PLACE,callback)=>{

    ELEMENTED(HOLDER,"input",(ELEMENTS)=>{

        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"width",WIDTH||"95%");
        STYLED(ELEMENTS,"height",HEIGHT||"32px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"outline","none");

        ELEMENTS.placeholder=PLACE||"Enter Text";
        ELEMENTS.type=TYPE||"text";
        
        callback(ELEMENTS);

    });

};