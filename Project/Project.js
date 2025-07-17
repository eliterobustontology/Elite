const LINK="https://docs.google.com/spreadsheets/d/1PjMlNtQy4kWMgcd9_J8b1XyXYEklEeGa3w7kDw786IQ/edit?usp=sharing";

const NOVASTART=()=>{

  GETDATA(LINK,"Services",(data)=>{

    const Data={
      "Name":"Services",
      "data":data
    };
  
    if (localStorage.getItem("Services")) {

        console.log("Updates Not Yet");

    } else {

      STOREINDEXED("Services","Services",Data,(de)=>{

        LOCALSTORE("Services","One")

      });
      
    };

  });

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

      DIV(ELEMENTS,"45%","45%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

      DIV(ELEMENTS,"45%","45%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

      DIV(ELEMENTS,"45%","45%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

      DIV(ELEMENTS,"45%","45%","green","inline-table","","2.5%",(ELEMENTS)=>{

      });

    });

    DIV(ELEMENT,"95%","50px","teal","inline-flex","","2.5%",(ELEMENTS)=>{

      STYLED(ELEMENTS,"border-radius","50px");

      TEXT(ELEMENTS,"h1","white","auto ","16px","Check All Services",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        ROUTE(" ",MOBILESERVICESPAGE,"MOBILEHOMEPAGE");

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

  DIV("","100%","100%","transparent","block","auto","",(ELEMENT)=>{

    const Message=`Renowned African witch doctor and spiritual Healer.
    <br><br>
    With decades of experience in traditional African healing practices, Dr. Mjombali combines ancestral wisdom, spiritual guidance and potent rituals to provide transformative solutions to life's most challenging problems. Whether you are seeking help with love, prosperity protection and spiritual guidance.
    <br><br>
    Dr.Mjombali offers authentic, personalised services rooted in ancient African traditions.
    <br><br>
    As a trusted healer Dr. Mjombali works with the forces of nature, ancestral spirits, and powerful rituals to bring balance, healing, and clarity to your life. With a compassionate heart and profound knowledge, Dr. Mjombali is committed to chihelping you overcome obstacles and and achive peace, succes, and happiness.
    <br><br>
    Explore the services offered, and discover how Dr.Mjombali can guide you on your path to spiritural renewal and empowerment.
    `;

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","0")

    TEXT(ELEMENT,"h1","forestgreen","5% 3% ","23px","Doctor Mjombali",(ELEMENTS)=>{

    });

    TEXT(ELEMENT,"p","#000000","2% 3% ","18px",Message,(ELEMENTS)=>{

      STYLED(ELEMENTS,"text-align","left")

    });

    DIV(ELEMENT,"100%","100px","forestgreen","inline-flex","","",(ELEMENTS)=>{

    });

    BREAK(ELEMENT);BREAK(ELEMENT);BREAK(ELEMENT);
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

  DIV("","100%","100%","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","0")

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

  DIV("","100%","100%","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","0")

    INPUT(ELEMENT,"95%","","2%","forestgreen","password","Password",(ELEMENTS)=>{

      STYLED(ELEMENTS,"border","1px solid forestgreen");
      STYLED(ELEMENTS,"border-radius","10px");

      console.log(ELEMENTS.value)

    });

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};