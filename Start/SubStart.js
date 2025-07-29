import { FUNCTIONS } from "../Connection/Functions.js";
import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";
import { TEMPLATES } from "../Library/Templates/Connection/Connection.js";

export const START=()=>{

    ASSETSCONNECTION();

    FUNCTIONS();

    COMPONENTSCONNECTION();

    PLUGINSCONECTION();

    TEMPLATES();
   
};