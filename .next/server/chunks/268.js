"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/wahyu.15ca5c83.svg","height":240,"width":240});

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/wahyu.svg
var wahyu = __webpack_require__(727);
;// CONCATENATED MODULE: ./components/Header.js



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            class: "relative px-4 pt-6 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "flex flex-shrink-0 flex-grow items-center lg:flex-grow-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "flex w-full justify-between md:w-auto items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "Wahyu Nugraha",
                                class: "h-8 w-auto sm:h-10",
                                src: wahyu/* default */.Z
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://linkedin.com/in/wahyuadityanugraha",
                            class: "font-medium px-3 text-gray-500 hover:text-gray-900",
                            children: "Resume"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/works",
                            class: "font-medium px-3 text-gray-500 hover:text-gray-900",
                            children: "Works"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/experience",
                            class: "font-medium px-3 text-gray-500 hover:text-gray-900",
                            children: "Experience"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:wahyuadityanugraha@rocketmail.com",
                            class: "font-medium px-3 text-indigo-600 hover:text-indigo-500",
                            children: "Contact"
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            class: "p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                class: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                children: [
                    "\xa9 2022",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://wnugraha.com",
                        class: "hover:underline",
                        children: "Wahyu Nugraha"
                    }),
                    ". All Rights Reserved. Build with Love with NextJS, Tailwind & Sanity."
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Container.js






function Container({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Wahyu Nugraha",
        description: `Front-end Architect`,
        image: "/wahyu.svg",
        type: "website",
        ...customMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://wnugraha.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://wnugraha.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Wahyu Nugraha"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@wahyuogel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "dark:bg-gray-800 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "container flex justify-between",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PageBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/wahyu.svg
var wahyu = __webpack_require__(727);
;// CONCATENATED MODULE: ./components/Wahyu.js



function Wahyu() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            class: "object-contain ",
            src: wahyu/* default */.Z,
            alt: ""
        })
    });
}

;// CONCATENATED MODULE: ./components/PageBlock.js


function PageBlock({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "md:max-lg:flex overflow-hidden flex items-center justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "flex",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Wahyu, {
                    class: "visible md:invisible"
                })
            })
        ]
    });
}


/***/ })

};
;