/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function(window){

	    var stripAlpha = __webpack_require__(2);
	    var formatPhone = __webpack_require__(3);
	    var formatCC = __webpack_require__(5);
	    var getCardType = __webpack_require__(6);
	    var emailIsValid = __webpack_require__(1);
	    var cardIsValid = __webpack_require__(9);
	    var phoneIsValid = __webpack_require__(10);
	    var setCaretPosition = __webpack_require__(11);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function format(str) {
	    var isTrue = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(str);
	    return isTrue;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (str) {
	    return str.replace(/[^0-9]/g, '');
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var stripAlpha = __webpack_require__(2);
	var charPos = __webpack_require__(4);

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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var stripAlpha = __webpack_require__(2);
	var getCardType = __webpack_require__(6);
	var formatter = __webpack_require__(7);
	var ccCarPos = __webpack_require__(8);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var stripAlpha = __webpack_require__(2);

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


/***/ },
/* 7 */
/***/ function(module, exports) {

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

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var strip = __webpack_require__(2);
	var type = __webpack_require__(6);

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var strip = __webpack_require__(2);

	module.exports = function (num) {
	    
	    num = strip(num);
	    
	    return (num.length === 10) ? true : false;
	    
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function (node,pos){

	    if(!node){
	        return false;
	    } else if(node.createTextRange) {
	        var textRange = node.createTextRange();
	        textRange.collapse(true);
	        textRange.moveEnd(pos);
	        textRange.moveStart(pos);
	        textRange.select();
	        return true;
	        
	    } else if(node.setSelectionRange) {
	        node.setSelectionRange(pos,pos);
	        return true;
	    }
	}

/***/ }
/******/ ]);