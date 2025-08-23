export const YEARSTAMP = (ELEMENT,DATA) => {

    const currentYear = new Date().getFullYear();

    const content = `<p style="margin: auto;">\u00A9 ${currentYear} ,${DATA} </p>`;

    DISPLAY(ELEMENT, content);

};