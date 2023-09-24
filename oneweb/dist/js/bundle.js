/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/range.js":
/*!*********************************!*\
  !*** ./src/js/modules/range.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function range (){
    let slider = document.querySelector('#range');
    let setImg = document.querySelectorAll('.img_collection img');
    slider.oninput = function (){
        if(slider.value > 0 && slider.value < 41){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 0 || i == 3 || i == 5 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
        }
        if(slider.value > 41 &&  slider.value < 68){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 2 || i == 5 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
            
        }
        if(slider.value >= 68 && slider.value < 95){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 3 || i == 4 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
        }
        if(slider.value > 95 && slider.value <= 100 ){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 3 || i == 5 || i == 6){
                    setImg[i].style.display = 'inline-block';
                }
            }
        
        }
}
}

/* harmony default export */ __webpack_exports__["default"] = (range);



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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/range */ "./src/js/modules/range.js");


document.addEventListener('DOMContentLoaded', () =>{
   (0,_modules_range__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map