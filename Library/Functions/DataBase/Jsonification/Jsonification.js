export const JSONIFICATION = (DATA, callback) => {

    let DAA = JSON.stringify(DATA);

    callback(DAA);
    
};