export const SERVERCONNECTION = (PATH, FUNS) => {

    if (localStorage.getItem("Environment") === "Development") {

        import(`../library/Server/${PATH}`)

        .then((module) => {

            if (typeof module[FUNS] === "function") {

                module[FUNS]();

            } else {

                console.error(`${FUNS} is not defined in the module or is not a function`);
                
            }
            
        })
            
        .catch((error) => {
                
            console.error("Error loading the module:", error);
            
        });

    } else {

        import(`https://eroinnovations.github.io/Elite-Robust-Ontology/library/Server/${PATH}`)
            
        .then((module) => {
                
            if (typeof module[FUNS] === "function") {
                    
                module[FUNS]();
                
            } else {
                    
                console.error(`${FUNS} is not defined in the module or is not a function`);
            }

        })

        .catch((error) => {
                
            console.error("Error loading the module:", error);

        });

    }

};