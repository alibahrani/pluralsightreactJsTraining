(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\pages\\index.js";


const IndexPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_App__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speakers */ "./src/components/Speakers.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\App.js";





function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {
    initialLoggedInUser: "Ali",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      startingTheme: "light",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WithAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WithAuth */ "./src/components/WithAuth.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\Header.js";




function Header({
  loggedInUser,
  setLoggedInUser
}) {
  const {
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);

  function LoggedIn({
    loggedInUser,
    setLoggedInUser
  }) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Logged in as ", loggedInUser]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-secondary",
        onClick: () => {
          setLoggedInUser("");
        },
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

  function NotLoggedIn({
    loggedInUser,
    setLoggedInUser
  }) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn btn-secondary",
      onClick: e => {
        e.preventDefault();
        const username = window.prompt("Enter login name:", "");
        setLoggedInUser(username);
      },
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "padT4 padB4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mobile-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "svcc Home page",
            src: "/images/SVCCLogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Silicon Vally Code Camp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: loggedInUser && loggedInUser.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoggedIn, {
            loggedInUser: loggedInUser,
            setLoggedInUser: setLoggedInUser
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotLoggedIn, {
            loggedInUser: loggedInUser,
            setLoggedInUser: setLoggedInUser
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_WithAuth__WEBPACK_IMPORTED_MODULE_3__.withAuth)(Header));

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\Layout.js";



function Layout({
  startingTheme,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    startingTheme: startingTheme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutNoThemeProvider, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

function LayoutNoThemeProvider({
  startingTheme,
  children
}) {
  const {
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: theme === "light" ? "container-fluidlight " : "container-fluid dark",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakerFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerFavorite */ "./src/components/SpeakerFavorite.js");
/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ "./src/context/SpeakerFilterContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/SpeakerContext */ "./src/context/SpeakerContext.js");
/* harmony import */ var _SpeakerDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerDelete */ "./src/components/SpeakerDelete.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\Speaker.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Session({
  title,
  room
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

function Sessions() {
  const {
    speaker: {
      sessions
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext);
  const {
    eventYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: sessions.filter(function (session) {
      return session.eventYear === eventYear;
    }).map(function (session) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "session w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, session), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, this)
      }, session.id, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

function ImageWithFallback(_ref) {
  let {
    src
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src"]);

  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: imgSrc,
    1: setImgSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 10
  }, this);
}

function SpeakerImage() {
  const {
    speaker: {
      id,
      first,
      last
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justifiy-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWithFallback, {
      className: "contain-fit",
      src: `/images/speaker-${id}.jpg`,
      width: "300",
      alt: `${first} ${last}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

function SpeakerInfo() {
  const {
    speaker: {
      first,
      last,
      bio,
      company,
      twitterHandle,
      favorite
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerFavorite__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord
}) {
  const {
    showSessions
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerProvider, {
    speaker: speaker,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerInfo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), showSessions && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 26
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDelete__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Speaker);

/***/ }),

/***/ "./src/components/SpeakerAdd.js":
/*!**************************************!*\
  !*** ./src/components/SpeakerAdd.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WithAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WithAuth */ "./src/components/WithAuth.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\SpeakerAdd.js";


function SpeakerAdd({
  eventYear,
  insertRecord,
  loggedInUser
}) {
  if (!loggedInUser || loggedInUser.length === 0) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: e => {
        e.preventDefault();
        const firstLast = window.prompt("enter first and last name:", "");
        const firstLastArray = firstLast.split(" ");
        insertRecord({
          id: "99999",
          first: firstLastArray[0],
          last: firstLastArray[1],
          bio: "bio not entered yet",
          sessions: [{
            id: "8888",
            title: `New session for ${firstLastArray}`,
            room: {
              name: "Main ball room"
            },
            eventYear
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SpeakerAdd);

/***/ }),

/***/ "./src/components/SpeakerDelete.js":
/*!*****************************************!*\
  !*** ./src/components/SpeakerDelete.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakerDelete; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SpeakerContext */ "./src/context/SpeakerContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\SpeakerDelete.js";


function SpeakerDelete() {
  const {
    speaker,
    deleteRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      className: "remSes",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: e => {
          e.preventDefault();

          if (window.confirm("Are you sure you want to delete this speaker?")) {
            deleteRecord(speaker);
          }
        },
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "padL2",
      children: "Delete Speaker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SpeakerFavorite.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakerFavorite.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakerFavorite; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SpeakerContext */ "./src/context/SpeakerContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\SpeakerFavorite.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SpeakerFavorite() {
  const {
    speaker,
    updateRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerContext);
  const {
    0: inTransition,
    1: setInTransition
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function doneCallback() {
    setInTransition(false);
    console.log(`In SpekaerFavorite: doneCallback ${new Date().getMilliseconds()}`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "action padb1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      onClick: function () {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
          favorite: !speaker.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SpeakerToolbar.js":
/*!******************************************!*\
  !*** ./src/components/SpeakerToolbar.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakerToolbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ "./src/context/SpeakerFilterContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\SpeakerToolbar.js";



function SpeakerToolbar() {
  const {
    setTheme,
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    setSearchQuery,
    EVENT_YEARS
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "toolbar dark-theme-header",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "toolrow d-flex flex-colum flex-lg-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: " d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Show Sessions \xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "fav",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                checked: showSessions,
                onChange: event => setShowSessions(event.target.checked)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: " d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
              className: "form-control theme",
              value: theme,
              onChange: event => setTheme(event.target.value),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "light",
                children: "Light"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: "dark",
                children: "Dark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "input-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                className: "form-control",
                placeholder: "Search...",
                onChange: event => {
                  setSearchQuery(event.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "input-group-append",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "btn btn-secondary",
                  type: "button",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fa fa-search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Year"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "dropmenu",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                className: "form-control",
                value: eventYear,
                onChange: ({
                  currentTarget
                }) => {
                  setEventYear(currentTarget.value);
                },
                children: EVENT_YEARS.map(function (year) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: year,
                    children: year
                  }, year, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 23
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Speakers; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpeakerToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerToolbar */ "./src/components/SpeakerToolbar.js");
/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakersList */ "./src/components/SpeakersList.js");
/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ "./src/context/SpeakerFilterContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\Speakers.js";




function Speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_4__.SpeakerFilterProvider, {
    startingShowSessions: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerToolbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpeakersList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "react-placeholder");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestRest */ "./src/hooks/useRequestRest.js");
/* harmony import */ var _context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SpeakerFilterContext */ "./src/context/SpeakerFilterContext.js");
/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerAdd */ "./src/components/SpeakerAdd.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\SpeakersList.js";






function SpeakersList() {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord
  } = (0,_hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__.default)();
  const {
    searchQuery,
    eventYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_5__.SpeakerFilterContext);

  if (requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["Loading Speaker data failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speaker-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_placeholder__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: "media",
      className: "speakerlist-placeholder",
      ready: requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_6__.default, {
        eventYear: eventYear,
        insertRecord: insertRecord
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.filter(function (speaker) {
          return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);
        }).filter(function (speaker) {
          return speaker.sessions.find(session => {
            return session.eventYear === eventYear;
          });
        }).map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            id: speaker.id,
            speaker: speaker,
            updateRecord: updateRecord,
            insertRecord: insertRecord,
            deleteRecord: deleteRecord
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/WithAuth.js":
/*!************************************!*\
  !*** ./src/components/WithAuth.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withAuth": function() { return /* binding */ withAuth; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\components\\WithAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function withAuth(Component) {
  return function (props) {
    const {
      loggedInUser,
      setLoggedInUser
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({
      loggedInUser: loggedInUser,
      setLoggedInUser: setLoggedInUser
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  };
}

/***/ }),

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\context\\AuthContext.js";

const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function AuthProvider({
  children,
  initialLoggedInUser
}) {
  const {
    0: loggedInUser,
    1: setLoggedInUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLoggedInUser);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: (loggedInUser, setLoggedInUser),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./src/context/SpeakerContext.js":
/*!***************************************!*\
  !*** ./src/context/SpeakerContext.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerContext": function() { return /* binding */ SpeakerContext; },
/* harmony export */   "SpeakerProvider": function() { return /* binding */ SpeakerProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\context\\SpeakerContext.js";

const SpeakerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function SpeakerProvider({
  children,
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerContext.Provider, {
    value: {
      speaker,
      updateRecord,
      insertRecord,
      deleteRecord
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./src/context/SpeakerFilterContext.js":
/*!*********************************************!*\
  !*** ./src/context/SpeakerFilterContext.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerFilterContext": function() { return /* binding */ SpeakerFilterContext; },
/* harmony export */   "SpeakerFilterProvider": function() { return /* binding */ SpeakerFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ "./src/hooks/useSpeakerFilter.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\context\\SpeakerFilterContext.js";


const SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function SpeakerFilterProvider({
  children,
  startingShowSessions = false,
  startingEventYear = "2019"
}) {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS
  } = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions, startingEventYear);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.Provider, {
    value: {
      showSessions,
      setShowSessions,
      eventYear,
      setEventYear,
      searchQuery,
      setSearchQuery,
      EVENT_YEARS
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./src/context/ThemeContext.js":
/*!*************************************!*\
  !*** ./src/context/ThemeContext.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": function() { return /* binding */ ThemeContext; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTheme */ "./src/hooks/useTheme.js");

var _jsxFileName = "C:\\Git\\Courses\\pluralsight\\reactJs\\pluralsightreactJsTraining\\src\\context\\ThemeContext.js";


const ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function ThemeProvider({
  children,
  startingTheme
}) {
  const {
    theme,
    setTheme
  } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.default)(startingTheme);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {
    value: {
      setTheme,
      theme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./src/hooks/useRequestRest.js":
/*!*************************************!*\
  !*** ./src/hooks/useRequestRest.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; },
/* harmony export */   "default": function() { return /* binding */ useRequestRest; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};
const restUrl = "api/speakers";
function useRequestRest() {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const {
    0: requestStatus,
    1: setRequestStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function delayFunc() {
      try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(restUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`${restUrl}/${record.id}`, record);

        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);

        if (doneCallback) {
          doneCallback();
        }

        setData[originalRecords];
      }
    }

    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${restUrl}/99999`, record);

        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);

        if (doneCallback) {
          doneCallback();
        }

        setData[originalRecords];
      }
    }

    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.filter(function (rec) {
      return rec.id != record.id;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`${restUrl}/${record.id}`, record);

        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);

        if (doneCallback) {
          doneCallback();
        }

        setData[originalRecords];
      }
    }

    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord
  };
}

/***/ }),

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSpeakerFilter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSpeakerFilter(startingShowSessions, startingEventYear) {
  const {
    0: showSessions,
    1: setShowSessions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions);
  const {
    0: eventYear,
    1: setEventYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingEventYear);
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const EVENT_YEARS = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS
  };
}

/***/ }),

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTheme(startingTheme = "light") {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme);

  function validateTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme,
    setTheme: validateTheme
  };
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-placeholder":
/*!************************************!*\
  !*** external "react-placeholder" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-placeholder");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlMS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyIsIndlYnBhY2s6Ly9leGFtcGxlMS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJBZGQuanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyRGVsZXRlLmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckZhdm9yaXRlLmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlclRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9leGFtcGxlMS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly9leGFtcGxlMS8uL3NyYy9jb21wb25lbnRzL1dpdGhBdXRoLmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvLi9zcmMvY29udGV4dC9TcGVha2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9leGFtcGxlMS8uL3NyYy9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RSZXN0LmpzIiwid2VicGFjazovL2V4YW1wbGUxLy4vc3JjL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvLi9zcmMvaG9va3MvdXNlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2V4YW1wbGUxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9leGFtcGxlMS9leHRlcm5hbCBcInJlYWN0LXBsYWNlaG9sZGVyXCIiLCJ3ZWJwYWNrOi8vZXhhbXBsZTEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJBcHAiLCJIZWFkZXIiLCJsb2dnZWRJblVzZXIiLCJzZXRMb2dnZWRJblVzZXIiLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJMb2dnZWRJbiIsIk5vdExvZ2dlZEluIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJwcm9tcHQiLCJsZW5ndGgiLCJ3aXRoQXV0aCIsIkxheW91dCIsInN0YXJ0aW5nVGhlbWUiLCJjaGlsZHJlbiIsIkxheW91dE5vVGhlbWVQcm92aWRlciIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwiU2Vzc2lvbnMiLCJzcGVha2VyIiwic2Vzc2lvbnMiLCJTcGVha2VyQ29udGV4dCIsImV2ZW50WWVhciIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiZmlsdGVyIiwic2Vzc2lvbiIsIm1hcCIsImlkIiwiSW1hZ2VXaXRoRmFsbGJhY2siLCJzcmMiLCJwcm9wcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImltZ1NyYyIsInNldEltZ1NyYyIsIm9uRXJyb3IiLCJTcGVha2VySW1hZ2UiLCJmaXJzdCIsImxhc3QiLCJTcGVha2VySW5mbyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJTcGVha2VyIiwidXBkYXRlUmVjb3JkIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1Nlc3Npb25zIiwiU3BlYWtlckFkZCIsImZpcnN0TGFzdCIsImZpcnN0TGFzdEFycmF5Iiwic3BsaXQiLCJTcGVha2VyRGVsZXRlIiwiY29uZmlybSIsIlNwZWFrZXJGYXZvcml0ZSIsImluVHJhbnNpdGlvbiIsInNldEluVHJhbnNpdGlvbiIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiU3BlYWtlclRvb2xiYXIiLCJzZXRUaGVtZSIsInNldFNob3dTZXNzaW9ucyIsInNldEV2ZW50WWVhciIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJ5ZWFyIiwiU3BlYWtlcnMiLCJTcGVha2Vyc0xpc3QiLCJkYXRhIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsInVzZVJlcXVlc3RSZXN0Iiwic2VhcmNoUXVlcnkiLCJSRVFVRVNUX1NUQVRVUyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaW5kIiwiQ29tcG9uZW50IiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiaW5pdGlhbExvZ2dlZEluVXNlciIsIlNwZWFrZXJQcm92aWRlciIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdFdmVudFllYXIiLCJ1c2VTcGVha2VyRmlsdGVyIiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwicmVzdFVybCIsInNldERhdGEiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic2V0UmVxdWVzdFN0YXR1cyIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsInJlc3VsdCIsImF4aW9zIiwicmVjb3JkIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsInJlYyIsImRlbGF5RnVuY3Rpb24iLCJ2YWxpZGF0ZVRoZW1lIiwidGhlbWVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLHNCQUFPLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUEsK0RBQWVBLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSw4REFBQyw4REFBRDtBQUFjLHVCQUFtQixFQUFDLEtBQWxDO0FBQUEsMkJBQ0UsOERBQUMsNENBQUQ7QUFBUSxtQkFBYSxFQUFDLE9BQXRCO0FBQUEsOEJBQ0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVELCtEQUFlQSxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxNQUFULENBQWdCO0FBQUVDLGNBQUY7QUFBZ0JDO0FBQWhCLENBQWhCLEVBQW1EO0FBQ2pELFFBQU07QUFBRUM7QUFBRixNQUFZQyxpREFBVSxDQUFDQywrREFBRCxDQUE1Qjs7QUFFQSxXQUFTQyxRQUFULENBQWtCO0FBQUVMLGdCQUFGO0FBQWdCQztBQUFoQixHQUFsQixFQUFxRDtBQUNuRCx3QkFDRTtBQUFBLDhCQUNFO0FBQUEsb0NBQW9CRCxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxtQkFEWjtBQUVFLGVBQU8sRUFBRSxNQUFNO0FBQ2JDLHlCQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0QsU0FKSDtBQUFB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QURrQixFQUVsQixNQUZrQixFQUdsQixNQUhrQixFQUlsQixNQUprQixFQUtsQixNQUxrQixFQU1sQixNQU5rQixFQU9sQixNQVBrQixFQVFsQixNQVJrQixFQVNsQixNQVRrQixFQVVsQixNQVZrQixFQVdsQixNQVhrQixFQVlsQixNQVprQixDQUFwQjtBQWVBLFNBQU87QUFDTHBCLGdCQURLO0FBRUxpQixtQkFGSztBQUdMNUMsYUFISztBQUlMNkMsZ0JBSks7QUFLTGUsZUFMSztBQU1MZCxrQkFOSztBQU9MQztBQVBLLEdBQVA7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUVlLFNBQVM2QixRQUFULENBQWtCdkYsYUFBYSxHQUFHLE9BQWxDLEVBQTJDO0FBQ3hELFFBQU07QUFBQSxPQUFDYixLQUFEO0FBQUEsT0FBUW1FO0FBQVIsTUFBb0JoQywrQ0FBUSxDQUFDdEIsYUFBRCxDQUFsQzs7QUFDQSxXQUFTNEcsYUFBVCxDQUF1QkMsVUFBdkIsRUFBbUM7QUFDL0IsUUFBR0EsVUFBVSxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCdkQsY0FBUSxDQUFDLE1BQUQsQ0FBUjtBQUNILEtBRkQsTUFFTTtBQUNGQSxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFDRCxTQUFPO0FBQ0xuRSxTQURLO0FBRUxtRSxZQUFRLEVBQUVzRDtBQUZMLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7OztBQ2ZELG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxBcHAgLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBTcGVha2VycyBmcm9tIFwiLi9TcGVha2Vyc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyIGluaXRpYWxMb2dnZWRJblVzZXI9XCJBbGlcIj5cclxuICAgICAgPExheW91dCBzdGFydGluZ1RoZW1lPVwibGlnaHRcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPFNwZWFrZXJzIC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCIuL1dpdGhBdXRoXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBsb2dnZWRJblVzZXIsIHNldExvZ2dlZEluVXNlciB9KSB7XHJcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICBmdW5jdGlvbiBMb2dnZWRJbih7IGxvZ2dlZEluVXNlciwgc2V0TG9nZ2VkSW5Vc2VyIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+TG9nZ2VkIGluIGFzIHtsb2dnZWRJblVzZXJ9PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyKFwiXCIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2dvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTm90TG9nZ2VkSW4oeyBsb2dnZWRJblVzZXIsIHNldExvZ2dlZEluVXNlciB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBsb2dpbiBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgIHNldExvZ2dlZEluVXNlcih1c2VybmFtZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJzdmNjIEhvbWUgcGFnZVwiIHNyYz1cIi9pbWFnZXMvU1ZDQ0xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+U2lsaWNvbiBWYWxseSBDb2RlIENhbXA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cclxuICAgICAgICAgICAge2xvZ2dlZEluVXNlciAmJiBsb2dnZWRJblVzZXIubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8TG9nZ2VkSW5cclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluVXNlcj17bG9nZ2VkSW5Vc2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyPXtzZXRMb2dnZWRJblVzZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Tm90TG9nZ2VkSW5cclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluVXNlcj17bG9nZ2VkSW5Vc2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyPXtzZXRMb2dnZWRJblVzZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEhlYWRlcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgc3RhcnRpbmdUaGVtZSwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciBzdGFydGluZ1RoZW1lPXtzdGFydGluZ1RoZW1lfT5cclxuICAgICAgPExheW91dE5vVGhlbWVQcm92aWRlcj57Y2hpbGRyZW59PC9MYXlvdXROb1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF5b3V0Tm9UaGVtZVByb3ZpZGVyKHsgc3RhcnRpbmdUaGVtZSwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImNvbnRhaW5lci1mbHVpZGxpZ2h0IFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wiXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgU3BlYWtlckZhdm9yaXRlIGZyb20gXCIuL1NwZWFrZXJGYXZvcml0ZVwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNwZWFrZXJQcm92aWRlciwgU3BlYWtlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9TcGVha2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgU3BlYWtlckRlbGV0ZSBmcm9tIFwiLi9TcGVha2VyRGVsZXRlXCI7XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHNwZWFrZXI6IHsgc2Vzc2lvbnMgfSxcclxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3Nlc3Npb25zXHJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xyXG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIiBrZXk9e3Nlc3Npb24uaWR9PlxyXG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbWFnZVdpdGhGYWxsYmFjayh7IHNyYywgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSB1c2VTdGF0ZShzcmMpO1xyXG5cclxuICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICBzZXRJbWdTcmMoXCIvaW1hZ2VzL3NwZWFrZXItOTk5OTkuanBnXCIpO1xyXG4gICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9IC8+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VySW1hZ2UoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QgfSxcclxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZml5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8SW1hZ2VXaXRoRmFsbGJhY2tcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckluZm8oKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3BlYWtlcjogeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSB9LFxyXG4gIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3BlYWtlckZhdm9yaXRlIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZCB9KSB7XHJcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNwZWFrZXJQcm92aWRlclxyXG4gICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cclxuICAgICAgaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9XHJcbiAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSAvPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbmZvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dTZXNzaW9ucyAmJiA8U2Vzc2lvbnMgLz59XHJcbiAgICAgICAgPFNwZWFrZXJEZWxldGUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1NwZWFrZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyO1xyXG4iLCJpbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCIuL1dpdGhBdXRoXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyQWRkKHsgZXZlbnRZZWFyLCBpbnNlcnRSZWNvcmQsIGxvZ2dlZEluVXNlciB9KSB7XHJcbiAgaWYgKCFsb2dnZWRJblVzZXIgfHwgbG9nZ2VkSW5Vc2VyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdCA9IHdpbmRvdy5wcm9tcHQoXCJlbnRlciBmaXJzdCBhbmQgbGFzdCBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0TGFzdEFycmF5ID0gZmlyc3RMYXN0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgIGluc2VydFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdExhc3RBcnJheVswXSxcclxuICAgICAgICAgICAgbGFzdDogZmlyc3RMYXN0QXJyYXlbMV0sXHJcbiAgICAgICAgICAgIGJpbzogXCJiaW8gbm90IGVudGVyZWQgeWV0XCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODg4OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBOZXcgc2Vzc2lvbiBmb3IgJHtmaXJzdExhc3RBcnJheX1gLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk1haW4gYmFsbCByb29tXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2k+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckFkZDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1NwZWFrZXJDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2VyRGVsZXRlKCkge1xyXG4gIGNvbnN0IHsgc3BlYWtlciwgZGVsZXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInJlbVNlc1wiPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzcGVha2VyP1wiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBkZWxldGVSZWNvcmQoc3BlYWtlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgLVxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWRMMlwiPkRlbGV0ZSBTcGVha2VyPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNwZWFrZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvU3BlYWtlckNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSgpIHtcclxuICBjb25zdCB7IHNwZWFrZXIsIHVwZGF0ZVJlY29yZCB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBTcGVrYWVyRmF2b3JpdGU6IGRvbmVDYWxsYmFjayAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZGIxXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgdXBkYXRlUmVjb3JkKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uc3BlYWtlcixcclxuICAgICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIHNwZWFrZXIuZmF2b3JpdGUgPT09IHRydWVcclxuICAgICAgICAgICAgICA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJUb29sYmFyKCkge1xyXG4gIGNvbnN0IHsgc2V0VGhlbWUsIHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgY29uc3Qge1xyXG4gICAgc2hvd1Nlc3Npb25zLFxyXG4gICAgc2V0U2hvd1Nlc3Npb25zLFxyXG4gICAgZXZlbnRZZWFyLFxyXG4gICAgc2V0RXZlbnRZZWFyLFxyXG4gICAgc2V0U2VhcmNoUXVlcnksXHJcbiAgICBFVkVOVF9ZRUFSUyxcclxuICB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bSBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxiPlNob3cgU2Vzc2lvbnMgJm5ic3A7Jm5ic3A7PC9iPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNob3dTZXNzaW9ucyhldmVudC50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlllYXI8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcG1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V2ZW50WWVhcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50WWVhcihjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge0VWRU5UX1lFQVJTLm1hcChmdW5jdGlvbiAoeWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyfSBrZXk9e3llYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwZWFrZXJUb29sYmFyIGZyb20gXCIuL1NwZWFrZXJUb29sYmFyXCI7XHJcbmltcG9ydCBTcGVha2Vyc0xpc3QgZnJvbSBcIi4vU3BlYWtlcnNMaXN0XCI7XHJcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2VycygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNwZWFrZXJGaWx0ZXJQcm92aWRlciBzdGFydGluZ1Nob3dTZXNzaW9ucz17ZmFsc2V9PlxyXG4gICAgICA8U3BlYWtlclRvb2xiYXIgLz5cclxuICAgICAgPFNwZWFrZXJzTGlzdCAvPlxyXG4gICAgPC9TcGVha2VyRmlsdGVyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0UmVzdCwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0UmVzdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBTcGVha2VyQWRkIGZyb20gXCIuL1NwZWFrZXJBZGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICBpbnNlcnRSZWNvcmQsXHJcbiAgICBkZWxldGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3RSZXN0KCk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPkxvYWRpbmcgU3BlYWtlciBkYXRhIGZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgPlxyXG4gICAgICAgIDxTcGVha2VyQWRkIGV2ZW50WWVhcj17ZXZlbnRZZWFyfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge3NwZWFrZXJzRGF0YVxyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcclxuICAgICAgICAgICAgICAgIHNwZWFrZXIubGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlclxyXG4gICAgICAgICAgICAgICAgICBpZD17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3RQbGFjZUhvbGRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEF1dGgoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgeyBsb2dnZWRJblVzZXIsIHNldExvZ2dlZEluVXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgbG9nZ2VkSW5Vc2VyPXtsb2dnZWRJblVzZXJ9XHJcbiAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyPXtzZXRMb2dnZWRJblVzZXJ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+PC9Db21wb25lbnQ+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuLCBpbml0aWFsTG9nZ2VkSW5Vc2VyIH0pIHtcclxuICBjb25zdCBbbG9nZ2VkSW5Vc2VyLCBzZXRMb2dnZWRJblVzZXJdID0gdXNlU3RhdGUoaW5pdGlhbExvZ2dlZEluVXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17KGxvZ2dlZEluVXNlciwgc2V0TG9nZ2VkSW5Vc2VyKX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgU3BlYWtlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmZ1bmN0aW9uIFNwZWFrZXJQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgc3BlYWtlcixcclxuICB1cGRhdGVSZWNvcmQsXHJcbiAgaW5zZXJ0UmVjb3JkLFxyXG4gIGRlbGV0ZVJlY29yZCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3BlYWtlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgc3BlYWtlciwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NwZWFrZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwZWFrZXJDb250ZXh0LCBTcGVha2VyUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXJcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZpbHRlclByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxuICBzdGFydGluZ1Nob3dTZXNzaW9ucyA9IGZhbHNlLFxyXG4gIHN0YXJ0aW5nRXZlbnRZZWFyID0gXCIyMDE5XCIsXHJcbn0pIHtcclxuICBjb25zdCB7XHJcbiAgICBzaG93U2Vzc2lvbnMsXHJcbiAgICBzZXRTaG93U2Vzc2lvbnMsXHJcbiAgICBldmVudFllYXIsXHJcbiAgICBzZXRFdmVudFllYXIsXHJcbiAgICBzZWFyY2hRdWVyeSxcclxuICAgIHNldFNlYXJjaFF1ZXJ5LFxyXG4gICAgRVZFTlRfWUVBUlMsXHJcbiAgfSA9IHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMsIHN0YXJ0aW5nRXZlbnRZZWFyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHNob3dTZXNzaW9ucyxcclxuICAgICAgICBzZXRTaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgZXZlbnRZZWFyLFxyXG4gICAgICAgIHNldEV2ZW50WWVhcixcclxuICAgICAgICBzZWFyY2hRdWVyeSxcclxuICAgICAgICBzZXRTZWFyY2hRdWVyeSxcclxuICAgICAgICBFVkVOVF9ZRUFSUyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCwgU3BlYWtlckZpbHRlclByb3ZpZGVyIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHsgY2hpbGRyZW4sIHN0YXJ0aW5nVGhlbWUgfSkge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2V0VGhlbWUsIHRoZW1lIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVzdFVybCA9IFwiYXBpL3NwZWFrZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSZXF1ZXN0UmVzdCgpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChyZXN0VXJsKTtcclxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGF5RnVuYygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmQuaWQgPyByZWNvcmQgOiByZWM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke3Jlc3RVcmx9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YVtvcmlnaW5hbFJlY29yZHNdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0UmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gW3JlY29yZCwgLi4uZGF0YV07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cmVzdFVybH0vOTk5OTlgLCByZWNvcmQpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERhdGFbb3JpZ2luYWxSZWNvcmRzXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCAhPSByZWNvcmQuaWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3Jlc3RVcmx9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YVtvcmlnaW5hbFJlY29yZHNdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICBpbnNlcnRSZWNvcmQsXHJcbiAgICBkZWxldGVSZWNvcmQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3BlYWtlckZpbHRlcihcclxuICBzdGFydGluZ1Nob3dTZXNzaW9ucyxcclxuICBzdGFydGluZ0V2ZW50WWVhclxyXG4pIHtcclxuICBjb25zdCBbc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnNdID0gdXNlU3RhdGUoc3RhcnRpbmdTaG93U2Vzc2lvbnMpO1xyXG4gIGNvbnN0IFtldmVudFllYXIsIHNldEV2ZW50WWVhcl0gPSB1c2VTdGF0ZShzdGFydGluZ0V2ZW50WWVhcik7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgRVZFTlRfWUVBUlMgPSBbXHJcbiAgICBcIjIwMDhcIixcclxuICAgIFwiMjAwOVwiLFxyXG4gICAgXCIyMDEwXCIsXHJcbiAgICBcIjIwMTFcIixcclxuICAgIFwiMjAxMlwiLFxyXG4gICAgXCIyMDEzXCIsXHJcbiAgICBcIjIwMTRcIixcclxuICAgIFwiMjAxNVwiLFxyXG4gICAgXCIyMDE2XCIsXHJcbiAgICBcIjIwMTdcIixcclxuICAgIFwiMjAxOFwiLFxyXG4gICAgXCIyMDE5XCIsXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dTZXNzaW9ucyxcclxuICAgIHNldFNob3dTZXNzaW9ucyxcclxuICAgIGV2ZW50WWVhcixcclxuICAgIHNldEV2ZW50WWVhcixcclxuICAgIHNlYXJjaFF1ZXJ5LFxyXG4gICAgc2V0U2VhcmNoUXVlcnksXHJcbiAgICBFVkVOVF9ZRUFSUyxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lID0gXCJsaWdodFwiKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShzdGFydGluZ1RoZW1lKTtcclxuICBmdW5jdGlvbiB2YWxpZGF0ZVRoZW1lKHRoZW1lVmFsdWUpIHtcclxuICAgICAgaWYodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgc2V0VGhlbWUoXCJkYXJrXCIpOyBcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0aGVtZSxcclxuICAgIHNldFRoZW1lOiB2YWxpZGF0ZVRoZW1lLFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGFjZWhvbGRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9