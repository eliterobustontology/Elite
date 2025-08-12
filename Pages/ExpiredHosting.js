export const EXPIREDHOSTING=()=>{

                                localStorage.removeItem("Updates");

                            const style = document.createElement('style');

                            style.textContent = `

                                body{
                                    text-align:center;
                                    background:#333333;
                                    color:#cdcdcd;
                                }
                            
                                .WarningMessage{
                                    margin-top:10%;
                                    color:red;
                                }

                                .ButtonHolder{
                                    display:inline-flex;
                                    width:90%;
                                }

                                button{
                                    width:45%;
                                    height:50px;
                                    border:none;
                                    margin:auto;
                                    border-radius:10px;
                                    color:#ffffff;
                                }

                                .WarningImage{
                                    width:50%;
                                    height:20%;
                                    margin-top:10%;
                                }

                                .Pay{

                                    background:forestgreen;
                                }

                                .Admin{
                                    background:teal;
                                }

                                .CompanyName{

                                    color:green;
                                    font-size:23px;
                                }
                            
                            `;

                            document.head.appendChild(style);

                            const Body=document.querySelector("body");

                            Body.innerHTML=`

                                <img class="WarningImage" src="data:image/png;base64,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"/>

                                <h1 class="WarningMessage">Warning</h1>

                                <p>The Hosting to This Service Has Expired.</p>

                                <p>If it a Mistake,Please Contact Admin</p>

                                <div class="ButtonHolder">

                                    <button class="Pay" >Pay</button>

                                    <button class="Admin" >Contact Admin</button>
                                
                                </div>

                                <br><br>

                                <p>Powered By <br><br> <b class="CompanyName"> Elite Robust Ontology.</b></p>
                        
                            `;

                            const Pay=document.querySelector(".Pay");

                            const Admin=document.querySelector(".Admin");

                            Pay.addEventListener("click",()=>{

                                location.href="https://eroinnovations.site/BeforePay.html";

                            });

                            Admin.addEventListener("click",()=>{

                                location.href="";

                            });

};