export const SUBMANAGER=()=>{
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


       
        })
        .catch(Error => {

            console.log(Error);

        });

};