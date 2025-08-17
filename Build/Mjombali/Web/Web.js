const LINK="https://docs.google.com/spreadsheets/d/1PjMlNtQy4kWMgcd9_J8b1XyXYEklEeGa3w7kDw786IQ/edit?usp=sharing";

const NOVASTART=()=>{

    VISITOR(LINK,"Users");

    UPDATES();

    APPMODE("White");

    SWITCHER("800px",()=>{

        DESKTOPVERSION();

    },()=>{

        MOBILEVERSION();

    });

};

const UPDATES=()=>{

    DOWNLOADSAVEINDEX (LINK,"Services","Services", ()=>{

       RELOAD();

    });
    
};

const MOBILEVERSION=()=>{

  ROUTE("",MOBILEHOMEPAGE,"MOBILEHOMEPAGE");

};

const MOBILEHOMEPAGE=()=>{

    UPDATES();

    HEADERVIEW("","forestgreen",(ELEMENT)=>{

        STYLED(ELEMENT,"height","100px");
        STYLED(ELEMENT,"display","block");

        DIV(ELEMENT,"100%","50px","transparent","inline-flex","hidden","",(ELEMENTS)=>{

            LEFTTEXT(ELEMENTS,"h1","#FFFFFF","2%","20px","Doctor Mjomba Ali",()=>{

            });

            RIGHTIMAGE(ELEMENTS,WHITEPHONEICON,"","20px","20px","2%",(ELES)=>{

                CLICK(ELES,()=>{

                    CALL("+254794094414");

                });

            });

            RIGHTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"","20px","20px","2%",(ELES)=>{

                CLICK(ELES,()=>{

                    WHATSAPP("+254794094414");

                });

            });

        });

        DIV(ELEMENT,"100%","50px","transparent","inline-flex","hidden","",(ELEMENTS)=>{

            TEXT(ELEMENTS,"h1","white","","18px","About Us",(ELEMENTS)=>{

            });

            TEXT(ELEMENTS,"h1","white","","18px","Services",(ELEMENTS)=>{

                CLICK(ELEMENTS,()=>{

                   SCROLLPOINT("Services");

                });

            });

            TEXT(ELEMENTS,"h1","white","","18px","Contact Us",(ELEMENTS)=>{

            });

        });

    },"transparent",(ELEMENT)=>{

        STYLED(ELEMENT,"top","100px");

        MOBILEHOMEPAGEHOM(ELEMENT);

        FAMOUSRITUALS(ELEMENT);

        ABOUTUS(ELEMENT);

    });

};

const MOBILEHOMEPAGEHOM=(ELEMENT)=>{

    DIV(ELEMENT,"95%","250px","transparent","block","hidden","2%",(ELS)=>{

        STYLED(ELS,"border-radius","5px");

        TEXT(ELS,"h1","#FFFFFF","5%","25px","Traditional African Healer",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"top","100px");
            STYLED(ELEMENTS,"font-weight","bold");

        });

        TEXT(ELS,"p","orange","5% 5% ","18px","Most Experienced Witch Doctor and Traditional Healer In Africa .",(ELEMENTS)=>{

            STYLED(ELEMENTS,"position","absolute");
            STYLED(ELEMENTS,"top","150px");
        
        });

        IMAGE(ELS,"https://th.bing.com/th/id/OIP.kSJG2Aha0Ia458vYGgivVgHaE8?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3","","100%","100%","",()=>{

        });

    });

    TEXT(ELEMENT,"h1","forestgreen","auto","20px","About Doctor Mjomba Ali",(ELEMENTS)=>{

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

        TEXT(ELEMENTS,"h1","white","auto 3% ","16px","Western Kenya",(ELEMENTS)=>{

        });

        RIGHTIMAGE(ELEMENTS,WHITELOCATIONICON,"transparent","20px","20px","5%",(ELES)=>{

        });

        CLICK(ELEMENTS,()=>{

            WHATSAPP("+254794094414");

        });

    });

    TEXT(ELEMENT,"h1","forestgreen","auto 3% ","25px","Our Famous Rituals",(ELEMENTS)=>{

    });

};

const FAMOUSRITUALS=(ELEMENT)=>{

    POINT(ELEMENT,"Services")

    DIV(ELEMENT,"95%","auto","transparent","block","","auto",(ELEMENTS)=>{

        GETINDEXEDDATA('Services', "Services", (data)=>{

            TABLEVIEW(ELEMENTS,"45%","200px","transparent","hidden","2%",(ELS)=>{

                IMAGE(ELS,data.Image,"transparent","100%","100%","auto",(EIMS)=>{

                });

                TEXT(ELS,"h1","#FFFFFF","2% 10%","18px",data.Name,(ELEMENTS)=>{

                    STYLED(ELEMENTS,"position","absolute");
                    STYLED(ELEMENTS,"bottom","40%");
                    STYLED(ELEMENTS,"border","1px solid orange");
                    STYLED(ELEMENTS,"padding","2%");
                    STYLED(ELEMENTS,"border-radius","5px");
                    STYLED(ELEMENTS,"background","#000000");

                        CLICK(ELEMENTS,()=>{

                            DIV("","100%","auto","green","block","hidden","auto",(ELEMENTIS)=>{

                                STYLED(ELEMENTIS,"position","absolute");
                                STYLED(ELEMENTIS,"top","30%");
                                STYLED(ELEMENTIS,"bottom","0");
                                STYLED(ELEMENTIS,"border-radius","10px 10px 0px 0px");

                                HEADER(ELEMENTIS,"transparent",(ELSESE)=>{

                                    LEFTTEXT(ELSESE,"h1","#FFFFFF","2%","20px",data.Name,()=>{

                                    });

                                    RIGHTIMAGE(ELSESE,WHITECLOSEICON,"","20px","20px","2%",(ELES)=>{

                                        CLICK(ELES,()=>{

                                            STYLED(ELEMENTIS,"display","none");

                                        });

                                    });

                                });

                                DIV(ELEMENTIS,"100%","auto","green","block","auto","auto",(ELEMENTISA)=>{

                                    STYLED(ELEMENTISA,"position","absolute");
                                    STYLED(ELEMENTISA,"top","50px");
                                    STYLED(ELEMENTISA,"bottom","0");
                                    STYLED(ELEMENTISA,"border-top","1px solid #cdcdcd");

                                    TEXT(ELEMENTISA,"p","#FFFFFF","auto","20px",data.Data,(ELEMENTS)=>{

                                    });

                                    BREAK(ELEMENTISA);

                                    INLINEVIEW(ELEMENTISA,"100%","50px","transparent","hidden","auto",(ELSYES)=>{

                                        BUTTON(ELSYES,"45%","45px","orange","#FFFFFF","10px","Call Now","",(ELESIS)=>{

                                            CLICK(ELESIS,()=>{

                                                CALL("+254794094414");

                                            });

                                        });

                                        BUTTON(ELSYES,"45%","45px","orange","#FFFFFF","10px","Whats App Now","",(ELESIS)=>{

                                            CLICK(ELESIS,()=>{

                                                WHATSAPP("+254794094414");

                                            });

                                        });

                                    });

                                });
                            
                            });

                        });

                });

                    FOOTER(ELS,"transparent",(ELSE)=>{

                        LEFTIMAGE(ELSE,WHITEPHONEICON,"green","20px","20px","2%",(ELES)=>{

                            STYLED(ELES,"padding","5%");
                            STYLED(ELES,"border-radius","100%");

                            CLICK(ELES,()=>{

                                CALL("+254794094414");

                            });

                        });

                        RIGHTIMAGE(ELSE,WHITEWHATSAPPICON,"green","30px","30px","2%",(ELES)=>{

                            STYLED(ELES,"padding","5%");
                            STYLED(ELES,"border-radius","100%");

                            CLICK(ELES,()=>{

                                WHATSAPP("+254794094414");

                            });

                        });

                    });

            });

        });

    });

};

const ABOUTUS=(ELEMENTSERE)=>{

    DIV(ELEMENTSERE,"100%","100%","transparent","block","auto","",(ELEMENT)=>{

    const Message=`Renowned African witch doctor and spiritual Healer.
    <br><br>
    With decades of experience in traditional African healing practices, Dr. Mjomba Ali combines ancestral wisdom, spiritual guidance and potent rituals to provide transformative solutions to life's most challenging problems. Whether you are seeking help with love, prosperity protection and spiritual guidance.
    <br><br>
    Dr.Mjombali offers authentic, personalised services rooted in ancient African traditions.
    <br><br>
    As a trusted healer Dr. Mjomba Ali works with the forces of nature, ancestral spirits, and powerful rituals to bring balance, healing, and clarity to your life. With a compassionate heart and profound knowledge, Dr. Mjombali is committed to chihelping you overcome obstacles and and achive peace, succes, and happiness.
    <br><br>
    Explore the services offered, and discover how Dr.Mjombali can guide you on your path to spiritural renewal and empowerment.
    `;

    TEXT(ELEMENT,"h1","forestgreen","5% 3% ","23px","Doctor Mjombali",(ELEMENTS)=>{

    });

    TEXT(ELEMENT,"p","#000000","2% 3% ","18px",Message,(ELEMENTS)=>{

      STYLED(ELEMENTS,"text-align","left")

    });

    DIV(ELEMENT,"100%","100px","forestgreen","inline-flex","","",(ELEMENTS)=>{

      TEXT(ELEMENTS,"h1","white","5%","18px","Policies",(ELEMENTS)=>{

        CLICK(ELEMENTS,()=>{

        });

      });

      TEXT(ELEMENTS,"h1","white","5%","18px","Tech Support",(ELEMENTS)=>{

        CLICK(ELEMENTS,()=>{

        });

      });

      TEXT(ELEMENTS,"h1","white","5%","18px","App",(ELEMENTS)=>{

        CLICK(ELEMENTS,()=>{

        });

      });

    });

  });

};

const DESKTOPVERSION=()=>{
    
  CLEAR();

};