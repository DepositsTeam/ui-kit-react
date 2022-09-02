(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uiKitReact = {}, global.React, global.ReactDOM));
})(this, (function (exports, React$1, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function ownKeys$g(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) {
        _defineProperty$f(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty$f(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends$e() {
    _extends$e = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends$e.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$c(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$b(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$c(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function () {
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$h =
    // eslint-disable-next-line es-x/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$m = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$l = fails$m;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$l(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$k = fails$m;

  var functionBindNative = !fails$k(function () {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$a = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$a.bind(call$a) : function () {
    return call$a.apply(call$a, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$3(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var bind = FunctionPrototype$2.bind;
  var call$9 = FunctionPrototype$2.call;
  var uncurryThis$o = NATIVE_BIND$1 && bind.bind(call$9, call$9);

  var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
    return fn && uncurryThis$o(fn);
  } : function (fn) {
    return fn && function () {
      return call$9.apply(fn, arguments);
    };
  };

  var uncurryThis$n = functionUncurryThis;

  var toString$e = uncurryThis$n({}.toString);
  var stringSlice$7 = uncurryThis$n(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice$7(toString$e(it), 8, -1);
  };

  var uncurryThis$m = functionUncurryThis;
  var fails$j = fails$m;
  var classof$6 = classofRaw$1;

  var $Object$4 = Object;
  var split = uncurryThis$m(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$j(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$6(it) == 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  var $TypeError$b = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$9 = function (it) {
    if (it == undefined) throw $TypeError$b("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$8 = requireObjectCoercible$9;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$1(requireObjectCoercible$8(it));
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$j = function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$i = isCallable$j;

  var isObject$a = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$i(it);
  };

  var global$g = global$h;
  var isCallable$h = isCallable$j;

  var aFunction = function (argument) {
    return isCallable$h(argument) ? argument : undefined;
  };

  var getBuiltIn$5 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$g[namespace]) : global$g[namespace] && global$g[namespace][method];
  };

  var uncurryThis$l = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$l({}.isPrototypeOf);

  var getBuiltIn$4 = getBuiltIn$5;

  var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

  var global$f = global$h;
  var userAgent$2 = engineUserAgent;

  var process$1 = global$f.process;
  var Deno = global$f.Deno;
  var versions = process$1 && process$1.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$2) {
    match = userAgent$2.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$2.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es-x/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$i = fails$m;

  // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$i(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es-x/no-symbol -- required for testing */

  var NATIVE_SYMBOL$2 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$2
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$3 = getBuiltIn$5;
  var isCallable$g = isCallable$j;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$g($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$3(it));
  };

  var $String$3 = String;

  var tryToString$3 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$f = isCallable$j;
  var tryToString$2 = tryToString$3;

  var $TypeError$a = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$3 = function (argument) {
    if (isCallable$f(argument)) return argument;
    throw $TypeError$a(tryToString$2(argument) + ' is not a function');
  };

  var aCallable$2 = aCallable$3;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$2(func);
  };

  var call$8 = functionCall;
  var isCallable$e = isCallable$j;
  var isObject$9 = isObject$a;

  var $TypeError$9 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$9(val = call$8(fn, input))) return val;
    if (isCallable$e(fn = input.valueOf) && !isObject$9(val = call$8(fn, input))) return val;
    if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$9(val = call$8(fn, input))) return val;
    throw $TypeError$9("Can't convert object to primitive value");
  };

  var shared$4 = {exports: {}};

  var global$e = global$h;

  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  var defineProperty$6 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$6(global$e, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$e[key] = value;
    } return value;
  };

  var global$d = global$h;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$d[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.24.1',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var requireObjectCoercible$7 = requireObjectCoercible$9;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return $Object$2(requireObjectCoercible$7(argument));
  };

  var uncurryThis$k = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty$b = uncurryThis$k({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es-x/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty$b(toObject$4(it), key);
  };

  var uncurryThis$j = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$d = uncurryThis$j(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id + postfix, 36);
  };

  var global$c = global$h;
  var shared$3 = shared$4.exports;
  var hasOwn$9 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var WellKnownSymbolsStore = shared$3('wks');
  var Symbol$3 = global$c.Symbol;
  var symbolFor = Symbol$3 && Symbol$3['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$1;

  var wellKnownSymbol$d = function (name) {
    if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL$1 && hasOwn$9(Symbol$3, name)) {
        WellKnownSymbolsStore[name] = Symbol$3[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    } return WellKnownSymbolsStore[name];
  };

  var call$7 = functionCall;
  var isObject$8 = isObject$a;
  var isSymbol$2 = isSymbol$3;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$c = wellKnownSymbol$d;

  var $TypeError$8 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$8(input) || isSymbol$2(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$7(exoticToPrim, input, pref);
      if (!isObject$8(result) || isSymbol$2(result)) return result;
      throw $TypeError$8("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol$1 = isSymbol$3;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol$1(key) ? key : key + '';
  };

  var global$b = global$h;
  var isObject$7 = isObject$a;

  var document$1 = global$b.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$7(document$1) && isObject$7(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$9 = descriptors;
  var fails$h = fails$m;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$9 && !fails$h(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$8 = descriptors;
  var call$6 = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;
  var toIndexedObject$4 = toIndexedObject$5;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$8 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$4(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$8(O, P)) return createPropertyDescriptor$3(!call$6(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$7 = descriptors;
  var fails$g = fails$m;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$g(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$6 = isObject$a;

  var $String$2 = String;
  var $TypeError$7 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$a = function (argument) {
    if (isObject$6(argument)) return argument;
    throw $TypeError$7($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$6 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$9 = anObject$a;
  var toPropertyKey$1 = toPropertyKey$3;

  var $TypeError$6 = TypeError;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$9(O);
    P = toPropertyKey$1(P);
    anObject$9(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$9(O);
    P = toPropertyKey$1(P);
    anObject$9(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$5 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$5 = DESCRIPTORS$5 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$2 = {exports: {}};

  var DESCRIPTORS$4 = descriptors;
  var hasOwn$7 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$i = functionUncurryThis;
  var isCallable$d = isCallable$j;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$i(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$d(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var global$a = global$h;
  var isCallable$c = isCallable$j;
  var inspectSource$2 = inspectSource$3;

  var WeakMap$3 = global$a.WeakMap;

  var nativeWeakMap = isCallable$c(WeakMap$3) && /native code/.test(inspectSource$2(WeakMap$3));

  var shared$2 = shared$4.exports;
  var uid = uid$2;

  var keys$1 = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$9 = global$h;
  var uncurryThis$h = functionUncurryThis;
  var isObject$5 = isObject$a;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
  var hasOwn$6 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$9.TypeError;
  var WeakMap$2 = global$9.WeakMap;
  var set$1, get$1, has$1;

  var enforce = function (it) {
    return has$1(it) ? get$1(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$5(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap$2());
    var wmget = uncurryThis$h(store.get);
    var wmhas = uncurryThis$h(store.has);
    var wmset = uncurryThis$h(store.set);
    set$1 = function (it, metadata) {
      if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return wmget(store, it) || {};
    };
    has$1 = function (it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$3[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwn$6(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return hasOwn$6(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return hasOwn$6(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get$1,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var fails$f = fails$m;
  var isCallable$b = isCallable$j;
  var hasOwn$5 = hasOwnProperty_1;
  var DESCRIPTORS$3 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$3;
  var InternalStateModule$1 = internalState;

  var enforceInternalState = InternalStateModule$1.enforce;
  var getInternalState$2 = InternalStateModule$1.get;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;

  var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$f(function () {
    return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$3) defineProperty$5(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
      defineProperty$5(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$5(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$3) defineProperty$5(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$5(state, 'source')) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable$b(this) && getInternalState$2(this).source || inspectSource$1(this);
  }, 'toString');

  var isCallable$a = isCallable$j;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn = makeBuiltIn$2.exports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$4 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$a(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$2 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es-x/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$2 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$2 = Math.max;
  var min$5 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$2 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$2(integer + length, 0) : min$5(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$4 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$5 = function (argument) {
    return argument > 0 ? min$4(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$4 = toLength$5;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$4 = function (obj) {
    return toLength$4(obj.length);
  };

  var toIndexedObject$3 = toIndexedObject$5;
  var toAbsoluteIndex$1 = toAbsoluteIndex$2;
  var lengthOfArrayLike$3 = lengthOfArrayLike$4;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$3($this);
      var length = lengthOfArrayLike$3(O);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var uncurryThis$g = functionUncurryThis;
  var hasOwn$4 = hasOwnProperty_1;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$3 = uncurryThis$g([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && push$3(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$3(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$5;
  var uncurryThis$f = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$8 = anObject$a;

  var concat$1 = uncurryThis$f([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$f = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$8(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys$e = ownKeys$f;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$2 = function (target, source, exceptions) {
    var keys = ownKeys$e(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$e = fails$m;
  var isCallable$9 = isCallable$j;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data$1[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$9(detection) ? fails$e(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data$1 = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var global$8 = global$h;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
  var defineBuiltIn$3 = defineBuiltIn$4;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$8;
    } else if (STATIC) {
      target = global$8[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$8[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$3(sourceProperty, 'sham', true);
      }
      defineBuiltIn$3(target, key, sourceProperty, options);
    }
  };

  var wellKnownSymbol$b = wellKnownSymbol$d;

  var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$3] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$8 = isCallable$j;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$a = wellKnownSymbol$d;

  var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
  var $Object$1 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
  };

  var classof$4 = classof$5;

  var $String$1 = String;

  var toString$c = function (argument) {
    if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var $$a = _export;
  var DESCRIPTORS$2 = descriptors;
  var global$7 = global$h;
  var uncurryThis$e = functionUncurryThis;
  var hasOwn$2 = hasOwnProperty_1;
  var isCallable$7 = isCallable$j;
  var isPrototypeOf = objectIsPrototypeOf;
  var toString$b = toString$c;
  var defineProperty$4 = objectDefineProperty.f;
  var copyConstructorProperties = copyConstructorProperties$2;

  var NativeSymbol = global$7.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

  if (DESCRIPTORS$2 && isCallable$7(NativeSymbol) && (!('description' in SymbolPrototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$b(arguments[0]);
      var result = isPrototypeOf(SymbolPrototype, this)
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;

    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var symbolToString$1 = uncurryThis$e(SymbolPrototype.toString);
    var symbolValueOf$1 = uncurryThis$e(SymbolPrototype.valueOf);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$4 = uncurryThis$e(''.replace);
    var stringSlice$6 = uncurryThis$e(''.slice);

    defineProperty$4(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf$1(this);
        var string = symbolToString$1(symbol);
        if (hasOwn$2(EmptyStringDescriptionStore, symbol)) return '';
        var desc = NATIVE_SYMBOL ? stringSlice$6(string, 7, -1) : replace$4(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    $$a({ global: true, constructor: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement$1 = documentCreateElement$2;

  var classList = documentCreateElement$1('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es-x/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$1 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$7 = anObject$a;
  var toIndexedObject$1 = toIndexedObject$5;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es-x/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$7(O);
    var props = toIndexedObject$1(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$1 = getBuiltIn$5;

  var html$1 = getBuiltIn$1('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$6 = anObject$a;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement = documentCreateElement$2;
  var sharedKey$1 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$1('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es-x/no-object-create -- safe
  var objectCreate$1 = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$6(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$9 = wellKnownSymbol$d;
  var create$2 = objectCreate$1;
  var defineProperty$3 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$9('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$3(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$2(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var fails$d = fails$m;

  var correctPrototypeGetter = !fails$d(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$1 = hasOwnProperty_1;
  var isCallable$6 = isCallable$j;
  var toObject$3 = toObject$5;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es-x/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
    var object = toObject$3(O);
    if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$6(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var fails$c = fails$m;
  var isCallable$5 = isCallable$j;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$2 = defineBuiltIn$4;
  var wellKnownSymbol$8 = wellKnownSymbol$d;

  var ITERATOR$3 = wellKnownSymbol$8('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es-x/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$c(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$3].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$5(IteratorPrototype$2[ITERATOR$3])) {
    defineBuiltIn$2(IteratorPrototype$2, ITERATOR$3, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$2 = objectDefineProperty.f;
  var hasOwn = hasOwnProperty_1;
  var wellKnownSymbol$7 = wellKnownSymbol$d;

  var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');

  var setToStringTag$2 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG$1)) {
      defineProperty$2(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$1 = objectCreate$1;
  var createPropertyDescriptor$1 = createPropertyDescriptor$4;
  var setToStringTag$1 = setToStringTag$2;
  var Iterators$2 = iterators;

  var returnThis$1 = function () { return this; };

  var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var isCallable$4 = isCallable$j;

  var $String = String;
  var $TypeError$5 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$4(argument)) return argument;
    throw $TypeError$5("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThis$d = functionUncurryThis;
  var anObject$5 = anObject$a;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es-x/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$d(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$5(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$9 = _export;
  var call$5 = functionCall;
  var FunctionName = functionName;
  var isCallable$3 = isCallable$j;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$2;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
  var defineBuiltIn$1 = defineBuiltIn$4;
  var wellKnownSymbol$6 = wellKnownSymbol$d;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$2 = wellKnownSymbol$6('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$2]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf) {
            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$2])) {
            defineBuiltIn$1(CurrentIteratorPrototype, ITERATOR$2, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$5(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$9({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$2] !== defaultIterator) {
      defineBuiltIn$1(IterablePrototype, ITERATOR$2, defaultIterator, { name: DEFAULT });
    }
    Iterators$1[NAME] = defaultIterator;

    return methods;
  };

  var toIndexedObject = toIndexedObject$5;
  var addToUnscopables$1 = addToUnscopables$2;
  var Iterators = iterators;
  var InternalStateModule = internalState;
  var defineProperty$1 = objectDefineProperty.f;
  var defineIterator = defineIterator$1;
  var DESCRIPTORS = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState$1 = InternalStateModule.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values$4 = Iterators.Arguments = Iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS && values$4.name !== 'values') try {
    defineProperty$1(values$4, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var global$6 = global$h;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
  var wellKnownSymbol$5 = wellKnownSymbol$d;

  var ITERATOR$1 = wellKnownSymbol$5('iterator');
  var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$1] !== ArrayValues) try {
        createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$1, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$1] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var src = {};

  var cache$4 = {};

  Object.defineProperty(cache$4, "__esModule", { value: true });
  let cache$3 = new Map();
  function get(property, value) {
      return cache$3.get(property + value);
  }
  cache$4.get = get;
  function set(property, value, className) {
      if (process.env.NODE_ENV !== 'production') {
          const valueType = typeof value;
          if (valueType !== 'boolean' &&
              valueType !== 'number' &&
              valueType !== 'string') {
              const encodedValue = JSON.stringify(value);
              throw new TypeError(`📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`);
          }
      }
      cache$3.set(property + value, className);
  }
  cache$4.set = set;
  function entries() {
      return [...cache$3];
  }
  cache$4.entries = entries;
  function hydrate(newEntries) {
      cache$3 = new Map([...cache$3, ...newEntries]);
  }
  cache$4.hydrate = hydrate;
  function clear$2() {
      cache$3.clear();
  }
  cache$4.clear = clear$2;

  var styles$2 = {};

  var styleSheet$1 = {};

  Object.defineProperty(styleSheet$1, "__esModule", { value: true });
  const isBrowser$1 = typeof window !== 'undefined';
  function last(arr) {
      return arr[arr.length - 1];
  }
  function sheetForTag(tag) {
      if (tag.sheet) {
          return tag.sheet;
      }
      for (let i = 0; i < document.styleSheets.length; i += 1) {
          if (document.styleSheets[i].ownerNode === tag) {
              return document.styleSheets[i];
          }
      }
      return;
  }
  function makeStyleTag() {
      const tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-ui-box', '');
      tag.append(document.createTextNode(''));
      (document.head || document.querySelector('head')).append(tag);
      return tag;
  }
  class CustomStyleSheet {
      constructor(options = {}) {
          this.tags = [];
          this.ctr = 0;
          this.injected = false;
          this.isSpeedy = options.speedy === undefined
              ? process.env.NODE_ENV === 'production'
              : options.speedy;
          this.maxLength = options.maxLength || 65000;
      }
      getSheet() {
          return sheetForTag(last(this.tags));
      }
      inject() {
          if (this.injected) {
              throw new Error('StyleSheet has already been injected.');
          }
          if (isBrowser$1) {
              this.tags[0] = makeStyleTag();
          }
          else {
              this.sheet = {
                  cssRules: [],
                  insertRule: (rule) => {
                      this.sheet.cssRules.push({ cssText: rule });
                  }
              };
          }
          this.injected = true;
      }
      speedy(bool) {
          if (this.ctr !== 0) {
              throw new Error(`StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`);
          }
          this.isSpeedy = Boolean(bool);
      }
      _insert(sheet, rule) {
          sheet.insertRule(rule, sheet.cssRules.length);
      }
      insert(rule) {
          if (isBrowser$1) {
              const sheet = this.getSheet();
              if (this.isSpeedy && sheet && sheet.insertRule) {
                  this._insert(sheet, rule);
              }
              else {
                  last(this.tags).append(document.createTextNode(rule));
              }
          }
          else if (this.sheet) {
              this.sheet.insertRule(rule, this.sheet.cssRules.length);
          }
          this.ctr += 1;
          if (isBrowser$1 && this.ctr % this.maxLength === 0) {
              this.tags.push(makeStyleTag());
          }
          return this.ctr - 1;
      }
      flush() {
          if (isBrowser$1) {
              this.tags.forEach(tag => tag.parentNode.removeChild(tag));
              this.tags = [];
              this.sheet = null;
              this.ctr = 0;
          }
          else if (this.sheet) {
              this.sheet.cssRules = [];
          }
          this.injected = false;
      }
      rules() {
          if (!isBrowser$1) {
              return (this.sheet ? this.sheet.cssRules : []);
          }
          const arr = [];
          this.tags.forEach(tag => {
              const sheet = sheetForTag(tag);
              if (sheet) {
                  const rules = Array.from(sheet.cssRules);
                  arr.splice(arr.length, 0, ...[...rules]);
              }
          });
          return arr;
      }
  }
  styleSheet$1.default = CustomStyleSheet;

  var __importDefault$m = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(styles$2, "__esModule", { value: true });
  const style_sheet_1 = __importDefault$m(styleSheet$1);
  const styleSheet = new style_sheet_1.default({});
  styleSheet.inject();
  function add(styles) {
      styleSheet.insert(styles);
  }
  styles$2.add = add;
  function getAll() {
      return styleSheet
          .rules()
          .reduce((combinedRules, rule) => combinedRules + rule.cssText, '');
  }
  styles$2.getAll = getAll;
  function clear$1() {
      styleSheet.flush();
      styleSheet.inject();
  }
  styles$2.clear = clear$1;

  var box = {};

  var propTypes$2 = {exports: {}};

  var reactIs$2 = {exports: {}};

  var reactIs_production_min$1 = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min$1;

  function requireReactIs_production_min$1 () {
  	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
  	hasRequiredReactIs_production_min$1 = 1;
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
  	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
  	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
  	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
  	return reactIs_production_min$1;
  }

  var reactIs_development$1 = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_development$1;

  function requireReactIs_development$1 () {
  	if (hasRequiredReactIs_development$1) return reactIs_development$1;
  	hasRequiredReactIs_development$1 = 1;



  	if (process.env.NODE_ENV !== "production") {
  	  (function() {

  	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  	// nor polyfill, then a plain number is used for performance.
  	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  	// (unstable) APIs that have been removed. Can we remove the symbols?

  	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  	function isValidElementType(type) {
  	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  	}

  	function typeOf(object) {
  	  if (typeof object === 'object' && object !== null) {
  	    var $$typeof = object.$$typeof;

  	    switch ($$typeof) {
  	      case REACT_ELEMENT_TYPE:
  	        var type = object.type;

  	        switch (type) {
  	          case REACT_ASYNC_MODE_TYPE:
  	          case REACT_CONCURRENT_MODE_TYPE:
  	          case REACT_FRAGMENT_TYPE:
  	          case REACT_PROFILER_TYPE:
  	          case REACT_STRICT_MODE_TYPE:
  	          case REACT_SUSPENSE_TYPE:
  	            return type;

  	          default:
  	            var $$typeofType = type && type.$$typeof;

  	            switch ($$typeofType) {
  	              case REACT_CONTEXT_TYPE:
  	              case REACT_FORWARD_REF_TYPE:
  	              case REACT_LAZY_TYPE:
  	              case REACT_MEMO_TYPE:
  	              case REACT_PROVIDER_TYPE:
  	                return $$typeofType;

  	              default:
  	                return $$typeof;
  	            }

  	        }

  	      case REACT_PORTAL_TYPE:
  	        return $$typeof;
  	    }
  	  }

  	  return undefined;
  	} // AsyncMode is deprecated along with isAsyncMode

  	var AsyncMode = REACT_ASYNC_MODE_TYPE;
  	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  	var ContextConsumer = REACT_CONTEXT_TYPE;
  	var ContextProvider = REACT_PROVIDER_TYPE;
  	var Element = REACT_ELEMENT_TYPE;
  	var ForwardRef = REACT_FORWARD_REF_TYPE;
  	var Fragment = REACT_FRAGMENT_TYPE;
  	var Lazy = REACT_LAZY_TYPE;
  	var Memo = REACT_MEMO_TYPE;
  	var Portal = REACT_PORTAL_TYPE;
  	var Profiler = REACT_PROFILER_TYPE;
  	var StrictMode = REACT_STRICT_MODE_TYPE;
  	var Suspense = REACT_SUSPENSE_TYPE;
  	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  	function isAsyncMode(object) {
  	  {
  	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
  	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

  	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
  	    }
  	  }

  	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  	}
  	function isConcurrentMode(object) {
  	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  	}
  	function isContextConsumer(object) {
  	  return typeOf(object) === REACT_CONTEXT_TYPE;
  	}
  	function isContextProvider(object) {
  	  return typeOf(object) === REACT_PROVIDER_TYPE;
  	}
  	function isElement(object) {
  	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	}
  	function isForwardRef(object) {
  	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
  	}
  	function isFragment(object) {
  	  return typeOf(object) === REACT_FRAGMENT_TYPE;
  	}
  	function isLazy(object) {
  	  return typeOf(object) === REACT_LAZY_TYPE;
  	}
  	function isMemo(object) {
  	  return typeOf(object) === REACT_MEMO_TYPE;
  	}
  	function isPortal(object) {
  	  return typeOf(object) === REACT_PORTAL_TYPE;
  	}
  	function isProfiler(object) {
  	  return typeOf(object) === REACT_PROFILER_TYPE;
  	}
  	function isStrictMode(object) {
  	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
  	}
  	function isSuspense(object) {
  	  return typeOf(object) === REACT_SUSPENSE_TYPE;
  	}

  	reactIs_development$1.AsyncMode = AsyncMode;
  	reactIs_development$1.ConcurrentMode = ConcurrentMode;
  	reactIs_development$1.ContextConsumer = ContextConsumer;
  	reactIs_development$1.ContextProvider = ContextProvider;
  	reactIs_development$1.Element = Element;
  	reactIs_development$1.ForwardRef = ForwardRef;
  	reactIs_development$1.Fragment = Fragment;
  	reactIs_development$1.Lazy = Lazy;
  	reactIs_development$1.Memo = Memo;
  	reactIs_development$1.Portal = Portal;
  	reactIs_development$1.Profiler = Profiler;
  	reactIs_development$1.StrictMode = StrictMode;
  	reactIs_development$1.Suspense = Suspense;
  	reactIs_development$1.isAsyncMode = isAsyncMode;
  	reactIs_development$1.isConcurrentMode = isConcurrentMode;
  	reactIs_development$1.isContextConsumer = isContextConsumer;
  	reactIs_development$1.isContextProvider = isContextProvider;
  	reactIs_development$1.isElement = isElement;
  	reactIs_development$1.isForwardRef = isForwardRef;
  	reactIs_development$1.isFragment = isFragment;
  	reactIs_development$1.isLazy = isLazy;
  	reactIs_development$1.isMemo = isMemo;
  	reactIs_development$1.isPortal = isPortal;
  	reactIs_development$1.isProfiler = isProfiler;
  	reactIs_development$1.isStrictMode = isStrictMode;
  	reactIs_development$1.isSuspense = isSuspense;
  	reactIs_development$1.isValidElementType = isValidElementType;
  	reactIs_development$1.typeOf = typeOf;
  	  })();
  	}
  	return reactIs_development$1;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs$2.exports;
  	hasRequiredReactIs = 1;
  	(function (module) {

  		if (process.env.NODE_ENV === 'production') {
  		  module.exports = requireReactIs_production_min$1();
  		} else {
  		  module.exports = requireReactIs_development$1();
  		}
  } (reactIs$2));
  	return reactIs$2.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;
  	/* eslint-disable no-unused-vars */
  	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  	var hasOwnProperty = Object.prototype.hasOwnProperty;
  	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  	function toObject(val) {
  		if (val === null || val === undefined) {
  			throw new TypeError('Object.assign cannot be called with null or undefined');
  		}

  		return Object(val);
  	}

  	function shouldUseNative() {
  		try {
  			if (!Object.assign) {
  				return false;
  			}

  			// Detect buggy property enumeration order in older V8 versions.

  			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  			test1[5] = 'de';
  			if (Object.getOwnPropertyNames(test1)[0] === '5') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test2 = {};
  			for (var i = 0; i < 10; i++) {
  				test2['_' + String.fromCharCode(i)] = i;
  			}
  			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  				return test2[n];
  			});
  			if (order2.join('') !== '0123456789') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test3 = {};
  			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  				test3[letter] = letter;
  			});
  			if (Object.keys(Object.assign({}, test3)).join('') !==
  					'abcdefghijklmnopqrst') {
  				return false;
  			}

  			return true;
  		} catch (err) {
  			// We don't expect any of the above to throw, but better to be safe.
  			return false;
  		}
  	}

  	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  		var from;
  		var to = toObject(target);
  		var symbols;

  		for (var s = 1; s < arguments.length; s++) {
  			from = Object(arguments[s]);

  			for (var key in from) {
  				if (hasOwnProperty.call(from, key)) {
  					to[key] = from[key];
  				}
  			}

  			if (getOwnPropertySymbols) {
  				symbols = getOwnPropertySymbols(from);
  				for (var i = 0; i < symbols.length; i++) {
  					if (propIsEnumerable.call(from, symbols[i])) {
  						to[symbols[i]] = from[symbols[i]];
  					}
  				}
  			}
  		}

  		return to;
  	};
  	return objectAssign;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;

  function requireReactPropTypesSecret () {
  	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  	hasRequiredReactPropTypesSecret = 1;

  	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  	ReactPropTypesSecret_1 = ReactPropTypesSecret;
  	return ReactPropTypesSecret_1;
  }

  var has;
  var hasRequiredHas;

  function requireHas () {
  	if (hasRequiredHas) return has;
  	hasRequiredHas = 1;
  	has = Function.call.bind(Object.prototype.hasOwnProperty);
  	return has;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;

  function requireCheckPropTypes () {
  	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  	hasRequiredCheckPropTypes = 1;

  	var printWarning = function() {};

  	if (process.env.NODE_ENV !== 'production') {
  	  var ReactPropTypesSecret = requireReactPropTypesSecret();
  	  var loggedTypeFailures = {};
  	  var has = requireHas();

  	  printWarning = function(text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) { /**/ }
  	  };
  	}

  	/**
  	 * Assert that the values match with the type specs.
  	 * Error messages are memorized and will only be shown once.
  	 *
  	 * @param {object} typeSpecs Map of name to a ReactPropType
  	 * @param {object} values Runtime values that need to be type-checked
  	 * @param {string} location e.g. "prop", "context", "child context"
  	 * @param {string} componentName Name of the component for error messages.
  	 * @param {?Function} getStack Returns the component stack.
  	 * @private
  	 */
  	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  	  if (process.env.NODE_ENV !== 'production') {
  	    for (var typeSpecName in typeSpecs) {
  	      if (has(typeSpecs, typeSpecName)) {
  	        var error;
  	        // Prop type validation may throw. In case they do, we don't want to
  	        // fail the render phase where it didn't fail before. So we log it.
  	        // After these have been cleaned up, we'll let them throw.
  	        try {
  	          // This is intentionally an invariant that gets caught. It's the same
  	          // behavior as without this statement except with a better message.
  	          if (typeof typeSpecs[typeSpecName] !== 'function') {
  	            var err = Error(
  	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
  	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
  	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
  	            );
  	            err.name = 'Invariant Violation';
  	            throw err;
  	          }
  	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
  	        } catch (ex) {
  	          error = ex;
  	        }
  	        if (error && !(error instanceof Error)) {
  	          printWarning(
  	            (componentName || 'React class') + ': type specification of ' +
  	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
  	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
  	            'You may have forgotten to pass an argument to the type checker ' +
  	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
  	            'shape all require an argument).'
  	          );
  	        }
  	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
  	          // Only monitor this failure once because there tends to be a lot of the
  	          // same error.
  	          loggedTypeFailures[error.message] = true;

  	          var stack = getStack ? getStack() : '';

  	          printWarning(
  	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
  	          );
  	        }
  	      }
  	    }
  	  }
  	}

  	/**
  	 * Resets warning cache when testing.
  	 *
  	 * @private
  	 */
  	checkPropTypes.resetWarningCache = function() {
  	  if (process.env.NODE_ENV !== 'production') {
  	    loggedTypeFailures = {};
  	  }
  	};

  	checkPropTypes_1 = checkPropTypes;
  	return checkPropTypes_1;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;

  function requireFactoryWithTypeCheckers () {
  	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  	hasRequiredFactoryWithTypeCheckers = 1;

  	var ReactIs = requireReactIs();
  	var assign = requireObjectAssign();

  	var ReactPropTypesSecret = requireReactPropTypesSecret();
  	var has = requireHas();
  	var checkPropTypes = requireCheckPropTypes();

  	var printWarning = function() {};

  	if (process.env.NODE_ENV !== 'production') {
  	  printWarning = function(text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) {}
  	  };
  	}

  	function emptyFunctionThatReturnsNull() {
  	  return null;
  	}

  	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  	  /* global Symbol */
  	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  	  /**
  	   * Returns the iterator method function contained on the iterable object.
  	   *
  	   * Be sure to invoke the function with the iterable as context:
  	   *
  	   *     var iteratorFn = getIteratorFn(myIterable);
  	   *     if (iteratorFn) {
  	   *       var iterator = iteratorFn.call(myIterable);
  	   *       ...
  	   *     }
  	   *
  	   * @param {?object} maybeIterable
  	   * @return {?function}
  	   */
  	  function getIteratorFn(maybeIterable) {
  	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  	    if (typeof iteratorFn === 'function') {
  	      return iteratorFn;
  	    }
  	  }

  	  /**
  	   * Collection of methods that allow declaration and validation of props that are
  	   * supplied to React components. Example usage:
  	   *
  	   *   var Props = require('ReactPropTypes');
  	   *   var MyArticle = React.createClass({
  	   *     propTypes: {
  	   *       // An optional string prop named "description".
  	   *       description: Props.string,
  	   *
  	   *       // A required enum prop named "category".
  	   *       category: Props.oneOf(['News','Photos']).isRequired,
  	   *
  	   *       // A prop named "dialog" that requires an instance of Dialog.
  	   *       dialog: Props.instanceOf(Dialog).isRequired
  	   *     },
  	   *     render: function() { ... }
  	   *   });
  	   *
  	   * A more formal specification of how these methods are used:
  	   *
  	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
  	   *   decl := ReactPropTypes.{type}(.isRequired)?
  	   *
  	   * Each and every declaration produces a function with the same signature. This
  	   * allows the creation of custom validation functions. For example:
  	   *
  	   *  var MyLink = React.createClass({
  	   *    propTypes: {
  	   *      // An optional string or URI prop named "href".
  	   *      href: function(props, propName, componentName) {
  	   *        var propValue = props[propName];
  	   *        if (propValue != null && typeof propValue !== 'string' &&
  	   *            !(propValue instanceof URI)) {
  	   *          return new Error(
  	   *            'Expected a string or an URI for ' + propName + ' in ' +
  	   *            componentName
  	   *          );
  	   *        }
  	   *      }
  	   *    },
  	   *    render: function() {...}
  	   *  });
  	   *
  	   * @internal
  	   */

  	  var ANONYMOUS = '<<anonymous>>';

  	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  	  var ReactPropTypes = {
  	    array: createPrimitiveTypeChecker('array'),
  	    bigint: createPrimitiveTypeChecker('bigint'),
  	    bool: createPrimitiveTypeChecker('boolean'),
  	    func: createPrimitiveTypeChecker('function'),
  	    number: createPrimitiveTypeChecker('number'),
  	    object: createPrimitiveTypeChecker('object'),
  	    string: createPrimitiveTypeChecker('string'),
  	    symbol: createPrimitiveTypeChecker('symbol'),

  	    any: createAnyTypeChecker(),
  	    arrayOf: createArrayOfTypeChecker,
  	    element: createElementTypeChecker(),
  	    elementType: createElementTypeTypeChecker(),
  	    instanceOf: createInstanceTypeChecker,
  	    node: createNodeChecker(),
  	    objectOf: createObjectOfTypeChecker,
  	    oneOf: createEnumTypeChecker,
  	    oneOfType: createUnionTypeChecker,
  	    shape: createShapeTypeChecker,
  	    exact: createStrictShapeTypeChecker,
  	  };

  	  /**
  	   * inlined Object.is polyfill to avoid requiring consumers ship their own
  	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  	   */
  	  /*eslint-disable no-self-compare*/
  	  function is(x, y) {
  	    // SameValue algorithm
  	    if (x === y) {
  	      // Steps 1-5, 7-10
  	      // Steps 6.b-6.e: +0 != -0
  	      return x !== 0 || 1 / x === 1 / y;
  	    } else {
  	      // Step 6.a: NaN == NaN
  	      return x !== x && y !== y;
  	    }
  	  }
  	  /*eslint-enable no-self-compare*/

  	  /**
  	   * We use an Error-like object for backward compatibility as people may call
  	   * PropTypes directly and inspect their output. However, we don't use real
  	   * Errors anymore. We don't inspect their stack anyway, and creating them
  	   * is prohibitively expensive if they are created too often, such as what
  	   * happens in oneOfType() for any type before the one that matched.
  	   */
  	  function PropTypeError(message, data) {
  	    this.message = message;
  	    this.data = data && typeof data === 'object' ? data: {};
  	    this.stack = '';
  	  }
  	  // Make `instanceof Error` still work for returned errors.
  	  PropTypeError.prototype = Error.prototype;

  	  function createChainableTypeChecker(validate) {
  	    if (process.env.NODE_ENV !== 'production') {
  	      var manualPropTypeCallCache = {};
  	      var manualPropTypeWarningCount = 0;
  	    }
  	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
  	      componentName = componentName || ANONYMOUS;
  	      propFullName = propFullName || propName;

  	      if (secret !== ReactPropTypesSecret) {
  	        if (throwOnDirectAccess) {
  	          // New behavior only for users of `prop-types` package
  	          var err = new Error(
  	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
  	            'Use `PropTypes.checkPropTypes()` to call them. ' +
  	            'Read more at http://fb.me/use-check-prop-types'
  	          );
  	          err.name = 'Invariant Violation';
  	          throw err;
  	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
  	          // Old behavior for people using React.PropTypes
  	          var cacheKey = componentName + ':' + propName;
  	          if (
  	            !manualPropTypeCallCache[cacheKey] &&
  	            // Avoid spamming the console because they are often not actionable except for lib authors
  	            manualPropTypeWarningCount < 3
  	          ) {
  	            printWarning(
  	              'You are manually calling a React.PropTypes validation ' +
  	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
  	              'and will throw in the standalone `prop-types` package. ' +
  	              'You may be seeing this warning due to a third-party PropTypes ' +
  	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
  	            );
  	            manualPropTypeCallCache[cacheKey] = true;
  	            manualPropTypeWarningCount++;
  	          }
  	        }
  	      }
  	      if (props[propName] == null) {
  	        if (isRequired) {
  	          if (props[propName] === null) {
  	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
  	          }
  	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
  	        }
  	        return null;
  	      } else {
  	        return validate(props, propName, componentName, location, propFullName);
  	      }
  	    }

  	    var chainedCheckType = checkType.bind(null, false);
  	    chainedCheckType.isRequired = checkType.bind(null, true);

  	    return chainedCheckType;
  	  }

  	  function createPrimitiveTypeChecker(expectedType) {
  	    function validate(props, propName, componentName, location, propFullName, secret) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== expectedType) {
  	        // `propValue` being instance of, say, date/regexp, pass the 'object'
  	        // check, but we can offer a more precise error message here rather than
  	        // 'of type `object`'.
  	        var preciseType = getPreciseType(propValue);

  	        return new PropTypeError(
  	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
  	          {expectedType: expectedType}
  	        );
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createAnyTypeChecker() {
  	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  	  }

  	  function createArrayOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
  	      }
  	      var propValue = props[propName];
  	      if (!Array.isArray(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
  	      }
  	      for (var i = 0; i < propValue.length; i++) {
  	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
  	        if (error instanceof Error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createElementTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!isValidElement(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createElementTypeTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!ReactIs.isValidElementType(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createInstanceTypeChecker(expectedClass) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!(props[propName] instanceof expectedClass)) {
  	        var expectedClassName = expectedClass.name || ANONYMOUS;
  	        var actualClassName = getClassName(props[propName]);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createEnumTypeChecker(expectedValues) {
  	    if (!Array.isArray(expectedValues)) {
  	      if (process.env.NODE_ENV !== 'production') {
  	        if (arguments.length > 1) {
  	          printWarning(
  	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
  	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
  	          );
  	        } else {
  	          printWarning('Invalid argument supplied to oneOf, expected an array.');
  	        }
  	      }
  	      return emptyFunctionThatReturnsNull;
  	    }

  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      for (var i = 0; i < expectedValues.length; i++) {
  	        if (is(propValue, expectedValues[i])) {
  	          return null;
  	        }
  	      }

  	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
  	        var type = getPreciseType(value);
  	        if (type === 'symbol') {
  	          return String(value);
  	        }
  	        return value;
  	      });
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createObjectOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
  	      }
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
  	      }
  	      for (var key in propValue) {
  	        if (has(propValue, key)) {
  	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	          if (error instanceof Error) {
  	            return error;
  	          }
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createUnionTypeChecker(arrayOfTypeCheckers) {
  	    if (!Array.isArray(arrayOfTypeCheckers)) {
  	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
  	      return emptyFunctionThatReturnsNull;
  	    }

  	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	      var checker = arrayOfTypeCheckers[i];
  	      if (typeof checker !== 'function') {
  	        printWarning(
  	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
  	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
  	        );
  	        return emptyFunctionThatReturnsNull;
  	      }
  	    }

  	    function validate(props, propName, componentName, location, propFullName) {
  	      var expectedTypes = [];
  	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	        var checker = arrayOfTypeCheckers[i];
  	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
  	        if (checkerResult == null) {
  	          return null;
  	        }
  	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
  	          expectedTypes.push(checkerResult.data.expectedType);
  	        }
  	      }
  	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createNodeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!isNode(props[propName])) {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function invalidValidatorError(componentName, location, propFullName, key, type) {
  	    return new PropTypeError(
  	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
  	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
  	    );
  	  }

  	  function createShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      for (var key in shapeTypes) {
  	        var checker = shapeTypes[key];
  	        if (typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }

  	  function createStrictShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      // We need to check all keys in case some are required but missing from props.
  	      var allKeys = assign({}, props[propName], shapeTypes);
  	      for (var key in allKeys) {
  	        var checker = shapeTypes[key];
  	        if (has(shapeTypes, key) && typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        if (!checker) {
  	          return new PropTypeError(
  	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
  	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
  	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
  	          );
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }

  	    return createChainableTypeChecker(validate);
  	  }

  	  function isNode(propValue) {
  	    switch (typeof propValue) {
  	      case 'number':
  	      case 'string':
  	      case 'undefined':
  	        return true;
  	      case 'boolean':
  	        return !propValue;
  	      case 'object':
  	        if (Array.isArray(propValue)) {
  	          return propValue.every(isNode);
  	        }
  	        if (propValue === null || isValidElement(propValue)) {
  	          return true;
  	        }

  	        var iteratorFn = getIteratorFn(propValue);
  	        if (iteratorFn) {
  	          var iterator = iteratorFn.call(propValue);
  	          var step;
  	          if (iteratorFn !== propValue.entries) {
  	            while (!(step = iterator.next()).done) {
  	              if (!isNode(step.value)) {
  	                return false;
  	              }
  	            }
  	          } else {
  	            // Iterator will provide entry [k,v] tuples rather than values.
  	            while (!(step = iterator.next()).done) {
  	              var entry = step.value;
  	              if (entry) {
  	                if (!isNode(entry[1])) {
  	                  return false;
  	                }
  	              }
  	            }
  	          }
  	        } else {
  	          return false;
  	        }

  	        return true;
  	      default:
  	        return false;
  	    }
  	  }

  	  function isSymbol(propType, propValue) {
  	    // Native Symbol.
  	    if (propType === 'symbol') {
  	      return true;
  	    }

  	    // falsy value can't be a Symbol
  	    if (!propValue) {
  	      return false;
  	    }

  	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  	    if (propValue['@@toStringTag'] === 'Symbol') {
  	      return true;
  	    }

  	    // Fallback for non-spec compliant Symbols which are polyfilled.
  	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
  	      return true;
  	    }

  	    return false;
  	  }

  	  // Equivalent of `typeof` but with special handling for array and regexp.
  	  function getPropType(propValue) {
  	    var propType = typeof propValue;
  	    if (Array.isArray(propValue)) {
  	      return 'array';
  	    }
  	    if (propValue instanceof RegExp) {
  	      // Old webkits (at least until Android 4.0) return 'function' rather than
  	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
  	      // passes PropTypes.object.
  	      return 'object';
  	    }
  	    if (isSymbol(propType, propValue)) {
  	      return 'symbol';
  	    }
  	    return propType;
  	  }

  	  // This handles more types than `getPropType`. Only used for error messages.
  	  // See `createPrimitiveTypeChecker`.
  	  function getPreciseType(propValue) {
  	    if (typeof propValue === 'undefined' || propValue === null) {
  	      return '' + propValue;
  	    }
  	    var propType = getPropType(propValue);
  	    if (propType === 'object') {
  	      if (propValue instanceof Date) {
  	        return 'date';
  	      } else if (propValue instanceof RegExp) {
  	        return 'regexp';
  	      }
  	    }
  	    return propType;
  	  }

  	  // Returns a string that is postfixed to a warning about an invalid type.
  	  // For example, "undefined" or "of type array"
  	  function getPostfixForTypeWarning(value) {
  	    var type = getPreciseType(value);
  	    switch (type) {
  	      case 'array':
  	      case 'object':
  	        return 'an ' + type;
  	      case 'boolean':
  	      case 'date':
  	      case 'regexp':
  	        return 'a ' + type;
  	      default:
  	        return type;
  	    }
  	  }

  	  // Returns class name of the object, if any.
  	  function getClassName(propValue) {
  	    if (!propValue.constructor || !propValue.constructor.name) {
  	      return ANONYMOUS;
  	    }
  	    return propValue.constructor.name;
  	  }

  	  ReactPropTypes.checkPropTypes = checkPropTypes;
  	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  	  ReactPropTypes.PropTypes = ReactPropTypes;

  	  return ReactPropTypes;
  	};
  	return factoryWithTypeCheckers;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;

  function requireFactoryWithThrowingShims () {
  	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  	hasRequiredFactoryWithThrowingShims = 1;

  	var ReactPropTypesSecret = requireReactPropTypesSecret();

  	function emptyFunction() {}
  	function emptyFunctionWithReset() {}
  	emptyFunctionWithReset.resetWarningCache = emptyFunction;

  	factoryWithThrowingShims = function() {
  	  function shim(props, propName, componentName, location, propFullName, secret) {
  	    if (secret === ReactPropTypesSecret) {
  	      // It is still safe when called from React.
  	      return;
  	    }
  	    var err = new Error(
  	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
  	      'Use PropTypes.checkPropTypes() to call them. ' +
  	      'Read more at http://fb.me/use-check-prop-types'
  	    );
  	    err.name = 'Invariant Violation';
  	    throw err;
  	  }	  shim.isRequired = shim;
  	  function getShim() {
  	    return shim;
  	  }	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  	  var ReactPropTypes = {
  	    array: shim,
  	    bigint: shim,
  	    bool: shim,
  	    func: shim,
  	    number: shim,
  	    object: shim,
  	    string: shim,
  	    symbol: shim,

  	    any: shim,
  	    arrayOf: getShim,
  	    element: shim,
  	    elementType: shim,
  	    instanceOf: getShim,
  	    node: shim,
  	    objectOf: getShim,
  	    oneOf: getShim,
  	    oneOfType: getShim,
  	    shape: getShim,
  	    exact: getShim,

  	    checkPropTypes: emptyFunctionWithReset,
  	    resetWarningCache: emptyFunction
  	  };

  	  ReactPropTypes.PropTypes = ReactPropTypes;

  	  return ReactPropTypes;
  	};
  	return factoryWithThrowingShims;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = requireReactIs();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes$2.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes$2.exports = requireFactoryWithThrowingShims()();
  }

  var enhancers = {};

  var background$1 = {};

  var getCss$1 = {};

  var prefixer$1 = {};

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var newStyle = {};
      var requiredPrefixes = prefixProperties[property];
      var capitalizedProperty = capitalizeString(property);
      var keys = Object.keys(style);
      for (var i = 0; i < keys.length; i++) {
        var styleProperty = keys[i];
        if (styleProperty === property) {
          for (var j = 0; j < requiredPrefixes.length; j++) {
            newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
          }
        }
        newStyle[styleProperty] = style[styleProperty];
      }
      return newStyle;
    }
    return style;
  }

  function prefixValue$1(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }

  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }

  function isObject$4(value) {
    return value instanceof Object && !Array.isArray(value);
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;

    return function prefix(style) {
      for (var property in style) {
        var value = style[property];

        // handle nested objects
        if (isObject$4(value)) {
          style[property] = prefix(value);
          // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = prefixValue$1(plugins, property, value[i], style, prefixMap);
            addNewValuesOnly(combinedValue, processedValue || value[i]);
          }

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = prefixValue$1(plugins, property, value, style, prefixMap);

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (_processedValue) {
            style[property] = _processedValue;
          }

          style = prefixProperty(prefixMap, property, style);
        }
      }

      return style;
    };
  }

  var w = ["Webkit"];
  var m = ["Moz"];
  var ms = ["ms"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];

  var data = {
    plugins: [],
    prefixMap: { "appearance": wm, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "userSelect": wmms, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "clipPath": w, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "filter": w, "hyphens": wms, "flowInto": wms, "flowFrom": wms, "breakBefore": wms, "breakAfter": wms, "breakInside": wms, "regionFragment": wms, "writingMode": wms, "textOrientation": w, "tabSize": m, "fontFeatureSettings": w, "columnCount": w, "columnFill": w, "columnGap": w, "columnRule": w, "columnRuleColor": w, "columnRuleStyle": w, "columnRuleWidth": w, "columns": w, "columnSpan": w, "columnWidth": w, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "textSizeAdjust": wms }
  };

  // https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
  function backgroundClip$1(property, value) {
    if (typeof value === 'string' && value === 'text') {
      return ['-webkit-text', 'text'];
    }
  }

  var prefixes$5 = ['-webkit-', '-moz-', ''];

  var values$3 = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor$1(property, value) {
    if (property === 'cursor' && values$3.hasOwnProperty(value)) {
      return prefixes$5.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  var isPrefixedValue$1 = {exports: {}};

  (function (module, exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports.default = isPrefixedValue;
  	var regex = /-webkit-|-moz-|-ms-/;

  	function isPrefixedValue(value) {
  	  return typeof value === 'string' && regex.test(value);
  	}
  	module.exports = exports['default'];
  } (isPrefixedValue$1, isPrefixedValue$1.exports));

  var isPrefixedValue = /*@__PURE__*/getDefaultExportFromCjs(isPrefixedValue$1.exports);

  // http://caniuse.com/#search=cross-fade
  var prefixes$4 = ['-webkit-', ''];

  function crossFade(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('cross-fade(') > -1) {
      return prefixes$4.map(function (prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes$3 = ['-webkit-', ''];

  function filter(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('filter(') > -1) {
      return prefixes$3.map(function (prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }

  var values$2 = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex$2(property, value) {
    if (property === 'display' && values$2.hasOwnProperty(value)) {
      return values$2[value];
    }
  }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps$1 = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines',
    flexGrow: 'WebkitBoxFlex'
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps$1.hasOwnProperty(property)) {
      style[alternativeProps$1[property]] = alternativeValues[value] || value;
    }
  }

  var prefixes$2 = ['-webkit-', '-moz-', ''];
  var values$1 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

  function gradient(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && values$1.test(value)) {
      return prefixes$2.map(function (prefix) {
        return value.replace(values$1, function (grad) {
          return prefix + grad;
        });
      });
    }
  }

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  function isSimplePositionValue(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  function isComplexSpanValue(value) {
    return typeof value === 'string' && value.includes('/');
  }

  var alignmentValues = ['center', 'end', 'start', 'stretch'];

  var displayValues = {
    'inline-grid': ['-ms-inline-grid', 'inline-grid'],
    grid: ['-ms-grid', 'grid']
  };

  var propertyConverters = {
    alignSelf: function alignSelf(value, style) {
      if (alignmentValues.indexOf(value) > -1) {
        style.msGridRowAlign = value;
      }
    },

    gridColumn: function gridColumn(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridColumn = value;
      } else if (isComplexSpanValue(value)) {
        var _value$split = value.split('/'),
            _value$split2 = _slicedToArray(_value$split, 2),
            start = _value$split2[0],
            end = _value$split2[1];

        propertyConverters.gridColumnStart(+start, style);

        var _end$split = end.split(/ ?span /),
            _end$split2 = _slicedToArray(_end$split, 2),
            maybeSpan = _end$split2[0],
            maybeNumber = _end$split2[1];

        if (maybeSpan === '') {
          propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
        } else {
          propertyConverters.gridColumnEnd(+end, style);
        }
      } else {
        propertyConverters.gridColumnStart(value, style);
      }
    },

    gridColumnEnd: function gridColumnEnd(value, style) {
      var msGridColumn = style.msGridColumn;

      if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
        style.msGridColumnSpan = value - msGridColumn;
      }
    },

    gridColumnStart: function gridColumnStart(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridColumn = value;
      }
    },

    gridRow: function gridRow(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridRow = value;
      } else if (isComplexSpanValue(value)) {
        var _value$split3 = value.split('/'),
            _value$split4 = _slicedToArray(_value$split3, 2),
            start = _value$split4[0],
            end = _value$split4[1];

        propertyConverters.gridRowStart(+start, style);

        var _end$split3 = end.split(/ ?span /),
            _end$split4 = _slicedToArray(_end$split3, 2),
            maybeSpan = _end$split4[0],
            maybeNumber = _end$split4[1];

        if (maybeSpan === '') {
          propertyConverters.gridRowEnd(+start + +maybeNumber, style);
        } else {
          propertyConverters.gridRowEnd(+end, style);
        }
      } else {
        propertyConverters.gridRowStart(value, style);
      }
    },

    gridRowEnd: function gridRowEnd(value, style) {
      var msGridRow = style.msGridRow;

      if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
        style.msGridRowSpan = value - msGridRow;
      }
    },

    gridRowStart: function gridRowStart(value, style) {
      if (isSimplePositionValue(value)) {
        style.msGridRow = value;
      }
    },

    gridTemplateColumns: function gridTemplateColumns(value, style) {
      style.msGridColumns = value;
    },

    gridTemplateRows: function gridTemplateRows(value, style) {
      style.msGridRows = value;
    },

    justifySelf: function justifySelf(value, style) {
      if (alignmentValues.indexOf(value) > -1) {
        style.msGridColumnAlign = value;
      }
    }
  };

  function grid$2(property, value, style) {
    if (property === 'display' && value in displayValues) {
      return displayValues[value];
    }

    if (property in propertyConverters) {
      var propertyConverter = propertyConverters[property];
      propertyConverter(value, style);
    }
  }

  // http://caniuse.com/#feat=css-image-set
  var prefixes$1 = ['-webkit-', ''];

  function imageSet(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('image-set(') > -1) {
      return prefixes$1.map(function (prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }

  var alternativeProps = {
    marginBlockStart: ['WebkitMarginBefore'],
    marginBlockEnd: ['WebkitMarginAfter'],
    marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
    marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
    paddingBlockStart: ['WebkitPaddingBefore'],
    paddingBlockEnd: ['WebkitPaddingAfter'],
    paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
    paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
    borderBlockStart: ['WebkitBorderBefore'],
    borderBlockStartColor: ['WebkitBorderBeforeColor'],
    borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
    borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
    borderBlockEnd: ['WebkitBorderAfter'],
    borderBlockEndColor: ['WebkitBorderAfterColor'],
    borderBlockEndStyle: ['WebkitBorderAfterStyle'],
    borderBlockEndWidth: ['WebkitBorderAfterWidth'],
    borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
    borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
    borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
    borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
    borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
    borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
    borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
    borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
  };

  function logical(property, value, style) {
    if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
      var alternativePropList = alternativeProps[property];
      for (var i = 0, len = alternativePropList.length; i < len; ++i) {
        style[alternativePropList[i]] = value;
      }
    }
  }

  function position$2(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }

  var prefixes = ['-webkit-', '-moz-', ''];

  var properties$1 = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties$1.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }

  var hyphenateProperty$1 = {exports: {}};

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache$2 = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache$2.hasOwnProperty(name)) {
      return cache$2[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache$2[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  var hyphenateStyleName$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': hyphenateStyleName
  });

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(hyphenateStyleName$1);

  (function (module, exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports.default = hyphenateProperty;

  	var _hyphenateStyleName = require$$0$3;

  	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  	function hyphenateProperty(property) {
  	  return (0, _hyphenateStyleName2.default)(property);
  	}
  	module.exports = exports['default'];
  } (hyphenateProperty$1, hyphenateProperty$1.exports));

  var hyphenateProperty = /*@__PURE__*/getDefaultExportFromCjs(hyphenateProperty$1.exports);

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };

  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue(value, propertyPrefixMap) {
    if (isPrefixedValue(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = hyphenateProperty(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition$2(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + capitalizeString(property)] = webkitOutput;
      style['Moz' + capitalizeString(property)] = mozOutput;
      return outputValue;
    }
  }

  var plugins = [backgroundClip$1, crossFade, cursor$1, filter, flexboxOld, gradient, grid$2, imageSet, logical, position$2, sizing, transition$2, flex$2];

  var prefix = createPrefixer({
    prefixMap: data.prefixMap,
    plugins: plugins
  });

  var es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createPrefixer: createPrefixer,
    prefix: prefix
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(es);

  var decamelize$1 = {};

  Object.defineProperty(decamelize$1, "__esModule", { value: true });
  const separator = '-';
  const regex1 = /([a-z\d])([A-Z])/g;
  const regex2 = /([a-z]+)([A-Z][a-z\d]+)/g;
  function decamelize(text) {
      return text
          .replace(regex1, `$1${separator}$2`)
          .replace(regex2, `$1${separator}$2`)
          .toLowerCase();
  }
  decamelize$1.default = decamelize;

  var __importDefault$l = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(prefixer$1, "__esModule", { value: true });
  const inline_style_prefixer_1 = require$$0$2;
  const decamelize_1 = __importDefault$l(decamelize$1);
  const prefixRegex = /^(Webkit|ms|Moz|O)/;
  function prefixer(property, value) {
      const rules = inline_style_prefixer_1.prefix({ [property]: value });
      const rulesArray = [];
      const propertyNames = Object.keys(rules);
      for (let i = 0; i < propertyNames.length; i++) {
          const propertyName = propertyNames[i];
          const prefixedProp = propertyName.match(prefixRegex)
              ? `-${propertyName}`
              : propertyName;
          const prop = decamelize_1.default(prefixedProp);
          const values = rules[propertyName];
          if (Array.isArray(values)) {
              for (let j = 0; j < values.length; j++) {
                  rulesArray.push({ property: prop, value: values[j] });
              }
          }
          else {
              rulesArray.push({ property: prop, value: values });
          }
      }
      return rulesArray;
  }
  prefixer$1.default = prefixer;

  var valueToString$1 = {};

  Object.defineProperty(valueToString$1, "__esModule", { value: true });
  function valueToString(value, unit = 'px') {
      return typeof value === 'number' ? `${value}${unit}` : value;
  }
  valueToString$1.default = valueToString;

  var getClassName$1 = {};

  /* eslint-disable */
  // murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
  function murmurhash2_32_gc(str) {
    var l = str.length,
        h = l ^ l,
        i = 0,
        k;

    while (l >= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      k ^= k >>> 24;
      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
      l -= 4;
      ++i;
    }

    switch (l) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;
    return (h >>> 0).toString(36);
  }

  var hash_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': murmurhash2_32_gc
  });

  var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(hash_esm);

  var getSafeValue$1 = {};

  var regex = {};

  Object.defineProperty(regex, "__esModule", { value: true });
  regex.spacesOutsideParentheses = / (?=([^()]*\([^()]*\))*[^()]*$)/g;
  regex.unsafeClassNameCharacters = /[^_a-zA-Z0-9-]/g;

  Object.defineProperty(getSafeValue$1, "__esModule", { value: true });
  const regex_1 = regex;
  const dashRegex = /[ .]/g;
  const percentRegex = /%/g;
  function getSafeValue(value) {
      return value
          .replace(dashRegex, '-')
          .replace(percentRegex, 'prcnt')
          .replace(regex_1.unsafeClassNameCharacters, '');
  }
  getSafeValue$1.default = getSafeValue;

  var __importDefault$k = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(getClassName$1, "__esModule", { value: true });
  const hash_1 = __importDefault$k(require$$0$1);
  const get_safe_value_1 = __importDefault$k(getSafeValue$1);
  let PREFIX = 'ub-';
  function getClassNamePrefix() {
      return PREFIX;
  }
  getClassName$1.getClassNamePrefix = getClassNamePrefix;
  function setClassNamePrefix(prefix) {
      PREFIX = prefix;
  }
  getClassName$1.setClassNamePrefix = setClassNamePrefix;
  function getClassName(propertyInfo, value) {
      const { className, safeValue = false, complexValue = false } = propertyInfo;
      let valueKey;
      if (value === 'inherit' || value === 'initial' || value === 'unset') {
          valueKey = value;
      }
      else if (complexValue || value.includes('calc(')) {
          valueKey = hash_1.default(value);
      }
      else if (safeValue) {
          valueKey = value;
      }
      else {
          valueKey = get_safe_value_1.default(value);
      }
      return `${PREFIX}${className}_${valueKey}`;
  }
  getClassName$1.default = getClassName;

  var __importDefault$j = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(getCss$1, "__esModule", { value: true });
  const prefixer_1 = __importDefault$j(prefixer$1);
  const value_to_string_1 = __importDefault$j(valueToString$1);
  const get_class_name_1$2 = __importDefault$j(getClassName$1);
  function getCss(propertyInfo, value) {
      let rules;
      const valueType = typeof value;
      if (valueType !== 'string' && valueType !== 'number') {
          if (process.env.NODE_ENV !== 'production') {
              const name = propertyInfo.jsName;
              const encodedValue = JSON.stringify(value);
              console.error(`📦 ui-box: property “${name}” was passed invalid value “${encodedValue}”. Only numbers and strings are supported.`);
          }
          return null;
      }
      const valueString = value_to_string_1.default(value, propertyInfo.defaultUnit);
      const className = get_class_name_1$2.default(propertyInfo, valueString);
      if (propertyInfo.isPrefixed) {
          rules = prefixer_1.default(propertyInfo.jsName || '', valueString);
      }
      else {
          rules = [{ property: propertyInfo.cssName || '', value: valueString }];
      }
      let styles;
      if (process.env.NODE_ENV === 'production') {
          const rulesString = rules
              .map(rule => `${rule.property}:${rule.value}`)
              .join(';');
          styles = `.${className}{${rulesString}}`;
      }
      else {
          const rulesString = rules
              .map(rule => `  ${rule.property}: ${rule.value};`)
              .join('\n');
          styles = `
.${className} {
${rulesString}
}`;
      }
      return { className, styles };
  }
  getCss$1.default = getCss;

  var __importDefault$i = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(background$1, "__esModule", { value: true });
  const prop_types_1$g = __importDefault$i(propTypes$2.exports);
  const get_css_1$f = __importDefault$i(getCss$1);
  background$1.propTypes = {
      background: prop_types_1$g.default.string,
      backgroundBlendMode: prop_types_1$g.default.string,
      backgroundClip: prop_types_1$g.default.string,
      backgroundColor: prop_types_1$g.default.string,
      backgroundImage: prop_types_1$g.default.string,
      backgroundOrigin: prop_types_1$g.default.string,
      backgroundPosition: prop_types_1$g.default.string,
      backgroundRepeat: prop_types_1$g.default.string,
      backgroundSize: prop_types_1$g.default.string
  };
  background$1.propAliases = {};
  background$1.propValidators = {};
  const background = {
      className: 'bg',
      cssName: 'background',
      jsName: 'background',
      isPrefixed: true,
      complexValue: true
  };
  const backgroundColor = {
      className: 'bg-clr',
      cssName: 'background-color',
      jsName: 'backgroundColor'
  };
  const backgroundImage = {
      className: 'bg-img',
      cssName: 'background-image',
      jsName: 'backgroundImage',
      isPrefixed: true,
      complexValue: true
  };
  const backgroundPosition = {
      className: 'bg-pos',
      cssName: 'background-position',
      jsName: 'backgroundPosition'
  };
  const backgroundSize = {
      className: 'bg-siz',
      cssName: 'background-size',
      jsName: 'backgroundSize'
  };
  const backgroundOrigin = {
      className: 'bg-orgn',
      cssName: 'background-origin',
      jsName: 'backgroundOrigin'
  };
  const backgroundRepeat = {
      className: 'bg-rpt',
      cssName: 'background-repeat',
      jsName: 'backgroundRepeat'
  };
  const backgroundClip = {
      className: 'bg-clp',
      cssName: 'background-clip',
      jsName: 'backgroundClip'
  };
  const backgroundBlendMode = {
      className: 'bg-blnd-md',
      cssName: 'background-blend-mode',
      jsName: 'backgroundBlendMode'
  };
  background$1.propEnhancers = {
      background: (value) => get_css_1$f.default(background, value),
      backgroundBlendMode: (value) => get_css_1$f.default(backgroundBlendMode, value),
      backgroundClip: (value) => get_css_1$f.default(backgroundClip, value),
      backgroundColor: (value) => get_css_1$f.default(backgroundColor, value),
      backgroundImage: (value) => get_css_1$f.default(backgroundImage, value),
      backgroundOrigin: (value) => get_css_1$f.default(backgroundOrigin, value),
      backgroundPosition: (value) => get_css_1$f.default(backgroundPosition, value),
      backgroundRepeat: (value) => get_css_1$f.default(backgroundRepeat, value),
      backgroundSize: (value) => get_css_1$f.default(backgroundSize, value)
  };

  var borderRadius = {};

  (function (exports) {
  	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
  	    return (mod && mod.__esModule) ? mod : { "default": mod };
  	};
  	Object.defineProperty(exports, "__esModule", { value: true });
  	const prop_types_1 = __importDefault(propTypes$2.exports);
  	const get_css_1 = __importDefault(getCss$1);
  	const regex_1 = regex;
  	exports.propTypes = {
  	    borderBottomLeftRadius: prop_types_1.default.oneOfType([
  	        prop_types_1.default.string,
  	        prop_types_1.default.number
  	    ]),
  	    borderBottomRightRadius: prop_types_1.default.oneOfType([
  	        prop_types_1.default.string,
  	        prop_types_1.default.number
  	    ]),
  	    borderRadius: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    borderTopLeftRadius: prop_types_1.default.oneOfType([
  	        prop_types_1.default.string,
  	        prop_types_1.default.number
  	    ]),
  	    borderTopRightRadius: prop_types_1.default.oneOfType([
  	        prop_types_1.default.string,
  	        prop_types_1.default.number
  	    ])
  	};
  	exports.propAliases = {
  	    borderRadius: [
  	        'borderBottomLeftRadius',
  	        'borderBottomRightRadius',
  	        'borderTopLeftRadius',
  	        'borderTopRightRadius'
  	    ]
  	};
  	exports.propValidators = {};
  	if (process.env.NODE_ENV !== 'production') {
  	    exports.propValidators.borderRadius = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “borderRadius”. Use “borderBottomLeftRadius”, “borderBottomRightRadius” “borderTopLeftRadius” and “borderTopRightRadius” instead.`;
  	        }
  	        return;
  	    };
  	}
  	const borderTopLeftRadius = {
  	    className: 'btlr',
  	    cssName: 'border-top-left-radius',
  	    jsName: 'borderTopLeftRadius'
  	};
  	const borderTopRightRadius = {
  	    className: 'btrr',
  	    cssName: 'border-top-right-radius',
  	    jsName: 'borderTopRightRadius'
  	};
  	const borderBottomLeftRadius = {
  	    className: 'bblr',
  	    cssName: 'border-bottom-left-radius',
  	    jsName: 'borderBottomLeftRadius'
  	};
  	const borderBottomRightRadius = {
  	    className: 'bbrr',
  	    cssName: 'border-bottom-right-radius',
  	    jsName: 'borderBottomRightRadius'
  	};
  	exports.propEnhancers = {
  	    borderBottomLeftRadius: (value) => get_css_1.default(borderBottomLeftRadius, value),
  	    borderBottomRightRadius: (value) => get_css_1.default(borderBottomRightRadius, value),
  	    borderTopLeftRadius: (value) => get_css_1.default(borderTopLeftRadius, value),
  	    borderTopRightRadius: (value) => get_css_1.default(borderTopRightRadius, value)
  	};
  } (borderRadius));

  var borders = {};

  (function (exports) {
  	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
  	    return (mod && mod.__esModule) ? mod : { "default": mod };
  	};
  	Object.defineProperty(exports, "__esModule", { value: true });
  	const prop_types_1 = __importDefault(propTypes$2.exports);
  	const get_css_1 = __importDefault(getCss$1);
  	const regex_1 = regex;
  	exports.propTypes = {
  	    border: prop_types_1.default.string,
  	    borderBottom: prop_types_1.default.string,
  	    borderBottomColor: prop_types_1.default.string,
  	    borderBottomStyle: prop_types_1.default.string,
  	    borderBottomWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    borderColor: prop_types_1.default.string,
  	    borderLeft: prop_types_1.default.string,
  	    borderLeftColor: prop_types_1.default.string,
  	    borderLeftStyle: prop_types_1.default.string,
  	    borderLeftWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    borderRight: prop_types_1.default.string,
  	    borderRightColor: prop_types_1.default.string,
  	    borderRightStyle: prop_types_1.default.string,
  	    borderRightWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    borderStyle: prop_types_1.default.string,
  	    borderTop: prop_types_1.default.string,
  	    borderTopColor: prop_types_1.default.string,
  	    borderTopStyle: prop_types_1.default.string,
  	    borderTopWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    borderWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
  	};
  	exports.propAliases = {
  	    border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
  	    borderColor: [
  	        'borderBottomColor',
  	        'borderLeftColor',
  	        'borderRightColor',
  	        'borderTopColor'
  	    ],
  	    borderStyle: [
  	        'borderBottomStyle',
  	        'borderLeftStyle',
  	        'borderRightStyle',
  	        'borderTopStyle'
  	    ],
  	    borderWidth: [
  	        'borderBottomWidth',
  	        'borderLeftWidth',
  	        'borderRightWidth',
  	        'borderTopWidth'
  	    ]
  	};
  	exports.propValidators = {};
  	if (process.env.NODE_ENV !== 'production') {
  	    exports.propValidators.borderColor = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.borderStyle = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.borderWidth = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “borderWidth”. Use “borderBottomWidth”, “borderLeftWidth” “borderRightWidth” and “borderTopWidth” instead.`;
  	        }
  	        return;
  	    };
  	}
  	const borderLeft = {
  	    className: 'b-lft',
  	    cssName: 'border-left',
  	    jsName: 'borderLeft'
  	};
  	const borderLeftColor = {
  	    className: 'b-lft-clr',
  	    cssName: 'border-left-color',
  	    jsName: 'borderLeftColor'
  	};
  	const borderLeftStyle = {
  	    className: 'b-lft-stl',
  	    cssName: 'border-left-style',
  	    jsName: 'borderLeftStyle',
  	    safeValue: true
  	};
  	const borderLeftWidth = {
  	    className: 'b-lft-wdt',
  	    cssName: 'border-left-width',
  	    jsName: 'borderLeftWidth'
  	};
  	const borderRight = {
  	    className: 'b-rgt',
  	    cssName: 'border-right',
  	    jsName: 'borderRight'
  	};
  	const borderRightColor = {
  	    className: 'b-rgt-clr',
  	    cssName: 'border-right-color',
  	    jsName: 'borderRightColor'
  	};
  	const borderRightStyle = {
  	    className: 'b-rgt-stl',
  	    cssName: 'border-right-style',
  	    jsName: 'borderRightStyle',
  	    safeValue: true
  	};
  	const borderRightWidth = {
  	    className: 'b-rgt-wdt',
  	    cssName: 'border-right-width',
  	    jsName: 'borderRightWidth'
  	};
  	const borderTop = {
  	    className: 'b-top',
  	    cssName: 'border-top',
  	    jsName: 'borderTop'
  	};
  	const borderTopColor = {
  	    className: 'b-top-clr',
  	    cssName: 'border-top-color',
  	    jsName: 'borderTopColor'
  	};
  	const borderTopStyle = {
  	    className: 'b-top-stl',
  	    cssName: 'border-top-style',
  	    jsName: 'borderTopStyle',
  	    safeValue: true
  	};
  	const borderTopWidth = {
  	    className: 'b-top-wdt',
  	    cssName: 'border-top-width',
  	    jsName: 'borderTopWidth'
  	};
  	const borderBottom = {
  	    className: 'b-btm',
  	    cssName: 'border-bottom',
  	    jsName: 'borderBottom'
  	};
  	const borderBottomColor = {
  	    className: 'b-btm-clr',
  	    cssName: 'border-bottom-color',
  	    jsName: 'borderBottomColor'
  	};
  	const borderBottomStyle = {
  	    className: 'b-btm-stl',
  	    cssName: 'border-bottom-style',
  	    jsName: 'borderBottomStyle',
  	    safeValue: true
  	};
  	const borderBottomWidth = {
  	    className: 'b-btm-wdt',
  	    cssName: 'border-bottom-width',
  	    jsName: 'borderBottomWidth'
  	};
  	exports.propEnhancers = {
  	    borderBottom: (value) => get_css_1.default(borderBottom, value),
  	    borderBottomColor: (value) => get_css_1.default(borderBottomColor, value),
  	    borderBottomStyle: (value) => get_css_1.default(borderBottomStyle, value),
  	    borderBottomWidth: (value) => get_css_1.default(borderBottomWidth, value),
  	    borderLeft: (value) => get_css_1.default(borderLeft, value),
  	    borderLeftColor: (value) => get_css_1.default(borderLeftColor, value),
  	    borderLeftStyle: (value) => get_css_1.default(borderLeftStyle, value),
  	    borderLeftWidth: (value) => get_css_1.default(borderLeftWidth, value),
  	    borderRight: (value) => get_css_1.default(borderRight, value),
  	    borderRightColor: (value) => get_css_1.default(borderRightColor, value),
  	    borderRightStyle: (value) => get_css_1.default(borderRightStyle, value),
  	    borderRightWidth: (value) => get_css_1.default(borderRightWidth, value),
  	    borderTop: (value) => get_css_1.default(borderTop, value),
  	    borderTopColor: (value) => get_css_1.default(borderTopColor, value),
  	    borderTopStyle: (value) => get_css_1.default(borderTopStyle, value),
  	    borderTopWidth: (value) => get_css_1.default(borderTopWidth, value)
  	};
  } (borders));

  var boxShadow$1 = {};

  var __importDefault$h = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(boxShadow$1, "__esModule", { value: true });
  const prop_types_1$f = __importDefault$h(propTypes$2.exports);
  const get_css_1$e = __importDefault$h(getCss$1);
  boxShadow$1.propTypes = {
      boxShadow: prop_types_1$f.default.string
  };
  boxShadow$1.propAliases = {};
  boxShadow$1.propValidators = {};
  const boxShadow = {
      className: 'bs',
      cssName: 'box-shadow',
      jsName: 'boxShadow',
      complexValue: true
  };
  boxShadow$1.propEnhancers = {
      boxShadow: (value) => get_css_1$e.default(boxShadow, value)
  };

  var dimensions = {};

  var __importDefault$g = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(dimensions, "__esModule", { value: true });
  const prop_types_1$e = __importDefault$g(propTypes$2.exports);
  const get_css_1$d = __importDefault$g(getCss$1);
  dimensions.propTypes = {
      height: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number]),
      maxHeight: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number]),
      maxWidth: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number]),
      minHeight: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number]),
      minWidth: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number]),
      width: prop_types_1$e.default.oneOfType([prop_types_1$e.default.string, prop_types_1$e.default.number])
  };
  dimensions.propAliases = {};
  dimensions.propValidators = {};
  const width = {
      className: 'w',
      cssName: 'width',
      jsName: 'width'
  };
  const height = {
      className: 'h',
      cssName: 'height',
      jsName: 'height'
  };
  const minWidth = {
      className: 'min-w',
      cssName: 'min-width',
      jsName: 'minWidth'
  };
  const minHeight = {
      className: 'min-h',
      cssName: 'min-height',
      jsName: 'minHeight'
  };
  const maxWidth = {
      className: 'max-w',
      cssName: 'max-width',
      jsName: 'maxWidth'
  };
  const maxHeight = {
      className: 'max-h',
      cssName: 'max-height',
      jsName: 'maxHeight'
  };
  dimensions.propEnhancers = {
      height: (value) => get_css_1$d.default(height, value),
      maxHeight: (value) => get_css_1$d.default(maxHeight, value),
      maxWidth: (value) => get_css_1$d.default(maxWidth, value),
      minHeight: (value) => get_css_1$d.default(minHeight, value),
      minWidth: (value) => get_css_1$d.default(minWidth, value),
      width: (value) => get_css_1$d.default(width, value)
  };

  var flex$1 = {};

  var __importDefault$f = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(flex$1, "__esModule", { value: true });
  const prop_types_1$d = __importDefault$f(propTypes$2.exports);
  const get_css_1$c = __importDefault$f(getCss$1);
  flex$1.propTypes = {
      alignContent: prop_types_1$d.default.string,
      alignItems: prop_types_1$d.default.string,
      alignSelf: prop_types_1$d.default.string,
      flex: prop_types_1$d.default.oneOfType([prop_types_1$d.default.string, prop_types_1$d.default.number]),
      flexBasis: prop_types_1$d.default.oneOfType([prop_types_1$d.default.string, prop_types_1$d.default.number]),
      flexDirection: prop_types_1$d.default.string,
      flexFlow: prop_types_1$d.default.string,
      flexGrow: prop_types_1$d.default.oneOfType([prop_types_1$d.default.string, prop_types_1$d.default.number]),
      flexShrink: prop_types_1$d.default.oneOfType([prop_types_1$d.default.string, prop_types_1$d.default.number]),
      flexWrap: prop_types_1$d.default.string,
      justifyContent: prop_types_1$d.default.string,
      justifyItems: prop_types_1$d.default.string,
      justifySelf: prop_types_1$d.default.string,
      order: prop_types_1$d.default.oneOfType([prop_types_1$d.default.string, prop_types_1$d.default.number]),
      placeContent: prop_types_1$d.default.string,
      placeItems: prop_types_1$d.default.string,
      placeSelf: prop_types_1$d.default.string
  };
  flex$1.propAliases = {};
  flex$1.propValidators = {};
  const flex = {
      className: 'flx',
      cssName: 'flex',
      jsName: 'flex',
      isPrefixed: true,
      defaultUnit: ''
  };
  const alignItems = {
      className: 'algn-itms',
      cssName: 'align-items',
      jsName: 'alignItems',
      isPrefixed: true
  };
  const alignSelf = {
      className: 'algn-slf',
      cssName: 'align-self',
      jsName: 'alignSelf',
      isPrefixed: true
  };
  const alignContent = {
      className: 'algn-cnt',
      cssName: 'align-content',
      jsName: 'alignContent',
      isPrefixed: true
  };
  const justifyContent = {
      className: 'just-cnt',
      cssName: 'justify-content',
      jsName: 'justifyContent',
      isPrefixed: true
  };
  const justifyItems = {
      className: 'just-items',
      cssName: 'justify-items',
      jsName: 'justifyItems',
      isPrefixed: true
  };
  const justifySelf = {
      className: 'just-self',
      cssName: 'justify-self',
      jsName: 'justifySelf',
      isPrefixed: true
  };
  const flexDirection = {
      className: 'flx-drct',
      cssName: 'flex-direction',
      jsName: 'flexDirection',
      isPrefixed: true,
      safeValue: true
  };
  const flexWrap = {
      className: 'flx-wrap',
      cssName: 'flex-wrap',
      jsName: 'flexWrap',
      isPrefixed: true,
      safeValue: true
  };
  const flexGrow = {
      className: 'flx-grow',
      cssName: 'flex-grow',
      jsName: 'flexGrow',
      isPrefixed: true,
      defaultUnit: ''
  };
  const flexShrink = {
      className: 'flx-srnk',
      cssName: 'flex-shrink',
      jsName: 'flexShrink',
      isPrefixed: true,
      defaultUnit: ''
  };
  const flexBasis = {
      className: 'flx-basis',
      cssName: 'flex-basis',
      jsName: 'flexBasis',
      isPrefixed: true
  };
  const order = {
      className: 'order',
      cssName: 'order',
      jsName: 'order',
      isPrefixed: true,
      defaultUnit: '',
      safeValue: true
  };
  const flexFlow = {
      className: 'flx-flow',
      cssName: 'flex-flow',
      jsName: 'flexFlow',
      isPrefixed: true,
      defaultUnit: ''
  };
  const placeContent = {
      className: 'plc-cnt',
      cssName: 'place-content',
      jsName: 'placeContent'
  };
  const placeItems = {
      className: 'plc-items',
      cssName: 'place-items',
      jsName: 'placeItems'
  };
  const placeSelf = {
      className: 'plc-self',
      cssName: 'place-self',
      jsName: 'placeSelf'
  };
  flex$1.propEnhancers = {
      alignContent: (value) => get_css_1$c.default(alignContent, value),
      alignItems: (value) => get_css_1$c.default(alignItems, value),
      alignSelf: (value) => get_css_1$c.default(alignSelf, value),
      flex: (value) => get_css_1$c.default(flex, value),
      flexBasis: (value) => get_css_1$c.default(flexBasis, value),
      flexDirection: (value) => get_css_1$c.default(flexDirection, value),
      flexFlow: (value) => get_css_1$c.default(flexFlow, value),
      flexGrow: (value) => get_css_1$c.default(flexGrow, value),
      flexShrink: (value) => get_css_1$c.default(flexShrink, value),
      flexWrap: (value) => get_css_1$c.default(flexWrap, value),
      justifyContent: (value) => get_css_1$c.default(justifyContent, value),
      justifyItems: (value) => get_css_1$c.default(justifyItems, value),
      justifySelf: (value) => get_css_1$c.default(justifySelf, value),
      order: (value) => get_css_1$c.default(order, value),
      placeContent: (value) => get_css_1$c.default(placeContent, value),
      placeItems: (value) => get_css_1$c.default(placeItems, value),
      placeSelf: (value) => get_css_1$c.default(placeSelf, value)
  };

  var grid$1 = {};

  var __importDefault$e = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(grid$1, "__esModule", { value: true });
  const prop_types_1$c = __importDefault$e(propTypes$2.exports);
  const get_css_1$b = __importDefault$e(getCss$1);
  grid$1.propTypes = {
      columnGap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      grid: prop_types_1$c.default.string,
      gridArea: prop_types_1$c.default.string,
      gridAutoColumns: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridAutoFlow: prop_types_1$c.default.string,
      gridAutoRows: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridColumn: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridColumnEnd: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridColumnGap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridColumnStart: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridGap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridRow: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridRowEnd: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridRowGap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridRowStart: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number]),
      gridTemplate: prop_types_1$c.default.string,
      gridTemplateAreas: prop_types_1$c.default.string,
      gridTemplateColumns: prop_types_1$c.default.string,
      gridTemplateRows: prop_types_1$c.default.string,
      rowGap: prop_types_1$c.default.oneOfType([prop_types_1$c.default.string, prop_types_1$c.default.number])
  };
  grid$1.propAliases = {};
  grid$1.propValidators = {};
  const columnGap = {
      className: 'col-gap',
      cssName: 'column-gap',
      jsName: 'columnGap'
  };
  const gap = {
      className: 'gap',
      cssName: 'gap',
      jsName: 'gap'
  };
  const grid = {
      className: 'grd',
      cssName: 'grid',
      jsName: 'grid',
      complexValue: true
  };
  const gridArea = {
      className: 'grd-ara',
      cssName: 'grid-area',
      jsName: 'gridArea',
      complexValue: true
  };
  const gridAutoColumns = {
      className: 'grd-ato-col',
      cssName: 'grid-auto-columns',
      jsName: 'gridAutoColumns',
      complexValue: true
  };
  const gridAutoFlow = {
      className: 'grd-ato-flw',
      cssName: 'grid-auto-flow',
      jsName: 'gridAutoFlow'
  };
  const gridAutoRows = {
      className: 'grd-ato-row',
      cssName: 'grid-auto-rows',
      jsName: 'gridAutoRows',
      complexValue: true
  };
  const gridColumn = {
      className: 'grd-col',
      cssName: 'grid-column',
      jsName: 'gridColumn',
      defaultUnit: '',
      complexValue: true
  };
  const gridColumnEnd = {
      className: 'grd-col-end',
      cssName: 'grid-column-end',
      jsName: 'gridColumnEnd',
      defaultUnit: ''
  };
  const gridColumnGap = {
      className: 'grd-col-gap',
      cssName: 'grid-column-gap',
      jsName: 'gridColumnGap'
  };
  const gridColumnStart = {
      className: 'grd-col-str',
      cssName: 'grid-column-start',
      jsName: 'gridColumnStart',
      defaultUnit: ''
  };
  const gridGap = {
      className: 'grd-gap',
      cssName: 'grid-gap',
      jsName: 'gridGap'
  };
  const gridRow = {
      className: 'grd-row',
      cssName: 'grid-row',
      jsName: 'gridRow',
      defaultUnit: '',
      complexValue: true
  };
  const gridRowEnd = {
      className: 'grd-row-end',
      cssName: 'grid-row-end',
      jsName: 'gridRowEnd',
      defaultUnit: ''
  };
  const gridRowGap = {
      className: 'grd-row-gap',
      cssName: 'grid-row-gap',
      jsName: 'gridRowGap'
  };
  const gridRowStart = {
      className: 'grd-row-str',
      cssName: 'grid-row-start',
      jsName: 'gridRowStart',
      defaultUnit: ''
  };
  const gridTemplate = {
      className: 'grd-tmp',
      cssName: 'grid-template',
      jsName: 'gridTemplate',
      complexValue: true
  };
  const gridTemplateAreas = {
      className: 'grd-tmp-ara',
      cssName: 'grid-template-areas',
      jsName: 'gridTemplateAreas',
      complexValue: true
  };
  const gridTemplateColumns = {
      className: 'grd-tmp-col',
      cssName: 'grid-template-columns',
      jsName: 'gridTemplateColumns',
      complexValue: true
  };
  const gridTemplateRows = {
      className: 'grd-tmp-row',
      cssName: 'grid-template-rows',
      jsName: 'gridTemplateRows',
      complexValue: true
  };
  const rowGap = {
      className: 'row-gap',
      cssName: 'row-gap',
      jsName: 'rowGap'
  };
  grid$1.propEnhancers = {
      columnGap: (value) => get_css_1$b.default(columnGap, value),
      gap: (value) => get_css_1$b.default(gap, value),
      grid: (value) => get_css_1$b.default(grid, value),
      gridArea: (value) => get_css_1$b.default(gridArea, value),
      gridAutoColumns: (value) => get_css_1$b.default(gridAutoColumns, value),
      gridAutoFlow: (value) => get_css_1$b.default(gridAutoFlow, value),
      gridAutoRows: (value) => get_css_1$b.default(gridAutoRows, value),
      gridColumn: (value) => get_css_1$b.default(gridColumn, value),
      gridColumnEnd: (value) => get_css_1$b.default(gridColumnEnd, value),
      gridColumnGap: (value) => get_css_1$b.default(gridColumnGap, value),
      gridColumnStart: (value) => get_css_1$b.default(gridColumnStart, value),
      gridGap: (value) => get_css_1$b.default(gridGap, value),
      gridRow: (value) => get_css_1$b.default(gridRow, value),
      gridRowEnd: (value) => get_css_1$b.default(gridRowEnd, value),
      gridRowGap: (value) => get_css_1$b.default(gridRowGap, value),
      gridRowStart: (value) => get_css_1$b.default(gridRowStart, value),
      gridTemplate: (value) => get_css_1$b.default(gridTemplate, value),
      gridTemplateAreas: (value) => get_css_1$b.default(gridTemplateAreas, value),
      gridTemplateColumns: (value) => get_css_1$b.default(gridTemplateColumns, value),
      gridTemplateRows: (value) => get_css_1$b.default(gridTemplateRows, value),
      rowGap: (value) => get_css_1$b.default(rowGap, value)
  };

  var interaction = {};

  var __importDefault$d = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(interaction, "__esModule", { value: true });
  const prop_types_1$b = __importDefault$d(propTypes$2.exports);
  const get_css_1$a = __importDefault$d(getCss$1);
  interaction.propTypes = {
      cursor: prop_types_1$b.default.string,
      pointerEvents: prop_types_1$b.default.string,
      userSelect: prop_types_1$b.default.string,
      visibility: prop_types_1$b.default.string
  };
  interaction.propAliases = {};
  interaction.propValidators = {};
  const cursor = {
      className: 'crsr',
      cssName: 'cursor',
      jsName: 'cursor'
  };
  const userSelect = {
      className: 'usr-slct',
      cssName: 'user-select',
      jsName: 'userSelect',
      safeValue: true,
      isPrefixed: true
  };
  const visibility = {
      className: 'vsblt',
      cssName: 'visibility',
      jsName: 'visibility',
      safeValue: true
  };
  const pointerEvents$1 = {
      className: 'ptr-evts',
      cssName: 'pointer-events',
      jsName: 'pointerEvents',
      safeValue: true
  };
  interaction.propEnhancers = {
      cursor: (value) => get_css_1$a.default(cursor, value),
      pointerEvents: (value) => get_css_1$a.default(pointerEvents$1, value),
      userSelect: (value) => get_css_1$a.default(userSelect, value),
      visibility: (value) => get_css_1$a.default(visibility, value)
  };

  var layout = {};

  var __importDefault$c = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(layout, "__esModule", { value: true });
  const prop_types_1$a = __importDefault$c(propTypes$2.exports);
  const get_css_1$9 = __importDefault$c(getCss$1);
  const get_class_name_1$1 = getClassName$1;
  layout.propTypes = {
      boxSizing: prop_types_1$a.default.string,
      clear: prop_types_1$a.default.string,
      clearfix: prop_types_1$a.default.bool,
      display: prop_types_1$a.default.string,
      float: prop_types_1$a.default.string,
      zIndex: prop_types_1$a.default.oneOfType([prop_types_1$a.default.string, prop_types_1$a.default.number])
  };
  layout.propAliases = {};
  layout.propValidators = {};
  const display = {
      className: 'dspl',
      cssName: 'display',
      jsName: 'display',
      safeValue: true,
      isPrefixed: true
  };
  const float = {
      className: 'flt',
      cssName: 'float',
      jsName: 'float',
      safeValue: true
  };
  const clear = {
      className: 'clr',
      cssName: 'clear',
      jsName: 'clear',
      safeValue: true
  };
  const zIndex = {
      className: 'z-idx',
      cssName: 'z-index',
      jsName: 'zIndex',
      safeValue: true,
      defaultUnit: ''
  };
  const boxSizing = {
      className: 'box-szg',
      cssName: 'box-sizing',
      jsName: 'boxSizing',
      safeValue: true
  };
  layout.propEnhancers = {
      boxSizing: (value) => get_css_1$9.default(boxSizing, value),
      clear: (value) => get_css_1$9.default(clear, value),
      clearfix: () => ({
          className: `${get_class_name_1$1.getClassNamePrefix()}clearfix`,
          styles: `
.${get_class_name_1$1.getClassNamePrefix()}clearfix:before, .${get_class_name_1$1.getClassNamePrefix()}clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
      }),
      display: (value) => get_css_1$9.default(display, value),
      float: (value) => get_css_1$9.default(float, value),
      zIndex: (value) => get_css_1$9.default(zIndex, value)
  };

  var list = {};

  var __importDefault$b = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(list, "__esModule", { value: true });
  const prop_types_1$9 = __importDefault$b(propTypes$2.exports);
  const get_css_1$8 = __importDefault$b(getCss$1);
  list.propTypes = {
      listStyle: prop_types_1$9.default.string,
      listStyleType: prop_types_1$9.default.string,
      listStyleImage: prop_types_1$9.default.string,
      listStylePosition: prop_types_1$9.default.string
  };
  list.propAliases = {};
  list.propValidators = {};
  const listStyle = {
      className: 'ls',
      cssName: 'list-style',
      jsName: 'listStyle',
      complexValue: true
  };
  const listStyleType = {
      className: 'ls-typ',
      cssName: 'list-style-type',
      jsName: 'listStyleType'
  };
  const listStyleImage = {
      className: 'ls-img',
      cssName: 'list-style-image',
      jsName: 'listStyleImage',
      complexValue: true
  };
  const listStylePosition = {
      className: 'ls-pos',
      cssName: 'list-style-position',
      jsName: 'listStylePosition',
      safeValue: true
  };
  list.propEnhancers = {
      listStyle: (value) => get_css_1$8.default(listStyle, value),
      listStyleType: (value) => get_css_1$8.default(listStyleType, value),
      listStyleImage: (value) => get_css_1$8.default(listStyleImage, value),
      listStylePosition: (value) => get_css_1$8.default(listStylePosition, value)
  };

  var opacity$1 = {};

  var __importDefault$a = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(opacity$1, "__esModule", { value: true });
  const prop_types_1$8 = __importDefault$a(propTypes$2.exports);
  const get_css_1$7 = __importDefault$a(getCss$1);
  opacity$1.propTypes = {
      opacity: prop_types_1$8.default.oneOfType([prop_types_1$8.default.string, prop_types_1$8.default.number])
  };
  opacity$1.propAliases = {};
  opacity$1.propValidators = {};
  const opacity = {
      className: 'opct',
      cssName: 'opacity',
      jsName: 'opacity',
      defaultUnit: ''
  };
  opacity$1.propEnhancers = {
      opacity: (value) => get_css_1$7.default(opacity, value)
  };

  var outline$1 = {};

  var __importDefault$9 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(outline$1, "__esModule", { value: true });
  const prop_types_1$7 = __importDefault$9(propTypes$2.exports);
  const get_css_1$6 = __importDefault$9(getCss$1);
  outline$1.propTypes = {
      outline: prop_types_1$7.default.string
  };
  outline$1.propAliases = {};
  outline$1.propValidators = {};
  const outline = {
      className: 'otln',
      cssName: 'outline',
      jsName: 'outline',
      complexValue: true
  };
  outline$1.propEnhancers = {
      outline: (value) => get_css_1$6.default(outline, value)
  };

  var overflow = {};

  var __importDefault$8 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(overflow, "__esModule", { value: true });
  const prop_types_1$6 = __importDefault$8(propTypes$2.exports);
  const get_css_1$5 = __importDefault$8(getCss$1);
  overflow.propTypes = {
      overflow: prop_types_1$6.default.string,
      overflowX: prop_types_1$6.default.string,
      overflowY: prop_types_1$6.default.string
  };
  overflow.propAliases = {
      overflow: ['overflowX', 'overflowY']
  };
  overflow.propValidators = {};
  const overflowY = {
      className: 'ovflw-y',
      cssName: 'overflow-y',
      jsName: 'overflowY',
      safeValue: true
  };
  const overflowX = {
      className: 'ovflw-x',
      cssName: 'overflow-x',
      jsName: 'overflowX',
      safeValue: true
  };
  overflow.propEnhancers = {
      overflowX: (value) => get_css_1$5.default(overflowX, value),
      overflowY: (value) => get_css_1$5.default(overflowY, value)
  };

  var position$1 = {};

  var __importDefault$7 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(position$1, "__esModule", { value: true });
  const prop_types_1$5 = __importDefault$7(propTypes$2.exports);
  const get_css_1$4 = __importDefault$7(getCss$1);
  position$1.propTypes = {
      bottom: prop_types_1$5.default.oneOfType([prop_types_1$5.default.string, prop_types_1$5.default.number]),
      left: prop_types_1$5.default.oneOfType([prop_types_1$5.default.string, prop_types_1$5.default.number]),
      position: prop_types_1$5.default.string,
      right: prop_types_1$5.default.oneOfType([prop_types_1$5.default.string, prop_types_1$5.default.number]),
      top: prop_types_1$5.default.oneOfType([prop_types_1$5.default.string, prop_types_1$5.default.number])
  };
  position$1.propAliases = {};
  position$1.propValidators = {};
  const position = {
      className: 'pst',
      cssName: 'position',
      jsName: 'position',
      safeValue: true,
      isPrefixed: true
  };
  const top = {
      className: 'top',
      cssName: 'top',
      jsName: 'top'
  };
  const right = {
      className: 'rgt',
      cssName: 'right',
      jsName: 'right'
  };
  const bottom = {
      className: 'btm',
      cssName: 'bottom',
      jsName: 'bottom'
  };
  const left = {
      className: 'lft',
      cssName: 'left',
      jsName: 'left'
  };
  position$1.propEnhancers = {
      bottom: (value) => get_css_1$4.default(bottom, value),
      left: (value) => get_css_1$4.default(left, value),
      position: (value) => get_css_1$4.default(position, value),
      right: (value) => get_css_1$4.default(right, value),
      top: (value) => get_css_1$4.default(top, value)
  };

  var resize$1 = {};

  var __importDefault$6 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(resize$1, "__esModule", { value: true });
  const prop_types_1$4 = __importDefault$6(propTypes$2.exports);
  const get_css_1$3 = __importDefault$6(getCss$1);
  resize$1.propTypes = {
      resize: prop_types_1$4.default.string
  };
  resize$1.propAliases = {};
  resize$1.propValidators = {};
  const resize = {
      className: 'rsz',
      cssName: 'resize',
      jsName: 'resize'
  };
  resize$1.propEnhancers = {
      resize: (value) => get_css_1$3.default(resize, value)
  };

  var spacing = {};

  (function (exports) {
  	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
  	    return (mod && mod.__esModule) ? mod : { "default": mod };
  	};
  	Object.defineProperty(exports, "__esModule", { value: true });
  	const prop_types_1 = __importDefault(propTypes$2.exports);
  	const get_css_1 = __importDefault(getCss$1);
  	const regex_1 = regex;
  	exports.propTypes = {
  	    margin: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    marginY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    padding: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
  	    paddingY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
  	};
  	exports.propAliases = {
  	    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
  	    marginX: ['marginLeft', 'marginRight'],
  	    marginY: ['marginBottom', 'marginTop'],
  	    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
  	    paddingX: ['paddingLeft', 'paddingRight'],
  	    paddingY: ['paddingBottom', 'paddingTop']
  	};
  	exports.propValidators = {};
  	if (process.env.NODE_ENV !== 'production') {
  	    exports.propValidators.margin = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “margin”. Use “marginX”, “marginY” “marginBottom”, “marginLeft”, “marginRight” and “marginTop” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.marginX = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “marginX”. Use “marginLeft” and “marginRight” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.marginY = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “marginY”. Use “marginBottom” and “marginTop” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.padding = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “padding”. Use “paddingX”, “paddingY” “paddingBottom”, “paddingLeft”, “paddingRight” and “paddingTop” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.paddingX = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “paddingX”. Use “paddingLeft” and “paddingRight” instead.`;
  	        }
  	        return;
  	    };
  	    exports.propValidators.paddingY = value => {
  	        if (regex_1.spacesOutsideParentheses.test(value)) {
  	            return `multiple values (“${value}”) aren՚t supported with “paddingY”. Use “paddingBottom” and “paddingTop” instead.`;
  	        }
  	        return;
  	    };
  	}
  	const marginTop = {
  	    className: 'mt',
  	    cssName: 'margin-top',
  	    jsName: 'marginTop'
  	};
  	const marginRight = {
  	    className: 'mr',
  	    cssName: 'margin-right',
  	    jsName: 'marginRight'
  	};
  	const marginBottom = {
  	    className: 'mb',
  	    cssName: 'margin-bottom',
  	    jsName: 'marginBottom'
  	};
  	const marginLeft = {
  	    className: 'ml',
  	    cssName: 'margin-left',
  	    jsName: 'marginLeft'
  	};
  	const paddingTop = {
  	    className: 'pt',
  	    cssName: 'padding-top',
  	    jsName: 'paddingTop'
  	};
  	const paddingRight = {
  	    className: 'pr',
  	    cssName: 'padding-right',
  	    jsName: 'paddingRight'
  	};
  	const paddingBottom = {
  	    className: 'pb',
  	    cssName: 'padding-bottom',
  	    jsName: 'paddingBottom'
  	};
  	const paddingLeft = {
  	    className: 'pl',
  	    cssName: 'padding-left',
  	    jsName: 'paddingLeft'
  	};
  	exports.propEnhancers = {
  	    marginBottom: (value) => get_css_1.default(marginBottom, value),
  	    marginLeft: (value) => get_css_1.default(marginLeft, value),
  	    marginRight: (value) => get_css_1.default(marginRight, value),
  	    marginTop: (value) => get_css_1.default(marginTop, value),
  	    paddingBottom: (value) => get_css_1.default(paddingBottom, value),
  	    paddingLeft: (value) => get_css_1.default(paddingLeft, value),
  	    paddingRight: (value) => get_css_1.default(paddingRight, value),
  	    paddingTop: (value) => get_css_1.default(paddingTop, value)
  	};
  } (spacing));

  var text = {};

  var __importDefault$5 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(text, "__esModule", { value: true });
  const prop_types_1$3 = __importDefault$5(propTypes$2.exports);
  const get_css_1$2 = __importDefault$5(getCss$1);
  text.propTypes = {
      color: prop_types_1$3.default.string,
      font: prop_types_1$3.default.string,
      fontFamily: prop_types_1$3.default.string,
      fontSize: prop_types_1$3.default.oneOfType([prop_types_1$3.default.string, prop_types_1$3.default.number]),
      fontStyle: prop_types_1$3.default.string,
      fontVariant: prop_types_1$3.default.string,
      fontWeight: prop_types_1$3.default.oneOfType([prop_types_1$3.default.string, prop_types_1$3.default.number]),
      letterSpacing: prop_types_1$3.default.oneOfType([prop_types_1$3.default.string, prop_types_1$3.default.number]),
      lineHeight: prop_types_1$3.default.oneOfType([prop_types_1$3.default.string, prop_types_1$3.default.number]),
      textAlign: prop_types_1$3.default.string,
      textDecoration: prop_types_1$3.default.string,
      textOverflow: prop_types_1$3.default.string,
      textShadow: prop_types_1$3.default.string,
      textTransform: prop_types_1$3.default.string,
      verticalAlign: prop_types_1$3.default.string,
      whiteSpace: prop_types_1$3.default.string,
      wordBreak: prop_types_1$3.default.string,
      wordWrap: prop_types_1$3.default.string
  };
  text.propAliases = {};
  text.propValidators = {};
  const textAlign = {
      className: 'txt-algn',
      safeValue: true,
      cssName: 'text-align',
      jsName: 'textAlign'
  };
  const textDecoration = {
      className: 'txt-deco',
      cssName: 'text-decoration',
      jsName: 'textDecoration'
  };
  const textTransform = {
      className: 'txt-trns',
      cssName: 'text-transform',
      jsName: 'textTransform',
      safeValue: true
  };
  const textShadow = {
      className: 'txt-shdw',
      cssName: 'text-shadow',
      jsName: 'textShadow',
      complexValue: true
  };
  const textOverflow = {
      className: 'txt-ovrf',
      cssName: 'text-overflow',
      jsName: 'textOverflow',
      safeValue: true
  };
  const color = {
      className: 'color',
      cssName: 'color',
      jsName: 'color'
  };
  const font = {
      className: 'fnt',
      cssName: 'font',
      jsName: 'font',
      complexValue: true
  };
  const fontFamily = {
      className: 'fnt-fam',
      cssName: 'font-family',
      jsName: 'fontFamily',
      complexValue: true
  };
  const fontSize = {
      className: 'fnt-sze',
      cssName: 'font-size',
      jsName: 'fontSize'
  };
  const fontStyle = {
      className: 'fnt-stl',
      cssName: 'font-style',
      jsName: 'fontStyle',
      safeValue: true
  };
  const fontVariant = {
      className: 'f-vari',
      cssName: 'font-variant',
      jsName: 'fontVariant'
  };
  const fontWeight = {
      className: 'f-wght',
      cssName: 'font-weight',
      jsName: 'fontWeight',
      safeValue: true,
      defaultUnit: ''
  };
  const lineHeight = {
      className: 'ln-ht',
      cssName: 'line-height',
      jsName: 'lineHeight',
      defaultUnit: ''
  };
  const verticalAlign = {
      className: 'ver-algn',
      cssName: 'vertical-align',
      jsName: 'verticalAlign',
      safeValue: true
  };
  const wordBreak = {
      className: 'wrd-brk',
      cssName: 'word-break',
      jsName: 'wordBreak',
      safeValue: true
  };
  const wordWrap = {
      className: 'wrd-wrp',
      cssName: 'word-wrap',
      jsName: 'wordWrap',
      safeValue: true
  };
  const whiteSpace = {
      className: 'wht-spc',
      cssName: 'white-space',
      jsName: 'whiteSpace',
      safeValue: true
  };
  const letterSpacing = {
      className: 'ltr-spc',
      cssName: 'letter-spacing',
      jsName: 'letterSpacing'
  };
  text.propEnhancers = {
      color: (value) => get_css_1$2.default(color, value),
      font: (value) => get_css_1$2.default(font, value),
      fontFamily: (value) => get_css_1$2.default(fontFamily, value),
      fontSize: (value) => get_css_1$2.default(fontSize, value),
      fontStyle: (value) => get_css_1$2.default(fontStyle, value),
      fontVariant: (value) => get_css_1$2.default(fontVariant, value),
      fontWeight: (value) => get_css_1$2.default(fontWeight, value),
      letterSpacing: (value) => get_css_1$2.default(letterSpacing, value),
      lineHeight: (value) => get_css_1$2.default(lineHeight, value),
      textAlign: (value) => get_css_1$2.default(textAlign, value),
      textDecoration: (value) => get_css_1$2.default(textDecoration, value),
      textOverflow: (value) => get_css_1$2.default(textOverflow, value),
      textShadow: (value) => get_css_1$2.default(textShadow, value),
      textTransform: (value) => get_css_1$2.default(textTransform, value),
      verticalAlign: (value) => get_css_1$2.default(verticalAlign, value),
      whiteSpace: (value) => get_css_1$2.default(whiteSpace, value),
      wordBreak: (value) => get_css_1$2.default(wordBreak, value),
      wordWrap: (value) => get_css_1$2.default(wordWrap, value)
  };

  var transform$1 = {};

  var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(transform$1, "__esModule", { value: true });
  const prop_types_1$2 = __importDefault$4(propTypes$2.exports);
  const get_css_1$1 = __importDefault$4(getCss$1);
  transform$1.propTypes = {
      transform: prop_types_1$2.default.string,
      transformOrigin: prop_types_1$2.default.string
  };
  transform$1.propAliases = {};
  transform$1.propValidators = {};
  const transform = {
      className: 'tfrm',
      cssName: 'transform',
      jsName: 'transform',
      complexValue: true
  };
  const transformOrigin = {
      className: 'tfrm-orgn',
      cssName: 'transform-origin',
      jsName: 'transformOrigin',
      complexValue: true
  };
  transform$1.propEnhancers = {
      transform: (value) => get_css_1$1.default(transform, value),
      transformOrigin: (value) => get_css_1$1.default(transformOrigin, value)
  };

  var transition$1 = {};

  var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(transition$1, "__esModule", { value: true });
  const prop_types_1$1 = __importDefault$3(propTypes$2.exports);
  const get_css_1 = __importDefault$3(getCss$1);
  transition$1.propTypes = {
      transition: prop_types_1$1.default.string,
      transitionDelay: prop_types_1$1.default.string,
      transitionDuration: prop_types_1$1.default.string,
      transitionProperty: prop_types_1$1.default.string,
      transitionTimingFunction: prop_types_1$1.default.string
  };
  transition$1.propAliases = {};
  transition$1.propValidators = {};
  const transition = {
      className: 'tstn',
      cssName: 'transition',
      jsName: 'transition',
      complexValue: true
  };
  const transitionDelay = {
      className: 'tstn-dly',
      cssName: 'transition-delay',
      jsName: 'transitionDelay',
      complexValue: true
  };
  const transitionDuration = {
      className: 'tstn-drn',
      cssName: 'transition-duration',
      jsName: 'transitionDuration',
      complexValue: true
  };
  const transitionProperty = {
      className: 'tstn-pty',
      cssName: 'transition-property',
      jsName: 'transitionProperty',
      complexValue: true
  };
  const transitionTimingFunction = {
      className: 'tstn-tf',
      cssName: 'transition-timing-function',
      jsName: 'transitionTimingFunction',
      complexValue: true
  };
  transition$1.propEnhancers = {
      transition: (value) => get_css_1.default(transition, value),
      transitionDelay: (value) => get_css_1.default(transitionDelay, value),
      transitionDuration: (value) => get_css_1.default(transitionDuration, value),
      transitionProperty: (value) => get_css_1.default(transitionProperty, value),
      transitionTimingFunction: (value) => get_css_1.default(transitionTimingFunction, value)
  };

  (function (exports) {
  	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
  	    if (mod && mod.__esModule) return mod;
  	    var result = {};
  	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  	    result["default"] = mod;
  	    return result;
  	};
  	Object.defineProperty(exports, "__esModule", { value: true });
  	const background = __importStar(background$1);
  	exports.background = background;
  	const borderRadius$1 = __importStar(borderRadius);
  	exports.borderRadius = borderRadius$1;
  	const borders$1 = __importStar(borders);
  	exports.borders = borders$1;
  	const boxShadow = __importStar(boxShadow$1);
  	exports.boxShadow = boxShadow;
  	const dimensions$1 = __importStar(dimensions);
  	exports.dimensions = dimensions$1;
  	const flex = __importStar(flex$1);
  	exports.flex = flex;
  	const grid = __importStar(grid$1);
  	exports.grid = grid;
  	const interaction$1 = __importStar(interaction);
  	exports.interaction = interaction$1;
  	const layout$1 = __importStar(layout);
  	exports.layout = layout$1;
  	const list$1 = __importStar(list);
  	exports.list = list$1;
  	const opacity = __importStar(opacity$1);
  	exports.opacity = opacity;
  	const outline = __importStar(outline$1);
  	exports.outline = outline;
  	const overflow$1 = __importStar(overflow);
  	exports.overflow = overflow$1;
  	const position = __importStar(position$1);
  	exports.position = position;
  	const resize = __importStar(resize$1);
  	exports.resize = resize;
  	const spacing$1 = __importStar(spacing);
  	exports.spacing = spacing$1;
  	const text$1 = __importStar(text);
  	exports.text = text$1;
  	const transform = __importStar(transform$1);
  	exports.transform = transform;
  	const transition = __importStar(transition$1);
  	exports.transition = transition;
  	exports.propTypes = Object.assign({}, background.propTypes, borderRadius$1.propTypes, borders$1.propTypes, boxShadow.propTypes, dimensions$1.propTypes, flex.propTypes, grid.propTypes, interaction$1.propTypes, layout$1.propTypes, list$1.propTypes, opacity.propTypes, outline.propTypes, overflow$1.propTypes, position.propTypes, resize.propTypes, spacing$1.propTypes, text$1.propTypes, transform.propTypes, transition.propTypes);
  	exports.propNames = Object.keys(exports.propTypes);
  	exports.propAliases = Object.assign({}, background.propAliases, borderRadius$1.propAliases, borders$1.propAliases, boxShadow.propAliases, dimensions$1.propAliases, flex.propAliases, grid.propAliases, interaction$1.propAliases, layout$1.propAliases, list$1.propAliases, opacity.propAliases, outline.propAliases, overflow$1.propAliases, position.propAliases, resize.propAliases, spacing$1.propAliases, text$1.propAliases, transform.propAliases, transition.propAliases);
  	exports.propValidators = Object.assign({}, background.propValidators, borderRadius$1.propValidators, borders$1.propValidators, boxShadow.propValidators, dimensions$1.propValidators, flex.propValidators, grid.propValidators, interaction$1.propValidators, layout$1.propValidators, list$1.propValidators, opacity.propValidators, outline.propValidators, overflow$1.propValidators, position.propValidators, resize.propValidators, spacing$1.propValidators, text$1.propValidators, transform.propValidators, transition.propValidators);
  	exports.propEnhancers = Object.assign({}, background.propEnhancers, borderRadius$1.propEnhancers, borders$1.propEnhancers, boxShadow.propEnhancers, dimensions$1.propEnhancers, flex.propEnhancers, grid.propEnhancers, interaction$1.propEnhancers, layout$1.propEnhancers, list$1.propEnhancers, opacity.propEnhancers, outline.propEnhancers, overflow$1.propEnhancers, position.propEnhancers, resize.propEnhancers, spacing$1.propEnhancers, text$1.propEnhancers, transform.propEnhancers, transition.propEnhancers);
  } (enhancers));

  var enhanceProps$1 = {};

  var expandAliases$1 = {};

  Object.defineProperty(expandAliases$1, "__esModule", { value: true });
  const index_1$2 = enhancers;
  function expandAliases(props) {
      const propNames = Object.keys(props);
      const newProps = new Map();
      propNames.forEach(propName => {
          const propValue = props[propName];
          const aliases = index_1$2.propAliases[propName] || [propName];
          if (process.env.NODE_ENV !== 'production') {
              const validator = index_1$2.propValidators[propName];
              if (validator) {
                  const result = validator(propValue);
                  if (result) {
                      throw new Error(`📦 ui-box: ${result}`);
                  }
              }
          }
          aliases.forEach(alias => {
              newProps.set(alias, propValue);
          });
      });
      return newProps;
  }
  expandAliases$1.default = expandAliases;

  var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  var __importStar$2 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
  };
  Object.defineProperty(enhanceProps$1, "__esModule", { value: true });
  const enhancers_1$1 = enhancers;
  const expand_aliases_1 = __importDefault$2(expandAliases$1);
  const cache$1 = __importStar$2(cache$4);
  const styles$1 = __importStar$2(styles$2);
  function enhanceProps(rawProps) {
      const propsMap = expand_aliases_1.default(rawProps);
      const preservedProps = {};
      let className = rawProps.className || '';
      for (const [propName, propValue] of propsMap) {
          const cachedClassName = cache$1.get(propName, propValue);
          if (cachedClassName) {
              className = `${className} ${cachedClassName}`;
              continue;
          }
          const enhancer = enhancers_1$1.propEnhancers[propName];
          if (enhancer &&
              (propValue === null || propValue === undefined || propValue === false)) {
              continue;
          }
          else if (!enhancer) {
              preservedProps[propName] = propValue;
              continue;
          }
          const newCss = enhancer(propValue);
          if (newCss) {
              styles$1.add(newCss.styles);
              cache$1.set(propName, propValue, newCss.className);
              className = `${className} ${newCss.className}`;
          }
      }
      className = className.trim();
      return { className, enhancedProps: preservedProps };
  }
  enhanceProps$1.default = enhanceProps;

  var safeHref = {};

  Object.defineProperty(safeHref, "__esModule", { value: true });
  const PROTOCOL_REGEX = /^[a-z]+:/;
  const ORIGIN_REGEX = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/;
  let useSafeHref = true;
  let globalOrigin = typeof window !== 'undefined' ? window.location.origin : false;
  function configureSafeHref(configObject) {
      if (typeof configObject.enabled === 'boolean') {
          useSafeHref = configObject.enabled;
      }
      if (configObject.origin) {
          globalOrigin = configObject.origin;
      }
  }
  safeHref.configureSafeHref = configureSafeHref;
  function getUseSafeHref() {
      return useSafeHref;
  }
  safeHref.getUseSafeHref = getUseSafeHref;
  function getURLInfo(url) {
      const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'data:'];
      const protocolResult = url.match(PROTOCOL_REGEX);
      const originResult = url.match(ORIGIN_REGEX);
      const urlProtocol = protocolResult ? protocolResult[0] : 'relative';
      let sameOrigin = urlProtocol === 'relative';
      if (!sameOrigin && globalOrigin) {
          sameOrigin = globalOrigin === (originResult && originResult[0]);
      }
      const isSafeProtocol = sameOrigin ? true : safeProtocols.includes(urlProtocol);
      if (!isSafeProtocol) {
          console.error('📦 `href` passed to anchor tag is unsafe. Because of this, the `href` on the element was not set. Please review the safe href documentation if you have questions.', 'https://www.github.com/segmentio/ui-box');
          return {
              url: undefined,
              sameOrigin
          };
      }
      return {
          url,
          sameOrigin
      };
  }
  safeHref.getURLInfo = getURLInfo;
  function extractAnchorProps(href, rel) {
      const urlInfo = getURLInfo(href);
      const safeHref = urlInfo.url;
      let safeRel = rel || '';
      if (urlInfo.url) {
          if (!safeRel.includes('noopener')) {
              safeRel += `${safeRel.length > 0 ? ' ' : ''}noopener`;
          }
          if (!safeRel.includes('noreferrer') && !urlInfo.sameOrigin) {
              safeRel += `${safeRel.length > 0 ? ' ' : ''}noreferrer`;
          }
      }
      return {
          safeHref,
          safeRel
      };
  }
  safeHref.extractAnchorProps = extractAnchorProps;

  var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
      return t;
  };
  var __importStar$1 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
  };
  var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(box, "__esModule", { value: true });
  const react_1 = __importStar$1(React__default["default"]);
  const prop_types_1 = __importDefault$1(propTypes$2.exports);
  const enhancers_1 = enhancers;
  const enhance_props_1 = __importDefault$1(enhanceProps$1);
  const safeHref_1$1 = safeHref;
  const Box$1 = react_1.forwardRef((_a, ref) => {
      var { is, children, allowUnsafeHref } = _a, props = __rest(_a, ["is", "children", "allowUnsafeHref"]);
      const { className, enhancedProps: parsedProps } = enhance_props_1.default(props);
      parsedProps.className = className;
      if (ref) {
          parsedProps.ref = ref;
      }
      const safeHrefEnabled = (typeof allowUnsafeHref === 'boolean' ? !allowUnsafeHref : safeHref_1$1.getUseSafeHref()) && is === 'a' && parsedProps.href;
      if (safeHrefEnabled) {
          const { safeHref, safeRel } = safeHref_1$1.extractAnchorProps(parsedProps.href, parsedProps.rel);
          parsedProps.href = safeHref;
          parsedProps.rel = safeRel;
      }
      return react_1.default.createElement(is || 'div', parsedProps, children);
  });
  Box$1.displayName = 'Box';
  Box$1.propTypes = Object.assign({}, enhancers_1.propTypes, { is: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.elementType]), allowUnsafeHref: prop_types_1.default.bool });
  Box$1.defaultProps = {
      is: 'div',
      boxSizing: 'border-box'
  };
  box.default = Box$1;

  var splitProps$1 = {};

  Object.defineProperty(splitProps$1, "__esModule", { value: true });
  function splitProps(props, keys) {
      const matchedProps = {};
      const remainingProps = {};
      const propKeys = Object.keys(props);
      for (let i = 0; i < propKeys.length; i++) {
          const propKey = propKeys[i];
          const propValue = props[propKey];
          if (keys.includes(propKey)) {
              matchedProps[propKey] = propValue;
          }
          else {
              remainingProps[propKey] = propValue;
          }
      }
      return { matchedProps, remainingProps };
  }
  splitProps$1.default = splitProps;

  var splitBoxProps$1 = {};

  var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(splitBoxProps$1, "__esModule", { value: true });
  const index_1$1 = enhancers;
  const split_props_1$1 = __importDefault(splitProps$1);
  function splitBoxProps(props) {
      return split_props_1$1.default(props, index_1$1.propNames);
  }
  splitBoxProps$1.default = splitBoxProps;

  var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
  };
  Object.defineProperty(src, "__esModule", { value: true });
  const cache = __importStar(cache$4);
  const styles = __importStar(styles$2);
  var box_1 = box;
  var _default = src.default = box_1.default;
  var split_props_1 = splitProps$1;
  src.splitProps = split_props_1.default;
  var split_box_props_1 = splitBoxProps$1;
  src.splitBoxProps = split_box_props_1.default;
  var get_class_name_1 = getClassName$1;
  src.setClassNamePrefix = get_class_name_1.setClassNamePrefix;
  var safeHref_1 = safeHref;
  src.configureSafeHref = safeHref_1.configureSafeHref;
  var index_1 = enhancers;
  src.background = index_1.background;
  src.borderRadius = index_1.borderRadius;
  src.borders = index_1.borders;
  src.boxShadow = index_1.boxShadow;
  src.dimensions = index_1.dimensions;
  src.flex = index_1.flex;
  src.interaction = index_1.interaction;
  src.layout = index_1.layout;
  src.list = index_1.list;
  src.opacity = index_1.opacity;
  src.overflow = index_1.overflow;
  src.position = index_1.position;
  src.spacing = index_1.spacing;
  src.text = index_1.text;
  src.transform = index_1.transform;
  src.propTypes = index_1.propTypes;
  src.propNames = index_1.propNames;
  src.propAliases = index_1.propAliases;
  src.propEnhancers = index_1.propEnhancers;
  src.hydrate = cache.hydrate;
  function extractStyles() {
      const output = {
          cache: cache.entries(),
          styles: styles.getAll()
      };
      clearStyles();
      return output;
  }
  src.extractStyles = extractStyles;
  function clearStyles() {
      cache.clear();
      styles.clear();
  }
  src.clearStyles = clearStyles;

  const _excluded$B = ["fontFace", "className", "children"];
  const Box = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      fontFace,
      className,
      children
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$B);

    return /*#__PURE__*/React__default["default"].createElement(_default, _extends$e({
      ref: ref,
      className: "".concat(fontFace !== null && fontFace !== void 0 ? fontFace : "heroNew", " ").concat(className)
    }, props), children);
  });

  var aCallable$1 = aCallable$3;
  var toObject$2 = toObject$5;
  var IndexedObject = indexedObject;
  var lengthOfArrayLike$2 = lengthOfArrayLike$4;

  var $TypeError$4 = TypeError;

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$2 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable$1(callbackfn);
      var O = toObject$2(that);
      var self = IndexedObject(O);
      var length = lengthOfArrayLike$2(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw $TypeError$4('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$2(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$2(true)
  };

  var fails$b = fails$m;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$b(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var classof$3 = classofRaw$1;
  var global$5 = global$h;

  var engineIsNode = classof$3(global$5.process) == 'process';

  var $$8 = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE = engineIsNode;

  var STRICT_METHOD$1 = arrayMethodIsStrict$1('reduce');
  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  $$8({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || CHROME_BUG }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  // a string of all valid unicode whitespaces
  var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$c = functionUncurryThis;
  var requireObjectCoercible$6 = requireObjectCoercible$9;
  var toString$a = toString$c;
  var whitespaces$2 = whitespaces$3;

  var replace$3 = uncurryThis$c(''.replace);
  var whitespace = '[' + whitespaces$2 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$1 = function (TYPE) {
    return function ($this) {
      var string = toString$a(requireObjectCoercible$6($this));
      if (TYPE & 1) string = replace$3(string, ltrim, '');
      if (TYPE & 2) string = replace$3(string, rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$a = fails$m;
  var whitespaces$1 = whitespaces$3;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$a(function () {
      return !!whitespaces$1[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$7 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$7({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  function classNames(obj, className) {
    let generatedClass;

    if (Array.isArray(obj)) {
      generatedClass = obj.join(" ");
    } else {
      generatedClass = Object.entries(obj).filter(entry => entry[1]).reduce((carry, current) => carry + "".concat(carry ? " " : "").concat(current[0]), "");
    }

    return (generatedClass + (className ? " ".concat(className) : "")).trim();
  }

  const _excluded$A = ["className", "scale", "uppercase", "equalLineHeight"];

  const Text = _ref => {
    var _props$is;

    let {
      className,
      scale,
      uppercase,
      equalLineHeight
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$A);

    const is = (_props$is = props.is) !== null && _props$is !== void 0 ? _props$is : "p";
    const generatedClass = classNames({
      [scale]: scale,
      uppercase,
      "equal-line-height": equalLineHeight,
      "ui-text": true
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: is
    }, props, {
      "data-testid": "text",
      className: generatedClass
    }), props.children);
  };

  Text.propTypes = {
    is: propTypes$2.exports.oneOf(["p", "span", "small", "sub", "sup"]),
    scale: propTypes$2.exports.oneOf(["body", "subhead", "p-18", "overline", "footnote", "overline", "footnote-caps"]),
    uppercase: propTypes$2.exports.bool,
    equalLineHeight: propTypes$2.exports.bool
  };
  Text.defaultProps = {
    is: "p",
    scale: "body",
    uppercase: false,
    equalLineHeight: false
  };

  const _excluded$z = ["className", "icon", "children", "smartColor"];

  const Icon = _ref => {
    let {
      className,
      icon,
      children,
      smartColor
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$z);

    const defaultViewBox = "0 0 24 24";
    const IconComponent = icon.component;
    const generatedClassName = classNames({
      "ui-svg": true
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      viewBox: icon.viewBox || defaultViewBox,
      className: generatedClassName,
      is: "svg",
      fill: props.fill || icon.fill
    }, props), /*#__PURE__*/React__default["default"].createElement(IconComponent, _extends$e({
      smartColor: smartColor || 'currentcolor'
    }, props)));
  };
  Icon.propTypes = {
    icon: propTypes$2.exports.object.isRequired,
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    width: propTypes$2.exports.string,
    height: propTypes$2.exports.string
  };

  const ChevronFilledDownComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M7.10108 9.65718L11.7577 14.8872C11.8915 15.0376 12.1086 15.0376 12.2424 14.8872L16.8989 9.65718C17.1148 9.41466 16.962 9 16.6565 9H7.34344C7.03808 9 6.88516 9.41467 7.10108 9.65718Z",
      fill: smartColor || fill
    }));
  };

  ChevronFilledDownComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  ChevronFilledDownComponent.defaultProps = {
    fill: "#094357"
  };
  const ChevronFilledDown = {
    component: ChevronFilledDownComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const _excluded$y = ["is", "leftIcon", "dropDown", "disabled", "size", "className", "colorScheme", "responsive"];

  const Button = _ref => {
    let {
      is,
      leftIcon,
      dropDown,
      disabled,
      size,
      className,
      colorScheme,
      responsive
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$y);

    const generatedClassName = classNames({
      "ui-button": true,
      ["semantic__".concat(colorScheme)]: colorScheme,
      ["state__disabled"]: disabled,
      ["size__".concat(size)]: size,
      responsive
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: is
    }, props, {
      className: generatedClassName
    }), leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-button__left-icon",
      smartColor: "currentcolor",
      icon: leftIcon
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "ui-button__button-text"
    }, props.text || props.children), dropDown && /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-button__dropdown-icon",
      smartColor: "currentcolor",
      icon: ChevronFilledDown
    }));
  };

  Button.propTypes = {
    is: propTypes$2.exports.oneOf(["button", "a", "span", "div"]),
    colorScheme: propTypes$2.exports.oneOf(["primary", "danger", "success", "outline", "invisible"]),
    disabled: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    leftIcon: propTypes$2.exports.object,
    dropDown: propTypes$2.exports.bool,
    responsive: propTypes$2.exports.bool,
    text: propTypes$2.exports.string
  };
  Button.defaultProps = {
    is: "button",
    dropDown: false,
    leftIcon: null,
    size: "small"
  };

  const CheckComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.5303 9.53033C16.8232 9.23744 16.8232 8.76256 16.5303 8.46967C16.2374 8.17678 15.7626 8.17678 15.4697 8.46967L11 12.9393L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L10.4697 14.5303C10.6103 14.671 10.8011 14.75 11 14.75C11.1989 14.75 11.3897 14.671 11.5303 14.5303L16.5303 9.53033Z",
      fill: smartColor || fill
    }));
  };

  CheckComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  CheckComponent.defaultProps = {
    fill: "#212934"
  };
  const Check = {
    component: CheckComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const ErrorComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.89749 2.01923C7.69858 2.01923 7.50781 2.09825 7.36716 2.2389L2.23896 7.36711C2.0983 7.50776 2.01929 7.69852 2.01929 7.89744V16.1026C2.01929 16.3015 2.0983 16.4922 2.23896 16.6329L7.36716 21.7611C7.50781 21.9018 7.69858 21.9808 7.89749 21.9808H16.1026C16.3015 21.9808 16.4923 21.9018 16.6329 21.7611L21.7612 16.6329C21.9018 16.4922 21.9808 16.3015 21.9808 16.1026V7.89744C21.9808 7.69852 21.9018 7.50776 21.7612 7.36711L16.6329 2.2389C16.4923 2.09825 16.3015 2.01923 16.1026 2.01923H7.89749ZM12.7501 7.89743C12.7501 7.48322 12.4143 7.14743 12.0001 7.14743C11.5858 7.14743 11.2501 7.48322 11.2501 7.89743V13.0256C11.2501 13.4399 11.5858 13.7756 12.0001 13.7756C12.4143 13.7756 12.7501 13.4399 12.7501 13.0256V7.89743ZM13.0257 16.1026C13.0257 16.669 12.5665 17.1282 12.0001 17.1282C11.4336 17.1282 10.9744 16.669 10.9744 16.1026C10.9744 15.5361 11.4336 15.0769 12.0001 15.0769C12.5665 15.0769 13.0257 15.5361 13.0257 16.1026Z",
      fill: smartColor || fill
    }));
  };

  ErrorComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  ErrorComponent.defaultProps = {
    fill: "#212934"
  };
  const Error$1 = {
    component: ErrorComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const WarningComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.0001 2.24172C11.0768 2.24172 10.4033 2.79754 9.82709 3.52159C9.26349 4.22979 8.66372 5.26581 7.92199 6.54703L7.88928 6.60352L3.82707 13.6201L3.79433 13.6766L3.79432 13.6766C3.04978 14.9626 2.44788 16.0022 2.11333 16.8461C1.77141 17.7086 1.62431 18.5718 2.08656 19.3736C2.5488 20.1753 3.36953 20.4805 4.28727 20.6167C5.18526 20.75 6.38653 20.75 7.8725 20.75H7.93784H16.0623H16.1276C17.6136 20.75 18.8148 20.75 19.7128 20.6167C20.6306 20.4805 21.4513 20.1753 21.9136 19.3736C22.3758 18.5718 22.2287 17.7086 21.8868 16.8461C21.5522 16.0022 20.9504 14.9627 20.2059 13.6767L20.2058 13.6766L20.173 13.6201L16.1108 6.60353L16.0781 6.54702C15.3364 5.2658 14.7366 4.22979 14.173 3.52159C13.5968 2.79755 12.9233 2.24172 12.0001 2.24172ZM12.75 9.00002C12.75 8.58581 12.4143 8.25002 12 8.25002C11.5858 8.25002 11.25 8.58581 11.25 9.00002V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4143 13.75 12.75 13.4142 12.75 13V9.00002ZM13.0001 16C13.0001 16.5523 12.5523 17 12.0001 17C11.4478 17 11.0001 16.5523 11.0001 16C11.0001 15.4477 11.4478 15 12.0001 15C12.5523 15 13.0001 15.4477 13.0001 16Z",
      fill: smartColor || fill
    }));
  };

  WarningComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  WarningComponent.defaultProps = {
    fill: "#212934"
  };
  const Warning = {
    component: WarningComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const InfoComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.6667 8.00065C14.6667 11.6825 11.6819 14.6673 8.00004 14.6673C4.31814 14.6673 1.33337 11.6825 1.33337 8.00065C1.33337 4.31875 4.31814 1.33398 8.00004 1.33398C11.6819 1.33398 14.6667 4.31875 14.6667 8.00065ZM8.00004 6.58398C8.41425 6.58398 8.75004 6.91977 8.75004 7.33398V10.6673C8.75004 11.0815 8.41425 11.4173 8.00004 11.4173C7.58583 11.4173 7.25004 11.0815 7.25004 10.6673V7.33398C7.25004 6.91977 7.58583 6.58398 8.00004 6.58398ZM8.00004 6.00065C8.36823 6.00065 8.66671 5.70217 8.66671 5.33398C8.66671 4.96579 8.36823 4.66732 8.00004 4.66732C7.63185 4.66732 7.33337 4.96579 7.33337 5.33398C7.33337 5.70217 7.63185 6.00065 8.00004 6.00065Z",
      fill: smartColor || fill
    }));
  };

  InfoComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  InfoComponent.defaultProps = {
    fill: "#212934"
  };
  const Info = {
    component: InfoComponent,
    viewBox: "0 0 16 16",
    fill: "none"
  };

  const CloseComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M6 6L18 18M6 18L18 6L6 18Z",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  CloseComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  CloseComponent.defaultProps = {
    stroke: "black",
    strokeLineCap: "round",
    strokeLineJoin: "round",
    strokeWidth: "1.5"
  };
  const Close = {
    component: CloseComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const _excluded$x = ["className", "equalLineHeight", "scale", "uppercase"];

  const Heading = _ref => {
    var _props$is;

    let {
      className,
      equalLineHeight,
      scale,
      uppercase
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$x);

    const is = (_props$is = props.is) !== null && _props$is !== void 0 ? _props$is : "h2";
    const generatedClass = classNames({
      [scale]: scale,
      [is]: is,
      uppercase,
      "ui-heading": true,
      "equal-line-height": equalLineHeight
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: is
    }, props, {
      "data-testid": "heading",
      className: generatedClass
    }), props.children);
  };

  Heading.propTypes = {
    is: propTypes$2.exports.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    scale: propTypes$2.exports.oneOf(["subtitle-1", "subtitle-2", "subhead"]),
    uppercase: propTypes$2.exports.bool,
    equalLineHeight: propTypes$2.exports.bool
  };
  Heading.defaultProps = {
    is: "h2",
    scale: null,
    uppercase: false,
    equalLineHeight: false
  };

  const _excluded$w = ["message", "description", "colorScheme", "theme", "button", "buttonAction", "onAction", "className", "closable"];

  const Alert = _ref => {
    let {
      message,
      description,
      colorScheme,
      theme,
      button,
      buttonAction,
      onAction,
      className,
      closable
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$w);

    const [showAlert, setShowAlert] = React$1.useState(true);
    const generateAlertClassName = classNames({
      ["theme__".concat(theme)]: true,
      ["color-scheme__".concat(colorScheme)]: true,
      "ui-alert": true,
      "is-toast": closable
    }, className);
    const schemeIcons = {
      info: Info,
      warning: Warning,
      error: Error$1,
      success: Check
    };

    const remove = () => {
      setShowAlert(false);
    };

    return showAlert ? /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateAlertClassName
    }, props), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-alert__content-wrapper"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-alert__content"
    }, colorScheme !== "default" && /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-alert__header-icon",
      icon: schemeIcons[colorScheme],
      smartcolor: "currentcolor"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-alert__text"
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-alert__header"
    }, /*#__PURE__*/React__default["default"].createElement(Heading, {
      scale: "subtitle-2",
      className: "ui-alert__header-text"
    }, message)), description && theme !== "inline" && /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: "subhead",
      className: "ui-alert__body"
    }, description), button && theme !== "inline" && /*#__PURE__*/React__default["default"].createElement(Button, _extends$e({
      className: "ui-alert__call-to-action"
    }, button))))), closable && theme !== "inline" && /*#__PURE__*/React__default["default"].createElement(Icon, {
      smartcolor: "currentcolor",
      className: "ui-alert__close-icon",
      icon: Close,
      onClick: props.onClick || remove
    })) : /*#__PURE__*/React__default["default"].createElement("div", null);
  };
  Alert.propTypes = {
    message: propTypes$2.exports.string.isRequired,
    description: propTypes$2.exports.string,
    colorScheme: propTypes$2.exports.oneOf(["default", "info", "warning", "error", "success"]).isRequired,
    theme: propTypes$2.exports.oneOf(["flat", "filled", "inline"]).isRequired,
    button: propTypes$2.exports.object,
    action: propTypes$2.exports.func,
    closable: propTypes$2.exports.bool
  };
  Alert.defaultProps = {
    message: "This is a simple message",
    colorScheme: "default",
    theme: "flat",
    closable: false
  };

  var anObject$4 = anObject$a;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$4(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$9 = fails$m;
  var global$4 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$4.RegExp;

  var UNSUPPORTED_Y$2 = fails$9(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$9(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$9(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  var fails$8 = fails$m;
  var global$3 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$3.RegExp;

  var regexpUnsupportedDotAll = fails$8(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$7 = fails$m;
  var global$2 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$2.RegExp;

  var regexpUnsupportedNcg = fails$7(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$4 = functionCall;
  var uncurryThis$b = functionUncurryThis;
  var toString$9 = toString$c;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = shared$4.exports;
  var create = objectCreate$1;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$b(''.charAt);
  var indexOf = uncurryThis$b(''.indexOf);
  var replace$2 = uncurryThis$b(''.replace);
  var stringSlice$5 = uncurryThis$b(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$4(nativeExec, re1, 'a');
    call$4(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$9(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$4(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$4(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$5(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$5(match.input, charsAdded);
          match[0] = stringSlice$5(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$4(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$3 = patchedExec;

  var $$6 = _export;
  var exec$2 = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$6({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
    exec: exec$2
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$3 = FunctionPrototype.call;

  // eslint-disable-next-line es-x/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$2) : function () {
    return call$3.apply(apply$2, arguments);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$a = functionUncurryThis;
  var defineBuiltIn = defineBuiltIn$4;
  var regexpExec$2 = regexpExec$3;
  var fails$6 = fails$m;
  var wellKnownSymbol$4 = wellKnownSymbol$d;
  var createNonEnumerableProperty = createNonEnumerableProperty$5;

  var SPECIES$1 = wellKnownSymbol$4('species');
  var RegExpPrototype = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$4(KEY);

    var DELEGATES_TO_SYMBOL = !fails$6(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$6(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$a(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$a(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  };

  var isObject$3 = isObject$a;
  var classof$2 = classofRaw$1;
  var wellKnownSymbol$3 = wellKnownSymbol$d;

  var MATCH$1 = wellKnownSymbol$3('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
  };

  var uncurryThis$9 = functionUncurryThis;
  var fails$5 = fails$m;
  var isCallable$2 = isCallable$j;
  var classof$1 = classof$5;
  var getBuiltIn = getBuiltIn$5;
  var inspectSource = inspectSource$3;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$9(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$2(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$2(argument)) return false;
    switch (classof$1(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$1 = !construct || fails$5(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor = isConstructor$1;
  var tryToString$1 = tryToString$3;

  var $TypeError$3 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError$3(tryToString$1(argument) + ' is not a constructor');
  };

  var anObject$3 = anObject$a;
  var aConstructor = aConstructor$1;
  var wellKnownSymbol$2 = wellKnownSymbol$d;

  var SPECIES = wellKnownSymbol$2('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$3(O).constructor;
    var S;
    return C === undefined || (S = anObject$3(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
  };

  var uncurryThis$8 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$8 = toString$c;
  var requireObjectCoercible$5 = requireObjectCoercible$9;

  var charAt$3 = uncurryThis$8(''.charAt);
  var charCodeAt = uncurryThis$8(''.charCodeAt);
  var stringSlice$4 = uncurryThis$8(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$8(requireObjectCoercible$5($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$4(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$4;

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var toAbsoluteIndex = toAbsoluteIndex$2;
  var lengthOfArrayLike$1 = lengthOfArrayLike$4;
  var createProperty = createProperty$1;

  var $Array = Array;
  var max$1 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$1(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  };

  var call$2 = functionCall;
  var anObject$2 = anObject$a;
  var isCallable$1 = isCallable$j;
  var classof = classofRaw$1;
  var regexpExec$1 = regexpExec$3;

  var $TypeError$2 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$1(exec)) {
      var result = call$2(exec, R, S);
      if (result !== null) anObject$2(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$2(regexpExec$1, R, S);
    throw $TypeError$2('RegExp#exec called on incompatible receiver');
  };

  var apply$1 = functionApply;
  var call$1 = functionCall;
  var uncurryThis$7 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var isRegExp$1 = isRegexp;
  var anObject$1 = anObject$a;
  var requireObjectCoercible$4 = requireObjectCoercible$9;
  var speciesConstructor = speciesConstructor$1;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var toLength$3 = toLength$5;
  var toString$7 = toString$c;
  var getMethod$1 = getMethod$3;
  var arraySlice$1 = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers = regexpStickyHelpers;
  var fails$4 = fails$m;

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$3 = Math.min;
  var $push = [].push;
  var exec = uncurryThis$7(/./.exec);
  var push$2 = uncurryThis$7($push);
  var stringSlice$3 = uncurryThis$7(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$4(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString$7(requireObjectCoercible$4(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp$1(separator)) {
          return call$1(nativeSplit, string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = call$1(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            push$2(output, stringSlice$3(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice$1(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !exec(separatorCopy, '')) push$2(output, '');
        } else push$2(output, stringSlice$3(string, lastLastIndex));
        return output.length > lim ? arraySlice$1(output, 0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$1(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$4(this);
        var splitter = separator == undefined ? undefined : getMethod$1(separator, SPLIT);
        return splitter
          ? call$1(splitter, separator, O, limit)
          : call$1(internalSplit, toString$7(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject$1(this);
        var S = toString$7(string);
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

        if (res.done) return res.value;

        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (UNSUPPORTED_Y ? 'g' : 'y');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$3(S, q) : S);
          var e;
          if (
            z === null ||
            (e = min$3(toLength$3(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            push$2(A, stringSlice$3(S, p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              push$2(A, z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        push$2(A, stringSlice$3(S, p));
        return A;
      }
    ];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var uncurryThis$6 = functionUncurryThis;
  var toObject$1 = toObject$5;

  var floor$1 = Math.floor;
  var charAt$1 = uncurryThis$6(''.charAt);
  var replace$1 = uncurryThis$6(''.replace);
  var stringSlice$2 = uncurryThis$6(''.slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$1(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$2(str, 0, position);
        case "'": return stringSlice$2(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$2(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var apply = functionApply;
  var call = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$3 = fails$m;
  var anObject = anObject$a;
  var isCallable = isCallable$j;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength$2 = toLength$5;
  var toString$6 = toString$c;
  var requireObjectCoercible$3 = requireObjectCoercible$9;
  var advanceStringIndex = advanceStringIndex$2;
  var getMethod = getMethod$3;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol$1 = wellKnownSymbol$d;

  var REPLACE = wellKnownSymbol$1('replace');
  var max = Math.max;
  var min$2 = Math.min;
  var concat = uncurryThis$5([].concat);
  var push$1 = uncurryThis$5([].push);
  var stringIndexOf$1 = uncurryThis$5(''.indexOf);
  var stringSlice$1 = uncurryThis$5(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$3(this);
        var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString$6(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString$6(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf$1(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString$6(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          push$1(results, result);
          if (!global) break;

          var matchStr = toString$6(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$2(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$6(result[0]);
          var position = max(min$2(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
            var replacement = toString$6(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice$1(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  const getInitials = function getInitials(name) {
    let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "?";
    if (!name || typeof name !== "string") return fallback;
    return name.replace(/\s+/, " ").split(" ").slice(0, 3).map(firstLetter => firstLetter && firstLetter[0]).join("");
  };

  function keyGen() {
    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    return result;
  }

  const _excluded$v = ["avatar", "subtle", "dropdown", "size", "visibleAvatars", "stacked", "avatars", "className"];
  const colorSchemes = ["cyan", "green", "orange", "red", "gray", "blue"];

  const generateAvatarColorScheme = (avatar, index) => {
    return avatar.colorScheme || (index < colorSchemes.length ? colorSchemes[index] : colorSchemes[index % colorSchemes.length]);
  };

  const generateAvatarClassName = function generateAvatarClassName(avatar) {
    let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return classNames({
      ["background__".concat(generateAvatarColorScheme(avatar, index))]: !avatar.imgURL,
      ["status__".concat(avatar.status)]: avatar.status
    }, "ui-avatar");
  };

  const Avatar = _ref => {
    let {
      avatar,
      subtle,
      dropdown,
      size,
      visibleAvatars,
      stacked,
      avatars,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$v);

    const wrapperClassName = classNames({
      "ui-avatars__wrapper": true,
      subtle,
      ["size__".concat(size)]: true,
      padded: avatars.length & !stacked,
      stacked: avatars.length && stacked
    }, className);
    const extraAvatars = avatars && avatars.length ? avatars.length - visibleAvatars : 0;

    const avatarFactory = function avatarFactory(avatar) {
      let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
        style: _objectSpread2({}, avatar.imgURL ? {
          backgroundImage: "url(".concat(avatar.imgURL, ")")
        } : {}),
        className: generateAvatarClassName(avatar, index)
      }, !avatar.imgURL && /*#__PURE__*/React__default["default"].createElement(Text, {
        equalLineHeight: true,
        scale: size === "small" ? "overline" : "footnote"
      }, getInitials(avatar.name)), avatar.status && !stacked && /*#__PURE__*/React__default["default"].createElement("div", {
        className: "ui-avatar__avatar-status"
      })), dropdown && !stacked && /*#__PURE__*/React__default["default"].createElement(Icon, {
        className: "ui-avatar__dropdown-icon",
        icon: ChevronFilledDown
      }));
    };

    const generatedAvatars = avatars.length ? avatars.slice(0, visibleAvatars).map((avatar, index) => /*#__PURE__*/React__default["default"].createElement("div", {
      key: "ui-avatar__".concat(keyGen()),
      className: "ui-avatar__wrapper"
    }, avatarFactory(avatar, index))) : /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-avatar__wrapper"
    }, avatarFactory(avatar));
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "div",
      className: wrapperClassName
    }, props), generatedAvatars, extraAvatars > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-avatar__wrapper"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-avatar background__extra"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: size === "small" ? "overline" : "footnote"
    }, "+", extraAvatars))));
  };

  Avatar.propTypes = {
    subtle: propTypes$2.exports.bool,
    stacked: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large"]),
    avatar: propTypes$2.exports.object,
    avatars: propTypes$2.exports.array,
    dropdown: propTypes$2.exports.bool,
    visibleAvatars: propTypes$2.exports.number
  };
  Avatar.defaultProps = {
    subtle: false,
    stacked: false,
    size: "large",
    avatar: {
      name: "Eric Aprioku"
    },
    dropdown: false,
    visibleAvatars: 6,
    avatars: []
  };

  const _excluded$u = ["children", "colorScheme", "className", "subtle", "size"];

  const Badge = _ref => {
    let {
      children,
      colorScheme,
      className,
      subtle,
      size
    } = _ref;
        _objectWithoutProperties$b(_ref, _excluded$u);

    const generatedClassName = classNames({
      ["color-scheme__".concat(colorScheme)]: true,
      subtle,
      ["size__".concat(size)]: true,
      "ui-badge": true
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: generatedClassName
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      equalLineHeight: true,
      className: "ui-badge__text",
      scale: size === "large" ? "footnote" : "overline"
    }, children));
  };
  Badge.propTypes = {
    colorScheme: propTypes$2.exports.oneOf(["neutral", "green", "red", "yellow", "cyan", "blue"]).isRequired,
    subtle: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large"]).isRequired
  };
  Badge.defaultProps = {
    colorScheme: "neutral",
    subtle: false,
    size: "small"
  };

  const Banner = _ref => {
    let {
      onClick,
      colorScheme,
      title,
      description,
      removable
    } = _ref;
    const [visible, setVisible] = React$1.useState(true);
    const schemeIcons = {
      info: Info,
      warning: Warning,
      error: Error$1,
      success: Check
    };

    const remove = () => {
      if (onClick && typeof onClick === "function") {
        onClick();
      }

      setVisible(false);
    };

    return visible ? /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "color-scheme__".concat(colorScheme, " ui-banner")
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "text-content"
    }, colorScheme !== "default" && /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-banner-icon",
      icon: schemeIcons[colorScheme]
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: "subhead",
      className: "ui-banner__title text-gray-700",
      "font-face": "circularSTD"
    }, title), /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: "subhead",
      className: "ui-banner__description text-gray-600",
      "font-face": "circularSTD"
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      dangerouslySetInnerHTML: {
        __html: description
      }
    }))), removable && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Close,
      onClick: remove,
      className: "ui-banner_close-icon",
      "smart-color": "currentcolor"
    })) : /*#__PURE__*/React__default["default"].createElement("div", null);
  };
  Banner.defaultProps = {
    colorScheme: "default"
  };
  Banner.propTypes = {
    title: propTypes$2.exports.string,
    description: propTypes$2.exports.string,
    colorScheme: propTypes$2.exports.oneOf(["default", "info", "warning", "error", "success"]),
    removable: propTypes$2.exports.bool,
    onClick: propTypes$2.exports.func
  };

  const _excluded$t = ["className", "ringed", "alignToTop", "label"];

  const Radio = _ref => {
    let {
      className,
      ringed,
      alignToTop,
      label
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$t);

    const generateRadioClassName = classNames({
      ringed,
      "ui-radio__wrapper": true,
      alignToTop
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label",
      className: generateRadioClassName
    }, /*#__PURE__*/React__default["default"].createElement("input", _extends$e({
      className: "ui-radio",
      type: "radio"
    }, props)), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-radio__label-text"
    }, label));
  };
  Radio.defaultProps = {
    ringed: false,
    alignToTop: false
  };
  Radio.propTypes = {
    ringed: propTypes$2.exports.bool,
    alignToTop: propTypes$2.exports.bool
  };

  const _excluded$s = ["label", "alignToTop", "dashed", "className"];

  const Checkbox = _ref => {
    let {
      label,
      alignToTop,
      dashed,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$s);

    const checkboxClassName = classNames({
      "ui-checkbox__wrapper": true,
      alignToTop,
      dashed
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label",
      className: checkboxClassName
    }, /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "input",
      className: "ui-checkbox",
      type: "checkbox"
    }, props)), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-checkbox__label-text"
    }, label));
  };
  Checkbox.defaultProps = {
    alignToTop: false,
    disabled: false,
    dashed: false
  };
  Checkbox.propTypes = {
    disabled: propTypes$2.exports.bool,
    alignToTop: propTypes$2.exports.bool,
    dashed: propTypes$2.exports.bool
  };

  const _excluded$r = ["fill", "stroke", "smartColor", "strokeWidth", "strokeLineCap", "strokeLineJoin"];

  const CardComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin
    } = _ref;
        _objectWithoutProperties$b(_ref, _excluded$r);

    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M21 12.7707V15.9881C21 16.5216 20.7893 17.0333 20.4143 17.4106C20.0392 17.7879 19.5306 18 19.0001 18H4.99995C4.46951 18 3.96087 17.7879 3.5858 17.4106C3.21073 17.0333 3.00006 16.5216 3.00006 15.9881V7.01176C3.00006 6.47819 3.21073 5.96653 3.5858 5.58924C3.96087 5.21195 4.46951 5.00003 4.99995 5.00003H19.0001C19.5306 5.00003 20.0392 5.21195 20.4143 5.58924C20.7893 5.96653 21 6.47819 21 7.01176V9.84096",
      fill: fill || 'white'
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M21 12.7707V15.9881C21 16.5216 20.7893 17.0333 20.4143 17.4106C20.0392 17.7879 19.5306 18 19.0001 18H4.99995C4.46951 18 3.96087 17.7879 3.5858 17.4106C3.21073 17.0333 3.00006 16.5216 3.00006 15.9881V7.01176C3.00006 6.47819 3.21073 5.96653 3.5858 5.58924C3.96087 5.21195 4.46951 5.00003 4.99995 5.00003H19.0001C19.5306 5.00003 20.0392 5.21195 20.4143 5.58924C20.7893 5.96653 21 6.47819 21 7.01176V9.84096",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M3 9.83994H20.999",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M6.67441 13.9935H10.7178",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  CardComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  CardComponent.defaultProps = {
    fill: "#fff",
    smartColor: "#8895A7",
    strokeWidth: "1.5",
    strokeLineCap: "round",
    strokeLineJoin: "round"
  };
  const Card$1 = {
    component: CardComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const _excluded$q = ["is", "title", "desc", "children", "radio", "checkbox", "icon", "select", "className"];

  const Card = _ref => {
    let {
      is,
      title,
      desc,
      children,
      radio,
      checkbox,
      icon,
      select,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$q);

    const [selected, setSelected] = React$1.useState(select);
    const generatedClassName = classNames({
      "ui-card": true,
      ["state__selected"]: selected
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label",
      className: generatedClassName
    }, radio && /*#__PURE__*/React__default["default"].createElement(Radio, _extends$e({
      is: "input",
      className: "ui-radio ui-card__form-selector",
      type: "radio",
      onClick: e => {
        setSelected(() => e.target.checked);
      }
    }, props)) || checkbox && /*#__PURE__*/React__default["default"].createElement(Checkbox, _extends$e({
      is: "input",
      className: "ui-checkbox ui-card__form-selector",
      type: "checkbox",
      onClick: e => {
        setSelected(() => e.target.checked);
      }
    }, props)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-card__content"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-card__title"
    }, title), (desc || children) && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-card__card-text"
    }, desc || children)), icon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-card__icon",
      icon: Card$1
    }));
  };

  Card.propTypes = {
    title: propTypes$2.exports.string,
    icon: propTypes$2.exports.bool,
    selected: propTypes$2.exports.bool,
    radio: propTypes$2.exports.bool,
    checkbox: propTypes$2.exports.bool
  };
  Card.defaultProps = {
    title: "Title",
    icon: false,
    selected: false,
    radio: false,
    checkbox: false // icon: ChevronFilledDown

  };

  var global$1 = global$h;
  var fails$2 = fails$m;
  var uncurryThis$4 = functionUncurryThis;
  var toString$5 = toString$c;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$3;

  var charAt = uncurryThis$4(''.charAt);
  var n$ParseFloat = global$1.parseFloat;
  var Symbol$2 = global$1.Symbol;
  var ITERATOR = Symbol$2 && Symbol$2.iterator;
  var FORCED$1 = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR && !fails$2(function () { n$ParseFloat(Object(ITERATOR)); }));

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$1 ? function parseFloat(string) {
    var trimmedString = trim(toString$5(string));
    var result = n$ParseFloat(trimmedString);
    return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
  } : n$ParseFloat;

  var $$5 = _export;
  var $parseFloat = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$5({ global: true, forced: parseFloat != $parseFloat }, {
    parseFloat: $parseFloat
  });

  const ScanCardComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 7.66667C5 6.19391 6.19391 5 7.66667 5H25.4444C26.9172 5 28.1111 6.19391 28.1111 7.66667V18.3333C28.1111 19.8061 26.9172 21 25.4444 21H7.66667C6.19391 21 5 19.8061 5 18.3333V7.66667ZM7.66667 6.77778C7.17575 6.77778 6.77778 7.17575 6.77778 7.66667V18.3333C6.77778 18.8243 7.17575 19.2222 7.66667 19.2222H25.4444C25.9354 19.2222 26.3333 18.8243 26.3333 18.3333V7.66667C26.3333 7.17575 25.9354 6.77778 25.4444 6.77778H7.66667Z",
      fill: smartColor || fill
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27.6667 11.4457H5.66675V9.66797H27.6667V11.4457Z",
      fill: smartColor || fill
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.2222 16.5569C19.2222 16.0659 19.6201 15.668 20.1111 15.668H23.6666C24.1575 15.668 24.5555 16.0659 24.5555 16.5569C24.5555 17.0478 24.1575 17.4457 23.6666 17.4457H20.1111C19.6201 17.4457 19.2222 17.0478 19.2222 16.5569Z",
      fill: smartColor || fill
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M5 1H1V5",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M5 25H1V21",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M28 1H32V5",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M28 25H32V21",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  ScanCardComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  ScanCardComponent.defaultProps = {
    fill: "#B8C4CE",
    stroke: "#B8C4CE",
    strokeWidth: "2",
    strokeLineCap: "round",
    strokeLineJoin: "round"
  };
  const ScanCard = {
    component: ScanCardComponent,
    viewBox: "0 0 33 26",
    fill: "none"
  };

  const brands = [{
    brand: "American Xpress",
    src: "https://assets.deposits.com/img/card-brands/amexcard.svg"
  }, {
    brand: "Discover",
    src: "https://assets.deposits.com/img/card-brands/discovercard.svg"
  }, {
    brand: "Mastercard",
    src: "https://assets.deposits.com/img/card-brands/mastercard.svg"
  }, {
    brand: "Visacard",
    src: "https://assets.deposits.com/img/card-brands/visacard.svg"
  }];
  const BRAND_ALIAS = {
    AMEX: 0,
    DISCOVER: 1,
    MASTERCARD: 2,
    VISACARD: 3,
    NOCARD: -1
  };

  const _excluded$p = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className"];

  const CardInputField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$p);

    const [selectedCard, setSelectedCard] = React$1.useState(-1);
    const [cardNo, setCardNo] = React$1.useState(""); // const [cardNoIsFocused, setCardNoIsFocused] = useState(false);

    const [cardNoDisplay, setCardNoDisplay] = React$1.useState("");
    const [cardExp, setCardExp] = React$1.useState("");
    const [cardCVV, setCardCVV] = React$1.useState("");
    const [targetPosition, setTargetPosition] = React$1.useState(null);
    const pseudoInput = React$1.useRef();
    const cardNoInput = React$1.useRef();
    const cardCVCInput = React$1.useRef();
    const cardExpInput = React$1.useRef();

    const handleCardNoFocus = () => {
      pseudoInput.current.classList.add("focus"); // setCardNoIsFocused(true);

      setCardNoDisplay(cardNo);
    };

    const allowOnlyNumbers = e => {
      const isNumber = isFinite(parseFloat(e.key));
      const value = e.key;

      if (!isNumber && value !== "Delete" && value !== "Backspace") {
        e.preventDefault();
        return;
      }
    };

    const handleCardNoBlur = e => {
      e.preventDefault(); // setCardNoIsFocused(false);

      pseudoInput.current.classList.remove("focus");
      const strippedCardNo = cardNo.replace(/\s/g, "");

      if (selectedCard === BRAND_ALIAS.AMEX) {
        if (strippedCardNo.length === 15) {
          setCardNoDisplay("**** ".concat(cardNo.substring(cardNo.length - 4)));
        }
      } else {
        if (strippedCardNo.length === 16) {
          setCardNoDisplay("**** ".concat(cardNo.substring(cardNo.length - 4)));
        }
      }
    };

    const handleExpFocus = () => {
      pseudoInput.current.classList.add("focus");
    };

    const handleExpBlur = () => {
      pseudoInput.current.classList.remove("focus");
    };

    const handleCVVFocus = () => {
      pseudoInput.current.classList.add("focus");
    };

    const handleCVVBlur = () => {
      pseudoInput.current.classList.remove("focus");
    };

    const handleCardNoChange = e => {
      setTimeout(() => {
        if (targetPosition !== null) {
          const position = targetPosition !== null ? targetPosition.key === "Backspace" ? targetPosition.pos - 1 : targetPosition.pos : cardNo.length;
          cardNoInput.current.selectionStart = targetPosition !== null ? position : cardNo.length;
          cardNoInput.current.selectionEnd = targetPosition !== null ? position : cardNo.length;
          setTargetPosition(null);
        }
      });
    };

    const handleCardNoKeyDown = e => {
      if (e.key === "Backspace" || e.key === "Delete") {
        if (cardNoDisplay.length !== e.target.selectionStart) {
          setTargetPosition({
            pos: e.target.selectionStart,
            key: e.key
          });
        }
      }
    };

    const handleCardNoKeyPress = e => {
      allowOnlyNumbers(e);
      const strippedCardNo = cardNo.replace(/\s/g, "");
      console.log(e.key);

      if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowDown" && e.key !== "ArrowRight") {
        if (selectedCard === BRAND_ALIAS.AMEX) {
          if (strippedCardNo.length === 15) {
            e.preventDefault();
            cardNoInput.current.blur();
            cardExpInput.current.focus();
            return;
          }
        } else {
          if (strippedCardNo.length === 16) {
            e.preventDefault();
            cardNoInput.current.blur();
            cardExpInput.current.focus();
            return;
          }
        }
      }
    };

    const handleCardNoInput = e => {
      const value = e.target.value.replace(/\s/g, "");

      function parse(type) {
        switch (type) {
          case BRAND_ALIAS.AMEX:
            cardNoInput.current.setAttribute("maxlength", 17);
            cardCVCInput.current.setAttribute("maxlength", 4);
            break;

          default:
            cardNoInput.current.setAttribute("maxlength", 19);
            cardCVCInput.current.setAttribute("maxlength", 3);
            break;
        }

        let pseudoValue = "";

        for (let i = 0; i < value.length; i++) {
          pseudoValue += value.charAt(i);
          let strippedPseudoValue = pseudoValue.replace(/\s/g, "");

          if (type === BRAND_ALIAS.AMEX) {
            if (strippedPseudoValue.length === 4) {
              pseudoValue += " ";
            }

            if (strippedPseudoValue.length === 10) {
              pseudoValue += " ";
            }
          } else {
            if (strippedPseudoValue.length % 4 === 0) {
              pseudoValue += " ";
            }
          }
        } // alert(pseudoValue.trim())


        return pseudoValue.trim();
      }

      switch (value.charAt(0)) {
        case "5":
          setSelectedCard(BRAND_ALIAS.MASTERCARD);
          setCardNo(parse(BRAND_ALIAS.MASTERCARD));
          setCardNoDisplay(parse(BRAND_ALIAS.MASTERCARD));
          break;

        case "3":
          if (value.length >= 2) {
            if (value.charAt(1) === "4" || value.charAt(1) === "7") {
              setSelectedCard(BRAND_ALIAS.AMEX);
            } else {
              setSelectedCard(BRAND_ALIAS.NOCARD);
            }
          } else {
            setSelectedCard(BRAND_ALIAS.AMEX);
          }

          setCardNo(parse(BRAND_ALIAS.AMEX));
          setCardNoDisplay(parse(BRAND_ALIAS.AMEX));
          break;

        case "6":
          setSelectedCard(BRAND_ALIAS.DISCOVER);
          setCardNo(parse(BRAND_ALIAS.DISCOVER));
          setCardNoDisplay(parse(BRAND_ALIAS.DISCOVER));
          break;

        case "4":
          setSelectedCard(BRAND_ALIAS.VISACARD);
          setCardNo(parse(BRAND_ALIAS.VISACARD));
          setCardNoDisplay(parse(BRAND_ALIAS.VISACARD));
          break;

        default:
          setSelectedCard(BRAND_ALIAS.NOCARD);
          setCardNo(parse(null));
          setCardNoDisplay(parse(null));
      }
    };

    const handleCardExpInput = e => {
      setCardExp(e.target.value);
      const value = e.target.value;

      if (value.length === 2) {
        if (value > 12 || !isFinite(value)) {
          e.preventDefault();
          return;
        } else {
          setCardExp("".concat(value, "/"));
          return;
        }
      }

      if (value.length === 3) {
        if (value.charAt(2) !== "/" || value.substring(0, 2) > 12) {
          e.preventDefault();
          setCardExp(e.target.value.substring(0, 2));
          return;
        }
      }

      if (value.length === 1 && value === "/") setCardExp("");

      if (value.length === 5) {
        e.preventDefault();
        cardCVCInput.current.focus();
        return;
      }
    };

    const generateInputFieldClasses = classNames({
      "ui-card-input-field__card-no": true,
      "has-error": errorMessage,
      "has-left-icon": true,
      "has-right-icon": true
    }, inputClassName);
    const wrapperClasses = classNames(["size__".concat(size), "ui-card-input-field__wrapper"], className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-card-input-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input-field__input-wrapper"
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      ref: pseudoInput,
      className: "ui-card-input-field__pseudo-input"
    }, selectedCard === -1 ? /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Card$1,
      smartColor: "#0C9CCC",
      className: "ui-card-input-field__left-icon"
    }) : /*#__PURE__*/React__default["default"].createElement("img", {
      src: brands[selectedCard].src,
      alt: brands[selectedCard].brand,
      className: "ui-card-input-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input-field__inputs"
    }, /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateInputFieldClasses,
      is: "input",
      placeholder: "0000 0000 0000 0000",
      maxLength: "19"
    }, props, {
      onFocus: handleCardNoFocus,
      onBlur: handleCardNoBlur,
      onKeyPress: handleCardNoKeyPress,
      onKeyDown: handleCardNoKeyDown,
      onChange: handleCardNoChange,
      onInput: handleCardNoInput,
      value: cardNoDisplay,
      ref: cardNoInput
    })), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input__pushed-right"
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input-field__exp",
      is: "input",
      placeholder: "MM/YY",
      maxLength: "5",
      onFocus: handleExpFocus,
      onBlur: handleExpBlur,
      onInput: handleCardExpInput,
      onKeyPress: allowOnlyNumbers,
      value: cardExp,
      ref: cardExpInput
    }), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input-field__cvv",
      is: "input",
      maxLength: "3",
      placeholder: "CVV",
      onFocus: handleCVVFocus,
      onBlur: handleCVVBlur,
      onKeyPress: allowOnlyNumbers,
      value: cardCVV,
      ref: cardCVCInput,
      onChange: e => setCardCVV(e.target.value)
    }), /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: ScanCard,
      smartColor: "#B8C4CE",
      className: "ui-card-input-field__right-icon"
    }))))), errorMessage && /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-card-input-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-card-input-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-card-input-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  CardInputField.propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    errorMessage: propTypes$2.exports.string
  };
  CardInputField.defaultProps = {
    size: "medium"
  };

  const CalendarComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M18.5319 5.81287H19.3671C19.7618 5.81287 20.1401 5.96985 20.4191 6.2489C20.6982 6.52796 20.8549 6.90626 20.8549 7.3009V19.3009C20.8549 19.6955 20.6982 20.0741 20.4191 20.3531C20.1401 20.6322 19.7618 20.7889 19.3671 20.7889H4.48796C4.09332 20.7889 3.71477 20.6322 3.43571 20.3531C3.15666 20.0741 2.99992 19.6955 2.99992 19.3009V7.3009C2.99992 6.90626 3.15666 6.52796 3.43571 6.2489C3.71477 5.96985 4.09332 5.81287 4.48796 5.81287H15.4191",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.736 4L15.739 7.735",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M8.12 4L8.117 7.735",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M8.117 12.244V12.221",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M8.117 16.114V16.091",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M11.939 12.244L11.916 12.221",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M11.939 16.114L11.916 16.091",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.739 12.244V12.221",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15.739 16.114V16.091",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  CalendarComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  CalendarComponent.defaultProps = {
    strokeWidth: "1.5",
    strokeLineCap: "round",
    strokeLineJoin: "round"
  };
  const Calendar$1 = {
    component: CalendarComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  var entry_nostyle = {};

  var DatePicker = {};

  // As defined on the list of supported events: https://reactjs.org/docs/events.html
  var clipboardEvents = ['onCopy', 'onCut', 'onPaste'];
  var compositionEvents = ['onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate'];
  var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp'];
  var focusEvents = ['onFocus', 'onBlur'];
  var formEvents = ['onChange', 'onInput', 'onInvalid', 'onReset', 'onSubmit'];
  var genericEvents = ['onError', 'onLoad'];
  var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'];
  var pointerEvents = ['onPointerDown', 'onPointerMove', 'onPointerUp', 'onPointerCancel', 'onGotPointerCapture', 'onLostPointerCapture', 'onPointerEnter', 'onPointerLeave', 'onPointerOver', 'onPointerOut'];
  var selectionEvents = ['onSelect'];
  var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
  var uiEvents = ['onScroll'];
  var wheelEvents = ['onWheel'];
  var mediaEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];
  var imageEvents = ['onLoad', 'onError'];
  var animationEvents = ['onAnimationStart', 'onAnimationEnd', 'onAnimationIteration'];
  var transitionEvents = ['onTransitionEnd'];
  var otherEvents = ['onToggle'];
  var allEvents = [].concat(clipboardEvents, compositionEvents, keyboardEvents, focusEvents, formEvents, genericEvents, mouseEvents, pointerEvents, selectionEvents, touchEvents, uiEvents, wheelEvents, mediaEvents, imageEvents, animationEvents, transitionEvents, otherEvents);
  /**
   * Returns an object with on-event callback props curried with provided args.
   * @param {Object} props Props passed to a component.
   * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
   *   shall be curried with.
   */

  var makeEventProps = function makeEventProps(props, getArgs) {
    var eventProps = {};
    allEvents.forEach(function (eventName) {
      if (!(eventName in props)) {
        return;
      }

      if (!getArgs) {
        eventProps[eventName] = props[eventName];
        return;
      }

      eventProps[eventName] = function (event) {
        return props[eventName](event, getArgs(eventName));
      };
    });
    return eventProps;
  };

  var esm$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    clipboardEvents: clipboardEvents,
    compositionEvents: compositionEvents,
    keyboardEvents: keyboardEvents,
    focusEvents: focusEvents,
    formEvents: formEvents,
    genericEvents: genericEvents,
    mouseEvents: mouseEvents,
    pointerEvents: pointerEvents,
    selectionEvents: selectionEvents,
    touchEvents: touchEvents,
    uiEvents: uiEvents,
    wheelEvents: wheelEvents,
    mediaEvents: mediaEvents,
    imageEvents: imageEvents,
    animationEvents: animationEvents,
    transitionEvents: transitionEvents,
    otherEvents: otherEvents,
    allEvents: allEvents,
    'default': makeEventProps
  });

  var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(esm$6);

  function mergeClassNames() {
    return Array.prototype.slice.call(arguments).reduce(function (classList, arg) {
      return classList.concat(arg);
    }, []).filter(function (arg) {
      return typeof arg === 'string';
    }).join(' ');
  }

  var esm$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': mergeClassNames
  });

  var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(esm$5);

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** `Object#toString` result references. */
  var funcTag$3 = '[object Function]',
      genTag$2 = '[object GeneratorFunction]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue$3(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto$1 = Array.prototype,
      funcProto$3 = Function.prototype,
      objectProto$d = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$1['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey$1 = (function() {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString$3 = funcProto$3.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString$1 = objectProto$d.toString;

  /** Used to detect if a method is native. */
  var reIsNative$1 = RegExp('^' +
    funcToString$3.call(hasOwnProperty$a).replace(reRegExpChar$1, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var splice$1 = arrayProto$1.splice;

  /* Built-in method references that are verified to be native. */
  var Map$2 = getNative$1(root$1, 'Map'),
      nativeCreate$1 = getNative$1(Object, 'create');

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete$1(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$a.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$a.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$2 : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear$1;
  Hash$1.prototype['delete'] = hashDelete$1;
  Hash$1.prototype.get = hashGet$1;
  Hash$1.prototype.has = hashHas$1;
  Hash$1.prototype.set = hashSet$1;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$1(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear$1() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
        index = assocIndexOf$1(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice$1.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
        index = assocIndexOf$1(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
        index = assocIndexOf$1(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache$1.prototype.clear = listCacheClear$1;
  ListCache$1.prototype['delete'] = listCacheDelete$1;
  ListCache$1.prototype.get = listCacheGet$1;
  ListCache$1.prototype.has = listCacheHas$1;
  ListCache$1.prototype.set = listCacheSet$1;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$1(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.__data__ = {
      'hash': new Hash$1,
      'map': new (Map$2 || ListCache$1),
      'string': new Hash$1
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    return getMapData$1(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$1(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    getMapData$1(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache$1.prototype.clear = mapCacheClear$1;
  MapCache$1.prototype['delete'] = mapCacheDelete$1;
  MapCache$1.prototype.get = mapCacheGet$1;
  MapCache$1.prototype.has = mapCacheHas$1;
  MapCache$1.prototype.set = mapCacheSet$1;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$1(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$2(value) || isMasked$1(value)) {
      return false;
    }
    var pattern = (isFunction$2(value) || isHostObject(value)) ? reIsNative$1 : reIsHostCtor$1;
    return pattern.test(toSource$1(value));
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$1(map, key) {
    var data = map.__data__;
    return isKeyable$1(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$1(object, key) {
    var value = getValue$3(object, key);
    return baseIsNative$1(value) ? value : undefined;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable$1(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey$1 && (maskSrcKey$1 in func);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource$1(func) {
    if (func != null) {
      try {
        return funcToString$3.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize$1(func, resolver) {
    if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1);
    return memoized;
  }

  // Assign cache to `_.memoize`.
  memoize$1.Cache = MapCache$1;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq$1(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$2(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$2(value) ? objectToString$1.call(value) : '';
    return tag == funcTag$3 || tag == genTag$2;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$2(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  var lodash_memoize = memoize$1;

  var memoize$2 = lodash_memoize;

  function resolver(options) {
    return JSON.stringify(options);
  }

  function uniqDefined(arr) {
    return arr.filter(function (el, index) {
      return el && arr.indexOf(el) === index;
    });
  }

  function normalizeLocales(arr) {
    return arr.map(function (el) {
      if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
        return el;
      }

      var splitEl = el.split('-');
      return splitEl[0] + "-" + splitEl[1].toUpperCase();
    });
  }

  function getUserLocalesInternal(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$useFallbackLocal = _ref.useFallbackLocale,
        useFallbackLocale = _ref$useFallbackLocal === void 0 ? true : _ref$useFallbackLocal,
        _ref$fallbackLocale = _ref.fallbackLocale,
        fallbackLocale = _ref$fallbackLocale === void 0 ? 'en-US' : _ref$fallbackLocale;

    var languageList = [];

    if (typeof window !== 'undefined') {
      var _window = window,
          navigator = _window.navigator;
      languageList = languageList.concat(navigator.languages, navigator.language, navigator.userLanguage, navigator.browserLanguage, navigator.systemLanguage);
    }

    if (useFallbackLocale) {
      languageList.push(fallbackLocale);
    }

    return normalizeLocales(uniqDefined(languageList));
  }

  var getUserLocales = memoize$2(getUserLocalesInternal, resolver);

  function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
  }

  var getUserLocale = memoize$2(getUserLocaleInternal, resolver);

  var esm$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getUserLocales: getUserLocales,
    getUserLocale: getUserLocale,
    'default': getUserLocale
  });

  /**
   * Utils
   */
  function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var previousPeriod = getPeriod(date) + offset;
      return getEdgeOfPeriod(previousPeriod);
    };
  }

  function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
      return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
  }

  function makeGetRange(functions) {
    return function makeGetRangeInternal(date) {
      return functions.map(function (fn) {
        return fn(date);
      });
    };
  }
  /**
   * Simple getters - getting a property of a given point in time
   */

  /**
   * Gets year from date.
   *
   * @param {Date|number|string} date Date to get year from.
   */


  function getYear(date) {
    if (date instanceof Date) {
      return date.getFullYear();
    }

    if (typeof date === 'number') {
      return date;
    }

    var year = parseInt(date, 10);

    if (typeof date === 'string' && !isNaN(year)) {
      return year;
    }

    throw new Error("Failed to get year from date: ".concat(date, "."));
  }
  /**
   * Gets month from date.
   *
   * @param {Date} date Date to get month from.
   */

  function getMonth(date) {
    if (date instanceof Date) {
      return date.getMonth();
    }

    throw new Error("Failed to get month from date: ".concat(date, "."));
  }
  /**
   * Gets human-readable month from date.
   *
   * @param {Date} date Date to get human-readable month from.
   */

  function getMonthHuman(date) {
    if (date instanceof Date) {
      return date.getMonth() + 1;
    }

    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
  }
  /**
   * Gets human-readable day of the month from date.
   *
   * @param {Date} date Date to get day of the month from.
   */

  function getDate(date) {
    if (date instanceof Date) {
      return date.getDate();
    }

    throw new Error("Failed to get year from date: ".concat(date, "."));
  }
  /**
   * Gets hours from date.
   *
   * @param {Date|string} date Date to get hours from.
   */

  function getHours(date) {
    if (date instanceof Date) {
      return date.getHours();
    }

    if (typeof date === 'string') {
      var datePieces = date.split(':');

      if (datePieces.length >= 2) {
        var hoursString = datePieces[0];
        var hours = parseInt(hoursString, 10);

        if (!isNaN(hours)) {
          return hours;
        }
      }
    }

    throw new Error("Failed to get hours from date: ".concat(date, "."));
  }
  /**
   * Gets minutes from date.
   *
   * @param {Date|string} date Date to get minutes from.
   */

  function getMinutes(date) {
    if (date instanceof Date) {
      return date.getMinutes();
    }

    if (typeof date === 'string') {
      var datePieces = date.split(':');

      if (datePieces.length >= 2) {
        var minutesString = datePieces[1] || 0;
        var minutes = parseInt(minutesString, 10);

        if (!isNaN(minutes)) {
          return minutes;
        }
      }
    }

    throw new Error("Failed to get minutes from date: ".concat(date, "."));
  }
  /**
   * Gets seconds from date.
   *
   * @param {Date|string} date Date to get seconds from.
   */

  function getSeconds(date) {
    if (date instanceof Date) {
      return date.getSeconds();
    }

    if (typeof date === 'string') {
      var datePieces = date.split(':');

      if (datePieces.length >= 2) {
        var secondsString = datePieces[2] || 0;
        var seconds = parseInt(secondsString, 10);

        if (!isNaN(seconds)) {
          return seconds;
        }
      }
    }

    throw new Error("Failed to get seconds from date: ".concat(date, "."));
  }
  /**
   * Century
   */

  function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + (-year + 1) % 100;
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
  }
  var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
  var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
  var getCenturyEnd = makeGetEnd(getNextCenturyStart);
  var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
  var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
  var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
  /**
   * Decade
   */

  function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + (-year + 1) % 10;
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
  }
  var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
  var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
  var getDecadeEnd = makeGetEnd(getNextDecadeStart);
  var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
  var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
  var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
  /**
   * Year
   */

  function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
  }
  var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
  var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
  var getYearEnd = makeGetEnd(getNextYearStart);
  var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
  var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
  var getYearRange = makeGetRange([getYearStart, getYearEnd]);
  /**
   * Month
   */

  function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var year = getYear(date);
      var month = getMonth(date) + offset;
      var previousPeriod = new Date();
      previousPeriod.setFullYear(year, month, 1);
      previousPeriod.setHours(0, 0, 0, 0);
      return getEdgeOfPeriod(previousPeriod);
    };
  }

  function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
  }
  var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
  var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
  var getMonthEnd = makeGetEnd(getNextMonthStart);
  var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
  var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
  var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
  /**
   * Day
   */

  function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var year = getYear(date);
      var month = getMonth(date);
      var day = getDate(date) + offset;
      var previousPeriod = new Date();
      previousPeriod.setFullYear(year, month, day);
      previousPeriod.setHours(0, 0, 0, 0);
      return getEdgeOfPeriod(previousPeriod);
    };
  }

  function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
  }
  var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
  var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
  var getDayEnd = makeGetEnd(getNextDayStart);
  var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
  var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
  var getDayRange = makeGetRange([getDayStart, getDayEnd]);
  /**
   * Other
   */

  /**
   * Returns a number of days in a month of a given date.
   *
   * @param {Date} date Date.
   */

  function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
  }

  function padStart(num) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var numStr = "".concat(num);

    if (numStr.length >= val) {
      return num;
    }

    return "0000".concat(numStr).slice(-val);
  }
  /**
   * Returns local hours and minutes (hh:mm).
   */


  function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
  }
  /**
   * Returns local hours, minutes and seconds (hh:mm:ss).
   */

  function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
  }
  /**
   * Returns local month in ISO-like format (YYYY-MM).
   */

  function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
  }
  /**
   * Returns local date in ISO-like format (YYYY-MM-DD).
   */

  function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
  }
  /**
   * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
   */

  function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
  }

  var esm$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getYear: getYear,
    getMonth: getMonth,
    getMonthHuman: getMonthHuman,
    getDate: getDate,
    getHours: getHours,
    getMinutes: getMinutes,
    getSeconds: getSeconds,
    getCenturyStart: getCenturyStart,
    getPreviousCenturyStart: getPreviousCenturyStart,
    getNextCenturyStart: getNextCenturyStart,
    getCenturyEnd: getCenturyEnd,
    getPreviousCenturyEnd: getPreviousCenturyEnd,
    getNextCenturyEnd: getNextCenturyEnd,
    getCenturyRange: getCenturyRange,
    getDecadeStart: getDecadeStart,
    getPreviousDecadeStart: getPreviousDecadeStart,
    getNextDecadeStart: getNextDecadeStart,
    getDecadeEnd: getDecadeEnd,
    getPreviousDecadeEnd: getPreviousDecadeEnd,
    getNextDecadeEnd: getNextDecadeEnd,
    getDecadeRange: getDecadeRange,
    getYearStart: getYearStart,
    getPreviousYearStart: getPreviousYearStart,
    getNextYearStart: getNextYearStart,
    getYearEnd: getYearEnd,
    getPreviousYearEnd: getPreviousYearEnd,
    getNextYearEnd: getNextYearEnd,
    getYearRange: getYearRange,
    getMonthStart: getMonthStart,
    getPreviousMonthStart: getPreviousMonthStart,
    getNextMonthStart: getNextMonthStart,
    getMonthEnd: getMonthEnd,
    getPreviousMonthEnd: getPreviousMonthEnd,
    getNextMonthEnd: getNextMonthEnd,
    getMonthRange: getMonthRange,
    getDayStart: getDayStart,
    getPreviousDayStart: getPreviousDayStart,
    getNextDayStart: getNextDayStart,
    getDayEnd: getDayEnd,
    getPreviousDayEnd: getPreviousDayEnd,
    getNextDayEnd: getNextDayEnd,
    getDayRange: getDayRange,
    getDaysInMonth: getDaysInMonth,
    getHoursMinutes: getHoursMinutes,
    getHoursMinutesSeconds: getHoursMinutesSeconds,
    getISOLocalMonth: getISOLocalMonth,
    getISOLocalDate: getISOLocalDate,
    getISOLocalDateTime: getISOLocalDateTime
  });

  var _CALENDAR_TYPE_LOCALE;

  function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$4(); }

  function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

  function _iterableToArray$4(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }

  function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var CALENDAR_TYPES = {
    ARABIC: 'Arabic',
    HEBREW: 'Hebrew',
    ISO_8601: 'ISO 8601',
    US: 'US'
  };
  var CALENDAR_TYPE_LOCALES = (_CALENDAR_TYPE_LOCALE = {}, _defineProperty$e(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.US, ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR']), _defineProperty$e(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.ARABIC, [// ar-LB, ar-MA intentionally missing
  'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']), _defineProperty$e(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.HEBREW, ['he', 'he-IL']), _CALENDAR_TYPE_LOCALE);
  var WEEKDAYS = _toConsumableArray$4(Array(7)).map(function (el, index) {
    return index;
  });

  var formatterCache$1 = new Map();

  function getFormatter$1(options) {
    return function (locale, date) {
      var localeWithDefault = locale || getUserLocale();

      if (!formatterCache$1.has(localeWithDefault)) {
        formatterCache$1.set(localeWithDefault, new Map());
      }

      var formatterCacheLocale = formatterCache$1.get(localeWithDefault);

      if (!formatterCacheLocale.has(options)) {
        formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault, options).format);
      }

      return formatterCacheLocale.get(options)(date);
    };
  }
  /**
   * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
   * Workaround for bug in WebKit and Firefox with historical dates.
   * For more details, see:
   * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
   * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
   *
   * @param {Date} date Date.
   */


  function toSafeHour$1(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
  }

  function getSafeFormatter$1(options) {
    return function (locale, date) {
      return getFormatter$1(options)(locale, toSafeHour$1(date));
    };
  }
  var formatDayOptions = {
    day: 'numeric'
  };
  var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  var formatMonthOptions$1 = {
    month: 'long'
  };
  var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric'
  };
  var formatShortWeekdayOptions = {
    weekday: 'short'
  };
  var formatWeekdayOptions = {
    weekday: 'long'
  };
  var formatYearOptions = {
    year: 'numeric'
  };
  var formatDay = getSafeFormatter$1(formatDayOptions);
  var formatLongDate = getSafeFormatter$1(formatLongDateOptions);
  var formatMonth$1 = getSafeFormatter$1(formatMonthOptions$1);
  var formatMonthYear = getSafeFormatter$1(formatMonthYearOptions);
  var formatShortWeekday = getSafeFormatter$1(formatShortWeekdayOptions);
  var formatWeekday = getSafeFormatter$1(formatWeekdayOptions);
  var formatYear = getSafeFormatter$1(formatYearOptions);

  var SUNDAY = WEEKDAYS[0];
  var FRIDAY = WEEKDAYS[5];
  var SATURDAY = WEEKDAYS[6];
  /* Simple getters - getting a property of a given point in time */

  function getDayOfWeek(date) {
    var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
    var weekday = date.getDay();

    switch (calendarType) {
      case CALENDAR_TYPES.ISO_8601:
        // Shifts days of the week so that Monday is 0, Sunday is 6
        return (weekday + 6) % 7;

      case CALENDAR_TYPES.ARABIC:
        return (weekday + 1) % 7;

      case CALENDAR_TYPES.HEBREW:
      case CALENDAR_TYPES.US:
        return weekday;

      default:
        throw new Error('Unsupported calendar type.');
    }
  }
  /**
   * Century
   */

  function getBeginOfCenturyYear(date) {
    var beginOfCentury = getCenturyStart(date);
    return getYear(beginOfCentury);
  }
  /**
   * Decade
   */

  function getBeginOfDecadeYear(date) {
    var beginOfDecade = getDecadeStart(date);
    return getYear(beginOfDecade);
  }
  /**
   * Week
   */

  /**
   * Returns the beginning of a given week.
   *
   * @param {Date} date Date.
   * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
   */

  function getBeginOfWeek(date) {
    var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
    var year = getYear(date);
    var monthIndex = getMonth(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
  }
  /**
   * Gets week number according to ISO 8601 or US standard.
   * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
   * In US calendar week 1 is the one with January 1.
   *
   * @param {Date} date Date.
   * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
   */

  function getWeekNumber(date) {
    var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
    var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.US ? CALENDAR_TYPES.US : CALENDAR_TYPES.ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = getYear(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek; // Look for the first week one that does not come after a given date

    do {
      dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
      beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
      year -= 1;
    } while (date < beginOfFirstWeek);

    return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
  }
  /**
   * Others
   */

  /**
   * Returns the beginning of a given range.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date Date.
   */

  function getBegin$1(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getCenturyStart(date);

      case 'decade':
        return getDecadeStart(date);

      case 'year':
        return getYearStart(date);

      case 'month':
        return getMonthStart(date);

      case 'day':
        return getDayStart(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  function getBeginPrevious(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getPreviousCenturyStart(date);

      case 'decade':
        return getPreviousDecadeStart(date);

      case 'year':
        return getPreviousYearStart(date);

      case 'month':
        return getPreviousMonthStart(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  function getBeginNext(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getNextCenturyStart(date);

      case 'decade':
        return getNextDecadeStart(date);

      case 'year':
        return getNextYearStart(date);

      case 'month':
        return getNextMonthStart(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
    switch (rangeType) {
      case 'decade':
        return getPreviousDecadeStart(date, -100);

      case 'year':
        return getPreviousYearStart(date, -10);

      case 'month':
        return getPreviousMonthStart(date, -12);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  };
  var getBeginNext2 = function getBeginNext2(rangeType, date) {
    switch (rangeType) {
      case 'decade':
        return getNextDecadeStart(date, 100);

      case 'year':
        return getNextYearStart(date, 10);

      case 'month':
        return getNextMonthStart(date, 12);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  };
  /**
   * Returns the end of a given range.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date Date.
   */

  function getEnd$1(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getCenturyEnd(date);

      case 'decade':
        return getDecadeEnd(date);

      case 'year':
        return getYearEnd(date);

      case 'month':
        return getMonthEnd(date);

      case 'day':
        return getDayEnd(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  function getEndPrevious(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getPreviousCenturyEnd(date);

      case 'decade':
        return getPreviousDecadeEnd(date);

      case 'year':
        return getPreviousYearEnd(date);

      case 'month':
        return getPreviousMonthEnd(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
    switch (rangeType) {
      case 'decade':
        return getPreviousDecadeEnd(date, -100);

      case 'year':
        return getPreviousYearEnd(date, -10);

      case 'month':
        return getPreviousMonthEnd(date, -12);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  };
  /**
   * Returns an array with the beginning and the end of a given range.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date Date.
   */

  function getRange(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return getCenturyRange(date);

      case 'decade':
        return getDecadeRange(date);

      case 'year':
        return getYearRange(date);

      case 'month':
        return getMonthRange(date);

      case 'day':
        return getDayRange(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  /**
   * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date1 First date.
   * @param {Date} date2 Second date.
   */

  function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [date1, date2].sort(function (a, b) {
      return a - b;
    });
    return [getBegin$1(rangeType, rawNextValue[0]), getEnd$1(rangeType, rawNextValue[1])];
  }

  function toYearLabel(locale) {
    var formatYear$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : formatYear;
    var dates = arguments.length > 2 ? arguments[2] : undefined;
    return dates.map(function (date) {
      return formatYear$1(locale, date);
    }).join(' – ');
  }
  /**
   * Returns a string labelling a century of a given date.
   * For example, for 2017 it will return 2001-2100.
   *
   * @param {Date|String|Number} date Date or a year as a string or as a number.
   */


  function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, getCenturyRange(date));
  }
  /**
   * Returns a string labelling a century of a given date.
   * For example, for 2017 it will return 2011-2020.
   *
   * @param {Date|String|Number} date Date or a year as a string or as a number.
   */

  function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, getDecadeRange(date));
  }
  /**
   * Returns a boolean determining whether a given date is on Saturday or Sunday.
   *
   * @param {Date} date Date.
   */

  function isWeekend(date) {
    var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
    var weekday = date.getDay();

    switch (calendarType) {
      case CALENDAR_TYPES.ARABIC:
      case CALENDAR_TYPES.HEBREW:
        return weekday === FRIDAY || weekday === SATURDAY;

      case CALENDAR_TYPES.ISO_8601:
      case CALENDAR_TYPES.US:
        return weekday === SATURDAY || weekday === SUNDAY;

      default:
        throw new Error('Unsupported calendar type.');
    }
  }

  function _typeof$4(obj) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$4(obj); }
  var calendarTypes = Object.values(CALENDAR_TYPES);
  var allViews$2 = ['century', 'decade', 'year', 'month'];
  var isCalendarType = propTypes$2.exports.oneOf(calendarTypes);
  var isClassName = propTypes$2.exports.oneOfType([propTypes$2.exports.string, propTypes$2.exports.arrayOf(propTypes$2.exports.string)]);
  var isMinDate$1 = function isMinDate(props, propName, componentName) {
    var minDate = props[propName];

    if (!minDate) {
      return null;
    }

    if (!(minDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof$4(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var maxDate = props.maxDate;

    if (maxDate && minDate > maxDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof$4(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    }

    return null;
  };
  var isMaxDate$1 = function isMaxDate(props, propName, componentName) {
    var maxDate = props[propName];

    if (!maxDate) {
      return null;
    }

    if (!(maxDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof$4(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var minDate = props.minDate;

    if (minDate && maxDate < minDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof$4(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    }

    return null;
  };
  var isRef$1 = propTypes$2.exports.oneOfType([propTypes$2.exports.func, propTypes$2.exports.shape({
    current: propTypes$2.exports.any
  })]);
  var isValue = propTypes$2.exports.oneOfType([propTypes$2.exports.instanceOf(Date), propTypes$2.exports.arrayOf(propTypes$2.exports.instanceOf(Date))]);
  var isViews = propTypes$2.exports.arrayOf(propTypes$2.exports.oneOf(allViews$2));
  var isView = function isView(props, propName, componentName) {
    var view = props[propName];
    var views = props.views;
    var allowedViews = views || allViews$2;

    if (view !== undefined && allowedViews.indexOf(view) === -1) {
      return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function (a) {
        return "\"".concat(a, "\"");
      }).join(', '), "]."));
    } // Everything is fine


    return null;
  };

  isView.isRequired = function (props, propName, componentName) {
    var view = props[propName];

    if (!view) {
      return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
    }

    return isView(props, propName, componentName);
  };

  var tileGroupProps = {
    activeStartDate: propTypes$2.exports.instanceOf(Date).isRequired,
    hover: propTypes$2.exports.instanceOf(Date),
    locale: propTypes$2.exports.string,
    maxDate: isMaxDate$1,
    minDate: isMinDate$1,
    onClick: propTypes$2.exports.func,
    onMouseOver: propTypes$2.exports.func,
    tileClassName: propTypes$2.exports.oneOfType([propTypes$2.exports.func, isClassName]),
    tileContent: propTypes$2.exports.oneOfType([propTypes$2.exports.func, propTypes$2.exports.node]),
    value: isValue,
    valueType: propTypes$2.exports.string
  };
  var tileProps = {
    activeStartDate: propTypes$2.exports.instanceOf(Date).isRequired,
    classes: propTypes$2.exports.arrayOf(propTypes$2.exports.string).isRequired,
    date: propTypes$2.exports.instanceOf(Date).isRequired,
    locale: propTypes$2.exports.string,
    maxDate: isMaxDate$1,
    minDate: isMinDate$1,
    onClick: propTypes$2.exports.func,
    onMouseOver: propTypes$2.exports.func,
    style: propTypes$2.exports.objectOf(propTypes$2.exports.oneOfType([propTypes$2.exports.string, propTypes$2.exports.number])),
    tileClassName: propTypes$2.exports.oneOfType([propTypes$2.exports.func, isClassName]),
    tileContent: propTypes$2.exports.oneOfType([propTypes$2.exports.func, propTypes$2.exports.node]),
    tileDisabled: propTypes$2.exports.func
  };

  var className$6 = 'react-calendar__navigation';
  function Navigation(_ref) {
    var activeStartDate = _ref.activeStartDate,
        drillUp = _ref.drillUp,
        _ref$formatMonthYear = _ref.formatMonthYear,
        formatMonthYear$1 = _ref$formatMonthYear === void 0 ? formatMonthYear : _ref$formatMonthYear,
        _ref$formatYear = _ref.formatYear,
        formatYear$1 = _ref$formatYear === void 0 ? formatYear : _ref$formatYear,
        locale = _ref.locale,
        maxDate = _ref.maxDate,
        minDate = _ref.minDate,
        _ref$navigationAriaLa = _ref.navigationAriaLabel,
        navigationAriaLabel = _ref$navigationAriaLa === void 0 ? '' : _ref$navigationAriaLa,
        navigationAriaLive = _ref.navigationAriaLive,
        navigationLabel = _ref.navigationLabel,
        _ref$next2AriaLabel = _ref.next2AriaLabel,
        next2AriaLabel = _ref$next2AriaLabel === void 0 ? '' : _ref$next2AriaLabel,
        _ref$next2Label = _ref.next2Label,
        next2Label = _ref$next2Label === void 0 ? '»' : _ref$next2Label,
        _ref$nextAriaLabel = _ref.nextAriaLabel,
        nextAriaLabel = _ref$nextAriaLabel === void 0 ? '' : _ref$nextAriaLabel,
        _ref$nextLabel = _ref.nextLabel,
        nextLabel = _ref$nextLabel === void 0 ? '›' : _ref$nextLabel,
        _ref$prev2AriaLabel = _ref.prev2AriaLabel,
        prev2AriaLabel = _ref$prev2AriaLabel === void 0 ? '' : _ref$prev2AriaLabel,
        _ref$prev2Label = _ref.prev2Label,
        prev2Label = _ref$prev2Label === void 0 ? '«' : _ref$prev2Label,
        _ref$prevAriaLabel = _ref.prevAriaLabel,
        prevAriaLabel = _ref$prevAriaLabel === void 0 ? '' : _ref$prevAriaLabel,
        _ref$prevLabel = _ref.prevLabel,
        prevLabel = _ref$prevLabel === void 0 ? '‹' : _ref$prevLabel,
        setActiveStartDate = _ref.setActiveStartDate,
        showDoubleView = _ref.showDoubleView,
        view = _ref.view,
        views = _ref.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons && getBeginPrevious2(view, activeStartDate);
    var nextActiveStartDate = getBeginNext(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons && getBeginNext2(view, activeStartDate);

    var prevButtonDisabled = function () {
      if (previousActiveStartDate.getFullYear() < 0) {
        return true;
      }

      var previousActiveEndDate = getEndPrevious(view, activeStartDate);
      return minDate && minDate >= previousActiveEndDate;
    }();

    var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
      if (previousActiveStartDate2.getFullYear() < 0) {
        return true;
      }

      var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
      return minDate && minDate >= previousActiveEndDate;
    }();

    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;

    function onClickPrevious() {
      setActiveStartDate(previousActiveStartDate, 'prev');
    }

    function onClickPrevious2() {
      setActiveStartDate(previousActiveStartDate2, 'prev2');
    }

    function onClickNext() {
      setActiveStartDate(nextActiveStartDate, 'next');
    }

    function onClickNext2() {
      setActiveStartDate(nextActiveStartDate2, 'next2');
    }

    function renderLabel(date) {
      var label = function () {
        switch (view) {
          case 'century':
            return getCenturyLabel(locale, formatYear$1, date);

          case 'decade':
            return getDecadeLabel(locale, formatYear$1, date);

          case 'year':
            return formatYear$1(locale, date);

          case 'month':
            return formatMonthYear$1(locale, date);

          default:
            throw new Error("Invalid view: ".concat(view, "."));
        }
      }();

      return navigationLabel ? navigationLabel({
        date: date,
        label: label,
        locale: locale || getUserLocale(),
        view: view
      }) : label;
    }

    function renderButton() {
      var labelClassName = "".concat(className$6, "__label");
      return /*#__PURE__*/React__default["default"].createElement("button", {
        "aria-label": navigationAriaLabel,
        "aria-live": navigationAriaLive,
        className: labelClassName,
        disabled: !drillUpAvailable,
        onClick: drillUp,
        style: {
          flexGrow: 1
        },
        type: "button"
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from")
      }, renderLabel(activeStartDate)), showDoubleView && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "".concat(labelClassName, "__divider")
      }, " \u2013 "), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to")
      }, renderLabel(nextActiveStartDate))));
    }

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className$6
    }, prev2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": prev2AriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__prev2-button"),
      disabled: prev2ButtonDisabled,
      onClick: onClickPrevious2,
      type: "button"
    }, prev2Label), prevLabel !== null && /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": prevAriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__prev-button"),
      disabled: prevButtonDisabled,
      onClick: onClickPrevious,
      type: "button"
    }, prevLabel), renderButton(), nextLabel !== null && /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": nextAriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__next-button"),
      disabled: nextButtonDisabled,
      onClick: onClickNext,
      type: "button"
    }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": next2AriaLabel,
      className: "".concat(className$6, "__arrow ").concat(className$6, "__next2-button"),
      disabled: next2ButtonDisabled,
      onClick: onClickNext2,
      type: "button"
    }, next2Label));
  }
  Navigation.propTypes = {
    activeStartDate: propTypes$2.exports.instanceOf(Date).isRequired,
    drillUp: propTypes$2.exports.func.isRequired,
    formatMonthYear: propTypes$2.exports.func,
    formatYear: propTypes$2.exports.func,
    locale: propTypes$2.exports.string,
    maxDate: propTypes$2.exports.instanceOf(Date),
    minDate: propTypes$2.exports.instanceOf(Date),
    navigationAriaLabel: propTypes$2.exports.string,
    navigationAriaLive: propTypes$2.exports.string,
    navigationLabel: propTypes$2.exports.func,
    next2AriaLabel: propTypes$2.exports.string,
    next2Label: propTypes$2.exports.node,
    nextAriaLabel: propTypes$2.exports.string,
    nextLabel: propTypes$2.exports.node,
    prev2AriaLabel: propTypes$2.exports.string,
    prev2Label: propTypes$2.exports.node,
    prevAriaLabel: propTypes$2.exports.string,
    prevLabel: propTypes$2.exports.node,
    setActiveStartDate: propTypes$2.exports.func.isRequired,
    showDoubleView: propTypes$2.exports.bool,
    view: isView.isRequired,
    views: isViews.isRequired
  };

  var _excluded$o = ["children", "className", "direction", "count", "offset", "style", "wrap"];

  function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

  function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty$d(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function toPercent(num) {
    return "".concat(num, "%");
  }

  function Flex(_ref) {
    var children = _ref.children,
        className = _ref.className,
        direction = _ref.direction,
        count = _ref.count,
        offset = _ref.offset,
        style = _ref.style,
        wrap = _ref.wrap,
        otherProps = _objectWithoutProperties$a(_ref, _excluded$o);

    return /*#__PURE__*/React__default["default"].createElement("div", _extends$d({
      className: className,
      style: _objectSpread$d({
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'no-wrap'
      }, style)
    }, otherProps), React__default["default"].Children.map(children, function (child, index) {
      return /*#__PURE__*/React__default["default"].cloneElement(child, _objectSpread$d(_objectSpread$d({}, child.props), {}, {
        style: {
          flexBasis: toPercent(100 / count),
          flexShrink: 0,
          flexGrow: 0,
          overflow: 'hidden',
          marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
        }
      }));
    }));
  }
  Flex.propTypes = {
    children: propTypes$2.exports.node,
    className: propTypes$2.exports.string,
    count: propTypes$2.exports.number.isRequired,
    direction: propTypes$2.exports.string,
    offset: propTypes$2.exports.number,
    style: propTypes$2.exports.objectOf(propTypes$2.exports.oneOfType([propTypes$2.exports.string, propTypes$2.exports.number])),
    wrap: propTypes$2.exports.bool
  };

  function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3(); }

  function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

  function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$3(arr); }

  function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  /**
   * Returns a value no smaller than min and no larger than max.
   *
   * @param {*} value Value to return.
   * @param {*} min Minimum return value.
   * @param {*} max Maximum return value.
   */

  function between$1(value, min, max) {
    if (min && min > value) {
      return min;
    }

    if (max && max < value) {
      return max;
    }

    return value;
  }
  function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
  }
  function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
  }
  function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
  }

  function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];

    if (isRange) {
      classes.push(baseClassName);
      var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
      var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

      if (isRangeStart) {
        classes.push("".concat(baseClassName, "Start"));
      }

      if (isRangeEnd) {
        classes.push("".concat(baseClassName, "End"));
      }

      if (isRangeStart && isRangeEnd) {
        classes.push("".concat(baseClassName, "BothEnds"));
      }
    }

    return classes;
  }

  function getTileClasses() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        value = _ref.value,
        valueType = _ref.valueType,
        date = _ref.date,
        dateType = _ref.dateType,
        hover = _ref.hover;

    var className = 'react-calendar__tile';
    var classes = [className];

    if (!date) {
      return classes;
    }

    if (!Array.isArray(date) && !dateType) {
      throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
    }

    var now = new Date();
    var dateRange = Array.isArray(date) ? date : getRange(dateType, date);

    if (isValueWithinRange(now, dateRange)) {
      classes.push("".concat(className, "--now"));
    }

    if (!value) {
      return classes;
    }

    if (!Array.isArray(value) && !valueType) {
      throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
    }

    var valueRange = Array.isArray(value) ? value : getRange(valueType, value);

    if (isRangeWithinRange(valueRange, dateRange)) {
      classes.push("".concat(className, "--active"));
    } else if (doRangesOverlap(valueRange, dateRange)) {
      classes.push("".concat(className, "--hasActive"));
    }

    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, _toConsumableArray$3(valueRangeClassNames));
    var valueArray = [].concat(value);

    if (hover && valueArray.length === 1) {
      var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
      var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
      classes.push.apply(classes, _toConsumableArray$3(hoverRangeClassNames));
    }

    return classes;
  }

  var _excluded$n = ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"];

  function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty$c(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

  function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function TileGroup(_ref) {
    var className = _ref.className,
        _ref$count = _ref.count,
        count = _ref$count === void 0 ? 3 : _ref$count,
        dateTransform = _ref.dateTransform,
        dateType = _ref.dateType,
        end = _ref.end,
        hover = _ref.hover,
        offset = _ref.offset,
        start = _ref.start,
        _ref$step = _ref.step,
        step = _ref$step === void 0 ? 1 : _ref$step,
        Tile = _ref.tile,
        value = _ref.value,
        valueType = _ref.valueType,
        tileProps = _objectWithoutProperties$9(_ref, _excluded$n);

    var tiles = [];

    for (var point = start; point <= end; point += step) {
      var date = dateTransform(point);
      tiles.push( /*#__PURE__*/React__default["default"].createElement(Tile, _extends$c({
        key: date.getTime(),
        classes: getTileClasses({
          value: value,
          valueType: valueType,
          date: date,
          dateType: dateType,
          hover: hover
        }),
        date: date,
        point: point
      }, tileProps)));
    }

    return /*#__PURE__*/React__default["default"].createElement(Flex, {
      className: className,
      count: count,
      offset: offset,
      wrap: true
    }, tiles);
  }
  TileGroup.propTypes = _objectSpread$c(_objectSpread$c({}, tileGroupProps), {}, {
    activeStartDate: propTypes$2.exports.instanceOf(Date),
    count: propTypes$2.exports.number,
    dateTransform: propTypes$2.exports.func.isRequired,
    dateType: propTypes$2.exports.string,
    offset: propTypes$2.exports.number,
    step: propTypes$2.exports.number,
    tile: propTypes$2.exports.func.isRequired
  });

  function _typeof$3(obj) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$3(obj); }

  function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty$b(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

  function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

  function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$3(self); }

  function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

  function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function datesAreDifferent(date1, date2) {
    return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
  }

  function getValue$2(nextProps, prop) {
    var activeStartDate = nextProps.activeStartDate,
        date = nextProps.date,
        view = nextProps.view;
    return typeof prop === 'function' ? prop({
      activeStartDate: activeStartDate,
      date: date,
      view: view
    }) : prop;
  }

  var Tile = /*#__PURE__*/function (_Component) {
    _inherits$2(Tile, _Component);

    var _super = _createSuper$2(Tile);

    function Tile() {
      var _this;

      _classCallCheck$2(this, Tile);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty$b(_assertThisInitialized$3(_this), "state", {});

      return _this;
    }

    _createClass$2(Tile, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            activeStartDate = _this$props.activeStartDate,
            children = _this$props.children,
            classes = _this$props.classes,
            date = _this$props.date,
            formatAbbr = _this$props.formatAbbr,
            locale = _this$props.locale,
            maxDate = _this$props.maxDate,
            maxDateTransform = _this$props.maxDateTransform,
            minDate = _this$props.minDate,
            minDateTransform = _this$props.minDateTransform,
            onClick = _this$props.onClick,
            onMouseOver = _this$props.onMouseOver,
            style = _this$props.style,
            tileDisabled = _this$props.tileDisabled,
            view = _this$props.view;
        var _this$state = this.state,
            tileClassName = _this$state.tileClassName,
            tileContent = _this$state.tileContent;
        return /*#__PURE__*/React__default["default"].createElement("button", {
          className: mergeClassNames(classes, tileClassName),
          disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
            activeStartDate: activeStartDate,
            date: date,
            view: view
          }),
          onClick: onClick && function (event) {
            return onClick(date, event);
          },
          onFocus: onMouseOver && function () {
            return onMouseOver(date);
          },
          onMouseOver: onMouseOver && function () {
            return onMouseOver(date);
          },
          style: style,
          type: "button"
        }, formatAbbr ? /*#__PURE__*/React__default["default"].createElement("abbr", {
          "aria-label": formatAbbr(locale, date)
        }, children) : children, tileContent);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var activeStartDate = nextProps.activeStartDate,
            tileClassName = nextProps.tileClassName,
            tileContent = nextProps.tileContent;
        var nextState = {};

        if (tileClassName !== prevState.tileClassNameProps || datesAreDifferent(activeStartDate, prevState.activeStartDateProps)) {
          nextState.tileClassName = getValue$2(nextProps, tileClassName);
          nextState.tileClassNameProps = tileClassName;
        }

        if (tileContent !== prevState.tileContentProps || datesAreDifferent(activeStartDate, prevState.activeStartDateProps)) {
          nextState.tileContent = getValue$2(nextProps, tileContent);
          nextState.tileContentProps = tileContent;
        }

        nextState.activeStartDateProps = activeStartDate;
        return nextState;
      }
    }]);

    return Tile;
  }(React$1.Component);
  Tile.propTypes = _objectSpread$b(_objectSpread$b({}, tileProps), {}, {
    children: propTypes$2.exports.node.isRequired,
    formatAbbr: propTypes$2.exports.func,
    maxDateTransform: propTypes$2.exports.func.isRequired,
    minDateTransform: propTypes$2.exports.func.isRequired
  });

  var _excluded$m = ["classes", "formatYear"];

  function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty$a(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

  function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var className$5 = 'react-calendar__century-view__decades__decade';
  function Decade(_ref) {
    var classes = _ref.classes,
        _ref$formatYear = _ref.formatYear,
        formatYear$1 = _ref$formatYear === void 0 ? formatYear : _ref$formatYear,
        otherProps = _objectWithoutProperties$8(_ref, _excluded$m);

    var date = otherProps.date,
        locale = otherProps.locale;
    return /*#__PURE__*/React__default["default"].createElement(Tile, _extends$b({}, otherProps, {
      classes: [].concat(classes, className$5),
      maxDateTransform: getDecadeEnd,
      minDateTransform: getDecadeStart,
      view: "century"
    }), getDecadeLabel(locale, formatYear$1, date));
  }
  Decade.propTypes = _objectSpread$a(_objectSpread$a({}, tileProps), {}, {
    formatYear: propTypes$2.exports.func
  });

  function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty$9(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
  function Decades(props) {
    var activeStartDate = props.activeStartDate;
    var start = getBeginOfCenturyYear(activeStartDate);
    var end = start + 99;
    return /*#__PURE__*/React__default["default"].createElement(TileGroup, _extends$a({}, props, {
      className: "react-calendar__century-view__decades",
      dateTransform: getDecadeStart,
      dateType: "decade",
      end: end,
      start: start,
      step: 10,
      tile: Decade
    }));
  }
  Decades.propTypes = _objectSpread$9({}, tileGroupProps);

  function CenturyView(props) {
    function renderDecades() {
      return /*#__PURE__*/React__default["default"].createElement(Decades, props);
    }

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "react-calendar__century-view"
    }, renderDecades());
  }

  var _excluded$l = ["classes", "formatYear"];

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty$8(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

  function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var className$4 = 'react-calendar__decade-view__years__year';
  function Year(_ref) {
    var classes = _ref.classes,
        _ref$formatYear = _ref.formatYear,
        formatYear$1 = _ref$formatYear === void 0 ? formatYear : _ref$formatYear,
        otherProps = _objectWithoutProperties$7(_ref, _excluded$l);

    var date = otherProps.date,
        locale = otherProps.locale;
    return /*#__PURE__*/React__default["default"].createElement(Tile, _extends$9({}, otherProps, {
      classes: [].concat(classes, className$4),
      maxDateTransform: getYearEnd,
      minDateTransform: getYearStart,
      view: "decade"
    }), formatYear$1(locale, date));
  }
  Year.propTypes = _objectSpread$8(_objectSpread$8({}, tileProps), {}, {
    formatYear: propTypes$2.exports.func
  });

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty$7(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
  function Years(props) {
    var activeStartDate = props.activeStartDate;
    var start = getBeginOfDecadeYear(activeStartDate);
    var end = start + 9;
    return /*#__PURE__*/React__default["default"].createElement(TileGroup, _extends$8({}, props, {
      className: "react-calendar__decade-view__years",
      dateTransform: function dateTransform(year) {
        var date = new Date();
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      },
      dateType: "year",
      end: end,
      start: start,
      tile: Year
    }));
  }
  Years.propTypes = _objectSpread$7({}, tileGroupProps);

  function DecadeView(props) {
    function renderYears() {
      return /*#__PURE__*/React__default["default"].createElement(Years, props);
    }

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "react-calendar__decade-view"
    }, renderYears());
  }

  var _excluded$k = ["classes", "formatMonth", "formatMonthYear"];

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty$6(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

  function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var className$3 = 'react-calendar__year-view__months__month';
  function Month(_ref) {
    var classes = _ref.classes,
        _ref$formatMonth = _ref.formatMonth,
        formatMonth = _ref$formatMonth === void 0 ? formatMonth$1 : _ref$formatMonth,
        _ref$formatMonthYear = _ref.formatMonthYear,
        formatMonthYear$1 = _ref$formatMonthYear === void 0 ? formatMonthYear : _ref$formatMonthYear,
        otherProps = _objectWithoutProperties$6(_ref, _excluded$k);

    var date = otherProps.date,
        locale = otherProps.locale;
    return /*#__PURE__*/React__default["default"].createElement(Tile, _extends$7({}, otherProps, {
      classes: [].concat(classes, className$3),
      formatAbbr: formatMonthYear$1,
      maxDateTransform: getMonthEnd,
      minDateTransform: getMonthStart,
      view: "year"
    }), formatMonth(locale, date));
  }
  Month.propTypes = _objectSpread$6(_objectSpread$6({}, tileProps), {}, {
    formatMonth: propTypes$2.exports.func,
    formatMonthYear: propTypes$2.exports.func
  });

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty$5(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
  function Months(props) {
    var activeStartDate = props.activeStartDate;
    var start = 0;
    var end = 11;
    var year = getYear(activeStartDate);
    return /*#__PURE__*/React__default["default"].createElement(TileGroup, _extends$6({}, props, {
      className: "react-calendar__year-view__months",
      dateTransform: function dateTransform(monthIndex) {
        var date = new Date();
        date.setFullYear(year, monthIndex, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      },
      dateType: "month",
      end: end,
      start: start,
      tile: Month
    }));
  }
  Months.propTypes = _objectSpread$5(_objectSpread$5({}, tileGroupProps), {}, {
    locale: propTypes$2.exports.string
  });

  function YearView(props) {
    function renderMonths() {
      return /*#__PURE__*/React__default["default"].createElement(Months, props);
    }

    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "react-calendar__year-view"
    }, renderMonths());
  }

  var _excluded$j = ["formatDay", "formatLongDate", "calendarType", "classes", "currentMonthIndex"];

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty$4(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

  function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var className$2 = 'react-calendar__month-view__days__day';
  function Day(_ref) {
    var _ref$formatDay = _ref.formatDay,
        formatDay$1 = _ref$formatDay === void 0 ? formatDay : _ref$formatDay,
        _ref$formatLongDate = _ref.formatLongDate,
        formatLongDate$1 = _ref$formatLongDate === void 0 ? formatLongDate : _ref$formatLongDate,
        calendarType = _ref.calendarType,
        classes = _ref.classes,
        currentMonthIndex = _ref.currentMonthIndex,
        otherProps = _objectWithoutProperties$5(_ref, _excluded$j);

    var date = otherProps.date,
        locale = otherProps.locale;
    return /*#__PURE__*/React__default["default"].createElement(Tile, _extends$5({}, otherProps, {
      classes: [].concat(classes, className$2, isWeekend(date, calendarType) ? "".concat(className$2, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className$2, "--neighboringMonth") : null),
      formatAbbr: formatLongDate$1,
      maxDateTransform: getDayEnd,
      minDateTransform: getDayStart,
      view: "month"
    }), formatDay$1(locale, date));
  }
  Day.propTypes = _objectSpread$4(_objectSpread$4({}, tileProps), {}, {
    currentMonthIndex: propTypes$2.exports.number.isRequired,
    formatDay: propTypes$2.exports.func,
    formatLongDate: propTypes$2.exports.func
  });

  var _excluded$i = ["showFixedNumberOfWeeks", "showNeighboringMonth"];

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty$3(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

  function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function Days(props) {
    var activeStartDate = props.activeStartDate,
        calendarType = props.calendarType;

    var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
        showNeighboringMonth = props.showNeighboringMonth,
        otherProps = _objectWithoutProperties$4(props, _excluded$i);

    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */

    var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */

    var end = function () {
      if (showFixedNumberOfWeeks) {
        // Always show 6 weeks
        return start + 6 * 7 - 1;
      }

      var daysInMonth = getDaysInMonth(activeStartDate);

      if (showNeighboringMonth) {
        var activeEndDate = new Date();
        activeEndDate.setFullYear(year, monthIndex, daysInMonth);
        activeEndDate.setHours(0, 0, 0, 0);
        var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
        return daysInMonth + daysUntilEndOfTheWeek;
      }

      return daysInMonth;
    }();

    return /*#__PURE__*/React__default["default"].createElement(TileGroup, _extends$4({}, otherProps, {
      className: "react-calendar__month-view__days",
      count: 7,
      currentMonthIndex: monthIndex,
      dateTransform: function dateTransform(day) {
        var date = new Date();
        date.setFullYear(year, monthIndex, day);
        date.setHours(0, 0, 0, 0);
        return date;
      },
      dateType: "day",
      end: end,
      offset: offset,
      start: start,
      tile: Day
    }));
  }
  Days.propTypes = _objectSpread$3({
    calendarType: isCalendarType.isRequired,
    showFixedNumberOfWeeks: propTypes$2.exports.bool,
    showNeighboringMonth: propTypes$2.exports.bool
  }, tileGroupProps);

  var className$1 = 'react-calendar__month-view__weekdays';
  function Weekdays(props) {
    var calendarType = props.calendarType,
        _props$formatShortWee = props.formatShortWeekday,
        formatShortWeekday$1 = _props$formatShortWee === void 0 ? formatShortWeekday : _props$formatShortWee,
        locale = props.locale,
        onMouseLeave = props.onMouseLeave;
    var anyDate = new Date();
    var beginOfMonth = getMonthStart(anyDate);
    var year = getYear(beginOfMonth);
    var monthIndex = getMonth(beginOfMonth);
    var weekdays = [];

    for (var weekday = 1; weekday <= 7; weekday += 1) {
      var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
      var abbr = formatWeekday(locale, weekdayDate);
      weekdays.push( /*#__PURE__*/React__default["default"].createElement("div", {
        key: weekday,
        className: "".concat(className$1, "__weekday")
      }, /*#__PURE__*/React__default["default"].createElement("abbr", {
        "aria-label": abbr,
        title: abbr
      }, formatShortWeekday$1(locale, weekdayDate).replace('.', ''))));
    }

    return /*#__PURE__*/React__default["default"].createElement(Flex, {
      className: className$1,
      count: 7,
      onFocus: onMouseLeave,
      onMouseOver: onMouseLeave
    }, weekdays);
  }
  Weekdays.propTypes = {
    calendarType: isCalendarType.isRequired,
    formatShortWeekday: propTypes$2.exports.func,
    locale: propTypes$2.exports.string,
    onMouseLeave: propTypes$2.exports.func
  };

  var _excluded$h = ["date", "onClickWeekNumber", "weekNumber"];

  function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  var className = 'react-calendar__tile';
  function WeekNumber(_ref) {
    var date = _ref.date,
        onClickWeekNumber = _ref.onClickWeekNumber,
        weekNumber = _ref.weekNumber,
        otherProps = _objectWithoutProperties$3(_ref, _excluded$h);

    var props = _objectSpread$2({
      className: className
    }, otherProps);

    var children = /*#__PURE__*/React__default["default"].createElement("span", null, weekNumber);
    return onClickWeekNumber ? /*#__PURE__*/React__default["default"].createElement("button", _extends$3({}, props, {
      onClick: function onClick(event) {
        return onClickWeekNumber(weekNumber, date, event);
      },
      type: "button"
    }), children) : /*#__PURE__*/React__default["default"].createElement("div", props, children);
  }
  WeekNumber.propTypes = {
    date: propTypes$2.exports.instanceOf(Date).isRequired,
    onClickWeekNumber: propTypes$2.exports.func,
    weekNumber: propTypes$2.exports.node.isRequired
  };

  function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate,
        calendarType = props.calendarType,
        onClickWeekNumber = props.onClickWeekNumber,
        onMouseLeave = props.onMouseLeave,
        showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

    var numberOfWeeks = function () {
      if (showFixedNumberOfWeeks) {
        return 6;
      }

      var numberOfDays = getDaysInMonth(activeStartDate);
      var startWeekday = getDayOfWeek(activeStartDate, calendarType);
      var days = numberOfDays - (7 - startWeekday);
      return 1 + Math.ceil(days / 7);
    }();

    var dates = function () {
      var year = getYear(activeStartDate);
      var monthIndex = getMonth(activeStartDate);
      var day = getDate(activeStartDate);
      var result = [];

      for (var index = 0; index < numberOfWeeks; index += 1) {
        result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
      }

      return result;
    }();

    var weekNumbers = dates.map(function (date) {
      return getWeekNumber(date, calendarType);
    });
    return /*#__PURE__*/React__default["default"].createElement(Flex, {
      className: "react-calendar__month-view__weekNumbers",
      count: numberOfWeeks,
      direction: "column",
      onFocus: onMouseLeave,
      onMouseOver: onMouseLeave,
      style: {
        flexBasis: 'calc(100% * (1 / 8)',
        flexShrink: 0
      }
    }, weekNumbers.map(function (weekNumber, weekIndex) {
      return /*#__PURE__*/React__default["default"].createElement(WeekNumber, {
        key: weekNumber,
        date: dates[weekIndex],
        onClickWeekNumber: onClickWeekNumber,
        weekNumber: weekNumber
      });
    }));
  }
  WeekNumbers.propTypes = {
    activeStartDate: propTypes$2.exports.instanceOf(Date).isRequired,
    calendarType: isCalendarType.isRequired,
    onClickWeekNumber: propTypes$2.exports.func,
    onMouseLeave: propTypes$2.exports.func,
    showFixedNumberOfWeeks: propTypes$2.exports.bool
  };

  var _excluded$g = ["calendarType", "formatShortWeekday", "onClickWeekNumber", "showWeekNumbers"];

  function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

  function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function getCalendarTypeFromLocale(locale) {
    return Object.keys(CALENDAR_TYPE_LOCALES).find(function (calendarType) {
      return CALENDAR_TYPE_LOCALES[calendarType].includes(locale);
    }) || CALENDAR_TYPES.ISO_8601;
  }

  function MonthView(props) {
    var activeStartDate = props.activeStartDate,
        locale = props.locale,
        onMouseLeave = props.onMouseLeave,
        showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

    var _props$calendarType = props.calendarType,
        calendarType = _props$calendarType === void 0 ? getCalendarTypeFromLocale(locale) : _props$calendarType,
        formatShortWeekday = props.formatShortWeekday,
        onClickWeekNumber = props.onClickWeekNumber,
        showWeekNumbers = props.showWeekNumbers,
        childProps = _objectWithoutProperties$2(props, _excluded$g);

    function renderWeekdays() {
      return /*#__PURE__*/React__default["default"].createElement(Weekdays, {
        calendarType: calendarType,
        formatShortWeekday: formatShortWeekday,
        locale: locale,
        onMouseLeave: onMouseLeave
      });
    }

    function renderWeekNumbers() {
      if (!showWeekNumbers) {
        return null;
      }

      return /*#__PURE__*/React__default["default"].createElement(WeekNumbers, {
        activeStartDate: activeStartDate,
        calendarType: calendarType,
        onClickWeekNumber: onClickWeekNumber,
        onMouseLeave: onMouseLeave,
        showFixedNumberOfWeeks: showFixedNumberOfWeeks
      });
    }

    function renderDays() {
      return /*#__PURE__*/React__default["default"].createElement(Days, _extends$2({
        calendarType: calendarType
      }, childProps));
    }

    var className = 'react-calendar__month-view';
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: mergeClassNames(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : '')
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, renderWeekNumbers(), /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        flexGrow: 1,
        width: '100%'
      }
    }, renderWeekdays(), renderDays())));
  }
  MonthView.propTypes = {
    activeStartDate: propTypes$2.exports.instanceOf(Date).isRequired,
    calendarType: isCalendarType,
    formatShortWeekday: propTypes$2.exports.func,
    locale: propTypes$2.exports.string,
    onClickWeekNumber: propTypes$2.exports.func,
    onMouseLeave: propTypes$2.exports.func,
    showFixedNumberOfWeeks: propTypes$2.exports.bool,
    showWeekNumbers: propTypes$2.exports.bool
  };

  var _excluded$f = ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"];

  function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

  function _typeof$2(obj) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$2(obj); }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

  function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

  function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$2(self); }

  function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }

  function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

  function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }

  function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  var defaultMinDate = new Date();
  defaultMinDate.setFullYear(1, 0, 1);
  defaultMinDate.setHours(0, 0, 0, 0);
  var defaultMaxDate = new Date(8.64e15);
  var baseClassName = 'react-calendar';
  var allViews$1 = ['century', 'decade', 'year', 'month'];
  var allValueTypes$1 = [].concat(_toConsumableArray$2(allViews$1.slice(1)), ['day']);

  function toDate(value) {
    if (value instanceof Date) {
      return value;
    }

    return new Date(value);
  }
  /**
   * Returns views array with disallowed values cut off.
   */


  function getLimitedViews(minDetail, maxDetail) {
    return allViews$1.slice(allViews$1.indexOf(minDetail), allViews$1.indexOf(maxDetail) + 1);
  }
  /**
   * Determines whether a given view is allowed with currently applied settings.
   */


  function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
  }
  /**
   * Gets either provided view if allowed by minDetail and maxDetail, or gets
   * the default view if not allowed.
   */


  function getView(view, minDetail, maxDetail) {
    if (isViewAllowed(view, minDetail, maxDetail)) {
      return view;
    }

    return maxDetail;
  }
  /**
   * Returns value type that can be returned with currently applied settings.
   */


  function getValueType(maxDetail) {
    return allValueTypes$1[allViews$1.indexOf(maxDetail)];
  }

  function getValue$1(value, index) {
    if (!value) {
      return null;
    }

    var rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

    if (!rawValue) {
      return null;
    }

    var valueDate = toDate(rawValue);

    if (isNaN(valueDate.getTime())) {
      throw new Error("Invalid date: ".concat(value));
    }

    return valueDate;
  }

  function getDetailValue(_ref, index) {
    var value = _ref.value,
        minDate = _ref.minDate,
        maxDate = _ref.maxDate,
        maxDetail = _ref.maxDetail;
    var valuePiece = getValue$1(value, index);

    if (!valuePiece) {
      return null;
    }

    var valueType = getValueType(maxDetail);
    var detailValueFrom = [getBegin$1, getEnd$1][index](valueType, valuePiece);
    return between$1(detailValueFrom, minDate, maxDate);
  }

  var getDetailValueFrom = function getDetailValueFrom(args) {
    return getDetailValue(args, 0);
  };

  var getDetailValueTo = function getDetailValueTo(args) {
    return getDetailValue(args, 1);
  };

  var getDetailValueArray = function getDetailValueArray(args) {
    var value = args.value;

    if (Array.isArray(value)) {
      return value;
    }

    return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
      return fn(args);
    });
  };

  function getActiveStartDate(props) {
    var maxDate = props.maxDate,
        maxDetail = props.maxDetail,
        minDate = props.minDate,
        minDetail = props.minDetail,
        value = props.value,
        view = props.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
      value: value,
      minDate: minDate,
      maxDate: maxDate,
      maxDetail: maxDetail
    }) || new Date();
    return getBegin$1(rangeType, valueFrom);
  }

  function getInitialActiveStartDate(props) {
    var activeStartDate = props.activeStartDate,
        defaultActiveStartDate = props.defaultActiveStartDate,
        defaultValue = props.defaultValue,
        defaultView = props.defaultView,
        maxDetail = props.maxDetail,
        minDetail = props.minDetail,
        value = props.value,
        view = props.view,
        otherProps = _objectWithoutProperties$1(props, _excluded$f);

    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;

    if (valueFrom) {
      return getBegin$1(rangeType, valueFrom);
    }

    return getActiveStartDate(_objectSpread$1({
      maxDetail: maxDetail,
      minDetail: minDetail,
      value: value || defaultValue,
      view: view || defaultView
    }, otherProps));
  }

  var getIsSingleValue = function getIsSingleValue(value) {
    return value && [].concat(value).length === 1;
  };

  var Calendar = /*#__PURE__*/function (_Component) {
    _inherits$1(Calendar, _Component);

    var _super = _createSuper$1(Calendar);

    function Calendar() {
      var _this;

      _classCallCheck$1(this, Calendar);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));

      _defineProperty$1(_assertThisInitialized$2(_this), "state", {
        activeStartDate: _this.props.defaultActiveStartDate,
        value: _this.props.defaultValue,
        view: _this.props.defaultView
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "setStateAndCallCallbacks", function (nextState, event, callback) {
        var _assertThisInitialize = _assertThisInitialized$2(_this),
            previousActiveStartDate = _assertThisInitialize.activeStartDate,
            previousView = _assertThisInitialize.view;

        var _this$props = _this.props,
            allowPartialRange = _this$props.allowPartialRange,
            onActiveStartDateChange = _this$props.onActiveStartDateChange,
            onChange = _this$props.onChange,
            onViewChange = _this$props.onViewChange,
            selectRange = _this$props.selectRange;
        var prevArgs = {
          activeStartDate: previousActiveStartDate,
          view: previousView
        };

        _this.setState(nextState, function () {
          var args = {
            action: nextState.action,
            activeStartDate: nextState.activeStartDate || _this.activeStartDate,
            value: nextState.value || _this.value,
            view: nextState.view || _this.view
          };

          function shouldUpdate(key) {
            return (// Key must exist, and…
              key in nextState && ( // …key changed from undefined to defined or the other way around, or…
              _typeof$2(nextState[key]) !== _typeof$2(prevArgs[key]) || ( // …value changed.
              nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
            );
          }

          if (shouldUpdate('activeStartDate')) {
            if (onActiveStartDateChange) onActiveStartDateChange(args);
          }

          if (shouldUpdate('view')) {
            if (onViewChange) onViewChange(args);
          }

          if (shouldUpdate('value')) {
            if (onChange) {
              if (selectRange) {
                var isSingleValue = getIsSingleValue(nextState.value);

                if (!isSingleValue) {
                  onChange(nextState.value, event);
                } else if (allowPartialRange) {
                  onChange([nextState.value], event);
                }
              } else {
                onChange(nextState.value, event);
              }
            }
          }

          if (callback) callback(args);
        });
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "setActiveStartDate", function (nextActiveStartDate, action) {
        _this.setStateAndCallCallbacks({
          action: action,
          activeStartDate: nextActiveStartDate
        });
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "drillDown", function (nextActiveStartDate, event) {
        if (!_this.drillDownAvailable) {
          return;
        }

        _this.onClickTile(nextActiveStartDate, event);

        var _assertThisInitialize2 = _assertThisInitialized$2(_this),
            view = _assertThisInitialize2.view,
            views = _assertThisInitialize2.views;

        var onDrillDown = _this.props.onDrillDown;
        var nextView = views[views.indexOf(view) + 1];

        _this.setStateAndCallCallbacks({
          action: 'drillDown',
          activeStartDate: nextActiveStartDate,
          view: nextView
        }, undefined, onDrillDown);
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "drillUp", function () {
        if (!_this.drillUpAvailable) {
          return;
        }

        var _assertThisInitialize3 = _assertThisInitialized$2(_this),
            activeStartDate = _assertThisInitialize3.activeStartDate,
            view = _assertThisInitialize3.view,
            views = _assertThisInitialize3.views;

        var onDrillUp = _this.props.onDrillUp;
        var nextView = views[views.indexOf(view) - 1];
        var nextActiveStartDate = getBegin$1(nextView, activeStartDate);

        _this.setStateAndCallCallbacks({
          action: 'drillUp',
          activeStartDate: nextActiveStartDate,
          view: nextView
        }, undefined, onDrillUp);
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "onChange", function (value, event) {
        var selectRange = _this.props.selectRange;

        _this.onClickTile(value, event);

        var nextValue;

        if (selectRange) {
          // Range selection turned on
          var _assertThisInitialize4 = _assertThisInitialized$2(_this),
              previousValue = _assertThisInitialize4.value,
              valueType = _assertThisInitialize4.valueType;

          if (!getIsSingleValue(previousValue)) {
            // Value has 0 or 2 elements - either way we're starting a new array
            // First value
            nextValue = getBegin$1(valueType, value);
          } else {
            // Second value
            nextValue = getValueRange(valueType, previousValue, value);
          }
        } else {
          // Range selection turned off
          nextValue = _this.getProcessedValue(value);
        }

        var nextActiveStartDate = getActiveStartDate(_objectSpread$1(_objectSpread$1({}, _this.props), {}, {
          value: nextValue
        }));
        event.persist();

        _this.setStateAndCallCallbacks({
          action: 'onChange',
          activeStartDate: nextActiveStartDate,
          value: nextValue
        }, event);
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "onClickTile", function (value, event) {
        var _assertThisInitialize5 = _assertThisInitialized$2(_this),
            view = _assertThisInitialize5.view;

        var _this$props2 = _this.props,
            onClickDay = _this$props2.onClickDay,
            onClickDecade = _this$props2.onClickDecade,
            onClickMonth = _this$props2.onClickMonth,
            onClickYear = _this$props2.onClickYear;

        var callback = function () {
          switch (view) {
            case 'century':
              return onClickDecade;

            case 'decade':
              return onClickYear;

            case 'year':
              return onClickMonth;

            case 'month':
              return onClickDay;

            default:
              throw new Error("Invalid view: ".concat(view, "."));
          }
        }();

        if (callback) callback(value, event);
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "onMouseOver", function (value) {
        _this.setState(function (prevState) {
          if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
            return null;
          }

          return {
            hover: value
          };
        });
      });

      _defineProperty$1(_assertThisInitialized$2(_this), "onMouseLeave", function () {
        _this.setState({
          hover: null
        });
      });

      return _this;
    }

    _createClass$1(Calendar, [{
      key: "activeStartDate",
      get: function get() {
        var activeStartDateProps = this.props.activeStartDate;
        var activeStartDateState = this.state.activeStartDate;
        return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
      }
    }, {
      key: "value",
      get: function get() {
        var _this$props3 = this.props,
            selectRange = _this$props3.selectRange,
            valueProps = _this$props3.value;
        var valueState = this.state.value; // In the middle of range selection, use value from state

        if (selectRange && getIsSingleValue(valueState)) {
          return valueState;
        }

        return valueProps !== undefined ? valueProps : valueState;
      }
    }, {
      key: "valueType",
      get: function get() {
        var maxDetail = this.props.maxDetail;
        return getValueType(maxDetail);
      }
    }, {
      key: "view",
      get: function get() {
        var _this$props4 = this.props,
            minDetail = _this$props4.minDetail,
            maxDetail = _this$props4.maxDetail,
            viewProps = _this$props4.view;
        var viewState = this.state.view;
        return getView(viewProps || viewState, minDetail, maxDetail);
      }
    }, {
      key: "views",
      get: function get() {
        var _this$props5 = this.props,
            minDetail = _this$props5.minDetail,
            maxDetail = _this$props5.maxDetail;
        return getLimitedViews(minDetail, maxDetail);
      }
    }, {
      key: "hover",
      get: function get() {
        var selectRange = this.props.selectRange;
        var hover = this.state.hover;
        return selectRange ? hover : null;
      }
    }, {
      key: "drillDownAvailable",
      get: function get() {
        var view = this.view,
            views = this.views;
        return views.indexOf(view) < views.length - 1;
      }
    }, {
      key: "drillUpAvailable",
      get: function get() {
        var view = this.view,
            views = this.views;
        return views.indexOf(view) > 0;
      }
      /**
       * Gets current value in a desired format.
       */

    }, {
      key: "getProcessedValue",
      value: function getProcessedValue(value) {
        var _this$props6 = this.props,
            minDate = _this$props6.minDate,
            maxDate = _this$props6.maxDate,
            maxDetail = _this$props6.maxDetail,
            returnValue = _this$props6.returnValue;

        var processFunction = function () {
          switch (returnValue) {
            case 'start':
              return getDetailValueFrom;

            case 'end':
              return getDetailValueTo;

            case 'range':
              return getDetailValueArray;

            default:
              throw new Error('Invalid returnValue.');
          }
        }();

        return processFunction({
          value: value,
          minDate: minDate,
          maxDate: maxDate,
          maxDetail: maxDetail
        });
      }
    }, {
      key: "renderContent",
      value: function renderContent(next) {
        var currentActiveStartDate = this.activeStartDate,
            onMouseOver = this.onMouseOver,
            valueType = this.valueType,
            value = this.value,
            view = this.view;
        var _this$props7 = this.props,
            calendarType = _this$props7.calendarType,
            locale = _this$props7.locale,
            maxDate = _this$props7.maxDate,
            minDate = _this$props7.minDate,
            selectRange = _this$props7.selectRange,
            tileClassName = _this$props7.tileClassName,
            tileContent = _this$props7.tileContent,
            tileDisabled = _this$props7.tileDisabled;
        var hover = this.hover;
        var activeStartDate = next ? getBeginNext(view, currentActiveStartDate) : getBegin$1(view, currentActiveStartDate);
        var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
        var commonProps = {
          activeStartDate: activeStartDate,
          hover: hover,
          locale: locale,
          maxDate: maxDate,
          minDate: minDate,
          onClick: onClick,
          onMouseOver: selectRange ? onMouseOver : null,
          tileClassName: tileClassName,
          tileContent: tileContent,
          tileDisabled: tileDisabled,
          value: value,
          valueType: valueType
        };

        switch (view) {
          case 'century':
            {
              var formatYear = this.props.formatYear;
              return /*#__PURE__*/React__default["default"].createElement(CenturyView, _extends$1({
                formatYear: formatYear
              }, commonProps));
            }

          case 'decade':
            {
              var _formatYear = this.props.formatYear;
              return /*#__PURE__*/React__default["default"].createElement(DecadeView, _extends$1({
                formatYear: _formatYear
              }, commonProps));
            }

          case 'year':
            {
              var _this$props8 = this.props,
                  formatMonth = _this$props8.formatMonth,
                  formatMonthYear = _this$props8.formatMonthYear;
              return /*#__PURE__*/React__default["default"].createElement(YearView, _extends$1({
                formatMonth: formatMonth,
                formatMonthYear: formatMonthYear
              }, commonProps));
            }

          case 'month':
            {
              var _this$props9 = this.props,
                  formatDay = _this$props9.formatDay,
                  formatLongDate = _this$props9.formatLongDate,
                  formatShortWeekday = _this$props9.formatShortWeekday,
                  onClickWeekNumber = _this$props9.onClickWeekNumber,
                  showDoubleView = _this$props9.showDoubleView,
                  showFixedNumberOfWeeks = _this$props9.showFixedNumberOfWeeks,
                  showNeighboringMonth = _this$props9.showNeighboringMonth,
                  showWeekNumbers = _this$props9.showWeekNumbers;
              var onMouseLeave = this.onMouseLeave;
              return /*#__PURE__*/React__default["default"].createElement(MonthView, _extends$1({
                calendarType: calendarType,
                formatDay: formatDay,
                formatLongDate: formatLongDate,
                formatShortWeekday: formatShortWeekday,
                onClickWeekNumber: onClickWeekNumber,
                onMouseLeave: selectRange ? onMouseLeave : null,
                showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
                showNeighboringMonth: showNeighboringMonth,
                showWeekNumbers: showWeekNumbers
              }, commonProps));
            }

          default:
            throw new Error("Invalid view: ".concat(view, "."));
        }
      }
    }, {
      key: "renderNavigation",
      value: function renderNavigation() {
        var showNavigation = this.props.showNavigation;

        if (!showNavigation) {
          return null;
        }

        var activeStartDate = this.activeStartDate,
            view = this.view,
            views = this.views;
        var _this$props10 = this.props,
            formatMonthYear = _this$props10.formatMonthYear,
            formatYear = _this$props10.formatYear,
            locale = _this$props10.locale,
            maxDate = _this$props10.maxDate,
            minDate = _this$props10.minDate,
            navigationAriaLabel = _this$props10.navigationAriaLabel,
            navigationAriaLive = _this$props10.navigationAriaLive,
            navigationLabel = _this$props10.navigationLabel,
            next2AriaLabel = _this$props10.next2AriaLabel,
            next2Label = _this$props10.next2Label,
            nextAriaLabel = _this$props10.nextAriaLabel,
            nextLabel = _this$props10.nextLabel,
            prev2AriaLabel = _this$props10.prev2AriaLabel,
            prev2Label = _this$props10.prev2Label,
            prevAriaLabel = _this$props10.prevAriaLabel,
            prevLabel = _this$props10.prevLabel,
            showDoubleView = _this$props10.showDoubleView;
        return /*#__PURE__*/React__default["default"].createElement(Navigation, {
          activeStartDate: activeStartDate,
          drillUp: this.drillUp,
          formatMonthYear: formatMonthYear,
          formatYear: formatYear,
          locale: locale,
          maxDate: maxDate,
          minDate: minDate,
          navigationAriaLabel: navigationAriaLabel,
          navigationAriaLive: navigationAriaLive,
          navigationLabel: navigationLabel,
          next2AriaLabel: next2AriaLabel,
          next2Label: next2Label,
          nextAriaLabel: nextAriaLabel,
          nextLabel: nextLabel,
          prev2AriaLabel: prev2AriaLabel,
          prev2Label: prev2Label,
          prevAriaLabel: prevAriaLabel,
          prevLabel: prevLabel,
          setActiveStartDate: this.setActiveStartDate,
          showDoubleView: showDoubleView,
          view: view,
          views: views
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props11 = this.props,
            className = _this$props11.className,
            inputRef = _this$props11.inputRef,
            selectRange = _this$props11.selectRange,
            showDoubleView = _this$props11.showDoubleView;
        var onMouseLeave = this.onMouseLeave,
            value = this.value;
        var valueArray = [].concat(value);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: mergeClassNames(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
          ref: inputRef
        }, this.renderNavigation(), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "".concat(baseClassName, "__viewContainer"),
          onBlur: selectRange ? onMouseLeave : null,
          onMouseLeave: selectRange ? onMouseLeave : null
        }, this.renderContent(), showDoubleView && this.renderContent(true)));
      }
    }]);

    return Calendar;
  }(React$1.Component);
  Calendar.defaultProps = {
    maxDate: defaultMaxDate,
    maxDetail: 'month',
    minDate: defaultMinDate,
    minDetail: 'century',
    returnValue: 'start',
    showNavigation: true,
    showNeighboringMonth: true
  };
  var isActiveStartDate = propTypes$2.exports.instanceOf(Date);
  var isLooseValue = propTypes$2.exports.oneOfType([propTypes$2.exports.string, isValue]);
  Calendar.propTypes = {
    activeStartDate: isActiveStartDate,
    allowPartialRange: propTypes$2.exports.bool,
    calendarType: isCalendarType,
    className: isClassName,
    defaultActiveStartDate: isActiveStartDate,
    defaultValue: isLooseValue,
    defaultView: isView,
    formatDay: propTypes$2.exports.func,
    formatLongDate: propTypes$2.exports.func,
    formatMonth: propTypes$2.exports.func,
    formatMonthYear: propTypes$2.exports.func,
    formatShortWeekday: propTypes$2.exports.func,
    formatYear: propTypes$2.exports.func,
    inputRef: isRef$1,
    locale: propTypes$2.exports.string,
    maxDate: isMaxDate$1,
    maxDetail: propTypes$2.exports.oneOf(allViews$1),
    minDate: isMinDate$1,
    minDetail: propTypes$2.exports.oneOf(allViews$1),
    navigationAriaLabel: propTypes$2.exports.string,
    navigationAriaLive: propTypes$2.exports.oneOf(['off', 'polite', 'assertive']),
    navigationLabel: propTypes$2.exports.func,
    next2AriaLabel: propTypes$2.exports.string,
    next2Label: propTypes$2.exports.node,
    nextAriaLabel: propTypes$2.exports.string,
    nextLabel: propTypes$2.exports.node,
    onActiveStartDateChange: propTypes$2.exports.func,
    onChange: propTypes$2.exports.func,
    onClickDay: propTypes$2.exports.func,
    onClickDecade: propTypes$2.exports.func,
    onClickMonth: propTypes$2.exports.func,
    onClickWeekNumber: propTypes$2.exports.func,
    onClickYear: propTypes$2.exports.func,
    onDrillDown: propTypes$2.exports.func,
    onDrillUp: propTypes$2.exports.func,
    onViewChange: propTypes$2.exports.func,
    prev2AriaLabel: propTypes$2.exports.string,
    prev2Label: propTypes$2.exports.node,
    prevAriaLabel: propTypes$2.exports.string,
    prevLabel: propTypes$2.exports.node,
    returnValue: propTypes$2.exports.oneOf(['start', 'end', 'range']),
    selectRange: propTypes$2.exports.bool,
    showDoubleView: propTypes$2.exports.bool,
    showFixedNumberOfWeeks: propTypes$2.exports.bool,
    showNavigation: propTypes$2.exports.bool,
    showNeighboringMonth: propTypes$2.exports.bool,
    showWeekNumbers: propTypes$2.exports.bool,
    tileClassName: propTypes$2.exports.oneOfType([propTypes$2.exports.func, isClassName]),
    tileContent: propTypes$2.exports.oneOfType([propTypes$2.exports.func, propTypes$2.exports.node]),
    tileDisabled: propTypes$2.exports.func,
    value: isLooseValue,
    view: isView
  };

  var esm$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Calendar,
    Calendar: Calendar,
    CenturyView: CenturyView,
    DecadeView: DecadeView,
    YearView: YearView,
    MonthView: MonthView
  });

  var require$$4$1 = /*@__PURE__*/getAugmentedNamespace(esm$2);

  var getRect = function getRect(element) {
    return element.getBoundingClientRect();
  };

  var detectElementOverflow = function detectElementOverflow(element, container) {
    return {
      get collidedTop() {
        return getRect(element).top < getRect(container).top;
      },

      get collidedBottom() {
        return getRect(element).bottom > getRect(container).bottom;
      },

      get collidedLeft() {
        return getRect(element).left < getRect(container).left;
      },

      get collidedRight() {
        return getRect(element).right > getRect(container).right;
      },

      get overflowTop() {
        return getRect(container).top - getRect(element).top;
      },

      get overflowBottom() {
        return getRect(element).bottom - getRect(container).bottom;
      },

      get overflowLeft() {
        return getRect(container).left - getRect(element).left;
      },

      get overflowRight() {
        return getRect(element).right - getRect(container).right;
      }

    };
  };

  var isProduction = process.env.NODE_ENV === 'production';
  function warning(condition, message) {
    if (!isProduction) {
      if (condition) {
        return;
      }

      var text = "Warning: " + message;

      if (typeof console !== 'undefined') {
        console.warn(text);
      }

      try {
        throw Error(text);
      } catch (x) {}
    }
  }

  var _excluded$e = ["invertAxis", "invertSecondaryAxis"];

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$1(self); }

  function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
  var isBrowser = typeof window !== 'undefined';
  var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
  var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

  function capitalize(a) {
    return a[0].toUpperCase() + a.slice(1);
  }

  function findScrollContainer(element) {
    if (!element) {
      return undefined;
    }

    var parent = element.parentElement;

    while (parent) {
      var _window$getComputedSt = window.getComputedStyle(parent),
          overflow = _window$getComputedSt.overflow;

      if (overflow.split(' ').every(function (o) {
        return o === 'auto' || o === 'scroll';
      })) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return document.documentElement;
  }

  function alignAxis(_ref) {
    var axis = _ref.axis,
        container = _ref.container,
        element = _ref.element,
        invertAxis = _ref.invertAxis,
        secondary = _ref.secondary,
        scrollContainer = _ref.scrollContainer,
        spacing = _ref.spacing;
    var style = window.getComputedStyle(element);
    var parent = container.parentElement;
    var scrollContainerCollisions = detectElementOverflow(parent, scrollContainer);
    var documentCollisions = detectElementOverflow(parent, document.documentElement);
    var isX = axis === 'x';
    var startProperty = isX ? 'left' : 'top';
    var endProperty = isX ? 'right' : 'bottom';
    var sizeProperty = isX ? 'width' : 'height';
    var overflowStartProperty = "overflow".concat(capitalize(startProperty));
    var overflowEndProperty = "overflow".concat(capitalize(endProperty));
    var scrollProperty = "scroll".concat(capitalize(startProperty));
    var uppercasedSizeProperty = capitalize(sizeProperty);
    var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
    var clientSizeProperty = "client".concat(uppercasedSizeProperty);
    var minSizeProperty = "min-".concat(sizeProperty);
    var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
    var startSpacing = _typeof$1(spacing) === 'object' ? spacing[startProperty] : spacing;
    var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
    var endSpacing = _typeof$1(spacing) === 'object' ? spacing[endProperty] : spacing;
    var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;

    if (secondary) {
      availableStartSpace += parent[clientSizeProperty];
      availableEndSpace += parent[clientSizeProperty];
    }

    var offsetSize = element[offsetSizeProperty];

    function displayStart() {
      element.style[startProperty] = 'auto';
      element.style[endProperty] = secondary ? '0' : '100%';
    }

    function displayEnd() {
      element.style[startProperty] = secondary ? '0' : '100%';
      element.style[endProperty] = 'auto';
    }

    function displayIfFits(availableSpace, display) {
      var fits = offsetSize <= availableSpace;

      if (fits) {
        display();
      }

      return fits;
    }

    function displayStartIfFits() {
      return displayIfFits(availableStartSpace, displayStart);
    }

    function displayEndIfFits() {
      return displayIfFits(availableEndSpace, displayEnd);
    }

    function displayWhereverShrinkedFits() {
      var moreSpaceStart = availableStartSpace > availableEndSpace;
      var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

      function shrinkToSize(size) {
        warning(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
        var newSize = Math.max(size, minSize || 0);
        warning(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
        element.style[sizeProperty] = "".concat(newSize, "px");
      }

      if (moreSpaceStart) {
        shrinkToSize(availableStartSpace);
        displayStart();
      } else {
        shrinkToSize(availableEndSpace);
        displayEnd();
      }
    }

    var fits;

    if (invertAxis) {
      fits = displayStartIfFits() || displayEndIfFits();
    } else {
      fits = displayEndIfFits() || displayStartIfFits();
    }

    if (!fits) {
      displayWhereverShrinkedFits();
    }
  }

  function alignMainAxis(args) {
    alignAxis(args);
  }

  function alignSecondaryAxis(args) {
    alignAxis(_objectSpread(_objectSpread({}, args), {}, {
      axis: args.axis === 'x' ? 'y' : 'x',
      secondary: true
    }));
  }

  function alignBothAxis(args) {
    var invertAxis = args.invertAxis,
        invertSecondaryAxis = args.invertSecondaryAxis,
        commonArgs = _objectWithoutProperties(args, _excluded$e);

    alignMainAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
      invertAxis: invertAxis
    }));
    alignSecondaryAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
      invertAxis: invertSecondaryAxis
    }));
  }

  var Fit = /*#__PURE__*/function (_Component) {
    _inherits(Fit, _Component);

    var _super = _createSuper(Fit);

    function Fit() {
      var _this;

      _classCallCheck(this, Fit);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized$1(_this), "onMutation", function () {
        _this.fit();
      });

      _defineProperty(_assertThisInitialized$1(_this), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

      _defineProperty(_assertThisInitialized$1(_this), "fit", function () {
        var _assertThisInitialize = _assertThisInitialized$1(_this),
            scrollContainer = _assertThisInitialize.scrollContainer,
            container = _assertThisInitialize.container,
            element = _assertThisInitialize.element;

        if (!element) {
          return;
        }

        var elementWidth = element.clientWidth;
        var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

        if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
          return;
        } // Save the dimensions so that we know we don't need to repeat the function if unchanged


        _this.elementWidth = elementWidth;
        _this.elementHeight = elementHeight;
        var parent = container.parentElement; // Container was unmounted

        if (!parent) {
          return;
        }
        /**
         * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */


        var style = window.getComputedStyle(element);
        var position = style.position;

        if (position !== 'absolute') {
          warning(false, '<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
          element.style.position = 'absolute';
        }
        /**
         * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */


        var parentStyle = window.getComputedStyle(parent);
        var parentPosition = parentStyle.position;

        if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
          warning(false, '<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
          parent.style.position = 'relative';
        }

        var _this$props = _this.props,
            invertAxis = _this$props.invertAxis,
            invertSecondaryAxis = _this$props.invertSecondaryAxis,
            mainAxis = _this$props.mainAxis,
            spacing = _this$props.spacing;
        alignBothAxis({
          container: container,
          element: element,
          invertAxis: invertAxis,
          invertSecondaryAxis: invertSecondaryAxis,
          axis: mainAxis,
          scrollContainer: scrollContainer,
          spacing: spacing
        });
      });

      return _this;
    }

    _createClass(Fit, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!isDisplayContentsSupported) {
          // eslint-disable-next-line react/no-find-dom-node
          var element = ReactDOM.findDOMNode(this);
          this.container = element;
          this.element = element;
          this.scrollContainer = findScrollContainer(element);
        }

        this.fit();

        if (isMutationObserverSupported) {
          this.mutationObserver.observe(this.element, {
            attributes: true,
            attributeFilter: ['class', 'style']
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var children = this.props.children;
        var child = React__default["default"].Children.only(children);

        if (isDisplayContentsSupported) {
          return /*#__PURE__*/React__default["default"].createElement("span", {
            ref: function ref(container) {
              _this2.container = container;
              var element = container && container.firstChild;
              _this2.element = element;
              _this2.scrollContainer = findScrollContainer(element);
            },
            style: {
              display: 'contents'
            }
          }, child);
        }

        return child;
      }
    }]);

    return Fit;
  }(React$1.Component);
  Fit.propTypes = {
    children: propTypes$2.exports.node,
    invertAxis: propTypes$2.exports.bool,
    invertSecondaryAxis: propTypes$2.exports.bool,
    mainAxis: propTypes$2.exports.oneOf(['x', 'y']),
    spacing: propTypes$2.exports.oneOfType([propTypes$2.exports.number, propTypes$2.exports.shape({
      bottom: propTypes$2.exports.number.isRequired,
      left: propTypes$2.exports.number.isRequired,
      right: propTypes$2.exports.number.isRequired,
      top: propTypes$2.exports.number.isRequired
    })])
  };
  Fit.defaultProps = {
    mainAxis: 'y',
    spacing: 8
  };

  var Fit$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Fit
  });

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(Fit$1);

  var DateInput = {};

  var require$$2 = /*@__PURE__*/getAugmentedNamespace(esm$3);

  var Divider = {};

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = Divider;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function Divider(_ref) {
  	  var children = _ref.children;
  	  return /*#__PURE__*/_react["default"].createElement("span", {
  	    className: "react-date-picker__inputGroup__divider"
  	  }, children);
  	}

  	Divider.propTypes = {
  	  children: _propTypes["default"].node
  	};
  } (Divider));

  var DayInput = {};

  var Input = {};

  /**
   * A function that merges React refs into one.
   * Supports both functions and ref objects created using createRef() and useRef().
   *
   * Usage:
   * ```jsx
   * <div ref={mergeRefs(ref1, ref2, ref3)} />
   * ```
   *
   * @param {...Array<Function|object>} inputRefs Array of refs
   * @returns {Function} Merged refs
   */
  function mergeRefs() {
    for (var _len = arguments.length, inputRefs = new Array(_len), _key = 0; _key < _len; _key++) {
      inputRefs[_key] = arguments[_key];
    }

    var filteredInputRefs = inputRefs.filter(Boolean);

    if (filteredInputRefs.length <= 1) {
      return filteredInputRefs[0];
    }

    return function mergedRefs(ref) {
      filteredInputRefs.forEach(function (inputRef) {
        if (typeof inputRef === 'function') {
          inputRef(ref);
        } else {
          // eslint-disable-next-line no-param-reassign
          inputRef.current = ref;
        }
      });
    };
  }

  var esm$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': mergeRefs
  });

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(esm$1);

  var allowedVariants = ['normal', 'small-caps'];
  /**
   * Gets font CSS shorthand property given element.
   *
   * @param {HTMLElement} element Element to get font CSS shorthand property from
   */

  function getFontShorthand(element) {
    if (!element) {
      return '';
    }

    var style = window.getComputedStyle(element);

    if (style.font) {
      return style.font;
    }

    var isFontDefined = style['font-family'] !== '';

    if (!isFontDefined) {
      return '';
    }

    var fontVariant = allowedVariants.includes(style['font-variant']) ? style['font-variant'] : 'normal';
    return "".concat(style['font-style'], " ").concat(fontVariant, " ").concat(style['font-weight'], " ").concat(style['font-size'], " / ").concat(style['line-height'], " ").concat(style['font-family']);
  }
  /**
   * Measures text width given text and font CSS shorthand.
   *
   * @param {string} text Text to measure
   * @param {string} font Font to use when measuring the text
   */

  function measureText(text, font) {
    var canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
    var context = canvas.getContext('2d'); // Context type not supported

    if (!context) {
      return null;
    }

    context.font = font;

    var _context$measureText = context.measureText(text),
        width = _context$measureText.width;

    return Math.ceil(width);
  }
  /**
   * Updates input element width to fit its content given input element
   * @param {HTMLInputElement} element
   */

  function updateInputWidth(element) {
    if (typeof window === 'undefined' || !element) {
      return null;
    }

    var font = getFontShorthand(element);
    var text = element.value || element.placeholder;
    var width = measureText(text, font);

    if (width === null) {
      return null;
    }

    element.style.width = "".concat(width, "px");
    return width;
  }

  var esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getFontShorthand: getFontShorthand,
    measureText: measureText,
    updateInputWidth: updateInputWidth,
    'default': updateInputWidth
  });

  var require$$4 = /*@__PURE__*/getAugmentedNamespace(esm);

  var propTypes$1 = {};

  Object.defineProperty(propTypes$1, "__esModule", {
    value: true
  });
  propTypes$1.isValueType = propTypes$1.isRef = propTypes$1.isMinDate = propTypes$1.isMaxDate = void 0;

  var _propTypes = _interopRequireDefault$1(propTypes$2.exports);

  function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

  function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var allViews = ['century', 'decade', 'year', 'month'];
  var allValueTypes = [].concat(_toConsumableArray$1(allViews.slice(1)), ['day']);

  var isValueType = _propTypes["default"].oneOf(allValueTypes);

  propTypes$1.isValueType = isValueType;

  var isMinDate = function isMinDate(props, propName, componentName) {
    var minDate = props[propName];

    if (!minDate) {
      return null;
    }

    if (!(minDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var maxDate = props.maxDate;

    if (maxDate && minDate > maxDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    }

    return null;
  };

  propTypes$1.isMinDate = isMinDate;

  var isMaxDate = function isMaxDate(props, propName, componentName) {
    var maxDate = props[propName];

    if (!maxDate) {
      return null;
    }

    if (!(maxDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var minDate = props.minDate;

    if (minDate && maxDate < minDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    }

    return null;
  };

  propTypes$1.isMaxDate = isMaxDate;

  var isRef = _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]);

  propTypes$1.isRef = isRef;

  (function (exports) {

  	function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = Input;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _mergeClassNames = _interopRequireDefault(require$$3$1);

  	var _mergeRefs = _interopRequireDefault(require$$3);

  	var _updateInputWidth = _interopRequireWildcard(require$$4);

  	var _propTypes2 = propTypes$1;

  	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	/* eslint-disable jsx-a11y/no-autofocus */
  	var isIEOrEdgeLegacy = typeof window !== 'undefined' && /(MSIE|Trident\/|Edge\/)/.test(window.navigator.userAgent);
  	var isFirefox = typeof window !== 'undefined' && /Firefox/.test(window.navigator.userAgent);

  	function onFocus(event) {
  	  var target = event.target;

  	  if (isIEOrEdgeLegacy) {
  	    requestAnimationFrame(function () {
  	      return target.select();
  	    });
  	  } else {
  	    target.select();
  	  }
  	}

  	function updateInputWidthOnFontLoad(element) {
  	  if (!document.fonts) {
  	    return;
  	  }

  	  var font = (0, _updateInputWidth.getFontShorthand)(element);

  	  if (!font) {
  	    return;
  	  }

  	  var isFontLoaded = document.fonts.check(font);

  	  if (isFontLoaded) {
  	    return;
  	  }

  	  function onLoadingDone() {
  	    (0, _updateInputWidth["default"])(element);
  	  }

  	  document.fonts.addEventListener('loadingdone', onLoadingDone);
  	}

  	function getSelectionString(input) {
  	  /**
  	   * window.getSelection().toString() returns empty string in IE11 and Firefox,
  	   * so alternatives come first.
  	   */
  	  if (input && 'selectionStart' in input && input.selectionStart !== null) {
  	    return input.value.slice(input.selectionStart, input.selectionEnd);
  	  }

  	  if ('getSelection' in window) {
  	    return window.getSelection().toString();
  	  }

  	  return null;
  	}

  	function makeOnKeyPress(maxLength) {
  	  /**
  	   * Prevents keystrokes that would not produce a number or when value after keystroke would
  	   * exceed maxLength.
  	   */
  	  return function onKeyPress(event) {
  	    if (isFirefox) {
  	      // See https://github.com/wojtekmaj/react-time-picker/issues/92
  	      return;
  	    }

  	    var key = event.key,
  	        input = event.target;
  	    var value = input.value;
  	    var isNumberKey = key.length === 1 && /\d/.test(key);
  	    var selection = getSelectionString(input);

  	    if (!isNumberKey || !(selection || value.length < maxLength)) {
  	      event.preventDefault();
  	    }
  	  };
  	}

  	function Input(_ref) {
  	  var ariaLabel = _ref.ariaLabel,
  	      autoFocus = _ref.autoFocus,
  	      className = _ref.className,
  	      disabled = _ref.disabled,
  	      inputRef = _ref.inputRef,
  	      max = _ref.max,
  	      min = _ref.min,
  	      name = _ref.name,
  	      nameForClass = _ref.nameForClass,
  	      onChange = _ref.onChange,
  	      onKeyDown = _ref.onKeyDown,
  	      _onKeyUp = _ref.onKeyUp,
  	      _ref$placeholder = _ref.placeholder,
  	      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
  	      required = _ref.required,
  	      showLeadingZeros = _ref.showLeadingZeros,
  	      step = _ref.step,
  	      value = _ref.value;
  	  var hasLeadingZero = showLeadingZeros && value && value < 10 && (value === '0' || !value.toString().startsWith('0'));
  	  var maxLength = max ? max.toString().length : null;
  	  return [hasLeadingZero && /*#__PURE__*/_react["default"].createElement("span", {
  	    key: "leadingZero",
  	    className: "".concat(className, "__leadingZero")
  	  }, "0"), /*#__PURE__*/_react["default"].createElement("input", {
  	    key: "input",
  	    "aria-label": ariaLabel,
  	    autoComplete: "off",
  	    autoFocus: autoFocus,
  	    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
  	    "data-input": "true",
  	    disabled: disabled,
  	    inputMode: "numeric",
  	    max: max,
  	    min: min,
  	    name: name,
  	    onChange: onChange,
  	    onFocus: onFocus,
  	    onKeyDown: onKeyDown,
  	    onKeyPress: makeOnKeyPress(maxLength),
  	    onKeyUp: function onKeyUp(event) {
  	      (0, _updateInputWidth["default"])(event.target);

  	      if (_onKeyUp) {
  	        _onKeyUp(event);
  	      }
  	    },
  	    placeholder: placeholder,
  	    ref: (0, _mergeRefs["default"])(_updateInputWidth["default"], updateInputWidthOnFontLoad, inputRef),
  	    required: required,
  	    step: step,
  	    type: "number",
  	    value: value !== null ? value : ''
  	  })];
  	}

  	Input.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  autoFocus: _propTypes["default"].bool,
  	  className: _propTypes["default"].string.isRequired,
  	  disabled: _propTypes["default"].bool,
  	  inputRef: _propTypes2.isRef,
  	  max: _propTypes["default"].number,
  	  min: _propTypes["default"].number,
  	  name: _propTypes["default"].string,
  	  nameForClass: _propTypes["default"].string,
  	  onChange: _propTypes["default"].func,
  	  onKeyDown: _propTypes["default"].func,
  	  onKeyUp: _propTypes["default"].func,
  	  placeholder: _propTypes["default"].string,
  	  required: _propTypes["default"].bool,
  	  showLeadingZeros: _propTypes["default"].bool,
  	  step: _propTypes["default"].number,
  	  value: _propTypes["default"].string
  	};
  } (Input));

  var utils = {};

  Object.defineProperty(utils, "__esModule", {
    value: true
  });
  utils.between = between;
  utils.safeMax = safeMax;
  utils.safeMin = safeMin;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  /**
   * Returns a value no smaller than min and no larger than max.
   *
   * @param {*} value Value to return.
   * @param {*} min Minimum return value.
   * @param {*} max Maximum return value.
   */
  function between(value, min, max) {
    if (min && min > value) {
      return min;
    }

    if (max && max < value) {
      return max;
    }

    return value;
  }

  function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
  }

  function safeMin() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
  }

  function safeMax() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
  }

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = DayInput;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _dateUtils = require$$2;

  	var _Input = _interopRequireDefault(Input);

  	var _propTypes2 = propTypes$1;

  	var _utils = utils;

  	var _excluded = ["maxDate", "minDate", "month", "year"];

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  	function DayInput(_ref) {
  	  var maxDate = _ref.maxDate,
  	      minDate = _ref.minDate,
  	      month = _ref.month,
  	      year = _ref.year,
  	      otherProps = _objectWithoutProperties(_ref, _excluded);

  	  var currentMonthMaxDays = function () {
  	    if (!month) {
  	      return 31;
  	    }

  	    return (0, _dateUtils.getDaysInMonth)(new Date(year, month - 1, 1));
  	  }();

  	  function isSameMonth(date) {
  	    return date && year === (0, _dateUtils.getYear)(date).toString() && month === (0, _dateUtils.getMonthHuman)(date).toString();
  	  }

  	  var maxDay = (0, _utils.safeMin)(currentMonthMaxDays, isSameMonth(maxDate) && (0, _dateUtils.getDate)(maxDate));
  	  var minDay = (0, _utils.safeMax)(1, isSameMonth(minDate) && (0, _dateUtils.getDate)(minDate));
  	  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
  	    max: maxDay,
  	    min: minDay,
  	    name: "day"
  	  }, otherProps));
  	}

  	DayInput.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  className: _propTypes["default"].string.isRequired,
  	  disabled: _propTypes["default"].bool,
  	  inputRef: _propTypes2.isRef,
  	  maxDate: _propTypes2.isMaxDate,
  	  minDate: _propTypes2.isMinDate,
  	  month: _propTypes["default"].string,
  	  onChange: _propTypes["default"].func,
  	  onKeyDown: _propTypes["default"].func,
  	  onKeyUp: _propTypes["default"].func,
  	  placeholder: _propTypes["default"].string,
  	  required: _propTypes["default"].bool,
  	  showLeadingZeros: _propTypes["default"].bool,
  	  value: _propTypes["default"].string,
  	  year: _propTypes["default"].string
  	};
  } (DayInput));

  var MonthInput = {};

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = MonthInput;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _dateUtils = require$$2;

  	var _Input = _interopRequireDefault(Input);

  	var _propTypes2 = propTypes$1;

  	var _utils = utils;

  	var _excluded = ["maxDate", "minDate", "year"];

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  	function MonthInput(_ref) {
  	  var maxDate = _ref.maxDate,
  	      minDate = _ref.minDate,
  	      year = _ref.year,
  	      otherProps = _objectWithoutProperties(_ref, _excluded);

  	  function isSameYear(date) {
  	    return date && year === (0, _dateUtils.getYear)(date).toString();
  	  }

  	  var maxMonth = (0, _utils.safeMin)(12, isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
  	  var minMonth = (0, _utils.safeMax)(1, isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));
  	  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
  	    max: maxMonth,
  	    min: minMonth,
  	    name: "month"
  	  }, otherProps));
  	}

  	MonthInput.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  className: _propTypes["default"].string.isRequired,
  	  disabled: _propTypes["default"].bool,
  	  inputRef: _propTypes2.isRef,
  	  maxDate: _propTypes2.isMaxDate,
  	  minDate: _propTypes2.isMinDate,
  	  onChange: _propTypes["default"].func,
  	  onKeyDown: _propTypes["default"].func,
  	  onKeyUp: _propTypes["default"].func,
  	  placeholder: _propTypes["default"].string,
  	  required: _propTypes["default"].bool,
  	  showLeadingZeros: _propTypes["default"].bool,
  	  value: _propTypes["default"].string,
  	  year: _propTypes["default"].string
  	};
  } (MonthInput));

  var MonthSelect = {};

  var dateFormatter = {};

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(esm$4);

  Object.defineProperty(dateFormatter, "__esModule", {
    value: true
  });
  dateFormatter.formatShortMonth = dateFormatter.formatMonth = void 0;
  dateFormatter.getFormatter = getFormatter;

  var _getUserLocale = _interopRequireDefault(require$$0);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var formatterCache = new Map();

  function getFormatter(options) {
    return function (locale, date) {
      var localeWithDefault = locale || (0, _getUserLocale["default"])();

      if (!formatterCache.has(localeWithDefault)) {
        formatterCache.set(localeWithDefault, new Map());
      }

      var formatterCacheLocale = formatterCache.get(localeWithDefault);

      if (!formatterCacheLocale.has(options)) {
        formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault, options).format);
      }

      return formatterCacheLocale.get(options)(date);
    };
  }
  /**
   * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
   * Workaround for bug in WebKit and Firefox with historical dates.
   * For more details, see:
   * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
   * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
   *
   * @param {Date} date Date.
   */


  function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
  }

  function getSafeFormatter(options) {
    return function (locale, date) {
      return getFormatter(options)(locale, toSafeHour(date));
    };
  }

  var formatMonthOptions = {
    month: 'long'
  };
  var formatShortMonthOptions = {
    month: 'short'
  };
  var formatMonth = getSafeFormatter(formatMonthOptions);
  dateFormatter.formatMonth = formatMonth;
  var formatShortMonth = getSafeFormatter(formatShortMonthOptions);
  dateFormatter.formatShortMonth = formatShortMonth;

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = MonthSelect;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _mergeClassNames = _interopRequireDefault(require$$3$1);

  	var _dateUtils = require$$2;

  	var _dateFormatter = dateFormatter;

  	var _propTypes2 = propTypes$1;

  	var _utils = utils;

  	var _excluded = ["ariaLabel", "className", "inputRef", "locale", "maxDate", "minDate", "placeholder", "short", "value", "year"];

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  	function MonthSelect(_ref) {
  	  var ariaLabel = _ref.ariaLabel,
  	      className = _ref.className,
  	      inputRef = _ref.inputRef,
  	      locale = _ref.locale,
  	      maxDate = _ref.maxDate,
  	      minDate = _ref.minDate,
  	      _ref$placeholder = _ref.placeholder,
  	      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
  	      _short = _ref["short"],
  	      value = _ref.value,
  	      year = _ref.year,
  	      otherProps = _objectWithoutProperties(_ref, _excluded);

  	  function isSameYear(date) {
  	    return date && year === (0, _dateUtils.getYear)(date).toString();
  	  }

  	  var maxMonth = (0, _utils.safeMin)(12, isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
  	  var minMonth = (0, _utils.safeMax)(1, isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));

  	  var dates = _toConsumableArray(Array(12)).map(function (el, index) {
  	    return new Date(2019, index, 1);
  	  });

  	  var name = 'month';
  	  var formatter = _short ? _dateFormatter.formatShortMonth : _dateFormatter.formatMonth;
  	  return /*#__PURE__*/_react["default"].createElement("select", _extends({
  	    "aria-label": ariaLabel,
  	    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
  	    "data-input": "true",
  	    "data-select": "true",
  	    name: name,
  	    ref: inputRef,
  	    value: value !== null ? value : ''
  	  }, otherProps), !value && /*#__PURE__*/_react["default"].createElement("option", {
  	    value: ""
  	  }, placeholder), dates.map(function (date) {
  	    var month = (0, _dateUtils.getMonthHuman)(date);
  	    var disabled = month < minMonth || month > maxMonth;
  	    return /*#__PURE__*/_react["default"].createElement("option", {
  	      key: month,
  	      disabled: disabled,
  	      value: month
  	    }, formatter(locale, date));
  	  }));
  	}

  	MonthSelect.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  className: _propTypes["default"].string.isRequired,
  	  disabled: _propTypes["default"].bool,
  	  inputRef: _propTypes2.isRef,
  	  locale: _propTypes["default"].string,
  	  maxDate: _propTypes2.isMaxDate,
  	  minDate: _propTypes2.isMinDate,
  	  onChange: _propTypes["default"].func,
  	  onKeyDown: _propTypes["default"].func,
  	  onKeyUp: _propTypes["default"].func,
  	  placeholder: _propTypes["default"].string,
  	  required: _propTypes["default"].bool,
  	  "short": _propTypes["default"].bool,
  	  value: _propTypes["default"].string,
  	  year: _propTypes["default"].string
  	};
  } (MonthSelect));

  var YearInput = {};

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = YearInput;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _dateUtils = require$$2;

  	var _Input = _interopRequireDefault(Input);

  	var _propTypes2 = propTypes$1;

  	var _utils = utils;

  	var _excluded = ["maxDate", "minDate", "placeholder", "valueType"];

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  	function YearInput(_ref) {
  	  var maxDate = _ref.maxDate,
  	      minDate = _ref.minDate,
  	      _ref$placeholder = _ref.placeholder,
  	      placeholder = _ref$placeholder === void 0 ? '----' : _ref$placeholder,
  	      valueType = _ref.valueType,
  	      otherProps = _objectWithoutProperties(_ref, _excluded);

  	  var maxYear = (0, _utils.safeMin)(275760, maxDate && (0, _dateUtils.getYear)(maxDate));
  	  var minYear = (0, _utils.safeMax)(1, minDate && (0, _dateUtils.getYear)(minDate));

  	  var yearStep = function () {
  	    if (valueType === 'century') {
  	      return 10;
  	    }

  	    return 1;
  	  }();

  	  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
  	    max: maxYear,
  	    min: minYear,
  	    name: "year",
  	    placeholder: placeholder,
  	    step: yearStep
  	  }, otherProps));
  	}

  	YearInput.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  className: _propTypes["default"].string.isRequired,
  	  disabled: _propTypes["default"].bool,
  	  inputRef: _propTypes2.isRef,
  	  maxDate: _propTypes2.isMaxDate,
  	  minDate: _propTypes2.isMinDate,
  	  onChange: _propTypes["default"].func,
  	  onKeyDown: _propTypes["default"].func,
  	  onKeyUp: _propTypes["default"].func,
  	  placeholder: _propTypes["default"].string,
  	  required: _propTypes["default"].bool,
  	  value: _propTypes["default"].string,
  	  valueType: _propTypes2.isValueType
  	};
  } (YearInput));

  var NativeInput = {};

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = NativeInput;

  	var _react = _interopRequireDefault(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _dateUtils = require$$2;

  	var _propTypes2 = propTypes$1;

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function NativeInput(_ref) {
  	  var ariaLabel = _ref.ariaLabel,
  	      disabled = _ref.disabled,
  	      maxDate = _ref.maxDate,
  	      minDate = _ref.minDate,
  	      name = _ref.name,
  	      onChange = _ref.onChange,
  	      required = _ref.required,
  	      value = _ref.value,
  	      valueType = _ref.valueType;

  	  var nativeInputType = function () {
  	    switch (valueType) {
  	      case 'decade':
  	      case 'year':
  	        return 'number';

  	      case 'month':
  	        return 'month';

  	      case 'day':
  	        return 'date';

  	      default:
  	        throw new Error('Invalid valueType.');
  	    }
  	  }();

  	  var nativeValueParser = function () {
  	    switch (valueType) {
  	      case 'century':
  	      case 'decade':
  	      case 'year':
  	        return _dateUtils.getYear;

  	      case 'month':
  	        return _dateUtils.getISOLocalMonth;

  	      case 'day':
  	        return _dateUtils.getISOLocalDate;

  	      default:
  	        throw new Error('Invalid valueType.');
  	    }
  	  }();

  	  function stopPropagation(event) {
  	    event.stopPropagation();
  	  }

  	  return /*#__PURE__*/_react["default"].createElement("input", {
  	    "aria-label": ariaLabel,
  	    disabled: disabled,
  	    max: maxDate ? nativeValueParser(maxDate) : null,
  	    min: minDate ? nativeValueParser(minDate) : null,
  	    name: name,
  	    onChange: onChange,
  	    onFocus: stopPropagation,
  	    required: required,
  	    style: {
  	      visibility: 'hidden',
  	      position: 'absolute',
  	      zIndex: '-999'
  	    },
  	    type: nativeInputType,
  	    value: value ? nativeValueParser(value) : ''
  	  });
  	}

  	NativeInput.propTypes = {
  	  ariaLabel: _propTypes["default"].string,
  	  disabled: _propTypes["default"].bool,
  	  maxDate: _propTypes2.isMaxDate,
  	  minDate: _propTypes2.isMinDate,
  	  name: _propTypes["default"].string,
  	  onChange: _propTypes["default"].func,
  	  required: _propTypes["default"].bool,
  	  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  	  valueType: _propTypes2.isValueType
  	};
  } (NativeInput));

  var dates = {};

  Object.defineProperty(dates, "__esModule", {
    value: true
  });
  dates.getBegin = getBegin;
  dates.getEnd = getEnd;

  var _dateUtils = require$$2;

  /**
   * Returns the beginning of a given range.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date Date.
   */
  function getBegin(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return (0, _dateUtils.getCenturyStart)(date);

      case 'decade':
        return (0, _dateUtils.getDecadeStart)(date);

      case 'year':
        return (0, _dateUtils.getYearStart)(date);

      case 'month':
        return (0, _dateUtils.getMonthStart)(date);

      case 'day':
        return (0, _dateUtils.getDayStart)(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }
  /**
   * Returns the end of a given range.
   *
   * @param {string} rangeType Range type (e.g. 'day')
   * @param {Date} date Date.
   */


  function getEnd(rangeType, date) {
    switch (rangeType) {
      case 'century':
        return (0, _dateUtils.getCenturyEnd)(date);

      case 'decade':
        return (0, _dateUtils.getDecadeEnd)(date);

      case 'year':
        return (0, _dateUtils.getYearEnd)(date);

      case 'month':
        return (0, _dateUtils.getMonthEnd)(date);

      case 'day':
        return (0, _dateUtils.getDayEnd)(date);

      default:
        throw new Error("Invalid rangeType: ".concat(rangeType));
    }
  }

  (function (exports) {

  	function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = void 0;

  	var _react = _interopRequireWildcard(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _dateUtils = require$$2;

  	var _Divider = _interopRequireDefault(Divider);

  	var _DayInput = _interopRequireDefault(DayInput);

  	var _MonthInput = _interopRequireDefault(MonthInput);

  	var _MonthSelect = _interopRequireDefault(MonthSelect);

  	var _YearInput = _interopRequireDefault(YearInput);

  	var _NativeInput = _interopRequireDefault(NativeInput);

  	var _dateFormatter = dateFormatter;

  	var _dates = dates;

  	var _propTypes2 = propTypes$1;

  	var _utils = utils;

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  	function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  	var defaultMinDate = new Date();
  	defaultMinDate.setFullYear(1, 0, 1);
  	defaultMinDate.setHours(0, 0, 0, 0);
  	var defaultMaxDate = new Date(8.64e15);
  	var allViews = ['century', 'decade', 'year', 'month'];
  	var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

  	function toDate(value) {
  	  if (value instanceof Date) {
  	    return value;
  	  }

  	  return new Date(value);
  	}

  	function datesAreDifferent(date1, date2) {
  	  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
  	}
  	/**
  	 * Returns value type that can be returned with currently applied settings.
  	 */


  	function getValueType(maxDetail) {
  	  return allValueTypes[allViews.indexOf(maxDetail)];
  	}

  	function getValue(value, index) {
  	  if (!value) {
  	    return null;
  	  }

  	  var rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

  	  if (!rawValue) {
  	    return null;
  	  }

  	  var valueDate = toDate(rawValue);

  	  if (isNaN(valueDate.getTime())) {
  	    throw new Error("Invalid date: ".concat(value));
  	  }

  	  return valueDate;
  	}

  	function getDetailValue(_ref, index) {
  	  var value = _ref.value,
  	      minDate = _ref.minDate,
  	      maxDate = _ref.maxDate,
  	      maxDetail = _ref.maxDetail;
  	  var valuePiece = getValue(value, index);

  	  if (!valuePiece) {
  	    return null;
  	  }

  	  var valueType = getValueType(maxDetail);
  	  var detailValueFrom = [_dates.getBegin, _dates.getEnd][index](valueType, valuePiece);
  	  return (0, _utils.between)(detailValueFrom, minDate, maxDate);
  	}

  	var getDetailValueFrom = function getDetailValueFrom(args) {
  	  return getDetailValue(args, 0);
  	};

  	var getDetailValueTo = function getDetailValueTo(args) {
  	  return getDetailValue(args, 1);
  	};

  	var getDetailValueArray = function getDetailValueArray(args) {
  	  var value = args.value;

  	  if (Array.isArray(value)) {
  	    return value;
  	  }

  	  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
  	    return fn(args);
  	  });
  	};

  	function isInternalInput(element) {
  	  return element.getAttribute('data-input') === 'true';
  	}

  	function findInput(element, property) {
  	  var nextElement = element;

  	  do {
  	    nextElement = nextElement[property];
  	  } while (nextElement && !isInternalInput(nextElement));

  	  return nextElement;
  	}

  	function focus(element) {
  	  if (element) {
  	    element.focus();
  	  }
  	}

  	function _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  	  var usedFunctions = [];
  	  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
  	    return "".concat(el, "+");
  	  }).join('|'), 'g');
  	  var matches = placeholder.match(pattern);
  	  return placeholder.split(pattern).reduce(function (arr, element, index) {
  	    var divider = element &&
  	    /*#__PURE__*/
  	    // eslint-disable-next-line react/no-array-index-key
  	    _react["default"].createElement(_Divider["default"], {
  	      key: "separator_".concat(index)
  	    }, element);

  	    var res = [].concat(_toConsumableArray(arr), [divider]);
  	    var currentMatch = matches && matches[index];

  	    if (currentMatch) {
  	      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
  	        return currentMatch.match(elementFunction);
  	      })];

  	      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
  	        res.push(currentMatch);
  	      } else {
  	        res.push(renderFunction(currentMatch, index));
  	        usedFunctions.push(renderFunction);
  	      }
  	    }

  	    return res;
  	  }, []);
  	}

  	var DateInput = /*#__PURE__*/function (_PureComponent) {
  	  _inherits(DateInput, _PureComponent);

  	  var _super = _createSuper(DateInput);

  	  function DateInput() {
  	    var _this;

  	    _classCallCheck(this, DateInput);

  	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
  	      args[_key] = arguments[_key];
  	    }

  	    _this = _super.call.apply(_super, [this].concat(args));

  	    _defineProperty(_assertThisInitialized(_this), "state", {
  	      year: null,
  	      month: null,
  	      day: null
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "dayInput", /*#__PURE__*/(0, _react.createRef)());

  	    _defineProperty(_assertThisInitialized(_this), "monthInput", /*#__PURE__*/(0, _react.createRef)());

  	    _defineProperty(_assertThisInitialized(_this), "yearInput", /*#__PURE__*/(0, _react.createRef)());

  	    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
  	      if (event.target === event.currentTarget) {
  	        // Wrapper was directly clicked
  	        var firstInput = event.target.children[1];
  	        focus(firstInput);
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
  	      switch (event.key) {
  	        case 'ArrowLeft':
  	        case 'ArrowRight':
  	        case _this.divider:
  	          {
  	            event.preventDefault();
  	            var input = event.target;
  	            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
  	            var nextInput = findInput(input, property);
  	            focus(nextInput);
  	            break;
  	          }
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
  	      var key = event.key,
  	          input = event.target;
  	      var isNumberKey = !isNaN(parseInt(key, 10));

  	      if (!isNumberKey) {
  	        return;
  	      }

  	      var value = input.value;
  	      var max = input.getAttribute('max');
  	      /**
  	       * Given 1, the smallest possible number the user could type by adding another digit is 10.
  	       * 10 would be a valid value given max = 12, so we won't jump to the next input.
  	       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
  	       * this field doesn't make sense.
  	       */

  	      if (value * 10 > max || value.length >= max.length) {
  	        var property = 'nextElementSibling';
  	        var nextInput = findInput(input, property);
  	        focus(nextInput);
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
  	      var _event$target = event.target,
  	          name = _event$target.name,
  	          value = _event$target.value;

  	      _this.setState(_defineProperty({}, name, value), _this.onChangeExternal);
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
  	      var onChange = _this.props.onChange;
  	      var value = event.target.value;

  	      if (!onChange) {
  	        return;
  	      }

  	      var processedValue = function () {
  	        if (!value) {
  	          return null;
  	        }

  	        var _value$split = value.split('-'),
  	            _value$split2 = _slicedToArray(_value$split, 3),
  	            yearString = _value$split2[0],
  	            monthString = _value$split2[1],
  	            dayString = _value$split2[2];

  	        var year = parseInt(yearString, 10);
  	        var monthIndex = parseInt(monthString, 10) - 1 || 0;
  	        var day = parseInt(dayString, 10) || 1;
  	        var proposedValue = new Date();
  	        proposedValue.setFullYear(year, monthIndex, day);
  	        proposedValue.setHours(0, 0, 0, 0);
  	        return proposedValue;
  	      }();

  	      onChange(processedValue, false);
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
  	      var onChange = _this.props.onChange;

  	      if (!onChange) {
  	        return;
  	      }

  	      var formElements = [_this.dayInput.current, _this.monthInput.current, _this.yearInput.current].filter(Boolean);
  	      var values = {};
  	      formElements.forEach(function (formElement) {
  	        values[formElement.name] = formElement.value;
  	      });

  	      if (formElements.every(function (formElement) {
  	        return !formElement.value;
  	      })) {
  	        onChange(null, false);
  	      } else if (formElements.every(function (formElement) {
  	        return formElement.value && formElement.validity.valid;
  	      })) {
  	        var year = parseInt(values.year, 10) || new Date().getFullYear();
  	        var monthIndex = parseInt(values.month || 1, 10) - 1;
  	        var day = parseInt(values.day || 1, 10);
  	        var proposedValue = new Date();
  	        proposedValue.setFullYear(year, monthIndex, day);
  	        proposedValue.setHours(0, 0, 0, 0);

  	        var processedValue = _this.getProcessedValue(proposedValue);

  	        onChange(processedValue, false);
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "renderDay", function (currentMatch, index) {
  	      var _this$props = _this.props,
  	          autoFocus = _this$props.autoFocus,
  	          dayAriaLabel = _this$props.dayAriaLabel,
  	          dayPlaceholder = _this$props.dayPlaceholder,
  	          showLeadingZeros = _this$props.showLeadingZeros;
  	      var _this$state = _this.state,
  	          day = _this$state.day,
  	          month = _this$state.month,
  	          year = _this$state.year;

  	      if (currentMatch && currentMatch.length > 2) {
  	        throw new Error("Unsupported token: ".concat(currentMatch));
  	      }

  	      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
  	      return /*#__PURE__*/_react["default"].createElement(_DayInput["default"], _extends({
  	        key: "day"
  	      }, _this.commonInputProps, {
  	        ariaLabel: dayAriaLabel // eslint-disable-next-line jsx-a11y/no-autofocus
  	        ,
  	        autoFocus: index === 0 && autoFocus,
  	        inputRef: _this.dayInput,
  	        month: month,
  	        placeholder: dayPlaceholder,
  	        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
  	        value: day,
  	        year: year
  	      }));
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "renderMonth", function (currentMatch, index) {
  	      var _this$props2 = _this.props,
  	          autoFocus = _this$props2.autoFocus,
  	          locale = _this$props2.locale,
  	          monthAriaLabel = _this$props2.monthAriaLabel,
  	          monthPlaceholder = _this$props2.monthPlaceholder,
  	          showLeadingZeros = _this$props2.showLeadingZeros;
  	      var _this$state2 = _this.state,
  	          month = _this$state2.month,
  	          year = _this$state2.year;

  	      if (currentMatch && currentMatch.length > 4) {
  	        throw new Error("Unsupported token: ".concat(currentMatch));
  	      }

  	      if (currentMatch.length > 2) {
  	        return /*#__PURE__*/_react["default"].createElement(_MonthSelect["default"], _extends({
  	          key: "month"
  	        }, _this.commonInputProps, {
  	          ariaLabel: monthAriaLabel // eslint-disable-next-line jsx-a11y/no-autofocus
  	          ,
  	          autoFocus: index === 0 && autoFocus,
  	          inputRef: _this.monthInput,
  	          locale: locale,
  	          placeholder: monthPlaceholder,
  	          "short": currentMatch.length === 3,
  	          value: month,
  	          year: year
  	        }));
  	      }

  	      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
  	      return /*#__PURE__*/_react["default"].createElement(_MonthInput["default"], _extends({
  	        key: "month"
  	      }, _this.commonInputProps, {
  	        ariaLabel: monthAriaLabel // eslint-disable-next-line jsx-a11y/no-autofocus
  	        ,
  	        autoFocus: index === 0 && autoFocus,
  	        inputRef: _this.monthInput,
  	        placeholder: monthPlaceholder,
  	        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
  	        value: month,
  	        year: year
  	      }));
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "renderYear", function (currentMatch, index) {
  	      var _this$props3 = _this.props,
  	          autoFocus = _this$props3.autoFocus,
  	          yearAriaLabel = _this$props3.yearAriaLabel,
  	          yearPlaceholder = _this$props3.yearPlaceholder;
  	      var year = _this.state.year;
  	      return /*#__PURE__*/_react["default"].createElement(_YearInput["default"], _extends({
  	        key: "year"
  	      }, _this.commonInputProps, {
  	        ariaLabel: yearAriaLabel // eslint-disable-next-line jsx-a11y/no-autofocus
  	        ,
  	        autoFocus: index === 0 && autoFocus,
  	        inputRef: _this.yearInput,
  	        placeholder: yearPlaceholder,
  	        value: year,
  	        valueType: _this.valueType
  	      }));
  	    });

  	    return _this;
  	  }

  	  _createClass(DateInput, [{
  	    key: "formatDate",
  	    get: function get() {
  	      var maxDetail = this.props.maxDetail;
  	      var options = {
  	        year: 'numeric'
  	      };
  	      var level = allViews.indexOf(maxDetail);

  	      if (level >= 2) {
  	        options.month = 'numeric';
  	      }

  	      if (level >= 3) {
  	        options.day = 'numeric';
  	      }

  	      return (0, _dateFormatter.getFormatter)(options);
  	    }
  	    /**
  	     * Gets current value in a desired format.
  	     */

  	  }, {
  	    key: "getProcessedValue",
  	    value: function getProcessedValue(value) {
  	      var _this$props4 = this.props,
  	          minDate = _this$props4.minDate,
  	          maxDate = _this$props4.maxDate,
  	          maxDetail = _this$props4.maxDetail,
  	          returnValue = _this$props4.returnValue;

  	      var processFunction = function () {
  	        switch (returnValue) {
  	          case 'start':
  	            return getDetailValueFrom;

  	          case 'end':
  	            return getDetailValueTo;

  	          case 'range':
  	            return getDetailValueArray;

  	          default:
  	            throw new Error('Invalid returnValue.');
  	        }
  	      }();

  	      return processFunction({
  	        value: value,
  	        minDate: minDate,
  	        maxDate: maxDate,
  	        maxDetail: maxDetail
  	      });
  	    }
  	  }, {
  	    key: "divider",
  	    get: function get() {
  	      var dividers = this.placeholder.match(/[^0-9a-z]/i);
  	      return dividers ? dividers[0] : null;
  	    }
  	  }, {
  	    key: "placeholder",
  	    get: function get() {
  	      var _this$props5 = this.props,
  	          format = _this$props5.format,
  	          locale = _this$props5.locale;

  	      if (format) {
  	        return format;
  	      }

  	      var year = 2017;
  	      var monthIndex = 11;
  	      var day = 11;
  	      var date = new Date(year, monthIndex, day);
  	      var formattedDate = this.formatDate(locale, date);
  	      var datePieces = ['year', 'month', 'day'];
  	      var datePieceReplacements = ['y', 'M', 'd'];

  	      function formatDatePiece(name, dateToFormat) {
  	        return (0, _dateFormatter.getFormatter)(_defineProperty({
  	          useGrouping: false
  	        }, name, 'numeric'))(locale, dateToFormat).match(/\d{1,}/);
  	      }

  	      var placeholder = formattedDate;
  	      datePieces.forEach(function (datePiece, index) {
  	        var formattedDatePiece = formatDatePiece(datePiece, date);
  	        var datePieceReplacement = datePieceReplacements[index];
  	        placeholder = placeholder.replace(formattedDatePiece, datePieceReplacement);
  	      }); // See: https://github.com/wojtekmaj/react-date-picker/issues/396

  	      placeholder = placeholder.replace('17', 'y');
  	      return placeholder;
  	    }
  	  }, {
  	    key: "commonInputProps",
  	    get: function get() {
  	      var _this$props6 = this.props,
  	          className = _this$props6.className,
  	          disabled = _this$props6.disabled,
  	          isCalendarOpen = _this$props6.isCalendarOpen,
  	          maxDate = _this$props6.maxDate,
  	          minDate = _this$props6.minDate,
  	          required = _this$props6.required;
  	      return {
  	        className: className,
  	        disabled: disabled,
  	        maxDate: maxDate || defaultMaxDate,
  	        minDate: minDate || defaultMinDate,
  	        onChange: this.onChange,
  	        onKeyDown: this.onKeyDown,
  	        onKeyUp: this.onKeyUp,
  	        // This is only for showing validity when editing
  	        required: required || isCalendarOpen
  	      };
  	    }
  	  }, {
  	    key: "valueType",
  	    get: function get() {
  	      var maxDetail = this.props.maxDetail;
  	      return getValueType(maxDetail);
  	    }
  	  }, {
  	    key: "renderCustomInputs",
  	    value: function renderCustomInputs() {
  	      var placeholder = this.placeholder;
  	      var format = this.props.format;
  	      var elementFunctions = {
  	        d: this.renderDay,
  	        M: this.renderMonth,
  	        y: this.renderYear
  	      };
  	      var allowMultipleInstances = typeof format !== 'undefined';
  	      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
  	    }
  	  }, {
  	    key: "renderNativeInput",
  	    value: function renderNativeInput() {
  	      var _this$props7 = this.props,
  	          disabled = _this$props7.disabled,
  	          maxDate = _this$props7.maxDate,
  	          minDate = _this$props7.minDate,
  	          name = _this$props7.name,
  	          nativeInputAriaLabel = _this$props7.nativeInputAriaLabel,
  	          required = _this$props7.required;
  	      var value = this.state.value;
  	      return /*#__PURE__*/_react["default"].createElement(_NativeInput["default"], {
  	        key: "date",
  	        ariaLabel: nativeInputAriaLabel,
  	        disabled: disabled,
  	        maxDate: maxDate || defaultMaxDate,
  	        minDate: minDate || defaultMinDate,
  	        name: name,
  	        onChange: this.onChangeNative,
  	        required: required,
  	        value: value,
  	        valueType: this.valueType
  	      });
  	    }
  	  }, {
  	    key: "render",
  	    value: function render() {
  	      var className = this.props.className;
  	      return (
  	        /*#__PURE__*/
  	        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  	        _react["default"].createElement("div", {
  	          className: className,
  	          onClick: this.onClick
  	        }, this.renderNativeInput(), this.renderCustomInputs())
  	      );
  	    }
  	  }], [{
  	    key: "getDerivedStateFromProps",
  	    value: function getDerivedStateFromProps(nextProps, prevState) {
  	      var minDate = nextProps.minDate,
  	          maxDate = nextProps.maxDate,
  	          maxDetail = nextProps.maxDetail;
  	      var nextState = {};
  	      /**
  	       * If isCalendarOpen flag has changed, we have to update it.
  	       * It's saved in state purely for use in getDerivedStateFromProps.
  	       */

  	      if (nextProps.isCalendarOpen !== prevState.isCalendarOpen) {
  	        nextState.isCalendarOpen = nextProps.isCalendarOpen;
  	      }
  	      /**
  	       * If the next value is different from the current one  (with an exception of situation in
  	       * which values provided are limited by minDate and maxDate so that the dates are the same),
  	       * get a new one.
  	       */


  	      var nextValue = getDetailValueFrom({
  	        value: nextProps.value,
  	        minDate: minDate,
  	        maxDate: maxDate,
  	        maxDetail: maxDetail
  	      });
  	      var values = [nextValue, prevState.value];

  	      if ( // Toggling calendar visibility resets values
  	      nextState.isCalendarOpen || // Flag was toggled
  	      datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
  	        return getDetailValueFrom({
  	          value: value,
  	          minDate: minDate,
  	          maxDate: maxDate,
  	          maxDetail: maxDetail
  	        });
  	      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
  	        return getDetailValueTo({
  	          value: value,
  	          minDate: minDate,
  	          maxDate: maxDate,
  	          maxDetail: maxDetail
  	        });
  	      })))) {
  	        if (nextValue) {
  	          nextState.year = (0, _dateUtils.getYear)(nextValue).toString();
  	          nextState.month = (0, _dateUtils.getMonthHuman)(nextValue).toString();
  	          nextState.day = (0, _dateUtils.getDate)(nextValue).toString();
  	        } else {
  	          nextState.year = null;
  	          nextState.month = null;
  	          nextState.day = null;
  	        }

  	        nextState.value = nextValue;
  	      }

  	      return nextState;
  	    }
  	  }]);

  	  return DateInput;
  	}(_react.PureComponent);

  	exports["default"] = DateInput;
  	DateInput.defaultProps = {
  	  maxDetail: 'month',
  	  name: 'date',
  	  returnValue: 'start'
  	};

  	var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

  	DateInput.propTypes = {
  	  autoFocus: _propTypes["default"].bool,
  	  className: _propTypes["default"].string.isRequired,
  	  dayAriaLabel: _propTypes["default"].string,
  	  dayPlaceholder: _propTypes["default"].string,
  	  disabled: _propTypes["default"].bool,
  	  format: _propTypes["default"].string,
  	  isCalendarOpen: _propTypes["default"].bool,
  	  locale: _propTypes["default"].string,
  	  maxDate: _propTypes2.isMaxDate,
  	  maxDetail: _propTypes["default"].oneOf(allViews),
  	  minDate: _propTypes2.isMinDate,
  	  monthAriaLabel: _propTypes["default"].string,
  	  monthPlaceholder: _propTypes["default"].string,
  	  name: _propTypes["default"].string,
  	  nativeInputAriaLabel: _propTypes["default"].string,
  	  onChange: _propTypes["default"].func,
  	  required: _propTypes["default"].bool,
  	  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  	  showLeadingZeros: _propTypes["default"].bool,
  	  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  	  yearAriaLabel: _propTypes["default"].string,
  	  yearPlaceholder: _propTypes["default"].string
  	};
  } (DateInput));

  (function (exports) {

  	function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = void 0;

  	var _react = _interopRequireWildcard(React__default["default"]);

  	var _propTypes = _interopRequireDefault(propTypes$2.exports);

  	var _makeEventProps = _interopRequireDefault(require$$2$1);

  	var _mergeClassNames = _interopRequireDefault(require$$3$1);

  	var _reactCalendar = _interopRequireDefault(require$$4$1);

  	var _reactFit = _interopRequireDefault(require$$5);

  	var _DateInput = _interopRequireDefault(DateInput);

  	var _propTypes2 = propTypes$1;

  	var _excluded = ["calendarClassName", "className", "onChange", "value"],
  	    _excluded2 = ["onChange"];

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  	function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  	function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  	var baseClassName = 'react-date-picker';
  	var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];
  	var allViews = ['century', 'decade', 'year', 'month'];

  	var DatePicker = /*#__PURE__*/function (_PureComponent) {
  	  _inherits(DatePicker, _PureComponent);

  	  var _super = _createSuper(DatePicker);

  	  function DatePicker() {
  	    var _this;

  	    _classCallCheck(this, DatePicker);

  	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
  	      args[_key] = arguments[_key];
  	    }

  	    _this = _super.call.apply(_super, [this].concat(args));

  	    _defineProperty(_assertThisInitialized(_this), "state", {});

  	    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
  	      // Try event.composedPath first to handle clicks inside a Shadow DOM.
  	      var target = 'composedPath' in event ? event.composedPath()[0] : event.target;

  	      if (_this.wrapper && !_this.wrapper.contains(target)) {
  	        _this.closeCalendar();
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
  	      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.closeCalendar;
  	      var onChange = _this.props.onChange;

  	      if (closeCalendar) {
  	        _this.closeCalendar();
  	      }

  	      if (onChange) {
  	        onChange(value);
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
  	      var _this$props = _this.props,
  	          disabled = _this$props.disabled,
  	          onFocus = _this$props.onFocus,
  	          openCalendarOnFocus = _this$props.openCalendarOnFocus;

  	      if (onFocus) {
  	        onFocus(event);
  	      } // Internet Explorer still fires onFocus on disabled elements


  	      if (disabled) {
  	        return;
  	      }

  	      if (openCalendarOnFocus) {
  	        if (event.target.getAttribute('data-select') === 'true') {
  	          return;
  	        }

  	        _this.openCalendar();
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
  	      if (event.key === 'Escape') {
  	        _this.closeCalendar();
  	      }
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
  	      _this.setState({
  	        isOpen: true
  	      });
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "closeCalendar", function () {
  	      _this.setState(function (prevState) {
  	        if (!prevState.isOpen) {
  	          return null;
  	        }

  	        return {
  	          isOpen: false
  	        };
  	      });
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "toggleCalendar", function () {
  	      _this.setState(function (prevState) {
  	        return {
  	          isOpen: !prevState.isOpen
  	        };
  	      });
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
  	      return event.stopPropagation();
  	    });

  	    _defineProperty(_assertThisInitialized(_this), "clear", function () {
  	      return _this.onChange(null);
  	    });

  	    return _this;
  	  }

  	  _createClass(DatePicker, [{
  	    key: "componentDidMount",
  	    value: function componentDidMount() {
  	      this.handleOutsideActionListeners();
  	    }
  	  }, {
  	    key: "componentDidUpdate",
  	    value: function componentDidUpdate(prevProps, prevState) {
  	      var isOpen = this.state.isOpen;
  	      var _this$props2 = this.props,
  	          onCalendarClose = _this$props2.onCalendarClose,
  	          onCalendarOpen = _this$props2.onCalendarOpen;

  	      if (isOpen !== prevState.isOpen) {
  	        this.handleOutsideActionListeners();
  	        var callback = isOpen ? onCalendarOpen : onCalendarClose;
  	        if (callback) callback();
  	      }
  	    }
  	  }, {
  	    key: "componentWillUnmount",
  	    value: function componentWillUnmount() {
  	      this.handleOutsideActionListeners(false);
  	    }
  	  }, {
  	    key: "eventProps",
  	    get: function get() {
  	      return (0, _makeEventProps["default"])(this.props);
  	    }
  	  }, {
  	    key: "handleOutsideActionListeners",
  	    value: function handleOutsideActionListeners(shouldListen) {
  	      var _this2 = this;

  	      var isOpen = this.state.isOpen;
  	      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isOpen;
  	      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
  	      outsideActionEvents.forEach(function (eventName) {
  	        return document[fnName](eventName, _this2.onOutsideAction);
  	      });
  	      document[fnName]('keydown', this.onKeyDown);
  	    }
  	  }, {
  	    key: "renderInputs",
  	    value: function renderInputs() {
  	      var _this$props3 = this.props,
  	          autoFocus = _this$props3.autoFocus,
  	          calendarAriaLabel = _this$props3.calendarAriaLabel,
  	          calendarIcon = _this$props3.calendarIcon,
  	          clearAriaLabel = _this$props3.clearAriaLabel,
  	          clearIcon = _this$props3.clearIcon,
  	          dayAriaLabel = _this$props3.dayAriaLabel,
  	          dayPlaceholder = _this$props3.dayPlaceholder,
  	          disableCalendar = _this$props3.disableCalendar,
  	          disabled = _this$props3.disabled,
  	          format = _this$props3.format,
  	          locale = _this$props3.locale,
  	          maxDate = _this$props3.maxDate,
  	          maxDetail = _this$props3.maxDetail,
  	          minDate = _this$props3.minDate,
  	          monthAriaLabel = _this$props3.monthAriaLabel,
  	          monthPlaceholder = _this$props3.monthPlaceholder,
  	          name = _this$props3.name,
  	          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
  	          required = _this$props3.required,
  	          returnValue = _this$props3.returnValue,
  	          showLeadingZeros = _this$props3.showLeadingZeros,
  	          value = _this$props3.value,
  	          yearAriaLabel = _this$props3.yearAriaLabel,
  	          yearPlaceholder = _this$props3.yearPlaceholder;
  	      var isOpen = this.state.isOpen;

  	      var _concat = [].concat(value),
  	          _concat2 = _slicedToArray(_concat, 1),
  	          valueFrom = _concat2[0];

  	      var ariaLabelProps = {
  	        dayAriaLabel: dayAriaLabel,
  	        monthAriaLabel: monthAriaLabel,
  	        nativeInputAriaLabel: nativeInputAriaLabel,
  	        yearAriaLabel: yearAriaLabel
  	      };
  	      var placeholderProps = {
  	        dayPlaceholder: dayPlaceholder,
  	        monthPlaceholder: monthPlaceholder,
  	        yearPlaceholder: yearPlaceholder
  	      };
  	      return /*#__PURE__*/_react["default"].createElement("div", {
  	        className: "".concat(baseClassName, "__wrapper")
  	      }, /*#__PURE__*/_react["default"].createElement(_DateInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
  	        // eslint-disable-next-line jsx-a11y/no-autofocus
  	        autoFocus: autoFocus,
  	        className: "".concat(baseClassName, "__inputGroup"),
  	        disabled: disabled,
  	        format: format,
  	        isCalendarOpen: isOpen,
  	        locale: locale,
  	        maxDate: maxDate,
  	        maxDetail: maxDetail,
  	        minDate: minDate,
  	        name: name,
  	        onChange: this.onChange,
  	        required: required,
  	        returnValue: returnValue,
  	        showLeadingZeros: showLeadingZeros,
  	        value: valueFrom
  	      })), clearIcon !== null && /*#__PURE__*/_react["default"].createElement("button", {
  	        "aria-label": clearAriaLabel,
  	        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
  	        disabled: disabled,
  	        onClick: this.clear,
  	        onFocus: this.stopPropagation,
  	        type: "button"
  	      }, clearIcon), calendarIcon !== null && !disableCalendar && /*#__PURE__*/_react["default"].createElement("button", {
  	        "aria-label": calendarAriaLabel,
  	        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
  	        disabled: disabled,
  	        onBlur: this.resetValue,
  	        onClick: this.toggleCalendar,
  	        onFocus: this.stopPropagation,
  	        type: "button"
  	      }, calendarIcon));
  	    }
  	  }, {
  	    key: "renderCalendar",
  	    value: function renderCalendar() {
  	      var disableCalendar = this.props.disableCalendar;
  	      var isOpen = this.state.isOpen;

  	      if (isOpen === null || disableCalendar) {
  	        return null;
  	      }

  	      var _this$props4 = this.props,
  	          calendarClassName = _this$props4.calendarClassName;
  	          _this$props4.className;
  	          _this$props4.onChange;
  	          var value = _this$props4.value,
  	          calendarProps = _objectWithoutProperties(_this$props4, _excluded);

  	      var className = "".concat(baseClassName, "__calendar");
  	      return /*#__PURE__*/_react["default"].createElement(_reactFit["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
  	        ref: function ref(_ref) {
  	          if (_ref && !isOpen) {
  	            _ref.removeAttribute('style');
  	          }
  	        },
  	        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed')),
  	        style: isOpen ? undefined : {}
  	      }, /*#__PURE__*/_react["default"].createElement(_reactCalendar["default"], _extends({
  	        className: calendarClassName,
  	        onChange: this.onChange,
  	        value: value || null
  	      }, calendarProps))));
  	    }
  	  }, {
  	    key: "render",
  	    value: function render() {
  	      var _this3 = this;

  	      var eventProps = this.eventProps;
  	      var _this$props5 = this.props,
  	          className = _this$props5.className,
  	          disabled = _this$props5.disabled;
  	      var isOpen = this.state.isOpen;

  	      eventProps.onChange;
  	          var eventPropsWithoutOnChange = _objectWithoutProperties(eventProps, _excluded2);

  	      return /*#__PURE__*/_react["default"].createElement("div", _extends({
  	        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
  	      }, eventPropsWithoutOnChange, {
  	        onFocus: this.onFocus,
  	        ref: function ref(_ref2) {
  	          if (!_ref2) {
  	            return;
  	          }

  	          _this3.wrapper = _ref2;
  	        }
  	      }), this.renderInputs(), this.renderCalendar());
  	    }
  	  }], [{
  	    key: "getDerivedStateFromProps",
  	    value: function getDerivedStateFromProps(nextProps, prevState) {
  	      if (nextProps.isOpen !== prevState.isOpenProps) {
  	        return {
  	          isOpen: nextProps.isOpen,
  	          isOpenProps: nextProps.isOpen
  	        };
  	      }

  	      return null;
  	    }
  	  }]);

  	  return DatePicker;
  	}(_react.PureComponent);

  	exports["default"] = DatePicker;
  	var iconProps = {
  	  xmlns: 'http://www.w3.org/2000/svg',
  	  width: 19,
  	  height: 19,
  	  viewBox: '0 0 19 19',
  	  stroke: 'black',
  	  strokeWidth: 2
  	};

  	var CalendarIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  	  className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon")
  	}), /*#__PURE__*/_react["default"].createElement("rect", {
  	  fill: "none",
  	  height: "15",
  	  width: "15",
  	  x: "2",
  	  y: "2"
  	}), /*#__PURE__*/_react["default"].createElement("line", {
  	  x1: "6",
  	  x2: "6",
  	  y1: "0",
  	  y2: "4"
  	}), /*#__PURE__*/_react["default"].createElement("line", {
  	  x1: "13",
  	  x2: "13",
  	  y1: "0",
  	  y2: "4"
  	}));

  	var ClearIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  	  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
  	}), /*#__PURE__*/_react["default"].createElement("line", {
  	  x1: "4",
  	  x2: "15",
  	  y1: "4",
  	  y2: "15"
  	}), /*#__PURE__*/_react["default"].createElement("line", {
  	  x1: "15",
  	  x2: "4",
  	  y1: "4",
  	  y2: "15"
  	}));

  	DatePicker.defaultProps = {
  	  calendarIcon: CalendarIcon,
  	  clearIcon: ClearIcon,
  	  closeCalendar: true,
  	  isOpen: null,
  	  openCalendarOnFocus: true,
  	  returnValue: 'start'
  	};

  	var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

  	DatePicker.propTypes = {
  	  autoFocus: _propTypes["default"].bool,
  	  calendarAriaLabel: _propTypes["default"].string,
  	  calendarClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  	  calendarIcon: _propTypes["default"].node,
  	  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  	  clearAriaLabel: _propTypes["default"].string,
  	  clearIcon: _propTypes["default"].node,
  	  closeCalendar: _propTypes["default"].bool,
  	  dayAriaLabel: _propTypes["default"].string,
  	  dayPlaceholder: _propTypes["default"].string,
  	  disableCalendar: _propTypes["default"].bool,
  	  disabled: _propTypes["default"].bool,
  	  format: _propTypes["default"].string,
  	  isOpen: _propTypes["default"].bool,
  	  locale: _propTypes["default"].string,
  	  maxDate: _propTypes2.isMaxDate,
  	  maxDetail: _propTypes["default"].oneOf(allViews),
  	  minDate: _propTypes2.isMinDate,
  	  monthAriaLabel: _propTypes["default"].string,
  	  monthPlaceholder: _propTypes["default"].string,
  	  name: _propTypes["default"].string,
  	  nativeInputAriaLabel: _propTypes["default"].string,
  	  onCalendarClose: _propTypes["default"].func,
  	  onCalendarOpen: _propTypes["default"].func,
  	  onChange: _propTypes["default"].func,
  	  onFocus: _propTypes["default"].func,
  	  openCalendarOnFocus: _propTypes["default"].bool,
  	  required: _propTypes["default"].bool,
  	  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  	  showLeadingZeros: _propTypes["default"].bool,
  	  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  	  yearAriaLabel: _propTypes["default"].string,
  	  yearPlaceholder: _propTypes["default"].string
  	};
  } (DatePicker));

  (function (exports) {

  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	exports["default"] = void 0;

  	var _DatePicker = _interopRequireDefault(DatePicker);

  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  	var _default = _DatePicker["default"];
  	exports["default"] = _default;
  } (entry_nostyle));

  var DatePickerDependency = /*@__PURE__*/getDefaultExportFromCjs(entry_nostyle);

  const _excluded$d = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "format", "noCalendarIcon"];

  const DatePickerField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className,
      format,
      noCalendarIcon
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$d);

    const [value, onChange] = React$1.useState(new Date());
    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon,
      "ui-date-picker": true
    }, inputClassName);
    const wrapperClasses = classNames(["size__".concat(size), "ui-text-field__wrapper"], className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-text-field__input-wrapper"
    }, leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: leftIcon,
      className: "ui-text-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: generateInputFieldClasses
    }, /*#__PURE__*/React__default["default"].createElement(DatePickerDependency, _extends$e({
      format: "MM-dd-yyyy",
      onChange: onChange,
      value: value,
      calendarIcon: null
    }, props, {
      clearIcon: null
    }))), !noCalendarIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Calendar$1,
      className: "ui-text-field__right-icon"
    })), errorMessage && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  DatePickerField.propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    errorMessage: propTypes$2.exports.string,
    format: propTypes$2.exports.string,
    noCalendarIcon: propTypes$2.exports.bool
  };
  DatePickerField.defaultProps = {
    size: "medium",
    format: "MM-dd-yyyy"
  };

  const Portal = _ref => {
    let {
      children,
      className = "root-portal",
      el = "div"
    } = _ref;
    const [container] = React__default["default"].useState(() => {
      // This will be executed only on the initial render
      // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
      return document.createElement(el);
    });
    React__default["default"].useEffect(() => {
      container.classList.add(className);
      document.body.appendChild(container);
      console.log(container);
      document.body.insertAdjacentElement("beforeend", container);
      return () => {
        document.body.removeChild(container);
      };
    }, []);
    return /*#__PURE__*/ReactDOM__default["default"].createPortal(children, container);
  };

  const _excluded$c = ["greyContent", "show", "requestClose", "modalWidth"];

  const Modal = _ref => {
    let {
      greyContent,
      show,
      requestClose,
      modalWidth
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$c);

    const generatedClassNames = classNames({
      greyContent,
      "ui-modal": true,
      "ui-modal__closerr": true
    });

    const handleCloseClicks = e => {
      if (e.target.classList.contains("ui-modal__closerr")) {
        requestClose();
      }
    };

    return show ? /*#__PURE__*/React__default["default"].createElement(Portal, null, /*#__PURE__*/React__default["default"].createElement(Box, {
      onClick: handleCloseClicks,
      className: generatedClassNames
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-modal__content"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-modal__heading"
    }, /*#__PURE__*/React__default["default"].createElement(Heading, {
      marginTop: 0,
      marginBottom: 0,
      is: "h5"
    }, props.heading), /*#__PURE__*/React__default["default"].createElement(Icon, {
      height: "20px",
      width: "20px",
      smartColor: "#8895A7",
      icon: Close,
      className: "ui-modal__closerr",
      onClick: handleCloseClicks,
      cursor: "pointer"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-modal__body"
    }, props.children)))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
  };
  Modal.defaultProps = {};
  Modal.propTypes = {
    show: propTypes$2.exports.bool,
    greyContent: propTypes$2.exports.bool,
    requestClose: propTypes$2.exports.func,
    modalWidth: propTypes$2.exports.string,
    title: propTypes$2.exports.string
  };

  const ArrowRightComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M9 6L15 12L9 18",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  ArrowRightComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  ArrowRightComponent.defaultProps = {
    strokeWidth: "1.5",
    strokeLineCap: "round",
    strokeLineJoin: "round"
  };
  const ChevronArrowRight = {
    component: ArrowRightComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  const ArrowLeftComponent = _ref => {
    let {
      fill,
      stroke,
      smartColor,
      strokeWidth,
      strokeLineCap,
      strokeLineJoin,
      props
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M15 6L9 12L15 18",
      stroke: smartColor || stroke,
      strokeWidth: strokeWidth,
      strokeLinecap: strokeLineCap,
      strokeLinejoin: strokeLineJoin
    }));
  };

  ArrowLeftComponent.propTypes = {
    fill: propTypes$2.exports.string,
    stroke: propTypes$2.exports.string,
    strokeWidth: propTypes$2.exports.string,
    strokeLineCap: propTypes$2.exports.string,
    strokeLineJoin: propTypes$2.exports.string,
    smartColor: propTypes$2.exports.string
  };
  ArrowLeftComponent.defaultProps = {
    strokeWidth: "1.5",
    strokeLineCap: "round",
    strokeLineJoin: "round"
  };
  const ChevronArrowLeft = {
    component: ArrowLeftComponent,
    viewBox: "0 0 24 24",
    fill: "none"
  };

  var $$4 = _export;
  var $includes = arrayIncludes.includes;
  var fails$1 = fails$m;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$1(function () {
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$4({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var isRegExp = isRegexp;

  var $TypeError$1 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError$1("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol = wellKnownSymbol$d;

  var MATCH = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$3 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var notARegExp$2 = notARegexp;
  var requireObjectCoercible$2 = requireObjectCoercible$9;
  var toString$4 = toString$c;
  var correctIsRegExpLogic$2 = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$3(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$3({ target: 'String', proto: true, forced: !correctIsRegExpLogic$2('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString$4(requireObjectCoercible$2(this)),
        toString$4(notARegExp$2(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var rangedArray = (function (min, max) {
    let inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!inclusive) {
      min += 1;
      max -= 1;
    }

    return Array.from({
      length: max - min + 1
    }, (v, i) => min + i);
  });

  const dots = "...";
  const usePagination = _ref => {
    let {
      totalPages,
      currentPage,
      onPageChange,
      currentPageSiblings
    } = _ref;
    const [renderedPages, setRenderedPages] = React$1.useState([]);
    const [initializedCurrentPage, setInitializedCurrentPage] = React$1.useState(1);
    const [disablePrev, setDisablePrev] = React$1.useState(false);
    const [disableNext, setDisableNext] = React$1.useState(false);

    const updatePage = page => {
      if (page > totalPages || page < 1 || page === "...") {
        return;
      }

      setInitializedCurrentPage(page);

      if (onPageChange && typeof onPageChange === "function") {
        onPageChange(page);
      }
    };

    React$1.useEffect(() => {
      setInitializedCurrentPage(currentPage);
    }, []);
    React$1.useEffect(() => {
      setDisablePrev(initializedCurrentPage === 1);
      setDisableNext(initializedCurrentPage === totalPages);
      const doubleVisibleSiblings = currentPageSiblings * 2;
      let middleMin = initializedCurrentPage - currentPageSiblings;
      let middleMax = initializedCurrentPage + currentPageSiblings;

      if (totalPages <= doubleVisibleSiblings + 2) {
        setRenderedPages(rangedArray(1, totalPages));
      } else {
        if (initializedCurrentPage < doubleVisibleSiblings) {
          setRenderedPages([...rangedArray(1, doubleVisibleSiblings), dots, totalPages]);
        } else {
          if (initializedCurrentPage < totalPages - doubleVisibleSiblings) {
            const rangedArrayHolder = rangedArray(middleMin, middleMax);
            const sub = rangedArrayHolder.includes(1) ? [...rangedArrayHolder, dots] : [1, dots, ...rangedArrayHolder, dots];
            setRenderedPages([...sub, totalPages]);
          } else {
            setRenderedPages([1, dots, ...rangedArray(totalPages - doubleVisibleSiblings, totalPages)]);
          }
        }
      }
    }, [initializedCurrentPage, totalPages]);
    return {
      renderedPages,
      disableNext,
      disablePrev,
      initializedCurrentPage,
      updatePage
    };
  };

  const _excluded$b = ["currentPage", "totalPages", "currentPageSiblings", "onPageChange", "className"];

  const Pagination = _ref => {
    let {
      currentPage,
      totalPages,
      currentPageSiblings,
      onPageChange,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$b);

    const {
      renderedPages,
      disableNext,
      disablePrev,
      initializedCurrentPage,
      updatePage
    } = usePagination({
      totalPages,
      currentPage,
      currentPageSiblings,
      onPageChange
    });

    const generatedPageNumberClassName = function generatedPageNumberClassName(pageNumber) {
      return classNames({
        "ui-pagination__page-number__active": pageNumber === initializedCurrentPage
      }, "ui-pagination__page-number");
    };

    const leftControlClasses = classNames({
      disabled: disablePrev
    }, "ui-pagination__control");
    const rightControlClasses = classNames({
      disabled: disableNext
    }, "ui-pagination__control");
    const generatedPageNumbers = renderedPages === null || renderedPages === void 0 ? void 0 : renderedPages.map((pageNumber, index) => /*#__PURE__*/React__default["default"].createElement(Box, {
      className: generatedPageNumberClassName(pageNumber),
      key: index,
      onClick: () => updatePage(pageNumber)
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: "subhead",
      fontFace: "circularSTD"
    }, pageNumber)));
    return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "div"
    }, props, {
      className: "ui-pagination ".concat(className)
    }), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: leftControlClasses,
      onClick: () => updatePage(initializedCurrentPage - 1)
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-pagination__left-arrow",
      icon: ChevronArrowLeft
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-pagination__text-previous ui-pagination__text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, "Previous")), generatedPageNumbers, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: rightControlClasses,
      onClick: () => updatePage(initializedCurrentPage + 1)
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-pagination__text-next ui-pagination__text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, "Next"), /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "ui-pagination__right-arrow",
      icon: ChevronArrowRight
    })));
  };
  Pagination.propTypes = {
    currentPage: propTypes$2.exports.number,
    totalPages: propTypes$2.exports.number,
    currentPageSiblings: propTypes$2.exports.number,
    onPageChange: propTypes$2.exports.func
  };
  Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 30,
    currentPageSiblings: 3
  };

  const _excluded$a = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "disabled"];

  const PhoneField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className,
      disabled
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$a);

    const phoneInputRef = React$1.useRef();
    React$1.useLayoutEffect(() => {
      const elem = phoneInputRef.current;
      console.log(phoneInputRef);
      const value = elem.value;
      elem.style.width = "calc(" + value.length + "ch + 4px)";
      const wrapper = elem.closest(".ui-text-field__wrapper");
      let offset;

      if (wrapper.classList.contains("size__small")) {
        offset = 16;
      } else if (wrapper.classList.contains("size__xlarge")) {
        offset = 20;
      } else {
        offset = 26;
      }

      elem.nextSibling.style.paddingLeft = "calc(" + (value.length <= 2 ? 2 : value.length) + "ch + " + offset + "px)";
    }, []);
    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon
    }, inputClassName);
    const wrapperClasses = classNames({
      ["size__".concat(size)]: true,
      "ui-text-field__wrapper": true,
      "has-error": errorMessage,
      disabled
    }, className);

    const resizeCountryCode = elem => {
      const value = elem.target.value;
      elem.target.style.width = "calc(" + value.length + "ch + 4px)";
      const wrapper = elem.target.closest(".ui-text-field__wrapper");
      let offset;

      if (wrapper.classList.contains("size__small")) {
        offset = 16;
      } else if (wrapper.classList.contains("size__xlarge")) {
        offset = 20;
      } else {
        offset = 26;
      }

      elem.target.nextSibling.style.paddingLeft = "calc(" + (value.length <= 2 ? 2 : value.length) + "ch + " + offset + "px)";
    };

    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-text-field__input-wrapper ui-text-field__phone-input"
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      onInput: resizeCountryCode,
      className: "ui-text-field__country-code",
      placeholder: "+1",
      ref: phoneInputRef,
      maxLength: 4,
      is: "input",
      disabled: disabled
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateInputFieldClasses,
      disabled: disabled,
      is: "input"
    }, props))), errorMessage && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  PhoneField.propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"])
  };
  PhoneField.defaultProps = {
    size: "medium"
  };

  const _excluded$9 = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "options", "className"];

  const SelectField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      options,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$9);

    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon
    }, inputClassName);
    const selectWrapperClasses = classNames({
      "ui-text-field__input-wrapper": true,
      "ui-select-field__wrapper": true,
      "has-error": errorMessage
    });
    const wrapperClasses = classNames(["size__".concat(size), "ui-text-field__wrapper"], className);
    const mappedOptions = options.map(option => /*#__PURE__*/React__default["default"].createElement("option", {
      key: keyGen(),
      value: typeof option === "string" ? option : option.value ? option.value : option.text
    }, typeof option === "string" ? option : option.text));
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: selectWrapperClasses
    }, leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: leftIcon,
      className: "ui-text-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateInputFieldClasses,
      is: "select"
    }, props), mappedOptions), /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: ChevronFilledDown,
      className: "ui-text-field__right-icon"
    })), errorMessage && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  SelectField.propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    options: propTypes$2.exports.array
  };
  SelectField.defaultProps = {
    size: "medium",
    options: ["Item 1", "Item 2", "item 3"]
  };

  const _excluded$8 = ["label", "colorScheme", "disabled", "className"];

  const Switch = _ref => {
    let {
      label,
      colorScheme,
      disabled,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$8);

    const switchClassName = classNames({
      "ui-switch__wrapper": true,
      ["state__disabled"]: disabled,
      ["semantic__".concat(colorScheme)]: colorScheme
    }, className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label",
      className: switchClassName
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div",
      className: "ui-switch"
    }, /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "input",
      className: "ui-slider",
      type: "checkbox",
      disabled: disabled && true
    }, props)), /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "span",
      className: "ui-slider round"
    })), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-switch__label-text"
    }, label));
  };
  Switch.propTypes = {
    colorScheme: propTypes$2.exports.oneOf(["primary", "danger", "success", "outline", "invisible"]),
    disabled: propTypes$2.exports.bool
  };
  Switch.defaultProps = {
    colorScheme: 'success',
    disabled: false
  };

  const _excluded$7 = ["is", "text", "tabs", "horizontal", "spacing"],
        _excluded2 = ["text", "is"];

  const Tab = _ref => {
    let {
      is,
      text,
      tabs,
      horizontal,
      spacing
    } = _ref;
        _objectWithoutProperties$b(_ref, _excluded$7);

    const wrapperClassNames = classNames({
      "ui-tabs": true,
      horizontal
    });

    const generateSpacing = index => {
      if (index < tabs.length - 1) {
        if (horizontal) {
          return {
            marginRight: spacing || 0
          };
        } else {
          return {
            marginBottom: spacing || 0
          };
        }
      } else {
        return {};
      }
    };

    const mappedTabs = tabs.map((_ref2, index) => {
      let {
        text,
        is
      } = _ref2,
          tab = _objectWithoutProperties$b(_ref2, _excluded2);

      const spacing = generateSpacing(index);
      return /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
        is: is ? is : "a"
      }, spacing, tab, {
        key: keyGen(),
        className: "ui-tab"
      }), /*#__PURE__*/React__default["default"].createElement(Text, {
        is: "span",
        scale: "subhead"
      }, text));
    });
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: wrapperClassNames
    }, mappedTabs);
  };
  Tab.propTypes = {
    tabs: propTypes$2.exports.array,
    horizontal: propTypes$2.exports.bool,
    spacing: propTypes$2.exports.string
  };
  Tab.defaultProps = {};

  var tryToString = tryToString$3;

  var $TypeError = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var arraySlice = arraySliceSimple;

  var floor = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      array,
      mergeSort(arraySlice(array, 0, middle), comparefn),
      mergeSort(arraySlice(array, middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    } return array;
  };

  var arraySort = mergeSort;

  var userAgent$1 = engineUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;

  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$2 = _export;
  var uncurryThis$2 = functionUncurryThis;
  var aCallable = aCallable$3;
  var toObject = toObject$5;
  var lengthOfArrayLike = lengthOfArrayLike$4;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var toString$3 = toString$c;
  var fails = fails$m;
  var internalSort = arraySort;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var test = [];
  var un$Sort = uncurryThis$2(test.sort);
  var push = uncurryThis$2(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');

  var STABLE_SORT = !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;

    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66: case 69: case 70: case 72: value = 3; break;
        case 68: case 71: value = 4; break;
        default: value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({ k: chr + index, v: value });
      }
    }

    test.sort(function (a, b) { return b.v - a.v; });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });

  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$3(x) > toString$3(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$2({ target: 'Array', proto: true, forced: FORCED }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject(this);

      if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow(array, index++);

      return array;
    }
  });

  var $$1 = _export;
  var uncurryThis$1 = functionUncurryThis;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength$1 = toLength$5;
  var toString$2 = toString$c;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$9;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;

  // eslint-disable-next-line es-x/no-string-prototype-startswith -- safe
  var un$StartsWith = uncurryThis$1(''.startsWith);
  var stringSlice = uncurryThis$1(''.slice);
  var min$1 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$1({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString$2(requireObjectCoercible$1(this));
      notARegExp$1(searchString);
      var index = toLength$1(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$2(searchString);
      return un$StartsWith
        ? un$StartsWith(that, search, index)
        : stringSlice(that, index, index + search.length) === search;
    }
  });

  var $ = _export;
  var uncurryThis = functionUncurryThis;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength = toLength$5;
  var toString$1 = toString$c;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$9;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  // eslint-disable-next-line es-x/no-string-prototype-endswith -- safe
  var un$EndsWith = uncurryThis(''.endsWith);
  var slice = uncurryThis(''.slice);
  var min = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith
  $({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = toString$1(requireObjectCoercible(this));
      notARegExp(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min(toLength(endPosition), len);
      var search = toString$1(searchString);
      return un$EndsWith
        ? un$EndsWith(that, search, end)
        : slice(that, end - search.length, end) === search;
    }
  });

  const TableContent = _ref => {
    let {
      data,
      itemsPerPage,
      siblingCount,
      nullify,
      checkbox
    } = _ref;
    const noOfPages = Math.ceil(data.length / itemsPerPage);
    const [newData, setNewData] = React$1.useState(data.slice(0, itemsPerPage)); // Once data changes (or items per page) from filter or sort fxn , change the total data to the new data and display the first page of the new data

    React$1.useEffect(() => {
      setNewData(data.slice(0, itemsPerPage));
    }, [data, itemsPerPage]); // Once page change is triggered, decide the section of the array to display

    const onPageChange = page => {
      let start = (page - 1) * itemsPerPage;
      setNewData(data.slice(start, start + itemsPerPage));
    };

    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div",
      onClick: () => nullify(),
      className: "ui-table__content"
    }, newData.map((item, itemIdx) => /*#__PURE__*/React__default["default"].createElement(Box, {
      key: itemIdx,
      is: "div",
      className: "ui-table__content-item-container"
    }, checkbox && /*#__PURE__*/React__default["default"].createElement(Checkbox, {
      className: "ui-table__checkbox"
    }), Object.values(item).map((value, valueIdx) => /*#__PURE__*/React__default["default"].createElement(Box, {
      key: valueIdx,
      is: "div",
      className: "ui-table__content-item"
    }, value.component || value)))), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-table__pagination"
    }, /*#__PURE__*/React__default["default"].createElement(Pagination, {
      totalPages: noOfPages,
      currentPageSiblings: siblingCount,
      onPageChange: onPageChange
    })));
  };

  function ascending() {
    return (new DOMParser().parseFromString("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 6H11\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M4 12H11\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M4 18H13\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M15 9L18 6L21 9\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M18 6V18\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
  }

  function descending() {
    return (new DOMParser().parseFromString("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 6H13\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M4 12H11\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M4 18H11\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M15 15L18 18L21 15\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M18 6V18\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
  }

  function funnel() {
    return (new DOMParser().parseFromString("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 3V6.19387C5.00002 6.46603 5.05342 6.73548 5.15697 6.98545C5.26051 7.23542 5.41211 7.46054 5.6023 7.64756L9.59847 11.5744C9.78863 11.7613 9.94025 11.9867 10.0438 12.2365C10.1473 12.4863 10.2007 12.7551 10.2008 13.0271V21L14.7673 19.1097V13.0355C14.7674 12.7623 14.8213 12.4917 14.9257 12.241C15.0301 11.9902 15.1828 11.7644 15.3743 11.5774L19.3939 7.6515C19.5854 7.46444 19.7381 7.23864 19.8423 6.98791C19.9466 6.73718 20.0001 6.46703 20 6.19387V3.00394H8.06146\" stroke=\"#8895A7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
  }

  function rightArrow() {
    return (new DOMParser().parseFromString("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.65718 7.11118L14.8872 12.2335C15.0376 12.3807 15.0376 12.6194 14.8872 12.7667L9.65718 17.8888C9.41466 18.1263 9 17.9582 9 17.6223V7.37779C9 7.04189 9.41467 6.87367 9.65718 7.11118Z\" fill=\"#8895A7\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
  }

  const _excluded$6 = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "isHookForm", "isFormik"];

  const TextField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className,
      isHookForm,
      isFormik
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$6);

    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon
    }, inputClassName);
    const wrapperClasses = classNames(["size__".concat(size), "ui-text-field__wrapper"], className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__input-wrapper"
    }, leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: leftIcon,
      className: "ui-text-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateInputFieldClasses,
      is: "input"
    }, props)), (dropDown || rightIcon) && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: dropDown ? ChevronFilledDown : rightIcon,
      className: "ui-text-field__right-icon"
    })), errorMessage && /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  TextField.propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    errorMessage: propTypes$2.exports.string
  };
  TextField.defaultProps = {
    size: "medium"
  };

  const TableHeader = _ref => {
    let {
      headings,
      sortIndex,
      handleSort,
      sortModalTrigger,
      filterIndex,
      filterModalTrigger,
      setFilterIndex,
      handleChange,
      applyFilter,
      filterCriteria,
      setFilterCriteria,
      filterLabel,
      checkbox
    } = _ref;
    return /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "ui-table__header"
    }, checkbox && /*#__PURE__*/React.createElement(Checkbox, {
      className: "ui-table__checkbox"
    }), headings.map((item, idx) => /*#__PURE__*/React.createElement(Box, {
      key: item,
      is: "div",
      className: "ui-table__header-item "
    }, /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "ui-table__header-item-inner ".concat(sortIndex === idx && 'sorting', " "),
      onClick: e => sortModalTrigger(idx, e)
    }, item, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      className: "ui-button__dropdown-icon",
      icon: ChevronFilledDown
    }))), sortIndex === idx && /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "ui-table__header-sort_modal"
    }, /*#__PURE__*/React.createElement(Box, {
      className: "ui-table__header-sort_modal-item",
      onClick: () => handleSort(idx, 'asc')
    }, /*#__PURE__*/React.createElement("img", {
      alt: "ascending",
      src: ascending
    }), " Sort Ascending"), /*#__PURE__*/React.createElement(Box, {
      className: "ui-table__header-sort_modal-item",
      onClick: () => handleSort(idx, 'desc')
    }, /*#__PURE__*/React.createElement("img", {
      alt: "descending",
      src: descending
    }), " Sort Descending"), /*#__PURE__*/React.createElement(Box, {
      className: "ui-table__header-sort_modal-item ".concat(filterIndex === idx && 'filter-bg', " "),
      onClick: e => filterModalTrigger(idx, e)
    }, /*#__PURE__*/React.createElement(Box, {
      className: "ui-table__header-sort_modal-item filter "
    }, /*#__PURE__*/React.createElement("img", {
      alt: "filter",
      src: funnel
    }), " Filter"), " ", /*#__PURE__*/React.createElement("img", {
      alt: "right-arrow",
      src: rightArrow
    }))), filterIndex === idx && /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "ui-table__header-filter_modal"
    }, /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "ui-table__header-filter_modal-actions"
    }, /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "filter-cancel",
      onClick: e => setFilterIndex(() => null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Box, {
      is: "div",
      className: "filter-apply",
      onClick: () => {
        //  reset other states and filter 
        applyFilter();
      }
    }, "Apply Filter")), filterLabel.map((label, ind) => /*#__PURE__*/React.createElement(Box, {
      key: ind,
      is: "div",
      className: ""
    }, /*#__PURE__*/React.createElement(Radio, {
      label: label,
      name: "filter-label",
      onClick: () => setFilterCriteria(filterLabel[ind])
    }), filterCriteria === label && /*#__PURE__*/React.createElement(TextField, {
      label: "Value",
      onChange: e => handleChange(e),
      onKeyDown: e => e.keyCode === 13 && applyFilter(e)
    })))))));
  };

  const TableTag = _ref => {
    let {
      filterTag,
      closeTag,
      filterLabel,
      setFilterCriteria,
      handleChange,
      applyFilter,
      setSortIndex,
      filterCriteria,
      headings
    } = _ref;
    const [showModal, setShowModal] = React$1.useState(false);
    const [secondFilter, setSecondFilter] = React$1.useState(false);
    const [joinType, setJoinType] = React$1.useState(null); // trigger tabletag modal onclick of the table tag

    const triggerModal = () => {
      showModal && setShowModal(() => false);
      !showModal && setShowModal(() => true);
      setSecondFilter(() => false);
      setSortIndex(filterTag[0]);
    }; // onclick of the apply filter button, apply the new filter set and close mpdal


    const applyFilter2 = () => {
      !joinType && applyFilter(); // joinType==='and' && applyFilter('second')

      setShowModal(() => false);
    }; // *** second filter merge function making queries to have effect


    const joinFilter = type => {
      type === 'and' && setJoinType(() => type);
      type === 'or' && setJoinType(() => type);
      applyFilter();
    };

    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div",
      className: "ui-table__filter-tag-container"
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div",
      className: "ui-table__filter-tag",
      onClick: triggerModal
    }, headings[filterTag[0]], /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "span"
    }, " ", filterTag[1], " "), filterTag[2], /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "span",
      onClick: closeTag,
      className: "close"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Close
    }))), showModal &&
    /*#__PURE__*/
    // show table tag modal
    React__default["default"].createElement(Box, {
      is: "div",
      className: "ui-table__filter-tag-field  ".concat(!showModal && 'hide', " ")
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div"
    }, /*#__PURE__*/React__default["default"].createElement(SelectField, {
      label: "Filter",
      size: "small",
      onChange: e => setFilterCriteria(() => e.target.value),
      value: filterCriteria,
      options: filterLabel,
      dropDown: true
    }), /*#__PURE__*/React__default["default"].createElement(TextField, {
      label: "Value",
      size: "small",
      onChange: e => handleChange(e),
      onKeyDown: e => e.keyCode === 13 && applyFilter2()
    })), secondFilter &&
    /*#__PURE__*/
    //  show filter join types, and and or radio options 
    React__default["default"].createElement(Box, {
      is: "button",
      onClick: () => setSecondFilter(() => true),
      style: {
        color: 'blue',
        cursor: 'pointer',
        margin: ' 10px 0'
      }
    }, "+ Add condition"), secondFilter &&
    /*#__PURE__*/
    // show second filter form
    React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "form"
    }, /*#__PURE__*/React__default["default"].createElement(Radio, {
      label: "And",
      name: "join-type",
      onClick: e => joinFilter('and')
    }), /*#__PURE__*/React__default["default"].createElement(Radio, {
      label: "Or",
      name: "join-type",
      onClick: e => joinFilter('and')
    })), /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div",
      className: "extra-filter"
    }, /*#__PURE__*/React__default["default"].createElement(SelectField, {
      label: 'Filter',
      size: 'small',
      options: filterLabel,
      dropDown: true
    }), /*#__PURE__*/React__default["default"].createElement(TextField, {
      label: "Value",
      size: "small"
    }), /*#__PURE__*/React__default["default"].createElement(Icon, {
      className: "close",
      icon: Close,
      onClick: () => setSecondFilter(() => null)
    }))), /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div"
    }, /*#__PURE__*/React__default["default"].createElement(Button, {
      children: "Apply Filter",
      colorScheme: 'primary',
      onClick: applyFilter2
    }), /*#__PURE__*/React__default["default"].createElement(Button, {
      onClick: () => setShowModal(() => true)
    }, "Cancel"))));
  };

  const _excluded$5 = ["data", "headings", "columns", "className", "checkbox", "pagination", "itemsPerPage", "siblingCount"];

  const Table = _ref => {
    let {
      data,
      headings,
      columns,
      className,
      checkbox,
      pagination,
      itemsPerPage,
      siblingCount
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$5);

    const switchClassName = classNames({
      "ui-table__wrapper": true // "ui-table__header": true,
      // "ui-table__content": true,

    }, className);
    const [sortIndex, setSortIndex] = React$1.useState(null);
    const [filterIndex, setFilterIndex] = React$1.useState(null);
    const [filterText, setFilterText] = React$1.useState('');
    const [dataCopy, setDataCopy] = React$1.useState(data);
    const [filterCriteria, setFilterCriteria] = React$1.useState('Is');
    const filterLabel = ['Is', 'Is not', 'Is empty', 'Is not empty', 'Is equal to', 'Is not equal to', 'Begins with', 'Ends with', 'Contains', 'Does not contain'];
    const [filterTag, setFilterTag] = React$1.useState([]); // set Filter text to input value

    const handleChange = e => setFilterText(() => e.target.value.trim().toLowerCase()); // reset all states


    const nullify = () => {
      setFilterIndex(() => null);
      setSortIndex(() => null);
      setFilterText(() => '');
    }; // trigger the sort modal


    const sortModalTrigger = (idx, e) => {
      setFilterIndex(() => null);
      setSortIndex(() => idx);
      sortIndex !== null && setSortIndex(() => null);
    }; // trigger the filter modal


    const filterModalTrigger = (idx, e) => {
      setFilterIndex(() => idx);
      filterIndex !== null && setFilterIndex(() => null);
    }; // get all values of the selected column of array of objects


    const getArr = data => {
      let item = Object.values(data)[sortIndex];
      return item.alt || item;
    }; // sort column ascending or descending 


    const handleSort = (idx, type) => {
      nullify();
      setDataCopy(() => [...dataCopy].sort((a, b) => {
        let x = Object.values(a)[idx].alt || Object.values(a)[idx];
        let y = Object.values(b)[idx].alt || Object.values(b)[idx];

        if (type === 'asc') {
          if (x < y) {
            return -1;
          }

          if (y < x) {
            return 1;
          }
        }

        if (type === 'desc') {
          if (x > y) {
            return -1;
          }

          if (y > x) {
            return 1;
          }
        }

        return 0;
      }));
    };

    const applyFilter = second => {
      // !second === 'second' &&
      filter[filterCriteria](data); // second === 'second' && filter[filterCriteria](dataCopy);

      if (filterText && filterText !== '' && filterText !== ' ') {
        setFilterTag(() => [sortIndex, filterCriteria, filterText]);
      }

      nullify();
    }; // main object of filter functions


    const filter = {
      [filterLabel[0]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase() === filterText.toLowerCase().trim())),
      [filterLabel[1]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase() !== filterText.toLowerCase().trim())),
      [filterLabel[2]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item) === '')),
      [filterLabel[3]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item) !== '')),
      [filterLabel[4]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item) === filterText)),
      [filterLabel[5]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item) !== filterText)),
      [filterLabel[6]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim()))),
      [filterLabel[7]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim()))),
      [filterLabel[8]]: dataF => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
      [filterLabel[9]]: dataF => setDataCopy(() => dataF.filter(item => !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())))
    };

    const closeTag = e => {
      e.stopPropagation();
      setFilterTag([]);
      setDataCopy(() => data);
      nullify();
    };

    return /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "div"
    }, filterTag.length > 0 && /*#__PURE__*/React__default["default"].createElement(TableTag, {
      filterTag: filterTag,
      closeTag: closeTag,
      nullify: nullify,
      filterLabel: filterLabel,
      handleChange: handleChange,
      applyFilter: applyFilter,
      setFilterCriteria: setFilterCriteria,
      setSortIndex: setSortIndex,
      filterCriteria: filterCriteria,
      headings: headings
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "div",
      className: switchClassName
    }, props), /*#__PURE__*/React__default["default"].createElement(TableHeader, {
      headings: headings,
      sortIndex: sortIndex,
      sortModalTrigger: sortModalTrigger,
      filterModalTrigger: filterModalTrigger,
      filterIndex: filterIndex,
      setFilterIndex: setFilterIndex,
      handleChange: handleChange,
      applyFilter: applyFilter,
      handleSort: handleSort,
      filterCriteria: filterCriteria,
      setFilterCriteria: setFilterCriteria,
      filterLabel: filterLabel,
      checkbox: checkbox
    }), /*#__PURE__*/React__default["default"].createElement(TableContent, {
      data: dataCopy,
      nullify: nullify,
      checkbox: checkbox,
      itemsPerPage: itemsPerPage,
      siblingCount: siblingCount
    })));
  };
  Table.propTypes = {
    headings: propTypes$2.exports.array.isRequired,
    data: propTypes$2.exports.array.isRequired,
    checkbox: propTypes$2.exports.bool,
    pagination: propTypes$2.exports.bool
  };
  Table.defaultProps = {
    checkbox: false
  };

  const _excluded$4 = ["label", "className", "size", "tagDelimiterKey", "values", "onTagAdded", "onTagDeleted", "inputProps", "tagProps", "tagClassname", "onTextChanged", "onTagChanged"];

  const TagInput = _ref => {
    let {
      label,
      className,
      size,
      tagDelimiterKey,
      values,
      onTagAdded,
      onTagDeleted,
      inputProps,
      tagProps = {},
      tagClassname,
      onTextChanged,
      onTagChanged
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$4);

    const [input, setInput] = React$1.useState("");
    const [inputTags, setInputTags] = React$1.useState(values || []);
    const [isKeyReleased, setIsKeyReleased] = React$1.useState(false);

    const invokeFunction = function invokeFunction(func) {
      if (typeof func === "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return func(...args);
      }
    };

    const _tagDelimiterKey = {
      space: " ",
      enter: "Enter",
      comma: ","
    };
    const generatedTagInputClasses = classNames({
      "ui-tag-input__input": true
    });
    const wrapperClasses = classNames(["size__".concat(size), "ui-tag-input__wrapper"], className);

    const handleTextChange = event => {
      setInput(event.target.value);
      invokeFunction(onTextChanged, event.target.value);
    };

    const handleKeyDown = event => {
      const newTag = input.trim();
      let oldTagArray = inputTags;
      const key = _tagDelimiterKey[tagDelimiterKey];

      if (event.key === key && newTag.length && !inputTags.includes(newTag)) {
        event.preventDefault();
        setInputTags(prev => [...prev, newTag]);
        setInputTags(state => {
          invokeFunction(onTagAdded, newTag, state);
          invokeFunction(onTagChanged, oldTagArray, state);
          return state;
        });
        setInput("");
      }

      if (event.key === "Backspace" && !input.length && inputTags.length && isKeyReleased) {
        event.preventDefault();
        const tagsArray = [...inputTags];
        const deletedTag = tagsArray.pop();
        setInputTags(tagsArray);
        setInput(deletedTag);
        setInputTags(state => {
          invokeFunction(onTagDeleted, deletedTag, state);
          invokeFunction(onTagChanged, oldTagArray, state);
          return state;
        });
      }

      setIsKeyReleased(false);
    };

    const handleDeleteTag = index => {
      const deletedTag = inputTags[index];
      let oldTagArray = inputTags;
      setInputTags(prev => prev.filter((tag, i) => i !== index));
      setInputTags(state => {
        invokeFunction(onTagDeleted, deletedTag, state);
        invokeFunction(onTagChanged, oldTagArray, state);
        return state;
      });
    };

    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-tag-input__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ui-tag-input__input-wrapper"
    }, inputTags.map((tag, index) => /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      is: "div",
      className: "ui-tag-input__input-tag ".concat(tagClassname),
      key: "ui-tag-input".concat(keyGen())
    }, tagProps), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-tag-input__input-tag-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, tag), /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Close,
      onClick: () => handleDeleteTag(index),
      className: "ui-tag-input__close-icon"
    }))), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generatedTagInputClasses,
      is: "input"
    }, props, inputProps, {
      onKeyDown: handleKeyDown,
      onKeyUp: () => setIsKeyReleased(true),
      value: input,
      onChange: handleTextChange,
      autoFocus: true,
      onFocus: e => e.currentTarget.select()
    }))));
  };
  TagInput.propTypes = {
    /** The label used above the input element. */
    label: propTypes$2.exports.string,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),

    /** Each value is rendered inside a tag. */
    values: propTypes$2.exports.array,

    /** Key to press in order to submit a new tag while typing. */
    tagDelimiterKey: propTypes$2.exports.oneOf(["enter", "comma", "space"]),

    /** Function to be called when a new tag is added. it contains the added tag and all the tags currently available as its arguments*/
    onTagAdded: propTypes$2.exports.func,

    /** Function to be called when a tag is deleted. it contains the deleted tag and all the tags currently available as its arguments*/
    onTagDeleted: propTypes$2.exports.func,
    onTextChanged: propTypes$2.exports.func,
    onTagChanged: propTypes$2.exports.func,

    /** Props to pass to the input component. */
    inputProps: propTypes$2.exports.object,

    /** Props to change the css properties of the tag component*/
    tagProps: propTypes$2.exports.object,

    /** The class name to apply to the container of the tag component. */
    tagClassname: propTypes$2.exports.string
  };
  TagInput.defaultProps = {
    label: "Form Label",
    size: "medium",
    values: ["Option 1", "Option 2", "Option 3"],
    tagDelimiterKey: "enter",
    inputProps: {
      placeholder: "Add tag"
    },
    onTagDelete: index => {
      console.log(index);
    }
  };

  const _excluded$3 = ["label", "errorMessage", "textAreaClassName", "className", "isHookForm"];

  const TextArea = _ref => {
    let {
      label,
      errorMessage,
      textAreaClassName,
      className,
      isHookForm
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$3);

    const generateTextAreaClasses = classNames({
      "ui-text-area__textarea": true,
      "has-error": errorMessage
    }, textAreaClassName);
    const wrapperClasses = classNames(["ui-text-area__wrapper"], className);
    return isHookForm ? /*#__PURE__*/React__default["default"].forwardRef((_ref2, ref) => {
      let {
        onChange,
        onBlur,
        name,
        label
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(Box, null, /*#__PURE__*/React__default["default"].createElement(Box, {
        is: "label",
        className: wrapperClasses
      }, /*#__PURE__*/React__default["default"].createElement(Text, {
        scale: "subhead",
        className: "ui-text-area__label"
      }, label)), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
        className: generateTextAreaClasses,
        is: "textarea"
      }, props, {
        ref: ref,
        onChange: onChange,
        onBlur: onBlur,
        name: name
      })), errorMessage && /*#__PURE__*/React__default["default"].createElement(Box, {
        className: "ui-text-area__error"
      }, /*#__PURE__*/React__default["default"].createElement(Icon, {
        icon: Error$1,
        className: "ui-text-area__error-icon"
      }), /*#__PURE__*/React__default["default"].createElement(Text, {
        className: "ui-text-area__error-text",
        scale: "footnote",
        fontFace: "circularSTD"
      }, errorMessage)));
    }) : /*#__PURE__*/React__default["default"].createElement(Box, null, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label",
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      scale: "subhead",
      className: "ui-text-area__label"
    }, label)), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateTextAreaClasses,
      is: "textarea"
    }, props)), errorMessage && /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-area__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-area__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-area__error-text",
      scale: "footnote",
      fontFace: "circularSTD"
    }, errorMessage)));
  };
  TextArea.propTypes = {
    label: propTypes$2.exports.string,
    disabled: propTypes$2.exports.bool
  };
  TextArea.defaultProps = {
    label: "Form Label",
    disabled: false
  };

  const propTypes = {
    label: propTypes$2.exports.string,
    dropDown: propTypes$2.exports.bool,
    size: propTypes$2.exports.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
    errorMessage: propTypes$2.exports.string
  };
  const defaultProps = {
    size: "medium"
  };

  var isArray$1 = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;
  var hasElementType = typeof Element !== 'undefined';

  function equal(a, b) {
    // fast-deep-equal index.js 2.0.1
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      var arrA = isArray$1(a)
        , arrB = isArray$1(b)
        , i
        , length
        , key;

      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }

      if (arrA != arrB) return false;

      var dateA = a instanceof Date
        , dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();

      var regexpA = a instanceof RegExp
        , regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();

      var keys = keyList(a);
      length = keys.length;

      if (length !== keyList(b).length)
        return false;

      for (i = length; i-- !== 0;)
        if (!hasProp.call(b, keys[i])) return false;
      // end fast-deep-equal

      // start react-fast-compare
      // custom handling for DOM elements
      if (hasElementType && a instanceof Element && b instanceof Element)
        return a === b;

      // custom handling for React
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (key === '_owner' && a.$$typeof) {
          // React-specific: avoid traversing React elements' _owner.
          //  _owner contains circular references
          // and is not needed when comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of a react element
          continue;
        } else {
          // all other properties should be traversed as usual
          if (!equal(a[key], b[key])) return false;
        }
      }
      // end react-fast-compare

      // fast-deep-equal index.js 2.0.1
      return true;
    }

    return a !== a && b !== b;
  }
  // end fast-deep-equal

  var reactFastCompare = function exportedEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
        return false;
      }
      // some other error. we should definitely know about these
      throw error;
    }
  };

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$c.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$b.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to infer the `Object` constructor. */
  funcToString$2.call(Object);

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$1(value) {
    if (!isObject$1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$a = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject$1(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map');

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$2;
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /** Detect free variable `exports`. */
  var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$2 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$2 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
  typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] =
  typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] =
  typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] =
  typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] =
  typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] =
  typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$3.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

    return value === proto;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction$1(value);
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject$1(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView');

  /* Built-in method references that are verified to be native. */
  var Promise$1 = getNative(root, 'Promise');

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root, 'Set');

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root, 'WeakMap');

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$3 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap$1);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (Map$1 && getTag(new Map$1) != mapTag$3) ||
      (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag$3) ||
      (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$3;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$3;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var getTag$1 = getTag;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /** Built-in value references. */
  var Uint8Array = root.Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$1:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor;

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return cloneRegExp(object);

      case setTag$2:
        return new Ctor;

      case symbolTag$2:
        return cloneSymbol(object);
    }
  }

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject$1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag$1(value) == mapTag$1;
  }

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  /** `Object#toString` result references. */
  var setTag$1 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
  }

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$2 = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag$1 = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag$1] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$2;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject$1(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys)
      : (isFlat ? keysIn : keys);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG$1);
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }

  var reactIs$1 = {exports: {}};

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min;

  function requireReactIs_production_min () {
  	if (hasRequiredReactIs_production_min) return reactIs_production_min;
  	hasRequiredReactIs_production_min = 1;
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
  	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
  	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
  	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
  	return reactIs_production_min;
  }

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_development;

  function requireReactIs_development () {
  	if (hasRequiredReactIs_development) return reactIs_development;
  	hasRequiredReactIs_development = 1;



  	if (process.env.NODE_ENV !== "production") {
  	  (function() {

  	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  	// nor polyfill, then a plain number is used for performance.
  	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  	// (unstable) APIs that have been removed. Can we remove the symbols?

  	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  	function isValidElementType(type) {
  	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  	}

  	function typeOf(object) {
  	  if (typeof object === 'object' && object !== null) {
  	    var $$typeof = object.$$typeof;

  	    switch ($$typeof) {
  	      case REACT_ELEMENT_TYPE:
  	        var type = object.type;

  	        switch (type) {
  	          case REACT_ASYNC_MODE_TYPE:
  	          case REACT_CONCURRENT_MODE_TYPE:
  	          case REACT_FRAGMENT_TYPE:
  	          case REACT_PROFILER_TYPE:
  	          case REACT_STRICT_MODE_TYPE:
  	          case REACT_SUSPENSE_TYPE:
  	            return type;

  	          default:
  	            var $$typeofType = type && type.$$typeof;

  	            switch ($$typeofType) {
  	              case REACT_CONTEXT_TYPE:
  	              case REACT_FORWARD_REF_TYPE:
  	              case REACT_LAZY_TYPE:
  	              case REACT_MEMO_TYPE:
  	              case REACT_PROVIDER_TYPE:
  	                return $$typeofType;

  	              default:
  	                return $$typeof;
  	            }

  	        }

  	      case REACT_PORTAL_TYPE:
  	        return $$typeof;
  	    }
  	  }

  	  return undefined;
  	} // AsyncMode is deprecated along with isAsyncMode

  	var AsyncMode = REACT_ASYNC_MODE_TYPE;
  	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  	var ContextConsumer = REACT_CONTEXT_TYPE;
  	var ContextProvider = REACT_PROVIDER_TYPE;
  	var Element = REACT_ELEMENT_TYPE;
  	var ForwardRef = REACT_FORWARD_REF_TYPE;
  	var Fragment = REACT_FRAGMENT_TYPE;
  	var Lazy = REACT_LAZY_TYPE;
  	var Memo = REACT_MEMO_TYPE;
  	var Portal = REACT_PORTAL_TYPE;
  	var Profiler = REACT_PROFILER_TYPE;
  	var StrictMode = REACT_STRICT_MODE_TYPE;
  	var Suspense = REACT_SUSPENSE_TYPE;
  	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  	function isAsyncMode(object) {
  	  {
  	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
  	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

  	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
  	    }
  	  }

  	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  	}
  	function isConcurrentMode(object) {
  	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  	}
  	function isContextConsumer(object) {
  	  return typeOf(object) === REACT_CONTEXT_TYPE;
  	}
  	function isContextProvider(object) {
  	  return typeOf(object) === REACT_PROVIDER_TYPE;
  	}
  	function isElement(object) {
  	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	}
  	function isForwardRef(object) {
  	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
  	}
  	function isFragment(object) {
  	  return typeOf(object) === REACT_FRAGMENT_TYPE;
  	}
  	function isLazy(object) {
  	  return typeOf(object) === REACT_LAZY_TYPE;
  	}
  	function isMemo(object) {
  	  return typeOf(object) === REACT_MEMO_TYPE;
  	}
  	function isPortal(object) {
  	  return typeOf(object) === REACT_PORTAL_TYPE;
  	}
  	function isProfiler(object) {
  	  return typeOf(object) === REACT_PROFILER_TYPE;
  	}
  	function isStrictMode(object) {
  	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
  	}
  	function isSuspense(object) {
  	  return typeOf(object) === REACT_SUSPENSE_TYPE;
  	}

  	reactIs_development.AsyncMode = AsyncMode;
  	reactIs_development.ConcurrentMode = ConcurrentMode;
  	reactIs_development.ContextConsumer = ContextConsumer;
  	reactIs_development.ContextProvider = ContextProvider;
  	reactIs_development.Element = Element;
  	reactIs_development.ForwardRef = ForwardRef;
  	reactIs_development.Fragment = Fragment;
  	reactIs_development.Lazy = Lazy;
  	reactIs_development.Memo = Memo;
  	reactIs_development.Portal = Portal;
  	reactIs_development.Profiler = Profiler;
  	reactIs_development.StrictMode = StrictMode;
  	reactIs_development.Suspense = Suspense;
  	reactIs_development.isAsyncMode = isAsyncMode;
  	reactIs_development.isConcurrentMode = isConcurrentMode;
  	reactIs_development.isContextConsumer = isContextConsumer;
  	reactIs_development.isContextProvider = isContextProvider;
  	reactIs_development.isElement = isElement;
  	reactIs_development.isForwardRef = isForwardRef;
  	reactIs_development.isFragment = isFragment;
  	reactIs_development.isLazy = isLazy;
  	reactIs_development.isMemo = isMemo;
  	reactIs_development.isPortal = isPortal;
  	reactIs_development.isProfiler = isProfiler;
  	reactIs_development.isStrictMode = isStrictMode;
  	reactIs_development.isSuspense = isSuspense;
  	reactIs_development.isValidElementType = isValidElementType;
  	reactIs_development.typeOf = typeOf;
  	  })();
  	}
  	return reactIs_development;
  }

  (function (module) {

  	if (process.env.NODE_ENV === 'production') {
  	  module.exports = requireReactIs_production_min();
  	} else {
  	  module.exports = requireReactIs_development();
  	}
  } (reactIs$1));

  var reactIs = reactIs$1.exports;
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /** @private is the value an empty array? */

  var isEmptyArray = function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
  };
  /** @private is the given object a Function? */

  var isFunction = function isFunction(obj) {
    return typeof obj === 'function';
  };
  /** @private is the given object an Object? */

  var isObject = function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  };
  /** @private is the given object an integer? */

  var isInteger = function isInteger(obj) {
    return String(Math.floor(Number(obj))) === obj;
  };
  /** @private Does a React component have exactly 0 children? */

  var isEmptyChildren = function isEmptyChildren(children) {
    return React$1.Children.count(children) === 0;
  };
  /**
   * Deeply get a value from an object via its path.
   */

  function getIn(obj, key, def, p) {
    if (p === void 0) {
      p = 0;
    }

    var path = toPath(key);

    while (obj && p < path.length) {
      obj = obj[path[p++]];
    }

    return obj === undefined ? def : obj;
  }
  /**
   * Deeply set a value from in object via it's path. If the value at `path`
   * has changed, return a shallow copy of obj with `value` set at `path`.
   * If `value` has not changed, return the original `obj`.
   *
   * Existing objects / arrays along `path` are also shallow copied. Sibling
   * objects along path retain the same internal js reference. Since new
   * objects / arrays are only created along `path`, we can test if anything
   * changed in a nested structure by comparing the object's reference in
   * the old and new object, similar to how russian doll cache invalidation
   * works.
   *
   * In earlier versions of this function, which used cloneDeep, there were
   * issues whereby settings a nested value would mutate the parent
   * instead of creating a new object. `clone` avoids that bug making a
   * shallow copy of the objects along the update path
   * so no object is mutated in place.
   *
   * Before changing this function, please read through the following
   * discussions.
   *
   * @see https://github.com/developit/linkstate
   * @see https://github.com/jaredpalmer/formik/pull/123
   */

  function setIn(obj, path, value) {
    var res = clone(obj); // this keeps inheritance when obj is a class

    var resVal = res;
    var i = 0;
    var pathArray = toPath(path);

    for (; i < pathArray.length - 1; i++) {
      var currentPath = pathArray[i];
      var currentObj = getIn(obj, pathArray.slice(0, i + 1));

      if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
        resVal = resVal[currentPath] = clone(currentObj);
      } else {
        var nextPath = pathArray[i + 1];
        resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
      }
    } // Return original object if new value is the same as current


    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
      return obj;
    }

    if (value === undefined) {
      delete resVal[pathArray[i]];
    } else {
      resVal[pathArray[i]] = value;
    } // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


    if (i === 0 && value === undefined) {
      delete res[pathArray[i]];
    }

    return res;
  }

  var FormikContext = /*#__PURE__*/React$1.createContext(undefined);
  FormikContext.displayName = 'FormikContext';
  FormikContext.Provider;
  FormikContext.Consumer;
  function useFormikContext() {
    var formik = React$1.useContext(FormikContext);
    !!!formik ? process.env.NODE_ENV !== "production" ? warning(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : warning(false) : void 0;
    return formik;
  }

  function useField(propsOrFieldName) {
    var formik = useFormikContext();
    var getFieldProps = formik.getFieldProps,
        getFieldMeta = formik.getFieldMeta,
        getFieldHelpers = formik.getFieldHelpers,
        registerField = formik.registerField,
        unregisterField = formik.unregisterField;
    var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

    var props = isAnObject ? propsOrFieldName : {
      name: propsOrFieldName
    };
    var fieldName = props.name,
        validateFn = props.validate;
    React$1.useEffect(function () {
      if (fieldName) {
        registerField(fieldName, {
          validate: validateFn
        });
      }

      return function () {
        if (fieldName) {
          unregisterField(fieldName);
        }
      };
    }, [registerField, unregisterField, fieldName, validateFn]);

    if (process.env.NODE_ENV !== "production") {
      !formik ? process.env.NODE_ENV !== "production" ? warning(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : warning(false) : void 0;
    }

    !fieldName ? process.env.NODE_ENV !== "production" ? warning(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : warning(false) : void 0;
    return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
  }

  var Form = /*#__PURE__*/React$1.forwardRef(function (props, ref) {
    // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
    // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
    var action = props.action,
        rest = _objectWithoutPropertiesLoose(props, ["action"]);

    var _action = action != null ? action : '#';

    var _useFormikContext = useFormikContext(),
        handleReset = _useFormikContext.handleReset,
        handleSubmit = _useFormikContext.handleSubmit;

    return React$1.createElement("form", Object.assign({
      onSubmit: handleSubmit,
      ref: ref,
      onReset: handleReset,
      action: _action
    }, rest));
  });
  Form.displayName = 'Form';

  /**
   * Some array helpers!
   */

  var move = function move(array, from, to) {
    var copy = copyArrayLike(array);
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
  };
  var swap = function swap(arrayLike, indexA, indexB) {
    var copy = copyArrayLike(arrayLike);
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
  };
  var insert = function insert(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy.splice(index, 0, value);
    return copy;
  };
  var replace = function replace(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy[index] = value;
    return copy;
  };

  var copyArrayLike = function copyArrayLike(arrayLike) {
    if (!arrayLike) {
      return [];
    } else if (Array.isArray(arrayLike)) {
      return [].concat(arrayLike);
    } else {
      var maxIndex = Object.keys(arrayLike).map(function (key) {
        return parseInt(key);
      }).reduce(function (max, el) {
        return el > max ? el : max;
      }, 0);
      return Array.from(_extends({}, arrayLike, {
        length: maxIndex + 1
      }));
    }
  };

  var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(FieldArrayInner, _React$Component);

    function FieldArrayInner(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _this.updateArrayField = function (fn, alterTouched, alterErrors) {
        var _this$props = _this.props,
            name = _this$props.name,
            setFormikState = _this$props.formik.setFormikState;
        setFormikState(function (prevState) {
          var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
          var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
          // otherwise it causes an error with unshift.

          var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
          var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
          var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

          if (isEmptyArray(fieldError)) {
            fieldError = undefined;
          }

          if (isEmptyArray(fieldTouched)) {
            fieldTouched = undefined;
          }

          return _extends({}, prevState, {
            values: values,
            errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
            touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
          });
        });
      };

      _this.push = function (value) {
        return _this.updateArrayField(function (arrayLike) {
          return [].concat(copyArrayLike(arrayLike), [cloneDeep(value)]);
        }, false, false);
      };

      _this.handlePush = function (value) {
        return function () {
          return _this.push(value);
        };
      };

      _this.swap = function (indexA, indexB) {
        return _this.updateArrayField(function (array) {
          return swap(array, indexA, indexB);
        }, true, true);
      };

      _this.handleSwap = function (indexA, indexB) {
        return function () {
          return _this.swap(indexA, indexB);
        };
      };

      _this.move = function (from, to) {
        return _this.updateArrayField(function (array) {
          return move(array, from, to);
        }, true, true);
      };

      _this.handleMove = function (from, to) {
        return function () {
          return _this.move(from, to);
        };
      };

      _this.insert = function (index, value) {
        return _this.updateArrayField(function (array) {
          return insert(array, index, value);
        }, function (array) {
          return insert(array, index, null);
        }, function (array) {
          return insert(array, index, null);
        });
      };

      _this.handleInsert = function (index, value) {
        return function () {
          return _this.insert(index, value);
        };
      };

      _this.replace = function (index, value) {
        return _this.updateArrayField(function (array) {
          return replace(array, index, value);
        }, false, false);
      };

      _this.handleReplace = function (index, value) {
        return function () {
          return _this.replace(index, value);
        };
      };

      _this.unshift = function (value) {
        var length = -1;

        _this.updateArrayField(function (array) {
          var arr = array ? [value].concat(array) : [value];

          if (length < 0) {
            length = arr.length;
          }

          return arr;
        }, function (array) {
          var arr = array ? [null].concat(array) : [null];

          if (length < 0) {
            length = arr.length;
          }

          return arr;
        }, function (array) {
          var arr = array ? [null].concat(array) : [null];

          if (length < 0) {
            length = arr.length;
          }

          return arr;
        });

        return length;
      };

      _this.handleUnshift = function (value) {
        return function () {
          return _this.unshift(value);
        };
      };

      _this.handleRemove = function (index) {
        return function () {
          return _this.remove(index);
        };
      };

      _this.handlePop = function () {
        return function () {
          return _this.pop();
        };
      }; // We need TypeScript generics on these, so we'll bind them in the constructor
      // @todo Fix TS 3.2.1


      _this.remove = _this.remove.bind(_assertThisInitialized(_this));
      _this.pop = _this.pop.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = FieldArrayInner.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.validateOnChange && this.props.formik.validateOnChange && !reactFastCompare(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
        this.props.formik.validateForm(this.props.formik.values);
      }
    };

    _proto.remove = function remove(index) {
      // We need to make sure we also remove relevant pieces of `touched` and `errors`
      var result;
      this.updateArrayField( // so this gets call 3 times
      function (array) {
        var copy = array ? copyArrayLike(array) : [];

        if (!result) {
          result = copy[index];
        }

        if (isFunction(copy.splice)) {
          copy.splice(index, 1);
        }

        return copy;
      }, true, true);
      return result;
    };

    _proto.pop = function pop() {
      // Remove relevant pieces of `touched` and `errors` too!
      var result;
      this.updateArrayField( // so this gets call 3 times
      function (array) {
        var tmp = array;

        if (!result) {
          result = tmp && tmp.pop && tmp.pop();
        }

        return tmp;
      }, true, true);
      return result;
    };

    _proto.render = function render() {
      var arrayHelpers = {
        push: this.push,
        pop: this.pop,
        swap: this.swap,
        move: this.move,
        insert: this.insert,
        replace: this.replace,
        unshift: this.unshift,
        remove: this.remove,
        handlePush: this.handlePush,
        handlePop: this.handlePop,
        handleSwap: this.handleSwap,
        handleMove: this.handleMove,
        handleInsert: this.handleInsert,
        handleReplace: this.handleReplace,
        handleUnshift: this.handleUnshift,
        handleRemove: this.handleRemove
      };

      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          name = _this$props2.name,
          _this$props2$formik = _this$props2.formik,
          restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

      var props = _extends({}, arrayHelpers, {
        form: restOfFormik,
        name: name
      });

      return component ? React$1.createElement(component, props) : render ? render(props) : children // children come last, always called
      ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? React$1.Children.only(children) : null : null;
    };

    return FieldArrayInner;
  }(React$1.Component);

  FieldArrayInner.defaultProps = {
    validateOnChange: true
  };

  const _excluded$2 = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className"];

  const FormikTextField = _ref => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$2);

    const [field, meta, helpers] = useField(props);
    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon
    }, inputClassName);
    const wrapperClasses = classNames(["size__".concat(size), "ui-text-field__wrapper"], className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__input-wrapper"
    }, leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: leftIcon,
      className: "ui-text-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({}, field, props, {
      className: generateInputFieldClasses,
      is: "input"
    })), (dropDown || rightIcon) && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: dropDown ? ChevronFilledDown : rightIcon,
      className: "ui-text-field__right-icon"
    })), (errorMessage || meta.touched && meta.error) && /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage ? errorMessage : meta.error)));
  };
  FormikTextField.propTypes = _objectSpread2({}, propTypes);
  FormikTextField.defaultProps = _objectSpread2({}, defaultProps);

  const _excluded$1 = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className", "isHookForm", "isFormik", "onChange", "onBlur", "name"];
  const HookFormTextField = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
    let {
      label,
      leftIcon,
      size,
      dropDown,
      rightIcon,
      errorMessage,
      inputClassName,
      className,
      isHookForm,
      isFormik,
      onChange,
      onBlur,
      name
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded$1);

    const generateInputFieldClasses = classNames({
      "ui-text-field__input": true,
      "has-error": errorMessage,
      "has-left-icon": leftIcon,
      "has-right-icon": dropDown || rightIcon
    }, inputClassName);
    const wrapperClasses = classNames(["size__".concat(size), "ui-text-field__wrapper"], className);
    return /*#__PURE__*/React__default["default"].createElement(Box, {
      className: wrapperClasses
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      is: "label"
    }, /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__label",
      scale: "subhead"
    }, label)), /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__input-wrapper"
    }, leftIcon && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: leftIcon,
      className: "ui-text-field__left-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Box, _extends$e({
      className: generateInputFieldClasses,
      is: "input"
    }, props, {
      ref: ref,
      onChange: onChange,
      onBlur: onBlur,
      name: name
    })), (dropDown || rightIcon) && /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: dropDown ? ChevronFilledDown : rightIcon,
      className: "ui-text-field__right-icon"
    })), errorMessage && /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-text-field__error"
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      icon: Error$1,
      className: "ui-text-field__error-icon"
    }), /*#__PURE__*/React__default["default"].createElement(Text, {
      className: "ui-text-field__error-text",
      scale: "subhead",
      fontFace: "circularSTD"
    }, errorMessage)));
  });
  HookFormTextField.propTypes = _objectSpread2({}, propTypes);
  HookFormTextField.defaultProps = _objectSpread2({}, defaultProps);

  function useToast(props) {
    const [, setCountUp] = React$1.useState(0);
    const [toasts, setToasts] = React$1.useState([]);
    React$1.useEffect(() => {
      const interval = setInterval(() => {
        if (toasts.length) {
          let holdingCountUp = 0;
          setCountUp(countUp => {
            holdingCountUp = countUp;
            return countUp;
          });
          let currentToast = toasts[0];
          const timeToClose = currentToast.autoClose || props.autoClose;

          if (holdingCountUp >= timeToClose) {
            let holderArray = [...toasts];
            holderArray.shift();
            setToasts(holderArray);
            setCountUp(c => 0);
          }

          setCountUp(countUp => countUp + 1);
        } else {
          setCountUp(-1);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    });
    return [toasts, setToasts, setCountUp];
  }

  const _excluded = ["position"];

  const Toast = _ref => {
    let {
      position
    } = _ref,
        props = _objectWithoutProperties$b(_ref, _excluded);

    const [toasts, setToasts, setCountUp] = useToast(props);

    const removeToastItem = index => {
      let holderArray = [...toasts];
      holderArray.splice(index, 1);
      setToasts(holderArray);

      if (index === 0) {
        setCountUp(c => 0);
      }
    };

    const toastWrapperClassName = classNames({
      "ui-toast__wrapper": true,
      ["position__".concat(position)]: true
    });
    let renderedToasts = toasts.map((toast, index) => /*#__PURE__*/React__default["default"].createElement(Alert, _extends$e({}, toast, {
      onClick: () => removeToastItem(index),
      key: keyGen(),
      closable: true
    })));
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: toastWrapperClassName
    }, /*#__PURE__*/React__default["default"].createElement(Box, {
      className: "ui-toast__column"
    }, /*#__PURE__*/React__default["default"].createElement(Alert, {
      colorScheme: "info",
      closable: true,
      description: "I'm here to stay... unless you close me :)"
    }), renderedToasts));
  };
  Toast.propTypes = {
    autoclose: propTypes$2.exports.number,
    position: propTypes$2.exports.oneOf(["top-right", "top-left", "bottom-left", "bottom-right"])
  };
  Toast.defaultProps = {
    autoclose: 5000,
    position: "top-right"
  };

  exports.Alert = Alert;
  exports.Avatar = Avatar;
  exports.Badge = Badge;
  exports.Banner = Banner;
  exports.Box = Box;
  exports.Button = Button;
  exports.Card = Card;
  exports.CardInputField = CardInputField;
  exports.Checkbox = Checkbox;
  exports.DatePicker = DatePickerField;
  exports.FormikTextField = FormikTextField;
  exports.Heading = Heading;
  exports.HookFormTextField = HookFormTextField;
  exports.Icon = Icon;
  exports.Modal = Modal;
  exports.Pagination = Pagination;
  exports.PhoneField = PhoneField;
  exports.Radio = Radio;
  exports.SelectField = SelectField;
  exports.Switch = Switch;
  exports.Tab = Tab;
  exports.Table = Table;
  exports.TagInput = TagInput;
  exports.Text = Text;
  exports.TextArea = TextArea;
  exports.TextField = TextField;
  exports.Toast = Toast;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
