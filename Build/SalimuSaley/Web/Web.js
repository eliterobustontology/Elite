const NOVASTART=()=>{

    ROUTE("",HOMEPAGE,HOMEPAGE);

};

const HOMEPAGEROUTER=()=>{

    ROUTE("",HOMEPAGE,HOMEPAGE);

};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <h1 class="Menusections" onclick="ABOUTUSPAGEROUTER()">About</h1>

                <h1 class="Menusections" onclick="SERVICESPAGEPAGEROUTER()">Services</h1>

                <h1 class="Menusections" onclick="CONTACTUSPAGEROUTER()">Contact</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv">

            <br>

            <h1>Who We Are?</h1>

            <br>

            <p class='LeftText'>We are A Non government Funded Organisation that is Created and Our Aim is to Help the Communities in need to skip the poverty line and those that are unable to meet daily needs.</p>
        
        </div>
        
    `);

};

const ABOUTUSPAGEROUTER=()=>{

    ROUTE(" ",ABOUTUSPAGE,HOMEPAGE);

};

const ABOUTUSPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >About Us</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};

const SERVICESPAGEPAGEROUTER=()=>{

    ROUTE(" ",SERVICESPAGE,HOMEPAGE);

};

const SERVICESPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >Our Services</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(" ",CONTACTUSPAGE,HOMEPAGE);

};

const CONTACTUSPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >Contact Us</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv">

            <br>

            <h1>Reach Us Today</h1>

            <br>

            <button class='ContactButton'>

                <p id='Contacts' class='LeftText'>Whatsapp</p>

                <img class='RightIcon' src='${WHITEWHATSAPPICON}'/>
            
            </button>

            <button class='ContactButton'>

                <p id='Contacts' class='LeftText'>Instagram</p>

                <img class='RightIcon' src='${WHITEINSTAGRAMICON}'/>
            
            </button>

            <button class='ContactButton'>

                <p id='Contacts' class='LeftText'>Call</p>

                <img class='RightIcon' src='${WHITEPHONEICON}'/>
            
            </button>
        
        </div>
        
    `);

};