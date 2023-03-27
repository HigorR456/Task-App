"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n\n\nconst Header = (param)=>{\n    let { setTheme  } = param;\n    const handleChangeTheme = (e)=>{\n        console.log(e.target.value);\n        if (e.target.value === \"light\") {\n            setTheme({\n                fontFamily: \"sans-serif\",\n                \"--bg-primary\": \"white\",\n                \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n                \"--bg-tertiary\": \"rgb(200, 200, 200)\",\n                \"--text-primary\": \"white\",\n                \"--text-primary\": \"white\",\n                \"--input-text\": \"black\",\n                \"--secondary\": \"white\",\n                \"--input-alert-text\": \"red\",\n                \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n            });\n        } else if (e.target.value === \"dark\") {\n            setTheme({\n                fontFamily: \"sans-serif\",\n                \"--bg-primary\": \"rgb(20, 20, 30)\",\n                \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n                \"--bg-tertiary\": \"black\",\n                \"--text-primary\": \"white\",\n                \"--input-text\": \"white\",\n                \"--secondary\": \"black\",\n                \"--input-alert-text\": \"red\",\n                \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n            });\n        } else if (e.target.value === \"green\") {\n            setTheme({\n                fontFamily: \"sans-serif\",\n                \"--bg-primary\": \"rgb(90, 180, 180)\",\n                \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n                \"--bg-tertiary\": \"rgb(60, 120, 120)\",\n                \"--text-primary\": \"white\",\n                \"--input-text\": \"white\",\n                \"--secondary\": \"black\",\n                \"--input-alert-text\": \"red\",\n                \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_1__.GoTasklist, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        \"Task App\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Theme\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"theme\",\n                            onChange: handleChangeTheme,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"light\",\n                                    children: \"Light\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"dark\",\n                                    children: \"Dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"green\",\n                                    children: \"Green\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\header.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFNBQVMsU0FBcUI7UUFBcEIsRUFBQ0MsU0FBUSxFQUFNO0lBRTNCLE1BQU1DLG9CQUFvQixDQUFDQyxJQUFXO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztRQUMxQixJQUFJSixFQUFFRyxNQUFNLENBQUNDLEtBQUssS0FBSyxTQUFTO1lBQzVCTixTQUFTO2dCQUNUTyxZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2Ysc0JBQXNCO2dCQUN0QixvQkFBb0I7WUFBcUI7UUFDN0MsT0FBTyxJQUFJTCxFQUFFRyxNQUFNLENBQUNDLEtBQUssS0FBSyxRQUFRO1lBQ2xDTixTQUFTO2dCQUNMTyxZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLHNCQUFzQjtnQkFDdEIsb0JBQW9CO1lBQXFCO1FBQ2pELE9BQU8sSUFBSUwsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLEtBQUssU0FBUztZQUNuQ04sU0FBUztnQkFDTE8sWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtZQUFxQjtRQUNqRCxDQUFDO0lBQ0w7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0M7OzhCQUNHLDhEQUFDQzs7c0NBQ0csOERBQUNYLHNEQUFVQTs7Ozs7d0JBQUc7Ozs7Ozs7OEJBR2xCLDhEQUFDWTs7c0NBQ0csOERBQUNDO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFPQyxNQUFLOzRCQUFRQyxVQUFVYjs7OENBQzNCLDhEQUFDYztvQ0FBT1QsT0FBTTs4Q0FBUTs7Ozs7OzhDQUN0Qiw4REFBQ1M7b0NBQU9ULE9BQU07OENBQU87Ozs7Ozs4Q0FDckIsOERBQUNTO29DQUFPVCxPQUFNOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlDO0tBM0RNUDtBQTZETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzEzMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29UYXNrbGlzdCB9IGZyb20gJ3JlYWN0LWljb25zL2dvJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHtzZXRUaGVtZX06IGFueSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRoZW1lID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ2xpZ2h0Jykge1xyXG4gICAgICAgICAgICBzZXRUaGVtZSh7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgJy0tYmctcHJpbWFyeSc6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICctLWJnLXNlY29uZGFyeSc6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgICAgICAgICAnLS1iZy10ZXJ0aWFyeSc6ICdyZ2IoMjAwLCAyMDAsIDIwMCknLFxyXG4gICAgICAgICAgICAnLS10ZXh0LXByaW1hcnknOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAnLS10ZXh0LXByaW1hcnknOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAnLS1pbnB1dC10ZXh0JzogJ2JsYWNrJyxcclxuICAgICAgICAgICAgJy0tc2Vjb25kYXJ5JzogJ3doaXRlJyxcclxuICAgICAgICAgICAgJy0taW5wdXQtYWxlcnQtdGV4dCc6ICdyZWQnLFxyXG4gICAgICAgICAgICAnLS1pbnB1dC1hbGVydC1iZyc6ICdyZ2IoMjU1LCAyMzAsIDIzMCknLH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgICctLWJnLXByaW1hcnknOiAncmdiKDIwLCAyMCwgMzApJyxcclxuICAgICAgICAgICAgICAgICctLWJnLXNlY29uZGFyeSc6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgICAgICAgICAgICAgJy0tYmctdGVydGlhcnknOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgJy0tdGV4dC1wcmltYXJ5JzogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICctLWlucHV0LXRleHQnOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgJy0tc2Vjb25kYXJ5JzogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICctLWlucHV0LWFsZXJ0LXRleHQnOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICctLWlucHV0LWFsZXJ0LWJnJzogJ3JnYigyNTUsIDIzMCwgMjMwKScsfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnZ3JlZW4nKSB7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgICctLWJnLXByaW1hcnknOiAncmdiKDkwLCAxODAsIDE4MCknLFxyXG4gICAgICAgICAgICAgICAgJy0tYmctc2Vjb25kYXJ5JzogJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICAgICAgICAgICAgICAnLS1iZy10ZXJ0aWFyeSc6ICdyZ2IoNjAsIDEyMCwgMTIwKScsXHJcbiAgICAgICAgICAgICAgICAnLS10ZXh0LXByaW1hcnknOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgJy0taW5wdXQtdGV4dCc6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAnLS1zZWNvbmRhcnknOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgJy0taW5wdXQtYWxlcnQtdGV4dCc6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgJy0taW5wdXQtYWxlcnQtYmcnOiAncmdiKDI1NSwgMjMwLCAyMzApJyx9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvVGFza2xpc3QgLz5cclxuICAgICAgICAgICAgICAgICAgICBUYXNrIEFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGhlbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ndGhlbWUnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2xpZ2h0Jz5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdkYXJrJz5EYXJrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2dyZWVuJz5HcmVlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIkdvVGFza2xpc3QiLCJIZWFkZXIiLCJzZXRUaGVtZSIsImhhbmRsZUNoYW5nZVRoZW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvbnRGYW1pbHkiLCJoZWFkZXIiLCJoMSIsImZvcm0iLCJsYWJlbCIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n"));

/***/ })

});