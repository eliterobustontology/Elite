export const TOAST = (Message) => {
    if (localStorage.getItem("Environment") === "Production") {
        Android.showToast(Message);
    } else {
       alert(Message);
    }
};
