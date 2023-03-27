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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/splitter */ \"./src/components/splitter.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.tsx\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fontFamily: \"sans-serif\",\n        \"--bg-primary\": \"white\",\n        \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n        \"--bg-tertiary\": \"rgb(220, 220, 220)\",\n        \"--text-primary\": \"white\",\n        \"--input-text\": \"black\",\n        \"--secondary\": \"white\",\n        \"--input-alert-text\": \"red\",\n        \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n    });\n    const [taskInput, setTaskInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: \"\",\n        minutes: \"\",\n        id: 0\n    });\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputAlert, setInputAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        class: \"\",\n        ph: \"Task\"\n    });\n    const handleOnChange = (e)=>{\n        setTaskInput({\n            task: e.target.type === \"text\" ? e.target.value : taskInput.task,\n            minutes: e.target.type === \"time\" ? e.target.value : taskInput.minutes,\n            id: new Date().getTime()\n        });\n    };\n    const handleAddTask = ()=>{\n        if (taskInput.task.length === 0) {\n            setInputAlert({\n                class: \"inputAlert\",\n                ph: \"Type something\"\n            });\n        } else {\n            setTaskInput({\n                task: taskInput.task,\n                minutes: taskInput.minutes,\n                id: new Date().getTime()\n            });\n            setNewTask([\n                ...newTask,\n                {\n                    ...taskInput\n                }\n            ]);\n            setInputAlert({\n                class: \"\",\n                ph: \"Task\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"indexWrap\",\n        style: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"appWrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"taskIncrementWrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementTask\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: inputAlert.class,\n                                    placeholder: inputAlert.ph,\n                                    type: \"text\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementMin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"time\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttonWrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleAddTask,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiPlus, {\n                                        className: \"plusIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this),\n                    newTask.map((e, index)=>{\n                        const result = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_splitter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            prop: e,\n                            className: index / 2 === 0 ? \"toggleBg\" : \"\"\n                        }, e.id, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 26\n                        }, this);\n                        return result;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"i3w/uawyU+FTc9cWKd0tk47A8GM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3BsaXR0ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuaW1wb3J0IHtCaVBsdXN9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHtcbiAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgJy0tYmctcHJpbWFyeSc6ICd3aGl0ZScsXG4gICAgJy0tYmctc2Vjb25kYXJ5JzogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgJy0tYmctdGVydGlhcnknOiAncmdiKDIyMCwgMjIwLCAyMjApJyxcbiAgICAnLS10ZXh0LXByaW1hcnknOiAnd2hpdGUnLFxuICAgICctLWlucHV0LXRleHQnOiAnYmxhY2snLFxuICAgICctLXNlY29uZGFyeSc6ICd3aGl0ZScsXG4gICAgJy0taW5wdXQtYWxlcnQtdGV4dCc6ICdyZWQnLFxuICAnLS1pbnB1dC1hbGVydC1iZyc6ICdyZ2IoMjU1LCAyMzAsIDIzMCknLH1cbiAgKTtcblxuICBjb25zdCBbdGFza0lucHV0LCBzZXRUYXNrSW5wdXRdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgdGFzazogJycsXG4gICAgbWludXRlczogJycsXG4gICAgaWQ6IDAsXG4gIH0pXG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlPEFycmF5PG9iamVjdD4+KFtdKVxuICBjb25zdCBbaW5wdXRBbGVydCwgc2V0SW5wdXRBbGVydF0gPSBcbiAgICB1c2VTdGF0ZTx7Y2xhc3M6IHN0cmluZzsgcGg6IHN0cmluZ30+XG4gICAgKHtjbGFzczogJycsIHBoOiAnVGFzayd9KTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRUYXNrSW5wdXQoe1xuICAgICAgdGFzazogZS50YXJnZXQudHlwZSA9PT0gJ3RleHQnID8gZS50YXJnZXQudmFsdWUgOiB0YXNrSW5wdXQudGFzayxcbiAgICAgIG1pbnV0ZXM6IGUudGFyZ2V0LnR5cGUgPT09ICd0aW1lJyA/IGUudGFyZ2V0LnZhbHVlIDogdGFza0lucHV0Lm1pbnV0ZXMsXG4gICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9KVxuICB9XG4gIFxuICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKCkgPT4ge1xuICAgIGlmICh0YXNrSW5wdXQudGFzay5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldElucHV0QWxlcnQoe2NsYXNzOiAnaW5wdXRBbGVydCcsIHBoOiAnVHlwZSBzb21ldGhpbmcnfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGFza0lucHV0KHtcbiAgICAgICAgdGFzazogdGFza0lucHV0LnRhc2ssXG4gICAgICAgIG1pbnV0ZXM6IHRhc2tJbnB1dC5taW51dGVzLFxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH0pXG4gICAgICBzZXROZXdUYXNrKFsuLi5uZXdUYXNrLCB7Li4udGFza0lucHV0fV0pO1xuICAgICAgc2V0SW5wdXRBbGVydCh7Y2xhc3M6ICcnLCBwaDogJ1Rhc2snfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2luZGV4V3JhcCcgc3R5bGU9e3RoZW1lfT5cbiAgICAgIDxIZWFkZXIgc2V0VGhlbWU9e3NldFRoZW1lfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwV3JhcCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFza0luY3JlbWVudFdyYXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmNyZW1lbnRUYXNrJz5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0QWxlcnQuY2xhc3N9IFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXRBbGVydC5waH0gdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmNyZW1lbnRNaW4nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9J3RpbWUnIFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uV3JhcCc+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRhc2t9PlxuICAgICAgICAgICAgICA8QmlQbHVzIGNsYXNzTmFtZT0ncGx1c0ljb24nIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtuZXdUYXNrLm1hcCgoZTphbnkgLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gPFNwbGl0dGVyIGtleT17ZS5pZH0gcHJvcD17ZX0gY2xhc3NOYW1lPXtpbmRleC8yID09PSAwID8gJ3RvZ2dsZUJnJyA6ICcnfSAvPjtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwbGl0dGVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiQmlQbHVzIiwiSG9tZSIsInRoZW1lIiwic2V0VGhlbWUiLCJmb250RmFtaWx5IiwidGFza0lucHV0Iiwic2V0VGFza0lucHV0IiwidGFzayIsIm1pbnV0ZXMiLCJpZCIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwiaW5wdXRBbGVydCIsInNldElucHV0QWxlcnQiLCJjbGFzcyIsInBoIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInZhbHVlIiwiRGF0ZSIsImdldFRpbWUiLCJoYW5kbGVBZGRUYXNrIiwibGVuZ3RoIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJyZXN1bHQiLCJwcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});