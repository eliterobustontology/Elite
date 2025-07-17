import { DIV } from "../DataBase/Div/Div.js";
import { FOOTER } from "../DataBase/Footer/Footer.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { IMAGE } from "../DataBase/Image/Image.js";
import { INPUT } from "../DataBase/Input/Input.js";
import { LEFTIMAGE } from "../DataBase/LeftImage/LeftImage.js";
import { RIGHTIMAGE } from "../DataBase/RightImage/RightImage.js";
import { TEXT } from "../DataBase/Text/Text.js";

export const COMPONENTSCONNECTION=()=>{
const DATA=`const FOOTER=${FOOTER};
const HEADER=${HEADER};
const TEXT=${TEXT};
const IMAGE=${IMAGE};
const DIV=${DIV};
const LEFTIMAGE=${LEFTIMAGE};
const RIGHTIMAGE=${RIGHTIMAGE};
const INPUT=${INPUT};
`;
    
localStorage.setItem('COMPONENTS',DATA)

};
`
const INPUT=${INPUT};

`
