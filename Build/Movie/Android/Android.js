const NOVASTART=()=>{

    OPERATINGSYSTEM();

    //ACCOUNTCHECKER(HOMEPAGEROUTER(),EMAILVERIFICATIONPAGEROUTER(),LOGINPAGEROUTER());

    HOMEPAGEROUTER();

};

const LOGINPAGEROUTER=()=>{

    ROUTE('',LOGINPAGE,'LOGINPAGE');

};

const LOGINPAGE=()=>{

    DISPLAY('',`

        <br><br>

        <h1 class='AppName'>Movifiy</h1>

        <br>

        <p>Watch.Save.Share</p>

        <br>

        <h3>Login to Watch</h3>

        <br>

        <input class='RoundInput' type='email' placeholder='UserEmail'/>

        <input class='RoundInput' type='password' placeholder='*********'/>

        <button class='LoginButton' onclick='HOMEPAGEROUTER()'>LogIn</button>

        <br><br

        <h1>OR</h1>

        <br><br>

        <div id='OptionsHolder' class='TopNav'>

           <button onclick='RESETPASSWORDROUTER()' class='OptionButtons'>Reset Password</button>
           
           <button onclick='CREATEACCOUNTPAGEROUTER()' class='OptionButtons'>Create Account</button>   
        
        </div>
        
    `);

};

const CREATEACCOUNTPAGEROUTER=()=>{

    ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <br><br>

        <h1 class='AppName'>Movifiy</h1>

        <br>

        <p>Watch.Save.Share</p>

        <br>

        <h3>Create to Watch</h3>

        <br>

        <input class='RoundInput' type='text' placeholder='UserName'/>

        <input class='RoundInput' type='email' placeholder='UserEmail'/>

        <input class='RoundInput' type='password' placeholder='*********'/>

        <button class='LoginButton'>Create Account</button>

        <br><br

        <h1>OR</h1>

        <br><br>

        <div id='OptionsHolder' class='TopNav'>

           <button onclick='ACCOUNTPOLICIESPAGEROUTE()' class='OptionButtons'>Policies</button>
           
           <button onclick='LOGINPAGEROUTER()' class='OptionButtons'>Log In</button>   
        
        </div>
        
    `);

};

const RESETPASSWORDROUTER=()=>{

    ROUTE(' ',RESETPASSWORD,'LOGINPAGE');

};

const RESETPASSWORD=()=>{

    DISPLAY('',`

        <br><br>

        <h1 class='AppName'>Movifiy</h1>

        <br>

        <p>Watch.Save.Share</p>

        <br>

        <h3>Reset to Watch</h3>

        <br>

        <input class='RoundInput' type='email' placeholder='UserEmail'/>

        <button class='LoginButton'>Recover Account</button>

        <br><br

        <h1>OR</h1>

        <br><br>

        <div id='OptionsHolder' class='TopNav'>

           <button onclick='LOGINPAGEROUTER()' class='OptionButtons'>Log In</button>
           
           <button onclick='CREATEACCOUNTPAGEROUTER()' class='OptionButtons'>Create Account</button>   
        
        </div>
        
    `);

};

const EMAILVERIFICATIONPAGEROUTER=()=>{

    ROUTE('',EMAILVERIFICATIONPAGE,'EMAILVERIFICATIONPAGE');

};

const EMAILVERIFICATIONPAGE=()=>{

    DISPLAY('',`

        <br><br>

        <h1 class='AppName'>Movifiy</h1>

        <br>

        <p>Watch.Save.Share</p>

        <br>

        <h3>Verify to Watch</h3>

        <br>

        <input class='RoundInput' type='tel' placeholder='Verification Code'/>

        <button class='LoginButton'>Verify</button>

        <br><br

        <h1>OR</h1>

        <br><br>

        <div id='OptionsHolder' class='TopNav'>

           <button onclick='LOGINPAGEROUTER()' class='OptionButtons'>Resend Code</button>
           
           <button onclick='CREATEACCOUNTPAGEROUTER()' class='OptionButtons'>Wrong Email</button>   
        
        </div>
        
    `);

};

const ACCOUNTPOLICIESPAGEROUTE=()=>{

    ROUTE(' ',ACCOUNTPOLICIESPAGE,'CREATEACCOUNTPAGE');

};

const ACCOUNTPOLICIESPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='CREATEACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Policies</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <div class='TrendingMovie'></div>

            <div class='TopNav'>

                <h1 class='LeftText'>Aminations</h1>

                <img class='RightIcon' src='${WHITENEXTICON}'/>
            
            </div>

            <div class='TrendingMovie'></div>

            <div class='TopNav'>

                <h1 class='LeftText'>Movies</h1>

                <img class='RightIcon' src='${WHITENEXTICON}'/>
            
            </div>

            <div class='TrendingMovie'></div>

            <div class='TrendingMovie'></div>

            <div class='TopNav'>

                <h1 class='LeftText'>Nigerian</h1>

                <img class='RightIcon' src='${WHITENEXTICON}'/>
            
            </div>

            <div class='TrendingMovie'></div>

            <br><br><br>
        
        </div>
        
        <footer class='RoundFooter'>

            <div class='FooterImageDiv'>

                <img class='Icon' src='${WHITELIBRARYICON}'/>

                <p>Catergories</p>
            
            </div>

            <div class='FooterImageDiv'>

                <img class='Icon' src='${WHITESCREENICON}'/>

                <p>Watch</p>
            
            </div>

            <div class='FooterImageDiv' onclick='USERACCOUNTPAGEROUTER()'>

                <img class='Icon' src='${WHITEUSERICON}'/>

                <p> Account</p>
            
            </div>
        
        </footer>
        
    `);

};

const USERACCOUNTPAGEROUTER=()=>{

    ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

};

const USERACCOUNTPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITESINGLEBACKICON}'/>
        
            <p class='RightText'>Profile</p>

        </header>

        <div class='HeaderDiv'>

            <div class='TrendingMovie'></div>

            <button class='InlineButton' onclick='COMMUNITYPAGEROUTER()'>

                <p class='LeftText'>Community</p>

                <img class='RightIcon' src='${WHITEGROUPICON}'/>

            </button>

            <button class='InlineButton' onclick='BUSINESSPAGEROUTER()'>

                <p class='LeftText'>Business</p>

                <img class='RightIcon' src='${WHITECREATEDONICON}'/>

            </button>

            <button class='InlineButton' onclick='NOTIFICATIONSPAGEROUTER()'>

                <p class='LeftText'>Notifications</p>

                <img class='RightIcon' src='${WHITENOTIFICATIONICON}'/>

            </button>

            <button class='InlineButton' onclick='SETTINGSPAGEROUTER()'>

                <p class='LeftText'>Settings</p>

                <img class='RightIcon' src='${WHITESETTINGSICON}'/>

            </button>

            <button class='InlineButton' onclick='USERACCOUNTPOLICIESPAGEROUTER()'>

                <p class='LeftText'>Privacy Policy</p>

                <img class='RightIcon' src='${WHITEPRIVACYPOLICYICON}'/>

            </button>

            <button class='InlineButton' onclick='HELPPAGEROUTER()'>

                <p class='LeftText'>Help</p>

                <img class='RightIcon' src='${WHITEHELPICON}'/>

            </button>

            <button class='InlineButton' onclick='CONTACTUSPAGEROUTER()'>

                <p class='LeftText'>Contact Us</p>

                <img class='RightIcon' src='${WHITEPHONEICON}'/>

            </button>

            <button class='InlineButton' onclick='DEVELOPERPAGEROUTER()'>

                <p class='LeftText'>Developer</p>

                <img class='RightIcon' src='${WHITEMOBILEDEVELOPMENTICON}'/>

            </button>
        
        </div>
        
    `);

};

const USERACCOUNTPOLICIESPAGEROUTER=()=>{

    ROUTE(' ',USERACCOUNTPOLICYPAGE,'USERACCOUNTPAGE');

};

const USERACCOUNTPOLICYPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Policies</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};

const HELPPAGEROUTER=()=>{

    ROUTE(' ',HELPPOLICYPAGE,'USERACCOUNTPAGE');

};

const HELPPOLICYPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Help</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(' ',CONTACTUSPAGE,'USERACCOUNTPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Contact Us</p>

        </header>

        <div class='HeaderDiv'>

            <button id='EmailUs' class='InlineButton'>

                <p class='LeftText'>Email Us</p>

                <img class='RightIcon' src='${WHITEGMAILICON}'/>

            </button>

            <button id='CallUs' class='InlineButton'>

                <p class='LeftText'>Call Us</p>

                <img class='RightIcon' src='${WHITEPHONEICON}'/>

            </button>

            <button id='WebSite' class='InlineButton'>

                <p class='LeftText'>Visit Our Site</p>

                <img class='RightIcon' src='${WHITEINTERNETICON}'/>

            </button>

            <br><br>

            <p>Powered By Elite Robust Ontology</p>
            
        </div>

    `);

    const EmailUs=NAMING('#EmailUs');
    
    CLICK(EmailUs,()=>{
        EMAIL('eroinnovations9@gmail.com');
    });

    const CallUs=NAMING('#CallUs');
    
    CLICK(CallUs,()=>{
        Call('+256768058124');
    });

    const WebSite=NAMING('#WebSite');
    
    CLICK(WebSite,()=>{
        WEBSITE('https://eroinnovations.site');
    });

};

const DEVELOPERPAGEROUTER=()=>{

    ROUTE(' ',DEVELOPERPAGEPAGE,'USERACCOUNTPAGE');

};

const DEVELOPERPAGEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Developers</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};

const NOTIFICATIONSPAGEROUTER=()=>{

    ROUTE(' ',NOTIFICATIONSPAGEPAGE,'USERACCOUNTPAGE');

};

const NOTIFICATIONSPAGEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Notifications</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};

const BUSINESSPAGEROUTER=()=>{

    ROUTE(' ',BUSINESSPAGEPAGE,'USERACCOUNTPAGE');

};

const BUSINESSPAGEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Business</p>

        </header>

        <div class='HeaderDiv'>

            <button class='InlineButton'>

                <p class='LeftText'>Advertise With Us</p>

                <img class='RightIcon' src='${WHITEMEGAPHONEICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Donate</p>

                <img class='RightIcon' src='${WHITESUBSCRIPTIONICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Share Holder</p>

                <img class='RightIcon' src='${WHITEADDPERSONICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Sell With Us </p>

                <img class='RightIcon' src='${WHITESECRETCODEICON}'/>

            </button>
        
        </div>

    `);

};

const SETTINGSPAGEROUTER=()=>{

    ROUTE(' ',SETTINGSPAGE,'USERACCOUNTPAGE');

};

const SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Settings</p>

        </header>

        <div class='HeaderDiv'>

            <button class='InlineButton'>

                <p class='LeftText'>App Mode</p>

                <img class='RightIcon' src='${WHITECONTRASTICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>App Lock</p>

                <img class='RightIcon' src='${WHITELOCKICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>App Version </p>

                <img class='RightIcon' src='${WHITEAPPICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>App Sync </p>

                <img class='RightIcon' src='${WHITERETRYICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Parental Control</p>

                <img class='RightIcon' src='${WHITEPARENTALCONTROL}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Delete Account</p>

                <img class='RightIcon' src='${WHITEDELETEICON}'/>

            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Log Out</p>

                <img class='RightIcon' src='${WHITELOGOUTICON}'/>

            </button>
        
        </div>

    `);

};

const COMMUNITYPAGEROUTER=()=>{

    ROUTE(' ',COMMUNITYPAGE,'USERACCOUNTPAGE');

};

const COMMUNITYPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='USERACCOUNTPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Community</p>

        </header>

        <div class='HeaderDiv'>

            <br>

            <h1>Welcome</h1>
        
        </div>

    `);

};