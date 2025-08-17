const LINK="https://docs.google.com/spreadsheets/d/1PjMlNtQy4kWMgcd9_J8b1XyXYEklEeGa3w7kDw786IQ/edit?usp=sharing";

const NOVASTART=()=>{

    APPMODE("White");

    SWITCHER("800px",()=>{

        DESKTOPVERSION();

    },()=>{

        MOBILEVERSION();

    });

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

            });

            TEXT(ELEMENTS,"h1","white","","18px","Contact Us",(ELEMENTS)=>{

            });

        });

    },"transparent",(ELEMENT)=>{

        STYLED(ELEMENT,"top","100px");

        DIV(ELEMENT,"95%","250px","transparent","block","hidden","2%",(ELS)=>{

            STYLED(ELS,"border-radius","5px");

            TEXT(ELS,"h1","","5% 5% ","25px","Traditional African Healer",(ELEMENTS)=>{

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

    });

};

const DESKTOPVERSION=()=>{
    
    CLEAR();

};