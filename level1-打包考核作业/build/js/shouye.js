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

/***/ "./src/js/shouye.js":
/*!**************************!*\
  !*** ./src/js/shouye.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_shouye_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/shouye.css */ \"./src/css/shouye.css\");\n// import '../media/fa/css/all.css'\r\n\r\n\r\n\r\nwindow.addEventListener('load', function() {\r\n    //animate.js\r\n    //obj为目标对象，target为目标位置\r\n    function animate(obj, target, callback) {\r\n        //停止定时器\r\n        clearInterval(obj.timer);\r\n        obj.timer = setInterval(function() {\r\n            var step = (target - obj.offsetLeft) / 10;\r\n            step = step > 0 ? Math.ceil(step) : Math.floor(step);\r\n            if (obj.offsetLeft == target) {\r\n                clearInterval(obj.timer);\r\n                //回调函数的调用写在定时器结束里面\r\n                if (callback) {\r\n                    //调用函数\r\n                    callback();\r\n                }\r\n            }\r\n            obj.style.left = obj.offsetLeft + step + 'px';\r\n        }, 15);\r\n    }\r\n\r\n    // 设置imgsList宽度\r\n    // var imgsList = document.getElementById(\"imgsList\");\r\n    // var imgArr = document.getElementsByTagName(\"img\");\r\n    // imgsList.style.width = 600 * imgArr.length + \"px\";\r\n\r\n\r\n    //点击按钮切换图片  \r\n    //要切换图片就是要修改img标签的src属性  \r\n\r\n    //获取两个按钮\r\n    var prev = document.getElementById('angleLeft');\r\n    var next = document.getElementById(\"angleRight\");\r\n    //获取imgsList\r\n    var imgsList = document.getElementById('imgsList');\r\n\r\n    //创建一个变量，来保存当前正在显示的图片的索引  \r\n    var index = 0;\r\n    var num = 0;\r\n    var circle = 0;\r\n\r\n    var allA = document.getElementById('pointer').getElementsByClassName('navs');\r\n    //设置默认选中的效果\r\n    allA[index].style.backgroundColor = '#fff';\r\n    //记录小圆圈的索引号，通过自定义属性\r\n    for (var i = 0; i < allA.length; i++) {\r\n        allA[i].setAttribute('index', i);\r\n        //绑定点击事件\r\n        allA[i].addEventListener('click', function() {\r\n            allA[index].style.backgroundColor = '';\r\n\r\n            //小圆圈的排他思想\r\n            for (var i = 0; i < allA.length; i++) {\r\n                allA[i].className = 'navs';\r\n            }\r\n            this.classList.add('active');\r\n            // console.log(this);\r\n            //当我们点击了某个小圆圈，拿到当前小圆圈的索引号\r\n            index = this.getAttribute('index');\r\n            num = circle = index;\r\n            //点击小圆圈，移动图片\r\n            animate(imgsList, -index * 600);\r\n        })\r\n    }\r\n    //点击右侧按钮，图片滚动\r\n    //无缝滚动\r\n    //为得到点击的小圆圈的索引号，去前面申明\r\n    // var num = index;\r\n    //circle控制小圆圈的播放\r\n    // var circle = index;\r\n    next.addEventListener('click', function() {\r\n        allA[index].style.backgroundColor = '';\r\n\r\n        //移动到最后一张照片，快速复原==left改为0，num=0\r\n        if (num == 8) {\r\n            imgsList.style.left = 0;\r\n            num = 0;\r\n        }\r\n        num++;\r\n        animate(imgsList, -num * 600);\r\n        //点击右侧按钮，小圆圈跟随一起变化，声明一个circle变量控制小圆圈的播放\r\n        //注意图片比原点多一张\r\n        circle++;\r\n        if (circle == 8) {\r\n            circle = 0;\r\n        }\r\n        //进行排他算法\r\n        for (var i = 0; i < allA.length; i++) {\r\n            allA[i].className = 'navs';\r\n        }\r\n        allA[circle].classList.add('active');\r\n    })\r\n\r\n    //点击左侧按钮\r\n    prev.addEventListener('click', function() {\r\n        allA[index].style.backgroundColor = '';\r\n\r\n        //移动到第一张照片，快速到最后一张==left改为6000，num=8\r\n        if (num == 0) {\r\n            imgsList.style.left = -5800;\r\n            // num = imgsList.children.length - 1;\r\n            num = 8;\r\n        }\r\n        num--;\r\n        animate(imgsList, -num * 600);\r\n        //点击左侧按钮，小圆圈跟随一起变化，声明一个circle变量控制小圆圈的播放\r\n        //注意图片比原点多一张\r\n        if (circle == 0) {\r\n            // circle = imgsList.children.length - 1;\r\n            circle = 8;\r\n        }\r\n        circle--;\r\n        // console.log(circle);\r\n        //进行排他算法\r\n        for (var i = 0; i < allA.length; i++) {\r\n            allA[i].className = 'navs';\r\n        }\r\n        allA[circle].className = 'navs active';\r\n    })\r\n\r\n    //自动播放模块\r\n    var timer = setInterval(function() {\r\n        //手动点击事件\r\n        next.click();\r\n    }, 5000);\r\n    //鼠标经过，定时器停止\r\n    var outer = document.getElementById('outer');\r\n    outer.addEventListener('mouseenter', function() {\r\n        clearInterval(timer);\r\n        //清除定时器变量\r\n        timer = null;\r\n    })\r\n    outer.addEventListener('mouseleave', function() {\r\n        timer = setInterval(function() {\r\n            //手动点击事件\r\n            next.click();\r\n        }, 2000);\r\n    })\r\n\r\n    //出现下拉菜单\r\n    $(function() {\r\n        /* //鼠标经过\r\n        $(\".items,.application\").mouseover(function() {\r\n            $(\".application\").show();\r\n        })\r\n\r\n        //鼠标离开\r\n        $(\".items,.application\").mouseout(function() {\r\n            $(\".application\").hide();\r\n        }) */\r\n        $(\".items,.application\").hover(function() {\r\n            $(\".application\").show();\r\n        }, function() {\r\n            $(\".application\").hide();\r\n        });\r\n    })\r\n\r\n})\n\n//# sourceURL=webpack:///./src/js/shouye.js?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/reset.css?");

/***/ }),

/***/ "./src/css/shouye.css":
/*!****************************!*\
  !*** ./src/css/shouye.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/shouye.css?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/shouye.js");
/******/ 	
/******/ })()
;