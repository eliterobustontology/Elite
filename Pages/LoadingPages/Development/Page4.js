import { CLOUDCONNECTION } from "../../../Connection/CloudConnection.js";

export const DEVELOPMENTPAGEFOUR=(HOLDERS)=>{

    CLOUDCONNECTION();

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

        <h1 class="Updates">Finishing Updates<h1>
    
    `;

};