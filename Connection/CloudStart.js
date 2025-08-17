import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { HIDER } from "../Library/Functions/DataBase/Hider/Hider.js";
import { LOCALSTORE } from "../Library/Functions/DataBase/LocalStore/LocalStore.js";
import { RELOAD } from "../Library/Functions/DataBase/Reload/Reload.js";

export const NOVA=()=>{

    const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
    ROUTEJS(localStorage.getItem('PROJECT'));
    ROUTEJS(localStorage.getItem('RUN'));
    ROUTEJS(localStorage.getItem('COMPONENTS'));
    ROUTEJS(localStorage.getItem('ASSETS'));
    `;

    LOCALSTORE("NOVA",DATA);

    CONDITION(localStorage.getItem('Updates'),()=>{

        LOCALSTORE("Updates",new Date());

    },()=>{

        HIDER(2000,()=>{

            LOCALSTORE("Updates",new Date());

            RELOAD();

        });

    });

};