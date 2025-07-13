import { PLUGINSCONECTION } from "../../../Library/Plugins/Connection/Connection.js";
import { ROBERTPAGEFOUR } from "./Load4.js";

export const ROBERTPAGETHREE=(HOLDERS)=>{

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

        ROBERTPAGEFOUR(HOLDERS);
        
    }, 500);

};