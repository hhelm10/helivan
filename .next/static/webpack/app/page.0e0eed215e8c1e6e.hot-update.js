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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slideshow: function() { return /* binding */ Slideshow; },\n/* harmony export */   \"default\": function() { return /* binding */ Landing; },\n/* harmony export */   getHTML: function() { return /* binding */ getHTML; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ getHTML,Slideshow,default auto */ \nvar _s = $RefreshSig$();\n\nconst meta1 = {\n    title: \"Comparing GenAI to Humans //\",\n    arxiv: \"https://arxiv.org/abs/2309.08913\",\n    arxiv_title: \"A Statistical Turing Test for Generative Models\",\n    snippet: \"Generative AI is producing human-expert level content across various domains. \\n    This content is often propagated as if it were created by a human user.\\n    It is necessary to formalize the human-detection problem to most effectively assess the proximity of human-produced content and machine-produced content. \\n    The framework we present leverages classical pattern recognition to equip every human-detection problem with an interpretable detactability measure.\\n    The empirical version of the measure can be used to rank the human-ness of different models in general settings.\",\n    tldr: \"GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.\"\n};\nconst meta2 = {\n    title: \"Defining the Data Kernel //\",\n    arxiv: \"https://arxiv.org/abs/2305.05126\",\n    arxiv_title: \"Comparing Foundation Models using Data Kernels\",\n    snippet: \"Foundation models are notoriously complicated to understand. \\n    In some cases, an embedding function associated with a foundation model is available.\\n    The relative positions of the embeddings of input data provide insights into how the model relates high-level concepts, which is often sufficent for a single model.\\n    Comparisons across models is more challenging -- embeddings are typically natively incompatible due to incongruities in the dimensionality or basis vectors of the embedding spaces.\\n    We introduce the data kernel to rectify this issue and demonstrate that it can be used to automatically discover systematic differences in the data used to train models.\",\n    tldr: \"The data kernel enables comparison of the embedding spaces across models. It can be used to understand how models interpret and represent high-level concepts.\"\n};\nconst slides = [\n    meta1,\n    meta2\n];\nconst delay = 10000;\nfunction getHTML(index, slideIndex) {\n    const title = slides[index].title;\n    const arxiv = slides[index].arxiv;\n    const arxiv_title = slides[index].arxiv_title;\n    const snippet = slides[index].snippet;\n    const tldr = slides[index].tldr;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slide \".concat(index === slideIndex ? \"active\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-2xl italic\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: [\n                            \" \",\n                            title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl italic mt-2 underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: arxiv,\n                    children: [\n                        \" \",\n                        arxiv_title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: snippet\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-6 text-xl mt-8 italic\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"TLDR:\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        tldr\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, index, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\nfunction Slideshow() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const changeSlide = (n)=>{\n        let newIndex = slideIndex + n;\n        if (newIndex >= slides.length) newIndex = 0;\n        if (newIndex < 0) newIndex = slides.length - 1;\n        setSlideIndex(newIndex);\n    };\n    const goToSlide = (index)=>{\n        setSlideIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slideshow-container\",\n        children: [\n            slides.map((slide, index)=>getHTML(index, slideIndex)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"prev\",\n                onClick: ()=>changeSlide(-1),\n                children: \"❮\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"next\",\n                onClick: ()=>changeSlide(1),\n                children: \"❯\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dots-container\",\n                children: slides.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"dot \".concat(index === slideIndex ? \"active\" : \"\"),\n                        onClick: ()=>goToSlide(index)\n                    }, index, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Slideshow, \"0yB34WFJoKB17f3kT+wIMpxNoV8=\");\n_c = Slideshow;\nfunction Landing() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 text-8xl text-blue-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Helivan // Research\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl text-blue-4 italic mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" principled statistics, next-gen applications \"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 26\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slideshow, {}, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 35\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 text-xl text-blue-4 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \" In collaboration with \"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex flex-row items-center justify-center gap-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/msr_logo.png\",\n                        width: \"225px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/nomic_dark_logo.png\",\n                        width: \"120px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/jhu-logo.png\",\n                        width: \"425px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/Palate_Logo.png\",\n                        width: \"200px\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/hhelm/Documents/Helivan/helivan/components/landing.tsx\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Landing;\nvar _c, _c1;\n$RefreshReg$(_c, \"Slideshow\");\n$RefreshReg$(_c1, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0Q7QUFFcEQsTUFBTUMsUUFDSjtJQUFDQyxPQUFPO0lBQ05DLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxTQUFVO0lBS1ZDLE1BQU07QUFDVjtBQUVBLE1BQU1DLFFBQ0o7SUFDRUwsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsU0FBVTtJQUtWQyxNQUFNO0FBQ1I7QUFFRixNQUFNRSxTQUFTO0lBQUNQO0lBQU9NO0NBQU07QUFDN0IsTUFBTUUsUUFBUTtBQUVQLFNBQVNDLFFBQVFDLEtBQUssRUFBRUMsVUFBVTtJQUNyQyxNQUFNVixRQUFRTSxNQUFNLENBQUNHLE1BQU0sQ0FBQ1QsS0FBSztJQUNqQyxNQUFNQyxRQUFRSyxNQUFNLENBQUNHLE1BQU0sQ0FBQ1IsS0FBSztJQUNqQyxNQUFNQyxjQUFjSSxNQUFNLENBQUNHLE1BQU0sQ0FBQ1AsV0FBVztJQUM3QyxNQUFNQyxVQUFVRyxNQUFNLENBQUNHLE1BQU0sQ0FBQ04sT0FBTztJQUNyQyxNQUFNQyxPQUFPRSxNQUFNLENBQUNHLE1BQU0sQ0FBQ0wsSUFBSTtJQUMvQixxQkFDSSw4REFBQ087UUFFREMsV0FBVyxTQUE4QyxPQUFyQ0gsVUFBVUMsYUFBYSxXQUFXOzswQkFFbEQsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQzs4QkFBRSw0RUFBQ0M7OzRCQUFFOzRCQUFFZDs0QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRWxCLDhEQUFDVztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0c7b0JBQUVDLE1BQU1mOzt3QkFBTzt3QkFBRUM7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNTO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQzs4QkFBR1Y7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7O3dCQUFFO3NDQUFDLDhEQUFDQztzQ0FBRTs7Ozs7O3dCQUFTO3dCQUFFVjs7Ozs7Ozs7Ozs7OztPQWJyQks7Ozs7O0FBa0JiO0FBRU8sU0FBU1E7O0lBQ2QsTUFBTSxDQUFDUCxZQUFZUSxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNcUIsY0FBYyxDQUFDQztRQUNuQixJQUFJQyxXQUFXWCxhQUFhVTtRQUM1QixJQUFJQyxZQUFZZixPQUFPZ0IsTUFBTSxFQUFFRCxXQUFXO1FBQzFDLElBQUlBLFdBQVcsR0FBR0EsV0FBV2YsT0FBT2dCLE1BQU0sR0FBRztRQUM3Q0osY0FBY0c7SUFDaEI7SUFFQSxNQUFNRSxZQUFZLENBQUNkO1FBQ2pCUyxjQUFjVDtJQUNoQjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOztZQUViTixPQUFPa0IsR0FBRyxDQUFDLENBQUNDLE9BQU9oQixRQUFVRCxRQUFRQyxPQUFPQzswQkFTNUMsOERBQUNnQjtnQkFBT2QsV0FBVTtnQkFBT2UsU0FBUyxJQUFNUixZQUFZLENBQUM7MEJBQUk7Ozs7OzswQkFDekQsOERBQUNPO2dCQUFPZCxXQUFVO2dCQUFPZSxTQUFTLElBQU1SLFlBQVk7MEJBQUk7Ozs7OzswQkFDeEQsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNaTixPQUFPa0IsR0FBRyxDQUFDLENBQUNJLEdBQUduQixzQkFDZCw4REFBQ29CO3dCQUVDakIsV0FBVyxPQUE0QyxPQUFyQ0gsVUFBVUMsYUFBYSxXQUFXO3dCQUNwRGlCLFNBQVMsSUFBTUosVUFBVWQ7dUJBRnBCQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXZDZ0JRO0tBQUFBO0FBeUNELFNBQVNhO0lBQ3BCLHFCQUNJLDhEQUFDbkI7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ21COzhCQUFPLDRFQUFDbEI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDbUI7O3dCQUFPO3NDQUFDLDhEQUFDbEI7c0NBQUU7Ozs7Ozt3QkFBa0Q7Ozs7Ozs7Ozs7OzswQkFFbEUsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUFPLDRFQUFDSzs7Ozs7Ozs7OzswQkFDdkIsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUosOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ29CO3dCQUFJQyxLQUFLO3dCQUFpQkMsT0FBTTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUlDLEtBQUs7d0JBQXdCQyxPQUFNOzs7Ozs7a0NBQ3hDLDhEQUFDRjt3QkFBSUMsS0FBSzt3QkFBaUJDLE9BQU07Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFJQyxLQUFLO3dCQUFvQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO01BckJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYW5kaW5nLnRzeD8xMmYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IG1ldGExID1cbiAge3RpdGxlOiAnQ29tcGFyaW5nIEdlbkFJIHRvIEh1bWFucyAvLycsXG4gICAgYXJ4aXY6ICdodHRwczovL2FyeGl2Lm9yZy9hYnMvMjMwOS4wODkxMycsXG4gICAgYXJ4aXZfdGl0bGU6ICdBIFN0YXRpc3RpY2FsIFR1cmluZyBUZXN0IGZvciBHZW5lcmF0aXZlIE1vZGVscycsXG4gICAgc25pcHBldDogYEdlbmVyYXRpdmUgQUkgaXMgcHJvZHVjaW5nIGh1bWFuLWV4cGVydCBsZXZlbCBjb250ZW50IGFjcm9zcyB2YXJpb3VzIGRvbWFpbnMuIFxuICAgIFRoaXMgY29udGVudCBpcyBvZnRlbiBwcm9wYWdhdGVkIGFzIGlmIGl0IHdlcmUgY3JlYXRlZCBieSBhIGh1bWFuIHVzZXIuXG4gICAgSXQgaXMgbmVjZXNzYXJ5IHRvIGZvcm1hbGl6ZSB0aGUgaHVtYW4tZGV0ZWN0aW9uIHByb2JsZW0gdG8gbW9zdCBlZmZlY3RpdmVseSBhc3Nlc3MgdGhlIHByb3hpbWl0eSBvZiBodW1hbi1wcm9kdWNlZCBjb250ZW50IGFuZCBtYWNoaW5lLXByb2R1Y2VkIGNvbnRlbnQuIFxuICAgIFRoZSBmcmFtZXdvcmsgd2UgcHJlc2VudCBsZXZlcmFnZXMgY2xhc3NpY2FsIHBhdHRlcm4gcmVjb2duaXRpb24gdG8gZXF1aXAgZXZlcnkgaHVtYW4tZGV0ZWN0aW9uIHByb2JsZW0gd2l0aCBhbiBpbnRlcnByZXRhYmxlIGRldGFjdGFiaWxpdHkgbWVhc3VyZS5cbiAgICBUaGUgZW1waXJpY2FsIHZlcnNpb24gb2YgdGhlIG1lYXN1cmUgY2FuIGJlIHVzZWQgdG8gcmFuayB0aGUgaHVtYW4tbmVzcyBvZiBkaWZmZXJlbnQgbW9kZWxzIGluIGdlbmVyYWwgc2V0dGluZ3MuYCxcbiAgICB0bGRyOiAnR1BULTQgKFNlcHQgMjAyMykgaXMgZGV0ZWN0YWJsZSBnaXZlbiBlbm91Z2ggbWFjaGluZS1wcm9kdWNlZCBjb250ZW50LiBHUFQtMyBpcyBtb3JlIGRldGVjdGFibGUgdGhhbiBHUFQtNCBhY3Jvc3MgaHVtYW4gZGV0ZWN0aW9uIGNsYXNzaWZpZXJzLidcbn07XG5cbmNvbnN0IG1ldGEyID1cbiAge1xuICAgIHRpdGxlOiAnRGVmaW5pbmcgdGhlIERhdGEgS2VybmVsIC8vJyxcbiAgICBhcnhpdjogJ2h0dHBzOi8vYXJ4aXYub3JnL2Ficy8yMzA1LjA1MTI2JyxcbiAgICBhcnhpdl90aXRsZTogJ0NvbXBhcmluZyBGb3VuZGF0aW9uIE1vZGVscyB1c2luZyBEYXRhIEtlcm5lbHMnLFxuICAgIHNuaXBwZXQ6IGBGb3VuZGF0aW9uIG1vZGVscyBhcmUgbm90b3Jpb3VzbHkgY29tcGxpY2F0ZWQgdG8gdW5kZXJzdGFuZC4gXG4gICAgSW4gc29tZSBjYXNlcywgYW4gZW1iZWRkaW5nIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCBhIGZvdW5kYXRpb24gbW9kZWwgaXMgYXZhaWxhYmxlLlxuICAgIFRoZSByZWxhdGl2ZSBwb3NpdGlvbnMgb2YgdGhlIGVtYmVkZGluZ3Mgb2YgaW5wdXQgZGF0YSBwcm92aWRlIGluc2lnaHRzIGludG8gaG93IHRoZSBtb2RlbCByZWxhdGVzIGhpZ2gtbGV2ZWwgY29uY2VwdHMsIHdoaWNoIGlzIG9mdGVuIHN1ZmZpY2VudCBmb3IgYSBzaW5nbGUgbW9kZWwuXG4gICAgQ29tcGFyaXNvbnMgYWNyb3NzIG1vZGVscyBpcyBtb3JlIGNoYWxsZW5naW5nIC0tIGVtYmVkZGluZ3MgYXJlIHR5cGljYWxseSBuYXRpdmVseSBpbmNvbXBhdGlibGUgZHVlIHRvIGluY29uZ3J1aXRpZXMgaW4gdGhlIGRpbWVuc2lvbmFsaXR5IG9yIGJhc2lzIHZlY3RvcnMgb2YgdGhlIGVtYmVkZGluZyBzcGFjZXMuXG4gICAgV2UgaW50cm9kdWNlIHRoZSBkYXRhIGtlcm5lbCB0byByZWN0aWZ5IHRoaXMgaXNzdWUgYW5kIGRlbW9uc3RyYXRlIHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gYXV0b21hdGljYWxseSBkaXNjb3ZlciBzeXN0ZW1hdGljIGRpZmZlcmVuY2VzIGluIHRoZSBkYXRhIHVzZWQgdG8gdHJhaW4gbW9kZWxzLmAsXG4gICAgdGxkcjogJ1RoZSBkYXRhIGtlcm5lbCBlbmFibGVzIGNvbXBhcmlzb24gb2YgdGhlIGVtYmVkZGluZyBzcGFjZXMgYWNyb3NzIG1vZGVscy4gSXQgY2FuIGJlIHVzZWQgdG8gdW5kZXJzdGFuZCBob3cgbW9kZWxzIGludGVycHJldCBhbmQgcmVwcmVzZW50IGhpZ2gtbGV2ZWwgY29uY2VwdHMuJ1xuICB9XG5cbmNvbnN0IHNsaWRlcyA9IFttZXRhMSwgbWV0YTJdO1xuY29uc3QgZGVsYXkgPSAxMDAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhUTUwoaW5kZXgsIHNsaWRlSW5kZXgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHNsaWRlc1tpbmRleF0udGl0bGVcbiAgICBjb25zdCBhcnhpdiA9IHNsaWRlc1tpbmRleF0uYXJ4aXZcbiAgICBjb25zdCBhcnhpdl90aXRsZSA9IHNsaWRlc1tpbmRleF0uYXJ4aXZfdGl0bGVcbiAgICBjb25zdCBzbmlwcGV0ID0gc2xpZGVzW2luZGV4XS5zbmlwcGV0XG4gICAgY29uc3QgdGxkciA9IHNsaWRlc1tpbmRleF0udGxkciBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGUgJHtpbmRleCA9PT0gc2xpZGVJbmRleCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYgdGV4dC0yeGwgaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgPHA+PGI+IHt0aXRsZX0gPC9iPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNiB0ZXh0LXhsIGl0YWxpYyBtdC0yIHVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FyeGl2fT4ge2FyeGl2X3RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNiB0ZXh0LXhsIG10LThcIj5cbiAgICAgICAgICAgICAgICA8cD57c25pcHBldH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYgdGV4dC14bCBtdC04IGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgIDxwPiA8Yj5UTERSOjwvYj4ge3RsZHJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlc2hvdygpIHtcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2hhbmdlU2xpZGUgPSAobikgPT4ge1xuICAgIGxldCBuZXdJbmRleCA9IHNsaWRlSW5kZXggKyBuO1xuICAgIGlmIChuZXdJbmRleCA+PSBzbGlkZXMubGVuZ3RoKSBuZXdJbmRleCA9IDA7XG4gICAgaWYgKG5ld0luZGV4IDwgMCkgbmV3SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICBzZXRTbGlkZUluZGV4KG5ld0luZGV4KTtcbiAgfTtcblxuICBjb25zdCBnb1RvU2xpZGUgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRTbGlkZUluZGV4KGluZGV4KTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyXCI+XG4gICAgICB7XG4gICAgICBzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IGdldEhUTUwoaW5kZXgsIHNsaWRlSW5kZXgpKVxuICAgICAgfVxuICAgICAgICB7LyogLy8gPGRpdlxuICAgICAgICAgIC8vIGtleT17aW5kZXh9XG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtgc2xpZGUgJHtpbmRleCA9PT0gc2xpZGVJbmRleCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgLy8gPlxuICAgICAgICAvLyAgPC8+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgICAgLy8gKSl9ICovfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17KCkgPT4gY2hhbmdlU2xpZGUoLTEpfT4mIzEwMDk0OzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0XCIgb25DbGljaz17KCkgPT4gY2hhbmdlU2xpZGUoMSl9PiYjMTAwOTU7PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHtzbGlkZXMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG90ICR7aW5kZXggPT09IHNsaWRlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvU2xpZGUoaW5kZXgpfVxuICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoKSB7ICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdGV4dC04eGwgdGV4dC1ibHVlLTZcIj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPjxwPiBIZWxpdmFuIC8vIFJlc2VhcmNoPC9wPjwvY2VudGVyPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsdWUtNCBpdGFsaWMgbXQtNFwiPlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+IDxwPiBwcmluY2lwbGVkIHN0YXRpc3RpY3MsIG5leHQtZ2VuIGFwcGxpY2F0aW9ucyA8L3A+IDwvY2VudGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj48U2xpZGVzaG93Lz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LXhsIHRleHQtYmx1ZS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgPHA+IEluIGNvbGxhYm9yYXRpb24gd2l0aCA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNTBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbXNyX2xvZ28ucG5nXCJ9IHdpZHRoPScyMjVweCcvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9ub21pY19kYXJrX2xvZ28ucG5nXCJ9IHdpZHRoPScxMjBweCcvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9qaHUtbG9nby5wbmdcIn0gd2lkdGg9JzQyNXB4Jy8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL1BhbGF0ZV9Mb2dvLnBuZ1wifSB3aWR0aD0nMjAwcHgnLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtZXRhMSIsInRpdGxlIiwiYXJ4aXYiLCJhcnhpdl90aXRsZSIsInNuaXBwZXQiLCJ0bGRyIiwibWV0YTIiLCJzbGlkZXMiLCJkZWxheSIsImdldEhUTUwiLCJpbmRleCIsInNsaWRlSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYiIsImEiLCJocmVmIiwiU2xpZGVzaG93Iiwic2V0U2xpZGVJbmRleCIsImNoYW5nZVNsaWRlIiwibiIsIm5ld0luZGV4IiwibGVuZ3RoIiwiZ29Ub1NsaWRlIiwibWFwIiwic2xpZGUiLCJidXR0b24iLCJvbkNsaWNrIiwiXyIsInNwYW4iLCJMYW5kaW5nIiwiY2VudGVyIiwiaW1nIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/landing.tsx\n"));

/***/ })

});