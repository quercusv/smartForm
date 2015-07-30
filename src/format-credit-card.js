var stripAlpha = require('./strip-alpha');
var getCardType = require('./get-card-type');
var formatter = require('./card-format-functions');
var ccCarPos = require('./ccCaretPosition');

module.exports = function (input,origCarPos) {
    
    var response = {};
    
    input = stripAlpha(input);
    
    if(input.length > 3) {
        
        response.cardType = getCardType(input);
        
        response.string = formatter(input,response.cardType);
        
        if(origCarPos) {
            response.caretPosition = ccCarPos(input,origCarPos,response.cardType);
        }
        
        return response;
    }
    
}