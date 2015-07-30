module.exports = function format(str) {
    var isTrue = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(str);
    return isTrue;
};