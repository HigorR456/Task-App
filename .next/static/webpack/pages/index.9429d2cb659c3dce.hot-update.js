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

/***/ "./src/components/splitter.tsx":
/*!*************************************!*\
  !*** ./src/components/splitter.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Splitter = (param)=>{\n    let { prop , newTask  } = param;\n    _s();\n    const [taskObj, setTaskObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ...prop\n    });\n    const [transitionClass, setTransitionClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"splitterWrap adding\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: 0,\n        min: 0\n    });\n    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleDisplayInput = (e)=>{\n        if (e.key === \"Enter\" || e.key === \"Escape\") {\n            console.log(e.currentTarget);\n            let taskObjSelector = {\n                ...taskObj\n            };\n            switch(e.currentTarget.id){\n                case \"taskBtn\":\n                    taskObjSelector.task = edit;\n                    break;\n                case \"minBtn\":\n                    taskObjSelector.minutes = edit;\n                    break;\n            }\n            setTaskObj({\n                ...taskObjSelector\n            });\n            setInput({\n                task: 0,\n                min: 0\n            });\n        } else {\n            switch(e.currentTarget.id){\n                case \"taskBtn\":\n                    setInput({\n                        task: 1,\n                        min: 0\n                    });\n                    setEdit(taskObj.task);\n                    break;\n                case \"minBtn\":\n                    setInput({\n                        task: 0,\n                        min: 1\n                    });\n                    setEdit(taskObj.minutes);\n                    break;\n            }\n        }\n    };\n    const handleRemoveTask = ()=>{\n        setTransitionClass(\"splitterWrap removing\");\n        setInterval(()=>{\n            setTaskObj({\n                task: \"\"\n            });\n        }, 150);\n        console.log(taskObj.id);\n        let removeVar = {\n            ...newTask\n        };\n        removeVar.map((e)=>{\n            e.id === taskObj.id ? e.task = \"\" : console.log(\"mapping\");\n        });\n        console.log(removeVar);\n    };\n    if (taskObj.task.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: transitionClass,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitTask\",\n                        children: input.task === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                taskObj.task,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"taskBtn\",\n                                    onClick: handleDisplayInput,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPen, {\n                                        className: \"editIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            type: \"text\",\n                            id: \"taskBtn\",\n                            defaultValue: taskObj.task,\n                            onKeyDown: handleDisplayInput,\n                            onChange: (e)=>setEdit(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitMin\",\n                        children: input.min === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                taskObj.minutes,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"minBtn\",\n                                    onClick: handleDisplayInput,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPen, {\n                                        className: \"editIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            type: \"time\",\n                            id: \"minBtn\",\n                            defaultValue: taskObj.minutes,\n                            onKeyDown: handleDisplayInput,\n                            onChange: (e)=>setEdit(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitBtn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleRemoveTask,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTrash, {\n                                className: \"trashIcon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false);\n    }\n};\n_s(Splitter, \"6N1+Ae0BmXKP2a8GgXDw3RfLO40=\");\n_c = Splitter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Splitter);\nvar _c;\n$RefreshReg$(_c, \"Splitter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGxpdHRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDYztBQUUvQyxNQUFNRyxXQUFXLFNBQTRCO1FBQTNCLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFPOztJQUVwQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQU07UUFBQyxHQUFHSSxJQUFJO0lBQUE7SUFDcEQsTUFBTSxDQUFDSSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBUztJQUMvRCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQU07UUFDcENZLE1BQU07UUFDTkMsS0FBSztJQUNUO0lBQ0EsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQTtJQUVoQyxNQUFNZ0IscUJBQXFCLENBQUNDLElBQVc7UUFDbkMsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFdBQVdELEVBQUVDLEdBQUcsS0FBSyxVQUFVO1lBQ3pDQyxRQUFRQyxHQUFHLENBQUNILEVBQUVJLGFBQWE7WUFDM0IsSUFBSUMsa0JBQWtCO2dCQUFDLEdBQUdoQixPQUFPO1lBQUE7WUFDakMsT0FBUVcsRUFBRUksYUFBYSxDQUFDRSxFQUFFO2dCQUN0QixLQUFLO29CQUNERCxnQkFBZ0JWLElBQUksR0FBR0U7b0JBQ3ZCLEtBQU07Z0JBQ1YsS0FBSztvQkFDRFEsZ0JBQWdCRSxPQUFPLEdBQUdWO29CQUMxQixLQUFNO1lBQ2Q7WUFDQVAsV0FBVztnQkFBQyxHQUFHZSxlQUFlO1lBQUE7WUFDOUJYLFNBQVM7Z0JBQUNDLE1BQU07Z0JBQUdDLEtBQUs7WUFBRTtRQUM5QixPQUFPO1lBQ0gsT0FBUUksRUFBRUksYUFBYSxDQUFDRSxFQUFFO2dCQUN0QixLQUFLO29CQUNEWixTQUFTO3dCQUFDQyxNQUFNO3dCQUFHQyxLQUFLO29CQUFFO29CQUMxQkUsUUFBUVQsUUFBUU0sSUFBSTtvQkFDcEIsS0FBTTtnQkFDVixLQUFLO29CQUNERCxTQUFTO3dCQUFDQyxNQUFNO3dCQUFHQyxLQUFLO29CQUFFO29CQUMxQkUsUUFBUVQsUUFBUWtCLE9BQU87b0JBQ3ZCLEtBQU07WUFDbEI7UUFDQSxDQUFDO0lBQ0w7SUFFQSxNQUFNQyxtQkFBbUIsSUFBTTtRQUMzQmhCLG1CQUFtQjtRQUNuQmlCLFlBQVksSUFBTTtZQUNkbkIsV0FBVztnQkFBQ0ssTUFBTTtZQUFJO1FBQzFCLEdBQUc7UUFDSE8sUUFBUUMsR0FBRyxDQUFDZCxRQUFRaUIsRUFBRTtRQUN0QixJQUFJSSxZQUFZO1lBQUMsR0FBR3RCLE9BQU87UUFBQTtRQUMzQnNCLFVBQVVDLEdBQUcsQ0FBQ1gsQ0FBQUEsSUFBSztZQUNmQSxFQUFFTSxFQUFFLEtBQUtqQixRQUFRaUIsRUFBRSxHQUFHTixFQUFFTCxJQUFJLEdBQUcsS0FBS08sUUFBUUMsR0FBRyxDQUFDLFVBQVU7UUFBQTtRQUM5REQsUUFBUUMsR0FBRyxDQUFDTztJQUNoQjtJQUVBLElBQUlyQixRQUFRTSxJQUFJLENBQUNpQixNQUFNLEtBQUssR0FBRztRQUMzQixxQkFDSTtJQUdSLE9BQU87UUFDSCxxQkFDQTtzQkFDSSw0RUFBQ0M7Z0JBQUlDLFdBQVd2Qjs7a0NBQ1osOERBQUNzQjt3QkFBSUMsV0FBVTtrQ0FDVnJCLE1BQU1FLElBQUksS0FBSyxrQkFDaEI7O2dDQUNLTixRQUFRTSxJQUFJOzhDQUNiLDhEQUFDb0I7b0NBQU9ULElBQUc7b0NBQ1hVLFNBQVNqQjs4Q0FDTCw0RUFBQ2QsaURBQUtBO3dDQUFDNkIsV0FBVTs7Ozs7Ozs7Ozs7O3lEQUd6Qiw4REFBQ3JCOzRCQUNEd0IsU0FBUzs0QkFDVEMsTUFBSzs0QkFDTFosSUFBRzs0QkFDSGEsY0FBYzlCLFFBQVFNLElBQUk7NEJBQzFCeUIsV0FBV3JCOzRCQUNYc0IsVUFBVXJCLENBQUFBLElBQUtGLFFBQVFFLEVBQUVzQixNQUFNLENBQUNDLEtBQUs7Ozs7O3FDQUFXOzs7Ozs7a0NBR3BELDhEQUFDVjt3QkFBSUMsV0FBVTtrQ0FDVnJCLE1BQU1HLEdBQUcsS0FBSyxrQkFDZjs7Z0NBQ0tQLFFBQVFrQixPQUFPOzhDQUNoQiw4REFBQ1E7b0NBQU9ULElBQUc7b0NBQVNVLFNBQVNqQjs4Q0FDekIsNEVBQUNkLGlEQUFLQTt3Q0FBQzZCLFdBQVU7Ozs7Ozs7Ozs7Ozt5REFHekIsOERBQUNyQjs0QkFDRHdCLFNBQVM7NEJBQ1RDLE1BQUs7NEJBQ0xaLElBQUc7NEJBQ0hhLGNBQWM5QixRQUFRa0IsT0FBTzs0QkFDN0JhLFdBQVdyQjs0QkFDWHNCLFVBQVVyQixDQUFBQSxJQUFLRixRQUFRRSxFQUFFc0IsTUFBTSxDQUFDQyxLQUFLOzs7OztxQ0FBVzs7Ozs7O2tDQUdwRCw4REFBQ1Y7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFPQyxTQUFTUjtzQ0FDYiw0RUFBQ3hCLG1EQUFPQTtnQ0FBQzhCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXZDLENBQUM7QUFDTDtHQXZHTTVCO0tBQUFBO0FBeUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwbGl0dGVyLnRzeD9jOTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVRyYXNoLCBGYVBlbiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuY29uc3QgU3BsaXR0ZXIgPSAoeyBwcm9wLCBuZXdUYXNrIH06IGFueSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt0YXNrT2JqLCBzZXRUYXNrT2JqXSA9IHVzZVN0YXRlPGFueT4oey4uLnByb3B9KVxyXG4gICAgY29uc3QgW3RyYW5zaXRpb25DbGFzcywgc2V0VHJhbnNpdGlvbkNsYXNzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3NwbGl0dGVyV3JhcCBhZGRpbmcnKVxyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxhbnk+KHtcclxuICAgICAgICB0YXNrOiAwLFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgIH0pXHJcbiAgICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZTxhbnk+KClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEaXNwbGF5SW5wdXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpXHJcbiAgICAgICAgICAgIGxldCB0YXNrT2JqU2VsZWN0b3IgPSB7Li4udGFza09ian07XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5jdXJyZW50VGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YXNrQnRuJzogXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza09ialNlbGVjdG9yLnRhc2sgPSBlZGl0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWluQnRuJzpcclxuICAgICAgICAgICAgICAgICAgICB0YXNrT2JqU2VsZWN0b3IubWludXRlcyA9IGVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGFza09iaih7Li4udGFza09ialNlbGVjdG9yfSk7XHJcbiAgICAgICAgICAgIHNldElucHV0KHt0YXNrOiAwLCBtaW46IDAsfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Rhc2tCdG4nOiBcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dCh7dGFzazogMSwgbWluOiAwLH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RWRpdCh0YXNrT2JqLnRhc2spXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5CdG4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0KHt0YXNrOiAwLCBtaW46IDEsfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHRhc2tPYmoubWludXRlcylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VHJhbnNpdGlvbkNsYXNzKCdzcGxpdHRlcldyYXAgcmVtb3ZpbmcnKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRhc2tPYmooe3Rhc2s6ICcnLCB9KTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tPYmouaWQpXHJcbiAgICAgICAgbGV0IHJlbW92ZVZhciA9IHsuLi5uZXdUYXNrfVxyXG4gICAgICAgIHJlbW92ZVZhci5tYXAoZSA9PiB7IFxyXG4gICAgICAgICAgICBlLmlkID09PSB0YXNrT2JqLmlkID8gZS50YXNrID0gJycgOiBjb25zb2xlLmxvZygnbWFwcGluZycpfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmVWYXIpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhc2tPYmoudGFzay5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RyYW5zaXRpb25DbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BsaXRUYXNrJz5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXQudGFzayA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2tPYmoudGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ndGFza0J0bicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpc3BsYXlJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQZW4gY2xhc3NOYW1lPSdlZGl0SWNvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSd0YXNrQnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFza09iai50YXNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRGlzcGxheUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVkaXQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGxpdE1pbic+XHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0Lm1pbiA9PT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrT2JqLm1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J21pbkJ0bicgb25DbGljaz17aGFuZGxlRGlzcGxheUlucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVBlbiBjbGFzc05hbWU9J2VkaXRJY29uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0aW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdtaW5CdG4nXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YXNrT2JqLm1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVEaXNwbGF5SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RWRpdChlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwbGl0QnRuJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVRhc2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFUcmFzaCBjbGFzc05hbWU9J3RyYXNoSWNvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmFUcmFzaCIsIkZhUGVuIiwiU3BsaXR0ZXIiLCJwcm9wIiwibmV3VGFzayIsInRhc2tPYmoiLCJzZXRUYXNrT2JqIiwidHJhbnNpdGlvbkNsYXNzIiwic2V0VHJhbnNpdGlvbkNsYXNzIiwiaW5wdXQiLCJzZXRJbnB1dCIsInRhc2siLCJtaW4iLCJlZGl0Iiwic2V0RWRpdCIsImhhbmRsZURpc3BsYXlJbnB1dCIsImUiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsInRhc2tPYmpTZWxlY3RvciIsImlkIiwibWludXRlcyIsImhhbmRsZVJlbW92ZVRhc2siLCJzZXRJbnRlcnZhbCIsInJlbW92ZVZhciIsIm1hcCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhdXRvRm9jdXMiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwib25LZXlEb3duIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/splitter.tsx\n"));

/***/ })

});