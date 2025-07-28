export const TOAST = (Message) => {
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
