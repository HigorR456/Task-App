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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/splitter */ \"./src/components/splitter.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.tsx\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fontFamily: \"sans-serif\",\n        \"--bg-primary\": \"white\",\n        \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n        \"--bg-tertiary\": \"rgb(200, 200, 200)\",\n        \"--text-primary\": \"white\",\n        \"--input-text\": \"black\",\n        \"--secondary\": \"white\",\n        \"--input-alert-text\": \"red\",\n        \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n    });\n    const [taskInput, setTaskInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: \"\",\n        minutes: \"\",\n        id: 0\n    });\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputAlert, setInputAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        class: \"\",\n        ph: \"Task\"\n    });\n    const handleOnChange = (e)=>{\n        setTaskInput({\n            task: e.target.type === \"text\" ? e.target.value : taskInput.task,\n            minutes: e.target.type === \"time\" ? e.target.value : taskInput.minutes,\n            id: new Date().getTime()\n        });\n    };\n    const handleAddTask = ()=>{\n        if (taskInput.task.length === 0) {\n            setInputAlert({\n                class: \"inputAlert\",\n                ph: \"Type something\"\n            });\n        } else {\n            setTaskInput({\n                task: taskInput.task,\n                minutes: taskInput.minutes,\n                id: new Date().getTime()\n            });\n            setNewTask([\n                ...newTask,\n                {\n                    ...taskInput\n                }\n            ]);\n            setInputAlert({\n                class: \"\",\n                ph: \"Task\"\n            });\n            console.log(newTask);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setNewTask();\n    }, [\n        newTask\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"indexWrap\",\n        style: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"appWrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"taskIncrementWrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementTask\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: inputAlert.class,\n                                    placeholder: inputAlert.ph,\n                                    type: \"text\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementMin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"time\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttonWrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleAddTask,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiPlus, {\n                                        className: \"plusIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    newTask.map((e, index)=>{\n                        const result = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_splitter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            prop: e,\n                            newTask: newTask,\n                            setNewTask: setNewTask,\n                            className: index / 2 === 0 ? \"toggleBg\" : \"\"\n                        }, e.id, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 26\n                        }, this);\n                        return result;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QVwNc1ib3jgUDV17E5ZEjpx50AI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU82QjtvQkFDVDs7Ozs7OzswQkFHRiw4REFBQ3ZDLDBEQUFNQTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBdEZ1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3BsaXR0ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuaW1wb3J0IHtCaVBsdXN9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHtcbiAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgJy0tYmctcHJpbWFyeSc6ICd3aGl0ZScsXG4gICAgJy0tYmctc2Vjb25kYXJ5JzogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgJy0tYmctdGVydGlhcnknOiAncmdiKDIwMCwgMjAwLCAyMDApJyxcbiAgICAnLS10ZXh0LXByaW1hcnknOiAnd2hpdGUnLFxuICAgICctLWlucHV0LXRleHQnOiAnYmxhY2snLFxuICAgICctLXNlY29uZGFyeSc6ICd3aGl0ZScsXG4gICAgJy0taW5wdXQtYWxlcnQtdGV4dCc6ICdyZWQnLFxuICAnLS1pbnB1dC1hbGVydC1iZyc6ICdyZ2IoMjU1LCAyMzAsIDIzMCknLH1cbiAgKTtcblxuICBjb25zdCBbdGFza0lucHV0LCBzZXRUYXNrSW5wdXRdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgdGFzazogJycsXG4gICAgbWludXRlczogJycsXG4gICAgaWQ6IDAsXG4gIH0pXG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlPEFycmF5PG9iamVjdD4+KFtdKVxuICBjb25zdCBbaW5wdXRBbGVydCwgc2V0SW5wdXRBbGVydF0gPSBcbiAgICB1c2VTdGF0ZTx7Y2xhc3M6IHN0cmluZzsgcGg6IHN0cmluZ30+XG4gICAgKHtjbGFzczogJycsIHBoOiAnVGFzayd9KTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRUYXNrSW5wdXQoe1xuICAgICAgdGFzazogZS50YXJnZXQudHlwZSA9PT0gJ3RleHQnID8gZS50YXJnZXQudmFsdWUgOiB0YXNrSW5wdXQudGFzayxcbiAgICAgIG1pbnV0ZXM6IGUudGFyZ2V0LnR5cGUgPT09ICd0aW1lJyA/IGUudGFyZ2V0LnZhbHVlIDogdGFza0lucHV0Lm1pbnV0ZXMsXG4gICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9KVxuICB9XG4gIFxuICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKCkgPT4ge1xuICAgIGlmICh0YXNrSW5wdXQudGFzay5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldElucHV0QWxlcnQoe2NsYXNzOiAnaW5wdXRBbGVydCcsIHBoOiAnVHlwZSBzb21ldGhpbmcnfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGFza0lucHV0KHtcbiAgICAgICAgdGFzazogdGFza0lucHV0LnRhc2ssXG4gICAgICAgIG1pbnV0ZXM6IHRhc2tJbnB1dC5taW51dGVzLFxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH0pXG4gICAgICBzZXROZXdUYXNrKFsuLi5uZXdUYXNrLCB7Li4udGFza0lucHV0fV0pO1xuICAgICAgc2V0SW5wdXRBbGVydCh7Y2xhc3M6ICcnLCBwaDogJ1Rhc2snfSlcbiAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0TmV3VGFzaygpXG4gIH0sIFtuZXdUYXNrXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2luZGV4V3JhcCcgc3R5bGU9e3RoZW1lfT5cbiAgICAgIDxIZWFkZXIgc2V0VGhlbWU9e3NldFRoZW1lfSAvPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBXcmFwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2tJbmNyZW1lbnRXcmFwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmNyZW1lbnRUYXNrJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dEFsZXJ0LmNsYXNzfSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXRBbGVydC5waH0gdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmNyZW1lbnRNaW4nPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPSd0aW1lJyBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbldyYXAnPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRhc2t9PlxuICAgICAgICAgICAgICAgIDxCaVBsdXMgY2xhc3NOYW1lPSdwbHVzSWNvbicgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge25ld1Rhc2subWFwKChlOmFueSAsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSA8U3BsaXR0ZXIga2V5PXtlLmlkfSBwcm9wPXtlfSBuZXdUYXNrPXtuZXdUYXNrfSBzZXROZXdUYXNrPXtzZXROZXdUYXNrfSBjbGFzc05hbWU9e2luZGV4LzIgPT09IDAgPyAndG9nZ2xlQmcnIDogJyd9IC8+O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BsaXR0ZXIiLCJIZWFkZXIiLCJGb290ZXIiLCJCaVBsdXMiLCJIb21lIiwidGhlbWUiLCJzZXRUaGVtZSIsImZvbnRGYW1pbHkiLCJ0YXNrSW5wdXQiLCJzZXRUYXNrSW5wdXQiLCJ0YXNrIiwibWludXRlcyIsImlkIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJpbnB1dEFsZXJ0Iiwic2V0SW5wdXRBbGVydCIsImNsYXNzIiwicGgiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwidmFsdWUiLCJEYXRlIiwiZ2V0VGltZSIsImhhbmRsZUFkZFRhc2siLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJyZXN1bHQiLCJwcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});