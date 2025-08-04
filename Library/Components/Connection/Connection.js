import { AUDIO } from "../DataBase/Audio/Audio.js";
import { BUTTON } from "../DataBase/Button/Button.js";
import { DIV } from "../DataBase/Div/Div.js";
import { FOOTER } from "../DataBase/Footer/Footer.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { ICON } from "../DataBase/Icon/Icon.js";
import { IMAGE } from "../DataBase/Image/Image.js";
import { INPUT } from "../DataBase/Input/Input.js";
import { LEFTIMAGE } from "../DataBase/LeftImage/LeftImage.js";
import { RIGHTIMAGE } from "../DataBase/RightImage/RightImage.js";
import { ROUNDINPUT } from "../DataBase/RoundInput/RoundInput.js";
import { TEXT } from "../DataBase/Text/Text.js";
import { TEXTAREA } from "../DataBase/TextArea/TextArea.js";

export const COMPONENTSCONNECTION=()=>{
const DATA=`const FOOTER=${FOOTER};
const HEADER=${HEADER};
const TEXT=${TEXT};
const IMAGE=${IMAGE};
const DIV=${DIV};
const LEFTIMAGE=${LEFTIMAGE};
const RIGHTIMAGE=${RIGHTIMAGE};
const INPUT=${INPUT};
const BUTTON=${BUTTON};
const ROUNDINPUT=${ROUNDINPUT};
const ICON=${ICON};
const AUDIO=${AUDIO};
const TEXTAREA=${TEXTAREA};
`;
    
localStorage.setItem('COMPONENTS',DATA)

};
`
const TEXTAREA=${TEXTAREA};

`
