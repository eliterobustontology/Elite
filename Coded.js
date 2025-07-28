const DRIVEID = (url) => {
    const regex = /(?:drive|docs)\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match) {
        return match[1];
    } else {
        throw new Error("Invalid Google Drive URL");
    }
};
const TOAST = (Message) => {
    if (localStorage.getItem("Environment") === "Production") {
        Android.showToast(Message);
    } else {
        CREATEELEMENT("", "div", "MessageDiv", (ELEMENT) => {
            DISPLAY(ELEMENT, `<p class='Messages'>${Message}</p>`);
            HIDER(2000, () => {
                STYLED(ELEMENT, "display", "none");
            });
        });
    }
};
const DOLLAREXCHANGE = (CONVERSION, AMOUNT, callback) => {
    let Amount;
    if (CONVERSION === "USD") {
        Amount = AMOUNT / 3668.62;
    } else {
        Amount = AMOUNT * 3666;
    }
    const roundedAmount = Math.round(Amount * 100) / 100;
    callback(roundedAmount);
};
const SITECLOSE = () => {
    if (localStorage.getItem("Environment") === "Production" || localStorage.getItem("OperatingSystem") === "Android") {
        Android.reloadApp();
    } else {
        window.close();
    }
};
const SESSIONDEJSONDATA = (MYDATA, callback) => {
    const DATA = sessionStorage.getItem(MYDATA);
    const MYDATATA = JSON.parse(DATA);
    callback(MYDATATA);
};
const YOUTUBEUD = (url, callback) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
        callback(match[1]);
    } else {
        callback(null);
    }
};
const PROJECTUPDATE = (callback) => {
    if (localStorage.getItem("Updates")) {
        callback();
    } else {
        localStorage.setItem("Updates", "Approved");
        location.reload();
    }
};
const MONTHTIME = (inputDate, callback) => {
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




const VISITOR = (API, NAME) => {
    CONDITION(
        localStorage.getItem("Environment") === "Development",
        () => {
            console.log("Under Building");
        },
        () => {
            if (sessionStorage.getItem("Visited")) {
                console.log("Already Visited");
            } else {
                DEVICE((data) => {
                    CHECKER(navigator.onLine, () => {
                        GETDATA(
                            API,
                            NAME,
                            (MyData) => {
                                FINDER(MyData, "ID", localStorage.getItem("ID"), (Users) => {
                                    CONDITION(
                                        Users.ID === localStorage.getItem("ID"),
                                        () => {
                                            JSONADDER(Users.RevistDate, [new Date()], (dataDat) => {
                                                const INFO = [data, Users.Date, Users.Language, Users.DeviceScreen, dataDat, Users.VistedTimes + 1, localStorage.getItem("OperatingSystem")];
                                                UPDATEDATA(
                                                    API,
                                                    NAME,
                                                    Users.ID,
                                                    INFO,
                                                    (datata) => {
                                                        STOREDATA("", "Visited", "true");
                                                    },
                                                    () => {}
                                                );
                                            });
                                        },
                                        () => {
                                            JSONADDER(new Date(), [new Date()], (dataDat) => {
                                                const HEADERS = ["Users", "Date", "Language", "DeviceScreen", "RevistDate", "VistedTimes", "OperatingSystem"];
                                                const INFO = [data, new Date(), data.language, data.screen, dataDat, 1, localStorage.getItem("OperatingSystem")];
                                                INSERTDATA(
                                                    API,
                                                    NAME,
                                                    HEADERS,
                                                    INFO,
                                                    (datata) => {
                                                        STOREDATA(" ", "ID", datata.uniqueId);
                                                        STOREDATA("", "Visited", "true");
                                                    },
                                                    () => {}
                                                );
                                            });
                                        }
                                    );
                                });
                            },
                            () => {}
                        );
                    });
                });
            }
        }
    );
};

const UPDATEINDEX = (dbName, storeName, data, callback) => {
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

const GETINDEXEDDATA = (dbName, storeName, callback) => {
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

const GETTEXTPACKAGE = (LINK, POLICY, callback, callback1) => {
    fetch(LINK, { method: "Get", mode: POLICY || "no-cors" })
        .then((res) => res.text())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback1(error);
        });
};
const POSTTEXTPACKAGE = (LINK, POLICY, DATA, callback, callback1) => {
    fetch(LINK, { method: "Post", mode: POLICY || "no-cors", body: JSON.stringify(DATA) })
        .then((res) => res.text())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback1(error);
        });
};
const GETDRIVEFILE = (DATA, callback, callback1) => {
    fetch("https://script.google.com/macros/s/AKfycbyZXeB9GlsrIOMu6C2jK7ImRgDq1ms0J0HbmjKDor4HwzjMRYK4S3YQ8QmMTJcqkkH9Iw/exec", { method: "Post", body: JSON.stringify({ fileId: DATA }) })
        .then((res) => res.text())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback1(error);
        });
};

const QELMAIL = (EMAIL, SUBJECT, MESSAGE, callback, callback1) => {
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
const HOSTINGUPDATER = () => {
    if (navigator.onLine) {
        const DATA = { spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0", sheetName: "APPMANAGER" };
        fetch("https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec", { method: "POST", mode: "cors", body: JSON.stringify(DATA) })
            .then((res) => res.json())
            .then((data) => {
                data.forEach((element) => {
                    let appLogicDate = new Date(element.AppLogic);
                    if (element.AppLogic === "Development") {
                        const INFO = [
                            element.AppName,
                            element.AppDescription,
                            element.AppColors,
                            element.AppConfiguration,
                            element.AppCreatedOn,
                            element.AppVersion,
                            "",
                            element.AppKeyWord,
                            element.AppPackageName,
                            element.AppCompany,
                            element.AndroidDesign,
                            element.AndroidFunctions,
                            element.DesktopDesign,
                            element.DesktopFunctions,
                            element.WebDesign,
                            element.WebFunctions,
                            element.SharedDesign,
                            element.SharedFunctions,
                            element.AppLogic,
                            element.AppRegion,
                            "",
                            element.AppCatergory,
                            element.AppIcon,
                            element.UpdatedOn,
                            element.Owner,
                        ];
                        UPDATEDATA(
                            "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
                            "APPMANAGER",
                            element.ID,
                            INFO,
                            (datata) => {},
                            (error) => {}
                        );
                    } else if (appLogicDate instanceof Date && !isNaN(appLogicDate)) {
                        if (new Date() >= appLogicDate) {
                            const INFO = [
                                element.AppName,
                                element.AppDescription,
                                element.AppColors,
                                element.AppConfiguration,
                                element.AppCreatedOn,
                                element.AppVersion,
                                "",
                                element.AppKeyWord,
                                element.AppPackageName,
                                element.AppCompany,
                                element.AndroidDesign,
                                element.AndroidFunctions,
                                element.DesktopDesign,
                                element.DesktopFunctions,
                                element.WebDesign,
                                element.WebFunctions,
                                element.SharedDesign,
                                element.SharedFunctions,
                                element.AppLogic,
                                element.AppRegion,
                                "Active",
                                element.AppCatergory,
                                element.AppIcon,
                                element.UpdatedOn,
                                element.Owner,
                            ];
                            UPDATEDATA(
                                "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
                                "APPMANAGER",
                                element.ID,
                                INFO,
                                (datata) => {},
                                (error) => {}
                            );
                        } else {
                            const INFO = [
                                element.AppName,
                                element.AppDescription,
                                element.AppColors,
                                element.AppConfiguration,
                                element.AppCreatedOn,
                                element.AppVersion,
                                "",
                                element.AppKeyWord,
                                element.AppPackageName,
                                element.AppCompany,
                                element.AndroidDesign,
                                element.AndroidFunctions,
                                element.DesktopDesign,
                                element.DesktopFunctions,
                                element.WebDesign,
                                element.WebFunctions,
                                element.SharedDesign,
                                element.SharedFunctions,
                                element.AppLogic,
                                element.AppRegion,
                                "",
                                element.AppCatergory,
                                element.AppIcon,
                                element.UpdatedOn,
                                element.Owner,
                            ];
                            UPDATEDATA(
                                "https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
                                "APPMANAGER",
                                element.ID,
                                INFO,
                                (datata) => {},
                                (error) => {}
                            );
                        }
                    } else {
                        console.error(`Invalid AppLogic date`);
                    }
                });
            })
            .catch((error) => console.log(error));
    }
};



const STOREINDEXEDDATA = (API, NAME) => {
    CHECKER(navigator.onLine, () => {
        GETDATA(
            API,
            NAME,
            (data) => {
                const DATA = { Name: NAME, data: data };
                STOREINDEXED(NAME, NAME, DATA, (data) => {
                    CHECKER(data === false, () => {
                        UPDATEINDEX(NAME, NAME, DATA, () => {});
                    });
                });
            },
            (data) => {
                console.log(data);
            }
        );
    });
};
const POSTDRIVEFILE = (FILENAME, FILEDATA, DRIVEFOLDER, callback, callback1) => {
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
const NAMING = (ELEMENT) => {
    return document.querySelector(ELEMENT);
};
const SCROLLPOINT = (POINT) => {
    const element = document.getElementById(POINT);
    if (sessionStorage.getItem("ScrollPoint")) {
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
};
const GETINDEXEDNONDATA = (dbName, storeName, callback) => {
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
const ASHMAIL = (EMAIL, SUBJECT, MESSAGE, callback, callback1) => {
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
