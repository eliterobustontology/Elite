export const REDUX=(DATA,callback)=>{

    DATA.forEach(element => {

        callback(element);
        
    });

};