import { ANDROIDENV } from "../Environment/AndroidEnv.js";
import { DESKTOPENV } from "../Environment/DesktopEnv.js";
import { WEBENV } from "../Environment/WebEnv.js";
import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { FINDER } from "../Library/Functions/DataBase/Finder/Finder.js";
import { TIMECOMPARE } from "../Library/Functions/DataBase/TimeCompare/TimeCompare.js";
import { ERRORPAGE } from "../Pages/ErrorPage.js";
import { EXPIREDHOSTING } from "../Pages/ExpiredHosting.js";
import { CLOUDSTART } from "./Cloud.js";
import { NOVA } from "./CloudStart.js";

export const CLOUDCONNECTION=()=>{

    if (localStorage.getItem("Environment") === "Development" ) {

        fetch("../Project/Project.js")

        .then(res =>res.text())

        .then(data =>{

            localStorage.setItem('PROJECT',data);

            NOVA();

            CLOUDSTART();

        })

        .catch(error=>{console.log(error)});
        
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

            FINDER(data,"ID",localStorage.getItem("NAME"),(UserData)=>{

                CONDITION(UserData === false,()=>{

                    ERRORPAGE();

                },()=>{

                    TIMECOMPARE(UserData.AppLogic,(result)=>{

                        console.log(result)

                        CONDITION(result === true,()=>{

                            EXPIREDHOSTING();
   
                        },()=>{

                            CONDITION(localStorage.getItem("Environment") === "Production",()=>{

                                ANDROIDENV(UserData.AndroidDesign);

                            },()=>{

                                CONDITION(localStorage.getItem("Environment") === "Web",()=>{

                                    WEBENV(UserData.WebDesign);

                                },()=>{

                                    DESKTOPENV(UserData.DesktopDesign);

                                });

                            });

                        });

                    });

                });
              
            });
       
        })
        
        .catch(Error => {

            console.log(Error);

        });
        
    };

};