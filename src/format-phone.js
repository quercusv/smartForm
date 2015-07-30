var stripAlpha = require('./strip-alpha');
var charPos = require('./phone-char-position');

module.exports = function (input, carPos) {
    
    var theNumber = stripAlpha(input);
    var len = '_'+ theNumber.length;
    var newStr;
    var response;
    
    var format = [];

    format._0 = function (str) {
        newStr = str;
        
    };

    format._1 = function (str) {
        newStr = '('+ str;
    };

    format._2 = function (str) {
        newStr = '('+str;
    };

    format._3 = function (str) {
        newStr = '('+str;
    };

    format._4 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3);
    };

    format._5 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3);
    };

    format._6 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3);
    };

    format._7 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3,6) +'-'+ str.substr(6);
    };

    format._8 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3,6) +'-'+ str.substr(6);
    };

    format._9 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3,6) +'-'+ str.substr(6);
    };

    format._10 = function (str) {
        newStr = '('+ str.substr(0,3) +') '+ str.slice(3,6) +'-'+ str.substr(6);
    };
    
    if(theNumber.length <= 10) {
        format[len](theNumber);
        return (carPos || carPos == 0) ? {string:newStr, caretPosition:charPos(theNumber, carPos)} : newStr;
    }
    
};