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

/***/ "./src/js/Circle.js":
/*!**************************!*\
  !*** ./src/js/Circle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Circle {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.r = 1;\r\n        this.growing = true;\r\n    }\r\n    update(others) {\r\n        if (this.growing) {\r\n            this.r += 1;\r\n        }\r\n        if (this.x + this.r > 500 ||\r\n            this.x - this.r < 0 ||\r\n            this.y + this.r > 500 ||\r\n            this.y - this.r < 0) {\r\n            this.growing = false;\r\n        }\r\n        for (let i = 0; i < others.length; i++) {\r\n            const o = others[i];\r\n            if (o.r + this.r + 2 > this.dist(o) && this !== o) {\r\n                this.growing = false;\r\n                return;\r\n            }\r\n        }\r\n    }\r\n    draw(ctx) {\r\n        ctx.strokeStyle = \"#fff\";\r\n        ctx.beginPath();\r\n        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);\r\n        ctx.stroke();\r\n    }\r\n    dist(other) {\r\n        const dX = Math.abs(this.x - other.x);\r\n        const dY = Math.abs(this.y - other.y);\r\n        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));\r\n    }\r\n}\r\nexports[\"default\"] = Circle;\r\n\n\n//# sourceURL=webpack://circlepacking/./src/js/Circle.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Circle_1 = __importDefault(__webpack_require__(/*! ./Circle */ \"./src/js/Circle.js\"));\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst circles = [];\r\nlet finished = false;\r\n// for (let i = 0; i < 100; i++) {\r\n//   circles.push(\r\n//     new Circle(Math.random() * canvas.width, Math.random() * canvas.height)\r\n//   );\r\n// }\r\nfunction addCircle() {\r\n    const randomX = Math.random() * canvas.width;\r\n    const randomY = Math.random() * canvas.height;\r\n    for (let i = 0; i < circles.length; i++) {\r\n        const other = circles[i];\r\n        if (randomX > other.x - other.r - 2 &&\r\n            randomX < other.x + other.r + 2 &&\r\n            randomY > other.y - other.r - 2 &&\r\n            randomY < other.y + other.r + 2) {\r\n            return;\r\n        }\r\n    }\r\n    return { x: randomX, y: randomY };\r\n}\r\nfunction drawScene() {\r\n    let tries = 0;\r\n    while (tries < 1000) {\r\n        const coords = addCircle();\r\n        if (coords !== undefined) {\r\n            circles.push(new Circle_1.default(coords.x, coords.y));\r\n            break;\r\n        }\r\n        tries++;\r\n        if (tries >= 1000) {\r\n            finished = true;\r\n            console.log(\"Finished!\");\r\n        }\r\n    }\r\n    // circles.push(\r\n    //   new Circle(Math.random() * canvas.width, Math.random() * canvas.height)\r\n    // );\r\n    circles.forEach((c) => {\r\n        c.draw(ctx);\r\n        c.update(circles);\r\n    });\r\n}\r\nfunction clearScene() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n}\r\nsetInterval(() => {\r\n    if (!finished) {\r\n        clearScene();\r\n        drawScene();\r\n    }\r\n}, 20);\r\n\n\n//# sourceURL=webpack://circlepacking/./src/js/main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;