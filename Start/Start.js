import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";

export const START=()=>{

    FUNCTIONS();

    COMPONENTSCONNECTION();

    CLOUDCONNECTION('../Project/Project.js');
   
};