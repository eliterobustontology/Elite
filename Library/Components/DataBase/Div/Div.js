import { ELEMENTED } from "../../../Functions/DataBase/Elemented/Elemented.js";
import { STYLED } from "../../../Functions/DataBase/Styled/Styled.js";

export const DIV=(HOLDER,WIDTH,HEIGHT,COLOR,DISPLAY,SCROLL,callback)=>{
    
    ELEMENTED(HOLDER,"div",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"100%");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"display",DISPLAY||"block");
        STYLED(ELEMENTS,"overflow",SCROLL||"hidden");

        callback(ELEMENTS);
        
    });

};