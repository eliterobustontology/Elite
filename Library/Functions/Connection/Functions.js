import { ADD } from "../DataBase/Add/Add.js";
import { APPMODE } from "../DataBase/AppMode/AppMode.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { BODIED } from "../DataBase/Body/Body.js";
import { CALL } from "../DataBase/Call/Call.js";
import { CLEAR } from "../DataBase/Clear/Clear.js";
import { CLICK } from "../DataBase/Click/Click.js";
import { DISPLAY } from "../DataBase/Display/Display.js";
import { ELEMENTED } from "../DataBase/Elemented/Elemented.js";
import { FINDER } from "../DataBase/Finder/Finder.js";
import { GETDATA } from "../DataBase/GetData/GetData.js";
import { INSERTDATA } from "../DataBase/InsertData/InsertData.js";
import { LOCALSTORE } from "../DataBase/LocalStore/LocalStore.js";
import { REDUX } from "../DataBase/Redux/Redux.js";
import { ROUTE } from "../DataBase/Route/Route.js";
import { SESSIONSTORE } from "../DataBase/SessionStore/SessionStore.js";
import { STYLED } from "../DataBase/Styled/Styled.js";
import { UPDATEDATA } from "../DataBase/UpdateData/UpdateData.js";
import { WHATSAPP } from "../DataBase/whatsapp/Whatsapp.js";

export const CONNECTIONFUNCTIONS=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
const AUTORUN=${AUTORUN};
const REDUX=${REDUX};
const LOCALSTORE=${LOCALSTORE};
const SESSIONSTORE=${SESSIONSTORE};
const CLEAR=${CLEAR};
const GETDATA=${GETDATA};
const INSERTDATA=${INSERTDATA};
const UPDATEDATA=${UPDATEDATA};
const ROUTE=${ROUTE};
const STYLED=${STYLED};
const FINDER=${FINDER};
const ELEMENTED=${ELEMENTED};
const APPMODE=${APPMODE};
const BODIED=${BODIED};
const WHATSAPP=${WHATSAPP};
const CLICK=${CLICK};
const CALL=${CALL};
`;
localStorage.setItem('FUNCTIONS',DATA)
};

`
const CALL=${CALL};

`
