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

    TEXT(ELEMENT,"h1","","auto 1%","20px","Elite",()=>{

    });

  });

};

const DESKTOPVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};