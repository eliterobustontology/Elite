const NOVASTART=()=>{

  CLEAR();

  SWITCHER(800,()=>{

    DESKTOPVERSION();

  },()=>{

    MOBILEVERSION();

  });

};

const MOBILEVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

  CLEAR();

  HEADER("","Navy",(ELEMENT)=>{

    TEXT(ELEMENT,"h1","","auto 2%","20px","Elite Robust Ontology",()=>{

    });

    RIGHTIMAGE(ELEMENT,WHITEMENUICON,"","20px","20px","2%",()=>{

    });

  });

  DIV("","","","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","50px");

    DIV(ELEMENT,"100%","100px","blue","block","auto","",(ELEMENT)=>{

    });

    DIV(ELEMENT,"100%","200px","green","block","auto","",(ELEMENT)=>{

    });

  });

  FOOTER("","Navy",(ELEMENT)=>{

  });

};

const DESKTOPVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};