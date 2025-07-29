const HOMEPAGE=()=>{

    BODIED();

    APPMODE("#333333");

    CLEAR();

<<<<<<< HEAD
    const style = document.createElement('style');

    style.textContent = `

        body{
            font-size:15px;
        }
    
        header{
            width:100%;
            height:50px;
            background:forestgreen;
            color:white;
            display:inline-flex;
        }

        h1{
            margin:auto;
            color:#ffffff;
            
        }

        .DomainNameHolder{
            position:absolute;
            width:100%;
            height:auto;
            top:50px;
            bottom:50px;
            background:red;
            diplay:block;
            color:#ffffff;

        }

        .None{
            background:forestgreen;
            width:45%;
            height:200px;
            margin:1.2%;
            border-radius:10px;
            border:1px solid forestgreen;
            display:inline-table;
            position:relative;
            color:#ffffff;
        }

        .Names{
            font-size:18px;
            width:100%;
        }

        .Footer{
            position:absolute;
            bottom:0px;
            background:orange;
            height:50px;
            width:100%;
            left:0;
            color:#ffffff;
            border-radius:10px;
        }

        input{
            color:#ffffff;
            width:95%;
            height:32px;
            border-radius:10px;
            background:transparent;
            border:1px solid forestgreen;
        }

        .PayNow{
            width:95%;
            height:50px;
            background:forestgreen;
            border:none;
            margin-top:5%;
            border-radius:20px;
            color:white;
        }

        #Cancel{
            background:brown;
        }
    
    `;

    document.head.appendChild(style);

    DISPLAY("",`

        <header>

            <h1>ELITE HOSTING</h1>
        
        </header>

        <div class="DomainNameHolder">

            <h3>Services Names</h3>

            <br><br>

            <p>Please Wait</p>
        
        </div>
        
    `);

    const DomainNameHolder=document.querySelector(".DomainNameHolder");

    GETDATA("https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing","APPMANAGER",(data)=>{

        DISPLAY(DomainNameHolder,"");

        REDUX(data,(Element)=>{

            ELEMENTED(DomainNameHolder,"button",(ELMENTSE)=>{

                ELMENTSE.classList.add("None");

                DISPLAY(ELMENTSE,`

                    <h1 class="Names">${Element.AppName}</h1>

                    <footer class="Footer">

                        <p>PAY</p>
                    
                    </footer>
                    
                `);

                CLICK(ELMENTSE,()=>{

                    DISPLAY(DomainNameHolder,`

                        <h1>${Element.AppName}</h1>

                        <br>

                        <input type="text" id="Emails" placeholder="Enter Email"/>

                        <br><br>

                        <input type="number" id="Years" placeholder="Enter Years To Host"/>

                        <button id="Payn" class="PayNow" >PAY NOW</button>

                        <button id="Cancel" class="PayNow" >Cancel</button>

                    `);

                    const Cancel=document.querySelector("#Cancel");

                    CLICK(Cancel,()=>{

                        location.reload();

                    });

                    const Pazes=document.querySelector("#Payn");

                    CLICK(Pazes,()=>{

                        Pazes.innerHTML="Please Wait,Generating Payment."

                        const Emails=document.querySelector("#Emails");

                        const Years=document.querySelector("#Years");

                        if (Emails.value) {

                            if (Years.value) {

                                const AMOUNT=Years.value*100000;

                                ELITEPAY(AMOUNT,"Paying For Hosting",Emails.value,"",Element.AppName,"","https://eroinnovations.site/AfterHosting.html",(datata)=>{

                                    open(datata);

                                });
                            
                            } else {

                                alert("Enter Years To Pay");

                            };
                            
                        } else {

                            alert("Enter Payee Email");

                        };
                        
                    });

                });
            });

            console.log(Element);
=======
    HEADER("","forestgreen",(ELEMENT)=>{

        TEXT(ELEMENT,"","#ffffff","","20px","ELITE HOSTING",()=>{
>>>>>>> 8766c696513a6c3a80669cef92a529346b324b4e

        });

    });

<<<<<<< HEAD
=======
 



>>>>>>> 8766c696513a6c3a80669cef92a529346b324b4e
};

HOMEPAGE();