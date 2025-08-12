export const HIDER = (TIME, callback) => {

    setTimeout(() => {

        callback();

    }, TIME || 500);
    
};