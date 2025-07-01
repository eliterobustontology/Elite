import { CLOUDSTART } from "./Cloud.js";
import { NOVA } from "./CloudStart.js";

export const CLOUDCONNECTION=(PATH)=>{

    fetch(PATH)
    .then(res =>res.text())
    .then(data =>{

        localStorage.setItem('PROJECT',data);

        NOVA();

        CLOUDSTART();

    })
    .catch(error=>{console.log(error)}
    );

};