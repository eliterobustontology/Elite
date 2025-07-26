import { FUNCTIONS } from "../../../Connection/Functions.js";
import { QELPAGETWO } from "./Load2.js";

export const QELPAGE=(HOLDERS)=>{

    FUNCTIONS();

    const style = document.createElement('style');

    style.textContent = `
    
        .Updates{
            font-size:30px;
            text-align:center;
            margin-top:20%;
            color:orange;
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
        }
    
    `;

    document.head.appendChild(style);

    HOLDERS.innerHTML=`

        <img  class="ProductImage" src="https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-fast-delivery-png-image_6576285.png"/>

        <h1 class="Updates">Fast Delivery<h1>

        <p class="Message">Get Delivery Instantly</p>
    
    `;

    setTimeout(() => {

       QELPAGETWO(HOLDERS);
        
    }, 500);

};