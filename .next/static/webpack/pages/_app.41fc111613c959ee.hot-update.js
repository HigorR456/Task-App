"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n}\\nbody #__next {\\n  height: 100%;\\n}\\nbody #__next #indexWrap {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  background: var(--bg-primary);\\n}\\nbody #__next #indexWrap .bgImage {\\n  position: absolute;\\n  z-index: -1;\\n  opacity: 0.5;\\n  width: 500px;\\n}\\n\\nheader {\\n  border: 3px solid red;\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n}\\nheader div {\\n  display: grid;\\n  justify-content: space-between;\\n  align-items: center;\\n  max-width: 1000px;\\n}\\n\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.footerWrap div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n  max-width: 1000px;\\n}\\n.appWrap .taskIncrementWrap {\\n  background: rgba(0, 0, 0, 0.3);\\n  width: 80%;\\n  height: 55px;\\n  margin: 5px;\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask input {\\n  width: 100%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert {\\n  background: rgb(255, 230, 230);\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert::placeholder {\\n  color: red;\\n}\\n.appWrap .taskIncrementWrap .incrementStart {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementStart input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementMin {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementMin input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button {\\n  display: flex;\\n  align-items: center;\\n  font-size: 30px;\\n  padding: 0;\\n  height: 30px;\\n  background: 0;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button .plusIcon {\\n  color: var(--text-primary);\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:hover {\\n  cursor: pointer;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:active {\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n\\n.toggleBg {\\n  background: red;\\n}\\n\\n.splitterWrap {\\n  width: 80%;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.splitterWrap * {\\n  background: 0;\\n  border: 0;\\n  color: var(--text-primary);\\n  font-family: sans-serif;\\n  font-weight: bold;\\n}\\n.splitterWrap button {\\n  display: flex;\\n  font-size: 15px;\\n  height: 30px;\\n  align-items: center;\\n  margin: 3px;\\n  background: 0;\\n  border: 0;\\n  opacity: 0.3;\\n}\\n.splitterWrap button:hover {\\n  cursor: pointer;\\n  opacity: 1;\\n}\\n.splitterWrap button:active {\\n  cursor: pointer;\\n  opacity: 1;\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n.splitterWrap input {\\n  width: 90%;\\n  height: 25px;\\n  background: var(--bg-primary);\\n  color: var(--input-text);\\n}\\n.splitterWrap .splitTask {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n  word-break: break-word;\\n}\\n.splitterWrap .splitStart {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitMin {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn button {\\n  opacity: 1;\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {\\n    margin-top: -50px;\\n  }\\n}\\n@keyframes removingTransition {\\n  0% {\\n    margin-top: 0px;\\n    opacity: 1;\\n  }\\n  100% {\\n    margin-top: -50px;\\n    opacity: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,YAAA;AAFF;;AAKA;EACE,YAAA;EACA,SAAA;AAFF;AAGE;EACE,YAAA;AADJ;AAEI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,6BAAA;AAAN;AAEM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AAAR;;AAOA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,4BAAA;EACA,6BAAA;EAIA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAPF;AASE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;AAPJ;;AAaA;EACE,gBAAA;EACA,gBAAA;EAEA,iBAAA;EACA,0BAAA;EACA,+BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAXF;AAaE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAXJ;;AAgBA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,iBAAA;AAdF;AAgBE;EACE,8BAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AAfJ;AAiBI;EACI,UAAA;EACA,oBAAA;AAfR;AAgBQ;EAAO,WAAA;EAAa,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAV9D;AAYQ;EACE,8BAAA;AAVV;AAWU;EAAiB,UAAA;AAR3B;AAaI;EACE,UAAA;EACA,oBAAA;AAXN;AAYM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAN3D;AASI;EACE,UAAA;EACA,oBAAA;AAPN;AAQM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAF3D;AAKI;EACE,UAAA;EACA,oBAAA;AAHN;AAIM;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAFR;AAGQ;EACE,0BAAA;AADV;AAGQ;EACE,eAAA;AADV;AAGQ;EACE,8BAAA;AADV;;AAUA;EACE,eAAA;AAPF;;AAWA;EACE,UAAA;EACA,gBAAA;EACA,WAAA;EACA,8BAAA;EACA,uCAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AATF;AAWE;EACI,aAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,iBAAA;AATN;AAYE;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;EACA,YAAA;AAVJ;AAYI;EACE,eAAA;EACA,UAAA;AAVN;AAaI;EACE,eAAA;EACA,UAAA;EACA,8BAAA;AAXN;AAgBE;EACE,UAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;AAdJ;AAiBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,sBAAA;AAfJ;AAkBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAhBJ;AAmBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAjBJ;AAoBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAlBJ;AAmBI;EAAS,UAAA;AAhBb;;AAoBA;EACE,kCAAA;EACA,sCAAA;AAjBF;;AAoBA;EACE,oCAAA;EACA,sCAAA;AAjBF;;AAoBA;EACE;IAAI,iBAAA;EAhBJ;AACF;AAkBA;EACE;IAAI,eAAA;IAAiB,UAAA;EAdrB;EAeA;IAAM,iBAAA;IAAmB,UAAA;EAXzB;AACF\",\"sourcesContent\":[\":root {\\n}\\n\\nhtml { \\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  #__next {\\n    height: 100%;\\n    #indexWrap {\\n      display: flex;\\n      flex-direction: column;\\n      height: 100%;\\n      background: var(--bg-primary);\\n\\n      .bgImage {\\n        position: absolute;\\n        z-index: -1;\\n        opacity: 0.5;\\n        width: 500px;\\n      }\\n    }\\n  }\\n}\\n\\n//header\\nheader {\\n  border: 3px solid red;\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n\\n  \\n\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n\\n  div {\\n    display: grid;\\n    justify-content: space-between;\\n    align-items: center;\\n    max-width: 1000px;\\n  }\\n}\\n\\n\\n//footer\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  div {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n}\\n\\n//index\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n\\n  align-self: center;\\n  max-width: 1000px;\\n\\n  .taskIncrementWrap {\\n    background: rgba(0, 0, 0, 0.3);\\n    width: 80%;\\n    height: 55px;\\n    margin: 5px;\\n\\n    display: grid;\\n    grid-template-columns: auto 90px 40px;\\n    align-items: center;\\n\\n    .incrementTask {\\n        width: 90%;\\n        justify-self: center;\\n        input {width: 100%; height: 25px; border-radius: 2px; border: 0; }\\n\\n        .inputAlert {\\n          background: rgb(255, 230, 230);\\n          &::placeholder { color: red; }\\n\\n        }\\n    }\\n\\n    .incrementStart {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .incrementMin {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .buttonWrap {\\n      width: 90%;\\n      justify-self: center;\\n      button {\\n        display: flex;\\n        align-items: center;\\n        font-size: 30px;\\n        padding: 0;\\n        height: 30px;\\n        background: 0;\\n        border: 0;\\n        .plusIcon {\\n          color: var(--text-primary);\\n        }\\n        &:hover {\\n          cursor: pointer;\\n        }\\n        &:active {\\n          background: rgb(0, 0, 0, 0.2);\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n//splitter\\n.toggleBg {\\n  background: red;\\n}\\n\\n\\n.splitterWrap {\\n  width: 80%;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n\\n  * {\\n      background: 0;\\n      border: 0;\\n      color: var(--text-primary);\\n      font-family: sans-serif;\\n      font-weight: bold;\\n  }\\n\\n  button {\\n    display: flex;\\n    font-size: 15px;\\n    height: 30px;\\n    align-items: center;\\n    margin: 3px;\\n    background: 0;\\n    border: 0;\\n    opacity: 0.3;\\n\\n    &:hover {\\n      cursor: pointer;\\n      opacity: 1;\\n    }\\n\\n    &:active {\\n      cursor: pointer;\\n      opacity: 1;\\n      background: rgb(0, 0, 0, 0.2);\\n    }\\n  }\\n\\n  \\n  input { \\n    width: 90%; \\n    height: 25px;\\n    background: var(--bg-primary); \\n    color: var(--input-text); \\n  }\\n\\n  .splitTask {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    word-break: break-word;\\n  }\\n\\n  .splitStart {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitMin {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitBtn {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    button { opacity: 1; }\\n  }\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {margin-top: -50px;}\\n}\\n\\n@keyframes removingTransition {\\n  0% {margin-top: 0px; opacity: 1;}\\n  100% {margin-top: -50px; opacity: 0;}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGNBQWMsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtDQUFrQyxHQUFHLG9DQUFvQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsR0FBRyxZQUFZLDBCQUEwQixjQUFjLGVBQWUsaUNBQWlDLGtDQUFrQyxrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLEdBQUcsY0FBYyxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsR0FBRyxpQkFBaUIscUJBQXFCLHFCQUFxQixzQkFBc0IsK0JBQStCLG9DQUFvQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsc0JBQXNCLEdBQUcsK0JBQStCLG1DQUFtQyxlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyx3QkFBd0IsR0FBRyw4Q0FBOEMsZUFBZSx5QkFBeUIsR0FBRyxvREFBb0QsZ0JBQWdCLGlCQUFpQix1QkFBdUIsY0FBYyxHQUFHLDBEQUEwRCxtQ0FBbUMsR0FBRyx1RUFBdUUsZUFBZSxHQUFHLCtDQUErQyxlQUFlLHlCQUF5QixHQUFHLHFEQUFxRCxlQUFlLGlCQUFpQix1QkFBdUIsY0FBYyxHQUFHLDZDQUE2QyxlQUFlLHlCQUF5QixHQUFHLG1EQUFtRCxlQUFlLGlCQUFpQix1QkFBdUIsY0FBYyxHQUFHLDJDQUEyQyxlQUFlLHlCQUF5QixHQUFHLGtEQUFrRCxrQkFBa0Isd0JBQXdCLG9CQUFvQixlQUFlLGlCQUFpQixrQkFBa0IsY0FBYyxHQUFHLDREQUE0RCwrQkFBK0IsR0FBRyx3REFBd0Qsb0JBQW9CLEdBQUcseURBQXlELG1DQUFtQyxHQUFHLGVBQWUsb0JBQW9CLEdBQUcsbUJBQW1CLGVBQWUscUJBQXFCLGdCQUFnQixtQ0FBbUMsNENBQTRDLGtCQUFrQiwwQ0FBMEMsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQixjQUFjLCtCQUErQiw0QkFBNEIsc0JBQXNCLEdBQUcsd0JBQXdCLGtCQUFrQixvQkFBb0IsaUJBQWlCLHdCQUF3QixnQkFBZ0Isa0JBQWtCLGNBQWMsaUJBQWlCLEdBQUcsOEJBQThCLG9CQUFvQixlQUFlLEdBQUcsK0JBQStCLG9CQUFvQixlQUFlLG1DQUFtQyxHQUFHLHVCQUF1QixlQUFlLGlCQUFpQixrQ0FBa0MsNkJBQTZCLEdBQUcsNEJBQTRCLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLEdBQUcsNkJBQTZCLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsR0FBRywyQkFBMkIsZUFBZSxrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQixlQUFlLGtCQUFrQix3QkFBd0IseUJBQXlCLEdBQUcsa0NBQWtDLGVBQWUsR0FBRyxhQUFhLHVDQUF1QywyQ0FBMkMsR0FBRyxlQUFlLHlDQUF5QywyQ0FBMkMsR0FBRyxpQ0FBaUMsUUFBUSx3QkFBd0IsS0FBSyxHQUFHLGlDQUFpQyxRQUFRLHNCQUFzQixpQkFBaUIsS0FBSyxVQUFVLHdCQUF3QixpQkFBaUIsS0FBSyxHQUFHLE9BQU8sd0ZBQXdGLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLGdDQUFnQyxHQUFHLFdBQVcsaUJBQWlCLEdBQUcsVUFBVSxpQkFBaUIsY0FBYyxhQUFhLG1CQUFtQixrQkFBa0Isc0JBQXNCLCtCQUErQixxQkFBcUIsc0NBQXNDLG9CQUFvQiw2QkFBNkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsU0FBUyxPQUFPLEtBQUssR0FBRyxzQkFBc0IsMEJBQTBCLGNBQWMsZUFBZSxpQ0FBaUMsa0NBQWtDLDBCQUEwQixvQkFBb0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsV0FBVyxvQkFBb0IscUNBQXFDLDBCQUEwQix3QkFBd0IsS0FBSyxHQUFHLDZCQUE2QixxQkFBcUIscUJBQXFCLHdCQUF3QiwrQkFBK0Isb0NBQW9DLGtCQUFrQiw0QkFBNEIsd0JBQXdCLFdBQVcsb0JBQW9CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLG9CQUFvQix3QkFBd0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsMEJBQTBCLHFDQUFxQyxpQkFBaUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsNENBQTRDLDBCQUEwQix3QkFBd0IscUJBQXFCLCtCQUErQixpQkFBaUIsYUFBYSxjQUFjLG9CQUFvQixZQUFZLHlCQUF5QiwyQ0FBMkMsNkJBQTZCLGFBQWEsYUFBYSxPQUFPLHlCQUF5QixtQkFBbUIsNkJBQTZCLGVBQWUsWUFBWSxjQUFjLG9CQUFvQixXQUFXLE9BQU8sdUJBQXVCLG1CQUFtQiw2QkFBNkIsZUFBZSxZQUFZLGNBQWMsb0JBQW9CLFdBQVcsT0FBTyxxQkFBcUIsbUJBQW1CLDZCQUE2QixnQkFBZ0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIscUJBQXFCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLHFCQUFxQix1Q0FBdUMsV0FBVyxtQkFBbUIsNEJBQTRCLFdBQVcsb0JBQW9CLDBDQUEwQyxXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsNkJBQTZCLG9CQUFvQixHQUFHLHFCQUFxQixlQUFlLHFCQUFxQixnQkFBZ0IsbUNBQW1DLDRDQUE0QyxvQkFBb0IsMENBQTBDLHdCQUF3QixTQUFTLHNCQUFzQixrQkFBa0IsbUNBQW1DLGdDQUFnQywwQkFBMEIsS0FBSyxjQUFjLG9CQUFvQixzQkFBc0IsbUJBQW1CLDBCQUEwQixrQkFBa0Isb0JBQW9CLGdCQUFnQixtQkFBbUIsaUJBQWlCLHdCQUF3QixtQkFBbUIsT0FBTyxrQkFBa0Isd0JBQXdCLG1CQUFtQixzQ0FBc0MsT0FBTyxLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLHFDQUFxQyxnQ0FBZ0MsS0FBSyxrQkFBa0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDZCQUE2QixLQUFLLG1CQUFtQixpQkFBaUIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsS0FBSyxpQkFBaUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLEtBQUssaUJBQWlCLGlCQUFpQixvQkFBb0IsMEJBQTBCLDJCQUEyQixlQUFlLGFBQWEsS0FBSyxHQUFHLGFBQWEsdUNBQXVDLDJDQUEyQyxHQUFHLGVBQWUseUNBQXlDLDJDQUEyQyxHQUFHLGlDQUFpQyxRQUFRLG1CQUFtQixHQUFHLG1DQUFtQyxRQUFRLGlCQUFpQixZQUFZLFVBQVUsbUJBQW1CLFlBQVksR0FBRyx1QkFBdUI7QUFDdnpWO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3M/MjBhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5ICNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5ICNfX25leHQgI2luZGV4V3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbn1cXG5ib2R5ICNfX25leHQgI2luZGV4V3JhcCAuYmdJbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5oZWFkZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5mb290ZXJXcmFwIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyV3JhcCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcFdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNTVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MHB4IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudFRhc2sge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudFRhc2sgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayAuaW5wdXRBbGVydCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzAsIDIzMCk7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayAuaW5wdXRBbGVydDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRTdGFydCB7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50U3RhcnQgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRNaW4ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudE1pbiBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuYnV0dG9uV3JhcCBidXR0b24gLnBsdXNJY29uIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5idXR0b25XcmFwIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9nZ2xlQmcge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc3BsaXR0ZXJXcmFwIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTRweCByZ2IoMCwgMCwgMCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgKiB7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zcGxpdHRlcldyYXAgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWlucHV0LXRleHQpO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFRhc2sge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFN0YXJ0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdE1pbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnNwbGl0dGVyV3JhcCAuc3BsaXRCdG4ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgLnNwbGl0QnRuIGJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkaW5nIHtcXG4gIGFuaW1hdGlvbjogYWRkaW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlbW92aW5nIHtcXG4gIGFuaW1hdGlvbjogcmVtb3ZpbmdUcmFuc2l0aW9uIDAuMnMgMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZGluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByZW1vdmluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VB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VUFBQTtFQWRyQjtFQWVBO0lBQU0saUJBQUE7SUFBbUIsVUFBQTtFQVh6QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG59XFxuXFxuaHRtbCB7IFxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gICNfX25leHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICNpbmRleFdyYXAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XFxuXFxuICAgICAgLmJnSW1hZ2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vaGVhZGVyXFxuaGVhZGVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XFxuXFxuICBcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG4vL2Zvb3Rlclxcbi5mb290ZXJXcmFwIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcblxcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLy9pbmRleFxcbi5hcHBXcmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC50YXNrSW5jcmVtZW50V3JhcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmluY3JlbWVudFRhc2sge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgaW5wdXQge3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwOyB9XFxuXFxuICAgICAgICAuaW5wdXRBbGVydCB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIzMCwgMjMwKTtcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogcmVkOyB9XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmluY3JlbWVudFN0YXJ0IHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGlucHV0IHt3aWR0aDogOTAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwO31cXG4gICAgfVxcblxcbiAgICAuaW5jcmVtZW50TWluIHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGlucHV0IHt3aWR0aDogOTAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwO31cXG4gICAgfVxcblxcbiAgICAuYnV0dG9uV3JhcCB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogMDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIC5wbHVzSWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8vc3BsaXR0ZXJcXG4udG9nZ2xlQmcge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5cXG4uc3BsaXR0ZXJXcmFwIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTRweCByZ2IoMCwgMCwgMCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAqIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgXFxuICBpbnB1dCB7IFxcbiAgICB3aWR0aDogOTAlOyBcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTsgXFxuICAgIGNvbG9yOiB2YXIoLS1pbnB1dC10ZXh0KTsgXFxuICB9XFxuXFxuICAuc3BsaXRUYXNrIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuc3BsaXRTdGFydCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNwbGl0TWluIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc3BsaXRCdG4ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYnV0dG9uIHsgb3BhY2l0eTogMTsgfVxcbiAgfVxcbn1cXG5cXG4uYWRkaW5nIHtcXG4gIGFuaW1hdGlvbjogYWRkaW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlbW92aW5nIHtcXG4gIGFuaW1hdGlvbjogcmVtb3ZpbmdUcmFuc2l0aW9uIDAuMnMgMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZGluZ1RyYW5zaXRpb24ge1xcbiAgMCUge21hcmdpbi10b3A6IC01MHB4O31cXG59XFxuXFxuQGtleWZyYW1lcyByZW1vdmluZ1RyYW5zaXRpb24ge1xcbiAgMCUge21hcmdpbi10b3A6IDBweDsgb3BhY2l0eTogMTt9XFxuICAxMDAlIHttYXJnaW4tdG9wOiAtNTBweDsgb3BhY2l0eTogMDt9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss\n"));

/***/ })

});