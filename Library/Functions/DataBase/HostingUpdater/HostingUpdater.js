export const HOSTINGUPDATER = () => {

    if (navigator.onLine) {

        if (localStorage.getItem("Environment") === "Development" ) {

            console.log("Project Under Development");
            
        } else {

            const DATA = { spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0", sheetName: "APPMANAGER" };
            
            fetch("https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec", { method: "POST", mode: "cors", body: JSON.stringify(DATA) })
            
            .then((res) => res.json())

            .then((data) => {

                data.forEach((element) => {

                    TIMECOMPARE(element.AppLogic,(result)=>{

                        if (result === false ) {

                            console.log("All Services Fully Paid");
                            
                        } else {

                            console.log(element.ID,result);
                            
                        };
                        
                    });

                });

            })

            .catch((error) => console.log(error));
            
        };

    };

};