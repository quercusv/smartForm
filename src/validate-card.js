var strip = require('./strip-alpha');
var type = require('./get-card-type');

module.exports = function (num) {
    
    var cardType, num = strip(num);
    
    var cardType = type(num);
    
    if(cardType === 'AMEX') {
        if(num.length ===15) {
            return true;
        } else {
            return false;
        }
    } else {
        if(num.length === 16) {
            return true;
        } else {
            return false;
        }
    }
    
    
};