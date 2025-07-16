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

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

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

      CLICK(ELEMENTS,()=>{

        ROUTE(" ",MOBILEABOUTUSPAGE,"MOBILEHOMEPAGE");

      });

    });

    TEXT(ELEMENT,"h1","white","","18px","Our Services",(ELEMENTS)=>{

      CLICK(ELEMENTS,()=>{

        ROUTE(" ",MOBILESERVICESPAGE,"MOBILEHOMEPAGE");

      });

    });

    TEXT(ELEMENT,"h1","white","","18px","Contact Us",(ELEMENTS)=>{

      CLICK(ELEMENTS,()=>{

        ROUTE(" ",MOBILECONTACTPAGE,"MOBILEHOMEPAGE");

      });

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

    DIV(ELEMENT,"95%","80%","transparent","block","","2%",(ELEMENTS)=>{

      DIV(ELEMENTS,"45%","40%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

      DIV(ELEMENTS,"45%","40%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

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

const MOBILEABOUTUSPAGE=()=>{

  CLEAR();

  HEADER("","forestgreen",(ELEMENT)=>{

    LEFTIMAGE(ELEMENT,WHITEBACKICON,"transparent","20px","20px","1%",(ELES)=>{

      CLICK(ELES,()=>{

        ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

      });

    });

    TEXT(ELEMENT,"h1","white","auto","20px","About Us",(ELEMENTS)=>{

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

const MOBILESERVICESPAGE=()=>{

  CLEAR();

  HEADER("","forestgreen",(ELEMENT)=>{

    LEFTIMAGE(ELEMENT,WHITEBACKICON,"transparent","20px","20px","1%",(ELES)=>{

      CLICK(ELES,()=>{

        ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

      });

    });

    TEXT(ELEMENT,"h1","white","auto","20px","Services",(ELEMENTS)=>{

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

const MOBILECONTACTPAGE=()=>{

  CLEAR();

  HEADER("","forestgreen",(ELEMENT)=>{

    LEFTIMAGE(ELEMENT,WHITEBACKICON,"transparent","20px","20px","1%",(ELES)=>{

      CLICK(ELES,()=>{

        ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

      });

    });

    TEXT(ELEMENT,"h1","white","auto","20px","Contact",(ELEMENTS)=>{

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