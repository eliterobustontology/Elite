import { ADD } from "../DataBase/Add/Add.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { CLEAR } from "../DataBase/Clear/Clear.js";
import { DISPLAY } from "../DataBase/Display/Display.js";
import { GETDATA } from "../DataBase/GetData/GetData.js";
import { LOCALSTORE } from "../DataBase/LocalStore/LocalStore.js";
import { REDUX } from "../DataBase/Redux/Redux.js";
import { SESSIONSTORE } from "../DataBase/SessionStore/SessionStore.js";

export const CONNECTIONFUNCTIONS=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
const AUTORUN=${AUTORUN};
const REDUX=${REDUX};
const LOCALSTORE=${LOCALSTORE};
const SESSIONSTORE=${SESSIONSTORE};
const CLEAR=${CLEAR};
const GETDATA=${GETDATA};
`;

    localStorage.setItem('FUNCTIONS',DATA)
};

`
const GETDATA=${GETDATA};

`
