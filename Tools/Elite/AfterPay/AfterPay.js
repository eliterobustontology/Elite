const HOMEPAGE=()=>{

    APPMODE("#333333");

    IMAGE("","logo.png","transparent","100px","100px","2% auto",(ELEMENT)=>{

        STYLED(ELEMENT,"border-radius","100%");
        STYLED(ELEMENT,"padding","2%");

    });

    TEXT("","h1","#ffffff","2%","20px","Elite Robust Ontology",()=>{

    });

    TEXT("","p","#ffffff","2%","14px","Thank You For Supporting.",()=>{
        
    });

    DIV("","95%","50px","","inline-flex","hidden","2% auto",(ELEMENT)=>{

        TEXT(ELEMENT,"p","#ffffff","auto 2%","14px","Name :",()=>{
        
        });

    });

    DIV("","95%","50px","","inline-flex","hidden","2% auto",(ELEMENT)=>{

        TEXT(ELEMENT,"p","#ffffff","auto 2%","14px","Amount :",()=>{
        
        });

    });

    DIV("","95%","50px","","inline-flex","hidden","2% auto",(ELEMENT)=>{

        TEXT(ELEMENT,"p","#ffffff","auto 2%","14px","Reference :",()=>{
        
        });

    });

    DIV("","95%","50px","","inline-flex","hidden","2% auto",(ELEMENT)=>{

        TEXT(ELEMENT,"p","#ffffff","auto 2%","14px","Email :",()=>{
        
        });

    });

    DIV("","95%","50px","","inline-flex","hidden","2% auto",(ELEMENT)=>{

        TEXT(ELEMENT,"p","#ffffff","auto 2%","14px","Date :",()=>{
        
        });

    });

    TEXT("","p","#ffffff","2%","14px","Reciept Number",()=>{
        
    });

};

/*
    SESSIONDEJSONDATA("urlInfo", (data)=>{

        GETDATA("https://docs.google.com/spreadsheets/d/1wez9KwMHDo9WVgofpMJL4CqB9gJSaoJGIk6M02eKjPQ/edit?usp=sharing","ElitePay",(datata)=>{
            
            FINDER(datata, "ID", data.query.ID, (Information)=>{

                console.log(Information)

                DetailsHolder.innerHTML=`

                    <h3>Payment Recipt</h3>

                        <p>${Information.ID}</p>

                    <div class="Holders">

                        <p class="NameHolder">Name : </p>

                        <p class="NamerHolder">${Information.Name}</p>
                        
                    </div>

                    <div class="Holders">

                        <p class="NameHolder">Amount : </p>

                        <p class="NamerHolder">UGX ${Information.Amount}</p>
                        
                    </div>

                    <div class="Holders">

                        <p class="NameHolder">Email : </p>

                        <p class="NamerHolder">${Information.Email}</p>
                        
                    </div>

                    <div class="Holders">

                        <p class="NameHolder">Contact : </p>

                        <p class="NamerHolder">${Information.Number}</p>
                        
                    </div>

                    <div class="Holders">

                        <p class="NameHolder">Reference : </p>

                        <p class="NamerHolder">${Information.Reason}</p>
                        
                    </div>

                    <P>Please Be Patient ,Completing Processing</P>

                    <p>Please Wait</p>
                
                `;

                setTimeout(() => {

                    open(Information.Website);
                    
                }, 2000);

            });

        })

    });
    */