function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******/(function () {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"../node_modules/base64-js/index.js": (
    /*!******************************************!*\
      !*** ../node_modules/base64-js/index.js ***!
      \******************************************/
    /***/
    function _node_modules_base64Js_indexJs(__unused_webpack_module, exports) {
      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications
      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
      function getLens(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        }

        // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42
        var validLen = b64.indexOf('=');
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }

      // base64 is 4/3 + up to two characters of the original data
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;

        // if there are placeholders, only get up to the last complete 4 chars
        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i;
        for (i = 0; i < len; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[curByte++] = tmp >> 16 & 0xFF;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[curByte++] = tmp & 0xFF;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }
        return output.join('');
      }
      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
        }
        return parts.join('');
      }

      /***/
    }),
    /***/"../node_modules/buffer/index.js": (
    /*!***************************************!*\
      !*** ../node_modules/buffer/index.js ***!
      \***************************************/
    /***/
    function _node_modules_buffer_indexJs(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      /* eslint-disable no-proto */
      var base64 = __webpack_require__(/*! base64-js */"../node_modules/base64-js/index.js");
      var ieee754 = __webpack_require__(/*! ieee754 */"../node_modules/ieee754/index.js");
      var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
      ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
      : null;
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;

      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Print warning and recommend using `buffer` v4.x which has an Object
       *               implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * We report that the browser does not support typed arrays if the are not subclassable
       * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
       * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
       * for __proto__ and has a buggy typed array implementation.
       */
      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }
      function typedArraySupport() {
        // Can typed array instances can be augmented?
        try {
          var arr = new Uint8Array(1);
          var proto = {
            foo: function foo() {
              return 42;
            }
          };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        // Return an augmented `Uint8Array` instance
        var buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }

      /**
       * The Buffer constructor returns instances of `Uint8Array` that have their
       * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
       * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
       * and the `Uint8Array` methods. Square bracket notation works as expected -- it
       * returns a single octet.
       *
       * The `Uint8Array` prototype remains unmodified.
       */

      function Buffer(arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192; // not used by this implementation

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === 'number') {
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }
        var valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer.from(valueOf, encodingOrOffset, length);
        }
        var b = fromObject(value);
        if (b) return b;
        if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
          return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
        }
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
      }

      /**
       * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
       * if value is a number.
       * Buffer.from(str[, encoding])
       * Buffer.from(array)
       * Buffer.from(buffer)
       * Buffer.from(arrayBuffer[, byteOffset[, length]])
       **/
      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };

      // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
      // https://github.com/feross/buffer/pull/148
      Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer, Uint8Array);
      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== undefined) {
          // Only pay attention to encoding if it's a string. This
          // prevents accidentally sending in a number that would
          // be interpreted as a start offset.
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }

      /**
       * Creates a new filled Buffer instance.
       * alloc(size[, fill[, encoding]])
       **/
      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }

      /**
       * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
       * */
      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };
      /**
       * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
       */
      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }
        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);
        var actual = buf.write(string, encoding);
        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);
        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          var copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        var buf;
        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }

        // Return an augmented `Uint8Array` instance
        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== undefined) {
          if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          // eslint-disable-line eqeqeq
          length = 0;
        }
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
      };
      Buffer.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;
          default:
            return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer.alloc(0);
        }
        var i;
        if (length === undefined) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              Buffer.from(buf).copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(buffer, buf, pos);
            }
          } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== 'string') {
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + _typeof(string));
        }
        var len = string.length;
        var mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;

        // Use a for loop to avoid recursion
        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;
            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;
            case 'hex':
              return len >>> 1;
            case 'base64':
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
              }
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;

        // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.

        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
        if (start === undefined || start < 0) {
          start = 0;
        }
        // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.
        if (start > this.length) {
          return '';
        }
        if (end === undefined || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return '';
        }

        // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return '';
        }
        if (!encoding) encoding = 'utf8';
        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);
            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);
            case 'ascii':
              return asciiSlice(this, start, end);
            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);
            case 'base64':
              return base64Slice(this, start, end);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      }

      // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
      // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
      // reliably in a browserify context because there could be multiple different
      // copies of the 'buffer' package in use. This method works even for Buffer
      // instances that were created from another copy of the `buffer` package.
      // See: https://github.com/feross/buffer/issues/154
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }
        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.toLocaleString = Buffer.prototype.toString;
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };
      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
        if (this.length > max) str += ' ... ';
        return '<Buffer ' + str + '>';
      };
      if (customInspectSymbol) {
        Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
      }
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer.from(target, target.offset, target.byteLength);
        }
        if (!Buffer.isBuffer(target)) {
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + _typeof(target));
        }
        if (start === undefined) {
          start = 0;
        }
        if (end === undefined) {
          end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
          thisStart = 0;
        }
        if (thisEnd === undefined) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
      // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
      //
      // Arguments:
      // - buffer - a Buffer to search
      // - val - a string, Buffer, or number
      // - byteOffset - an index into `buffer`; will be clamped to an int32
      // - encoding - an optional encoding, relevant is val is a string
      // - dir - true for indexOf, false for lastIndexOf
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1;

        // Normalize byteOffset
        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }
        byteOffset = +byteOffset; // Coerce to Number.
        if (numberIsNaN(byteOffset)) {
          // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
          byteOffset = dir ? 0 : buffer.length - 1;
        }

        // Normalize byteOffset: negative offsets start from the end of the buffer
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        }

        // Normalize val
        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        }

        // Finally, search either indexOf (if dir is true) or lastIndexOf
        if (Buffer.isBuffer(val)) {
          // Special case: looking for empty string/buffer always fails
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF; // Search for a byte value [0-255]
          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError('val must be string, number or Buffer');
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();
          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        var strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0;
          // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0;
          // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }
        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }
        if (!encoding) encoding = 'utf8';
        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);
            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);
            case 'ascii':
            case 'latin1':
            case 'binary':
              return asciiWrite(this, string, offset, length);
            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }

      // Based on http://stackoverflow.com/a/22747272/680742, the browser with
      // the lowest limit is Chrome, with 0x10000 args.
      // We go 1 magnitude less, for safety
      var MAX_ARGUMENTS_LENGTH = 0x1000;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
        }

        // Decode in chunks to avoid "call stack size exceeded".
        var res = '';
        var i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        var out = '';
        for (var i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = '';
        // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
        for (var i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        var newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        Object.setPrototypeOf(newBuf, Buffer.prototype);
        return newBuf;
      };

      /*
       * Need to make sure that buffer isn't trying to write out of bounds.
       */
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }
      Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }
        return val;
      };
      Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };
      Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }
        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }
      Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };
      Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };
      Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };
      Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };

      // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;

        // Copy 0 bytes; we're done
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;

        // Fatal error conditions
        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }
        if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
        if (end < 0) throw new RangeError('sourceEnd out of bounds');

        // Are we oob?
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        var len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
          // Use built-in when available, missing from IE11
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }
        return len;
      };

      // Usage:
      //    buffer.fill(number[, offset[, end]])
      //    buffer.fill(buffer[, offset[, end]])
      //    buffer.fill(string[, offset[, end]][, encoding])
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }
          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }
          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }
          if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
              // Fast path: If `val` fits into a single byte, use that numeric value.
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        } else if (typeof val === 'boolean') {
          val = Number(val);
        }

        // Invalid ranges are not set to a default, so can range check early.
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;
        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
          var len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };

      // HELPER FUNCTIONS
      // ================

      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        // Node takes equal signs as end of the Base64 encoding
        str = str.split('=')[0];
        // Node strips out invalid characters like \n and \t from the string, base64-js does not
        str = str.trim().replace(INVALID_BASE64_RE, '');
        // Node converts strings with length < 2 to ''
        if (str.length < 2) return '';
        // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
        while (str.length % 4 !== 0) {
          str = str + '=';
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);

          // is surrogate component
          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              }

              // valid lead
              leadSurrogate = codePoint;
              continue;
            }

            // 2 leads in a row
            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            }

            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }
          leadSurrogate = null;

          // encode utf8
          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }

      // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
      // the `instanceof` check but they should be treated as of that type.
      // See: https://github.com/feross/buffer/issues/166
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        // For IE11 support
        return obj !== obj; // eslint-disable-line no-self-compare
      }

      // Create lookup table for `toString('hex')`
      // See: https://github.com/feross/buffer/issues/219
      var hexSliceLookupTable = function () {
        var alphabet = '0123456789abcdef';
        var table = new Array(256);
        for (var i = 0; i < 16; ++i) {
          var i16 = i * 16;
          for (var j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();

      /***/
    }),
    /***/"../node_modules/es6-shim/es6-shim.js": (
    /*!********************************************!*\
      !*** ../node_modules/es6-shim/es6-shim.js ***!
      \********************************************/
    /***/
    function _node_modules_es6Shim_es6ShimJs(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                         * https://github.com/paulmillr/es6-shim
                                                                         * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
                                                                         *   and contributors,  MIT License
                                                                         * es6-shim: v0.35.4
                                                                         * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
                                                                         * Details and documentation:
                                                                         * https://github.com/paulmillr/es6-shim/
                                                                         */

      // UMD (Universal Module Definition)
      // see https://github.com/umdjs/umd/blob/master/returnExports.js
      (function (root, factory) {
        /*global define */
        if (true) {
          // AMD. Register as an anonymous module.
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(this, function () {
        'use strict';

        var _apply = Function.call.bind(Function.apply);
        var _call = Function.call.bind(Function.call);
        var isArray = Array.isArray;
        var keys = Object.keys;
        var not = function notThunker(func) {
          return function notThunk() {
            return !_apply(func, this, arguments);
          };
        };
        var throwsError = function throwsError(func) {
          try {
            func();
            return false;
          } catch (e) {
            return true;
          }
        };
        var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
          try {
            return func();
          } catch (e) {
            return false;
          }
        };
        var isCallableWithoutNew = not(throwsError);
        var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
          // if Object.defineProperty exists but throws, it's IE 8
          return !throwsError(function () {
            return Object.defineProperty({}, 'x', {
              get: function get() {}
            }); // eslint-disable-line getter-return
          });
        };
        var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
        var functionsHaveNames = function foo() {}.name === 'foo';
        var _forEach = Function.call.bind(Array.prototype.forEach);
        var _reduce = Function.call.bind(Array.prototype.reduce);
        var _filter = Function.call.bind(Array.prototype.filter);
        var _some = Function.call.bind(Array.prototype.some);
        var defineProperty = function defineProperty(object, name, value, force) {
          if (!force && name in object) {
            return;
          }
          if (supportsDescriptors) {
            Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: value
            });
          } else {
            object[name] = value;
          }
        };

        // Define configurable, writable and non-enumerable props
        // if they don’t exist.
        var defineProperties = function defineProperties(object, map, forceOverride) {
          _forEach(keys(map), function (name) {
            var method = map[name];
            defineProperty(object, name, method, !!forceOverride);
          });
        };
        var _toString = Function.call.bind(Object.prototype.toString);
        var isCallable = false ? 0 : function IsCallableFast(x) {
          return typeof x === 'function';
        };
        var Value = {
          getter: function getter(object, name, _getter) {
            if (!supportsDescriptors) {
              throw new TypeError('getters require true ES5 support');
            }
            Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              get: _getter
            });
          },
          proxy: function proxy(originalObject, key, targetObject) {
            if (!supportsDescriptors) {
              throw new TypeError('getters require true ES5 support');
            }
            var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
            Object.defineProperty(targetObject, key, {
              configurable: originalDescriptor.configurable,
              enumerable: originalDescriptor.enumerable,
              get: function getKey() {
                return originalObject[key];
              },
              set: function setKey(value) {
                originalObject[key] = value;
              }
            });
          },
          redefine: function redefine(object, property, newValue) {
            if (supportsDescriptors) {
              var descriptor = Object.getOwnPropertyDescriptor(object, property);
              descriptor.value = newValue;
              Object.defineProperty(object, property, descriptor);
            } else {
              object[property] = newValue;
            }
          },
          defineByDescriptor: function defineByDescriptor(object, property, descriptor) {
            if (supportsDescriptors) {
              Object.defineProperty(object, property, descriptor);
            } else if ('value' in descriptor) {
              object[property] = descriptor.value;
            }
          },
          preserveToString: function preserveToString(target, source) {
            if (source && isCallable(source.toString)) {
              defineProperty(target, 'toString', source.toString.bind(source), true);
            }
          }
        };

        // Simple shim for Object.create on ES3 browsers
        // (unlike real shim, no attempt to support `prototype === null`)
        var create = Object.create || function (prototype, properties) {
          var Prototype = function Prototype() {};
          Prototype.prototype = prototype;
          var object = new Prototype();
          if (typeof properties !== 'undefined') {
            keys(properties).forEach(function (key) {
              Value.defineByDescriptor(object, key, properties[key]);
            });
          }
          return object;
        };
        var supportsSubclassing = function supportsSubclassing(C, f) {
          if (!Object.setPrototypeOf) {
            return false; /* skip test on IE < 11 */
          }
          return valueOrFalseIfThrows(function () {
            var Sub = function Subclass(arg) {
              var o = new C(arg);
              Object.setPrototypeOf(o, Subclass.prototype);
              return o;
            };
            Object.setPrototypeOf(Sub, C);
            Sub.prototype = create(C.prototype, {
              constructor: {
                value: Sub
              }
            });
            return f(Sub);
          });
        };
        var getGlobal = function getGlobal() {
          /* global self, window */
          // the only reliable means to get the global object is
          // `Function('return this')()`
          // However, this causes CSP violations in Chrome apps.
          if (typeof self !== 'undefined') {
            return self;
          }
          if (typeof window !== 'undefined') {
            return window;
          }
          if (typeof __webpack_require__.g !== 'undefined') {
            return __webpack_require__.g;
          }
          throw new Error('unable to locate global object');
        };
        var globals = getGlobal();
        var globalIsFinite = globals.isFinite;
        var _indexOf = Function.call.bind(String.prototype.indexOf);
        var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
        var _concat = Function.call.bind(Array.prototype.concat);
        // var _sort = Function.call.bind(Array.prototype.sort);
        var _strSlice = Function.call.bind(String.prototype.slice);
        var _push = Function.call.bind(Array.prototype.push);
        var _pushApply = Function.apply.bind(Array.prototype.push);
        var _join = Function.call.bind(Array.prototype.join);
        var _shift = Function.call.bind(Array.prototype.shift);
        var _max = Math.max;
        var _min = Math.min;
        var _floor = Math.floor;
        var _abs = Math.abs;
        var _exp = Math.exp;
        var _log = Math.log;
        var _sqrt = Math.sqrt;
        var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
        var ArrayIterator; // make our implementation private
        var noop = function noop() {};
        var OrigMap = globals.Map;
        var origMapDelete = OrigMap && OrigMap.prototype['delete'];
        var origMapGet = OrigMap && OrigMap.prototype.get;
        var origMapHas = OrigMap && OrigMap.prototype.has;
        var origMapSet = OrigMap && OrigMap.prototype.set;
        var _Symbol = globals.Symbol || {};
        var symbolSpecies = _Symbol.species || '@@species';
        var numberIsNaN = Number.isNaN || function isNaN(value) {
          // NaN !== NaN, but they are identical.
          // NaNs are the only non-reflexive value, i.e., if x !== x,
          // then x is NaN.
          // isNaN is broken: it converts its argument to number, so
          // isNaN('foo') => true
          return value !== value;
        };
        var numberIsFinite = Number.isFinite || function isFinite(value) {
          return typeof value === 'number' && globalIsFinite(value);
        };
        var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
          var number = Number(value);
          if (number === 0) {
            return number;
          }
          if (numberIsNaN(number)) {
            return number;
          }
          return number < 0 ? -1 : 1;
        };
        var _log1p = function log1p(value) {
          var x = Number(value);
          if (x < -1 || numberIsNaN(x)) {
            return NaN;
          }
          if (x === 0 || x === Infinity) {
            return x;
          }
          if (x === -1) {
            return -Infinity;
          }
          return 1 + x - 1 === 0 ? x : x * (_log(1 + x) / (1 + x - 1));
        };

        // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
        // can be replaced with require('is-arguments') if we ever use a build process instead
        var isStandardArguments = function isArguments(value) {
          return _toString(value) === '[object Arguments]';
        };
        var isLegacyArguments = function isArguments(value) {
          return value !== null && _typeof(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && _toString(value) !== '[object Array]' && _toString(value.callee) === '[object Function]';
        };
        var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
        var Type = {
          primitive: function primitive(x) {
            return x === null || typeof x !== 'function' && _typeof(x) !== 'object';
          },
          string: function string(x) {
            return _toString(x) === '[object String]';
          },
          regex: function regex(x) {
            return _toString(x) === '[object RegExp]';
          },
          symbol: function symbol(x) {
            return typeof globals.Symbol === 'function' && _typeof(x) === 'symbol';
          }
        };
        var overrideNative = function overrideNative(object, property, replacement) {
          var original = object[property];
          defineProperty(object, property, replacement, true);
          Value.preserveToString(object[property], original);
        };

        // eslint-disable-next-line no-restricted-properties
        var hasSymbols = typeof _Symbol === 'function' && typeof _Symbol['for'] === 'function' && Type.symbol(_Symbol());

        // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
        // we're going to use an arbitrary _-prefixed name to make our shims
        // work properly with each other, even though we don't have full Iterator
        // support.  That is, `Array.from(map.keys())` will work, but we don't
        // pretend to export a "real" Iterator interface.
        var $iterator$ = Type.symbol(_Symbol.iterator) ? _Symbol.iterator : '_es6-shim iterator_';
        // Firefox ships a partial implementation using the name @@iterator.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
        // So use that name if we detect it.
        if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
          $iterator$ = '@@iterator';
        }

        // Reflect
        if (!globals.Reflect) {
          defineProperty(globals, 'Reflect', {}, true);
        }
        var Reflect = globals.Reflect;
        var $String = String;

        /* global document */
        var domAll = typeof document === 'undefined' || !document ? null : document.all;
        var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {
          return x == null;
        } : function isNullOrUndefinedAndNotDocumentAll(x) {
          return x == null && x !== domAll;
        };
        var ES = {
          // http://www.ecma-international.org/ecma-262/6.0/#sec-call
          Call: function Call(F, V) {
            var args = arguments.length > 2 ? arguments[2] : [];
            if (!ES.IsCallable(F)) {
              throw new TypeError(F + ' is not a function');
            }
            return _apply(F, V, args);
          },
          RequireObjectCoercible: function RequireObjectCoercible(x, optMessage) {
            if (isNullOrUndefined(x)) {
              throw new TypeError(optMessage || 'Cannot call method on ' + x);
            }
            return x;
          },
          // This might miss the "(non-standard exotic and does not implement
          // [[Call]])" case from
          // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
          // but we can't find any evidence these objects exist in practice.
          // If we find some in the future, you could test `Object(x) === x`,
          // which is reliable according to
          // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
          // but is not well optimized by runtimes and creates an object
          // whenever it returns false, and thus is very slow.
          TypeIsObject: function TypeIsObject(x) {
            if (x === void 0 || x === null || x === true || x === false) {
              return false;
            }
            return typeof x === 'function' || _typeof(x) === 'object' || x === domAll;
          },
          ToObject: function ToObject(o, optMessage) {
            return Object(ES.RequireObjectCoercible(o, optMessage));
          },
          IsCallable: isCallable,
          IsConstructor: function IsConstructor(x) {
            // We can't tell callables from constructors in ES5
            return ES.IsCallable(x);
          },
          ToInt32: function ToInt32(x) {
            return ES.ToNumber(x) >> 0;
          },
          ToUint32: function ToUint32(x) {
            return ES.ToNumber(x) >>> 0;
          },
          ToNumber: function ToNumber(value) {
            if (hasSymbols && _toString(value) === '[object Symbol]') {
              throw new TypeError('Cannot convert a Symbol value to a number');
            }
            return +value;
          },
          ToInteger: function ToInteger(value) {
            var number = ES.ToNumber(value);
            if (numberIsNaN(number)) {
              return 0;
            }
            if (number === 0 || !numberIsFinite(number)) {
              return number;
            }
            return (number > 0 ? 1 : -1) * _floor(_abs(number));
          },
          ToLength: function ToLength(value) {
            var len = ES.ToInteger(value);
            if (len <= 0) {
              return 0;
            } // includes converting -0 to +0
            if (len > Number.MAX_SAFE_INTEGER) {
              return Number.MAX_SAFE_INTEGER;
            }
            return len;
          },
          SameValue: function SameValue(a, b) {
            if (a === b) {
              // 0 === -0, but they are not identical.
              if (a === 0) {
                return 1 / a === 1 / b;
              }
              return true;
            }
            return numberIsNaN(a) && numberIsNaN(b);
          },
          SameValueZero: function SameValueZero(a, b) {
            // same as SameValue except for SameValueZero(+0, -0) == true
            return a === b || numberIsNaN(a) && numberIsNaN(b);
          },
          GetIterator: function GetIterator(o) {
            if (isArguments(o)) {
              // special case support for `arguments`
              return new ArrayIterator(o, 'value');
            }
            var itFn = ES.GetMethod(o, $iterator$);
            if (!ES.IsCallable(itFn)) {
              // Better diagnostics if itFn is null or undefined
              throw new TypeError('value is not an iterable');
            }
            var it = ES.Call(itFn, o);
            if (!ES.TypeIsObject(it)) {
              throw new TypeError('bad iterator');
            }
            return it;
          },
          GetMethod: function GetMethod(o, p) {
            var func = ES.ToObject(o)[p];
            if (isNullOrUndefined(func)) {
              return void 0;
            }
            if (!ES.IsCallable(func)) {
              throw new TypeError('Method not callable: ' + p);
            }
            return func;
          },
          IteratorComplete: function IteratorComplete(iterResult) {
            return !!iterResult.done;
          },
          IteratorClose: function IteratorClose(iterator, completionIsThrow) {
            var returnMethod = ES.GetMethod(iterator, 'return');
            if (returnMethod === void 0) {
              return;
            }
            var innerResult, innerException;
            try {
              innerResult = ES.Call(returnMethod, iterator);
            } catch (e) {
              innerException = e;
            }
            if (completionIsThrow) {
              return;
            }
            if (innerException) {
              throw innerException;
            }
            if (!ES.TypeIsObject(innerResult)) {
              throw new TypeError("Iterator's return method returned a non-object.");
            }
          },
          IteratorNext: function IteratorNext(it) {
            var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
            if (!ES.TypeIsObject(result)) {
              throw new TypeError('bad iterator');
            }
            return result;
          },
          IteratorStep: function IteratorStep(it) {
            var result = ES.IteratorNext(it);
            var done = ES.IteratorComplete(result);
            return done ? false : result;
          },
          Construct: function Construct(C, args, newTarget, isES6internal) {
            var target = typeof newTarget === 'undefined' ? C : newTarget;
            if (!isES6internal && Reflect.construct) {
              // Try to use Reflect.construct if available
              return Reflect.construct(C, args, target);
            }
            // OK, we have to fake it.  This will only work if the
            // C.[[ConstructorKind]] == "base" -- but that's the only
            // kind we can make in ES5 code anyway.

            // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
            var proto = target.prototype;
            if (!ES.TypeIsObject(proto)) {
              proto = Object.prototype;
            }
            var obj = create(proto);
            // Call the constructor.
            var result = ES.Call(C, obj, args);
            return ES.TypeIsObject(result) ? result : obj;
          },
          SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
            var C = O.constructor;
            if (C === void 0) {
              return defaultConstructor;
            }
            if (!ES.TypeIsObject(C)) {
              throw new TypeError('Bad constructor');
            }
            var S = C[symbolSpecies];
            if (isNullOrUndefined(S)) {
              return defaultConstructor;
            }
            if (!ES.IsConstructor(S)) {
              throw new TypeError('Bad @@species');
            }
            return S;
          },
          CreateHTML: function CreateHTML(string, tag, attribute, value) {
            var S = ES.ToString(string);
            var p1 = '<' + tag;
            if (attribute !== '') {
              var V = ES.ToString(value);
              var escapedV = V.replace(/"/g, '&quot;');
              p1 += ' ' + attribute + '="' + escapedV + '"';
            }
            var p2 = p1 + '>';
            var p3 = p2 + S;
            return p3 + '</' + tag + '>';
          },
          IsRegExp: function IsRegExp(argument) {
            if (!ES.TypeIsObject(argument)) {
              return false;
            }
            var isRegExp = argument[_Symbol.match];
            if (typeof isRegExp !== 'undefined') {
              return !!isRegExp;
            }
            return Type.regex(argument);
          },
          ToString: function ToString(string) {
            if (hasSymbols && _toString(string) === '[object Symbol]') {
              throw new TypeError('Cannot convert a Symbol value to a number');
            }
            return $String(string);
          }
        };

        // Well-known Symbol shims
        if (supportsDescriptors && hasSymbols) {
          var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
            if (Type.symbol(_Symbol[name])) {
              return _Symbol[name];
            }
            // eslint-disable-next-line no-restricted-properties
            var sym = _Symbol['for']('Symbol.' + name);
            Object.defineProperty(_Symbol, name, {
              configurable: false,
              enumerable: false,
              writable: false,
              value: sym
            });
            return sym;
          };
          if (!Type.symbol(_Symbol.search)) {
            var symbolSearch = defineWellKnownSymbol('search');
            var originalSearch = String.prototype.search;
            defineProperty(RegExp.prototype, symbolSearch, function search(string) {
              return ES.Call(originalSearch, string, [this]);
            });
            var searchShim = function search(regexp) {
              var O = ES.RequireObjectCoercible(this);
              if (!isNullOrUndefined(regexp)) {
                var searcher = ES.GetMethod(regexp, symbolSearch);
                if (typeof searcher !== 'undefined') {
                  return ES.Call(searcher, regexp, [O]);
                }
              }
              return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
            };
            overrideNative(String.prototype, 'search', searchShim);
          }
          if (!Type.symbol(_Symbol.replace)) {
            var symbolReplace = defineWellKnownSymbol('replace');
            var originalReplace = String.prototype.replace;
            defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
              return ES.Call(originalReplace, string, [this, replaceValue]);
            });
            var replaceShim = function replace(searchValue, replaceValue) {
              var O = ES.RequireObjectCoercible(this);
              if (!isNullOrUndefined(searchValue)) {
                var replacer = ES.GetMethod(searchValue, symbolReplace);
                if (typeof replacer !== 'undefined') {
                  return ES.Call(replacer, searchValue, [O, replaceValue]);
                }
              }
              return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
            };
            overrideNative(String.prototype, 'replace', replaceShim);
          }
          if (!Type.symbol(_Symbol.split)) {
            var symbolSplit = defineWellKnownSymbol('split');
            var originalSplit = String.prototype.split;
            defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
              return ES.Call(originalSplit, string, [this, limit]);
            });
            var splitShim = function split(separator, limit) {
              var O = ES.RequireObjectCoercible(this);
              if (!isNullOrUndefined(separator)) {
                var splitter = ES.GetMethod(separator, symbolSplit);
                if (typeof splitter !== 'undefined') {
                  return ES.Call(splitter, separator, [O, limit]);
                }
              }
              return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
            };
            overrideNative(String.prototype, 'split', splitShim);
          }
          var symbolMatchExists = Type.symbol(_Symbol.match);
          var stringMatchIgnoresSymbolMatch = symbolMatchExists && function () {
            // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
            // Firefox 40 and below have Symbol.match but String#match works fine.
            var o = {};
            o[_Symbol.match] = function () {
              return 42;
            };
            return 'a'.match(o) !== 42;
          }();
          if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
            var symbolMatch = defineWellKnownSymbol('match');
            var originalMatch = String.prototype.match;
            defineProperty(RegExp.prototype, symbolMatch, function match(string) {
              return ES.Call(originalMatch, string, [this]);
            });
            var matchShim = function match(regexp) {
              var O = ES.RequireObjectCoercible(this);
              if (!isNullOrUndefined(regexp)) {
                var matcher = ES.GetMethod(regexp, symbolMatch);
                if (typeof matcher !== 'undefined') {
                  return ES.Call(matcher, regexp, [O]);
                }
              }
              return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
            };
            overrideNative(String.prototype, 'match', matchShim);
          }
        }
        var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
          Value.preserveToString(replacement, original);
          if (Object.setPrototypeOf) {
            // sets up proper prototype chain where possible
            Object.setPrototypeOf(original, replacement);
          }
          if (supportsDescriptors) {
            _forEach(Object.getOwnPropertyNames(original), function (key) {
              if (key in noop || keysToSkip[key]) {
                return;
              }
              Value.proxy(original, key, replacement);
            });
          } else {
            _forEach(Object.keys(original), function (key) {
              if (key in noop || keysToSkip[key]) {
                return;
              }
              replacement[key] = original[key];
            });
          }
          replacement.prototype = original.prototype;
          Value.redefine(original.prototype, 'constructor', replacement);
        };
        var defaultSpeciesGetter = function defaultSpeciesGetter() {
          return this;
        };
        var addDefaultSpecies = function addDefaultSpecies(C) {
          if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
            Value.getter(C, symbolSpecies, defaultSpeciesGetter);
          }
        };
        var addIterator = function addIterator(prototype, impl) {
          var implementation = impl || function iterator() {
            return this;
          };
          defineProperty(prototype, $iterator$, implementation);
          if (!prototype[$iterator$] && Type.symbol($iterator$)) {
            // implementations are buggy when $iterator$ is a Symbol
            prototype[$iterator$] = implementation;
          }
        };
        var createDataProperty = function createDataProperty(object, name, value) {
          if (supportsDescriptors) {
            Object.defineProperty(object, name, {
              configurable: true,
              enumerable: true,
              writable: true,
              value: value
            });
          } else {
            object[name] = value;
          }
        };
        var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
          createDataProperty(object, name, value);
          if (!ES.SameValue(object[name], value)) {
            throw new TypeError('property is nonconfigurable');
          }
        };
        var emulateES6construct = function emulateES6construct(o, defaultNewTarget, defaultProto, slots) {
          // This is an es5 approximation to es6 construct semantics.  in es6,
          // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
          // just sets the internal variable NewTarget (in es6 syntax `new.target`)
          // to Foo and then returns Foo().

          // Many ES6 object then have constructors of the form:
          // 1. If NewTarget is undefined, throw a TypeError exception
          // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)

          // So we're going to emulate those first two steps.
          if (!ES.TypeIsObject(o)) {
            throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
          }
          var proto = defaultNewTarget.prototype;
          if (!ES.TypeIsObject(proto)) {
            proto = defaultProto;
          }
          var obj = create(proto);
          for (var name in slots) {
            if (_hasOwnProperty(slots, name)) {
              var value = slots[name];
              defineProperty(obj, name, value, true);
            }
          }
          return obj;
        };

        // Firefox 31 reports this function's length as 0
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
        if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
          var originalFromCodePoint = String.fromCodePoint;
          overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
            return ES.Call(originalFromCodePoint, this, arguments);
          });
        }
        var StringShims = {
          fromCodePoint: function fromCodePoint(codePoints) {
            var result = [];
            var next;
            for (var i = 0, length = arguments.length; i < length; i++) {
              next = Number(arguments[i]);
              if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
                throw new RangeError('Invalid code point ' + next);
              }
              if (next < 0x10000) {
                _push(result, String.fromCharCode(next));
              } else {
                next -= 0x10000;
                _push(result, String.fromCharCode((next >> 10) + 0xD800));
                _push(result, String.fromCharCode(next % 0x400 + 0xDC00));
              }
            }
            return _join(result, '');
          },
          raw: function raw(template) {
            var numberOfSubstitutions = arguments.length - 1;
            var cooked = ES.ToObject(template, 'bad template');
            var raw = ES.ToObject(cooked.raw, 'bad raw value');
            var len = raw.length;
            var literalSegments = ES.ToLength(len);
            if (literalSegments <= 0) {
              return '';
            }
            var stringElements = [];
            var nextIndex = 0;
            var nextKey, next, nextSeg, nextSub;
            while (nextIndex < literalSegments) {
              nextKey = ES.ToString(nextIndex);
              nextSeg = ES.ToString(raw[nextKey]);
              _push(stringElements, nextSeg);
              if (nextIndex + 1 >= literalSegments) {
                break;
              }
              next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
              nextSub = ES.ToString(next);
              _push(stringElements, nextSub);
              nextIndex += 1;
            }
            return _join(stringElements, '');
          }
        };
        if (String.raw && String.raw({
          raw: {
            0: 'x',
            1: 'y',
            length: 2
          }
        }) !== 'xy') {
          // IE 11 TP has a broken String.raw implementation
          overrideNative(String, 'raw', StringShims.raw);
        }
        defineProperties(String, StringShims);

        // Fast repeat, uses the `Exponentiation by squaring` algorithm.
        // Perf: http://jsperf.com/string-repeat2/2
        var stringRepeat = function repeat(s, times) {
          if (times < 1) {
            return '';
          }
          if (times % 2) {
            return repeat(s, times - 1) + s;
          }
          var half = repeat(s, times / 2);
          return half + half;
        };
        var stringMaxLength = Infinity;
        var StringPrototypeShims = {
          repeat: function repeat(times) {
            var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
            var numTimes = ES.ToInteger(times);
            if (numTimes < 0 || numTimes >= stringMaxLength) {
              throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
            }
            return stringRepeat(thisStr, numTimes);
          },
          startsWith: function startsWith(searchString) {
            var S = ES.ToString(ES.RequireObjectCoercible(this));
            if (ES.IsRegExp(searchString)) {
              throw new TypeError('Cannot call method "startsWith" with a regex');
            }
            var searchStr = ES.ToString(searchString);
            var position;
            if (arguments.length > 1) {
              position = arguments[1];
            }
            var start = _max(ES.ToInteger(position), 0);
            return _strSlice(S, start, start + searchStr.length) === searchStr;
          },
          endsWith: function endsWith(searchString) {
            var S = ES.ToString(ES.RequireObjectCoercible(this));
            if (ES.IsRegExp(searchString)) {
              throw new TypeError('Cannot call method "endsWith" with a regex');
            }
            var searchStr = ES.ToString(searchString);
            var len = S.length;
            var endPosition;
            if (arguments.length > 1) {
              endPosition = arguments[1];
            }
            var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
            var end = _min(_max(pos, 0), len);
            return _strSlice(S, end - searchStr.length, end) === searchStr;
          },
          includes: function includes(searchString) {
            if (ES.IsRegExp(searchString)) {
              throw new TypeError('"includes" does not accept a RegExp');
            }
            var searchStr = ES.ToString(searchString);
            var position;
            if (arguments.length > 1) {
              position = arguments[1];
            }
            // Somehow this trick makes method 100% compat with the spec.
            return _indexOf(this, searchStr, position) !== -1;
          },
          codePointAt: function codePointAt(pos) {
            var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
            var position = ES.ToInteger(pos);
            var length = thisStr.length;
            if (position >= 0 && position < length) {
              var first = thisStr.charCodeAt(position);
              var isEnd = position + 1 === length;
              if (first < 0xD800 || first > 0xDBFF || isEnd) {
                return first;
              }
              var second = thisStr.charCodeAt(position + 1);
              if (second < 0xDC00 || second > 0xDFFF) {
                return first;
              }
              return (first - 0xD800) * 1024 + (second - 0xDC00) + 0x10000;
            }
          }
        };
        if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
          overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
        }
        if (String.prototype.startsWith && String.prototype.endsWith) {
          var startsWithRejectsRegex = throwsError(function () {
            /* throws if spec-compliant */
            return '/a/'.startsWith(/a/);
          });
          var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {
            return 'abc'.startsWith('a', Infinity) === false;
          });
          if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
            // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
            overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
            overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
          }
        }
        if (hasSymbols) {
          var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
            var re = /a/;
            re[_Symbol.match] = false;
            return '/a/'.startsWith(re);
          });
          if (!startsWithSupportsSymbolMatch) {
            overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
          }
          var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
            var re = /a/;
            re[_Symbol.match] = false;
            return '/a/'.endsWith(re);
          });
          if (!endsWithSupportsSymbolMatch) {
            overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
          }
          var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {
            var re = /a/;
            re[_Symbol.match] = false;
            return '/a/'.includes(re);
          });
          if (!includesSupportsSymbolMatch) {
            overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
          }
        }
        defineProperties(String.prototype, StringPrototypeShims);

        // whitespace from: http://es5.github.io/#x15.5.4.20
        // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
        var ws = ["\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028", "\u2029\uFEFF"].join('');
        var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
        var trimShim = function trim() {
          return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
        };
        var nonWS = ["\x85", "\u200B", "\uFFFE"].join('');
        var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
        var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;
        var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
        defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);

        // Given an argument x, it will return an IteratorResult object,
        // with value set to x and done to false.
        // Given no arguments, it will return an iterator completion object.
        var iteratorResult = function iteratorResult(x) {
          return {
            value: x,
            done: arguments.length === 0
          };
        };

        // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator
        var StringIterator = function StringIterator(s) {
          ES.RequireObjectCoercible(s);
          defineProperty(this, '_s', ES.ToString(s));
          defineProperty(this, '_i', 0);
        };
        StringIterator.prototype.next = function () {
          var s = this._s;
          var i = this._i;
          if (typeof s === 'undefined' || i >= s.length) {
            this._s = void 0;
            return iteratorResult();
          }
          var first = s.charCodeAt(i);
          var second, len;
          if (first < 0xD800 || first > 0xDBFF || i + 1 === s.length) {
            len = 1;
          } else {
            second = s.charCodeAt(i + 1);
            len = second < 0xDC00 || second > 0xDFFF ? 1 : 2;
          }
          this._i = i + len;
          return iteratorResult(s.substr(i, len));
        };
        addIterator(StringIterator.prototype);
        addIterator(String.prototype, function () {
          return new StringIterator(this);
        });
        var ArrayShims = {
          from: function from(items) {
            var C = this;
            var mapFn;
            if (arguments.length > 1) {
              mapFn = arguments[1];
            }
            var mapping, T;
            if (typeof mapFn === 'undefined') {
              mapping = false;
            } else {
              if (!ES.IsCallable(mapFn)) {
                throw new TypeError('Array.from: when provided, the second argument must be a function');
              }
              if (arguments.length > 2) {
                T = arguments[2];
              }
              mapping = true;
            }

            // Note that that Arrays will use ArrayIterator:
            // https://bugs.ecmascript.org/show_bug.cgi?id=2416
            var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
            var length, result, i;
            if (usingIterator) {
              result = ES.IsConstructor(C) ? Object(new C()) : [];
              var iterator = ES.GetIterator(items);
              var next, nextValue;
              i = 0;
              while (true) {
                next = ES.IteratorStep(iterator);
                if (next === false) {
                  break;
                }
                nextValue = next.value;
                try {
                  if (mapping) {
                    nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
                  }
                  result[i] = nextValue;
                } catch (e) {
                  ES.IteratorClose(iterator, true);
                  throw e;
                }
                i += 1;
              }
              length = i;
            } else {
              var arrayLike = ES.ToObject(items);
              length = ES.ToLength(arrayLike.length);
              result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
              var value;
              for (i = 0; i < length; ++i) {
                value = arrayLike[i];
                if (mapping) {
                  value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
                }
                createDataPropertyOrThrow(result, i, value);
              }
            }
            result.length = length;
            return result;
          },
          of: function of() {
            var len = arguments.length;
            var C = this;
            var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
            for (var k = 0; k < len; ++k) {
              createDataPropertyOrThrow(A, k, arguments[k]);
            }
            A.length = len;
            return A;
          }
        };
        defineProperties(Array, ArrayShims);
        addDefaultSpecies(Array);

        // Our ArrayIterator is private; see
        // https://github.com/paulmillr/es6-shim/issues/252
        ArrayIterator = function ArrayIterator(array, kind) {
          defineProperty(this, 'i', 0);
          defineProperty(this, 'array', array);
          defineProperty(this, 'kind', kind);
        };
        defineProperties(ArrayIterator.prototype, {
          next: function next() {
            var i = this.i;
            var array = this.array;
            if (!(this instanceof ArrayIterator)) {
              throw new TypeError('Not an ArrayIterator');
            }
            if (typeof array !== 'undefined') {
              var len = ES.ToLength(array.length);
              if (i < len) {
                //for (; i < len; i++) {
                var kind = this.kind;
                var retval;
                if (kind === 'key') {
                  retval = i;
                } else if (kind === 'value') {
                  retval = array[i];
                } else if (kind === 'entry') {
                  retval = [i, array[i]];
                }
                this.i = i + 1;
                return iteratorResult(retval);
              }
            }
            this.array = void 0;
            return iteratorResult();
          }
        });
        addIterator(ArrayIterator.prototype);

        /*
        var orderKeys = function orderKeys(a, b) {
          var aNumeric = String(ES.ToInteger(a)) === a;
          var bNumeric = String(ES.ToInteger(b)) === b;
          if (aNumeric && bNumeric) {
            return b - a;
          } else if (aNumeric && !bNumeric) {
            return -1;
          } else if (!aNumeric && bNumeric) {
            return 1;
          } else {
            return a.localeCompare(b);
          }
        };
         var getAllKeys = function getAllKeys(object) {
          var ownKeys = [];
          var keys = [];
           for (var key in object) {
            _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
          }
          _sort(ownKeys, orderKeys);
          _sort(keys, orderKeys);
           return _concat(ownKeys, keys);
        };
        */

        // note: this is positioned here because it depends on ArrayIterator
        var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || function () {
          // Detects a bug in Webkit nightly r181886
          var Foo = function Foo(len) {
            this.length = len;
          };
          Foo.prototype = [];
          var fooArr = Array.of.apply(Foo, [1, 2]);
          return fooArr instanceof Foo && fooArr.length === 2;
        }();
        if (!arrayOfSupportsSubclassing) {
          overrideNative(Array, 'of', ArrayShims.of);
        }
        var ArrayPrototypeShims = {
          copyWithin: function copyWithin(target, start) {
            var o = ES.ToObject(this);
            var len = ES.ToLength(o.length);
            var relativeTarget = ES.ToInteger(target);
            var relativeStart = ES.ToInteger(start);
            var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
            var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
            var end;
            if (arguments.length > 2) {
              end = arguments[2];
            }
            var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
            var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
            var count = _min(finalItem - from, len - to);
            var direction = 1;
            if (from < to && to < from + count) {
              direction = -1;
              from += count - 1;
              to += count - 1;
            }
            while (count > 0) {
              if (from in o) {
                o[to] = o[from];
              } else {
                delete o[to];
              }
              from += direction;
              to += direction;
              count -= 1;
            }
            return o;
          },
          fill: function fill(value) {
            var start;
            if (arguments.length > 1) {
              start = arguments[1];
            }
            var end;
            if (arguments.length > 2) {
              end = arguments[2];
            }
            var O = ES.ToObject(this);
            var len = ES.ToLength(O.length);
            start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
            end = ES.ToInteger(typeof end === 'undefined' ? len : end);
            var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
            var relativeEnd = end < 0 ? len + end : end;
            for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
              O[i] = value;
            }
            return O;
          },
          find: function find(predicate) {
            var list = ES.ToObject(this);
            var length = ES.ToLength(list.length);
            if (!ES.IsCallable(predicate)) {
              throw new TypeError('Array#find: predicate must be a function');
            }
            var thisArg = arguments.length > 1 ? arguments[1] : null;
            for (var i = 0, value; i < length; i++) {
              value = list[i];
              if (thisArg) {
                if (_call(predicate, thisArg, value, i, list)) {
                  return value;
                }
              } else if (predicate(value, i, list)) {
                return value;
              }
            }
          },
          findIndex: function findIndex(predicate) {
            var list = ES.ToObject(this);
            var length = ES.ToLength(list.length);
            if (!ES.IsCallable(predicate)) {
              throw new TypeError('Array#findIndex: predicate must be a function');
            }
            var thisArg = arguments.length > 1 ? arguments[1] : null;
            for (var i = 0; i < length; i++) {
              if (thisArg) {
                if (_call(predicate, thisArg, list[i], i, list)) {
                  return i;
                }
              } else if (predicate(list[i], i, list)) {
                return i;
              }
            }
            return -1;
          },
          keys: function keys() {
            return new ArrayIterator(this, 'key');
          },
          values: function values() {
            return new ArrayIterator(this, 'value');
          },
          entries: function entries() {
            return new ArrayIterator(this, 'entry');
          }
        };
        // Safari 7.1 defines Array#keys and Array#entries natively,
        // but the resulting ArrayIterator objects don't have a "next" method.
        if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
          delete Array.prototype.keys;
        }
        if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
          delete Array.prototype.entries;
        }

        // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
        if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
          defineProperties(Array.prototype, {
            values: Array.prototype[$iterator$]
          });
          if (Type.symbol(_Symbol.unscopables)) {
            Array.prototype[_Symbol.unscopables].values = true;
          }
        }
        // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
        if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
          var originalArrayPrototypeValues = Array.prototype.values;
          overrideNative(Array.prototype, 'values', function values() {
            return ES.Call(originalArrayPrototypeValues, this, arguments);
          });
          defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
        }
        defineProperties(Array.prototype, ArrayPrototypeShims);
        if (1 / [true].indexOf(true, -0) < 0) {
          // indexOf when given a position arg of -0 should return +0.
          // https://github.com/tc39/ecma262/pull/316
          defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
            var value = _arrayIndexOfApply(this, arguments);
            if (value === 0 && 1 / value < 0) {
              return 0;
            }
            return value;
          }, true);
        }
        addIterator(Array.prototype, function () {
          return this.values();
        });
        // Chrome defines keys/values/entries on Array, but doesn't give us
        // any way to identify its iterator.  So add our own shimmed field.
        if (Object.getPrototypeOf) {
          var ChromeArrayIterator = Object.getPrototypeOf([].values());
          if (ChromeArrayIterator) {
            // in WSH, this is `undefined`
            addIterator(ChromeArrayIterator);
          }
        }

        // note: this is positioned here because it relies on Array#entries
        var arrayFromSwallowsNegativeLengths = function () {
          // Detects a Firefox bug in v32
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
          return valueOrFalseIfThrows(function () {
            return Array.from({
              length: -1
            }).length === 0;
          });
        }();
        var arrayFromHandlesIterables = function () {
          // Detects a bug in Webkit nightly r181886
          var arr = Array.from([0].entries());
          return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
        }();
        if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
          overrideNative(Array, 'from', ArrayShims.from);
        }
        var arrayFromHandlesUndefinedMapFunction = function () {
          // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
          // but the spec doesn't care if it's provided or not - undefined doesn't throw.
          return valueOrFalseIfThrows(function () {
            return Array.from([0], void 0);
          });
        }();
        if (!arrayFromHandlesUndefinedMapFunction) {
          var origArrayFrom = Array.from;
          overrideNative(Array, 'from', function from(items) {
            if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
              return ES.Call(origArrayFrom, this, arguments);
            }
            return _call(origArrayFrom, this, items);
          });
        }
        var int32sAsOne = -(Math.pow(2, 32) - 1);
        var toLengthsCorrectly = function toLengthsCorrectly(method, reversed) {
          var obj = {
            length: int32sAsOne
          };
          obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
          return valueOrFalseIfThrows(function () {
            _call(method, obj, function () {
              // note: in nonconforming browsers, this will be called
              // -1 >>> 0 times, which is 4294967295, so the throw matters.
              throw new RangeError('should not reach here');
            }, []);
            return true;
          });
        };
        if (!toLengthsCorrectly(Array.prototype.forEach)) {
          var originalForEach = Array.prototype.forEach;
          overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
            return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.map)) {
          var originalMap = Array.prototype.map;
          overrideNative(Array.prototype, 'map', function map(callbackFn) {
            return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.filter)) {
          var originalFilter = Array.prototype.filter;
          overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
            return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.some)) {
          var originalSome = Array.prototype.some;
          overrideNative(Array.prototype, 'some', function some(callbackFn) {
            return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.every)) {
          var originalEvery = Array.prototype.every;
          overrideNative(Array.prototype, 'every', function every(callbackFn) {
            return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.reduce)) {
          var originalReduce = Array.prototype.reduce;
          overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
            return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
          });
        }
        if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
          var originalReduceRight = Array.prototype.reduceRight;
          overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
            return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
          });
        }
        var lacksOctalSupport = Number('0o10') !== 8;
        var lacksBinarySupport = Number('0b10') !== 2;
        var trimsNonWhitespace = _some(nonWS, function (c) {
          return Number(c + 0 + c) === 0;
        });
        if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
          var OrigNumber = Number;
          var binaryRegex = /^0b[01]+$/i;
          var octalRegex = /^0o[0-7]+$/i;
          // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
          var isBinary = binaryRegex.test.bind(binaryRegex);
          var isOctal = octalRegex.test.bind(octalRegex);
          var toPrimitive = function toPrimitive(O, hint) {
            // need to replace this with `es-to-primitive/es6`
            var result;
            if (typeof O.valueOf === 'function') {
              result = O.valueOf();
              if (Type.primitive(result)) {
                return result;
              }
            }
            if (typeof O.toString === 'function') {
              result = O.toString();
              if (Type.primitive(result)) {
                return result;
              }
            }
            throw new TypeError('No default value');
          };
          var hasNonWS = nonWSregex.test.bind(nonWSregex);
          var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
          var NumberShim = function () {
            // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
            var NumberShim = function Number(value) {
              var primValue;
              if (arguments.length > 0) {
                primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
              } else {
                primValue = 0;
              }
              if (typeof primValue === 'string') {
                primValue = ES.Call(trimShim, primValue);
                if (isBinary(primValue)) {
                  primValue = parseInt(_strSlice(primValue, 2), 2);
                } else if (isOctal(primValue)) {
                  primValue = parseInt(_strSlice(primValue, 2), 8);
                } else if (hasNonWS(primValue) || isBadHex(primValue)) {
                  primValue = NaN;
                }
              }
              var receiver = this;
              var valueOfSucceeds = valueOrFalseIfThrows(function () {
                OrigNumber.prototype.valueOf.call(receiver);
                return true;
              });
              if (receiver instanceof NumberShim && !valueOfSucceeds) {
                return new OrigNumber(primValue);
              }
              return OrigNumber(primValue);
            };
            return NumberShim;
          }();
          wrapConstructor(OrigNumber, NumberShim, {});
          // this is necessary for ES3 browsers, where these properties are non-enumerable.
          defineProperties(NumberShim, {
            NaN: OrigNumber.NaN,
            MAX_VALUE: OrigNumber.MAX_VALUE,
            MIN_VALUE: OrigNumber.MIN_VALUE,
            NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
            POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
          });
          Number = NumberShim; // eslint-disable-line no-global-assign
          Value.redefine(globals, 'Number', NumberShim);
        }
        var maxSafeInteger = Math.pow(2, 53) - 1;
        defineProperties(Number, {
          MAX_SAFE_INTEGER: maxSafeInteger,
          MIN_SAFE_INTEGER: -maxSafeInteger,
          EPSILON: 2.220446049250313e-16,
          parseInt: globals.parseInt,
          parseFloat: globals.parseFloat,
          isFinite: numberIsFinite,
          isInteger: function isInteger(value) {
            return numberIsFinite(value) && ES.ToInteger(value) === value;
          },
          isSafeInteger: function isSafeInteger(value) {
            return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
          },
          isNaN: numberIsNaN
        });
        // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
        defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);

        // Work around bugs in Array#find and Array#findIndex -- early
        // implementations skipped holes in sparse arrays. (Note that the
        // implementations of find/findIndex indirectly use shimmed
        // methods of Number, so this test has to happen down here.)
        /* eslint-disable no-sparse-arrays */
        if ([, 1].find(function () {
          return true;
        }) === 1) {
          overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
        }
        if ([, 1].findIndex(function () {
          return true;
        }) !== 0) {
          overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
        }
        /* eslint-enable no-sparse-arrays */

        var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
        var ensureEnumerable = function ensureEnumerable(obj, prop) {
          if (supportsDescriptors && isEnumerableOn(obj, prop)) {
            Object.defineProperty(obj, prop, {
              enumerable: false
            });
          }
        };
        var sliceArgs = function sliceArgs() {
          // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
          var initial = Number(this);
          var len = arguments.length;
          var desiredArgCount = len - initial;
          var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
          for (var i = initial; i < len; ++i) {
            args[i - initial] = arguments[i];
          }
          return args;
        };
        var assignTo = function assignTo(source) {
          return function assignToSource(target, key) {
            target[key] = source[key];
            return target;
          };
        };
        var assignReducer = function assignReducer(target, source) {
          var sourceKeys = keys(Object(source));
          var symbols;
          if (ES.IsCallable(Object.getOwnPropertySymbols)) {
            symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
          }
          return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
        };
        var ObjectShims = {
          // 19.1.3.1
          assign: function assign(target, source) {
            var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
            return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
          },
          // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
          is: function is(a, b) {
            return ES.SameValue(a, b);
          }
        };
        var assignHasPendingExceptions = Object.assign && Object.preventExtensions && function () {
          // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
          // which is 72% slower than our shim, and Firefox 40's native implementation.
          var thrower = Object.preventExtensions({
            1: 2
          });
          try {
            Object.assign(thrower, 'xy');
          } catch (e) {
            return thrower[1] === 'y';
          }
        }();
        if (assignHasPendingExceptions) {
          overrideNative(Object, 'assign', ObjectShims.assign);
        }
        defineProperties(Object, ObjectShims);
        if (supportsDescriptors) {
          var ES5ObjectShims = {
            // 19.1.3.9
            // shim from https://gist.github.com/WebReflection/5593554
            setPrototypeOf: function (Object) {
              var set;
              var checkArgs = function checkArgs(O, proto) {
                if (!ES.TypeIsObject(O)) {
                  throw new TypeError('cannot set prototype on a non-object');
                }
                if (!(proto === null || ES.TypeIsObject(proto))) {
                  throw new TypeError('can only set prototype to an object or null' + proto);
                }
              };
              var setPrototypeOf = function setPrototypeOf(O, proto) {
                checkArgs(O, proto);
                _call(set, O, proto);
                return O;
              };
              try {
                // this works already in Firefox and Safari
                set = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
                _call(set, {}, null);
              } catch (e) {
                if (Object.prototype !== {}.__proto__) {
                  // eslint-disable-line no-proto
                  // IE < 11 cannot be shimmed
                  return;
                }
                // probably Chrome or some old Mobile stock browser
                set = function set(proto) {
                  this.__proto__ = proto; // eslint-disable-line no-proto
                };
                // please note that this will **not** work
                // in those browsers that do not inherit
                // __proto__ by mistake from Object.prototype
                // in these cases we should probably throw an error
                // or at least be informed about the issue
                setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
                // setPrototypeOf.polyfill === true means it works as meant
                // setPrototypeOf.polyfill === false means it's not 100% reliable
                // setPrototypeOf.polyfill === undefined
                // or
                // setPrototypeOf.polyfill ==  null means it's not a polyfill
                // which means it works as expected
                // we can even delete Object.prototype.__proto__;
              }
              return setPrototypeOf;
            }(Object)
          };
          defineProperties(Object, ES5ObjectShims);
        }

        // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
        // but Object.create(null) does.
        if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
          (function () {
            var FAKENULL = Object.create(null);
            var gpo = Object.getPrototypeOf;
            var spo = Object.setPrototypeOf;
            Object.getPrototypeOf = function (o) {
              var result = gpo(o);
              return result === FAKENULL ? null : result;
            };
            Object.setPrototypeOf = function (o, p) {
              var proto = p === null ? FAKENULL : p;
              return spo(o, proto);
            };
            Object.setPrototypeOf.polyfill = false;
          })();
        }
        var objectKeysAcceptsPrimitives = !throwsError(function () {
          return Object.keys('foo');
        });
        if (!objectKeysAcceptsPrimitives) {
          var originalObjectKeys = Object.keys;
          overrideNative(Object, 'keys', function keys(value) {
            return originalObjectKeys(ES.ToObject(value));
          });
          keys = Object.keys;
        }
        var objectKeysRejectsRegex = throwsError(function () {
          return Object.keys(/a/g);
        });
        if (objectKeysRejectsRegex) {
          var regexRejectingObjectKeys = Object.keys;
          overrideNative(Object, 'keys', function keys(value) {
            if (Type.regex(value)) {
              var regexKeys = [];
              for (var k in value) {
                if (_hasOwnProperty(value, k)) {
                  _push(regexKeys, k);
                }
              }
              return regexKeys;
            }
            return regexRejectingObjectKeys(value);
          });
          keys = Object.keys;
        }
        if (Object.getOwnPropertyNames) {
          var objectGOPNAcceptsPrimitives = !throwsError(function () {
            return Object.getOwnPropertyNames('foo');
          });
          if (!objectGOPNAcceptsPrimitives) {
            var cachedWindowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? Object.getOwnPropertyNames(window) : [];
            var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
            overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
              var val = ES.ToObject(value);
              if (_toString(val) === '[object Window]') {
                try {
                  return originalObjectGetOwnPropertyNames(val);
                } catch (e) {
                  // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
                  return _concat([], cachedWindowNames);
                }
              }
              return originalObjectGetOwnPropertyNames(val);
            });
          }
        }
        if (Object.getOwnPropertyDescriptor) {
          var objectGOPDAcceptsPrimitives = !throwsError(function () {
            return Object.getOwnPropertyDescriptor('foo', 'bar');
          });
          if (!objectGOPDAcceptsPrimitives) {
            var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
              return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
            });
          }
        }
        if (Object.seal) {
          var objectSealAcceptsPrimitives = !throwsError(function () {
            return Object.seal('foo');
          });
          if (!objectSealAcceptsPrimitives) {
            var originalObjectSeal = Object.seal;
            overrideNative(Object, 'seal', function seal(value) {
              if (!ES.TypeIsObject(value)) {
                return value;
              }
              return originalObjectSeal(value);
            });
          }
        }
        if (Object.isSealed) {
          var objectIsSealedAcceptsPrimitives = !throwsError(function () {
            return Object.isSealed('foo');
          });
          if (!objectIsSealedAcceptsPrimitives) {
            var originalObjectIsSealed = Object.isSealed;
            overrideNative(Object, 'isSealed', function isSealed(value) {
              if (!ES.TypeIsObject(value)) {
                return true;
              }
              return originalObjectIsSealed(value);
            });
          }
        }
        if (Object.freeze) {
          var objectFreezeAcceptsPrimitives = !throwsError(function () {
            return Object.freeze('foo');
          });
          if (!objectFreezeAcceptsPrimitives) {
            var originalObjectFreeze = Object.freeze;
            overrideNative(Object, 'freeze', function freeze(value) {
              if (!ES.TypeIsObject(value)) {
                return value;
              }
              return originalObjectFreeze(value);
            });
          }
        }
        if (Object.isFrozen) {
          var objectIsFrozenAcceptsPrimitives = !throwsError(function () {
            return Object.isFrozen('foo');
          });
          if (!objectIsFrozenAcceptsPrimitives) {
            var originalObjectIsFrozen = Object.isFrozen;
            overrideNative(Object, 'isFrozen', function isFrozen(value) {
              if (!ES.TypeIsObject(value)) {
                return true;
              }
              return originalObjectIsFrozen(value);
            });
          }
        }
        if (Object.preventExtensions) {
          var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () {
            return Object.preventExtensions('foo');
          });
          if (!objectPreventExtensionsAcceptsPrimitives) {
            var originalObjectPreventExtensions = Object.preventExtensions;
            overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
              if (!ES.TypeIsObject(value)) {
                return value;
              }
              return originalObjectPreventExtensions(value);
            });
          }
        }
        if (Object.isExtensible) {
          var objectIsExtensibleAcceptsPrimitives = !throwsError(function () {
            return Object.isExtensible('foo');
          });
          if (!objectIsExtensibleAcceptsPrimitives) {
            var originalObjectIsExtensible = Object.isExtensible;
            overrideNative(Object, 'isExtensible', function isExtensible(value) {
              if (!ES.TypeIsObject(value)) {
                return false;
              }
              return originalObjectIsExtensible(value);
            });
          }
        }
        if (Object.getPrototypeOf) {
          var objectGetProtoAcceptsPrimitives = !throwsError(function () {
            return Object.getPrototypeOf('foo');
          });
          if (!objectGetProtoAcceptsPrimitives) {
            var originalGetProto = Object.getPrototypeOf;
            overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
              return originalGetProto(ES.ToObject(value));
            });
          }
        }
        var hasFlags = supportsDescriptors && function () {
          var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
          return desc && ES.IsCallable(desc.get);
        }();
        if (supportsDescriptors && !hasFlags) {
          var regExpFlagsGetter = function flags() {
            if (!ES.TypeIsObject(this)) {
              throw new TypeError('Method called on incompatible type: must be an object.');
            }
            var result = '';
            if (this.global) {
              result += 'g';
            }
            if (this.ignoreCase) {
              result += 'i';
            }
            if (this.multiline) {
              result += 'm';
            }
            if (this.unicode) {
              result += 'u';
            }
            if (this.sticky) {
              result += 'y';
            }
            return result;
          };
          Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
        }
        var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {
          return String(new RegExp(/a/g, 'i')) === '/a/i';
        });
        var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && function () {
          // Edge 0.12 supports flags fully, but does not support Symbol.match
          var regex = /./;
          regex[_Symbol.match] = false;
          return RegExp(regex) === regex;
        }();
        var regexToStringIsGeneric = valueOrFalseIfThrows(function () {
          return RegExp.prototype.toString.call({
            source: 'abc'
          }) === '/abc/';
        });
        var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {
          return RegExp.prototype.toString.call({
            source: 'a',
            flags: 'b'
          }) === '/a/b';
        });
        if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
          var origRegExpToString = RegExp.prototype.toString;
          defineProperty(RegExp.prototype, 'toString', function toString() {
            var R = ES.RequireObjectCoercible(this);
            if (Type.regex(R)) {
              return _call(origRegExpToString, R);
            }
            var pattern = $String(R.source);
            var flags = $String(R.flags);
            return '/' + pattern + '/' + flags;
          }, true);
          Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
          RegExp.prototype.toString.prototype = void 0;
        }
        if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
          var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
          var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
          var legacySourceGetter = function legacySourceGetter() {
            // prior to it being a getter, it's own + nonconfigurable
            return this.source;
          };
          var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
          var OrigRegExp = RegExp;
          var RegExpShim = function () {
            return function RegExp(pattern, flags) {
              var patternIsRegExp = ES.IsRegExp(pattern);
              var calledWithNew = this instanceof RegExp;
              if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
                return pattern;
              }
              var P = pattern;
              var F = flags;
              if (Type.regex(pattern)) {
                P = ES.Call(sourceGetter, pattern);
                F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
                return new RegExp(P, F);
              } else if (patternIsRegExp) {
                P = pattern.source;
                F = typeof flags === 'undefined' ? pattern.flags : flags;
              }
              return new OrigRegExp(pattern, flags);
            };
          }();
          wrapConstructor(OrigRegExp, RegExpShim, {
            $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
          });
          RegExp = RegExpShim; // eslint-disable-line no-global-assign
          Value.redefine(globals, 'RegExp', RegExpShim);
        }
        if (supportsDescriptors) {
          var regexGlobals = {
            input: '$_',
            lastMatch: '$&',
            lastParen: '$+',
            leftContext: '$`',
            rightContext: '$\''
          };
          _forEach(keys(regexGlobals), function (prop) {
            if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
              Value.getter(RegExp, regexGlobals[prop], function get() {
                return RegExp[prop];
              });
            }
          });
        }
        addDefaultSpecies(RegExp);
        var inverseEpsilon = 1 / Number.EPSILON;
        var roundTiesToEven = function roundTiesToEven(n) {
          // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
          return n + inverseEpsilon - inverseEpsilon;
        };
        var BINARY_32_EPSILON = Math.pow(2, -23);
        var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
        var BINARY_32_MIN_VALUE = Math.pow(2, -126);
        var E = Math.E;
        var LOG2E = Math.LOG2E;
        var LOG10E = Math.LOG10E;
        var numberCLZ = Number.prototype.clz;
        delete Number.prototype.clz; // Safari 8 has Number#clz

        var MathShims = {
          acosh: function acosh(value) {
            var x = Number(value);
            if (numberIsNaN(x) || value < 1) {
              return NaN;
            }
            if (x === 1) {
              return 0;
            }
            if (x === Infinity) {
              return x;
            }
            var xInvSquared = 1 / (x * x);
            if (x < 2) {
              return _log1p(x - 1 + _sqrt(1 - xInvSquared) * x);
            }
            var halfX = x / 2;
            return _log1p(halfX + _sqrt(1 - xInvSquared) * halfX - 1) + 1 / LOG2E;
          },
          asinh: function asinh(value) {
            var x = Number(value);
            if (x === 0 || !globalIsFinite(x)) {
              return x;
            }
            var a = _abs(x);
            var aSquared = a * a;
            var s = _sign(x);
            if (a < 1) {
              return s * _log1p(a + aSquared / (_sqrt(aSquared + 1) + 1));
            }
            return s * (_log1p(a / 2 + _sqrt(1 + 1 / aSquared) * a / 2 - 1) + 1 / LOG2E);
          },
          atanh: function atanh(value) {
            var x = Number(value);
            if (x === 0) {
              return x;
            }
            if (x === -1) {
              return -Infinity;
            }
            if (x === 1) {
              return Infinity;
            }
            if (numberIsNaN(x) || x < -1 || x > 1) {
              return NaN;
            }
            var a = _abs(x);
            return _sign(x) * _log1p(2 * a / (1 - a)) / 2;
          },
          cbrt: function cbrt(value) {
            var x = Number(value);
            if (x === 0) {
              return x;
            }
            var negate = x < 0;
            var result;
            if (negate) {
              x = -x;
            }
            if (x === Infinity) {
              result = Infinity;
            } else {
              result = _exp(_log(x) / 3);
              // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
              result = (x / (result * result) + 2 * result) / 3;
            }
            return negate ? -result : result;
          },
          clz32: function clz32(value) {
            // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
            var x = Number(value);
            var number = ES.ToUint32(x);
            if (number === 0) {
              return 32;
            }
            return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
          },
          cosh: function cosh(value) {
            var x = Number(value);
            if (x === 0) {
              return 1;
            } // +0 or -0
            if (numberIsNaN(x)) {
              return NaN;
            }
            if (!globalIsFinite(x)) {
              return Infinity;
            }
            var t = _exp(_abs(x) - 1);
            return (t + 1 / (t * E * E)) * (E / 2);
          },
          expm1: function expm1(value) {
            var x = Number(value);
            if (x === -Infinity) {
              return -1;
            }
            if (!globalIsFinite(x) || x === 0) {
              return x;
            }
            if (_abs(x) > 0.5) {
              return _exp(x) - 1;
            }
            // A more precise approximation using Taylor series expansion
            // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
            var t = x;
            var sum = 0;
            var n = 1;
            while (sum + t !== sum) {
              sum += t;
              n += 1;
              t *= x / n;
            }
            return sum;
          },
          hypot: function hypot(x, y) {
            var result = 0;
            var largest = 0;
            for (var i = 0; i < arguments.length; ++i) {
              var value = _abs(Number(arguments[i]));
              if (largest < value) {
                result *= largest / value * (largest / value);
                result += 1;
                largest = value;
              } else {
                result += value > 0 ? value / largest * (value / largest) : value;
              }
            }
            return largest === Infinity ? Infinity : largest * _sqrt(result);
          },
          log2: function log2(value) {
            return _log(value) * LOG2E;
          },
          log10: function log10(value) {
            return _log(value) * LOG10E;
          },
          log1p: _log1p,
          sign: _sign,
          sinh: function sinh(value) {
            var x = Number(value);
            if (!globalIsFinite(x) || x === 0) {
              return x;
            }
            var a = _abs(x);
            if (a < 1) {
              var u = Math.expm1(a);
              return _sign(x) * u * (1 + 1 / (u + 1)) / 2;
            }
            var t = _exp(a - 1);
            return _sign(x) * (t - 1 / (t * E * E)) * (E / 2);
          },
          tanh: function tanh(value) {
            var x = Number(value);
            if (numberIsNaN(x) || x === 0) {
              return x;
            }
            // can exit early at +-20 as JS loses precision for true value at this integer
            if (x >= 20) {
              return 1;
            }
            if (x <= -20) {
              return -1;
            }
            return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
          },
          trunc: function trunc(value) {
            var x = Number(value);
            return x < 0 ? -_floor(-x) : _floor(x);
          },
          imul: function imul(x, y) {
            // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
            var a = ES.ToUint32(x);
            var b = ES.ToUint32(y);
            var ah = a >>> 16 & 0xffff;
            var al = a & 0xffff;
            var bh = b >>> 16 & 0xffff;
            var bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
          },
          fround: function fround(x) {
            var v = Number(x);
            if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
              return v;
            }
            var sign = _sign(v);
            var abs = _abs(v);
            if (abs < BINARY_32_MIN_VALUE) {
              return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
            }
            // Veltkamp's splitting (?)
            var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
            var result = a - (a - abs);
            if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
              return sign * Infinity;
            }
            return sign * result;
          }
        };
        var withinULPDistance = function withinULPDistance(result, expected, distance) {
          return _abs(1 - result / expected) / Number.EPSILON < (distance || 8);
        };
        defineProperties(Math, MathShims);
        // Chrome < 40 sinh returns ∞ for large numbers
        defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(710) === Infinity);
        // Chrome < 40 cosh returns ∞ for large numbers
        defineProperty(Math, 'cosh', MathShims.cosh, Math.cosh(710) === Infinity);
        // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
        defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
        // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
        defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
        // Chrome < 54 asinh returns ∞ for large numbers and should not
        defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(1e+300) === Infinity);
        // Chrome < 54 atanh incorrectly returns 0 for large numbers
        defineProperty(Math, 'atanh', MathShims.atanh, Math.atanh(1e-300) === 0);
        // Chrome 40 has an imprecise Math.tanh with very small numbers
        defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
        // Chrome 40 loses Math.acosh precision with high numbers
        defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
        // Chrome < 54 has an inaccurate acosh for EPSILON deltas
        defineProperty(Math, 'acosh', MathShims.acosh, !withinULPDistance(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));
        // Firefox 38 on Windows
        defineProperty(Math, 'cbrt', MathShims.cbrt, !withinULPDistance(Math.cbrt(1e-300), 1e-100));
        // node 0.11 has an imprecise Math.sinh with very small numbers
        defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
        // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
        var expm1OfTen = Math.expm1(10);
        defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
        // node v12.11 - v12.15 report NaN
        defineProperty(Math, 'hypot', MathShims.hypot, Math.hypot(Infinity, NaN) !== Infinity);
        var origMathRound = Math.round;
        // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
        var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;

        // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
        // This behavior should be governed by "round to nearest, ties to even mode"
        // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type
        // These are the boundary cases where it breaks.
        var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
        var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
        var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function (num) {
          return Math.round(num) === num;
        });
        defineProperty(Math, 'round', function round(x) {
          var floor = _floor(x);
          var ceil = floor === -1 ? -0 : floor + 1;
          return x - floor < 0.5 ? floor : ceil;
        }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
        Value.preserveToString(Math.round, origMathRound);
        var origImul = Math.imul;
        if (Math.imul(0xffffffff, 5) !== -5) {
          // Safari 6.1, at least, reports "0" for this value
          Math.imul = MathShims.imul;
          Value.preserveToString(Math.imul, origImul);
        }
        if (Math.imul.length !== 2) {
          // Safari 8.0.4 has a length of 1
          // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
          overrideNative(Math, 'imul', function imul(x, y) {
            return ES.Call(origImul, Math, arguments);
          });
        }

        // Promises
        // Simplest possible implementation; use a 3rd-party library if you
        // want the best possible speed and/or long stack traces.
        var PromiseShim = function () {
          var setTimeout = globals.setTimeout;
          // some environments don't have setTimeout - no way to shim here.
          if (typeof setTimeout !== 'function' && _typeof(setTimeout) !== 'object') {
            return;
          }
          ES.IsPromise = function (promise) {
            if (!ES.TypeIsObject(promise)) {
              return false;
            }
            if (typeof promise._promise === 'undefined') {
              return false; // uninitialized, or missing our hidden field.
            }
            return true;
          };

          // "PromiseCapability" in the spec is what most promise implementations
          // call a "deferred".
          var PromiseCapability = function PromiseCapability(C) {
            if (!ES.IsConstructor(C)) {
              throw new TypeError('Bad promise constructor');
            }
            var capability = this;
            var resolver = function resolver(resolve, reject) {
              if (capability.resolve !== void 0 || capability.reject !== void 0) {
                throw new TypeError('Bad Promise implementation!');
              }
              capability.resolve = resolve;
              capability.reject = reject;
            };
            // Initialize fields to inform optimizers about the object shape.
            capability.resolve = void 0;
            capability.reject = void 0;
            capability.promise = new C(resolver);
            if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
              throw new TypeError('Bad promise constructor');
            }
          };

          // find an appropriate setImmediate-alike
          var makeZeroTimeout;
          if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
            makeZeroTimeout = function makeZeroTimeout() {
              // from http://dbaron.org/log/20100309-faster-timeouts
              var timeouts = [];
              var messageName = 'zero-timeout-message';
              var setZeroTimeout = function setZeroTimeout(fn) {
                _push(timeouts, fn);
                window.postMessage(messageName, '*');
              };
              var handleMessage = function handleMessage(event) {
                if (event.source === window && event.data === messageName) {
                  event.stopPropagation();
                  if (timeouts.length === 0) {
                    return;
                  }
                  var fn = _shift(timeouts);
                  fn();
                }
              };
              window.addEventListener('message', handleMessage, true);
              return setZeroTimeout;
            };
          }
          var makePromiseAsap = function makePromiseAsap() {
            // An efficient task-scheduler based on a pre-existing Promise
            // implementation, which we can use even if we override the
            // global Promise below (in order to workaround bugs)
            // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
            var P = globals.Promise;
            var pr = P && P.resolve && P.resolve();
            return pr && function (task) {
              return pr.then(task);
            };
          };
          var enqueue = ES.IsCallable(globals.setImmediate) ? globals.setImmediate : (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.nextTick ? process.nextTick : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function (task) {
            setTimeout(task, 0);
          }); // fallback

          // Constants for Promise implementation
          var PROMISE_IDENTITY = function PROMISE_IDENTITY(x) {
            return x;
          };
          var PROMISE_THROWER = function PROMISE_THROWER(e) {
            throw e;
          };
          var PROMISE_PENDING = 0;
          var PROMISE_FULFILLED = 1;
          var PROMISE_REJECTED = 2;
          // We store fulfill/reject handlers and capabilities in a single array.
          var PROMISE_FULFILL_OFFSET = 0;
          var PROMISE_REJECT_OFFSET = 1;
          var PROMISE_CAPABILITY_OFFSET = 2;
          // This is used in an optimization for chaining promises via then.
          var PROMISE_FAKE_CAPABILITY = {};
          var enqueuePromiseReactionJob = function enqueuePromiseReactionJob(handler, capability, argument) {
            enqueue(function () {
              promiseReactionJob(handler, capability, argument);
            });
          };
          var promiseReactionJob = function promiseReactionJob(handler, promiseCapability, argument) {
            var handlerResult, f;
            if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
              // Fast case, when we don't actually need to chain through to a
              // (real) promiseCapability.
              return handler(argument);
            }
            try {
              handlerResult = handler(argument);
              f = promiseCapability.resolve;
            } catch (e) {
              handlerResult = e;
              f = promiseCapability.reject;
            }
            f(handlerResult);
          };
          var fulfillPromise = function fulfillPromise(promise, value) {
            var _promise = promise._promise;
            var length = _promise.reactionLength;
            if (length > 0) {
              enqueuePromiseReactionJob(_promise.fulfillReactionHandler0, _promise.reactionCapability0, value);
              _promise.fulfillReactionHandler0 = void 0;
              _promise.rejectReactions0 = void 0;
              _promise.reactionCapability0 = void 0;
              if (length > 1) {
                for (var i = 1, idx = 0; i < length; i++, idx += 3) {
                  enqueuePromiseReactionJob(_promise[idx + PROMISE_FULFILL_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], value);
                  promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
                  promise[idx + PROMISE_REJECT_OFFSET] = void 0;
                  promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
                }
              }
            }
            _promise.result = value;
            _promise.state = PROMISE_FULFILLED;
            _promise.reactionLength = 0;
          };
          var rejectPromise = function rejectPromise(promise, reason) {
            var _promise = promise._promise;
            var length = _promise.reactionLength;
            if (length > 0) {
              enqueuePromiseReactionJob(_promise.rejectReactionHandler0, _promise.reactionCapability0, reason);
              _promise.fulfillReactionHandler0 = void 0;
              _promise.rejectReactions0 = void 0;
              _promise.reactionCapability0 = void 0;
              if (length > 1) {
                for (var i = 1, idx = 0; i < length; i++, idx += 3) {
                  enqueuePromiseReactionJob(_promise[idx + PROMISE_REJECT_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], reason);
                  promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
                  promise[idx + PROMISE_REJECT_OFFSET] = void 0;
                  promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
                }
              }
            }
            _promise.result = reason;
            _promise.state = PROMISE_REJECTED;
            _promise.reactionLength = 0;
          };
          var createResolvingFunctions = function createResolvingFunctions(promise) {
            var alreadyResolved = false;
            var resolve = function resolve(resolution) {
              var then;
              if (alreadyResolved) {
                return;
              }
              alreadyResolved = true;
              if (resolution === promise) {
                return rejectPromise(promise, new TypeError('Self resolution'));
              }
              if (!ES.TypeIsObject(resolution)) {
                return fulfillPromise(promise, resolution);
              }
              try {
                then = resolution.then;
              } catch (e) {
                return rejectPromise(promise, e);
              }
              if (!ES.IsCallable(then)) {
                return fulfillPromise(promise, resolution);
              }
              enqueue(function () {
                promiseResolveThenableJob(promise, resolution, then);
              });
            };
            var reject = function reject(reason) {
              if (alreadyResolved) {
                return;
              }
              alreadyResolved = true;
              return rejectPromise(promise, reason);
            };
            return {
              resolve: resolve,
              reject: reject
            };
          };
          var optimizedThen = function optimizedThen(then, thenable, resolve, reject) {
            // Optimization: since we discard the result, we can pass our
            // own then implementation a special hint to let it know it
            // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
            // object is local to this implementation and unforgeable outside.)
            if (then === Promise$prototype$then) {
              _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
            } else {
              _call(then, thenable, resolve, reject);
            }
          };
          var promiseResolveThenableJob = function promiseResolveThenableJob(promise, thenable, then) {
            var resolvingFunctions = createResolvingFunctions(promise);
            var resolve = resolvingFunctions.resolve;
            var reject = resolvingFunctions.reject;
            try {
              optimizedThen(then, thenable, resolve, reject);
            } catch (e) {
              reject(e);
            }
          };
          var Promise$prototype, Promise$prototype$then;
          var Promise = function () {
            var PromiseShim = function Promise(resolver) {
              if (!(this instanceof PromiseShim)) {
                throw new TypeError('Constructor Promise requires "new"');
              }
              if (this && this._promise) {
                throw new TypeError('Bad construction');
              }
              // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
              if (!ES.IsCallable(resolver)) {
                throw new TypeError('not a valid resolver');
              }
              var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
                _promise: {
                  result: void 0,
                  state: PROMISE_PENDING,
                  // The first member of the "reactions" array is inlined here,
                  // since most promises only have one reaction.
                  // We've also exploded the 'reaction' object to inline the
                  // "handler" and "capability" fields, since both fulfill and
                  // reject reactions share the same capability.
                  reactionLength: 0,
                  fulfillReactionHandler0: void 0,
                  rejectReactionHandler0: void 0,
                  reactionCapability0: void 0
                }
              });
              var resolvingFunctions = createResolvingFunctions(promise);
              var reject = resolvingFunctions.reject;
              try {
                resolver(resolvingFunctions.resolve, reject);
              } catch (e) {
                reject(e);
              }
              return promise;
            };
            return PromiseShim;
          }();
          Promise$prototype = Promise.prototype;
          var _promiseAllResolver = function _promiseAllResolver(index, values, capability, remaining) {
            var alreadyCalled = false;
            return function (x) {
              if (alreadyCalled) {
                return;
              }
              alreadyCalled = true;
              values[index] = x;
              if (--remaining.count === 0) {
                var resolve = capability.resolve;
                resolve(values); // call w/ this===undefined
              }
            };
          };
          var performPromiseAll = function performPromiseAll(iteratorRecord, C, resultCapability) {
            var it = iteratorRecord.iterator;
            var values = [];
            var remaining = {
              count: 1
            };
            var next, nextValue;
            var index = 0;
            while (true) {
              try {
                next = ES.IteratorStep(it);
                if (next === false) {
                  iteratorRecord.done = true;
                  break;
                }
                nextValue = next.value;
              } catch (e) {
                iteratorRecord.done = true;
                throw e;
              }
              values[index] = void 0;
              var nextPromise = C.resolve(nextValue);
              var resolveElement = _promiseAllResolver(index, values, resultCapability, remaining);
              remaining.count += 1;
              optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
              index += 1;
            }
            if (--remaining.count === 0) {
              var resolve = resultCapability.resolve;
              resolve(values); // call w/ this===undefined
            }
            return resultCapability.promise;
          };
          var performPromiseRace = function performPromiseRace(iteratorRecord, C, resultCapability) {
            var it = iteratorRecord.iterator;
            var next, nextValue, nextPromise;
            while (true) {
              try {
                next = ES.IteratorStep(it);
                if (next === false) {
                  // NOTE: If iterable has no items, resulting promise will never
                  // resolve; see:
                  // https://github.com/domenic/promises-unwrapping/issues/75
                  // https://bugs.ecmascript.org/show_bug.cgi?id=2515
                  iteratorRecord.done = true;
                  break;
                }
                nextValue = next.value;
              } catch (e) {
                iteratorRecord.done = true;
                throw e;
              }
              nextPromise = C.resolve(nextValue);
              optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
            }
            return resultCapability.promise;
          };
          defineProperties(Promise, {
            all: function all(iterable) {
              var C = this;
              if (!ES.TypeIsObject(C)) {
                throw new TypeError('Promise is not object');
              }
              var capability = new PromiseCapability(C);
              var iterator, iteratorRecord;
              try {
                iterator = ES.GetIterator(iterable);
                iteratorRecord = {
                  iterator: iterator,
                  done: false
                };
                return performPromiseAll(iteratorRecord, C, capability);
              } catch (e) {
                var exception = e;
                if (iteratorRecord && !iteratorRecord.done) {
                  try {
                    ES.IteratorClose(iterator, true);
                  } catch (ee) {
                    exception = ee;
                  }
                }
                var reject = capability.reject;
                reject(exception);
                return capability.promise;
              }
            },
            race: function race(iterable) {
              var C = this;
              if (!ES.TypeIsObject(C)) {
                throw new TypeError('Promise is not object');
              }
              var capability = new PromiseCapability(C);
              var iterator, iteratorRecord;
              try {
                iterator = ES.GetIterator(iterable);
                iteratorRecord = {
                  iterator: iterator,
                  done: false
                };
                return performPromiseRace(iteratorRecord, C, capability);
              } catch (e) {
                var exception = e;
                if (iteratorRecord && !iteratorRecord.done) {
                  try {
                    ES.IteratorClose(iterator, true);
                  } catch (ee) {
                    exception = ee;
                  }
                }
                var reject = capability.reject;
                reject(exception);
                return capability.promise;
              }
            },
            reject: function reject(reason) {
              var C = this;
              if (!ES.TypeIsObject(C)) {
                throw new TypeError('Bad promise constructor');
              }
              var capability = new PromiseCapability(C);
              var rejectFunc = capability.reject;
              rejectFunc(reason); // call with this===undefined
              return capability.promise;
            },
            resolve: function resolve(v) {
              // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
              var C = this;
              if (!ES.TypeIsObject(C)) {
                throw new TypeError('Bad promise constructor');
              }
              if (ES.IsPromise(v)) {
                var constructor = v.constructor;
                if (constructor === C) {
                  return v;
                }
              }
              var capability = new PromiseCapability(C);
              var resolveFunc = capability.resolve;
              resolveFunc(v); // call with this===undefined
              return capability.promise;
            }
          });
          defineProperties(Promise$prototype, {
            'catch': function _catch(onRejected) {
              return this.then(null, onRejected);
            },
            then: function then(onFulfilled, onRejected) {
              var promise = this;
              if (!ES.IsPromise(promise)) {
                throw new TypeError('not a promise');
              }
              var C = ES.SpeciesConstructor(promise, Promise);
              var resultCapability;
              var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
              if (returnValueIsIgnored && C === Promise) {
                resultCapability = PROMISE_FAKE_CAPABILITY;
              } else {
                resultCapability = new PromiseCapability(C);
              }
              // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
              // Note that we've split the 'reaction' object into its two
              // components, "capabilities" and "handler"
              // "capabilities" is always equal to `resultCapability`
              var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
              var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
              var _promise = promise._promise;
              var value;
              if (_promise.state === PROMISE_PENDING) {
                if (_promise.reactionLength === 0) {
                  _promise.fulfillReactionHandler0 = fulfillReactionHandler;
                  _promise.rejectReactionHandler0 = rejectReactionHandler;
                  _promise.reactionCapability0 = resultCapability;
                } else {
                  var idx = 3 * (_promise.reactionLength - 1);
                  _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
                  _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
                  _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
                }
                _promise.reactionLength += 1;
              } else if (_promise.state === PROMISE_FULFILLED) {
                value = _promise.result;
                enqueuePromiseReactionJob(fulfillReactionHandler, resultCapability, value);
              } else if (_promise.state === PROMISE_REJECTED) {
                value = _promise.result;
                enqueuePromiseReactionJob(rejectReactionHandler, resultCapability, value);
              } else {
                throw new TypeError('unexpected Promise state');
              }
              return resultCapability.promise;
            }
          });
          // This helps the optimizer by ensuring that methods which take
          // capabilities aren't polymorphic.
          PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
          Promise$prototype$then = Promise$prototype.then;
          return Promise;
        }();

        // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
        if (globals.Promise) {
          delete globals.Promise.accept;
          delete globals.Promise.defer;
          delete globals.Promise.prototype.chain;
        }
        if (typeof PromiseShim === 'function') {
          // export the Promise constructor.
          defineProperties(globals, {
            Promise: PromiseShim
          });
          // In Chrome 33 (and thereabouts) Promise is defined, but the
          // implementation is buggy in a number of ways.  Let's check subclassing
          // support to see if we have a buggy implementation.
          var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
            return S.resolve(42).then(function () {}) instanceof S;
          });
          var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () {
            return globals.Promise.reject(42).then(null, 5).then(null, noop);
          });
          var promiseRequiresObjectContext = throwsError(function () {
            return globals.Promise.call(3, noop);
          });
          // Promise.resolve() was errata'ed late in the ES6 process.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
          //      https://code.google.com/p/v8/issues/detail?id=4161
          // It serves as a proxy for a number of other bugs in early Promise
          // implementations.
          var promiseResolveBroken = function (Promise) {
            var p = Promise.resolve(5);
            p.constructor = {};
            var p2 = Promise.resolve(p);
            try {
              p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
            } catch (e) {
              return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
            }
            return p === p2; // This *should* be false!
          }(globals.Promise);

          // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
          var getsThenSynchronously = supportsDescriptors && function () {
            var count = 0;
            // eslint-disable-next-line getter-return
            var thenable = Object.defineProperty({}, 'then', {
              get: function get() {
                count += 1;
              }
            });
            Promise.resolve(thenable);
            return count === 1;
          }();
          var BadResolverPromise = function BadResolverPromise(executor) {
            var p = new Promise(executor);
            executor(3, function () {});
            this.then = p.then;
            this.constructor = BadResolverPromise;
          };
          BadResolverPromise.prototype = Promise.prototype;
          BadResolverPromise.all = Promise.all;
          // Chrome Canary 49 (probably older too) has some implementation bugs
          var hasBadResolverPromise = valueOrFalseIfThrows(function () {
            return !!BadResolverPromise.all([1, 2]);
          });
          if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext || promiseResolveBroken || !getsThenSynchronously || hasBadResolverPromise) {
            Promise = PromiseShim; // eslint-disable-line no-global-assign
            overrideNative(globals, 'Promise', PromiseShim);
          }
          if (Promise.all.length !== 1) {
            var origAll = Promise.all;
            overrideNative(Promise, 'all', function all(iterable) {
              return ES.Call(origAll, this, arguments);
            });
          }
          if (Promise.race.length !== 1) {
            var origRace = Promise.race;
            overrideNative(Promise, 'race', function race(iterable) {
              return ES.Call(origRace, this, arguments);
            });
          }
          if (Promise.resolve.length !== 1) {
            var origResolve = Promise.resolve;
            overrideNative(Promise, 'resolve', function resolve(x) {
              return ES.Call(origResolve, this, arguments);
            });
          }
          if (Promise.reject.length !== 1) {
            var origReject = Promise.reject;
            overrideNative(Promise, 'reject', function reject(r) {
              return ES.Call(origReject, this, arguments);
            });
          }
          ensureEnumerable(Promise, 'all');
          ensureEnumerable(Promise, 'race');
          ensureEnumerable(Promise, 'resolve');
          ensureEnumerable(Promise, 'reject');
          addDefaultSpecies(Promise);
        }

        // Map and Set require a true ES5 environment
        // Their fast path also requires that the environment preserve
        // property insertion order, which is not guaranteed by the spec.
        var testOrder = function testOrder(a) {
          var b = keys(_reduce(a, function (o, k) {
            o[k] = true;
            return o;
          }, {}));
          return a.join(':') === b.join(':');
        };
        var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
        // some engines (eg, Chrome) only preserve insertion order for string keys
        var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
        if (supportsDescriptors) {
          var fastkey = function fastkey(key, skipInsertionOrderCheck) {
            if (!skipInsertionOrderCheck && !preservesInsertionOrder) {
              return null;
            }
            if (isNullOrUndefined(key)) {
              return '^' + ES.ToString(key);
            } else if (typeof key === 'string') {
              return '$' + key;
            } else if (typeof key === 'number') {
              // note that -0 will get coerced to "0" when used as a property key
              if (!preservesNumericInsertionOrder) {
                return 'n' + key;
              }
              return key;
            } else if (typeof key === 'boolean') {
              return 'b' + key;
            }
            return null;
          };
          var emptyObject = function emptyObject() {
            // accomodate some older not-quite-ES5 browsers
            return Object.create ? Object.create(null) : {};
          };
          var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
            if (isArray(iterable) || Type.string(iterable)) {
              _forEach(iterable, function (entry) {
                if (!ES.TypeIsObject(entry)) {
                  throw new TypeError('Iterator value ' + entry + ' is not an entry object');
                }
                map.set(entry[0], entry[1]);
              });
            } else if (iterable instanceof MapConstructor) {
              _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
                map.set(key, value);
              });
            } else {
              var iter, adder;
              if (!isNullOrUndefined(iterable)) {
                adder = map.set;
                if (!ES.IsCallable(adder)) {
                  throw new TypeError('bad map');
                }
                iter = ES.GetIterator(iterable);
              }
              if (typeof iter !== 'undefined') {
                while (true) {
                  var next = ES.IteratorStep(iter);
                  if (next === false) {
                    break;
                  }
                  var nextItem = next.value;
                  try {
                    if (!ES.TypeIsObject(nextItem)) {
                      throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
                    }
                    _call(adder, map, nextItem[0], nextItem[1]);
                  } catch (e) {
                    ES.IteratorClose(iter, true);
                    throw e;
                  }
                }
              }
            }
          };
          var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
            if (isArray(iterable) || Type.string(iterable)) {
              _forEach(iterable, function (value) {
                set.add(value);
              });
            } else if (iterable instanceof SetConstructor) {
              _call(SetConstructor.prototype.forEach, iterable, function (value) {
                set.add(value);
              });
            } else {
              var iter, adder;
              if (!isNullOrUndefined(iterable)) {
                adder = set.add;
                if (!ES.IsCallable(adder)) {
                  throw new TypeError('bad set');
                }
                iter = ES.GetIterator(iterable);
              }
              if (typeof iter !== 'undefined') {
                while (true) {
                  var next = ES.IteratorStep(iter);
                  if (next === false) {
                    break;
                  }
                  var nextValue = next.value;
                  try {
                    _call(adder, set, nextValue);
                  } catch (e) {
                    ES.IteratorClose(iter, true);
                    throw e;
                  }
                }
              }
            }
          };
          var collectionShims = {
            Map: function () {
              var empty = {};
              var MapEntry = function MapEntry(key, value) {
                this.key = key;
                this.value = value;
                this.next = null;
                this.prev = null;
              };
              MapEntry.prototype.isRemoved = function isRemoved() {
                return this.key === empty;
              };
              var isMap = function isMap(map) {
                return !!map._es6map;
              };
              var requireMapSlot = function requireMapSlot(map, method) {
                if (!ES.TypeIsObject(map) || !isMap(map)) {
                  throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
                }
              };
              var MapIterator = function MapIterator(map, kind) {
                requireMapSlot(map, '[[MapIterator]]');
                defineProperty(this, 'head', map._head);
                defineProperty(this, 'i', this.head);
                defineProperty(this, 'kind', kind);
              };
              MapIterator.prototype = {
                isMapIterator: true,
                next: function next() {
                  if (!this.isMapIterator) {
                    throw new TypeError('Not a MapIterator');
                  }
                  var i = this.i;
                  var kind = this.kind;
                  var head = this.head;
                  if (typeof this.i === 'undefined') {
                    return iteratorResult();
                  }
                  while (i.isRemoved() && i !== head) {
                    // back up off of removed entries
                    i = i.prev;
                  }
                  // advance to next unreturned element.
                  var result;
                  while (i.next !== head) {
                    i = i.next;
                    if (!i.isRemoved()) {
                      if (kind === 'key') {
                        result = i.key;
                      } else if (kind === 'value') {
                        result = i.value;
                      } else {
                        result = [i.key, i.value];
                      }
                      this.i = i;
                      return iteratorResult(result);
                    }
                  }
                  // once the iterator is done, it is done forever.
                  this.i = void 0;
                  return iteratorResult();
                }
              };
              addIterator(MapIterator.prototype);
              var Map$prototype;
              var MapShim = function Map() {
                if (!(this instanceof Map)) {
                  throw new TypeError('Constructor Map requires "new"');
                }
                if (this && this._es6map) {
                  throw new TypeError('Bad construction');
                }
                var map = emulateES6construct(this, Map, Map$prototype, {
                  _es6map: true,
                  _head: null,
                  _map: OrigMap ? new OrigMap() : null,
                  _size: 0,
                  _storage: emptyObject()
                });
                var head = new MapEntry(null, null);
                // circular doubly-linked list.
                /* eslint no-multi-assign: 1 */
                head.next = head.prev = head;
                map._head = head;

                // Optionally initialize map from iterable
                if (arguments.length > 0) {
                  addIterableToMap(Map, map, arguments[0]);
                }
                return map;
              };
              Map$prototype = MapShim.prototype;
              Value.getter(Map$prototype, 'size', function () {
                if (typeof this._size === 'undefined') {
                  throw new TypeError('size method called on incompatible Map');
                }
                return this._size;
              });
              defineProperties(Map$prototype, {
                get: function get(key) {
                  requireMapSlot(this, 'get');
                  var entry;
                  var fkey = fastkey(key, true);
                  if (fkey !== null) {
                    // fast O(1) path
                    entry = this._storage[fkey];
                    if (entry) {
                      return entry.value;
                    }
                    return;
                  }
                  if (this._map) {
                    // fast object key path
                    entry = origMapGet.call(this._map, key);
                    if (entry) {
                      return entry.value;
                    }
                    return;
                  }
                  var head = this._head;
                  var i = head;
                  while ((i = i.next) !== head) {
                    if (ES.SameValueZero(i.key, key)) {
                      return i.value;
                    }
                  }
                },
                has: function has(key) {
                  requireMapSlot(this, 'has');
                  var fkey = fastkey(key, true);
                  if (fkey !== null) {
                    // fast O(1) path
                    return typeof this._storage[fkey] !== 'undefined';
                  }
                  if (this._map) {
                    // fast object key path
                    return origMapHas.call(this._map, key);
                  }
                  var head = this._head;
                  var i = head;
                  while ((i = i.next) !== head) {
                    if (ES.SameValueZero(i.key, key)) {
                      return true;
                    }
                  }
                  return false;
                },
                set: function set(key, value) {
                  requireMapSlot(this, 'set');
                  var head = this._head;
                  var i = head;
                  var entry;
                  var fkey = fastkey(key, true);
                  if (fkey !== null) {
                    // fast O(1) path
                    if (typeof this._storage[fkey] !== 'undefined') {
                      this._storage[fkey].value = value;
                      return this;
                    }
                    entry = this._storage[fkey] = new MapEntry(key, value); /* eslint no-multi-assign: 1 */
                    i = head.prev;
                    // fall through
                  } else if (this._map) {
                    // fast object key path
                    if (origMapHas.call(this._map, key)) {
                      origMapGet.call(this._map, key).value = value;
                    } else {
                      entry = new MapEntry(key, value);
                      origMapSet.call(this._map, key, entry);
                      i = head.prev;
                      // fall through
                    }
                  }
                  while ((i = i.next) !== head) {
                    if (ES.SameValueZero(i.key, key)) {
                      i.value = value;
                      return this;
                    }
                  }
                  entry = entry || new MapEntry(key, value);
                  if (ES.SameValue(-0, key)) {
                    entry.key = +0; // coerce -0 to +0 in entry
                  }
                  entry.next = this._head;
                  entry.prev = this._head.prev;
                  entry.prev.next = entry;
                  entry.next.prev = entry;
                  this._size += 1;
                  return this;
                },
                'delete': function _delete(key) {
                  requireMapSlot(this, 'delete');
                  var head = this._head;
                  var i = head;
                  var fkey = fastkey(key, true);
                  if (fkey !== null) {
                    // fast O(1) path
                    if (typeof this._storage[fkey] === 'undefined') {
                      return false;
                    }
                    i = this._storage[fkey].prev;
                    delete this._storage[fkey];
                    // fall through
                  } else if (this._map) {
                    // fast object key path
                    if (!origMapHas.call(this._map, key)) {
                      return false;
                    }
                    i = origMapGet.call(this._map, key).prev;
                    origMapDelete.call(this._map, key);
                    // fall through
                  }
                  while ((i = i.next) !== head) {
                    if (ES.SameValueZero(i.key, key)) {
                      i.key = empty;
                      i.value = empty;
                      i.prev.next = i.next;
                      i.next.prev = i.prev;
                      this._size -= 1;
                      return true;
                    }
                  }
                  return false;
                },
                clear: function clear() {
                  /* eslint no-multi-assign: 1 */
                  requireMapSlot(this, 'clear');
                  this._map = OrigMap ? new OrigMap() : null;
                  this._size = 0;
                  this._storage = emptyObject();
                  var head = this._head;
                  var i = head;
                  var p = i.next;
                  while ((i = p) !== head) {
                    i.key = empty;
                    i.value = empty;
                    p = i.next;
                    i.next = i.prev = head;
                  }
                  head.next = head.prev = head;
                },
                keys: function keys() {
                  requireMapSlot(this, 'keys');
                  return new MapIterator(this, 'key');
                },
                values: function values() {
                  requireMapSlot(this, 'values');
                  return new MapIterator(this, 'value');
                },
                entries: function entries() {
                  requireMapSlot(this, 'entries');
                  return new MapIterator(this, 'key+value');
                },
                forEach: function forEach(callback) {
                  requireMapSlot(this, 'forEach');
                  var context = arguments.length > 1 ? arguments[1] : null;
                  var it = this.entries();
                  for (var entry = it.next(); !entry.done; entry = it.next()) {
                    if (context) {
                      _call(callback, context, entry.value[1], entry.value[0], this);
                    } else {
                      callback(entry.value[1], entry.value[0], this);
                    }
                  }
                }
              });
              addIterator(Map$prototype, Map$prototype.entries);
              return MapShim;
            }(),
            Set: function () {
              var isSet = function isSet(set) {
                return set._es6set && typeof set._storage !== 'undefined';
              };
              var requireSetSlot = function requireSetSlot(set, method) {
                if (!ES.TypeIsObject(set) || !isSet(set)) {
                  // https://github.com/paulmillr/es6-shim/issues/176
                  throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
                }
              };

              // Creating a Map is expensive.  To speed up the common case of
              // Sets containing only string or numeric keys, we use an object
              // as backing storage and lazily create a full Map only when
              // required.
              var Set$prototype;
              var SetShim = function Set() {
                if (!(this instanceof Set)) {
                  throw new TypeError('Constructor Set requires "new"');
                }
                if (this && this._es6set) {
                  throw new TypeError('Bad construction');
                }
                var set = emulateES6construct(this, Set, Set$prototype, {
                  _es6set: true,
                  '[[SetData]]': null,
                  _storage: emptyObject()
                });
                if (!set._es6set) {
                  throw new TypeError('bad set');
                }

                // Optionally initialize Set from iterable
                if (arguments.length > 0) {
                  addIterableToSet(Set, set, arguments[0]);
                }
                return set;
              };
              Set$prototype = SetShim.prototype;
              var decodeKey = function decodeKey(key) {
                var k = key;
                if (k === '^null') {
                  return null;
                } else if (k === '^undefined') {
                  return void 0;
                }
                var first = k.charAt(0);
                if (first === '$') {
                  return _strSlice(k, 1);
                } else if (first === 'n') {
                  return +_strSlice(k, 1);
                } else if (first === 'b') {
                  return k === 'btrue';
                }
                return +k;
              };
              // Switch from the object backing storage to a full Map.
              var ensureMap = function ensureMap(set) {
                if (!set['[[SetData]]']) {
                  var m = new collectionShims.Map();
                  set['[[SetData]]'] = m;
                  _forEach(keys(set._storage), function (key) {
                    var k = decodeKey(key);
                    m.set(k, k);
                  });
                  set['[[SetData]]'] = m;
                }
                set._storage = null; // free old backing storage
              };
              Value.getter(SetShim.prototype, 'size', function () {
                requireSetSlot(this, 'size');
                if (this._storage) {
                  return keys(this._storage).length;
                }
                ensureMap(this);
                return this['[[SetData]]'].size;
              });
              defineProperties(SetShim.prototype, {
                has: function has(key) {
                  requireSetSlot(this, 'has');
                  var fkey;
                  if (this._storage && (fkey = fastkey(key)) !== null) {
                    return !!this._storage[fkey];
                  }
                  ensureMap(this);
                  return this['[[SetData]]'].has(key);
                },
                add: function add(key) {
                  requireSetSlot(this, 'add');
                  var fkey;
                  if (this._storage && (fkey = fastkey(key)) !== null) {
                    this._storage[fkey] = true;
                    return this;
                  }
                  ensureMap(this);
                  this['[[SetData]]'].set(key, key);
                  return this;
                },
                'delete': function _delete(key) {
                  requireSetSlot(this, 'delete');
                  var fkey;
                  if (this._storage && (fkey = fastkey(key)) !== null) {
                    var hasFKey = _hasOwnProperty(this._storage, fkey);
                    return delete this._storage[fkey] && hasFKey;
                  }
                  ensureMap(this);
                  return this['[[SetData]]']['delete'](key);
                },
                clear: function clear() {
                  requireSetSlot(this, 'clear');
                  if (this._storage) {
                    this._storage = emptyObject();
                  }
                  if (this['[[SetData]]']) {
                    this['[[SetData]]'].clear();
                  }
                },
                values: function values() {
                  requireSetSlot(this, 'values');
                  ensureMap(this);
                  return new SetIterator(this['[[SetData]]'].values());
                },
                entries: function entries() {
                  requireSetSlot(this, 'entries');
                  ensureMap(this);
                  return new SetIterator(this['[[SetData]]'].entries());
                },
                forEach: function forEach(callback) {
                  requireSetSlot(this, 'forEach');
                  var context = arguments.length > 1 ? arguments[1] : null;
                  var entireSet = this;
                  ensureMap(entireSet);
                  this['[[SetData]]'].forEach(function (value, key) {
                    if (context) {
                      _call(callback, context, key, key, entireSet);
                    } else {
                      callback(key, key, entireSet);
                    }
                  });
                }
              });
              defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
              addIterator(SetShim.prototype, SetShim.prototype.values);
              var SetIterator = function SetIterator(it) {
                defineProperty(this, 'it', it);
              };
              SetIterator.prototype = {
                isSetIterator: true,
                next: function next() {
                  if (!this.isSetIterator) {
                    throw new TypeError('Not a SetIterator');
                  }
                  return this.it.next();
                }
              };
              addIterator(SetIterator.prototype);
              return SetShim;
            }()
          };
          var isGoogleTranslate = globals.Set && !Set.prototype['delete'] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray(new Set().keys);
          if (isGoogleTranslate) {
            // special-case force removal of wildly invalid Set implementation in Google Translate iframes
            // see https://github.com/paulmillr/es6-shim/issues/438 / https://twitter.com/ljharb/status/849335573114363904
            globals.Set = collectionShims.Set;
          }
          if (globals.Map || globals.Set) {
            // Safari 8, for example, doesn't accept an iterable.
            var mapAcceptsArguments = valueOrFalseIfThrows(function () {
              return new Map([[1, 2]]).get(1) === 2;
            });
            if (!mapAcceptsArguments) {
              globals.Map = function Map() {
                if (!(this instanceof Map)) {
                  throw new TypeError('Constructor Map requires "new"');
                }
                var m = new OrigMap();
                if (arguments.length > 0) {
                  addIterableToMap(Map, m, arguments[0]);
                }
                delete m.constructor;
                Object.setPrototypeOf(m, globals.Map.prototype);
                return m;
              };
              globals.Map.prototype = create(OrigMap.prototype);
              defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
              Value.preserveToString(globals.Map, OrigMap);
            }
            var testMap = new Map();
            var mapUsesSameValueZero = function () {
              // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
              var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
              m.set(-0, m);
              return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
            }();
            var mapSupportsChaining = testMap.set(1, 2) === testMap;
            if (!mapUsesSameValueZero || !mapSupportsChaining) {
              overrideNative(Map.prototype, 'set', function set(k, v) {
                _call(origMapSet, this, k === 0 ? 0 : k, v);
                return this;
              });
            }
            if (!mapUsesSameValueZero) {
              defineProperties(Map.prototype, {
                get: function get(k) {
                  return _call(origMapGet, this, k === 0 ? 0 : k);
                },
                has: function has(k) {
                  return _call(origMapHas, this, k === 0 ? 0 : k);
                }
              }, true);
              Value.preserveToString(Map.prototype.get, origMapGet);
              Value.preserveToString(Map.prototype.has, origMapHas);
            }
            var testSet = new Set();
            var setUsesSameValueZero = Set.prototype['delete'] && Set.prototype.add && Set.prototype.has && function (s) {
              s['delete'](0);
              s.add(-0);
              return !s.has(0);
            }(testSet);
            var setSupportsChaining = testSet.add(1) === testSet;
            if (!setUsesSameValueZero || !setSupportsChaining) {
              var origSetAdd = Set.prototype.add;
              Set.prototype.add = function add(v) {
                _call(origSetAdd, this, v === 0 ? 0 : v);
                return this;
              };
              Value.preserveToString(Set.prototype.add, origSetAdd);
            }
            if (!setUsesSameValueZero) {
              var origSetHas = Set.prototype.has;
              Set.prototype.has = function has(v) {
                return _call(origSetHas, this, v === 0 ? 0 : v);
              };
              Value.preserveToString(Set.prototype.has, origSetHas);
              var origSetDel = Set.prototype['delete'];
              Set.prototype['delete'] = function SetDelete(v) {
                return _call(origSetDel, this, v === 0 ? 0 : v);
              };
              Value.preserveToString(Set.prototype['delete'], origSetDel);
            }
            var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
              var m = new M([]);
              // Firefox 32 is ok with the instantiating the subclass but will
              // throw when the map is used.
              m.set(42, 42);
              return m instanceof M;
            });
            // without Object.setPrototypeOf, subclassing is not possible
            var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
            var mapRequiresNew = function () {
              try {
                return !(globals.Map() instanceof globals.Map);
              } catch (e) {
                return e instanceof TypeError;
              }
            }();
            if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
              globals.Map = function Map() {
                if (!(this instanceof Map)) {
                  throw new TypeError('Constructor Map requires "new"');
                }
                var m = new OrigMap();
                if (arguments.length > 0) {
                  addIterableToMap(Map, m, arguments[0]);
                }
                delete m.constructor;
                Object.setPrototypeOf(m, Map.prototype);
                return m;
              };
              globals.Map.prototype = OrigMap.prototype;
              defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
              Value.preserveToString(globals.Map, OrigMap);
            }
            var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
              var s = new S([]);
              s.add(42, 42);
              return s instanceof S;
            });
            // without Object.setPrototypeOf, subclassing is not possible
            var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
            var setRequiresNew = function () {
              try {
                return !(globals.Set() instanceof globals.Set);
              } catch (e) {
                return e instanceof TypeError;
              }
            }();
            if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
              var OrigSet = globals.Set;
              globals.Set = function Set() {
                if (!(this instanceof Set)) {
                  throw new TypeError('Constructor Set requires "new"');
                }
                var s = new OrigSet();
                if (arguments.length > 0) {
                  addIterableToSet(Set, s, arguments[0]);
                }
                delete s.constructor;
                Object.setPrototypeOf(s, Set.prototype);
                return s;
              };
              globals.Set.prototype = OrigSet.prototype;
              defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
              Value.preserveToString(globals.Set, OrigSet);
            }
            var newMap = new globals.Map();
            var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
              return newMap.keys().next().done;
            });
            /*
              - In Firefox < 23, Map#size is a function.
              - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
              - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
              - In Firefox 24, Map and Set do not implement forEach
              - In Firefox 25 at least, Map and Set are callable without "new"
            */
            if (typeof globals.Map.prototype.clear !== 'function' || new globals.Set().size !== 0 || newMap.size !== 0 || typeof globals.Map.prototype.keys !== 'function' || typeof globals.Set.prototype.keys !== 'function' || typeof globals.Map.prototype.forEach !== 'function' || typeof globals.Set.prototype.forEach !== 'function' || isCallableWithoutNew(globals.Map) || isCallableWithoutNew(globals.Set) || typeof newMap.keys().next !== 'function' // Safari 8
            || mapIterationThrowsStopIterator // Firefox 25
            || !mapSupportsSubclassing) {
              defineProperties(globals, {
                Map: collectionShims.Map,
                Set: collectionShims.Set
              }, true);
            }
            if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
              // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
              defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
            }

            // Shim incomplete iterator implementations.
            addIterator(Object.getPrototypeOf(new globals.Map().keys()));
            addIterator(Object.getPrototypeOf(new globals.Set().keys()));
            if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
              // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
              var anonymousSetHas = globals.Set.prototype.has;
              overrideNative(globals.Set.prototype, 'has', function has(key) {
                return _call(anonymousSetHas, this, key);
              });
            }
          }
          defineProperties(globals, collectionShims);
          addDefaultSpecies(globals.Map);
          addDefaultSpecies(globals.Set);
        }
        var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
          if (!ES.TypeIsObject(target)) {
            throw new TypeError('target must be an object');
          }
        };

        // Some Reflect methods are basically the same as
        // those on the Object global, except that a TypeError is thrown if
        // target isn't an object. As well as returning a boolean indicating
        // the success of the operation.
        var ReflectShims = {
          // Apply method in a functional form.
          apply: function apply() {
            return ES.Call(ES.Call, null, arguments);
          },
          // New operator in a functional form.
          construct: function construct(constructor, args) {
            if (!ES.IsConstructor(constructor)) {
              throw new TypeError('First argument must be a constructor.');
            }
            var newTarget = arguments.length > 2 ? arguments[2] : constructor;
            if (!ES.IsConstructor(newTarget)) {
              throw new TypeError('new.target must be a constructor.');
            }
            return ES.Construct(constructor, args, newTarget, 'internal');
          },
          // When deleting a non-existent or configurable property,
          // true is returned.
          // When attempting to delete a non-configurable property,
          // it will return false.
          deleteProperty: function deleteProperty(target, key) {
            throwUnlessTargetIsObject(target);
            if (supportsDescriptors) {
              var desc = Object.getOwnPropertyDescriptor(target, key);
              if (desc && !desc.configurable) {
                return false;
              }
            }

            // Will return true.
            return delete target[key];
          },
          has: function has(target, key) {
            throwUnlessTargetIsObject(target);
            return key in target;
          }
        };
        if (Object.getOwnPropertyNames) {
          Object.assign(ReflectShims, {
            // Basically the result of calling the internal [[OwnPropertyKeys]].
            // Concatenating propertyNames and propertySymbols should do the trick.
            // This should continue to work together with a Symbol shim
            // which overrides Object.getOwnPropertyNames and implements
            // Object.getOwnPropertySymbols.
            ownKeys: function ownKeys(target) {
              throwUnlessTargetIsObject(target);
              var keys = Object.getOwnPropertyNames(target);
              if (ES.IsCallable(Object.getOwnPropertySymbols)) {
                _pushApply(keys, Object.getOwnPropertySymbols(target));
              }
              return keys;
            }
          });
        }
        var callAndCatchException = function ConvertExceptionToBoolean(func) {
          return !throwsError(func);
        };
        if (Object.preventExtensions) {
          Object.assign(ReflectShims, {
            isExtensible: function isExtensible(target) {
              throwUnlessTargetIsObject(target);
              return Object.isExtensible(target);
            },
            preventExtensions: function preventExtensions(target) {
              throwUnlessTargetIsObject(target);
              return callAndCatchException(function () {
                return Object.preventExtensions(target);
              });
            }
          });
        }
        if (supportsDescriptors) {
          var internalGet = function get(target, key, receiver) {
            var desc = Object.getOwnPropertyDescriptor(target, key);
            if (!desc) {
              var parent = Object.getPrototypeOf(target);
              if (parent === null) {
                return void 0;
              }
              return internalGet(parent, key, receiver);
            }
            if ('value' in desc) {
              return desc.value;
            }
            if (desc.get) {
              return ES.Call(desc.get, receiver);
            }
            return void 0;
          };
          var internalSet = function set(target, key, value, receiver) {
            var desc = Object.getOwnPropertyDescriptor(target, key);
            if (!desc) {
              var parent = Object.getPrototypeOf(target);
              if (parent !== null) {
                return internalSet(parent, key, value, receiver);
              }
              desc = {
                value: void 0,
                writable: true,
                enumerable: true,
                configurable: true
              };
            }
            if ('value' in desc) {
              if (!desc.writable) {
                return false;
              }
              if (!ES.TypeIsObject(receiver)) {
                return false;
              }
              var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
              if (existingDesc) {
                return Reflect.defineProperty(receiver, key, {
                  value: value
                });
              }
              return Reflect.defineProperty(receiver, key, {
                value: value,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
            if (desc.set) {
              _call(desc.set, receiver, value);
              return true;
            }
            return false;
          };
          Object.assign(ReflectShims, {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
              throwUnlessTargetIsObject(target);
              return callAndCatchException(function () {
                return Object.defineProperty(target, propertyKey, attributes);
              });
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
              throwUnlessTargetIsObject(target);
              return Object.getOwnPropertyDescriptor(target, propertyKey);
            },
            // Syntax in a functional form.
            get: function get(target, key) {
              throwUnlessTargetIsObject(target);
              var receiver = arguments.length > 2 ? arguments[2] : target;
              return internalGet(target, key, receiver);
            },
            set: function set(target, key, value) {
              throwUnlessTargetIsObject(target);
              var receiver = arguments.length > 3 ? arguments[3] : target;
              return internalSet(target, key, value, receiver);
            }
          });
        }
        if (Object.getPrototypeOf) {
          var objectDotGetPrototypeOf = Object.getPrototypeOf;
          ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
            throwUnlessTargetIsObject(target);
            return objectDotGetPrototypeOf(target);
          };
        }
        if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
          var willCreateCircularPrototype = function willCreateCircularPrototype(object, lastProto) {
            var proto = lastProto;
            while (proto) {
              if (object === proto) {
                return true;
              }
              proto = ReflectShims.getPrototypeOf(proto);
            }
            return false;
          };
          Object.assign(ReflectShims, {
            // Sets the prototype of the given object.
            // Returns true on success, otherwise false.
            setPrototypeOf: function setPrototypeOf(object, proto) {
              throwUnlessTargetIsObject(object);
              if (proto !== null && !ES.TypeIsObject(proto)) {
                throw new TypeError('proto must be an object or null');
              }

              // If they already are the same, we're done.
              if (proto === Reflect.getPrototypeOf(object)) {
                return true;
              }

              // Cannot alter prototype if object not extensible.
              if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
                return false;
              }

              // Ensure that we do not create a circular prototype chain.
              if (willCreateCircularPrototype(object, proto)) {
                return false;
              }
              Object.setPrototypeOf(object, proto);
              return true;
            }
          });
        }
        var defineOrOverrideReflectProperty = function defineOrOverrideReflectProperty(key, shim) {
          if (!ES.IsCallable(globals.Reflect[key])) {
            defineProperty(globals.Reflect, key, shim);
          } else {
            var acceptsPrimitives = valueOrFalseIfThrows(function () {
              globals.Reflect[key](1);
              globals.Reflect[key](NaN);
              globals.Reflect[key](true);
              return true;
            });
            if (acceptsPrimitives) {
              overrideNative(globals.Reflect, key, shim);
            }
          }
        };
        Object.keys(ReflectShims).forEach(function (key) {
          defineOrOverrideReflectProperty(key, ReflectShims[key]);
        });
        var originalReflectGetProto = globals.Reflect.getPrototypeOf;
        if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
          overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
            return _call(originalReflectGetProto, globals.Reflect, target);
          });
        }
        if (globals.Reflect.setPrototypeOf) {
          if (valueOrFalseIfThrows(function () {
            globals.Reflect.setPrototypeOf(1, {});
            return true;
          })) {
            overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
          }
        }
        if (globals.Reflect.defineProperty) {
          if (!valueOrFalseIfThrows(function () {
            var basic = !globals.Reflect.defineProperty(1, 'test', {
              value: 1
            });
            // "extensible" fails on Edge 0.12
            var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
            return basic && extensible;
          })) {
            overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
          }
        }
        if (globals.Reflect.construct) {
          if (!valueOrFalseIfThrows(function () {
            var F = function F() {};
            return globals.Reflect.construct(function () {}, [], F) instanceof F;
          })) {
            overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
          }
        }
        if (String(new Date(NaN)) !== 'Invalid Date') {
          var dateToString = Date.prototype.toString;
          var shimmedDateToString = function toString() {
            var valueOf = +this;
            if (valueOf !== valueOf) {
              return 'Invalid Date';
            }
            return ES.Call(dateToString, this);
          };
          overrideNative(Date.prototype, 'toString', shimmedDateToString);
        }

        // Annex B HTML methods
        // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object
        var stringHTMLshims = {
          anchor: function anchor(name) {
            return ES.CreateHTML(this, 'a', 'name', name);
          },
          big: function big() {
            return ES.CreateHTML(this, 'big', '', '');
          },
          blink: function blink() {
            return ES.CreateHTML(this, 'blink', '', '');
          },
          bold: function bold() {
            return ES.CreateHTML(this, 'b', '', '');
          },
          fixed: function fixed() {
            return ES.CreateHTML(this, 'tt', '', '');
          },
          fontcolor: function fontcolor(color) {
            return ES.CreateHTML(this, 'font', 'color', color);
          },
          fontsize: function fontsize(size) {
            return ES.CreateHTML(this, 'font', 'size', size);
          },
          italics: function italics() {
            return ES.CreateHTML(this, 'i', '', '');
          },
          link: function link(url) {
            return ES.CreateHTML(this, 'a', 'href', url);
          },
          small: function small() {
            return ES.CreateHTML(this, 'small', '', '');
          },
          strike: function strike() {
            return ES.CreateHTML(this, 'strike', '', '');
          },
          sub: function sub() {
            return ES.CreateHTML(this, 'sub', '', '');
          },
          sup: function sub() {
            return ES.CreateHTML(this, 'sup', '', '');
          }
        };
        _forEach(Object.keys(stringHTMLshims), function (key) {
          var method = String.prototype[key];
          var shouldOverwrite = false;
          if (ES.IsCallable(method)) {
            var output = _call(method, '', ' " ');
            var quotesCount = _concat([], output.match(/"/g)).length;
            shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
          } else {
            shouldOverwrite = true;
          }
          if (shouldOverwrite) {
            overrideNative(String.prototype, key, stringHTMLshims[key]);
          }
        });
        var JSONstringifiesSymbols = function () {
          // Microsoft Edge v0.12 stringifies Symbols incorrectly
          if (!hasSymbols) {
            return false;
          } // Symbols are not supported
          var stringify = (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
          if (!stringify) {
            return false;
          } // JSON.stringify is not supported
          if (typeof stringify(_Symbol()) !== 'undefined') {
            return true;
          } // Symbols should become `undefined`
          if (stringify([_Symbol()]) !== '[null]') {
            return true;
          } // Symbols in arrays should become `null`
          var obj = {
            a: _Symbol()
          };
          obj[_Symbol()] = true;
          if (stringify(obj) !== '{}') {
            return true;
          } // Symbol-valued keys *and* Symbol-valued properties should be omitted
          return false;
        }();
        var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
          // Chrome 45 throws on stringifying object symbols
          if (!hasSymbols) {
            return true;
          } // Symbols are not supported
          return JSON.stringify(Object(_Symbol())) === '{}' && JSON.stringify([Object(_Symbol())]) === '[{}]';
        });
        if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
          var origStringify = JSON.stringify;
          overrideNative(JSON, 'stringify', function stringify(value) {
            if (_typeof(value) === 'symbol') {
              return;
            }
            var replacer;
            if (arguments.length > 1) {
              replacer = arguments[1];
            }
            var args = [value];
            if (!isArray(replacer)) {
              var replaceFn = ES.IsCallable(replacer) ? replacer : null;
              var wrappedReplacer = function wrappedReplacer(key, val) {
                var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
                if (_typeof(parsedValue) !== 'symbol') {
                  if (Type.symbol(parsedValue)) {
                    return assignTo({})(parsedValue);
                  }
                  return parsedValue;
                }
              };
              args.push(wrappedReplacer);
            } else {
              // create wrapped replacer that handles an array replacer?
              args.push(replacer);
            }
            if (arguments.length > 2) {
              args.push(arguments[2]);
            }
            return origStringify.apply(this, args);
          });
        }
        return globals;
      });

      /***/
    }),
    /***/"../node_modules/eventemitter3/index.js": (
    /*!**********************************************!*\
      !*** ../node_modules/eventemitter3/index.js ***!
      \**********************************************/
    /***/
    function _node_modules_eventemitter3_indexJs(module) {
      "use strict";

      var has = Object.prototype.hasOwnProperty,
        prefix = '~';

      /**
       * Constructor to create a storage for our `EE` objects.
       * An `Events` instance is a plain object whose properties are event names.
       *
       * @constructor
       * @api private
       */
      function Events() {}

      //
      // We try to not inherit from `Object.prototype`. In some engines creating an
      // instance in this way is faster than calling `Object.create(null)` directly.
      // If `Object.create(null)` is not supported we prefix the event names with a
      // character to make sure that the built-in object properties are not
      // overridden or used as an attack vector.
      //
      if (Object.create) {
        Events.prototype = Object.create(null);

        //
        // This hack is needed because the `__proto__` property is still inherited in
        // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
        //
        if (!new Events().__proto__) prefix = false;
      }

      /**
       * Representation of a single event listener.
       *
       * @param {Function} fn The listener function.
       * @param {Mixed} context The context to invoke the listener with.
       * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
       * @constructor
       * @api private
       */
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }

      /**
       * Minimal `EventEmitter` interface that is molded against the Node.js
       * `EventEmitter` interface.
       *
       * @constructor
       * @api public
       */
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }

      /**
       * Return an array listing the events for which the emitter has registered
       * listeners.
       *
       * @returns {Array}
       * @api public
       */
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [],
          events,
          name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };

      /**
       * Return the listeners registered for a given event.
       *
       * @param {String|Symbol} event The event name.
       * @param {Boolean} exists Only check if there are listeners.
       * @returns {Array|Boolean}
       * @api public
       */
      EventEmitter.prototype.listeners = function listeners(event, exists) {
        var evt = prefix ? prefix + event : event,
          available = this._events[evt];
        if (exists) return !!available;
        if (!available) return [];
        if (available.fn) return [available.fn];
        for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
          ee[i] = available[i].fn;
        }
        return ee;
      };

      /**
       * Calls each of the listeners registered for a given event.
       *
       * @param {String|Symbol} event The event name.
       * @returns {Boolean} `true` if the event had listeners, else `false`.
       * @api public
       */
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt],
          len = arguments.length,
          args,
          i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length,
            j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };

      /**
       * Add a listener for a given event.
       *
       * @param {String|Symbol} event The event name.
       * @param {Function} fn The listener function.
       * @param {Mixed} [context=this] The context to invoke the listener with.
       * @returns {EventEmitter} `this`.
       * @api public
       */
      EventEmitter.prototype.on = function on(event, fn, context) {
        var listener = new EE(fn, context || this),
          evt = prefix ? prefix + event : event;
        if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
        return this;
      };

      /**
       * Add a one-time listener for a given event.
       *
       * @param {String|Symbol} event The event name.
       * @param {Function} fn The listener function.
       * @param {Mixed} [context=this] The context to invoke the listener with.
       * @returns {EventEmitter} `this`.
       * @api public
       */
      EventEmitter.prototype.once = function once(event, fn, context) {
        var listener = new EE(fn, context || this, true),
          evt = prefix ? prefix + event : event;
        if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
        return this;
      };

      /**
       * Remove the listeners of a given event.
       *
       * @param {String|Symbol} event The event name.
       * @param {Function} fn Only remove the listeners that match this function.
       * @param {Mixed} context Only remove the listeners that have this context.
       * @param {Boolean} once Only remove one-time listeners.
       * @returns {EventEmitter} `this`.
       * @api public
       */
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }

          //
          // Reset the array, or remove it completely if we have no more listeners.
          //
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
        }
        return this;
      };

      /**
       * Remove all listeners, or those of the specified event.
       *
       * @param {String|Symbol} [event] The event name.
       * @returns {EventEmitter} `this`.
       * @api public
       */
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) {
            if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
          }
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };

      //
      // Alias methods names because people roll like that.
      //
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;

      //
      // This function doesn't apply anymore.
      //
      EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
        return this;
      };

      //
      // Expose the prefix.
      //
      EventEmitter.prefixed = prefix;

      //
      // Allow `EventEmitter` to be imported as module namespace.
      //
      EventEmitter.EventEmitter = EventEmitter;

      //
      // Expose the module.
      //
      if (true) {
        module.exports = EventEmitter;
      }

      /***/
    }),
    /***/"../node_modules/ieee754/index.js": (
    /*!****************************************!*\
      !*** ../node_modules/ieee754/index.js ***!
      \****************************************/
    /***/
    function _node_modules_ieee754_indexJs(__unused_webpack_module, exports) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
        buffer[offset + i - d] |= s * 128;
      };

      /***/
    }),
    /***/"./common/config.ts": (
    /*!**************************!*\
      !*** ./common/config.ts ***!
      \**************************/
    /***/
    function _common_configTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */BASE_ANGLE: function BASE_ANGLE() {
          return /* binding */_BASE_ANGLE;
        },
        /* harmony export */CMD_INIT: function CMD_INIT() {
          return /* binding */_CMD_INIT;
        },
        /* harmony export */CMD_INIT_ACK: function CMD_INIT_ACK() {
          return /* binding */_CMD_INIT_ACK;
        },
        /* harmony export */CMD_LOSE_CONNECT: function CMD_LOSE_CONNECT() {
          return /* binding */_CMD_LOSE_CONNECT;
        },
        /* harmony export */CMD_SYNC_MAIN_COORD: function CMD_SYNC_MAIN_COORD() {
          return /* binding */_CMD_SYNC_MAIN_COORD;
        },
        /* harmony export */CMD_SYNC_OTHER_COORD: function CMD_SYNC_OTHER_COORD() {
          return /* binding */_CMD_SYNC_OTHER_COORD;
        },
        /* harmony export */INIT_FOOD_COUNT: function INIT_FOOD_COUNT() {
          return /* binding */_INIT_FOOD_COUNT;
        },
        /* harmony export */MAP_HEIGHT: function MAP_HEIGHT() {
          return /* binding */_MAP_HEIGHT;
        },
        /* harmony export */MAP_RECT_HEIGHT: function MAP_RECT_HEIGHT() {
          return /* binding */_MAP_RECT_HEIGHT;
        },
        /* harmony export */MAP_RECT_WIDTH: function MAP_RECT_WIDTH() {
          return /* binding */_MAP_RECT_WIDTH;
        },
        /* harmony export */MAP_WIDTH: function MAP_WIDTH() {
          return /* binding */_MAP_WIDTH;
        },
        /* harmony export */SNAKE_IMG_SIZE: function SNAKE_IMG_SIZE() {
          return /* binding */_SNAKE_IMG_SIZE;
        },
        /* harmony export */SPEED: function SPEED() {
          return /* binding */_SPEED;
        },
        /* harmony export */SYNC_PER_FRAME: function SYNC_PER_FRAME() {
          return /* binding */_SYNC_PER_FRAME;
        },
        /* harmony export */TILE_IMG_HEIGHT: function TILE_IMG_HEIGHT() {
          return /* binding */_TILE_IMG_HEIGHT;
        },
        /* harmony export */TILE_IMG_WIDTH: function TILE_IMG_WIDTH() {
          return /* binding */_TILE_IMG_WIDTH;
        },
        /* harmony export */devPort: function devPort() {
          return /* binding */_devPort;
        },
        /* harmony export */port: function port() {
          return /* binding */_port;
        },
        /* harmony export */socketPort: function socketPort() {
          return /* binding */_socketPort;
        }
        /* harmony export */
      });
      /**
       * Created by wanghx on 5/3/16.
       *
       * constant
       *
       */
      var _CMD_INIT = 100; // init cmd
      var _CMD_INIT_ACK = 101; // init answer cmd
      var _CMD_SYNC_MAIN_COORD = 102; // sync main coordinates
      var _CMD_SYNC_OTHER_COORD = 103; // sync other coordinates
      var _CMD_LOSE_CONNECT = 104; // lose connection
      var _port = 9999; // server port
      var _devPort = _port - 1; // development port
      var _socketPort = 9999; // websocket port
      var _MAP_WIDTH = 5000; // map width
      var _MAP_HEIGHT = 5000; // map height
      var _SPEED = 4; // speed of snake
      var _BASE_ANGLE = Math.PI * 200; // base angle of snake
      var _MAP_RECT_WIDTH = 200; // map small rect width
      var _MAP_RECT_HEIGHT = 200; // map small rect height
      var _TILE_IMG_WIDTH = 1000; // tile image width
      var _TILE_IMG_HEIGHT = 1000; // tile image height
      var _SNAKE_IMG_SIZE = 60; // size of snake's image
      var _SYNC_PER_FRAME = 5; // sync coordinates every 5 frames
      var _INIT_FOOD_COUNT = 2000;

      /***/
    }),
    /***/"./common/utils.ts": (
    /*!*************************!*\
      !*** ./common/utils.ts ***!
      \*************************/
    /***/
    function _common_utilsTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */AREA_TYPE: function AREA_TYPE() {
          return /* binding */_AREA_TYPE;
        },
        /* harmony export */FOOD_TYPE: function FOOD_TYPE() {
          return /* binding */_FOOD_TYPE;
        },
        /* harmony export */SNAKE_BODY_TYPE: function SNAKE_BODY_TYPE() {
          return /* binding */_SNAKE_BODY_TYPE;
        },
        /* harmony export */SNAKE_TYPE: function SNAKE_TYPE() {
          return /* binding */_SNAKE_TYPE;
        },
        /* harmony export */VIEW_TYPE: function VIEW_TYPE() {
          return /* binding */_VIEW_TYPE;
        },
        /* harmony export */decode: function decode() {
          return /* binding */_decode;
        },
        /* harmony export */encode: function encode() {
          return /* binding */_encode;
        }
        /* harmony export */
      });
      /* harmony import */
      var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */"../node_modules/buffer/index.js");
      var OPT_LEN = 1;
      var PACKET_TYPE_LEN = 1;
      var _SNAKE_TYPE = 1;
      var _FOOD_TYPE = 2;
      var _VIEW_TYPE = 3;
      var _AREA_TYPE = 4;
      var _SNAKE_BODY_TYPE = 5;
      var floatType = {
        byteLen: 3,
        encode: function encode(value) {
          return ~~(value * 100);
        },
        decode: function decode(value) {
          return value / 100;
        }
      };
      var packetTypes = _defineProperty(_defineProperty(_defineProperty({}, _SNAKE_TYPE, {
        id: {
          byteLen: 2
        },
        angle: {
          byteLen: 2
        },
        size: {
          byteLen: 2
        },
        speed: {
          byteLen: 1
        },
        length: {
          byteLen: 2
        },
        x: floatType,
        y: floatType
      }), _FOOD_TYPE, {
        x: floatType,
        y: floatType
      }), _VIEW_TYPE, {
        width: {
          byteLen: 2
        },
        height: {
          byteLen: 2
        }
      });
      // encode data to binary data
      // {
      //   opt: 1,
      //   data: [{
      //     type: 1,
      //     packet: {
      //       x: data.x,
      //       y: data.y,
      //       angle: data.angle * Math.PI / 180,
      //       size: data.size,
      //     }
      //   }]
      // }
      buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.poolSize = 100 * 1024;
      var allocLen = 1024;
      function _encode(_ref) {
        var opt = _ref.opt,
          data = _ref.data;
        var bufList = [];
        var byteLen = 0;
        var offset = 0;
        data = Array.isArray(data) ? data : [data];
        var buf = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(allocLen);
        bufList.push(buf);
        var writeUInt = function writeUInt(value, byteLength) {
          byteLen += byteLength;
          var less = allocLen - offset;
          if (less < byteLength) {
            if (less) {
              // split buffer
              byteLength -= less;
              var i = Math.pow(2, byteLength * 8);
              var l = value / i >>> 0;
              value -= l * i;
              buf.writeUIntBE(l, offset, less);
            }
            buf = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(allocLen);
            bufList.push(buf);
            offset = 0;
          }
          buf.writeUIntBE(value, offset, byteLength);
          offset += byteLength;
        };
        writeUInt(opt, OPT_LEN);
        // set buffer
        data.forEach(function (item) {
          var packetType = packetTypes[item.type];
          writeUInt(item.type, PACKET_TYPE_LEN);
          for (var key in packetType) {
            if (packetType.hasOwnProperty(key)) {
              var value = +item.packet[key] || 0;
              var packetItem = packetType[key];
              var byteLength = packetItem.byteLen;
              if (packetItem.encode) {
                value = packetItem.encode(value);
              }
              writeUInt(value, byteLength);
            }
          }
        });
        if (bufList.length > 1) {
          buf = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.concat(bufList, bufList.length * allocLen);
        }
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + byteLen);
      }
      // decode binary data to json
      function _decode(buf) {
        var json = {};
        // buf may be node buffer
        if (!ArrayBuffer.isView(buf)) {
          buf = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(buf);
        }
        json.opt = buf[0];
        json.data = [];
        var max = buf.byteLength - OPT_LEN;
        var i = OPT_LEN;
        while (i < max) {
          var type = buf[i];
          var packetType = packetTypes[type];
          var data = {};
          i += PACKET_TYPE_LEN;
          for (var key in packetType) {
            if (packetType.hasOwnProperty(key)) {
              var packetItem = packetType[key];
              var byteLen = packetItem.byteLen;
              var value = buf.readUIntBE(i, byteLen);
              data[key] = packetItem.decode ? packetItem.decode(value) : value;
              i += byteLen;
            }
          }
          json.data.push({
            type: type,
            packet: data
          });
        }
        return json;
      }

      /***/
    }),
    /***/"./element/Base.ts": (
    /*!*************************!*\
      !*** ./element/Base.ts ***!
      \*************************/
    /***/
    function _element_BaseTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Base: function Base() {
          return /* binding */_Base;
        }
        /* harmony export */
      });
      /* harmony import */
      var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/main */"./main.ts");
      var _Base = /*#__PURE__*/function () {
        function _Base(options) {
          _classCallCheck(this, _Base);
          this.x = +(options.x || 0);
          this.y = +(options.y || 0);
          this.width = options.size || options.width || 0;
          this.height = options.size || options.height || 0;
          if (!this.width || !this.height) {
            throw new Error('element size can not be undefined');
          }
        }
        /**
         * update status
         */
        return _createClass(_Base, [{
          key: "update",
          value: function update() {
            this.prepare();
            this.action();
            this.render();
          }
        }, {
          key: "prepare",
          value: function prepare() {
            this.paintX = _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.relativeX(this.x);
            this.paintY = _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.relativeY(this.y);
            this.paintWidth = _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.relativeW(this.width);
            this.paintHeight = _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.relativeH(this.height);
            var halfWidth = this.paintWidth / 2;
            var halfHeight = this.paintHeight / 2;
            this.visible = this.paintX + halfWidth > 0 && this.paintX - halfWidth < _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.width && this.paintY + halfHeight > 0 && this.paintY - halfHeight < _main__WEBPACK_IMPORTED_MODULE_0__.gameMap.view.height;
          }
        }]);
      }();
      /***/
    }),
    /***/"./element/Snake.ts": (
    /*!**************************!*\
      !*** ./element/Snake.ts ***!
      \**************************/
    /***/
    function _element_SnakeTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */CustomSnake: function CustomSnake() {
          return /* binding */_CustomSnake;
        },
        /* harmony export */Movement: function Movement() {
          return /* binding */_Movement;
        },
        /* harmony export */Snake: function Snake() {
          return /* binding */_Snake;
        }
        /* harmony export */
      });
      /* harmony import */
      var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/common/config */"./common/config.ts");
      /* harmony import */
      var _libs_imageStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/libs/imageStore */"./libs/imageStore.ts");
      /* harmony import */
      var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/main */"./main.ts");
      /* harmony import */
      var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base */"./element/Base.ts");
      var _Movement = /*#__PURE__*/_createClass(function _Movement(x, y, speed, angle) {
        _classCallCheck(this, _Movement);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle;
      });
      var _Snake = /*#__PURE__*/function (_Base__WEBPACK_IMPORT) {
        function _Snake(options) {
          var _this;
          _classCallCheck(this, _Snake);
          _this = _callSuper(this, _Snake, [options]);
          _this.point = 0;
          _this.isSpeedUp = false;
          _this.fillColor = '';
          _this.stopped = false;
          // save snake's movement
          _this.movementQueue = [];
          _this.speed = _common_config__WEBPACK_IMPORTED_MODULE_0__.SPEED;
          _this.oldSpeed = _common_config__WEBPACK_IMPORTED_MODULE_0__.SPEED;
          _this.turnSpeed = 0.06;
          _this.vx = 0;
          _this.vy = 0;
          _this.fillColor = options.fillColor || '#fff';
          _this.toAngle = _this.angle = (options.angle || 0) + _common_config__WEBPACK_IMPORTED_MODULE_0__.BASE_ANGLE;
          _this.length = options.length || 0;
          _this.updateSize();
          _this.velocity();
          return _this;
        }
        _inherits(_Snake, _Base__WEBPACK_IMPORT);
        return _createClass(_Snake, [{
          key: "updateSize",
          value: function updateSize() {
            var added = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this.width += added;
            this.height += added;
            this.length += added * 50;
            this.turnSpeed -= added / 1000;
            this.img = (0, _libs_imageStore__WEBPACK_IMPORTED_MODULE_1__.getSnakeHeader)(this.width, this.height);
            this.movementQueueLen = Math.ceil(this.length / this.oldSpeed);
          }
          // move to new position
        }, {
          key: "moveTo",
          value: function moveTo(nx, ny) {
            var x = nx - this.x;
            var y = this.y - ny;
            var angle = Math.atan(Math.abs(x / y));
            // calculate angle, value is 0-360
            if (x > 0 && y < 0) {
              angle = Math.PI - angle;
            } else if (x < 0 && y < 0) {
              angle = Math.PI + angle;
            } else if (x < 0 && y > 0) {
              angle = Math.PI * 2 - angle;
            }
            var oldAngle = Math.abs(this.toAngle % (Math.PI * 2));
            // number of turns
            var rounds = ~~(this.toAngle / (Math.PI * 2));
            this.toAngle = angle;
            if (oldAngle >= Math.PI * 3 / 2 && this.toAngle <= Math.PI / 2) {
              // move from fourth quadrant to first quadrant
              rounds++;
            } else if (oldAngle <= Math.PI / 2 && this.toAngle >= Math.PI * 3 / 2) {
              // move from first quadrant to fourth quadrant
              rounds--;
            }
            // calculate the real angle by rounds
            this.toAngle += rounds * Math.PI * 2;
          }
          // calculate horizontal speed and vertical speed by angle of snake header
        }, {
          key: "velocity",
          value: function velocity() {
            var angle = this.angle % (Math.PI * 2);
            var vx = Math.abs(this.speed * Math.sin(angle));
            var vy = Math.abs(this.speed * Math.cos(angle));
            if (angle < Math.PI / 2) {
              this.vx = vx;
              this.vy = -vy;
            } else if (angle < Math.PI) {
              this.vx = vx;
              this.vy = vy;
            } else if (angle < Math.PI * 3 / 2) {
              this.vx = -vx;
              this.vy = vy;
            } else {
              this.vx = -vx;
              this.vy = -vy;
            }
          }
          // turn around
        }, {
          key: "turnAround",
          value: function turnAround() {
            var angleDistance = this.toAngle - this.angle;
            if (Math.abs(angleDistance) <= this.turnSpeed) {
              // reset angle
              this.toAngle = this.angle = _common_config__WEBPACK_IMPORTED_MODULE_0__.BASE_ANGLE + this.toAngle % (Math.PI * 2);
            } else {
              this.angle += Math.sign(angleDistance) * this.turnSpeed;
            }
          }
        }, {
          key: "speedUp",
          value: function speedUp() {
            if (this.isSpeedUp) {
              return;
            }
            this.isSpeedUp = true;
            this.oldSpeed = this.speed;
            this.speed *= 2;
          }
        }, {
          key: "speedDown",
          value: function speedDown() {
            if (!this.isSpeedUp) {
              return;
            }
            this.isSpeedUp = false;
            this.speed = this.oldSpeed;
          }
          // eat food
        }, {
          key: "eat",
          value: function eat(food) {
            this.point += food.point;
            // add points
            var added = food.point / 200;
            this.updateSize(added);
            return added;
          }
          // snake action
        }, {
          key: "action",
          value: function action() {
            if (this.stopped) {
              return;
            }
            // save movement
            this.movementQueue.push(new _Movement(this.x, this.y, this.speed, this.angle));
            if (this.movementQueue.length > this.movementQueueLen) {
              this.movementQueue.shift();
            }
            this.turnAround();
            this.velocity();
            this.x += this.vx;
            this.y += this.vy;
            // avoid moving to outside
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.limit(this);
          }
          // render snake
        }, {
          key: "render",
          value: function render() {
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.save();
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.beginPath();
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.moveTo(this.paintX, this.paintY);
            // stroke body
            var wholeLength = this.length;
            if (this.movementQueue.length) {
              var i = this.movementQueue.length - 1;
              while (i) {
                var movement = this.movementQueue[i];
                var x = movement.x;
                var y = movement.y;
                if (wholeLength > 0 && wholeLength < movement.speed) {
                  var lm = this.movementQueue[i + 1] || this;
                  var ratio = wholeLength / movement.speed;
                  x = lm.x - (lm.x - x) * ratio;
                  y = lm.y - (lm.y - y) * ratio;
                } else if (wholeLength < 0) {
                  break;
                }
                i--;
                wholeLength -= movement.speed;
                _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.lineTo(_main__WEBPACK_IMPORTED_MODULE_2__.gameMap.view.relativeX(x), _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.view.relativeY(y));
              }
            }
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.lineCap = 'round';
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.lineJoin = 'round';
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.strokeStyle = this.fillColor;
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.lineWidth = this.width;
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.stroke();
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.restore();
            // draw header
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.save();
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.translate(this.paintX, this.paintY);
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.rotate(this.angle);
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.drawImage(this.img, -this.paintWidth / 2, -this.paintHeight / 2, this.paintWidth, this.paintHeight);
            _main__WEBPACK_IMPORTED_MODULE_2__.gameMap.ctx.restore();
          }
        }]);
      }(_Base__WEBPACK_IMPORTED_MODULE_3__.Base);
      var _CustomSnake = /*#__PURE__*/function (_Snake2) {
        function _CustomSnake() {
          var _this2;
          _classCallCheck(this, _CustomSnake);
          _this2 = _callSuper(this, _CustomSnake, arguments);
          _this2.moveList = [];
          _this2.animateStep = 1;
          return _this2;
        }
        // move to new position
        _inherits(_CustomSnake, _Snake2);
        return _createClass(_CustomSnake, [{
          key: "sync",
          value: function sync(newSize, length, movement) {
            var added = newSize - this.width;
            this.length = length;
            this.updateSize(added);
            this.moveList.push(movement);
          }
          // snake action
        }, {
          key: "action",
          value: function action() {
            if (this.stopped || !this.moveList.length) {
              return;
            }
            // save movement
            if (this.lastMovement) {
              this.movementQueue.push(this.lastMovement);
              if (this.movementQueue.length > this.movementQueueLen) {
                this.movementQueue.shift();
              }
            }
            var len = this.moveList.length;
            var start = this.moveList.length - this.animateStep;
            this.moveList = this.moveList.slice(0, (start < 0 ? 0 : start) + 1);
            var movement = this.moveList.shift();
            if (!movement) {
              return;
            }
            this.lastMovement = movement;
            this.moveTo(movement.x, movement.y);
            this.toAngle = this.angle = _common_config__WEBPACK_IMPORTED_MODULE_0__.BASE_ANGLE + this.toAngle % (Math.PI * 2);
            this.x = movement.x;
            this.y = movement.y;
            this.speed = movement.speed;
            if (len > 6) {
              this.animateStep = 2;
            } else {
              this.animateStep = 1;
            }
          }
        }]);
      }(_Snake);
      /***/
    }),
    /***/"./framework/GameMap.ts": (
    /*!******************************!*\
      !*** ./framework/GameMap.ts ***!
      \******************************/
    /***/
    function _framework_GameMapTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */GameMap: function GameMap() {
          return /* binding */_GameMap;
        }
        /* harmony export */
      });
      /* harmony import */
      var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */"../node_modules/eventemitter3/index.js");
      /* harmony import */
      var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/common/config */"./common/config.ts");
      /* harmony import */
      var _SmallMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmallMap */"./framework/SmallMap.ts");
      /* harmony import */
      var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */"./framework/View.ts");

      // Map class
      var _GameMap = /*#__PURE__*/function (_eventemitter3__WEBPA) {
        function _GameMap(canvas, vWidth, vHeight) {
          var _this3;
          var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          _classCallCheck(this, _GameMap);
          _this3 = _callSuper(this, _GameMap);
          _this3.canvas = canvas;
          _this3.scale = scale;
          _this3.width = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_WIDTH;
          _this3.height = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_HEIGHT;
          // map tile
          _this3.tileImage = document.createElement('canvas');
          _this3.canvas.width = vWidth;
          _this3.canvas.height = vHeight;
          _this3.ctx = _this3.canvas.getContext('2d');
          _this3.paintSizeReset();
          _this3.view = new _View__WEBPACK_IMPORTED_MODULE_3__.View(_this3, vWidth, vHeight);
          _this3.smallMap = new _SmallMap__WEBPACK_IMPORTED_MODULE_2__.SmallMap(_this3, 30, 50);
          _this3.createTile();
          return _this3;
        }
        // set scale
        _inherits(_GameMap, _eventemitter3__WEBPA);
        return _createClass(_GameMap, [{
          key: "setScale",
          value: function setScale(scale) {
            if (this.scale === scale) {
              return;
            }
            this.scale = scale < 1 ? 1 : scale;
            this.paintSizeReset();
            this.emit('scale_changed');
          }
          // set toScale for creating animate
        }, {
          key: "setToScale",
          value: function setToScale(scale) {
            this.toScale = scale;
          }
          // relative to scale
        }, {
          key: "relative",
          value: function relative(val) {
            return val / this.scale;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.ctx.clearRect(0, 0, this.view.width, this.view.height);
          }
          // update status
        }, {
          key: "update",
          value: function update(player, callback) {
            if (this.toScale && this.scale !== this.toScale) {
              // const scaleDis = this.toScale - this.scale;
              // if (Math.abs(scaleDis) < 0.01) {
              //   this.setScale(this.toScale);
              // } else {
              //   this.setScale(this.scale + (this.toScale - this.scale) * 0.1);
              // }
              this.setScale(this.toScale);
            }
            this.ctx.clearRect(0, 0, this.view.width, this.view.height);
            this.view.trace(player);
            this.render();
            callback();
            this.smallMap.render();
          }
          // limit element, prevent it moving to outside
        }, {
          key: "limit",
          value: function limit(element) {
            var whalf = (element.width || 1) / 2;
            if (element.x < whalf) {
              element.x = whalf;
            } else if (element.x + whalf > this.width) {
              element.x = this.width - whalf;
            }
            var hhalf = (element.height || 1) / 2;
            if (element.y < hhalf) {
              element.y = hhalf;
            } else if (element.y + hhalf > this.height) {
              element.y = this.height - hhalf;
            }
          }
          // render map
        }, {
          key: "render",
          value: function render() {
            var view = this.view;
            var tileWid = this.relative(this.tileImage.width);
            var tileHei = this.relative(this.tileImage.height);
            var beginX = view.x < 0 ? -view.x : -view.x % tileWid;
            var beginY = view.y < 0 ? -view.y : -view.y % tileHei;
            var endX = view.x + view.width > this.paintWidth ? this.paintWidth - view.x : beginX + view.width + tileWid;
            var endY = view.y + view.height > this.paintHeight ? this.paintHeight - view.y : beginY + view.height + tileHei;
            for (var x = beginX; x <= endX; x += tileWid) {
              for (var y = beginY; y <= endY; y += tileHei) {
                var cx = endX - x;
                var cy = endY - y;
                var w = cx < tileWid ? cx : tileWid;
                var h = cy < tileHei ? cy : tileHei;
                this.ctx.drawImage(this.tileImage, 0, 0, w * this.scale, h * this.scale, x, y, w, h);
              }
            }
          }
        }, {
          key: "paintSizeReset",
          value: function paintSizeReset() {
            this.paintWidth = this.relative(this.width);
            this.paintHeight = this.relative(this.height);
          }
          // create tile
        }, {
          key: "createTile",
          value: function createTile() {
            this.tileImage.width = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_RECT_WIDTH * 8;
            this.tileImage.height = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_RECT_HEIGHT * 8;
            this.drawPattern(this.tileImage);
          }
          // draw pattern
        }, {
          key: "drawPattern",
          value: function drawPattern(image) {
            var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var ctx = image.getContext('2d');
            var colors = ['#eee', '#aaa'];
            var width = image.width * ratio;
            var height = image.height * ratio;
            var mrw = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_RECT_WIDTH / ratio;
            var mrh = _common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_RECT_HEIGHT / ratio;
            for (var x = 0, i = 0; x <= width; x += mrw, i++) {
              for (var y = 0, j = 0; y <= height; y += mrh, j++) {
                var cx = width - x;
                var cy = height - y;
                var w = cx < mrw ? cx : mrw;
                var h = cy < mrh ? cy : mrh;
                ctx.fillStyle = colors[(i + j) % colors.length];
                ctx.fillRect(x, y, w, h);
              }
            }
            ctx.lineWidth = 3;
            ctx.strokeRect(0, 0, width, height);
          }
        }]);
      }(eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter);
      /***/
    }),
    /***/"./framework/Observer.ts": (
    /*!*******************************!*\
      !*** ./framework/Observer.ts ***!
      \*******************************/
    /***/
    function _framework_ObserverTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Observer: function Observer() {
          return /* binding */_Observer;
        }
        /* harmony export */
      });
      /* harmony import */
      var _common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/common/config */"./common/config.ts");
      /* harmony import */
      var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/main */"./main.ts");
      var _Observer = /*#__PURE__*/function () {
        function _Observer(x, y) {
          _classCallCheck(this, _Observer);
          this.x = x;
          this.y = y;
          this.vx = 0;
          this.vy = 0;
        }
        /**
         * stop moving
         */
        return _createClass(_Observer, [{
          key: "stop",
          value: function stop() {
            this.vx = 0;
            this.vy = 0;
          }
        }, {
          key: "moveTo",
          value: function moveTo(nx, ny) {
            var mx = _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.view.relativeX(nx);
            var my = _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.view.relativeY(ny);
            var ox = _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.view.relativeX(this.x);
            var oy = _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.view.relativeY(this.y);
            var xc = mx - ox;
            var yc = my - oy;
            var hyp = Math.sqrt(xc * xc + yc * yc);
            var ratio = _common_config__WEBPACK_IMPORTED_MODULE_0__.SPEED * _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.scale / hyp;
            this.vx = xc * ratio;
            this.vy = yc * ratio;
          }
        }, {
          key: "update",
          value: function update() {
            this.x += this.vx;
            this.y += this.vy;
            _main__WEBPACK_IMPORTED_MODULE_1__.gameMap.limit(this);
          }
        }]);
      }();
      /***/
    }),
    /***/"./framework/SmallMap.ts": (
    /*!*******************************!*\
      !*** ./framework/SmallMap.ts ***!
      \*******************************/
    /***/
    function _framework_SmallMapTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */SmallMap: function SmallMap() {
          return /* binding */_SmallMap;
        }
        /* harmony export */
      });
      var _SmallMap = /*#__PURE__*/function () {
        function _SmallMap(gameMap, margin, radius) {
          _classCallCheck(this, _SmallMap);
          this.gameMap = gameMap;
          this.margin = margin;
          this.radius = radius;
          this.image = document.createElement('canvas');
          this.initImage();
        }
        return _createClass(_SmallMap, [{
          key: "initImage",
          value: function initImage() {
            this.image.width = this.radius * 2;
            this.image.height = this.radius * 2;
            this.x = this.gameMap.view.width - this.radius * 2 - this.margin;
            this.y = this.gameMap.view.height - this.radius * 2 - this.margin;
            this.mapX = this.x + this.radius / 2;
            this.mapY = this.y + this.radius / 2;
            var ctx = this.image.getContext('2d');
            this.smallMapWid = this.gameMap.width > this.gameMap.height ? this.radius : this.gameMap.width * this.radius / this.gameMap.height;
            this.smallMapHei = this.gameMap.width > this.gameMap.height ? this.gameMap.height * this.radius / this.gameMap.width : this.radius;
            var smallRectX = this.radius - this.smallMapWid / 2;
            var smallRectY = this.radius - this.smallMapHei / 2;
            // draw background
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.radius, this.radius, this.radius - 1, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            // draw map
            ctx.fillStyle = '#ccc';
            ctx.fillRect(smallRectX, smallRectY, this.smallMapWid, this.smallMapHei);
            ctx.restore();
          }
        }, {
          key: "render",
          value: function render() {
            // relative ratio
            var radio = this.smallMapWid / this.gameMap.paintWidth;
            var ctx = this.gameMap.ctx;
            // area and position of window
            var smallViewX = this.gameMap.view.x * radio + this.mapX;
            var smallViewY = this.gameMap.view.y * radio + this.mapY;
            var smallViewW = this.gameMap.view.width * radio;
            var smallViewH = this.gameMap.view.height * radio;
            ctx.save();
            ctx.globalAlpha = 0.8;
            ctx.drawImage(this.image, this.x, this.y);
            // draw window
            // ctx.strokeStyle = '#fff';
            // ctx.strokeRect(smallViewX, smallViewY, smallViewW, smallViewH);
            ctx.fillStyle = '#f00';
            ctx.fillRect(smallViewX + smallViewW / 2 - 2, smallViewY + smallViewH / 2 - 2, 4, 4);
            ctx.restore();
          }
        }]);
      }();
      /***/
    }),
    /***/"./framework/View.ts": (
    /*!***************************!*\
      !*** ./framework/View.ts ***!
      \***************************/
    /***/
    function _framework_ViewTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */View: function View() {
          return /* binding */_View;
        }
        /* harmony export */
      });
      // 视窗
      var _View = /*#__PURE__*/function () {
        function _View(gameMap, width, height) {
          var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          _classCallCheck(this, _View);
          this.gameMap = gameMap;
          this.width = width;
          this.height = height;
          this.x = x;
          this.y = y;
        }
        return _createClass(_View, [{
          key: "trace",
          value: function trace(obj) {
            this.x = obj.x / this.gameMap.scale - this.width / 2;
            this.y = obj.y / this.gameMap.scale - this.height / 2;
          }
        }, {
          key: "absoluteX",
          value: function absoluteX(x) {
            return (x + this.x) * this.gameMap.scale;
          }
        }, {
          key: "absoluteY",
          value: function absoluteY(y) {
            return (y + this.y) * this.gameMap.scale;
          }
        }, {
          key: "relativeX",
          value: function relativeX(x) {
            return x / this.gameMap.scale - this.x;
          }
        }, {
          key: "relativeY",
          value: function relativeY(y) {
            return y / this.gameMap.scale - this.y;
          }
        }, {
          key: "relativeW",
          value: function relativeW(width) {
            return width / this.gameMap.scale;
          }
        }, {
          key: "relativeH",
          value: function relativeH(height) {
            return height / this.gameMap.scale;
          }
        }]);
      }();
      /***/
    }),
    /***/"./libs/imageStore.ts": (
    /*!****************************!*\
      !*** ./libs/imageStore.ts ***!
      \****************************/
    /***/
    function _libs_imageStoreTs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */getSnakeHeader: function getSnakeHeader() {
          return /* binding */_getSnakeHeader;
        }
        /* harmony export */
      });
      // get image of snake header
      function _getSnakeHeader(width, height) {
        var img = document.createElement('canvas');
        var ctx = img.getContext('2d');
        var dis = 2;
        img.width = width + dis * 2;
        img.height = height + dis * 2;
        var eyeRadius = width * 0.2;
        function drawEye(eyeX, eyeY) {
          ctx.beginPath();
          ctx.fillStyle = '#fff';
          ctx.strokeStyle = '#000';
          ctx.arc(eyeX, eyeY, eyeRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          // eyehole
          ctx.beginPath();
          ctx.fillStyle = '#000';
          ctx.arc(eyeX, eyeY - eyeRadius / 2, eyeRadius / 4, 0, Math.PI * 2);
          ctx.fill();
        }
        // left eye
        drawEye(img.width / 2 - width / 2 + eyeRadius, img.height / 2 - height / 2 + eyeRadius);
        // right eye
        drawEye(img.width / 2 + width / 2 - eyeRadius, img.height / 2 - height / 2 + eyeRadius);
        return img;
      }

      /***/
    }),
    /***/"./main.ts": (
    /*!*****************!*\
      !*** ./main.ts ***!
      \*****************/
    /***/
    function _mainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */gameMap: function gameMap() {
          return /* binding */_gameMap;
        }
        /* harmony export */
      });
      /* harmony import */
      var es6_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-shim */"../node_modules/es6-shim/es6-shim.js");
      /* harmony import */
      var es6_shim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_shim__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/common/config */"./common/config.ts");
      /* harmony import */
      var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/common/utils */"./common/utils.ts");
      /* harmony import */
      var _element_Snake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/element/Snake */"./element/Snake.ts");
      /* harmony import */
      var _framework_GameMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/framework/GameMap */"./framework/GameMap.ts");
      /* harmony import */
      var _framework_Observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/framework/Observer */"./framework/Observer.ts");
      /* harmony import */
      var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */"../node_modules/socket.io-client/build/esm/index.js");
      /* module decorator */
      module = __webpack_require__.hmd(module);
      if (module && module.hot) {}
      var canvas = document.getElementById('cas');
      var isInit = false;
      // player id
      var playerId;
      var animationId;
      // judge player is an observer or not
      var isObserver = window.location.href.indexOf('observer=true') >= 0;
      // window's width and height
      var vWidth = window.innerWidth;
      var vHeight = window.innerHeight;
      // game map
      var _gameMap = new _framework_GameMap__WEBPACK_IMPORTED_MODULE_4__.GameMap(canvas, vWidth, vHeight);
      // player object
      var player;
      // record mouse coord
      var mouseCoords = {};
      // snakes map
      var snakes = new Map();
      // save food object
      var foods = [];
      // websocket
      var socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)("http://".concat("127.0.0.1", ":", _common_config__WEBPACK_IMPORTED_MODULE_1__.socketPort), {
        transports: ['websocket']
      });
      // websocket connected
      socket.on('connect', function () {
        // When the socket is connected
        sendData(_common_config__WEBPACK_IMPORTED_MODULE_1__.CMD_INIT, _common_utils__WEBPACK_IMPORTED_MODULE_2__.VIEW_TYPE, {
          width: vWidth,
          height: vHeight
        });
      });
      socket.on('error', function () {
        console.log('error');
      });
      socket.on('disconnect', function () {
        if (isInit) {
          return;
        }
        var x = ~~(Math.random() * (_common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_WIDTH - 100) + 100 / 2);
        var y = ~~(Math.random() * (_common_config__WEBPACK_IMPORTED_MODULE_1__.MAP_WIDTH - 100) + 100 / 2);
        initGame(x, y);
      });
      // receive data
      socket.on('message', function (data) {
        var buf = data;
        if (buf instanceof ArrayBuffer) {
          buf = _common_utils__WEBPACK_IMPORTED_MODULE_2__.decode(buf); // Assuming utils.decode is a function to process binary data
        } else {
          buf = JSON.parse(buf); // If it's JSON, parse it
        }
        var packet;
        switch (buf.opt) {
          case _common_config__WEBPACK_IMPORTED_MODULE_1__.CMD_INIT_ACK:
            packet = data.data[0].packet;
            playerId = packet.id;
            initGame(packet.x, packet.y);
            break;
          case _common_config__WEBPACK_IMPORTED_MODULE_1__.CMD_SYNC_OTHER_COORD:
            if (!isInit) {
              return;
            }
            var snake;
            buf.data.forEach(function (item) {
              packet = item.packet;
              if (item.type === _common_utils__WEBPACK_IMPORTED_MODULE_2__.SNAKE_TYPE) {
                if (playerId === packet.id) {
                  return;
                } else if (snakes.has(packet.id)) {
                  snake = snakes.get(packet.id);
                  var movement = new _element_Snake__WEBPACK_IMPORTED_MODULE_3__.Movement(packet.x, packet.y, packet.speed, packet.angle);
                  snake.sync(packet.size, packet.length, movement);
                } else {
                  snake = new _element_Snake__WEBPACK_IMPORTED_MODULE_3__.CustomSnake({
                    x: packet.x,
                    y: packet.y,
                    angle: packet.angle,
                    size: packet.size,
                    length: packet.length,
                    fillColor: '#666'
                  });
                  snakes.set(packet.id, snake);
                }
              } else if (item.type === _common_utils__WEBPACK_IMPORTED_MODULE_2__.FOOD_TYPE) {
                // sync food
              }
            });
            break;
          case _common_config__WEBPACK_IMPORTED_MODULE_1__.CMD_LOSE_CONNECT:
            packet = buf.data[0].packet;
            if (snakes.has(packet.id)) {
              snakes["delete"](packet.id);
            }
            break;
          default:
            break;
        }
      });
      /**
       * game init
       */
      function initGame(x, y) {
        isInit = true;
        // create player
        if (isObserver) {
          player = new _framework_Observer__WEBPACK_IMPORTED_MODULE_5__.Observer(_gameMap.width / 2, _gameMap.height / 2);
        } else {
          player = new _element_Snake__WEBPACK_IMPORTED_MODULE_3__.Snake({
            x: x,
            y: y,
            size: 30,
            length: 280,
            angle: Math.random() * 2 * Math.PI,
            fillColor: '#000'
          });
        }
        // for (let i = 0; i < 2000; i++) {
        //   const point = ~~(Math.random() * 30 + 50);
        //   const size = ~~(point / 3);
        //   foods.push(new Food({
        //     size, point,
        //     x: ~~(Math.random() * (gameMap.width - 2 * size) + size),
        //     y: ~~(Math.random() * (gameMap.height - 2 * size) + size),
        //   }));
        // }
        binding();
        animate();
      }
      /**
       * collision check
       */
      function collision(dom, dom2, isRect) {
        var disX = dom.x - dom2.x;
        var disY = dom.y - dom2.y;
        var dw = dom.width + dom2.width;
        if (Math.abs(disX) > dw || Math.abs(disY) > dom.height + dom2.height) {
          return false;
        }
        return isRect ? true : Math.hypot(disX, disY) < dw / 2;
      }
      // animation loop
      var timeout = 0;
      var time = +new Date();
      function animate() {
        var newTime = +new Date();
        var snakePlayer = player instanceof _element_Snake__WEBPACK_IMPORTED_MODULE_3__.Snake ? player : null;
        if (newTime - time > timeout) {
          time = newTime;
          // update map and player
          _gameMap.update(player, function () {
            snakes.forEach(function (snake) {
              snake.update();
            });
            player.update();
            if (snakePlayer) {
              foods.forEach(function (food) {
                food.update();
                if (!food.visible || !collision(snakePlayer, food)) {
                  return;
                }
                var added = snakePlayer.eat(food);
                foods.splice(foods.indexOf(food), 1);
                // limit scale
                var newScale = _gameMap.scale + added / (snakePlayer.width * 4);
                if (newScale < 1.4) {
                  _gameMap.setToScale(newScale);
                }
              });
            }
          });
          // if (mouseCoords.x) {
          //   gameMap.ctx.beginPath();
          //   gameMap.ctx.moveTo((<Snake>player).header.paintX, (<Snake>player).header.paintY);
          //   gameMap.ctx.lineTo(mouseCoords.x, mouseCoords.y);
          //   gameMap.ctx.stroke();
          // }
          if (snakePlayer && playerId) {
            sendData(_common_config__WEBPACK_IMPORTED_MODULE_1__.CMD_SYNC_MAIN_COORD, _common_utils__WEBPACK_IMPORTED_MODULE_2__.SNAKE_TYPE, {
              id: playerId,
              size: snakePlayer.width,
              speed: snakePlayer.speed,
              length: snakePlayer.length,
              x: snakePlayer.x,
              y: snakePlayer.y
            });
          }
        }
        animationId = window.requestAnimationFrame(animate);
      }
      // send data
      function sendData(opt, type, packet) {
        socket.emit('customEvent', {
          opt: opt,
          data: {
            type: type,
            packet: packet
          }
        });
      }
      /**
       * event binding
       */
      function binding() {
        // finger|mouse move event
        function mousemove(e) {
          e.preventDefault();
          if (e.touches) {
            mouseCoords.x = e.touches[0].pageX;
            mouseCoords.y = e.touches[0].pageY;
          } else {
            var evt = e || window.event;
            mouseCoords.x = evt.clientX;
            mouseCoords.y = evt.clientY;
          }
          var nx = (mouseCoords.x + _gameMap.view.x) * _gameMap.scale;
          var ny = (mouseCoords.y + _gameMap.view.y) * _gameMap.scale;
          if (!isObserver) {
            player.moveTo(nx, ny);
          }
        }
        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
          window.addEventListener('touchstart', mousemove);
          window.addEventListener('touchmove', mousemove);
          if (player instanceof _framework_Observer__WEBPACK_IMPORTED_MODULE_5__.Observer) {
            window.addEventListener('touchend', function () {
              player.stop();
            });
          }
        } else {
          // change snake's direction when mouse moving
          window.addEventListener('mousemove', mousemove);
          if (player instanceof _element_Snake__WEBPACK_IMPORTED_MODULE_3__.Snake) {
            var pl = player;
            // speed up
            window.addEventListener('mousedown', function () {
              pl.speedUp();
            });
            // speed down
            window.addEventListener('mouseup', function () {
              pl.speedDown();
            });
          } else {
            window.onmousedown = function (e) {
              var startX = e.pageX;
              var startY = e.pageY;
              window.onmousemove = function (e) {
                var newStartX = e.pageX;
                var newStartY = e.pageY;
                var distanceX = newStartX - startX;
                var distanceY = newStartY - startY;
                player.x += -distanceX;
                player.y += -distanceY;
                startX = newStartX;
                startY = newStartY;
              };
              window.onmouseup = function () {
                window.onmousemove = null;
              };
            };
            window.addEventListener('keyup', function (e) {
              switch (e.keyCode) {
                case 87 /* KeyCodes.W */:
                  _gameMap.setToScale(_gameMap.scale + 0.2);
                  break;
                case 83 /* KeyCodes.S */:
                  _gameMap.setToScale(_gameMap.scale - 0.2);
                  break;
                case 65 /* KeyCodes.A */:
                  _gameMap.setToScale(1);
                  break;
                case 38 /* KeyCodes.UP */:
                  timeout = timeout < 5 ? 0 : timeout - 5;
                  break;
                case 40 /* KeyCodes.DOWN */:
                  timeout += 5;
                  break;
                default:
                  break;
              }
            });
          }
        }
      }

      /***/
    }),
    /***/"../node_modules/@socket.io/component-emitter/lib/esm/index.js": (
    /*!*********************************************************************!*\
      !*** ../node_modules/@socket.io/component-emitter/lib/esm/index.js ***!
      \*********************************************************************/
    /***/
    function _node_modules_SocketIo_componentEmitter_lib_esm_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Emitter: function Emitter() {
          return /* binding */_Emitter;
        }
        /* harmony export */
      });
      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */

      function _Emitter(obj) {
        if (obj) return mixin(obj);
      }

      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in _Emitter.prototype) {
          obj[key] = _Emitter.prototype[key];
        }
        return obj;
      }

      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      _Emitter.prototype.on = _Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };

      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      _Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };

      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */

      _Emitter.prototype.off = _Emitter.prototype.removeListener = _Emitter.prototype.removeAllListeners = _Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};

        // all
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }

        // specific event
        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this;

        // remove all handlers
        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        }

        // remove specific handler
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }

        // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.
        if (callbacks.length === 0) {
          delete this._callbacks['$' + event];
        }
        return this;
      };

      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */

      _Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1),
          callbacks = this._callbacks['$' + event];
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };

      // alias used for reserved events (protected method)
      _Emitter.prototype.emitReserved = _Emitter.prototype.emit;

      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */

      _Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };

      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */

      _Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/contrib/has-cors.js": (
    /*!**********************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/contrib/has-cors.js ***!
      \**********************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_contrib_hasCorsJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */hasCORS: function hasCORS() {
          return /* binding */_hasCORS;
        }
        /* harmony export */
      });
      // imported from https://github.com/component/has-cors
      var value = false;
      try {
        value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        // if XMLHttp support is disabled in IE then it will throw
        // when trying to create
      }
      var _hasCORS = value;

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/contrib/parseqs.js": (
    /*!*********************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/contrib/parseqs.js ***!
      \*********************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_contrib_parseqsJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */decode: function decode() {
          return /* binding */_decode2;
        },
        /* harmony export */encode: function encode() {
          return /* binding */_encode2;
        }
        /* harmony export */
      });
      // imported from https://github.com/galkn/querystring
      /**
       * Compiles a querystring
       * Returns string representation of the object
       *
       * @param {Object}
       * @api private
       */
      function _encode2(obj) {
        var str = '';
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }
        return str;
      }
      /**
       * Parses a simple querystring into an object
       *
       * @param {String} qs
       * @api private
       */
      function _decode2(qs) {
        var qry = {};
        var pairs = qs.split('&');
        for (var i = 0, l = pairs.length; i < l; i++) {
          var pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      }

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/contrib/parseuri.js": (
    /*!**********************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/contrib/parseuri.js ***!
      \**********************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_contrib_parseuriJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */parse: function parse() {
          return /* binding */_parse;
        }
        /* harmony export */
      });
      // imported from https://github.com/galkn/parseuri
      /**
       * Parses a URI
       *
       * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
       *
       * See:
       * - https://developer.mozilla.org/en-US/docs/Web/API/URL
       * - https://caniuse.com/url
       * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
       *
       * History of the parse() method:
       * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
       * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
       * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
       *
       * @author Steven Levithan <stevenlevithan.com> (MIT license)
       * @api private
       */
      var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
      function _parse(str) {
        if (str.length > 8000) {
          throw "URI too long";
        }
        var src = str,
          b = str.indexOf('['),
          e = str.indexOf(']');
        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }
        var m = re.exec(str || ''),
          uri = {},
          i = 14;
        while (i--) {
          uri[parts[i]] = m[i] || '';
        }
        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri['path']);
        uri.queryKey = queryKey(uri, uri['query']);
        return uri;
      }
      function pathNames(obj, path) {
        var regx = /\/{2,9}/g,
          names = path.replace(regx, "/").split("/");
        if (path.slice(0, 1) == '/' || path.length === 0) {
          names.splice(0, 1);
        }
        if (path.slice(-1) == '/') {
          names.splice(names.length - 1, 1);
        }
        return names;
      }
      function queryKey(uri, query) {
        var data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
          if ($1) {
            data[$1] = $2;
          }
        });
        return data;
      }

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/globals.js": (
    /*!*************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/globals.js ***!
      \*************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_globalsJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */createCookieJar: function createCookieJar() {
          return /* binding */_createCookieJar;
        },
        /* harmony export */defaultBinaryType: function defaultBinaryType() {
          return /* binding */_defaultBinaryType;
        },
        /* harmony export */globalThisShim: function globalThisShim() {
          return /* binding */_globalThisShim;
        },
        /* harmony export */nextTick: function nextTick() {
          return /* binding */_nextTick;
        }
        /* harmony export */
      });
      var _nextTick = function () {
        var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (isPromiseAvailable) {
          return function (cb) {
            return Promise.resolve().then(cb);
          };
        } else {
          return function (cb, setTimeoutFn) {
            return setTimeoutFn(cb, 0);
          };
        }
      }();
      var _globalThisShim = function () {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      }();
      var _defaultBinaryType = "arraybuffer";
      function _createCookieJar() {}

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/index.js": (
    /*!***********************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/index.js ***!
      \***********************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Fetch: function Fetch() {
          return /* reexport safe */_transports_polling_fetch_js__WEBPACK_IMPORTED_MODULE_6__.Fetch;
        },
        /* harmony export */NodeWebSocket: function NodeWebSocket() {
          return /* reexport safe */_transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__.WS;
        },
        /* harmony export */NodeXHR: function NodeXHR() {
          return /* reexport safe */_transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__.XHR;
        },
        /* harmony export */Socket: function Socket() {
          return /* reexport safe */_socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket;
        },
        /* harmony export */SocketWithUpgrade: function SocketWithUpgrade() {
          return /* reexport safe */_socket_js__WEBPACK_IMPORTED_MODULE_0__.SocketWithUpgrade;
        },
        /* harmony export */SocketWithoutUpgrade: function SocketWithoutUpgrade() {
          return /* reexport safe */_socket_js__WEBPACK_IMPORTED_MODULE_0__.SocketWithoutUpgrade;
        },
        /* harmony export */Transport: function Transport() {
          return /* reexport safe */_transport_js__WEBPACK_IMPORTED_MODULE_1__.Transport;
        },
        /* harmony export */TransportError: function TransportError() {
          return /* reexport safe */_transport_js__WEBPACK_IMPORTED_MODULE_1__.TransportError;
        },
        /* harmony export */WebSocket: function WebSocket() {
          return /* reexport safe */_transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__.WS;
        },
        /* harmony export */WebTransport: function WebTransport() {
          return /* reexport safe */_transports_webtransport_js__WEBPACK_IMPORTED_MODULE_9__.WT;
        },
        /* harmony export */XHR: function XHR() {
          return /* reexport safe */_transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__.XHR;
        },
        /* harmony export */installTimerFunctions: function installTimerFunctions() {
          return /* reexport safe */_util_js__WEBPACK_IMPORTED_MODULE_3__.installTimerFunctions;
        },
        /* harmony export */nextTick: function nextTick() {
          return /* reexport safe */_globals_node_js__WEBPACK_IMPORTED_MODULE_5__.nextTick;
        },
        /* harmony export */parse: function parse() {
          return /* reexport safe */_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__.parse;
        },
        /* harmony export */protocol: function protocol() {
          return /* binding */_protocol;
        },
        /* harmony export */transports: function transports() {
          return /* reexport safe */_transports_index_js__WEBPACK_IMPORTED_MODULE_2__.transports;
        }
        /* harmony export */
      });
      /* harmony import */
      var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */"../node_modules/engine.io-client/build/esm/socket.js");
      /* harmony import */
      var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.js */"../node_modules/engine.io-client/build/esm/transport.js");
      /* harmony import */
      var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */"../node_modules/engine.io-client/build/esm/transports/index.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/parseuri.js */"../node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");
      /* harmony import */
      var _transports_polling_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transports/polling-fetch.js */"../node_modules/engine.io-client/build/esm/transports/polling-fetch.js");
      /* harmony import */
      var _transports_polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/polling-xhr.js */"../node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      /* harmony import */
      var _transports_websocket_node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transports/websocket.js */"../node_modules/engine.io-client/build/esm/transports/websocket.js");
      /* harmony import */
      var _transports_webtransport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transports/webtransport.js */"../node_modules/engine.io-client/build/esm/transports/webtransport.js");
      var _protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket.protocol;

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/socket.js": (
    /*!************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/socket.js ***!
      \************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_socketJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Socket: function Socket() {
          return /* binding */_Socket;
        },
        /* harmony export */SocketWithUpgrade: function SocketWithUpgrade() {
          return /* binding */_SocketWithUpgrade;
        },
        /* harmony export */SocketWithoutUpgrade: function SocketWithoutUpgrade() {
          return /* binding */_SocketWithoutUpgrade;
        }
        /* harmony export */
      });
      /* harmony import */
      var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports/index.js */"../node_modules/engine.io-client/build/esm/transports/index.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrib/parseqs.js */"../node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      /* harmony import */
      var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseuri.js */"../node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");
      /* harmony import */
      var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */"../node_modules/engine.io-parser/build/esm/index.js");
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");
      var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
      var OFFLINE_EVENT_LISTENERS = [];
      if (withEventListeners) {
        // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
        // script, so we create one single event listener here which will forward the event to the socket instances
        addEventListener("offline", function () {
          OFFLINE_EVENT_LISTENERS.forEach(function (listener) {
            return listener();
          });
        }, false);
      }
      /**
       * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
       * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
       *
       * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
       * successfully establishes the connection.
       *
       * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
       *
       * @example
       * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
       *
       * const socket = new SocketWithoutUpgrade({
       *   transports: [WebSocket]
       * });
       *
       * socket.on("open", () => {
       *   socket.send("hello");
       * });
       *
       * @see SocketWithUpgrade
       * @see Socket
       */
      var _SocketWithoutUpgrade = /*#__PURE__*/function (_socket_io_component_) {
        /**
         * Socket constructor.
         *
         * @param {String|Object} uri - uri or options
         * @param {Object} opts - options
         */
        function _SocketWithoutUpgrade(uri, opts) {
          var _this4;
          _classCallCheck(this, _SocketWithoutUpgrade);
          _this4 = _callSuper(this, _SocketWithoutUpgrade);
          _this4.binaryType = _globals_node_js__WEBPACK_IMPORTED_MODULE_6__.defaultBinaryType;
          _this4.writeBuffer = [];
          _this4._prevBufferLen = 0;
          _this4._pingInterval = -1;
          _this4._pingTimeout = -1;
          _this4._maxPayload = -1;
          /**
           * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
           * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
           */
          _this4._pingTimeoutTime = Infinity;
          if (uri && "object" === _typeof(uri)) {
            opts = uri;
            uri = null;
          }
          if (uri) {
            var parsedUri = (0, _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query) opts.query = parsedUri.query;
          } else if (opts.host) {
            opts.hostname = (0, _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(opts.host).host;
          }
          (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.installTimerFunctions)(_this4, opts);
          _this4.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
          if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = _this4.secure ? "443" : "80";
          }
          _this4.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          _this4.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this4.secure ? "443" : "80");
          _this4.transports = [];
          _this4._transportsByName = {};
          opts.transports.forEach(function (t) {
            var transportName = t.prototype.name;
            _this4.transports.push(transportName);
            _this4._transportsByName[transportName] = t;
          });
          _this4.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
          }, opts);
          _this4.opts.path = _this4.opts.path.replace(/\/$/, "") + (_this4.opts.addTrailingSlash ? "/" : "");
          if (typeof _this4.opts.query === "string") {
            _this4.opts.query = (0, _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__.decode)(_this4.opts.query);
          }
          if (withEventListeners) {
            if (_this4.opts.closeOnBeforeunload) {
              // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
              // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
              // closed/reloaded)
              _this4._beforeunloadEventListener = function () {
                if (_this4.transport) {
                  // silently close the transport
                  _this4.transport.removeAllListeners();
                  _this4.transport.close();
                }
              };
              addEventListener("beforeunload", _this4._beforeunloadEventListener, false);
            }
            if (_this4.hostname !== "localhost") {
              _this4._offlineEventListener = function () {
                _this4._onClose("transport close", {
                  description: "network connection lost"
                });
              };
              OFFLINE_EVENT_LISTENERS.push(_this4._offlineEventListener);
            }
          }
          if (_this4.opts.withCredentials) {
            _this4._cookieJar = (0, _globals_node_js__WEBPACK_IMPORTED_MODULE_6__.createCookieJar)();
          }
          _this4._open();
          return _this4;
        }
        /**
         * Creates transport of the given type.
         *
         * @param {String} name - transport name
         * @return {Transport}
         * @private
         */
        _inherits(_SocketWithoutUpgrade, _socket_io_component_);
        return _createClass(_SocketWithoutUpgrade, [{
          key: "createTransport",
          value: function createTransport(name) {
            var query = Object.assign({}, this.opts.query);
            // append engine.io protocol identifier
            query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;
            // transport name
            query.transport = name;
            // session id if we already have one
            if (this.id) query.sid = this.id;
            var opts = Object.assign({}, this.opts, {
              query: query,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port
            }, this.opts.transportOptions[name]);
            return new this._transportsByName[name](opts);
          }
          /**
           * Initializes transport to use and starts probe.
           *
           * @private
           */
        }, {
          key: "_open",
          value: function _open() {
            var _this5 = this;
            if (this.transports.length === 0) {
              // Emit error on next tick so it can be listened to
              this.setTimeoutFn(function () {
                _this5.emitReserved("error", "No transports available");
              }, 0);
              return;
            }
            var transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
            this.readyState = "opening";
            var transport = this.createTransport(transportName);
            transport.open();
            this.setTransport(transport);
          }
          /**
           * Sets the current transport. Disables the existing one (if any).
           *
           * @private
           */
        }, {
          key: "setTransport",
          value: function setTransport(transport) {
            var _this6 = this;
            if (this.transport) {
              this.transport.removeAllListeners();
            }
            // set up transport
            this.transport = transport;
            // set up transport listeners
            transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", function (reason) {
              return _this6._onClose("transport close", reason);
            });
          }
          /**
           * Called when connection is deemed open.
           *
           * @private
           */
        }, {
          key: "onOpen",
          value: function onOpen() {
            this.readyState = "open";
            _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
            this.emitReserved("open");
            this.flush();
          }
          /**
           * Handles a packet.
           *
           * @private
           */
        }, {
          key: "_onPacket",
          value: function _onPacket(packet) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              this.emitReserved("packet", packet);
              // Socket is live - any packet counts
              this.emitReserved("heartbeat");
              switch (packet.type) {
                case "open":
                  this.onHandshake(JSON.parse(packet.data));
                  break;
                case "ping":
                  this._sendPacket("pong");
                  this.emitReserved("ping");
                  this.emitReserved("pong");
                  this._resetPingTimeout();
                  break;
                case "error":
                  var err = new Error("server error");
                  // @ts-ignore
                  err.code = packet.data;
                  this._onError(err);
                  break;
                case "message":
                  this.emitReserved("data", packet.data);
                  this.emitReserved("message", packet.data);
                  break;
              }
            } else {}
          }
          /**
           * Called upon handshake completion.
           *
           * @param {Object} data - handshake obj
           * @private
           */
        }, {
          key: "onHandshake",
          value: function onHandshake(data) {
            this.emitReserved("handshake", data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this._pingInterval = data.pingInterval;
            this._pingTimeout = data.pingTimeout;
            this._maxPayload = data.maxPayload;
            this.onOpen();
            // In case open handler closes socket
            if ("closed" === this.readyState) return;
            this._resetPingTimeout();
          }
          /**
           * Sets and resets ping timeout timer based on server pings.
           *
           * @private
           */
        }, {
          key: "_resetPingTimeout",
          value: function _resetPingTimeout() {
            var _this7 = this;
            this.clearTimeoutFn(this._pingTimeoutTimer);
            var delay = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + delay;
            this._pingTimeoutTimer = this.setTimeoutFn(function () {
              _this7._onClose("ping timeout");
            }, delay);
            if (this.opts.autoUnref) {
              this._pingTimeoutTimer.unref();
            }
          }
          /**
           * Called on `drain` event
           *
           * @private
           */
        }, {
          key: "_onDrain",
          value: function _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen);
            // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`
            this._prevBufferLen = 0;
            if (0 === this.writeBuffer.length) {
              this.emitReserved("drain");
            } else {
              this.flush();
            }
          }
          /**
           * Flush write buffers.
           *
           * @private
           */
        }, {
          key: "flush",
          value: function flush() {
            if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              var packets = this._getWritablePackets();
              this.transport.send(packets);
              // keep track of current length of writeBuffer
              // splice writeBuffer and callbackBuffer on `drain`
              this._prevBufferLen = packets.length;
              this.emitReserved("flush");
            }
          }
          /**
           * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
           * long-polling)
           *
           * @private
           */
        }, {
          key: "_getWritablePackets",
          value: function _getWritablePackets() {
            var shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
            if (!shouldCheckPayloadSize) {
              return this.writeBuffer;
            }
            var payloadSize = 1; // first packet type
            for (var i = 0; i < this.writeBuffer.length; i++) {
              var data = this.writeBuffer[i].data;
              if (data) {
                payloadSize += (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.byteLength)(data);
              }
              if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
              }
              payloadSize += 2; // separator + packet type
            }
            return this.writeBuffer;
          }
          /**
           * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
           *
           * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
           * `write()` method then the message would not be buffered by the Socket.IO client.
           *
           * @return {boolean}
           * @private
           */
          /* private */
        }, {
          key: "_hasPingExpired",
          value: function _hasPingExpired() {
            var _this8 = this;
            if (!this._pingTimeoutTime) return true;
            var hasExpired = Date.now() > this._pingTimeoutTime;
            if (hasExpired) {
              this._pingTimeoutTime = 0;
              (0, _globals_node_js__WEBPACK_IMPORTED_MODULE_6__.nextTick)(function () {
                _this8._onClose("ping timeout");
              }, this.setTimeoutFn);
            }
            return hasExpired;
          }
          /**
           * Sends a message.
           *
           * @param {String} msg - message.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @return {Socket} for chaining.
           */
        }, {
          key: "write",
          value: function write(msg, options, fn) {
            this._sendPacket("message", msg, options, fn);
            return this;
          }
          /**
           * Sends a message. Alias of {@link Socket#write}.
           *
           * @param {String} msg - message.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @return {Socket} for chaining.
           */
        }, {
          key: "send",
          value: function send(msg, options, fn) {
            this._sendPacket("message", msg, options, fn);
            return this;
          }
          /**
           * Sends a packet.
           *
           * @param {String} type: packet type.
           * @param {String} data.
           * @param {Object} options.
           * @param {Function} fn - callback function.
           * @private
           */
        }, {
          key: "_sendPacket",
          value: function _sendPacket(type, data, options, fn) {
            if ("function" === typeof data) {
              fn = data;
              data = undefined;
            }
            if ("function" === typeof options) {
              fn = options;
              options = null;
            }
            if ("closing" === this.readyState || "closed" === this.readyState) {
              return;
            }
            options = options || {};
            options.compress = false !== options.compress;
            var packet = {
              type: type,
              data: data,
              options: options
            };
            this.emitReserved("packetCreate", packet);
            this.writeBuffer.push(packet);
            if (fn) this.once("flush", fn);
            this.flush();
          }
          /**
           * Closes the connection.
           */
        }, {
          key: "close",
          value: function close() {
            var _this9 = this;
            var close = function close() {
              _this9._onClose("forced close");
              _this9.transport.close();
            };
            var _cleanupAndClose = function cleanupAndClose() {
              _this9.off("upgrade", _cleanupAndClose);
              _this9.off("upgradeError", _cleanupAndClose);
              close();
            };
            var waitForUpgrade = function waitForUpgrade() {
              // wait for upgrade to finish since we can't send packets while pausing a transport
              _this9.once("upgrade", _cleanupAndClose);
              _this9.once("upgradeError", _cleanupAndClose);
            };
            if ("opening" === this.readyState || "open" === this.readyState) {
              this.readyState = "closing";
              if (this.writeBuffer.length) {
                this.once("drain", function () {
                  if (_this9.upgrading) {
                    waitForUpgrade();
                  } else {
                    close();
                  }
                });
              } else if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            }
            return this;
          }
          /**
           * Called upon transport error
           *
           * @private
           */
        }, {
          key: "_onError",
          value: function _onError(err) {
            _SocketWithoutUpgrade.priorWebsocketSuccess = false;
            if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
              this.transports.shift();
              return this._open();
            }
            this.emitReserved("error", err);
            this._onClose("transport error", err);
          }
          /**
           * Called upon transport close.
           *
           * @private
           */
        }, {
          key: "_onClose",
          value: function _onClose(reason, description) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              // clear timers
              this.clearTimeoutFn(this._pingTimeoutTimer);
              // stop event from firing again for transport
              this.transport.removeAllListeners("close");
              // ensure transport won't stay open
              this.transport.close();
              // ignore further transport communication
              this.transport.removeAllListeners();
              if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                  removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                  var i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                  if (i !== -1) {
                    OFFLINE_EVENT_LISTENERS.splice(i, 1);
                  }
                }
              }
              // set ready state
              this.readyState = "closed";
              // clear session id
              this.id = null;
              // emit close event
              this.emitReserved("close", reason, description);
              // clean buffers after, so users can still
              // grab the buffers on `close` event
              this.writeBuffer = [];
              this._prevBufferLen = 0;
            }
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__.Emitter);
      _SocketWithoutUpgrade.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;
      /**
       * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
       * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
       *
       * This class comes with an upgrade mechanism, which means that once the connection is established with the first
       * low-level transport, it will try to upgrade to a better transport.
       *
       * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
       *
       * @example
       * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
       *
       * const socket = new SocketWithUpgrade({
       *   transports: [WebSocket]
       * });
       *
       * socket.on("open", () => {
       *   socket.send("hello");
       * });
       *
       * @see SocketWithoutUpgrade
       * @see Socket
       */
      var _SocketWithUpgrade = /*#__PURE__*/function (_SocketWithoutUpgrade2) {
        function _SocketWithUpgrade() {
          var _this10;
          _classCallCheck(this, _SocketWithUpgrade);
          _this10 = _callSuper(this, _SocketWithUpgrade, arguments);
          _this10._upgrades = [];
          return _this10;
        }
        _inherits(_SocketWithUpgrade, _SocketWithoutUpgrade2);
        return _createClass(_SocketWithUpgrade, [{
          key: "onOpen",
          value: function onOpen() {
            _superPropGet(_SocketWithUpgrade, "onOpen", this, 3)([]);
            if ("open" === this.readyState && this.opts.upgrade) {
              for (var i = 0; i < this._upgrades.length; i++) {
                this._probe(this._upgrades[i]);
              }
            }
          }
          /**
           * Probes a transport.
           *
           * @param {String} name - transport name
           * @private
           */
        }, {
          key: "_probe",
          value: function _probe(name) {
            var _this11 = this;
            var transport = this.createTransport(name);
            var failed = false;
            _SocketWithoutUpgrade.priorWebsocketSuccess = false;
            var onTransportOpen = function onTransportOpen() {
              if (failed) return;
              transport.send([{
                type: "ping",
                data: "probe"
              }]);
              transport.once("packet", function (msg) {
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                  _this11.upgrading = true;
                  _this11.emitReserved("upgrading", transport);
                  if (!transport) return;
                  _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
                  _this11.transport.pause(function () {
                    if (failed) return;
                    if ("closed" === _this11.readyState) return;
                    cleanup();
                    _this11.setTransport(transport);
                    transport.send([{
                      type: "upgrade"
                    }]);
                    _this11.emitReserved("upgrade", transport);
                    transport = null;
                    _this11.upgrading = false;
                    _this11.flush();
                  });
                } else {
                  var err = new Error("probe error");
                  // @ts-ignore
                  err.transport = transport.name;
                  _this11.emitReserved("upgradeError", err);
                }
              });
            };
            function freezeTransport() {
              if (failed) return;
              // Any callback called by transport should be ignored since now
              failed = true;
              cleanup();
              transport.close();
              transport = null;
            }
            // Handle any error that happens while probing
            var onerror = function onerror(err) {
              var error = new Error("probe error: " + err);
              // @ts-ignore
              error.transport = transport.name;
              freezeTransport();
              _this11.emitReserved("upgradeError", error);
            };
            function onTransportClose() {
              onerror("transport closed");
            }
            // When the socket is closed while we're probing
            function onclose() {
              onerror("socket closed");
            }
            // When the socket is upgraded while we're probing
            function onupgrade(to) {
              if (transport && to.name !== transport.name) {
                freezeTransport();
              }
            }
            // Remove all listeners on the transport and on self
            var cleanup = function cleanup() {
              transport.removeListener("open", onTransportOpen);
              transport.removeListener("error", onerror);
              transport.removeListener("close", onTransportClose);
              _this11.off("close", onclose);
              _this11.off("upgrading", onupgrade);
            };
            transport.once("open", onTransportOpen);
            transport.once("error", onerror);
            transport.once("close", onTransportClose);
            this.once("close", onclose);
            this.once("upgrading", onupgrade);
            if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
              // favor WebTransport
              this.setTimeoutFn(function () {
                if (!failed) {
                  transport.open();
                }
              }, 200);
            } else {
              transport.open();
            }
          }
        }, {
          key: "onHandshake",
          value: function onHandshake(data) {
            this._upgrades = this._filterUpgrades(data.upgrades);
            _superPropGet(_SocketWithUpgrade, "onHandshake", this, 3)([data]);
          }
          /**
           * Filters upgrades, returning only those matching client transports.
           *
           * @param {Array} upgrades - server upgrades
           * @private
           */
        }, {
          key: "_filterUpgrades",
          value: function _filterUpgrades(upgrades) {
            var filteredUpgrades = [];
            for (var i = 0; i < upgrades.length; i++) {
              if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
            }
            return filteredUpgrades;
          }
        }]);
      }(_SocketWithoutUpgrade);
      /**
       * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
       * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
       *
       * This class comes with an upgrade mechanism, which means that once the connection is established with the first
       * low-level transport, it will try to upgrade to a better transport.
       *
       * @example
       * import { Socket } from "engine.io-client";
       *
       * const socket = new Socket();
       *
       * socket.on("open", () => {
       *   socket.send("hello");
       * });
       *
       * @see SocketWithoutUpgrade
       * @see SocketWithUpgrade
       */
      var _Socket = /*#__PURE__*/function (_SocketWithUpgrade2) {
        function _Socket(uri) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, _Socket);
          var o = _typeof(uri) === "object" ? uri : opts;
          if (!o.transports || o.transports && typeof o.transports[0] === "string") {
            o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(function (transportName) {
              return _transports_index_js__WEBPACK_IMPORTED_MODULE_0__.transports[transportName];
            }).filter(function (t) {
              return !!t;
            });
          }
          return _callSuper(this, _Socket, [uri, o]);
        }
        _inherits(_Socket, _SocketWithUpgrade2);
        return _createClass(_Socket);
      }(_SocketWithUpgrade);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transport.js": (
    /*!***************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transport.js ***!
      \***************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transportJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Transport: function Transport() {
          return /* binding */_Transport;
        },
        /* harmony export */TransportError: function TransportError() {
          return /* binding */_TransportError;
        }
        /* harmony export */
      });
      /* harmony import */
      var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-parser */"../node_modules/engine.io-parser/build/esm/index.js");
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseqs.js */"../node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      var _TransportError = /*#__PURE__*/function (_Error) {
        function _TransportError(reason, description, context) {
          var _this12;
          _classCallCheck(this, _TransportError);
          _this12 = _callSuper(this, _TransportError, [reason]);
          _this12.description = description;
          _this12.context = context;
          _this12.type = "TransportError";
          return _this12;
        }
        _inherits(_TransportError, _Error);
        return _createClass(_TransportError);
      }(/*#__PURE__*/_wrapNativeSuper(Error));
      var _Transport = /*#__PURE__*/function (_socket_io_component_2) {
        /**
         * Transport abstract constructor.
         *
         * @param {Object} opts - options
         * @protected
         */
        function _Transport(opts) {
          var _this13;
          _classCallCheck(this, _Transport);
          _this13 = _callSuper(this, _Transport);
          _this13.writable = false;
          (0, _util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(_this13, opts);
          _this13.opts = opts;
          _this13.query = opts.query;
          _this13.socket = opts.socket;
          _this13.supportsBinary = !opts.forceBase64;
          return _this13;
        }
        /**
         * Emits an error.
         *
         * @param {String} reason
         * @param description
         * @param context - the error context
         * @return {Transport} for chaining
         * @protected
         */
        _inherits(_Transport, _socket_io_component_2);
        return _createClass(_Transport, [{
          key: "onError",
          value: function onError(reason, description, context) {
            _superPropGet(_Transport, "emitReserved", this, 3)(["error", new _TransportError(reason, description, context)]);
            return this;
          }
          /**
           * Opens the transport.
           */
        }, {
          key: "open",
          value: function open() {
            this.readyState = "opening";
            this.doOpen();
            return this;
          }
          /**
           * Closes the transport.
           */
        }, {
          key: "close",
          value: function close() {
            if (this.readyState === "opening" || this.readyState === "open") {
              this.doClose();
              this.onClose();
            }
            return this;
          }
          /**
           * Sends multiple packets.
           *
           * @param {Array} packets
           */
        }, {
          key: "send",
          value: function send(packets) {
            if (this.readyState === "open") {
              this.write(packets);
            } else {
              // this might happen if the transport was silently closed in the beforeunload event handler
            }
          }
          /**
           * Called upon open
           *
           * @protected
           */
        }, {
          key: "onOpen",
          value: function onOpen() {
            this.readyState = "open";
            this.writable = true;
            _superPropGet(_Transport, "emitReserved", this, 3)(["open"]);
          }
          /**
           * Called with data.
           *
           * @param {String} data
           * @protected
           */
        }, {
          key: "onData",
          value: function onData(data) {
            var packet = (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_0__.decodePacket)(data, this.socket.binaryType);
            this.onPacket(packet);
          }
          /**
           * Called with a decoded packet.
           *
           * @protected
           */
        }, {
          key: "onPacket",
          value: function onPacket(packet) {
            _superPropGet(_Transport, "emitReserved", this, 3)(["packet", packet]);
          }
          /**
           * Called upon close.
           *
           * @protected
           */
        }, {
          key: "onClose",
          value: function onClose(details) {
            this.readyState = "closed";
            _superPropGet(_Transport, "emitReserved", this, 3)(["close", details]);
          }
          /**
           * Pauses the transport, in order not to lose packets during an upgrade.
           *
           * @param onPause
           */
        }, {
          key: "pause",
          value: function pause(onPause) {}
        }, {
          key: "createUri",
          value: function createUri(schema) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
          }
        }, {
          key: "_hostname",
          value: function _hostname() {
            var hostname = this.opts.hostname;
            return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
          }
        }, {
          key: "_port",
          value: function _port() {
            if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
              return ":" + this.opts.port;
            } else {
              return "";
            }
          }
        }, {
          key: "_query",
          value: function _query(query) {
            var encodedQuery = (0, _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__.encode)(query);
            return encodedQuery.length ? "?" + encodedQuery : "";
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/index.js": (
    /*!**********************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/index.js ***!
      \**********************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */transports: function transports() {
          return /* binding */_transports;
        }
        /* harmony export */
      });
      /* harmony import */
      var _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling-xhr.node.js */"../node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      /* harmony import */
      var _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.node.js */"../node_modules/engine.io-client/build/esm/transports/websocket.js");
      /* harmony import */
      var _webtransport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webtransport.js */"../node_modules/engine.io-client/build/esm/transports/webtransport.js");
      var _transports = {
        websocket: _websocket_node_js__WEBPACK_IMPORTED_MODULE_1__.WS,
        webtransport: _webtransport_js__WEBPACK_IMPORTED_MODULE_2__.WT,
        polling: _polling_xhr_node_js__WEBPACK_IMPORTED_MODULE_0__.XHR
      };

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/polling-fetch.js": (
    /*!******************************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/polling-fetch.js ***!
      \******************************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_pollingFetchJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Fetch: function Fetch() {
          return /* binding */_Fetch;
        }
        /* harmony export */
      });
      /* harmony import */
      var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */"../node_modules/engine.io-client/build/esm/transports/polling.js");

      /**
       * HTTP long-polling based on the built-in `fetch()` method.
       *
       * Usage: browser, Node.js (since v18), Deno, Bun
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
       * @see https://caniuse.com/fetch
       * @see https://nodejs.org/api/globals.html#fetch
       */
      var _Fetch = /*#__PURE__*/function (_polling_js__WEBPACK_) {
        function _Fetch() {
          _classCallCheck(this, _Fetch);
          return _callSuper(this, _Fetch, arguments);
        }
        _inherits(_Fetch, _polling_js__WEBPACK_);
        return _createClass(_Fetch, [{
          key: "doPoll",
          value: function doPoll() {
            var _this14 = this;
            this._fetch().then(function (res) {
              if (!res.ok) {
                return _this14.onError("fetch read error", res.status, res);
              }
              res.text().then(function (data) {
                return _this14.onData(data);
              });
            })["catch"](function (err) {
              _this14.onError("fetch read error", err);
            });
          }
        }, {
          key: "doWrite",
          value: function doWrite(data, callback) {
            var _this15 = this;
            this._fetch(data).then(function (res) {
              if (!res.ok) {
                return _this15.onError("fetch write error", res.status, res);
              }
              callback();
            })["catch"](function (err) {
              _this15.onError("fetch write error", err);
            });
          }
        }, {
          key: "_fetch",
          value: function _fetch(data) {
            var _this16 = this;
            var _a;
            var isPost = data !== undefined;
            var headers = new Headers(this.opts.extraHeaders);
            if (isPost) {
              headers.set("content-type", "text/plain;charset=UTF-8");
            }
            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
            return fetch(this.uri(), {
              method: isPost ? "POST" : "GET",
              body: isPost ? data : null,
              headers: headers,
              credentials: this.opts.withCredentials ? "include" : "omit"
            }).then(function (res) {
              var _a;
              // @ts-ignore getSetCookie() was added in Node.js v19.7.0
              (_a = _this16.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
              return res;
            });
          }
        }]);
      }(_polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/polling-xhr.js": (
    /*!****************************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/polling-xhr.js ***!
      \****************************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_pollingXhrJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */BaseXHR: function BaseXHR() {
          return /* binding */_BaseXHR;
        },
        /* harmony export */Request: function Request() {
          return /* binding */_Request;
        },
        /* harmony export */XHR: function XHR() {
          return /* binding */_XHR;
        }
        /* harmony export */
      });
      /* harmony import */
      var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */"../node_modules/engine.io-client/build/esm/transports/polling.js");
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");
      /* harmony import */
      var _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contrib/has-cors.js */"../node_modules/engine.io-client/build/esm/contrib/has-cors.js");
      function empty() {}
      var _BaseXHR = /*#__PURE__*/function (_polling_js__WEBPACK_2) {
        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @package
         */
        function _BaseXHR(opts) {
          var _this17;
          _classCallCheck(this, _BaseXHR);
          _this17 = _callSuper(this, _BaseXHR, [opts]);
          if (typeof location !== "undefined") {
            var isSSL = "https:" === location.protocol;
            var port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
              port = isSSL ? "443" : "80";
            }
            _this17.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
          }
          return _this17;
        }
        /**
         * Sends data.
         *
         * @param {String} data to send.
         * @param {Function} called upon flush.
         * @private
         */
        _inherits(_BaseXHR, _polling_js__WEBPACK_2);
        return _createClass(_BaseXHR, [{
          key: "doWrite",
          value: function doWrite(data, fn) {
            var _this18 = this;
            var req = this.request({
              method: "POST",
              data: data
            });
            req.on("success", fn);
            req.on("error", function (xhrStatus, context) {
              _this18.onError("xhr post error", xhrStatus, context);
            });
          }
          /**
           * Starts a poll cycle.
           *
           * @private
           */
        }, {
          key: "doPoll",
          value: function doPoll() {
            var _this19 = this;
            var req = this.request();
            req.on("data", this.onData.bind(this));
            req.on("error", function (xhrStatus, context) {
              _this19.onError("xhr poll error", xhrStatus, context);
            });
            this.pollXhr = req;
          }
        }]);
      }(_polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling);
      var _Request = /*#__PURE__*/function (_socket_io_component_3) {
        /**
         * Request constructor
         *
         * @param {Object} options
         * @package
         */
        function _Request(createRequest, uri, opts) {
          var _this20;
          _classCallCheck(this, _Request);
          _this20 = _callSuper(this, _Request);
          _this20.createRequest = createRequest;
          (0, _util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(_this20, opts);
          _this20._opts = opts;
          _this20._method = opts.method || "GET";
          _this20._uri = uri;
          _this20._data = undefined !== opts.data ? opts.data : null;
          _this20._create();
          return _this20;
        }
        /**
         * Creates the XHR object and sends the request.
         *
         * @private
         */
        _inherits(_Request, _socket_io_component_3);
        return _createClass(_Request, [{
          key: "_create",
          value: function _create() {
            var _this21 = this;
            var _a;
            var opts = (0, _util_js__WEBPACK_IMPORTED_MODULE_2__.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            opts.xdomain = !!this._opts.xd;
            var xhr = this._xhr = this.createRequest(opts);
            try {
              xhr.open(this._method, this._uri, true);
              try {
                if (this._opts.extraHeaders) {
                  // @ts-ignore
                  xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                  for (var i in this._opts.extraHeaders) {
                    if (this._opts.extraHeaders.hasOwnProperty(i)) {
                      xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                    }
                  }
                }
              } catch (e) {}
              if ("POST" === this._method) {
                try {
                  xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (e) {}
              }
              try {
                xhr.setRequestHeader("Accept", "*/*");
              } catch (e) {}
              (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
              // ie6 check
              if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
              }
              if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
              }
              xhr.onreadystatechange = function () {
                var _a;
                if (xhr.readyState === 3) {
                  (_a = _this21._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
                  // @ts-ignore
                  xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) {
                  _this21._onLoad();
                } else {
                  // make sure the `error` event handler that's user-set
                  // does not throw in the same tick and gets caught here
                  _this21.setTimeoutFn(function () {
                    _this21._onError(typeof xhr.status === "number" ? xhr.status : 0);
                  }, 0);
                }
              };
              xhr.send(this._data);
            } catch (e) {
              // Need to defer since .create() is called directly from the constructor
              // and thus the 'error' event can only be only bound *after* this exception
              // occurs.  Therefore, also, we cannot throw here at all.
              this.setTimeoutFn(function () {
                _this21._onError(e);
              }, 0);
              return;
            }
            if (typeof document !== "undefined") {
              this._index = _Request.requestsCount++;
              _Request.requests[this._index] = this;
            }
          }
          /**
           * Called upon error.
           *
           * @private
           */
        }, {
          key: "_onError",
          value: function _onError(err) {
            this.emitReserved("error", err, this._xhr);
            this._cleanup(true);
          }
          /**
           * Cleans up house.
           *
           * @private
           */
        }, {
          key: "_cleanup",
          value: function _cleanup(fromError) {
            if ("undefined" === typeof this._xhr || null === this._xhr) {
              return;
            }
            this._xhr.onreadystatechange = empty;
            if (fromError) {
              try {
                this._xhr.abort();
              } catch (e) {}
            }
            if (typeof document !== "undefined") {
              delete _Request.requests[this._index];
            }
            this._xhr = null;
          }
          /**
           * Called upon load.
           *
           * @private
           */
        }, {
          key: "_onLoad",
          value: function _onLoad() {
            var data = this._xhr.responseText;
            if (data !== null) {
              this.emitReserved("data", data);
              this.emitReserved("success");
              this._cleanup();
            }
          }
          /**
           * Aborts the request.
           *
           * @package
           */
        }, {
          key: "abort",
          value: function abort() {
            this._cleanup();
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter);
      _Request.requestsCount = 0;
      _Request.requests = {};
      /**
       * Aborts pending requests when unloading the window. This is needed to prevent
       * memory leaks (e.g. when using IE) and to ensure that no spurious error is
       * emitted.
       */
      if (typeof document !== "undefined") {
        // @ts-ignore
        if (typeof attachEvent === "function") {
          // @ts-ignore
          attachEvent("onunload", unloadHandler);
        } else if (typeof addEventListener === "function") {
          var terminationEvent = "onpagehide" in _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim ? "pagehide" : "unload";
          addEventListener(terminationEvent, unloadHandler, false);
        }
      }
      function unloadHandler() {
        for (var i in _Request.requests) {
          if (_Request.requests.hasOwnProperty(i)) {
            _Request.requests[i].abort();
          }
        }
      }
      var hasXHR2 = function () {
        var xhr = newRequest({
          xdomain: false
        });
        return xhr && xhr.responseType !== null;
      }();
      /**
       * HTTP long-polling based on the built-in `XMLHttpRequest` object.
       *
       * Usage: browser
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
       */
      var _XHR = /*#__PURE__*/function (_BaseXHR2) {
        function _XHR(opts) {
          var _this22;
          _classCallCheck(this, _XHR);
          _this22 = _callSuper(this, _XHR, [opts]);
          var forceBase64 = opts && opts.forceBase64;
          _this22.supportsBinary = hasXHR2 && !forceBase64;
          return _this22;
        }
        _inherits(_XHR, _BaseXHR2);
        return _createClass(_XHR, [{
          key: "request",
          value: function request() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            Object.assign(opts, {
              xd: this.xd
            }, this.opts);
            return new _Request(newRequest, this.uri(), opts);
          }
        }]);
      }(_BaseXHR);
      function newRequest(opts) {
        var xdomain = opts.xdomain;
        // XMLHttpRequest can be disabled on IE
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_4__.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {}
        if (!xdomain) {
          try {
            return new _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }

      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/polling.js": (
    /*!************************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/polling.js ***!
      \************************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_pollingJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Polling: function Polling() {
          return /* binding */_Polling;
        }
        /* harmony export */
      });
      /* harmony import */
      var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */"../node_modules/engine.io-client/build/esm/transport.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */"../node_modules/engine.io-parser/build/esm/index.js");
      var _Polling = /*#__PURE__*/function (_transport_js__WEBPAC) {
        function _Polling() {
          var _this23;
          _classCallCheck(this, _Polling);
          _this23 = _callSuper(this, _Polling, arguments);
          _this23._polling = false;
          return _this23;
        }
        _inherits(_Polling, _transport_js__WEBPAC);
        return _createClass(_Polling, [{
          key: "name",
          get: function get() {
            return "polling";
          }
          /**
           * Opens the socket (triggers polling). We write a PING message to determine
           * when the transport is open.
           *
           * @protected
           */
        }, {
          key: "doOpen",
          value: function doOpen() {
            this._poll();
          }
          /**
           * Pauses polling.
           *
           * @param {Function} onPause - callback upon buffers are flushed and transport is paused
           * @package
           */
        }, {
          key: "pause",
          value: function pause(onPause) {
            var _this24 = this;
            this.readyState = "pausing";
            var pause = function pause() {
              _this24.readyState = "paused";
              onPause();
            };
            if (this._polling || !this.writable) {
              var total = 0;
              if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                  --total || pause();
                });
              }
              if (!this.writable) {
                total++;
                this.once("drain", function () {
                  --total || pause();
                });
              }
            } else {
              pause();
            }
          }
          /**
           * Starts polling cycle.
           *
           * @private
           */
        }, {
          key: "_poll",
          value: function _poll() {
            this._polling = true;
            this.doPoll();
            this.emitReserved("poll");
          }
          /**
           * Overloads onData to detect payloads.
           *
           * @protected
           */
        }, {
          key: "onData",
          value: function onData(data) {
            var _this25 = this;
            var callback = function callback(packet) {
              // if its the first message we consider the transport open
              if ("opening" === _this25.readyState && packet.type === "open") {
                _this25.onOpen();
              }
              // if its a close packet, we close the ongoing requests
              if ("close" === packet.type) {
                _this25.onClose({
                  description: "transport closed by the server"
                });
                return false;
              }
              // otherwise bypass onData and handle the message
              _this25.onPacket(packet);
            };
            // decode payload
            (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.decodePayload)(data, this.socket.binaryType).forEach(callback);
            // if an event did not trigger closing
            if ("closed" !== this.readyState) {
              // if we got data we're not polling
              this._polling = false;
              this.emitReserved("pollComplete");
              if ("open" === this.readyState) {
                this._poll();
              } else {}
            }
          }
          /**
           * For polling, send a close packet.
           *
           * @protected
           */
        }, {
          key: "doClose",
          value: function doClose() {
            var _this26 = this;
            var close = function close() {
              _this26.write([{
                type: "close"
              }]);
            };
            if ("open" === this.readyState) {
              close();
            } else {
              // in case we're trying to close while
              // handshaking is in progress (GH-164)
              this.once("open", close);
            }
          }
          /**
           * Writes a packets payload.
           *
           * @param {Array} packets - data packets
           * @protected
           */
        }, {
          key: "write",
          value: function write(packets) {
            var _this27 = this;
            this.writable = false;
            (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.encodePayload)(packets, function (data) {
              _this27.doWrite(data, function () {
                _this27.writable = true;
                _this27.emitReserved("drain");
              });
            });
          }
          /**
           * Generates uri for connection.
           *
           * @private
           */
        }, {
          key: "uri",
          value: function uri() {
            var schema = this.opts.secure ? "https" : "http";
            var query = this.query || {};
            // cache busting is forced
            if (false !== this.opts.timestampRequests) {
              query[this.opts.timestampParam] = (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.randomString)();
            }
            if (!this.supportsBinary && !query.sid) {
              query.b64 = 1;
            }
            return this.createUri(schema, query);
          }
        }]);
      }(_transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/websocket.js": (
    /*!**************************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/websocket.js ***!
      \**************************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_websocketJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */BaseWS: function BaseWS() {
          return /* binding */_BaseWS;
        },
        /* harmony export */WS: function WS() {
          return /* binding */_WS;
        }
        /* harmony export */
      });
      /* harmony import */
      var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */"../node_modules/engine.io-client/build/esm/transport.js");
      /* harmony import */
      var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */"../node_modules/engine.io-client/build/esm/util.js");
      /* harmony import */
      var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */"../node_modules/engine.io-parser/build/esm/index.js");
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");

      // detect ReactNative environment
      var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      var _BaseWS = /*#__PURE__*/function (_transport_js__WEBPAC2) {
        function _BaseWS() {
          _classCallCheck(this, _BaseWS);
          return _callSuper(this, _BaseWS, arguments);
        }
        _inherits(_BaseWS, _transport_js__WEBPAC2);
        return _createClass(_BaseWS, [{
          key: "name",
          get: function get() {
            return "websocket";
          }
        }, {
          key: "doOpen",
          value: function doOpen() {
            var uri = this.uri();
            var protocols = this.opts.protocols;
            // React Native only supports the 'headers' option, and will print a warning if anything else is passed
            var opts = isReactNative ? {} : (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            if (this.opts.extraHeaders) {
              opts.headers = this.opts.extraHeaders;
            }
            try {
              this.ws = this.createSocket(uri, protocols, opts);
            } catch (err) {
              return this.emitReserved("error", err);
            }
            this.ws.binaryType = this.socket.binaryType;
            this.addEventListeners();
          }
          /**
           * Adds event listeners to the socket
           *
           * @private
           */
        }, {
          key: "addEventListeners",
          value: function addEventListeners() {
            var _this28 = this;
            this.ws.onopen = function () {
              if (_this28.opts.autoUnref) {
                _this28.ws._socket.unref();
              }
              _this28.onOpen();
            };
            this.ws.onclose = function (closeEvent) {
              return _this28.onClose({
                description: "websocket connection closed",
                context: closeEvent
              });
            };
            this.ws.onmessage = function (ev) {
              return _this28.onData(ev.data);
            };
            this.ws.onerror = function (e) {
              return _this28.onError("websocket error", e);
            };
          }
        }, {
          key: "write",
          value: function write(packets) {
            var _this29 = this;
            this.writable = false;
            // encodePacket efficient as it uses WS framing
            // no need for encodePayload
            var _loop = function _loop() {
              var packet = packets[i];
              var lastPacket = i === packets.length - 1;
              (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.encodePacket)(packet, _this29.supportsBinary, function (data) {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                  _this29.doWrite(packet, data);
                } catch (e) {}
                if (lastPacket) {
                  // fake drain
                  // defer to next tick to allow Socket to clear writeBuffer
                  (0, _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.nextTick)(function () {
                    _this29.writable = true;
                    _this29.emitReserved("drain");
                  }, _this29.setTimeoutFn);
                }
              });
            };
            for (var i = 0; i < packets.length; i++) {
              _loop();
            }
          }
        }, {
          key: "doClose",
          value: function doClose() {
            if (typeof this.ws !== "undefined") {
              this.ws.close();
              this.ws = null;
            }
          }
          /**
           * Generates uri for connection.
           *
           * @private
           */
        }, {
          key: "uri",
          value: function uri() {
            var schema = this.opts.secure ? "wss" : "ws";
            var query = this.query || {};
            // append timestamp to URI
            if (this.opts.timestampRequests) {
              query[this.opts.timestampParam] = (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.randomString)();
            }
            // communicate binary support capabilities
            if (!this.supportsBinary) {
              query.b64 = 1;
            }
            return this.createUri(schema, query);
          }
        }]);
      }(_transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport);
      var WebSocketCtor = _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim.WebSocket || _globals_node_js__WEBPACK_IMPORTED_MODULE_3__.globalThisShim.MozWebSocket;
      /**
       * WebSocket transport based on the built-in `WebSocket` object.
       *
       * Usage: browser, Node.js (since v21), Deno, Bun
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
       * @see https://caniuse.com/mdn-api_websocket
       * @see https://nodejs.org/api/globals.html#websocket
       */
      var _WS = /*#__PURE__*/function (_BaseWS2) {
        function _WS() {
          _classCallCheck(this, _WS);
          return _callSuper(this, _WS, arguments);
        }
        _inherits(_WS, _BaseWS2);
        return _createClass(_WS, [{
          key: "createSocket",
          value: function createSocket(uri, protocols, opts) {
            return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
          }
        }, {
          key: "doWrite",
          value: function doWrite(_packet, data) {
            this.ws.send(data);
          }
        }]);
      }(_BaseWS);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/transports/webtransport.js": (
    /*!*****************************************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/transports/webtransport.js ***!
      \*****************************************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_transports_webtransportJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */WT: function WT() {
          return /* binding */_WT;
        }
        /* harmony export */
      });
      /* harmony import */
      var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */"../node_modules/engine.io-client/build/esm/transport.js");
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");
      /* harmony import */
      var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */"../node_modules/engine.io-parser/build/esm/index.js");

      /**
       * WebTransport transport based on the built-in `WebTransport` object.
       *
       * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
       * @see https://caniuse.com/webtransport
       */
      var _WT = /*#__PURE__*/function (_transport_js__WEBPAC3) {
        function _WT() {
          _classCallCheck(this, _WT);
          return _callSuper(this, _WT, arguments);
        }
        _inherits(_WT, _transport_js__WEBPAC3);
        return _createClass(_WT, [{
          key: "name",
          get: function get() {
            return "webtransport";
          }
        }, {
          key: "doOpen",
          value: function doOpen() {
            var _this30 = this;
            try {
              // @ts-ignore
              this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
            } catch (err) {
              return this.emitReserved("error", err);
            }
            this._transport.closed.then(function () {
              _this30.onClose();
            })["catch"](function (err) {
              _this30.onError("webtransport error", err);
            });
            // note: we could have used async/await, but that would require some additional polyfills
            this._transport.ready.then(function () {
              _this30._transport.createBidirectionalStream().then(function (stream) {
                var decoderStream = (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, _this30.socket.binaryType);
                var reader = stream.readable.pipeThrough(decoderStream).getReader();
                var encoderStream = (0, engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                _this30._writer = encoderStream.writable.getWriter();
                var _read = function read() {
                  reader.read().then(function (_ref2) {
                    var done = _ref2.done,
                      value = _ref2.value;
                    if (done) {
                      return;
                    }
                    _this30.onPacket(value);
                    _read();
                  })["catch"](function (err) {});
                };
                _read();
                var packet = {
                  type: "open"
                };
                if (_this30.query.sid) {
                  packet.data = "{\"sid\":\"".concat(_this30.query.sid, "\"}");
                }
                _this30._writer.write(packet).then(function () {
                  return _this30.onOpen();
                });
              });
            });
          }
        }, {
          key: "write",
          value: function write(packets) {
            var _this31 = this;
            this.writable = false;
            var _loop2 = function _loop2() {
              var packet = packets[i];
              var lastPacket = i === packets.length - 1;
              _this31._writer.write(packet).then(function () {
                if (lastPacket) {
                  (0, _globals_node_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
                    _this31.writable = true;
                    _this31.emitReserved("drain");
                  }, _this31.setTimeoutFn);
                }
              });
            };
            for (var i = 0; i < packets.length; i++) {
              _loop2();
            }
          }
        }, {
          key: "doClose",
          value: function doClose() {
            var _a;
            (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
          }
        }]);
      }(_transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport);
      /***/
    }),
    /***/"../node_modules/engine.io-client/build/esm/util.js": (
    /*!**********************************************************!*\
      !*** ../node_modules/engine.io-client/build/esm/util.js ***!
      \**********************************************************/
    /***/
    function _node_modules_engineIoClient_build_esm_utilJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */byteLength: function byteLength() {
          return /* binding */_byteLength2;
        },
        /* harmony export */installTimerFunctions: function installTimerFunctions() {
          return /* binding */_installTimerFunctions;
        },
        /* harmony export */pick: function pick() {
          return /* binding */_pick;
        },
        /* harmony export */randomString: function randomString() {
          return /* binding */_randomString;
        }
        /* harmony export */
      });
      /* harmony import */
      var _globals_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.node.js */"../node_modules/engine.io-client/build/esm/globals.js");
      function _pick(obj) {
        for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          attr[_key - 1] = arguments[_key];
        }
        return attr.reduce(function (acc, k) {
          if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
          }
          return acc;
        }, {});
      }
      // Keep a reference to the real timeout functions so they can be used when overridden
      var NATIVE_SET_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout;
      var NATIVE_CLEAR_TIMEOUT = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout;
      function _installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
          obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
          obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
        } else {
          obj.setTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
          obj.clearTimeoutFn = _globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout.bind(_globals_node_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
        }
      }
      // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
      var BASE64_OVERHEAD = 1.33;
      // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
      function _byteLength2(obj) {
        if (typeof obj === "string") {
          return utf8Length(obj);
        }
        // arraybuffer or blob
        return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
      }
      function utf8Length(str) {
        var c = 0,
          length = 0;
        for (var i = 0, l = str.length; i < l; i++) {
          c = str.charCodeAt(i);
          if (c < 0x80) {
            length += 1;
          } else if (c < 0x800) {
            length += 2;
          } else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
          } else {
            i++;
            length += 4;
          }
        }
        return length;
      }
      /**
       * Generates a random 8-characters string.
       */
      function _randomString() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
      }

      /***/
    }),
    /***/"../node_modules/engine.io-parser/build/esm/commons.js": (
    /*!*************************************************************!*\
      !*** ../node_modules/engine.io-parser/build/esm/commons.js ***!
      \*************************************************************/
    /***/
    function _node_modules_engineIoParser_build_esm_commonsJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ERROR_PACKET: function ERROR_PACKET() {
          return /* binding */_ERROR_PACKET;
        },
        /* harmony export */PACKET_TYPES: function PACKET_TYPES() {
          return /* binding */_PACKET_TYPES;
        },
        /* harmony export */PACKET_TYPES_REVERSE: function PACKET_TYPES_REVERSE() {
          return /* binding */_PACKET_TYPES_REVERSE;
        }
        /* harmony export */
      });
      var _PACKET_TYPES = Object.create(null); // no Map = no polyfill
      _PACKET_TYPES["open"] = "0";
      _PACKET_TYPES["close"] = "1";
      _PACKET_TYPES["ping"] = "2";
      _PACKET_TYPES["pong"] = "3";
      _PACKET_TYPES["message"] = "4";
      _PACKET_TYPES["upgrade"] = "5";
      _PACKET_TYPES["noop"] = "6";
      var _PACKET_TYPES_REVERSE = Object.create(null);
      Object.keys(_PACKET_TYPES).forEach(function (key) {
        _PACKET_TYPES_REVERSE[_PACKET_TYPES[key]] = key;
      });
      var _ERROR_PACKET = {
        type: "error",
        data: "parser error"
      };

      /***/
    }),
    /***/"../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (
    /*!********************************************************************************!*\
      !*** ../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js ***!
      \********************************************************************************/
    /***/
    function _node_modules_engineIoParser_build_esm_contrib_base64ArraybufferJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */decode: function decode() {
          return /* binding */_decode3;
        },
        /* harmony export */encode: function encode() {
          return /* binding */_encode3;
        }
        /* harmony export */
      });
      // imported from https://github.com/socketio/base64-arraybuffer
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      // Use a lookup table to find the index.
      var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
      for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
      }
      var _encode3 = function _encode3(arraybuffer) {
        var bytes = new Uint8Array(arraybuffer),
          i,
          len = bytes.length,
          base64 = '';
        for (i = 0; i < len; i += 3) {
          base64 += chars[bytes[i] >> 2];
          base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) {
          base64 = base64.substring(0, base64.length - 1) + '=';
        } else if (len % 3 === 1) {
          base64 = base64.substring(0, base64.length - 2) + '==';
        }
        return base64;
      };
      var _decode3 = function _decode3(base64) {
        var bufferLength = base64.length * 0.75,
          len = base64.length,
          i,
          p = 0,
          encoded1,
          encoded2,
          encoded3,
          encoded4;
        if (base64[base64.length - 1] === '=') {
          bufferLength--;
          if (base64[base64.length - 2] === '=') {
            bufferLength--;
          }
        }
        var arraybuffer = new ArrayBuffer(bufferLength),
          bytes = new Uint8Array(arraybuffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = lookup[base64.charCodeAt(i)];
          encoded2 = lookup[base64.charCodeAt(i + 1)];
          encoded3 = lookup[base64.charCodeAt(i + 2)];
          encoded4 = lookup[base64.charCodeAt(i + 3)];
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
      };

      /***/
    }),
    /***/"../node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (
    /*!**************************************************************************!*\
      !*** ../node_modules/engine.io-parser/build/esm/decodePacket.browser.js ***!
      \**************************************************************************/
    /***/
    function _node_modules_engineIoParser_build_esm_decodePacketBrowserJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */decodePacket: function decodePacket() {
          return /* binding */_decodePacket;
        }
        /* harmony export */
      });
      /* harmony import */
      var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */"../node_modules/engine.io-parser/build/esm/commons.js");
      /* harmony import */
      var _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrib/base64-arraybuffer.js */"../node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var _decodePacket = function _decodePacket(encodedPacket, binaryType) {
        if (typeof encodedPacket !== "string") {
          return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
          };
        }
        var type = encodedPacket.charAt(0);
        if (type === "b") {
          return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
          };
        }
        var packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type];
        if (!packetType) {
          return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;
        }
        return encodedPacket.length > 1 ? {
          type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],
          data: encodedPacket.substring(1)
        } : {
          type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type]
        };
      };
      var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
        if (withNativeArrayBuffer) {
          var decoded = (0, _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__.decode)(data);
          return mapBinary(decoded, binaryType);
        } else {
          return {
            base64: true,
            data: data
          }; // fallback for old browsers
        }
      };
      var mapBinary = function mapBinary(data, binaryType) {
        switch (binaryType) {
          case "blob":
            if (data instanceof Blob) {
              // from WebSocket + binaryType "blob"
              return data;
            } else {
              // from HTTP long-polling or WebTransport
              return new Blob([data]);
            }
          case "arraybuffer":
          default:
            if (data instanceof ArrayBuffer) {
              // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
              return data;
            } else {
              // from WebTransport (Uint8Array)
              return data.buffer;
            }
        }
      };

      /***/
    }),
    /***/"../node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (
    /*!**************************************************************************!*\
      !*** ../node_modules/engine.io-parser/build/esm/encodePacket.browser.js ***!
      \**************************************************************************/
    /***/
    function _node_modules_engineIoParser_build_esm_encodePacketBrowserJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */encodePacket: function encodePacket() {
          return /* binding */_encodePacket;
        },
        /* harmony export */encodePacketToBinary: function encodePacketToBinary() {
          return /* binding */_encodePacketToBinary;
        }
        /* harmony export */
      });
      /* harmony import */
      var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */"../node_modules/engine.io-parser/build/esm/commons.js");
      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      // ArrayBuffer.isView method is not defined in IE10
      var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
      };
      var _encodePacket = function _encodePacket(_ref3, supportsBinary, callback) {
        var type = _ref3.type,
          data = _ref3.data;
        if (withNativeBlob && data instanceof Blob) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(data, callback);
          }
        } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(new Blob([data]), callback);
          }
        }
        // plain string
        return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || ""));
      };
      var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
        var fileReader = new FileReader();
        fileReader.onload = function () {
          var content = fileReader.result.split(",")[1];
          callback("b" + (content || ""));
        };
        return fileReader.readAsDataURL(data);
      };
      function toArray(data) {
        if (data instanceof Uint8Array) {
          return data;
        } else if (data instanceof ArrayBuffer) {
          return new Uint8Array(data);
        } else {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        }
      }
      var TEXT_ENCODER;
      function _encodePacketToBinary(packet, callback) {
        if (withNativeBlob && packet.data instanceof Blob) {
          return packet.data.arrayBuffer().then(toArray).then(callback);
        } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
          return callback(toArray(packet.data));
        }
        _encodePacket(packet, false, function (encoded) {
          if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
          }
          callback(TEXT_ENCODER.encode(encoded));
        });
      }

      /***/
    }),
    /***/"../node_modules/engine.io-parser/build/esm/index.js": (
    /*!***********************************************************!*\
      !*** ../node_modules/engine.io-parser/build/esm/index.js ***!
      \***********************************************************/
    /***/
    function _node_modules_engineIoParser_build_esm_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */createPacketDecoderStream: function createPacketDecoderStream() {
          return /* binding */_createPacketDecoderStream;
        },
        /* harmony export */createPacketEncoderStream: function createPacketEncoderStream() {
          return /* binding */_createPacketEncoderStream;
        },
        /* harmony export */decodePacket: function decodePacket() {
          return /* reexport safe */_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket;
        },
        /* harmony export */decodePayload: function decodePayload() {
          return /* binding */_decodePayload;
        },
        /* harmony export */encodePacket: function encodePacket() {
          return /* reexport safe */_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket;
        },
        /* harmony export */encodePayload: function encodePayload() {
          return /* binding */_encodePayload;
        },
        /* harmony export */protocol: function protocol() {
          return /* binding */_protocol2;
        }
        /* harmony export */
      });
      /* harmony import */
      var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */"../node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
      /* harmony import */
      var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */"../node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
      /* harmony import */
      var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons.js */"../node_modules/engine.io-parser/build/esm/commons.js");
      var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
      var _encodePayload = function _encodePayload(packets, callback) {
        // some packets may be added to the array while encoding, so the initial length must be saved
        var length = packets.length;
        var encodedPackets = new Array(length);
        var count = 0;
        packets.forEach(function (packet, i) {
          // force base64 encoding for binary packets
          (0, _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket)(packet, false, function (encodedPacket) {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
              callback(encodedPackets.join(SEPARATOR));
            }
          });
        });
      };
      var _decodePayload = function _decodePayload(encodedPayload, binaryType) {
        var encodedPackets = encodedPayload.split(SEPARATOR);
        var packets = [];
        for (var i = 0; i < encodedPackets.length; i++) {
          var decodedPacket = (0, _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(encodedPackets[i], binaryType);
          packets.push(decodedPacket);
          if (decodedPacket.type === "error") {
            break;
          }
        }
        return packets;
      };
      function _createPacketEncoderStream() {
        return new TransformStream({
          transform: function transform(packet, controller) {
            (0, _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacketToBinary)(packet, function (encodedPacket) {
              var payloadLength = encodedPacket.length;
              var header;
              // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
              if (payloadLength < 126) {
                header = new Uint8Array(1);
                new DataView(header.buffer).setUint8(0, payloadLength);
              } else if (payloadLength < 65536) {
                header = new Uint8Array(3);
                var view = new DataView(header.buffer);
                view.setUint8(0, 126);
                view.setUint16(1, payloadLength);
              } else {
                header = new Uint8Array(9);
                var _view = new DataView(header.buffer);
                _view.setUint8(0, 127);
                _view.setBigUint64(1, BigInt(payloadLength));
              }
              // first bit indicates whether the payload is plain text (0) or binary (1)
              if (packet.data && typeof packet.data !== "string") {
                header[0] |= 0x80;
              }
              controller.enqueue(header);
              controller.enqueue(encodedPacket);
            });
          }
        });
      }
      var TEXT_DECODER;
      function totalLength(chunks) {
        return chunks.reduce(function (acc, chunk) {
          return acc + chunk.length;
        }, 0);
      }
      function concatChunks(chunks, size) {
        if (chunks[0].length === size) {
          return chunks.shift();
        }
        var buffer = new Uint8Array(size);
        var j = 0;
        for (var i = 0; i < size; i++) {
          buffer[i] = chunks[0][j++];
          if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
          }
        }
        if (chunks.length && j < chunks[0].length) {
          chunks[0] = chunks[0].slice(j);
        }
        return buffer;
      }
      function _createPacketDecoderStream(maxPayload, binaryType) {
        if (!TEXT_DECODER) {
          TEXT_DECODER = new TextDecoder();
        }
        var chunks = [];
        var state = 0 /* State.READ_HEADER */;
        var expectedLength = -1;
        var isBinary = false;
        return new TransformStream({
          transform: function transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
              if (state === 0 /* State.READ_HEADER */) {
                if (totalLength(chunks) < 1) {
                  break;
                }
                var header = concatChunks(chunks, 1);
                isBinary = (header[0] & 0x80) === 0x80;
                expectedLength = header[0] & 0x7f;
                if (expectedLength < 126) {
                  state = 3 /* State.READ_PAYLOAD */;
                } else if (expectedLength === 126) {
                  state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                } else {
                  state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                }
              } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                if (totalLength(chunks) < 2) {
                  break;
                }
                var headerArray = concatChunks(chunks, 2);
                expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                state = 3 /* State.READ_PAYLOAD */;
              } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                if (totalLength(chunks) < 8) {
                  break;
                }
                var _headerArray = concatChunks(chunks, 8);
                var view = new DataView(_headerArray.buffer, _headerArray.byteOffset, _headerArray.length);
                var n = view.getUint32(0);
                if (n > Math.pow(2, 53 - 32) - 1) {
                  // the maximum safe integer in JavaScript is 2^53 - 1
                  controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
                  break;
                }
                expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                state = 3 /* State.READ_PAYLOAD */;
              } else {
                if (totalLength(chunks) < expectedLength) {
                  break;
                }
                var data = concatChunks(chunks, expectedLength);
                controller.enqueue((0, _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                state = 0 /* State.READ_HEADER */;
              }
              if (expectedLength === 0 || expectedLength > maxPayload) {
                controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
      var _protocol2 = 4;

      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/contrib/backo2.js": (
    /*!********************************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/contrib/backo2.js ***!
      \********************************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_contrib_backo2Js(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Backoff: function Backoff() {
          return /* binding */_Backoff;
        }
        /* harmony export */
      });
      /**
       * Initialize backoff timer with `opts`.
       *
       * - `min` initial timeout in milliseconds [100]
       * - `max` max timeout [10000]
       * - `jitter` [0]
       * - `factor` [2]
       *
       * @param {Object} opts
       * @api public
       */
      function _Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      /**
       * Return the backoff duration.
       *
       * @return {Number}
       * @api public
       */
      _Backoff.prototype.duration = function () {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      /**
       * Reset the number of attempts.
       *
       * @api public
       */
      _Backoff.prototype.reset = function () {
        this.attempts = 0;
      };
      /**
       * Set the minimum duration
       *
       * @api public
       */
      _Backoff.prototype.setMin = function (min) {
        this.ms = min;
      };
      /**
       * Set the maximum duration
       *
       * @api public
       */
      _Backoff.prototype.setMax = function (max) {
        this.max = max;
      };
      /**
       * Set the jitter
       *
       * @api public
       */
      _Backoff.prototype.setJitter = function (jitter) {
        this.jitter = jitter;
      };

      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/index.js": (
    /*!***********************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/index.js ***!
      \***********************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Manager: function Manager() {
          return /* reexport safe */_manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager;
        },
        /* harmony export */Socket: function Socket() {
          return /* reexport safe */_socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket;
        },
        /* harmony export */connect: function connect() {
          return /* binding */lookup;
        },
        /* harmony export */"default": function _default() {
          return /* binding */lookup;
        },
        /* harmony export */io: function io() {
          return /* binding */lookup;
        },
        /* harmony export */protocol: function protocol() {
          return /* reexport safe */socket_io_parser__WEBPACK_IMPORTED_MODULE_3__.protocol;
        }
        /* harmony export */
      });
      /* harmony import */
      var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */"../node_modules/socket.io-client/build/esm/url.js");
      /* harmony import */
      var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.js */"../node_modules/socket.io-client/build/esm/manager.js");
      /* harmony import */
      var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */"../node_modules/socket.io-client/build/esm/socket.js");
      /* harmony import */
      var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-parser */"../node_modules/socket.io-parser/build/esm/index.js");

      /**
       * Managers cache.
       */
      var cache = {};
      function lookup(uri, opts) {
        if (_typeof(uri) === "object") {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        var parsed = (0, _url_js__WEBPACK_IMPORTED_MODULE_0__.url)(uri, opts.path || "/socket.io");
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id]["nsps"];
        var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        var io;
        if (newConnection) {
          io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
        } else {
          if (!cache[id]) {
            cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
          }
          io = cache[id];
        }
        if (parsed.query && !opts.query) {
          opts.query = parsed.queryKey;
        }
        return io.socket(parsed.path, opts);
      }
      // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
      // namespace (e.g. `io.connect(...)`), for backward compatibility
      Object.assign(lookup, {
        Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager,
        Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket,
        io: lookup,
        connect: lookup
      });
      /**
       * Protocol version.
       *
       * @public
       */

      /**
       * Expose constructors for standalone build.
       *
       * @public
       */

      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/manager.js": (
    /*!*************************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/manager.js ***!
      \*************************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_managerJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Manager: function Manager() {
          return /* binding */_Manager;
        }
        /* harmony export */
      });
      /* harmony import */
      var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */"../node_modules/engine.io-client/build/esm/index.js");
      /* harmony import */
      var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */"../node_modules/socket.io-client/build/esm/socket.js");
      /* harmony import */
      var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-parser */"../node_modules/socket.io-parser/build/esm/index.js");
      /* harmony import */
      var _on_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on.js */"../node_modules/socket.io-client/build/esm/on.js");
      /* harmony import */
      var _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/backo2.js */"../node_modules/socket.io-client/build/esm/contrib/backo2.js");
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var _Manager = /*#__PURE__*/function (_socket_io_component_4) {
        function _Manager(uri, opts) {
          var _this32;
          _classCallCheck(this, _Manager);
          var _a;
          _this32 = _callSuper(this, _Manager);
          _this32.nsps = {};
          _this32.subs = [];
          if (uri && "object" === _typeof(uri)) {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};
          opts.path = opts.path || "/socket.io";
          _this32.opts = opts;
          (0, engine_io_client__WEBPACK_IMPORTED_MODULE_0__.installTimerFunctions)(_this32, opts);
          _this32.reconnection(opts.reconnection !== false);
          _this32.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
          _this32.reconnectionDelay(opts.reconnectionDelay || 1000);
          _this32.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
          _this32.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
          _this32.backoff = new _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__.Backoff({
            min: _this32.reconnectionDelay(),
            max: _this32.reconnectionDelayMax(),
            jitter: _this32.randomizationFactor()
          });
          _this32.timeout(null == opts.timeout ? 20000 : opts.timeout);
          _this32._readyState = "closed";
          _this32.uri = uri;
          var _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;
          _this32.encoder = new _parser.Encoder();
          _this32.decoder = new _parser.Decoder();
          _this32._autoConnect = opts.autoConnect !== false;
          if (_this32._autoConnect) _this32.open();
          return _this32;
        }
        _inherits(_Manager, _socket_io_component_4);
        return _createClass(_Manager, [{
          key: "reconnection",
          value: function reconnection(v) {
            if (!arguments.length) return this._reconnection;
            this._reconnection = !!v;
            if (!v) {
              this.skipReconnect = true;
            }
            return this;
          }
        }, {
          key: "reconnectionAttempts",
          value: function reconnectionAttempts(v) {
            if (v === undefined) return this._reconnectionAttempts;
            this._reconnectionAttempts = v;
            return this;
          }
        }, {
          key: "reconnectionDelay",
          value: function reconnectionDelay(v) {
            var _a;
            if (v === undefined) return this._reconnectionDelay;
            this._reconnectionDelay = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
            return this;
          }
        }, {
          key: "randomizationFactor",
          value: function randomizationFactor(v) {
            var _a;
            if (v === undefined) return this._randomizationFactor;
            this._randomizationFactor = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
            return this;
          }
        }, {
          key: "reconnectionDelayMax",
          value: function reconnectionDelayMax(v) {
            var _a;
            if (v === undefined) return this._reconnectionDelayMax;
            this._reconnectionDelayMax = v;
            (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
            return this;
          }
        }, {
          key: "timeout",
          value: function timeout(v) {
            if (!arguments.length) return this._timeout;
            this._timeout = v;
            return this;
          }
          /**
           * Starts trying to reconnect if reconnection is enabled and we have not
           * started reconnecting yet
           *
           * @private
           */
        }, {
          key: "maybeReconnectOnOpen",
          value: function maybeReconnectOnOpen() {
            // Only try to reconnect if it's the first time we're connecting
            if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
              // keeps reconnection from firing twice for the same reconnection loop
              this.reconnect();
            }
          }
          /**
           * Sets the current transport `socket`.
           *
           * @param {Function} fn - optional, callback
           * @return self
           * @public
           */
        }, {
          key: "open",
          value: function open(fn) {
            var _this33 = this;
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__.Socket(this.uri, this.opts);
            var socket = this.engine;
            var self = this;
            this._readyState = "opening";
            this.skipReconnect = false;
            // emit `open`
            var openSubDestroy = (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "open", function () {
              self.onopen();
              fn && fn();
            });
            var onError = function onError(err) {
              _this33.cleanup();
              _this33._readyState = "closed";
              _this33.emitReserved("error", err);
              if (fn) {
                fn(err);
              } else {
                // Only do this if there is no fn to handle the error
                _this33.maybeReconnectOnOpen();
              }
            };
            // emit `error`
            var errorSub = (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", onError);
            if (false !== this._timeout) {
              var timeout = this._timeout;
              // set timer
              var timer = this.setTimeoutFn(function () {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
              }, timeout);
              if (this.opts.autoUnref) {
                timer.unref();
              }
              this.subs.push(function () {
                _this33.clearTimeoutFn(timer);
              });
            }
            this.subs.push(openSubDestroy);
            this.subs.push(errorSub);
            return this;
          }
          /**
           * Alias for open()
           *
           * @return self
           * @public
           */
        }, {
          key: "connect",
          value: function connect(fn) {
            return this.open(fn);
          }
          /**
           * Called upon transport open.
           *
           * @private
           */
        }, {
          key: "onopen",
          value: function onopen() {
            // clear old subs
            this.cleanup();
            // mark as open
            this._readyState = "open";
            this.emitReserved("open");
            // add new subs
            var socket = this.engine;
            this.subs.push((0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "ping", this.onping.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "data", this.ondata.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", this.onerror.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "close", this.onclose.bind(this)),
            // @ts-ignore
            (0, _on_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          /**
           * Called upon a ping.
           *
           * @private
           */
        }, {
          key: "onping",
          value: function onping() {
            this.emitReserved("ping");
          }
          /**
           * Called with data.
           *
           * @private
           */
        }, {
          key: "ondata",
          value: function ondata(data) {
            try {
              this.decoder.add(data);
            } catch (e) {
              this.onclose("parse error", e);
            }
          }
          /**
           * Called when parser fully decodes a packet.
           *
           * @private
           */
        }, {
          key: "ondecoded",
          value: function ondecoded(packet) {
            var _this34 = this;
            // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
            (0, engine_io_client__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
              _this34.emitReserved("packet", packet);
            }, this.setTimeoutFn);
          }
          /**
           * Called upon socket error.
           *
           * @private
           */
        }, {
          key: "onerror",
          value: function onerror(err) {
            this.emitReserved("error", err);
          }
          /**
           * Creates a new socket for the given `nsp`.
           *
           * @return {Socket}
           * @public
           */
        }, {
          key: "socket",
          value: function socket(nsp, opts) {
            var socket = this.nsps[nsp];
            if (!socket) {
              socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__.Socket(this, nsp, opts);
              this.nsps[nsp] = socket;
            } else if (this._autoConnect && !socket.active) {
              socket.connect();
            }
            return socket;
          }
          /**
           * Called upon a socket close.
           *
           * @param socket
           * @private
           */
        }, {
          key: "_destroy",
          value: function _destroy(socket) {
            var nsps = Object.keys(this.nsps);
            for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
              var nsp = _nsps[_i];
              var _socket = this.nsps[nsp];
              if (_socket.active) {
                return;
              }
            }
            this._close();
          }
          /**
           * Writes a packet.
           *
           * @param packet
           * @private
           */
        }, {
          key: "_packet",
          value: function _packet(packet) {
            var encodedPackets = this.encoder.encode(packet);
            for (var i = 0; i < encodedPackets.length; i++) {
              this.engine.write(encodedPackets[i], packet.options);
            }
          }
          /**
           * Clean up transport subscriptions and packet buffer.
           *
           * @private
           */
        }, {
          key: "cleanup",
          value: function cleanup() {
            this.subs.forEach(function (subDestroy) {
              return subDestroy();
            });
            this.subs.length = 0;
            this.decoder.destroy();
          }
          /**
           * Close the current socket.
           *
           * @private
           */
        }, {
          key: "_close",
          value: function _close() {
            this.skipReconnect = true;
            this._reconnecting = false;
            this.onclose("forced close");
          }
          /**
           * Alias for close()
           *
           * @private
           */
        }, {
          key: "disconnect",
          value: function disconnect() {
            return this._close();
          }
          /**
           * Called when:
           *
           * - the low-level engine is closed
           * - the parser encountered a badly formatted packet
           * - all sockets are disconnected
           *
           * @private
           */
        }, {
          key: "onclose",
          value: function onclose(reason, description) {
            var _a;
            this.cleanup();
            (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
            this.backoff.reset();
            this._readyState = "closed";
            this.emitReserved("close", reason, description);
            if (this._reconnection && !this.skipReconnect) {
              this.reconnect();
            }
          }
          /**
           * Attempt a reconnection.
           *
           * @private
           */
        }, {
          key: "reconnect",
          value: function reconnect() {
            var _this35 = this;
            if (this._reconnecting || this.skipReconnect) return this;
            var self = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) {
              this.backoff.reset();
              this.emitReserved("reconnect_failed");
              this._reconnecting = false;
            } else {
              var delay = this.backoff.duration();
              this._reconnecting = true;
              var timer = this.setTimeoutFn(function () {
                if (self.skipReconnect) return;
                _this35.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open(function (err) {
                  if (err) {
                    self._reconnecting = false;
                    self.reconnect();
                    _this35.emitReserved("reconnect_error", err);
                  } else {
                    self.onreconnect();
                  }
                });
              }, delay);
              if (this.opts.autoUnref) {
                timer.unref();
              }
              this.subs.push(function () {
                _this35.clearTimeoutFn(timer);
              });
            }
          }
          /**
           * Called upon successful reconnect.
           *
           * @private
           */
        }, {
          key: "onreconnect",
          value: function onreconnect() {
            var attempt = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();
            this.emitReserved("reconnect", attempt);
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__.Emitter);
      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/on.js": (
    /*!********************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/on.js ***!
      \********************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_onJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */on: function on() {
          return /* binding */_on;
        }
        /* harmony export */
      });
      function _on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
          obj.off(ev, fn);
        };
      }

      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/socket.js": (
    /*!************************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/socket.js ***!
      \************************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_socketJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Socket: function Socket() {
          return /* binding */_Socket2;
        }
        /* harmony export */
      });
      /* harmony import */
      var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-parser */"../node_modules/socket.io-parser/build/esm/index.js");
      /* harmony import */
      var _on_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on.js */"../node_modules/socket.io-client/build/esm/on.js");
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");

      /**
       * Internal events.
       * These events can't be emitted by the user.
       */
      var RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
      });
      /**
       * A Socket is the fundamental class for interacting with the server.
       *
       * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log("connected");
       * });
       *
       * // send an event to the server
       * socket.emit("foo", "bar");
       *
       * socket.on("foobar", () => {
       *   // an event was received from the server
       * });
       *
       * // upon disconnection
       * socket.on("disconnect", (reason) => {
       *   console.log(`disconnected due to ${reason}`);
       * });
       */
      var _Socket2 = /*#__PURE__*/function (_socket_io_component_5) {
        /**
         * `Socket` constructor.
         */
        function _Socket2(io, nsp, opts) {
          var _this36;
          _classCallCheck(this, _Socket2);
          _this36 = _callSuper(this, _Socket2);
          /**
           * Whether the socket is currently connected to the server.
           *
           * @example
           * const socket = io();
           *
           * socket.on("connect", () => {
           *   console.log(socket.connected); // true
           * });
           *
           * socket.on("disconnect", () => {
           *   console.log(socket.connected); // false
           * });
           */
          _this36.connected = false;
          /**
           * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
           * be transmitted by the server.
           */
          _this36.recovered = false;
          /**
           * Buffer for packets received before the CONNECT packet
           */
          _this36.receiveBuffer = [];
          /**
           * Buffer for packets that will be sent once the socket is connected
           */
          _this36.sendBuffer = [];
          /**
           * The queue of packets to be sent with retry in case of failure.
           *
           * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
           * @private
           */
          _this36._queue = [];
          /**
           * A sequence to generate the ID of the {@link QueuedPacket}.
           * @private
           */
          _this36._queueSeq = 0;
          _this36.ids = 0;
          /**
           * A map containing acknowledgement handlers.
           *
           * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
           *
           * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
           * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
           * - `const value = await socket.emitWithAck("test")`
           *
           * From those that don't:
           *
           * - `socket.emit("test", (value) => { ... });`
           *
           * In the first case, the handlers will be called with an error when:
           *
           * - the timeout is reached
           * - the socket gets disconnected
           *
           * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
           * an acknowledgement from the server.
           *
           * @private
           */
          _this36.acks = {};
          _this36.flags = {};
          _this36.io = io;
          _this36.nsp = nsp;
          if (opts && opts.auth) {
            _this36.auth = opts.auth;
          }
          _this36._opts = Object.assign({}, opts);
          if (_this36.io._autoConnect) _this36.open();
          return _this36;
        }
        /**
         * Whether the socket is currently disconnected
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.disconnected); // false
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.disconnected); // true
         * });
         */
        _inherits(_Socket2, _socket_io_component_5);
        return _createClass(_Socket2, [{
          key: "disconnected",
          get: function get() {
            return !this.connected;
          }
          /**
           * Subscribe to open, close and packet events
           *
           * @private
           */
        }, {
          key: "subEvents",
          value: function subEvents() {
            if (this.subs) return;
            var io = this.io;
            this.subs = [(0, _on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "open", this.onopen.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "packet", this.onpacket.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "error", this.onerror.bind(this)), (0, _on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "close", this.onclose.bind(this))];
          }
          /**
           * Whether the Socket will try to reconnect when its Manager connects or reconnects.
           *
           * @example
           * const socket = io();
           *
           * console.log(socket.active); // true
           *
           * socket.on("disconnect", (reason) => {
           *   if (reason === "io server disconnect") {
           *     // the disconnection was initiated by the server, you need to manually reconnect
           *     console.log(socket.active); // false
           *   }
           *   // else the socket will automatically try to reconnect
           *   console.log(socket.active); // true
           * });
           */
        }, {
          key: "active",
          get: function get() {
            return !!this.subs;
          }
          /**
           * "Opens" the socket.
           *
           * @example
           * const socket = io({
           *   autoConnect: false
           * });
           *
           * socket.connect();
           */
        }, {
          key: "connect",
          value: function connect() {
            if (this.connected) return this;
            this.subEvents();
            if (!this.io["_reconnecting"]) this.io.open(); // ensure open
            if ("open" === this.io._readyState) this.onopen();
            return this;
          }
          /**
           * Alias for {@link connect()}.
           */
        }, {
          key: "open",
          value: function open() {
            return this.connect();
          }
          /**
           * Sends a `message` event.
           *
           * This method mimics the WebSocket.send() method.
           *
           * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
           *
           * @example
           * socket.send("hello");
           *
           * // this is equivalent to
           * socket.emit("message", "hello");
           *
           * @return self
           */
        }, {
          key: "send",
          value: function send() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            args.unshift("message");
            this.emit.apply(this, args);
            return this;
          }
          /**
           * Override `emit`.
           * If the event is in `events`, it's emitted normally.
           *
           * @example
           * socket.emit("hello", "world");
           *
           * // all serializable datastructures are supported (no need to call JSON.stringify)
           * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
           *
           * // with an acknowledgement from the server
           * socket.emit("hello", "world", (val) => {
           *   // ...
           * });
           *
           * @return self
           */
        }, {
          key: "emit",
          value: function emit(ev) {
            var _a, _b, _c;
            if (RESERVED_EVENTS.hasOwnProperty(ev)) {
              throw new Error('"' + ev.toString() + '" is a reserved event name');
            }
            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }
            args.unshift(ev);
            if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
              this._addToQueue(args);
              return this;
            }
            var packet = {
              type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT,
              data: args
            };
            packet.options = {};
            packet.options.compress = this.flags.compress !== false;
            // event ack callback
            if ("function" === typeof args[args.length - 1]) {
              var id = this.ids++;
              var ack = args.pop();
              this._registerAckCallback(id, ack);
              packet.id = id;
            }
            var isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
            var isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
            var discardPacket = this.flags["volatile"] && !isTransportWritable;
            if (discardPacket) {} else if (isConnected) {
              this.notifyOutgoingListeners(packet);
              this.packet(packet);
            } else {
              this.sendBuffer.push(packet);
            }
            this.flags = {};
            return this;
          }
          /**
           * @private
           */
        }, {
          key: "_registerAckCallback",
          value: function _registerAckCallback(id, ack) {
            var _this37 = this;
            var _a;
            var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
            if (timeout === undefined) {
              this.acks[id] = ack;
              return;
            }
            // @ts-ignore
            var timer = this.io.setTimeoutFn(function () {
              delete _this37.acks[id];
              for (var i = 0; i < _this37.sendBuffer.length; i++) {
                if (_this37.sendBuffer[i].id === id) {
                  _this37.sendBuffer.splice(i, 1);
                }
              }
              ack.call(_this37, new Error("operation has timed out"));
            }, timeout);
            var fn = function fn() {
              // @ts-ignore
              _this37.io.clearTimeoutFn(timer);
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              ack.apply(_this37, args);
            };
            fn.withError = true;
            this.acks[id] = fn;
          }
          /**
           * Emits an event and waits for an acknowledgement
           *
           * @example
           * // without timeout
           * const response = await socket.emitWithAck("hello", "world");
           *
           * // with a specific timeout
           * try {
           *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
           * } catch (err) {
           *   // the server did not acknowledge the event in the given delay
           * }
           *
           * @return a Promise that will be fulfilled when the server acknowledges the event
           */
        }, {
          key: "emitWithAck",
          value: function emitWithAck(ev) {
            var _this38 = this;
            for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }
            return new Promise(function (resolve, reject) {
              var fn = function fn(arg1, arg2) {
                return arg1 ? reject(arg1) : resolve(arg2);
              };
              fn.withError = true;
              args.push(fn);
              _this38.emit.apply(_this38, [ev].concat(args));
            });
          }
          /**
           * Add the packet to the queue.
           * @param args
           * @private
           */
        }, {
          key: "_addToQueue",
          value: function _addToQueue(args) {
            var _this39 = this;
            var ack;
            if (typeof args[args.length - 1] === "function") {
              ack = args.pop();
            }
            var packet = {
              id: this._queueSeq++,
              tryCount: 0,
              pending: false,
              args: args,
              flags: Object.assign({
                fromQueue: true
              }, this.flags)
            };
            args.push(function (err) {
              if (packet !== _this39._queue[0]) {
                // the packet has already been acknowledged
                return;
              }
              var hasError = err !== null;
              if (hasError) {
                if (packet.tryCount > _this39._opts.retries) {
                  _this39._queue.shift();
                  if (ack) {
                    ack(err);
                  }
                }
              } else {
                _this39._queue.shift();
                if (ack) {
                  for (var _len6 = arguments.length, responseArgs = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                    responseArgs[_key6 - 1] = arguments[_key6];
                  }
                  ack.apply(void 0, [null].concat(responseArgs));
                }
              }
              packet.pending = false;
              return _this39._drainQueue();
            });
            this._queue.push(packet);
            this._drainQueue();
          }
          /**
           * Send the first packet of the queue, and wait for an acknowledgement from the server.
           * @param force - whether to resend a packet that has not been acknowledged yet
           *
           * @private
           */
        }, {
          key: "_drainQueue",
          value: function _drainQueue() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!this.connected || this._queue.length === 0) {
              return;
            }
            var packet = this._queue[0];
            if (packet.pending && !force) {
              return;
            }
            packet.pending = true;
            packet.tryCount++;
            this.flags = packet.flags;
            this.emit.apply(this, packet.args);
          }
          /**
           * Sends a packet.
           *
           * @param packet
           * @private
           */
        }, {
          key: "packet",
          value: function packet(_packet2) {
            _packet2.nsp = this.nsp;
            this.io._packet(_packet2);
          }
          /**
           * Called upon engine `open`.
           *
           * @private
           */
        }, {
          key: "onopen",
          value: function onopen() {
            var _this40 = this;
            if (typeof this.auth == "function") {
              this.auth(function (data) {
                _this40._sendConnectPacket(data);
              });
            } else {
              this._sendConnectPacket(this.auth);
            }
          }
          /**
           * Sends a CONNECT packet to initiate the Socket.IO session.
           *
           * @param data
           * @private
           */
        }, {
          key: "_sendConnectPacket",
          value: function _sendConnectPacket(data) {
            this.packet({
              type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
              data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
              }, data) : data
            });
          }
          /**
           * Called upon engine or manager `error`.
           *
           * @param err
           * @private
           */
        }, {
          key: "onerror",
          value: function onerror(err) {
            if (!this.connected) {
              this.emitReserved("connect_error", err);
            }
          }
          /**
           * Called upon engine `close`.
           *
           * @param reason
           * @param description
           * @private
           */
        }, {
          key: "onclose",
          value: function onclose(reason, description) {
            this.connected = false;
            delete this.id;
            this.emitReserved("disconnect", reason, description);
            this._clearAcks();
          }
          /**
           * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
           * the server.
           *
           * @private
           */
        }, {
          key: "_clearAcks",
          value: function _clearAcks() {
            var _this41 = this;
            Object.keys(this.acks).forEach(function (id) {
              var isBuffered = _this41.sendBuffer.some(function (packet) {
                return String(packet.id) === id;
              });
              if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                var ack = _this41.acks[id];
                delete _this41.acks[id];
                if (ack.withError) {
                  ack.call(_this41, new Error("socket has been disconnected"));
                }
              }
            });
          }
          /**
           * Called with socket packet.
           *
           * @param packet
           * @private
           */
        }, {
          key: "onpacket",
          value: function onpacket(packet) {
            var sameNamespace = packet.nsp === this.nsp;
            if (!sameNamespace) return;
            switch (packet.type) {
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                  this.onconnect(packet.data.sid, packet.data.pid);
                } else {
                  this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT:
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK:
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
              case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT_ERROR:
                this.destroy();
                var err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
            }
          }
          /**
           * Called upon a server event.
           *
           * @param packet
           * @private
           */
        }, {
          key: "onevent",
          value: function onevent(packet) {
            var args = packet.data || [];
            if (null != packet.id) {
              args.push(this.ack(packet.id));
            }
            if (this.connected) {
              this.emitEvent(args);
            } else {
              this.receiveBuffer.push(Object.freeze(args));
            }
          }
        }, {
          key: "emitEvent",
          value: function emitEvent(args) {
            if (this._anyListeners && this._anyListeners.length) {
              var listeners = this._anyListeners.slice();
              var _iterator = _createForOfIteratorHelper(listeners),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var listener = _step.value;
                  listener.apply(this, args);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            _superPropGet(_Socket2, "emit", this, 1).apply(this, args);
            if (this._pid && args.length && typeof args[args.length - 1] === "string") {
              this._lastOffset = args[args.length - 1];
            }
          }
          /**
           * Produces an ack callback to emit with an event.
           *
           * @private
           */
        }, {
          key: "ack",
          value: function ack(id) {
            var self = this;
            var sent = false;
            return function () {
              // prevent double callbacks
              if (sent) return;
              sent = true;
              for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
              }
              self.packet({
                type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK,
                id: id,
                data: args
              });
            };
          }
          /**
           * Called upon a server acknowledgement.
           *
           * @param packet
           * @private
           */
        }, {
          key: "onack",
          value: function onack(packet) {
            var ack = this.acks[packet.id];
            if (typeof ack !== "function") {
              return;
            }
            delete this.acks[packet.id];
            // @ts-ignore FIXME ack is incorrectly inferred as 'never'
            if (ack.withError) {
              packet.data.unshift(null);
            }
            // @ts-ignore
            ack.apply(this, packet.data);
          }
          /**
           * Called upon server connect.
           *
           * @private
           */
        }, {
          key: "onconnect",
          value: function onconnect(id, pid) {
            this.id = id;
            this.recovered = pid && this._pid === pid;
            this._pid = pid; // defined only if connection state recovery is enabled
            this.connected = true;
            this.emitBuffered();
            this.emitReserved("connect");
            this._drainQueue(true);
          }
          /**
           * Emit buffered events (received and emitted).
           *
           * @private
           */
        }, {
          key: "emitBuffered",
          value: function emitBuffered() {
            var _this42 = this;
            this.receiveBuffer.forEach(function (args) {
              return _this42.emitEvent(args);
            });
            this.receiveBuffer = [];
            this.sendBuffer.forEach(function (packet) {
              _this42.notifyOutgoingListeners(packet);
              _this42.packet(packet);
            });
            this.sendBuffer = [];
          }
          /**
           * Called upon server disconnect.
           *
           * @private
           */
        }, {
          key: "ondisconnect",
          value: function ondisconnect() {
            this.destroy();
            this.onclose("io server disconnect");
          }
          /**
           * Called upon forced client/server side disconnections,
           * this method ensures the manager stops tracking us and
           * that reconnections don't get triggered for this.
           *
           * @private
           */
        }, {
          key: "destroy",
          value: function destroy() {
            if (this.subs) {
              // clean subscriptions to avoid reconnections
              this.subs.forEach(function (subDestroy) {
                return subDestroy();
              });
              this.subs = undefined;
            }
            this.io["_destroy"](this);
          }
          /**
           * Disconnects the socket manually. In that case, the socket will not try to reconnect.
           *
           * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
           *
           * @example
           * const socket = io();
           *
           * socket.on("disconnect", (reason) => {
           *   // console.log(reason); prints "io client disconnect"
           * });
           *
           * socket.disconnect();
           *
           * @return self
           */
        }, {
          key: "disconnect",
          value: function disconnect() {
            if (this.connected) {
              this.packet({
                type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT
              });
            }
            // remove socket from pool
            this.destroy();
            if (this.connected) {
              // fire events
              this.onclose("io client disconnect");
            }
            return this;
          }
          /**
           * Alias for {@link disconnect()}.
           *
           * @return self
           */
        }, {
          key: "close",
          value: function close() {
            return this.disconnect();
          }
          /**
           * Sets the compress flag.
           *
           * @example
           * socket.compress(false).emit("hello");
           *
           * @param compress - if `true`, compresses the sending data
           * @return self
           */
        }, {
          key: "compress",
          value: function compress(_compress) {
            this.flags.compress = _compress;
            return this;
          }
          /**
           * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
           * ready to send messages.
           *
           * @example
           * socket.volatile.emit("hello"); // the server may or may not receive it
           *
           * @returns self
           */
        }, {
          key: "volatile",
          get: function get() {
            this.flags["volatile"] = true;
            return this;
          }
          /**
           * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
           * given number of milliseconds have elapsed without an acknowledgement from the server:
           *
           * @example
           * socket.timeout(5000).emit("my-event", (err) => {
           *   if (err) {
           *     // the server did not acknowledge the event in the given delay
           *   }
           * });
           *
           * @returns self
           */
        }, {
          key: "timeout",
          value: function timeout(_timeout) {
            this.flags.timeout = _timeout;
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback.
           *
           * @example
           * socket.onAny((event, ...args) => {
           *   console.log(`got ${event}`);
           * });
           *
           * @param listener
           */
        }, {
          key: "onAny",
          value: function onAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.push(listener);
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback. The listener is added to the beginning of the listeners array.
           *
           * @example
           * socket.prependAny((event, ...args) => {
           *   console.log(`got event ${event}`);
           * });
           *
           * @param listener
           */
        }, {
          key: "prependAny",
          value: function prependAny(listener) {
            this._anyListeners = this._anyListeners || [];
            this._anyListeners.unshift(listener);
            return this;
          }
          /**
           * Removes the listener that will be fired when any event is emitted.
           *
           * @example
           * const catchAllListener = (event, ...args) => {
           *   console.log(`got event ${event}`);
           * }
           *
           * socket.onAny(catchAllListener);
           *
           * // remove a specific listener
           * socket.offAny(catchAllListener);
           *
           * // or remove all listeners
           * socket.offAny();
           *
           * @param listener
           */
        }, {
          key: "offAny",
          value: function offAny(listener) {
            if (!this._anyListeners) {
              return this;
            }
            if (listener) {
              var listeners = this._anyListeners;
              for (var i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
              }
            } else {
              this._anyListeners = [];
            }
            return this;
          }
          /**
           * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
           * e.g. to remove listeners.
           */
        }, {
          key: "listenersAny",
          value: function listenersAny() {
            return this._anyListeners || [];
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback.
           *
           * Note: acknowledgements sent to the server are not included.
           *
           * @example
           * socket.onAnyOutgoing((event, ...args) => {
           *   console.log(`sent event ${event}`);
           * });
           *
           * @param listener
           */
        }, {
          key: "onAnyOutgoing",
          value: function onAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.push(listener);
            return this;
          }
          /**
           * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
           * callback. The listener is added to the beginning of the listeners array.
           *
           * Note: acknowledgements sent to the server are not included.
           *
           * @example
           * socket.prependAnyOutgoing((event, ...args) => {
           *   console.log(`sent event ${event}`);
           * });
           *
           * @param listener
           */
        }, {
          key: "prependAnyOutgoing",
          value: function prependAnyOutgoing(listener) {
            this._anyOutgoingListeners = this._anyOutgoingListeners || [];
            this._anyOutgoingListeners.unshift(listener);
            return this;
          }
          /**
           * Removes the listener that will be fired when any event is emitted.
           *
           * @example
           * const catchAllListener = (event, ...args) => {
           *   console.log(`sent event ${event}`);
           * }
           *
           * socket.onAnyOutgoing(catchAllListener);
           *
           * // remove a specific listener
           * socket.offAnyOutgoing(catchAllListener);
           *
           * // or remove all listeners
           * socket.offAnyOutgoing();
           *
           * @param [listener] - the catch-all listener (optional)
           */
        }, {
          key: "offAnyOutgoing",
          value: function offAnyOutgoing(listener) {
            if (!this._anyOutgoingListeners) {
              return this;
            }
            if (listener) {
              var listeners = this._anyOutgoingListeners;
              for (var i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
              }
            } else {
              this._anyOutgoingListeners = [];
            }
            return this;
          }
          /**
           * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
           * e.g. to remove listeners.
           */
        }, {
          key: "listenersAnyOutgoing",
          value: function listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          /**
           * Notify the listeners for each packet sent
           *
           * @param packet
           *
           * @private
           */
        }, {
          key: "notifyOutgoingListeners",
          value: function notifyOutgoingListeners(packet) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
              var listeners = this._anyOutgoingListeners.slice();
              var _iterator2 = _createForOfIteratorHelper(listeners),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var listener = _step2.value;
                  listener.apply(this, packet.data);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__.Emitter);
      /***/
    }),
    /***/"../node_modules/socket.io-client/build/esm/url.js": (
    /*!*********************************************************!*\
      !*** ../node_modules/socket.io-client/build/esm/url.js ***!
      \*********************************************************/
    /***/
    function _node_modules_socketIoClient_build_esm_urlJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */url: function url() {
          return /* binding */_url;
        }
        /* harmony export */
      });
      /* harmony import */
      var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */"../node_modules/engine.io-client/build/esm/index.js");

      /**
       * URL parser.
       *
       * @param uri - url
       * @param path - the request path of the connection
       * @param loc - An object meant to mimic window.location.
       *        Defaults to window.location.
       * @public
       */
      function _url(uri) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var loc = arguments.length > 2 ? arguments[2] : undefined;
        var obj = uri;
        // default to window.location
        loc = loc || typeof location !== "undefined" && location;
        if (null == uri) uri = loc.protocol + "//" + loc.host;
        // relative path support
        if (typeof uri === "string") {
          if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
              uri = loc.protocol + uri;
            } else {
              uri = loc.host + uri;
            }
          }
          if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
              uri = loc.protocol + "//" + uri;
            } else {
              uri = "https://" + uri;
            }
          }
          // parse
          obj = (0, engine_io_client__WEBPACK_IMPORTED_MODULE_0__.parse)(uri);
        }
        // make sure we treat `localhost:80` and `localhost` equally
        if (!obj.port) {
          if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
          } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
          }
        }
        obj.path = obj.path || "/";
        var ipv6 = obj.host.indexOf(":") !== -1;
        var host = ipv6 ? "[" + obj.host + "]" : obj.host;
        // define unique id
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
        // define href
        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
      }

      /***/
    }),
    /***/"../node_modules/socket.io-parser/build/esm/binary.js": (
    /*!************************************************************!*\
      !*** ../node_modules/socket.io-parser/build/esm/binary.js ***!
      \************************************************************/
    /***/
    function _node_modules_socketIoParser_build_esm_binaryJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */deconstructPacket: function deconstructPacket() {
          return /* binding */_deconstructPacket2;
        },
        /* harmony export */reconstructPacket: function reconstructPacket() {
          return /* binding */_reconstructPacket2;
        }
        /* harmony export */
      });
      /* harmony import */
      var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-binary.js */"../node_modules/socket.io-parser/build/esm/is-binary.js");

      /**
       * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
       *
       * @param {Object} packet - socket.io event packet
       * @return {Object} with deconstructed packet and list of buffers
       * @public
       */
      function _deconstructPacket2(packet) {
        var buffers = [];
        var packetData = packet.data;
        var pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'
        return {
          packet: pack,
          buffers: buffers
        };
      }
      function _deconstructPacket(data, buffers) {
        if (!data) return data;
        if ((0, _is_binary_js__WEBPACK_IMPORTED_MODULE_0__.isBinary)(data)) {
          var placeholder = {
            _placeholder: true,
            num: buffers.length
          };
          buffers.push(data);
          return placeholder;
        } else if (Array.isArray(data)) {
          var newData = new Array(data.length);
          for (var i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
          }
          return newData;
        } else if (_typeof(data) === "object" && !(data instanceof Date)) {
          var _newData = {};
          for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              _newData[key] = _deconstructPacket(data[key], buffers);
            }
          }
          return _newData;
        }
        return data;
      }
      /**
       * Reconstructs a binary packet from its placeholder packet and buffers
       *
       * @param {Object} packet - event packet with placeholders
       * @param {Array} buffers - binary buffers to put in placeholder positions
       * @return {Object} reconstructed packet
       * @public
       */
      function _reconstructPacket2(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        delete packet.attachments; // no longer useful
        return packet;
      }
      function _reconstructPacket(data, buffers) {
        if (!data) return data;
        if (data && data._placeholder === true) {
          var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
          if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
          } else {
            throw new Error("illegal attachments");
          }
        } else if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
          }
        } else if (_typeof(data) === "object") {
          for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              data[key] = _reconstructPacket(data[key], buffers);
            }
          }
        }
        return data;
      }

      /***/
    }),
    /***/"../node_modules/socket.io-parser/build/esm/index.js": (
    /*!***********************************************************!*\
      !*** ../node_modules/socket.io-parser/build/esm/index.js ***!
      \***********************************************************/
    /***/
    function _node_modules_socketIoParser_build_esm_indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */Decoder: function Decoder() {
          return /* binding */_Decoder;
        },
        /* harmony export */Encoder: function Encoder() {
          return /* binding */_Encoder;
        },
        /* harmony export */PacketType: function PacketType() {
          return /* binding */_PacketType;
        },
        /* harmony export */protocol: function protocol() {
          return /* binding */_protocol3;
        }
        /* harmony export */
      });
      /* harmony import */
      var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @socket.io/component-emitter */"../node_modules/@socket.io/component-emitter/lib/esm/index.js");
      /* harmony import */
      var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary.js */"../node_modules/socket.io-parser/build/esm/binary.js");
      /* harmony import */
      var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-binary.js */"../node_modules/socket.io-parser/build/esm/is-binary.js");

      /**
       * These strings must not be used as event names, as they have a special meaning.
       */
      var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener" // used by the Node.js EventEmitter
      ];
      /**
       * Protocol version.
       *
       * @public
       */
      var _protocol3 = 5;
      var _PacketType;
      (function (PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
      })(_PacketType || (_PacketType = {}));
      /**
       * A socket.io Encoder instance
       */
      var _Encoder = /*#__PURE__*/function () {
        /**
         * Encoder constructor
         *
         * @param {function} replacer - custom replacer to pass down to JSON.parse
         */
        function _Encoder(replacer) {
          _classCallCheck(this, _Encoder);
          this.replacer = replacer;
        }
        /**
         * Encode a packet as a single string if non-binary, or as a
         * buffer sequence, depending on packet type.
         *
         * @param {Object} obj - packet object
         */
        return _createClass(_Encoder, [{
          key: "encode",
          value: function encode(obj) {
            if (obj.type === _PacketType.EVENT || obj.type === _PacketType.ACK) {
              if ((0, _is_binary_js__WEBPACK_IMPORTED_MODULE_2__.hasBinary)(obj)) {
                return this.encodeAsBinary({
                  type: obj.type === _PacketType.EVENT ? _PacketType.BINARY_EVENT : _PacketType.BINARY_ACK,
                  nsp: obj.nsp,
                  data: obj.data,
                  id: obj.id
                });
              }
            }
            return [this.encodeAsString(obj)];
          }
          /**
           * Encode packet as string.
           */
        }, {
          key: "encodeAsString",
          value: function encodeAsString(obj) {
            // first is type
            var str = "" + obj.type;
            // attachments if we have them
            if (obj.type === _PacketType.BINARY_EVENT || obj.type === _PacketType.BINARY_ACK) {
              str += obj.attachments + "-";
            }
            // if we have a namespace other than `/`
            // we append it followed by a comma `,`
            if (obj.nsp && "/" !== obj.nsp) {
              str += obj.nsp + ",";
            }
            // immediately followed by the id
            if (null != obj.id) {
              str += obj.id;
            }
            // json data
            if (null != obj.data) {
              str += JSON.stringify(obj.data, this.replacer);
            }
            return str;
          }
          /**
           * Encode packet as 'buffer sequence' by removing blobs, and
           * deconstructing packet into object with placeholders and
           * a list of buffers.
           */
        }, {
          key: "encodeAsBinary",
          value: function encodeAsBinary(obj) {
            var deconstruction = (0, _binary_js__WEBPACK_IMPORTED_MODULE_1__.deconstructPacket)(obj);
            var pack = this.encodeAsString(deconstruction.packet);
            var buffers = deconstruction.buffers;
            buffers.unshift(pack); // add packet info to beginning of data list
            return buffers; // write all the buffers
          }
        }]);
      }(); // see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
      function isObject(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
      }
      /**
       * A socket.io Decoder instance
       *
       * @return {Object} decoder
       */
      var _Decoder = /*#__PURE__*/function (_socket_io_component_6) {
        /**
         * Decoder constructor
         *
         * @param {function} reviver - custom reviver to pass down to JSON.stringify
         */
        function _Decoder(reviver) {
          var _this43;
          _classCallCheck(this, _Decoder);
          _this43 = _callSuper(this, _Decoder);
          _this43.reviver = reviver;
          return _this43;
        }
        /**
         * Decodes an encoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         */
        _inherits(_Decoder, _socket_io_component_6);
        return _createClass(_Decoder, [{
          key: "add",
          value: function add(obj) {
            var packet;
            if (typeof obj === "string") {
              if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
              }
              packet = this.decodeString(obj);
              var isBinaryEvent = packet.type === _PacketType.BINARY_EVENT;
              if (isBinaryEvent || packet.type === _PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? _PacketType.EVENT : _PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                  _superPropGet(_Decoder, "emitReserved", this, 3)(["decoded", packet]);
                }
              } else {
                // non-binary full packet
                _superPropGet(_Decoder, "emitReserved", this, 3)(["decoded", packet]);
              }
            } else if ((0, _is_binary_js__WEBPACK_IMPORTED_MODULE_2__.isBinary)(obj) || obj.base64) {
              // raw binary data
              if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
              } else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                  // received final buffer
                  this.reconstructor = null;
                  _superPropGet(_Decoder, "emitReserved", this, 3)(["decoded", packet]);
                }
              }
            } else {
              throw new Error("Unknown type: " + obj);
            }
          }
          /**
           * Decode a packet String (JSON data)
           *
           * @param {String} str
           * @return {Object} packet
           */
        }, {
          key: "decodeString",
          value: function decodeString(str) {
            var i = 0;
            // look up type
            var p = {
              type: Number(str.charAt(0))
            };
            if (_PacketType[p.type] === undefined) {
              throw new Error("unknown packet type " + p.type);
            }
            // look up attachments if type binary
            if (p.type === _PacketType.BINARY_EVENT || p.type === _PacketType.BINARY_ACK) {
              var start = i + 1;
              while (str.charAt(++i) !== "-" && i != str.length) {}
              var buf = str.substring(start, i);
              if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
              }
              p.attachments = Number(buf);
            }
            // look up namespace (if any)
            if ("/" === str.charAt(i + 1)) {
              var _start = i + 1;
              while (++i) {
                var c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
              }
              p.nsp = str.substring(_start, i);
            } else {
              p.nsp = "/";
            }
            // look up id
            var next = str.charAt(i + 1);
            if ("" !== next && Number(next) == next) {
              var _start2 = i + 1;
              while (++i) {
                var _c2 = str.charAt(i);
                if (null == _c2 || Number(_c2) != _c2) {
                  --i;
                  break;
                }
                if (i === str.length) break;
              }
              p.id = Number(str.substring(_start2, i + 1));
            }
            // look up json data
            if (str.charAt(++i)) {
              var payload = this.tryParse(str.substr(i));
              if (_Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
              } else {
                throw new Error("invalid payload");
              }
            }
            return p;
          }
        }, {
          key: "tryParse",
          value: function tryParse(str) {
            try {
              return JSON.parse(str, this.reviver);
            } catch (e) {
              return false;
            }
          }
        }, {
          key: "destroy",
          value:
          /**
           * Deallocates a parser's resources
           */
          function destroy() {
            if (this.reconstructor) {
              this.reconstructor.finishedReconstruction();
              this.reconstructor = null;
            }
          }
        }], [{
          key: "isPayloadValid",
          value: function isPayloadValid(type, payload) {
            switch (type) {
              case _PacketType.CONNECT:
                return isObject(payload);
              case _PacketType.DISCONNECT:
                return payload === undefined;
              case _PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
              case _PacketType.EVENT:
              case _PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
              case _PacketType.ACK:
              case _PacketType.BINARY_ACK:
                return Array.isArray(payload);
            }
          }
        }]);
      }(_socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter);
      /**
       * A manager of a binary event's 'buffer sequence'. Should
       * be constructed whenever a packet of type BINARY_EVENT is
       * decoded.
       *
       * @param {Object} packet
       * @return {BinaryReconstructor} initialized reconstructor
       */
      var BinaryReconstructor = /*#__PURE__*/function () {
        function BinaryReconstructor(packet) {
          _classCallCheck(this, BinaryReconstructor);
          this.packet = packet;
          this.buffers = [];
          this.reconPack = packet;
        }
        /**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         */
        return _createClass(BinaryReconstructor, [{
          key: "takeBinaryData",
          value: function takeBinaryData(binData) {
            this.buffers.push(binData);
            if (this.buffers.length === this.reconPack.attachments) {
              // done with buffer list
              var packet = (0, _binary_js__WEBPACK_IMPORTED_MODULE_1__.reconstructPacket)(this.reconPack, this.buffers);
              this.finishedReconstruction();
              return packet;
            }
            return null;
          }
          /**
           * Cleans up binary packet reconstruction variables.
           */
        }, {
          key: "finishedReconstruction",
          value: function finishedReconstruction() {
            this.reconPack = null;
            this.buffers = [];
          }
        }]);
      }();
      /***/
    }),
    /***/"../node_modules/socket.io-parser/build/esm/is-binary.js": (
    /*!***************************************************************!*\
      !*** ../node_modules/socket.io-parser/build/esm/is-binary.js ***!
      \***************************************************************/
    /***/
    function _node_modules_socketIoParser_build_esm_isBinaryJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */hasBinary: function hasBinary() {
          return /* binding */_hasBinary;
        },
        /* harmony export */isBinary: function isBinary() {
          return /* binding */_isBinary;
        }
        /* harmony export */
      });
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };
      var toString = Object.prototype.toString;
      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
      var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
      /**
       * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
       *
       * @private
       */
      function _isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
      }
      function _hasBinary(obj, toJSON) {
        if (!obj || _typeof(obj) !== "object") {
          return false;
        }
        if (Array.isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (_hasBinary(obj[i])) {
              return true;
            }
          }
          return false;
        }
        if (_isBinary(obj)) {
          return true;
        }
        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
          return _hasBinary(obj.toJSON(), true);
        }
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
            return true;
          }
        }
        return false;
      }

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/id: moduleId,
      /******/loaded: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function () {
        return module['default'];
      } : /******/function () {
        return module;
      };
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (function () {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/
  (function () {
    /******/__webpack_require__.g = function () {
      /******/if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') return globalThis;
      /******/
      try {
        /******/return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') return window;
        /******/
      }
      /******/
    }();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/harmony module decorator */
  /******/
  (function () {
    /******/__webpack_require__.hmd = function (module) {
      /******/module = Object.create(module);
      /******/
      if (!module.children) module.children = [];
      /******/
      Object.defineProperty(module, 'exports', {
        /******/enumerable: true,
        /******/set: function set() {
          /******/throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
          /******/
        }
        /******/
      });
      /******/
      return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (function () {
    /******/__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (function () {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/
  var __webpack_exports__ = __webpack_require__("./main.ts");
  /******/
  /******/
})();
//# sourceMappingURL=slither.bundle.js.map