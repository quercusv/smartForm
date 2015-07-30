module.exports = function (num, origPos) {
    
    var place = {},
        newPos;
    var len = '_'+num.length;
    
    if (num.length === 0) { 
        return 0;
    }
    
    place["_1"] = function() {
        newPos = 2;
    };
    place["_2"] = function() {
        newPos = 3;
    };
    place["_3"] = function() {
        newPos = 4;
    };
    place["_4"] = function() {
        newPos = 7;
    };
    place["_5"] = function() {
        newPos = 8;
    };
    place["_6"] = function() {
        newPos = 9;
    };
    place["_7"] = function() {
        newPos = 11;
    };
    place["_8"] = function() {
        newPos = 12;
        if (newPos != origPos) {
            newPos = origPos;
        }
    };
    place["_9"] = function() {
        newPos = 13;
        if (newPos != origPos) {
            newPos = origPos;
        }
    };
    place["_10"] = function() {
        newPos = 14;
        if (newPos != origPos) {
            newPos = origPos;
        }
    };
    
    place[len]();
    
    return newPos;
    
}