export const SWITCHER = (WIDTH, callback, callback2) => {

    const screenWidth = window.screen.width;

    if (screenWidth >= WIDTH || screenWidth >= 800) {

        callback();

    } else {

        callback2();

    }
    
};
