const NOVASTART=()=>{

  SWITCHER(800,()=>{

    DESKTOPVERSION();

  },()=>{

    MOBILEVERSION();
0
  });

};

const MOBILEVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    mobile
    
  `);

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};