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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n}\\nbody #__next {\\n  height: 100%;\\n}\\nbody #__next #indexWrap {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  background: var(--bg-primary);\\n}\\nbody #__next #indexWrap .bgImage {\\n  position: absolute;\\n  z-index: -1;\\n  opacity: 0.5;\\n  width: 200px;\\n}\\n\\nheader {\\n  border: 3px solid red;\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nheader div {\\n  width: 80%;\\n  height: 100px;\\n  margin: 5px;\\n  max-width: 800px;\\n  display: grid;\\n  grid-template-columns: auto 80px;\\n  align-items: center;\\n}\\nheader div h1 {\\n  min-width: 200px;\\n  justify-self: left;\\n  margin-left: 10px;\\n}\\nheader div form {\\n  min-width: 50px;\\n  justify-self: right;\\n  margin-right: 10px;\\n}\\n\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.footerWrap div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n  max-width: 1000px;\\n}\\n.appWrap .taskIncrementWrap {\\n  background: rgba(0, 0, 0, 0.3);\\n  width: 80%;\\n  height: 55px;\\n  margin: 5px;\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementTask input {\\n  width: 100%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert {\\n  background: rgb(255, 230, 230);\\n}\\n.appWrap .taskIncrementWrap .incrementTask .inputAlert::placeholder {\\n  color: red;\\n}\\n.appWrap .taskIncrementWrap .incrementStart {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementStart input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .incrementMin {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .incrementMin input {\\n  width: 90%;\\n  height: 25px;\\n  border-radius: 2px;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap {\\n  width: 90%;\\n  justify-self: center;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button {\\n  display: flex;\\n  align-items: center;\\n  font-size: 30px;\\n  padding: 0;\\n  height: 30px;\\n  background: 0;\\n  border: 0;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button .plusIcon {\\n  color: var(--text-primary);\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:hover {\\n  cursor: pointer;\\n}\\n.appWrap .taskIncrementWrap .buttonWrap button:active {\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n\\n.toggleBg {\\n  background: red;\\n}\\n\\n.splitterWrap {\\n  width: 80%;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n}\\n.splitterWrap * {\\n  background: 0;\\n  border: 0;\\n  color: var(--text-primary);\\n  font-family: sans-serif;\\n  font-weight: bold;\\n}\\n.splitterWrap button {\\n  display: flex;\\n  font-size: 15px;\\n  height: 30px;\\n  align-items: center;\\n  margin: 3px;\\n  background: 0;\\n  border: 0;\\n  opacity: 0.3;\\n}\\n.splitterWrap button:hover {\\n  cursor: pointer;\\n  opacity: 1;\\n}\\n.splitterWrap button:active {\\n  cursor: pointer;\\n  opacity: 1;\\n  background: rgba(0, 0, 0, 0.2);\\n}\\n.splitterWrap input {\\n  width: 90%;\\n  height: 25px;\\n  background: var(--bg-primary);\\n  color: var(--input-text);\\n}\\n.splitterWrap .splitTask {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n  word-break: break-word;\\n}\\n.splitterWrap .splitStart {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitMin {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn {\\n  width: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-self: center;\\n}\\n.splitterWrap .splitBtn button {\\n  opacity: 1;\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {\\n    margin-top: -50px;\\n  }\\n}\\n@keyframes removingTransition {\\n  0% {\\n    margin-top: 0px;\\n    opacity: 1;\\n  }\\n  100% {\\n    margin-top: -50px;\\n    opacity: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,YAAA;AAFF;;AAKA;EACE,YAAA;EACA,SAAA;AAFF;AAGE;EACE,YAAA;AADJ;AAEI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,6BAAA;AAAN;AAEM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AAAR;;AAOA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,4BAAA;EACA,6BAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AALF;AAOE;EACE,UAAA;EACA,aAAA;EACA,WAAA;EAEA,gBAAA;EAEA,aAAA;EACA,gCAAA;EACA,mBAAA;AAPJ;AASI;EAAK,gBAAA;EAAkB,kBAAA;EAAoB,iBAAA;AAJ/C;AAKI;EAAO,eAAA;EAAiB,mBAAA;EAAqB,kBAAA;AAAjD;;AAMA;EACE,gBAAA;EACA,gBAAA;EAEA,iBAAA;EACA,0BAAA;EACA,+BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJF;AAME;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;;AASA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EAEA,iBAAA;AAPF;AASE;EACE,8BAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AARJ;AAUI;EACI,UAAA;EACA,oBAAA;AARR;AASQ;EAAO,WAAA;EAAa,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAH9D;AAKQ;EACE,8BAAA;AAHV;AAIU;EAAiB,UAAA;AAD3B;AAMI;EACE,UAAA;EACA,oBAAA;AAJN;AAKM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAC3D;AAEI;EACE,UAAA;EACA,oBAAA;AAAN;AACM;EAAO,UAAA;EAAY,YAAA;EAAc,kBAAA;EAAoB,SAAA;AAK3D;AAFI;EACE,UAAA;EACA,oBAAA;AAIN;AAHM;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;AAKR;AAJQ;EACE,0BAAA;AAMV;AAJQ;EACE,eAAA;AAMV;AAJQ;EACE,8BAAA;AAMV;;AAGA;EACE,eAAA;AAAF;;AAIA;EACE,UAAA;EACA,gBAAA;EACA,WAAA;EACA,8BAAA;EACA,uCAAA;EAEA,aAAA;EACA,qCAAA;EACA,mBAAA;AAFF;AAIE;EACI,aAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,iBAAA;AAFN;AAKE;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;EACA,YAAA;AAHJ;AAKI;EACE,eAAA;EACA,UAAA;AAHN;AAMI;EACE,eAAA;EACA,UAAA;EACA,8BAAA;AAJN;AASE;EACE,UAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;AAPJ;AAUE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,sBAAA;AARJ;AAWE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AATJ;AAYE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAVJ;AAaE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;AAXJ;AAYI;EAAS,UAAA;AATb;;AAaA;EACE,kCAAA;EACA,sCAAA;AAVF;;AAaA;EACE,oCAAA;EACA,sCAAA;AAVF;;AAaA;EACE;IAAI,iBAAA;EATJ;AACF;AAWA;EACE;IAAI,eAAA;IAAiB,UAAA;EAPrB;EAQA;IAAM,iBAAA;IAAmB,UAAA;EAJzB;AACF\",\"sourcesContent\":[\":root {\\n}\\n\\nhtml { \\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  #__next {\\n    height: 100%;\\n    #indexWrap {\\n      display: flex;\\n      flex-direction: column;\\n      height: 100%;\\n      background: var(--bg-primary);\\n\\n      .bgImage {\\n        position: absolute;\\n        z-index: -1;\\n        opacity: 0.5;\\n        width: 200px;\\n      }\\n    }\\n  }\\n}\\n\\n//header\\nheader {\\n  border: 3px solid red;\\n  margin: 0;\\n  padding: 0;\\n  color: var(--text-secondary);\\n  background: var(--bg-primary);\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  div {\\n    width: 80%;\\n    height: 100px;\\n    margin: 5px;\\n\\n    max-width: 800px;\\n\\n    display: grid;\\n    grid-template-columns: auto 80px;\\n    align-items: center;\\n\\n    h1 { min-width: 200px; justify-self: left; margin-left: 10px; } \\n    form { min-width: 50px; justify-self: right; margin-right: 10px; }\\n  }\\n}\\n\\n\\n//footer\\n.footerWrap {\\n  margin-top: auto;\\n  margin-bottom: 0;\\n\\n  min-height: 100px;\\n  color: var(--text-primary);\\n  background: var(--bg-secondary);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  div {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n}\\n\\n//index\\n.appWrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  align-self: center;\\n\\n  max-width: 1000px;\\n\\n  .taskIncrementWrap {\\n    background: rgba(0, 0, 0, 0.3);\\n    width: 80%;\\n    height: 55px;\\n    margin: 5px;\\n\\n    display: grid;\\n    grid-template-columns: auto 90px 40px;\\n    align-items: center;\\n\\n    .incrementTask {\\n        width: 90%;\\n        justify-self: center;\\n        input {width: 100%; height: 25px; border-radius: 2px; border: 0; }\\n\\n        .inputAlert {\\n          background: rgb(255, 230, 230);\\n          &::placeholder { color: red; }\\n\\n        }\\n    }\\n\\n    .incrementStart {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .incrementMin {\\n      width: 90%;\\n      justify-self: center;\\n      input {width: 90%; height: 25px; border-radius: 2px; border: 0;}\\n    }\\n\\n    .buttonWrap {\\n      width: 90%;\\n      justify-self: center;\\n      button {\\n        display: flex;\\n        align-items: center;\\n        font-size: 30px;\\n        padding: 0;\\n        height: 30px;\\n        background: 0;\\n        border: 0;\\n        .plusIcon {\\n          color: var(--text-primary);\\n        }\\n        &:hover {\\n          cursor: pointer;\\n        }\\n        &:active {\\n          background: rgb(0, 0, 0, 0.2);\\n        }\\n      }\\n    }\\n  }\\n}\\n\\n\\n//splitter\\n.toggleBg {\\n  background: red;\\n}\\n\\n\\n.splitterWrap {\\n  width: 80%;\\n  min-height: 55px;\\n  margin: 5px;\\n  background: var(--bg-tertiary);\\n  box-shadow: 0 4px 6px -4px rgb(0, 0, 0);\\n\\n  display: grid;\\n  grid-template-columns: auto 90px 40px;\\n  align-items: center;\\n\\n  * {\\n      background: 0;\\n      border: 0;\\n      color: var(--text-primary);\\n      font-family: sans-serif;\\n      font-weight: bold;\\n  }\\n\\n  button {\\n    display: flex;\\n    font-size: 15px;\\n    height: 30px;\\n    align-items: center;\\n    margin: 3px;\\n    background: 0;\\n    border: 0;\\n    opacity: 0.3;\\n\\n    &:hover {\\n      cursor: pointer;\\n      opacity: 1;\\n    }\\n\\n    &:active {\\n      cursor: pointer;\\n      opacity: 1;\\n      background: rgb(0, 0, 0, 0.2);\\n    }\\n  }\\n\\n  \\n  input { \\n    width: 90%; \\n    height: 25px;\\n    background: var(--bg-primary); \\n    color: var(--input-text); \\n  }\\n\\n  .splitTask {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    word-break: break-word;\\n  }\\n\\n  .splitStart {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitMin {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n  }\\n\\n  .splitBtn {\\n    width: 90%;\\n    display: flex;\\n    align-items: center;\\n    justify-self: center;\\n    button { opacity: 1; }\\n  }\\n}\\n\\n.adding {\\n  animation: addingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.removing {\\n  animation: removingTransition 0.2s 1;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n@keyframes addingTransition {\\n  0% {margin-top: -50px;}\\n}\\n\\n@keyframes removingTransition {\\n  0% {margin-top: 0px; opacity: 1;}\\n  100% {margin-top: -50px; opacity: 0;}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzE0XS51c2VbNF0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLGNBQWMsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtDQUFrQyxHQUFHLG9DQUFvQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsR0FBRyxZQUFZLDBCQUEwQixjQUFjLGVBQWUsaUNBQWlDLGtDQUFrQyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLGNBQWMsZUFBZSxrQkFBa0IsZ0JBQWdCLHFCQUFxQixrQkFBa0IscUNBQXFDLHdCQUF3QixHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQixxQkFBcUIscUJBQXFCLHNCQUFzQiwrQkFBK0Isb0NBQW9D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QW9CLDBCQUEwQiwyQkFBMkIsS0FBSyxpQkFBaUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLGVBQWUsYUFBYSxLQUFLLEdBQUcsYUFBYSx1Q0FBdUMsMkNBQTJDLEdBQUcsZUFBZSx5Q0FBeUMsMkNBQTJDLEdBQUcsaUNBQWlDLFFBQVEsbUJBQW1CLEdBQUcsbUNBQW1DLFFBQVEsaUJBQWlCLFlBQVksVUFBVSxtQkFBbUIsWUFBWSxHQUFHLHVCQUF1QjtBQUN2dFc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzcz8yMGEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkgI19fbmV4dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkgI19fbmV4dCAjaW5kZXhXcmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XFxufVxcbmJvZHkgI19fbmV4dCAjaW5kZXhXcmFwIC5iZ0ltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmhlYWRlciBkaXYge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgZGl2IGgxIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuaGVhZGVyIGRpdiBmb3JtIHtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5mb290ZXJXcmFwIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyV3JhcCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcFdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNTVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MHB4IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudFRhc2sge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudFRhc2sgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayAuaW5wdXRBbGVydCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzAsIDIzMCk7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50VGFzayAuaW5wdXRBbGVydDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRTdGFydCB7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuaW5jcmVtZW50U3RhcnQgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5pbmNyZW1lbnRNaW4ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmluY3JlbWVudE1pbiBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hcHBXcmFwIC50YXNrSW5jcmVtZW50V3JhcCAuYnV0dG9uV3JhcCBidXR0b24gLnBsdXNJY29uIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcbn1cXG4uYXBwV3JhcCAudGFza0luY3JlbWVudFdyYXAgLmJ1dHRvbldyYXAgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFwcFdyYXAgLnRhc2tJbmNyZW1lbnRXcmFwIC5idXR0b25XcmFwIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9nZ2xlQmcge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uc3BsaXR0ZXJXcmFwIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTRweCByZ2IoMCwgMCwgMCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwcHggNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgKiB7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnNwbGl0dGVyV3JhcCBidXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5zcGxpdHRlcldyYXAgaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWlucHV0LXRleHQpO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFRhc2sge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdFN0YXJ0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uc3BsaXR0ZXJXcmFwIC5zcGxpdE1pbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnNwbGl0dGVyV3JhcCAuc3BsaXRCdG4ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5zcGxpdHRlcldyYXAgLnNwbGl0QnRuIGJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkaW5nIHtcXG4gIGFuaW1hdGlvbjogYWRkaW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlbW92aW5nIHtcXG4gIGFuaW1hdGlvbjogcmVtb3ZpbmdUcmFuc2l0aW9uIDAuMnMgMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZGluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByZW1vdmluZ1RyYW5zaXRpb24ge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQU47QUFFTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQVI7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7QUFPRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQUssZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsaUJBQUE7QUFKL0M7QUFLSTtFQUFPLGVBQUE7RUFBaUIsbUJBQUE7RUFBcUIsa0JBQUE7QUFBakQ7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBUEY7QUFTRTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVVJO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FBUlI7QUFTUTtFQUFPLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsU0FBQTtBQUg5RDtBQUtRO0VBQ0UsOEJBQUE7QUFIVjtBQUlVO0VBQWlCLFVBQUE7QUFEM0I7QUFNSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUpOO0FBS007RUFBTyxVQUFBO0VBQVksWUFBQTtFQUFjLGtCQUFBO0VBQW9CLFNBQUE7QUFDM0Q7QUFFSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUFOO0FBQ007RUFBTyxVQUFBO0VBQVksWUFBQTtFQUFjLGtCQUFBO0VBQW9CLFNBQUE7QUFLM0Q7QUFGSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUlOO0FBSE07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUtSO0FBSlE7RUFDRSwwQkFBQTtBQU1WO0FBSlE7RUFDRSxlQUFBO0FBTVY7QUFKUTtFQUNFLDhCQUFBO0FBTVY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUVBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRk47QUFLRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUhOO0FBTUk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBSk47QUFTRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQVBKO0FBVUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQVJKO0FBV0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFUSjtBQVlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBVko7QUFhRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVhKO0FBWUk7RUFBUyxVQUFBO0FBVGI7O0FBYUE7RUFDRSxrQ0FBQTtFQUNBLHNDQUFBO0FBVkY7O0FBYUE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUFJLGlCQUFBO0VBVEo7QUFDRjtBQVdBO0VBQ0U7SUFBSSxlQUFBO0lBQWlCLFVBQUE7RUFQckI7RUFRQTtJQUFNLGlCQUFBO0lBQW1CLFVBQUE7RUFKekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxufVxcblxcbmh0bWwgeyBcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAjX19uZXh0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAjaW5kZXhXcmFwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcblxcbiAgICAgIC5iZ0ltYWdlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vL2hlYWRlclxcbmhlYWRlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGRpdiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcblxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaDEgeyBtaW4td2lkdGg6IDIwMHB4OyBqdXN0aWZ5LXNlbGY6IGxlZnQ7IG1hcmdpbi1sZWZ0OiAxMHB4OyB9IFxcbiAgICBmb3JtIHsgbWluLXdpZHRoOiA1MHB4OyBqdXN0aWZ5LXNlbGY6IHJpZ2h0OyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gIH1cXG59XFxuXFxuXFxuLy9mb290ZXJcXG4uZm9vdGVyV3JhcCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8vaW5kZXhcXG4uYXBwV3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAudGFza0luY3JlbWVudFdyYXAge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MHB4IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5pbmNyZW1lbnRUYXNrIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGlucHV0IHt3aWR0aDogMTAwJTsgaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAycHg7IGJvcmRlcjogMDsgfVxcblxcbiAgICAgICAgLmlucHV0QWxlcnQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzAsIDIzMCk7XFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHJlZDsgfVxcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5pbmNyZW1lbnRTdGFydCB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBpbnB1dCB7d2lkdGg6IDkwJTsgaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAycHg7IGJvcmRlcjogMDt9XFxuICAgIH1cXG5cXG4gICAgLmluY3JlbWVudE1pbiB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBpbnB1dCB7d2lkdGg6IDkwJTsgaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAycHg7IGJvcmRlcjogMDt9XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbldyYXAge1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IDA7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAucGx1c0ljb24ge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vL3NwbGl0dGVyXFxuLnRvZ2dsZUJnIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuXFxuLnNwbGl0dGVyV3JhcCB7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC00cHggcmdiKDAsIDAsIDApO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MHB4IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgKiB7XFxuICAgICAgYmFja2dyb3VuZDogMDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3BhY2l0eTogMC4zO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIH1cXG4gIH1cXG5cXG4gIFxcbiAgaW5wdXQgeyBcXG4gICAgd2lkdGg6IDkwJTsgXFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7IFxcbiAgICBjb2xvcjogdmFyKC0taW5wdXQtdGV4dCk7IFxcbiAgfVxcblxcbiAgLnNwbGl0VGFzayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcblxcbiAgLnNwbGl0U3RhcnQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zcGxpdE1pbiB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNwbGl0QnRuIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJ1dHRvbiB7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG59XFxuXFxuLmFkZGluZyB7XFxuICBhbmltYXRpb246IGFkZGluZ1RyYW5zaXRpb24gMC4ycyAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5yZW1vdmluZyB7XFxuICBhbmltYXRpb246IHJlbW92aW5nVHJhbnNpdGlvbiAwLjJzIDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBhZGRpbmdUcmFuc2l0aW9uIHtcXG4gIDAlIHttYXJnaW4tdG9wOiAtNTBweDt9XFxufVxcblxcbkBrZXlmcmFtZXMgcmVtb3ZpbmdUcmFuc2l0aW9uIHtcXG4gIDAlIHttYXJnaW4tdG9wOiAwcHg7IG9wYWNpdHk6IDE7fVxcbiAgMTAwJSB7bWFyZ2luLXRvcDogLTUwcHg7IG9wYWNpdHk6IDA7fVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[14].use[4]!./src/styles/globals.scss\n"));

/***/ })

});