import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";
import { LOADINGSECTION } from "../Pages/LoadingSection.js";

export const START=()=>{

    const HOLDERS=document.querySelector("body");

    if (localStorage.getItem("Updates")) {

        FUNCTIONS();

        COMPONENTSCONNECTION();

        PLUGINSCONECTION();

        CLOUDCONNECTION();

    } else {

        LOADINGSECTION(HOLDERS);

    };
   
};