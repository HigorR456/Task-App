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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Splitter = (param)=>{\n    let { prop , newTask , setNewTask  } = param;\n    _s();\n    const [taskObj, setTaskObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        ...prop\n    });\n    const [transitionClass, setTransitionClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"splitterWrap adding\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: 0,\n        min: 0\n    });\n    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleDisplayInput = (e)=>{\n        if (e.key === \"Enter\" || e.key === \"Escape\") {\n            console.log(e.currentTarget);\n            let taskObjSelector = {\n                ...taskObj\n            };\n            switch(e.currentTarget.id){\n                case \"taskBtn\":\n                    taskObjSelector.task = edit;\n                    break;\n                case \"minBtn\":\n                    taskObjSelector.minutes = edit;\n                    break;\n            }\n            setTaskObj({\n                ...taskObjSelector\n            });\n            setInput({\n                task: 0,\n                min: 0\n            });\n        } else {\n            switch(e.currentTarget.id){\n                case \"taskBtn\":\n                    setInput({\n                        task: 1,\n                        min: 0\n                    });\n                    setEdit(taskObj.task);\n                    break;\n                case \"minBtn\":\n                    setInput({\n                        task: 0,\n                        min: 1\n                    });\n                    setEdit(taskObj.minutes);\n                    break;\n            }\n        }\n    };\n    const handleRemoveTask = ()=>{\n        setTransitionClass(\"splitterWrap removing\");\n        setInterval(()=>{\n            setTaskObj({\n                task: \"\"\n            });\n        }, 150);\n        console.log(taskObj.id);\n        let removeVar = [\n            ...newTask\n        ];\n        removeVar.map((e)=>{\n            e.id === taskObj.id ? e.task = \"\" : console.log(\"maping\");\n        });\n        setNewTask([\n            ...removeVar\n        ]);\n    };\n    if (taskObj.task.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: transitionClass,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitTask\",\n                        children: input.task === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                taskObj.task,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"taskBtn\",\n                                    onClick: handleDisplayInput,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPen, {\n                                        className: \"editIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            type: \"text\",\n                            id: \"taskBtn\",\n                            defaultValue: taskObj.task,\n                            onKeyDown: handleDisplayInput,\n                            onChange: (e)=>setEdit(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitMin\",\n                        children: input.min === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                taskObj.minutes,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"minBtn\",\n                                    onClick: handleDisplayInput,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPen, {\n                                        className: \"editIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            type: \"time\",\n                            id: \"minBtn\",\n                            defaultValue: taskObj.minutes,\n                            onKeyDown: handleDisplayInput,\n                            onChange: (e)=>setEdit(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"splitBtn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleRemoveTask,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTrash, {\n                                className: \"trashIcon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\components\\\\splitter.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false);\n    }\n};\n_s(Splitter, \"6N1+Ae0BmXKP2a8GgXDw3RfLO40=\");\n_c = Splitter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Splitter);\nvar _c;\n$RefreshReg$(_c, \"Splitter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLGtCQUNmOztnQ0FDS1AsUUFBUWtCLE9BQU87OENBQ2hCLDhEQUFDUTtvQ0FBT1QsSUFBRztvQ0FBU1UsU0FBU2pCOzhDQUN6Qiw0RUFBQ2YsaURBQUtBO3dDQUFDOEIsV0FBVTs7Ozs7Ozs7Ozs7O3lEQUd6Qiw4REFBQ3JCOzRCQUNEd0IsU0FBUzs0QkFDVEMsTUFBSzs0QkFDTFosSUFBRzs0QkFDSGEsY0FBYzlCLFFBQVFrQixPQUFPOzRCQUM3QmEsV0FBV3JCOzRCQUNYc0IsVUFBVXJCLENBQUFBLElBQUtGLFFBQVFFLEVBQUVzQixNQUFNLENBQUNDLEtBQUs7Ozs7O3FDQUFXOzs7Ozs7a0NBR3BELDhEQUFDVjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQU9DLFNBQVNSO3NDQUNiLDRFQUFDekIsbURBQU9BO2dDQUFDK0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNdkMsQ0FBQztBQUNMO0dBeEdNN0I7S0FBQUE7QUEwR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIudHN4P2M5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhVHJhc2gsIEZhUGVuIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5jb25zdCBTcGxpdHRlciA9ICh7IHByb3AsIG5ld1Rhc2ssIHNldE5ld1Rhc2sgfTogYW55KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Rhc2tPYmosIHNldFRhc2tPYmpdID0gdXNlU3RhdGU8YW55Pih7Li4ucHJvcH0pXHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbkNsYXNzLCBzZXRUcmFuc2l0aW9uQ2xhc3NdID0gdXNlU3RhdGU8c3RyaW5nPignc3BsaXR0ZXJXcmFwIGFkZGluZycpXHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPGFueT4oe1xyXG4gICAgICAgIHRhc2s6IDAsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlPGFueT4oKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpc3BsYXlJbnB1dCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldClcclxuICAgICAgICAgICAgbGV0IHRhc2tPYmpTZWxlY3RvciA9IHsuLi50YXNrT2JqfTtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmN1cnJlbnRUYXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Rhc2tCdG4nOiBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrT2JqU2VsZWN0b3IudGFzayA9IGVkaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtaW5CdG4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tPYmpTZWxlY3Rvci5taW51dGVzID0gZWRpdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUYXNrT2JqKHsuLi50YXNrT2JqU2VsZWN0b3J9KTtcclxuICAgICAgICAgICAgc2V0SW5wdXQoe3Rhc2s6IDAsIG1pbjogMCx9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY3VycmVudFRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFza0J0bic6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0KHt0YXNrOiAxLCBtaW46IDAsfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHRhc2tPYmoudGFzaylcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbkJ0bic6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQoe3Rhc2s6IDAsIG1pbjogMSx9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXQodGFza09iai5taW51dGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBzZXRUcmFuc2l0aW9uQ2xhc3MoJ3NwbGl0dGVyV3JhcCByZW1vdmluZycpO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGFza09iaih7dGFzazogJycsIH0pO1xyXG4gICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza09iai5pZClcclxuICAgICAgICBsZXQgcmVtb3ZlVmFyID0gWy4uLm5ld1Rhc2tdXHJcbiAgICAgICAgcmVtb3ZlVmFyLm1hcCgoZTogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICBlLmlkID09PSB0YXNrT2JqLmlkID8gZS50YXNrID0gJycgOiBjb25zb2xlLmxvZygnbWFwaW5nJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldE5ld1Rhc2soWy4uLnJlbW92ZVZhcl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXNrT2JqLnRhc2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0cmFuc2l0aW9uQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwbGl0VGFzayc+XHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0LnRhc2sgPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrT2JqLnRhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3Rhc2tCdG4nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEaXNwbGF5SW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhUGVuIGNsYXNzTmFtZT0nZWRpdEljb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBpZD0ndGFza0J0bidcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Rhc2tPYmoudGFza31cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZURpc3BsYXlJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFZGl0KGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BsaXRNaW4nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dC5taW4gPT09IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFza09iai5taW51dGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdtaW5CdG4nIG9uQ2xpY2s9e2hhbmRsZURpc3BsYXlJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQZW4gY2xhc3NOYW1lPSdlZGl0SWNvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGltZSdcclxuICAgICAgICAgICAgICAgICAgICBpZD0nbWluQnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFza09iai5taW51dGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRGlzcGxheUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVkaXQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGxpdEJ0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVUYXNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHJhc2ggY2xhc3NOYW1lPSd0cmFzaEljb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwbGl0dGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZhVHJhc2giLCJGYVBlbiIsIlNwbGl0dGVyIiwicHJvcCIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwidGFza09iaiIsInNldFRhc2tPYmoiLCJ0cmFuc2l0aW9uQ2xhc3MiLCJzZXRUcmFuc2l0aW9uQ2xhc3MiLCJpbnB1dCIsInNldElucHV0IiwidGFzayIsIm1pbiIsImVkaXQiLCJzZXRFZGl0IiwiaGFuZGxlRGlzcGxheUlucHV0IiwiZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwidGFza09ialNlbGVjdG9yIiwiaWQiLCJtaW51dGVzIiwiaGFuZGxlUmVtb3ZlVGFzayIsInNldEludGVydmFsIiwicmVtb3ZlVmFyIiwibWFwIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImF1dG9Gb2N1cyIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJvbktleURvd24iLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/splitter.tsx\n"));

/***/ })

});