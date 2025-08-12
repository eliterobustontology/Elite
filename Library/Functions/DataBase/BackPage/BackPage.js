export const BACKPAGE = (NAME) => {

    setTimeout(() => {

        sessionStorage.setItem("PreviousPage", NAME);

    }, 100);
    
};