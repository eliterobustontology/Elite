const NOVASTART=()=>{

  APPMODE("White");

  SWITCHER(800,()=>{

    DESKTOPVERSION();

  },()=>{

    MOBILEVERSION();

  });

};

const MOBILEVERSION=()=>{

  CLEAR();

  HEADER("","forestgreen",(ELEMENT)=>{

    TEXT(ELEMENT,"h1","white","auto 1% ","20px","Doctor Mjombali",(ELEMENTS)=>{

    });

    IMAGE(ELEMENT,WHITEWHATSAPPICON,"transparent","20px","20px","auto 30%  auto 10%",()=>{

    });

    IMAGE(ELEMENT,WHITEWHATSAPPICON,"transparent","20px","20px","auto 30%  auto 10%",()=>{

    });

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};