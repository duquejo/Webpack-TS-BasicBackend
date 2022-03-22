/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar initialState = __webpack_require__(/*! ./initialState.json */ \"./src/initialState.json\");\r\nvar app = express();\r\nvar port = 3000;\r\napp.get('/', function (req, res) {\r\n    console.log(initialState);\r\n    res.send('Hello typescript!');\r\n});\r\napp.get('/api/v1', function (req, res) {\r\n    res.json(initialState);\r\n});\r\napp.listen(port, function () {\r\n    console.log(\"App listening on port: \".concat(port));\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "./src/initialState.json":
/*!*******************************!*\
  !*** ./src/initialState.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"cart\":[],\"products\":[{\"id\":\"1\",\"image\":\"https://arepa.s3.amazonaws.com/camiseta.png\",\"title\":\"Camiseta\",\"price\":25,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"},{\"id\":\"3\",\"image\":\"https://arepa.s3.amazonaws.com/mug.png\",\"title\":\"Mug\",\"price\":10,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"},{\"id\":\"4\",\"image\":\"https://arepa.s3.amazonaws.com/pin.png\",\"title\":\"Pin\",\"price\":4,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"},{\"id\":\"5\",\"image\":\"https://arepa.s3.amazonaws.com/stickers1.png\",\"title\":\"Stickers\",\"price\":2,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"},{\"id\":\"6\",\"image\":\"https://arepa.s3.amazonaws.com/stickers2.png\",\"title\":\"Stickers\",\"price\":2,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"},{\"id\":\"7\",\"image\":\"https://arepa.s3.amazonaws.com/hoodie.png\",\"title\":\"Hoodie\",\"price\":35,\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit\"}]}');\n\n//# sourceURL=webpack://webpack/./src/initialState.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;