export const INSERTDATA=(Url,Name,headers,Info,callback)=>{

    const DATA={
        "spreadsheetUrl":Url,
        "sheetName":Name,
        "Headers":headers,
        "Data":Info
    };

    const APIS="https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec";

    fetch(APIS,{
        method:"Post",
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
