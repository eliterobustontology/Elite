export const HOSTINGUPDATER = () => {

    CHECKER(navigator.onLine,()=>{

        CONDITION(localStorage.getItem("Environment") === "Development" ,()=>{

            console.log("Project Under Development");

        },()=>{

            GETDATA("https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0","APPMANAGER",(data)=>{

                REDUX(data,(element)=>{

                    TIMECOMPARE(element.AppLogic,(result)=>{

                        CONDITION(result === false,()=>{

                            console.log("All Services Fully Paid");

                        },()=>{

                            console.log(element.ID,result);

                        });
  
                    });

                });

            });

        });

    });

};