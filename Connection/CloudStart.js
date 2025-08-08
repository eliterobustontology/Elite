export const NOVA=()=>{

const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('PROJECT'));
ROUTEJS(localStorage.getItem('RUN'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
ROUTEJS(localStorage.getItem('ASSETS'));
`;

localStorage.setItem('NOVA',DATA);

    if (localStorage.getItem('Updates')) {

        localStorage.setItem('Updates', new Date());

    }else{

        setTimeout(() => {

            localStorage.setItem('Updates', new Date());

            location.reload();
                    
        }, 2000);

    };

};