import { TOASTED } from "../DataBase/Toast/Toast.js";
import { VIBRATION } from "../DataBase/Vibration/Vibration.js";

export const PLUGINSCONECTION=()=>{

const DATA=`const VIBRATION=${VIBRATION};
const TOASTED=${TOASTED};
`;
localStorage.setItem('PLUGINS',DATA);
};

`
const TOASTED=${TOASTED};

`