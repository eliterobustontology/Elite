const ADD=(ELEMENT,DATA)=>{

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.append(DATA);
        
    } else {

        BODY.append(DATA);
        
    };

};
const DISPLAY=(ELEMENT,DATA)=>{

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.innerHTML= DATA;
        
    } else {

        BODY.innerHTML= DATA;
        
    };

};
const AUTORUN=()=>{

    if (localStorage.getItem("Environment") === "Development" ) {
        
        import('./Start/Start.js')

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

    } else {

        import('https://eliterobustontology.github.io/Elite/Start/Start.js')

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

};
const REDUX=(DATA,callback)=>{

    DATA.forEach(element => {

        callback(element);
        
    });

};
const LOCALSTORE=(Name,data)=>{

    localStorage.setItem(Name,data);

};
const SESSIONSTORE=(Name,data)=>{

    sessionStorage.setItem(Name,data);

};
const CLEAR=(ELEMENT)=>{

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.innerHTML= "";
        
    } else {

        BODY.innerHTML= "";
        
    };

};
const GETDATA=(Url,Name,callback)=>{

    const DATA={
        "spreadsheetUrl":Url,
        "sheetName":Name    
    };

    const APIS="https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec";

    fetch(APIS,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res => res.json())

    .then(data =>{

        callback(data);

    })
    
    .catch(Error => console.log(Error))

};
const INSERTDATA=(Url,Name,headers,Info,callback)=>{

    const DATA={
        "spreadsheetUrl":Url,
        "sheetName":Name,
        "Headers":headers,
        "Data":Info
    };

    const APIS="https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec";

    fetch(APIS,{
        method:"Post",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res => res.json())

    .then(data =>{

        callback(data);

    })
    .catch(Error => console.log(Error)
    )

};
const UPDATEDATA=(Url,Name,headers,Info,callback)=>{

    const DATA={
        "action":"update",
        "spreadsheetUrl":Url,
        "sheetName":Name,
        "id":headers,
        "data":Info
    };

    const APIS="https://script.google.com/macros/s/AKfycbxDMAxD8EYl1mqybaVnFgXh_5A8c2SpOydG12r8VxrWkB_UtjqBdpOkPWUi0przES9uBw/exec";

    fetch(APIS,{
        method:"Post",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res => res.json())

    .then(data =>{

        callback(data);

    })
    
    .catch(Error => console.log(Error)
    )

};
const ROUTE=(NEWPAGE, FUNCTION, FUNCTIONBACK) => {

    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);

    if (NEWPAGE) {

        history.pushState({ data: FUNCTION() }, "", "");

    } else {

        history.replaceState({ data: FUNCTION() }, "", "");

    }

    window.addEventListener("popstate", function (event) {

        const previousPageFunction = sessionStorage.getItem("PreviousPage");

        if (previousPageFunction) {

            const func = new Function("return " + previousPageFunction)();

            func();

        }

    });
    
};
const STYLED=(ELEMENT,STYLE,VALUE)=>{

   ELEMENT.style[STYLE]=VALUE;

};
const FINDER=(DATA, ELEMENT, ELEMENT1, ACTION) => {

    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);

    return ACTION(user ? user : false);
    
};
const ELEMENTED=(HOLDER,ELEMENT,callback)=>{

    const BODY=document.querySelector('body');

    const ELEMENTS=document.createElement(ELEMENT);

    if (HOLDER) {
 
        HOLDER.append(ELEMENTS);
        
    } else {

        BODY.append(ELEMENTS);
        
    };

    callback(ELEMENTS);

};
const APPMODE=(COLOR)=>{

    const BODY=document.querySelector('body');

    BODY.style.background=COLOR||"#000000";

};
const BODIED=() => {

    SCREENWIDTH((data)=>{

        LOCALSTORE("Width",data);

    });

    const ELEMENT = document.querySelector("body");

    ELEMENT.style.width = "100%";
    ELEMENT.style.height = "100%";
    ELEMENT.style.textAlign = "center";
    ELEMENT.style.margin = "0";
    ELEMENT.style.padding = "0";
    ELEMENT.style.listStyle = "none";
    ELEMENT.style.textDecoration = "none";
    ELEMENT.style.fontFamily = "sans-serif,Camberia";

    if (localStorage.getItem("Environment") === "Web" || "Development") {

        ELEMENT.style.overflowY = "auto";
        ELEMENT.style.overflowX = "hidden";
        ELEMENT.style.position = "relative";

    } else {

        ELEMENT.style.overflow = "hidden";
        ELEMENT.style.position = "fixed";

    }

    ELEMENT.addEventListener("click",()=>{

        SCREENWIDTH((data)=>{

            CONDITION(data != localStorage.getItem("Width") ,()=>{

                LOCALSTORE("Width",data);

                RELOAD();

            },()=>{

                LOCALSTORE("Width",data);

            });

        });

    });
    
};
const WHATSAPP=(NUMBER)=>{

    open("https://wa.me/"+NUMBER);

};
const CLICK=(ELEMENT,callback)=>{

    ELEMENT.addEventListener("click", callback);
    
};
const CALL=(NUMBER)=>{

    window.location.href = "tel:"+NUMBER;

};
const BREAK=(ELEMENT)=>{

    let BR=document.createElement("br");

    const BODY=document.querySelector('body');

    if (ELEMENT) {

        ELEMENT.append(BR);
        
    } else {

        BODY.append(BR);
        
    };

};
const INPUTED=(ELEMENT, callback) => {
    
    ELEMENT.addEventListener("input", () => {

        callback(ELEMENT.value);

    });

};
const STOREINDEXED=(dbName, storeName, data, callback) => {

    let invoked = false;

    const cb = (success) => {

        if (!invoked && typeof callback === "function") {

            invoked = true;

            callback(success);

        }

    };

    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (e) => {

        const db = e.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            db.createObjectStore(storeName, { keyPath: "Name" });

        }

    };

    request.onsuccess = (e) => {

        const db = e.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            db.close();

            const newVersion = db.version + 1;

            const upgradeRequest = indexedDB.open(dbName, newVersion);

            upgradeRequest.onupgradeneeded = (e) => {
                
                const upgradeDb = e.target.result;

                upgradeDb.createObjectStore(storeName, { keyPath: "Name" });

            };

            upgradeRequest.onsuccess = (e) => {

                const upgradeDb = e.target.result;

                const tx = upgradeDb.transaction(storeName, "readwrite");

                const store = tx.objectStore(storeName);

                const addReq = store.add(data);

                addReq.onsuccess = () => {

                    tx.oncomplete = () => cb(true);

                };

                addReq.onerror = (e) => cb(false);

                tx.onerror = (e) => cb(false);

            };

            upgradeRequest.onerror = (e) => cb(false);

        } else {

            const tx = db.transaction(storeName, "readwrite");

            const store = tx.objectStore(storeName);

            const addReq = store.add(data);

            addReq.onsuccess = () => {

                tx.oncomplete = () => cb(true);

            };

            addReq.onerror = (e) => cb(false);

            tx.onerror = (e) => cb(false);

        }

    };

    request.onerror = (e) => cb(false);
    
};
const GETINDEXED=(dbName, storeName, callback) => {

    const initialRequest = indexedDB.open(dbName);

    initialRequest.onsuccess = function (event) {

        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            console.error(`Object store "${storeName}" not found.`);

            db.close();

            return;

        }

        const transaction = db.transaction(storeName, "readonly");

        const store = transaction.objectStore(storeName);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function (event) {

            const data = event.target.result;

            callback(data);

        };

        getAllRequest.onerror = function (event) {

            console.error("Error retrieving data", event.target.error);
            
        };

        transaction.oncomplete = function () {

            console.log("Transaction completed");

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    initialRequest.onupgradeneeded = function (event) {

        console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");
    
    };

    initialRequest.onerror = function (event) {

        console.error("Error opening database", event.target.error);
        
    };
    
};
const UPDATEINDEX=(dbName, storeName, data, callback) => {

    const request = indexedDB.open(dbName);

    request.onsuccess = function (event) {

        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            console.error(`Object store "${storeName}" not found.`);

            db.close();

            return;

        }

        const transaction = db.transaction(storeName, "readwrite");

        const store = transaction.objectStore(storeName);

        const putRequest = store.put(data);

        putRequest.onsuccess = function () {
            
            callback();

            console.log("Data updated successfully");

        };

        putRequest.onerror = function (event) {

            console.error("Error updating data", event.target.error);

        };

        transaction.oncomplete = function () {

            console.log("Transaction completed");

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    request.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};
const INSPECTION=() => {

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
const URLCOLLECTED=(L, C) => {

    try {

        const u = new URL(L),

        q = {};

        u.searchParams.forEach((v, k) => {

            q[k] = v;

        });

        const h = u.hash ? u.hash.substring(1) : null,

            p = u.pathname.split("/").filter((s) => s),

           
            d = { query: Object.keys(q).length ? q : null, hash: h || null, path: p.length ? p : null, origin: u.origin, fullUrl: u.href };
        
            Object.keys(d).forEach((k) => {

            if (d[k] === null) delete d[k];

        });

        if (typeof C === "function") C(d);

    } catch (e) {

        console.error("Invalid URL or processing error:", e);

    }
    
};
const FUNCTIONED=(ELEMENT, FUNCTION, callback) => {

    ELEMENT.addEventListener(FUNCTION, callback);
    
};
const URLCOLLECTOR=() => {

    const url = new URL(window.location.href);

    const queryParams = {};

    url.searchParams.forEach((value, key) => {

        queryParams[key] = value;

    });

    const hash = url.hash ? url.hash.substring(1) : null;

    const pathSegments = url.pathname.split("/").filter((seg) => seg);

    const dataToStore = { query: Object.keys(queryParams).length ? queryParams : null, hash: hash || null, path: pathSegments.length ? pathSegments : null, origin: url.origin, fullUrl: url.href };
    
    Object.keys(dataToStore).forEach((key) => {

        if (dataToStore[key] === null) {

            delete dataToStore[key];

        }

    });

    sessionStorage.setItem("urlInfo", JSON.stringify(dataToStore));
    
};
const GMAIL=(EMAIL) => {

    var mailtoLink = "mailto:" + encodeURIComponent(EMAIL);

    window.open(mailtoLink);
    
};
const RELOAD=() => {

    location.reload();
    
};
const POSTPACKAGE=(LINK, POLICY, DATA, callback, callback1) => {

    fetch(LINK, { method: "Post", mode: POLICY || "no-cors", body: JSON.stringify(DATA) })
        
    .then((res) => res.json())
        
    .then((data) => {

        callback(data);
        
    })

    .catch((error) => {

        callback1(error);
        
    });
    
};
const SESSIONDELETE=(HOLDER)=>{

    sessionStorage.removeItem(HOLDER);

};
const SESSIONCLEAR=()=>{

    sessionStorage.clear();

};
const LOCALDELETE=(HOLDER)=>{

    localStorage.removeItem(HOLDER);
    
};
const LOCALCLEAR=()=>{

    localStorage.clear();

};
const CHECKER=(CONDITIONER, callback) => {

    if (CONDITIONER) {

        callback();

        return;

    }
    
};
const CONDITION=(CONDITIONER, callback, callback1) => {

    if (CONDITIONER) {

        callback();

    } else {

        callback1();

    }
    
};
const JSONIFICATION=(DATA, callback) => {

    let DAA = JSON.stringify(DATA);

    callback(DAA);
    
};
const DEJSON=(DATA, callback) => {

    const DAA = JSON.parse(DATA);

    callback(DAA);
    
};
const GETPACKAGE=(LINK, POLICY, callback, callback1) => {

    fetch(LINK, { method: "Get", mode: POLICY || "no-cors" })

    .then((res) => res.json())

    .then((data) => {

        callback(data);

    })

    .catch((error) => {

        callback1(error);

    });
    
};
const CREATEDATABASE=(NAME, callback, callback1) => {
    
    const DATA = { sheetName: NAME };

    fetch("https://script.google.com/macros/s/AKfycbxTemTTxcrvd6GwT7PDaHTreOfsDkjp1hWiXuJ4ItlPs5kY_eFEDD-jhJDErsnRxIVopA/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
    .then((res) => res.json())

    .then((data) => {

        callback(data);

    })

    .catch((error) => {

        callback1(error);

    });

};
const CREATETABLE=(LINK, NAME, callback, callback1) => {

    const DATA = { sheetName: NAME, spreadsheetUrl: LINK };

    fetch("https://script.google.com/macros/s/AKfycbwojB0t-HICmWw8e0ADZe9ApMKJqka8A1nLulnDScKN2YJoIvmjNkdnfnhFJMzWgKywJg/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
        
    .then((res) => res.json())
       
    .then((data) => {
           
        callback(data);
       
    })
        
    .catch((error) => {
            
        callback1(error);
        
    });
    
};
const HIDER=(TIME, callback) => {

    setTimeout(() => {

        callback();

    }, TIME || 500);
    
};
const REPEATER=(TIME, callback) => {

    setInterval(() => {

        callback();

    }, TIME || 500);
    
};
const DATASORTER=(ARRAY, ELEMENT, callback) => {

    if (ARRAY.includes(ELEMENT)) {

        callback(true);

    } else {

        callback(false);

    }

};
const JSONADDER=(data, contents, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const existingIds = MYDATA.map(item => item.id);

    let nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

    contents.forEach((content) => {
    
        const contentId = content.id;

        const isDuplicate = contentId !== undefined && existingIds.includes(contentId);

        if (!isDuplicate) {

            if (contentId === undefined) {

                content.id = nextId++;

            } else {
                
                existingIds.push(contentId);
            }

            MYDATA.push(content);
        }

    });

    const updatedJSON = JSON.stringify(MYDATA);

    callback(updatedJSON);

};
const JSONREMOVER=(data, ids, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const idSet = new Set(ids.map(id => String(id)));

    MYDATA.forEach(item => {

        console.log("Item:", item, "| item.id =", item.id);

    });

    const filteredData = MYDATA.filter(item => {

        const itemId = item?.id ?? null;

        return !idSet.has(String(itemId));

    });

    const updatedJSON = JSON.stringify(filteredData);

    callback(updatedJSON);

};
const IMAGEPICKER=(imageElement, callback) => {

    const input = document.createElement("input");

    input.type = "file";

    input.style.display = "none";

    input.accept = "image/*";

    document.body.appendChild(input);

    input.addEventListener("change", function () {

        var file = this.files[0];

        if (!file) return;

        var reader = new FileReader();

        reader.onload = function (event) {

            var image = new Image();

            image.src = event.target.result;

            image.onload = function () {

                var maxWidth = 800;

                var maxHeight = 600;

                var canvas = document.createElement("canvas");

                var ctx = canvas.getContext("2d");

                var width = image.width;

                var height = image.height;

                if (width > height) {

                    if (width > maxWidth) {

                        height *= maxWidth / width;

                        width = maxWidth;

                    }

                } else {

                    if (height > maxHeight) {

                        width *= maxHeight / height;

                        height = maxHeight;
                        
                    }

                }

                canvas.width = width;

                canvas.height = height;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.drawImage(image, 0, 0, width, height);

                var base64Data;

                if (file.type === "image/png") {

                    base64Data = canvas.toDataURL("image/png");

                } else {

                    var quality = 0.7;

                    base64Data = canvas.toDataURL("image/jpeg", quality);

                    while (base64Data.length > 49800 && quality > 0) {

                        quality -= 0.1;

                        base64Data = canvas.toDataURL("image/jpeg", quality);

                    }

                }

                if (base64Data.length < 49800) {

                    imageElement.src = base64Data;

                    callback(base64Data);

                    sessionStorage.setItem("TakenPhoto", base64Data);

                } else {

                    TOAST("Image Format Error");

                }

            };

        };

        reader.readAsDataURL(file);

    });

    input.click();

    input.remove();
    
};
const AUDIOPICKER=(audioElement, callback) => {

    const input = document.createElement("input");

    input.type = "file";

    input.style.display = "none";

    input.accept = "audio/*";
    
    document.body.appendChild(input);

    input.addEventListener("change", function () {

        var file = this.files[0];

        if (!file) return;

        var reader = new FileReader();

        reader.onload = function (event) {

            var base64Data = event.target.result;

            var compressedBase64Data = resizeBase64Data(base64Data, 49800);

            if (compressedBase64Data) {

                audioElement.src = compressedBase64Data;

                audioElement.play();

                callback(compressedBase64Data);

            } else {

                TOAST("Unable to resize the audio data within the character limit.");

            }

        };

        reader.readAsDataURL(file);

    });

    input.click();

    input.remove();

    function resizeBase64Data(base64Data, targetSize) {

        if (base64Data.length <= targetSize) {

            return base64Data;

        }

        return base64Data.substring(0, targetSize);

    }
    
};
const WEBSITE=(url) => {

    window.open(url);
    
};
const TWITTER=(username) => {

    var twitterLink = "https://twitter.com/" + encodeURIComponent(username);

    window.open(twitterLink);
    
};
const EVENT=(ELEMENT, ACTION, callback) => {

    const target = ELEMENT instanceof Element ? ELEMENT : document.body;

    if (target && typeof target.addEventListener === "function") {

        target.addEventListener(ACTION, callback);

    } else {

        console.warn("EVENT: Invalid target element.");

    }
    
};
const TEXTFAMILY=(TYPE) => {

    document.querySelector("body").style.fontFamily = TYPE || "Sans-serifs";
    
};
const LOCALDEJSONDATA=(MYDATA, callback) => {

    const DATA = localStorage.getItem(MYDATA);

    const MYDATATA = JSON.parse(DATA);

    callback(MYDATATA);
    
};
const SESSIONDEJSONDATA=(MYDATA, callback) => {

    const DATA = sessionStorage.getItem(MYDATA);

    const MYDATATA = JSON.parse(DATA);

    callback(MYDATATA);
    
};
const DOWNLOADIMAGE=(base64String, filename) => {

    const link = document.createElement("a");

    link.href = base64String;

    link.download = filename;

    link.click();
    
};
const RANDOMCODE=(callback) => {

    let randomDigits = "";

    for (let i = 0; i < 6; i++) {

        randomDigits += Math.floor(Math.random() * 9) + 1;

    }

    callback(randomDigits);
    
};
const INSTAGRAM=(NAME) => {
   
    var instagramLink = "https://www.instagram.com/" + encodeURIComponent(NAME);
    
    window.open(instagramLink);

};
const DATENOW=(callback) => {
    callback(Date.now());
};
const COLORCHANGER=(ELEMENT) => {

    let index = 0;

    intervalID = setInterval(() => {

        index = (index + 1) % COLOR.length;

        STYLED(ELEMENT, "border", `1px solid ${COLOR[index].name}`);

        STYLED(ELEMENT, "background", "transparent");

    }, 2000);
    
};
const STOPCOLORCHANGER=(ELEMENT, COLOR) => {

    clearInterval(intervalID);
    
    STYLED(ELEMENT, "border", "1px solid transparent");

    STYLED(ELEMENT, "background", COLOR);
    
};
const FACEBOOK=(NAME) => {

    var facebookLink = "https://www.facebook.com/" + encodeURIComponent(NAME);

    window.open(facebookLink);
    
};
const TELEGRAM=(NAME) => {

    var telegramLink = "https://t.me/" + encodeURIComponent(NAME);

    window.open(telegramLink);
    
};
const TIMENOW=(callback) => {

    callback(new Date());
    
};
const SMS=(NUMBER) => {

    const phoneNumber = NUMBER;

    window.location.href = "sms:" + phoneNumber;
    
};
const REVERSE=(data) => {

    data.reverse();
    
};
const SCREENHEIGHT=(callback) => {

    callback(screen.height);
    
};
const SCREENWIDTH=(callback) => {

    callback(screen.width);
    
};
const SCROLL=(ELEMENT, callback) => {

    ELEMENT.addEventListener("scroll", () => {

        callback();

    });
    
};
const BACKPAGE=(NAME) => {

    setTimeout(() => {

        sessionStorage.setItem("PreviousPage", NAME);

    }, 100);
    
};
const COPY=function COPY(text, onSuccess) {

    navigator.clipboard

    .writeText(text)

    .then(() => {

        if (onSuccess) {

            onSuccess();

        }

    })
    
    .catch((err) => {

        console.error("Failed to copy text: ", err);

    });

};
const DEVICE=(callback) => {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: { width: screen.width, height: screen.height, availWidth: screen.availWidth, availHeight: screen.availHeight, colorDepth: screen.colorDepth, pixelDepth: screen.pixelDepth },
        online: navigator.onLine,
        memory: navigator.deviceMemory || "Unknown",
        cores: navigator.hardwareConcurrency || "Unknown",
    };
    if (typeof callback === "function") {
        callback(deviceInfo);
    };
};
const ZOOM=() => {

    document.addEventListener(

        "touchstart",

        function (event) {

            if (event.touches.length > 1) {

                event.preventDefault();

            }
            
        },{ passive: false }

    );

    document.addEventListener("wheel", function (event) {

        if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {

            event.preventDefault();

        }

    });
    
};
const DOWNLOADSAVEINDEX=(API, NAME, NAMED, callback) => {

    CHECKER(navigator.onLine, () => {

        GETDATA(API, NAME, (data) => {

            const Data = { Name: NAMED, data: data };

            STOREINDEXED(NAMED, NAMED, Data, (resback) => {

                CONDITION(resback === false,() => {

                        UPDATEINDEX(NAMED, NAMED, Data, () => {});

                    },

                    () => {

                        callback();

                    }

                );

            });

        });

    });
    
};
const FILEPICKER=(callback) => {

    const input = document.createElement("input");

    input.type = "file";

    
    input.style.display = "none";
    
    input.accept = "*/*";
    
    document.body.appendChild(input);
    
    input.addEventListener("change", function () {
    
        var file = this.files[0];
    
        if (!file) return;
    
        const MAX_SIZE = 10 * 1024 * 1024;
    
        if (file.size > MAX_SIZE) {
    
            TOAST("The file is too large. Please select a file smaller than 10MB.");
    
            return;
    
        }
    
        var reader = new FileReader();
    
        reader.onload = function (event) {
    
            var base64Data = event.target.result;
    
            callback(base64Data);
    
        };
    
        reader.readAsDataURL(file);
    
    });
    
    input.click();
    
    input.remove();

};
const ACCOUNTCHECKER=(HomeCallBack, VerificationCallBack, LoginCallBack) => {
    
    CONDITION(localStorage.getItem("UserData"),() => {

            HomeCallBack();

        },() => {

            CONDITION(localStorage.getItem("VeriifcationCode"),() => {

                    VerificationCallBack();

                },() => {

                    LoginCallBack();

                }

            );

        }

    );

};
const OPERATINGSYSTEM=() => {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    let os = "Unknown OS";

    if (/windows phone/i.test(userAgent)) os = "Windows Phone";

    else if (/win/i.test(userAgent)) os = "Windows";

    else if (/android/i.test(userAgent)) os = "Android";

    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) os = "iOS";
   
    else if (/Macintosh/i.test(userAgent)) os = "MacOS";
    
    else if (/Linux/i.test(userAgent)) os = "Linux";
    
    localStorage.setItem("OperatingSystem", os);
    
    return os;
    
};
const VIDEOPICKER=(videoElement, callback) => {

    const input = document.createElement("input");

    input.type = "file";

    input.style.display = "none";

    input.accept = "video/*";

    document.body.appendChild(input);

    input.addEventListener("change", function () {

        var file = this.files[0];

        if (!file) return;

        var reader = new FileReader();

        reader.onload = function (event) {

            var base64Data = event.target.result;

            var compressedBase64Data = resizeBase64Data(base64Data, 49800);

            if (compressedBase64Data) {

                videoElement.src = compressedBase64Data;

                callback(compressedBase64Data);

            } else {

                TOAST("Unable to resize the video data within the character limit.");
            
            }

        };

        reader.readAsDataURL(file);

    });

    input.click();

    input.remove();

    function resizeBase64Data(base64Data, targetSize) {

        if (base64Data.length <= targetSize) {

            return base64Data;

        }

        return base64Data.substring(0, targetSize);

    }
    
};
const EMAILSENDER=(EMAIL, SUBJECT, MESSAGE, callback, callback1) => {

    const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };

    fetch("https://script.google.com/macros/s/AKfycbyC-L2ywxLAfkjU7L8A4dgpJDnK4E26_ilcuHiQ1r0ZmACUgv7WEzoLbrCRnjJLd7Akdg/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
        
    .then((res) => res.json())
        
    .then((data) => {
            
        callback(data);
        
    })
        
    .catch((error) => {
            
        callback1(error);
        
    });

};
const SERVERCONNECTION=(PATH, FUNS) => {

    if (localStorage.getItem("Environment") === "Development") {

        import(`../library/Server/${PATH}`)

        .then((module) => {

            if (typeof module[FUNS] === "function") {

                module[FUNS]();

            } else {

                console.error(`${FUNS} is not defined in the module or is not a function`);
                
            }
            
        })
            
        .catch((error) => {
                
            console.error("Error loading the module:", error);
            
        });

    } else {

        import(`https://eroinnovations.github.io/Elite-Robust-Ontology/library/Server/${PATH}`)
            
        .then((module) => {
                
            if (typeof module[FUNS] === "function") {
                    
                module[FUNS]();
                
            } else {
                    
                console.error(`${FUNS} is not defined in the module or is not a function`);
            }

        })

        .catch((error) => {
                
            console.error("Error loading the module:", error);

        });

    }

};
const MONTHTIME=(inputDate, callback) => {

    const now = new Date();

    const date = new Date(inputDate);

    const oneMonthAgo = new Date(now);

    oneMonthAgo.setMonth(now.getMonth() - 1);

    const isValid = date >= oneMonthAgo && date <= now;

    if (typeof callback === "function") {

        callback(isValid);

    } else {

        console.error("Provided callback is not a function.");

    }

};
const YOUTUBEUD=(url, callback) => {
    
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
   
    const match = url.match(regex);

    if (match && match[1]) {

        callback(match[1]);

    } else {

        callback(null);

    };

};
const SITECLOSE=() => {

    if (localStorage.getItem("Environment") === "Production" || localStorage.getItem("OperatingSystem") === "Android") {
        
        Android.reloadApp();

    } else {
       
        window.close();
        
    }
    
};
const DOLLAREXCHANGE=(CONVERSION, AMOUNT, callback) => {

    let Amount;

    if (CONVERSION === "USD") {

        Amount = AMOUNT / 3668.62;

    } else {

        Amount = AMOUNT * 3666;

    }

    const roundedAmount = Math.round(Amount * 100) / 100;

    callback(roundedAmount);
    
};
const GETTEXTPACKAGE=(LINK, POLICY, callback, callback1) => {

    fetch(LINK, { method: "Get", mode: POLICY || "no-cors" })

    .then((res) => res.text())

    .then((data) => {

        callback(data);

    })

    .catch((error) => {

        callback1(error);

    });

};
const DRIVEID=(url) => {

    const regex = /(?:drive|docs)\/d\/([a-zA-Z0-9_-]+)/;

    const match = url.match(regex);

    if (match) {

        return match[1];

    } else {

        throw new Error("Invalid Google Drive URL");

    }

};
const POSTTEXTPACKAGE=(LINK, POLICY, DATA, callback, callback1) => {
    
    fetch(LINK, { method: "Post", mode: POLICY || "no-cors", body: JSON.stringify(DATA) })
    
    .then((res) => res.text())
    
    .then((data) => {
      
        callback(data);

    })

    .catch((error) => {

        callback1(error);

    });
    
};
const TOAST=(Message) => {

    if (localStorage.getItem("Environment") === "Production") {

        Android.showToast(Message);

    } else {

       alert(Message);

    }
    
};
const SCROLLPOINT=(POINT) => {

    const element = document.getElementById(POINT);

    if (sessionStorage.getItem("ScrollPoint")) {

        if (element) {

            element.scrollIntoView({ behavior: "smooth" });

        }

    }
    
};
const POSTDRIVEFILE=(FILENAME, FILEDATA, DRIVEFOLDER, callback, callback1) => {
    
    fetch("https://script.google.com/macros/s/AKfycby1jTq3nFarX-VHnad99IzkmupTqI0s-GtUWI4EJUcH1UwUIutM8Q8ZXwePsrss9WFIJw/exec", {
        method: "Post",
        body: JSON.stringify({ fileName: FILENAME + ".txt", content: FILEDATA, folderId: DRIVEFOLDER }),
    })
        
    .then((res) => res.json())
        
    .then((data) => {
           
        callback(data);
        
    })

    .catch((error) => {
            
        callback1(error);
        
    });

};
const GETDRIVEFILE=(DATA, callback, callback1) => {

    fetch("https://script.google.com/macros/s/AKfycbyZXeB9GlsrIOMu6C2jK7ImRgDq1ms0J0HbmjKDor4HwzjMRYK4S3YQ8QmMTJcqkkH9Iw/exec", { method: "Post", body: JSON.stringify({ fileId: DATA }) })
        
    .then((res) => res.text())
        
    .then((data) => {
            
        callback(data);
        
    })
       
    .catch((error) => {

            
        callback1(error);
        
    });

};
const VISITOR=(API, NAME) => {
    
    CONDITION(localStorage.getItem("Environment") === "Development",() => {
        
        
        },() => {

            CONDITION(sessionStorage.getItem("Visited"),()=> {

                
            } ,()=> {

                DEVICE((data) => {

                    CHECKER(navigator.onLine, () => {

                        GETDATA(API,NAME,(MyData) => {

                            FINDER(MyData, "ID", localStorage.getItem("ID"), (Users) => {
                                    
                                CONDITION(Users.ID === localStorage.getItem("ID"),() => {

                                    JSONADDER(Users.RevistDate, [new Date()], (dataDat) => {
                                        
                                        const INFO = [data, Users.Date, Users.Language, Users.DeviceScreen, dataDat, Users.VistedTimes + 1, localStorage.getItem("OperatingSystem")];
                                               
                                        UPDATEDATA(API,NAME,Users.ID,INFO,(datata) => {

                                            STOREDATA("", "Visited", "true");

                                        },() => {

                                        });

                                    });

                                },() => {
                                            
                                    JSONADDER(new Date(), [new Date()], (dataDat) => {
                                                
                                        const HEADERS = ["Users", "Date", "Language", "DeviceScreen", "RevistDate", "VistedTimes", "OperatingSystem"];
                                                
                                        const INFO = [data, new Date(), data.language, data.screen, dataDat, 1, localStorage.getItem("OperatingSystem")];
                                                
                                        INSERTDATA(API,NAME,HEADERS,INFO,(datata) => {
                                            STOREDATA(" ", "ID", datata.uniqueId);
                                            STOREDATA("", "Visited", "true");
                                        },() => {

                                        });

                                            
                                    });

                                }

                            );

                        });

                    },() => {

                    });

                });

            });

        });

    });

};
const GETINDEXEDNONDATA=(dbName, storeName, callback) => {

    const initialRequest = indexedDB.open(dbName);

    initialRequest.onsuccess = function (event) {

        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            console.error(`Object store "${storeName}" not found.`);

            db.close();

            return;

        }

        const transaction = db.transaction(storeName, "readonly");

        const store = transaction.objectStore(storeName);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function (event) {

            const data = event.target.result;

            data.forEach((element) => {

                element.data.forEach((elements) => {

                    callback(elements);

                });

            });

        };

        getAllRequest.onerror = function (event) {

            console.error("Error retrieving data", event.target.error);

        };
        transaction.oncomplete = function () {

            console.log("Transaction completed");

        };
        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    initialRequest.onupgradeneeded = function (event) {

        console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");
    
    };

    initialRequest.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};
const HOSTINGUPDATER=() => {

    CHECKER(navigator.onLine,()=>{

        CONDITION(localStorage.getItem("Environment") === "Development" ,()=>{

        },()=>{

            GETDATA("https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0","APPMANAGER",(data)=>{

                REDUX(data,(element)=>{

                    TIMECOMPARE(element.AppLogic,(result)=>{

                        CONDITION(result === false,()=>{

                        },()=>{

                            CONDITION(element.ID === localStorage.getItem("NAME"),()=>{

                                CONDITION(localStorage.getItem("State"),()=>{

                                    window.location.href = "/index.html";

                                },()=>{

                                    LOCALCLEAR();

                                    RELOAD();

                                });

                            },()=>{

                            });

                        });
  
                    });

                });

            });

        });

    });

};
const QELMAIL=(EMAIL, SUBJECT, MESSAGE, callback, callback1) => {
    
    const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };
   
    fetch("https://script.google.com/macros/s/AKfycbzLPkLfp0XdfRYYIS3oBOOJ67yIWMM67gnOWkJO9YRoNsDjxxM6cZtexgWeBBbBNcL9og/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
        
    .then((res) => res.json())

    .then((data) => {

        callback(data);

    })
    
    .catch((error) => {

        callback1(error);

    });

};
const STOREINDEXEDDATA=(API, NAME) => {

    CHECKER(navigator.onLine, () => {

        GETDATA(API,NAME,(data) => {

                const DATA = { Name: NAME, data: data };

                STOREINDEXED(NAME, NAME, DATA, (data) => {

                    CHECKER(data === false, () => {

                        UPDATEINDEX(NAME, NAME, DATA, () => {});

                    });

                });

            },(data) => {

                console.log(data);

            }

        );

    });
    
};
const ASHMAIL=(EMAIL, SUBJECT, MESSAGE, callback, callback1) => {

    const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };

    fetch("https://script.google.com/macros/s/AKfycbyNEEeBwTZrJstRlQV7HBDMXw69xbvtZEw3Grc-Lg5pqOmHSxCxsfFAqwEjVsHqIuVv0A/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
    
    .then((res) => res.json())
       
    .then((data) => {

        callback(data);
        
    })
        
    .catch((error) => {
            
        callback1(error);

    });

};
const GETINDEXEDDATA=(dbName, storeName, callback) => {

    const initialRequest = indexedDB.open(dbName);

    initialRequest.onsuccess = function (event) {

        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            console.error(`Object store "${storeName}" not found.`);

            db.close();

            return;

        }

        const transaction = db.transaction(storeName, "readonly");

        const store = transaction.objectStore(storeName);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function (event) {

            const data = event.target.result;

            data.forEach((element) => {

                element.data.reverse().forEach((elements) => {

                    callback(elements);

                });

            });

        };

        getAllRequest.onerror = function (event) {

            console.error("Error retrieving data", event.target.error);

        };

        transaction.oncomplete = function () {

            console.log("Transaction completed");

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    initialRequest.onupgradeneeded = function (event) {

        console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");
    
    };

    initialRequest.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};
const ELITEPAY=(AMOUNT,DETAILS,EMAIL,NUMBER,USERNAME,LOCATION,WEBSITEBACK,callback)=>{

    const TOKENLINK="https://script.google.com/macros/s/AKfycbw6BSTEaPrr8sPokyKMtuNVJdvTo-9tZy7w42g-Du43C--ebEIgkplQDtkdM91GKJThHQ/exec";

    const IPIZATION="https://script.google.com/macros/s/AKfycbyNOslxcSIi2w_f9lKNt2gvefysR-_piITlIUl0EEwepUBUYpbqrddQdvavXStCurVgpw/exec";

    const SUMB="https://script.google.com/macros/s/AKfycbxcjfDVJ11W5N2_QOV_djJBu3iLFwTubtwELxSX_ib7Jb3vTAqCSGFjyEfmDYEaSmfb7A/exec";

    fetch(TOKENLINK,{
        method:"GET",
        mode:"cors"
    })
    .then(res =>res.json())
    .then(data =>{
        
        const Token=data.token;

        const TOKENDATA={
            "token":Token,
            "site":"https://eroinnovations.site"
        };
        fetch(IPIZATION,{
            method:"Post",
            body:JSON.stringify(TOKENDATA)
        })
        .then(res=>res.json())
        .then(datata =>{

            const HEADER=["Name","Reason","Email","Number","Website","Amount"];

            const Info=[USERNAME,DETAILS,EMAIL,NUMBER,WEBSITEBACK,AMOUNT];

             const DATA={
                "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1wez9KwMHDo9WVgofpMJL4CqB9gJSaoJGIk6M02eKjPQ/edit?usp=sharing",
                "sheetName":"ElitePay",
                "Headers":HEADER,
                "Data":Info
            };

            const APIS="https://script.google.com/macros/s/AKfycbys7SiB-Ifs1zwccTrXSL4NJwXhkqixg65DQS59YcyQ0VbKBmKDIEJFm6KVgSTNTh8PDw/exec";

            fetch(APIS,{
                method:"Post",
                mode:"cors",
                body:JSON.stringify(DATA)
            })

            .then(res => res.json())

            .then(dataets =>{

                if (dataets.error === false ) {

                    const MYDATA={
                        "token": Token,
                        "id": datata.ipn_id,
                        "amount": AMOUNT,
                        "currency": "UGX",
                        "description":DETAILS||"Payment for Order"+datata.ipn_id,
                        "callback_url": "https://eroinnovations.site/AfterPay.html?ID="+dataets.uniqueId,
                        "notification_id": datata.ipn_id,
                        "billing_address": {
                            "email_address": EMAIL||"",
                            "phone_number":NUMBER|| "",
                            "country_code": "",
                            "first_name": USERNAME||"",
                            "middle_name": "",
                            "last_name": "",
                            "line_1": "",
                            "line_2": "",
                            "city":LOCATION|| "",
                            "state": "",
                            "postal_code": "",
                            "zip_code": ""
                        }
                    };

                    fetch(SUMB,{
                        method:"Post",
                        mode:"cors",
                        body:JSON.stringify(MYDATA)
                    })
                    .then(res =>res.json())
                    .then(datateses =>{

                        callback(datateses.redirect_url)

                    })

                    .catch(error=>console.error(error))
                    
                } else {

                    alert("Failed to Process Payment");
                    
                };

            })
            .catch(Error => console.log(Error)
            );

        })
        .catch(error=>console.error(error))
    } )
    .catch(error=>console.error(error))

};
const SUMARRAY=(data, nameKey, priceKey, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback({ items: [], total: 0 });

    return;

  }

  const items = [];

  let total = 0;

  parsedData.forEach(item => {

    const name = item[nameKey] || "Unknown";

    const price = Number(item[priceKey]) || 0;

    total += price;

    items.push({ name, price });

  });

  callback({ items, total });
  
};
const SEARCH=(data, searchKey, searchTerm, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback([]);

    return;

  }

  const term = searchTerm.toLowerCase();

  const results = parsedData.filter(item => {

    const value = item[searchKey];

    if (typeof value === "string") {

      return value.toLowerCase().includes(term);

    }

    callback(false);

  });

  callback(results);

};
const GROUP=(data, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback([]);

    return;

  }

  const idMap = new Map();

  parsedData.forEach(item => {

    const id = item.ID;

    if (idMap.has(id)) {

      idMap.get(id).quantity += 1;

    } else {

      const newItem = { ...item, quantity: 1 };

      idMap.set(id, newItem);

    }

  });

  const finalArray = Array.from(idMap.values());

  callback(finalArray);
  
};
const SWITCHER=(WIDTH, callback, callback2) => {

    const screenWidth = window.screen.width;

    if (screenWidth >= WIDTH || screenWidth >= 800) {

        callback();

    } else {

        callback2();

    }
    
};
const MONEYPARTISION=(input, callback) => {
  
  if (typeof input !== 'number' || !Number.isFinite(input)) {

    console.error("Input must be a valid number.");

    callback('');

    return;
    
  }

  const formatted = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (typeof callback === 'function') {

    callback(formatted);

  }

};
const SUBMANAGER=()=>{
        const DATA={
            "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?usp=sharing",
            "sheetName":"APPMANAGER"    
        };

        const APIS="https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec";

        fetch(APIS,{
            method:"POST",
            mode:"cors",
            body:JSON.stringify(DATA)
        })

        .then(res => res.json())
 
        .then(data =>{

        })
        
        .catch(Error => {

            console.log(Error);

        });

};
const TIMECOMPARE=(data, callback) => {

  const givenDate = new Date(data);

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const isPast = today > givenDate;

  if (typeof callback === 'function') {

    callback(isPast);

  }
  
};
const COUNTRIES=()=>{

    const LINKER="https://docs.google.com/spreadsheets/d/1tZfJr2m7kQsgEcOJeGeMJ0qRwobQTJi2ADwLW3Ghz_U/edit?usp=sharing";

    DOWNLOADSAVEINDEX(LINKER,"Countries","Countries",()=>{

    });

};
const UGANDANDISTRICITS=()=>{

    const LINKER="https://docs.google.com/spreadsheets/d/1tZfJr2m7kQsgEcOJeGeMJ0qRwobQTJi2ADwLW3Ghz_U/edit?usp=sharing";

    DOWNLOADSAVEINDEX(LINKER,"UgandanDistricts","UgandanDistricts",()=>{

    });

};
const MONTHS=()=>{

    const LINKER="https://docs.google.com/spreadsheets/d/1tZfJr2m7kQsgEcOJeGeMJ0qRwobQTJi2ADwLW3Ghz_U/edit?usp=sharing";

   DOWNLOADSAVEINDEX(LINKER,"MonthsOftheYear","MonthsOftheYear",()=>{

   });

};
const HOVER=(ELEMENT, onEnter, onLeave) => {

    ELEMENT.addEventListener("mouseenter", () => onEnter(ELEMENT));

    ELEMENT.addEventListener("mouseleave", () => onLeave(ELEMENT));
    
};
const PASSWORDCHECKER=()=>{

};
