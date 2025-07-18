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

    TEXT(ELEMENT,"p","forestgreen","auto","18px","About Doctor Mjombali",(ELEMENTS)=>{

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

      RIGHTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","5%",(ELES)=>{

      });

      CLICK(ELEMENTS,()=>{

        WHATSAPP("+254794094414");

      });

    });

    TEXT(ELEMENT,"h1","forestgreen","auto 3% ","25px","Our Famous Rituals",(ELEMENTS)=>{

    });

    DIV(ELEMENT,"95%","100%","transparent","block","","auto",(ELEMENTS)=>{

      DIV(ELEMENTS,"45%","45%","transparent","inline-table","","2%",(ELEMENTS)=>{

        IMAGE(ELEMENTS,"data:image/webp;base64,UklGRswJAABXRUJQVlA4IMAJAACwPQCdASrIAMgAPp1Mn0slpCKiptTp+LATiWlu5Kgek1+MqZRhfUoHgN5H1I2bRuvtvmxg8uWutRnne/Y+p9GD9gCnemqiOdnk9wQ+cH4GR0F+utcRX1BsTdOSgy5VVZ6E1An4Thl8mUW/NiAu1aC44u2bpcLZa7rdhLm10d+YEoR4Ny+u4Q56yZ2upeLwY+27xfpFtj/iSiLxE1oNkwRwxy9Ri6UQ3aTW0O1tG0T1tnBKIsn0qG0nEXMr/nlSixGRdNgC63vdyKP+JVEn+ua0yDcn/+MXJekwVMzLhv9u44YYylDdqcBwUrbTpSBgmYdHZLh4iAkgTHpl18Amrgu4VWDK/pQO+guPemFFu4cOfGNyQPiL9Mb3ATBjuISHXzO2ogSDNTfJtu9DRfHJMP/ptkTaCQ1rveUv9TN+Ry9EI1i+TDDJcuJbPftX5t9Z91CFq/8/oDxiv1L22a+sMnObKTkRQXW3m7u/XTNgdICxZQpAlEGxqR0hdio4yjAl0eJOC7hnyEfelUeRekdKGLVEQub8FwAxHvO+Dix2fhPHI75iRKnHXmrKaMpgR3sbAGNmQcw74Yf//U1WYT3l2JhFa1UmplfYfQ6StRsAS3+61De3v16OlGEMWUFMatYwFAickdRGFqosagOr+Qdj+S073b4tLcGAAP74vieez8ukZlVHEV7DR2LKZw6pKUZy3w75hPxIB/FhA3iH+8KF+oYkxKrYamietckNzx9UcgP7GNG7jBz3QYjANP1PD4nL6ewkCIknmflPFy5Nh8sMEVVbzjf45Cf18Pl+XTtrUuXX4ca+Bs0yEI+DJe2DNsMtOGOmxsv+IkpJwptSgwNCmzYF547CZ4KSY6B3Kf53HD3p82qXj2pigy+1hAPxqLUM+eRZw9E13qrPoC6vV+PDnCmV5kbmzUxRdiQD7G0tkkfh6irqoqXHi6myFb0h/pjdH498oS2jtJG7ASS8AJVAwnoeEEa3hiYewNaDcdV2Hjof+05yl4V+m/QaQoFzuG67KUYccNNXK/uCyGy4m9dusI0j+0ykDytwiQ4mj3q2JnmGKHAEcQljOJMAA6coP4df+g5YTHyolIrWMBDdTw93wFIhmKTjnMwK4ejeKF5sOfpiB09dFD30FEtfOQN5XHTigz/0GzTf/Q2Fk0kK7n0Xs+7Ff99PCRQ3cW4Da3GxkME3qyfopJjwKRKpSxwXOsrWwH/o6p+71V4johL/4hJ29995BvlmvpH2/QZffv/mnCsMbtAFqpMh+b2iY/Y+nLEtPbd5zDODBP5GAlkZoWXV8VRpLACcIgI1LR0I16rr36oKPccPbYvAr330JaZpyfyw0yHyqk+utcQ9L4P3nA1tTFnfricR+IM9r10k/lhbD70jEgqDdifs1DEOy2c7svtijS8suV+0ySREgXhFVgsUM+W60jTNLH6dGZPhZCxveg0IEJbM9Tty6xIakT88JXdJNcIttN1A9FpTME8exgr7+dK+VYTaW34g18OXbHvDpLW9ZUlhvo7F3n4XQyLrYYoTDDsUjzJAjcyZwNSqFkQ4+idKGW50PD+NZOuAkVu9NdnMyLxklGlgpDIZuGmIcneC8cuqWSw8GSmZmHbJlhrzuSs7KeCfnmUswqatc/ANIp2POlNApxDGiUm9rmKAqHiZ+hvzgBmHQjyg8PSLVzFCFCpa2uk726TY86pOSS3iGgQMCUZ7ZHDURu+XbWFqcMjMAJ6UAfKBN4Sg6Qj96kdlnswYIWx7hGCFSa5kQg5CFsTt/SK94hGmJ64S32tIGku03xfcm22FVeDHdJiOwjdTw/g44YN+iIQf3f1s6AnKp6bXB2foj0GtX2R09qAu/G4RyKleWdKvwbxoijuAQC8aGT7DOh2iYkjRJtTfjqQXShFntfr6WxhNwlg5xAsqjGj011S6qEs2E/fWlhk0AAKMTnJfWXLyilbyoyt6QbRp/lMHzBbe2xGqvV7lU0bxxtGHTBPjgYAmZaxFJ+w1YnAythcrv1/2ybad8sXHbxuIw6T1zKdiMDBH40rUfmVhR7IOpP+1JMQKHX0T5u+q5+xaDK8ugX+8C91rri8JON9r7Mn0yB7NLYrKZ+9RsTzEGBsMZkFcOPRPg5UizfM4MRCIrTG2JMXNbBLXWFVXTSYm1JyiSpNS3PJrsiIqsFBTud7EWvbMJM+XhcPbtj4puoBVqmu93HPsQ10dutjkJ9uGxRG7lhaBZgkmTv+qGIfZuRuN7klgBzJwuNMUpLeytFia3uSbnbQ1d8amDiHflPeEQPNCf/VjR6mITSnyhEvx2LZuONjpZM/DYmISaos9kkjiVGJjZEhoH4jQ57GUl3ERmIGBElL2Jg+8UysPlDey/p/BSALT+fhU7USSvN9XbWgU3uYgu0N0tPCxf1WfyoAZhS6faRO9LiRSEMSa0JBmc3qzB2wYt6cB1bGCmSBVtp4Hkms6ZG+yV3N1KXGIoqKrDaDU/n8+cT+47Vbfo2eUEPNX04yjxUhPs1sHtEm9ligN4otexXKwXmuFWWZz85pCNNz/grr/OzuPs2wzQHXSZ9KJNhsWeKhdjcvfOAUHAM0B8C8UK84RUn7l8+J7655rrK+//pD+qB292KCRvMxPpdnM1JR+Z0VBylAU6L3eVlmYQHCoytXqjO7/TNKnHr8sHz1W9kiErGYoQU3BJuCqb4UeARJF/pVNg5OZlGbgmnONHoYhWeLY/Y+k9jIdk1VXTNkCbpTaNq4HaenHpr+3sQzomYWwQwHVgDunKBv6UjaNEPkia66HhEwIJ6SRgUgafrE3637peDReSQudCF1j65cZmO296KkWiuCmTh5T270Cq041iNbbIp1OaGgAV1ACumDuZJ30LDhD6BcsEWRLD9mZqDlRZ6WxANyWB+BmojRxPnJu1aH+oftFlGNqfEZxDGGiQqImHl2k7NdmIIhcfuw1vgIe7/p1+YDPkHPu4zYL4JODQJVg+Qee01avxcG1HkVsd835l54XfPkGU9+Qt4NgJn+rgFsdMc2uGx2NYB0E+ToXWngqQQZ6eorbaFWSZC4NSAxtHNcFg7iQ1U+p11xABa9MQ904RBpnEa/jHix/eVBBcCb6EIJJJEeVh95aljm2i3TKV8kjgCiuBEvm8t+KlhB6n9KzGp55OZmignyEYNtkkmHeWuwKyUCOun9SLCvAr5YgVJdY5zawkL1Q4ISYKuIEc+ByPKhcruULDm9xdXm7e2GyhoEYfrPZgUMQgkiPRgx8TqHLAjwDPHaxItmOfkfHNGeIScc9L64bPLFP0D93AT/FlkH1bGnvEZJ4fRp0DjT4l2CfSHfNObFyYAAAAAA=","","100%","100%","",()=>{

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

        IMAGE(ELEMENTS,"data:image/webp;base64,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","","100%","100%","",()=>{

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

      LEFTIMAGE(ELEMENTS,WHITEWHATSAPPICON,"transparent","20px","20px","10%",(ELES)=>{

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