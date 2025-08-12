import { BATTERY } from "../DataBase/Battery/Battery.js";
import { PICKFILE } from "../DataBase/PickFile/PickFile.js";
import { TOASTED } from "../DataBase/Toast/Toast.js";
import { VIBRATION } from "../DataBase/Vibration/Vibration.js";

export const PLUGINSCONECTION=()=>{

const DATA=`const VIBRATION=${VIBRATION};
const TOASTED=${TOASTED};
const BATTERY=${BATTERY};
const PICKFILE=${PICKFILE};
`;
localStorage.setItem('PLUGINS',DATA);
};

`
const PICKFILE=${PICKFILE};

`