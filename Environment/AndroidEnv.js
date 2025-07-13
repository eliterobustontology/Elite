import { CLOUDSTART } from "../Connection/Cloud.js";
import { NOVA } from "../Connection/CloudStart.js";

export const ANDROIDENV=(PATH)=>{

    fetch(PATH)
    .then(res =>res.text())
    .then(data =>{

        console.log(data);

        localStorage.setItem('PROJECT',data);

        NOVA();

        CLOUDSTART();

        return;

    })
    .catch(error=>{console.log(error)}
    );

};