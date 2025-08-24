export const YEARSTAMP = (ELEMENT, DATA, COLORED) => {

    const currentYear = new Date().getFullYear();

    const color = COLORED || '#FFFFFF';

    const content = `<p style="margin: auto; color: ${color}">\u00A9 ${currentYear}, ${DATA}</p>`;

    DISPLAY(ELEMENT, content);

};
