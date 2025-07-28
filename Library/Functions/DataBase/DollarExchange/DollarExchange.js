export const DOLLAREXCHANGE = (CONVERSION, AMOUNT, callback) => {
    let Amount;
    if (CONVERSION === "USD") {
        Amount = AMOUNT / 3668.62;
    } else {
        Amount = AMOUNT * 3666;
    }
    const roundedAmount = Math.round(Amount * 100) / 100;
    callback(roundedAmount);
};