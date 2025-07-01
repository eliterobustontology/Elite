const API='https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing';

const NOVASTART=()=>{

    HOMEPAGEROUTER();

    DOWNLOADDATA();

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const DOWNLOADDATA=()=>{

    STOREINDEXEDDATA(API,'APPMANAGER');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='MenuHolder'>

            <br>

            <h1>Manager</h1>

            <br>

            <button class='InlineButton'>

                <p class='LeftText' >Home</p>

                <img class='RightIcon' src='${WHITEHOMEICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Projects</p>

                <img class='RightIcon' src='${WHITEFOLDERICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >DataBases</p>

                <img class='RightIcon' src='${WHITELIBRARYICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Account</p>

                <img class='RightIcon' src='${WHITEUSERPROFILEICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Settings</p>

                <img class='RightIcon' src='${WHITESETTINGSICON}'/>
            
            </button>

            <button class='InlineButton' onclick='RELOAD()'>

                <p class='LeftText' >Sync</p>

                <img class='RightIcon' src='${WHITERETRYICON}'/>
            
            </button>

            <footer>

                <p class='LeftText' >Log Out</p>

                <img class='RightIcon' src='${WHITELOGOUTICON}'/>
            
            </footer>

        </div>

        <div class='DataCenter'>

            <div id='loadingIcon' class="spinner"></div>
        
        </div>
        
    `);

    PROJECTSPAGE();

};

const PROJECTSPAGE=()=>{

    const HOMEDIV=NAMING('.DataCenter');

    const loadingIcon=NAMING('#loadingIcon');

    GETINDEXEDDATA('APPMANAGER','APPMANAGER',(data)=>{

        console.log(data);

        STYLED(loadingIcon,'display','none');

        CREATEELEMENT(HOMEDIV,'div','HomeProjectsViews',(ELEMENT)=>{

            DISPLAY(ELEMENT,`

                <img class='ProjectImage' src='${data.AppIcon||WHITEFOLDERICON}'/>

                <footer class='ProjectFooter'>

                    <p>${data.AppName}</p>
                
                </footer>
                
            `);

        });

    });

};