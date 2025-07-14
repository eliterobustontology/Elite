import { FOOTER } from "../DataBase/Footer/Footer.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { IMAGE } from "../DataBase/Image/Image.js";
import { TEXT } from "../DataBase/Text/Text.js";

export const COMPONENTSCONNECTION=()=>{
const DATA=`const FOOTER=${FOOTER};
const HEADER=${HEADER};
const TEXT=${TEXT};
const IMAGE=${IMAGE};
`;
    
localStorage.setItem('COMPONENTS',DATA)

};
`
const IMAGE=${IMAGE};

`
