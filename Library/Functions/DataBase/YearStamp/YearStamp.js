export const YEARSTAMP = (ELEMENT,DATA,COLORED) => {

    const currentYear = new Date().getFullYear();

    const content = `<p style="margin: auto;color:${COLORED}||#FFFFFF">\u00A9 ${currentYear} ,${DATA} </p>`;

    DISPLAY(ELEMENT, content);

};