const INSINSPECTION = () => {
    if (localStorage.getItem("Environment") === "Development") {
    } else {
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J"))) {
                e.preventDefault();
            }
        });
        document.addEventListener("keydown", function (e) {
            if (e.ctrlKey && e.key === "u") {
                e.preventDefault();
            }
        });
        const detectDevTools = () => {
            const threshold = 160;
            const devToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
            if (devToolsOpen) {
                window.resizeTo(window.outerWidth - 1, window.outerHeight - 1);
                window.resizeTo(window.outerWidth + 1, window.outerHeight + 1);
            }
        };
        setInterval(detectDevTools, 100);
    }
};
const style = document.createElement('style');
style.textContent = `
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #333333;
  color: #ffffff;
}

.loading-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #333333;
  border-top: 6px solid #00bfff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 1.2rem;
}
`;
document.head.appendChild(style);
document.querySelector("body").innerHTML=`
 <div class="loading-container">
    <div>
        <div class="spinner"></div>
        <p class="loading-text">Please Wait</p>
    </div>
  </div>
`;
const ROUTEJS=(DATA)=>{ const styleElement = document.createElement("script"); styleElement.textContent = DATA; document.head.appendChild(styleElement);};
ROUTEJS(localStorage.getItem('NOVA'));
const CloudShipping = () => {
    import('../Start/Start.js')
    .then(module => {
        if (typeof module.START === 'function') {
        module.START();
        } else {
            console.error('START is not defined in the module');
        }
    })
    .catch(error => {
        console.error('Error loading the module:', error);
    });
};
if (localStorage.getItem('Updates')) {
    INSINSPECTION();
    NOVASTART();
  } else {
    INSINSPECTION();
    CloudShipping();
};