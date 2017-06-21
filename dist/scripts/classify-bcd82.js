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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_sass_index_scss__);

var flag = false;
const haederClassify = document.querySelector(".haeder-classify");
const aLi = haederClassify.getElementsByTagName("li");
const integratingRange = document.querySelector(".integrating-range");
const aDd = integratingRange.getElementsByTagName("dd");
const mask = document.querySelector(".mask");
const classifyContainer = document.querySelector(".classify-container");
const ifyLi = classifyContainer.getElementsByTagName("li");
const classifyList = document.querySelector(".classify-list");

//选择列表
for (var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	aLi[i].onclick = function () {
		for (var j = 0; j < aLi.length; j++) {
			aLi[j].className = "";
		}
		aLi[this.index].className = "on";
		if (this.index == 2 && !flag) {
			intShow();
		} else {
			intHide();
		}
	};
}
//积分区间列表
for (var i = 0; i < aDd.length; i++) {
	aDd[i].index = i;
	aDd[i].onclick = function () {
		for (var j = 0; j < aDd.length; j++) {
			aDd[j].className = "";
		}
		aDd[this.index].className = "active";
		intHide();
	};
}
//推荐列表
for (var i = 0; i < ifyLi.length; i++) {
	ifyLi[i].index = i;
	ifyLi[i].onclick = function () {
		for (var j = 0; j < ifyLi.length; j++) {
			ifyLi[j].className = "";
		}
		ifyLi[this.index].className = "active";
		//这个是多余的是调数据的
		if (this.index == 1) {
			classifyList.innerHTML = "1";
		} else if (this.index == 2) {
			classifyList.innerHTML = "2";
		} else if (this.index == 3) {
			classifyList.innerHTML = "3";
		} else if (this.index == 4) {
			classifyList.innerHTML = "4";
		}
	};
}

//点击覆盖层
mask.onclick = function () {
	intHide();
};
function intShow() {
	integratingRange.className = "integrating-range on";
	mask.style.display = "block";
	flag = true;
}
function intHide() {
	integratingRange.className = "integrating-range";
	mask.style.display = "none";
	flag = false;
}

/***/ })
/******/ ]);