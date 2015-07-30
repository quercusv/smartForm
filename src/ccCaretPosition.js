module.exports = function (num, origCarPos,cardType) {
    
    var len = num.length;
    
    if(cardType != 'AMEX') {
        if(len === 5 || len === 9 || len === 13) {

            return origCarPos+2;

        } else {
            return origCarPos;
        }
    } else {
        if(len === 5 || len === 11) {
            return origCarPos+2;
        } else {
            return origCarPos;
        }
    }
}