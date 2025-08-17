export const MONTHTIME = (inputDate, callback) => {

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