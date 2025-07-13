import { COMPONENTSCONNECTION } from "../../../Library/Components/Connection/Connection.js";
import { ROBERTPAGETHREE } from "./Load3.js";

export const ROBERTPAGETWO=(HOLDERS)=>{

    COMPONENTSCONNECTION();

    const style = document.createElement('style');

    style.textContent = `
    
        .Updates{
            font-size:20px;
            text-align:center;
            margin-top:50%;
        }
    
    `;

    document.head.appendChild(style);

    HOLDERS.innerHTML=`

        <h1 class="Updates">Syncing Updates<h1>
    
    `;

    setTimeout(() => {

        ROBERTPAGETHREE(HOLDERS);
      
    }, 500);

};