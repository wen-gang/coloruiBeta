(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = tt.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || tt.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    tt.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


var oName = 'getUserInfo';
var nName = 'getUserProfile';

var getUserProfile = {
  name: tt.canIUse(nName) ? nName : oName };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'createCameraContext',
// 'createLivePlayerContext',
// 'getSavedFileInfo',
// 'createMapContext',
// 'onMemoryWarning',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'setScreenBrightness',
// 'getScreenBrightness',
// 'addPhoneContact',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'showNavigationBarLoading',
// 'hideNavigationBarLoading',
// 'setTabBarItem',
// 'setTabBarStyle',
// 'hideTabBar',
// 'showTabBar',
// 'setTabBarBadge',
// 'removeTabBarBadge',
// 'showTabBarRedDot',
// 'hideTabBarRedDot',
// 'setBackgroundColor',
// 'setBackgroundTextStyle',
// 'chooseInvoiceTitle',
// 'addTemplate',
// 'deleteTemplate',
// 'getTemplateLibraryById',
// 'getTemplateLibraryList',
// 'getTemplateList',
// 'sendTemplateMessage',
// 'setEnableDebug',
// 'onWindowResize',
// 'offWindowResize',
// 'createOffscreenCanvas',
// 'vibrate'
];

// 存在兼容性的 API 列表
// 头条小程序自1.35.0+支持canIUses
var canIUses = [
  // 'createIntersectionObserver',
  // 'getSavedFileList',
  // 'removeSavedFile',
  // 'hideKeyboard',
  // 'getImageInfo',
  // 'createVideoContext',
  // 'onSocketOpen',
  // 'onSocketError',
  // 'sendSocketMessage',
  // 'onSocketMessage',
  // 'closeSocket',
  // 'onSocketClose',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'navigateToMiniProgram',
  // 'navigateBackMiniProgram',
  // 'compressImage',
  // 'chooseLocation',
  // 'openDocument',
  // 'onUserCaptureScreen',
  // 'getBackgroundAudioManager',
  // 'setNavigationBarColor',
];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  getUserProfile: getUserProfile,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      camera: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    name: tt.pay ? 'pay' : 'requestPayment',
    args: {
      orderInfo: tt.pay ? 'orderInfo' : 'data' } },


  getFileInfo: {
    args: {
      digestAlgorithm: false } } };




var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5934\u6761\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = tt[methodName].apply(tt, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function createMediaQueryObserver() {
  var mediaQueryObserver = {};var _tt$getSystemInfoSync2 =



  tt.getSystemInfoSync(),windowWidth = _tt$getSystemInfoSync2.windowWidth,windowHeight = _tt$getSystemInfoSync2.windowHeight;

  var orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

  mediaQueryObserver.observe = function (options, callback) {
    var matches = true;
    for (var item in options) {
      var itemValue = item === 'orientation' ? options[item] : Number(options[item]);
      if (options[item] !== '') {
        if (item === 'width') {
          if (itemValue === windowWidth) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minWidth') {
          if (windowWidth >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxWidth') {
          if (windowWidth <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'height') {
          if (itemValue === windowHeight) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'minHeight') {
          if (windowHeight >= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
        if (item === 'maxHeight') {
          if (windowHeight <= itemValue) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }

        if (item === 'orientation') {
          if (options[item] === orientation) {
            matches = true;
          } else {
            matches = false;
            callback(matches);
            return matches;
          }
        }
      }
    }
    callback(matches);

    return matches;
  };

  mediaQueryObserver.disconnect = function () {
  };

  return mediaQueryObserver;
}

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createMediaQueryObserver: createMediaQueryObserver });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"ColoruiApp","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel$1() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueId = this.$options.propsData.vueId;
    var object = center[vueId] = center[vueId] || {};
    object[name] = value;
    if (parents[vueId]) {
      parents[vueId].$forceUpdate();
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel$1();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-toutiao";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['__route__', '__webviewId__', '__nodeid__', '__nodeId__'];

function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  /* eslint-disable no-undef */
  var minorVersion = parseInt(tt.getSystemInfoSync().SDKVersion.split('.')[1]);
  if (minorVersion > 16) {
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;
          if (!$refs[ref]) {
            $refs[ref] = [];
          }
          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      } });

  } else {
    mpInstance.selectAllComponents('.vue-ref', function (components) {
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        vm.$refs[ref] = component.$vm || component;
      });
    });
    mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!vm.$refs[ref]) {
          vm.$refs[ref] = [];
        }
        vm.$refs[ref].push(component.$vm || component);
      });
    });
  }
}

var instances = Object.create(null);

function initRelation(_ref5)


{var vuePid = _ref5.vuePid,mpInstance = _ref5.mpInstance;
  // 头条 triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后
  var nodeId = (mpInstance.__nodeId__ || mpInstance.__nodeid__) + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  this.triggerEvent('__l', {
    vuePid: vuePid,
    nodeId: nodeId,
    webviewId: webviewId });

}

function handleLink$1(_ref6)





{var _ref6$detail = _ref6.detail,vuePid = _ref6$detail.vuePid,nodeId = _ref6$detail.nodeId,webviewId = _ref6$detail.webviewId;
  var vm = instances[webviewId + '_' + nodeId];
  if (!vm) {
    return;
  }

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vm.$parent = parentVm;
  vm.$root = parentVm.$root;
  parentVm.$children.push(vm);

  vm.__call_hook('created');
  vm.__call_hook('beforeMount');
  vm._isMounted = true;
  vm.__call_hook('mounted');
  vm.__call_hook('onReady');
}

function parseApp(vm) {
  _vue.default.prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

  _vue.default.mixin({
    created: function created() {// 处理 injections,头条 triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
      if (this.mpType !== 'app') {
        if (
        this.mpType === 'page' &&
        !this.$scope.route &&
        this.$scope.__route__)
        {
          this.$scope.route = this.$scope.__route__;
        }

        initRefs(this);

        this.__init_injections(this);
        this.__init_provide(this);
      }
    } });


  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: function initRefs() {} // attached 时，可能查询不到
  });
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref7.isPage,initRelation = _ref7.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueOptions) {var _parseBaseComponent =
  parseBaseComponent(vueOptions),_parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),componentOptions = _parseBaseComponent2[0],VueComponent = _parseBaseComponent2[1];

  componentOptions.lifetimes.attached = function attached() {
    var properties = this.properties;

    var options = {
      mpType: isPage.call(this) ? 'page' : 'component',
      mpInstance: this,
      propsData: properties };


    initVueIds(properties.vueId, this);

    // 初始化 vue 实例
    this.$vm = new VueComponent(options);

    // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
    initSlots(this.$vm, properties.vueSlots);

    // 处理父子关系
    initRelation.call(this, {
      vuePid: this._$vuePid,
      mpInstance: this });


    // 触发首次 setData
    this.$vm.$mount();
  };

  // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中
  delete componentOptions.lifetimes.ready;

  componentOptions.methods.__l = handleLink$1;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref8)


{var isPage = _ref8.isPage,initRelation = _ref8.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

  // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发
  pageOptions.lifetimes.ready = function ready() {
    if (this.$vm && this.$vm.mpType === 'page') {
      this.$vm.__call_hook('created');
      this.$vm.__call_hook('beforeMount');
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    } else {
      this.is && console.warn(this.is + ' is not ready');
    }
  };

  pageOptions.lifetimes.detached = function detached() {
    this.$vm && this.$vm.$destroy();
    // 清理
    var webviewId = this.__webviewId__;
    webviewId && Object.keys(instances).forEach(function (key) {
      if (key.indexOf(webviewId + '_') === 0) {
        delete instances[key];
      }
    });
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && tt.onAppShow) {
    tt.onAppShow(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && tt.onAppHide) {
    tt.onAppHide(function () {for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = tt.getLaunchOptionsSync && tt.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-toutiao" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

tt.createApp = createApp;
tt.createPage = createPage;
tt.createComponent = createComponent;
tt.createSubpackageApp = createSubpackageApp;
tt.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!********************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/app/store/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  state: {
    isTheme: false, // 是否开启多主题（true:会读缓存，能设置对应的主题)
    themeAuto: false, // 跟随系统
    theme: 'light', // 设置默认主题
    main: 'blue', // 设置默认强调色
    homePath: '/pages/docment/home', // 设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
    tabbar: [{
      title: '文档',
      icon: '/static/tab_icon/docment.png',
      curIcon: '/static/tab_icon/docment_cur.png',
      url: '/pages/docment/home',
      type: 'tab' },

    {
      title: '模板',
      icon: '/static/tab_icon/tpl.png',
      curIcon: '/static/tab_icon/tpl_cur.png',
      url: '/pages/template/home',
      type: 'tab' },

    {
      title: '社区',
      icon: '/static/tab_icon/comment.png',
      curIcon: '/static/tab_icon/comment_cur.png',
      url: '/pages/community/home',
      type: 'tab' },

    {
      title: '发现',
      icon: '/static/tab_icon/find.png',
      curIcon: '/static/tab_icon/find_cur.png',
      url: '/pages/find/home',
      type: 'tab' },

    {
      title: '我的',
      icon: '/static/tab_icon/my.png',
      curIcon: '/static/tab_icon/my_cur.png',
      url: '/pages/my/home',
      type: 'tab' }] },



  getters: {
    getCustomTheme: function getCustomTheme(state) {
      return state.theme;
    },
    getCustomMain: function getCustomMain(state) {
      return state.main;
    },
    getTabbar: function getTabbar(state) {
      return state.tabbar;
    } },


  mutations: {},


  actions: {} };exports.default = _default;

/***/ }),

/***/ 11:
/*!*******************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/store/modal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  state: {
    target: '' },

  getters: {},



  mutations: {
    setTarget: function setTarget(state, data) {
      console.log(data);
      state.target = data;
    } },

  actions: {} };exports.default = _default;

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 15:
/*!*************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));


var _store = _interopRequireDefault(__webpack_require__(/*! @/ui/store */ 8));



var _modal = _interopRequireDefault(__webpack_require__(/*! @/ui/js/modal.js */ 16));



var _util = _interopRequireDefault(__webpack_require__(/*! @/ui/js/util.js */ 17));



var _mixin = _interopRequireDefault(__webpack_require__(/*! @/ui/js/mixin.js */ 18));



var _index = _interopRequireDefault(__webpack_require__(/*! @/app/index.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 挂载 vuex
_vue.default.prototype.$store = _store.default; // 挂载 modal
_vue.default.prototype.$Modal = _modal.default; // 挂载常用封装
_vue.default.prototype.$util = _util.default; // 挂载ui系统混入
_vue.default.mixin(_mixin.default); // 挂载app 















uni.getStorage({
  key: 'userInfo',
  success: function success(res) {
    _store.default.commit('upUserInfo', res.data);
  } });

uni.getStorage({
  key: 'app',
  success: function success(res) {
    _store.default.commit('initApp', res.data);
  } });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 16:
/*!****************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/js/modal.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _store = _interopRequireDefault(__webpack_require__(/*! @/ui/store */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var modal = {
  show: function show(name) {
    _store.default.commit('setTarget', name);
  },
  // showModal({title:'',content:'',showCancel:true,cancelText:'',confirmText:''}) {
  //        store.commit('setTarget', name);
  //    },
  Confirm: function Confirm(msg, event, btnText, title) {
    Dialog.confirm({
      title: title || i18n.t('dialog[0]'),
      message: msg,
      confirmButtonText: btnText || i18n.t('dialog[1]'),
      closeOnPopstate: true }).
    then(event).catch(function () {});
  },
  Alert: function Alert(msg, event, btn) {
    Dialog.alert({
      title: i18n.t('modal[0]'),
      message: msg,
      confirmButtonText: btn || i18n.t('modal[1]'),
      closeOnPopstate: true,
      closeOnClickOverlay: true }).
    then(event).catch(function () {});
  },
  Toast: function (_Toast) {function Toast(_x, _x2, _x3) {return _Toast.apply(this, arguments);}Toast.toString = function () {return _Toast.toString();};return Toast;}(function (msg, position, duration) {
    Toast({
      message: msg,
      position: position || 'bottom',
      duration: duration || 2000 });

  }),
  Loading: function Loading(msg, el) {
    Toast.loading({
      message: msg || i18n.t('modal[2]'),
      duration: 0,
      forbidClick: true,
      getContainer: el || 'body' });

  },
  Close: function Close() {
    Toast.clear();
  } };var _default =


modal;exports.default = _default;

/***/ }),

/***/ 17:
/*!***************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/js/util.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * getUuid 生成唯一id
 */
function getUuid() {
  return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
}

/**
   * getColor 随机生成颜色名
   */
function getColor() {
  var colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
  return colorArr[Math.floor(Math.random() * colorArr.length)];
}

/**
   * showTips 显示系统提示
   */
function showTips(msg) {
  uni.showToast({
    title: msg,
    icon: 'none' });

}

/**
   * copyText 多端复制文本
   */
function copyText(text) {

  uni.setClipboardData({
    data: text,
    success: function success() {
      showTips('复制成功！');
    },
    fail: function fail() {
      showTips('复制失败！');
    } });












}

module.exports = {
  getUuid: getUuid,
  getColor: getColor,
  showTips: showTips,
  copyText: copyText };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 18:
/*!****************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/js/mixin.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vuex = __webpack_require__(/*! vuex */ 9);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


{
  data: function data() {
    return {
      _uid: this._uid, //vue实例id
      sys_scrollTop: 0, //实例所在页面滚动值
      sys_atPage: true, //实例是否在页面里显示
      sys_atHome: false, //实例是否在首页
      sys_layer: 0 //实例层级
    };
  },
  watch: {},


  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)({
    sys_themeAuto: function sys_themeAuto(state) {return state.sys_themeAuto;},
    sys_theme: function sys_theme(state) {return state.sys_theme;},
    sys_main: function sys_main(state) {return state.sys_main;},
    sys_info: function sys_info(state) {return state.sys_info;},
    sys_statusBar: function sys_statusBar(state) {return state.sys_statusBar;},
    sys_homePath: function sys_homePath(state) {return state.app.homePath;} })), {}, {

    sys_navBar: function sys_navBar() {
      return this.$store.getters.sys_navBar;
    },
    sys_capsule: function sys_capsule() {
      return this.$store.getters.sys_capsule;
    } }),

  created: function created() {
    if (this._uid != this.$root._uid) {
      this._onShow();
    }
    if (this.$parent) {
      this.sys_layer = (this.$parent.sys_layer ? this.$parent.sys_layer : 0) + 1;
    }
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    uni.$emit('_onShow_' + this._uid);
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('_onReachBottom_' + this._uid);
  },
  mounted: function mounted() {var _this = this;
    uni.$on('_onShow_' + this.$root._uid, function () {
      _this._onShow();
    });
    uni.$on('_onHide_' + this.$root._uid, function () {
      _this._onHide();
    });
    uni.$on('_onReachBottom_' + this.$root._uid, function () {
      _this._onReachBottom();
    });
    uni.$on('_onResize_' + this.$root._uid, function () {

    });




    var pages = getCurrentPages();
    this.sys_atHome = pages.length == 1;


  },
  onReady: function onReady() {







  },
  onHide: function onHide() {
    uni.$emit('_onHide_' + this._uid);
  },
  destroyed: function destroyed() {
    uni.$off('_onShow_' + this._uid);
    uni.$off('_onHide_' + this._uid);
    this.sys_atPage = false;
  },
  onPageScroll: function onPageScroll(e) {
    this.sys_scrollTop = e.scrollTop;
    uni.$emit('_scrollTop_' + this._uid, e.scrollTop);
    if (e.scrollTop < 0) {
      return false;
    }
  },
  methods: {
    _onShow: function _onShow() {
      this.sys_atPage = true;
      // console.log('component: ' + this._uid + ' onShow in '+ this.$root._uid);
    },
    _onReachBottom: function _onReachBottom() {},
    _onHide: function _onHide() {
      this.sys_atPage = false;
      // console.log('component: ' + this._uid + ' onHide in '+ this.$root._uid);
    },
    _backPage: function _backPage() {
      if (this.sys_atHome) {
        this._toHome();
      } else {





        uni.navigateBack({
          delta: 1,
          fail: function fail(res) {
            console.log(res);
          } });



      }
    },
    _toHome: function _toHome() {
      uni.switchTab({
        url: this.sys_homePath,
        fail: function fail(res) {
          console.log(res);
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!**************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/app/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));


var _mixin = _interopRequireDefault(__webpack_require__(/*! @/app/js/mixin.js */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 挂载app混入
_vue.default.mixin(_mixin.default);

// 挂载app过滤
// import apFilters from "@/app/js/filters.js"
// Object.keys(filters).forEach(key => {
// 	Vue.filter(key, filters[key])
// })

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"ColoruiApp","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"ColoruiApp","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"ColoruiApp","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"ColoruiApp","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!*****************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/app/js/mixin.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vuex = __webpack_require__(/*! vuex */ 9);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


{
  data: function data() {
    return {};

  },
  computed: _objectSpread({},
  (0, _vuex.mapState)({})),



  props: {},


  onLoad: function onLoad() {

  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: 'ui组件库',
      query: {} };

  },
  onShareAppMessage: function onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline'] });

  },
  created: function created() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 220:
/*!********************************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/components/ui-code/prism.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ?
self : {},
Prism = function (u) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
  n = 0,
  C = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof _ ? new _(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) :
        e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++n }),
        e.__id;
      },
      clone: function r(e, t) {
        var a,n,i = C.util.type(e);
        switch (t = t || {}, i) {
          case "Object":
            if (n = C.util.objId(e), t[n]) return t[n];
            for (var o in a = {}, t[n] = a, e) {e.hasOwnProperty(o) && (a[o] = r(e[o], t));}
            return a;
          case "Array":
            return n = C.util.objId(e), t[n] ? t[n] : (a = [], t[n] = a, e.forEach(function (e, n) {
              a[n] = r(e, t);
            }), a);
          default:
            return e;}

      },
      getLanguage: function getLanguage(e) {
        for (; e && !c.test(e.className);) {e = e.parentElement;}
        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
      },
      currentScript: function currentScript() {
        if ("undefined" == typeof document) return null;
        if ("currentScript" in document) return document.currentScript;
        try {
          throw new Error();
        } catch (e) {
          var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
          if (n) {
            var r = document.getElementsByTagName("script");
            for (var t in r) {
              if (r[t].src == n) return r[t];}
          }
          return null;
        }
      } },

    languages: {
      extend: function extend(e, n) {
        var r = C.util.clone(C.languages[e]);
        for (var t in n) {r[t] = n[t];}
        return r;
      },
      insertBefore: function insertBefore(r, e, n, t) {
        var a = (t = t || C.languages)[r],
        i = {};
        for (var o in a) {
          if (a.hasOwnProperty(o)) {
            if (o == e)
            for (var l in n) {n.hasOwnProperty(l) && (i[l] = n[l]);}
            n.hasOwnProperty(o) || (i[o] = a[o]);
          }}var s = t[r];
        return t[r] = i, C.languages.DFS(C.languages, function (e, n) {
          n === s && e != r && (this[e] = i);
        }), i;
      },
      DFS: function e(n, r, t, a) {
        a = a || {};
        var i = C.util.objId;
        for (var o in n) {
          if (n.hasOwnProperty(o)) {
            r.call(n, o, n[o], t || o);
            var l = n[o],
            s = C.util.type(l);
            "Object" !== s || a[i(l)] ? "Array" !== s || a[i(l)] || (a[i(l)] = !0, e(l, r, o, a)) : (a[i(l)] = !0, e(l, r,
            null, a));
          }}
      } },

    plugins: {},
    highlightAll: function highlightAll(e, n) {
      C.highlightAllUnder(document, e, n);
    },
    highlightAllUnder: function highlightAllUnder(e, n, r) {
      var t = {
        callback: r,
        container: e,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };

      C.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),
      C.hooks.run("before-all-elements-highlight", t);
      for (var a, i = 0; a = t.elements[i++];) {C.highlightElement(a, !0 === n, t.callback);}
    },
    highlightElement: function highlightElement(e, n, r) {
      var t = C.util.getLanguage(e),
      a = C.languages[t];
      e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
      var i = e.parentNode;
      i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") +
      " language-" + t);
      var o = {
        element: e,
        language: t,
        grammar: a,
        code: e.textContent };


      function l(e) {
        o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run(
        "after-highlight", o), C.hooks.run("complete", o), r && r.call(o.element);
      }
      if (C.hooks.run("before-sanity-check", o), !o.code) return C.hooks.run("complete", o), void (r && r.call(o.element));
      if (C.hooks.run("before-highlight", o), o.grammar) {
        if (n && u.Worker) {
          var s = new Worker(C.filename);
          s.onmessage = function (e) {
            l(e.data);
          }, s.postMessage(JSON.stringify({
            language: o.language,
            code: o.code,
            immediateClose: !0 }));

        } else l(C.highlight(o.code, o.grammar, o.language));} else
      l(C.util.encode(o.code));
    },
    highlight: function highlight(e, n, r) {
      var t = {
        code: e,
        grammar: n,
        language: r };

      return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize",
      t), _.stringify(C.util.encode(t.tokens), t.language);
    },
    matchGrammar: function matchGrammar(e, n, r, t, a, i, o) {
      for (var l in r) {
        if (r.hasOwnProperty(l) && r[l]) {
          var s = r[l];
          s = Array.isArray(s) ? s : [s];
          for (var u = 0; u < s.length; ++u) {
            if (o && o == l + "," + u) return;
            var c = s[u],
            g = c.inside,
            f = !!c.lookbehind,
            h = !!c.greedy,
            d = 0,
            m = c.alias;
            if (h && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imsuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }
            c = c.pattern || c;
            for (var y = t, v = a; y < n.length; v += n[y].length, ++y) {
              var k = n[y];
              if (n.length > e.length) return;
              if (!(k instanceof _)) {
                if (h && y != n.length - 1) {
                  if (c.lastIndex = v, !(O = c.exec(e))) break;
                  for (var b = O.index + (f && O[1] ? O[1].length : 0), w = O.index + O[0].length, A = y, P = v, x = n.length; A <
                  x && (P < w || !n[A].type && !n[A - 1].greedy); ++A) {(P += n[A].length) <= b && (++y, v = P);}
                  if (n[y] instanceof _) continue;
                  S = A - y, k = e.slice(v, P), O.index -= v;
                } else {
                  c.lastIndex = 0;
                  var O = c.exec(k),
                  S = 1;
                }
                if (O) {
                  f && (d = O[1] ? O[1].length : 0);
                  w = (b = O.index + d) + (O = O[0].slice(d)).length;
                  var j = k.slice(0, b),
                  N = k.slice(w),
                  E = [y, S];
                  j && (++y, v += j.length, E.push(j));
                  var L = new _(l, g ? C.tokenize(O, g) : O, m, O, h);
                  if (E.push(L), N && E.push(N), Array.prototype.splice.apply(n, E), 1 != S && C.matchGrammar(e, n, r, y, v,
                  !0, l + "," + u), i) break;
                } else if (i) break;
              }
            }
          }
        }}
    },
    tokenize: function tokenize(e, n) {
      var r = [e],
      t = n.rest;
      if (t) {
        for (var a in t) {n[a] = t[a];}
        delete n.rest;
      }
      return C.matchGrammar(e, r, n, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function add(e, n) {
        var r = C.hooks.all;
        r[e] = r[e] || [], r[e].push(n);
      },
      run: function run(e, n) {
        var r = C.hooks.all[e];
        if (r && r.length)
        for (var t, a = 0; t = r[a++];) {t(n);}
      } },

    Token: _ };


  function _(e, n, r, t, a) {
    this.type = e, this.content = n, this.alias = r, this.length = 0 | (t || "").length, this.greedy = !!a;
  }
  if (u.Prism = C, _.stringify = function (e, n) {
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) return e.map(function (e) {
      return _.stringify(e, n);
    }).join("");
    var r = {
      type: e.type,
      content: _.stringify(e.content, n),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: n };

    if (e.alias) {
      var t = Array.isArray(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(r.classes, t);
    }
    C.hooks.run("wrap", r);
    var a = Object.keys(r.attributes).map(function (e) {
      return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + r.content + "</" + r.tag +
    ">";
  }, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message",
  function (e) {
    var n = JSON.parse(e.data),
    r = n.language,
    t = n.code,
    a = n.immediateClose;
    u.postMessage(C.highlight(t, C.languages[r], r)), a && u.close();
  }, !1)), C;
  var e = C.util.currentScript();

  function r() {
    C.manual || C.highlightAll();
  }
  if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) {
    var t = document.readyState;
    "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ?
    window.requestAnimationFrame(r) : window.setTimeout(r, 16);
  }
  return C;
}(_self);
 true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism =
Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: !0 },

  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/ } },


      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0 }] } },



      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/ } } } },




  entity: /&#?[\da-z]{1,8};/i },
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add(
"wrap",
function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e] },
    s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s } };


    n["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e] };

    var t = {};
    t[a] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a),
      "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n },
    Prism.languages.insertBefore("markup", "cdata", t);
  } }),
Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.
mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: !0,
          alias: "selector" } } },



    url: {
      pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"),
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/ } },


    selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: e,
      greedy: !0 },

    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/ },
  s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: t.tag.inside },

        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css } },


      alias: "language-css" } },

  t.tag));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0 },
  {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0 }],

  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0 },

  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/ } },


  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/ };

Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0 }],

  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0 },
  {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0 }],

  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }),
Prism.languages.javascript["class-name"][0].pattern =
/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript",
"keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0 },

  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function" },

  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript },
  {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript },
  {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript },
  {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript }],

  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }),
Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string" },

      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation" },

          rest: Prism.languages.javascript } },


      string: /[\s\S]+/ } } }),


Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js =
Prism.languages.javascript;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/pages.json ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 8:
/*!*******************************************************************************!*\
  !*** /Users/xiaogang/Documents/HBuilderProjects/ColoruiApp/ui/store/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 9));
var _store = _interopRequireDefault(__webpack_require__(/*! @/app/store */ 10));
var _modal = _interopRequireDefault(__webpack_require__(/*! @/ui/store/modal.js */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  state: {
    sys_theme: uni.getStorageSync('sys_theme') ? uni.getStorageSync('sys_theme') : _store.default.state.theme, // light dark
    sys_main: uni.getStorageSync('sys_main') ? uni.getStorageSync('sys_main') : _store.default.state.main, // color
    sys_info: uni.getSystemInfoSync(),
    sys_statusBar: uni.getSystemInfoSync().statusBarHeight },

  getters: {
    sys_capsule: function sys_capsule() {


      var capsule = uni.getMenuButtonBoundingClientRect();
      if (!capsule) {
        console.log('getMenuButtonBoundingClientRect error');
        capsule = {
          bottom: 56,
          height: 32,
          left: 278,
          right: 365,
          top: 24,
          width: 87 };

      }
      return capsule;













    },
    sys_navBar: function sys_navBar() {






      var capsule = uni.getMenuButtonBoundingClientRect();
      if (!capsule) {
        console.log('getMenuButtonBoundingClientRect error');
        capsule = {
          bottom: 56,
          height: 32,
          left: 278,
          right: 365,
          top: 24,
          width: 87 };

      }
      return capsule.bottom + capsule.top - uni.getSystemInfoSync().statusBarHeight;






    } },

  mutations: {
    //设置主题
    setTheme: function setTheme(state, data) {
      uni.setStorageSync('sys_theme', data);
      state.sys_theme = data;



    },
    //设置主颜色
    setMain: function setMain(state, data) {
      uni.setStorageSync('sys_main', data);
      state.sys_main = data;



    } },

  actions: {},


  modules: {
    app: _store.default, modal: _modal.default } });exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 9:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1tcC10b3V0aWFvL2Rpc3QvaW5kZXguanM/ZjI2NiIsInVuaS1hcHA6Ly8vYXBwL3N0b3JlL2luZGV4LmpzIiwidW5pLWFwcDovLy91aS9zdG9yZS9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsInVuaS1hcHA6Ly8vdWkvaW5kZXguanMiLCJ1bmktYXBwOi8vL3VpL2pzL21vZGFsLmpzIiwidW5pLWFwcDovLy91aS9qcy91dGlsLmpzIiwidW5pLWFwcDovLy91aS9qcy9taXhpbi5qcyIsInVuaS1hcHA6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL21wLXZ1ZS9kaXN0L21wLnJ1bnRpbWUuZXNtLmpzPzY2ZmQiLCJ1bmktYXBwOi8vL2FwcC9qcy9taXhpbi5qcyIsInVuaS1hcHA6Ly8vdWkvY29tcG9uZW50cy91aS1jb2RlL3ByaXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCIsInVuaS1hcHA6Ly8vdWkvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXgvZGlzdC92dWV4LmVzbS5qcz8yZjYyIl0sIm5hbWVzIjpbImI2NERlY29kZVVuaWNvZGUiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwic3BsaXQiLCJtYXAiLCJjIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2xpY2UiLCJqb2luIiwiZ2V0Q3VycmVudFVzZXJJbmZvIiwidG9rZW4iLCJ0dCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW5BcnIiLCJsZW5ndGgiLCJ1aWQiLCJyb2xlIiwicGVybWlzc2lvbiIsInRva2VuRXhwaXJlZCIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJleHAiLCJpYXQiLCJ1bmlJZE1peGluIiwiVnVlIiwicHJvdG90eXBlIiwidW5pSURIYXNSb2xlIiwicm9sZUlkIiwiaW5kZXhPZiIsInVuaUlESGFzUGVybWlzc2lvbiIsInBlcm1pc3Npb25JZCIsInVuaUlEVG9rZW5WYWxpZCIsIkRhdGUiLCJub3ciLCJfdG9TdHJpbmciLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwidG9VcHBlckNhc2UiLCJIT09LUyIsImdsb2JhbEludGVyY2VwdG9ycyIsInNjb3BlZEludGVyY2VwdG9ycyIsIm1lcmdlSG9vayIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwicmVzIiwiY29uY2F0IiwiQXJyYXkiLCJpc0FycmF5IiwiZGVkdXBlSG9va3MiLCJob29rcyIsImkiLCJwdXNoIiwicmVtb3ZlSG9vayIsImhvb2siLCJpbmRleCIsInNwbGljZSIsIm1lcmdlSW50ZXJjZXB0b3JIb29rIiwiaW50ZXJjZXB0b3IiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsInJlbW92ZUludGVyY2VwdG9ySG9vayIsImFkZEludGVyY2VwdG9yIiwibWV0aG9kIiwicmVtb3ZlSW50ZXJjZXB0b3IiLCJ3cmFwcGVySG9vayIsImRhdGEiLCJpc1Byb21pc2UiLCJ0aGVuIiwicXVldWUiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYWxsYmFjayIsIndyYXBwZXJPcHRpb25zIiwib3B0aW9ucyIsIm5hbWUiLCJvbGRDYWxsYmFjayIsImNhbGxiYWNrSW50ZXJjZXB0b3IiLCJ3cmFwcGVyUmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZSIsInJldHVyblZhbHVlSG9va3MiLCJnZXRBcGlJbnRlcmNlcHRvckhvb2tzIiwic2NvcGVkSW50ZXJjZXB0b3IiLCJpbnZva2VBcGkiLCJhcGkiLCJwYXJhbXMiLCJpbnZva2UiLCJwcm9taXNlSW50ZXJjZXB0b3IiLCJjYXRjaCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJ0ZXN0IiwiaXNTeW5jQXBpIiwiaXNDYWxsYmFja0FwaSIsImhhbmRsZVByb21pc2UiLCJlcnIiLCJzaG91bGRQcm9taXNlIiwiZmluYWxseSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJyZWFzb24iLCJwcm9taXNpZnkiLCJwcm9taXNlQXBpIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsInJlamVjdCIsImFzc2lnbiIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJyZXN1bHQiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcmNlcHRvcnMiLCJiYXNlQXBpIiwiZnJlZXplIiwiX19wcm90b19fIiwiRXZlbnRDaGFubmVsIiwiaWQiLCJldmVudHMiLCJsaXN0ZW5lciIsImVtaXRDYWNoZSIsIm9uIiwiZXZlbnROYW1lIiwiYXJncyIsImZucyIsIm9wdCIsImFwcGx5IiwiZmlsdGVyIiwidHlwZSIsIl9hZGRMaXN0ZW5lciIsIl9jbGVhckNhY2hlIiwiY2FjaGVBcmdzIiwiZW1pdCIsInNoaWZ0IiwiZXZlbnRDaGFubmVscyIsImV2ZW50Q2hhbm5lbFN0YWNrIiwiaW5pdEV2ZW50Q2hhbm5lbCIsImV2ZW50Q2hhbm5lbCIsImdldEV2ZW50Q2hhbm5lbCIsIm5hdmlnYXRlVG8iLCJmcm9tQXJncyIsInRvQXJncyIsInVybCIsImZyb21SZXMiLCJ0b1JlcyIsImZpbmRFeGlzdHNQYWdlSW5kZXgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbiIsInBhZ2UiLCIkcGFnZSIsImZ1bGxQYXRoIiwicmVkaXJlY3RUbyIsImV4aXN0cyIsImRlbHRhIiwiZXhpc3RzUGFnZUluZGV4IiwicHJldmlld0ltYWdlIiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50IiwiaXNOYU4iLCJ1cmxzIiwiaXRlbSIsImluZGljYXRvciIsImxvb3AiLCJVVUlEX0tFWSIsImRldmljZUlkIiwiYWRkVXVpZCIsInJhbmRvbSIsInNldFN0b3JhZ2UiLCJhZGRTYWZlQXJlYUluc2V0cyIsInNhZmVBcmVhIiwic2FmZUFyZWFJbnNldHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwib05hbWUiLCJuTmFtZSIsImdldFVzZXJQcm9maWxlIiwiY2FuSVVzZSIsInRvZG9zIiwiY2FuSVVzZXMiLCJwcm90b2NvbHMiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwiY29ubmVjdFNvY2tldCIsImNob29zZVZpZGVvIiwiY2FtZXJhIiwic2NhbkNvZGUiLCJvbmx5RnJvbUNhbWVyYSIsInNjYW5UeXBlIiwic3RhcnRBY2NlbGVyb21ldGVyIiwiaW50ZXJ2YWwiLCJzaG93VG9hc3QiLCJpbWFnZSIsIm1hc2siLCJzaG93TG9hZGluZyIsInNob3dNb2RhbCIsImNhbmNlbENvbG9yIiwiY29uZmlybUNvbG9yIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUNvbG9yIiwibG9naW4iLCJzY29wZXMiLCJ0aW1lb3V0IiwiZ2V0VXNlckluZm8iLCJsYW5nIiwicmVxdWVzdFBheW1lbnQiLCJwYXkiLCJvcmRlckluZm8iLCJnZXRGaWxlSW5mbyIsImRpZ2VzdEFsZ29yaXRobSIsIkNBTExCQUNLUyIsInByb2Nlc3NDYWxsYmFjayIsIm1ldGhvZE5hbWUiLCJwcm9jZXNzUmV0dXJuVmFsdWUiLCJwcm9jZXNzQXJncyIsImFyZ3NPcHRpb24iLCJrZWVwRnJvbUFyZ3MiLCJrZXlPcHRpb24iLCJjb25zb2xlIiwid2FybiIsImtlZXBSZXR1cm5WYWx1ZSIsIndyYXBwZXIiLCJwcm90b2NvbCIsImFyZzEiLCJhcmcyIiwidG9kb0FwaXMiLCJUT0RPUyIsImNyZWF0ZVRvZG9BcGkiLCJ0b2RvQXBpIiwiZXJyTXNnIiwicHJvdmlkZXJzIiwib2F1dGgiLCJzaGFyZSIsInBheW1lbnQiLCJnZXRQcm92aWRlciIsInNlcnZpY2UiLCJwcm92aWRlciIsImV4dHJhQXBpIiwiZ2V0RW1pdHRlciIsIkVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiY3R4IiwiJG9uIiwiYXJndW1lbnRzIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJldmVudEFwaSIsImNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciIsIm1lZGlhUXVlcnlPYnNlcnZlciIsIm9yaWVudGF0aW9uIiwib2JzZXJ2ZSIsIm1hdGNoZXMiLCJpdGVtVmFsdWUiLCJkaXNjb25uZWN0IiwiTVBQYWdlIiwiUGFnZSIsIk1QQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY3VzdG9taXplUkUiLCJjdXN0b21pemUiLCJpbml0VHJpZ2dlckV2ZW50IiwibXBJbnN0YW5jZSIsIm9sZFRyaWdnZXJFdmVudCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiaW5pdEhvb2siLCJvbGRIb29rIiwiX18kd3JhcHBlcmVkIiwiYWZ0ZXIiLCJQQUdFX0VWRU5UX0hPT0tTIiwiaW5pdE1vY2tzIiwidm0iLCJtb2NrcyIsIiRtcCIsIm1wVHlwZSIsIm1vY2siLCJoYXNIb29rIiwidnVlT3B0aW9ucyIsImRlZmF1bHQiLCJleHRlbmRPcHRpb25zIiwic3VwZXIiLCJtaXhpbnMiLCJmaW5kIiwibWl4aW4iLCJpbml0SG9va3MiLCJtcE9wdGlvbnMiLCIkdm0iLCJfX2NhbGxfaG9vayIsImluaXRWdWVDb21wb25lbnQiLCJWdWVDb21wb25lbnQiLCJleHRlbmQiLCJpbml0U2xvdHMiLCJ2dWVTbG90cyIsIiRzbG90cyIsInNsb3ROYW1lIiwiJHNjb3BlZFNsb3RzIiwiaW5pdFZ1ZUlkcyIsInZ1ZUlkcyIsIl8kdnVlSWQiLCJfJHZ1ZVBpZCIsImluaXREYXRhIiwiY29udGV4dCIsIm1ldGhvZHMiLCJlIiwicHJvY2VzcyIsIlZVRV9BUFBfREVCVUciLCJzdHJpbmdpZnkiLCJfX2xpZmVjeWNsZV9ob29rc19fIiwiUFJPUF9UWVBFUyIsIlN0cmluZyIsIkJvb2xlYW4iLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwibmV3VmFsIiwib2xkVmFsIiwiaW5pdEJlaGF2aW9ycyIsImluaXRCZWhhdmlvciIsInZ1ZUJlaGF2aW9ycyIsImJlaGF2aW9ycyIsInZ1ZUV4dGVuZHMiLCJleHRlbmRzIiwidnVlTWl4aW5zIiwidnVlUHJvcHMiLCJwcm9wcyIsImJlaGF2aW9yIiwicHJvcGVydGllcyIsImluaXRQcm9wZXJ0aWVzIiwidnVlTWl4aW4iLCJwYXJzZVByb3BUeXBlIiwiZGVmYXVsdFZhbHVlIiwiZmlsZSIsImlzQmVoYXZpb3IiLCJ2dWVJZCIsImdlbmVyaWMiLCJzZXREYXRhIiwib3B0cyIsIndyYXBwZXIkMSIsIm1wIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkZXRhaWwiLCJtYXJrZXJJZCIsImdldEV4dHJhVmFsdWUiLCJkYXRhUGF0aHNBcnJheSIsImRhdGFQYXRoQXJyYXkiLCJkYXRhUGF0aCIsInByb3BQYXRoIiwidmFsdWVQYXRoIiwidkZvciIsImlzSW50ZWdlciIsInN1YnN0ciIsIl9fZ2V0X3ZhbHVlIiwidkZvckl0ZW0iLCJ2Rm9yS2V5IiwicHJvY2Vzc0V2ZW50RXh0cmEiLCJleHRyYSIsImV4dHJhT2JqIiwiX19hcmdzX18iLCJnZXRPYmpCeUFycmF5IiwiYXJyIiwiZWxlbWVudCIsInByb2Nlc3NFdmVudEFyZ3MiLCJpc0N1c3RvbSIsImlzQ3VzdG9tTVBFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tVHlwZSIsInJldCIsImFyZyIsIk9OQ0UiLCJDVVNUT00iLCJpc01hdGNoRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwib3B0VHlwZSIsImdldENvbnRleHRWbSIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsIiRzY29wZSIsImhhbmRsZUV2ZW50IiwiZXZlbnRPcHRzIiwiZXZlbnRPcHQiLCJldmVudHNBcnJheSIsImNoYXJBdCIsImlzT25jZSIsImV2ZW50QXJyYXkiLCJoYW5kbGVyQ3R4IiwiaGFuZGxlciIsIm9uY2UiLCJpbml0RXZlbnRDaGFubmVsJDEiLCJnZXRPcGVuZXJFdmVudENoYW5uZWwiLCJfX2V2ZW50Q2hhbm5lbF9fIiwiY2FsbEhvb2siLCJfX2lkX18iLCJpbml0U2NvcGVkU2xvdHNQYXJhbXMiLCJjZW50ZXIiLCJwYXJlbnRzIiwiJGhhc1Njb3BlZFNsb3RzUGFyYW1zIiwiaGFzIiwiJGdldFNjb3BlZFNsb3RzUGFyYW1zIiwib2JqZWN0IiwiJHNldFNjb3BlZFNsb3RzUGFyYW1zIiwicHJvcHNEYXRhIiwiJGZvcmNlVXBkYXRlIiwiZGVzdHJveWVkIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsImJlZm9yZUNyZWF0ZSIsImdldEFwcCIsImFwcCIsIiRpMThuIiwiX2kxOG4iLCJhcHBPcHRpb25zIiwib25MYXVuY2giLCJnbG9iYWxEYXRhIiwiX2lzTW91bnRlZCIsImZpbmRWbUJ5VnVlSWQiLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwicGFyZW50Vm0iLCJCZWhhdmlvciIsImhhbmRsZUxpbmsiLCJwYXJlbnQiLCJpc1BhZ2UiLCJfX25vZGVpZF9fIiwiX19ub2RlSWRfXyIsIm1pbm9yVmVyc2lvbiIsIlNES1ZlcnNpb24iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIiRyZWZzIiwiY29tcG9uZW50cyIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJmb3JDb21wb25lbnRzIiwiaW5zdGFuY2VzIiwiaW5pdFJlbGF0aW9uIiwibm9kZUlkIiwid2Vidmlld0lkIiwiX193ZWJ2aWV3SWRfXyIsImhhbmRsZUxpbmskMSIsIiRyb290IiwicGFyc2VBcHAiLCJfJGZhbGxiYWNrIiwiY3JlYXRlZCIsInJvdXRlIiwiX19yb3V0ZV9fIiwiX19pbml0X2luamVjdGlvbnMiLCJfX2luaXRfcHJvdmlkZSIsImNyZWF0ZUFwcCIsIkFwcCIsImVuY29kZVJlc2VydmVSRSIsImVuY29kZVJlc2VydmVSZXBsYWNlciIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsInZhbCIsInVuZGVmaW5lZCIsInZhbDIiLCJ4IiwicGFyc2VCYXNlQ29tcG9uZW50IiwidnVlQ29tcG9uZW50T3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsImNvbXBvbmVudE9wdGlvbnMiLCJfX2ZpbGUiLCJsaWZldGltZXMiLCJhdHRhY2hlZCIsIiRtb3VudCIsInJlYWR5IiwiZGV0YWNoZWQiLCIkZGVzdHJveSIsInBhZ2VMaWZldGltZXMiLCJzaG93IiwiaGlkZSIsInJlc2l6ZSIsInNpemUiLCJfX2wiLCJfX2UiLCJleHRlcm5hbENsYXNzZXMiLCJ3eHNDYWxsTWV0aG9kcyIsImNhbGxNZXRob2QiLCJwYXJzZUNvbXBvbmVudCIsImhvb2tzJDEiLCJwYXJzZUJhc2VQYWdlIiwidnVlUGFnZU9wdGlvbnMiLCJwYWdlT3B0aW9ucyIsIm9uTG9hZCIsInF1ZXJ5IiwiY29weVF1ZXJ5IiwiaXMiLCJwYXJzZVBhZ2UiLCJjcmVhdGVQYWdlIiwiY3JlYXRlQ29tcG9uZW50IiwiY3JlYXRlU3VicGFja2FnZUFwcCIsImFsbG93RGVmYXVsdCIsIm9uU2hvdyIsIm9uQXBwU2hvdyIsIm9uSGlkZSIsIm9uQXBwSGlkZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiY3JlYXRlUGx1Z2luIiwiY2FuSVVzZUFwaSIsImFwaU5hbWUiLCJ1bmkiLCJQcm94eSIsInNldCIsInVuaSQxIiwic3RhdGUiLCJpc1RoZW1lIiwidGhlbWVBdXRvIiwidGhlbWUiLCJtYWluIiwiaG9tZVBhdGgiLCJ0YWJiYXIiLCJ0aXRsZSIsImljb24iLCJjdXJJY29uIiwiZ2V0dGVycyIsImdldEN1c3RvbVRoZW1lIiwiZ2V0Q3VzdG9tTWFpbiIsImdldFRhYmJhciIsIm11dGF0aW9ucyIsImFjdGlvbnMiLCJzZXRUYXJnZXQiLCJsb2ciLCIkTW9kYWwiLCJtb2RhbCIsIiR1dGlsIiwidXRpbCIsImdldFN0b3JhZ2UiLCJjb21taXQiLCJDb25maXJtIiwibXNnIiwiYnRuVGV4dCIsIkRpYWxvZyIsImNvbmZpcm0iLCJpMThuIiwidCIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2xvc2VPblBvcHN0YXRlIiwiQWxlcnQiLCJidG4iLCJhbGVydCIsImNsb3NlT25DbGlja092ZXJsYXkiLCJUb2FzdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJMb2FkaW5nIiwiZWwiLCJsb2FkaW5nIiwiZm9yYmlkQ2xpY2siLCJnZXRDb250YWluZXIiLCJDbG9zZSIsImNsZWFyIiwiZ2V0VXVpZCIsImdldENvbG9yIiwiY29sb3JBcnIiLCJzaG93VGlwcyIsImNvcHlUZXh0IiwidGV4dCIsInNldENsaXBib2FyZERhdGEiLCJtb2R1bGUiLCJleHBvcnRzIiwiX3VpZCIsInN5c19zY3JvbGxUb3AiLCJzeXNfYXRQYWdlIiwic3lzX2F0SG9tZSIsInN5c19sYXllciIsIndhdGNoIiwiY29tcHV0ZWQiLCJzeXNfdGhlbWVBdXRvIiwic3lzX3RoZW1lIiwic3lzX21haW4iLCJzeXNfaW5mbyIsInN5c19zdGF0dXNCYXIiLCJzeXNfaG9tZVBhdGgiLCJzeXNfbmF2QmFyIiwic3lzX2NhcHN1bGUiLCJfb25TaG93Iiwib25SZWFjaEJvdHRvbSIsIm1vdW50ZWQiLCJfb25IaWRlIiwiX29uUmVhY2hCb3R0b20iLCJvblJlYWR5Iiwib25QYWdlU2Nyb2xsIiwic2Nyb2xsVG9wIiwiX2JhY2tQYWdlIiwiX3RvSG9tZSIsIm5hdmlnYXRlQmFjayIsInN3aXRjaFRhYiIsImFwcE1peGluIiwib25TaGFyZVRpbWVsaW5lIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJtZW51cyIsIl9zZWxmIiwid2luZG93IiwiV29ya2VyR2xvYmFsU2NvcGUiLCJzZWxmIiwiUHJpc20iLCJ1IiwibiIsIkMiLCJtYW51YWwiLCJkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIiLCJjb250ZW50IiwiYWxpYXMiLCJvYmpJZCIsIl9faWQiLCJjbG9uZSIsInIiLCJhIiwibyIsImdldExhbmd1YWdlIiwiY2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJjdXJyZW50U2NyaXB0IiwiZG9jdW1lbnQiLCJleGVjIiwic3RhY2siLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNyYyIsImxhbmd1YWdlcyIsImluc2VydEJlZm9yZSIsImwiLCJzIiwiREZTIiwicGx1Z2lucyIsImhpZ2hsaWdodEFsbCIsImhpZ2hsaWdodEFsbFVuZGVyIiwiY29udGFpbmVyIiwic2VsZWN0b3IiLCJydW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWdobGlnaHRFbGVtZW50IiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwibGFuZ3VhZ2UiLCJncmFtbWFyIiwiY29kZSIsInRleHRDb250ZW50IiwiaGlnaGxpZ2h0ZWRDb2RlIiwiaW5uZXJIVE1MIiwiV29ya2VyIiwiZmlsZW5hbWUiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltbWVkaWF0ZUNsb3NlIiwiaGlnaGxpZ2h0IiwidG9rZW5zIiwidG9rZW5pemUiLCJtYXRjaEdyYW1tYXIiLCJnIiwiaW5zaWRlIiwiZiIsImxvb2tiZWhpbmQiLCJoIiwiZ3JlZWR5IiwiZCIsIm0iLCJwYXR0ZXJuIiwiZ2xvYmFsIiwicCIsIlJlZ0V4cCIsInNvdXJjZSIsInkiLCJ2IiwiayIsImxhc3RJbmRleCIsIk8iLCJiIiwidyIsIkEiLCJQIiwiUyIsImoiLCJOIiwiRSIsIkwiLCJyZXN0IiwiYWxsIiwiYWRkIiwiVG9rZW4iLCJ0YWciLCJjbGFzc2VzIiwiYXR0cmlidXRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsImhhc0F0dHJpYnV0ZSIsInJlYWR5U3RhdGUiLCJkZWZlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtYXJrdXAiLCJjb21tZW50IiwicHJvbG9nIiwiZG9jdHlwZSIsImNkYXRhIiwicHVuY3R1YXRpb24iLCJuYW1lc3BhY2UiLCJlbnRpdHkiLCJ4bWwiLCJodG1sIiwibWF0aG1sIiwic3ZnIiwiY3NzIiwiYXRydWxlIiwicnVsZSIsImZ1bmN0aW9uIiwic3RyaW5nIiwicHJvcGVydHkiLCJpbXBvcnRhbnQiLCJhZGRJbmxpbmVkIiwiY2xpa2UiLCJrZXl3b3JkIiwiYm9vbGVhbiIsIm9wZXJhdG9yIiwiamF2YXNjcmlwdCIsInJlZ2V4IiwicGFyYW1ldGVyIiwiY29uc3RhbnQiLCJpbnRlcnBvbGF0aW9uIiwianMiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJzdGF0dXNCYXJIZWlnaHQiLCJjYXBzdWxlIiwiZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpZHRoIiwic2V0VGhlbWUiLCJzZXRTdG9yYWdlU3luYyIsInNldE1haW4iLCJtb2R1bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FSQUFBLHFFOztBQUVBLFNBQVNBLGdCQUFULENBQTJCQyxHQUEzQixFQUFnQztBQUM5QixTQUFPQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDRixHQUFELENBQUosQ0FBVUcsS0FBVixDQUFnQixFQUFoQixFQUFvQkMsR0FBcEIsQ0FBd0IsVUFBVUMsQ0FBVixFQUFhO0FBQzdELFdBQU8sTUFBTSxDQUFDLE9BQU9BLENBQUMsQ0FBQ0MsVUFBRixDQUFhLENBQWIsRUFBZ0JDLFFBQWhCLENBQXlCLEVBQXpCLENBQVIsRUFBc0NDLEtBQXRDLENBQTRDLENBQUMsQ0FBN0MsQ0FBYjtBQUNELEdBRnlCLEVBRXZCQyxJQUZ1QixDQUVsQixFQUZrQixDQUFELENBQXpCO0FBR0Q7O0FBRUQsU0FBU0Msa0JBQVQsR0FBK0I7QUFDN0IsTUFBTUMsS0FBSyxHQUFLQyxFQUFGLENBQU1DLGNBQU4sQ0FBcUIsY0FBckIsS0FBd0MsRUFBdEQ7QUFDQSxNQUFNQyxRQUFRLEdBQUdILEtBQUssQ0FBQ1IsS0FBTixDQUFZLEdBQVosQ0FBakI7QUFDQSxNQUFJLENBQUNRLEtBQUQsSUFBVUcsUUFBUSxDQUFDQyxNQUFULEtBQW9CLENBQWxDLEVBQXFDO0FBQ25DLFdBQU87QUFDTEMsU0FBRyxFQUFFLElBREE7QUFFTEMsVUFBSSxFQUFFLEVBRkQ7QUFHTEMsZ0JBQVUsRUFBRSxFQUhQO0FBSUxDLGtCQUFZLEVBQUUsQ0FKVCxFQUFQOztBQU1EO0FBQ0QsTUFBSUMsUUFBSjtBQUNBLE1BQUk7QUFDRkEsWUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3ZCLGdCQUFnQixDQUFDZSxRQUFRLENBQUMsQ0FBRCxDQUFULENBQTNCLENBQVg7QUFDRCxHQUZELENBRUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2QsVUFBTSxJQUFJQyxLQUFKLENBQVUsd0JBQXdCRCxLQUFLLENBQUNFLE9BQXhDLENBQU47QUFDRDtBQUNETCxVQUFRLENBQUNELFlBQVQsR0FBd0JDLFFBQVEsQ0FBQ00sR0FBVCxHQUFlLElBQXZDO0FBQ0EsU0FBT04sUUFBUSxDQUFDTSxHQUFoQjtBQUNBLFNBQU9OLFFBQVEsQ0FBQ08sR0FBaEI7QUFDQSxTQUFPUCxRQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsVUFBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDeEJBLEtBQUcsQ0FBQ0MsU0FBSixDQUFjQyxZQUFkLEdBQTZCLFVBQVVDLE1BQVYsRUFBa0I7OztBQUd6Q3RCLHNCQUFrQixFQUh1QixDQUUzQ08sSUFGMkMsdUJBRTNDQSxJQUYyQztBQUk3QyxXQUFPQSxJQUFJLENBQUNnQixPQUFMLENBQWFELE1BQWIsSUFBdUIsQ0FBQyxDQUEvQjtBQUNELEdBTEQ7QUFNQUgsS0FBRyxDQUFDQyxTQUFKLENBQWNJLGtCQUFkLEdBQW1DLFVBQVVDLFlBQVYsRUFBd0I7OztBQUdyRHpCLHNCQUFrQixFQUhtQyxDQUV2RFEsVUFGdUQsd0JBRXZEQSxVQUZ1RDtBQUl6RCxXQUFPLEtBQUthLFlBQUwsQ0FBa0IsT0FBbEIsS0FBOEJiLFVBQVUsQ0FBQ2UsT0FBWCxDQUFtQkUsWUFBbkIsSUFBbUMsQ0FBQyxDQUF6RTtBQUNELEdBTEQ7QUFNQU4sS0FBRyxDQUFDQyxTQUFKLENBQWNNLGVBQWQsR0FBZ0MsWUFBWTs7O0FBR3RDMUIsc0JBQWtCLEVBSG9CLENBRXhDUyxZQUZ3Qyx3QkFFeENBLFlBRndDO0FBSTFDLFdBQU9BLFlBQVksR0FBR2tCLElBQUksQ0FBQ0MsR0FBTCxFQUF0QjtBQUNELEdBTEQ7QUFNRDs7QUFFRCxJQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ1YsU0FBUCxDQUFpQnZCLFFBQW5DO0FBQ0EsSUFBTWtDLGNBQWMsR0FBR0QsTUFBTSxDQUFDVixTQUFQLENBQWlCVyxjQUF4Qzs7QUFFQSxTQUFTQyxJQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakIsU0FBTyxPQUFPQSxFQUFQLEtBQWMsVUFBckI7QUFDRDs7QUFFRCxTQUFTQyxLQUFULENBQWdCNUMsR0FBaEIsRUFBcUI7QUFDbkIsU0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBdEI7QUFDRDs7QUFFRCxTQUFTNkMsYUFBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFDM0IsU0FBT1AsU0FBUyxDQUFDUSxJQUFWLENBQWVELEdBQWYsTUFBd0IsaUJBQS9CO0FBQ0Q7O0FBRUQsU0FBU0UsTUFBVCxDQUFpQkYsR0FBakIsRUFBc0JHLEdBQXRCLEVBQTJCO0FBQ3pCLFNBQU9SLGNBQWMsQ0FBQ00sSUFBZixDQUFvQkQsR0FBcEIsRUFBeUJHLEdBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxJQUFULEdBQWlCLENBQUU7O0FBRW5COzs7QUFHQSxTQUFTQyxNQUFULENBQWlCUixFQUFqQixFQUFxQjtBQUNuQixNQUFNUyxLQUFLLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLElBQWQsQ0FBZDtBQUNBLFNBQU8sU0FBU0MsUUFBVCxDQUFtQnRELEdBQW5CLEVBQXdCO0FBQzdCLFFBQU11RCxHQUFHLEdBQUdILEtBQUssQ0FBQ3BELEdBQUQsQ0FBakI7QUFDQSxXQUFPdUQsR0FBRyxLQUFLSCxLQUFLLENBQUNwRCxHQUFELENBQUwsR0FBYTJDLEVBQUUsQ0FBQzNDLEdBQUQsQ0FBcEIsQ0FBVjtBQUNELEdBSEQ7QUFJRDs7QUFFRDs7O0FBR0EsSUFBTXdELFVBQVUsR0FBRyxRQUFuQjtBQUNBLElBQU1DLFFBQVEsR0FBR04sTUFBTSxDQUFDLFVBQUNuRCxHQUFELEVBQVM7QUFDL0IsU0FBT0EsR0FBRyxDQUFDMEQsT0FBSixDQUFZRixVQUFaLEVBQXdCLFVBQUNHLENBQUQsRUFBSXRELENBQUosVUFBVUEsQ0FBQyxHQUFHQSxDQUFDLENBQUN1RCxXQUFGLEVBQUgsR0FBcUIsRUFBaEMsRUFBeEIsQ0FBUDtBQUNELENBRnNCLENBQXZCOztBQUlBLElBQU1DLEtBQUssR0FBRztBQUNaLFFBRFk7QUFFWixTQUZZO0FBR1osTUFIWTtBQUlaLFVBSlk7QUFLWixhQUxZLENBQWQ7OztBQVFBLElBQU1DLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7O0FBRUEsU0FBU0MsU0FBVCxDQUFvQkMsU0FBcEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQ3ZDLE1BQU1DLEdBQUcsR0FBR0QsUUFBUTtBQUNoQkQsV0FBUztBQUNQQSxXQUFTLENBQUNHLE1BQVYsQ0FBaUJGLFFBQWpCLENBRE87QUFFUEcsT0FBSyxDQUFDQyxPQUFOLENBQWNKLFFBQWQ7QUFDRUEsVUFERixHQUNhLENBQUNBLFFBQUQsQ0FKQztBQUtoQkQsV0FMSjtBQU1BLFNBQU9FLEdBQUc7QUFDTkksYUFBVyxDQUFDSixHQUFELENBREw7QUFFTkEsS0FGSjtBQUdEOztBQUVELFNBQVNJLFdBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLE1BQU1MLEdBQUcsR0FBRyxFQUFaO0FBQ0EsT0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUN6RCxNQUExQixFQUFrQzBELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSU4sR0FBRyxDQUFDbEMsT0FBSixDQUFZdUMsS0FBSyxDQUFDQyxDQUFELENBQWpCLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaENOLFNBQUcsQ0FBQ08sSUFBSixDQUFTRixLQUFLLENBQUNDLENBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFDRCxTQUFPTixHQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsVUFBVCxDQUFxQkgsS0FBckIsRUFBNEJJLElBQTVCLEVBQWtDO0FBQ2hDLE1BQU1DLEtBQUssR0FBR0wsS0FBSyxDQUFDdkMsT0FBTixDQUFjMkMsSUFBZCxDQUFkO0FBQ0EsTUFBSUMsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkwsU0FBSyxDQUFDTSxNQUFOLENBQWFELEtBQWIsRUFBb0IsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQVNFLG9CQUFULENBQStCQyxXQUEvQixFQUE0Q0MsTUFBNUMsRUFBb0Q7QUFDbER6QyxRQUFNLENBQUMwQyxJQUFQLENBQVlELE1BQVosRUFBb0JFLE9BQXBCLENBQTRCLFVBQUFQLElBQUksRUFBSTtBQUNsQyxRQUFJZixLQUFLLENBQUM1QixPQUFOLENBQWMyQyxJQUFkLE1BQXdCLENBQUMsQ0FBekIsSUFBOEJsQyxJQUFJLENBQUN1QyxNQUFNLENBQUNMLElBQUQsQ0FBUCxDQUF0QyxFQUFzRDtBQUNwREksaUJBQVcsQ0FBQ0osSUFBRCxDQUFYLEdBQW9CWixTQUFTLENBQUNnQixXQUFXLENBQUNKLElBQUQsQ0FBWixFQUFvQkssTUFBTSxDQUFDTCxJQUFELENBQTFCLENBQTdCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU1EscUJBQVQsQ0FBZ0NKLFdBQWhDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFJLENBQUNELFdBQUQsSUFBZ0IsQ0FBQ0MsTUFBckIsRUFBNkI7QUFDM0I7QUFDRDtBQUNEekMsUUFBTSxDQUFDMEMsSUFBUCxDQUFZRCxNQUFaLEVBQW9CRSxPQUFwQixDQUE0QixVQUFBUCxJQUFJLEVBQUk7QUFDbEMsUUFBSWYsS0FBSyxDQUFDNUIsT0FBTixDQUFjMkMsSUFBZCxNQUF3QixDQUFDLENBQXpCLElBQThCbEMsSUFBSSxDQUFDdUMsTUFBTSxDQUFDTCxJQUFELENBQVAsQ0FBdEMsRUFBc0Q7QUFDcERELGdCQUFVLENBQUNLLFdBQVcsQ0FBQ0osSUFBRCxDQUFaLEVBQW9CSyxNQUFNLENBQUNMLElBQUQsQ0FBMUIsQ0FBVjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVELFNBQVNTLGNBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDTCxNQUFqQyxFQUF5QztBQUN2QyxNQUFJLE9BQU9LLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJ6QyxhQUFhLENBQUNvQyxNQUFELENBQS9DLEVBQXlEO0FBQ3ZERix3QkFBb0IsQ0FBQ2hCLGtCQUFrQixDQUFDdUIsTUFBRCxDQUFsQixLQUErQnZCLGtCQUFrQixDQUFDdUIsTUFBRCxDQUFsQixHQUE2QixFQUE1RCxDQUFELEVBQWtFTCxNQUFsRSxDQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJcEMsYUFBYSxDQUFDeUMsTUFBRCxDQUFqQixFQUEyQjtBQUNoQ1Asd0JBQW9CLENBQUNqQixrQkFBRCxFQUFxQndCLE1BQXJCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxpQkFBVCxDQUE0QkQsTUFBNUIsRUFBb0NMLE1BQXBDLEVBQTRDO0FBQzFDLE1BQUksT0FBT0ssTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixRQUFJekMsYUFBYSxDQUFDb0MsTUFBRCxDQUFqQixFQUEyQjtBQUN6QkcsMkJBQXFCLENBQUNyQixrQkFBa0IsQ0FBQ3VCLE1BQUQsQ0FBbkIsRUFBNkJMLE1BQTdCLENBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT2xCLGtCQUFrQixDQUFDdUIsTUFBRCxDQUF6QjtBQUNEO0FBQ0YsR0FORCxNQU1PLElBQUl6QyxhQUFhLENBQUN5QyxNQUFELENBQWpCLEVBQTJCO0FBQ2hDRix5QkFBcUIsQ0FBQ3RCLGtCQUFELEVBQXFCd0IsTUFBckIsQ0FBckI7QUFDRDtBQUNGOztBQUVELFNBQVNFLFdBQVQsQ0FBc0JaLElBQXRCLEVBQTRCO0FBQzFCLFNBQU8sVUFBVWEsSUFBVixFQUFnQjtBQUNyQixXQUFPYixJQUFJLENBQUNhLElBQUQsQ0FBSixJQUFjQSxJQUFyQjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTQyxTQUFULENBQW9CNUMsR0FBcEIsRUFBeUI7QUFDdkIsU0FBTyxDQUFDLENBQUNBLEdBQUYsS0FBVSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPQSxHQUFQLEtBQWUsVUFBcEQsS0FBbUUsT0FBT0EsR0FBRyxDQUFDNkMsSUFBWCxLQUFvQixVQUE5RjtBQUNEOztBQUVELFNBQVNDLEtBQVQsQ0FBZ0JwQixLQUFoQixFQUF1QmlCLElBQXZCLEVBQTZCO0FBQzNCLE1BQUlJLE9BQU8sR0FBRyxLQUFkO0FBQ0EsT0FBSyxJQUFJcEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDekQsTUFBMUIsRUFBa0MwRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQU1HLElBQUksR0FBR0osS0FBSyxDQUFDQyxDQUFELENBQWxCO0FBQ0EsUUFBSW9CLE9BQUosRUFBYTtBQUNYQSxhQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlAsV0FBVyxDQUFDWixJQUFELENBQTNCLENBQVY7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFNVCxHQUFHLEdBQUdTLElBQUksQ0FBQ2EsSUFBRCxDQUFoQjtBQUNBLFVBQUlDLFNBQVMsQ0FBQ3ZCLEdBQUQsQ0FBYixFQUFvQjtBQUNsQjBCLGVBQU8sR0FBR0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCNUIsR0FBaEIsQ0FBVjtBQUNEO0FBQ0QsVUFBSUEsR0FBRyxLQUFLLEtBQVosRUFBbUI7QUFDakIsZUFBTztBQUNMd0IsY0FESyxrQkFDRyxDQUFFLENBREwsRUFBUDs7QUFHRDtBQUNGO0FBQ0Y7QUFDRCxTQUFPRSxPQUFPLElBQUk7QUFDaEJGLFFBRGdCLGdCQUNWSyxRQURVLEVBQ0E7QUFDZCxhQUFPQSxRQUFRLENBQUNQLElBQUQsQ0FBZjtBQUNELEtBSGUsRUFBbEI7O0FBS0Q7O0FBRUQsU0FBU1EsY0FBVCxDQUF5QmpCLFdBQXpCLEVBQW9ELEtBQWRrQixPQUFjLHVFQUFKLEVBQUk7QUFDbEQsR0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixVQUFwQixFQUFnQ2YsT0FBaEMsQ0FBd0MsVUFBQWdCLElBQUksRUFBSTtBQUM5QyxRQUFJOUIsS0FBSyxDQUFDQyxPQUFOLENBQWNVLFdBQVcsQ0FBQ21CLElBQUQsQ0FBekIsQ0FBSixFQUFzQztBQUNwQyxVQUFNQyxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0MsSUFBRCxDQUEzQjtBQUNBRCxhQUFPLENBQUNDLElBQUQsQ0FBUCxHQUFnQixTQUFTRSxtQkFBVCxDQUE4QmxDLEdBQTlCLEVBQW1DO0FBQ2pEeUIsYUFBSyxDQUFDWixXQUFXLENBQUNtQixJQUFELENBQVosRUFBb0JoQyxHQUFwQixDQUFMLENBQThCd0IsSUFBOUIsQ0FBbUMsVUFBQ3hCLEdBQUQsRUFBUztBQUMxQztBQUNBLGlCQUFPekIsSUFBSSxDQUFDMEQsV0FBRCxDQUFKLElBQXFCQSxXQUFXLENBQUNqQyxHQUFELENBQWhDLElBQXlDQSxHQUFoRDtBQUNELFNBSEQ7QUFJRCxPQUxEO0FBTUQ7QUFDRixHQVZEO0FBV0EsU0FBTytCLE9BQVA7QUFDRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE2QmhCLE1BQTdCLEVBQXFDaUIsV0FBckMsRUFBa0Q7QUFDaEQsTUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxNQUFJbkMsS0FBSyxDQUFDQyxPQUFOLENBQWNSLGtCQUFrQixDQUFDeUMsV0FBakMsQ0FBSixFQUFtRDtBQUNqREMsb0JBQWdCLENBQUM5QixJQUFqQixPQUFBOEIsZ0JBQWdCLHFCQUFTMUMsa0JBQWtCLENBQUN5QyxXQUE1QixFQUFoQjtBQUNEO0FBQ0QsTUFBTXZCLFdBQVcsR0FBR2pCLGtCQUFrQixDQUFDdUIsTUFBRCxDQUF0QztBQUNBLE1BQUlOLFdBQVcsSUFBSVgsS0FBSyxDQUFDQyxPQUFOLENBQWNVLFdBQVcsQ0FBQ3VCLFdBQTFCLENBQW5CLEVBQTJEO0FBQ3pEQyxvQkFBZ0IsQ0FBQzlCLElBQWpCLE9BQUE4QixnQkFBZ0IscUJBQVN4QixXQUFXLENBQUN1QixXQUFyQixFQUFoQjtBQUNEO0FBQ0RDLGtCQUFnQixDQUFDckIsT0FBakIsQ0FBeUIsVUFBQVAsSUFBSSxFQUFJO0FBQy9CMkIsZUFBVyxHQUFHM0IsSUFBSSxDQUFDMkIsV0FBRCxDQUFKLElBQXFCQSxXQUFuQztBQUNELEdBRkQ7QUFHQSxTQUFPQSxXQUFQO0FBQ0Q7O0FBRUQsU0FBU0Usc0JBQVQsQ0FBaUNuQixNQUFqQyxFQUF5QztBQUN2QyxNQUFNTixXQUFXLEdBQUd4QyxNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQXBCO0FBQ0FiLFFBQU0sQ0FBQzBDLElBQVAsQ0FBWXBCLGtCQUFaLEVBQWdDcUIsT0FBaEMsQ0FBd0MsVUFBQVAsSUFBSSxFQUFJO0FBQzlDLFFBQUlBLElBQUksS0FBSyxhQUFiLEVBQTRCO0FBQzFCSSxpQkFBVyxDQUFDSixJQUFELENBQVgsR0FBb0JkLGtCQUFrQixDQUFDYyxJQUFELENBQWxCLENBQXlCcEUsS0FBekIsRUFBcEI7QUFDRDtBQUNGLEdBSkQ7QUFLQSxNQUFNa0csaUJBQWlCLEdBQUczQyxrQkFBa0IsQ0FBQ3VCLE1BQUQsQ0FBNUM7QUFDQSxNQUFJb0IsaUJBQUosRUFBdUI7QUFDckJsRSxVQUFNLENBQUMwQyxJQUFQLENBQVl3QixpQkFBWixFQUErQnZCLE9BQS9CLENBQXVDLFVBQUFQLElBQUksRUFBSTtBQUM3QyxVQUFJQSxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUMxQkksbUJBQVcsQ0FBQ0osSUFBRCxDQUFYLEdBQW9CLENBQUNJLFdBQVcsQ0FBQ0osSUFBRCxDQUFYLElBQXFCLEVBQXRCLEVBQTBCUixNQUExQixDQUFpQ3NDLGlCQUFpQixDQUFDOUIsSUFBRCxDQUFsRCxDQUFwQjtBQUNEO0FBQ0YsS0FKRDtBQUtEO0FBQ0QsU0FBT0ksV0FBUDtBQUNEOztBQUVELFNBQVMyQixTQUFULENBQW9CckIsTUFBcEIsRUFBNEJzQixHQUE1QixFQUFpQ1YsT0FBakMsRUFBcUQsbUNBQVJXLE1BQVEsdUVBQVJBLE1BQVE7QUFDbkQsTUFBTTdCLFdBQVcsR0FBR3lCLHNCQUFzQixDQUFDbkIsTUFBRCxDQUExQztBQUNBLE1BQUlOLFdBQVcsSUFBSXhDLE1BQU0sQ0FBQzBDLElBQVAsQ0FBWUYsV0FBWixFQUF5QmpFLE1BQTVDLEVBQW9EO0FBQ2xELFFBQUlzRCxLQUFLLENBQUNDLE9BQU4sQ0FBY1UsV0FBVyxDQUFDOEIsTUFBMUIsQ0FBSixFQUF1QztBQUNyQyxVQUFNM0MsR0FBRyxHQUFHeUIsS0FBSyxDQUFDWixXQUFXLENBQUM4QixNQUFiLEVBQXFCWixPQUFyQixDQUFqQjtBQUNBLGFBQU8vQixHQUFHLENBQUN3QixJQUFKLENBQVMsVUFBQ08sT0FBRCxFQUFhO0FBQzNCLGVBQU9VLEdBQUcsTUFBSCxVQUFJWCxjQUFjLENBQUNqQixXQUFELEVBQWNrQixPQUFkLENBQWxCLFNBQTZDVyxNQUE3QyxFQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FMRCxNQUtPO0FBQ0wsYUFBT0QsR0FBRyxNQUFILFVBQUlYLGNBQWMsQ0FBQ2pCLFdBQUQsRUFBY2tCLE9BQWQsQ0FBbEIsU0FBNkNXLE1BQTdDLEVBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsR0FBRyxNQUFILFVBQUlWLE9BQUosU0FBZ0JXLE1BQWhCLEVBQVA7QUFDRDs7QUFFRCxJQUFNRSxrQkFBa0IsR0FBRztBQUN6QlIsYUFEeUIsdUJBQ1pwQyxHQURZLEVBQ1A7QUFDaEIsUUFBSSxDQUFDdUIsU0FBUyxDQUFDdkIsR0FBRCxDQUFkLEVBQXFCO0FBQ25CLGFBQU9BLEdBQVA7QUFDRDtBQUNELFdBQU9BLEdBQUcsQ0FBQ3dCLElBQUosQ0FBUyxVQUFBeEIsR0FBRyxFQUFJO0FBQ3JCLGFBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDRCxLQUZNLEVBRUo2QyxLQUZJLENBRUUsVUFBQTdDLEdBQUcsRUFBSTtBQUNkLGFBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVY7QUFDRCxLQUpNLENBQVA7QUFLRCxHQVZ3QixFQUEzQjs7O0FBYUEsSUFBTThDLFdBQVc7QUFDZiwwUUFERjs7QUFHQSxJQUFNQyxjQUFjLEdBQUcsa0JBQXZCOztBQUVBO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxxQkFBRCxDQUEzQjs7QUFFQTtBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLHFCQUFELENBQWxCOztBQUVBLElBQU1DLGVBQWUsR0FBRyxVQUF4Qjs7QUFFQSxTQUFTQyxZQUFULENBQXVCbkIsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT2UsY0FBYyxDQUFDSyxJQUFmLENBQW9CcEIsSUFBcEIsS0FBNkJnQixrQkFBa0IsQ0FBQ2xGLE9BQW5CLENBQTJCa0UsSUFBM0IsTUFBcUMsQ0FBQyxDQUExRTtBQUNEO0FBQ0QsU0FBU3FCLFNBQVQsQ0FBb0JyQixJQUFwQixFQUEwQjtBQUN4QixTQUFPYyxXQUFXLENBQUNNLElBQVosQ0FBaUJwQixJQUFqQixLQUEwQmlCLFNBQVMsQ0FBQ25GLE9BQVYsQ0FBa0JrRSxJQUFsQixNQUE0QixDQUFDLENBQTlEO0FBQ0Q7O0FBRUQsU0FBU3NCLGFBQVQsQ0FBd0J0QixJQUF4QixFQUE4QjtBQUM1QixTQUFPa0IsZUFBZSxDQUFDRSxJQUFoQixDQUFxQnBCLElBQXJCLEtBQThCQSxJQUFJLEtBQUssUUFBOUM7QUFDRDs7QUFFRCxTQUFTdUIsYUFBVCxDQUF3QjdCLE9BQXhCLEVBQWlDO0FBQy9CLFNBQU9BLE9BQU8sQ0FBQ0YsSUFBUixDQUFhLFVBQUFGLElBQUksRUFBSTtBQUMxQixXQUFPLENBQUMsSUFBRCxFQUFPQSxJQUFQLENBQVA7QUFDRCxHQUZNO0FBR0p1QixPQUhJLENBR0UsVUFBQVcsR0FBRyxVQUFJLENBQUNBLEdBQUQsQ0FBSixFQUhMLENBQVA7QUFJRDs7QUFFRCxTQUFTQyxhQUFULENBQXdCekIsSUFBeEIsRUFBOEI7QUFDNUI7QUFDRW1CLGNBQVksQ0FBQ25CLElBQUQsQ0FBWjtBQUNBcUIsV0FBUyxDQUFDckIsSUFBRCxDQURUO0FBRUFzQixlQUFhLENBQUN0QixJQUFELENBSGY7QUFJRTtBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxJQUFJLENBQUNMLE9BQU8sQ0FBQ2hFLFNBQVIsQ0FBa0IrRixPQUF2QixFQUFnQztBQUM5Qi9CLFNBQU8sQ0FBQ2hFLFNBQVIsQ0FBa0IrRixPQUFsQixHQUE0QixVQUFVN0IsUUFBVixFQUFvQjtBQUM5QyxRQUFNSCxPQUFPLEdBQUcsS0FBS2lDLFdBQXJCO0FBQ0EsV0FBTyxLQUFLbkMsSUFBTDtBQUNMLGNBQUFvQyxLQUFLLFVBQUlsQyxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JDLFFBQVEsRUFBeEIsRUFBNEJMLElBQTVCLENBQWlDLG9CQUFNb0MsS0FBTixFQUFqQyxDQUFKLEVBREE7QUFFTCxjQUFBQyxNQUFNLFVBQUluQyxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JDLFFBQVEsRUFBeEIsRUFBNEJMLElBQTVCLENBQWlDLFlBQU07QUFDL0MsY0FBTXFDLE1BQU47QUFDRCxPQUZTLENBQUosRUFGRCxDQUFQOztBQU1ELEdBUkQ7QUFTRDs7QUFFRCxTQUFTQyxTQUFULENBQW9COUIsSUFBcEIsRUFBMEJTLEdBQTFCLEVBQStCO0FBQzdCLE1BQUksQ0FBQ2dCLGFBQWEsQ0FBQ3pCLElBQUQsQ0FBbEIsRUFBMEI7QUFDeEIsV0FBT1MsR0FBUDtBQUNEO0FBQ0QsU0FBTyxTQUFTc0IsVUFBVCxHQUE4QyxLQUF6QmhDLE9BQXlCLHVFQUFmLEVBQWUsb0NBQVJXLE1BQVEsNkVBQVJBLE1BQVE7QUFDbkQsUUFBSW5FLElBQUksQ0FBQ3dELE9BQU8sQ0FBQ2lDLE9BQVQsQ0FBSixJQUF5QnpGLElBQUksQ0FBQ3dELE9BQU8sQ0FBQ2tDLElBQVQsQ0FBN0IsSUFBK0MxRixJQUFJLENBQUN3RCxPQUFPLENBQUNtQyxRQUFULENBQXZELEVBQTJFO0FBQ3pFLGFBQU8vQixrQkFBa0IsQ0FBQ0gsSUFBRCxFQUFPUSxTQUFTLE1BQVQsVUFBVVIsSUFBVixFQUFnQlMsR0FBaEIsRUFBcUJWLE9BQXJCLFNBQWlDVyxNQUFqQyxFQUFQLENBQXpCO0FBQ0Q7QUFDRCxXQUFPUCxrQkFBa0IsQ0FBQ0gsSUFBRCxFQUFPdUIsYUFBYSxDQUFDLElBQUk1QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVdUMsTUFBVixFQUFxQjtBQUM3RTNCLGVBQVMsTUFBVCxVQUFVUixJQUFWLEVBQWdCUyxHQUFoQixFQUFxQnBFLE1BQU0sQ0FBQytGLE1BQVAsQ0FBYyxFQUFkLEVBQWtCckMsT0FBbEIsRUFBMkI7QUFDOUNpQyxlQUFPLEVBQUVwQyxPQURxQztBQUU5Q3FDLFlBQUksRUFBRUUsTUFGd0MsRUFBM0IsQ0FBckI7QUFHT3pCLFlBSFA7QUFJRCxLQUw2QyxDQUFELENBQXBCLENBQXpCO0FBTUQsR0FWRDtBQVdEOztBQUVELElBQU0yQixHQUFHLEdBQUcsSUFBWjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLEdBQTFCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQVo7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNkI7Ozs7O0FBS3ZCakksSUFBRSxDQUFDa0ksaUJBQUgsRUFMdUIsQ0FFekJDLFFBRnlCLHlCQUV6QkEsUUFGeUIsQ0FHekJDLFVBSHlCLHlCQUd6QkEsVUFIeUIsQ0FJekJDLFdBSnlCLHlCQUl6QkEsV0FKeUIsRUFLQzs7QUFFNUJOLGFBQVcsR0FBR00sV0FBZDtBQUNBTCxXQUFTLEdBQUdJLFVBQVo7QUFDQU4sT0FBSyxHQUFHSyxRQUFRLEtBQUssS0FBckI7QUFDRDs7QUFFRCxTQUFTRyxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsY0FBekIsRUFBeUM7QUFDdkMsTUFBSVQsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCRSxvQkFBZ0I7QUFDakI7O0FBRURNLFFBQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFELENBQWY7QUFDQSxNQUFJQSxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQixXQUFPLENBQVA7QUFDRDtBQUNELE1BQUlHLE1BQU0sR0FBSUgsTUFBTSxHQUFHVixpQkFBVixJQUFnQ1csY0FBYyxJQUFJVCxXQUFsRCxDQUFiO0FBQ0EsTUFBSVcsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZEEsVUFBTSxHQUFHLENBQUNBLE1BQVY7QUFDRDtBQUNEQSxRQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixNQUFNLEdBQUdkLEdBQXBCLENBQVQ7QUFDQSxNQUFJYyxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQixRQUFJVixTQUFTLEtBQUssQ0FBZCxJQUFtQixDQUFDRixLQUF4QixFQUErQjtBQUM3QlksWUFBTSxHQUFHLENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEEsWUFBTSxHQUFHLEdBQVQ7QUFDRDtBQUNGO0FBQ0QsU0FBT0gsTUFBTSxHQUFHLENBQVQsR0FBYSxDQUFDRyxNQUFkLEdBQXVCQSxNQUE5QjtBQUNEOztBQUVELElBQU1HLFlBQVksR0FBRztBQUNuQjFDLG9CQUFrQixFQUFsQkEsa0JBRG1CLEVBQXJCOzs7QUFJQSxJQUFJMkMsT0FBTyxHQUFHLGFBQWFsSCxNQUFNLENBQUNtSCxNQUFQLENBQWM7QUFDdkNDLFdBQVMsRUFBRSxJQUQ0QjtBQUV2Q1YsUUFBTSxFQUFFQSxNQUYrQjtBQUd2QzdELGdCQUFjLEVBQUVBLGNBSHVCO0FBSXZDRSxtQkFBaUIsRUFBRUEsaUJBSm9CO0FBS3ZDa0UsY0FBWSxFQUFFQSxZQUx5QixFQUFkLENBQTNCLEM7OztBQVFNSSxZO0FBQ0osd0JBQWFDLEVBQWIsRUFBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsUUFBSUYsTUFBSixFQUFZO0FBQ1Z2SCxZQUFNLENBQUMwQyxJQUFQLENBQVk2RSxNQUFaLEVBQW9CNUUsT0FBcEIsQ0FBNEIsVUFBQWdCLElBQUksRUFBSTtBQUNsQyxhQUFJLENBQUMrRCxFQUFMLENBQVEvRCxJQUFSLEVBQWM0RCxNQUFNLENBQUM1RCxJQUFELENBQXBCO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsRzs7QUFFS2dFLGEsRUFBb0Isb0NBQU5DLElBQU0sNkVBQU5BLElBQU07QUFDeEIsVUFBTUMsR0FBRyxHQUFHLEtBQUtMLFFBQUwsQ0FBY0csU0FBZCxDQUFaO0FBQ0EsVUFBSSxDQUFDRSxHQUFMLEVBQVU7QUFDUixlQUFPLENBQUMsS0FBS0osU0FBTCxDQUFlRSxTQUFmLE1BQThCLEtBQUtGLFNBQUwsQ0FBZUUsU0FBZixJQUE0QixFQUExRCxDQUFELEVBQWdFekYsSUFBaEUsQ0FBcUUwRixJQUFyRSxDQUFQO0FBQ0Q7QUFDREMsU0FBRyxDQUFDbEYsT0FBSixDQUFZLFVBQUFtRixHQUFHLEVBQUk7QUFDakJBLFdBQUcsQ0FBQzNILEVBQUosQ0FBTzRILEtBQVAsQ0FBYUQsR0FBRyxDQUFDM0gsRUFBakIsRUFBcUJ5SCxJQUFyQjtBQUNELE9BRkQ7QUFHQSxXQUFLSixRQUFMLENBQWNHLFNBQWQsSUFBMkJFLEdBQUcsQ0FBQ0csTUFBSixDQUFXLFVBQUFGLEdBQUcsVUFBSUEsR0FBRyxDQUFDRyxJQUFKLEtBQWEsTUFBakIsRUFBZCxDQUEzQjtBQUNELEs7O0FBRUdOLGEsRUFBV3hILEUsRUFBSTtBQUNqQixXQUFLK0gsWUFBTCxDQUFrQlAsU0FBbEIsRUFBNkIsSUFBN0IsRUFBbUN4SCxFQUFuQztBQUNBLFdBQUtnSSxXQUFMLENBQWlCUixTQUFqQjtBQUNELEs7O0FBRUtBLGEsRUFBV3hILEUsRUFBSTtBQUNuQixXQUFLK0gsWUFBTCxDQUFrQlAsU0FBbEIsRUFBNkIsTUFBN0IsRUFBcUN4SCxFQUFyQztBQUNBLFdBQUtnSSxXQUFMLENBQWlCUixTQUFqQjtBQUNELEs7O0FBRUlBLGEsRUFBV3hILEUsRUFBSTtBQUNsQixVQUFNMEgsR0FBRyxHQUFHLEtBQUtMLFFBQUwsQ0FBY0csU0FBZCxDQUFaO0FBQ0EsVUFBSSxDQUFDRSxHQUFMLEVBQVU7QUFDUjtBQUNEO0FBQ0QsVUFBSTFILEVBQUosRUFBUTtBQUNOLGFBQUssSUFBSThCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0RixHQUFHLENBQUN0SixNQUF4QixHQUFpQztBQUMvQixjQUFJc0osR0FBRyxDQUFDNUYsQ0FBRCxDQUFILENBQU85QixFQUFQLEtBQWNBLEVBQWxCLEVBQXNCO0FBQ3BCMEgsZUFBRyxDQUFDdkYsTUFBSixDQUFXTCxDQUFYLEVBQWMsQ0FBZDtBQUNBQSxhQUFDO0FBQ0Y7QUFDREEsV0FBQztBQUNGO0FBQ0YsT0FSRCxNQVFPO0FBQ0wsZUFBTyxLQUFLdUYsUUFBTCxDQUFjRyxTQUFkLENBQVA7QUFDRDtBQUNGLEs7O0FBRVlBLGEsRUFBVztBQUN0QixVQUFNUyxTQUFTLEdBQUcsS0FBS1gsU0FBTCxDQUFlRSxTQUFmLENBQWxCO0FBQ0EsVUFBSVMsU0FBSixFQUFlO0FBQ2IsZUFBT0EsU0FBUyxDQUFDN0osTUFBVixHQUFtQixDQUExQixHQUE4QjtBQUM1QixlQUFLOEosSUFBTCxDQUFVTixLQUFWLENBQWdCLElBQWhCLEVBQXNCLENBQUNKLFNBQUQsRUFBWS9GLE1BQVosQ0FBbUJ3RyxTQUFTLENBQUNFLEtBQVYsRUFBbkIsQ0FBdEI7QUFDRDtBQUNGO0FBQ0YsSzs7QUFFYVgsYSxFQUFXTSxJLEVBQU05SCxFLEVBQUk7QUFDakMsT0FBQyxLQUFLcUgsUUFBTCxDQUFjRyxTQUFkLE1BQTZCLEtBQUtILFFBQUwsQ0FBY0csU0FBZCxJQUEyQixFQUF4RCxDQUFELEVBQThEekYsSUFBOUQsQ0FBbUU7QUFDakUvQixVQUFFLEVBQUZBLEVBRGlFO0FBRWpFOEgsWUFBSSxFQUFKQSxJQUZpRSxFQUFuRTs7QUFJRCxLOzs7QUFHSCxJQUFNTSxhQUFhLEdBQUcsRUFBdEI7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsRUFBMUI7O0FBRUEsSUFBSWxCLEVBQUUsR0FBRyxDQUFUOztBQUVBLFNBQVNtQixnQkFBVCxDQUEyQmxCLE1BQTNCLEVBQWlELEtBQWQzRyxLQUFjLHVFQUFOLElBQU07QUFDL0MwRyxJQUFFO0FBQ0YsTUFBTW9CLFlBQVksR0FBRyxJQUFJckIsWUFBSixDQUFpQkMsRUFBakIsRUFBcUJDLE1BQXJCLENBQXJCO0FBQ0EsTUFBSTNHLEtBQUosRUFBVztBQUNUMkgsaUJBQWEsQ0FBQ2pCLEVBQUQsQ0FBYixHQUFvQm9CLFlBQXBCO0FBQ0FGLHFCQUFpQixDQUFDdEcsSUFBbEIsQ0FBdUJ3RyxZQUF2QjtBQUNEO0FBQ0QsU0FBT0EsWUFBUDtBQUNEOztBQUVELFNBQVNDLGVBQVQsQ0FBMEJyQixFQUExQixFQUE4QjtBQUM1QixNQUFJQSxFQUFKLEVBQVE7QUFDTixRQUFNb0IsWUFBWSxHQUFHSCxhQUFhLENBQUNqQixFQUFELENBQWxDO0FBQ0EsV0FBT2lCLGFBQWEsQ0FBQ2pCLEVBQUQsQ0FBcEI7QUFDQSxXQUFPb0IsWUFBUDtBQUNEO0FBQ0QsU0FBT0YsaUJBQWlCLENBQUNGLEtBQWxCLEVBQVA7QUFDRDs7QUFFRCxJQUFJTSxVQUFVLEdBQUc7QUFDZmhCLE1BRGUsZ0JBQ1RpQixRQURTLEVBQ0NDLE1BREQsRUFDUztBQUN0QixRQUFNeEIsRUFBRSxHQUFHbUIsZ0JBQWdCLENBQUNJLFFBQVEsQ0FBQ3RCLE1BQVYsQ0FBaEIsQ0FBa0NELEVBQTdDO0FBQ0EsUUFBSXVCLFFBQVEsQ0FBQ0UsR0FBYixFQUFrQjtBQUNoQkYsY0FBUSxDQUFDRSxHQUFULEdBQWVGLFFBQVEsQ0FBQ0UsR0FBVCxJQUFnQkYsUUFBUSxDQUFDRSxHQUFULENBQWF0SixPQUFiLENBQXFCLEdBQXJCLE1BQThCLENBQUMsQ0FBL0IsR0FBbUMsR0FBbkMsR0FBeUMsR0FBekQsSUFBZ0UsU0FBaEUsR0FBNEU2SCxFQUEzRjtBQUNEO0FBQ0YsR0FOYztBQU9mdkQsYUFQZSx1QkFPRmlGLE9BUEUsRUFPT0MsS0FQUCxFQU9jO0FBQzNCRCxXQUFPLENBQUNOLFlBQVIsR0FBdUJDLGVBQWUsRUFBdEM7QUFDRCxHQVRjLEVBQWpCOzs7QUFZQSxTQUFTTyxtQkFBVCxDQUE4QkgsR0FBOUIsRUFBbUM7QUFDakMsTUFBTUksS0FBSyxHQUFHQyxlQUFlLEVBQTdCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHRixLQUFLLENBQUM1SyxNQUFoQjtBQUNBLFNBQU84SyxHQUFHLEVBQVYsRUFBYztBQUNaLFFBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDRSxHQUFELENBQWxCO0FBQ0EsUUFBSUMsSUFBSSxDQUFDQyxLQUFMLElBQWNELElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFYLEtBQXdCVCxHQUExQyxFQUErQztBQUM3QyxhQUFPTSxHQUFQO0FBQ0Q7QUFDRjtBQUNELFNBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBRUQsSUFBSUksVUFBVSxHQUFHO0FBQ2Y5RixNQURlLGdCQUNUa0YsUUFEUyxFQUNDO0FBQ2QsUUFBSUEsUUFBUSxDQUFDYSxNQUFULEtBQW9CLE1BQXBCLElBQThCYixRQUFRLENBQUNjLEtBQTNDLEVBQWtEO0FBQ2hELGFBQU8sY0FBUDtBQUNEO0FBQ0QsV0FBTyxZQUFQO0FBQ0QsR0FOYztBQU9mL0IsTUFQZSxnQkFPVGlCLFFBUFMsRUFPQztBQUNkLFFBQUlBLFFBQVEsQ0FBQ2EsTUFBVCxLQUFvQixNQUFwQixJQUE4QmIsUUFBUSxDQUFDRSxHQUEzQyxFQUFnRDtBQUM5QyxVQUFNYSxlQUFlLEdBQUdWLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLEdBQVYsQ0FBM0M7QUFDQSxVQUFJYSxlQUFlLEtBQUssQ0FBQyxDQUF6QixFQUE0QjtBQUMxQixZQUFNRCxLQUFLLEdBQUdQLGVBQWUsR0FBRzdLLE1BQWxCLEdBQTJCLENBQTNCLEdBQStCcUwsZUFBN0M7QUFDQSxZQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2JkLGtCQUFRLENBQUNjLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FqQmMsRUFBakI7OztBQW9CQSxJQUFJRSxZQUFZLEdBQUc7QUFDakJqQyxNQURpQixnQkFDWGlCLFFBRFcsRUFDRDtBQUNkLFFBQUlpQixZQUFZLEdBQUdDLFFBQVEsQ0FBQ2xCLFFBQVEsQ0FBQ21CLE9BQVYsQ0FBM0I7QUFDQSxRQUFJQyxLQUFLLENBQUNILFlBQUQsQ0FBVCxFQUF5QjtBQUN2QjtBQUNEO0FBQ0QsUUFBTUksSUFBSSxHQUFHckIsUUFBUSxDQUFDcUIsSUFBdEI7QUFDQSxRQUFJLENBQUNySSxLQUFLLENBQUNDLE9BQU4sQ0FBY29JLElBQWQsQ0FBTCxFQUEwQjtBQUN4QjtBQUNEO0FBQ0QsUUFBTWIsR0FBRyxHQUFHYSxJQUFJLENBQUMzTCxNQUFqQjtBQUNBLFFBQUksQ0FBQzhLLEdBQUwsRUFBVTtBQUNSO0FBQ0Q7QUFDRCxRQUFJUyxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEJBLGtCQUFZLEdBQUcsQ0FBZjtBQUNELEtBRkQsTUFFTyxJQUFJQSxZQUFZLElBQUlULEdBQXBCLEVBQXlCO0FBQzlCUyxrQkFBWSxHQUFHVCxHQUFHLEdBQUcsQ0FBckI7QUFDRDtBQUNELFFBQUlTLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUNwQmpCLGNBQVEsQ0FBQ21CLE9BQVQsR0FBbUJFLElBQUksQ0FBQ0osWUFBRCxDQUF2QjtBQUNBakIsY0FBUSxDQUFDcUIsSUFBVCxHQUFnQkEsSUFBSSxDQUFDbEMsTUFBTDtBQUNkLGdCQUFDbUMsSUFBRCxFQUFPOUgsS0FBUCxVQUFpQkEsS0FBSyxHQUFHeUgsWUFBUixHQUF1QkssSUFBSSxLQUFLRCxJQUFJLENBQUNKLFlBQUQsQ0FBcEMsR0FBcUQsSUFBdEUsRUFEYyxDQUFoQjs7QUFHRCxLQUxELE1BS087QUFDTGpCLGNBQVEsQ0FBQ21CLE9BQVQsR0FBbUJFLElBQUksQ0FBQyxDQUFELENBQXZCO0FBQ0Q7QUFDRCxXQUFPO0FBQ0xFLGVBQVMsRUFBRSxLQUROO0FBRUxDLFVBQUksRUFBRSxLQUZELEVBQVA7O0FBSUQsR0EvQmdCLEVBQW5COzs7QUFrQ0EsSUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBLElBQUlDLFFBQUo7QUFDQSxTQUFTQyxPQUFULENBQWtCMUQsTUFBbEIsRUFBMEI7QUFDeEJ5RCxVQUFRLEdBQUdBLFFBQVEsSUFBSW5NLEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQmlNLFFBQWxCLENBQXZCO0FBQ0EsTUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHMUssSUFBSSxDQUFDQyxHQUFMLEtBQWEsRUFBYixHQUFrQmlILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUMwRCxNQUFMLEtBQWdCLEdBQTNCLENBQTdCO0FBQ0FyTSxNQUFFLENBQUNzTSxVQUFILENBQWM7QUFDWmpLLFNBQUcsRUFBRTZKLFFBRE87QUFFWnJILFVBQUksRUFBRXNILFFBRk0sRUFBZDs7QUFJRDtBQUNEekQsUUFBTSxDQUFDeUQsUUFBUCxHQUFrQkEsUUFBbEI7QUFDRDs7QUFFRCxTQUFTSSxpQkFBVCxDQUE0QjdELE1BQTVCLEVBQW9DO0FBQ2xDLE1BQUlBLE1BQU0sQ0FBQzhELFFBQVgsRUFBcUI7QUFDbkIsUUFBTUEsUUFBUSxHQUFHOUQsTUFBTSxDQUFDOEQsUUFBeEI7QUFDQTlELFVBQU0sQ0FBQytELGNBQVAsR0FBd0I7QUFDdEJDLFNBQUcsRUFBRUYsUUFBUSxDQUFDRSxHQURRO0FBRXRCQyxVQUFJLEVBQUVILFFBQVEsQ0FBQ0csSUFGTztBQUd0QkMsV0FBSyxFQUFFbEUsTUFBTSxDQUFDTCxXQUFQLEdBQXFCbUUsUUFBUSxDQUFDSSxLQUhmO0FBSXRCQyxZQUFNLEVBQUVuRSxNQUFNLENBQUNvRSxZQUFQLEdBQXNCTixRQUFRLENBQUNLLE1BSmpCLEVBQXhCOztBQU1EO0FBQ0Y7O0FBRUQsSUFBSUUsYUFBYSxHQUFHO0FBQ2xCcEgsYUFBVyxFQUFFLHFCQUFVK0MsTUFBVixFQUFrQjtBQUM3QjBELFdBQU8sQ0FBQzFELE1BQUQsQ0FBUDtBQUNBNkQscUJBQWlCLENBQUM3RCxNQUFELENBQWpCO0FBQ0QsR0FKaUIsRUFBcEI7OztBQU9BLElBQU1zRSxLQUFLLEdBQUcsYUFBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxnQkFBZDs7QUFFQSxJQUFJQyxjQUFjLEdBQUc7QUFDbkIzSCxNQUFJLEVBQUV2RixFQUFFLENBQUNtTixPQUFILENBQVdGLEtBQVgsSUFBb0JBLEtBQXBCLEdBQTRCRCxLQURmLEVBQXJCOzs7QUFJQTtBQUNBLElBQU1JLEtBQUssR0FBRztBQUNaLGFBRFk7QUFFWixlQUZZO0FBR1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdEWSxDQUFkOztBQWdFQTtBQUNBO0FBQ0EsSUFBTUMsUUFBUSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QmUsQ0FBakI7O0FBeUJBO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxhQUFXLEVBQUU7QUFDWC9ELFFBQUksRUFBRTtBQUNKZ0UsY0FBUSxFQUFFLEtBRE4sRUFESyxFQURHOzs7QUFNaEJoRCxZQUFVLEVBQVZBLFVBTmdCO0FBT2hCYSxZQUFVLEVBQVZBLFVBUGdCO0FBUWhCSSxjQUFZLEVBQVpBLFlBUmdCO0FBU2hCc0IsZUFBYSxFQUFiQSxhQVRnQjtBQVVoQjdFLG1CQUFpQixFQUFFNkUsYUFWSDtBQVdoQkcsZ0JBQWMsRUFBZEEsY0FYZ0I7QUFZaEJPLGVBQWEsRUFBRTtBQUNiakUsUUFBSSxFQUFFO0FBQ0o5RSxZQUFNLEVBQUUsS0FESixFQURPLEVBWkM7OztBQWlCaEJnSixhQUFXLEVBQUU7QUFDWGxFLFFBQUksRUFBRTtBQUNKbUUsWUFBTSxFQUFFLEtBREosRUFESyxFQWpCRzs7O0FBc0JoQkMsVUFBUSxFQUFFO0FBQ1JwRSxRQUFJLEVBQUU7QUFDSnFFLG9CQUFjLEVBQUUsS0FEWjtBQUVKQyxjQUFRLEVBQUUsS0FGTixFQURFLEVBdEJNOzs7QUE0QmhCQyxvQkFBa0IsRUFBRTtBQUNsQnZFLFFBQUksRUFBRTtBQUNKd0UsY0FBUSxFQUFFLEtBRE4sRUFEWSxFQTVCSjs7O0FBaUNoQkMsV0FBUyxFQUFFO0FBQ1R6RSxRQUFJLEVBQUU7QUFDSjBFLFdBQUssRUFBRSxLQURIO0FBRUpDLFVBQUksRUFBRSxLQUZGLEVBREcsRUFqQ0s7OztBQXVDaEJDLGFBQVcsRUFBRTtBQUNYNUUsUUFBSSxFQUFFO0FBQ0oyRSxVQUFJLEVBQUUsS0FERixFQURLLEVBdkNHOzs7QUE0Q2hCRSxXQUFTLEVBQUU7QUFDVDdFLFFBQUksRUFBRTtBQUNKOEUsaUJBQVcsRUFBRSxLQURUO0FBRUpDLGtCQUFZLEVBQUUsS0FGVixFQURHLEVBNUNLOzs7QUFrRGhCQyxpQkFBZSxFQUFFO0FBQ2ZoRixRQUFJLEVBQUU7QUFDSmlGLGVBQVMsRUFBRSxLQURQLEVBRFMsRUFsREQ7OztBQXVEaEJDLE9BQUssRUFBRTtBQUNMbEYsUUFBSSxFQUFFO0FBQ0ptRixZQUFNLEVBQUUsS0FESjtBQUVKQyxhQUFPLEVBQUUsS0FGTCxFQURELEVBdkRTOzs7QUE2RGhCQyxhQUFXLEVBQUU7QUFDWHJGLFFBQUksRUFBRTtBQUNKc0YsVUFBSSxFQUFFLEtBREY7QUFFSkYsYUFBTyxFQUFFLEtBRkwsRUFESyxFQTdERzs7O0FBbUVoQkcsZ0JBQWMsRUFBRTtBQUNkeEosUUFBSSxFQUFFdkYsRUFBRSxDQUFDZ1AsR0FBSCxHQUFTLEtBQVQsR0FBaUIsZ0JBRFQ7QUFFZHhGLFFBQUksRUFBRTtBQUNKeUYsZUFBUyxFQUFFalAsRUFBRSxDQUFDZ1AsR0FBSCxHQUFTLFdBQVQsR0FBdUIsTUFEOUIsRUFGUSxFQW5FQTs7O0FBeUVoQkUsYUFBVyxFQUFFO0FBQ1gxRixRQUFJLEVBQUU7QUFDSjJGLHFCQUFlLEVBQUUsS0FEYixFQURLLEVBekVHLEVBQWxCOzs7OztBQWdGQSxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixRQUFwQixFQUE4QixVQUE5QixDQUFsQjs7QUFFQSxTQUFTQyxlQUFULENBQTBCQyxVQUExQixFQUFzQzVLLE1BQXRDLEVBQThDaUIsV0FBOUMsRUFBMkQ7QUFDekQsU0FBTyxVQUFVcEMsR0FBVixFQUFlO0FBQ3BCLFdBQU9tQixNQUFNLENBQUM2SyxrQkFBa0IsQ0FBQ0QsVUFBRCxFQUFhL0wsR0FBYixFQUFrQm9DLFdBQWxCLENBQW5CLENBQWI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUzZKLFdBQVQsQ0FBc0JGLFVBQXRCLEVBQWtDN0UsUUFBbEMsRUFBcUcsS0FBekRnRixVQUF5RCx1RUFBNUMsRUFBNEMsS0FBeEM5SixXQUF3Qyx1RUFBMUIsRUFBMEIsS0FBdEIrSixZQUFzQix1RUFBUCxLQUFPO0FBQ25HLE1BQUl6TixhQUFhLENBQUN3SSxRQUFELENBQWpCLEVBQTZCLENBQUU7QUFDN0IsUUFBTUMsTUFBTSxHQUFHZ0YsWUFBWSxLQUFLLElBQWpCLEdBQXdCakYsUUFBeEIsR0FBbUMsRUFBbEQsQ0FEMkIsQ0FDMkI7QUFDdEQsUUFBSTNJLElBQUksQ0FBQzJOLFVBQUQsQ0FBUixFQUFzQjtBQUNwQkEsZ0JBQVUsR0FBR0EsVUFBVSxDQUFDaEYsUUFBRCxFQUFXQyxNQUFYLENBQVYsSUFBZ0MsRUFBN0M7QUFDRDtBQUNELFNBQUssSUFBTXJJLEdBQVgsSUFBa0JvSSxRQUFsQixFQUE0QjtBQUMxQixVQUFJckksTUFBTSxDQUFDcU4sVUFBRCxFQUFhcE4sR0FBYixDQUFWLEVBQTZCO0FBQzNCLFlBQUlzTixTQUFTLEdBQUdGLFVBQVUsQ0FBQ3BOLEdBQUQsQ0FBMUI7QUFDQSxZQUFJUCxJQUFJLENBQUM2TixTQUFELENBQVIsRUFBcUI7QUFDbkJBLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ2xGLFFBQVEsQ0FBQ3BJLEdBQUQsQ0FBVCxFQUFnQm9JLFFBQWhCLEVBQTBCQyxNQUExQixDQUFyQjtBQUNEO0FBQ0QsWUFBSSxDQUFDaUYsU0FBTCxFQUFnQixDQUFFO0FBQ2hCQyxpQkFBTyxDQUFDQyxJQUFSLGdCQUFxQlAsVUFBckIsNEZBQXdGak4sR0FBeEY7QUFDRCxTQUZELE1BRU8sSUFBSUwsS0FBSyxDQUFDMk4sU0FBRCxDQUFULEVBQXNCLENBQUU7QUFDN0JqRixnQkFBTSxDQUFDaUYsU0FBRCxDQUFOLEdBQW9CbEYsUUFBUSxDQUFDcEksR0FBRCxDQUE1QjtBQUNELFNBRk0sTUFFQSxJQUFJSixhQUFhLENBQUMwTixTQUFELENBQWpCLEVBQThCLENBQUU7QUFDckNqRixnQkFBTSxDQUFDaUYsU0FBUyxDQUFDcEssSUFBVixHQUFpQm9LLFNBQVMsQ0FBQ3BLLElBQTNCLEdBQWtDbEQsR0FBbkMsQ0FBTixHQUFnRHNOLFNBQVMsQ0FBQ3hJLEtBQTFEO0FBQ0Q7QUFDRixPQVpELE1BWU8sSUFBSWlJLFNBQVMsQ0FBQy9OLE9BQVYsQ0FBa0JnQixHQUFsQixNQUEyQixDQUFDLENBQWhDLEVBQW1DO0FBQ3hDLFlBQUlQLElBQUksQ0FBQzJJLFFBQVEsQ0FBQ3BJLEdBQUQsQ0FBVCxDQUFSLEVBQXlCO0FBQ3ZCcUksZ0JBQU0sQ0FBQ3JJLEdBQUQsQ0FBTixHQUFjZ04sZUFBZSxDQUFDQyxVQUFELEVBQWE3RSxRQUFRLENBQUNwSSxHQUFELENBQXJCLEVBQTRCc0QsV0FBNUIsQ0FBN0I7QUFDRDtBQUNGLE9BSk0sTUFJQTtBQUNMLFlBQUksQ0FBQytKLFlBQUwsRUFBbUI7QUFDakJoRixnQkFBTSxDQUFDckksR0FBRCxDQUFOLEdBQWNvSSxRQUFRLENBQUNwSSxHQUFELENBQXRCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBT3FJLE1BQVA7QUFDRCxHQTdCRCxNQTZCTyxJQUFJNUksSUFBSSxDQUFDMkksUUFBRCxDQUFSLEVBQW9CO0FBQ3pCQSxZQUFRLEdBQUc0RSxlQUFlLENBQUNDLFVBQUQsRUFBYTdFLFFBQWIsRUFBdUI5RSxXQUF2QixDQUExQjtBQUNEO0FBQ0QsU0FBTzhFLFFBQVA7QUFDRDs7QUFFRCxTQUFTOEUsa0JBQVQsQ0FBNkJELFVBQTdCLEVBQXlDL0wsR0FBekMsRUFBOENvQyxXQUE5QyxFQUFvRixLQUF6Qm1LLGVBQXlCLHVFQUFQLEtBQU87QUFDbEYsTUFBSWhPLElBQUksQ0FBQ3dMLFNBQVMsQ0FBQzNILFdBQVgsQ0FBUixFQUFpQyxDQUFFO0FBQ2pDcEMsT0FBRyxHQUFHK0osU0FBUyxDQUFDM0gsV0FBVixDQUFzQjJKLFVBQXRCLEVBQWtDL0wsR0FBbEMsQ0FBTjtBQUNEO0FBQ0QsU0FBT2lNLFdBQVcsQ0FBQ0YsVUFBRCxFQUFhL0wsR0FBYixFQUFrQm9DLFdBQWxCLEVBQStCLEVBQS9CLEVBQW1DbUssZUFBbkMsQ0FBbEI7QUFDRDs7QUFFRCxTQUFTQyxPQUFULENBQWtCVCxVQUFsQixFQUE4QjVLLE1BQTlCLEVBQXNDO0FBQ3BDLE1BQUl0QyxNQUFNLENBQUNrTCxTQUFELEVBQVlnQyxVQUFaLENBQVYsRUFBbUM7QUFDakMsUUFBTVUsUUFBUSxHQUFHMUMsU0FBUyxDQUFDZ0MsVUFBRCxDQUExQjtBQUNBLFFBQUksQ0FBQ1UsUUFBTCxFQUFlLENBQUU7QUFDZixhQUFPLFlBQVk7QUFDakJKLGVBQU8sQ0FBQ2pQLEtBQVIsdUVBQW9EMk8sVUFBcEQ7QUFDRCxPQUZEO0FBR0Q7QUFDRCxXQUFPLFVBQVVXLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCLENBQUU7QUFDN0IsVUFBSTVLLE9BQU8sR0FBRzBLLFFBQWQ7QUFDQSxVQUFJbE8sSUFBSSxDQUFDa08sUUFBRCxDQUFSLEVBQW9CO0FBQ2xCMUssZUFBTyxHQUFHMEssUUFBUSxDQUFDQyxJQUFELENBQWxCO0FBQ0Q7O0FBRURBLFVBQUksR0FBR1QsV0FBVyxDQUFDRixVQUFELEVBQWFXLElBQWIsRUFBbUIzSyxPQUFPLENBQUNrRSxJQUEzQixFQUFpQ2xFLE9BQU8sQ0FBQ0ssV0FBekMsQ0FBbEI7O0FBRUEsVUFBTTZELElBQUksR0FBRyxDQUFDeUcsSUFBRCxDQUFiO0FBQ0EsVUFBSSxPQUFPQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CMUcsWUFBSSxDQUFDMUYsSUFBTCxDQUFVb00sSUFBVjtBQUNEO0FBQ0QsVUFBSXBPLElBQUksQ0FBQ3dELE9BQU8sQ0FBQ0MsSUFBVCxDQUFSLEVBQXdCO0FBQ3RCK0osa0JBQVUsR0FBR2hLLE9BQU8sQ0FBQ0MsSUFBUixDQUFhMEssSUFBYixDQUFiO0FBQ0QsT0FGRCxNQUVPLElBQUlqTyxLQUFLLENBQUNzRCxPQUFPLENBQUNDLElBQVQsQ0FBVCxFQUF5QjtBQUM5QitKLGtCQUFVLEdBQUdoSyxPQUFPLENBQUNDLElBQXJCO0FBQ0Q7QUFDRCxVQUFNSSxXQUFXLEdBQUczRixFQUFFLENBQUNzUCxVQUFELENBQUYsQ0FBZTNGLEtBQWYsQ0FBcUIzSixFQUFyQixFQUF5QndKLElBQXpCLENBQXBCO0FBQ0EsVUFBSTVDLFNBQVMsQ0FBQzBJLFVBQUQsQ0FBYixFQUEyQixDQUFFO0FBQzNCLGVBQU9DLGtCQUFrQixDQUFDRCxVQUFELEVBQWEzSixXQUFiLEVBQTBCTCxPQUFPLENBQUNLLFdBQWxDLEVBQStDZSxZQUFZLENBQUM0SSxVQUFELENBQTNELENBQXpCO0FBQ0Q7QUFDRCxhQUFPM0osV0FBUDtBQUNELEtBdEJEO0FBdUJEO0FBQ0QsU0FBT2pCLE1BQVA7QUFDRDs7QUFFRCxJQUFNeUwsUUFBUSxHQUFHdk8sTUFBTSxDQUFDYSxNQUFQLENBQWMsSUFBZCxDQUFqQjs7QUFFQSxJQUFNMk4sS0FBSyxHQUFHO0FBQ1osc0JBRFk7QUFFWixlQUZZO0FBR1osaUJBSFk7QUFJWixRQUpZO0FBS1osU0FMWTtBQU1aLE9BTlksQ0FBZDs7O0FBU0EsU0FBU0MsYUFBVCxDQUF3QjlLLElBQXhCLEVBQThCO0FBQzVCLFNBQU8sU0FBUytLLE9BQVQ7OztBQUdKLE9BRkQ5SSxJQUVDLFFBRkRBLElBRUMsQ0FEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsUUFBTWxFLEdBQUcsR0FBRztBQUNWZ04sWUFBTSxZQUFLaEwsSUFBTCwyQkFBMEJBLElBQTFCLG9CQURJLEVBQVo7O0FBR0F6RCxRQUFJLENBQUMwRixJQUFELENBQUosSUFBY0EsSUFBSSxDQUFDakUsR0FBRCxDQUFsQjtBQUNBekIsUUFBSSxDQUFDMkYsUUFBRCxDQUFKLElBQWtCQSxRQUFRLENBQUNsRSxHQUFELENBQTFCO0FBQ0QsR0FURDtBQVVEOztBQUVENk0sS0FBSyxDQUFDN0wsT0FBTixDQUFjLFVBQVVnQixJQUFWLEVBQWdCO0FBQzVCNEssVUFBUSxDQUFDNUssSUFBRCxDQUFSLEdBQWlCOEssYUFBYSxDQUFDOUssSUFBRCxDQUE5QjtBQUNELENBRkQ7O0FBSUEsSUFBSWlMLFNBQVMsR0FBRztBQUNkQyxPQUFLLEVBQUUsQ0FBQyxTQUFELENBRE87QUFFZEMsT0FBSyxFQUFFLENBQUMsU0FBRCxDQUZPO0FBR2RDLFNBQU8sRUFBRSxDQUFDLFNBQUQsQ0FISztBQUlkN00sTUFBSSxFQUFFLENBQUMsU0FBRCxDQUpRLEVBQWhCOzs7QUFPQSxTQUFTOE0sV0FBVDs7Ozs7QUFLRyxLQUpEQyxPQUlDLFNBSkRBLE9BSUMsQ0FIRHRKLE9BR0MsU0FIREEsT0FHQyxDQUZEQyxJQUVDLFNBRkRBLElBRUMsQ0FEREMsUUFDQyxTQUREQSxRQUNDO0FBQ0QsTUFBSWxFLEdBQUcsR0FBRyxLQUFWO0FBQ0EsTUFBSWlOLFNBQVMsQ0FBQ0ssT0FBRCxDQUFiLEVBQXdCO0FBQ3RCdE4sT0FBRyxHQUFHO0FBQ0pnTixZQUFNLEVBQUUsZ0JBREo7QUFFSk0sYUFBTyxFQUFQQSxPQUZJO0FBR0pDLGNBQVEsRUFBRU4sU0FBUyxDQUFDSyxPQUFELENBSGYsRUFBTjs7QUFLQS9PLFFBQUksQ0FBQ3lGLE9BQUQsQ0FBSixJQUFpQkEsT0FBTyxDQUFDaEUsR0FBRCxDQUF4QjtBQUNELEdBUEQsTUFPTztBQUNMQSxPQUFHLEdBQUc7QUFDSmdOLFlBQU0sRUFBRSxvQ0FESixFQUFOOztBQUdBek8sUUFBSSxDQUFDMEYsSUFBRCxDQUFKLElBQWNBLElBQUksQ0FBQ2pFLEdBQUQsQ0FBbEI7QUFDRDtBQUNEekIsTUFBSSxDQUFDMkYsUUFBRCxDQUFKLElBQWtCQSxRQUFRLENBQUNsRSxHQUFELENBQTFCO0FBQ0Q7O0FBRUQsSUFBSXdOLFFBQVEsR0FBRyxhQUFhblAsTUFBTSxDQUFDbUgsTUFBUCxDQUFjO0FBQ3hDQyxXQUFTLEVBQUUsSUFENkI7QUFFeEM0SCxhQUFXLEVBQUVBLFdBRjJCLEVBQWQsQ0FBNUI7OztBQUtBLElBQU1JLFVBQVUsR0FBSSxZQUFZO0FBQzlCLE1BQUlDLE9BQUo7QUFDQSxTQUFPLFNBQVNDLGFBQVQsR0FBMEI7QUFDL0IsUUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWkEsYUFBTyxHQUFHLElBQUloUSxZQUFKLEVBQVY7QUFDRDtBQUNELFdBQU9nUSxPQUFQO0FBQ0QsR0FMRDtBQU1ELENBUmtCLEVBQW5COztBQVVBLFNBQVN0SCxLQUFULENBQWdCd0gsR0FBaEIsRUFBcUJ6TSxNQUFyQixFQUE2QjhFLElBQTdCLEVBQW1DO0FBQ2pDLFNBQU8ySCxHQUFHLENBQUN6TSxNQUFELENBQUgsQ0FBWWlGLEtBQVosQ0FBa0J3SCxHQUFsQixFQUF1QjNILElBQXZCLENBQVA7QUFDRDs7QUFFRCxTQUFTNEgsR0FBVCxHQUFnQjtBQUNkLFNBQU96SCxLQUFLLENBQUNxSCxVQUFVLEVBQVgsRUFBZSxLQUFmLDZCQUEwQkssU0FBMUIsRUFBWjtBQUNEO0FBQ0QsU0FBU0MsSUFBVCxHQUFpQjtBQUNmLFNBQU8zSCxLQUFLLENBQUNxSCxVQUFVLEVBQVgsRUFBZSxNQUFmLDZCQUEyQkssU0FBM0IsRUFBWjtBQUNEO0FBQ0QsU0FBU0UsS0FBVCxHQUFrQjtBQUNoQixTQUFPNUgsS0FBSyxDQUFDcUgsVUFBVSxFQUFYLEVBQWUsT0FBZiw2QkFBNEJLLFNBQTVCLEVBQVo7QUFDRDtBQUNELFNBQVNHLEtBQVQsR0FBa0I7QUFDaEIsU0FBTzdILEtBQUssQ0FBQ3FILFVBQVUsRUFBWCxFQUFlLE9BQWYsNkJBQTRCSyxTQUE1QixFQUFaO0FBQ0Q7O0FBRUQsSUFBSUksUUFBUSxHQUFHLGFBQWE3UCxNQUFNLENBQUNtSCxNQUFQLENBQWM7QUFDeENDLFdBQVMsRUFBRSxJQUQ2QjtBQUV4Q29JLEtBQUcsRUFBRUEsR0FGbUM7QUFHeENFLE1BQUksRUFBRUEsSUFIa0M7QUFJeENDLE9BQUssRUFBRUEsS0FKaUM7QUFLeENDLE9BQUssRUFBRUEsS0FMaUMsRUFBZCxDQUE1Qjs7O0FBUUEsU0FBU0Usd0JBQVQsR0FBcUM7QUFDbkMsTUFBTUMsa0JBQWtCLEdBQUcsRUFBM0IsQ0FEbUM7Ozs7QUFLL0IzUixJQUFFLENBQUNrSSxpQkFBSCxFQUwrQixDQUdqQ0csV0FIaUMsMEJBR2pDQSxXQUhpQyxDQUlqQ3lFLFlBSmlDLDBCQUlqQ0EsWUFKaUM7O0FBT25DLE1BQU04RSxXQUFXLEdBQUd2SixXQUFXLEdBQUd5RSxZQUFkLEdBQTZCLFVBQTdCLEdBQTBDLFdBQTlEOztBQUVBNkUsb0JBQWtCLENBQUNFLE9BQW5CLEdBQTZCLFVBQUN2TSxPQUFELEVBQVVGLFFBQVYsRUFBdUI7QUFDbEQsUUFBSTBNLE9BQU8sR0FBRyxJQUFkO0FBQ0EsU0FBSyxJQUFNL0YsSUFBWCxJQUFtQnpHLE9BQW5CLEVBQTRCO0FBQzFCLFVBQU15TSxTQUFTLEdBQUdoRyxJQUFJLEtBQUssYUFBVCxHQUF5QnpHLE9BQU8sQ0FBQ3lHLElBQUQsQ0FBaEMsR0FBeUN0RCxNQUFNLENBQUNuRCxPQUFPLENBQUN5RyxJQUFELENBQVIsQ0FBakU7QUFDQSxVQUFJekcsT0FBTyxDQUFDeUcsSUFBRCxDQUFQLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCLFlBQUlBLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCLGNBQUlnRyxTQUFTLEtBQUsxSixXQUFsQixFQUErQjtBQUM3QnlKLG1CQUFPLEdBQUcsSUFBVjtBQUNELFdBRkQsTUFFTztBQUNMQSxtQkFBTyxHQUFHLEtBQVY7QUFDQTFNLG9CQUFRLENBQUMwTSxPQUFELENBQVI7QUFDQSxtQkFBT0EsT0FBUDtBQUNEO0FBQ0Y7QUFDRCxZQUFJL0YsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDdkIsY0FBSTFELFdBQVcsSUFBSTBKLFNBQW5CLEVBQThCO0FBQzVCRCxtQkFBTyxHQUFHLElBQVY7QUFDRCxXQUZELE1BRU87QUFDTEEsbUJBQU8sR0FBRyxLQUFWO0FBQ0ExTSxvQkFBUSxDQUFDME0sT0FBRCxDQUFSO0FBQ0EsbUJBQU9BLE9BQVA7QUFDRDtBQUNGO0FBQ0QsWUFBSS9GLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCLGNBQUkxRCxXQUFXLElBQUkwSixTQUFuQixFQUE4QjtBQUM1QkQsbUJBQU8sR0FBRyxJQUFWO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG1CQUFPLEdBQUcsS0FBVjtBQUNBMU0sb0JBQVEsQ0FBQzBNLE9BQUQsQ0FBUjtBQUNBLG1CQUFPQSxPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJL0YsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckIsY0FBSWdHLFNBQVMsS0FBS2pGLFlBQWxCLEVBQWdDO0FBQzlCZ0YsbUJBQU8sR0FBRyxJQUFWO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG1CQUFPLEdBQUcsS0FBVjtBQUNBMU0sb0JBQVEsQ0FBQzBNLE9BQUQsQ0FBUjtBQUNBLG1CQUFPQSxPQUFQO0FBQ0Q7QUFDRjtBQUNELFlBQUkvRixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUN4QixjQUFJZSxZQUFZLElBQUlpRixTQUFwQixFQUErQjtBQUM3QkQsbUJBQU8sR0FBRyxJQUFWO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG1CQUFPLEdBQUcsS0FBVjtBQUNBMU0sb0JBQVEsQ0FBQzBNLE9BQUQsQ0FBUjtBQUNBLG1CQUFPQSxPQUFQO0FBQ0Q7QUFDRjtBQUNELFlBQUkvRixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUN4QixjQUFJZSxZQUFZLElBQUlpRixTQUFwQixFQUErQjtBQUM3QkQsbUJBQU8sR0FBRyxJQUFWO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG1CQUFPLEdBQUcsS0FBVjtBQUNBMU0sb0JBQVEsQ0FBQzBNLE9BQUQsQ0FBUjtBQUNBLG1CQUFPQSxPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJL0YsSUFBSSxLQUFLLGFBQWIsRUFBNEI7QUFDMUIsY0FBSXpHLE9BQU8sQ0FBQ3lHLElBQUQsQ0FBUCxLQUFrQjZGLFdBQXRCLEVBQW1DO0FBQ2pDRSxtQkFBTyxHQUFHLElBQVY7QUFDRCxXQUZELE1BRU87QUFDTEEsbUJBQU8sR0FBRyxLQUFWO0FBQ0ExTSxvQkFBUSxDQUFDME0sT0FBRCxDQUFSO0FBQ0EsbUJBQU9BLE9BQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNEMU0sWUFBUSxDQUFDME0sT0FBRCxDQUFSOztBQUVBLFdBQU9BLE9BQVA7QUFDRCxHQTNFRDs7QUE2RUFILG9CQUFrQixDQUFDSyxVQUFuQixHQUFnQyxZQUFNO0FBQ3JDLEdBREQ7O0FBR0EsU0FBT0wsa0JBQVA7QUFDRDs7QUFFRCxJQUFJM0wsR0FBRyxHQUFHLGFBQWFwRSxNQUFNLENBQUNtSCxNQUFQLENBQWM7QUFDbkNDLFdBQVMsRUFBRSxJQUR3QjtBQUVuQzBJLDBCQUF3QixFQUFFQSx3QkFGUyxFQUFkLENBQXZCOzs7QUFLQSxJQUFNTyxNQUFNLEdBQUdDLElBQWY7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLFNBQXBCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxJQUFwQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcvUCxNQUFNLENBQUMsVUFBQ25ELEdBQUQsRUFBUztBQUNoQyxTQUFPeUQsUUFBUSxDQUFDekQsR0FBRyxDQUFDMEQsT0FBSixDQUFZdVAsV0FBWixFQUF5QixHQUF6QixDQUFELENBQWY7QUFDRCxDQUZ1QixDQUF4Qjs7QUFJQSxTQUFTRSxnQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFDckMsTUFBTUMsZUFBZSxHQUFHRCxVQUFVLENBQUNFLFlBQW5DO0FBQ0FGLFlBQVUsQ0FBQ0UsWUFBWCxHQUEwQixVQUFVQyxLQUFWLEVBQTBCLG9DQUFObkosSUFBTSw2RUFBTkEsSUFBTTtBQUNsRCxXQUFPaUosZUFBZSxDQUFDOUksS0FBaEIsQ0FBc0I2SSxVQUF0QixHQUFtQ0YsU0FBUyxDQUFDSyxLQUFELENBQTVDLFNBQXdEbkosSUFBeEQsRUFBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTb0osUUFBVCxDQUFtQnJOLElBQW5CLEVBQXlCRCxPQUF6QixFQUFrQztBQUNoQyxNQUFNdU4sT0FBTyxHQUFHdk4sT0FBTyxDQUFDQyxJQUFELENBQXZCO0FBQ0EsTUFBSSxDQUFDc04sT0FBTCxFQUFjO0FBQ1p2TixXQUFPLENBQUNDLElBQUQsQ0FBUCxHQUFnQixZQUFZO0FBQzFCZ04sc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEtBRkQ7QUFHRCxHQUpELE1BSU87QUFDTGpOLFdBQU8sQ0FBQ0MsSUFBRCxDQUFQLEdBQWdCLFlBQW1CO0FBQ2pDZ04sc0JBQWdCLENBQUMsSUFBRCxDQUFoQixDQURpQyxtQ0FBTi9JLElBQU0seURBQU5BLElBQU07QUFFakMsYUFBT3FKLE9BQU8sQ0FBQ2xKLEtBQVIsQ0FBYyxJQUFkLEVBQW9CSCxJQUFwQixDQUFQO0FBQ0QsS0FIRDtBQUlEO0FBQ0Y7QUFDRCxJQUFJLENBQUN5SSxNQUFNLENBQUNhLFlBQVosRUFBMEI7QUFDeEJiLFFBQU0sQ0FBQ2EsWUFBUCxHQUFzQixJQUF0QjtBQUNBWixNQUFJLEdBQUcsZ0JBQXdCLEtBQWQ1TSxPQUFjLHVFQUFKLEVBQUk7QUFDN0JzTixZQUFRLENBQUMsUUFBRCxFQUFXdE4sT0FBWCxDQUFSO0FBQ0EsV0FBTzJNLE1BQU0sQ0FBQzNNLE9BQUQsQ0FBYjtBQUNELEdBSEQ7QUFJQTRNLE1BQUksQ0FBQ2EsS0FBTCxHQUFhZCxNQUFNLENBQUNjLEtBQXBCOztBQUVBWCxXQUFTLEdBQUcscUJBQXdCLEtBQWQ5TSxPQUFjLHVFQUFKLEVBQUk7QUFDbENzTixZQUFRLENBQUMsU0FBRCxFQUFZdE4sT0FBWixDQUFSO0FBQ0EsV0FBTzZNLFdBQVcsQ0FBQzdNLE9BQUQsQ0FBbEI7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsSUFBTTBOLGdCQUFnQixHQUFHO0FBQ3ZCLG1CQUR1QjtBQUV2QixlQUZ1QjtBQUd2QixrQkFIdUI7QUFJdkIsaUJBSnVCO0FBS3ZCLG1CQUx1QjtBQU12QixjQU51QjtBQU92QixVQVB1QjtBQVF2QixjQVJ1QixDQUF6Qjs7O0FBV0EsU0FBU0MsU0FBVCxDQUFvQkMsRUFBcEIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQzdCLE1BQU1YLFVBQVUsR0FBR1UsRUFBRSxDQUFDRSxHQUFILENBQU9GLEVBQUUsQ0FBQ0csTUFBVixDQUFuQjtBQUNBRixPQUFLLENBQUM1TyxPQUFOLENBQWMsVUFBQStPLElBQUksRUFBSTtBQUNwQixRQUFJbFIsTUFBTSxDQUFDb1EsVUFBRCxFQUFhYyxJQUFiLENBQVYsRUFBOEI7QUFDNUJKLFFBQUUsQ0FBQ0ksSUFBRCxDQUFGLEdBQVdkLFVBQVUsQ0FBQ2MsSUFBRCxDQUFyQjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVELFNBQVNDLE9BQVQsQ0FBa0J2UCxJQUFsQixFQUF3QndQLFVBQXhCLEVBQW9DO0FBQ2xDLE1BQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUl2UyxhQUFJcUUsT0FBSixJQUFlN0IsS0FBSyxDQUFDQyxPQUFOLENBQWN6QyxhQUFJcUUsT0FBSixDQUFZdEIsSUFBWixDQUFkLENBQW5CLEVBQXFEO0FBQ25ELFdBQU8sSUFBUDtBQUNEOztBQUVEd1AsWUFBVSxHQUFHQSxVQUFVLENBQUNDLE9BQVgsSUFBc0JELFVBQW5DOztBQUVBLE1BQUkxUixJQUFJLENBQUMwUixVQUFELENBQVIsRUFBc0I7QUFDcEIsUUFBSTFSLElBQUksQ0FBQzBSLFVBQVUsQ0FBQ0UsYUFBWCxDQUF5QjFQLElBQXpCLENBQUQsQ0FBUixFQUEwQztBQUN4QyxhQUFPLElBQVA7QUFDRDtBQUNELFFBQUl3UCxVQUFVLENBQUNHLEtBQVg7QUFDRkgsY0FBVSxDQUFDRyxLQUFYLENBQWlCck8sT0FEZjtBQUVGN0IsU0FBSyxDQUFDQyxPQUFOLENBQWM4UCxVQUFVLENBQUNHLEtBQVgsQ0FBaUJyTyxPQUFqQixDQUF5QnRCLElBQXpCLENBQWQsQ0FGRixFQUVpRDtBQUMvQyxhQUFPLElBQVA7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUlsQyxJQUFJLENBQUMwUixVQUFVLENBQUN4UCxJQUFELENBQVgsQ0FBUixFQUE0QjtBQUMxQixXQUFPLElBQVA7QUFDRDtBQUNELE1BQU00UCxNQUFNLEdBQUdKLFVBQVUsQ0FBQ0ksTUFBMUI7QUFDQSxNQUFJblEsS0FBSyxDQUFDQyxPQUFOLENBQWNrUSxNQUFkLENBQUosRUFBMkI7QUFDekIsV0FBTyxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQUFDLEtBQUssVUFBSVAsT0FBTyxDQUFDdlAsSUFBRCxFQUFPOFAsS0FBUCxDQUFYLEVBQWpCLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQVNDLFNBQVQsQ0FBb0JDLFNBQXBCLEVBQStCcFEsS0FBL0IsRUFBc0M0UCxVQUF0QyxFQUFrRDtBQUNoRDVQLE9BQUssQ0FBQ1csT0FBTixDQUFjLFVBQUFQLElBQUksRUFBSTtBQUNwQixRQUFJdVAsT0FBTyxDQUFDdlAsSUFBRCxFQUFPd1AsVUFBUCxDQUFYLEVBQStCO0FBQzdCUSxlQUFTLENBQUNoUSxJQUFELENBQVQsR0FBa0IsVUFBVXdGLElBQVYsRUFBZ0I7QUFDaEMsZUFBTyxLQUFLeUssR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQmxRLElBQXJCLEVBQTJCd0YsSUFBM0IsQ0FBbkI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQU5EO0FBT0Q7O0FBRUQsU0FBUzJLLGdCQUFULENBQTJCbFQsR0FBM0IsRUFBZ0N1UyxVQUFoQyxFQUE0QztBQUMxQ0EsWUFBVSxHQUFHQSxVQUFVLENBQUNDLE9BQVgsSUFBc0JELFVBQW5DO0FBQ0EsTUFBSVksWUFBSjtBQUNBLE1BQUl0UyxJQUFJLENBQUMwUixVQUFELENBQVIsRUFBc0I7QUFDcEJZLGdCQUFZLEdBQUdaLFVBQWY7QUFDRCxHQUZELE1BRU87QUFDTFksZ0JBQVksR0FBR25ULEdBQUcsQ0FBQ29ULE1BQUosQ0FBV2IsVUFBWCxDQUFmO0FBQ0Q7QUFDREEsWUFBVSxHQUFHWSxZQUFZLENBQUM5TyxPQUExQjtBQUNBLFNBQU8sQ0FBQzhPLFlBQUQsRUFBZVosVUFBZixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2MsU0FBVCxDQUFvQnBCLEVBQXBCLEVBQXdCcUIsUUFBeEIsRUFBa0M7QUFDaEMsTUFBSTlRLEtBQUssQ0FBQ0MsT0FBTixDQUFjNlEsUUFBZCxLQUEyQkEsUUFBUSxDQUFDcFUsTUFBeEMsRUFBZ0Q7QUFDOUMsUUFBTXFVLE1BQU0sR0FBRzVTLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLElBQWQsQ0FBZjtBQUNBOFIsWUFBUSxDQUFDaFEsT0FBVCxDQUFpQixVQUFBa1EsUUFBUSxFQUFJO0FBQzNCRCxZQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixJQUFuQjtBQUNELEtBRkQ7QUFHQXZCLE1BQUUsQ0FBQ3dCLFlBQUgsR0FBa0J4QixFQUFFLENBQUNzQixNQUFILEdBQVlBLE1BQTlCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxVQUFULENBQXFCQyxNQUFyQixFQUE2QnBDLFVBQTdCLEVBQXlDO0FBQ3ZDb0MsUUFBTSxHQUFHLENBQUNBLE1BQU0sSUFBSSxFQUFYLEVBQWVyVixLQUFmLENBQXFCLEdBQXJCLENBQVQ7QUFDQSxNQUFNMEwsR0FBRyxHQUFHMkosTUFBTSxDQUFDelUsTUFBbkI7O0FBRUEsTUFBSThLLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYnVILGNBQVUsQ0FBQ3FDLE9BQVgsR0FBcUJELE1BQU0sQ0FBQyxDQUFELENBQTNCO0FBQ0QsR0FGRCxNQUVPLElBQUkzSixHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ3BCdUgsY0FBVSxDQUFDcUMsT0FBWCxHQUFxQkQsTUFBTSxDQUFDLENBQUQsQ0FBM0I7QUFDQXBDLGNBQVUsQ0FBQ3NDLFFBQVgsR0FBc0JGLE1BQU0sQ0FBQyxDQUFELENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxRQUFULENBQW1CdkIsVUFBbkIsRUFBK0J3QixPQUEvQixFQUF3QztBQUN0QyxNQUFJblEsSUFBSSxHQUFHMk8sVUFBVSxDQUFDM08sSUFBWCxJQUFtQixFQUE5QjtBQUNBLE1BQU1vUSxPQUFPLEdBQUd6QixVQUFVLENBQUN5QixPQUFYLElBQXNCLEVBQXRDOztBQUVBLE1BQUksT0FBT3BRLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsUUFBSTtBQUNGQSxVQUFJLEdBQUdBLElBQUksQ0FBQzFDLElBQUwsQ0FBVTZTLE9BQVYsQ0FBUCxDQURFLENBQ3lCO0FBQzVCLEtBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVixVQUFJQyw2R0FBQSxDQUFZQyxhQUFoQixFQUErQjtBQUM3QnhGLGVBQU8sQ0FBQ0MsSUFBUixDQUFhLHdFQUFiLEVBQXVGaEwsSUFBdkY7QUFDRDtBQUNGO0FBQ0YsR0FSRCxNQVFPO0FBQ0wsUUFBSTtBQUNGO0FBQ0FBLFVBQUksR0FBR3BFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUM0VSxTQUFMLENBQWV4USxJQUFmLENBQVgsQ0FBUDtBQUNELEtBSEQsQ0FHRSxPQUFPcVEsQ0FBUCxFQUFVLENBQUU7QUFDZjs7QUFFRCxNQUFJLENBQUNqVCxhQUFhLENBQUM0QyxJQUFELENBQWxCLEVBQTBCO0FBQ3hCQSxRQUFJLEdBQUcsRUFBUDtBQUNEOztBQUVEakQsUUFBTSxDQUFDMEMsSUFBUCxDQUFZMlEsT0FBWixFQUFxQjFRLE9BQXJCLENBQTZCLFVBQUErSyxVQUFVLEVBQUk7QUFDekMsUUFBSTBGLE9BQU8sQ0FBQ00sbUJBQVIsQ0FBNEJqVSxPQUE1QixDQUFvQ2lPLFVBQXBDLE1BQW9ELENBQUMsQ0FBckQsSUFBMEQsQ0FBQ2xOLE1BQU0sQ0FBQ3lDLElBQUQsRUFBT3lLLFVBQVAsQ0FBckUsRUFBeUY7QUFDdkZ6SyxVQUFJLENBQUN5SyxVQUFELENBQUosR0FBbUIyRixPQUFPLENBQUMzRixVQUFELENBQTFCO0FBQ0Q7QUFDRixHQUpEOztBQU1BLFNBQU96SyxJQUFQO0FBQ0Q7O0FBRUQsSUFBTTBRLFVBQVUsR0FBRyxDQUFDQyxNQUFELEVBQVMvTSxNQUFULEVBQWlCZ04sT0FBakIsRUFBMEI3VCxNQUExQixFQUFrQzZCLEtBQWxDLEVBQXlDLElBQXpDLENBQW5COztBQUVBLFNBQVNpUyxjQUFULENBQXlCblEsSUFBekIsRUFBK0I7QUFDN0IsU0FBTyxTQUFTb1EsUUFBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQ3hDLFFBQUksS0FBSzVCLEdBQVQsRUFBYztBQUNaLFdBQUtBLEdBQUwsQ0FBUzFPLElBQVQsSUFBaUJxUSxNQUFqQixDQURZLENBQ2E7QUFDMUI7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0UsYUFBVCxDQUF3QnRDLFVBQXhCLEVBQW9DdUMsWUFBcEMsRUFBa0Q7QUFDaEQsTUFBTUMsWUFBWSxHQUFHeEMsVUFBVSxDQUFDeUMsU0FBaEM7QUFDQSxNQUFNQyxVQUFVLEdBQUcxQyxVQUFVLENBQUMyQyxPQUE5QjtBQUNBLE1BQU1DLFNBQVMsR0FBRzVDLFVBQVUsQ0FBQ0ksTUFBN0I7O0FBRUEsTUFBSXlDLFFBQVEsR0FBRzdDLFVBQVUsQ0FBQzhDLEtBQTFCOztBQUVBLE1BQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2I3QyxjQUFVLENBQUM4QyxLQUFYLEdBQW1CRCxRQUFRLEdBQUcsRUFBOUI7QUFDRDs7QUFFRCxNQUFNSixTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFJeFMsS0FBSyxDQUFDQyxPQUFOLENBQWNzUyxZQUFkLENBQUosRUFBaUM7QUFDL0JBLGdCQUFZLENBQUN6UixPQUFiLENBQXFCLFVBQUFnUyxRQUFRLEVBQUk7QUFDL0JOLGVBQVMsQ0FBQ25TLElBQVYsQ0FBZXlTLFFBQVEsQ0FBQ3pULE9BQVQsQ0FBaUIsUUFBakIsRUFBOEIsSUFBOUIsZUFBZjtBQUNBLFVBQUl5VCxRQUFRLEtBQUssa0JBQWpCLEVBQXFDO0FBQ25DLFlBQUk5UyxLQUFLLENBQUNDLE9BQU4sQ0FBYzJTLFFBQWQsQ0FBSixFQUE2QjtBQUMzQkEsa0JBQVEsQ0FBQ3ZTLElBQVQsQ0FBYyxNQUFkO0FBQ0F1UyxrQkFBUSxDQUFDdlMsSUFBVCxDQUFjLE9BQWQ7QUFDRCxTQUhELE1BR087QUFDTHVTLGtCQUFRLENBQUM5USxJQUFULEdBQWdCO0FBQ2RzRSxnQkFBSSxFQUFFMkwsTUFEUTtBQUVkL0IsbUJBQU8sRUFBRSxFQUZLLEVBQWhCOztBQUlBNEMsa0JBQVEsQ0FBQ2xQLEtBQVQsR0FBaUI7QUFDZjBDLGdCQUFJLEVBQUUsQ0FBQzJMLE1BQUQsRUFBUy9NLE1BQVQsRUFBaUJnTixPQUFqQixFQUEwQmhTLEtBQTFCLEVBQWlDN0IsTUFBakMsRUFBeUNILElBQXpDLENBRFM7QUFFZmdTLG1CQUFPLEVBQUUsRUFGTSxFQUFqQjs7QUFJRDtBQUNGO0FBQ0YsS0FqQkQ7QUFrQkQ7QUFDRCxNQUFJeFIsYUFBYSxDQUFDaVUsVUFBRCxDQUFiLElBQTZCQSxVQUFVLENBQUNJLEtBQTVDLEVBQW1EO0FBQ2pETCxhQUFTLENBQUNuUyxJQUFWO0FBQ0VpUyxnQkFBWSxDQUFDO0FBQ1hTLGdCQUFVLEVBQUVDLGNBQWMsQ0FBQ1AsVUFBVSxDQUFDSSxLQUFaLEVBQW1CLElBQW5CLENBRGYsRUFBRCxDQURkOzs7QUFLRDtBQUNELE1BQUk3UyxLQUFLLENBQUNDLE9BQU4sQ0FBYzBTLFNBQWQsQ0FBSixFQUE4QjtBQUM1QkEsYUFBUyxDQUFDN1IsT0FBVixDQUFrQixVQUFBbVMsUUFBUSxFQUFJO0FBQzVCLFVBQUl6VSxhQUFhLENBQUN5VSxRQUFELENBQWIsSUFBMkJBLFFBQVEsQ0FBQ0osS0FBeEMsRUFBK0M7QUFDN0NMLGlCQUFTLENBQUNuUyxJQUFWO0FBQ0VpUyxvQkFBWSxDQUFDO0FBQ1hTLG9CQUFVLEVBQUVDLGNBQWMsQ0FBQ0MsUUFBUSxDQUFDSixLQUFWLEVBQWlCLElBQWpCLENBRGYsRUFBRCxDQURkOzs7QUFLRDtBQUNGLEtBUkQ7QUFTRDtBQUNELFNBQU9MLFNBQVA7QUFDRDs7QUFFRCxTQUFTVSxhQUFULENBQXdCdFUsR0FBeEIsRUFBNkJ3SCxJQUE3QixFQUFtQytNLFlBQW5DLEVBQWlEQyxJQUFqRCxFQUF1RDtBQUNyRDtBQUNBLE1BQUlwVCxLQUFLLENBQUNDLE9BQU4sQ0FBY21HLElBQWQsS0FBdUJBLElBQUksQ0FBQzFKLE1BQUwsS0FBZ0IsQ0FBM0MsRUFBOEM7QUFDNUMsV0FBTzBKLElBQUksQ0FBQyxDQUFELENBQVg7QUFDRDtBQUNELFNBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFTNE0sY0FBVCxDQUF5QkgsS0FBekIsRUFBK0QsS0FBL0JRLFVBQStCLHVFQUFsQixLQUFrQixLQUFYRCxJQUFXLHVFQUFKLEVBQUk7QUFDN0QsTUFBTUwsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsTUFBSSxDQUFDTSxVQUFMLEVBQWlCO0FBQ2ZOLGNBQVUsQ0FBQ08sS0FBWCxHQUFtQjtBQUNqQmxOLFVBQUksRUFBRTJMLE1BRFc7QUFFakJyTyxXQUFLLEVBQUUsRUFGVSxFQUFuQjs7QUFJQTtBQUNBcVAsY0FBVSxDQUFDUSxPQUFYLEdBQXFCO0FBQ25Cbk4sVUFBSSxFQUFFakksTUFEYTtBQUVuQnVGLFdBQUssRUFBRSxJQUZZLEVBQXJCOztBQUlBcVAsY0FBVSxDQUFDakMsUUFBWCxHQUFzQixFQUFFO0FBQ3RCMUssVUFBSSxFQUFFLElBRGM7QUFFcEIxQyxXQUFLLEVBQUUsRUFGYTtBQUdwQndPLGNBQVEsRUFBRSxrQkFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEI7QUFDbEMsWUFBTXJCLE1BQU0sR0FBRzVTLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjLElBQWQsQ0FBZjtBQUNBbVQsY0FBTSxDQUFDclIsT0FBUCxDQUFlLFVBQUFrUSxRQUFRLEVBQUk7QUFDekJELGdCQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixJQUFuQjtBQUNELFNBRkQ7QUFHQSxhQUFLd0MsT0FBTCxDQUFhO0FBQ1h6QyxnQkFBTSxFQUFOQSxNQURXLEVBQWI7O0FBR0QsT0FYbUIsRUFBdEI7O0FBYUQ7QUFDRCxNQUFJL1EsS0FBSyxDQUFDQyxPQUFOLENBQWM0UyxLQUFkLENBQUosRUFBMEIsQ0FBRTtBQUMxQkEsU0FBSyxDQUFDL1IsT0FBTixDQUFjLFVBQUFsQyxHQUFHLEVBQUk7QUFDbkJtVSxnQkFBVSxDQUFDblUsR0FBRCxDQUFWLEdBQWtCO0FBQ2hCd0gsWUFBSSxFQUFFLElBRFU7QUFFaEI4TCxnQkFBUSxFQUFFRCxjQUFjLENBQUNyVCxHQUFELENBRlIsRUFBbEI7O0FBSUQsS0FMRDtBQU1ELEdBUEQsTUFPTyxJQUFJSixhQUFhLENBQUNxVSxLQUFELENBQWpCLEVBQTBCLENBQUU7QUFDakMxVSxVQUFNLENBQUMwQyxJQUFQLENBQVlnUyxLQUFaLEVBQW1CL1IsT0FBbkIsQ0FBMkIsVUFBQWxDLEdBQUcsRUFBSTtBQUNoQyxVQUFNNlUsSUFBSSxHQUFHWixLQUFLLENBQUNqVSxHQUFELENBQWxCO0FBQ0EsVUFBSUosYUFBYSxDQUFDaVYsSUFBRCxDQUFqQixFQUF5QixDQUFFO0FBQ3pCLFlBQUkvUCxLQUFLLEdBQUcrUCxJQUFJLENBQUN6RCxPQUFqQjtBQUNBLFlBQUkzUixJQUFJLENBQUNxRixLQUFELENBQVIsRUFBaUI7QUFDZkEsZUFBSyxHQUFHQSxLQUFLLEVBQWI7QUFDRDs7QUFFRCtQLFlBQUksQ0FBQ3JOLElBQUwsR0FBWThNLGFBQWEsQ0FBQ3RVLEdBQUQsRUFBTTZVLElBQUksQ0FBQ3JOLElBQVgsQ0FBekI7O0FBRUEyTSxrQkFBVSxDQUFDblUsR0FBRCxDQUFWLEdBQWtCO0FBQ2hCd0gsY0FBSSxFQUFFMEwsVUFBVSxDQUFDbFUsT0FBWCxDQUFtQjZWLElBQUksQ0FBQ3JOLElBQXhCLE1BQWtDLENBQUMsQ0FBbkMsR0FBdUNxTixJQUFJLENBQUNyTixJQUE1QyxHQUFtRCxJQUR6QztBQUVoQjFDLGVBQUssRUFBTEEsS0FGZ0I7QUFHaEJ3TyxrQkFBUSxFQUFFRCxjQUFjLENBQUNyVCxHQUFELENBSFIsRUFBbEI7O0FBS0QsT0FiRCxNQWFPLENBQUU7QUFDUCxZQUFNd0gsSUFBSSxHQUFHOE0sYUFBYSxDQUFDdFUsR0FBRCxFQUFNNlUsSUFBTixDQUExQjtBQUNBVixrQkFBVSxDQUFDblUsR0FBRCxDQUFWLEdBQWtCO0FBQ2hCd0gsY0FBSSxFQUFFMEwsVUFBVSxDQUFDbFUsT0FBWCxDQUFtQndJLElBQW5CLE1BQTZCLENBQUMsQ0FBOUIsR0FBa0NBLElBQWxDLEdBQXlDLElBRC9CO0FBRWhCOEwsa0JBQVEsRUFBRUQsY0FBYyxDQUFDclQsR0FBRCxDQUZSLEVBQWxCOztBQUlEO0FBQ0YsS0F0QkQ7QUF1QkQ7QUFDRCxTQUFPbVUsVUFBUDtBQUNEOztBQUVELFNBQVNXLFNBQVQsQ0FBb0J4RSxLQUFwQixFQUEyQjtBQUN6QjtBQUNBLE1BQUk7QUFDRkEsU0FBSyxDQUFDeUUsRUFBTixHQUFXM1csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQzRVLFNBQUwsQ0FBZTFDLEtBQWYsQ0FBWCxDQUFYO0FBQ0QsR0FGRCxDQUVFLE9BQU91QyxDQUFQLEVBQVUsQ0FBRTs7QUFFZHZDLE9BQUssQ0FBQzBFLGVBQU4sR0FBd0IvVSxJQUF4QjtBQUNBcVEsT0FBSyxDQUFDMkUsY0FBTixHQUF1QmhWLElBQXZCOztBQUVBcVEsT0FBSyxDQUFDNEUsTUFBTixHQUFlNUUsS0FBSyxDQUFDNEUsTUFBTixJQUFnQixFQUEvQjs7QUFFQSxNQUFJLENBQUNuVixNQUFNLENBQUN1USxLQUFELEVBQVEsUUFBUixDQUFYLEVBQThCO0FBQzVCQSxTQUFLLENBQUM2RSxNQUFOLEdBQWUsRUFBZjtBQUNEOztBQUVELE1BQUlwVixNQUFNLENBQUN1USxLQUFELEVBQVEsVUFBUixDQUFWLEVBQStCO0FBQzdCQSxTQUFLLENBQUM2RSxNQUFOLEdBQWUsT0FBTzdFLEtBQUssQ0FBQzZFLE1BQWIsS0FBd0IsUUFBeEIsR0FBbUM3RSxLQUFLLENBQUM2RSxNQUF6QyxHQUFrRCxFQUFqRTtBQUNBN0UsU0FBSyxDQUFDNkUsTUFBTixDQUFhQyxRQUFiLEdBQXdCOUUsS0FBSyxDQUFDOEUsUUFBOUI7QUFDRDs7QUFFRCxNQUFJeFYsYUFBYSxDQUFDMFEsS0FBSyxDQUFDNkUsTUFBUCxDQUFqQixFQUFpQztBQUMvQjdFLFNBQUssQ0FBQzRFLE1BQU4sR0FBZTNWLE1BQU0sQ0FBQytGLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZ0wsS0FBSyxDQUFDNEUsTUFBeEIsRUFBZ0M1RSxLQUFLLENBQUM2RSxNQUF0QyxDQUFmO0FBQ0Q7O0FBRUQsU0FBTzdFLEtBQVA7QUFDRDs7QUFFRCxTQUFTK0UsYUFBVCxDQUF3QnhFLEVBQXhCLEVBQTRCeUUsY0FBNUIsRUFBNEM7QUFDMUMsTUFBSTNDLE9BQU8sR0FBRzlCLEVBQWQ7QUFDQXlFLGdCQUFjLENBQUNwVCxPQUFmLENBQXVCLFVBQUFxVCxhQUFhLEVBQUk7QUFDdEMsUUFBTUMsUUFBUSxHQUFHRCxhQUFhLENBQUMsQ0FBRCxDQUE5QjtBQUNBLFFBQU16USxLQUFLLEdBQUd5USxhQUFhLENBQUMsQ0FBRCxDQUEzQjtBQUNBLFFBQUlDLFFBQVEsSUFBSSxPQUFPMVEsS0FBUCxLQUFpQixXQUFqQyxFQUE4QyxDQUFFO0FBQzlDLFVBQU0yUSxRQUFRLEdBQUdGLGFBQWEsQ0FBQyxDQUFELENBQTlCO0FBQ0EsVUFBTUcsU0FBUyxHQUFHSCxhQUFhLENBQUMsQ0FBRCxDQUEvQjs7QUFFQSxVQUFJSSxJQUFKO0FBQ0EsVUFBSXZQLE1BQU0sQ0FBQ3dQLFNBQVAsQ0FBaUJKLFFBQWpCLENBQUosRUFBZ0M7QUFDOUJHLFlBQUksR0FBR0gsUUFBUDtBQUNELE9BRkQsTUFFTyxJQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNwQkcsWUFBSSxHQUFHaEQsT0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLE9BQU82QyxRQUFQLEtBQW9CLFFBQXBCLElBQWdDQSxRQUFwQyxFQUE4QztBQUNuRCxZQUFJQSxRQUFRLENBQUN4VyxPQUFULENBQWlCLEtBQWpCLE1BQTRCLENBQWhDLEVBQW1DO0FBQ2pDMlcsY0FBSSxHQUFHSCxRQUFRLENBQUNLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNELFNBRkQsTUFFTztBQUNMRixjQUFJLEdBQUc5RSxFQUFFLENBQUNpRixXQUFILENBQWVOLFFBQWYsRUFBeUI3QyxPQUF6QixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJdk0sTUFBTSxDQUFDd1AsU0FBUCxDQUFpQkQsSUFBakIsQ0FBSixFQUE0QjtBQUMxQmhELGVBQU8sR0FBRzdOLEtBQVY7QUFDRCxPQUZELE1BRU8sSUFBSSxDQUFDMlEsUUFBTCxFQUFlO0FBQ3BCOUMsZUFBTyxHQUFHZ0QsSUFBSSxDQUFDN1EsS0FBRCxDQUFkO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsWUFBSTFELEtBQUssQ0FBQ0MsT0FBTixDQUFjc1UsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCaEQsaUJBQU8sR0FBR2dELElBQUksQ0FBQ25FLElBQUwsQ0FBVSxVQUFBdUUsUUFBUSxFQUFJO0FBQzlCLG1CQUFPbEYsRUFBRSxDQUFDaUYsV0FBSCxDQUFlTCxRQUFmLEVBQXlCTSxRQUF6QixNQUF1Q2pSLEtBQTlDO0FBQ0QsV0FGUyxDQUFWO0FBR0QsU0FKRCxNQUlPLElBQUlsRixhQUFhLENBQUMrVixJQUFELENBQWpCLEVBQXlCO0FBQzlCaEQsaUJBQU8sR0FBR3BULE1BQU0sQ0FBQzBDLElBQVAsQ0FBWTBULElBQVosRUFBa0JuRSxJQUFsQixDQUF1QixVQUFBd0UsT0FBTyxFQUFJO0FBQzFDLG1CQUFPbkYsRUFBRSxDQUFDaUYsV0FBSCxDQUFlTCxRQUFmLEVBQXlCRSxJQUFJLENBQUNLLE9BQUQsQ0FBN0IsTUFBNENsUixLQUFuRDtBQUNELFdBRlMsQ0FBVjtBQUdELFNBSk0sTUFJQTtBQUNMeUksaUJBQU8sQ0FBQ2pQLEtBQVIsQ0FBYyxpQkFBZCxFQUFpQ3FYLElBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJRCxTQUFKLEVBQWU7QUFDYi9DLGVBQU8sR0FBRzlCLEVBQUUsQ0FBQ2lGLFdBQUgsQ0FBZUosU0FBZixFQUEwQi9DLE9BQTFCLENBQVY7QUFDRDtBQUNGO0FBQ0YsR0ExQ0Q7QUEyQ0EsU0FBT0EsT0FBUDtBQUNEOztBQUVELFNBQVNzRCxpQkFBVCxDQUE0QnBGLEVBQTVCLEVBQWdDcUYsS0FBaEMsRUFBdUM1RixLQUF2QyxFQUE4QztBQUM1QyxNQUFNNkYsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE1BQUkvVSxLQUFLLENBQUNDLE9BQU4sQ0FBYzZVLEtBQWQsS0FBd0JBLEtBQUssQ0FBQ3BZLE1BQWxDLEVBQTBDO0FBQ3hDOzs7Ozs7Ozs7OztBQVdBb1ksU0FBSyxDQUFDaFUsT0FBTixDQUFjLFVBQUNzVCxRQUFELEVBQVc1VCxLQUFYLEVBQXFCO0FBQ2pDLFVBQUksT0FBTzRULFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsWUFBSSxDQUFDQSxRQUFMLEVBQWUsQ0FBRTtBQUNmVyxrQkFBUSxDQUFDLE1BQU12VSxLQUFQLENBQVIsR0FBd0JpUCxFQUF4QjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUkyRSxRQUFRLEtBQUssUUFBakIsRUFBMkIsQ0FBRTtBQUMzQlcsb0JBQVEsQ0FBQyxNQUFNdlUsS0FBUCxDQUFSLEdBQXdCME8sS0FBeEI7QUFDRCxXQUZELE1BRU8sSUFBSWtGLFFBQVEsS0FBSyxXQUFqQixFQUE4QjtBQUNuQyxnQkFBSWxGLEtBQUssQ0FBQzZFLE1BQU4sSUFBZ0I3RSxLQUFLLENBQUM2RSxNQUFOLENBQWFpQixRQUFqQyxFQUEyQztBQUN6Q0Qsc0JBQVEsQ0FBQyxNQUFNdlUsS0FBUCxDQUFSLEdBQXdCME8sS0FBSyxDQUFDNkUsTUFBTixDQUFhaUIsUUFBckM7QUFDRCxhQUZELE1BRU87QUFDTEQsc0JBQVEsQ0FBQyxNQUFNdlUsS0FBUCxDQUFSLEdBQXdCLENBQUMwTyxLQUFELENBQXhCO0FBQ0Q7QUFDRixXQU5NLE1BTUEsSUFBSWtGLFFBQVEsQ0FBQ3hXLE9BQVQsQ0FBaUIsU0FBakIsTUFBZ0MsQ0FBcEMsRUFBdUMsQ0FBRTtBQUM5Q21YLG9CQUFRLENBQUMsTUFBTXZVLEtBQVAsQ0FBUixHQUF3QmlQLEVBQUUsQ0FBQ2lGLFdBQUgsQ0FBZU4sUUFBUSxDQUFDL1UsT0FBVCxDQUFpQixTQUFqQixFQUE0QixFQUE1QixDQUFmLEVBQWdENlAsS0FBaEQsQ0FBeEI7QUFDRCxXQUZNLE1BRUE7QUFDTDZGLG9CQUFRLENBQUMsTUFBTXZVLEtBQVAsQ0FBUixHQUF3QmlQLEVBQUUsQ0FBQ2lGLFdBQUgsQ0FBZU4sUUFBZixDQUF4QjtBQUNEO0FBQ0Y7QUFDRixPQWxCRCxNQWtCTztBQUNMVyxnQkFBUSxDQUFDLE1BQU12VSxLQUFQLENBQVIsR0FBd0J5VCxhQUFhLENBQUN4RSxFQUFELEVBQUsyRSxRQUFMLENBQXJDO0FBQ0Q7QUFDRixLQXRCRDtBQXVCRDs7QUFFRCxTQUFPVyxRQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsYUFBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFDM0IsTUFBTXpXLEdBQUcsR0FBRyxFQUFaO0FBQ0EsT0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhVLEdBQUcsQ0FBQ3hZLE1BQXhCLEVBQWdDMEQsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFNK1UsT0FBTyxHQUFHRCxHQUFHLENBQUM5VSxDQUFELENBQW5CO0FBQ0EzQixPQUFHLENBQUMwVyxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQUgsR0FBa0JBLE9BQU8sQ0FBQyxDQUFELENBQXpCO0FBQ0Q7QUFDRCxTQUFPMVcsR0FBUDtBQUNEOztBQUVELFNBQVMyVyxnQkFBVCxDQUEyQjNGLEVBQTNCLEVBQStCUCxLQUEvQixFQUFtRixLQUE3Q25KLElBQTZDLHVFQUF0QyxFQUFzQyxLQUFsQytPLEtBQWtDLHVFQUExQixFQUEwQixLQUF0Qk8sUUFBc0IsdURBQVp4SixVQUFZO0FBQ2pGLE1BQUl5SixlQUFlLEdBQUcsS0FBdEIsQ0FEaUYsQ0FDcEQ7QUFDN0IsTUFBSUQsUUFBSixFQUFjLENBQUU7QUFDZEMsbUJBQWUsR0FBR3BHLEtBQUssQ0FBQ3FHLGFBQU47QUFDaEJyRyxTQUFLLENBQUNxRyxhQUFOLENBQW9CQyxPQURKO0FBRWhCdEcsU0FBSyxDQUFDcUcsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLE9BQTVCLEtBQXdDLElBRjFDO0FBR0EsUUFBSSxDQUFDMVAsSUFBSSxDQUFDckosTUFBVixFQUFrQixDQUFFO0FBQ2xCLFVBQUk0WSxlQUFKLEVBQXFCO0FBQ25CLGVBQU8sQ0FBQ3BHLEtBQUQsQ0FBUDtBQUNEO0FBQ0QsYUFBT0EsS0FBSyxDQUFDNkUsTUFBTixDQUFhaUIsUUFBYixJQUF5QjlGLEtBQUssQ0FBQzZFLE1BQXRDO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNZ0IsUUFBUSxHQUFHRixpQkFBaUIsQ0FBQ3BGLEVBQUQsRUFBS3FGLEtBQUwsRUFBWTVGLEtBQVosQ0FBbEM7O0FBRUEsTUFBTXdHLEdBQUcsR0FBRyxFQUFaO0FBQ0EzUCxNQUFJLENBQUNqRixPQUFMLENBQWEsVUFBQTZVLEdBQUcsRUFBSTtBQUNsQixRQUFJQSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUNwQixVQUFJOUosVUFBVSxLQUFLLGFBQWYsSUFBZ0MsQ0FBQ3dKLFFBQXJDLEVBQStDLENBQUU7QUFDL0NLLFdBQUcsQ0FBQ3JWLElBQUosQ0FBUzZPLEtBQUssQ0FBQzRFLE1BQU4sQ0FBYXBRLEtBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSTJSLFFBQVEsSUFBSSxDQUFDQyxlQUFqQixFQUFrQztBQUNoQ0ksYUFBRyxDQUFDclYsSUFBSixDQUFTNk8sS0FBSyxDQUFDNkUsTUFBTixDQUFhaUIsUUFBYixDQUFzQixDQUF0QixDQUFUO0FBQ0QsU0FGRCxNQUVPLENBQUU7QUFDUFUsYUFBRyxDQUFDclYsSUFBSixDQUFTNk8sS0FBVDtBQUNEO0FBQ0Y7QUFDRixLQVZELE1BVU87QUFDTCxVQUFJbFAsS0FBSyxDQUFDQyxPQUFOLENBQWMwVixHQUFkLEtBQXNCQSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsR0FBckMsRUFBMEM7QUFDeENELFdBQUcsQ0FBQ3JWLElBQUosQ0FBUzRVLGFBQWEsQ0FBQ1UsR0FBRCxDQUF0QjtBQUNELE9BRkQsTUFFTyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCaFgsTUFBTSxDQUFDb1csUUFBRCxFQUFXWSxHQUFYLENBQXJDLEVBQXNEO0FBQzNERCxXQUFHLENBQUNyVixJQUFKLENBQVMwVSxRQUFRLENBQUNZLEdBQUQsQ0FBakI7QUFDRCxPQUZNLE1BRUE7QUFDTEQsV0FBRyxDQUFDclYsSUFBSixDQUFTc1YsR0FBVDtBQUNEO0FBQ0Y7QUFDRixHQXBCRDs7QUFzQkEsU0FBT0QsR0FBUDtBQUNEOztBQUVELElBQU1FLElBQUksR0FBRyxHQUFiO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEdBQWY7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMkJDLFNBQTNCLEVBQXNDQyxPQUF0QyxFQUErQztBQUM3QyxTQUFRRCxTQUFTLEtBQUtDLE9BQWY7O0FBRUhBLFNBQU8sS0FBSyxjQUFaOztBQUVFRCxXQUFTLEtBQUssT0FBZDtBQUNBQSxXQUFTLEtBQUssS0FIaEIsQ0FGSjs7O0FBUUQ7O0FBRUQsU0FBU0UsWUFBVCxDQUF1QnhHLEVBQXZCLEVBQTJCO0FBQ3pCLE1BQUl5RyxPQUFPLEdBQUd6RyxFQUFFLENBQUN5RyxPQUFqQjtBQUNBO0FBQ0EsU0FBT0EsT0FBTyxJQUFJQSxPQUFPLENBQUNBLE9BQW5CLEtBQStCQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUI1QyxPQUFqQixJQUE0QjJDLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQkMsUUFBaEIsQ0FBeUI1QyxPQUFyRCxJQUFnRTJDLE9BQU8sQ0FBQ0UsTUFBUixDQUFlL0UsUUFBOUcsQ0FBUCxFQUFnSTtBQUM5SDZFLFdBQU8sR0FBR0EsT0FBTyxDQUFDQSxPQUFsQjtBQUNEO0FBQ0QsU0FBT0EsT0FBTyxJQUFJQSxPQUFPLENBQUNBLE9BQTFCO0FBQ0Q7O0FBRUQsU0FBU0csV0FBVCxDQUFzQm5ILEtBQXRCLEVBQTZCO0FBQzNCQSxPQUFLLEdBQUd3RSxTQUFTLENBQUN4RSxLQUFELENBQWpCOztBQUVBO0FBQ0EsTUFBTXNHLE9BQU8sR0FBRyxDQUFDdEcsS0FBSyxDQUFDcUcsYUFBTixJQUF1QnJHLEtBQUssQ0FBQzRFLE1BQTlCLEVBQXNDMEIsT0FBdEQ7QUFDQSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFdBQU9ySixPQUFPLENBQUNDLElBQVIsQ0FBYSxTQUFiLENBQVA7QUFDRDtBQUNELE1BQU1rSyxTQUFTLEdBQUdkLE9BQU8sQ0FBQ2MsU0FBUixJQUFxQmQsT0FBTyxDQUFDLFlBQUQsQ0FBOUMsQ0FSMkIsQ0FRbUM7QUFDOUQsTUFBSSxDQUFDYyxTQUFMLEVBQWdCO0FBQ2QsV0FBT25LLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFNBQWIsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsTUFBTTJKLFNBQVMsR0FBRzdHLEtBQUssQ0FBQzlJLElBQXhCOztBQUVBLE1BQU1zUCxHQUFHLEdBQUcsRUFBWjs7QUFFQVksV0FBUyxDQUFDeFYsT0FBVixDQUFrQixVQUFBeVYsUUFBUSxFQUFJO0FBQzVCLFFBQUluUSxJQUFJLEdBQUdtUSxRQUFRLENBQUMsQ0FBRCxDQUFuQjtBQUNBLFFBQU1DLFdBQVcsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBNUI7O0FBRUEsUUFBTWxCLFFBQVEsR0FBR2pQLElBQUksQ0FBQ3FRLE1BQUwsQ0FBWSxDQUFaLE1BQW1CWixNQUFwQztBQUNBelAsUUFBSSxHQUFHaVAsUUFBUSxHQUFHalAsSUFBSSxDQUFDakssS0FBTCxDQUFXLENBQVgsQ0FBSCxHQUFtQmlLLElBQWxDO0FBQ0EsUUFBTXNRLE1BQU0sR0FBR3RRLElBQUksQ0FBQ3FRLE1BQUwsQ0FBWSxDQUFaLE1BQW1CYixJQUFsQztBQUNBeFAsUUFBSSxHQUFHc1EsTUFBTSxHQUFHdFEsSUFBSSxDQUFDakssS0FBTCxDQUFXLENBQVgsQ0FBSCxHQUFtQmlLLElBQWhDOztBQUVBLFFBQUlvUSxXQUFXLElBQUlWLGdCQUFnQixDQUFDQyxTQUFELEVBQVkzUCxJQUFaLENBQW5DLEVBQXNEO0FBQ3BEb1EsaUJBQVcsQ0FBQzFWLE9BQVosQ0FBb0IsVUFBQTZWLFVBQVUsRUFBSTtBQUNoQyxZQUFNOUssVUFBVSxHQUFHOEssVUFBVSxDQUFDLENBQUQsQ0FBN0I7QUFDQSxZQUFJOUssVUFBSixFQUFnQjtBQUNkLGNBQUkrSyxVQUFVLEdBQUcsTUFBSSxDQUFDcEcsR0FBdEI7QUFDQSxjQUFJb0csVUFBVSxDQUFDVCxRQUFYLENBQW9CNUMsT0FBeEIsRUFBaUMsQ0FBRTtBQUNqQ3FELHNCQUFVLEdBQUdYLFlBQVksQ0FBQ1csVUFBRCxDQUFaLElBQTRCQSxVQUF6QztBQUNEO0FBQ0QsY0FBSS9LLFVBQVUsS0FBSyxPQUFuQixFQUE0QjtBQUMxQitLLHNCQUFVLENBQUM3SSxLQUFYLENBQWlCN0gsS0FBakIsQ0FBdUIwUSxVQUF2QjtBQUNFeEIsNEJBQWdCO0FBQ2Qsa0JBQUksQ0FBQzVFLEdBRFM7QUFFZHRCLGlCQUZjO0FBR2R5SCxzQkFBVSxDQUFDLENBQUQsQ0FISTtBQUlkQSxzQkFBVSxDQUFDLENBQUQsQ0FKSTtBQUtkdEIsb0JBTGM7QUFNZHhKLHNCQU5jLENBRGxCOztBQVNBO0FBQ0Q7QUFDRCxjQUFNZ0wsT0FBTyxHQUFHRCxVQUFVLENBQUMvSyxVQUFELENBQTFCO0FBQ0EsY0FBSSxDQUFDeE4sSUFBSSxDQUFDd1ksT0FBRCxDQUFULEVBQW9CO0FBQ2xCLGtCQUFNLElBQUkxWixLQUFKLGdCQUFrQjBPLFVBQWxCLHdCQUFOO0FBQ0Q7QUFDRCxjQUFJNkssTUFBSixFQUFZO0FBQ1YsZ0JBQUlHLE9BQU8sQ0FBQ0MsSUFBWixFQUFrQjtBQUNoQjtBQUNEO0FBQ0RELG1CQUFPLENBQUNDLElBQVIsR0FBZSxJQUFmO0FBQ0Q7QUFDRCxjQUFJdFUsTUFBTSxHQUFHNFMsZ0JBQWdCO0FBQzNCLGdCQUFJLENBQUM1RSxHQURzQjtBQUUzQnRCLGVBRjJCO0FBRzNCeUgsb0JBQVUsQ0FBQyxDQUFELENBSGlCO0FBSTNCQSxvQkFBVSxDQUFDLENBQUQsQ0FKaUI7QUFLM0J0QixrQkFMMkI7QUFNM0J4SixvQkFOMkIsQ0FBN0I7O0FBUUFySixnQkFBTSxHQUFHeEMsS0FBSyxDQUFDQyxPQUFOLENBQWN1QyxNQUFkLElBQXdCQSxNQUF4QixHQUFpQyxFQUExQztBQUNBO0FBQ0EsY0FBSSw0REFBNERVLElBQTVELENBQWlFMlQsT0FBTyxDQUFDM2EsUUFBUixFQUFqRSxDQUFKLEVBQTBGO0FBQ3hGO0FBQ0FzRyxrQkFBTSxHQUFHQSxNQUFNLENBQUN6QyxNQUFQLENBQWMsWUFBcUJtUCxLQUFyQixDQUFkLENBQVQ7QUFDRDtBQUNEd0csYUFBRyxDQUFDclYsSUFBSixDQUFTd1csT0FBTyxDQUFDM1EsS0FBUixDQUFjMFEsVUFBZCxFQUEwQnBVLE1BQTFCLENBQVQ7QUFDRDtBQUNGLE9BN0NEO0FBOENEO0FBQ0YsR0F6REQ7O0FBMkRBO0FBQ0V1VCxXQUFTLEtBQUssT0FBZDtBQUNBTCxLQUFHLENBQUNoWixNQUFKLEtBQWUsQ0FEZjtBQUVBLFNBQU9nWixHQUFHLENBQUMsQ0FBRCxDQUFWLEtBQWtCLFdBSHBCO0FBSUU7QUFDQSxXQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNdlYsS0FBSyxHQUFHO0FBQ1osUUFEWTtBQUVaLFFBRlk7QUFHWixTQUhZO0FBSVosZ0JBSlk7QUFLWixlQUxZO0FBTVosc0JBTlksQ0FBZDs7O0FBU0EsU0FBUzRXLGtCQUFULEdBQStCO0FBQzdCdlosZUFBSUMsU0FBSixDQUFjdVoscUJBQWQsR0FBc0MsWUFBWTtBQUNoRCxRQUFJLENBQUMsS0FBS0MsZ0JBQVYsRUFBNEI7QUFDMUIsV0FBS0EsZ0JBQUwsR0FBd0IsSUFBSXpSLFlBQUosRUFBeEI7QUFDRDtBQUNELFdBQU8sS0FBS3lSLGdCQUFaO0FBQ0QsR0FMRDtBQU1BLE1BQU1DLFFBQVEsR0FBRzFaLGFBQUlDLFNBQUosQ0FBY2dULFdBQS9CO0FBQ0FqVCxlQUFJQyxTQUFKLENBQWNnVCxXQUFkLEdBQTRCLFVBQVVsUSxJQUFWLEVBQWdCd0YsSUFBaEIsRUFBc0I7QUFDaEQsUUFBSXhGLElBQUksS0FBSyxRQUFULElBQXFCd0YsSUFBckIsSUFBNkJBLElBQUksQ0FBQ29SLE1BQXRDLEVBQThDO0FBQzVDLFdBQUtGLGdCQUFMLEdBQXdCblEsZUFBZSxDQUFDZixJQUFJLENBQUNvUixNQUFOLENBQXZDO0FBQ0EsYUFBT3BSLElBQUksQ0FBQ29SLE1BQVo7QUFDRDtBQUNELFdBQU9ELFFBQVEsQ0FBQ3hZLElBQVQsQ0FBYyxJQUFkLEVBQW9CNkIsSUFBcEIsRUFBMEJ3RixJQUExQixDQUFQO0FBQ0QsR0FORDtBQU9EOztBQUVELFNBQVNxUixxQkFBVCxHQUFrQztBQUNoQyxNQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxFQUFoQjs7QUFFQTlaLGVBQUlDLFNBQUosQ0FBYzhaLHFCQUFkLEdBQXNDLFVBQVVqRSxLQUFWLEVBQWlCO0FBQ3JELFFBQU1rRSxHQUFHLEdBQUdILE1BQU0sQ0FBQy9ELEtBQUQsQ0FBbEI7QUFDQSxRQUFJLENBQUNrRSxHQUFMLEVBQVU7QUFDUkYsYUFBTyxDQUFDaEUsS0FBRCxDQUFQLEdBQWlCLElBQWpCO0FBQ0EsV0FBSzNGLEdBQUwsQ0FBUyxjQUFULEVBQXlCLFlBQU07QUFDN0IsZUFBTzJKLE9BQU8sQ0FBQ2hFLEtBQUQsQ0FBZDtBQUNELE9BRkQ7QUFHRDtBQUNELFdBQU9rRSxHQUFQO0FBQ0QsR0FURDs7QUFXQWhhLGVBQUlDLFNBQUosQ0FBY2dhLHFCQUFkLEdBQXNDLFVBQVVuRSxLQUFWLEVBQWlCeFIsSUFBakIsRUFBdUJsRCxHQUF2QixFQUE0QjtBQUNoRSxRQUFNd0MsSUFBSSxHQUFHaVcsTUFBTSxDQUFDL0QsS0FBRCxDQUFuQjtBQUNBLFFBQUlsUyxJQUFKLEVBQVU7QUFDUixVQUFNc1csTUFBTSxHQUFHdFcsSUFBSSxDQUFDVSxJQUFELENBQUosSUFBYyxFQUE3QjtBQUNBLGFBQU9sRCxHQUFHLEdBQUc4WSxNQUFNLENBQUM5WSxHQUFELENBQVQsR0FBaUI4WSxNQUEzQjtBQUNELEtBSEQsTUFHTztBQUNMSixhQUFPLENBQUNoRSxLQUFELENBQVAsR0FBaUIsSUFBakI7QUFDQSxXQUFLM0YsR0FBTCxDQUFTLGNBQVQsRUFBeUIsWUFBTTtBQUM3QixlQUFPMkosT0FBTyxDQUFDaEUsS0FBRCxDQUFkO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FYRDs7QUFhQTlWLGVBQUlDLFNBQUosQ0FBY2thLHFCQUFkLEdBQXNDLFVBQVU3VixJQUFWLEVBQWdCNEIsS0FBaEIsRUFBdUI7QUFDM0QsUUFBTTRQLEtBQUssR0FBRyxLQUFLNkMsUUFBTCxDQUFjeUIsU0FBZCxDQUF3QnRFLEtBQXRDO0FBQ0EsUUFBTW9FLE1BQU0sR0FBR0wsTUFBTSxDQUFDL0QsS0FBRCxDQUFOLEdBQWdCK0QsTUFBTSxDQUFDL0QsS0FBRCxDQUFOLElBQWlCLEVBQWhEO0FBQ0FvRSxVQUFNLENBQUM1VixJQUFELENBQU4sR0FBZTRCLEtBQWY7QUFDQSxRQUFJNFQsT0FBTyxDQUFDaEUsS0FBRCxDQUFYLEVBQW9CO0FBQ2xCZ0UsYUFBTyxDQUFDaEUsS0FBRCxDQUFQLENBQWV1RSxZQUFmO0FBQ0Q7QUFDRixHQVBEOztBQVNBcmEsZUFBSTZTLEtBQUosQ0FBVTtBQUNSeUgsYUFEUSx1QkFDSztBQUNYLFVBQU1GLFNBQVMsR0FBRyxLQUFLekIsUUFBTCxDQUFjeUIsU0FBaEM7QUFDQSxVQUFNdEUsS0FBSyxHQUFHc0UsU0FBUyxJQUFJQSxTQUFTLENBQUN0RSxLQUFyQztBQUNBLFVBQUlBLEtBQUosRUFBVztBQUNULGVBQU8rRCxNQUFNLENBQUMvRCxLQUFELENBQWI7QUFDQSxlQUFPZ0UsT0FBTyxDQUFDaEUsS0FBRCxDQUFkO0FBQ0Q7QUFDRixLQVJPLEVBQVY7O0FBVUQ7O0FBRUQsU0FBU3lFLFlBQVQsQ0FBdUJ0SSxFQUF2Qjs7O0FBR0csS0FGREMsS0FFQyxTQUZEQSxLQUVDLENBRERzSSxRQUNDLFNBRERBLFFBQ0M7QUFDRGpCLG9CQUFrQjtBQUNsQjtBQUNFSyx5QkFBcUI7QUFDdEI7QUFDRCxNQUFJM0gsRUFBRSxDQUFDMEcsUUFBSCxDQUFZOEIsS0FBaEIsRUFBdUI7QUFDckJ6YSxpQkFBSUMsU0FBSixDQUFjeWEsTUFBZCxHQUF1QnpJLEVBQUUsQ0FBQzBHLFFBQUgsQ0FBWThCLEtBQW5DO0FBQ0Q7QUFDRDFhLFlBQVUsQ0FBQ0MsWUFBRCxDQUFWOztBQUVBQSxlQUFJQyxTQUFKLENBQWMwYSxNQUFkLEdBQXVCLFlBQXZCOztBQUVBM2EsZUFBSTZTLEtBQUosQ0FBVTtBQUNSK0gsZ0JBRFEsMEJBQ1E7QUFDZCxVQUFJLENBQUMsS0FBS2pDLFFBQUwsQ0FBY3ZHLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsV0FBS0EsTUFBTCxHQUFjLEtBQUt1RyxRQUFMLENBQWN2RyxNQUE1Qjs7QUFFQSxXQUFLRCxHQUFMO0FBQ0V2TyxZQUFJLEVBQUUsRUFEUjtBQUVHLFdBQUt3TyxNQUZSLEVBRWlCLEtBQUt1RyxRQUFMLENBQWNwSCxVQUYvQjs7O0FBS0EsV0FBS3FILE1BQUwsR0FBYyxLQUFLRCxRQUFMLENBQWNwSCxVQUE1Qjs7QUFFQSxhQUFPLEtBQUtvSCxRQUFMLENBQWN2RyxNQUFyQjtBQUNBLGFBQU8sS0FBS3VHLFFBQUwsQ0FBY3BILFVBQXJCO0FBQ0EsVUFBSSxLQUFLYSxNQUFMLEtBQWdCLE1BQWhCLElBQTBCLE9BQU95SSxNQUFQLEtBQWtCLFVBQWhELEVBQTRELENBQUU7QUFDNUQsWUFBTUMsR0FBRyxHQUFHRCxNQUFNLEVBQWxCO0FBQ0EsWUFBSUMsR0FBRyxDQUFDOUgsR0FBSixJQUFXOEgsR0FBRyxDQUFDOUgsR0FBSixDQUFRK0gsS0FBdkIsRUFBOEI7QUFDNUIsZUFBS0MsS0FBTCxHQUFhRixHQUFHLENBQUM5SCxHQUFKLENBQVErSCxLQUFyQjtBQUNEO0FBQ0Y7QUFDRCxVQUFJLEtBQUszSSxNQUFMLEtBQWdCLEtBQXBCLEVBQTJCO0FBQ3pCb0ksZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQXhJLGlCQUFTLENBQUMsSUFBRCxFQUFPRSxLQUFQLENBQVQ7QUFDRDtBQUNGLEtBM0JPLEVBQVY7OztBQThCQSxNQUFNK0ksVUFBVSxHQUFHO0FBQ2pCQyxZQURpQixvQkFDUDNTLElBRE8sRUFDRDtBQUNkLFVBQUksS0FBS3lLLEdBQVQsRUFBYyxDQUFFO0FBQ2Q7QUFDRDs7QUFFRCxXQUFLQSxHQUFMLEdBQVdmLEVBQVg7O0FBRUEsV0FBS2UsR0FBTCxDQUFTYixHQUFULEdBQWU7QUFDYjJJLFdBQUcsRUFBRSxJQURRLEVBQWY7OztBQUlBLFdBQUs5SCxHQUFMLENBQVM0RixNQUFULEdBQWtCLElBQWxCO0FBQ0E7QUFDQSxXQUFLNUYsR0FBTCxDQUFTbUksVUFBVCxHQUFzQixLQUFLQSxVQUEzQjs7QUFFQSxXQUFLbkksR0FBTCxDQUFTb0ksVUFBVCxHQUFzQixJQUF0QjtBQUNBLFdBQUtwSSxHQUFMLENBQVNDLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0MxSyxJQUFoQzs7QUFFQSxXQUFLeUssR0FBTCxDQUFTQyxXQUFULENBQXFCLFVBQXJCLEVBQWlDMUssSUFBakM7QUFDRCxLQXBCZ0IsRUFBbkI7OztBQXVCQTtBQUNBMFMsWUFBVSxDQUFDRSxVQUFYLEdBQXdCbEosRUFBRSxDQUFDMEcsUUFBSCxDQUFZd0MsVUFBWixJQUEwQixFQUFsRDtBQUNBO0FBQ0EsTUFBTW5ILE9BQU8sR0FBRy9CLEVBQUUsQ0FBQzBHLFFBQUgsQ0FBWTNFLE9BQTVCO0FBQ0EsTUFBSUEsT0FBSixFQUFhO0FBQ1hyVCxVQUFNLENBQUMwQyxJQUFQLENBQVkyUSxPQUFaLEVBQXFCMVEsT0FBckIsQ0FBNkIsVUFBQWdCLElBQUksRUFBSTtBQUNuQzJXLGdCQUFVLENBQUMzVyxJQUFELENBQVYsR0FBbUIwUCxPQUFPLENBQUMxUCxJQUFELENBQTFCO0FBQ0QsS0FGRDtBQUdEOztBQUVEd08sV0FBUyxDQUFDbUksVUFBRCxFQUFhdFksS0FBYixDQUFUOztBQUVBLFNBQU9zWSxVQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksYUFBVCxDQUF3QnBKLEVBQXhCLEVBQTRCcUosTUFBNUIsRUFBb0M7QUFDbEMsTUFBTUMsU0FBUyxHQUFHdEosRUFBRSxDQUFDc0osU0FBckI7QUFDQTtBQUNBLE9BQUssSUFBSTNZLENBQUMsR0FBRzJZLFNBQVMsQ0FBQ3JjLE1BQVYsR0FBbUIsQ0FBaEMsRUFBbUMwRCxDQUFDLElBQUksQ0FBeEMsRUFBMkNBLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsUUFBTTRZLE9BQU8sR0FBR0QsU0FBUyxDQUFDM1ksQ0FBRCxDQUF6QjtBQUNBLFFBQUk0WSxPQUFPLENBQUM1QyxNQUFSLENBQWVoRixPQUFmLEtBQTJCMEgsTUFBL0IsRUFBdUM7QUFDckMsYUFBT0UsT0FBUDtBQUNEO0FBQ0Y7QUFDRDtBQUNBLE1BQUlDLFFBQUo7QUFDQSxPQUFLLElBQUk3WSxFQUFDLEdBQUcyWSxTQUFTLENBQUNyYyxNQUFWLEdBQW1CLENBQWhDLEVBQW1DMEQsRUFBQyxJQUFJLENBQXhDLEVBQTJDQSxFQUFDLEVBQTVDLEVBQWdEO0FBQzlDNlksWUFBUSxHQUFHSixhQUFhLENBQUNFLFNBQVMsQ0FBQzNZLEVBQUQsQ0FBVixFQUFlMFksTUFBZixDQUF4QjtBQUNBLFFBQUlHLFFBQUosRUFBYztBQUNaLGFBQU9BLFFBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBUzNHLFlBQVQsQ0FBdUJ6USxPQUF2QixFQUFnQztBQUM5QixTQUFPcVgsUUFBUSxDQUFDclgsT0FBRCxDQUFmO0FBQ0Q7O0FBRUQsU0FBU3NYLFVBQVQsQ0FBcUJqSyxLQUFyQixFQUE0Qjs7OztBQUl0QkEsT0FBSyxDQUFDNkUsTUFBTixJQUFnQjdFLEtBQUssQ0FBQ3hMLEtBSkEsQ0FFeEJvVixNQUZ3QixTQUV4QkEsTUFGd0IsQ0FHeEIvSSxVQUh3QixTQUd4QkEsVUFId0IsRUFJTzs7QUFFakMsTUFBSWtKLFFBQUo7O0FBRUEsTUFBSUgsTUFBSixFQUFZO0FBQ1ZHLFlBQVEsR0FBR0osYUFBYSxDQUFDLEtBQUtySSxHQUFOLEVBQVdzSSxNQUFYLENBQXhCO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHLEtBQUt6SSxHQUFoQjtBQUNEOztBQUVEVCxZQUFVLENBQUNxSixNQUFYLEdBQW9CSCxRQUFwQjtBQUNEOztBQUVELElBQU12SixLQUFLLEdBQUcsQ0FBQyxXQUFELEVBQWMsZUFBZCxFQUErQixZQUEvQixFQUE2QyxZQUE3QyxDQUFkOztBQUVBLFNBQVMySixNQUFULEdBQW1CO0FBQ2pCLFNBQU8sS0FBS0MsVUFBTCxLQUFvQixDQUFwQixJQUF5QixLQUFLQyxVQUFMLEtBQW9CLENBQXBEO0FBQ0Q7O0FBRUQsU0FBU3ZCLFFBQVQsQ0FBbUJ2SSxFQUFuQixFQUF1QjtBQUNyQixNQUFNVixVQUFVLEdBQUdVLEVBQUUsQ0FBQzJHLE1BQXRCO0FBQ0E7QUFDQSxNQUFNb0QsWUFBWSxHQUFHdFIsUUFBUSxDQUFDM0wsRUFBRSxDQUFDa0ksaUJBQUgsR0FBdUJnVixVQUF2QixDQUFrQzNkLEtBQWxDLENBQXdDLEdBQXhDLEVBQTZDLENBQTdDLENBQUQsQ0FBN0I7QUFDQSxNQUFJMGQsWUFBWSxHQUFHLEVBQW5CLEVBQXVCO0FBQ3JCcmIsVUFBTSxDQUFDdWIsY0FBUCxDQUFzQmpLLEVBQXRCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQ2pDa0ssU0FEaUMsaUJBQzFCO0FBQ0wsWUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFDQSxZQUFNQyxVQUFVLEdBQUc5SyxVQUFVLENBQUMrSyxtQkFBWCxDQUErQixVQUEvQixDQUFuQjtBQUNBRCxrQkFBVSxDQUFDL1ksT0FBWCxDQUFtQixVQUFBaVosU0FBUyxFQUFJO0FBQzlCLGNBQU1DLEdBQUcsR0FBR0QsU0FBUyxDQUFDdkUsT0FBVixDQUFrQndFLEdBQTlCO0FBQ0FKLGVBQUssQ0FBQ0ksR0FBRCxDQUFMLEdBQWFELFNBQVMsQ0FBQ3ZKLEdBQVYsSUFBaUJ1SixTQUE5QjtBQUNELFNBSEQ7QUFJQSxZQUFNRSxhQUFhLEdBQUdsTCxVQUFVLENBQUMrSyxtQkFBWCxDQUErQixpQkFBL0IsQ0FBdEI7QUFDQUcscUJBQWEsQ0FBQ25aLE9BQWQsQ0FBc0IsVUFBQWlaLFNBQVMsRUFBSTtBQUNqQyxjQUFNQyxHQUFHLEdBQUdELFNBQVMsQ0FBQ3ZFLE9BQVYsQ0FBa0J3RSxHQUE5QjtBQUNBLGNBQUksQ0FBQ0osS0FBSyxDQUFDSSxHQUFELENBQVYsRUFBaUI7QUFDZkosaUJBQUssQ0FBQ0ksR0FBRCxDQUFMLEdBQWEsRUFBYjtBQUNEO0FBQ0RKLGVBQUssQ0FBQ0ksR0FBRCxDQUFMLENBQVczWixJQUFYLENBQWdCMFosU0FBUyxDQUFDdkosR0FBVixJQUFpQnVKLFNBQWpDO0FBQ0QsU0FORDtBQU9BLGVBQU9ILEtBQVA7QUFDRCxPQWpCZ0MsRUFBbkM7O0FBbUJELEdBcEJELE1Bb0JPO0FBQ0w3SyxjQUFVLENBQUMrSyxtQkFBWCxDQUErQixVQUEvQixFQUEyQyxVQUFDRCxVQUFELEVBQWdCO0FBQ3pEQSxnQkFBVSxDQUFDL1ksT0FBWCxDQUFtQixVQUFBaVosU0FBUyxFQUFJO0FBQzlCLFlBQU1DLEdBQUcsR0FBR0QsU0FBUyxDQUFDdkUsT0FBVixDQUFrQndFLEdBQTlCO0FBQ0F2SyxVQUFFLENBQUNtSyxLQUFILENBQVNJLEdBQVQsSUFBZ0JELFNBQVMsQ0FBQ3ZKLEdBQVYsSUFBaUJ1SixTQUFqQztBQUNELE9BSEQ7QUFJRCxLQUxEO0FBTUFoTCxjQUFVLENBQUMrSyxtQkFBWCxDQUErQixpQkFBL0IsRUFBa0QsVUFBQ0csYUFBRCxFQUFtQjtBQUNuRUEsbUJBQWEsQ0FBQ25aLE9BQWQsQ0FBc0IsVUFBQWlaLFNBQVMsRUFBSTtBQUNqQyxZQUFNQyxHQUFHLEdBQUdELFNBQVMsQ0FBQ3ZFLE9BQVYsQ0FBa0J3RSxHQUE5QjtBQUNBLFlBQUksQ0FBQ3ZLLEVBQUUsQ0FBQ21LLEtBQUgsQ0FBU0ksR0FBVCxDQUFMLEVBQW9CO0FBQ2xCdkssWUFBRSxDQUFDbUssS0FBSCxDQUFTSSxHQUFULElBQWdCLEVBQWhCO0FBQ0Q7QUFDRHZLLFVBQUUsQ0FBQ21LLEtBQUgsQ0FBU0ksR0FBVCxFQUFjM1osSUFBZCxDQUFtQjBaLFNBQVMsQ0FBQ3ZKLEdBQVYsSUFBaUJ1SixTQUFwQztBQUNELE9BTkQ7QUFPRCxLQVJEO0FBU0Q7QUFDRjs7QUFFRCxJQUFNRyxTQUFTLEdBQUcvYixNQUFNLENBQUNhLE1BQVAsQ0FBYyxJQUFkLENBQWxCOztBQUVBLFNBQVNtYixZQUFUOzs7QUFHRyxLQUZEckIsTUFFQyxTQUZEQSxNQUVDLENBREQvSixVQUNDLFNBRERBLFVBQ0M7QUFDRDtBQUNBLE1BQU1xTCxNQUFNLEdBQUcsQ0FBQ3JMLFVBQVUsQ0FBQ3dLLFVBQVgsSUFBeUJ4SyxVQUFVLENBQUN1SyxVQUFyQyxJQUFtRCxFQUFsRTtBQUNBLE1BQU1lLFNBQVMsR0FBR3RMLFVBQVUsQ0FBQ3VMLGFBQVgsR0FBMkIsRUFBN0M7O0FBRUFKLFdBQVMsQ0FBQ0csU0FBUyxHQUFHLEdBQVosR0FBa0JELE1BQW5CLENBQVQsR0FBc0NyTCxVQUFVLENBQUN5QixHQUFqRDs7QUFFQSxPQUFLdkIsWUFBTCxDQUFrQixLQUFsQixFQUF5QjtBQUN2QjZKLFVBQU0sRUFBTkEsTUFEdUI7QUFFdkJzQixVQUFNLEVBQU5BLE1BRnVCO0FBR3ZCQyxhQUFTLEVBQVRBLFNBSHVCLEVBQXpCOztBQUtEOztBQUVELFNBQVNFLFlBQVQ7Ozs7OztBQU1HLDBCQUxEeEcsTUFLQyxDQUpDK0UsTUFJRCxnQkFKQ0EsTUFJRCxDQUhDc0IsTUFHRCxnQkFIQ0EsTUFHRCxDQUZDQyxTQUVELGdCQUZDQSxTQUVEO0FBQ0QsTUFBTTVLLEVBQUUsR0FBR3lLLFNBQVMsQ0FBQ0csU0FBUyxHQUFHLEdBQVosR0FBa0JELE1BQW5CLENBQXBCO0FBQ0EsTUFBSSxDQUFDM0ssRUFBTCxFQUFTO0FBQ1A7QUFDRDs7QUFFRCxNQUFJd0osUUFBSjs7QUFFQSxNQUFJSCxNQUFKLEVBQVk7QUFDVkcsWUFBUSxHQUFHSixhQUFhLENBQUMsS0FBS3JJLEdBQU4sRUFBV3NJLE1BQVgsQ0FBeEI7QUFDRDs7QUFFRCxNQUFJLENBQUNHLFFBQUwsRUFBZTtBQUNiQSxZQUFRLEdBQUcsS0FBS3pJLEdBQWhCO0FBQ0Q7O0FBRURmLElBQUUsQ0FBQ3lHLE9BQUgsR0FBYStDLFFBQWI7QUFDQXhKLElBQUUsQ0FBQytLLEtBQUgsR0FBV3ZCLFFBQVEsQ0FBQ3VCLEtBQXBCO0FBQ0F2QixVQUFRLENBQUNGLFNBQVQsQ0FBbUIxWSxJQUFuQixDQUF3Qm9QLEVBQXhCOztBQUVBQSxJQUFFLENBQUNnQixXQUFILENBQWUsU0FBZjtBQUNBaEIsSUFBRSxDQUFDZ0IsV0FBSCxDQUFlLGFBQWY7QUFDQWhCLElBQUUsQ0FBQ21KLFVBQUgsR0FBZ0IsSUFBaEI7QUFDQW5KLElBQUUsQ0FBQ2dCLFdBQUgsQ0FBZSxTQUFmO0FBQ0FoQixJQUFFLENBQUNnQixXQUFILENBQWUsU0FBZjtBQUNEOztBQUVELFNBQVNnSyxRQUFULENBQW1CaEwsRUFBbkIsRUFBdUI7QUFDckJqUyxlQUFJQyxTQUFKLENBQWNpZCxVQUFkLEdBQTJCLElBQTNCLENBRHFCLENBQ1k7O0FBRWpDbGQsZUFBSTZTLEtBQUosQ0FBVTtBQUNSc0ssV0FEUSxxQkFDRyxDQUFFO0FBQ1gsVUFBSSxLQUFLL0ssTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QjtBQUNFLGFBQUtBLE1BQUwsS0FBZ0IsTUFBaEI7QUFDVSxTQUFDLEtBQUt3RyxNQUFMLENBQVl3RSxLQUR2QjtBQUVVLGFBQUt4RSxNQUFMLENBQVl5RSxTQUh4QjtBQUlFO0FBQ0EsZUFBS3pFLE1BQUwsQ0FBWXdFLEtBQVosR0FBb0IsS0FBS3hFLE1BQUwsQ0FBWXlFLFNBQWhDO0FBQ0Q7O0FBRUQ3QyxnQkFBUSxDQUFDLElBQUQsQ0FBUjs7QUFFQSxhQUFLOEMsaUJBQUwsQ0FBdUIsSUFBdkI7QUFDQSxhQUFLQyxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7QUFDRixLQWhCTyxFQUFWOzs7QUFtQkEsU0FBT2hELFlBQVksQ0FBQ3RJLEVBQUQsRUFBSztBQUN0QkMsU0FBSyxFQUFMQSxLQURzQjtBQUV0QnNJLFlBQVEsRUFBRSxvQkFBWSxDQUFFLENBRkYsQ0FFRztBQUZILEdBQUwsQ0FBbkI7QUFJRDs7QUFFRCxTQUFTZ0QsU0FBVCxDQUFvQnZMLEVBQXBCLEVBQXdCO0FBQ3RCd0wsS0FBRyxDQUFDUixRQUFRLENBQUNoTCxFQUFELENBQVQsQ0FBSDtBQUNBLFNBQU9BLEVBQVA7QUFDRDs7QUFFRCxJQUFNeUwsZUFBZSxHQUFHLFVBQXhCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBbmYsQ0FBQyxVQUFJLE1BQU1BLENBQUMsQ0FBQ0MsVUFBRixDQUFhLENBQWIsRUFBZ0JDLFFBQWhCLENBQXlCLEVBQXpCLENBQVYsRUFBL0I7QUFDQSxJQUFNa2YsT0FBTyxHQUFHLE1BQWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUExZixHQUFHLFVBQUkyZixrQkFBa0IsQ0FBQzNmLEdBQUQsQ0FBbEI7QUFDbkIwRCxTQURtQixDQUNYNmIsZUFEVyxFQUNNQyxxQkFETjtBQUVuQjliLFNBRm1CLENBRVgrYixPQUZXLEVBRUYsR0FGRSxDQUFKLEVBQWxCOztBQUlBLFNBQVNHLGNBQVQsQ0FBeUI5YyxHQUF6QixFQUFrRCxLQUFwQitjLFNBQW9CLHVFQUFSSCxNQUFRO0FBQ2hELE1BQU12YixHQUFHLEdBQUdyQixHQUFHLEdBQUdOLE1BQU0sQ0FBQzBDLElBQVAsQ0FBWXBDLEdBQVosRUFBaUIxQyxHQUFqQixDQUFxQixVQUFBNkMsR0FBRyxFQUFJO0FBQzVDLFFBQU02YyxHQUFHLEdBQUdoZCxHQUFHLENBQUNHLEdBQUQsQ0FBZjs7QUFFQSxRQUFJNmMsR0FBRyxLQUFLQyxTQUFaLEVBQXVCO0FBQ3JCLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQUlELEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCLGFBQU9ELFNBQVMsQ0FBQzVjLEdBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJb0IsS0FBSyxDQUFDQyxPQUFOLENBQWN3YixHQUFkLENBQUosRUFBd0I7QUFDdEIsVUFBTXhXLE1BQU0sR0FBRyxFQUFmO0FBQ0F3VyxTQUFHLENBQUMzYSxPQUFKLENBQVksVUFBQTZhLElBQUksRUFBSTtBQUNsQixZQUFJQSxJQUFJLEtBQUtELFNBQWIsRUFBd0I7QUFDdEI7QUFDRDtBQUNELFlBQUlDLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCMVcsZ0JBQU0sQ0FBQzVFLElBQVAsQ0FBWW1iLFNBQVMsQ0FBQzVjLEdBQUQsQ0FBckI7QUFDRCxTQUZELE1BRU87QUFDTHFHLGdCQUFNLENBQUM1RSxJQUFQLENBQVltYixTQUFTLENBQUM1YyxHQUFELENBQVQsR0FBaUIsR0FBakIsR0FBdUI0YyxTQUFTLENBQUNHLElBQUQsQ0FBNUM7QUFDRDtBQUNGLE9BVEQ7QUFVQSxhQUFPMVcsTUFBTSxDQUFDN0ksSUFBUCxDQUFZLEdBQVosQ0FBUDtBQUNEOztBQUVELFdBQU9vZixTQUFTLENBQUM1YyxHQUFELENBQVQsR0FBaUIsR0FBakIsR0FBdUI0YyxTQUFTLENBQUNDLEdBQUQsQ0FBdkM7QUFDRCxHQTNCaUIsRUEyQmZ0VixNQTNCZSxDQTJCUixVQUFBeVYsQ0FBQyxVQUFJQSxDQUFDLENBQUNsZixNQUFGLEdBQVcsQ0FBZixFQTNCTyxFQTJCV04sSUEzQlgsQ0EyQmdCLEdBM0JoQixDQUFILEdBMkIwQixJQTNCekM7QUE0QkEsU0FBTzBELEdBQUcsY0FBT0EsR0FBUCxJQUFlLEVBQXpCO0FBQ0Q7O0FBRUQsU0FBUytiLGtCQUFULENBQTZCQyxtQkFBN0I7OztBQUdRLGlGQUFKLEVBQUksQ0FGTnpDLE1BRU0sU0FGTkEsTUFFTSxDQUROYyxZQUNNLFNBRE5BLFlBQ007QUFDNkJ6SixrQkFBZ0IsQ0FBQ2xULFlBQUQsRUFBTXNlLG1CQUFOLENBRDdDLDJEQUNDbkwsWUFERCx5QkFDZVosVUFEZjs7QUFHTixNQUFNbE8sT0FBTztBQUNYa2EsaUJBQWEsRUFBRSxJQURKO0FBRVhDLGtCQUFjLEVBQUUsSUFGTDtBQUdQak0sWUFBVSxDQUFDbE8sT0FBWCxJQUFzQixFQUhmLENBQWI7OztBQU1BLE1BQU1vYSxnQkFBZ0IsR0FBRztBQUN2QnBhLFdBQU8sRUFBUEEsT0FEdUI7QUFFdkJULFFBQUksRUFBRWtRLFFBQVEsQ0FBQ3ZCLFVBQUQsRUFBYXZTLGFBQUlDLFNBQWpCLENBRlM7QUFHdkIrVSxhQUFTLEVBQUVILGFBQWEsQ0FBQ3RDLFVBQUQsRUFBYXVDLFlBQWIsQ0FIRDtBQUl2QlMsY0FBVSxFQUFFQyxjQUFjLENBQUNqRCxVQUFVLENBQUM4QyxLQUFaLEVBQW1CLEtBQW5CLEVBQTBCOUMsVUFBVSxDQUFDbU0sTUFBckMsQ0FKSDtBQUt2QkMsYUFBUyxFQUFFO0FBQ1RDLGNBRFMsc0JBQ0c7QUFDVixZQUFNckosVUFBVSxHQUFHLEtBQUtBLFVBQXhCOztBQUVBLFlBQU1sUixPQUFPLEdBQUc7QUFDZCtOLGdCQUFNLEVBQUV5SixNQUFNLENBQUMzYSxJQUFQLENBQVksSUFBWixJQUFvQixNQUFwQixHQUE2QixXQUR2QjtBQUVkcVEsb0JBQVUsRUFBRSxJQUZFO0FBR2Q2SSxtQkFBUyxFQUFFN0UsVUFIRyxFQUFoQjs7O0FBTUE3QixrQkFBVSxDQUFDNkIsVUFBVSxDQUFDTyxLQUFaLEVBQW1CLElBQW5CLENBQVY7O0FBRUE7QUFDQTZHLG9CQUFZLENBQUN6YixJQUFiLENBQWtCLElBQWxCLEVBQXdCO0FBQ3RCb2EsZ0JBQU0sRUFBRSxLQUFLekgsUUFEUztBQUV0QnRCLG9CQUFVLEVBQUVsTyxPQUZVLEVBQXhCOzs7QUFLQTtBQUNBLGFBQUsyTyxHQUFMLEdBQVcsSUFBSUcsWUFBSixDQUFpQjlPLE9BQWpCLENBQVg7O0FBRUE7QUFDQWdQLGlCQUFTLENBQUMsS0FBS0wsR0FBTixFQUFXdUMsVUFBVSxDQUFDakMsUUFBdEIsQ0FBVDs7QUFFQTtBQUNBLGFBQUtOLEdBQUwsQ0FBUzZMLE1BQVQ7QUFDRCxPQTFCUTtBQTJCVEMsV0EzQlMsbUJBMkJBO0FBQ1A7QUFDQTtBQUNBLFlBQUksS0FBSzlMLEdBQVQsRUFBYztBQUNaLGVBQUtBLEdBQUwsQ0FBU29JLFVBQVQsR0FBc0IsSUFBdEI7QUFDQSxlQUFLcEksR0FBTCxDQUFTQyxXQUFULENBQXFCLFNBQXJCO0FBQ0EsZUFBS0QsR0FBTCxDQUFTQyxXQUFULENBQXFCLFNBQXJCO0FBQ0Q7QUFDRixPQW5DUTtBQW9DVDhMLGNBcENTLHNCQW9DRztBQUNWLGFBQUsvTCxHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTZ00sUUFBVCxFQUFaO0FBQ0QsT0F0Q1EsRUFMWTs7QUE2Q3ZCQyxpQkFBYSxFQUFFO0FBQ2JDLFVBRGEsZ0JBQ1AzVyxJQURPLEVBQ0Q7QUFDVixhQUFLeUssR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixZQUFyQixFQUFtQzFLLElBQW5DLENBQVo7QUFDRCxPQUhZO0FBSWI0VyxVQUphLGtCQUlMO0FBQ04sYUFBS25NLEdBQUwsSUFBWSxLQUFLQSxHQUFMLENBQVNDLFdBQVQsQ0FBcUIsWUFBckIsQ0FBWjtBQUNELE9BTlk7QUFPYm1NLFlBUGEsa0JBT0xDLElBUEssRUFPQztBQUNaLGFBQUtyTSxHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDb00sSUFBckMsQ0FBWjtBQUNELE9BVFksRUE3Q1E7O0FBd0R2QnJMLFdBQU8sRUFBRTtBQUNQc0wsU0FBRyxFQUFFM0QsVUFERTtBQUVQNEQsU0FBRyxFQUFFMUcsV0FGRSxFQXhEYyxFQUF6Qjs7O0FBNkRBO0FBQ0EsTUFBSXRHLFVBQVUsQ0FBQ2lOLGVBQWYsRUFBZ0M7QUFDOUJmLG9CQUFnQixDQUFDZSxlQUFqQixHQUFtQ2pOLFVBQVUsQ0FBQ2lOLGVBQTlDO0FBQ0Q7O0FBRUQsTUFBSWhkLEtBQUssQ0FBQ0MsT0FBTixDQUFjOFAsVUFBVSxDQUFDa04sY0FBekIsQ0FBSixFQUE4QztBQUM1Q2xOLGNBQVUsQ0FBQ2tOLGNBQVgsQ0FBMEJuYyxPQUExQixDQUFrQyxVQUFBb2MsVUFBVSxFQUFJO0FBQzlDakIsc0JBQWdCLENBQUN6SyxPQUFqQixDQUF5QjBMLFVBQXpCLElBQXVDLFVBQVVuWCxJQUFWLEVBQWdCO0FBQ3JELGVBQU8sS0FBS3lLLEdBQUwsQ0FBUzBNLFVBQVQsRUFBcUJuWCxJQUFyQixDQUFQO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFLRDs7QUFFRCxNQUFJc1QsTUFBSixFQUFZO0FBQ1YsV0FBTzRDLGdCQUFQO0FBQ0Q7QUFDRCxTQUFPLENBQUNBLGdCQUFELEVBQW1CdEwsWUFBbkIsQ0FBUDtBQUNEOztBQUVELFNBQVN3TSxjQUFULENBQXlCcE4sVUFBekIsRUFBcUM7QUFDTThMLG9CQUFrQixDQUFDOUwsVUFBRCxDQUR4QiwrREFDNUJrTSxnQkFENEIsMkJBQ1Z0TCxZQURVOztBQUduQ3NMLGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsUUFBM0IsR0FBc0MsU0FBU0EsUUFBVCxHQUFxQjtBQUN6RCxRQUFNckosVUFBVSxHQUFHLEtBQUtBLFVBQXhCOztBQUVBLFFBQU1sUixPQUFPLEdBQUc7QUFDZCtOLFlBQU0sRUFBRXlKLE1BQU0sQ0FBQzNhLElBQVAsQ0FBWSxJQUFaLElBQW9CLE1BQXBCLEdBQTZCLFdBRHZCO0FBRWRxUSxnQkFBVSxFQUFFLElBRkU7QUFHZDZJLGVBQVMsRUFBRTdFLFVBSEcsRUFBaEI7OztBQU1BN0IsY0FBVSxDQUFDNkIsVUFBVSxDQUFDTyxLQUFaLEVBQW1CLElBQW5CLENBQVY7O0FBRUE7QUFDQSxTQUFLOUMsR0FBTCxHQUFXLElBQUlHLFlBQUosQ0FBaUI5TyxPQUFqQixDQUFYOztBQUVBO0FBQ0FnUCxhQUFTLENBQUMsS0FBS0wsR0FBTixFQUFXdUMsVUFBVSxDQUFDakMsUUFBdEIsQ0FBVDs7QUFFQTtBQUNBcUosZ0JBQVksQ0FBQ3piLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEJvYSxZQUFNLEVBQUUsS0FBS3pILFFBRFM7QUFFdEJ0QyxnQkFBVSxFQUFFLElBRlUsRUFBeEI7OztBQUtBO0FBQ0EsU0FBS3lCLEdBQUwsQ0FBUzZMLE1BQVQ7QUFDRCxHQXpCRDs7QUEyQkE7QUFDQSxTQUFPSixnQkFBZ0IsQ0FBQ0UsU0FBakIsQ0FBMkJHLEtBQWxDOztBQUVBTCxrQkFBZ0IsQ0FBQ3pLLE9BQWpCLENBQXlCc0wsR0FBekIsR0FBK0J2QyxZQUEvQjs7QUFFQSxTQUFPMEIsZ0JBQVA7QUFDRDs7QUFFRCxJQUFNbUIsT0FBTyxHQUFHO0FBQ2QsUUFEYztBQUVkLFFBRmM7QUFHZCxVQUhjLENBQWhCOzs7QUFNQUEsT0FBTyxDQUFDL2MsSUFBUixPQUFBK2MsT0FBTyxFQUFTN04sZ0JBQVQsQ0FBUDs7QUFFQSxTQUFTOE4sYUFBVCxDQUF3QkMsY0FBeEI7OztBQUdHLEtBRkRqRSxNQUVDLFNBRkRBLE1BRUMsQ0FERGMsWUFDQyxTQUREQSxZQUNDO0FBQ0QsTUFBTW9ELFdBQVcsR0FBR0osY0FBYyxDQUFDRyxjQUFELENBQWxDOztBQUVBaE4sV0FBUyxDQUFDaU4sV0FBVyxDQUFDL0wsT0FBYixFQUFzQjRMLE9BQXRCLEVBQStCRSxjQUEvQixDQUFUOztBQUVBQyxhQUFXLENBQUMvTCxPQUFaLENBQW9CZ00sTUFBcEIsR0FBNkIsVUFBVUMsS0FBVixFQUFpQjtBQUM1QyxTQUFLNWIsT0FBTCxHQUFlNGIsS0FBZjtBQUNBLFFBQU1DLFNBQVMsR0FBR3ZmLE1BQU0sQ0FBQytGLE1BQVAsQ0FBYyxFQUFkLEVBQWtCdVosS0FBbEIsQ0FBbEI7QUFDQSxXQUFPQyxTQUFTLENBQUN2RyxNQUFqQjtBQUNBLFNBQUt6UCxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFLE9BQU8sS0FBS2lULEtBQUwsSUFBYyxLQUFLK0MsRUFBMUIsSUFBZ0NwQyxjQUFjLENBQUNtQyxTQUFELENBRDdDLEVBQWI7O0FBR0EsU0FBS2xOLEdBQUwsQ0FBU2IsR0FBVCxDQUFhOE4sS0FBYixHQUFxQkEsS0FBckIsQ0FQNEMsQ0FPaEI7QUFDNUIsU0FBS2pOLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixRQUFyQixFQUErQmdOLEtBQS9CO0FBQ0QsR0FURDs7QUFXQSxTQUFPRixXQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssU0FBVCxDQUFvQk4sY0FBcEIsRUFBb0M7QUFDbEMsTUFBTUMsV0FBVyxHQUFHRixhQUFhLENBQUNDLGNBQUQsRUFBaUI7QUFDaERqRSxVQUFNLEVBQU5BLE1BRGdEO0FBRWhEYyxnQkFBWSxFQUFaQSxZQUZnRCxFQUFqQixDQUFqQzs7QUFJQTtBQUNBb0QsYUFBVyxDQUFDcEIsU0FBWixDQUFzQkcsS0FBdEIsR0FBOEIsU0FBU0EsS0FBVCxHQUFrQjtBQUM5QyxRQUFJLEtBQUs5TCxHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTWixNQUFULEtBQW9CLE1BQXBDLEVBQTRDO0FBQzFDLFdBQUtZLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixTQUFyQjtBQUNBLFdBQUtELEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixhQUFyQjtBQUNBLFdBQUtELEdBQUwsQ0FBU29JLFVBQVQsR0FBc0IsSUFBdEI7QUFDQSxXQUFLcEksR0FBTCxDQUFTQyxXQUFULENBQXFCLFNBQXJCO0FBQ0EsV0FBS0QsR0FBTCxDQUFTQyxXQUFULENBQXFCLFNBQXJCO0FBQ0QsS0FORCxNQU1PO0FBQ0wsV0FBS2tOLEVBQUwsSUFBV3hSLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLEtBQUt1UixFQUFMLEdBQVUsZUFBdkIsQ0FBWDtBQUNEO0FBQ0YsR0FWRDs7QUFZQUosYUFBVyxDQUFDcEIsU0FBWixDQUFzQkksUUFBdEIsR0FBaUMsU0FBU0EsUUFBVCxHQUFxQjtBQUNwRCxTQUFLL0wsR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBU2dNLFFBQVQsRUFBWjtBQUNBO0FBQ0EsUUFBTW5DLFNBQVMsR0FBRyxLQUFLQyxhQUF2QjtBQUNBRCxhQUFTLElBQUlsYyxNQUFNLENBQUMwQyxJQUFQLENBQVlxWixTQUFaLEVBQXVCcFosT0FBdkIsQ0FBK0IsVUFBQWxDLEdBQUcsRUFBSTtBQUNqRCxVQUFJQSxHQUFHLENBQUNoQixPQUFKLENBQVl5YyxTQUFTLEdBQUcsR0FBeEIsTUFBaUMsQ0FBckMsRUFBd0M7QUFDdEMsZUFBT0gsU0FBUyxDQUFDdGIsR0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FKWSxDQUFiO0FBS0QsR0FURDs7QUFXQSxTQUFPMmUsV0FBUDtBQUNEOztBQUVELFNBQVNNLFVBQVQsQ0FBcUJQLGNBQXJCLEVBQXFDO0FBQ25DO0FBQ0UsV0FBTzNPLFNBQVMsQ0FBQ2lQLFNBQVMsQ0FBQ04sY0FBRCxDQUFWLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTUSxlQUFULENBQTBCL04sVUFBMUIsRUFBc0M7QUFDcEM7QUFDRSxXQUFPcEIsU0FBUyxDQUFDd08sY0FBYyxDQUFDcE4sVUFBRCxDQUFmLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTZ08sbUJBQVQsQ0FBOEJ0TyxFQUE5QixFQUFrQztBQUNoQyxNQUFNZ0osVUFBVSxHQUFHZ0MsUUFBUSxDQUFDaEwsRUFBRCxDQUEzQjtBQUNBLE1BQU02SSxHQUFHLEdBQUdELE1BQU0sQ0FBQztBQUNqQjJGLGdCQUFZLEVBQUUsSUFERyxFQUFELENBQWxCOztBQUdBLE1BQU1yRixVQUFVLEdBQUdMLEdBQUcsQ0FBQ0ssVUFBdkI7QUFDQSxNQUFJQSxVQUFKLEVBQWdCO0FBQ2R4YSxVQUFNLENBQUMwQyxJQUFQLENBQVk0WCxVQUFVLENBQUNFLFVBQXZCLEVBQW1DN1gsT0FBbkMsQ0FBMkMsVUFBQWdCLElBQUksRUFBSTtBQUNqRCxVQUFJLENBQUNuRCxNQUFNLENBQUNnYSxVQUFELEVBQWE3VyxJQUFiLENBQVgsRUFBK0I7QUFDN0I2VyxrQkFBVSxDQUFDN1csSUFBRCxDQUFWLEdBQW1CMlcsVUFBVSxDQUFDRSxVQUFYLENBQXNCN1csSUFBdEIsQ0FBbkI7QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQUNEM0QsUUFBTSxDQUFDMEMsSUFBUCxDQUFZNFgsVUFBWixFQUF3QjNYLE9BQXhCLENBQWdDLFVBQUFnQixJQUFJLEVBQUk7QUFDdEMsUUFBSSxDQUFDbkQsTUFBTSxDQUFDMlosR0FBRCxFQUFNeFcsSUFBTixDQUFYLEVBQXdCO0FBQ3RCd1csU0FBRyxDQUFDeFcsSUFBRCxDQUFILEdBQVkyVyxVQUFVLENBQUMzVyxJQUFELENBQXRCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsTUFBSXpELElBQUksQ0FBQ29hLFVBQVUsQ0FBQ3dGLE1BQVosQ0FBSixJQUEyQjFoQixFQUFFLENBQUMyaEIsU0FBbEMsRUFBNkM7QUFDM0MzaEIsTUFBRSxDQUFDMmhCLFNBQUgsQ0FBYSxZQUFhLG9DQUFUblksSUFBUyx5REFBVEEsSUFBUztBQUN4QjBTLGdCQUFVLENBQUN3RixNQUFYLENBQWtCL1gsS0FBbEIsQ0FBd0JvUyxHQUF4QixFQUE2QnZTLElBQTdCO0FBQ0QsS0FGRDtBQUdEO0FBQ0QsTUFBSTFILElBQUksQ0FBQ29hLFVBQVUsQ0FBQzBGLE1BQVosQ0FBSixJQUEyQjVoQixFQUFFLENBQUM2aEIsU0FBbEMsRUFBNkM7QUFDM0M3aEIsTUFBRSxDQUFDNmhCLFNBQUgsQ0FBYSxZQUFhLG9DQUFUclksSUFBUyx5REFBVEEsSUFBUztBQUN4QjBTLGdCQUFVLENBQUMwRixNQUFYLENBQWtCalksS0FBbEIsQ0FBd0JvUyxHQUF4QixFQUE2QnZTLElBQTdCO0FBQ0QsS0FGRDtBQUdEO0FBQ0QsTUFBSTFILElBQUksQ0FBQ29hLFVBQVUsQ0FBQ0MsUUFBWixDQUFSLEVBQStCO0FBQzdCLFFBQU0zUyxJQUFJLEdBQUd4SixFQUFFLENBQUM4aEIsb0JBQUgsSUFBMkI5aEIsRUFBRSxDQUFDOGhCLG9CQUFILEVBQXhDO0FBQ0E1RixjQUFVLENBQUNDLFFBQVgsQ0FBb0JoYSxJQUFwQixDQUF5QjRaLEdBQXpCLEVBQThCdlMsSUFBOUI7QUFDRDtBQUNELFNBQU8wSixFQUFQO0FBQ0Q7O0FBRUQsU0FBUzZPLFlBQVQsQ0FBdUI3TyxFQUF2QixFQUEyQjtBQUN6QixNQUFNZ0osVUFBVSxHQUFHZ0MsUUFBUSxDQUFDaEwsRUFBRCxDQUEzQjtBQUNBLE1BQUlwUixJQUFJLENBQUNvYSxVQUFVLENBQUN3RixNQUFaLENBQUosSUFBMkIxaEIsRUFBRSxDQUFDMmhCLFNBQWxDLEVBQTZDO0FBQzNDM2hCLE1BQUUsQ0FBQzJoQixTQUFILENBQWEsWUFBYSxvQ0FBVG5ZLElBQVMseURBQVRBLElBQVM7QUFDeEIwUyxnQkFBVSxDQUFDd0YsTUFBWCxDQUFrQi9YLEtBQWxCLENBQXdCdUosRUFBeEIsRUFBNEIxSixJQUE1QjtBQUNELEtBRkQ7QUFHRDtBQUNELE1BQUkxSCxJQUFJLENBQUNvYSxVQUFVLENBQUMwRixNQUFaLENBQUosSUFBMkI1aEIsRUFBRSxDQUFDNmhCLFNBQWxDLEVBQTZDO0FBQzNDN2hCLE1BQUUsQ0FBQzZoQixTQUFILENBQWEsWUFBYSxvQ0FBVHJZLElBQVMseURBQVRBLElBQVM7QUFDeEIwUyxnQkFBVSxDQUFDMEYsTUFBWCxDQUFrQmpZLEtBQWxCLENBQXdCdUosRUFBeEIsRUFBNEIxSixJQUE1QjtBQUNELEtBRkQ7QUFHRDtBQUNELE1BQUkxSCxJQUFJLENBQUNvYSxVQUFVLENBQUNDLFFBQVosQ0FBUixFQUErQjtBQUM3QixRQUFNM1MsSUFBSSxHQUFHeEosRUFBRSxDQUFDOGhCLG9CQUFILElBQTJCOWhCLEVBQUUsQ0FBQzhoQixvQkFBSCxFQUF4QztBQUNBNUYsY0FBVSxDQUFDQyxRQUFYLENBQW9CaGEsSUFBcEIsQ0FBeUIrUSxFQUF6QixFQUE2QjFKLElBQTdCO0FBQ0Q7QUFDRCxTQUFPMEosRUFBUDtBQUNEOztBQUVEOUYsS0FBSyxDQUFDN0ksT0FBTixDQUFjLFVBQUErTCxPQUFPLEVBQUk7QUFDdkJoRCxXQUFTLENBQUNnRCxPQUFELENBQVQsR0FBcUIsS0FBckI7QUFDRCxDQUZEOztBQUlBakQsUUFBUSxDQUFDOUksT0FBVCxDQUFpQixVQUFBeWQsVUFBVSxFQUFJO0FBQzdCLE1BQU1DLE9BQU8sR0FBRzNVLFNBQVMsQ0FBQzBVLFVBQUQsQ0FBVCxJQUF5QjFVLFNBQVMsQ0FBQzBVLFVBQUQsQ0FBVCxDQUFzQnpjLElBQS9DLEdBQXNEK0gsU0FBUyxDQUFDMFUsVUFBRCxDQUFULENBQXNCemMsSUFBNUU7QUFDWnljLFlBREo7QUFFQSxNQUFJLENBQUNoaUIsRUFBRSxDQUFDbU4sT0FBSCxDQUFXOFUsT0FBWCxDQUFMLEVBQTBCO0FBQ3hCM1UsYUFBUyxDQUFDMFUsVUFBRCxDQUFULEdBQXdCLEtBQXhCO0FBQ0Q7QUFDRixDQU5EOztBQVFBLElBQUlFLEdBQUcsR0FBRyxFQUFWOztBQUVBLElBQUksT0FBT0MsS0FBUCxLQUFpQixXQUFqQixJQUFnQyxpQkFBaUIsVUFBckQsRUFBaUU7QUFDL0RELEtBQUcsR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUFjO0FBQ2xCL0UsT0FEa0IsZUFDYjdGLE1BRGEsRUFDTGhTLElBREssRUFDQztBQUNqQixVQUFJbkQsTUFBTSxDQUFDbVYsTUFBRCxFQUFTaFMsSUFBVCxDQUFWLEVBQTBCO0FBQ3hCLGVBQU9nUyxNQUFNLENBQUNoUyxJQUFELENBQWI7QUFDRDtBQUNELFVBQUl1RCxPQUFPLENBQUN2RCxJQUFELENBQVgsRUFBbUI7QUFDakIsZUFBT3VELE9BQU8sQ0FBQ3ZELElBQUQsQ0FBZDtBQUNEO0FBQ0QsVUFBSVMsR0FBRyxDQUFDVCxJQUFELENBQVAsRUFBZTtBQUNiLGVBQU84QixTQUFTLENBQUM5QixJQUFELEVBQU9TLEdBQUcsQ0FBQ1QsSUFBRCxDQUFWLENBQWhCO0FBQ0Q7QUFDRDtBQUNFLFlBQUl3TCxRQUFRLENBQUN4TCxJQUFELENBQVosRUFBb0I7QUFDbEIsaUJBQU84QixTQUFTLENBQUM5QixJQUFELEVBQU93TCxRQUFRLENBQUN4TCxJQUFELENBQWYsQ0FBaEI7QUFDRDtBQUNELFlBQUk0SyxRQUFRLENBQUM1SyxJQUFELENBQVosRUFBb0I7QUFDbEIsaUJBQU84QixTQUFTLENBQUM5QixJQUFELEVBQU80SyxRQUFRLENBQUM1SyxJQUFELENBQWYsQ0FBaEI7QUFDRDtBQUNGO0FBQ0QsVUFBSWtNLFFBQVEsQ0FBQ2xNLElBQUQsQ0FBWixFQUFvQjtBQUNsQixlQUFPa00sUUFBUSxDQUFDbE0sSUFBRCxDQUFmO0FBQ0Q7QUFDRCxVQUFJLENBQUNuRCxNQUFNLENBQUNwQyxFQUFELEVBQUt1RixJQUFMLENBQVAsSUFBcUIsQ0FBQ25ELE1BQU0sQ0FBQ2tMLFNBQUQsRUFBWS9ILElBQVosQ0FBaEMsRUFBbUQ7QUFDakQ7QUFDRDtBQUNELGFBQU84QixTQUFTLENBQUM5QixJQUFELEVBQU93SyxPQUFPLENBQUN4SyxJQUFELEVBQU92RixFQUFFLENBQUN1RixJQUFELENBQVQsQ0FBZCxDQUFoQjtBQUNELEtBMUJpQjtBQTJCbEI2YyxPQTNCa0IsZUEyQmI3SyxNQTNCYSxFQTJCTGhTLElBM0JLLEVBMkJDNEIsS0EzQkQsRUEyQlE7QUFDeEJvUSxZQUFNLENBQUNoUyxJQUFELENBQU4sR0FBZTRCLEtBQWY7QUFDQSxhQUFPLElBQVA7QUFDRCxLQTlCaUIsRUFBZCxDQUFOOztBQWdDRCxDQWpDRCxNQWlDTztBQUNMdkYsUUFBTSxDQUFDMEMsSUFBUCxDQUFZd0UsT0FBWixFQUFxQnZFLE9BQXJCLENBQTZCLFVBQUFnQixJQUFJLEVBQUk7QUFDbkMyYyxPQUFHLENBQUMzYyxJQUFELENBQUgsR0FBWXVELE9BQU8sQ0FBQ3ZELElBQUQsQ0FBbkI7QUFDRCxHQUZEOztBQUlBO0FBQ0UzRCxVQUFNLENBQUMwQyxJQUFQLENBQVk2TCxRQUFaLEVBQXNCNUwsT0FBdEIsQ0FBOEIsVUFBQWdCLElBQUksRUFBSTtBQUNwQzJjLFNBQUcsQ0FBQzNjLElBQUQsQ0FBSCxHQUFZOEIsU0FBUyxDQUFDOUIsSUFBRCxFQUFPNEssUUFBUSxDQUFDNUssSUFBRCxDQUFmLENBQXJCO0FBQ0QsS0FGRDtBQUdBM0QsVUFBTSxDQUFDMEMsSUFBUCxDQUFZeU0sUUFBWixFQUFzQnhNLE9BQXRCLENBQThCLFVBQUFnQixJQUFJLEVBQUk7QUFDcEMyYyxTQUFHLENBQUMzYyxJQUFELENBQUgsR0FBWThCLFNBQVMsQ0FBQzlCLElBQUQsRUFBTzRLLFFBQVEsQ0FBQzVLLElBQUQsQ0FBZixDQUFyQjtBQUNELEtBRkQ7QUFHRDs7QUFFRDNELFFBQU0sQ0FBQzBDLElBQVAsQ0FBWW1OLFFBQVosRUFBc0JsTixPQUF0QixDQUE4QixVQUFBZ0IsSUFBSSxFQUFJO0FBQ3BDMmMsT0FBRyxDQUFDM2MsSUFBRCxDQUFILEdBQVlrTSxRQUFRLENBQUNsTSxJQUFELENBQXBCO0FBQ0QsR0FGRDs7QUFJQTNELFFBQU0sQ0FBQzBDLElBQVAsQ0FBWTBCLEdBQVosRUFBaUJ6QixPQUFqQixDQUF5QixVQUFBZ0IsSUFBSSxFQUFJO0FBQy9CMmMsT0FBRyxDQUFDM2MsSUFBRCxDQUFILEdBQVk4QixTQUFTLENBQUM5QixJQUFELEVBQU9TLEdBQUcsQ0FBQ1QsSUFBRCxDQUFWLENBQXJCO0FBQ0QsR0FGRDs7QUFJQTNELFFBQU0sQ0FBQzBDLElBQVAsQ0FBWXRFLEVBQVosRUFBZ0J1RSxPQUFoQixDQUF3QixVQUFBZ0IsSUFBSSxFQUFJO0FBQzlCLFFBQUluRCxNQUFNLENBQUNwQyxFQUFELEVBQUt1RixJQUFMLENBQU4sSUFBb0JuRCxNQUFNLENBQUNrTCxTQUFELEVBQVkvSCxJQUFaLENBQTlCLEVBQWlEO0FBQy9DMmMsU0FBRyxDQUFDM2MsSUFBRCxDQUFILEdBQVk4QixTQUFTLENBQUM5QixJQUFELEVBQU93SyxPQUFPLENBQUN4SyxJQUFELEVBQU92RixFQUFFLENBQUN1RixJQUFELENBQVQsQ0FBZCxDQUFyQjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVEdkYsRUFBRSxDQUFDeWUsU0FBSCxHQUFlQSxTQUFmO0FBQ0F6ZSxFQUFFLENBQUNzaEIsVUFBSCxHQUFnQkEsVUFBaEI7QUFDQXRoQixFQUFFLENBQUN1aEIsZUFBSCxHQUFxQkEsZUFBckI7QUFDQXZoQixFQUFFLENBQUN3aEIsbUJBQUgsR0FBeUJBLG1CQUF6QjtBQUNBeGhCLEVBQUUsQ0FBQytoQixZQUFILEdBQWtCQSxZQUFsQjs7QUFFQSxJQUFJTSxLQUFLLEdBQUdILEdBQVosQzs7QUFFZUcsSzs7Ozs7Ozs7Ozs7O3NHQ3IwRUE7QUFDZEMsT0FBSyxFQUFFO0FBQ05DLFdBQU8sRUFBRSxLQURILEVBQ1U7QUFDaEJDLGFBQVMsRUFBRSxLQUZMLEVBRVk7QUFDbEJDLFNBQUssRUFBRSxPQUhELEVBR1U7QUFDaEJDLFFBQUksRUFBRSxNQUpBLEVBSVE7QUFDZEMsWUFBUSxFQUFFLHFCQUxKLEVBSzJCO0FBQ2pDQyxVQUFNLEVBQUUsQ0FBQztBQUNQQyxXQUFLLEVBQUUsSUFEQTtBQUVQQyxVQUFJLEVBQUUsOEJBRkM7QUFHUEMsYUFBTyxFQUFFLGtDQUhGO0FBSVBwWSxTQUFHLEVBQUUscUJBSkU7QUFLUGQsVUFBSSxFQUFFLEtBTEMsRUFBRDs7QUFPUDtBQUNDZ1osV0FBSyxFQUFFLElBRFI7QUFFQ0MsVUFBSSxFQUFFLDBCQUZQO0FBR0NDLGFBQU8sRUFBRSw4QkFIVjtBQUlDcFksU0FBRyxFQUFFLHNCQUpOO0FBS0NkLFVBQUksRUFBRSxLQUxQLEVBUE87O0FBY1A7QUFDQ2daLFdBQUssRUFBRSxJQURSO0FBRUNDLFVBQUksRUFBRSw4QkFGUDtBQUdDQyxhQUFPLEVBQUUsa0NBSFY7QUFJQ3BZLFNBQUcsRUFBRSx1QkFKTjtBQUtDZCxVQUFJLEVBQUUsS0FMUCxFQWRPOztBQXFCUDtBQUNDZ1osV0FBSyxFQUFFLElBRFI7QUFFQ0MsVUFBSSxFQUFFLDJCQUZQO0FBR0NDLGFBQU8sRUFBRSwrQkFIVjtBQUlDcFksU0FBRyxFQUFFLGtCQUpOO0FBS0NkLFVBQUksRUFBRSxLQUxQLEVBckJPOztBQTRCUDtBQUNDZ1osV0FBSyxFQUFFLElBRFI7QUFFQ0MsVUFBSSxFQUFFLHlCQUZQO0FBR0NDLGFBQU8sRUFBRSw2QkFIVjtBQUlDcFksU0FBRyxFQUFFLGdCQUpOO0FBS0NkLFVBQUksRUFBRSxLQUxQLEVBNUJPLENBTkYsRUFETzs7OztBQTRDZG1aLFNBQU8sRUFBRTtBQUNSQyxrQkFBYyxFQUFFLHdCQUFBWCxLQUFLLEVBQUk7QUFDeEIsYUFBT0EsS0FBSyxDQUFDRyxLQUFiO0FBQ0EsS0FITztBQUlSUyxpQkFBYSxFQUFFLHVCQUFBWixLQUFLLEVBQUk7QUFDdkIsYUFBT0EsS0FBSyxDQUFDSSxJQUFiO0FBQ0EsS0FOTztBQU9SUyxhQUFTLEVBQUUsbUJBQUFiLEtBQUssRUFBSTtBQUNuQixhQUFPQSxLQUFLLENBQUNNLE1BQWI7QUFDQSxLQVRPLEVBNUNLOzs7QUF3RGRRLFdBQVMsRUFBRSxFQXhERzs7O0FBMkRkQyxTQUFPLEVBQUUsRUEzREssRTs7Ozs7Ozs7Ozs7O3NHQ0FBO0FBQ2RmLE9BQUssRUFBRTtBQUNML0ssVUFBTSxFQUFDLEVBREYsRUFETzs7QUFJZHlMLFNBQU8sRUFBRSxFQUpLOzs7O0FBUWRJLFdBQVMsRUFBRTtBQUNWRSxhQURVLHFCQUNBaEIsS0FEQSxFQUNPemQsSUFEUCxFQUNhO0FBQ3RCK0ssYUFBTyxDQUFDMlQsR0FBUixDQUFZMWUsSUFBWjtBQUNBeWQsV0FBSyxDQUFDL0ssTUFBTixHQUFlMVMsSUFBZjtBQUNBLEtBSlMsRUFSRzs7QUFjZHdlLFNBQU8sRUFBRSxFQWRLLEU7Ozs7Ozs7Ozs7OztBQ0FmO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7MkNDbEhBOzs7QUFHQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBLG1GLDhGQWpCQTtBQUVBcGlCLGFBQUlDLFNBQUosQ0FBY3lhLE1BQWQsR0FBdUJELGNBQXZCLEMsQ0FFQTtBQUVBemEsYUFBSUMsU0FBSixDQUFjc2lCLE1BQWQsR0FBdUJDLGNBQXZCLEMsQ0FFQTtBQUVBeGlCLGFBQUlDLFNBQUosQ0FBY3dpQixLQUFkLEdBQXNCQyxhQUF0QixDLENBRUE7QUFFQTFpQixhQUFJNlMsS0FBSixDQUFVQSxjQUFWLEUsQ0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQW9PLEdBQUcsQ0FBQzBCLFVBQUosQ0FBZTtBQUNkdmhCLEtBQUcsRUFBRSxVQURTO0FBRWRrRixTQUFPLEVBQUUsaUJBQVNoRSxHQUFULEVBQWM7QUFDdEJtWSxtQkFBTW1JLE1BQU4sQ0FBYSxZQUFiLEVBQTJCdGdCLEdBQUcsQ0FBQ3NCLElBQS9CO0FBQ0EsR0FKYSxFQUFmOztBQU1BcWQsR0FBRyxDQUFDMEIsVUFBSixDQUFlO0FBQ2R2aEIsS0FBRyxFQUFFLEtBRFM7QUFFZGtGLFNBQU8sRUFBRSxpQkFBU2hFLEdBQVQsRUFBYztBQUN0Qm1ZLG1CQUFNbUksTUFBTixDQUFhLFNBQWIsRUFBd0J0Z0IsR0FBRyxDQUFDc0IsSUFBNUI7QUFDQSxHQUphLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozt1RkM3Q0MsOEU7QUFDQSxJQUFNNGUsS0FBSyxHQUFHO0FBQ1h0RCxNQURXLGdCQUNONWEsSUFETSxFQUNBO0FBQ1BtVyxtQkFBTW1JLE1BQU4sQ0FBYSxXQUFiLEVBQTBCdGUsSUFBMUI7QUFDSCxHQUhVO0FBSWQ7QUFDQTtBQUNBO0FBQ0F1ZSxTQVBjLG1CQU9OQyxHQVBNLEVBT0ZwUixLQVBFLEVBT0lxUixPQVBKLEVBT1luQixLQVBaLEVBT21CO0FBQzdCb0IsVUFBTSxDQUFDQyxPQUFQLENBQWU7QUFDWHJCLFdBQUssRUFBRUEsS0FBSyxJQUFFc0IsSUFBSSxDQUFDQyxDQUFMLENBQU8sV0FBUCxDQURIO0FBRVh2akIsYUFBTyxFQUFFa2pCLEdBRkU7QUFHWE0sdUJBQWlCLEVBQUVMLE9BQU8sSUFBRUcsSUFBSSxDQUFDQyxDQUFMLENBQU8sV0FBUCxDQUhqQjtBQUlYRSxxQkFBZSxFQUFFLElBSk4sRUFBZjtBQUtHdmYsUUFMSCxDQUtRNE4sS0FMUixFQUtldk0sS0FMZixDQUtxQixZQUFJLENBQUUsQ0FMM0I7QUFNSCxHQWRhO0FBZVhtZSxPQWZXLGlCQWVMUixHQWZLLEVBZURwUixLQWZDLEVBZUs2UixHQWZMLEVBZVU7QUFDakJQLFVBQU0sQ0FBQ1EsS0FBUCxDQUFhO0FBQ1Q1QixXQUFLLEVBQUVzQixJQUFJLENBQUNDLENBQUwsQ0FBTyxVQUFQLENBREU7QUFFVHZqQixhQUFPLEVBQUVrakIsR0FGQTtBQUdUTSx1QkFBaUIsRUFBRUcsR0FBRyxJQUFFTCxJQUFJLENBQUNDLENBQUwsQ0FBTyxVQUFQLENBSGY7QUFJVEUscUJBQWUsRUFBRSxJQUpSO0FBS1RJLHlCQUFtQixFQUFFLElBTFosRUFBYjtBQU1HM2YsUUFOSCxDQU1RNE4sS0FOUixFQU1ldk0sS0FOZixDQU1xQixZQUFJLENBQUUsQ0FOM0I7QUFPSCxHQXZCVTtBQXdCWHVlLE9BeEJXLDJLQXdCTFosR0F4QkssRUF3QkRhLFFBeEJDLEVBd0JRQyxRQXhCUixFQXdCa0I7QUFDekJGLFNBQUssQ0FBQztBQUNGOWpCLGFBQU8sRUFBRWtqQixHQURQO0FBRUZhLGNBQVEsRUFBRUEsUUFBUSxJQUFFLFFBRmxCO0FBR1hDLGNBQVEsRUFBRUEsUUFBUSxJQUFHLElBSFYsRUFBRCxDQUFMOztBQUtILEdBOUJVO0FBK0JYQyxTQS9CVyxtQkErQkhmLEdBL0JHLEVBK0JDZ0IsRUEvQkQsRUErQks7QUFDWkosU0FBSyxDQUFDSyxPQUFOLENBQWM7QUFDVm5rQixhQUFPLEVBQUVrakIsR0FBRyxJQUFFSSxJQUFJLENBQUNDLENBQUwsQ0FBTyxVQUFQLENBREo7QUFFVlMsY0FBUSxFQUFFLENBRkE7QUFHVkksaUJBQVcsRUFBRSxJQUhIO0FBSVZDLGtCQUFZLEVBQUVILEVBQUUsSUFBRSxNQUpSLEVBQWQ7O0FBTUgsR0F0Q1U7QUF1Q1hJLE9BdkNXLG1CQXVDSDtBQUNKUixTQUFLLENBQUNTLEtBQU47QUFDSCxHQXpDVSxFQUFkLEM7OztBQTRDYzNCLEs7Ozs7Ozs7Ozs7O0FDN0NmOzs7QUFHQSxTQUFTNEIsT0FBVCxHQUFtQjtBQUNsQixTQUFPNWMsTUFBTSxDQUFDRSxJQUFJLENBQUMwRCxNQUFMLEdBQWMxTSxRQUFkLEdBQXlCdVksTUFBekIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsSUFBd0N6VyxJQUFJLENBQUNDLEdBQUwsRUFBekMsQ0FBTixDQUEyRC9CLFFBQTNELENBQW9FLEVBQXBFLENBQVA7QUFDQTs7QUFFRDs7O0FBR0EsU0FBUzJsQixRQUFULEdBQW9CO0FBQ25CLE1BQUlDLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW1CLEtBQW5CLEVBQXlCLE1BQXpCLEVBQWdDLE9BQWhDLEVBQXdDLFFBQXhDLEVBQWlELE1BQWpELEVBQXdELE1BQXhELEVBQStELE9BQS9ELEVBQXVFLE9BQXZFLEVBQStFLE1BQS9FLEVBQXNGLE9BQXRGLENBQWY7QUFDQSxTQUFPQSxRQUFRLENBQUM1YyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDMEQsTUFBTCxLQUFnQmtaLFFBQVEsQ0FBQ3BsQixNQUFwQyxDQUFELENBQWY7QUFDQTs7QUFFRDs7O0FBR0EsU0FBU3FsQixRQUFULENBQWtCekIsR0FBbEIsRUFBdUI7QUFDdEI3QixLQUFHLENBQUNqVSxTQUFKLENBQWM7QUFDYjRVLFNBQUssRUFBRWtCLEdBRE07QUFFYmpCLFFBQUksRUFBRSxNQUZPLEVBQWQ7O0FBSUE7O0FBRUQ7OztBQUdBLFNBQVMyQyxRQUFULENBQWtCQyxJQUFsQixFQUF3Qjs7QUFFdkJ4RCxLQUFHLENBQUN5RCxnQkFBSixDQUFxQjtBQUNwQjlnQixRQUFJLEVBQUU2Z0IsSUFEYztBQUVwQm5lLFdBQU8sRUFBRSxtQkFBVztBQUNuQmllLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDQSxLQUptQjtBQUtwQmhlLFFBQUksRUFBRSxnQkFBVztBQUNoQmdlLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDQSxLQVBtQixFQUFyQjs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFREksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCUixTQUFPLEVBQVBBLE9BRGdCO0FBRWhCQyxVQUFRLEVBQVJBLFFBRmdCO0FBR2hCRSxVQUFRLEVBQVJBLFFBSGdCO0FBSWhCQyxVQUFRLEVBQVJBLFFBSmdCLEVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7a0lDcERBLCtDOzs7QUFHZTtBQUNkNWdCLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05paEIsVUFBSSxFQUFFLEtBQUtBLElBREwsRUFDVztBQUNqQkMsbUJBQWEsRUFBRSxDQUZULEVBRVk7QUFDbEJDLGdCQUFVLEVBQUUsSUFITixFQUdZO0FBQ2xCQyxnQkFBVSxFQUFFLEtBSk4sRUFJYTtBQUNuQkMsZUFBUyxFQUFFLENBTEwsQ0FLUTtBQUxSLEtBQVA7QUFPQSxHQVRhO0FBVWRDLE9BQUssRUFBRSxFQVZPOzs7QUFhZEMsVUFBUTtBQUNKLHNCQUFTO0FBQ1hDLGlCQUFhLEVBQUUsdUJBQUEvRCxLQUFLLFVBQUlBLEtBQUssQ0FBQytELGFBQVYsRUFEVDtBQUVYQyxhQUFTLEVBQUUsbUJBQUFoRSxLQUFLLFVBQUlBLEtBQUssQ0FBQ2dFLFNBQVYsRUFGTDtBQUdYQyxZQUFRLEVBQUUsa0JBQUFqRSxLQUFLLFVBQUlBLEtBQUssQ0FBQ2lFLFFBQVYsRUFISjtBQUlYQyxZQUFRLEVBQUUsa0JBQUFsRSxLQUFLLFVBQUlBLEtBQUssQ0FBQ2tFLFFBQVYsRUFKSjtBQUtYQyxpQkFBYSxFQUFFLHVCQUFBbkUsS0FBSyxVQUFJQSxLQUFLLENBQUNtRSxhQUFWLEVBTFQ7QUFNWEMsZ0JBQVksRUFBRSxzQkFBQXBFLEtBQUssVUFBSUEsS0FBSyxDQUFDdkcsR0FBTixDQUFVNEcsUUFBZCxFQU5SLEVBQVQsQ0FESTs7QUFTUGdFLGNBVE8sd0JBU007QUFDWixhQUFPLEtBQUtoTCxNQUFMLENBQVlxSCxPQUFaLENBQW9CMkQsVUFBM0I7QUFDQSxLQVhNO0FBWVBDLGVBWk8seUJBWU87QUFDYixhQUFPLEtBQUtqTCxNQUFMLENBQVlxSCxPQUFaLENBQW9CNEQsV0FBM0I7QUFDQSxLQWRNLEdBYk07O0FBNkJkeEksU0E3QmMscUJBNkJKO0FBQ1QsUUFBSSxLQUFLMEgsSUFBTCxJQUFhLEtBQUs3SCxLQUFMLENBQVc2SCxJQUE1QixFQUFrQztBQUNqQyxXQUFLZSxPQUFMO0FBQ0E7QUFDRCxRQUFJLEtBQUtsTixPQUFULEVBQWtCO0FBQ2pCLFdBQUt1TSxTQUFMLEdBQWlCLENBQUMsS0FBS3ZNLE9BQUwsQ0FBYXVNLFNBQWIsR0FBeUIsS0FBS3ZNLE9BQUwsQ0FBYXVNLFNBQXRDLEdBQWtELENBQW5ELElBQXdELENBQXpFO0FBQ0E7QUFDRCxHQXBDYTtBQXFDZGpGLFFBckNjLG9CQXFDTCxDQUFFLENBckNHO0FBc0NkUyxRQXRDYyxvQkFzQ0w7QUFDUlEsT0FBRyxDQUFDMVEsS0FBSixDQUFVLGFBQWEsS0FBS3NVLElBQTVCO0FBQ0EsR0F4Q2E7QUF5Q2RnQixlQXpDYywyQkF5Q0U7QUFDZjVFLE9BQUcsQ0FBQzFRLEtBQUosQ0FBVSxvQkFBb0IsS0FBS3NVLElBQW5DO0FBQ0EsR0EzQ2E7QUE0Q2RpQixTQTVDYyxxQkE0Q0o7QUFDVDdFLE9BQUcsQ0FBQzlRLEdBQUosQ0FBUSxhQUFhLEtBQUs2TSxLQUFMLENBQVc2SCxJQUFoQyxFQUFzQyxZQUFNO0FBQzNDLFdBQUksQ0FBQ2UsT0FBTDtBQUNBLEtBRkQ7QUFHQTNFLE9BQUcsQ0FBQzlRLEdBQUosQ0FBUSxhQUFhLEtBQUs2TSxLQUFMLENBQVc2SCxJQUFoQyxFQUFzQyxZQUFNO0FBQzNDLFdBQUksQ0FBQ2tCLE9BQUw7QUFDQSxLQUZEO0FBR0E5RSxPQUFHLENBQUM5USxHQUFKLENBQVEsb0JBQW9CLEtBQUs2TSxLQUFMLENBQVc2SCxJQUF2QyxFQUE2QyxZQUFNO0FBQ2xELFdBQUksQ0FBQ21CLGNBQUw7QUFDQSxLQUZEO0FBR0EvRSxPQUFHLENBQUM5USxHQUFKLENBQVEsZUFBZSxLQUFLNk0sS0FBTCxDQUFXNkgsSUFBbEMsRUFBd0MsWUFBTTs7QUFFN0MsS0FGRDs7Ozs7QUFPQSxRQUFJL2EsS0FBSyxHQUFHQyxlQUFlLEVBQTNCO0FBQ0EsU0FBS2liLFVBQUwsR0FBa0JsYixLQUFLLENBQUM1SyxNQUFOLElBQWdCLENBQWxDOzs7QUFHQSxHQWpFYTtBQWtFZCttQixTQWxFYyxxQkFrRUo7Ozs7Ozs7O0FBUVQsR0ExRWE7QUEyRWR0RixRQTNFYyxvQkEyRUw7QUFDUk0sT0FBRyxDQUFDMVEsS0FBSixDQUFVLGFBQWEsS0FBS3NVLElBQTVCO0FBQ0EsR0E3RWE7QUE4RWR2SyxXQTlFYyx1QkE4RUY7QUFDWDJHLE9BQUcsQ0FBQzVRLElBQUosQ0FBUyxhQUFhLEtBQUt3VSxJQUEzQjtBQUNBNUQsT0FBRyxDQUFDNVEsSUFBSixDQUFTLGFBQWEsS0FBS3dVLElBQTNCO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQixLQUFsQjtBQUNBLEdBbEZhO0FBbUZkbUIsY0FuRmMsd0JBbUZEalMsQ0FuRkMsRUFtRkU7QUFDZixTQUFLNlEsYUFBTCxHQUFxQjdRLENBQUMsQ0FBQ2tTLFNBQXZCO0FBQ0FsRixPQUFHLENBQUMxUSxLQUFKLENBQVUsZ0JBQWdCLEtBQUtzVSxJQUEvQixFQUFxQzVRLENBQUMsQ0FBQ2tTLFNBQXZDO0FBQ0EsUUFBSWxTLENBQUMsQ0FBQ2tTLFNBQUYsR0FBYyxDQUFsQixFQUFxQjtBQUNwQixhQUFPLEtBQVA7QUFDQTtBQUNELEdBekZhO0FBMEZkblMsU0FBTyxFQUFFO0FBQ1I0UixXQURRLHFCQUNFO0FBQ1QsV0FBS2IsVUFBTCxHQUFrQixJQUFsQjtBQUNBO0FBQ0EsS0FKTztBQUtSaUIsa0JBTFEsNEJBS1MsQ0FBRSxDQUxYO0FBTVJELFdBTlEscUJBTUU7QUFDVCxXQUFLaEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBO0FBQ0EsS0FUTztBQVVScUIsYUFWUSx1QkFVSTtBQUNYLFVBQUksS0FBS3BCLFVBQVQsRUFBcUI7QUFDcEIsYUFBS3FCLE9BQUw7QUFDQSxPQUZELE1BRU87Ozs7OztBQU1OcEYsV0FBRyxDQUFDcUYsWUFBSixDQUFpQjtBQUNoQmhjLGVBQUssRUFBRSxDQURTO0FBRWhCL0QsY0FGZ0IsZ0JBRVhqRSxHQUZXLEVBRU47QUFDVHFNLG1CQUFPLENBQUMyVCxHQUFSLENBQVloZ0IsR0FBWjtBQUNBLFdBSmUsRUFBakI7Ozs7QUFRQTtBQUNELEtBNUJPO0FBNkJSK2pCLFdBN0JRLHFCQTZCRTtBQUNUcEYsU0FBRyxDQUFDc0YsU0FBSixDQUFjO0FBQ2I3YyxXQUFHLEVBQUUsS0FBSytiLFlBREc7QUFFYmxmLFlBRmEsZ0JBRVJqRSxHQUZRLEVBRUg7QUFDVHFNLGlCQUFPLENBQUMyVCxHQUFSLENBQVloZ0IsR0FBWjtBQUNBLFNBSlksRUFBZDs7QUFNQSxLQXBDTyxFQTFGSyxFOzs7Ozs7Ozs7Ozs7O0FDSGY7OztBQUdBLHNGLDhGQURBO0FBRUF0QyxhQUFJNlMsS0FBSixDQUFVMlQsY0FBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQsc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQ0FBaUMsRUFBRTtBQUNyRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBb0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBb0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1Qyx3QkFBd0IsRUFBRTtBQUNqRSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0IsRUFBRTtBQUNyRDtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsU0FBUyxxQkFBcUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFFUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUZBQXVGO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0Isb0JBQW9CO0FBQ3hDLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0EsNkNBQTZDLDRDQUE0Qzs7QUFFekY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxNQUFNLEVBR047QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssMkNBQTJDLDhCQUE4QixFQUFFOztBQUVoRjtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0Esb0JBQW9CLFNBQUk7QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBLE1BQU0sU0FBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7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QSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw4QkFBOEI7QUFDOUIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUssTUFBTSxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0Esc0NBQXNDO0FBQ3RDLDhDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDJCQUEyQixFQUFFO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLDBDQUEwQyw0QkFBNEIsRUFBRTtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUMsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSw2R0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdDQUFnQyxFQUFFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2R0FBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFdBQVcsNkdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsNkdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxREFBcUQsRUFBRSxTQUFTO0FBQ3RIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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VyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPLEtBQXFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEVBQUM7QUFDOEUiLCJmaWxlIjoiY29tbW9uL3ZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZSAoc3RyKSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYXRvYihzdHIpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMilcbiAgfSkuam9pbignJykpXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRVc2VySW5mbyAoKSB7XG4gIGNvbnN0IHRva2VuID0gKCB0dCkuZ2V0U3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbicpIHx8ICcnO1xuICBjb25zdCB0b2tlbkFyciA9IHRva2VuLnNwbGl0KCcuJyk7XG4gIGlmICghdG9rZW4gfHwgdG9rZW5BcnIubGVuZ3RoICE9PSAzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogbnVsbCxcbiAgICAgIHJvbGU6IFtdLFxuICAgICAgcGVybWlzc2lvbjogW10sXG4gICAgICB0b2tlbkV4cGlyZWQ6IDBcbiAgICB9XG4gIH1cbiAgbGV0IHVzZXJJbmZvO1xuICB0cnkge1xuICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZShiNjREZWNvZGVVbmljb2RlKHRva2VuQXJyWzFdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCfojrflj5blvZPliY3nlKjmiLfkv6Hmga/lh7rplJnvvIzor6bnu4bplJnor6/kv6Hmga/kuLrvvJonICsgZXJyb3IubWVzc2FnZSlcbiAgfVxuICB1c2VySW5mby50b2tlbkV4cGlyZWQgPSB1c2VySW5mby5leHAgKiAxMDAwO1xuICBkZWxldGUgdXNlckluZm8uZXhwO1xuICBkZWxldGUgdXNlckluZm8uaWF0O1xuICByZXR1cm4gdXNlckluZm9cbn1cblxuZnVuY3Rpb24gdW5pSWRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUudW5pSURIYXNSb2xlID0gZnVuY3Rpb24gKHJvbGVJZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvbGVcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XG4gICAgcmV0dXJuIHJvbGUuaW5kZXhPZihyb2xlSWQpID4gLTFcbiAgfTtcbiAgVnVlLnByb3RvdHlwZS51bmlJREhhc1Blcm1pc3Npb24gPSBmdW5jdGlvbiAocGVybWlzc2lvbklkKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGVybWlzc2lvblxuICAgIH0gPSBnZXRDdXJyZW50VXNlckluZm8oKTtcbiAgICByZXR1cm4gdGhpcy51bmlJREhhc1JvbGUoJ2FkbWluJykgfHwgcGVybWlzc2lvbi5pbmRleE9mKHBlcm1pc3Npb25JZCkgPiAtMVxuICB9O1xuICBWdWUucHJvdG90eXBlLnVuaUlEVG9rZW5WYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b2tlbkV4cGlyZWRcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XG4gICAgcmV0dXJuIHRva2VuRXhwaXJlZCA+IERhdGUubm93KClcbiAgfTtcbn1cblxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaXNGbiAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBpc1N0ciAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxuICovXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJylcbn0pO1xuXG5jb25zdCBIT09LUyA9IFtcbiAgJ2ludm9rZScsXG4gICdzdWNjZXNzJyxcbiAgJ2ZhaWwnLFxuICAnY29tcGxldGUnLFxuICAncmV0dXJuVmFsdWUnXG5dO1xuXG5jb25zdCBnbG9iYWxJbnRlcmNlcHRvcnMgPSB7fTtcbmNvbnN0IHNjb3BlZEludGVyY2VwdG9ycyA9IHt9O1xuXG5mdW5jdGlvbiBtZXJnZUhvb2sgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgY29uc3QgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rcywgaG9vaykge1xuICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcbiAgICBpZiAoSE9PS1MuaW5kZXhPZihob29rKSAhPT0gLTEgJiYgaXNGbihvcHRpb25baG9va10pKSB7XG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IG1lcmdlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvckhvb2sgKGludGVyY2VwdG9yLCBvcHRpb24pIHtcbiAgaWYgKCFpbnRlcmNlcHRvciB8fCAhb3B0aW9uKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcbiAgICAgIHJlbW92ZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyAmJiBpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XG4gICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XG4gICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwcGVySG9vayAoaG9vaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gaG9vayhkYXRhKSB8fCBkYXRhXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhKSB7XG4gIGxldCBwcm9taXNlID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBob29rID0gaG9va3NbaV07XG4gICAgaWYgKHByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUod3JhcHBlckhvb2soaG9vaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBob29rKGRhdGEpO1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbiAoKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9taXNlIHx8IHtcbiAgICB0aGVuIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyYXBwZXJPcHRpb25zIChpbnRlcmNlcHRvciwgb3B0aW9ucyA9IHt9KSB7XG4gIFsnc3VjY2VzcycsICdmYWlsJywgJ2NvbXBsZXRlJ10uZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvcltuYW1lXSkpIHtcbiAgICAgIGNvbnN0IG9sZENhbGxiYWNrID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiBjYWxsYmFja0ludGVyY2VwdG9yIChyZXMpIHtcbiAgICAgICAgcXVldWUoaW50ZXJjZXB0b3JbbmFtZV0sIHJlcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gICAgICAgICAgcmV0dXJuIGlzRm4ob2xkQ2FsbGJhY2spICYmIG9sZENhbGxiYWNrKHJlcykgfHwgcmVzXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiB3cmFwcGVyUmV0dXJuVmFsdWUgKG1ldGhvZCwgcmV0dXJuVmFsdWUpIHtcbiAgY29uc3QgcmV0dXJuVmFsdWVIb29rcyA9IFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpKSB7XG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSk7XG4gIH1cbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcbiAgaWYgKGludGVyY2VwdG9yICYmIEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpKSB7XG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmludGVyY2VwdG9yLnJldHVyblZhbHVlKTtcbiAgfVxuICByZXR1cm5WYWx1ZUhvb2tzLmZvckVhY2goaG9vayA9PiB7XG4gICAgcmV0dXJuVmFsdWUgPSBob29rKHJldHVyblZhbHVlKSB8fCByZXR1cm5WYWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXR1cm5WYWx1ZVxufVxuXG5mdW5jdGlvbiBnZXRBcGlJbnRlcmNlcHRvckhvb2tzIChtZXRob2QpIHtcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBPYmplY3Qua2V5cyhnbG9iYWxJbnRlcmNlcHRvcnMpLmZvckVhY2goaG9vayA9PiB7XG4gICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcbiAgICAgIGludGVyY2VwdG9yW2hvb2tdID0gZ2xvYmFsSW50ZXJjZXB0b3JzW2hvb2tdLnNsaWNlKCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcbiAgaWYgKHNjb3BlZEludGVyY2VwdG9yKSB7XG4gICAgT2JqZWN0LmtleXMoc2NvcGVkSW50ZXJjZXB0b3IpLmZvckVhY2goaG9vayA9PiB7XG4gICAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xuICAgICAgICBpbnRlcmNlcHRvcltob29rXSA9IChpbnRlcmNlcHRvcltob29rXSB8fCBbXSkuY29uY2F0KHNjb3BlZEludGVyY2VwdG9yW2hvb2tdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gaW50ZXJjZXB0b3Jcbn1cblxuZnVuY3Rpb24gaW52b2tlQXBpIChtZXRob2QsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSB7XG4gIGNvbnN0IGludGVyY2VwdG9yID0gZ2V0QXBpSW50ZXJjZXB0b3JIb29rcyhtZXRob2QpO1xuICBpZiAoaW50ZXJjZXB0b3IgJiYgT2JqZWN0LmtleXMoaW50ZXJjZXB0b3IpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLmludm9rZSkpIHtcbiAgICAgIGNvbnN0IHJlcyA9IHF1ZXVlKGludGVyY2VwdG9yLmludm9rZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gcmVzLnRoZW4oKG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcGkod3JhcHBlck9wdGlvbnMoaW50ZXJjZXB0b3IsIG9wdGlvbnMpLCAuLi5wYXJhbXMpXG4gICAgfVxuICB9XG4gIHJldHVybiBhcGkob3B0aW9ucywgLi4ucGFyYW1zKVxufVxuXG5jb25zdCBwcm9taXNlSW50ZXJjZXB0b3IgPSB7XG4gIHJldHVyblZhbHVlIChyZXMpIHtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICAgIHJldHVybiByZXMudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlc1sxXVxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XG4gICAgICByZXR1cm4gcmVzWzBdXG4gICAgfSlcbiAgfVxufTtcblxuY29uc3QgU1lOQ19BUElfUkUgPVxuICAvXlxcJHxXaW5kb3ckfFdpbmRvd1N0eWxlJHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxnZXRDdXJyZW50U3ViTlZ1ZXxnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0fF5yZXBvcnR8aW50ZXJjZXB0b3JzfEludGVyY2VwdG9yJHxnZXRTdWJOVnVlQnlJZHxyZXF1aXJlTmF0aXZlUGx1Z2lufHVweDJweHxoaWRlS2V5Ym9hcmR8Y2FuSVVzZXxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfGJhc2U2NFRvQXJyYXlCdWZmZXJ8YXJyYXlCdWZmZXJUb0Jhc2U2NC87XG5cbmNvbnN0IENPTlRFWFRfQVBJX1JFID0gL15jcmVhdGV8TWFuYWdlciQvO1xuXG4vLyBDb250ZXh05L6L5aSW5oOF5Ya1XG5jb25zdCBDT05URVhUX0FQSV9SRV9FWEMgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcblxuLy8g5ZCM5q2l5L6L5aSW5oOF5Ya1XG5jb25zdCBBU1lOQ19BUEkgPSBbJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nXTtcblxuY29uc3QgQ0FMTEJBQ0tfQVBJX1JFID0gL15vbnxeb2ZmLztcblxuZnVuY3Rpb24gaXNDb250ZXh0QXBpIChuYW1lKSB7XG4gIHJldHVybiBDT05URVhUX0FQSV9SRS50ZXN0KG5hbWUpICYmIENPTlRFWFRfQVBJX1JFX0VYQy5pbmRleE9mKG5hbWUpID09PSAtMVxufVxuZnVuY3Rpb24gaXNTeW5jQXBpIChuYW1lKSB7XG4gIHJldHVybiBTWU5DX0FQSV9SRS50ZXN0KG5hbWUpICYmIEFTWU5DX0FQSS5pbmRleE9mKG5hbWUpID09PSAtMVxufVxuXG5mdW5jdGlvbiBpc0NhbGxiYWNrQXBpIChuYW1lKSB7XG4gIHJldHVybiBDQUxMQkFDS19BUElfUkUudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnb25QdXNoJ1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9taXNlIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLnRoZW4oZGF0YSA9PiB7XG4gICAgcmV0dXJuIFtudWxsLCBkYXRhXVxuICB9KVxuICAgIC5jYXRjaChlcnIgPT4gW2Vycl0pXG59XG5cbmZ1bmN0aW9uIHNob3VsZFByb21pc2UgKG5hbWUpIHtcbiAgaWYgKFxuICAgIGlzQ29udGV4dEFwaShuYW1lKSB8fFxuICAgIGlzU3luY0FwaShuYW1lKSB8fFxuICAgIGlzQ2FsbGJhY2tBcGkobmFtZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xuaWYgKCFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gdGhpcy50aGVuKFxuICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgcmVhc29uID0+IHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICB9KVxuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZ5IChuYW1lLCBhcGkpIHtcbiAgaWYgKCFzaG91bGRQcm9taXNlKG5hbWUpKSB7XG4gICAgcmV0dXJuIGFwaVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiBwcm9taXNlQXBpIChvcHRpb25zID0ge30sIC4uLnBhcmFtcykge1xuICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcbiAgICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaW52b2tlQXBpKG5hbWUsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSlcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXJSZXR1cm5WYWx1ZShuYW1lLCBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGludm9rZUFwaShuYW1lLCBhcGksIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICB9KSwgLi4ucGFyYW1zKTtcbiAgICB9KSkpXG4gIH1cbn1cblxuY29uc3QgRVBTID0gMWUtNDtcbmNvbnN0IEJBU0VfREVWSUNFX1dJRFRIID0gNzUwO1xubGV0IGlzSU9TID0gZmFsc2U7XG5sZXQgZGV2aWNlV2lkdGggPSAwO1xubGV0IGRldmljZURQUiA9IDA7XG5cbmZ1bmN0aW9uIGNoZWNrRGV2aWNlV2lkdGggKCkge1xuICBjb25zdCB7XG4gICAgcGxhdGZvcm0sXG4gICAgcGl4ZWxSYXRpbyxcbiAgICB3aW5kb3dXaWR0aFxuICB9ID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTsgLy8gdW5pPT50dCBydW50aW1lIOe8luivkeebruagh+aYryB1bmkg5a+56LGh77yM5YaF6YOo5LiN5YWB6K6455u05o6l5L2/55SoIHVuaVxuXG4gIGRldmljZVdpZHRoID0gd2luZG93V2lkdGg7XG4gIGRldmljZURQUiA9IHBpeGVsUmF0aW87XG4gIGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnO1xufVxuXG5mdW5jdGlvbiB1cHgycHggKG51bWJlciwgbmV3RGV2aWNlV2lkdGgpIHtcbiAgaWYgKGRldmljZVdpZHRoID09PSAwKSB7XG4gICAgY2hlY2tEZXZpY2VXaWR0aCgpO1xuICB9XG5cbiAgbnVtYmVyID0gTnVtYmVyKG51bWJlcik7XG4gIGlmIChudW1iZXIgPT09IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGxldCByZXN1bHQgPSAobnVtYmVyIC8gQkFTRV9ERVZJQ0VfV0lEVEgpICogKG5ld0RldmljZVdpZHRoIHx8IGRldmljZVdpZHRoKTtcbiAgaWYgKHJlc3VsdCA8IDApIHtcbiAgICByZXN1bHQgPSAtcmVzdWx0O1xuICB9XG4gIHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0ICsgRVBTKTtcbiAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgIGlmIChkZXZpY2VEUFIgPT09IDEgfHwgIWlzSU9TKSB7XG4gICAgICByZXN1bHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAwLjU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gLXJlc3VsdCA6IHJlc3VsdFxufVxuXG5jb25zdCBpbnRlcmNlcHRvcnMgPSB7XG4gIHByb21pc2VJbnRlcmNlcHRvclxufTtcblxudmFyIGJhc2VBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgdXB4MnB4OiB1cHgycHgsXG4gIGFkZEludGVyY2VwdG9yOiBhZGRJbnRlcmNlcHRvcixcbiAgcmVtb3ZlSW50ZXJjZXB0b3I6IHJlbW92ZUludGVyY2VwdG9yLFxuICBpbnRlcmNlcHRvcnM6IGludGVyY2VwdG9yc1xufSk7XG5cbmNsYXNzIEV2ZW50Q2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZXZlbnRzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubGlzdGVuZXIgPSB7fTtcbiAgICB0aGlzLmVtaXRDYWNoZSA9IHt9O1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgdGhpcy5vbihuYW1lLCBldmVudHNbbmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZW1pdCAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xuICAgIGlmICghZm5zKSB7XG4gICAgICByZXR1cm4gKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gfHwgKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goYXJncylcbiAgICB9XG4gICAgZm5zLmZvckVhY2gob3B0ID0+IHtcbiAgICAgIG9wdC5mbi5hcHBseShvcHQuZm4sIGFyZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSA9IGZucy5maWx0ZXIob3B0ID0+IG9wdC50eXBlICE9PSAnb25jZScpO1xuICB9XG5cbiAgb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbicsIGZuKTtcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XG4gIH1cblxuICBvbmNlIChldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb25jZScsIGZuKTtcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XG4gIH1cblxuICBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XG4gICAgaWYgKCFmbnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZm4pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm5zLmxlbmd0aDspIHtcbiAgICAgICAgaWYgKGZuc1tpXS5mbiA9PT0gZm4pIHtcbiAgICAgICAgICBmbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyQ2FjaGUgKGV2ZW50TmFtZSkge1xuICAgIGNvbnN0IGNhY2hlQXJncyA9IHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV07XG4gICAgaWYgKGNhY2hlQXJncykge1xuICAgICAgZm9yICg7IGNhY2hlQXJncy5sZW5ndGggPiAwOykge1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50TmFtZV0uY29uY2F0KGNhY2hlQXJncy5zaGlmdCgpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FkZExpc3RlbmVyIChldmVudE5hbWUsIHR5cGUsIGZuKSB7XG4gICAgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSB8fCAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuLFxuICAgICAgdHlwZVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGV2ZW50Q2hhbm5lbHMgPSB7fTtcblxuY29uc3QgZXZlbnRDaGFubmVsU3RhY2sgPSBbXTtcblxubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gaW5pdEV2ZW50Q2hhbm5lbCAoZXZlbnRzLCBjYWNoZSA9IHRydWUpIHtcbiAgaWQrKztcbiAgY29uc3QgZXZlbnRDaGFubmVsID0gbmV3IEV2ZW50Q2hhbm5lbChpZCwgZXZlbnRzKTtcbiAgaWYgKGNhY2hlKSB7XG4gICAgZXZlbnRDaGFubmVsc1tpZF0gPSBldmVudENoYW5uZWw7XG4gICAgZXZlbnRDaGFubmVsU3RhY2sucHVzaChldmVudENoYW5uZWwpO1xuICB9XG4gIHJldHVybiBldmVudENoYW5uZWxcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDaGFubmVsIChpZCkge1xuICBpZiAoaWQpIHtcbiAgICBjb25zdCBldmVudENoYW5uZWwgPSBldmVudENoYW5uZWxzW2lkXTtcbiAgICBkZWxldGUgZXZlbnRDaGFubmVsc1tpZF07XG4gICAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxuICB9XG4gIHJldHVybiBldmVudENoYW5uZWxTdGFjay5zaGlmdCgpXG59XG5cbnZhciBuYXZpZ2F0ZVRvID0ge1xuICBhcmdzIChmcm9tQXJncywgdG9BcmdzKSB7XG4gICAgY29uc3QgaWQgPSBpbml0RXZlbnRDaGFubmVsKGZyb21BcmdzLmV2ZW50cykuaWQ7XG4gICAgaWYgKGZyb21BcmdzLnVybCkge1xuICAgICAgZnJvbUFyZ3MudXJsID0gZnJvbUFyZ3MudXJsICsgKGZyb21BcmdzLnVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdfX2lkX189JyArIGlkO1xuICAgIH1cbiAgfSxcbiAgcmV0dXJuVmFsdWUgKGZyb21SZXMsIHRvUmVzKSB7XG4gICAgZnJvbVJlcy5ldmVudENoYW5uZWwgPSBnZXRFdmVudENoYW5uZWwoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZmluZEV4aXN0c1BhZ2VJbmRleCAodXJsKSB7XG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIGxldCBsZW4gPSBwYWdlcy5sZW5ndGg7XG4gIHdoaWxlIChsZW4tLSkge1xuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tsZW5dO1xuICAgIGlmIChwYWdlLiRwYWdlICYmIHBhZ2UuJHBhZ2UuZnVsbFBhdGggPT09IHVybCkge1xuICAgICAgcmV0dXJuIGxlblxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxudmFyIHJlZGlyZWN0VG8gPSB7XG4gIG5hbWUgKGZyb21BcmdzKSB7XG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLmRlbHRhKSB7XG4gICAgICByZXR1cm4gJ25hdmlnYXRlQmFjaydcbiAgICB9XG4gICAgcmV0dXJuICdyZWRpcmVjdFRvJ1xuICB9LFxuICBhcmdzIChmcm9tQXJncykge1xuICAgIGlmIChmcm9tQXJncy5leGlzdHMgPT09ICdiYWNrJyAmJiBmcm9tQXJncy51cmwpIHtcbiAgICAgIGNvbnN0IGV4aXN0c1BhZ2VJbmRleCA9IGZpbmRFeGlzdHNQYWdlSW5kZXgoZnJvbUFyZ3MudXJsKTtcbiAgICAgIGlmIChleGlzdHNQYWdlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoIC0gMSAtIGV4aXN0c1BhZ2VJbmRleDtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgIGZyb21BcmdzLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBwcmV2aWV3SW1hZ2UgPSB7XG4gIGFyZ3MgKGZyb21BcmdzKSB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGZyb21BcmdzLmN1cnJlbnQpO1xuICAgIGlmIChpc05hTihjdXJyZW50SW5kZXgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdXJscyA9IGZyb21BcmdzLnVybHM7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVybHMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbGVuID0gdXJscy5sZW5ndGg7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgY3VycmVudEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+PSBsZW4pIHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1tjdXJyZW50SW5kZXhdO1xuICAgICAgZnJvbUFyZ3MudXJscyA9IHVybHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IGluZGV4IDwgY3VycmVudEluZGV4ID8gaXRlbSAhPT0gdXJsc1tjdXJyZW50SW5kZXhdIDogdHJ1ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUFyZ3MuY3VycmVudCA9IHVybHNbMF07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpbmRpY2F0b3I6IGZhbHNlLFxuICAgICAgbG9vcDogZmFsc2VcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcbmxldCBkZXZpY2VJZDtcbmZ1bmN0aW9uIGFkZFV1aWQgKHJlc3VsdCkge1xuICBkZXZpY2VJZCA9IGRldmljZUlkIHx8IHR0LmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcbiAgaWYgKCFkZXZpY2VJZCkge1xuICAgIGRldmljZUlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcbiAgICB0dC5zZXRTdG9yYWdlKHtcbiAgICAgIGtleTogVVVJRF9LRVksXG4gICAgICBkYXRhOiBkZXZpY2VJZFxuICAgIH0pO1xuICB9XG4gIHJlc3VsdC5kZXZpY2VJZCA9IGRldmljZUlkO1xufVxuXG5mdW5jdGlvbiBhZGRTYWZlQXJlYUluc2V0cyAocmVzdWx0KSB7XG4gIGlmIChyZXN1bHQuc2FmZUFyZWEpIHtcbiAgICBjb25zdCBzYWZlQXJlYSA9IHJlc3VsdC5zYWZlQXJlYTtcbiAgICByZXN1bHQuc2FmZUFyZWFJbnNldHMgPSB7XG4gICAgICB0b3A6IHNhZmVBcmVhLnRvcCxcbiAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXG4gICAgICByaWdodDogcmVzdWx0LndpbmRvd1dpZHRoIC0gc2FmZUFyZWEucmlnaHQsXG4gICAgICBib3R0b206IHJlc3VsdC53aW5kb3dIZWlnaHQgLSBzYWZlQXJlYS5ib3R0b21cbiAgICB9O1xuICB9XG59XG5cbnZhciBnZXRTeXN0ZW1JbmZvID0ge1xuICByZXR1cm5WYWx1ZTogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGFkZFV1aWQocmVzdWx0KTtcbiAgICBhZGRTYWZlQXJlYUluc2V0cyhyZXN1bHQpO1xuICB9XG59O1xuXG5jb25zdCBvTmFtZSA9ICdnZXRVc2VySW5mbyc7XG5jb25zdCBuTmFtZSA9ICdnZXRVc2VyUHJvZmlsZSc7XG5cbnZhciBnZXRVc2VyUHJvZmlsZSA9IHtcbiAgbmFtZTogdHQuY2FuSVVzZShuTmFtZSkgPyBuTmFtZSA6IG9OYW1lXG59O1xuXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxuY29uc3QgdG9kb3MgPSBbXG4gICdwcmVsb2FkUGFnZScsXG4gICd1blByZWxvYWRQYWdlJyxcbiAgJ2xvYWRTdWJQYWNrYWdlJ1xuICAvLyAnY3JlYXRlQ2FtZXJhQ29udGV4dCcsXG4gIC8vICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXG4gIC8vICdnZXRTYXZlZEZpbGVJbmZvJyxcbiAgLy8gJ2NyZWF0ZU1hcENvbnRleHQnLFxuICAvLyAnb25NZW1vcnlXYXJuaW5nJyxcbiAgLy8gJ29uR3lyb3Njb3BlQ2hhbmdlJyxcbiAgLy8gJ3N0YXJ0R3lyb3Njb3BlJyxcbiAgLy8gJ3N0b3BHeXJvc2NvcGUnLFxuICAvLyAnc2V0U2NyZWVuQnJpZ2h0bmVzcycsXG4gIC8vICdnZXRTY3JlZW5CcmlnaHRuZXNzJyxcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXG4gIC8vICdvcGVuQmx1ZXRvb3RoQWRhcHRlcicsXG4gIC8vICdzdGFydEJsdWV0b290aERldmljZXNEaXNjb3ZlcnknLFxuICAvLyAnb25CbHVldG9vdGhEZXZpY2VGb3VuZCcsXG4gIC8vICdzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeScsXG4gIC8vICdvbkJsdWV0b290aEFkYXB0ZXJTdGF0ZUNoYW5nZScsXG4gIC8vICdnZXRDb25uZWN0ZWRCbHVldG9vdGhEZXZpY2VzJyxcbiAgLy8gJ2dldEJsdWV0b290aERldmljZXMnLFxuICAvLyAnZ2V0Qmx1ZXRvb3RoQWRhcHRlclN0YXRlJyxcbiAgLy8gJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlcicsXG4gIC8vICd3cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUnLFxuICAvLyAncmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWUnLFxuICAvLyAnb25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UnLFxuICAvLyAnb25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcbiAgLy8gJ25vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UnLFxuICAvLyAnZ2V0QkxFRGV2aWNlU2VydmljZXMnLFxuICAvLyAnZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzJyxcbiAgLy8gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nLFxuICAvLyAnY2xvc2VCTEVDb25uZWN0aW9uJyxcbiAgLy8gJ29uQmVhY29uU2VydmljZUNoYW5nZScsXG4gIC8vICdvbkJlYWNvblVwZGF0ZScsXG4gIC8vICdnZXRCZWFjb25zJyxcbiAgLy8gJ3N0YXJ0QmVhY29uRGlzY292ZXJ5JyxcbiAgLy8gJ3N0b3BCZWFjb25EaXNjb3ZlcnknLFxuICAvLyAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJyxcbiAgLy8gJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsXG4gIC8vICdzZXRUYWJCYXJJdGVtJyxcbiAgLy8gJ3NldFRhYkJhclN0eWxlJyxcbiAgLy8gJ2hpZGVUYWJCYXInLFxuICAvLyAnc2hvd1RhYkJhcicsXG4gIC8vICdzZXRUYWJCYXJCYWRnZScsXG4gIC8vICdyZW1vdmVUYWJCYXJCYWRnZScsXG4gIC8vICdzaG93VGFiQmFyUmVkRG90JyxcbiAgLy8gJ2hpZGVUYWJCYXJSZWREb3QnLFxuICAvLyAnc2V0QmFja2dyb3VuZENvbG9yJyxcbiAgLy8gJ3NldEJhY2tncm91bmRUZXh0U3R5bGUnLFxuICAvLyAnY2hvb3NlSW52b2ljZVRpdGxlJyxcbiAgLy8gJ2FkZFRlbXBsYXRlJyxcbiAgLy8gJ2RlbGV0ZVRlbXBsYXRlJyxcbiAgLy8gJ2dldFRlbXBsYXRlTGlicmFyeUJ5SWQnLFxuICAvLyAnZ2V0VGVtcGxhdGVMaWJyYXJ5TGlzdCcsXG4gIC8vICdnZXRUZW1wbGF0ZUxpc3QnLFxuICAvLyAnc2VuZFRlbXBsYXRlTWVzc2FnZScsXG4gIC8vICdzZXRFbmFibGVEZWJ1ZycsXG4gIC8vICdvbldpbmRvd1Jlc2l6ZScsXG4gIC8vICdvZmZXaW5kb3dSZXNpemUnLFxuICAvLyAnY3JlYXRlT2Zmc2NyZWVuQ2FudmFzJyxcbiAgLy8gJ3ZpYnJhdGUnXG5dO1xuXG4vLyDlrZjlnKjlhbzlrrnmgKfnmoQgQVBJIOWIl+ihqFxuLy8g5aS05p2h5bCP56iL5bqP6IeqMS4zNS4wK+aUr+aMgWNhbklVc2VzXG5jb25zdCBjYW5JVXNlcyA9IFtcbiAgLy8gJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJyxcbiAgLy8gJ2dldFNhdmVkRmlsZUxpc3QnLFxuICAvLyAncmVtb3ZlU2F2ZWRGaWxlJyxcbiAgLy8gJ2hpZGVLZXlib2FyZCcsXG4gIC8vICdnZXRJbWFnZUluZm8nLFxuICAvLyAnY3JlYXRlVmlkZW9Db250ZXh0JyxcbiAgLy8gJ29uU29ja2V0T3BlbicsXG4gIC8vICdvblNvY2tldEVycm9yJyxcbiAgLy8gJ3NlbmRTb2NrZXRNZXNzYWdlJyxcbiAgLy8gJ29uU29ja2V0TWVzc2FnZScsXG4gIC8vICdjbG9zZVNvY2tldCcsXG4gIC8vICdvblNvY2tldENsb3NlJyxcbiAgLy8gJ2dldEV4dENvbmZpZycsXG4gIC8vICdnZXRFeHRDb25maWdTeW5jJyxcbiAgLy8gJ25hdmlnYXRlVG9NaW5pUHJvZ3JhbScsXG4gIC8vICduYXZpZ2F0ZUJhY2tNaW5pUHJvZ3JhbScsXG4gIC8vICdjb21wcmVzc0ltYWdlJyxcbiAgLy8gJ2Nob29zZUxvY2F0aW9uJyxcbiAgLy8gJ29wZW5Eb2N1bWVudCcsXG4gIC8vICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcbiAgLy8gJ2dldEJhY2tncm91bmRBdWRpb01hbmFnZXInLFxuICAvLyAnc2V0TmF2aWdhdGlvbkJhckNvbG9yJyxcbl07XG5cbi8vIOmcgOimgeWBmui9rOaNoueahCBBUEkg5YiX6KGoXG5jb25zdCBwcm90b2NvbHMgPSB7XG4gIGNob29zZUltYWdlOiB7XG4gICAgYXJnczoge1xuICAgICAgc2l6ZVR5cGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBuYXZpZ2F0ZVRvLFxuICByZWRpcmVjdFRvLFxuICBwcmV2aWV3SW1hZ2UsXG4gIGdldFN5c3RlbUluZm8sXG4gIGdldFN5c3RlbUluZm9TeW5jOiBnZXRTeXN0ZW1JbmZvLFxuICBnZXRVc2VyUHJvZmlsZSxcbiAgY29ubmVjdFNvY2tldDoge1xuICAgIGFyZ3M6IHtcbiAgICAgIG1ldGhvZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNob29zZVZpZGVvOiB7XG4gICAgYXJnczoge1xuICAgICAgY2FtZXJhOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc2NhbkNvZGU6IHtcbiAgICBhcmdzOiB7XG4gICAgICBvbmx5RnJvbUNhbWVyYTogZmFsc2UsXG4gICAgICBzY2FuVHlwZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHN0YXJ0QWNjZWxlcm9tZXRlcjoge1xuICAgIGFyZ3M6IHtcbiAgICAgIGludGVydmFsOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgc2hvd1RvYXN0OiB7XG4gICAgYXJnczoge1xuICAgICAgaW1hZ2U6IGZhbHNlLFxuICAgICAgbWFzazogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHNob3dMb2FkaW5nOiB7XG4gICAgYXJnczoge1xuICAgICAgbWFzazogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHNob3dNb2RhbDoge1xuICAgIGFyZ3M6IHtcbiAgICAgIGNhbmNlbENvbG9yOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1Db2xvcjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHNob3dBY3Rpb25TaGVldDoge1xuICAgIGFyZ3M6IHtcbiAgICAgIGl0ZW1Db2xvcjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGxvZ2luOiB7XG4gICAgYXJnczoge1xuICAgICAgc2NvcGVzOiBmYWxzZSxcbiAgICAgIHRpbWVvdXQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBnZXRVc2VySW5mbzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIGxhbmc6IGZhbHNlLFxuICAgICAgdGltZW91dDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHJlcXVlc3RQYXltZW50OiB7XG4gICAgbmFtZTogdHQucGF5ID8gJ3BheScgOiAncmVxdWVzdFBheW1lbnQnLFxuICAgIGFyZ3M6IHtcbiAgICAgIG9yZGVySW5mbzogdHQucGF5ID8gJ29yZGVySW5mbycgOiAnZGF0YSdcbiAgICB9XG4gIH0sXG4gIGdldEZpbGVJbmZvOiB7XG4gICAgYXJnczoge1xuICAgICAgZGlnZXN0QWxnb3JpdGhtOiBmYWxzZVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgQ0FMTEJBQ0tTID0gWydzdWNjZXNzJywgJ2ZhaWwnLCAnY2FuY2VsJywgJ2NvbXBsZXRlJ107XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayAobWV0aG9kTmFtZSwgbWV0aG9kLCByZXR1cm5WYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcmdzIChtZXRob2ROYW1lLCBmcm9tQXJncywgYXJnc09wdGlvbiA9IHt9LCByZXR1cm5WYWx1ZSA9IHt9LCBrZWVwRnJvbUFyZ3MgPSBmYWxzZSkge1xuICBpZiAoaXNQbGFpbk9iamVjdChmcm9tQXJncykpIHsgLy8g5LiA6IisIGFwaSDnmoTlj4LmlbDop6PmnpBcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XG4gICAgaWYgKGlzRm4oYXJnc09wdGlvbikpIHtcbiAgICAgIGFyZ3NPcHRpb24gPSBhcmdzT3B0aW9uKGZyb21BcmdzLCB0b0FyZ3MpIHx8IHt9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tQXJncykge1xuICAgICAgaWYgKGhhc093bihhcmdzT3B0aW9uLCBrZXkpKSB7XG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XG4gICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcbiAgICAgICAgICBrZXlPcHRpb24gPSBrZXlPcHRpb24oZnJvbUFyZ3Nba2V5XSwgZnJvbUFyZ3MsIHRvQXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrZXlPcHRpb24pIHsgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXG4gICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgJyR7bWV0aG9kTmFtZX0nIG1ldGhvZCBvZiBwbGF0Zm9ybSAn5aS05p2h5bCP56iL5bqPJyBkb2VzIG5vdCBzdXBwb3J0IG9wdGlvbiAnJHtrZXl9J2ApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb25dID0gZnJvbUFyZ3Nba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGtleU9wdGlvbikpIHsgLy8ge25hbWU6bmV3TmFtZSx2YWx1ZTp2YWx1ZX3lj6/ph43mlrDmjIflrprlj4LmlbAga2V5OnZhbHVlXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKENBTExCQUNLUy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChpc0ZuKGZyb21BcmdzW2tleV0pKSB7XG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3Nba2V5XSwgcmV0dXJuVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWtlZXBGcm9tQXJncykge1xuICAgICAgICAgIHRvQXJnc1trZXldID0gZnJvbUFyZ3Nba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9BcmdzXG4gIH0gZWxzZSBpZiAoaXNGbihmcm9tQXJncykpIHtcbiAgICBmcm9tQXJncyA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJncywgcmV0dXJuVmFsdWUpO1xuICB9XG4gIHJldHVybiBmcm9tQXJnc1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzUmV0dXJuVmFsdWUgKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIGtlZXBSZXR1cm5WYWx1ZSA9IGZhbHNlKSB7XG4gIGlmIChpc0ZuKHByb3RvY29scy5yZXR1cm5WYWx1ZSkpIHsgLy8g5aSE55CG6YCa55SoIHJldHVyblZhbHVlXG4gICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3NBcmdzKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIHt9LCBrZWVwUmV0dXJuVmFsdWUpXG59XG5cbmZ1bmN0aW9uIHdyYXBwZXIgKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xuICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcbiAgICBjb25zdCBwcm90b2NvbCA9IHByb3RvY29sc1ttZXRob2ROYW1lXTtcbiAgICBpZiAoIXByb3RvY29sKSB7IC8vIOaaguS4jeaUr+aMgeeahCBhcGlcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFBsYXRmb3JtICflpLTmnaHlsI/nqIvluo8nIGRvZXMgbm90IHN1cHBvcnQgJyR7bWV0aG9kTmFtZX0nLmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZzEsIGFyZzIpIHsgLy8g55uu5YmNIGFwaSDmnIDlpJrkuKTkuKrlj4LmlbBcbiAgICAgIGxldCBvcHRpb25zID0gcHJvdG9jb2w7XG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcbiAgICAgICAgb3B0aW9ucyA9IHByb3RvY29sKGFyZzEpO1xuICAgICAgfVxuXG4gICAgICBhcmcxID0gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgYXJnMSwgb3B0aW9ucy5hcmdzLCBvcHRpb25zLnJldHVyblZhbHVlKTtcblxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcbiAgICAgIGlmICh0eXBlb2YgYXJnMiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXJncy5wdXNoKGFyZzIpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRm4ob3B0aW9ucy5uYW1lKSkge1xuICAgICAgICBtZXRob2ROYW1lID0gb3B0aW9ucy5uYW1lKGFyZzEpO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XG4gICAgICAgIG1ldGhvZE5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICB9XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHR0W21ldGhvZE5hbWVdLmFwcGx5KHR0LCBhcmdzKTtcbiAgICAgIGlmIChpc1N5bmNBcGkobWV0aG9kTmFtZSkpIHsgLy8g5ZCM5q2lIGFwaVxuICAgICAgICByZXR1cm4gcHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJldHVyblZhbHVlLCBvcHRpb25zLnJldHVyblZhbHVlLCBpc0NvbnRleHRBcGkobWV0aG9kTmFtZSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1ldGhvZFxufVxuXG5jb25zdCB0b2RvQXBpcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmNvbnN0IFRPRE9TID0gW1xuICAnb25UYWJCYXJNaWRCdXR0b25UYXAnLFxuICAnc3Vic2NyaWJlUHVzaCcsXG4gICd1bnN1YnNjcmliZVB1c2gnLFxuICAnb25QdXNoJyxcbiAgJ29mZlB1c2gnLFxuICAnc2hhcmUnXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b2RvQXBpICh7XG4gICAgZmFpbCxcbiAgICBjb21wbGV0ZVxuICB9KSB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsIG1ldGhvZCAnJHtuYW1lfScgbm90IHN1cHBvcnRlZGBcbiAgICB9O1xuICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG4gIH1cbn1cblxuVE9ET1MuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICB0b2RvQXBpc1tuYW1lXSA9IGNyZWF0ZVRvZG9BcGkobmFtZSk7XG59KTtcblxudmFyIHByb3ZpZGVycyA9IHtcbiAgb2F1dGg6IFsndG91dGlhbyddLFxuICBzaGFyZTogWyd0b3V0aWFvJ10sXG4gIHBheW1lbnQ6IFsndG91dGlhbyddLFxuICBwdXNoOiBbJ3RvdXRpYW8nXVxufTtcblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIgKHtcbiAgc2VydmljZSxcbiAgc3VjY2VzcyxcbiAgZmFpbCxcbiAgY29tcGxldGVcbn0pIHtcbiAgbGV0IHJlcyA9IGZhbHNlO1xuICBpZiAocHJvdmlkZXJzW3NlcnZpY2VdKSB7XG4gICAgcmVzID0ge1xuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6b2snLFxuICAgICAgc2VydmljZSxcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlcnNbc2VydmljZV1cbiAgICB9O1xuICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHtcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOmZhaWwgc2VydmljZSBub3QgZm91bmQnXG4gICAgfTtcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcbiAgfVxuICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xufVxuXG52YXIgZXh0cmFBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0UHJvdmlkZXI6IGdldFByb3ZpZGVyXG59KTtcblxuY29uc3QgZ2V0RW1pdHRlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBFbWl0dGVyO1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlciAoKSB7XG4gICAgaWYgKCFFbWl0dGVyKSB7XG4gICAgICBFbWl0dGVyID0gbmV3IFZ1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gRW1pdHRlclxuICB9XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseSAoY3R4LCBtZXRob2QsIGFyZ3MpIHtcbiAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncylcbn1cblxuZnVuY3Rpb24gJG9uICgpIHtcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFsuLi5hcmd1bWVudHNdKVxufVxuZnVuY3Rpb24gJG9mZiAoKSB7XG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgWy4uLmFyZ3VtZW50c10pXG59XG5mdW5jdGlvbiAkb25jZSAoKSB7XG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFsuLi5hcmd1bWVudHNdKVxufVxuZnVuY3Rpb24gJGVtaXQgKCkge1xuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbLi4uYXJndW1lbnRzXSlcbn1cblxudmFyIGV2ZW50QXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gICRvbjogJG9uLFxuICAkb2ZmOiAkb2ZmLFxuICAkb25jZTogJG9uY2UsXG4gICRlbWl0OiAkZW1pdFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlciAoKSB7XG4gIGNvbnN0IG1lZGlhUXVlcnlPYnNlcnZlciA9IHt9O1xuICBjb25zdCB7XG4gICAgd2luZG93V2lkdGgsXG4gICAgd2luZG93SGVpZ2h0XG4gIH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gd2luZG93V2lkdGggPCB3aW5kb3dIZWlnaHQgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG5cbiAgbWVkaWFRdWVyeU9ic2VydmVyLm9ic2VydmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgbWF0Y2hlcyA9IHRydWU7XG4gICAgZm9yIChjb25zdCBpdGVtIGluIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0gPT09ICdvcmllbnRhdGlvbicgPyBvcHRpb25zW2l0ZW1dIDogTnVtYmVyKG9wdGlvbnNbaXRlbV0pO1xuICAgICAgaWYgKG9wdGlvbnNbaXRlbV0gIT09ICcnKSB7XG4gICAgICAgIGlmIChpdGVtID09PSAnd2lkdGgnKSB7XG4gICAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnbWluV2lkdGgnKSB7XG4gICAgICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGl0ZW1WYWx1ZSkge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtYXhXaWR0aCcpIHtcbiAgICAgICAgICBpZiAod2luZG93V2lkdGggPD0gaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgIGlmIChpdGVtVmFsdWUgPT09IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hdGNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtaW5IZWlnaHQnKSB7XG4gICAgICAgICAgaWYgKHdpbmRvd0hlaWdodCA+PSBpdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjayhtYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnbWF4SGVpZ2h0Jykge1xuICAgICAgICAgIGlmICh3aW5kb3dIZWlnaHQgPD0gaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtID09PSAnb3JpZW50YXRpb24nKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaXRlbV0gPT09IG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2sobWF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFjayhtYXRjaGVzKTtcblxuICAgIHJldHVybiBtYXRjaGVzXG4gIH07XG5cbiAgbWVkaWFRdWVyeU9ic2VydmVyLmRpc2Nvbm5lY3QgPSAoKSA9PiB7XG4gIH07XG5cbiAgcmV0dXJuIG1lZGlhUXVlcnlPYnNlcnZlclxufVxuXG52YXIgYXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGNyZWF0ZU1lZGlhUXVlcnlPYnNlcnZlcjogY3JlYXRlTWVkaWFRdWVyeU9ic2VydmVyXG59KTtcblxuY29uc3QgTVBQYWdlID0gUGFnZTtcbmNvbnN0IE1QQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG5jb25zdCBjdXN0b21pemVSRSA9IC86L2c7XG5cbmNvbnN0IGN1c3RvbWl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XG4gIHJldHVybiBjYW1lbGl6ZShzdHIucmVwbGFjZShjdXN0b21pemVSRSwgJy0nKSlcbn0pO1xuXG5mdW5jdGlvbiBpbml0VHJpZ2dlckV2ZW50IChtcEluc3RhbmNlKSB7XG4gIGNvbnN0IG9sZFRyaWdnZXJFdmVudCA9IG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50O1xuICBtcEluc3RhbmNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgLi4uYXJncykge1xuICAgIHJldHVybiBvbGRUcmlnZ2VyRXZlbnQuYXBwbHkobXBJbnN0YW5jZSwgW2N1c3RvbWl6ZShldmVudCksIC4uLmFyZ3NdKVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SG9vayAobmFtZSwgb3B0aW9ucykge1xuICBjb25zdCBvbGRIb29rID0gb3B0aW9uc1tuYW1lXTtcbiAgaWYgKCFvbGRIb29rKSB7XG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XG4gICAgICByZXR1cm4gb2xkSG9vay5hcHBseSh0aGlzLCBhcmdzKVxuICAgIH07XG4gIH1cbn1cbmlmICghTVBQYWdlLl9fJHdyYXBwZXJlZCkge1xuICBNUFBhZ2UuX18kd3JhcHBlcmVkID0gdHJ1ZTtcbiAgUGFnZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcbiAgICBpbml0SG9vaygnb25Mb2FkJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIE1QUGFnZShvcHRpb25zKVxuICB9O1xuICBQYWdlLmFmdGVyID0gTVBQYWdlLmFmdGVyO1xuXG4gIENvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcbiAgICBpbml0SG9vaygnY3JlYXRlZCcsIG9wdGlvbnMpO1xuICAgIHJldHVybiBNUENvbXBvbmVudChvcHRpb25zKVxuICB9O1xufVxuXG5jb25zdCBQQUdFX0VWRU5UX0hPT0tTID0gW1xuICAnb25QdWxsRG93blJlZnJlc2gnLFxuICAnb25SZWFjaEJvdHRvbScsXG4gICdvbkFkZFRvRmF2b3JpdGVzJyxcbiAgJ29uU2hhcmVUaW1lbGluZScsXG4gICdvblNoYXJlQXBwTWVzc2FnZScsXG4gICdvblBhZ2VTY3JvbGwnLFxuICAnb25SZXNpemUnLFxuICAnb25UYWJJdGVtVGFwJ1xuXTtcblxuZnVuY3Rpb24gaW5pdE1vY2tzICh2bSwgbW9ja3MpIHtcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xuICBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4ge1xuICAgIGlmIChoYXNPd24obXBJbnN0YW5jZSwgbW9jaykpIHtcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNIb29rIChob29rLCB2dWVPcHRpb25zKSB7XG4gIGlmICghdnVlT3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoVnVlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShWdWUub3B0aW9uc1tob29rXSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdnVlT3B0aW9ucyA9IHZ1ZU9wdGlvbnMuZGVmYXVsdCB8fCB2dWVPcHRpb25zO1xuXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XG4gICAgaWYgKGlzRm4odnVlT3B0aW9ucy5leHRlbmRPcHRpb25zW2hvb2tdKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKHZ1ZU9wdGlvbnMuc3VwZXIgJiZcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxuICAgICAgQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnN1cGVyLm9wdGlvbnNbaG9va10pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnNbaG9va10pKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xuICBob29rcy5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soaG9vaywgYXJncylcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFZ1ZUNvbXBvbmVudCAoVnVlLCB2dWVPcHRpb25zKSB7XG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcbiAgbGV0IFZ1ZUNvbXBvbmVudDtcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIFZ1ZUNvbXBvbmVudCA9IFZ1ZS5leHRlbmQodnVlT3B0aW9ucyk7XG4gIH1cbiAgdnVlT3B0aW9ucyA9IFZ1ZUNvbXBvbmVudC5vcHRpb25zO1xuICByZXR1cm4gW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc11cbn1cblxuZnVuY3Rpb24gaW5pdFNsb3RzICh2bSwgdnVlU2xvdHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xuICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdnVlU2xvdHMuZm9yRWFjaChzbG90TmFtZSA9PiB7XG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB2bS4kc2NvcGVkU2xvdHMgPSB2bS4kc2xvdHMgPSAkc2xvdHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XG4gIHZ1ZUlkcyA9ICh2dWVJZHMgfHwgJycpLnNwbGl0KCcsJyk7XG4gIGNvbnN0IGxlbiA9IHZ1ZUlkcy5sZW5ndGg7XG5cbiAgaWYgKGxlbiA9PT0gMSkge1xuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XG4gICAgbXBJbnN0YW5jZS5fJHZ1ZVBpZCA9IHZ1ZUlkc1sxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xuICBsZXQgZGF0YSA9IHZ1ZU9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgY29uc3QgbWV0aG9kcyA9IHZ1ZU9wdGlvbnMubWV0aG9kcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOWvuSBkYXRhIOagvOW8j+WMllxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gIH1cblxuICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YVxufVxuXG5jb25zdCBQUk9QX1RZUEVTID0gW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBPYmplY3QsIEFycmF5LCBudWxsXTtcblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9ic2VydmVyIChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmICh0aGlzLiR2bSkge1xuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XG4gIGNvbnN0IHZ1ZUV4dGVuZHMgPSB2dWVPcHRpb25zLmV4dGVuZHM7XG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xuXG4gIGxldCB2dWVQcm9wcyA9IHZ1ZU9wdGlvbnMucHJvcHM7XG5cbiAgaWYgKCF2dWVQcm9wcykge1xuICAgIHZ1ZU9wdGlvbnMucHJvcHMgPSB2dWVQcm9wcyA9IFtdO1xuICB9XG5cbiAgY29uc3QgYmVoYXZpb3JzID0gW107XG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XG4gICAgICBiZWhhdmlvcnMucHVzaChiZWhhdmlvci5yZXBsYWNlKCd1bmk6Ly8nLCBgJHtcInR0XCJ9Oi8vYCkpO1xuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodnVlUHJvcHMpKSB7XG4gICAgICAgICAgdnVlUHJvcHMucHVzaCgnbmFtZScpO1xuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdnVlUHJvcHMubmFtZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRGF0ZV0sXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpZiAoaXNQbGFpbk9iamVjdCh2dWVFeHRlbmRzKSAmJiB2dWVFeHRlbmRzLnByb3BzKSB7XG4gICAgYmVoYXZpb3JzLnB1c2goXG4gICAgICBpbml0QmVoYXZpb3Ioe1xuICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVFeHRlbmRzLnByb3BzLCB0cnVlKVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcbiAgICB2dWVNaXhpbnMuZm9yRWFjaCh2dWVNaXhpbiA9PiB7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh2dWVNaXhpbikgJiYgdnVlTWl4aW4ucHJvcHMpIHtcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXG4gICAgICAgICAgaW5pdEJlaGF2aW9yKHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU1peGluLnByb3BzLCB0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJlaGF2aW9yc1xufVxuXG5mdW5jdGlvbiBwYXJzZVByb3BUeXBlIChrZXksIHR5cGUsIGRlZmF1bHRWYWx1ZSwgZmlsZSkge1xuICAvLyBbU3RyaW5nXT0+U3RyaW5nXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpICYmIHR5cGUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHR5cGVbMF1cbiAgfVxuICByZXR1cm4gdHlwZVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcGVydGllcyAocHJvcHMsIGlzQmVoYXZpb3IgPSBmYWxzZSwgZmlsZSA9ICcnKSB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XG4gICAgcHJvcGVydGllcy52dWVJZCA9IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gICAgLy8g55So5LqO5a2X6IqC6Lez5Yqo5bCP56iL5bqP5qih5ouf5oq96LGh6IqC54K5XG4gICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIHByb3BlcnRpZXMudnVlU2xvdHMgPSB7IC8vIOWwj+eoi+W6j+S4jeiDveebtOaOpeWumuS5iSAkc2xvdHMg55qEIHByb3Bz77yM5omA5Lul6YCa6L+HIHZ1ZVNsb3RzIOi9rOaNouWIsCAkc2xvdHNcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICB2YWx1ZTogW10sXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGNvbnN0ICRzbG90cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIG5ld1ZhbC5mb3JFYWNoKHNsb3ROYW1lID0+IHtcbiAgICAgICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgJHNsb3RzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7IC8vIFsndGl0bGUnXVxuICAgIHByb3BzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHByb3BlcnRpZXNba2V5XSA9IHtcbiAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgb2JzZXJ2ZXI6IGNyZWF0ZU9ic2VydmVyKGtleSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHsgLy8ge3RpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfSxjb250ZW50OlN0cmluZ31cbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb3B0cyA9IHByb3BzW2tleV07XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRzKSkgeyAvLyB0aXRsZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDonJ31cbiAgICAgICAgbGV0IHZhbHVlID0gb3B0cy5kZWZhdWx0O1xuICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRzLnR5cGUgPSBwYXJzZVByb3BUeXBlKGtleSwgb3B0cy50eXBlKTtcblxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XG4gICAgICAgICAgdHlwZTogUFJPUF9UWVBFUy5pbmRleE9mKG9wdHMudHlwZSkgIT09IC0xID8gb3B0cy50eXBlIDogbnVsbCxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHsgLy8gY29udGVudDpTdHJpbmdcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzKTtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0ge1xuICAgICAgICAgIHR5cGU6IFBST1BfVFlQRVMuaW5kZXhPZih0eXBlKSAhPT0gLTEgPyB0eXBlIDogbnVsbCxcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzXG59XG5cbmZ1bmN0aW9uIHdyYXBwZXIkMSAoZXZlbnQpIHtcbiAgLy8gVE9ETyDlj4jlvpflhbzlrrkgbXB2dWUg55qEIG1wIOWvueixoVxuICB0cnkge1xuICAgIGV2ZW50Lm1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IG5vb3A7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gbm9vcDtcblxuICBldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQgfHwge307XG5cbiAgaWYgKCFoYXNPd24oZXZlbnQsICdkZXRhaWwnKSkge1xuICAgIGV2ZW50LmRldGFpbCA9IHt9O1xuICB9XG5cbiAgaWYgKGhhc093bihldmVudCwgJ21hcmtlcklkJykpIHtcbiAgICBldmVudC5kZXRhaWwgPSB0eXBlb2YgZXZlbnQuZGV0YWlsID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xuICAgIGV2ZW50LmRldGFpbC5tYXJrZXJJZCA9IGV2ZW50Lm1hcmtlcklkO1xuICB9XG5cbiAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xuICAgIGV2ZW50LnRhcmdldCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LnRhcmdldCwgZXZlbnQuZGV0YWlsKTtcbiAgfVxuXG4gIHJldHVybiBldmVudFxufVxuXG5mdW5jdGlvbiBnZXRFeHRyYVZhbHVlICh2bSwgZGF0YVBhdGhzQXJyYXkpIHtcbiAgbGV0IGNvbnRleHQgPSB2bTtcbiAgZGF0YVBhdGhzQXJyYXkuZm9yRWFjaChkYXRhUGF0aEFycmF5ID0+IHtcbiAgICBjb25zdCBkYXRhUGF0aCA9IGRhdGFQYXRoQXJyYXlbMF07XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhUGF0aEFycmF5WzJdO1xuICAgIGlmIChkYXRhUGF0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7IC8vIFsnJywnJyxpbmRleCwnZGlzYWJsZSddXG4gICAgICBjb25zdCBwcm9wUGF0aCA9IGRhdGFQYXRoQXJyYXlbMV07XG4gICAgICBjb25zdCB2YWx1ZVBhdGggPSBkYXRhUGF0aEFycmF5WzNdO1xuXG4gICAgICBsZXQgdkZvcjtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGRhdGFQYXRoKSkge1xuICAgICAgICB2Rm9yID0gZGF0YVBhdGg7XG4gICAgICB9IGVsc2UgaWYgKCFkYXRhUGF0aCkge1xuICAgICAgICB2Rm9yID0gY29udGV4dDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJyAmJiBkYXRhUGF0aCkge1xuICAgICAgICBpZiAoZGF0YVBhdGguaW5kZXhPZignI3MjJykgPT09IDApIHtcbiAgICAgICAgICB2Rm9yID0gZGF0YVBhdGguc3Vic3RyKDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZGb3IgPSB2bS5fX2dldF92YWx1ZShkYXRhUGF0aCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodkZvcikpIHtcbiAgICAgICAgY29udGV4dCA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICghcHJvcFBhdGgpIHtcbiAgICAgICAgY29udGV4dCA9IHZGb3JbdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodkZvcikpIHtcbiAgICAgICAgICBjb250ZXh0ID0gdkZvci5maW5kKHZGb3JJdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvckl0ZW0pID09PSB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodkZvcikpIHtcbiAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmtleXModkZvcikuZmluZCh2Rm9yS2V5ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvclt2Rm9yS2V5XSkgPT09IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigndi1mb3Ig5pqC5LiN5pSv5oyB5b6q546v5pWw5o2u77yaJywgdkZvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlUGF0aCkge1xuICAgICAgICBjb250ZXh0ID0gdm0uX19nZXRfdmFsdWUodmFsdWVQYXRoLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29udGV4dFxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRFeHRyYSAodm0sIGV4dHJhLCBldmVudCkge1xuICBjb25zdCBleHRyYU9iaiA9IHt9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGV4dHJhKSAmJiBleHRyYS5sZW5ndGgpIHtcbiAgICAvKipcbiAgICAgKltcbiAgICAgKiAgICBbJ2RhdGEuaXRlbXMnLCAnZGF0YS5pZCcsIGl0ZW0uZGF0YS5pZF0sXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXG4gICAgICpdLFxuICAgICAqW1xuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cbiAgICAgKl0sXG4gICAgICondGVzdCdcbiAgICAgKi9cbiAgICBleHRyYS5mb3JFYWNoKChkYXRhUGF0aCwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghZGF0YVBhdGgpIHsgLy8gbW9kZWwscHJvcC5zeW5jXG4gICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRhdGFQYXRoID09PSAnJGV2ZW50JykgeyAvLyAkZXZlbnRcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGggPT09ICdhcmd1bWVudHMnKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC5fX2FyZ3NfXykge1xuICAgICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBldmVudC5kZXRhaWwuX19hcmdzX187XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBbZXZlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGguaW5kZXhPZignJGV2ZW50LicpID09PSAwKSB7IC8vICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLnJlcGxhY2UoJyRldmVudC4nLCAnJyksIGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZ2V0RXh0cmFWYWx1ZSh2bSwgZGF0YVBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV4dHJhT2JqXG59XG5cbmZ1bmN0aW9uIGdldE9iakJ5QXJyYXkgKGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xuICAgIG9ialtlbGVtZW50WzBdXSA9IGVsZW1lbnRbMV07XG4gIH1cbiAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzICh2bSwgZXZlbnQsIGFyZ3MgPSBbXSwgZXh0cmEgPSBbXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpIHtcbiAgbGV0IGlzQ3VzdG9tTVBFdmVudCA9IGZhbHNlOyAvLyB3eGNvbXBvbmVudCDnu4Tku7bvvIzkvKDpgJLljp/lp4sgZXZlbnQg5a+56LGhXG4gIGlmIChpc0N1c3RvbSkgeyAvLyDoh6rlrprkuYnkuovku7ZcbiAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgJiZcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb21UeXBlID09PSAnd3gnO1xuICAgIGlmICghYXJncy5sZW5ndGgpIHsgLy8g5peg5Y+C5pWw77yM55u05o6l5Lyg5YWlIGV2ZW50IOaIliBkZXRhaWwg5pWw57uEXG4gICAgICBpZiAoaXNDdXN0b21NUEV2ZW50KSB7XG4gICAgICAgIHJldHVybiBbZXZlbnRdXG4gICAgICB9XG4gICAgICByZXR1cm4gZXZlbnQuZGV0YWlsLl9fYXJnc19fIHx8IGV2ZW50LmRldGFpbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4dHJhT2JqID0gcHJvY2Vzc0V2ZW50RXh0cmEodm0sIGV4dHJhLCBldmVudCk7XG5cbiAgY29uc3QgcmV0ID0gW107XG4gIGFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ19fc2V0X21vZGVsJyAmJiAhaXNDdXN0b20pIHsgLy8gaW5wdXQgdi1tb2RlbCB2YWx1ZVxuICAgICAgICByZXQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzQ3VzdG9tICYmICFpc0N1c3RvbU1QRXZlbnQpIHtcbiAgICAgICAgICByZXQucHVzaChldmVudC5kZXRhaWwuX19hcmdzX19bMF0pO1xuICAgICAgICB9IGVsc2UgeyAvLyB3eGNvbXBvbmVudCDnu4Tku7bmiJblhoXnva7nu4Tku7ZcbiAgICAgICAgICByZXQucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmdbMF0gPT09ICdvJykge1xuICAgICAgICByZXQucHVzaChnZXRPYmpCeUFycmF5KGFyZykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBoYXNPd24oZXh0cmFPYmosIGFyZykpIHtcbiAgICAgICAgcmV0LnB1c2goZXh0cmFPYmpbYXJnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQucHVzaChhcmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJldFxufVxuXG5jb25zdCBPTkNFID0gJ34nO1xuY29uc3QgQ1VTVE9NID0gJ14nO1xuXG5mdW5jdGlvbiBpc01hdGNoRXZlbnRUeXBlIChldmVudFR5cGUsIG9wdFR5cGUpIHtcbiAgcmV0dXJuIChldmVudFR5cGUgPT09IG9wdFR5cGUpIHx8XG4gICAgKFxuICAgICAgb3B0VHlwZSA9PT0gJ3JlZ2lvbmNoYW5nZScgJiZcbiAgICAgIChcbiAgICAgICAgZXZlbnRUeXBlID09PSAnYmVnaW4nIHx8XG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2VuZCdcbiAgICAgIClcbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHRWbSAodm0pIHtcbiAgbGV0ICRwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAvLyDniLbnu4Tku7bmmK8gc2NvcGVkIHNsb3RzIOaIluiAheWFtuS7luiHquWumuS5iee7hOS7tuaXtue7p+e7reafpeaJvlxuICB3aGlsZSAoJHBhcmVudCAmJiAkcGFyZW50LiRwYXJlbnQgJiYgKCRwYXJlbnQuJG9wdGlvbnMuZ2VuZXJpYyB8fCAkcGFyZW50LiRwYXJlbnQuJG9wdGlvbnMuZ2VuZXJpYyB8fCAkcGFyZW50LiRzY29wZS5fJHZ1ZVBpZCkpIHtcbiAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xuICB9XG4gIHJldHVybiAkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudFxufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZlbnQpIHtcbiAgZXZlbnQgPSB3cmFwcGVyJDEoZXZlbnQpO1xuXG4gIC8vIFtbJ3RhcCcsW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXV1dXG4gIGNvbnN0IGRhdGFzZXQgPSAoZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQpLmRhdGFzZXQ7XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXG4gIH1cbiAgY29uc3QgZXZlbnRPcHRzID0gZGF0YXNldC5ldmVudE9wdHMgfHwgZGF0YXNldFsnZXZlbnQtb3B0cyddOyAvLyDmlK/ku5jlrp0gd2ViLXZpZXcg57uE5Lu2IGRhdGFzZXQg6Z2e6am85bOwXG4gIGlmICghZXZlbnRPcHRzKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcbiAgfVxuXG4gIC8vIFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1cbiAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcblxuICBjb25zdCByZXQgPSBbXTtcblxuICBldmVudE9wdHMuZm9yRWFjaChldmVudE9wdCA9PiB7XG4gICAgbGV0IHR5cGUgPSBldmVudE9wdFswXTtcbiAgICBjb25zdCBldmVudHNBcnJheSA9IGV2ZW50T3B0WzFdO1xuXG4gICAgY29uc3QgaXNDdXN0b20gPSB0eXBlLmNoYXJBdCgwKSA9PT0gQ1VTVE9NO1xuICAgIHR5cGUgPSBpc0N1c3RvbSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xuICAgIGNvbnN0IGlzT25jZSA9IHR5cGUuY2hhckF0KDApID09PSBPTkNFO1xuICAgIHR5cGUgPSBpc09uY2UgPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcblxuICAgIGlmIChldmVudHNBcnJheSAmJiBpc01hdGNoRXZlbnRUeXBlKGV2ZW50VHlwZSwgdHlwZSkpIHtcbiAgICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnRBcnJheSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBldmVudEFycmF5WzBdO1xuICAgICAgICBpZiAobWV0aG9kTmFtZSkge1xuICAgICAgICAgIGxldCBoYW5kbGVyQ3R4ID0gdGhpcy4kdm07XG4gICAgICAgICAgaWYgKGhhbmRsZXJDdHguJG9wdGlvbnMuZ2VuZXJpYykgeyAvLyBtcC13ZWl4aW4sbXAtdG91dGlhbyDmir3osaHoioLngrnmqKHmi58gc2NvcGVkIHNsb3RzXG4gICAgICAgICAgICBoYW5kbGVyQ3R4ID0gZ2V0Q29udGV4dFZtKGhhbmRsZXJDdHgpIHx8IGhhbmRsZXJDdHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnJGVtaXQnKSB7XG4gICAgICAgICAgICBoYW5kbGVyQ3R4LiRlbWl0LmFwcGx5KGhhbmRsZXJDdHgsXG4gICAgICAgICAgICAgIHByb2Nlc3NFdmVudEFyZ3MoXG4gICAgICAgICAgICAgICAgdGhpcy4kdm0sXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzJdLFxuICAgICAgICAgICAgICAgIGlzQ3VzdG9tLFxuICAgICAgICAgICAgICAgIG1ldGhvZE5hbWVcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJDdHhbbWV0aG9kTmFtZV07XG4gICAgICAgICAgaWYgKCFpc0ZuKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCBfdm0uJHttZXRob2ROYW1lfSBpcyBub3QgYSBmdW5jdGlvbmApXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc09uY2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGFyYW1zID0gcHJvY2Vzc0V2ZW50QXJncyhcbiAgICAgICAgICAgIHRoaXMuJHZtLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBldmVudEFycmF5WzFdLFxuICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcbiAgICAgICAgICAgIGlzQ3VzdG9tLFxuICAgICAgICAgICAgbWV0aG9kTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgICAgcGFyYW1zID0gQXJyYXkuaXNBcnJheShwYXJhbXMpID8gcGFyYW1zIDogW107XG4gICAgICAgICAgLy8g5Y+C5pWw5bC+6YOo5aKe5Yqg5Y6f5aeL5LqL5Lu25a+56LGh55So5LqO5aSN5p2C6KGo6L6+5byP5YaF6I635Y+W6aKd5aSW5pWw5o2uXG4gICAgICAgICAgaWYgKC89XFxzKlxcUytcXC5ldmVudFBhcmFtc1xccypcXHxcXHxcXHMqXFxTK1xcW1snXCJdZXZlbnQtcGFyYW1zWydcIl1cXF0vLnRlc3QoaGFuZGxlci50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5jb25jYXQoWywgLCAsICwgLCAsICwgLCAsICwgZXZlbnRdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0LnB1c2goaGFuZGxlci5hcHBseShoYW5kbGVyQ3R4LCBwYXJhbXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoXG4gICAgZXZlbnRUeXBlID09PSAnaW5wdXQnICYmXG4gICAgcmV0Lmxlbmd0aCA9PT0gMSAmJlxuICAgIHR5cGVvZiByZXRbMF0gIT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIHJldHVybiByZXRbMF1cbiAgfVxufVxuXG5jb25zdCBob29rcyA9IFtcbiAgJ29uU2hvdycsXG4gICdvbkhpZGUnLFxuICAnb25FcnJvcicsXG4gICdvblBhZ2VOb3RGb3VuZCcsXG4gICdvblRoZW1lQ2hhbmdlJyxcbiAgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJ1xuXTtcblxuZnVuY3Rpb24gaW5pdEV2ZW50Q2hhbm5lbCQxICgpIHtcbiAgVnVlLnByb3RvdHlwZS5nZXRPcGVuZXJFdmVudENoYW5uZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fZXZlbnRDaGFubmVsX18pIHtcbiAgICAgIHRoaXMuX19ldmVudENoYW5uZWxfXyA9IG5ldyBFdmVudENoYW5uZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19ldmVudENoYW5uZWxfX1xuICB9O1xuICBjb25zdCBjYWxsSG9vayA9IFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2s7XG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbiAoaG9vaywgYXJncykge1xuICAgIGlmIChob29rID09PSAnb25Mb2FkJyAmJiBhcmdzICYmIGFyZ3MuX19pZF9fKSB7XG4gICAgICB0aGlzLl9fZXZlbnRDaGFubmVsX18gPSBnZXRFdmVudENoYW5uZWwoYXJncy5fX2lkX18pO1xuICAgICAgZGVsZXRlIGFyZ3MuX19pZF9fO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEhvb2suY2FsbCh0aGlzLCBob29rLCBhcmdzKVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0U2NvcGVkU2xvdHNQYXJhbXMgKCkge1xuICBjb25zdCBjZW50ZXIgPSB7fTtcbiAgY29uc3QgcGFyZW50cyA9IHt9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGhhc1Njb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKHZ1ZUlkKSB7XG4gICAgY29uc3QgaGFzID0gY2VudGVyW3Z1ZUlkXTtcbiAgICBpZiAoIWhhcykge1xuICAgICAgcGFyZW50c1t2dWVJZF0gPSB0aGlzO1xuICAgICAgdGhpcy4kb24oJ2hvb2s6ZGVzdG9yeScsICgpID0+IHtcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRnZXRTY29wZWRTbG90c1BhcmFtcyA9IGZ1bmN0aW9uICh2dWVJZCwgbmFtZSwga2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IGNlbnRlclt2dWVJZF07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGRhdGFbbmFtZV0gfHwge307XG4gICAgICByZXR1cm4ga2V5ID8gb2JqZWN0W2tleV0gOiBvYmplY3RcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50c1t2dWVJZF0gPSB0aGlzO1xuICAgICAgdGhpcy4kb24oJ2hvb2s6ZGVzdG9yeScsICgpID0+IHtcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldFNjb3BlZFNsb3RzUGFyYW1zID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdnVlSWQgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YS52dWVJZDtcbiAgICBjb25zdCBvYmplY3QgPSBjZW50ZXJbdnVlSWRdID0gY2VudGVyW3Z1ZUlkXSB8fCB7fTtcbiAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAocGFyZW50c1t2dWVJZF0pIHtcbiAgICAgIHBhcmVudHNbdnVlSWRdLiRmb3JjZVVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBWdWUubWl4aW4oe1xuICAgIGRlc3Ryb3llZCAoKSB7XG4gICAgICBjb25zdCBwcm9wc0RhdGEgPSB0aGlzLiRvcHRpb25zLnByb3BzRGF0YTtcbiAgICAgIGNvbnN0IHZ1ZUlkID0gcHJvcHNEYXRhICYmIHByb3BzRGF0YS52dWVJZDtcbiAgICAgIGlmICh2dWVJZCkge1xuICAgICAgICBkZWxldGUgY2VudGVyW3Z1ZUlkXTtcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQmFzZUFwcCAodm0sIHtcbiAgbW9ja3MsXG4gIGluaXRSZWZzXG59KSB7XG4gIGluaXRFdmVudENoYW5uZWwkMSgpO1xuICB7XG4gICAgaW5pdFNjb3BlZFNsb3RzUGFyYW1zKCk7XG4gIH1cbiAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XG4gICAgVnVlLnByb3RvdHlwZS4kc3RvcmUgPSB2bS4kb3B0aW9ucy5zdG9yZTtcbiAgfVxuICB1bmlJZE1peGluKFZ1ZSk7XG5cbiAgVnVlLnByb3RvdHlwZS5tcEhvc3QgPSBcIm1wLXRvdXRpYW9cIjtcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLm1wVHlwZSA9IHRoaXMuJG9wdGlvbnMubXBUeXBlO1xuXG4gICAgICB0aGlzLiRtcCA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIFt0aGlzLm1wVHlwZV06IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZVxuICAgICAgfTtcblxuICAgICAgdGhpcy4kc2NvcGUgPSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XG4gICAgICBpZiAodGhpcy5tcFR5cGUgPT09ICdwYWdlJyAmJiB0eXBlb2YgZ2V0QXBwID09PSAnZnVuY3Rpb24nKSB7IC8vIGhhY2sgdnVlLWkxOG5cbiAgICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gICAgICAgIGlmIChhcHAuJHZtICYmIGFwcC4kdm0uJGkxOG4pIHtcbiAgICAgICAgICB0aGlzLl9pMThuID0gYXBwLiR2bS4kaTE4bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xuICAgICAgICBpbml0UmVmcyh0aGlzKTtcbiAgICAgICAgaW5pdE1vY2tzKHRoaXMsIG1vY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSB7XG4gICAgb25MYXVuY2ggKGFyZ3MpIHtcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHZtID0gdm07XG5cbiAgICAgIHRoaXMuJHZtLiRtcCA9IHtcbiAgICAgICAgYXBwOiB0aGlzXG4gICAgICB9O1xuXG4gICAgICB0aGlzLiR2bS4kc2NvcGUgPSB0aGlzO1xuICAgICAgLy8gdm0g5LiK5Lmf5oyC6L29IGdsb2JhbERhdGFcbiAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XG5cbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnLCBhcmdzKTtcblxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIOWFvOWuueaXp+eJiOacrCBnbG9iYWxEYXRhXG4gIGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSA9IHZtLiRvcHRpb25zLmdsb2JhbERhdGEgfHwge307XG4gIC8vIOWwhiBtZXRob2RzIOS4reeahOaWueazleaMguWcqCBnZXRBcHAoKSDkuK1cbiAgY29uc3QgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIGlmIChtZXRob2RzKSB7XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEhvb2tzKGFwcE9wdGlvbnMsIGhvb2tzKTtcblxuICByZXR1cm4gYXBwT3B0aW9uc1xufVxuXG5mdW5jdGlvbiBmaW5kVm1CeVZ1ZUlkICh2bSwgdnVlUGlkKSB7XG4gIGNvbnN0ICRjaGlsZHJlbiA9IHZtLiRjaGlsZHJlbjtcbiAgLy8g5LyY5YWI5p+l5om+55u05bGeKOWPjeWQkeafpeaJvjpodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvMTIwMClcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGNoaWxkVm0gPSAkY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xuICAgICAgcmV0dXJuIGNoaWxkVm1cbiAgICB9XG4gIH1cbiAgLy8g5Y+N5ZCR6YCS5b2S5p+l5om+XG4gIGxldCBwYXJlbnRWbTtcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCgkY2hpbGRyZW5baV0sIHZ1ZVBpZCk7XG4gICAgaWYgKHBhcmVudFZtKSB7XG4gICAgICByZXR1cm4gcGFyZW50Vm1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEJlaGF2aW9yIChvcHRpb25zKSB7XG4gIHJldHVybiBCZWhhdmlvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVMaW5rIChldmVudCkge1xuICBjb25zdCB7XG4gICAgdnVlUGlkLFxuICAgIHZ1ZU9wdGlvbnNcbiAgfSA9IGV2ZW50LmRldGFpbCB8fCBldmVudC52YWx1ZTsgLy8gZGV0YWlsIOaYr+W+ruS/oSx2YWx1ZSDmmK/nmb7luqYoZGlwYXRjaClcblxuICBsZXQgcGFyZW50Vm07XG5cbiAgaWYgKHZ1ZVBpZCkge1xuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcbiAgfVxuXG4gIGlmICghcGFyZW50Vm0pIHtcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xuICB9XG5cbiAgdnVlT3B0aW9ucy5wYXJlbnQgPSBwYXJlbnRWbTtcbn1cblxuY29uc3QgbW9ja3MgPSBbJ19fcm91dGVfXycsICdfX3dlYnZpZXdJZF9fJywgJ19fbm9kZWlkX18nLCAnX19ub2RlSWRfXyddO1xuXG5mdW5jdGlvbiBpc1BhZ2UgKCkge1xuICByZXR1cm4gdGhpcy5fX25vZGVpZF9fID09PSAwIHx8IHRoaXMuX19ub2RlSWRfXyA9PT0gMFxufVxuXG5mdW5jdGlvbiBpbml0UmVmcyAodm0pIHtcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgY29uc3QgbWlub3JWZXJzaW9uID0gcGFyc2VJbnQodHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uLnNwbGl0KCcuJylbMV0pO1xuICBpZiAobWlub3JWZXJzaW9uID4gMTYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sICckcmVmcycsIHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgIGNvbnN0ICRyZWZzID0ge307XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmJyk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5kYXRhc2V0LnJlZjtcbiAgICAgICAgICAkcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKTtcbiAgICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xuICAgICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xuICAgICAgICAgICAgJHJlZnNbcmVmXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICRyZWZzXG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicsIChjb21wb25lbnRzKSA9PiB7XG4gICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xuICAgICAgICB2bS4kcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicsIChmb3JDb21wb25lbnRzKSA9PiB7XG4gICAgICBmb3JDb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xuICAgICAgICBpZiAoIXZtLiRyZWZzW3JlZl0pIHtcbiAgICAgICAgICB2bS4kcmVmc1tyZWZdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdm0uJHJlZnNbcmVmXS5wdXNoKGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIGluaXRSZWxhdGlvbiAoe1xuICB2dWVQaWQsXG4gIG1wSW5zdGFuY2Vcbn0pIHtcbiAgLy8g5aS05p2hIHRyaWdnZXJFdmVudCDlkI7vvIzmjqXmlLbkuovku7bml7bmnLrnibnliKvmmZrvvIzlt7Lnu4/liLDkuoYgcmVhZHkg5LmL5ZCOXG4gIGNvbnN0IG5vZGVJZCA9IChtcEluc3RhbmNlLl9fbm9kZUlkX18gfHwgbXBJbnN0YW5jZS5fX25vZGVpZF9fKSArICcnO1xuICBjb25zdCB3ZWJ2aWV3SWQgPSBtcEluc3RhbmNlLl9fd2Vidmlld0lkX18gKyAnJztcblxuICBpbnN0YW5jZXNbd2Vidmlld0lkICsgJ18nICsgbm9kZUlkXSA9IG1wSW5zdGFuY2UuJHZtO1xuXG4gIHRoaXMudHJpZ2dlckV2ZW50KCdfX2wnLCB7XG4gICAgdnVlUGlkLFxuICAgIG5vZGVJZCxcbiAgICB3ZWJ2aWV3SWRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxpbmskMSAoe1xuICBkZXRhaWw6IHtcbiAgICB2dWVQaWQsXG4gICAgbm9kZUlkLFxuICAgIHdlYnZpZXdJZFxuICB9XG59KSB7XG4gIGNvbnN0IHZtID0gaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF07XG4gIGlmICghdm0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXJlbnRWbTtcblxuICBpZiAodnVlUGlkKSB7XG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xuICB9XG5cbiAgaWYgKCFwYXJlbnRWbSkge1xuICAgIHBhcmVudFZtID0gdGhpcy4kdm07XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50Vm07XG4gIHZtLiRyb290ID0gcGFyZW50Vm0uJHJvb3Q7XG4gIHBhcmVudFZtLiRjaGlsZHJlbi5wdXNoKHZtKTtcblxuICB2bS5fX2NhbGxfaG9vaygnY3JlYXRlZCcpO1xuICB2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcbiAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gIHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XG4gIHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXBwICh2bSkge1xuICBWdWUucHJvdG90eXBlLl8kZmFsbGJhY2sgPSB0cnVlOyAvLyDpmY3nuqfvvIjosIPmlbTljp8gdnVlIOeahOmDqOWIhueUn+WRveWRqOacn++8jOWmgiBjcmVhdGVk77yMYmVmb3JlTW91bnQsaW5qZWN0LHByb3ZpZGXvvIlcblxuICBWdWUubWl4aW4oe1xuICAgIGNyZWF0ZWQgKCkgeyAvLyDlpITnkIYgaW5qZWN0aW9ucyzlpLTmnaEgdHJpZ2dlckV2ZW50IOaYr+W8guatpe+8jOS4lOinpuWPkeaXtuacuuW+iOaFou+8jOaVheW7tui/nyByZWxhdGlvbiDorr7nva5cbiAgICAgIGlmICh0aGlzLm1wVHlwZSAhPT0gJ2FwcCcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubXBUeXBlID09PSAncGFnZScgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuJHNjb3BlLnJvdXRlICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLl9fcm91dGVfX1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLiRzY29wZS5yb3V0ZSA9IHRoaXMuJHNjb3BlLl9fcm91dGVfXztcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX19pbml0X2luamVjdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMuX19pbml0X3Byb3ZpZGUodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XG4gICAgbW9ja3MsXG4gICAgaW5pdFJlZnM6IGZ1bmN0aW9uICgpIHt9IC8vIGF0dGFjaGVkIOaXtu+8jOWPr+iDveafpeivouS4jeWIsFxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBcHAgKHZtKSB7XG4gIEFwcChwYXJzZUFwcCh2bSkpO1xuICByZXR1cm4gdm1cbn1cblxuY29uc3QgZW5jb2RlUmVzZXJ2ZVJFID0gL1shJygpKl0vZztcbmNvbnN0IGVuY29kZVJlc2VydmVSZXBsYWNlciA9IGMgPT4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbmNvbnN0IGNvbW1hUkUgPSAvJTJDL2c7XG5cbi8vIGZpeGVkIGVuY29kZVVSSUNvbXBvbmVudCB3aGljaCBpcyBtb3JlIGNvbmZvcm1hbnQgdG8gUkZDMzk4Njpcbi8vIC0gZXNjYXBlcyBbIScoKSpdXG4vLyAtIHByZXNlcnZlIGNvbW1hc1xuY29uc3QgZW5jb2RlID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxuICAucmVwbGFjZShjb21tYVJFLCAnLCcpO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqLCBlbmNvZGVTdHIgPSBlbmNvZGUpIHtcbiAgY29uc3QgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCB2YWwgPSBvYmpba2V5XTtcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZVN0cihrZXkpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICB2YWwuZm9yRWFjaCh2YWwyID0+IHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlU3RyKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbDIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwpXG4gIH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpIDogbnVsbDtcbiAgcmV0dXJuIHJlcyA/IGA/JHtyZXN9YCA6ICcnXG59XG5cbmZ1bmN0aW9uIHBhcnNlQmFzZUNvbXBvbmVudCAodnVlQ29tcG9uZW50T3B0aW9ucywge1xuICBpc1BhZ2UsXG4gIGluaXRSZWxhdGlvblxufSA9IHt9KSB7XG4gIGNvbnN0IFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdID0gaW5pdFZ1ZUNvbXBvbmVudChWdWUsIHZ1ZUNvbXBvbmVudE9wdGlvbnMpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZSxcbiAgICAuLi4odnVlT3B0aW9ucy5vcHRpb25zIHx8IHt9KVxuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgb3B0aW9ucyxcbiAgICBkYXRhOiBpbml0RGF0YSh2dWVPcHRpb25zLCBWdWUucHJvdG90eXBlKSxcbiAgICBiZWhhdmlvcnM6IGluaXRCZWhhdmlvcnModnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSxcbiAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVPcHRpb25zLnByb3BzLCBmYWxzZSwgdnVlT3B0aW9ucy5fX2ZpbGUpLFxuICAgIGxpZmV0aW1lczoge1xuICAgICAgYXR0YWNoZWQgKCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxuICAgICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcblxuICAgICAgICAvLyDlpITnkIbniLblrZDlhbPns7tcbiAgICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xuICAgICAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcbiAgICAgICAgICB2dWVPcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWIneWni+WMliB2dWUg5a6e5L6LXG4gICAgICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcblxuICAgICAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXG4gICAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XG5cbiAgICAgICAgLy8g6Kem5Y+R6aaW5qyhIHNldERhdGFcbiAgICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XG4gICAgICB9LFxuICAgICAgcmVhZHkgKCkge1xuICAgICAgICAvLyDlvZPnu4Tku7YgcHJvcHMg6buY6K6k5YC85Li6IHRydWXvvIzliJ3lp4vljJbml7bkvKDlhaUgZmFsc2Ug5Lya5a+86Ie0IGNyZWF0ZWQscmVhZHkg6Kem5Y+RLCDkvYYgYXR0YWNoZWQg5LiN6Kem5Y+RXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL2NvbW11bml0eS9kZXZlbG9wL2RvYy8wMDA2NmFlMjg0NGNjMGY4ZWI4ODNlMmE1NTc4MDBcbiAgICAgICAgaWYgKHRoaXMuJHZtKSB7XG4gICAgICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGV0YWNoZWQgKCkge1xuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFnZUxpZmV0aW1lczoge1xuICAgICAgc2hvdyAoYXJncykge1xuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlU2hvdycsIGFyZ3MpO1xuICAgICAgfSxcbiAgICAgIGhpZGUgKCkge1xuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlSGlkZScpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZSAoc2l6ZSkge1xuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlUmVzaXplJywgc2l6ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBfX2w6IGhhbmRsZUxpbmssXG4gICAgICBfX2U6IGhhbmRsZUV2ZW50XG4gICAgfVxuICB9O1xuICAvLyBleHRlcm5hbENsYXNzZXNcbiAgaWYgKHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzKSB7XG4gICAgY29tcG9uZW50T3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSB2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3NlcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMpKSB7XG4gICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGNhbGxNZXRob2QgPT4ge1xuICAgICAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzW2NhbGxNZXRob2RdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzUGFnZSkge1xuICAgIHJldHVybiBjb21wb25lbnRPcHRpb25zXG4gIH1cbiAgcmV0dXJuIFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdXG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50ICh2dWVPcHRpb25zKSB7XG4gIGNvbnN0IFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdID0gcGFyc2VCYXNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpO1xuXG4gIGNvbXBvbmVudE9wdGlvbnMubGlmZXRpbWVzLmF0dGFjaGVkID0gZnVuY3Rpb24gYXR0YWNoZWQgKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxuICAgICAgbXBJbnN0YW5jZTogdGhpcyxcbiAgICAgIHByb3BzRGF0YTogcHJvcGVydGllc1xuICAgIH07XG5cbiAgICBpbml0VnVlSWRzKHByb3BlcnRpZXMudnVlSWQsIHRoaXMpO1xuXG4gICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcbiAgICB0aGlzLiR2bSA9IG5ldyBWdWVDb21wb25lbnQob3B0aW9ucyk7XG5cbiAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXG4gICAgaW5pdFNsb3RzKHRoaXMuJHZtLCBwcm9wZXJ0aWVzLnZ1ZVNsb3RzKTtcblxuICAgIC8vIOWkhOeQhueItuWtkOWFs+ezu1xuICAgIGluaXRSZWxhdGlvbi5jYWxsKHRoaXMsIHtcbiAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcbiAgICAgIG1wSW5zdGFuY2U6IHRoaXNcbiAgICB9KTtcblxuICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXG4gICAgdGhpcy4kdm0uJG1vdW50KCk7XG4gIH07XG5cbiAgLy8gcmVhZHkg5q+UIGhhbmRsZUxpbmsg6L+Y5pep77yM5Yid5aeL5YyW6YC76L6R5pS+5YiwIGhhbmRsZUxpbmsg5LitXG4gIGRlbGV0ZSBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5yZWFkeTtcblxuICBjb21wb25lbnRPcHRpb25zLm1ldGhvZHMuX19sID0gaGFuZGxlTGluayQxO1xuXG4gIHJldHVybiBjb21wb25lbnRPcHRpb25zXG59XG5cbmNvbnN0IGhvb2tzJDEgPSBbXG4gICdvblNob3cnLFxuICAnb25IaWRlJyxcbiAgJ29uVW5sb2FkJ1xuXTtcblxuaG9va3MkMS5wdXNoKC4uLlBBR0VfRVZFTlRfSE9PS1MpO1xuXG5mdW5jdGlvbiBwYXJzZUJhc2VQYWdlICh2dWVQYWdlT3B0aW9ucywge1xuICBpc1BhZ2UsXG4gIGluaXRSZWxhdGlvblxufSkge1xuICBjb25zdCBwYWdlT3B0aW9ucyA9IHBhcnNlQ29tcG9uZW50KHZ1ZVBhZ2VPcHRpb25zKTtcblxuICBpbml0SG9va3MocGFnZU9wdGlvbnMubWV0aG9kcywgaG9va3MkMSwgdnVlUGFnZU9wdGlvbnMpO1xuXG4gIHBhZ2VPcHRpb25zLm1ldGhvZHMub25Mb2FkID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdGhpcy5vcHRpb25zID0gcXVlcnk7XG4gICAgY29uc3QgY29weVF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xuICAgIGRlbGV0ZSBjb3B5UXVlcnkuX19pZF9fO1xuICAgIHRoaXMuJHBhZ2UgPSB7XG4gICAgICBmdWxsUGF0aDogJy8nICsgKHRoaXMucm91dGUgfHwgdGhpcy5pcykgKyBzdHJpbmdpZnlRdWVyeShjb3B5UXVlcnkpXG4gICAgfTtcbiAgICB0aGlzLiR2bS4kbXAucXVlcnkgPSBxdWVyeTsgLy8g5YW85a65IG1wdnVlXG4gICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTG9hZCcsIHF1ZXJ5KTtcbiAgfTtcblxuICByZXR1cm4gcGFnZU9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcGFyc2VQYWdlICh2dWVQYWdlT3B0aW9ucykge1xuICBjb25zdCBwYWdlT3B0aW9ucyA9IHBhcnNlQmFzZVBhZ2UodnVlUGFnZU9wdGlvbnMsIHtcbiAgICBpc1BhZ2UsXG4gICAgaW5pdFJlbGF0aW9uXG4gIH0pO1xuICAvLyDpobXpnaLpnIDopoHlnKggcmVhZHkg5Lit6Kem5Y+R77yM5YW25LuW57uE5Lu25piv5ZyoIGhhbmRsZUxpbmsg5Lit6Kem5Y+RXG4gIHBhZ2VPcHRpb25zLmxpZmV0aW1lcy5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5ICgpIHtcbiAgICBpZiAodGhpcy4kdm0gJiYgdGhpcy4kdm0ubXBUeXBlID09PSAncGFnZScpIHtcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnYmVmb3JlTW91bnQnKTtcbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblJlYWR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXMgJiYgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnIGlzIG5vdCByZWFkeScpO1xuICAgIH1cbiAgfTtcblxuICBwYWdlT3B0aW9ucy5saWZldGltZXMuZGV0YWNoZWQgPSBmdW5jdGlvbiBkZXRhY2hlZCAoKSB7XG4gICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uJGRlc3Ryb3koKTtcbiAgICAvLyDmuIXnkIZcbiAgICBjb25zdCB3ZWJ2aWV3SWQgPSB0aGlzLl9fd2Vidmlld0lkX187XG4gICAgd2Vidmlld0lkICYmIE9iamVjdC5rZXlzKGluc3RhbmNlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleS5pbmRleE9mKHdlYnZpZXdJZCArICdfJykgPT09IDApIHtcbiAgICAgICAgZGVsZXRlIGluc3RhbmNlc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBwYWdlT3B0aW9uc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlICh2dWVQYWdlT3B0aW9ucykge1xuICB7XG4gICAgcmV0dXJuIENvbXBvbmVudChwYXJzZVBhZ2UodnVlUGFnZU9wdGlvbnMpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xuICB7XG4gICAgcmV0dXJuIENvbXBvbmVudChwYXJzZUNvbXBvbmVudCh2dWVPcHRpb25zKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJwYWNrYWdlQXBwICh2bSkge1xuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAodm0pO1xuICBjb25zdCBhcHAgPSBnZXRBcHAoe1xuICAgIGFsbG93RGVmYXVsdDogdHJ1ZVxuICB9KTtcbiAgY29uc3QgZ2xvYmFsRGF0YSA9IGFwcC5nbG9iYWxEYXRhO1xuICBpZiAoZ2xvYmFsRGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGFwcE9wdGlvbnMuZ2xvYmFsRGF0YSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGlmICghaGFzT3duKGdsb2JhbERhdGEsIG5hbWUpKSB7XG4gICAgICAgIGdsb2JhbERhdGFbbmFtZV0gPSBhcHBPcHRpb25zLmdsb2JhbERhdGFbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgT2JqZWN0LmtleXMoYXBwT3B0aW9ucykuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoIWhhc093bihhcHAsIG5hbWUpKSB7XG4gICAgICBhcHBbbmFtZV0gPSBhcHBPcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfSk7XG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB0dC5vbkFwcFNob3cpIHtcbiAgICB0dC5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcbiAgICAgIGFwcE9wdGlvbnMub25TaG93LmFwcGx5KGFwcCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkhpZGUpICYmIHR0Lm9uQXBwSGlkZSkge1xuICAgIHR0Lm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xuICAgICAgYXBwT3B0aW9ucy5vbkhpZGUuYXBwbHkoYXBwLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xuICAgIGNvbnN0IGFyZ3MgPSB0dC5nZXRMYXVuY2hPcHRpb25zU3luYyAmJiB0dC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgIGFwcE9wdGlvbnMub25MYXVuY2guY2FsbChhcHAsIGFyZ3MpO1xuICB9XG4gIHJldHVybiB2bVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQbHVnaW4gKHZtKSB7XG4gIGNvbnN0IGFwcE9wdGlvbnMgPSBwYXJzZUFwcCh2bSk7XG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB0dC5vbkFwcFNob3cpIHtcbiAgICB0dC5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcbiAgICAgIGFwcE9wdGlvbnMub25TaG93LmFwcGx5KHZtLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uSGlkZSkgJiYgdHQub25BcHBIaWRlKSB7XG4gICAgdHQub25BcHBIaWRlKCguLi5hcmdzKSA9PiB7XG4gICAgICBhcHBPcHRpb25zLm9uSGlkZS5hcHBseSh2bSwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkxhdW5jaCkpIHtcbiAgICBjb25zdCBhcmdzID0gdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgJiYgdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcbiAgICBhcHBPcHRpb25zLm9uTGF1bmNoLmNhbGwodm0sIGFyZ3MpO1xuICB9XG4gIHJldHVybiB2bVxufVxuXG50b2Rvcy5mb3JFYWNoKHRvZG9BcGkgPT4ge1xuICBwcm90b2NvbHNbdG9kb0FwaV0gPSBmYWxzZTtcbn0pO1xuXG5jYW5JVXNlcy5mb3JFYWNoKGNhbklVc2VBcGkgPT4ge1xuICBjb25zdCBhcGlOYW1lID0gcHJvdG9jb2xzW2NhbklVc2VBcGldICYmIHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lID8gcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWVcbiAgICA6IGNhbklVc2VBcGk7XG4gIGlmICghdHQuY2FuSVVzZShhcGlOYW1lKSkge1xuICAgIHByb3RvY29sc1tjYW5JVXNlQXBpXSA9IGZhbHNlO1xuICB9XG59KTtcblxubGV0IHVuaSA9IHt9O1xuXG5pZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBcIm1wLXRvdXRpYW9cIiAhPT0gJ2FwcC1wbHVzJykge1xuICB1bmkgPSBuZXcgUHJveHkoe30sIHtcbiAgICBnZXQgKHRhcmdldCwgbmFtZSkge1xuICAgICAgaWYgKGhhc093bih0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cbiAgICAgIH1cbiAgICAgIGlmIChiYXNlQXBpW25hbWVdKSB7XG4gICAgICAgIHJldHVybiBiYXNlQXBpW25hbWVdXG4gICAgICB9XG4gICAgICBpZiAoYXBpW25hbWVdKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZiAoZXh0cmFBcGlbbmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvQXBpc1tuYW1lXSkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xuICAgICAgICByZXR1cm4gZXZlbnRBcGlbbmFtZV1cbiAgICAgIH1cbiAgICAgIGlmICghaGFzT3duKHR0LCBuYW1lKSAmJiAhaGFzT3duKHByb3RvY29scywgbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgdHRbbmFtZV0pKVxuICAgIH0sXG4gICAgc2V0ICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIE9iamVjdC5rZXlzKGJhc2VBcGkpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgdW5pW25hbWVdID0gYmFzZUFwaVtuYW1lXTtcbiAgfSk7XG5cbiAge1xuICAgIE9iamVjdC5rZXlzKHRvZG9BcGlzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcbiAgICB9KTtcbiAgICBPYmplY3Qua2V5cyhleHRyYUFwaSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XG4gICAgfSk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhldmVudEFwaSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICB1bmlbbmFtZV0gPSBldmVudEFwaVtuYW1lXTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoYXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyh0dCkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaGFzT3duKHR0LCBuYW1lKSB8fCBoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHdyYXBwZXIobmFtZSwgdHRbbmFtZV0pKTtcbiAgICB9XG4gIH0pO1xufVxuXG50dC5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XG50dC5jcmVhdGVQYWdlID0gY3JlYXRlUGFnZTtcbnR0LmNyZWF0ZUNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudDtcbnR0LmNyZWF0ZVN1YnBhY2thZ2VBcHAgPSBjcmVhdGVTdWJwYWNrYWdlQXBwO1xudHQuY3JlYXRlUGx1Z2luID0gY3JlYXRlUGx1Z2luO1xuXG52YXIgdW5pJDEgPSB1bmk7XG5cbmV4cG9ydCBkZWZhdWx0IHVuaSQxO1xuZXhwb3J0IHsgY3JlYXRlQXBwLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZVBhZ2UsIGNyZWF0ZVBsdWdpbiwgY3JlYXRlU3VicGFja2FnZUFwcCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzdGF0ZToge1xuXHRcdGlzVGhlbWU6IGZhbHNlLCAvLyDmmK/lkKblvIDlkK/lpJrkuLvpopjvvIh0cnVlOuS8muivu+e8k+WtmO+8jOiDveiuvue9ruWvueW6lOeahOS4u+mimClcblx0XHR0aGVtZUF1dG86IGZhbHNlLCAvLyDot5/pmo/ns7vnu59cblx0XHR0aGVtZTogJ2xpZ2h0JywgLy8g6K6+572u6buY6K6k5Li76aKYXG5cdFx0bWFpbjogJ2JsdWUnLCAvLyDorr7nva7pu5jorqTlvLrosIPoibJcblx0XHRob21lUGF0aDogJy9wYWdlcy9kb2NtZW50L2hvbWUnLCAvLyDorr7nva7pppbpobXot6/lvoQo5LiA5Lqb57uE5Lu25Lya55So5Yiw6Lez5Zue5Li76aG177yM6K+35q+P5Liq6aG555uu6K6+572u5aW977yBKVxuXHRcdHRhYmJhcjogW3tcblx0XHRcdFx0dGl0bGU6ICfmlofmoaMnLFxuXHRcdFx0XHRpY29uOiAnL3N0YXRpYy90YWJfaWNvbi9kb2NtZW50LnBuZycsXG5cdFx0XHRcdGN1ckljb246ICcvc3RhdGljL3RhYl9pY29uL2RvY21lbnRfY3VyLnBuZycsXG5cdFx0XHRcdHVybDogJy9wYWdlcy9kb2NtZW50L2hvbWUnLFxuXHRcdFx0XHR0eXBlOiAndGFiJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6ICfmqKHmnb8nLFxuXHRcdFx0XHRpY29uOiAnL3N0YXRpYy90YWJfaWNvbi90cGwucG5nJyxcblx0XHRcdFx0Y3VySWNvbjogJy9zdGF0aWMvdGFiX2ljb24vdHBsX2N1ci5wbmcnLFxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvdGVtcGxhdGUvaG9tZScsXG5cdFx0XHRcdHR5cGU6ICd0YWInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogJ+ekvuWMuicsXG5cdFx0XHRcdGljb246ICcvc3RhdGljL3RhYl9pY29uL2NvbW1lbnQucG5nJyxcblx0XHRcdFx0Y3VySWNvbjogJy9zdGF0aWMvdGFiX2ljb24vY29tbWVudF9jdXIucG5nJyxcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NvbW11bml0eS9ob21lJyxcblx0XHRcdFx0dHlwZTogJ3RhYidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiAn5Y+R546wJyxcblx0XHRcdFx0aWNvbjogJy9zdGF0aWMvdGFiX2ljb24vZmluZC5wbmcnLFxuXHRcdFx0XHRjdXJJY29uOiAnL3N0YXRpYy90YWJfaWNvbi9maW5kX2N1ci5wbmcnLFxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvZmluZC9ob21lJyxcblx0XHRcdFx0dHlwZTogJ3RhYidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiAn5oiR55qEJyxcblx0XHRcdFx0aWNvbjogJy9zdGF0aWMvdGFiX2ljb24vbXkucG5nJyxcblx0XHRcdFx0Y3VySWNvbjogJy9zdGF0aWMvdGFiX2ljb24vbXlfY3VyLnBuZycsXG5cdFx0XHRcdHVybDogJy9wYWdlcy9teS9ob21lJyxcblx0XHRcdFx0dHlwZTogJ3RhYidcblx0XHRcdH0sXG5cdFx0XVxuXHR9LFxuXHRnZXR0ZXJzOiB7XG5cdFx0Z2V0Q3VzdG9tVGhlbWU6IHN0YXRlID0+IHtcblx0XHRcdHJldHVybiBzdGF0ZS50aGVtZVxuXHRcdH0sXG5cdFx0Z2V0Q3VzdG9tTWFpbjogc3RhdGUgPT4ge1xuXHRcdFx0cmV0dXJuIHN0YXRlLm1haW5cblx0XHR9LFxuXHRcdGdldFRhYmJhcjogc3RhdGUgPT4ge1xuXHRcdFx0cmV0dXJuIHN0YXRlLnRhYmJhclxuXHRcdH0sXG5cdFx0XG5cdH0sXG5cdG11dGF0aW9uczoge1xuXHRcdFxuXHR9LFxuXHRhY3Rpb25zOiB7fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzdGF0ZToge1xuXHRcdCB0YXJnZXQ6Jydcblx0fSxcblx0Z2V0dGVyczoge1xuXHRcdCBcblx0XHRcblx0fSxcblx0bXV0YXRpb25zOiB7XG5cdFx0c2V0VGFyZ2V0KHN0YXRlLCBkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdHN0YXRlLnRhcmdldCA9IGRhdGE7XG5cdFx0fSxcblx0fSxcblx0YWN0aW9uczoge31cbn1cbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLy8g5oyC6L29IHZ1ZXhcbmltcG9ydCBzdG9yZSBmcm9tICdAL3VpL3N0b3JlJ1xuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZVxuXG4vLyDmjILovb0gbW9kYWxcbmltcG9ydCBtb2RhbCBmcm9tICdAL3VpL2pzL21vZGFsLmpzJ1xuVnVlLnByb3RvdHlwZS4kTW9kYWwgPSBtb2RhbCBcblxuLy8g5oyC6L295bi455So5bCB6KOFXG5pbXBvcnQgdXRpbCBmcm9tICdAL3VpL2pzL3V0aWwuanMnXG5WdWUucHJvdG90eXBlLiR1dGlsID0gdXRpbDtcblxuLy8g5oyC6L29dWnns7vnu5/mt7flhaVcbmltcG9ydCBtaXhpbiBmcm9tICdAL3VpL2pzL21peGluLmpzJ1xuVnVlLm1peGluKG1peGluKVxuXG4vLyDmjILovb1hcHAgXG5pbXBvcnQgYXBwIGZyb20gXCJAL2FwcC9pbmRleC5qc1wiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnVuaS5nZXRTdG9yYWdlKHtcblx0a2V5OiAndXNlckluZm8nLFxuXHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRzdG9yZS5jb21taXQoJ3VwVXNlckluZm8nLCByZXMuZGF0YSk7XG5cdH1cbn0pO1xudW5pLmdldFN0b3JhZ2Uoe1xuXHRrZXk6ICdhcHAnLFxuXHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRzdG9yZS5jb21taXQoJ2luaXRBcHAnLCByZXMuZGF0YSk7XG5cdH1cbn0pO1xuIiwiIGltcG9ydCBzdG9yZSBmcm9tICdAL3VpL3N0b3JlJ1xuIGNvbnN0IG1vZGFsID0ge1xuICAgIHNob3cobmFtZSkge1xuICAgICAgICBzdG9yZS5jb21taXQoJ3NldFRhcmdldCcsIG5hbWUpO1xuICAgIH0sXG5cdC8vIHNob3dNb2RhbCh7dGl0bGU6JycsY29udGVudDonJyxzaG93Q2FuY2VsOnRydWUsY2FuY2VsVGV4dDonJyxjb25maXJtVGV4dDonJ30pIHtcbiAvLyAgICAgICAgc3RvcmUuY29tbWl0KCdzZXRUYXJnZXQnLCBuYW1lKTtcbiAvLyAgICB9LFxuXHRDb25maXJtKG1zZyxldmVudCxidG5UZXh0LHRpdGxlKSB7XG5cdCAgICBEaWFsb2cuY29uZmlybSh7XG5cdCAgICAgICAgdGl0bGU6IHRpdGxlfHxpMThuLnQoJ2RpYWxvZ1swXScpLFxuXHQgICAgICAgIG1lc3NhZ2U6IG1zZyxcblx0ICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYnRuVGV4dHx8aTE4bi50KCdkaWFsb2dbMV0nKSxcblx0ICAgICAgICBjbG9zZU9uUG9wc3RhdGU6IHRydWVcblx0ICAgIH0pLnRoZW4oZXZlbnQpLmNhdGNoKCgpPT57fSk7XG5cdH0sXG4gICAgQWxlcnQobXNnLGV2ZW50LGJ0bikge1xuICAgICAgICBEaWFsb2cuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IGkxOG4udCgnbW9kYWxbMF0nKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBidG58fGkxOG4udCgnbW9kYWxbMV0nKSxcbiAgICAgICAgICAgIGNsb3NlT25Qb3BzdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHRydWVcbiAgICAgICAgfSkudGhlbihldmVudCkuY2F0Y2goKCk9Pnt9KTtcbiAgICB9LFxuICAgIFRvYXN0KG1zZyxwb3NpdGlvbixkdXJhdGlvbikge1xuICAgICAgICBUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb258fCdib3R0b20nLFx0XHRcdFxuXHRcdFx0ZHVyYXRpb246IGR1cmF0aW9ufHwgMjAwMCxcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBMb2FkaW5nKG1zZyxlbCkge1xuICAgICAgICBUb2FzdC5sb2FkaW5nKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ3x8aTE4bi50KCdtb2RhbFsyXScpLFxuICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICBmb3JiaWRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGdldENvbnRhaW5lcjogZWx8fCdib2R5J1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIENsb3NlKCkge1xuICAgICAgICBUb2FzdC5jbGVhcigpO1xuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsIiwiLyoqXG4gKiBnZXRVdWlkIOeUn+aIkOWUr+S4gGlkXG4gKi9cbmZ1bmN0aW9uIGdldFV1aWQoKSB7XG5cdHJldHVybiBOdW1iZXIoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cigzLCAzKSArIERhdGUubm93KCkpLnRvU3RyaW5nKDM2KVxufVxuXG4vKipcbiAqIGdldENvbG9yIOmaj+acuueUn+aIkOminOiJsuWQjVxuICovXG5mdW5jdGlvbiBnZXRDb2xvcigpIHtcblx0bGV0IGNvbG9yQXJyID0gWyd5ZWxsb3cnLCdvcmFuZ2UnLCdyZWQnLCdwaW5rJywnbWF1dmUnLCdwdXJwbGUnLCdibHVlJywnY3lhbicsJ2dyZWVuJywnb2xpdmUnLCdncmV5JywnYnJvd24nXTtcblx0cmV0dXJuIGNvbG9yQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyLmxlbmd0aCldXG59XG5cbi8qKlxuICogc2hvd1RpcHMg5pi+56S657O757uf5o+Q56S6XG4gKi9cbmZ1bmN0aW9uIHNob3dUaXBzKG1zZykge1xuXHR1bmkuc2hvd1RvYXN0KHtcblx0XHR0aXRsZTogbXNnLFxuXHRcdGljb246ICdub25lJ1xuXHR9KVxufVxuXG4vKipcbiAqIGNvcHlUZXh0IOWkmuerr+WkjeWItuaWh+acrFxuICovXG5mdW5jdGlvbiBjb3B5VGV4dCh0ZXh0KSB7XG5cblx0dW5pLnNldENsaXBib2FyZERhdGEoe1xuXHRcdGRhdGE6IHRleHQsXG5cdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdFx0XHRzaG93VGlwcygn5aSN5Yi25oiQ5Yqf77yBJylcblx0XHR9LFxuXHRcdGZhaWw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0c2hvd1RpcHMoJ+WkjeWItuWksei0pe+8gScpXG5cdFx0fSxcblx0fSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0VXVpZCxcblx0Z2V0Q29sb3IsXG5cdHNob3dUaXBzLFxuXHRjb3B5VGV4dFxufVxuIiwiaW1wb3J0IHtcblx0bWFwU3RhdGVcbn0gZnJvbSAndnVleCc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdF91aWQ6IHRoaXMuX3VpZCwgLy92dWXlrp7kvotpZFxuXHRcdFx0c3lzX3Njcm9sbFRvcDogMCwgLy/lrp7kvovmiYDlnKjpobXpnaLmu5rliqjlgLxcblx0XHRcdHN5c19hdFBhZ2U6IHRydWUsIC8v5a6e5L6L5piv5ZCm5Zyo6aG16Z2i6YeM5pi+56S6XG5cdFx0XHRzeXNfYXRIb21lOiBmYWxzZSwgLy/lrp7kvovmmK/lkKblnKjpppbpobVcblx0XHRcdHN5c19sYXllcjogMCwgLy/lrp7kvovlsYLnuqdcblx0XHR9O1xuXHR9LFxuXHR3YXRjaDoge1xuXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwU3RhdGUoe1xuXHRcdFx0c3lzX3RoZW1lQXV0bzogc3RhdGUgPT4gc3RhdGUuc3lzX3RoZW1lQXV0byxcblx0XHRcdHN5c190aGVtZTogc3RhdGUgPT4gc3RhdGUuc3lzX3RoZW1lLFxuXHRcdFx0c3lzX21haW46IHN0YXRlID0+IHN0YXRlLnN5c19tYWluLFxuXHRcdFx0c3lzX2luZm86IHN0YXRlID0+IHN0YXRlLnN5c19pbmZvLFxuXHRcdFx0c3lzX3N0YXR1c0Jhcjogc3RhdGUgPT4gc3RhdGUuc3lzX3N0YXR1c0Jhcixcblx0XHRcdHN5c19ob21lUGF0aDogc3RhdGUgPT4gc3RhdGUuYXBwLmhvbWVQYXRoXG5cdFx0fSksXG5cdFx0c3lzX25hdkJhcigpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN5c19uYXZCYXJcblx0XHR9LFxuXHRcdHN5c19jYXBzdWxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3lzX2NhcHN1bGVcblx0XHR9LFxuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGlmICh0aGlzLl91aWQgIT0gdGhpcy4kcm9vdC5fdWlkKSB7XG5cdFx0XHR0aGlzLl9vblNob3coKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuJHBhcmVudCkge1xuXHRcdFx0dGhpcy5zeXNfbGF5ZXIgPSAodGhpcy4kcGFyZW50LnN5c19sYXllciA/IHRoaXMuJHBhcmVudC5zeXNfbGF5ZXIgOiAwKSArIDFcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHt9LFxuXHRvblNob3coKSB7XG5cdFx0dW5pLiRlbWl0KCdfb25TaG93XycgKyB0aGlzLl91aWQpO1xuXHR9LFxuXHRvblJlYWNoQm90dG9tKCkge1xuXHRcdHVuaS4kZW1pdCgnX29uUmVhY2hCb3R0b21fJyArIHRoaXMuX3VpZCk7XG5cdH0sXG5cdG1vdW50ZWQoKSB7XG5cdFx0dW5pLiRvbignX29uU2hvd18nICsgdGhpcy4kcm9vdC5fdWlkLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9vblNob3coKTtcblx0XHR9KVxuXHRcdHVuaS4kb24oJ19vbkhpZGVfJyArIHRoaXMuJHJvb3QuX3VpZCwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fb25IaWRlKCk7XG5cdFx0fSlcblx0XHR1bmkuJG9uKCdfb25SZWFjaEJvdHRvbV8nICsgdGhpcy4kcm9vdC5fdWlkLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9vblJlYWNoQm90dG9tKCk7XG5cdFx0fSlcblx0XHR1bmkuJG9uKCdfb25SZXNpemVfJyArIHRoaXMuJHJvb3QuX3VpZCwgKCkgPT4ge1xuXG5cdFx0fSlcblxuXG5cblxuXHRcdGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuXHRcdHRoaXMuc3lzX2F0SG9tZSA9IHBhZ2VzLmxlbmd0aCA9PSAxO1xuXG5cblx0fSxcblx0b25SZWFkeSgpIHtcblxuXG5cblxuXG5cblxuXHR9LFxuXHRvbkhpZGUoKSB7XG5cdFx0dW5pLiRlbWl0KCdfb25IaWRlXycgKyB0aGlzLl91aWQpO1xuXHR9LFxuXHRkZXN0cm95ZWQoKSB7XG5cdFx0dW5pLiRvZmYoJ19vblNob3dfJyArIHRoaXMuX3VpZCk7XG5cdFx0dW5pLiRvZmYoJ19vbkhpZGVfJyArIHRoaXMuX3VpZCk7XG5cdFx0dGhpcy5zeXNfYXRQYWdlID0gZmFsc2U7XG5cdH0sXG5cdG9uUGFnZVNjcm9sbChlKSB7XG5cdFx0dGhpcy5zeXNfc2Nyb2xsVG9wID0gZS5zY3JvbGxUb3A7XG5cdFx0dW5pLiRlbWl0KCdfc2Nyb2xsVG9wXycgKyB0aGlzLl91aWQsIGUuc2Nyb2xsVG9wKVxuXHRcdGlmIChlLnNjcm9sbFRvcCA8IDApIHtcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdF9vblNob3coKSB7XG5cdFx0XHR0aGlzLnN5c19hdFBhZ2UgPSB0cnVlO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbXBvbmVudDogJyArIHRoaXMuX3VpZCArICcgb25TaG93IGluICcrIHRoaXMuJHJvb3QuX3VpZCk7XG5cdFx0fSxcblx0XHRfb25SZWFjaEJvdHRvbSgpIHt9LFxuXHRcdF9vbkhpZGUoKSB7XG5cdFx0XHR0aGlzLnN5c19hdFBhZ2UgPSBmYWxzZTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb21wb25lbnQ6ICcgKyB0aGlzLl91aWQgKyAnIG9uSGlkZSBpbiAnKyB0aGlzLiRyb290Ll91aWQpO1xuXHRcdH0sXG5cdFx0X2JhY2tQYWdlKCkge1xuXHRcdFx0aWYgKHRoaXMuc3lzX2F0SG9tZSkge1xuXHRcdFx0XHR0aGlzLl90b0hvbWUoKTtcblx0XHRcdH0gZWxzZSB7XG5cblxuXG5cblxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRkZWx0YTogMSxcblx0XHRcdFx0XHRmYWlsKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdF90b0hvbWUoKSB7XG5cdFx0XHR1bmkuc3dpdGNoVGFiKHtcblx0XHRcdFx0dXJsOiB0aGlzLnN5c19ob21lUGF0aCxcblx0XHRcdFx0ZmFpbChyZXMpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG4vLyDmjILovb1hcHDmt7flhaVcbmltcG9ydCBhcHBNaXhpbiBmcm9tICdAL2FwcC9qcy9taXhpbi5qcydcblZ1ZS5taXhpbihhcHBNaXhpbilcblxuLy8g5oyC6L29YXBw6L+H5rukXG4vLyBpbXBvcnQgYXBGaWx0ZXJzIGZyb20gXCJAL2FwcC9qcy9maWx0ZXJzLmpzXCJcbi8vIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goa2V5ID0+IHtcbi8vIFx0VnVlLmZpbHRlcihrZXksIGZpbHRlcnNba2V5XSlcbi8vIH0pXG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIxIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICBpZiAodm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMuX19maWxlKSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXR1cm4gKCcnKSArIHZtLiRvcHRpb25zLl9fZmlsZVxuICAgICAgfVxuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdm0uJG9wdGlvbnMuaXNSZXNlcnZlZCAmJiB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0ge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xuICBEZXAudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXQ7XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICB7Ly8gZml4ZWQgYnkgeHh4eHh4IOW+ruS/oeWwj+eoi+W6j+S9v+eUqCBwbHVnaW5zIOS5i+WQju+8jOaVsOe7hOaWueazleiiq+ebtOaOpeaMgui9veWIsOS6huaVsOe7hOWvueixoeS4iu+8jOmcgOimgeaJp+ihjCBjb3B5QXVnbWVudCDpgLvovpFcbiAgICAgICAgaWYodmFsdWUucHVzaCAhPT0gdmFsdWUuX19wcm90b19fLnB1c2gpe1xuICAgICAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNobmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgLy8gYnV0IGl0IGlzIHN0aWxsIGEgYmV0dGVyIGNob2ljZSB0aGFuIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoZmx1c2hDYWxsYmFja3MsIDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayAoY2IsIGN0eCkge1xuICB2YXIgX3Jlc29sdmU7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9yZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZShjdHgpO1xuICAgIH1cbiAgfSk7XG4gIGlmICghcGVuZGluZykge1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYygpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAoIWNiICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pXG4gIH1cbn1cblxuLyogICovXG5cbi8qIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aCBQcm94eSAqL1xuXG52YXIgaW5pdFByb3h5O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICdJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLCcgK1xuICAgICdwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCwnICtcbiAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gZml4ZWQgYnkgeHh4eHh4IChtcCBwcm9wZXJ0aWVzKVxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zICYmIEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMucHJvcGVydGllcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBleHRlcm5hbENsYXNzZXMgPSBDdG9yLm9wdGlvbnMubXBPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIHZhciByZXN1bHQgPSBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgICAvLyBleHRlcm5hbENsYXNzXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXNba2V5XSAmJlxuICAgICAgICBleHRlcm5hbENsYXNzZXMuaW5kZXhPZihhbHRLZXkpICE9PSAtMSAmJlxuICAgICAgICBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV1cbiAgICAgICkge1xuICAgICAgICAvLyDotYvlgLwgZXh0ZXJuYWxDbGFzcyDnnJ/mraPnmoTlgLwo5qih5p2/6YeMIGV4dGVybmFsQ2xhc3Mg55qE5YC85Y+v6IO95piv5a2X56ym5LiyKVxuICAgICAgICByZXNba2V5XSA9IGNvbnRleHRbY2FtZWxpemUocmVzW2tleV0pXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSwgaSsrKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cbiAgXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCB1cGRhdGUgcHJvcGVydGllcyhtcCBydW50aW1lKVxuICB2bS5fJHVwZGF0ZVByb3BlcnRpZXMgJiYgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzKHZtKTtcbiAgXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZih2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScpey8v55m+5bqmIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiYgXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgICAgICAgICAgICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2bS5fZ2V0Rm9ybURhdGEpe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlKCRwYXJlbnQpe1xuICAgICAgICAgICAgICBpZigkcGFyZW50Ll9fbmV4dF90aWNrX3BlbmRpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzICBcbiAgICBpbml0U3RhdGUodm0pO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTsgICAgICBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuLyoqXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAqL1xudmFyIEFSUkFZVFlQRSA9ICdbb2JqZWN0IEFycmF5XSc7XG52YXIgT0JKRUNUVFlQRSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuLy8gY29uc3QgRlVOQ1RJT05UWVBFID0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuXG5mdW5jdGlvbiBkaWZmKGN1cnJlbnQsIHByZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBzeW5jS2V5cyhjdXJyZW50LCBwcmUpO1xuICAgIF9kaWZmKGN1cnJlbnQsIHByZSwgJycsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzeW5jS2V5cyhjdXJyZW50LCBwcmUpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSAmJiByb290UHJlVHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtrZXldID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50VmFsdWUsIHByZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUgJiYgcm9vdFByZVR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+PSBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBwcmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzeW5jS2V5cyhjdXJyZW50W2luZGV4XSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2RpZmYoY3VycmVudCwgcHJlLCBwYXRoLCByZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gcHJlKSB7IHJldHVybiB9XG4gICAgdmFyIHJvb3RDdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudCk7XG4gICAgdmFyIHJvb3RQcmVUeXBlID0gdHlwZShwcmUpO1xuICAgIGlmIChyb290Q3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByZVZhbHVlID0gcHJlW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwcmVUeXBlID0gdHlwZShwcmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9IEFSUkFZVFlQRSAmJiBjdXJyZW50VHlwZSAhPSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT0gcHJlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoIDwgcHJlVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVWYWx1ZVtpbmRleF0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVR5cGUgIT0gT0JKRUNUVFlQRSB8fCBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZVZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3ViS2V5IGluIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGN1cnJlbnRWYWx1ZVtzdWJLZXldLCBwcmVWYWx1ZVtzdWJLZXldLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICcuJyArIHN1YktleSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50KSBsb29wKCBrZXkgKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm9vdEN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAocm9vdFByZVR5cGUgIT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA8IHByZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfZGlmZihpdGVtLCBwcmVbaW5kZXhdLCBwYXRoICsgJ1snICsgaW5kZXggKyAnXScsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlc3VsdChyZXN1bHQsIGssIHYpIHtcbiAgICAvLyBpZiAodHlwZSh2KSAhPSBGVU5DVElPTlRZUEUpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdjtcbiAgICAvLyB9XG59XG5cbmZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XG4gICAgaWYgKHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyAmJiB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOmZsdXNoQ2FsbGJhY2tzWycgKyB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoICsgJ10nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29waWVzID0gdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcGllc1tpXSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XG4gICAgcmV0dXJuIHF1ZXVlLmZpbmQoZnVuY3Rpb24gKHdhdGNoZXIpIHsgcmV0dXJuIHZtLl93YXRjaGVyID09PSB3YXRjaGVyOyB9KVxufVxuXG5mdW5jdGlvbiBuZXh0VGljayQxKHZtLCBjYikge1xuICAgIC8vMS5uZXh0VGljayDkuYvliY0g5beyIHNldERhdGEg5LiUIHNldERhdGEg6L+Y5pyq5Zue6LCD5a6M5oiQXG4gICAgLy8yLm5leHRUaWNrIOS5i+WJjeWtmOWcqCByZW5kZXIgd2F0Y2hlclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfcGVuZGluZyAmJiAhaGFzUmVuZGVyV2F0Y2hlcih2bSkpIHtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlLmlzIHx8IG1wSW5zdGFuY2Uucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRWdWVUaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNiLCB2bSlcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSQxID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UkMS5pcyB8fCBtcEluc3RhbmNlJDEucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgaWYgKCF2bS5fX25leHRfdGlja19jYWxsYmFja3MpIHtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzID0gW107XG4gICAgfVxuICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNiLmNhbGwodm0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAnbmV4dFRpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUodm0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY2xvbmVXaXRoRGF0YSh2bSkge1xuICAvLyDnoa7kv53lvZPliY0gdm0g5omA5pyJ5pWw5o2u6KKr5ZCM5q2lXG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgZGF0YUtleXMgPSBbXS5jb25jYXQoXG4gICAgT2JqZWN0LmtleXModm0uX2RhdGEgfHwge30pLFxuICAgIE9iamVjdC5rZXlzKHZtLl9jb21wdXRlZFdhdGNoZXJzIHx8IHt9KSk7XG5cbiAgZGF0YUtleXMucmVkdWNlKGZ1bmN0aW9uKHJldCwga2V5KSB7XG4gICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIHJldHVybiByZXRcbiAgfSwgcmV0KTtcblxuICAvLyB2dWUtY29tcG9zaXRpb24tYXBpXG4gIHZhciBjb21wb3NpdGlvbkFwaVN0YXRlID0gdm0uX19jb21wb3NpdGlvbl9hcGlfc3RhdGVfXyB8fCB2bS5fX3NlY3JldF92ZmFfc3RhdGVfXztcbiAgdmFyIHJhd0JpbmRpbmdzID0gY29tcG9zaXRpb25BcGlTdGF0ZSAmJiBjb21wb3NpdGlvbkFwaVN0YXRlLnJhd0JpbmRpbmdzO1xuICBpZiAocmF3QmluZGluZ3MpIHtcbiAgICBPYmplY3Qua2V5cyhyYXdCaW5kaW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXRba2V5XSA9IHZtW2tleV07XG4gICAgfSk7XG4gIH1cblxuICAvL1RPRE8g6ZyA6KaB5oqK5peg55So5pWw5o2u5aSE55CG5o6J77yM5q+U5aaCIGxpc3Q9PmwwIOWImSBsaXN0IOmcgOimgeenu+mZpO+8jOWQpuWImeWkmuS8oOi+k+S4gOS7veaVsOaNrlxuICBPYmplY3QuYXNzaWduKHJldCwgdm0uJG1wLmRhdGEgfHwge30pO1xuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgKSB7IC8vZm9ybS1maWVsZFxuICAgIHJldFsnbmFtZSddID0gdm0ubmFtZTtcbiAgICByZXRbJ3ZhbHVlJ10gPSB2bS52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldCkpXG59XG5cbnZhciBwYXRjaCA9IGZ1bmN0aW9uKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgdmFyIG1wSW5zdGFuY2UgPSB0aGlzLiRzY29wZTtcbiAgICB2YXIgZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBkYXRhLl9fd2Vidmlld0lkX18gPSBtcEluc3RhbmNlLmRhdGEuX193ZWJ2aWV3SWRfXztcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgLy/ku4XlkIzmraUgZGF0YSDkuK3mnInnmoTmlbDmja5cbiAgICAgIG1wRGF0YVtrZXldID0gbXBJbnN0YW5jZS5kYXRhW2tleV07XG4gICAgfSk7XG4gICAgdmFyIGRpZmZEYXRhID0gdGhpcy4kc2hvdWxkRGlmZkRhdGEgPT09IGZhbHNlID8gZGF0YSA6IGRpZmYoZGF0YSwgbXBEYXRhKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdGhpcy5fdWlkICtcbiAgICAgICAgICAnXeW3rumHj+abtOaWsCcsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19uZXh0X3RpY2tfcGVuZGluZyA9IHRydWU7XG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzJDEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlSZW5kZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQkMShcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICBpZiAoIXZtLm1wVHlwZSkgey8vbWFpbi5qcyDkuK3nmoQgbmV3IFZ1ZVxuICAgIHJldHVybiB2bVxuICB9XG4gIGlmICh2bS5tcFR5cGUgPT09ICdhcHAnKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gIH1cbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gIH07XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuICByZXR1cm4gdm1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qICAqL1xuXG52YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxuICAgIGtleSA9IHBhcnNlSW50KGtleS5yZXBsYWNlKCdfXyRuJywgJycpKTtcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxufVxuXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xuXG4gIFZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24oZXJyLCB2bSwgaW5mbykge1xuICAgIFZ1ZS51dGlsLndhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICB2YXIgYXBwID0gdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRBcHAoKTtcbiAgICBpZiAoYXBwICYmIGFwcC5vbkVycm9yKSB7XG4gICAgICBhcHAub25FcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb2xkRW1pdCA9IFZ1ZS5wcm90b3R5cGUuJGVtaXQ7XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIGV2ZW50KSB7XG4gICAgICB0aGlzLiRzY29wZVsndHJpZ2dlckV2ZW50J10oZXZlbnQsIHtcbiAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pXG4gIH07XG5cbiAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBWdWUucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGVbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGVbbWV0aG9kXShhcmdzKVxuICAgICAgfVxuICAgICAgLy8gbXAtYWxpcGF5XG4gICAgICBpZiAodHlwZW9mIG15ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2QgPT09ICdjcmVhdGVTZWxlY3RvclF1ZXJ5Jykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgICAgICByZXR1cm4gbXkuY3JlYXRlU2VsZWN0b3JRdWVyeShhcmdzKVxuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKGFyZ3MpXG4gICAgICB9XG4gICAgICAvLyBUT0RPIG1wLWFsaXBheSDmmoLkuI3mlK/mjIEgc2VsZWN0QWxsQ29tcG9uZW50cyxzZWxlY3RDb21wb25lbnRcbiAgICB9O1xuICB9KTtcblxuICBWdWUucHJvdG90eXBlLl9faW5pdF9wcm92aWRlID0gaW5pdFByb3ZpZGU7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfaW5qZWN0aW9ucyA9IGluaXRJbmplY3Rpb25zO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbihob29rLCBhcmdzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgcmV0ID0gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBhcmdzID8gW2FyZ3NdIDogbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2ssIGFyZ3MpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9tb2RlbCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSwgbW9kaWZpZXJzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCdudW1iZXInKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgfVxuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaXRlbVsnJG9yaWcnXSB8fCBpdGVtXG4gICAgfVxuICAgIHJldHVybiBpdGVtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF92YWx1ZSA9IGZ1bmN0aW9uKGRhdGFQYXRoLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gZ2V0VGFyZ2V0KHRhcmdldCB8fCB0aGlzLCBkYXRhUGF0aClcbiAgfTtcblxuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfY2xhc3MgPSBmdW5jdGlvbihkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XG4gICAgcmV0dXJuIHJlbmRlckNsYXNzKHN0YXRpY0NsYXNzLCBkeW5hbWljQ2xhc3MpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fX2dldF9zdHlsZSA9IGZ1bmN0aW9uKGR5bmFtaWNTdHlsZSwgc3RhdGljU3R5bGUpIHtcbiAgICBpZiAoIWR5bmFtaWNTdHlsZSAmJiAhc3RhdGljU3R5bGUpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB2YXIgZHluYW1pY1N0eWxlT2JqID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGR5bmFtaWNTdHlsZSk7XG4gICAgdmFyIHN0eWxlT2JqID0gc3RhdGljU3R5bGUgPyBleHRlbmQoc3RhdGljU3R5bGUsIGR5bmFtaWNTdHlsZU9iaikgOiBkeW5hbWljU3R5bGVPYmo7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlT2JqKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICgoaHlwaGVuYXRlKG5hbWUpKSArIFwiOlwiICsgKHN0eWxlT2JqW25hbWVdKSk7IH0pLmpvaW4oJzsnKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19tYXAgPSBmdW5jdGlvbih2YWwsIGl0ZXJhdGVlKSB7XG4gICAgLy9UT0RPIOaaguS4jeiAg+iZkSBzdHJpbmdcbiAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUodmFsW2ldLCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRba2V5XSA9IGl0ZXJhdGVlKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvLyDnrKzkuIDkuKrlj4LmlbDmmoLml7bku43lkozlsI/nqIvluo/kuIDoh7RcbiAgICAgICAgcmV0W2ldID0gaXRlcmF0ZWUoaSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9O1xuXG59XG5cbi8qICAqL1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTJDEgPSBbXG4gICAgLy9BcHBcbiAgICAnb25MYXVuY2gnLFxuICAgICdvblNob3cnLFxuICAgICdvbkhpZGUnLFxuICAgICdvblVuaU5WaWV3TWVzc2FnZScsXG4gICAgJ29uUGFnZU5vdEZvdW5kJyxcbiAgICAnb25UaGVtZUNoYW5nZScsXG4gICAgJ29uRXJyb3InLFxuICAgICdvblVuaGFuZGxlZFJlamVjdGlvbicsXG4gICAgLy9QYWdlXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uTG9hZCcsXG4gICAgLy8gJ29uU2hvdycsXG4gICAgJ29uUmVhZHknLFxuICAgIC8vICdvbkhpZGUnLFxuICAgICdvblVubG9hZCcsXG4gICAgJ29uUHVsbERvd25SZWZyZXNoJyxcbiAgICAnb25SZWFjaEJvdHRvbScsXG4gICAgJ29uVGFiSXRlbVRhcCcsXG4gICAgJ29uQWRkVG9GYXZvcml0ZXMnLFxuICAgICdvblNoYXJlVGltZWxpbmUnLFxuICAgICdvblNoYXJlQXBwTWVzc2FnZScsXG4gICAgJ29uUmVzaXplJyxcbiAgICAnb25QYWdlU2Nyb2xsJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJyxcbiAgICAnb25CYWNrUHJlc3MnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcsXG4gICAgLy9Db21wb25lbnRcbiAgICAvLyAnb25SZWFkeScsIC8vIOWFvOWuueaXp+eJiOacrO+8jOW6lOivpeenu+mZpOivpeS6i+S7tlxuICAgICdvblBhZ2VTaG93JyxcbiAgICAnb25QYWdlSGlkZScsXG4gICAgJ29uUGFnZVJlc2l6ZSdcbl07XG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiQxKFZ1ZSkge1xuXG4gICAgLy9maXhlZCB2dWUtY2xhc3MtY29tcG9uZW50XG4gICAgdmFyIG9sZEV4dGVuZCA9IFZ1ZS5leHRlbmQ7XG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uKGV4dGVuZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIG1ldGhvZHMgPSBleHRlbmRPcHRpb25zLm1ldGhvZHM7XG4gICAgICAgIGlmIChtZXRob2RzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKExJRkVDWUNMRV9IT09LUyQxLmluZGV4T2YobWV0aG9kTmFtZSkhPT0tMSkge1xuICAgICAgICAgICAgICAgICAgICBleHRlbmRPcHRpb25zW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkRXh0ZW5kLmNhbGwodGhpcywgZXh0ZW5kT3B0aW9ucylcbiAgICB9O1xuXG4gICAgdmFyIHN0cmF0ZWdpZXMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgICB2YXIgbWVyZ2VIb29rID0gc3RyYXRlZ2llcy5jcmVhdGVkO1xuICAgIExJRkVDWUNMRV9IT09LUyQxLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgc3RyYXRlZ2llc1tob29rXSA9IG1lcmdlSG9vaztcbiAgICB9KTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuX19saWZlY3ljbGVfaG9va3NfXyA9IExJRkVDWUNMRV9IT09LUyQxO1xufVxuXG4vKiAgKi9cblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBwYXRjaDtcblxuLy8gcHVibGljIG1vdW50IG1ldGhvZFxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbihcbiAgICBlbCAsXG4gICAgaHlkcmF0aW5nIFxuKSB7XG4gICAgcmV0dXJuIG1vdW50Q29tcG9uZW50JDEodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbmxpZmVjeWNsZU1peGluJDEoVnVlKTtcbmludGVybmFsTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsImltcG9ydCB7XG5cdG1hcFN0YXRlXG59IGZyb20gJ3Z1ZXgnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBTdGF0ZSh7XG5cdFx0fSksXG5cdH0sXG5cblx0cHJvcHM6IHtcblxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0IFxuXHR9LFxuXHRvblNoYXJlVGltZWxpbmUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAndWnnu4Tku7blupMnLFxuXHRcdFx0cXVlcnk6IHt9XG5cdFx0fTtcblx0fSxcblx0b25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cdFx0d3guc2hvd1NoYXJlTWVudSh7XG5cdFx0XHR3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXG5cdFx0XHRtZW51czogWydzaGFyZUFwcE1lc3NhZ2UnLCAnc2hhcmVUaW1lbGluZSddXG5cdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cblx0fVxufVxuIiwiLyogUHJpc21KUyAxLjE5LjBcbmh0dHBzOi8vcHJpc21qcy5jb20vZG93bmxvYWQuaHRtbCN0aGVtZXM9cHJpc20mbGFuZ3VhZ2VzPW1hcmt1cCtjc3MrY2xpa2UramF2YXNjcmlwdCAqL1xudmFyIF9zZWxmID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93IDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlID9cblx0c2VsZiA6IHt9LFxuXHRQcmlzbSA9IGZ1bmN0aW9uKHUpIHtcblx0XHR2YXIgYyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLFxuXHRcdFx0biA9IDAsXG5cdFx0XHRDID0ge1xuXHRcdFx0XHRtYW51YWw6IHUuUHJpc20gJiYgdS5QcmlzbS5tYW51YWwsXG5cdFx0XHRcdGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjogdS5QcmlzbSAmJiB1LlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblx0XHRcdFx0dXRpbDoge1xuXHRcdFx0XHRcdGVuY29kZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGUgaW5zdGFuY2VvZiBfID8gbmV3IF8oZS50eXBlLCBDLnV0aWwuZW5jb2RlKGUuY29udGVudCksIGUuYWxpYXMpIDogQXJyYXkuaXNBcnJheShlKSA/IGUubWFwKEMudXRpbC5lbmNvZGUpIDpcblx0XHRcdFx0XHRcdFx0ZS5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLCBcIiBcIilcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHR5cGU6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvYmpJZDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGUuX19pZCB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2lkXCIsIHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICsrblxuXHRcdFx0XHRcdFx0fSksIGUuX19pZFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2xvbmU6IGZ1bmN0aW9uIHIoZSwgdCkge1xuXHRcdFx0XHRcdFx0dmFyIGEsIG4sIGkgPSBDLnV0aWwudHlwZShlKTtcblx0XHRcdFx0XHRcdHN3aXRjaCAodCA9IHQgfHwge30sIGkpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIk9iamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdGlmIChuID0gQy51dGlsLm9iaklkKGUpLCB0W25dKSByZXR1cm4gdFtuXTtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciBvIGluIGEgPSB7fSwgdFtuXSA9IGEsIGUpIGUuaGFzT3duUHJvcGVydHkobykgJiYgKGFbb10gPSByKGVbb10sIHQpKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYTtcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIkFycmF5XCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG4gPSBDLnV0aWwub2JqSWQoZSksIHRbbl0gPyB0W25dIDogKGEgPSBbXSwgdFtuXSA9IGEsIGUuZm9yRWFjaChmdW5jdGlvbihlLCBuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhW25dID0gcihlLCB0KVxuXHRcdFx0XHRcdFx0XHRcdH0pLCBhKTtcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGZvciAoOyBlICYmICFjLnRlc3QoZS5jbGFzc05hbWUpOykgZSA9IGUucGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRcdHJldHVybiBlID8gKGUuY2xhc3NOYW1lLm1hdGNoKGMpIHx8IFssIFwibm9uZVwiXSlbMV0udG9Mb3dlckNhc2UoKSA6IFwibm9uZVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdXJyZW50U2NyaXB0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoXCJjdXJyZW50U2NyaXB0XCIgaW4gZG9jdW1lbnQpIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yXG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuID0gKC9hdCBbXihcXHJcXG5dKlxcKCguKik6Lis6LitcXCkkL2kuZXhlYyhlLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdFx0XHRcdGlmIChuKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciB0IGluIHIpXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoclt0XS5zcmMgPT0gbikgcmV0dXJuIHJbdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0bGFuZ3VhZ2VzOiB7XG5cdFx0XHRcdFx0ZXh0ZW5kOiBmdW5jdGlvbihlLCBuKSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9IEMudXRpbC5jbG9uZShDLmxhbmd1YWdlc1tlXSk7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciB0IGluIG4pIHJbdF0gPSBuW3RdO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24ociwgZSwgbiwgdCkge1xuXHRcdFx0XHRcdFx0dmFyIGEgPSAodCA9IHQgfHwgQy5sYW5ndWFnZXMpW3JdLFxuXHRcdFx0XHRcdFx0XHRpID0ge307XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBvIGluIGEpXG5cdFx0XHRcdFx0XHRcdGlmIChhLmhhc093blByb3BlcnR5KG8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG8gPT0gZSlcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGwgaW4gbikgbi5oYXNPd25Qcm9wZXJ0eShsKSAmJiAoaVtsXSA9IG5bbF0pO1xuXHRcdFx0XHRcdFx0XHRcdG4uaGFzT3duUHJvcGVydHkobykgfHwgKGlbb10gPSBhW29dKVxuXHRcdFx0XHRcdFx0XHR9IHZhciBzID0gdFtyXTtcblx0XHRcdFx0XHRcdHJldHVybiB0W3JdID0gaSwgQy5sYW5ndWFnZXMuREZTKEMubGFuZ3VhZ2VzLCBmdW5jdGlvbihlLCBuKSB7XG5cdFx0XHRcdFx0XHRcdG4gPT09IHMgJiYgZSAhPSByICYmICh0aGlzW2VdID0gaSlcblx0XHRcdFx0XHRcdH0pLCBpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRERlM6IGZ1bmN0aW9uIGUobiwgciwgdCwgYSkge1xuXHRcdFx0XHRcdFx0YSA9IGEgfHwge307XG5cdFx0XHRcdFx0XHR2YXIgaSA9IEMudXRpbC5vYmpJZDtcblx0XHRcdFx0XHRcdGZvciAodmFyIG8gaW4gbilcblx0XHRcdFx0XHRcdFx0aWYgKG4uaGFzT3duUHJvcGVydHkobykpIHtcblx0XHRcdFx0XHRcdFx0XHRyLmNhbGwobiwgbywgbltvXSwgdCB8fCBvKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbCA9IG5bb10sXG5cdFx0XHRcdFx0XHRcdFx0XHRzID0gQy51dGlsLnR5cGUobCk7XG5cdFx0XHRcdFx0XHRcdFx0XCJPYmplY3RcIiAhPT0gcyB8fCBhW2kobCldID8gXCJBcnJheVwiICE9PSBzIHx8IGFbaShsKV0gfHwgKGFbaShsKV0gPSAhMCwgZShsLCByLCBvLCBhKSkgOiAoYVtpKGwpXSA9ICEwLCBlKGwsIHIsXG5cdFx0XHRcdFx0XHRcdFx0XHRudWxsLCBhKSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0cGx1Z2luczoge30sXG5cdFx0XHRcdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24oZSwgbikge1xuXHRcdFx0XHRcdEMuaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGUsIG4pXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbihlLCBuLCByKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjazogcixcblx0XHRcdFx0XHRcdGNvbnRhaW5lcjogZSxcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRDLmhvb2tzLnJ1bihcImJlZm9yZS1oaWdobGlnaHRhbGxcIiwgdCksIHQuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LnNlbGVjdG9yKSksXG5cdFx0XHRcdFx0XHRDLmhvb2tzLnJ1bihcImJlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0XCIsIHQpO1xuXHRcdFx0XHRcdGZvciAodmFyIGEsIGkgPSAwOyBhID0gdC5lbGVtZW50c1tpKytdOykgQy5oaWdobGlnaHRFbGVtZW50KGEsICEwID09PSBuLCB0LmNhbGxiYWNrKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbihlLCBuLCByKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSBDLnV0aWwuZ2V0TGFuZ3VhZ2UoZSksXG5cdFx0XHRcdFx0XHRhID0gQy5sYW5ndWFnZXNbdF07XG5cdFx0XHRcdFx0ZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS5yZXBsYWNlKGMsIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpICsgXCIgbGFuZ3VhZ2UtXCIgKyB0O1xuXHRcdFx0XHRcdHZhciBpID0gZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGkgJiYgXCJwcmVcIiA9PT0gaS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChpLmNsYXNzTmFtZSA9IGkuY2xhc3NOYW1lLnJlcGxhY2UoYywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgK1xuXHRcdFx0XHRcdFx0XCIgbGFuZ3VhZ2UtXCIgKyB0KTtcblx0XHRcdFx0XHR2YXIgbyA9IHtcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IGUsXG5cdFx0XHRcdFx0XHRsYW5ndWFnZTogdCxcblx0XHRcdFx0XHRcdGdyYW1tYXI6IGEsXG5cdFx0XHRcdFx0XHRjb2RlOiBlLnRleHRDb250ZW50XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGZ1bmN0aW9uIGwoZSkge1xuXHRcdFx0XHRcdFx0by5oaWdobGlnaHRlZENvZGUgPSBlLCBDLmhvb2tzLnJ1bihcImJlZm9yZS1pbnNlcnRcIiwgbyksIG8uZWxlbWVudC5pbm5lckhUTUwgPSBvLmhpZ2hsaWdodGVkQ29kZSwgQy5ob29rcy5ydW4oXG5cdFx0XHRcdFx0XHRcdFwiYWZ0ZXItaGlnaGxpZ2h0XCIsIG8pLCBDLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsIG8pLCByICYmIHIuY2FsbChvLmVsZW1lbnQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChDLmhvb2tzLnJ1bihcImJlZm9yZS1zYW5pdHktY2hlY2tcIiwgbyksICFvLmNvZGUpIHJldHVybiBDLmhvb2tzLnJ1bihcImNvbXBsZXRlXCIsIG8pLCB2b2lkKHIgJiYgci5jYWxsKG8uZWxlbWVudCkpO1xuXHRcdFx0XHRcdGlmIChDLmhvb2tzLnJ1bihcImJlZm9yZS1oaWdobGlnaHRcIiwgbyksIG8uZ3JhbW1hcilcblx0XHRcdFx0XHRcdGlmIChuICYmIHUuV29ya2VyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBzID0gbmV3IFdvcmtlcihDLmZpbGVuYW1lKTtcblx0XHRcdFx0XHRcdFx0cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdFx0bChlLmRhdGEpXG5cdFx0XHRcdFx0XHRcdH0sIHMucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0XHRcdGxhbmd1YWdlOiBvLmxhbmd1YWdlLFxuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IG8uY29kZSxcblx0XHRcdFx0XHRcdFx0XHRpbW1lZGlhdGVDbG9zZTogITBcblx0XHRcdFx0XHRcdFx0fSkpXG5cdFx0XHRcdFx0XHR9IGVsc2UgbChDLmhpZ2hsaWdodChvLmNvZGUsIG8uZ3JhbW1hciwgby5sYW5ndWFnZSkpO1xuXHRcdFx0XHRcdGVsc2UgbChDLnV0aWwuZW5jb2RlKG8uY29kZSkpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZ2hsaWdodDogZnVuY3Rpb24oZSwgbiwgcikge1xuXHRcdFx0XHRcdHZhciB0ID0ge1xuXHRcdFx0XHRcdFx0Y29kZTogZSxcblx0XHRcdFx0XHRcdGdyYW1tYXI6IG4sXG5cdFx0XHRcdFx0XHRsYW5ndWFnZTogclxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIEMuaG9va3MucnVuKFwiYmVmb3JlLXRva2VuaXplXCIsIHQpLCB0LnRva2VucyA9IEMudG9rZW5pemUodC5jb2RlLCB0LmdyYW1tYXIpLCBDLmhvb2tzLnJ1bihcImFmdGVyLXRva2VuaXplXCIsXG5cdFx0XHRcdFx0XHR0KSwgXy5zdHJpbmdpZnkoQy51dGlsLmVuY29kZSh0LnRva2VucyksIHQubGFuZ3VhZ2UpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hdGNoR3JhbW1hcjogZnVuY3Rpb24oZSwgbiwgciwgdCwgYSwgaSwgbykge1xuXHRcdFx0XHRcdGZvciAodmFyIGwgaW4gcilcblx0XHRcdFx0XHRcdGlmIChyLmhhc093blByb3BlcnR5KGwpICYmIHJbbF0pIHtcblx0XHRcdFx0XHRcdFx0dmFyIHMgPSByW2xdO1xuXHRcdFx0XHRcdFx0XHRzID0gQXJyYXkuaXNBcnJheShzKSA/IHMgOiBbc107XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIHUgPSAwOyB1IDwgcy5sZW5ndGg7ICsrdSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvICYmIG8gPT0gbCArIFwiLFwiICsgdSkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBjID0gc1t1XSxcblx0XHRcdFx0XHRcdFx0XHRcdGcgPSBjLmluc2lkZSxcblx0XHRcdFx0XHRcdFx0XHRcdGYgPSAhIWMubG9va2JlaGluZCxcblx0XHRcdFx0XHRcdFx0XHRcdGggPSAhIWMuZ3JlZWR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZCA9IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRtID0gYy5hbGlhcztcblx0XHRcdFx0XHRcdFx0XHRpZiAoaCAmJiAhYy5wYXR0ZXJuLmdsb2JhbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHAgPSBjLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0XHRcdFx0XHRjLnBhdHRlcm4gPSBSZWdFeHAoYy5wYXR0ZXJuLnNvdXJjZSwgcCArIFwiZ1wiKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjID0gYy5wYXR0ZXJuIHx8IGM7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgeSA9IHQsIHYgPSBhOyB5IDwgbi5sZW5ndGg7IHYgKz0gblt5XS5sZW5ndGgsICsreSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGsgPSBuW3ldO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG4ubGVuZ3RoID4gZS5sZW5ndGgpIHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICghKGsgaW5zdGFuY2VvZiBfKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaCAmJiB5ICE9IG4ubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjLmxhc3RJbmRleCA9IHYsICEoTyA9IGMuZXhlYyhlKSkpIGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGIgPSBPLmluZGV4ICsgKGYgJiYgT1sxXSA/IE9bMV0ubGVuZ3RoIDogMCksIHcgPSBPLmluZGV4ICsgT1swXS5sZW5ndGgsIEEgPSB5LCBQID0gdiwgeCA9IG4ubGVuZ3RoOyBBIDxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHggJiYgKFAgPCB3IHx8ICFuW0FdLnR5cGUgJiYgIW5bQSAtIDFdLmdyZWVkeSk7ICsrQSkoUCArPSBuW0FdLmxlbmd0aCkgPD0gYiAmJiAoKyt5LCB2ID0gUCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5beV0gaW5zdGFuY2VvZiBfKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTID0gQSAtIHksIGsgPSBlLnNsaWNlKHYsIFApLCBPLmluZGV4IC09IHZcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIE8gPSBjLmV4ZWMoayksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTID0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChPKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZiAmJiAoZCA9IE9bMV0gPyBPWzFdLmxlbmd0aCA6IDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHcgPSAoYiA9IE8uaW5kZXggKyBkKSArIChPID0gT1swXS5zbGljZShkKSkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBqID0gay5zbGljZSgwLCBiKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE4gPSBrLnNsaWNlKHcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0RSA9IFt5LCBTXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqICYmICgrK3ksIHYgKz0gai5sZW5ndGgsIEUucHVzaChqKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIEwgPSBuZXcgXyhsLCBnID8gQy50b2tlbml6ZShPLCBnKSA6IE8sIG0sIE8sIGgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChFLnB1c2goTCksIE4gJiYgRS5wdXNoKE4pLCBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KG4sIEUpLCAxICE9IFMgJiYgQy5tYXRjaEdyYW1tYXIoZSwgbiwgciwgeSwgdixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ITAsIGwgKyBcIixcIiArIHUpLCBpKSBicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkpIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRva2VuaXplOiBmdW5jdGlvbihlLCBuKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSBbZV0sXG5cdFx0XHRcdFx0XHR0ID0gbi5yZXN0O1xuXHRcdFx0XHRcdGlmICh0KSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBhIGluIHQpIG5bYV0gPSB0W2FdO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIG4ucmVzdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gQy5tYXRjaEdyYW1tYXIoZSwgciwgbiwgMCwgMCwgITEpLCByXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhvb2tzOiB7XG5cdFx0XHRcdFx0YWxsOiB7fSxcblx0XHRcdFx0XHRhZGQ6IGZ1bmN0aW9uKGUsIG4pIHtcblx0XHRcdFx0XHRcdHZhciByID0gQy5ob29rcy5hbGw7XG5cdFx0XHRcdFx0XHRyW2VdID0gcltlXSB8fCBbXSwgcltlXS5wdXNoKG4pXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRydW46IGZ1bmN0aW9uKGUsIG4pIHtcblx0XHRcdFx0XHRcdHZhciByID0gQy5ob29rcy5hbGxbZV07XG5cdFx0XHRcdFx0XHRpZiAociAmJiByLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgdCwgYSA9IDA7IHQgPSByW2ErK107KSB0KG4pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRUb2tlbjogX1xuXHRcdFx0fTtcblxuXHRcdGZ1bmN0aW9uIF8oZSwgbiwgciwgdCwgYSkge1xuXHRcdFx0dGhpcy50eXBlID0gZSwgdGhpcy5jb250ZW50ID0gbiwgdGhpcy5hbGlhcyA9IHIsIHRoaXMubGVuZ3RoID0gMCB8ICh0IHx8IFwiXCIpLmxlbmd0aCwgdGhpcy5ncmVlZHkgPSAhIWFcblx0XHR9XG5cdFx0aWYgKHUuUHJpc20gPSBDLCBfLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGUsIG4pIHtcblx0XHRcdFx0aWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBlO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGUubWFwKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gXy5zdHJpbmdpZnkoZSwgbilcblx0XHRcdFx0fSkuam9pbihcIlwiKTtcblx0XHRcdFx0dmFyIHIgPSB7XG5cdFx0XHRcdFx0dHlwZTogZS50eXBlLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IF8uc3RyaW5naWZ5KGUuY29udGVudCwgbiksXG5cdFx0XHRcdFx0dGFnOiBcInNwYW5cIixcblx0XHRcdFx0XHRjbGFzc2VzOiBbXCJ0b2tlblwiLCBlLnR5cGVdLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdFx0XHRcdGxhbmd1YWdlOiBuXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChlLmFsaWFzKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSBBcnJheS5pc0FycmF5KGUuYWxpYXMpID8gZS5hbGlhcyA6IFtlLmFsaWFzXTtcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyLmNsYXNzZXMsIHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0Qy5ob29rcy5ydW4oXCJ3cmFwXCIsIHIpO1xuXHRcdFx0XHR2YXIgYSA9IE9iamVjdC5rZXlzKHIuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZSArICc9XCInICsgKHIuYXR0cmlidXRlc1tlXSB8fCBcIlwiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKSArICdcIidcblx0XHRcdFx0fSkuam9pbihcIiBcIik7XG5cdFx0XHRcdHJldHVybiBcIjxcIiArIHIudGFnICsgJyBjbGFzcz1cIicgKyByLmNsYXNzZXMuam9pbihcIiBcIikgKyAnXCInICsgKGEgPyBcIiBcIiArIGEgOiBcIlwiKSArIFwiPlwiICsgci5jb250ZW50ICsgXCI8L1wiICsgci50YWcgK1xuXHRcdFx0XHRcdFwiPlwiXG5cdFx0XHR9LCAhdS5kb2N1bWVudCkgcmV0dXJuIHUuYWRkRXZlbnRMaXN0ZW5lciAmJiAoQy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIgfHwgdS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLFxuXHRcdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2YXIgbiA9IEpTT04ucGFyc2UoZS5kYXRhKSxcblx0XHRcdFx0XHRyID0gbi5sYW5ndWFnZSxcblx0XHRcdFx0XHR0ID0gbi5jb2RlLFxuXHRcdFx0XHRcdGEgPSBuLmltbWVkaWF0ZUNsb3NlO1xuXHRcdFx0XHR1LnBvc3RNZXNzYWdlKEMuaGlnaGxpZ2h0KHQsIEMubGFuZ3VhZ2VzW3JdLCByKSksIGEgJiYgdS5jbG9zZSgpXG5cdFx0XHR9LCAhMSkpLCBDO1xuXHRcdHZhciBlID0gQy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuXHRcdGZ1bmN0aW9uIHIoKSB7XG5cdFx0XHRDLm1hbnVhbCB8fCBDLmhpZ2hsaWdodEFsbCgpXG5cdFx0fVxuXHRcdGlmIChlICYmIChDLmZpbGVuYW1lID0gZS5zcmMsIGUuaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIikgJiYgKEMubWFudWFsID0gITApKSwgIUMubWFudWFsKSB7XG5cdFx0XHR2YXIgdCA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG5cdFx0XHRcImxvYWRpbmdcIiA9PT0gdCB8fCBcImludGVyYWN0aXZlXCIgPT09IHQgJiYgZSAmJiBlLmRlZmVyID8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcikgOiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID9cblx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyKSA6IHdpbmRvdy5zZXRUaW1lb3V0KHIsIDE2KVxuXHRcdH1cblx0XHRyZXR1cm4gQ1xuXHR9KF9zZWxmKTtcblwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBQcmlzbSksIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGdsb2JhbCAmJiAoZ2xvYmFsLlByaXNtID1cblx0UHJpc20pO1xuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0XHRjb21tZW50OiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHRcdHByb2xvZzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdFx0ZG9jdHlwZToge1xuXHRcdFx0cGF0dGVybjogLzwhRE9DVFlQRSg/OltePlwiJ1tcXF1dfFwiW15cIl0qXCJ8J1teJ10qJykrKD86XFxbKD86KD8hPCEtLSlbXlwiJ1xcXV18XCJbXlwiXSpcInwnW14nXSonfDwhLS1bXFxzXFxTXSo/LS0+KSpcXF1cXHMqKT8+L2ksXG5cdFx0XHRncmVlZHk6ICEwXG5cdFx0fSxcblx0XHRjZGF0YTogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XV0+L2ksXG5cdFx0dGFnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG5cdFx0XHRncmVlZHk6ICEwLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHRhZzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePFxcLz9bXlxccz5cXC9dKy9pLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0cHVuY3R1YXRpb246IC9ePFxcLz8vLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImF0dHItdmFsdWVcIjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspL2ksXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRwdW5jdHVhdGlvbjogWy9ePS8sIHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiAhMFxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXFwvPz4vLFxuXHRcdFx0XHRcImF0dHItbmFtZVwiOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdG5hbWVzcGFjZTogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZW50aXR5OiAvJiM/W1xcZGEtel17MSw4fTsvaVxuXHR9LCBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5pbnNpZGVbXCJhdHRyLXZhbHVlXCJdLmluc2lkZS5lbnRpdHkgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwLmVudGl0eSwgUHJpc20uaG9va3MuYWRkKFxuXHRcdFwid3JhcFwiLFxuXHRcdGZ1bmN0aW9uKGEpIHtcblx0XHRcdFwiZW50aXR5XCIgPT09IGEudHlwZSAmJiAoYS5hdHRyaWJ1dGVzLnRpdGxlID0gYS5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgXCImXCIpKVxuXHRcdH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsIFwiYWRkSW5saW5lZFwiLCB7XG5cdFx0dmFsdWU6IGZ1bmN0aW9uKGEsIGUpIHtcblx0XHRcdHZhciBzID0ge307XG5cdFx0XHRzW1wibGFuZ3VhZ2UtXCIgKyBlXSA9IHtcblx0XHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6ICEwLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tlXVxuXHRcdFx0fSwgcy5jZGF0YSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXHRcdFx0dmFyIG4gPSB7XG5cdFx0XHRcdFwiaW5jbHVkZWQtY2RhdGFcIjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0XHRpbnNpZGU6IHNcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdG5bXCJsYW5ndWFnZS1cIiArIGVdID0ge1xuXHRcdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbZV1cblx0XHRcdH07XG5cdFx0XHR2YXIgdCA9IHt9O1xuXHRcdFx0dFthXSA9IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKFwiKDxfX1tcXFxcc1xcXFxTXSo/PikoPzo8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT5cXFxccyp8W1xcXFxzXFxcXFNdKSo/KD89PFxcXFwvX18+KVwiLnJlcGxhY2UoL19fL2csIGEpLFxuXHRcdFx0XHRcdFwiaVwiKSxcblx0XHRcdFx0bG9va2JlaGluZDogITAsXG5cdFx0XHRcdGdyZWVkeTogITAsXG5cdFx0XHRcdGluc2lkZTogblxuXHRcdFx0fSwgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcIm1hcmt1cFwiLCBcImNkYXRhXCIsIHQpXG5cdFx0fVxuXHR9KSwgUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoXCJtYXJrdXBcIiwge30pLCBQcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXAsIFByaXNtLmxhbmd1YWdlc1xuXHQubWF0aG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCwgUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG4hIGZ1bmN0aW9uKHMpIHtcblx0dmFyIGUgPSAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS87XG5cdHMubGFuZ3VhZ2VzLmNzcyA9IHtcblx0XHRjb21tZW50OiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0YXRydWxlOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHJ1bGU6IC9eQFtcXHctXSsvLFxuXHRcdFx0XHRcInNlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50XCI6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYnNlbGVjdG9yXFxzKlxcKCg/IVxccypcXCkpXFxzKikoPzpbXigpXXxcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiAhMCxcblx0XHRcdFx0XHRhbGlhczogXCJzZWxlY3RvclwiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHVybDoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKFwidXJsXFxcXCgoPzpcIiArIGUuc291cmNlICsgXCJ8W15cXG5cXHIoKV0qKVxcXFwpXCIsIFwiaVwiKSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRmdW5jdGlvbjogL151cmwvaSxcblx0XHRcdFx0cHVuY3R1YXRpb246IC9eXFwofFxcKSQvXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzZWxlY3RvcjogUmVnRXhwKFwiW157fVxcXFxzXSg/Oltee307XFxcIiddfFwiICsgZS5zb3VyY2UgKyBcIikqPyg/PVxcXFxzKlxcXFx7KVwiKSxcblx0XHRzdHJpbmc6IHtcblx0XHRcdHBhdHRlcm46IGUsXG5cdFx0XHRncmVlZHk6ICEwXG5cdFx0fSxcblx0XHRwcm9wZXJ0eTogL1stX2EtelxceEEwLVxcdUZGRkZdWy1cXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqOikvaSxcblx0XHRpbXBvcnRhbnQ6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0ZnVuY3Rpb246IC9bLWEtejAtOV0rKD89XFwoKS9pLFxuXHRcdHB1bmN0dWF0aW9uOiAvWygpe307OixdL1xuXHR9LCBzLmxhbmd1YWdlcy5jc3MuYXRydWxlLmluc2lkZS5yZXN0ID0gcy5sYW5ndWFnZXMuY3NzO1xuXHR2YXIgdCA9IHMubGFuZ3VhZ2VzLm1hcmt1cDtcblx0dCAmJiAodC50YWcuYWRkSW5saW5lZChcInN0eWxlXCIsIFwiY3NzXCIpLCBzLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJpbnNpZGVcIiwgXCJhdHRyLXZhbHVlXCIsIHtcblx0XHRcInN0eWxlLWF0dHJcIjoge1xuXHRcdFx0cGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFwiYXR0ci1uYW1lXCI6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxccypzdHlsZS9pLFxuXHRcdFx0XHRcdGluc2lkZTogdC50YWcuaW5zaWRlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFxuXHRcdFx0XHRcImF0dHItdmFsdWVcIjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8uKy9pLFxuXHRcdFx0XHRcdGluc2lkZTogcy5sYW5ndWFnZXMuY3NzXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhbGlhczogXCJsYW5ndWFnZS1jc3NcIlxuXHRcdH1cblx0fSwgdC50YWcpKVxufShQcmlzbSk7XG5QcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG5cdGNvbW1lbnQ6IFt7XG5cdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0bG9va2JlaGluZDogITBcblx0fSwge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0bG9va2JlaGluZDogITAsXG5cdFx0Z3JlZWR5OiAhMFxuXHR9XSxcblx0c3RyaW5nOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6ICEwXG5cdH0sXG5cdFwiY2xhc3MtbmFtZVwiOiB7XG5cdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyt8XFxiY2F0Y2hcXHMrXFwoKVtcXHcuXFxcXF0rL2ksXG5cdFx0bG9va2JlaGluZDogITAsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRwdW5jdHVhdGlvbjogL1suXFxcXF0vXG5cdFx0fVxuXHR9LFxuXHRrZXl3b3JkOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcblx0Ym9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0ZnVuY3Rpb246IC9cXHcrKD89XFwoKS8sXG5cdG51bWJlcjogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuXHRvcGVyYXRvcjogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG5cdHB1bmN0dWF0aW9uOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKFwiY2xpa2VcIiwge1xuXHRcdFwiY2xhc3MtbmFtZVwiOiBbUHJpc20ubGFuZ3VhZ2VzLmNsaWtlW1wiY2xhc3MtbmFtZVwiXSwge1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtfJEEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXC4oPzpwcm90b3R5cGV8Y29uc3RydWN0b3IpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiAhMFxuXHRcdH1dLFxuXHRcdGtleXdvcmQ6IFt7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6ICEwXG5cdFx0fSwge1xuXHRcdFx0cGF0dGVybjogLyhefFteLl18XFwuXFwuXFwuXFxzKilcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiAhMFxuXHRcdH1dLFxuXHRcdG51bWJlcjogL1xcYig/Oig/OjBbeFhdKD86W1xcZEEtRmEtZl0oPzpfW1xcZEEtRmEtZl0pPykrfDBbYkJdKD86WzAxXSg/Ol9bMDFdKT8pK3wwW29PXSg/OlswLTddKD86X1swLTddKT8pKyluP3woPzpcXGQoPzpfXFxkKT8pK258TmFOfEluZmluaXR5KVxcYnwoPzpcXGIoPzpcXGQoPzpfXFxkKT8pK1xcLj8oPzpcXGQoPzpfXFxkKT8pKnxcXEJcXC4oPzpcXGQoPzpfXFxkKT8pKykoPzpbRWVdWystXT8oPzpcXGQoPzpfXFxkKT8pKyk/Lyxcblx0XHRmdW5jdGlvbjogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHRcdG9wZXJhdG9yOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmfFxcfFxcfHxbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/Wy4/XT98W346XS9cblx0fSksIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0W1wiY2xhc3MtbmFtZVwiXVswXS5wYXR0ZXJuID1cblx0LyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvLCBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwiamF2YXNjcmlwdFwiLFxuXHRcdFwia2V5d29yZFwiLCB7XG5cdFx0XHRyZWdleDoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58W14kXFx3XFx4QTAtXFx1RkZGRi5cIidcXF0pXFxzXSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKl18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tnaW15dXNdezAsNn0oPz0oPzpcXHN8XFwvXFwqW1xcc1xcU10qP1xcKlxcLykqKD86JHxbXFxyXFxuLC47On0pXFxdXXxcXC9cXC8pKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6ICEwLFxuXHRcdFx0XHRncmVlZHk6ICEwXG5cdFx0XHR9LFxuXHRcdFx0XCJmdW5jdGlvbi12YXJpYWJsZVwiOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopXFxzKj0+KSkvLFxuXHRcdFx0XHRhbGlhczogXCJmdW5jdGlvblwiXG5cdFx0XHR9LFxuXHRcdFx0cGFyYW1ldGVyOiBbe1xuXHRcdFx0XHRwYXR0ZXJuOiAvKGZ1bmN0aW9uKD86XFxzK1tfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopP1xccypcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6ICEwLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHR9LCB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXyRhLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKj0+KS9pLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHR9LCB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccyo9PikvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiAhMCxcblx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0fSwge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzpbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qXFxzKilcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKlxceykvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiAhMCxcblx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0fV0sXG5cdFx0XHRjb25zdGFudDogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG5cdFx0fSksIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJqYXZhc2NyaXB0XCIsIFwic3RyaW5nXCIsIHtcblx0XHRcInRlbXBsYXRlLXN0cmluZ1wiOiB7XG5cdFx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK318KD8hXFwkeylbXlxcXFxgXSkqYC8sXG5cdFx0XHRncmVlZHk6ICEwLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFwidGVtcGxhdGUtcHVuY3R1YXRpb25cIjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eYHxgJC8sXG5cdFx0XHRcdFx0YWxpYXM6IFwic3RyaW5nXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0aW50ZXJwb2xhdGlvbjoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6ICEwLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XCJpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uXCI6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCR7fH0kLyxcblx0XHRcdFx0XHRcdFx0YWxpYXM6IFwicHVuY3R1YXRpb25cIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdHJpbmc6IC9bXFxzXFxTXSsvXG5cdFx0XHR9XG5cdFx0fVxuXHR9KSwgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCAmJiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKFwic2NyaXB0XCIsIFwiamF2YXNjcmlwdFwiKSwgUHJpc20ubGFuZ3VhZ2VzLmpzID1cblx0UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYXBwIGZyb20gJ0AvYXBwL3N0b3JlJ1xuaW1wb3J0IG1vZGFsIGZyb20gJ0AvdWkvc3RvcmUvbW9kYWwuanMnXG5cblZ1ZS51c2UoVnVleClcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuXHRzdGF0ZToge1xuXHRcdHN5c190aGVtZTogdW5pLmdldFN0b3JhZ2VTeW5jKCdzeXNfdGhlbWUnKT91bmkuZ2V0U3RvcmFnZVN5bmMoJ3N5c190aGVtZScpOmFwcC5zdGF0ZS50aGVtZSwgLy8gbGlnaHQgZGFya1xuXHRcdHN5c19tYWluOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3N5c19tYWluJyk/dW5pLmdldFN0b3JhZ2VTeW5jKCdzeXNfbWFpbicpOmFwcC5zdGF0ZS5tYWluLCAvLyBjb2xvclxuXHRcdHN5c19pbmZvOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKSxcblx0XHRzeXNfc3RhdHVzQmFyOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQsXG5cdH0sXG5cdGdldHRlcnM6IHtcblx0XHRzeXNfY2Fwc3VsZSgpIHtcblxuXG5cdFx0XHRsZXQgY2Fwc3VsZSA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRpZiAoIWNhcHN1bGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2dldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QgZXJyb3InKTtcblx0XHRcdFx0Y2Fwc3VsZSA9IHtcblx0XHRcdFx0XHRib3R0b206IDU2LFxuXHRcdFx0XHRcdGhlaWdodDogMzIsXG5cdFx0XHRcdFx0bGVmdDogMjc4LFxuXHRcdFx0XHRcdHJpZ2h0OiAzNjUsXG5cdFx0XHRcdFx0dG9wOiAyNCxcblx0XHRcdFx0XHR3aWR0aDogODdcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjYXBzdWxlO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0fSxcblx0XHRzeXNfbmF2QmFyKCkge1xuXG5cblxuXHRcdFx0XG5cblxuXHRcdFx0bGV0IGNhcHN1bGUgPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0aWYgKCFjYXBzdWxlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0IGVycm9yJyk7XG5cdFx0XHRcdGNhcHN1bGUgPSB7XG5cdFx0XHRcdFx0Ym90dG9tOiA1Nixcblx0XHRcdFx0XHRoZWlnaHQ6IDMyLFxuXHRcdFx0XHRcdGxlZnQ6IDI3OCxcblx0XHRcdFx0XHRyaWdodDogMzY1LFxuXHRcdFx0XHRcdHRvcDogMjQsXG5cdFx0XHRcdFx0d2lkdGg6IDg3XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2Fwc3VsZS5ib3R0b20gKyBjYXBzdWxlLnRvcCAtIHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodDtcblxuXG5cdFx0XHRcblxuXG5cblx0XHR9XG5cdH0sXG5cdG11dGF0aW9uczoge1xuXHRcdC8v6K6+572u5Li76aKYXG5cdFx0c2V0VGhlbWUoc3RhdGUsIGRhdGEpIHtcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnc3lzX3RoZW1lJywgZGF0YSk7XG5cdFx0XHRzdGF0ZS5zeXNfdGhlbWUgPSBkYXRhO1xuXG5cblxuXHRcdH0sXG5cdFx0Ly/orr7nva7kuLvpopzoibJcblx0XHRzZXRNYWluKHN0YXRlLCBkYXRhKSB7XG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3N5c19tYWluJywgZGF0YSk7XG5cdFx0XHRzdGF0ZS5zeXNfbWFpbiA9IGRhdGE7XG5cblxuXG5cdFx0fSxcblx0fSxcblx0YWN0aW9uczoge1xuXG5cdH0sXG5cdG1vZHVsZXM6IHtcblx0XHRhcHAsbW9kYWxcblx0fVxufSkiLCIvKiFcbiAqIHZ1ZXggdjMuNC4wXG4gKiAoYykgMjAyMCBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW4gKFZ1ZSkge1xuICB2YXIgdmVyc2lvbiA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKTtcblxuICBpZiAodmVyc2lvbiA+PSAyKSB7XG4gICAgVnVlLm1peGluKHsgYmVmb3JlQ3JlYXRlOiB2dWV4SW5pdCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdmVycmlkZSBpbml0IGFuZCBpbmplY3QgdnVleCBpbml0IHByb2NlZHVyZVxuICAgIC8vIGZvciAxLnggYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIF9pbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXQ7XG4gICAgICBfaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHN0b3JlIGluamVjdGlvblxuICAgIGlmIChvcHRpb25zLnN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IHR5cGVvZiBvcHRpb25zLnN0b3JlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5zdG9yZSgpXG4gICAgICAgIDogb3B0aW9ucy5zdG9yZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRzdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnBhcmVudC4kc3RvcmU7XG4gICAgfVxuICB9XG59XG5cbnZhciB0YXJnZXQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICA/IHdpbmRvd1xuICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXG4gICAgPyBnbG9iYWxcbiAgICA6IHt9O1xudmFyIGRldnRvb2xIb29rID0gdGFyZ2V0Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbmZ1bmN0aW9uIGRldnRvb2xQbHVnaW4gKHN0b3JlKSB7XG4gIGlmICghZGV2dG9vbEhvb2spIHsgcmV0dXJuIH1cblxuICBzdG9yZS5fZGV2dG9vbEhvb2sgPSBkZXZ0b29sSG9vaztcblxuICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4OmluaXQnLCBzdG9yZSk7XG5cbiAgZGV2dG9vbEhvb2sub24oJ3Z1ZXg6dHJhdmVsLXRvLXN0YXRlJywgZnVuY3Rpb24gKHRhcmdldFN0YXRlKSB7XG4gICAgc3RvcmUucmVwbGFjZVN0YXRlKHRhcmdldFN0YXRlKTtcbiAgfSk7XG5cbiAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uIChtdXRhdGlvbiwgc3RhdGUpIHtcbiAgICBkZXZ0b29sSG9vay5lbWl0KCd2dWV4Om11dGF0aW9uJywgbXV0YXRpb24sIHN0YXRlKTtcbiAgfSwgeyBwcmVwZW5kOiB0cnVlIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZUFjdGlvbihmdW5jdGlvbiAoYWN0aW9uLCBzdGF0ZSkge1xuICAgIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6YWN0aW9uJywgYWN0aW9uLCBzdGF0ZSk7XG4gIH0sIHsgcHJlcGVuZDogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBwYXNzIHRoZSB0ZXN0XG4gKiBieSBzZWNvbmQgYXJndW1lbnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cbi8qKlxuICogZm9yRWFjaCBmb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWx1ZSAob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4ob2JqW2tleV0sIGtleSk7IH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1zZykge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZXhdIFwiICsgbXNnKSkgfVxufVxuXG5mdW5jdGlvbiBwYXJ0aWFsIChmbiwgYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZuKGFyZylcbiAgfVxufVxuXG4vLyBCYXNlIGRhdGEgc3RydWN0IGZvciBzdG9yZSdzIG1vZHVsZSwgcGFja2FnZSB3aXRoIHNvbWUgYXR0cmlidXRlIGFuZCBtZXRob2RcbnZhciBNb2R1bGUgPSBmdW5jdGlvbiBNb2R1bGUgKHJhd01vZHVsZSwgcnVudGltZSkge1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICAvLyBTdG9yZSBzb21lIGNoaWxkcmVuIGl0ZW1cbiAgdGhpcy5fY2hpbGRyZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBTdG9yZSB0aGUgb3JpZ2luIG1vZHVsZSBvYmplY3Qgd2hpY2ggcGFzc2VkIGJ5IHByb2dyYW1tZXJcbiAgdGhpcy5fcmF3TW9kdWxlID0gcmF3TW9kdWxlO1xuICB2YXIgcmF3U3RhdGUgPSByYXdNb2R1bGUuc3RhdGU7XG5cbiAgLy8gU3RvcmUgdGhlIG9yaWdpbiBtb2R1bGUncyBzdGF0ZVxuICB0aGlzLnN0YXRlID0gKHR5cGVvZiByYXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHJhd1N0YXRlKCkgOiByYXdTdGF0ZSkgfHwge307XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBuYW1lc3BhY2VkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5uYW1lc3BhY2VkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWRcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiBhZGRDaGlsZCAoa2V5LCBtb2R1bGUpIHtcbiAgdGhpcy5fY2hpbGRyZW5ba2V5XSA9IG1vZHVsZTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiByZW1vdmVDaGlsZCAoa2V5KSB7XG4gIGRlbGV0ZSB0aGlzLl9jaGlsZHJlbltrZXldO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2tleV1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuaGFzQ2hpbGQgPSBmdW5jdGlvbiBoYXNDaGlsZCAoa2V5KSB7XG4gIHJldHVybiBrZXkgaW4gdGhpcy5fY2hpbGRyZW5cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChyYXdNb2R1bGUpIHtcbiAgdGhpcy5fcmF3TW9kdWxlLm5hbWVzcGFjZWQgPSByYXdNb2R1bGUubmFtZXNwYWNlZDtcbiAgaWYgKHJhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMgPSByYXdNb2R1bGUuYWN0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMgPSByYXdNb2R1bGUubXV0YXRpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzID0gcmF3TW9kdWxlLmdldHRlcnM7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gZm9yRWFjaENoaWxkIChmbikge1xuICBmb3JFYWNoVmFsdWUodGhpcy5fY2hpbGRyZW4sIGZuKTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEdldHRlciA9IGZ1bmN0aW9uIGZvckVhY2hHZXR0ZXIgKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hBY3Rpb24gPSBmdW5jdGlvbiBmb3JFYWNoQWN0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmFjdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoTXV0YXRpb24gPSBmdW5jdGlvbiBmb3JFYWNoTXV0YXRpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMsIGZuKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIE1vZHVsZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgTW9kdWxlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIE1vZHVsZUNvbGxlY3Rpb24gKHJhd1Jvb3RNb2R1bGUpIHtcbiAgLy8gcmVnaXN0ZXIgcm9vdCBtb2R1bGUgKFZ1ZXguU3RvcmUgb3B0aW9ucylcbiAgdGhpcy5yZWdpc3RlcihbXSwgcmF3Um9vdE1vZHVsZSwgZmFsc2UpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobW9kdWxlLCBrZXkpIHtcbiAgICByZXR1cm4gbW9kdWxlLmdldENoaWxkKGtleSlcbiAgfSwgdGhpcy5yb290KVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TmFtZXNwYWNlID0gZnVuY3Rpb24gZ2V0TmFtZXNwYWNlIChwYXRoKSB7XG4gIHZhciBtb2R1bGUgPSB0aGlzLnJvb3Q7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBrZXkpIHtcbiAgICBtb2R1bGUgPSBtb2R1bGUuZ2V0Q2hpbGQoa2V5KTtcbiAgICByZXR1cm4gbmFtZXNwYWNlICsgKG1vZHVsZS5uYW1lc3BhY2VkID8ga2V5ICsgJy8nIDogJycpXG4gIH0sICcnKVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlJDEgKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdXBkYXRlKFtdLCB0aGlzLnJvb3QsIHJhd1Jvb3RNb2R1bGUpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlciAocGF0aCwgcmF3TW9kdWxlLCBydW50aW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBydW50aW1lID09PSB2b2lkIDAgKSBydW50aW1lID0gdHJ1ZTtcblxuICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIHJhd01vZHVsZSk7XG4gIH1cblxuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnJvb3QgPSBuZXdNb2R1bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3Q2hpbGRNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKHBhdGguY29uY2F0KGtleSksIHJhd0NoaWxkTW9kdWxlLCBydW50aW1lKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgaWYgKCFwYXJlbnQuZ2V0Q2hpbGQoa2V5KS5ydW50aW1lKSB7IHJldHVybiB9XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGtleSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5pc1JlZ2lzdGVyZWQgPSBmdW5jdGlvbiBpc1JlZ2lzdGVyZWQgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICByZXR1cm4gcGFyZW50Lmhhc0NoaWxkKGtleSlcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZSAocGF0aCwgdGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIGFzc2VydFJhd01vZHVsZShwYXRoLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRhcmdldCBtb2R1bGVcbiAgdGFyZ2V0TW9kdWxlLnVwZGF0ZShuZXdNb2R1bGUpO1xuXG4gIC8vIHVwZGF0ZSBuZXN0ZWQgbW9kdWxlc1xuICBpZiAobmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICAgIGlmICghdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiW3Z1ZXhdIHRyeWluZyB0byBhZGQgYSBuZXcgbW9kdWxlICdcIiArIGtleSArIFwiJyBvbiBob3QgcmVsb2FkaW5nLCBcIiArXG4gICAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShcbiAgICAgICAgcGF0aC5jb25jYXQoa2V5KSxcbiAgICAgICAgdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSksXG4gICAgICAgIG5ld01vZHVsZS5tb2R1bGVzW2tleV1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBmdW5jdGlvbkFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbidcbn07XG5cbnZhciBvYmplY3RBc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggXCJoYW5kbGVyXCIgZnVuY3Rpb24nXG59O1xuXG52YXIgYXNzZXJ0VHlwZXMgPSB7XG4gIGdldHRlcnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBtdXRhdGlvbnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBhY3Rpb25zOiBvYmplY3RBc3NlcnRcbn07XG5cbmZ1bmN0aW9uIGFzc2VydFJhd01vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIE9iamVjdC5rZXlzKGFzc2VydFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXJhd01vZHVsZVtrZXldKSB7IHJldHVybiB9XG5cbiAgICB2YXIgYXNzZXJ0T3B0aW9ucyA9IGFzc2VydFR5cGVzW2tleV07XG5cbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlW2tleV0sIGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICBhc3NlcnRPcHRpb25zLmFzc2VydCh2YWx1ZSksXG4gICAgICAgIG1ha2VBc3NlcnRpb25NZXNzYWdlKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGFzc2VydE9wdGlvbnMuZXhwZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzc2VydGlvbk1lc3NhZ2UgKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGV4cGVjdGVkKSB7XG4gIHZhciBidWYgPSBrZXkgKyBcIiBzaG91bGQgYmUgXCIgKyBleHBlY3RlZCArIFwiIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIi5cIiArIHR5cGUgKyBcIlxcXCJcIjtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgIGJ1ZiArPSBcIiBpbiBtb2R1bGUgXFxcIlwiICsgKHBhdGguam9pbignLicpKSArIFwiXFxcIlwiO1xuICB9XG4gIGJ1ZiArPSBcIiBpcyBcIiArIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpICsgXCIuXCI7XG4gIHJldHVybiBidWZcbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAvLyBBdXRvIGluc3RhbGwgaWYgaXQgaXMgbm90IGRvbmUgeWV0IGFuZCBgd2luZG93YCBoYXMgYFZ1ZWAuXG4gIC8vIFRvIGFsbG93IHVzZXJzIHRvIGF2b2lkIGF1dG8taW5zdGFsbGF0aW9uIGluIHNvbWUgY2FzZXMsXG4gIC8vIHRoaXMgY29kZSBzaG91bGQgYmUgcGxhY2VkIGhlcmUuIFNlZSAjNzMxXG4gIGlmICghVnVlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpO1xuICB9XG5cbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpO1xuICAgIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIFN0b3JlLCBcInN0b3JlIG11c3QgYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBvcGVyYXRvci5cIik7XG4gIH1cblxuICB2YXIgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2luczsgaWYgKCBwbHVnaW5zID09PSB2b2lkIDAgKSBwbHVnaW5zID0gW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDsgaWYgKCBzdHJpY3QgPT09IHZvaWQgMCApIHN0cmljdCA9IGZhbHNlO1xuXG4gIC8vIHN0b3JlIGludGVybmFsIHN0YXRlXG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBmYWxzZTtcbiAgdGhpcy5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbW9kdWxlcyA9IG5ldyBNb2R1bGVDb2xsZWN0aW9uKG9wdGlvbnMpO1xuICB0aGlzLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fd2F0Y2hlclZNID0gbmV3IFZ1ZSgpO1xuICB0aGlzLl9tYWtlTG9jYWxHZXR0ZXJzQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vIGJpbmQgY29tbWl0IGFuZCBkaXNwYXRjaCB0byBzZWxmXG4gIHZhciBzdG9yZSA9IHRoaXM7XG4gIHZhciByZWYgPSB0aGlzO1xuICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG4gIHZhciBjb21taXQgPSByZWYuY29tbWl0O1xuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gYm91bmREaXNwYXRjaCAodHlwZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBkaXNwYXRjaC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkKVxuICB9O1xuICB0aGlzLmNvbW1pdCA9IGZ1bmN0aW9uIGJvdW5kQ29tbWl0ICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbW1pdC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkLCBvcHRpb25zKVxuICB9O1xuXG4gIC8vIHN0cmljdCBtb2RlXG4gIHRoaXMuc3RyaWN0ID0gc3RyaWN0O1xuXG4gIHZhciBzdGF0ZSA9IHRoaXMuX21vZHVsZXMucm9vdC5zdGF0ZTtcblxuICAvLyBpbml0IHJvb3QgbW9kdWxlLlxuICAvLyB0aGlzIGFsc28gcmVjdXJzaXZlbHkgcmVnaXN0ZXJzIGFsbCBzdWItbW9kdWxlc1xuICAvLyBhbmQgY29sbGVjdHMgYWxsIG1vZHVsZSBnZXR0ZXJzIGluc2lkZSB0aGlzLl93cmFwcGVkR2V0dGVyc1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHN0YXRlLCBbXSwgdGhpcy5fbW9kdWxlcy5yb290KTtcblxuICAvLyBpbml0aWFsaXplIHRoZSBzdG9yZSB2bSwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFjdGl2aXR5XG4gIC8vIChhbHNvIHJlZ2lzdGVycyBfd3JhcHBlZEdldHRlcnMgYXMgY29tcHV0ZWQgcHJvcGVydGllcylcbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHN0YXRlKTtcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBwbHVnaW4odGhpcyQxKTsgfSk7XG5cbiAgdmFyIHVzZURldnRvb2xzID0gb3B0aW9ucy5kZXZ0b29scyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5kZXZ0b29scyA6IFZ1ZS5jb25maWcuZGV2dG9vbHM7XG4gIGlmICh1c2VEZXZ0b29scykge1xuICAgIGRldnRvb2xQbHVnaW4odGhpcyk7XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgc3RhdGU6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIGFzc2VydChmYWxzZSwgXCJ1c2Ugc3RvcmUucmVwbGFjZVN0YXRlKCkgdG8gZXhwbGljaXQgcmVwbGFjZSBzdG9yZSBzdGF0ZS5cIik7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiBjb21taXQgKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgY29tbWl0XG4gIHZhciByZWYgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcbiAgICB2YXIgb3B0aW9ucyA9IHJlZi5vcHRpb25zO1xuXG4gIHZhciBtdXRhdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9tdXRhdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcblxuICB0aGlzLl9zdWJzY3JpYmVyc1xuICAgIC5zbGljZSgpIC8vIHNoYWxsb3cgY29weSB0byBwcmV2ZW50IGl0ZXJhdG9yIGludmFsaWRhdGlvbiBpZiBzdWJzY3JpYmVyIHN5bmNocm9ub3VzbHkgY2FsbHMgdW5zdWJzY3JpYmVcbiAgICAuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChcbiAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiZcbiAgICBvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50XG4gICkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW3Z1ZXhdIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSArIFwiLiBTaWxlbnQgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIFwiICtcbiAgICAgICdVc2UgdGhlIGZpbHRlciBmdW5jdGlvbmFsaXR5IGluIHRoZSB2dWUtZGV2dG9vbHMnXG4gICAgKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKF90eXBlLCBfcGF5bG9hZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBkaXNwYXRjaFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcblxuICB2YXIgYWN0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX2FjdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzXG4gICAgICAuc2xpY2UoKSAvLyBzaGFsbG93IGNvcHkgdG8gcHJldmVudCBpdGVyYXRvciBpbnZhbGlkYXRpb24gaWYgc3Vic2NyaWJlciBzeW5jaHJvbm91c2x5IGNhbGxzIHVuc3Vic2NyaWJlXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5iZWZvcmU7IH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIuYmVmb3JlKGFjdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbdnVleF0gZXJyb3IgaW4gYmVmb3JlIGFjdGlvbiBzdWJzY3JpYmVyczogXCIpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gZW50cnkubGVuZ3RoID4gMVxuICAgID8gUHJvbWlzZS5hbGwoZW50cnkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyKHBheWxvYWQpOyB9KSlcbiAgICA6IGVudHJ5WzBdKHBheWxvYWQpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcyQxLl9hY3Rpb25TdWJzY3JpYmVyc1xuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLmFmdGVyOyB9KVxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5hZnRlcihhY3Rpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW3Z1ZXhdIGVycm9yIGluIGFmdGVyIGFjdGlvbiBzdWJzY3JpYmVyczogXCIpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc29sdmUocmVzKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMkMS5fYWN0aW9uU3Vic2NyaWJlcnNcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5lcnJvcjsgfSlcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIuZXJyb3IoYWN0aW9uLCB0aGlzJDEuc3RhdGUsIGVycm9yKTsgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbdnVleF0gZXJyb3IgaW4gZXJyb3IgYWN0aW9uIHN1YnNjcmliZXJzOiBcIik7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9KTtcbiAgfSlcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUgKGZuLCBvcHRpb25zKSB7XG4gIHJldHVybiBnZW5lcmljU3Vic2NyaWJlKGZuLCB0aGlzLl9zdWJzY3JpYmVycywgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmVBY3Rpb24gPSBmdW5jdGlvbiBzdWJzY3JpYmVBY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gIHZhciBzdWJzID0gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8geyBiZWZvcmU6IGZuIH0gOiBmbjtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoc3VicywgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMsIG9wdGlvbnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiB3YXRjaCAoZ2V0dGVyLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICBhc3NlcnQodHlwZW9mIGdldHRlciA9PT0gJ2Z1bmN0aW9uJywgXCJzdG9yZS53YXRjaCBvbmx5IGFjY2VwdHMgYSBmdW5jdGlvbi5cIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3dhdGNoZXJWTS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0dGVyKHRoaXMkMS5zdGF0ZSwgdGhpcyQxLmdldHRlcnMpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5fZGF0YS4kJHN0YXRlID0gc3RhdGU7XG4gIH0pO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgICBhc3NlcnQocGF0aC5sZW5ndGggPiAwLCAnY2Fubm90IHJlZ2lzdGVyIHRoZSByb290IG1vZHVsZSBieSB1c2luZyByZWdpc3Rlck1vZHVsZS4nKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMucmVnaXN0ZXIocGF0aCwgcmF3TW9kdWxlKTtcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCB0aGlzLnN0YXRlLCBwYXRoLCB0aGlzLl9tb2R1bGVzLmdldChwYXRoKSwgb3B0aW9ucy5wcmVzZXJ2ZVN0YXRlKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB9XG5cbiAgdGhpcy5fbW9kdWxlcy51bnJlZ2lzdGVyKHBhdGgpO1xuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZSh0aGlzJDEuc3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBWdWUuZGVsZXRlKHBhcmVudFN0YXRlLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0pO1xuICB9KTtcbiAgcmVzZXRTdG9yZSh0aGlzKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5oYXNNb2R1bGUgPSBmdW5jdGlvbiBoYXNNb2R1bGUgKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX21vZHVsZXMuaXNSZWdpc3RlcmVkKHBhdGgpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuaG90VXBkYXRlID0gZnVuY3Rpb24gaG90VXBkYXRlIChuZXdPcHRpb25zKSB7XG4gIHRoaXMuX21vZHVsZXMudXBkYXRlKG5ld09wdGlvbnMpO1xuICByZXNldFN0b3JlKHRoaXMsIHRydWUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLl93aXRoQ29tbWl0ID0gZnVuY3Rpb24gX3dpdGhDb21taXQgKGZuKSB7XG4gIHZhciBjb21taXR0aW5nID0gdGhpcy5fY29tbWl0dGluZztcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWU7XG4gIGZuKCk7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBjb21taXR0aW5nO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxuZnVuY3Rpb24gZ2VuZXJpY1N1YnNjcmliZSAoZm4sIHN1YnMsIG9wdGlvbnMpIHtcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLnByZXBlbmRcbiAgICAgID8gc3Vicy51bnNoaWZ0KGZuKVxuICAgICAgOiBzdWJzLnB1c2goZm4pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBzdWJzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHN1YnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlIChzdG9yZSwgaG90KSB7XG4gIHN0b3JlLl9hY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gIC8vIGluaXQgYWxsIG1vZHVsZXNcbiAgaW5zdGFsbE1vZHVsZShzdG9yZSwgc3RhdGUsIFtdLCBzdG9yZS5fbW9kdWxlcy5yb290LCB0cnVlKTtcbiAgLy8gcmVzZXQgdm1cbiAgcmVzZXRTdG9yZVZNKHN0b3JlLCBzdGF0ZSwgaG90KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZVZNIChzdG9yZSwgc3RhdGUsIGhvdCkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm07XG5cbiAgLy8gYmluZCBzdG9yZSBwdWJsaWMgZ2V0dGVyc1xuICBzdG9yZS5nZXR0ZXJzID0ge307XG4gIC8vIHJlc2V0IGxvY2FsIGdldHRlcnMgY2FjaGVcbiAgc3RvcmUuX21ha2VMb2NhbEdldHRlcnNDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciB3cmFwcGVkR2V0dGVycyA9IHN0b3JlLl93cmFwcGVkR2V0dGVycztcbiAgdmFyIGNvbXB1dGVkID0ge307XG4gIGZvckVhY2hWYWx1ZSh3cmFwcGVkR2V0dGVycywgZnVuY3Rpb24gKGZuLCBrZXkpIHtcbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICAvLyBkaXJlY3QgaW5saW5lIGZ1bmN0aW9uIHVzZSB3aWxsIGxlYWQgdG8gY2xvc3VyZSBwcmVzZXJ2aW5nIG9sZFZtLlxuICAgIC8vIHVzaW5nIHBhcnRpYWwgdG8gcmV0dXJuIGZ1bmN0aW9uIHdpdGggb25seSBhcmd1bWVudHMgcHJlc2VydmVkIGluIGNsb3N1cmUgZW52aXJvbm1lbnQuXG4gICAgY29tcHV0ZWRba2V5XSA9IHBhcnRpYWwoZm4sIHN0b3JlKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RvcmUuZ2V0dGVycywga2V5LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLl92bVtrZXldOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSAvLyBmb3IgbG9jYWwgZ2V0dGVyc1xuICAgIH0pO1xuICB9KTtcblxuICAvLyB1c2UgYSBWdWUgaW5zdGFuY2UgdG8gc3RvcmUgdGhlIHN0YXRlIHRyZWVcbiAgLy8gc3VwcHJlc3Mgd2FybmluZ3MganVzdCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBhZGRlZFxuICAvLyBzb21lIGZ1bmt5IGdsb2JhbCBtaXhpbnNcbiAgdmFyIHNpbGVudCA9IFZ1ZS5jb25maWcuc2lsZW50O1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHRydWU7XG4gIHN0b3JlLl92bSA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICQkc3RhdGU6IHN0YXRlXG4gICAgfSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWRcbiAgfSk7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gc2lsZW50O1xuXG4gIC8vIGVuYWJsZSBzdHJpY3QgbW9kZSBmb3IgbmV3IHZtXG4gIGlmIChzdG9yZS5zdHJpY3QpIHtcbiAgICBlbmFibGVTdHJpY3RNb2RlKHN0b3JlKTtcbiAgfVxuXG4gIGlmIChvbGRWbSkge1xuICAgIGlmIChob3QpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZXMgaW4gYWxsIHN1YnNjcmliZWQgd2F0Y2hlcnNcbiAgICAgIC8vIHRvIGZvcmNlIGdldHRlciByZS1ldmFsdWF0aW9uIGZvciBob3QgcmVsb2FkaW5nLlxuICAgICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvbGRWbS5fZGF0YS4kJHN0YXRlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gb2xkVm0uJGRlc3Ryb3koKTsgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbE1vZHVsZSAoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aCwgbW9kdWxlLCBob3QpIHtcbiAgdmFyIGlzUm9vdCA9ICFwYXRoLmxlbmd0aDtcbiAgdmFyIG5hbWVzcGFjZSA9IHN0b3JlLl9tb2R1bGVzLmdldE5hbWVzcGFjZShwYXRoKTtcblxuICAvLyByZWdpc3RlciBpbiBuYW1lc3BhY2UgbWFwXG4gIGlmIChtb2R1bGUubmFtZXNwYWNlZCkge1xuICAgIGlmIChzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIG5hbWVzcGFjZSBcIiArIG5hbWVzcGFjZSArIFwiIGZvciB0aGUgbmFtZXNwYWNlZCBtb2R1bGUgXCIgKyAocGF0aC5qb2luKCcvJykpKSk7XG4gICAgfVxuICAgIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHZhciBtb2R1bGVOYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICAgICAgaWYgKG1vZHVsZU5hbWUgaW4gcGFyZW50U3RhdGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAoXCJbdnVleF0gc3RhdGUgZmllbGQgXFxcIlwiICsgbW9kdWxlTmFtZSArIFwiXFxcIiB3YXMgb3ZlcnJpZGRlbiBieSBhIG1vZHVsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXQgXFxcIlwiICsgKHBhdGguam9pbignLicpKSArIFwiXFxcIlwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFZ1ZS5zZXQocGFyZW50U3RhdGUsIG1vZHVsZU5hbWUsIG1vZHVsZS5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYWwgPSBtb2R1bGUuY29udGV4dCA9IG1ha2VMb2NhbENvbnRleHQoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCk7XG5cbiAgbW9kdWxlLmZvckVhY2hNdXRhdGlvbihmdW5jdGlvbiAobXV0YXRpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgbXV0YXRpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hBY3Rpb24oZnVuY3Rpb24gKGFjdGlvbiwga2V5KSB7XG4gICAgdmFyIHR5cGUgPSBhY3Rpb24ucm9vdCA/IGtleSA6IG5hbWVzcGFjZSArIGtleTtcbiAgICB2YXIgaGFuZGxlciA9IGFjdGlvbi5oYW5kbGVyIHx8IGFjdGlvbjtcbiAgICByZWdpc3RlckFjdGlvbihzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEdldHRlcihmdW5jdGlvbiAoZ2V0dGVyLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJHZXR0ZXIoc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBnZXR0ZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hDaGlsZChmdW5jdGlvbiAoY2hpbGQsIGtleSkge1xuICAgIGluc3RhbGxNb2R1bGUoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aC5jb25jYXQoa2V5KSwgY2hpbGQsIGhvdCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIG1ha2UgbG9jYWxpemVkIGRpc3BhdGNoLCBjb21taXQsIGdldHRlcnMgYW5kIHN0YXRlXG4gKiBpZiB0aGVyZSBpcyBubyBuYW1lc3BhY2UsIGp1c3QgdXNlIHJvb3Qgb25lc1xuICovXG5mdW5jdGlvbiBtYWtlTG9jYWxDb250ZXh0IChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKSB7XG4gIHZhciBub05hbWVzcGFjZSA9IG5hbWVzcGFjZSA9PT0gJyc7XG5cbiAgdmFyIGxvY2FsID0ge1xuICAgIGRpc3BhdGNoOiBub05hbWVzcGFjZSA/IHN0b3JlLmRpc3BhdGNoIDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgIXN0b3JlLl9hY3Rpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBhY3Rpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHR5cGUsIHBheWxvYWQpXG4gICAgfSxcblxuICAgIGNvbW1pdDogbm9OYW1lc3BhY2UgPyBzdG9yZS5jb21taXQgOiBmdW5jdGlvbiAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgICAgdmFyIGFyZ3MgPSB1bmlmeU9iamVjdFN0eWxlKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpO1xuICAgICAgdmFyIHBheWxvYWQgPSBhcmdzLnBheWxvYWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3Mub3B0aW9ucztcbiAgICAgIHZhciB0eXBlID0gYXJncy50eXBlO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucm9vdCkge1xuICAgICAgICB0eXBlID0gbmFtZXNwYWNlICsgdHlwZTtcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiAhc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIGlmICghc3RvcmUuX21ha2VMb2NhbEdldHRlcnNDYWNoZVtuYW1lc3BhY2VdKSB7XG4gICAgdmFyIGdldHRlcnNQcm94eSA9IHt9O1xuICAgIHZhciBzcGxpdFBvcyA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gICAgT2JqZWN0LmtleXMoc3RvcmUuZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICAgIGlmICh0eXBlLnNsaWNlKDAsIHNwbGl0UG9zKSAhPT0gbmFtZXNwYWNlKSB7IHJldHVybiB9XG5cbiAgICAgIC8vIGV4dHJhY3QgbG9jYWwgZ2V0dGVyIHR5cGVcbiAgICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgICAgLy8gQWRkIGEgcG9ydCB0byB0aGUgZ2V0dGVycyBwcm94eS5cbiAgICAgIC8vIERlZmluZSBhcyBnZXR0ZXIgcHJvcGVydHkgYmVjYXVzZVxuICAgICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdldHRlcnNQcm94eSwgbG9jYWxUeXBlLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyc1t0eXBlXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc3RvcmUuX21ha2VMb2NhbEdldHRlcnNDYWNoZVtuYW1lc3BhY2VdID0gZ2V0dGVyc1Byb3h5O1xuICB9XG5cbiAgcmV0dXJuIHN0b3JlLl9tYWtlTG9jYWxHZXR0ZXJzQ2FjaGVbbmFtZXNwYWNlXVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck11dGF0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX211dGF0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX211dGF0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkTXV0YXRpb25IYW5kbGVyIChwYXlsb2FkKSB7XG4gICAgaGFuZGxlci5jYWxsKHN0b3JlLCBsb2NhbC5zdGF0ZSwgcGF5bG9hZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckFjdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9hY3Rpb25zW3R5cGVdIHx8IChzdG9yZS5fYWN0aW9uc1t0eXBlXSA9IFtdKTtcbiAgZW50cnkucHVzaChmdW5jdGlvbiB3cmFwcGVkQWN0aW9uSGFuZGxlciAocGF5bG9hZCkge1xuICAgIHZhciByZXMgPSBoYW5kbGVyLmNhbGwoc3RvcmUsIHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQpO1xuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcyA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH1cbiAgICBpZiAoc3RvcmUuX2RldnRvb2xIb29rKSB7XG4gICAgICByZXR1cm4gcmVzLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgc3RvcmUuX2RldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6ZXJyb3InLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckdldHRlciAoc3RvcmUsIHR5cGUsIHJhd0dldHRlciwgbG9jYWwpIHtcbiAgaWYgKHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSkge1xuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIGR1cGxpY2F0ZSBnZXR0ZXIga2V5OiBcIiArIHR5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzW3R5cGVdID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICByZXR1cm4gcmF3R2V0dGVyKFxuICAgICAgbG9jYWwuc3RhdGUsIC8vIGxvY2FsIHN0YXRlXG4gICAgICBsb2NhbC5nZXR0ZXJzLCAvLyBsb2NhbCBnZXR0ZXJzXG4gICAgICBzdG9yZS5zdGF0ZSwgLy8gcm9vdCBzdGF0ZVxuICAgICAgc3RvcmUuZ2V0dGVycyAvLyByb290IGdldHRlcnNcbiAgICApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0cmljdE1vZGUgKHN0b3JlKSB7XG4gIHN0b3JlLl92bS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YS4kJHN0YXRlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiZG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZVtrZXldOyB9LCBzdGF0ZSlcbn1cblxuZnVuY3Rpb24gdW5pZnlPYmplY3RTdHlsZSAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICBpZiAoaXNPYmplY3QodHlwZSkgJiYgdHlwZS50eXBlKSB7XG4gICAgb3B0aW9ucyA9IHBheWxvYWQ7XG4gICAgcGF5bG9hZCA9IHR5cGU7XG4gICAgdHlwZSA9IHR5cGUudHlwZTtcbiAgfVxuXG4gIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJleHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlICYmIF9WdWUgPT09IFZ1ZSkge1xuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbdnVleF0gYWxyZWFkeSBpbnN0YWxsZWQuIFZ1ZS51c2UoVnVleCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgVnVlID0gX1Z1ZTtcbiAgYXBwbHlNaXhpbihWdWUpO1xufVxuXG4vKipcbiAqIFJlZHVjZSB0aGUgY29kZSB3aGljaCB3cml0dGVuIGluIFZ1ZS5qcyBmb3IgZ2V0dGluZyB0aGUgc3RhdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZV0gLSBNb2R1bGUncyBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBzdGF0ZXMgIyBPYmplY3QncyBpdGVtIGNhbiBiZSBhIGZ1bmN0aW9uIHdoaWNoIGFjY2VwdCBzdGF0ZSBhbmQgZ2V0dGVycyBmb3IgcGFyYW0sIHlvdSBjYW4gZG8gc29tZXRoaW5nIGZvciBzdGF0ZSBhbmQgZ2V0dGVycyBpbiBpdC5cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICovXG52YXIgbWFwU3RhdGUgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgc3RhdGVzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiAhaXNWYWxpZE1hcChzdGF0ZXMpKSB7XG4gICAgY29uc29sZS5lcnJvcignW3Z1ZXhdIG1hcFN0YXRlOiBtYXBwZXIgcGFyYW1ldGVyIG11c3QgYmUgZWl0aGVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCcpO1xuICB9XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8qKlxuICogUmVkdWNlIHRoZSBjb2RlIHdoaWNoIHdyaXR0ZW4gaW4gVnVlLmpzIGZvciBjb21taXR0aW5nIHRoZSBtdXRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2VdIC0gTW9kdWxlJ3MgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gbXV0YXRpb25zICMgT2JqZWN0J3MgaXRlbSBjYW4gYmUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHQgYGNvbW1pdGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IHBhcmFtLCBpdCBjYW4gYWNjZXB0IGFudGhvciBwYXJhbXMuIFlvdSBjYW4gY29tbWl0IG11dGF0aW9uIGFuZCBkbyBhbnkgb3RoZXIgdGhpbmdzIGluIHRoaXMgZnVuY3Rpb24uIHNwZWNpYWxseSwgWW91IG5lZWQgdG8gcGFzcyBhbnRob3IgcGFyYW1zIGZyb20gdGhlIG1hcHBlZCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIG1hcE11dGF0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBtdXRhdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFpc1ZhbGlkTWFwKG11dGF0aW9ucykpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbdnVleF0gbWFwTXV0YXRpb25zOiBtYXBwZXIgcGFyYW1ldGVyIG11c3QgYmUgZWl0aGVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCcpO1xuICB9XG4gIG5vcm1hbGl6ZU1hcChtdXRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRNdXRhdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgLy8gR2V0IHRoZSBjb21taXQgbWV0aG9kIGZyb20gc3RvcmVcbiAgICAgIHZhciBjb21taXQgPSB0aGlzLiRzdG9yZS5jb21taXQ7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcE11dGF0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29tbWl0ID0gbW9kdWxlLmNvbnRleHQuY29tbWl0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuYXBwbHkodGhpcywgW2NvbW1pdF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGNvbW1pdC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLyoqXG4gKiBSZWR1Y2UgdGhlIGNvZGUgd2hpY2ggd3JpdHRlbiBpbiBWdWUuanMgZm9yIGdldHRpbmcgdGhlIGdldHRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZXNwYWNlXSAtIE1vZHVsZSdzIG5hbWVzcGFjZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGdldHRlcnNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIG1hcEdldHRlcnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgZ2V0dGVycykge1xuICB2YXIgcmVzID0ge307XG4gIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgIWlzVmFsaWRNYXAoZ2V0dGVycykpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbdnVleF0gbWFwR2V0dGVyczogbWFwcGVyIHBhcmFtZXRlciBtdXN0IGJlIGVpdGhlciBhbiBBcnJheSBvciBhbiBPYmplY3QnKTtcbiAgfVxuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICAvLyBUaGUgbmFtZXNwYWNlIGhhcyBiZWVuIG11dGF0ZWQgYnkgbm9ybWFsaXplTmFtZXNwYWNlXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkR2V0dGVyICgpIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwR2V0dGVycycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLyoqXG4gKiBSZWR1Y2UgdGhlIGNvZGUgd2hpY2ggd3JpdHRlbiBpbiBWdWUuanMgZm9yIGRpc3BhdGNoIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZXNwYWNlXSAtIE1vZHVsZSdzIG5hbWVzcGFjZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGFjdGlvbnMgIyBPYmplY3QncyBpdGVtIGNhbiBiZSBhIGZ1bmN0aW9uIHdoaWNoIGFjY2VwdCBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBwYXJhbSwgaXQgY2FuIGFjY2VwdCBhbnRob3IgcGFyYW1zLiBZb3UgY2FuIGRpc3BhdGNoIGFjdGlvbiBhbmQgZG8gYW55IG90aGVyIHRoaW5ncyBpbiB0aGlzIGZ1bmN0aW9uLiBzcGVjaWFsbHksIFlvdSBuZWVkIHRvIHBhc3MgYW50aG9yIHBhcmFtcyBmcm9tIHRoZSBtYXBwZWQgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnZhciBtYXBBY3Rpb25zID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGFjdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFpc1ZhbGlkTWFwKGFjdGlvbnMpKSB7XG4gICAgY29uc29sZS5lcnJvcignW3Z1ZXhdIG1hcEFjdGlvbnM6IG1hcHBlciBwYXJhbWV0ZXIgbXVzdCBiZSBlaXRoZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0Jyk7XG4gIH1cbiAgbm9ybWFsaXplTWFwKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRBY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIC8vIGdldCBkaXNwYXRjaCBmdW5jdGlvbiBmcm9tIHN0b3JlXG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLiRzdG9yZS5kaXNwYXRjaDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2ggPSBtb2R1bGUuY29udGV4dC5kaXNwYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtkaXNwYXRjaF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vKipcbiAqIFJlYmluZGluZyBuYW1lc3BhY2UgcGFyYW0gZm9yIG1hcFhYWCBmdW5jdGlvbiBpbiBzcGVjaWFsIHNjb3BlZCwgYW5kIHJldHVybiB0aGVtIGJ5IHNpbXBsZSBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkgeyByZXR1cm4gKHtcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSlcbn0pOyB9O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgbWFwXG4gKiBub3JtYWxpemVNYXAoWzEsIDIsIDNdKSA9PiBbIHsga2V5OiAxLCB2YWw6IDEgfSwgeyBrZXk6IDIsIHZhbDogMiB9LCB7IGtleTogMywgdmFsOiAzIH0gXVxuICogbm9ybWFsaXplTWFwKHthOiAxLCBiOiAyLCBjOiAzfSkgPT4gWyB7IGtleTogJ2EnLCB2YWw6IDEgfSwgeyBrZXk6ICdiJywgdmFsOiAyIH0sIHsga2V5OiAnYycsIHZhbDogMyB9IF1cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBtYXBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgaWYgKCFpc1ZhbGlkTWFwKG1hcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXApXG4gICAgPyBtYXAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IGtleSB9KTsgfSlcbiAgICA6IE9iamVjdC5rZXlzKG1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICh7IGtleToga2V5LCB2YWw6IG1hcFtrZXldIH0pOyB9KVxufVxuXG4vKipcbiAqIFZhbGlkYXRlIHdoZXRoZXIgZ2l2ZW4gbWFwIGlzIHZhbGlkIG9yIG5vdFxuICogQHBhcmFtIHsqfSBtYXBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRNYXAgKG1hcCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXApIHx8IGlzT2JqZWN0KG1hcClcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiBleHBlY3QgdHdvIHBhcmFtIGNvbnRhaW5zIG5hbWVzcGFjZSBhbmQgbWFwLiBpdCB3aWxsIG5vcm1hbGl6ZSB0aGUgbmFtZXNwYWNlIGFuZCB0aGVuIHRoZSBwYXJhbSdzIGZ1bmN0aW9uIHdpbGwgaGFuZGxlIHRoZSBuZXcgbmFtZXNwYWNlIGFuZCB0aGUgbWFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lc3BhY2UgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobmFtZXNwYWNlLCBtYXApIHtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcCA9IG5hbWVzcGFjZTtcbiAgICAgIG5hbWVzcGFjZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlLmNoYXJBdChuYW1lc3BhY2UubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgbmFtZXNwYWNlICs9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGZuKG5hbWVzcGFjZSwgbWFwKVxuICB9XG59XG5cbi8qKlxuICogU2VhcmNoIGEgc3BlY2lhbCBtb2R1bGUgZnJvbSBzdG9yZSBieSBuYW1lc3BhY2UuIGlmIG1vZHVsZSBub3QgZXhpc3QsIHByaW50IGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RvcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWxwZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiAhbW9kdWxlKSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gbW9kdWxlIG5hbWVzcGFjZSBub3QgZm91bmQgaW4gXCIgKyBoZWxwZXIgKyBcIigpOiBcIiArIG5hbWVzcGFjZSkpO1xuICB9XG4gIHJldHVybiBtb2R1bGVcbn1cblxudmFyIGluZGV4ID0ge1xuICBTdG9yZTogU3RvcmUsXG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIHZlcnNpb246ICczLjQuMCcsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMsXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMsXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnMsXG4gIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzOiBjcmVhdGVOYW1lc3BhY2VkSGVscGVyc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5leHBvcnQgeyBTdG9yZSwgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMsIGluc3RhbGwsIG1hcEFjdGlvbnMsIG1hcEdldHRlcnMsIG1hcE11dGF0aW9ucywgbWFwU3RhdGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=