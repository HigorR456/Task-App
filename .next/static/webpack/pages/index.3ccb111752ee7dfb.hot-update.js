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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/splitter */ \"./src/components/splitter.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.tsx\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fontFamily: \"sans-serif\",\n        \"--bg-primary\": \"white\",\n        \"--bg-secondary\": \"rgba(0, 0, 0, 0.5)\",\n        \"--bg-tertiary\": \"rgb(200, 200, 200)\",\n        \"--text-primary\": \"white\",\n        \"--input-text\": \"black\",\n        \"--secondary\": \"white\",\n        \"--input-alert-text\": \"red\",\n        \"--input-alert-bg\": \"rgb(255, 230, 230)\"\n    });\n    const [taskInput, setTaskInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task: \"\",\n        minutes: \"\",\n        id: 0\n    });\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputAlert, setInputAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        class: \"\",\n        ph: \"Task\"\n    });\n    const handleOnChange = (e)=>{\n        setTaskInput({\n            task: e.target.type === \"text\" ? e.target.value : taskInput.task,\n            minutes: e.target.type === \"time\" ? e.target.value : taskInput.minutes,\n            id: new Date().getTime()\n        });\n    };\n    const handleAddTask = ()=>{\n        if (taskInput.task.length === 0) {\n            setInputAlert({\n                class: \"inputAlert\",\n                ph: \"Type something\"\n            });\n        } else {\n            setTaskInput({\n                task: taskInput.task,\n                minutes: taskInput.minutes,\n                id: new Date().getTime()\n            });\n            setNewTask([\n                ...newTask,\n                {\n                    ...taskInput\n                }\n            ]);\n            setInputAlert({\n                class: \"\",\n                ph: \"Task\"\n            });\n            console.log(newTask);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"indexWrap\",\n        style: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"appWrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"taskIncrementWrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementTask\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: inputAlert.class,\n                                    placeholder: inputAlert.ph,\n                                    type: \"text\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"incrementMin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"time\",\n                                    onChange: handleOnChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttonWrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleAddTask,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiPlus, {\n                                        className: \"plusIcon\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    newTask.map((e, index)=>{\n                        const result = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_splitter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            prop: e,\n                            newTask: newTask,\n                            className: index / 2 === 0 ? \"toggleBg\" : \"\"\n                        }, e.id, false, {\n                            fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 26\n                        }, this);\n                        return result;\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Higor\\\\Documents\\\\GitHub\\\\Task-App\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PYJY4wV/1YkuMzHMhbOvYxXKAAg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tICcuLi9jb21wb25lbnRzL3NwbGl0dGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmltcG9ydCB7QmlQbHVzfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSh7XG4gICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICctLWJnLXByaW1hcnknOiAnd2hpdGUnLFxuICAgICctLWJnLXNlY29uZGFyeSc6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICctLWJnLXRlcnRpYXJ5JzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXG4gICAgJy0tdGV4dC1wcmltYXJ5JzogJ3doaXRlJyxcbiAgICAnLS1pbnB1dC10ZXh0JzogJ2JsYWNrJyxcbiAgICAnLS1zZWNvbmRhcnknOiAnd2hpdGUnLFxuICAgICctLWlucHV0LWFsZXJ0LXRleHQnOiAncmVkJyxcbiAgJy0taW5wdXQtYWxlcnQtYmcnOiAncmdiKDI1NSwgMjMwLCAyMzApJyx9XG4gICk7XG5cbiAgY29uc3QgW3Rhc2tJbnB1dCwgc2V0VGFza0lucHV0XSA9IHVzZVN0YXRlPGFueT4oe1xuICAgIHRhc2s6ICcnLFxuICAgIG1pbnV0ZXM6ICcnLFxuICAgIGlkOiAwLFxuICB9KVxuICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZTxBcnJheTxvYmplY3Q+PihbXSlcbiAgY29uc3QgW2lucHV0QWxlcnQsIHNldElucHV0QWxlcnRdID0gXG4gICAgdXNlU3RhdGU8e2NsYXNzOiBzdHJpbmc7IHBoOiBzdHJpbmd9PlxuICAgICh7Y2xhc3M6ICcnLCBwaDogJ1Rhc2snfSk7XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0VGFza0lucHV0KHtcbiAgICAgIHRhc2s6IGUudGFyZ2V0LnR5cGUgPT09ICd0ZXh0JyA/IGUudGFyZ2V0LnZhbHVlIDogdGFza0lucHV0LnRhc2ssXG4gICAgICBtaW51dGVzOiBlLnRhcmdldC50eXBlID09PSAndGltZScgPyBlLnRhcmdldC52YWx1ZSA6IHRhc2tJbnB1dC5taW51dGVzLFxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfSlcbiAgfVxuICBcbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICgpID0+IHtcbiAgICBpZiAodGFza0lucHV0LnRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRJbnB1dEFsZXJ0KHtjbGFzczogJ2lucHV0QWxlcnQnLCBwaDogJ1R5cGUgc29tZXRoaW5nJ30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRhc2tJbnB1dCh7XG4gICAgICAgIHRhc2s6IHRhc2tJbnB1dC50YXNrLFxuICAgICAgICBtaW51dGVzOiB0YXNrSW5wdXQubWludXRlcyxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICB9KVxuICAgICAgc2V0TmV3VGFzayhbLi4ubmV3VGFzaywgey4uLnRhc2tJbnB1dH1dKTtcbiAgICAgIHNldElucHV0QWxlcnQoe2NsYXNzOiAnJywgcGg6ICdUYXNrJ30pXG4gICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0naW5kZXhXcmFwJyBzdHlsZT17dGhlbWV9PlxuICAgICAgPEhlYWRlciBzZXRUaGVtZT17c2V0VGhlbWV9IC8+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcFdyYXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFza0luY3JlbWVudFdyYXAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luY3JlbWVudFRhc2snPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0QWxlcnQuY2xhc3N9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnB1dEFsZXJ0LnBofSB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luY3JlbWVudE1pbic+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9J3RpbWUnIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uV3JhcCc+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVGFza30+XG4gICAgICAgICAgICAgICAgPEJpUGx1cyBjbGFzc05hbWU9J3BsdXNJY29uJyAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7bmV3VGFzay5tYXAoKGU6YW55ICwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IDxTcGxpdHRlciBrZXk9e2UuaWR9IHByb3A9e2V9IG5ld1Rhc2s9e25ld1Rhc2t9IGNsYXNzTmFtZT17aW5kZXgvMiA9PT0gMCA/ICd0b2dnbGVCZycgOiAnJ30gLz47XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTcGxpdHRlciIsIkhlYWRlciIsIkZvb3RlciIsIkJpUGx1cyIsIkhvbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwiZm9udEZhbWlseSIsInRhc2tJbnB1dCIsInNldFRhc2tJbnB1dCIsInRhc2siLCJtaW51dGVzIiwiaWQiLCJuZXdUYXNrIiwic2V0TmV3VGFzayIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiY2xhc3MiLCJwaCIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJ2YWx1ZSIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlQWRkVGFzayIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpbmRleCIsInJlc3VsdCIsInByb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});