export const UPDATEDATA=(Url,Name,headers,Info,callback)=>{

    const DATA={
        "action":"update",
        "spreadsheetUrl":Url,
        "sheetName":Name,
        "id":headers,
        "data":Info
    };

    const APIS="https://script.google.com/macros/s/AKfycbxDMAxD8EYl1mqybaVnFgXh_5A8c2SpOydG12r8VxrWkB_UtjqBdpOkPWUi0przES9uBw/exec";

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