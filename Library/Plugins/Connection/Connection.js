import { BATTERY } from "../DataBase/Battery/Battery.js";
import { CAMERA } from "../DataBase/Camera/Camera.js";
import { PICKFILE } from "../DataBase/PickFile/PickFile.js";
import { TOASTED } from "../DataBase/Toast/Toast.js";
import { VIBRATION } from "../DataBase/Vibration/Vibration.js";
import { VIDEO } from "../DataBase/Video/Video.js";

export const PLUGINSCONECTION=()=>{

const DATA=`const VIBRATION=${VIBRATION};
const TOASTED=${TOASTED};
const BATTERY=${BATTERY};
const PICKFILE=${PICKFILE};
const CAMERA=${CAMERA};
const VIDEO=${VIDEO};
`;
localStorage.setItem('PLUGINS',DATA);
};

`
const VIDEO=${VIDEO};

`