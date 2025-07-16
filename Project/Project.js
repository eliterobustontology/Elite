const NOVASTART=()=>{

  APPMODE("White");

  CLEAR();

  HEADER("","forestgreen",(ELEMENT)=>{

    TEXT(ELEMENT,"h1","white","auto 1%","20px","Doctor Mjombali",()=>{

    });

    IMAGE(ELEMENT,WHITEPHONEICON,"transparent","25px","25px","auto auto auto 45%",()=>{

    });

  });

  DIV("","50px","50px","red","block","auto",(ELEMENT)=>{

    STYLED(ELEMENT,"top","50px");
    STYLED(ELEMENT,"border-radius","50px");
    STYLED(ELEMENT,"right","50px");

  });

  DIV("","","","white","block","auto",(ELEMENT)=>{

    STYLED(ELEMENT,"top","50px");

  });

};