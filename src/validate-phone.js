var strip = require('./strip-alpha');

module.exports = function (num) {
    
    num = strip(num);
    
    return (num.length === 10) ? true : false;
    
};