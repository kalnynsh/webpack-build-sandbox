/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calcutator; });\n\nclass Calcutator {\n    sum(...args) {\n        return args.reduce((prev, current) => prev + current, 0);\n    }\n}\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/images/logo13x16.ico":
/*!**********************************!*\
  !*** ./src/images/logo13x16.ico ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo13x16-58847893a.ico\");\n\n//# sourceURL=webpack:///./src/images/logo13x16.ico?");

/***/ }),

/***/ "./src/images/logo192.png":
/*!********************************!*\
  !*** ./src/images/logo192.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo192-72dfa848f.png\");\n\n//# sourceURL=webpack:///./src/images/logo192.png?");

/***/ }),

/***/ "./src/images/logo512.png":
/*!********************************!*\
  !*** ./src/images/logo512.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo512-5d545fcac.png\");\n\n//# sourceURL=webpack:///./src/images/logo512.png?");

/***/ }),

/***/ "./src/images/logo60x73.png":
/*!**********************************!*\
  !*** ./src/images/logo60x73.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo60x73-170827ce3.png\");\n\n//# sourceURL=webpack:///./src/images/logo60x73.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ \"./src/logger.js\");\n/* harmony import */ var _images_logo60x73_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo60x73.png */ \"./src/images/logo60x73.png\");\n/* harmony import */ var _images_logo13x16_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo13x16.ico */ \"./src/images/logo13x16.ico\");\n/* harmony import */ var _images_logo192_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo192.png */ \"./src/images/logo192.png\");\n/* harmony import */ var _images_logo512_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/logo512.png */ \"./src/images/logo512.png\");\n\n\n\n\n\n\n\n\nconst calculator = new _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst logger = new _logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nlogger.log(\n    calculator.sum(43,96,71,75)\n);\n\nconst logoImg = document.createElement('img');\nlogoImg.src = _images_logo60x73_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\ndocument\n    .getElementById('root')\n    .appendChild(logoImg)\n;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\n\nclass Logger {\n    log(message) {\n        console.log('-----------------');\n        console.log(message);\n        console.log('-----------------');\n    }\n}\n\n\n//# sourceURL=webpack:///./src/logger.js?");

/***/ })

/******/ });