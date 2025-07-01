export const GETDATA=(Url,Name,callback)=>{

    const DATA={
        "spreadsheetUrl":Url,
        "sheetName":Name    
    };

    const APIS="https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec";

    fetch(APIS,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res => res.json())

    .then(data =>{

        callback(data);

    })
    .catch(Error => console.log(Error)
    )

};