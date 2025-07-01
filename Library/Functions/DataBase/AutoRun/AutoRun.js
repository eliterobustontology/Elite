export const AUTORUN=()=>{

    if (localStorage.getItem("Environment") === "Development" ) {
        
        import('./Start/Start.js')
        .then(module => {
            if (typeof module.START === 'function') {
            module.START();
            } else {
                console.error('START is not defined in the module');
            }
        })
        .catch(error => {
            console.error('Error loading the module:', error);
        });

    } else {

        import('https://eroinnovations.github.io/Elite/Start/Start.js')
        .then(module => {
            if (typeof module.START === 'function') {
            module.START();
            } else {
                console.error('START is not defined in the module');
            }
        })
        .catch(error => {
            console.error('Error loading the module:', error);
        });
        
    }

}