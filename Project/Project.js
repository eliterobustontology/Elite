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

    TEXT(ELEMENT,"h1","white","auto 3% ","20px","Doctor Mjombali",(ELEMENTS)=>{

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

  DIV("","100%","50px","forestgreen","inline-flex","","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");

    TEXT(ELEMENT,"h1","white","","18px","About Us",(ELEMENTS)=>{

    });

    TEXT(ELEMENT,"h1","white","","18px","Our Services",(ELEMENTS)=>{

    });

    TEXT(ELEMENT,"h1","white","","18px","Contact Us",(ELEMENTS)=>{

    });

  });

  DIV("","100%","100%","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","0")

    DIV(ELEMENT,"95%","40%","green","inline-flex","","2%",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","",(ELEMENTS)=>{

      });

    });

    DIV(ELEMENT,"95%","40%","green","inline-flex","","2%",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","80%","red","block","","2%",(ELEMENTS)=>{

      DIV(ELEMENTS,"45%","40%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

      DIV(ELEMENTS,"45%","40%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

    });

    DIV(ELEMENT,"100%","100px","forestgreen","inline-flex","","",(ELEMENTS)=>{

    });

    BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};