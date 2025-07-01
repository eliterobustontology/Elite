const NOVASTART=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftIcon' src='${WHITESUBSCRIPTIONICON}'/>

            <h1 class='RightText'>Wallet</h1>

        </header>

        <div id='HomeDiv' class='RelativeDiv'>

            <div onclick='DEPOSITPAGEROUTER()' id='HomesDivs' class='TableView'>

                <p>Deposit</p>
            
            </div>
        
        </div>
        
    `);

};

const DEPOSITPAGEROUTER=()=>{

    ROUTE(' ',DEPOSITPAGE,'HOMEPAGE');

};

const DEPOSITPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>

            <h1 class='RightText'>Deposit</h1>

        </header>

        <div id='HomeDiv' class='RelativeDiv'>

            <br>

            <input id='Amount' class='RoundInput' type='tel' placeholder='Enter Amount'/>

            <button class='SendButton' >Send</button>
        
        </div>
        
    `);

    const AMOUNT=NAMING('#Amount');

    const SENDBUTTON=NAMING('.SendButton');

    const HOMEDIV=NAMING('#HomeDiv');

    FUNCTIONED(AMOUNT,'input',()=>{

        CHECKER(AMOUNT.value <=499,()=>{

            TOAST('Mininium Amount is 500 shs');

        });

    });

    CLICK(SENDBUTTON,()=>{

        CONDITION(AMOUNT.value <= 499,()=>{

            TOAST('Mininium Amount is 500 shs');

        },()=>{

            TOAST('Please Wait');

            ELITEPAY('Elite','eroinnovations9@gmail.com',AMOUNT.value,'Deposit','https://eroinnovations.site/AfterPay.html',new Date(),'https://eroinnovations.site',(data)=>{

                WEBSITE(data);

            });

        });

    });

};