export const YEARSTAMP = (ELEMENT) => {

    const currentYear = new Date().getFullYear();

    const content = `\u00A9 ${currentYear}`;

    DISPLAY(ELEMENT, content);

};