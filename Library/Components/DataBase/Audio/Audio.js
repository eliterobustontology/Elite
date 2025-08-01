import { ELEMENTED } from "../../../Functions/DataBase/Elemented/Elemented.js";
import { STYLED } from "../../../Functions/DataBase/Styled/Styled.js";

export const AUDIO=(HOLDER,SRC,COLOR,HEIGHT,WIDTH,MARGIN,callback)=>{
    
    ELEMENTED(HOLDER,"audio",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");
        STYLED(ELEMENTS,"background",COLOR||"#FFFFFF");
        ELEMENTS.audiocontrols=true;
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};