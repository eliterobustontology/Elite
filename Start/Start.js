import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";

export const START=()=>{

    FUNCTIONS();

    COMPONENTSCONNECTION();

    PLUGINSCONECTION();

    CLOUDCONNECTION('../Project/Project.js');
   
};