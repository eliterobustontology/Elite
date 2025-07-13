import { DEVELOPMENTPAGE } from "./LoadingPages/Development/Page1.js";
import { PROJECTCONNECTION } from "./ProjectConnection.js";

export const LOADINGSECTION=(HOLDERS)=>{

    if (localStorage.getItem("Environment") === "Development" ) {

        DEVELOPMENTPAGE(HOLDERS);
        
    } else {

        PROJECTCONNECTION(HOLDERS);
        
    };

};