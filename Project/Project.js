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

    LEFTIMAGE(ELEMENT,WHITEPHONEICON,"transparent","20px","20px","30%",(ELES)=>{

      CLICK(ELES,()=>{

        CALL("+254794094414");

      });

    });

    RIGHTIMAGE(ELEMENT,WHITEWHATSAPPICON,"transparent","20px","20px","5%",(ELES)=>{

      CLICK(ELES,()=>{

        WHATSAPP("+254794094414");

      });

    });

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};