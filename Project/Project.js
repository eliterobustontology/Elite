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

    LEFTIMAGE(ELEMENT,WHITEWHATSAPPICON,"transparent","20px","20px","10%",()=>{

    });

    RIGHTIMAGE(ELEMENT,WHITEWHATSAPPICON,"transparent","20px","20px","10%",()=>{

    });

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};