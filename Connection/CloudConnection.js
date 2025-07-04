import { ERRORPAGE } from "../Pages/ErrorPage.js";
import { CLOUDSTART } from "./Cloud.js";
import { NOVA } from "./CloudStart.js";

export const CLOUDCONNECTION=(PATH)=>{

    if (localStorage.getItem("Environment") === "Development" ) {

        fetch(PATH)
        .then(res =>res.text())
        .then(data =>{

            localStorage.setItem('PROJECT',data);

            NOVA();

            CLOUDSTART();

        })
        .catch(error=>{console.log(error)}
        );
        
    } else {

        const DATA={
            "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing",
            "sheetName":"APPMANAGER"    
        };

        const APIS="https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec";

        fetch(APIS,{
            method:"POST",
            mode:"cors",
            body:JSON.stringify(DATA)
        })

        .then(res => res.json())
 
        .then(data =>{

            data.forEach(element => {

                if (localStorage.getItem("NAME") === element.ID ) {

                    console.log(element);

                      
                }else{

                    ERRORPAGE();

                };
                
            });

        })
        .catch(Error => console.log(Error)
        )
        
    }

};