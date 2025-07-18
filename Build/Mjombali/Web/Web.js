const LINK="https://docs.google.com/spreadsheets/d/1PjMlNtQy4kWMgcd9_J8b1XyXYEklEeGa3w7kDw786IQ/edit?usp=sharing";

const NOVASTART=()=>{

  GETDATA(LINK,"Services",(data)=>{

    const Data={
      "Name":"Services",
      "data":data
    };
  
    if (localStorage.getItem("Services")) {

      UPDATEINDEX ("Services", "Services", Data, ()=>{

      })

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

const UPDATES=()=>{
    
  GETDATA(LINK,"Services",(data)=>{

    const Data={
      "Name":"Services",
      "data":data
    };
  
    if (localStorage.getItem("Services")) {

      UPDATEINDEX ("Services", "Services", Data, ()=>{

      })

    } else {

      STOREINDEXED("Services","Services",Data,(de)=>{

        LOCALSTORE("Services","One")

      });
      
    };

  });
}

const MOBILEVERSION=()=>{

  CLEAR();

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

  UPDATES();

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

    TEXT(ELEMENT,"h1","forestgreen","auto 3% ","25px","Our Famous Rituals",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","80%","transparent","block","","auto",(ELEMENTS)=>{

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"data:image/webp;base64,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","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","auto","20px","Job Promotion",(ELEMENTS)=>{

          });

        });

      });

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"https://th.bing.com/th/id/OIP.nEPzbF2a9SW--xCYgNW7nAHaEK?w=294&h=180&c=7&r=0&o=7&pid=1.7&rm=3","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","auto","20px","Business Sucess Rituals",(ELEMENTS)=>{

          });

        });

      });

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"data:image/webp;base64,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","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","auto","20px","Marriage and Divorce Rituals",(ELEMENTS)=>{

          });

        });

      });

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"https://th.bing.com/th/id/OIP.oabNRQnIOqyIJaHHtR-MhwHaD4?w=318&h=180&c=7&r=0&o=7&pid=1.7&rm=3","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","auto","20px","Win Politics Rituals",(ELEMENTS)=>{

          });

        });

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

  DIV("","100%","90%","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","10px");

    GETINDEXED('Services', "Services", (data)=>{

      REDUX(data,(Element)=>{

        console.log(Element)

        REDUX(Element.data,(Elementd)=>{

          DIV(ELEMENT,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

            IMAGE(ELEMENTS,Elementd.Image,"","100%","100%","",()=>{

            });

            STYLED(ELEMENTS,"bottom","50px")
            STYLED(ELEMENTS,"top","50px");
            STYLED(ELEMENTS,"border","0.1px solid forestgreen");

            FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

              STYLED(ELEMENTSES,"height","100px");

              TEXT(ELEMENTSES,"h1","white","auto","20px",Elementd.Name,(ELEMENTS)=>{

              });

            });

          });

        });

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

  DIV("","100%","100%","transparent","block","auto","",(ELEMENT)=>{

    STYLED(ELEMENT,"top","49px");
    STYLED(ELEMENT,"bottom","0")

    TEXT(ELEMENT,"h1","forestgreen","5% 3% ","20px","Contact Via",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      LEFTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","10%",(ELES)=>{

      });

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Whats App",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        WHATSAPP("+254794094414");

      });

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      LEFTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","10%",(ELES)=>{

      });

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Face Book",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        WHATSAPP("+254794094414");

      });

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      LEFTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","10%",(ELES)=>{

      });

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Instagram",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        WHATSAPP("+254794094414");

      });

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      LEFTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","10%",(ELES)=>{

      });

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Call",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        CALL("+254794094414");

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