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

  });

};

const DESKTOPVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};