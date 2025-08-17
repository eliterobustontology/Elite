import { CLOUDSTART } from "../Connection/Cloud.js";
import { CLOUDCONNECTION } from "../Connection/CloudConnection.js";
import { NOVA } from "../Connection/CloudStart.js";
import { FUNCTIONS } from "../Connection/Functions.js";
import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../Library/Components/Connection/Connection.js";
import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { PLUGINSCONECTION } from "../Library/Plugins/Connection/Connection.js";
import { LOADINGSECTION } from "../Pages/LoadingSection.js";

export const START=()=>{

    const HOLDERS=document.querySelector("body");

    CONDITION(localStorage.getItem("Updates"),()=>{

        ASSETSCONNECTION();

        FUNCTIONS();

        COMPONENTSCONNECTION();

        PLUGINSCONECTION();

        CLOUDCONNECTION();

    },()=>{

        CONDITION(localStorage.getItem("State"),()=>{

            ASSETSCONNECTION();

            FUNCTIONS();

            COMPONENTSCONNECTION();

            PLUGINSCONECTION();

            CLOUDSTART();

            NOVA();

        },()=>{

            ASSETSCONNECTION();

            LOADINGSECTION(HOLDERS);

        });

    });
   
};