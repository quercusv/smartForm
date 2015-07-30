(function(window){

    var stripAlpha = require('./strip-alpha');
    var formatPhone = require('./format-phone');
    var formatCC = require('./format-credit-card');
    var getCardType = require('./get-card-type');
    var emailIsValid = require('./validate-email');
    var cardIsValid = require('./validate-card');
    var phoneIsValid = require('./validate-phone');
    var setCaretPosition = require('./setCaretPosition');

    var smartForm = Object.create(null);
    smartForm.stripAlpha = stripAlpha;
    smartForm.formatPhone = formatPhone;
    smartForm.getCardType = getCardType;
    smartForm.formatCC = formatCC;
    smartForm.emailIsValid = emailIsValid;
    smartForm.cardIsValid = cardIsValid;
    smartForm.phoneIsValid = phoneIsValid;
    smartForm.setCaretPosition = setCaretPosition;
    
    window.smartForm = smartForm;
    
})(window)