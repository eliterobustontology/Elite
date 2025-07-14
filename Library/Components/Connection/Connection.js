import { FOOTER } from "../DataBase/Footer/Footer.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { TEXT } from "../DataBase/Text/Text.js";

export const COMPONENTSCONNECTION=()=>{
const DATA=`const FOOTER=${FOOTER};
const HEADER=${HEADER};
const TEXT=${TEXT};
`;
    
localStorage.setItem('COMPONENTS',DATA)

};
`
const TEXT=${TEXT};

`
