export const getDecoratedPublicKey = (str) => str.substr(0, 8) + '.....' + str.substr(39, str.length);

export const convertTimestampToDate = (timestamp) => new Date(timestamp * 1000).toLocaleDateString();