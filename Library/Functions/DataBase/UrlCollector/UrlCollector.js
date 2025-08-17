export const URLCOLLECTOR = () => {

    const url = new URL(window.location.href);

    const queryParams = {};

    url.searchParams.forEach((value, key) => {

        queryParams[key] = value;

    });

    const hash = url.hash ? url.hash.substring(1) : null;

    const pathSegments = url.pathname.split("/").filter((seg) => seg);

    const dataToStore = { query: Object.keys(queryParams).length ? queryParams : null, hash: hash || null, path: pathSegments.length ? pathSegments : null, origin: url.origin, fullUrl: url.href };
    
    Object.keys(dataToStore).forEach((key) => {

        if (dataToStore[key] === null) {

            delete dataToStore[key];

        }

    });

    sessionStorage.setItem("urlInfo", JSON.stringify(dataToStore));
    
};