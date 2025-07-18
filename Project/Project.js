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

    TEXT(ELEMENT,"h1","white","auto 3% ","20px","Doctor Mjomb Ali",(ELEMENTS)=>{

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

    DIV(ELEMENT,"95%","40%","transparent","inline-flex","","2%",(ELEMENTS)=>{

      TEXT(ELEMENT,"h1","","5% 5% ","25px","Traditional African Healer",(ELEMENTS)=>{

        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"top","100px");
        STYLED(ELEMENTS,"font-weight","bold");

      });

      IMAGE(ELEMENTS,"https://th.bing.com/th/id/OIP.kSJG2Aha0Ia458vYGgivVgHaE8?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3","","100%","100%","",()=>{

      });

      TEXT(ELEMENT,"p","orange","5% 5% ","18px","Most Experienced Witch Doctor and Traditional Healer In Africa .",(ELEMENTS)=>{

        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"top","150px");
  
      });

    });

    TEXT(ELEMENT,"p","forestgreen","auto","18px","About Doctor Mjomb Ali",(ELEMENTS)=>{

    });

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

    DIV(ELEMENT,"95%","40%","transparent","","","2%",(ELEMENTS)=>{

      TEXT(ELEMENTS,"p","#000000","2% 3% ","18px",Message,(ELEMENTS)=>{

        STYLED(ELEMENTS,"text-align","left")

      });

    });

    DIV(ELEMENT,"95%","10%","green","inline-flex","","2%",(ELEMENTS)=>{

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","location",(ELEMENTS)=>{

      });

      RIGHTIMAGE(ELEMENTS,WHITELOCATIONICON,"transparent","20px","20px","5%",(ELES)=>{

      });

      CLICK(ELEMENTS,()=>{

        WHATSAPP("+254794094414");

      });

    });

    TEXT(ELEMENT,"h1","forestgreen","auto 3% ","25px","Our Famous Rituals",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","100%","transparent","block","","auto",(ELEMENTS)=>{

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"data:image/webp;base64,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","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","1% auto","20px","Promotions",(ELEMENTS)=>{

           
            STYLED(ELEMENTS,"top","5px");

          });

          TEXT(ELEMENTSES,"h1","white","auto","14px","You Deserve That Position. ",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","35px");

          });

          LEFTIMAGE(ELEMENTSES,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","10px");

            CLICK(ELES,()=>{

              CALL("+254794094414");

            });

          });

          RIGHTIMAGE(ELEMENTSES,WHITEWHATSAPPICON,"transparent","20px","20px","5px",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","10px");
             STYLED(ELES,"right","5px");

            CLICK(ELES,()=>{

              WHATSAPP("+254794094414");

            });

          });

        });

      });

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"https://th.bing.com/th/id/OIF.HOR0WOJBPwAA0ZwFabNQ6w?w=235&h=180&c=7&r=0&o=7&pid=1.7&rm=3","","100%","100%","",()=>{

        });

        STYLED(ELEMENTS,"bottom","50px")
        STYLED(ELEMENTS,"top","50px");
        STYLED(ELEMENTS,"border","0.1px solid forestgreen");

        FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

          STYLED(ELEMENTSES,"height","100px");

          TEXT(ELEMENTSES,"h1","white","1% auto","20px","Business",(ELEMENTS)=>{

            STYLED(ELEMENTS,"top","5px");

          });

          TEXT(ELEMENTSES,"h1","white","3% auto","14px","Build An Empire Now! ",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","50px");

          });

          LEFTIMAGE(ELEMENTSES,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","10px");

            CLICK(ELES,()=>{

              CALL("+254794094414");

            });

          });

          RIGHTIMAGE(ELEMENTSES,WHITEWHATSAPPICON,"transparent","20px","20px","5px",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","10px");
             STYLED(ELES,"right","5px");

            CLICK(ELES,()=>{

              WHATSAPP("+254794094414");

            });

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

          TEXT(ELEMENTSES,"h1","white"," 1% auto","20px","Love",(ELEMENTS)=>{

            STYLED(ELEMENTS,"top","5px");

          });

          TEXT(ELEMENTSES,"h1","white","2% auto","14px","Your Deserving Of Love! ",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","40px");

          });

          LEFTIMAGE(ELEMENTSES,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","20px");

            CLICK(ELES,()=>{

              CALL("+254794094414");

            });

          });

          RIGHTIMAGE(ELEMENTSES,WHITEWHATSAPPICON,"transparent","20px","20px","5px",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","20px");
             STYLED(ELES,"right","5px");

            CLICK(ELES,()=>{

              WHATSAPP("+254794094414");

            });

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

          TEXT(ELEMENTSES,"h1","white","1% auto","20px","Court Cases",(ELEMENTS)=>{

            STYLED(ELEMENTS,"top","5px");

          });

          TEXT(ELEMENTSES,"h1","white","1%","14px","Win Case With Ease! ",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"bottom","50px");

          });

          LEFTIMAGE(ELEMENTSES,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","20px");

            CLICK(ELES,()=>{

              CALL("+254794094414");

            });

          });

          RIGHTIMAGE(ELEMENTSES,WHITEWHATSAPPICON,"transparent","20px","20px","5px",(ELES)=>{

            STYLED(ELES,"position","absolute");
            STYLED(ELES,"bottom","20px");
             STYLED(ELES,"right","5px");

            CLICK(ELES,()=>{

              WHATSAPP("+254794094414");

            });

          });

        });

      });

      BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);BREAK(ELEMENTS);

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

    STYLED(ELEMENT,"top","50px");
    STYLED(ELEMENT,"bottom","10px");

    GETINDEXED('Services', "Services", (data)=>{

      REDUX(data,(Element)=>{

        REDUX(Element.data,(Elementd)=>{

          DIV(ELEMENT,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

            IMAGE(ELEMENTS,Elementd.Image,"","100%","100%","",()=>{

            });

            STYLED(ELEMENTS,"bottom","50px")
            STYLED(ELEMENTS,"top","50px");
            STYLED(ELEMENTS,"border","0.1px solid forestgreen");

            FOOTER(ELEMENTS,"forestgreen",(ELEMENTSES)=>{

              STYLED(ELEMENTSES,"height","100px");

              TEXT(ELEMENTSES,"h1","white","1% auto","20px",Elementd.Name,(ELEMENTS)=>{

              
                STYLED(ELEMENTS,"top","5px");

              });

              TEXT(ELEMENTSES,"h1","white","auto","14px",Elementd.ShortMessage,(ELEMENTS)=>{

                STYLED(ELEMENTS,"position","absolute");
                STYLED(ELEMENTS,"bottom","35px");

              });

              LEFTIMAGE(ELEMENTSES,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

                STYLED(ELES,"position","absolute");
                STYLED(ELES,"bottom","10px");

                CLICK(ELES,()=>{

                  CALL("+254794094414");

                });

              });

              RIGHTIMAGE(ELEMENTSES,WHITEWHATSAPPICON,"transparent","20px","20px","5px",(ELES)=>{

                STYLED(ELES,"position","absolute");
                STYLED(ELES,"bottom","10px");
                STYLED(ELES,"right","5px");

                CLICK(ELES,()=>{

                  WHATSAPP("+254794094414");

                });

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

      LEFTIMAGE(ELEMENTS,WHITEPHONEICON,"transparent","20px","20px","10%",(ELES)=>{

      });

      TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Call",(ELEMENTS)=>{

      });

      CLICK(ELEMENTS,()=>{

        CALL("+254794094414");

      });

    });

    TEXT(ELEMENT,"h1","forestgreen","5% 3% ","20px","Location",(ELEMENTS)=>{

    });

    TEXT(ELEMENT,"h1","teal","5% 3% ","20px","located in Western Kenya",(ELEMENTS)=>{

    });

  });

};

const DESKTOPVERSION=()=>{

  CLEAR();

  DISPLAY("",`

    DESKTOP
    
  `);

};