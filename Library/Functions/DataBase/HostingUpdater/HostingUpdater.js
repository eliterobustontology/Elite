export const HOSTINGUPDATER = () => {
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