import { COMPONENTSCONNECTION } from "../../../Library/Components/Connection/Connection.js";
import { QELPAGETHREE } from "./Load3.js";

export const QELPAGETWO=(HOLDERS)=>{

    COMPONENTSCONNECTION();

    const IMAGED="data:image/webp;base64,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";

    const style = document.createElement('style');

    style.textContent = `
    
        .Updates{
            font-size:30px;
            text-align:center;
            margin-top:10%;
            color:Orange;
            font-weight:bold;
        }

        .ProductImage{
            background:white;
            width:50%;
            height:30%;
            border-radius:100%;
            padding:3%;
            margin-left:20%;
            margin-top:25%;
            
        }

        .Message{
            text-align:center;
            font-size:16px;
            margin-top:1%;
            color:#cdcdcd;
        }
        
        .Messager{
            text-align:center;
            font-size:14px;
            margin-top:1%;
            color:#cdcdcd;
        }
    
    `;

    document.head.appendChild(style);

    HOLDERS.innerHTML=`

        <img  class="ProductImage" src="${IMAGED}"/>

        <h1 class="Updates">Secure Payment<h1>

        <h4 class="Message">Safe Online Payment</h4>

        <p class="Messager" >Stressless Payment</p>
    
    `;

    setTimeout(() => {

       QELPAGETHREE(HOLDERS);
      
    }, 1000);

};