"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/landing.tsx":
/*!********************************!*\
  !*** ./components/landing.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slideshow: function() { return /* binding */ Slideshow; },\n/* harmony export */   \"default\": function() { return /* binding */ Landing; },\n/* harmony export */   getHTML: function() { return /* binding */ getHTML; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ getHTML,Slideshow,default auto */ \nvar _s = $RefreshSig$();\n\nconst meta1 = {\n    title: \"Comparing GenAI to Humans //\",\n    arxiv: \"https://arxiv.org/abs/2309.08913\",\n    arxiv_title: \"A Statistical Turing Test for Generative Models\",\n    snippet: \"Generative AI is producing human-expert level content across various domains. \\n    This content is often propagated as if it were created by a human user.\\n    It is necessary to formalize the human-detection problem to most effectively assess the proximity of human-produced content and machine-produced content. \\n    The framework we present leverages classical pattern recognition to equip every human-detection problem with an interpretable detactability measure.\\n    The empirical version of the measure can be used to rank the human-ness of different models in general settings.\",\n    tldr: \"GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.\"\n};\nconst meta2 = {\n    title: \"Defining the Data Kernel //\",\n    arxiv: \"https://arxiv.org/abs/2305.05126\",\n    arxiv_title: \"Comparing Foundation Models using Data Kernels\",\n    snippet: \"Foundation models are notoriously complicated to understand. \\n    In some cases, an embedding function associated with a foundation model is available.\\n    The relative positions of the embeddings of input data provide insights into how the model relates high-level concepts, which is often sufficent for a single model.\\n    Comparisons across models is more challenging -- embeddings are typically natively incompatible due to incongruities in the dimensionality or basis vectors of the embedding spaces.\\n    We introduce the data kernel to rectify this issue and demonstrate that it can be used to automatically discover systematic differences in the data used to train models.\",\n    tldr: \"The data kernel enables comparison of the embedding spaces across models. It can be used to understand how models interpret and represent high-level concepts.\"\n};\nconst slides = [\n    meta1,\n    meta2\n];\nconst delay = 10000;\nfunction getHTML(index, slideIndex) {\n    const title = slides[index].title;\n    const arxiv = slides[index].arxiv;\n    const arxiv_title = slides[index].arxiv_title;\n    const snippet = slides[index].snippet;\n    const tldr = slides[index].tldr;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slide \".concat(index === slideIndex ? \"active\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-2xl italic\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: [\n                            \" \",\n                            title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl italic mt-2 underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: arxiv,\n                    children: [\n                        \" \",\n                        arxiv_title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: snippet\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl mt-8 italic\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"TLDR:\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        tldr\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, index, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\nfunction Slideshow() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const changeSlide = (n)=>{\n        let newIndex = slideIndex + n;\n        if (newIndex >= slides.length) newIndex = 0;\n        if (newIndex < 0) newIndex = slides.length - 1;\n        setSlideIndex(newIndex);\n    };\n    const goToSlide = (index)=>{\n        setSlideIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slideshow-container\",\n        children: [\n            slides.map((slide, index)=>getHTML(index, slideIndex)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"prev\",\n                onClick: ()=>changeSlide(-1),\n                children: \"❮\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"next\",\n                onClick: ()=>changeSlide(1),\n                children: \"❯\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dots-container\",\n                children: slides.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"dot \".concat(index === slideIndex ? \"active\" : \"\"),\n                        onClick: ()=>goToSlide(index)\n                    }, index, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Slideshow, \"0yB34WFJoKB17f3kT+wIMpxNoV8=\");\n_c = Slideshow;\nfunction Landing() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 text-8xl text-blue-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Helivan // Research\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl text-blue-4 italic mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" principled statistics, next-gen applications \"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 26\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slideshow, {}, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 35\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 text-xl text-blue-4 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \" In collaboration with \"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 mb-4 flex flex-row items-center justify-center gap-150\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/msr_logo.png\",\n                        width: \"225px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/nomic_dark_logo.png\",\n                        width: \"120px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/jhu-logo.png\",\n                        width: \"425px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/Palate_Logo.png\",\n                        width: \"200px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Landing;\nvar _c, _c1;\n$RefreshReg$(_c, \"Slideshow\");\n$RefreshReg$(_c1, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFJcEQsTUFBTUMsUUFDSjtJQUFDQyxPQUFPO0lBQ05DLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxTQUFVO0lBS1ZDLE1BQU07QUFDVjtBQUVBLE1BQU1DLFFBQ0o7SUFDRUwsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsU0FBVTtJQUtWQyxNQUFNO0FBQ1I7QUFFRixNQUFNRSxTQUFTO0lBQUNQO0lBQU9NO0NBQU07QUFDN0IsTUFBTUUsUUFBUTtBQUVQLFNBQVNDLFFBQVFDLEtBQUssRUFBRUMsVUFBVTtJQUNyQyxNQUFNVixRQUFRTSxNQUFNLENBQUNHLE1BQU0sQ0FBQ1QsS0FBSztJQUNqQyxNQUFNQyxRQUFRSyxNQUFNLENBQUNHLE1BQU0sQ0FBQ1IsS0FBSztJQUNqQyxNQUFNQyxjQUFjSSxNQUFNLENBQUNHLE1BQU0sQ0FBQ1AsV0FBVztJQUM3QyxNQUFNQyxVQUFVRyxNQUFNLENBQUNHLE1BQU0sQ0FBQ04sT0FBTztJQUNyQyxNQUFNQyxPQUFPRSxNQUFNLENBQUNHLE1BQU0sQ0FBQ0wsSUFBSTtJQUMvQixxQkFDSSw4REFBQ087UUFFREMsV0FBVyxTQUE4QyxPQUFyQ0gsVUFBVUMsYUFBYSxXQUFXOzswQkFFbEQsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQzs4QkFBRSw0RUFBQ0M7OzRCQUFFOzRCQUFFZDs0QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRWxCLDhEQUFDVztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0c7b0JBQUVDLE1BQU1mOzt3QkFBTzt3QkFBRUM7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNTO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQzs4QkFBR1Y7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7O3dCQUFFO3NDQUFDLDhEQUFDQztzQ0FBRTs7Ozs7O3dCQUFTO3dCQUFFVjs7Ozs7Ozs7Ozs7OztPQWJyQks7Ozs7O0FBa0JiO0FBRU8sU0FBU1E7O0lBQ2QsTUFBTSxDQUFDUCxZQUFZUSxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNcUIsY0FBYyxDQUFDQztRQUNuQixJQUFJQyxXQUFXWCxhQUFhVTtRQUM1QixJQUFJQyxZQUFZZixPQUFPZ0IsTUFBTSxFQUFFRCxXQUFXO1FBQzFDLElBQUlBLFdBQVcsR0FBR0EsV0FBV2YsT0FBT2dCLE1BQU0sR0FBRztRQUM3Q0osY0FBY0c7SUFDaEI7SUFFQSxNQUFNRSxZQUFZLENBQUNkO1FBQ2pCUyxjQUFjVDtJQUNoQjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOztZQUViTixPQUFPa0IsR0FBRyxDQUFDLENBQUNDLE9BQU9oQixRQUFVRCxRQUFRQyxPQUFPQzswQkFTNUMsOERBQUNnQjtnQkFBT2QsV0FBVTtnQkFBT2UsU0FBUyxJQUFNUixZQUFZLENBQUM7MEJBQUk7Ozs7OzswQkFDekQsOERBQUNPO2dCQUFPZCxXQUFVO2dCQUFPZSxTQUFTLElBQU1SLFlBQVk7MEJBQUk7Ozs7OzswQkFDeEQsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNaTixPQUFPa0IsR0FBRyxDQUFDLENBQUNJLEdBQUduQixzQkFDZCw4REFBQ29CO3dCQUVDakIsV0FBVyxPQUE0QyxPQUFyQ0gsVUFBVUMsYUFBYSxXQUFXO3dCQUNwRGlCLFNBQVMsSUFBTUosVUFBVWQ7dUJBRnBCQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXZDZ0JRO0tBQUFBO0FBMENELFNBQVNhO0lBQ3BCLHFCQUNJLDhEQUFDbkI7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ21COzhCQUFPLDRFQUFDbEI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDbUI7O3dCQUFPO3NDQUFDLDhEQUFDbEI7c0NBQUU7Ozs7Ozt3QkFBa0Q7Ozs7Ozs7Ozs7OzswQkFFbEUsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUFPLDRFQUFDSzs7Ozs7Ozs7OzswQkFDdkIsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUosOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ29CO3dCQUFJQyxLQUFLO3dCQUFpQkMsT0FBTTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUlDLEtBQUs7d0JBQXdCQyxPQUFNOzs7Ozs7a0NBQ3hDLDhEQUFDRjt3QkFBSUMsS0FBSzt3QkFBaUJDLE9BQU07Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFJQyxLQUFLO3dCQUFvQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO01BckJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYW5kaW5nLnRzeD8xMmYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgRG93blRyaWFuZ2xlIGZyb20gXCJAL2NvbXBvbmVudHMvZG93bi10cmlhbmdsZVwiO1xuXG5jb25zdCBtZXRhMSA9XG4gIHt0aXRsZTogJ0NvbXBhcmluZyBHZW5BSSB0byBIdW1hbnMgLy8nLFxuICAgIGFyeGl2OiAnaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzIzMDkuMDg5MTMnLFxuICAgIGFyeGl2X3RpdGxlOiAnQSBTdGF0aXN0aWNhbCBUdXJpbmcgVGVzdCBmb3IgR2VuZXJhdGl2ZSBNb2RlbHMnLFxuICAgIHNuaXBwZXQ6IGBHZW5lcmF0aXZlIEFJIGlzIHByb2R1Y2luZyBodW1hbi1leHBlcnQgbGV2ZWwgY29udGVudCBhY3Jvc3MgdmFyaW91cyBkb21haW5zLiBcbiAgICBUaGlzIGNvbnRlbnQgaXMgb2Z0ZW4gcHJvcGFnYXRlZCBhcyBpZiBpdCB3ZXJlIGNyZWF0ZWQgYnkgYSBodW1hbiB1c2VyLlxuICAgIEl0IGlzIG5lY2Vzc2FyeSB0byBmb3JtYWxpemUgdGhlIGh1bWFuLWRldGVjdGlvbiBwcm9ibGVtIHRvIG1vc3QgZWZmZWN0aXZlbHkgYXNzZXNzIHRoZSBwcm94aW1pdHkgb2YgaHVtYW4tcHJvZHVjZWQgY29udGVudCBhbmQgbWFjaGluZS1wcm9kdWNlZCBjb250ZW50LiBcbiAgICBUaGUgZnJhbWV3b3JrIHdlIHByZXNlbnQgbGV2ZXJhZ2VzIGNsYXNzaWNhbCBwYXR0ZXJuIHJlY29nbml0aW9uIHRvIGVxdWlwIGV2ZXJ5IGh1bWFuLWRldGVjdGlvbiBwcm9ibGVtIHdpdGggYW4gaW50ZXJwcmV0YWJsZSBkZXRhY3RhYmlsaXR5IG1lYXN1cmUuXG4gICAgVGhlIGVtcGlyaWNhbCB2ZXJzaW9uIG9mIHRoZSBtZWFzdXJlIGNhbiBiZSB1c2VkIHRvIHJhbmsgdGhlIGh1bWFuLW5lc3Mgb2YgZGlmZmVyZW50IG1vZGVscyBpbiBnZW5lcmFsIHNldHRpbmdzLmAsXG4gICAgdGxkcjogJ0dQVC00IChTZXB0IDIwMjMpIGlzIGRldGVjdGFibGUgZ2l2ZW4gZW5vdWdoIG1hY2hpbmUtcHJvZHVjZWQgY29udGVudC4gR1BULTMgaXMgbW9yZSBkZXRlY3RhYmxlIHRoYW4gR1BULTQgYWNyb3NzIGh1bWFuIGRldGVjdGlvbiBjbGFzc2lmaWVycy4nXG59O1xuXG5jb25zdCBtZXRhMiA9XG4gIHtcbiAgICB0aXRsZTogJ0RlZmluaW5nIHRoZSBEYXRhIEtlcm5lbCAvLycsXG4gICAgYXJ4aXY6ICdodHRwczovL2FyeGl2Lm9yZy9hYnMvMjMwNS4wNTEyNicsXG4gICAgYXJ4aXZfdGl0bGU6ICdDb21wYXJpbmcgRm91bmRhdGlvbiBNb2RlbHMgdXNpbmcgRGF0YSBLZXJuZWxzJyxcbiAgICBzbmlwcGV0OiBgRm91bmRhdGlvbiBtb2RlbHMgYXJlIG5vdG9yaW91c2x5IGNvbXBsaWNhdGVkIHRvIHVuZGVyc3RhbmQuIFxuICAgIEluIHNvbWUgY2FzZXMsIGFuIGVtYmVkZGluZyBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggYSBmb3VuZGF0aW9uIG1vZGVsIGlzIGF2YWlsYWJsZS5cbiAgICBUaGUgcmVsYXRpdmUgcG9zaXRpb25zIG9mIHRoZSBlbWJlZGRpbmdzIG9mIGlucHV0IGRhdGEgcHJvdmlkZSBpbnNpZ2h0cyBpbnRvIGhvdyB0aGUgbW9kZWwgcmVsYXRlcyBoaWdoLWxldmVsIGNvbmNlcHRzLCB3aGljaCBpcyBvZnRlbiBzdWZmaWNlbnQgZm9yIGEgc2luZ2xlIG1vZGVsLlxuICAgIENvbXBhcmlzb25zIGFjcm9zcyBtb2RlbHMgaXMgbW9yZSBjaGFsbGVuZ2luZyAtLSBlbWJlZGRpbmdzIGFyZSB0eXBpY2FsbHkgbmF0aXZlbHkgaW5jb21wYXRpYmxlIGR1ZSB0byBpbmNvbmdydWl0aWVzIGluIHRoZSBkaW1lbnNpb25hbGl0eSBvciBiYXNpcyB2ZWN0b3JzIG9mIHRoZSBlbWJlZGRpbmcgc3BhY2VzLlxuICAgIFdlIGludHJvZHVjZSB0aGUgZGF0YSBrZXJuZWwgdG8gcmVjdGlmeSB0aGlzIGlzc3VlIGFuZCBkZW1vbnN0cmF0ZSB0aGF0IGl0IGNhbiBiZSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZGlzY292ZXIgc3lzdGVtYXRpYyBkaWZmZXJlbmNlcyBpbiB0aGUgZGF0YSB1c2VkIHRvIHRyYWluIG1vZGVscy5gLFxuICAgIHRsZHI6ICdUaGUgZGF0YSBrZXJuZWwgZW5hYmxlcyBjb21wYXJpc29uIG9mIHRoZSBlbWJlZGRpbmcgc3BhY2VzIGFjcm9zcyBtb2RlbHMuIEl0IGNhbiBiZSB1c2VkIHRvIHVuZGVyc3RhbmQgaG93IG1vZGVscyBpbnRlcnByZXQgYW5kIHJlcHJlc2VudCBoaWdoLWxldmVsIGNvbmNlcHRzLidcbiAgfVxuXG5jb25zdCBzbGlkZXMgPSBbbWV0YTEsIG1ldGEyXTtcbmNvbnN0IGRlbGF5ID0gMTAwMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIVE1MKGluZGV4LCBzbGlkZUluZGV4KSB7XG4gICAgY29uc3QgdGl0bGUgPSBzbGlkZXNbaW5kZXhdLnRpdGxlXG4gICAgY29uc3QgYXJ4aXYgPSBzbGlkZXNbaW5kZXhdLmFyeGl2XG4gICAgY29uc3QgYXJ4aXZfdGl0bGUgPSBzbGlkZXNbaW5kZXhdLmFyeGl2X3RpdGxlXG4gICAgY29uc3Qgc25pcHBldCA9IHNsaWRlc1tpbmRleF0uc25pcHBldFxuICAgIGNvbnN0IHRsZHIgPSBzbGlkZXNbaW5kZXhdLnRsZHIgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgIGNsYXNzTmFtZT17YHNsaWRlICR7aW5kZXggPT09IHNsaWRlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgID4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02IHRleHQtMnhsIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgIDxwPjxiPiB7dGl0bGV9IDwvYj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYgdGV4dC14bCBpdGFsaWMgbXQtMiB1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXthcnhpdn0+IHthcnhpdl90aXRsZX08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYgdGV4dC14bCBtdC04XCI+XG4gICAgICAgICAgICAgICAgPHA+e3NuaXBwZXR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmx1ZS02IHRleHQteGwgbXQtOCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICA8cD4gPGI+VExEUjo8L2I+IHt0bGRyfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXNob3coKSB7XG4gIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNoYW5nZVNsaWRlID0gKG4pID0+IHtcbiAgICBsZXQgbmV3SW5kZXggPSBzbGlkZUluZGV4ICsgbjtcbiAgICBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmxlbmd0aCkgbmV3SW5kZXggPSAwO1xuICAgIGlmIChuZXdJbmRleCA8IDApIG5ld0luZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgc2V0U2xpZGVJbmRleChuZXdJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1NsaWRlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0U2xpZGVJbmRleChpbmRleCk7XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lclwiPlxuICAgICAge1xuICAgICAgc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiBnZXRIVE1MKGluZGV4LCBzbGlkZUluZGV4KSlcbiAgICAgIH1cbiAgICAgICAgey8qIC8vIDxkaXZcbiAgICAgICAgICAvLyBrZXk9e2luZGV4fVxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17YHNsaWRlICR7aW5kZXggPT09IHNsaWRlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgIC8vID5cbiAgICAgICAgLy8gIDwvPlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgIC8vICkpfSAqL31cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldlwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNsaWRlKC0xKX0+JiMxMDA5NDs8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNsaWRlKDEpfT4mIzEwMDk1OzwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RzLWNvbnRhaW5lclwiPlxuICAgICAgICB7c2xpZGVzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGRvdCAke2luZGV4ID09PSBzbGlkZUluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1NsaWRlKGluZGV4KX1cbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7ICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC04eGwgdGV4dC1ibHVlLTZcIj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPjxwPiBIZWxpdmFuIC8vIFJlc2VhcmNoPC9wPjwvY2VudGVyPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYmx1ZS00IGl0YWxpYyBtdC00XCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj4gPHA+IHByaW5jaXBsZWQgc3RhdGlzdGljcywgbmV4dC1nZW4gYXBwbGljYXRpb25zIDwvcD4gPC9jZW50ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPjxTbGlkZXNob3cvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQteGwgdGV4dC1ibHVlLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICA8cD4gSW4gY29sbGFib3JhdGlvbiB3aXRoIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IG1iLTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTE1MFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9tc3JfbG9nby5wbmdcIn0gd2lkdGg9JzIyNXB4Jy8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25vbWljX2RhcmtfbG9nby5wbmdcIn0gd2lkdGg9JzEyMHB4Jy8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2podS1sb2dvLnBuZ1wifSB3aWR0aD0nNDI1cHgnLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvUGFsYXRlX0xvZ28ucG5nXCJ9IHdpZHRoPScyMDBweCcvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1ldGExIiwidGl0bGUiLCJhcnhpdiIsImFyeGl2X3RpdGxlIiwic25pcHBldCIsInRsZHIiLCJtZXRhMiIsInNsaWRlcyIsImRlbGF5IiwiZ2V0SFRNTCIsImluZGV4Iiwic2xpZGVJbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJiIiwiYSIsImhyZWYiLCJTbGlkZXNob3ciLCJzZXRTbGlkZUluZGV4IiwiY2hhbmdlU2xpZGUiLCJuIiwibmV3SW5kZXgiLCJsZW5ndGgiLCJnb1RvU2xpZGUiLCJtYXAiLCJzbGlkZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJfIiwic3BhbiIsIkxhbmRpbmciLCJjZW50ZXIiLCJpbWciLCJzcmMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/landing.tsx\n"));

/***/ })

});