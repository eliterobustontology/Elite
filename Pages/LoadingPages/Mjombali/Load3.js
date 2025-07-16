import { PLUGINSCONECTION } from "../../../Library/Plugins/Connection/Connection.js";
import { MJOMBALIPAGEFOUR } from "./Load4.js";

export const MJOMBALIPAGETHREE=(HOLDERS)=>{

    PLUGINSCONECTION();

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

        <h1 class="Updates">Installing Updates<h1>
    
    `;

    setTimeout(() => {

        MJOMBALIPAGEFOUR(HOLDERS);
        
    }, 500);

};