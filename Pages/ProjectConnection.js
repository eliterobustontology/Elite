import { DEVELOPMENTPAGE } from "./LoadingPages/Development/Page1.js";
import { ELITEPAGE } from "./LoadingPages/Elite/Load1.js";
import { MJOMBALIPAGE } from "./LoadingPages/Mjombali/Load1.js";
import { QELPAGE } from "./LoadingPages/Qel/Load1.js";
import { ROBERTPAGE } from "./LoadingPages/Robert/Load1.js";
export const PROJECTCONNECTION = (HOLDERS) => {
    const name = localStorage.getItem("NAME");
    switch (name) {
        case "d553f567-0d3e-4b38-ac67-89d2efa0fa88":
            ROBERTPAGE(HOLDERS);
            break;
        case "aG7K-zX9wR4tQb12-DmYO7LxgF9PJsUv":
            MJOMBALIPAGE(HOLDERS);
            break;
        case "a2aed934-667d-4828-b97a-4ffc8ef7ff7d":
            ELITEPAGE(HOLDERS);
            break;
        case "17ea81ea-b4fa-4b7a-8f3e-10ef438b880f":
            QELPAGE(HOLDERS);
            break;
        default:
            DEVELOPMENTPAGE(HOLDERS)
            break;
    }
};