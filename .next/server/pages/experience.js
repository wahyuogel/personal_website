"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Container.js + 2 modules
var Container = __webpack_require__(122);
// EXTERNAL MODULE: ./components/PageBlock.js + 1 modules
var PageBlock = __webpack_require__(380);
;// CONCATENATED MODULE: ./components/ExperienceContent.js

function ExperienceContent({ experiences  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: experiences.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ol", {
            class: "relative border-l border-gray-200 dark:border-gray-700",
            children: experiences.map((exp)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    class: "mb-10 ml-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                            class: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                            children: [
                                exp.exp_info.date_start,
                                "-",
                                exp.exp_info.date_end
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            class: "text-lg font-semibold text-gray-900 dark:text-white",
                            children: [
                                exp.company_name,
                                " -  ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    class: "text-indigo-600",
                                    children: exp.job_title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            class: "text-base font-normal text-gray-500 dark:text-gray-400",
                            children: exp.job_description
                        })
                    ]
                }))
        })
    });
}

;// CONCATENATED MODULE: external "next-sanity"
const external_next_sanity_namespaceObject = require("next-sanity");
;// CONCATENATED MODULE: ./pages/experience.js





function HomePage({ experiences  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(PageBlock/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ExperienceContent, {
                    experiences: experiences
                })
            })
        })
    });
}
const client = (0,external_next_sanity_namespaceObject.createClient)({
    projectId: "g7d6db2q",
    dataset: "production",
    apiVersion: "2022-10-31",
    useCdn: false
});
async function getStaticProps() {
    const experiences = await client.fetch(`*[_type == "experience"] | order(_createdAt desc)`);
    return {
        props: {
            experiences
        }
    };
}


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,268], () => (__webpack_exec__(829)));
module.exports = __webpack_exports__;

})();