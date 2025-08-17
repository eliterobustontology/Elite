export const SMS = (NUMBER) => {

    const phoneNumber = NUMBER;

    window.location.href = "sms:" + phoneNumber;
    
};