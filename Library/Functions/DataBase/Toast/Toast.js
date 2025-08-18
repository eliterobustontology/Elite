export const TOAST = (Message) => {

    if (localStorage.getItem("Environment") === "Production") {

        Android.showToast(Message);

    } else {

        DIV("","95%","50px","#000000","inline-flex","hidden","auto",(ELEMENT)=>{

            STYLED(ELEMENT,"position","absolute");
            STYLED(ELEMENT,"bottom","50px");
            STYLED(ELEMENT,"left","2%");
            STYLED(ELEMENT,"border-radius","5px");
            STYLED(ELEMENT,"border","1px solid #cdcdcdcd");

            TEXT(ELEMENT,"p","#FFFFFF","auto","20px",Message,()=>{

            });

            HIDER(2000,()=>{

                STYLED(ELEMENT,"display","none");

            });

        });

    };
    
};
