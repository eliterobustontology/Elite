import { AUDIO } from "../DataBase/Audio/Audio.js";
import { BOTTOMVIEW } from "../DataBase/BottomView/BottomView.js";
import { BUTTON } from "../DataBase/Button/Button.js";
import { DIV } from "../DataBase/Div/Div.js";
import { FOOTER } from "../DataBase/Footer/Footer.js";
import { FOOTERVIEW } from "../DataBase/FooterView/FooterView.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { HEADERVIEW } from "../DataBase/HeaderView/HeaderView.js";
import { ICON } from "../DataBase/Icon/Icon.js";
import { IMAGE } from "../DataBase/Image/Image.js";
import { INLINEVIEW } from "../DataBase/InlineView/InlineView.js";
import { INPUT } from "../DataBase/Input/Input.js";
import { LEFTIMAGE } from "../DataBase/LeftImage/LeftImage.js";
import { LEFTTEXT } from "../DataBase/LeftText/LeftText.js";
import { RIGHTIMAGE } from "../DataBase/RightImage/RightImage.js";
import { RIGHTTEXT } from "../DataBase/RightText/RightText.js";
import { ROUNDFOOTER } from "../DataBase/RoundFooter/RoundFooter.js";
import { ROUNDINPUT } from "../DataBase/RoundInput/RoundInput.js";
import { TABLEVIEW } from "../DataBase/TableView/TableView.js";
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
const ROUNDFOOTER=${ROUNDFOOTER};
const LEFTTEXT=${LEFTTEXT};
const RIGHTTEXT=${RIGHTTEXT};
const INLINEVIEW=${INLINEVIEW};
const TABLEVIEW=${TABLEVIEW};
const FOOTERVIEW=${FOOTERVIEW};
const HEADERVIEW=${HEADERVIEW};
const BOTTOMVIEW=${BOTTOMVIEW};
`;
    
localStorage.setItem('COMPONENTS',DATA)

};
`
const BOTTOMVIEW=${BOTTOMVIEW};

`
