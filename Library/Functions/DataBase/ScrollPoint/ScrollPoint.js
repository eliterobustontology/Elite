export const SCROLLPOINT = (POINT) => {

    const element = document.getElementById(POINT);

    if (sessionStorage.getItem("ScrollPoint")) {

        if (element) {

            element.scrollIntoView({ behavior: "smooth" });

        }

    }
    
};