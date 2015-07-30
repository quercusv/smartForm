module.exports = function (num, type) {
    
    var re,format, len, amex = {};
    
    amex['_1'] = function (str) {
        return num;
    };
    amex['_2'] = function (str) {
        return num;
    };
    amex['_3'] = function (str) {
        return num;
    };
    amex['_4'] = function (str) {
        return num;
    };
    amex['_5'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4);
    };
    amex['_6'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4);
    };
    amex['_7'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4);
    };
    amex['_8'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4);
    };
    amex['_9'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4);
    };
    amex['_10'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4) +' ';
    };
    amex['_11'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
    };
    amex['_12'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
    };
    amex['_13'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
    };
    amex['_14'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
    };
    amex['_15'] = function (str) {
        return str.substr(0,4) +' '+ str.slice(4,10) +' '+ str.substr(10);
    };
    
    
    if(type === 'AMEX') {
        len = '_'+num.length;
        format = amex[len](num);
    } else {
        re = num.match(/.{1,4}/g);
        format = (re) ? re.join(" ") : "";
    }
    
    return format;
};