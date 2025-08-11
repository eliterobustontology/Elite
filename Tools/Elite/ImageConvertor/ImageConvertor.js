const HOMEPAGE=()=>{

    APPMODE("#333333");

    IMAGE("",WHITEHOMEICON,"forestgreen","50%","96%","2%",(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            IMAGEPICKER(ELEMENT,(data)=>{});

        });

    });

    BUTTON("","80%","50px","forestgreen","#FFFFFF","20px","Copy","3%",(ELEMENT)=>{

        CLICK(ELEMENT,()=>{

            COPY(sessionStorage.getItem("Imaged"));

            DISPLAY(ELEMENT,"Copied");

        });

    });
    
};