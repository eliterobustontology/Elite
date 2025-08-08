import { ELEMENTED } from "../../../Functions/DataBase/Elemented/Elemented.js";
import { STYLED } from "../../../Functions/DataBase/Styled/Styled.js";

export const RIGHTTEXT=(HOLDER,TYPE,COLOR,MARGIN,SIZE,WORDS,callback)=>{
    
    ELEMENTED(HOLDER,TYPE||"p",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"color",COLOR);
        STYLED(ELEMENTS,"font-size",SIZE||"20px");
        STYLED(ELEMENTS,"font-family","sans-serif");
        STYLED(ELEMENTS,"display","block");
        STYLED(ELEMENTS,"text-align","right");
        STYLED(ELEMENTS,"margin","auto");
        STYLED(ELEMENTS,"margin-right",MARGIN||"auto");

        ELEMENTS.innerHTML=WORDS||"Your Text";
        
        callback(ELEMENTS);
    
    });

};