var stripAlpha = require('./strip-alpha');

module.exports = function detectCardType(number) {
    
    number = Number(stripAlpha(number));
    
    var re = {
        visa: /^4[0-9]/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6(?:011|5[0-9]{2})/
    };
    
    if (re.visa.test(number)) {
        return 'VISA';
    } else if (re.mastercard.test(number)) {
        return 'MASTERCARD';
    } else if (re.amex.test(number)) {
        return 'AMEX';
    } else if (re.discover.test(number)) {
        return 'DISCOVER';
    } else  {
        return undefined;
    }
}
