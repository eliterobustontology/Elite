const APPLOGO='https://eroinnovations.github.io/FrameWork/Library/Assets/Images/Posts/Elite/CompanyLogo.png';

const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    VISITOR(API,'Visitors');

    BODY();

    APPMODE('#333333');

    ROUTE('',HOMEPAGE,HOMEPAGE);

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DELETEDATA('','Direct');

    DISPLAY('',`

        <div class='RelativeDiv'>

            <img class='AppLogo' src='${APPLOGO}'/>

            <p>Imagine.Innovate.Inspire</p>

            <br>
       
            <div class='TopNav'>

                <p onclick='ABOUTUSPAGEROUTER()' >About Us</p>

                <p onclick='DEVELOPERPAGEROUTR()'>Developers</p>

                <p onclick='CONTACTUSPAGEROUTR()'>Contact Us</p>
            
            </div>

            <br><br>

            <h1>Welcome</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology is a Cloud Native Based Company Located In Mbale and We Venture in <b>Mobile App Development</b>,<b>Desktop Software Development</b>,<b>Website Development</b> and <b>System Design and Development</b>.</p>

            <br>

            <p class='LeftText'>Elite Robust Ontology has Ventured in Many Projects and Parthered with many Companies to Digitilise there Business and Enterprises and here is a list of Parther Companies that we Power with Various Solutions.</p>

            <br>

            <h1>Our Partners</h1>

            <br>

            <div class='ParthnersDiv'>

                <p>...Please Wait...</p>
        
            </div>

            <br><br>

        </div>
        
    `);

    PARTHNERS();

};

const DIRECTDONATE=()=>{

    STOREDATA('','Direct','True');

    DONATEPAGEROUTER();

};

const PARTHNERS=()=>{

    CHECKER(navigator.onLine,()=>{

        const ParthnersDiv=NAMING('.ParthnersDiv');

        GETDATA(API,'Parthers',(data)=>{

            DISPLAY(ParthnersDiv,'');

            REDUX(data,(element)=>{

                CREATEELEMENT(ParthnersDiv,'div','ParthnerMiniDivs',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`

                        <img src='${element.Logo||APPLOGO}'/>

                        <footer class='ParthnerFooter'>
                        
                            <p>${element.Name}</p>

                        </footer>
                        
                    `);

                    CLICK(ELEMENT,()=>{

                        WEBSITE(element.Link);

                    });

                });

            });

        },(data)=>{

            console.log(data);

        });

    });

};

const DEVELOPERPAGEROUTR=()=>{

    ROUTE(' ',DEVELOPERPAGE,'HOMEPAGE');

};

const DEVELOPERPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Developers</p>

        </header>

        <div id='SectionDiv' class='RelativeDiv'>

            <br>

            <h1>Welcome Developer</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology also wants to help Developers focus on there craft thus we developed Plugins to Speed up your Work and Even allow developers to use our services thus enable Progress in cloud native technology.
            <br><br>
            Please readmore about our products and services, we provide to developers and how to install and use them below.</p>

            <br>

            <div class='TopNav'>

                <p class='ServicesSection'>Elite Store</p>

                <p class='ServicesSection' >Elite Pay</p>

                <p class='ServicesSection'>Nova </p>
            
            </div>

            <br><br>

            <p>Under Development</p>
        
        </div>
        
    `);

};

const CONTACTUSPAGEROUTR=()=>{

    ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Contact Us</p>

        </header>

        <div id='SectionDiv' class='RelativeDiv'>

            <br>

            <h1>Fill the Form </h1>

            <input id='Name' class='RoundInput' type='text' placeholder='Enter Your Name'/>

            <input id='Email' class='RoundInput' type='email' placeholder='Enter Your Email'/>

            <input id='Subject' class='RoundInput' type='text' placeholder='Provide Subject'/>

            <textarea id='Message' placeholder='Compose Message'></textarea>

            <button class='SendMessage'>Send</button>

            <br><br>
            
        </div>
        
    `);

    const Name=NAMING('#Name');
    const Email=NAMING('#Email');
    const Subject=NAMING('#Subject');
    const Message=NAMING('#Message');
    const SendMessage=NAMING('.SendMessage');

    CLICK(SendMessage,()=>{

        CONDITION(Name.value,()=>{
    
            CONDITION(Email.value,()=>{
    
                CONDITION(Subject.value,()=>{

                    CONDITION(Message.value,()=>{

                        TOAST('Please Wait');

                        DEVICE((deviced)=>{

                            const HEADERS=['Name','Email','Subject','Message','Device','Time'];
    
                            const INFO=[Name.value,Email.value,Subject.value,Message.value,deviced,new Date()];
    
                            INSERTDATA(API,'Contacts',HEADERS,INFO,(ReturnedData)=>{

                                TOAST('We shall Contact You Shortly');

                                HIDER(2000,()=>{

                                    CONTACTUSPAGEROUTR();

                                });
    
                            },()=>{

                                TOAST('Something Went Wrong,Try Again.');
    
                            });

                        });

                    },()=>{
        
                        TOAST('Please Enter Your Message');
        
                    });
    
                },()=>{
    
                    TOAST('Please Enter Your Subject');
    
                });
    
            },()=>{
    
                TOAST('Please Enter Your Email');
    
            });
    
        },()=>{
    
            TOAST('Please Enter Your Name');
    
        });

    });

};

const ABOUTUSPAGEROUTER=()=>{

    ROUTE(' ',ABOUTUSPAGE,'HOMEPAGE');

};

const ABOUTUSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>About Us</p>

        </header>

        <div id='SectionDiv' class='RelativeDiv'>

            <br>

            <h1>Who are We?</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology is a Cloud Native Based Company that Ventures in the Following Sections.</p>

            <br>
            
            <button class='InlineButton'>

                <p class='LeftText'>Mobile App Development</p>

                <img class='RightIcon' src='${WHITEMOBILEDEVELOPMENTICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Desktop App Development</p>

                <img class='RightIcon' src='${WHITESCREENICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText'>Web Site Development</p>

                <img class='RightIcon' src='${WHITEINTERNETICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText'>System Design and Development</p>

                <img class='RightIcon' src='${WHITEDEVICEICON}'/>
            
            </button>

            <h3>Mission</h3>

            <br>

            <p class='LeftText'>To Provide and Power Well Established and Auto Updating Systems that Make Service Delivery Fast,Reliable and Simple</p>

            <br>

            <h3>Vision</h3>

            <br>

            <p>Imagine .Innovate .Inspire</p>

            <br>

            <h2>Aim</h2>

            <br>

            <p class='LeftText'>Africa's First Cloud Native Developer Platform that is Aimed to Simplify the Works of the Developers and Customers with Seamless Intergration Software and Service to Customers Daily.</p>

            <br><br>
        
        </div>
        
    `);

};

const DONATEPAGEROUTER=()=>{

    CONDITION(sessionStorage.getItem('Direct'),()=>{

        ROUTE(' ',DONATEPAGE,'HOMEPAGE');

    },()=>{

        ROUTE(' ',DONATEPAGE,'ABOUTUSPAGE');

    });

};

const BACKDONATEPAGE=()=>{

    CONDITION(sessionStorage.getItem('Direct'),()=>{

        HOMEPAGEROUTER();

    },()=>{

        ABOUTUSPAGEROUTER();

    });

};

const DONATEPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='BACKDONATEPAGE()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Donate</p>

        </header>

        <div id='SectionDiv' class='RelativeDiv'>

            <br>

            <h1>Donation Event</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology is Conducting Donations For the Cloud Native Platform,Join Us to Make the Developers experience seamless and Intergration Better of Servces to Your Platform For Free.</p>
            
            <br>
            
            <p>Enter Amount From 1 dollar</p>

            <input class='RoundInput' type='tel' placeholder='Enter Amount From 1 Dollar'/>

            <button class='SendMessage'>Donate</button>

        </div>
        
    `);

    const DONATEAMOUNT=NAMING('.RoundInput');

    const SEND=NAMING('.SendMessage');

    FUNCTIONED(DONATEAMOUNT,'input',()=>{

        DOLLAREXCHANGE('UGX',DONATEAMOUNT.value,(data)=>{

            CONDITION(data < 1,()=>{

                TOAST('Donate Mininium is 1 USD');

                DELETEDATA('','AmountDonated');

            },()=>{

                STOREDATA('','AmountDonated',data);

            });

        });

    });

    FUNCTIONED(SEND,'click',()=>{

        CONDITION(DONATEAMOUNT.value,()=>{

            CONDITION(DONATEAMOUNT.value >=1,()=>{
    
                TOAST('Please Wait');
                        
                ELITEPAY('Elite','eroinnovations9@gmail.com',sessionStorage.getItem('AmountDonated'),'Donation','https://eroinnovations.site/AfterPay.html',new Date(),'https://eroinnovations.site',(dataLink)=>{
                            
                    WEBSITE(dataLink);
                            
                });
                        
            },()=>{
                        
                TOAST('Donate Mininium is 1 USD');

            });
    
        },()=>{
    
            TOAST('Enter Donation Amount');
    
        });

    });

};