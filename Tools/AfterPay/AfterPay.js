const HOMEPAGE=()=>{

    APPMODE("#333333");

    const style = document.createElement('style');

    style.textContent = `
    
        body{
            position: fixed;
            background: white;
            text-align: center;
            color: #000000;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }

        h1{
            font-size: 20px;
        }

        .DetailsHolder{
            background: transparent;
            position: absolute;
            width: 90%;
            height: 60%;
            bottom: 20px;
            display: block;
            border: 1px solid navy;
        }

        .Holders{
            position: relative;
            width: 100%;
            height: 50px;
            background: transparent;
            display: inline-flex;
        }

        .NameHolder{
            text-align: left;
            margin-left: 5%;
        }

        .NamerHolder{
            margin-left: 5%;
        }

        .HolderImage{
            position: relative;
            right: 0;
            width: 150px;
            height: 150px;
            left: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            border-radius:100%;
        }
    
    `;

    document.head.appendChild(style);

    const DetailsHolder=document.querySelector(".DetailsHolder");

    URLCOLLECTOR();

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
};