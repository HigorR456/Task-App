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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n}\\nbody #__next {\\n  height: 100%;\\n}\\nbody #__next #indexWrap {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  background: var(--bg-primary);\\n}\\n\\nheader {\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.footerWrap div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n  max-width: 800px;\\n}\\n.appWrap .taskIncrementWrap {\\n  background: rgba(0, 0, 0, 0.3);\\n  width: 80%;\\n  height: 55px;\\n  margin: 5px;\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask input {\\n  width: 100%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert {\\n  background: rgb(255, 230, 230);\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert::placeholder {\\n  color: red;\\n}\\n.appWrap .taskIncrementWrap .incrementStart {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementStart input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementMin {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementMin input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button {\\n  display: flex;\\n  align-items: center;\\n  font-size: 30px;\\n  padding: 0;\\n  height: 30px;\\n  background: 0;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button .plusIcon {\\n  color: var(--text-primary);\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:hover {\\n  cursor: pointer;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:active {\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n\\n.toggleBg {\\n  background: red;\\n}\\n\\n.splitterWrap {\\n  width: 80%;\\n  max-width: 800px;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.splitterWrap * {\\n  background: 0;\\n  border: 0;\\n  color: var(--text-primary);\\n  font-family: sans-serif;\\n  font-weight: bold;\\n}\\n.splitterWrap button {\\n  display: flex;\\n  font-size: 15px;\\n  height: 30px;\\n  align-items: center;\\n  margin: 3px;\\n  background: 0;\\n  border: 0;\\n  opacity: 0.3;\\n}\\n.splitterWrap button:hover {\\n  cursor: pointer;\\n  opacity: 1;\\n}\\n.splitterWrap button:active {\\n  cursor: pointer;\\n  opacity: 1;\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n.splitterWrap input {\\n  width: 90%;\\n  height: 25px;\\n  background: var(--bg-primary);\\n  color: var(--input-text);\\n}\\n.splitterWrap .splitTask {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n  word-break: break-word;\\n}\\n.splitterWrap .splitStart {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitMin {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn button {\\n  opacity: 1;\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {\\n    margin-top: -50px;\\n  }\\n}\\n@keyframes removingTransition {\\n  0% {\\n    margin-top: 0px;\\n    opacity: 1;\\n  }\\n  100% {\\n    margin-top: -50px;\\n    opacity: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,YAAA;AAFF;;AAKA;EACE,YAAA;EACA,SAAA;AAFF;AAGE;EACE,YAAA;AADJ;AAEI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,6BAAA;AAAN;;AAMA;EACE,SAAA;EACA,UAAA;EACA,4BAAA;EACA,6BAAA;EAEA,aAAA;EACA,6BAAA;EACA,mBAAA;AAJF;AAaA;EACE,gBAAA;EACA,gBAAA;EAEA,iBAAA;EACA,0BAAA;EACA,+BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAZF;AAcE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAZJ;;AAiBA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,gBAAA;AAfF;AAiBE;EACE,8BAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AAhBJ;AAkBI;EACI,UAAA;EACA,oBAAA;AAhBR;AAiBQ;EAAO,WAAA;EAAa,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAX9D;AAaQ;EACE,8BAAA;AAXV;AAYU;EAAiB,UAAA;AAT3B;AAcI;EACE,UAAA;EACA,oBAAA;AAZN;AAaM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAP3D;AAUI;EACE,UAAA;EACA,oBAAA;AARN;AASM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAH3D;AAMI;EACE,UAAA;EACA,oBAAA;AAJN;AAKM;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAHR;AAIQ;EACE,0BAAA;AAFV;AAIQ;EACE,eAAA;AAFV;AAIQ;EACE,8BAAA;AAFV;;AAWA;EACE,eAAA;AARF;;AAYA;EACE,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,8BAAA;EACA,uCAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AAVF;AAYE;EACI,aAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,iBAAA;AAVN;AAaE;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;EACA,YAAA;AAXJ;AAaI;EACE,eAAA;EACA,UAAA;AAXN;AAcI;EACE,eAAA;EACA,UAAA;EACA,8BAAA;AAZN;AAiBE;EACE,UAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;AAfJ;AAkBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,sBAAA;AAhBJ;AAmBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAjBJ;AAoBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAlBJ;AAqBE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAnBJ;AAoBI;EAAS,UAAA;AAjBb;;AAqBA;EACE,kCAAA;EACA,sCAAA;AAlBF;;AAqBA;EACE,oCAAA;EACA,sCAAA;AAlBF;;AAqBA;EACE;IAAI,iBAAA;EAjBJ;AACF;AAmBA;EACE;IAAI,eAAA;IAAiB,UAAA;EAfrB;EAgBA;IAAM,iBAAA;IAAmB,UAAA;EAZzB;AACF\",\"sourcesContent\":[\":root {\\n}\\n\\nhtml { \\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  #__next {\\n    height: 100%;\\n    #indexWrap {\\n      display: flex;\\n      flex-direction: column;\\n      height: 100%;\\n      background: var(--bg-primary);\\n    }\\n  }\\n}\\n\\n//header\\nheader {\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  \\n  h1 {}\\n\\n  form { }\\n}\\n\\n\\n//footer\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  div {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n}\\n\\n//index\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n\\n  align-self: center;\\n  max-width: 800px;\\n\\n  .taskIncrementWrap {\\n    background: rgba(0, 0, 0, 0.3);\\n    width: 80%;\\n    height: 55px;\\n    margin: 5px;\\n\\n    display: grid;\\n    grid-template-columns: auto 90px 40px;\\n    align-items: center;\\n\\n    .incrementTask {\\n        width: 90%;\\n        justify-self: center;\\n        input {width: 100%; height: 25px; border-radius: 2px; border: 0; }\\n\\n        .inputAlert {\\n          background: rgb(255, 230, 230);\\n          &::placeholder { color: red; }\\n\\n        }\\n    }\\n\\n    .incrementStart {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .incrementMin {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .buttonWrap {\\n      width: 90%;\\n      justify-self: center;\\n      button {\\n        display: flex;\\n        align-items: center;\\n        font-size: 30px;\\n        padding: 0;\\n        height: 30px;\\n        background: 0;\\n        border: 0;\\n        .plusIcon {\\n          color: var(--text-primary);\\n        }\\n        &:hover {\\n          cursor: pointer;\\n        }\\n        &:active {\\n          background: rgb(0, 0, 0, 0.2);\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n//splitter\\n.toggleBg {\\n  background: red;\\n}\\n\\n\\n.splitterWrap {\\n  width: 80%;\\n  max-width: 800px;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n\\n  * {\\n      background: 0;\\n      border: 0;\\n      color: var(--text-primary);\\n      font-family: sans-serif;\\n      font-weight: bold;\\n  }\\n\\n  button {\\n    display: flex;\\n    font-size: 15px;\\n    height: 30px;\\n    align-items: center;\\n    margin: 3px;\\n    background: 0;\\n    border: 0;\\n    opacity: 0.3;\\n\\n    &:hover {\\n      cursor: pointer;\\n      opacity: 1;\\n    }\\n\\n    &:active {\\n      cursor: pointer;\\n      opacity: 1;\\n      background: rgb(0, 0, 0, 0.2);\\n    }\\n  }\\n\\n  \\n  input { \\n    width: 90%; \\n    height: 25px;\\n    background: var(--bg-primary); \\n    color: var(--input-text); \\n  }\\n\\n  .splitTask {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    word-break: break-word;\\n  }\\n\\n  .splitStart {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitMin {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitBtn {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    button { opacity: 1; }\\n  }\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {margin-top: -50px;}\\n}\\n\\n@keyframes removingTransition {\\n  0% {margin-top: 0px; opacity: 1;}\\n  100% {margin-top: -50px; opacity: 0;}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGNBQWMsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtDQUFrQyxHQUFHLFlBQVksY0FBYyxlQUFlLGlDQUFpQyxrQ0FBa0Msa0JBQWtCLGtDQUFrQyx3QkFBd0IsR0FBRyxlQUFlLHFCQUFxQixxQkFBcUIsc0JBQXNCLCtCQUErQixvQ0FBb0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHFCQUFxQixHQUFHLCtCQUErQixtQ0FBbUMsZUFBZSxpQkFBaUIsZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsd0JBQXdCLEdBQUcsOENBQThDLGVBQWUseUJBQXlCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsdUJBQXVCLGNBQWMsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsdUVBQXVFLGVBQWUsR0FBRywrQ0FBK0MsZUFBZSx5QkFBeUIsR0FBRyxxREFBcUQsZUFBZSxpQkFBaUIsdUJBQXVCLGNBQWMsR0FBRyw2Q0FBNkMsZUFBZSx5QkFBeUIsR0FBRyxtREFBbUQsZUFBZSxpQkFBaUIsdUJBQXVCLGNBQWMsR0FBRywyQ0FBMkMsZUFBZSx5QkFBeUIsR0FBRyxrREFBa0Qsa0JBQWtCLHdCQUF3QixvQkFBb0IsZUFBZSxpQkFBaUIsa0JBQWtCLGNBQWMsR0FBRyw0REFBNEQsK0JBQStCLEdBQUcsd0RBQXdELG9CQUFvQixHQUFHLHlEQUF5RCxtQ0FBbUMsR0FBRyxlQUFlLG9CQUFvQixHQUFHLG1CQUFtQixlQUFlLHFCQUFxQixxQkFBcUIsZ0JBQWdCLG1DQUFtQyw0Q0FBNEMsa0JBQWtCLDBDQUEwQyx3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsK0JBQStCLDRCQUE0QixzQkFBc0IsR0FBRyx3QkFBd0Isa0JBQWtCLG9CQUFvQixpQkFBaUIsd0JBQXdCLGdCQUFnQixrQkFBa0IsY0FBYyxpQkFBaUIsR0FBRyw4QkFBOEIsb0JBQW9CLGVBQWUsR0FBRywrQkFBK0Isb0JBQW9CLGVBQWUsbUNBQW1DLEdBQUcsdUJBQXVCLGVBQWUsaUJBQWlCLGtDQUFrQyw2QkFBNkIsR0FBRyw0QkFBNEIsZUFBZSxrQkFBa0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsR0FBRyw2QkFBNkIsZUFBZSxrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQixlQUFlLGtCQUFrQix3QkFBd0IseUJBQXlCLEdBQUcsMkJBQTJCLGVBQWUsa0JBQWtCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQ0FBa0MsZUFBZSxHQUFHLGFBQWEsdUNBQXVDLDJDQUEyQyxHQUFHLGVBQWUseUNBQXlDLDJDQUEyQyxHQUFHLGlDQUFpQyxRQUFRLHdCQUF3QixLQUFLLEdBQUcsaUNBQWlDLFFBQVEsc0JBQXNCLGlCQUFpQixLQUFLLFVBQVUsd0JBQXdCLGlCQUFpQixLQUFLLEdBQUcsT0FBTyx3RkFBd0YsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxnQ0FBZ0MsR0FBRyxXQUFXLGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGNBQWMsYUFBYSxtQkFBbUIsa0JBQWtCLHNCQUFzQiwrQkFBK0IscUJBQXFCLHNDQUFzQyxPQUFPLEtBQUssR0FBRyxzQkFBc0IsY0FBYyxlQUFlLGlDQUFpQyxrQ0FBa0Msb0JBQW9CLGtDQUFrQyx3QkFBd0IsYUFBYSxjQUFjLEdBQUcsNkJBQTZCLHFCQUFxQixxQkFBcUIsd0JBQXdCLCtCQUErQixvQ0FBb0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsV0FBVyxvQkFBb0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsS0FBSyxHQUFHLHVCQUF1QixrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0QkFBNEIseUJBQXlCLHFCQUFxQiwwQkFBMEIscUNBQXFDLGlCQUFpQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw0Q0FBNEMsMEJBQTBCLHdCQUF3QixxQkFBcUIsK0JBQStCLGlCQUFpQixhQUFhLGNBQWMsb0JBQW9CLFlBQVkseUJBQXlCLDJDQUEyQyw2QkFBNkIsYUFBYSxhQUFhLE9BQU8seUJBQXlCLG1CQUFtQiw2QkFBNkIsZUFBZSxZQUFZLGNBQWMsb0JBQW9CLFdBQVcsT0FBTyx1QkFBdUIsbUJBQW1CLDZCQUE2QixlQUFlLFlBQVksY0FBYyxvQkFBb0IsV0FBVyxPQUFPLHFCQUFxQixtQkFBbUIsNkJBQTZCLGdCQUFnQix3QkFBd0IsOEJBQThCLDBCQUEwQixxQkFBcUIsdUJBQXVCLHdCQUF3QixvQkFBb0IscUJBQXFCLHVDQUF1QyxXQUFXLG1CQUFtQiw0QkFBNEIsV0FBVyxvQkFBb0IsMENBQTBDLFdBQVcsU0FBUyxPQUFPLEtBQUssR0FBRyw2QkFBNkIsb0JBQW9CLEdBQUcscUJBQXFCLGVBQWUscUJBQXFCLHFCQUFxQixnQkFBZ0IsbUNBQW1DLDRDQUE0QyxvQkFBb0IsMENBQTBDLHdCQUF3QixTQUFTLHNCQUFzQixrQkFBa0IsbUNBQW1DLGdDQUFnQywwQkFBMEIsS0FBSyxjQUFjLG9CQUFvQixzQkFBc0IsbUJBQW1CLDBCQUEwQixrQkFBa0Isb0JBQW9CLGdCQUFnQixtQkFBbUIsaUJBQWlCLHdCQUF3QixtQkFBbUIsT0FBTyxrQkFBa0Isd0JBQXdCLG1CQUFtQixzQ0FBc0MsT0FBTyxLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLHFDQUFxQyxnQ0FBZ0MsS0FBSyxrQkFBa0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDZCQUE2QixLQUFLLG1CQUFtQixpQkFBaUIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsS0FBSyxpQkFBaUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLEtBQUssaUJBQWlCLGlCQUFpQixvQkFBb0IsMEJBQTBCLDJCQUEyQixlQUFlLGFBQWEsS0FBSyxHQUFHLGFBQWEsdUNBQXVDLDJDQUEyQyxHQUFHLGVBQWUseUNBQXlDLDJDQUEyQyxHQUFHLGlDQUFpQyxRQUFRLG1CQUFtQixHQUFHLG1DQUFtQyxRQUFRLGlCQUFpQixZQUFZLFVBQVUsbUJBQW1CLFlBQVksR0FBRyx1QkFBdUI7QUFDN3BVO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnNjc3M/MjBhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5ICNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5ICNfX25leHQgI2luZGV4V3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJXcmFwIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyV3JhcCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcFdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayB7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRUYXNrIC5pbnB1dEFsZXJ0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDIzMCwgMjMwKTtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRUYXNrIC5pbnB1dEFsZXJ0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudFN0YXJ0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRTdGFydCBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudE1pbiB7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50TWluIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuYnV0dG9uV3JhcCB7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuYnV0dG9uV3JhcCBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5idXR0b25XcmFwIGJ1dHRvbiAucGx1c0ljb24ge1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuYnV0dG9uV3JhcCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi50b2dnbGVCZyB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5zcGxpdHRlcldyYXAge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTRweCByZ2IoMCwgMCwgMCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgKiB7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zcGxpdHRlcldyYXAgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWlucHV0LXRleHQpO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFRhc2sge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFN0YXJ0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdE1pbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnNwbGl0dGVyV3JhcCAuc3BsaXRCdG4ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgLnNwbGl0QnRuIGJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkaW5nIHtcXG4gIGFuaW1hdGlvbjogYWRkaW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlbW92aW5nIHtcXG4gIGFuaW1hdGlvbjogcmVtb3ZpbmdUcmFuc2l0aW9uIDAuMnMgMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZGluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByZW1vdmluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQU47O0FBTUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUpGO0FBYUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaRjtBQWNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQWZGO0FBaUJFO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQWhCSjtBQWtCSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQWhCUjtBQWlCUTtFQUFPLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsU0FBQTtBQVg5RDtBQWFRO0VBQ0UsOEJBQUE7QUFYVjtBQVlVO0VBQWlCLFVBQUE7QUFUM0I7QUFjSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQVpOO0FBYU07RUFBTyxVQUFBO0VBQVksWUFBQTtFQUFjLGtCQUFBO0VBQW9CLFNBQUE7QUFQM0Q7QUFVSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQVJOO0FBU007RUFBTyxVQUFBO0VBQVksWUFBQTtFQUFjLGtCQUFBO0VBQW9CLFNBQUE7QUFIM0Q7QUFNSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUpOO0FBS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUhSO0FBSVE7RUFDRSwwQkFBQTtBQUZWO0FBSVE7RUFDRSxlQUFBO0FBRlY7QUFJUTtFQUNFLDhCQUFBO0FBRlY7O0FBV0E7RUFDRSxlQUFBO0FBUkY7O0FBWUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFWRjtBQVlFO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFWTjtBQWFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBWEo7QUFhSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBWE47QUFjSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFaTjtBQWlCRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQWZKO0FBa0JFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFoQko7QUFtQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFqQko7QUFvQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFsQko7QUFxQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFuQko7QUFvQkk7RUFBUyxVQUFBO0FBakJiOztBQXFCQTtFQUNFLGtDQUFBO0VBQ0Esc0NBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQWxCRjs7QUFxQkE7RUFDRTtJQUFJLGlCQUFBO0VBakJKO0FBQ0Y7QUFtQkE7RUFDRTtJQUFJLGVBQUE7SUFBaUIsVUFBQTtFQWZyQjtFQWdCQTtJQUFNLGlCQUFBO0lBQW1CLFVBQUE7RUFaekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxufVxcblxcbmh0bWwgeyBcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAjX19uZXh0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAjaW5kZXhXcmFwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vaGVhZGVyXFxuaGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICBoMSB7fVxcblxcbiAgZm9ybSB7IH1cXG59XFxuXFxuXFxuLy9mb290ZXJcXG4uZm9vdGVyV3JhcCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8vaW5kZXhcXG4uYXBwV3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG4gIC50YXNrSW5jcmVtZW50V3JhcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmluY3JlbWVudFRhc2sge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgaW5wdXQge3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwOyB9XFxuXFxuICAgICAgICAuaW5wdXRBbGVydCB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIzMCwgMjMwKTtcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogcmVkOyB9XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmluY3JlbWVudFN0YXJ0IHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGlucHV0IHt3aWR0aDogOTAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwO31cXG4gICAgfVxcblxcbiAgICAuaW5jcmVtZW50TWluIHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGlucHV0IHt3aWR0aDogOTAlOyBoZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYm9yZGVyOiAwO31cXG4gICAgfVxcblxcbiAgICAuYnV0dG9uV3JhcCB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogMDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIC5wbHVzSWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8vc3BsaXR0ZXJcXG4udG9nZ2xlQmcge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5cXG4uc3BsaXR0ZXJXcmFwIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC00cHggcmdiKDAsIDAsIDApO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MHB4IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgKiB7XFxuICAgICAgYmFja2dyb3VuZDogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3BhY2l0eTogMC4zO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFxcbiAgaW5wdXQgeyBcXG4gICAgd2lkdGg6IDkwJTsgXFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7IFxcbiAgICBjb2xvcjogdmFyKC0taW5wdXQtdGV4dCk7IFxcbiAgfVxcblxcbiAgLnNwbGl0VGFzayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcblxcbiAgLnNwbGl0U3RhcnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zcGxpdE1pbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNwbGl0QnRuIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJ1dHRvbiB7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG59XFxuXFxuLmFkZGluZyB7XFxuICBhbmltYXRpb246IGFkZGluZ1RyYW5zaXRpb24gMC4ycyAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5yZW1vdmluZyB7XFxuICBhbmltYXRpb246IHJlbW92aW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBhZGRpbmdUcmFuc2l0aW9uIHtcXG4gIDAlIHttYXJnaW4tdG9wOiAtNTBweDt9XFxufVxcblxcbkBrZXlmcmFtZXMgcmVtb3ZpbmdUcmFuc2l0aW9uIHtcXG4gIDAlIHttYXJnaW4tdG9wOiAwcHg7IG9wYWNpdHk6IDE7fVxcbiAgMTAwJSB7bWFyZ2luLXRvcDogLTUwcHg7IG9wYWNpdHk6IDA7fVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss\n"));

/***/ })

});