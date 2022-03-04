(() => {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./lib/request.ts":
/*!************************!*\
  !*** ./lib/request.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function request(url, method, body, additionalHeader, format = "JSON") {
  const headers = new Headers();

  if (typeof body !== "object") {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }

  if (additionalHeader) {
    headers.append(additionalHeader.name, additionalHeader.value);
  }

  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  } //TODO hadle blob response


  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  return JSON.parse(responseText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./pages/api/api.ts":
/*!**************************!*\
  !*** ./pages/api/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/request */ "./lib/request.ts");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.json */ "./config.json");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ApiService {
  constructor() {
    _defineProperty(this, "apiUrl", "https://localhost:5001/");
  }

  async getAllUser() {
    console.log('api getAllUser');
    const url = `${this.apiUrl}${_config_json__WEBPACK_IMPORTED_MODULE_1__.userEndpoint}`;
    return (await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__.default)(url, 'GET')) || [];
  }

  async getUserById(id) {
    console.log('api getUserById');
    const url = `${this.apiUrl}${_config_json__WEBPACK_IMPORTED_MODULE_1__.userEndpoint}/${id}`;
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__.default)(url, 'GET');
  }

  async createUser(user) {
    console.log(`user create ${user.Id}`);
    const url = `${this.apiUrl}${_config_json__WEBPACK_IMPORTED_MODULE_1__.userEndpoint}`;
    const body = JSON.stringify(user);
    await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__.default)(url, 'POST', body);
  }

  async updateUser(user) {
    console.log(`user update ${user.Id}`);
    const url = `${this.apiUrl}${_config_json__WEBPACK_IMPORTED_MODULE_1__.userEndpoint}`;
    const body = JSON.stringify(user);
    await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__.default)(url, 'PUT', body);
  }

  async deleteUser(id) {
    const url = `${this.apiUrl}${_config_json__WEBPACK_IMPORTED_MODULE_1__.userEndpoint}/${id}`;
    await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__.default)(url, 'DELETE');
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ApiService());

/***/ }),

/***/ "./pages/users/index.tsx":
/*!*******************************!*\
  !*** ./pages/users/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/UserList */ "./src/components/UserList.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "G:\\projects\\IdentityServer\\IdentityServerFront\\admin\\pages\\users\\index.tsx";






const users = [{
  key: 1,
  Id: "1",
  UserName: "asdfыфввввввввввввввввввввввв фыв ыфыф     ыф ыф",
  FirsName: "asdas",
  LastName: "asdsf",
  Email: "asdsaf"
}, {
  key: 2,
  Id: "2",
  UserName: "asdf1",
  FirsName: "asdas1",
  LastName: "asdsf1",
  Email: "asdsaf1"
}, {
  key: 3,
  Id: "3",
  UserName: "asdf1",
  FirsName: "asdas1",
  LastName: "asdsf1",
  Email: "asdsaf1"
}, {
  key: 4,
  Id: "4",
  UserName: "asdf2",
  FirsName: "asda2",
  LastName: "asdsf2",
  Email: "asdsaf2"
}, {
  key: 5,
  Id: "5",
  UserName: "asdf2",
  FirsName: "asdas2",
  LastName: "asdsf2",
  Email: "asdsaf2"
}];
const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();

const Users = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: "User Management"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
      client: queryClient,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_UserList__WEBPACK_IMPORTED_MODULE_1__.default, {
        users: users
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./src/components/Loading.tsx":
/*!************************************!*\
  !*** ./src/components/Loading.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\projects\\IdentityServer\\IdentityServerFront\\admin\\src\\components\\Loading.tsx";



const Loading = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      height: 350,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Spin, {
      size: "large"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/components/UserList.tsx":
/*!*************************************!*\
  !*** ./src/components/UserList.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/api/api */ "./pages/api/api.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_users_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/users/actions */ "./src/store/users/actions.ts");
/* harmony import */ var _store_users_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/users/reducer */ "./src/store/users/reducer.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "G:\\projects\\IdentityServer\\IdentityServerFront\\admin\\src\\components\\UserList.tsx";












const UserComponent = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const {
    users
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => ({
    users: _store_users_reducer__WEBPACK_IMPORTED_MODULE_8__.getUsers(state)
  }));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    dispatch(_store_users_actions__WEBPACK_IMPORTED_MODULE_7__.fetchUsers());
  }, []);

  const onDelete = id => {
    _pages_api_api__WEBPACK_IMPORTED_MODULE_4__.default.deleteUser(id);
  };

  const onEdit = id => {
    console.log(id);
    router.push('/users/id/[id]', `/users/id/${id}`);
  };

  const onCreate = () => {
    console.log('Create user');
    router.push('/users/create');
  };

  const columns = [{
    key: 'Id',
    title: 'Id',
    dataIndex: 'Id'
  }, {
    key: 'UserName',
    title: 'UserName',
    dataIndex: 'UserName'
  }, {
    key: 'FirstName',
    title: 'FirstName',
    dataIndex: 'FirstName'
  }, {
    key: 'LastName',
    title: 'LastName',
    dataIndex: 'LastName'
  }, {
    key: 'Email',
    title: 'Email',
    dataIndex: 'Email'
  }, {
    key: 'Action',
    title: 'Action',
    dataIndex: 'Action',
    render: (text, record) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Popconfirm, {
          title: "Sure to delete?",
          onConfirm: () => onDelete(record.Id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 24
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: () => onEdit(record.Id),
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 24
        }, undefined)]
      }, void 0, true);
    }
  }];
  console.log(`users loading ${!users}`);

  if (!users) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: onCreate,
      children: "Create User"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default()), {
      dataSource: users,
      columns: columns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComponent);

/***/ }),

/***/ "./src/store/actionTypes.ts":
/*!**********************************!*\
  !*** ./src/store/actionTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFetched": () => (/* binding */ UsersFetched),
/* harmony export */   "UserFetched": () => (/* binding */ UserFetched),
/* harmony export */   "UsersIsLoading": () => (/* binding */ UsersIsLoading)
/* harmony export */ });
const UsersFetched = 1;
const UserFetched = 2;
const UsersIsLoading = 3;

/***/ }),

/***/ "./src/store/users/actions.ts":
/*!************************************!*\
  !*** ./src/store/users/actions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers),
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser)
/* harmony export */ });
/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/api/api */ "./pages/api/api.ts");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/store/users/reducer.ts");



function fetchUsers() {
  return async dispatch => {
    const users = await _pages_api_api__WEBPACK_IMPORTED_MODULE_0__.default.getAllUser();
    console.log(`fetchUsers`);
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UsersFetched,
      users: users
    });
  };
}
;
function fetchUser(userId) {
  return async (dispatch, getState) => {
    let user = _reducer__WEBPACK_IMPORTED_MODULE_2__.getUserById(userId, getState());

    if (!user) {
      user = await _pages_api_api__WEBPACK_IMPORTED_MODULE_0__.default.getUserById(userId);
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.UserFetched,
      user: user
    });
  };
}

/***/ }),

/***/ "./src/store/users/reducer.ts":
/*!************************************!*\
  !*** ./src/store/users/reducer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUserById": () => (/* binding */ getUserById)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/store/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const state = {
  users: [],
  usersIsLoading: false
};
const initialState = state;

const userContext = (state = initialState, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.UsersFetched:
      console.log('ActionType.UsersFetched');
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.users
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.UsersIsLoading:
      return _objectSpread(_objectSpread({}, state), {}, {
        usersIsLoading: action.usersIsLoading
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.UserFetched:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: [...state.users, action.user]
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userContext);
function getUsers(userState) {
  return userState.userContext.users;
}
;
function getUserById(userId, userState) {
  var _userState$userContex;

  return (_userState$userContex = userState.userContext.users) === null || _userState$userContex === void 0 ? void 0 : _userState$userContex.find(u => u.Id === userId);
}
;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"userEndpoint":"api/user"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU1osV0FBVCxDQUFxQnlELE1BQXJCLEVBQXFDTyxTQUFyQyxFQUE4RDtBQUFBOztBQUNqRSxrQ0FBT0EsU0FBUyxDQUFDRixXQUFWLENBQXNCbEQsS0FBN0IsMERBQU8sc0JBQTZCcUQsSUFBN0IsQ0FBa0NDLENBQUMsSUFBSUEsQ0FBQyxDQUFDOUQsRUFBRixLQUFTcUQsTUFBaEQsQ0FBUDtBQUNIO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLy4vbGliL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vYWRtaW4vLi9wYWdlcy9hcGkvYXBpLnRzIiwid2VicGFjazovL2FkbWluLy4vcGFnZXMvdXNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbWluLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vYWRtaW4vLi9zcmMvY29tcG9uZW50cy9Vc2VyTGlzdC50c3giLCJ3ZWJwYWNrOi8vYWRtaW4vLi9zcmMvc3RvcmUvYWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vYWRtaW4vLi9zcmMvc3RvcmUvdXNlcnMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9hZG1pbi8uL3NyYy9zdG9yZS91c2Vycy9yZWR1Y2VyLnRzIiwid2VicGFjazovL2FkbWluL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2FkbWluL2V4dGVybmFsIFwiYW50ZC9saWIvdGFibGVcIiIsIndlYnBhY2s6Ly9hZG1pbi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2FkbWluL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9hZG1pbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYWRtaW4vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovL2FkbWluL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hZG1pbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIHJlcXVlc3Q8VD4odXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBib2R5Pzogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsLCBhZGRpdGlvbmFsSGVhZGVyPzogeyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICBmb3JtYXQ6ICdKU09OJyB8ICdCTE9CJyA9IFwiSlNPTlwiKTogUHJvbWlzZTxUIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBib2R5ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFkZGl0aW9uYWxIZWFkZXIpIHtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChhZGRpdGlvbmFsSGVhZGVyLm5hbWUsIGFkZGl0aW9uYWxIZWFkZXIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBib2R5OiBib2R5XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETyBoYWRsZSBibG9iIHJlc3BvbnNlXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgaWYgKCFyZXNwb25zZVRleHQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpIGFzIFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XHJcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi9saWIvcmVxdWVzdFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vc3JjL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCBVc2VyQ3JlYXRlIGZyb20gXCIuLi8uLi9zcmMvbW9kZWxzL1VzZXJDcmVhdGVcIjtcclxuXHJcbmNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gICAgYXBpVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vbG9jYWxob3N0OjUwMDEvXCI7XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsVXNlcigpOiBQcm9taXNlPFVzZXJbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGkgZ2V0QWxsVXNlcicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpVXJsfSR7Y29uZmlnLnVzZXJFbmRwb2ludH1gO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgJ0dFVCcpIHx8IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBnZXRVc2VyQnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGkgZ2V0VXNlckJ5SWQnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFwaVVybH0ke2NvbmZpZy51c2VyRW5kcG9pbnR9LyR7aWR9YDtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsICdHRVQnKVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBjcmVhdGVVc2VyKHVzZXI6IFVzZXJDcmVhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdXNlciBjcmVhdGUgJHt1c2VyLklkfWApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpVXJsfSR7Y29uZmlnLnVzZXJFbmRwb2ludH1gO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcclxuICAgICAgICBhd2FpdCByZXF1ZXN0KHVybCwgJ1BPU1QnLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVVc2VyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdXNlciB1cGRhdGUgJHt1c2VyLklkfWApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpVXJsfSR7Y29uZmlnLnVzZXJFbmRwb2ludH1gO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcclxuICAgICAgICBhd2FpdCByZXF1ZXN0KHVybCwgJ1BVVCcsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpVXJsfSR7Y29uZmlnLnVzZXJFbmRwb2ludH0vJHtpZH1gO1xyXG4gICAgICAgIGF3YWl0IHJlcXVlc3QodXJsLCAnREVMRVRFJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9Vc2VyTGlzdCc7XHJcbmltcG9ydCB7UXVlcnlDbGllbnRQcm92aWRlciwgUXVlcnlDbGllbnR9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuXHJcbmNvbnN0IHVzZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogMSxcclxuICAgICAgICBJZDpcIjFcIixcclxuICAgICAgICBVc2VyTmFtZTogXCJhc2Rm0YvRhNCy0LLQstCy0LLQstCy0LLQstCy0LLQstCy0LLQstCy0LLQstCy0LLQstCy0LIg0YTRi9CyINGL0YTRi9GEICAgICDRi9GEINGL0YRcIixcclxuICAgICAgICBGaXJzTmFtZTogXCJhc2Rhc1wiLFxyXG4gICAgICAgIExhc3ROYW1lOiBcImFzZHNmXCIsXHJcbiAgICAgICAgRW1haWw6IFwiYXNkc2FmXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogMixcclxuICAgICAgICBJZDpcIjJcIixcclxuICAgICAgICBVc2VyTmFtZTogXCJhc2RmMVwiLFxyXG4gICAgICAgIEZpcnNOYW1lOiBcImFzZGFzMVwiLFxyXG4gICAgICAgIExhc3ROYW1lOiBcImFzZHNmMVwiLFxyXG4gICAgICAgIEVtYWlsOiBcImFzZHNhZjFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAzLFxyXG4gICAgICAgIElkOlwiM1wiLFxyXG4gICAgICAgIFVzZXJOYW1lOiBcImFzZGYxXCIsXHJcbiAgICAgICAgRmlyc05hbWU6IFwiYXNkYXMxXCIsXHJcbiAgICAgICAgTGFzdE5hbWU6IFwiYXNkc2YxXCIsXHJcbiAgICAgICAgRW1haWw6IFwiYXNkc2FmMVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6IDQsXHJcbiAgICAgICAgSWQ6XCI0XCIsXHJcbiAgICAgICAgVXNlck5hbWU6IFwiYXNkZjJcIixcclxuICAgICAgICBGaXJzTmFtZTogXCJhc2RhMlwiLFxyXG4gICAgICAgIExhc3ROYW1lOiBcImFzZHNmMlwiLFxyXG4gICAgICAgIEVtYWlsOiBcImFzZHNhZjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiA1LFxyXG4gICAgICAgIElkOlwiNVwiLFxyXG4gICAgICAgIFVzZXJOYW1lOiBcImFzZGYyXCIsXHJcbiAgICAgICAgRmlyc05hbWU6IFwiYXNkYXMyXCIsXHJcbiAgICAgICAgTGFzdE5hbWU6IFwiYXNkc2YyXCIsXHJcbiAgICAgICAgRW1haWw6IFwiYXNkc2FmMlwiLFxyXG4gICAgfSxcclxuXTtcclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5Vc2VyIE1hbmFnZW1lbnQ8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJMaXN0IHVzZXJzPXt1c2Vyc30+PC9Vc2VyTGlzdD5cclxuICAgICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsImltcG9ydCB7IFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBUYWJsZSwgeyBDb2x1bW5zVHlwZSB9IGZyb20gJ2FudGQvbGliL3RhYmxlJztcclxuaW1wb3J0IHtQb3Bjb25maXJtLCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uLy4uL3BhZ2VzL2FwaS9hcGknO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtEaXNwYXRjaH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvcmVkdXhUaHVua0V4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIi4uL3N0b3JlL3VzZXJzL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gXCIuLi9zdG9yZS91c2Vycy9hY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJTZWxlY3RvcnMgZnJvbSBcIi4uL3N0b3JlL3VzZXJzL3JlZHVjZXJcIjtcclxuaW1wb3J0IElTdGF0ZSBmcm9tIFwiLi4vdmlld19tb2RlbHMvSVN0YXRlXCI7XHJcblxyXG5cclxuY29uc3QgVXNlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxEaXNwYXRjaDxBY3Rpb24+PigpO1xyXG4gICAgY29uc3Qge3VzZXJzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVN0YXRlKT0+ICh7XHJcbiAgICAgICAgdXNlcnM6IHVzZXJTZWxlY3RvcnMuZ2V0VXNlcnMoc3RhdGUpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5mZXRjaFVzZXJzKCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBBcGlTZXJ2aWNlLmRlbGV0ZVVzZXIoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkVkaXQgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3VzZXJzL2lkL1tpZF0nLCBgL3VzZXJzL2lkLyR7aWR9YCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlIHVzZXInKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3VzZXJzL2NyZWF0ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zOiBDb2x1bW5zVHlwZTxVc2VyPiA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ0lkJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ0lkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnVXNlck5hbWUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1VzZXJOYW1lJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnVXNlck5hbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICdGaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0ZpcnN0TmFtZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ0ZpcnN0TmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAnTGFzdE5hbWUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhc3ROYW1lJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnTGFzdE5hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ0VtYWlsJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ0VtYWlsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICdBY3Rpb24nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ0FjdGlvbicsXHJcbiAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSB0aXRsZT1cIlN1cmUgdG8gZGVsZXRlP1wiIG9uQ29uZmlybT17KCkgPT4gb25EZWxldGUocmVjb3JkLklkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBvbkVkaXQocmVjb3JkLklkKX0+RWRpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgY29uc29sZS5sb2coYHVzZXJzIGxvYWRpbmcgJHshdXNlcnN9YCk7XHJcblxyXG4gICAgaWYoIXVzZXJzKXtcclxuICAgICAgICByZXR1cm4gPExvYWRpbmcvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0+Q3JlYXRlIFVzZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e3VzZXJzfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbXBvbmVudDsiLCJleHBvcnQgY29uc3QgVXNlcnNGZXRjaGVkID0gMTtcclxuZXhwb3J0IGNvbnN0IFVzZXJGZXRjaGVkID0gMlxyXG5leHBvcnQgY29uc3QgVXNlcnNJc0xvYWRpbmcgPSAzOyIsImltcG9ydCB7RGlzcGF0Y2h9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgVXNlckZldGNoQWN0aW9uLCBVc2Vyc0ZldGNoZEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgQXBpU2VydmljZSBmcm9tICcuLi8uLi8uLi9wYWdlcy9hcGkvYXBpJztcclxuaW1wb3J0IHsgVXNlckZldGNoZWQsIFVzZXJzRmV0Y2hlZCB9IGZyb20gJy4uL2FjdGlvblR5cGVzJztcclxuaW1wb3J0ICogYXMgdXNlclNlbGVjdG9yIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKCk6IChkaXNwYXRjaDogRGlzcGF0Y2g8VXNlcnNGZXRjaGRBY3Rpb24+KSA9PiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2g8VXNlcnNGZXRjaGRBY3Rpb24+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBBcGlTZXJ2aWNlLmdldEFsbFVzZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZmV0Y2hVc2Vyc2ApXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFVzZXJzRmV0Y2hlZCwgdXNlcnM6IHVzZXJzfSk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQ6IHN0cmluZyk6IChkaXNwYXRjaDogRGlzcGF0Y2g8VXNlckZldGNoQWN0aW9uPiwgZ2V0U3RhdGUpID0+IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaDxVc2VyRmV0Y2hBY3Rpb24+LCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGxldCB1c2VyID0gdXNlclNlbGVjdG9yLmdldFVzZXJCeUlkKHVzZXJJZCwgZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBBcGlTZXJ2aWNlLmdldFVzZXJCeUlkKHVzZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFVzZXJGZXRjaGVkLCB1c2VyOiB1c2VyfSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgVXNlckNvbnRleHQsIEFjdGlvbiB9IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlIGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiXHJcbmltcG9ydCBJU3RhdGUgZnJvbSBcIi4uLy4uL3ZpZXdfbW9kZWxzL0lTdGF0ZVwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL3VzZXJzXCI7XHJcblxyXG5jb25zdCBzdGF0ZTogVXNlckNvbnRleHQgPSB7XHJcbiAgICB1c2VyczogW10gYXMgVXNlcltdLFxyXG4gICAgdXNlcnNJc0xvYWRpbmc6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gc3RhdGU7XHJcblxyXG5jb25zdCB1c2VyQ29udGV4dCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBVc2VyQ29udGV4dCAmIGFueSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlLlVzZXJzRmV0Y2hlZDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdGlvblR5cGUuVXNlcnNGZXRjaGVkJylcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IGFjdGlvbi51c2Vyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5Vc2Vyc0lzTG9hZGluZzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcnNJc0xvYWRpbmc6IGFjdGlvbi51c2Vyc0lzTG9hZGluZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5Vc2VyRmV0Y2hlZDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IFsuLi5zdGF0ZS51c2VycywgYWN0aW9uLnVzZXJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyQ29udGV4dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2Vycyh1c2VyU3RhdGU6IElTdGF0ZSk6IFVzZXJbXSB7XHJcbiAgICByZXR1cm4gdXNlclN0YXRlLnVzZXJDb250ZXh0LnVzZXJzO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJCeUlkKHVzZXJJZDogc3RyaW5nLCB1c2VyU3RhdGU6IElTdGF0ZSk6IFVzZXIge1xyXG4gICAgcmV0dXJuIHVzZXJTdGF0ZS51c2VyQ29udGV4dC51c2Vycz8uZmluZCh1ID0+IHUuSWQgPT09IHVzZXJJZCk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi90YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImFkZGl0aW9uYWxIZWFkZXIiLCJmb3JtYXQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIm5hbWUiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImVycm9yVGV4dCIsInRleHQiLCJFcnJvciIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsImNvbmZpZyIsIkFwaVNlcnZpY2UiLCJnZXRBbGxVc2VyIiwiY29uc29sZSIsImxvZyIsImFwaVVybCIsInVzZXJFbmRwb2ludCIsImdldFVzZXJCeUlkIiwiaWQiLCJjcmVhdGVVc2VyIiwidXNlciIsIklkIiwic3RyaW5naWZ5IiwidXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJIZWFkIiwiVXNlckxpc3QiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJ1c2VycyIsImtleSIsIlVzZXJOYW1lIiwiRmlyc05hbWUiLCJMYXN0TmFtZSIsIkVtYWlsIiwicXVlcnlDbGllbnQiLCJVc2VycyIsIlNwaW4iLCJMb2FkaW5nIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIlJlYWN0IiwiVGFibGUiLCJQb3Bjb25maXJtIiwiQnV0dG9uIiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZXJBY3Rpb25zIiwidXNlclNlbGVjdG9ycyIsIlVzZXJDb21wb25lbnQiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsInN0YXRlIiwiZ2V0VXNlcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXJzIiwib25EZWxldGUiLCJvbkVkaXQiLCJwdXNoIiwib25DcmVhdGUiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJyZW5kZXIiLCJyZWNvcmQiLCJVc2Vyc0ZldGNoZWQiLCJVc2VyRmV0Y2hlZCIsIlVzZXJzSXNMb2FkaW5nIiwidXNlclNlbGVjdG9yIiwidHlwZSIsImZldGNoVXNlciIsInVzZXJJZCIsImdldFN0YXRlIiwiQWN0aW9uVHlwZSIsInVzZXJzSXNMb2FkaW5nIiwiaW5pdGlhbFN0YXRlIiwidXNlckNvbnRleHQiLCJhY3Rpb24iLCJ1c2VyU3RhdGUiLCJmaW5kIiwidSJdLCJzb3VyY2VSb290IjoiIn0=