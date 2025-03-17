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

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (() => {

eval("\nfigma.showUI(__html__);\nfigma.ui.onmessage = msg => {\n    if (msg.type === 'create-rectangles') {\n        const nodes = [];\n        for (let i = 0; i < msg.count; i++) {\n            const rect = figma.createRectangle();\n            rect.resize(150, 150);\n            rect.x = i * 200;\n            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];\n            figma.currentPage.appendChild(rect);\n            nodes.push(rect);\n        }\n        figma.currentPage.selection = nodes;\n        figma.viewport.scrollAndZoomIntoView(nodes);\n    }\n};\n\n\n//# sourceURL=webpack://cursorrules-figmaplugin/./src/code.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;