export const NOVA=()=>{

const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('PROJECT'));
ROUTEJS(localStorage.getItem('RUN'));
`;

localStorage.setItem('NOVA',DATA);

if (!localStorage.getItem('Updates')) {

    setTimeout(() => {

        localStorage.setItem('Updates', new Date());

        location.reload();
                
    }, 2000);

}

};