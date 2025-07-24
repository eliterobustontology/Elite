import { ELITEPAGE } from "./LoadingPages/Elite/Load1.js";
import { MJOMBALIPAGE } from "./LoadingPages/Mjombali/Load1.js";
import { ROBERTPAGE } from "./LoadingPages/Robert/Load1.js"

export const PROJECTCONNECTION=(HOLDERS)=>{

    if (localStorage.getItem("NAME") === "dlqhjsforruglbalrdhiqlchmlooiqxb" ) {

        ROBERTPAGE(HOLDERS);

        return;
        
    };

    if (localStorage.getItem("NAME") === "d553f567-0d3e-4b38-ac67-89d2efa0fa88" ) {

        ROBERTPAGE(HOLDERS);

        return;
        
    };

    if (localStorage.getItem("NAME") === "aG7K-zX9wR4tQb12-DmYO7LxgF9PJsUv" ) {

        MJOMBALIPAGE(HOLDERS);

        return;
        
    };

    if (localStorage.getItem("NAME") === "a2aed934-667d-4828-b97a-4ffc8ef7ff7d" ) {

        ELITEPAGE(HOLDERS);

        return;
        
    };

};