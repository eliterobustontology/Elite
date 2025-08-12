import { BATTERY } from "../DataBase/Battery/Battery.js";
import { CAMERA } from "../DataBase/Camera/Camera.js";
import { CODE } from "../DataBase/Code/Code.js";
import { DOWNLOADFILE } from "../DataBase/DownloadFile/DownloadFIle.js";
import { MIRCOPHONE } from "../DataBase/Mircophone/Mircophone.js";
import { NOTIFICATION } from "../DataBase/Notification/Notification.js";
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
const MIRCOPHONE=${MIRCOPHONE};
const DOWNLOADFILE=${DOWNLOADFILE};
const NOTIFICATION=${NOTIFICATION};
const CODE=${CODE};
`;
localStorage.setItem('PLUGINS',DATA);
};

`
const CODE=${CODE};

`