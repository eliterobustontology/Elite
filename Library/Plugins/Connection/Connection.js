import { ADDCONTACT } from "../DataBase/AddContact/AddContact.js";
import { BATTERY } from "../DataBase/Battery/Battery.js";
import { CAMERA } from "../DataBase/Camera/Camera.js";
import { CODE } from "../DataBase/Code/Code.js";
import { CONTACTS } from "../DataBase/Contacts/Contacts.js";
import { DELETECONTACT } from "../DataBase/DeleteContact/DeleteContact.js";
import { DOWNLOADFILE } from "../DataBase/DownloadFile/DownloadFIle.js";
import { MIRCOPHONE } from "../DataBase/Mircophone/Mircophone.js";
import { NOTIFICATION } from "../DataBase/Notification/Notification.js";
import { PICKFILE } from "../DataBase/PickFile/PickFile.js";
import { PRINT } from "../DataBase/Print/Print.js";
import { RELOADAPP } from "../DataBase/ReloadApp/ReloadApp.js";
import { TOASTED } from "../DataBase/Toast/Toast.js";
import { TOASTER } from "../DataBase/Toaster/Toaster.js";
import { UPDATECONTACT } from "../DataBase/UpdateContact/UpdateContact.js";
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
const RELOADAPP=${RELOADAPP};
const TOASTER=${TOASTER};
const PRINT=${PRINT};
const CONTACTS=${CONTACTS};
const ADDCONTACT=${ADDCONTACT};
const UPDATECONTACT=${UPDATECONTACT};
const DELETECONTACT=${DELETECONTACT};
`;
localStorage.setItem('PLUGINS',DATA);
};

`
const UPDATECONTACT=${UPDATECONTACT};

`