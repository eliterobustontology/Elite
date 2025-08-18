export const HEADERVIEW=(HOLDERS,HEADERCOLOR,callback,VIEWCOLOR,callbackOne)=>{
    CLEAR(HOLDERS);

    HEADER(HOLDERS,HEADERCOLOR,(ELEMENT)=>{

        callback(ELEMENT);

    });

    DIV(HOLDERS,"100%","auto",VIEWCOLOR,"block","auto","auto",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","50px");
        STYLED(ELEMENT,"bottom","0px");

        callbackOne(ELEMENT);

    });

};