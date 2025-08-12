export const ASHMAIL = (EMAIL, SUBJECT, MESSAGE, callback, callback1) => {

    const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };

    fetch("https://script.google.com/macros/s/AKfycbyNEEeBwTZrJstRlQV7HBDMXw69xbvtZEw3Grc-Lg5pqOmHSxCxsfFAqwEjVsHqIuVv0A/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
    
    .then((res) => res.json())
       
    .then((data) => {

        callback(data);
        
    })
        
    .catch((error) => {
            
        callback1(error);

    });

};