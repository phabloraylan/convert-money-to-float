const moneyToFloat = (value) => {

    let currency = value;
    let regex = /([+-]?[0-9|^.|^,]+)[\.|,]([0-9]+)$/igm
    let result = regex.exec(currency);
    let floatResult = result ? result[1].replace(/[.,]/g, "") + "." + result[2] : currency.replace(/[^0-9-+]/g, "");

    return floatResult;
}

module.exports = moneyToFloat;