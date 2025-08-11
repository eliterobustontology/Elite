import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";
import { LOADINGSECTION } from "../Pages/LoadingSection.js";

export const START=()=>{

    const HOLDERS=document.querySelector("body");

    ASSETSCONNECTION();

    FUNCTIONS();

    COMPONENTSCONNECTION();

    PLUGINSCONECTION();

    if (localStorage.getItem("Updates")) {

        CLOUDCONNECTION();

    } else {

        LOADINGSECTION(HOLDERS);

    };
   
};