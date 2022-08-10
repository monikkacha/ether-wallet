export const getDecoratedPublicKey = (str) => str.substr(0, 8) + '.....' + str.substr(39, str.length);

export const convertTimestampToDate = (timestamp) => new Date(timestamp * 1000).toLocaleDateString();

export const removeExtraDecimal = (amount) => amount.substr(0, 6);

export const removeExtraDecimalDollar = (amount) => {
    console.log('amount', amount);
    const strArray = amount.split(".");
    console.log('strArray ', strArray);
    return strArray[0] + strArray[1].substr(0, 2);
};