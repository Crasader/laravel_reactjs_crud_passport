webpackJsonp([8],{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Page = __webpack_require__(488);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import libs
var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

// import components
exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Page2.default);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFields", function() { return mapFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return ErrorBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/**
  * ree-validate v2.0.3
  * (c) 2018 Moeen Basra
  * @license MIT
  */
/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function (size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function () {
  return typeof VeeValidate !== 'undefined';
};

var obj;
var messages = {
  _default: function (field) { return ("The " + field + " value is not valid."); },
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max + ".");
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
  credit_card: function (field) { return ("The " + field + " field is invalid."); },
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max + ".");
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format + ".");
},
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

    return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
  email: function (field) { return ("The " + field + " field must be a valid email."); },
  ext: function (field) { return ("The " + field + " field must be a valid file."); },
  image: function (field) { return ("The " + field + " field must be an image."); },
  in: function (field) { return ("The " + field + " field must be a valid value."); },
  integer: function (field) { return ("The " + field + " field must be an integer."); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
  length: function (field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return ("The " + field + " length be between " + length + " and " + max + ".");
    }

    return ("The " + field + " length must be " + length + ".");
  },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters.");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less.");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters.");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more.");
},
  not_in: function (field) { return ("The " + field + " field must be a valid value."); },
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
  regex: function (field) { return ("The " + field + " field format is invalid."); },
  required: function (field) { return ("The " + field + " field is required."); },
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " size must be less than " + (formatFileSize(size)) + ".");
},
  url: function (field) { return ("The " + field + " field is not a valid URL."); }
};

var locale = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.localize(( obj = {}, obj[locale.name] = locale, obj));
}

// 

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

/**
 * Checks if the value is either null or undefined.
 */
var isNullOrUndefined = function (value) {
  return value === null || value === undefined
};

/**
 * Sets the data attribute.
 */
var setDataAttribute = function (el, name, value) { return el.setAttribute(("data-vv-" + name), value); };

/**
 * Creates the default flags object.
 */
var createFlags = function () { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: false,
}); };

/**
 * Shallow object comparison.
 */


/**
 * Determines the input field scope.
 */


/**
 * Gets the value in an object safely.
 */
var getPath = function (path, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!path || !target) { return def }

  var value = target;
  path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
      value = def;

      return false
    }

    value = value[prop];

    return true
  });

  return value
};

/**
 * Checks if path exists within an object.
 */


/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params }
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, immediate) {
  if ( wait === void 0 ) wait = 0;
  if ( immediate === void 0 ) immediate = false;

  if (wait === 0) {
    return fn
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;
      if (!immediate) { fn.apply(void 0, args); }
    };
    /* istanbul ignore next */
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    /* istanbul ignore next */
    if (callNow) { fn.apply(void 0, args); }
  }
};

/**
 * Normalizes the given rules expression.
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {}
  }

  if (isObject(rules)) {
    // $FlowFixMe
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];
      // $FlowFixMe
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      // $FlowFixMe
      if (rules[curr] !== false) {
        prev[curr] = params;
      }

      return prev
    }, {})
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {}
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev
    }

    prev[parsedRule.name] = parsedRule.params;
    return prev
  }, {})
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[ree-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 */
var createError = function (message) { return new Error(("[ree-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && ! Array.isArray(obj); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className)
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")))
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (Array.isArray(className)) {
    className.forEach(function (item) { return toggleClass(el, item, status); });
    return;
  }

  if (status) {
    return addClass(el, className)
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike)
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ))
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to
};

var id = 0;
var idTemplate = '{id}';

/**
 * Generates a unique id.
 */
var uniqId = function () {
  // handle too many uses of uniqId, although unlikely.
  if (id >= 9999) {
    id = 0;
    // shift the template.
    idTemplate = idTemplate.replace('{id}', '_{id}');
  }

  id++;
  var newId = idTemplate.replace('{id}', String(id));

  return newId
};

/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
var find = function (arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i]
    }
  }

  return undefined
};

/**
 * Returns a suitable event name for the input element.
 */
var getInputEventName = function (el) {
  if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
    return 'change'
  }

  return 'input'
};



var makeEventsArray = function (events) {
  return (typeof events === 'string' && events.length) ? events.split('|') : []
};

var makeDelayObject = function (events, delay, delayConfig) {
  if (typeof delay === 'number') {
    return events.reduce(function (prev, e) {
      prev[e] = delay;
      return prev
    }, {})
  }

  return events.reduce(function (prev, e) {
    if (typeof delay === 'object' && e in delay) {
      prev[e] = delay[e];
      return prev
    }

    if (typeof delayConfig === 'number') {
      prev[e] = delayConfig;
      return prev
    }

    prev[e] = (delayConfig && delayConfig[e]) || 0;

    return prev
  }, {})
};



var merge = function (target, source) {
  if (! (isObject(target) && isObject(source))) {
    return target
  }

  Object.keys(source).forEach(function (key) {
    var obj, obj$1;

    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj));
      }

      merge(target[key], source[key]);
      return
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1));
  });

  return target
};

// 

var ErrorBag = function ErrorBag () {
  this.items = [];
};

/**
 * Adds an error to the internal array.
 */
ErrorBag.prototype.add = function add (error) {
  // handle old signature.
  if (arguments.length > 1) {
    error = {
      field: arguments[0],
      msg: arguments[1],
      rule: arguments[2],
      scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null,
      regenerate: null,
    };
  }

  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  this.items.push(error);
};

/**
 * Regenrates error messages if they have a generator function.
 */
ErrorBag.prototype.regenerate = function regenerate () {
  this.items.forEach(function (i) {
    i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
  });
};

/**
 * Updates a field error with the new field scope.
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
 * Gets all error messages from the internal array.
 */
ErrorBag.prototype.all = function all (scope) {
  if (isNullOrUndefined(scope)) {
    return this.items.map(function (e) { return e.msg; })
  }

  return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; })
};

/**
 * Checks if there are any errors in the internal array.
 */
ErrorBag.prototype.any = function any (scope) {
  if (isNullOrUndefined(scope)) {
    return !!this.items.length
  }

  return !!this.items.filter(function (e) { return e.scope === scope; }).length
};

/**
 * Removes all items from the internal array.
 */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  if (isNullOrUndefined(scope)) {
    scope = null;
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].scope === scope) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Collects errors into groups or for a specific field.
 */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    if ( map === void 0 ) map = true;

  if (!field) {
    var collection = {};
    this.items.forEach(function (e) {
      if (!collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection
  }

  field = !isNullOrUndefined(field) ? String(field) : field;
  if (isNullOrUndefined(scope)) {
    return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return (map ? e.msg : e); })
  }

  return this.items.filter(function (e) { return e.field === field && e.scope === scope; })
    .map(function (e) { return (map ? e.msg : e); })
};
/**
 * Gets the internal array length.
 */
ErrorBag.prototype.count = function count () {
  return this.items.length
};

/**
 * Finds and fetches the first error message for the specified field id.
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : null
};

/**
 * Gets the first error message for a specific field.
 */
ErrorBag.prototype.first = function first (field, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = null;

  if (isNullOrUndefined(field)) {
    return null
  }

  field = String(field);
  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope)
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].field === field && (this$1.items[i].scope === scope)) {
      return this$1.items[i].msg
    }
  }

  return null
};

/**
 * Returns the first error rule for the specified field
 */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || null
};

/**
 * Checks if the internal array has at least one error for the specified field.
 */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !!this.first(field, scope)
};

/**
 * Gets the first error message for a specific field and a rule.
 */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || null
};

/**
 * Gets the first error message for a specific field that not match the rule.
 */
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
    if ( rule === void 0 ) rule = 'required';
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];

  return (error && error.msg) || null
};

/**
 * Removes errors by matching against the id.
 */
ErrorBag.prototype.removeById = function removeById (id) {
    var this$1 = this;

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].id === id) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Removes all error messages associated with a specific field.
 */
ErrorBag.prototype.remove = function remove (field, scope, id) {
    var this$1 = this;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var removeCondition = function (e) {
    if (e.id && id) {
      return e.id === id
    }

    if (!isNullOrUndefined(scope)) {
      return e.field === field && e.scope === scope
    }

    return e.field === field && e.scope === null
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Get the field attributes if there's a rule selector.
 */
ErrorBag.prototype._selector = function _selector (field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
      var name = ref[0];
      var rule = ref[1];

    return { name: name, rule: rule }
  }

  return null
};

/**
 * Get the field scope if specified using dot notation.
 */
ErrorBag.prototype._scope = function _scope (field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);

    return { name: name.join('.'), scope: scope }
  }

  return null
};

// 

var DEFAULT_OPTIONS = {
  targetOf: null,
  initial: false,
  scope: null,
  listen: true,
  name: null,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty', // control has been interacted with
  },
};

var Field = function Field (el, options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = el;
  this.updated = false;
  this.dependencies = [];
  this.watchers = [];
  this.events = [];
  this.delay = 0;
  this.rules = {};
  this._cacheId(options);
  this.classNames = assign({}, DEFAULT_OPTIONS.classNames);
  options = assign({}, DEFAULT_OPTIONS, options);
  this._delay = !isNullOrUndefined(options.delay) ? options.delay : 0; // cache initial delay
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = createFlags();
  this.vm = options.vm;
  this.component = options.component;
  this.ctorConfig = this.component ? getPath('$options.$_reeValidate', this.component) : undefined;
  this.update(options);
  this.updated = false;
};

var prototypeAccessors = { validator: { configurable: true },isRequired: { configurable: true },isDisabled: { configurable: true },alias: { configurable: true },value: { configurable: true },rejectsFalse: { configurable: true } };

prototypeAccessors.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    warn('No validator instance detected.');
    return { validate: function () {} }
  }

  return this.vm.$validator
};

prototypeAccessors.isRequired.get = function () {
  return !!this.rules.required
};

prototypeAccessors.isDisabled.get = function () {
  return !!(this.component && this.component.disabled) || !!(this.el && this.el.disabled)
};

/**
 * Gets the display name (user-friendly name).
 */
prototypeAccessors.alias.get = function () {
  if (this._alias) {
    return this._alias
  }

  var alias = null;
  if (this.el) {
    alias = getDataAttribute(this.el, 'as');
  }

  if (!alias && this.component) {
    return this.component.$attrs && this.component.$attrs['data-vv-as']
  }

  return alias
};

/**
 * Gets the input value.
 */

prototypeAccessors.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined
  }

  return this.getter()
};

/**
 * If the field rejects false as a valid value for the required rule.
 */

prototypeAccessors.rejectsFalse.get = function () {
  if (this.component && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse
  }

  if (!this.el) {
    return false
  }

  return this.el.type === 'checkbox'
};

/**
 * Determines if the instance matches the options provided.
 */
Field.prototype.matches = function matches (options) {
  if (options.id) {
    return this.id === options.id
  }

  if (options.name === undefined && options.scope === undefined) {
    return true
  }

  if (options.scope === undefined) {
    return this.name === options.name
  }

  if (options.name === undefined) {
    return this.scope === options.scope
  }

  return options.name === this.name && options.scope === this.scope
};

/**
 * Caches the field id.
 */
Field.prototype._cacheId = function _cacheId (options) {
  if (this.el && !options.targetOf) {
    setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
  }
};

/**
 * Updates the field with changed data.
 */
Field.prototype.update = function update (options) {
  this.targetOf = options.targetOf || null;
  this.initial = options.initial || this.initial || false;

  // update errors scope if the field scope was changed.
  if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = !isNullOrUndefined(options.scope) ? options.scope
    : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = (options.classes || this.classes || false) && !this.component;
  this.classNames = isObject(options.classNames) ? merge(this.classNames, options.classNames) : this.classNames;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this._alias = options.alias || this._alias;
  this.events = (options.events) ? makeEventsArray(options.events) : this.events;
  this.delay = (options.delay) ? makeDelayObject(this.events, options.delay, this._delay) : makeDelayObject(this.events, this.delay, this._delay);
  this.updateDependencies();
  this.addActionListeners();

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;
  this.addValueListeners();

  // no need to continue.
  if (!this.el) {
    return
  }

  this.updateClasses();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset () {
    var this$1 = this;

  var defaults = createFlags();
  Object.keys(this.flags).filter(function (flag) { return flag !== 'required'; }).forEach(function (flag) {
    this$1.flags[flag] = defaults[flag];
  });

  this.addActionListeners();
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 */
Field.prototype.setFlags = function setFlags (flags) {
    var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched',
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (
    flags.untouched !== undefined ||
    flags.touched !== undefined ||
    flags.dirty !== undefined ||
    flags.pristine !== undefined
  ) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
 */
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (Validator.isTargetRule(r)) {
      var selector = this$1.rules[r][0];
      if (r === 'confirmed' && !selector) {
        selector = (this$1.name) + "_confirmation";
      }

      prev.push({ selector: selector, name: r });
    }

    return prev
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref) {
      var selector = ref.selector;
      var name = ref.name;

    var el = null;
    // vue ref selector.
    if (selector[0] === '$') {
      var ref$1 = this$1.vm.$refs[selector.slice(1)];
      el = Array.isArray(ref$1) ? ref$1[0] : ref$1;
    } else {
      try {
        // try query selector
        el = this$1.vm.$el.querySelector(selector);
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      try {
        el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      return
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      initial: this$1.initial,
      targetOf: this$1.id,
    };

    this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
  });
};

/**
 * Removes listeners.
 */
Field.prototype.unwatch = function unwatch (tag) {
    if ( tag === void 0 ) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return
  }

  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses () {
  if (!this.classes || this.isDisabled) { return }

  toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
  toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
  toggleClass(this.el, this.classNames.touched, this.flags.touched);
  toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
  // make sure we don't set any classes if the state is undetermined.
  if (!isNullOrUndefined(this.flags.valid) && this.flags.validated) {
    toggleClass(this.el, this.classNames.valid, this.flags.valid);
  }

  if (!isNullOrUndefined(this.flags.invalid) && this.flags.validated) {
    toggleClass(this.el, this.classNames.invalid, this.flags.invalid);
  }
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = getInputEventName(this.el);
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.component && isCallable(this.component.$once)) {
    this.component.$once('input', onInput);
    this.component.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.component.$off('input', onInput);
      },
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.component.$off('blur', onBlur);
      },
    });
    return
  }

  if (!this.el) { return }

  this.el.addEventListener(inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
  this.el.addEventListener(blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    },
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    },
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen) { return }

  var fn = this.targetOf ? function () {
    this$1.validator.validate(("#" + (this$1.targetOf)));
  } : function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
    if (args.length === 0 || (isCallable(Event) && args[0] instanceof Event) || (args[0] && args[0].srcElement)) {
      args[0] = this$1.value;
    }

    this$1.validator.validate(("#" + (this$1.id)), args[0]);
  };

  var inputEvent = this.model && this.model.lazy ? 'change' : getInputEventName(this.el);
  // replace input event with suitable one.
  var events = this.events.map(function (e) {
    return e === 'input' ? inputEvent : e
  });

  // if there is a watchable model and an on input validation is requested.
  if (this.model && this.model.expression && events.indexOf(inputEvent) !== -1) {
    var debouncedFn = debounce(fn, this.delay[inputEvent]);
    var unwatch = this.vm.$watch(this.model.expression, function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      this$1.flags.pending = true;
      debouncedFn.apply(void 0, args);
    });
    this.watchers.push({
      tag: 'input_model',
      unwatch: unwatch,
    });
    // filter out input event as it is already handled by the watcher API.
    events = events.filter(function (e) { return e !== inputEvent; });
  }

  // Add events.
  events.forEach(function (e) {
    var debouncedFn = debounce(fn, this$1.delay[e]);
    var validate = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      this$1.flags.pending = true;
      debouncedFn.apply(void 0, args);
    };

    this$1._addComponentEventListener(e, validate);
    this$1._addHTMLEventListener(e, validate);
  });
};

Field.prototype._addComponentEventListener = function _addComponentEventListener (evt, validate) {
    var this$1 = this;

  if (!this.component) { return }

  this.component.$on(evt, validate);
  this.watchers.push({
    tag: 'input_vue',
    unwatch: function () {
      this$1.component.$off(evt, validate);
    },
  });
};

Field.prototype._addHTMLEventListener = function _addHTMLEventListener (evt, validate) {
    var this$1 = this;

  if (!this.el) { return }

  if (~['radio', 'checkbox'].indexOf(this.el.type)) {
    var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
    toArray(els).forEach(function (el) {
      el.addEventListener(evt, validate);
      this$1.watchers.push({
        tag: 'input_native',
        unwatch: function () {
          el.removeEventListener(evt, validate);
        },
      });
    });

    return
  }

  this.el.addEventListener(evt, validate);
  this.watchers.push({
    tag: 'input_native',
    unwatch: function () {
      this$1.el.removeEventListener(evt, validate);
    },
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
  if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) { return }

  this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
  this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity)) { return }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  this.unwatch();
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors );

// 

var FieldBag = function FieldBag () {
  this.items = [];
};

var prototypeAccessors$1 = { length: { configurable: true } };

/**
 * Gets the current items length.
 */

prototypeAccessors$1.length.get = function () {
  return this.items.length
};

/**
 * Finds the first field that matches the provided matcher object.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); })
};

/**
 * Filters the items down to the matched fields.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); })
  }

  return this.items.filter(function (item) { return item.matches(matcher); })
};

/**
 * Maps the field items using the mapping function.
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper)
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);

  return item
};

/**
 * Adds a field item to the list.
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.')
  }

  if (!item.id) {
    throw createError('Field id must be defined.')
  }

  if (this.find({ id: item.id })) {
    throw createError(("Field with id " + (item.id) + " is already added."))
  }

  this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$1 );

// 

var LOCALE = 'en';

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

var prototypeAccessors$2 = { locale: { configurable: true } };

prototypeAccessors$2.locale.get = function () {
  return LOCALE
};

prototypeAccessors$2.locale.set = function (value) {
  LOCALE = value || 'en';
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !!this.container[locale]
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale] || !this.container[locale].dateFormat) {
    return null
  }

  return this.container[locale].dateFormat
};

Dictionary.prototype.getMessage = function getMessage (locale, key, data) {
  var message = null;
  if (!this.hasMessage(locale, key)) {
    message = this._getDefaultMessage(locale);
  } else {
    message = this.container[locale].messages[key];
  }

  return isCallable(message) ? message.apply(void 0, data) : message
};

/**
 * Gets a specific message for field. falls back to the rule message.
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
  if (!this.hasLocale(locale)) {
    return this.getMessage(locale, key, data)
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale, key, data)
  }

  var message = dict[key];
  return isCallable(message) ? message.apply(void 0, data) : message
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default
  }

  return this.container.en.messages._default
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (!this.hasAttribute(locale, key)) {
    return fallback
  }

  return this.container[locale].attributes[key]
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  )
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  )
};

Dictionary.prototype.merge = function merge$1 (dictionary) {
  merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {},
    };
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {},
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Object.defineProperties( Dictionary.prototype, prototypeAccessors$2 );

// 

var normalizeValue = function (value) {
  if (isObject(value)) {
    return Object.keys(value).reduce(function (prev, key) {
      prev[key] = normalizeValue(value[key]);

      return prev
    }, {})
  }

  if (isCallable(value)) {
    return value('{0}', ['{1}', '{2}', '{3}'])
  }

  return value
};

var normalizeFormat = function (locale) {
  // normalize messages
  var messages = normalizeValue(locale.messages);
  var custom = normalizeValue(locale.custom);

  return {
    messages: messages,
    custom: custom,
    attributes: locale.attributes,
    dateFormat: locale.dateFormat,
  }
};

var I18nDictionary = function I18nDictionary (i18n, rootKey) {
  this.i18n = i18n;
  this.rootKey = rootKey;
};

var prototypeAccessors$3 = { locale: { configurable: true } };

prototypeAccessors$3.locale.get = function () {
  return this.i18n.locale
};

prototypeAccessors$3.locale.set = function (value) {
  warn('Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead');
};

I18nDictionary.prototype.getDateFormat = function getDateFormat (locale) {
  return this.i18n.getDateTimeFormat(locale || this.locale)
};

I18nDictionary.prototype.setDateFormat = function setDateFormat (locale, value) {
  this.i18n.setDateTimeFormat(locale || this.locale, value);
};

I18nDictionary.prototype.getMessage = function getMessage (locale, key, data) {
  var path = (this.rootKey) + ".messages." + key;
  if (!this.i18n.te(path)) {
    return this.i18n.t(((this.rootKey) + ".messages._default"), locale, data)
  }

  return this.i18n.t(path, locale, data)
};

I18nDictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  var path = (this.rootKey) + ".attributes." + key;
  if (!this.i18n.te(path)) {
    return fallback
  }

  return this.i18n.t(path, locale)
};

I18nDictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
  var path = (this.rootKey) + ".custom." + field + "." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path)
  }

  return this.getMessage(locale, key, data)
};

I18nDictionary.prototype.merge = function merge$1 (dictionary) {
    var this$1 = this;

  Object.keys(dictionary).forEach(function (localeKey) {
      var obj;

    // i18n doesn't deep merge
    // first clone the existing locale (avoid mutations to locale)
    var clone = merge({}, getPath((localeKey + "." + (this$1.rootKey)), this$1.i18n.messages, {}));
    // Merge cloned locale with new one
    var locale = merge(clone, normalizeFormat(dictionary[localeKey]));
    this$1.i18n.mergeLocaleMessage(localeKey, ( obj = {}, obj[this$1.rootKey] = locale, obj));
    if (locale.dateFormat) {
      this$1.i18n.setDateTimeFormat(localeKey, locale.dateFormat);
    }
  });
};

I18nDictionary.prototype.setMessage = function setMessage (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      messages: ( obj = {}, obj[key] = value, obj),
    }, obj$1));
};

I18nDictionary.prototype.setAttribute = function setAttribute (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      attributes: ( obj = {}, obj[key] = value, obj),
    }, obj$1));
};

Object.defineProperties( I18nDictionary.prototype, prototypeAccessors$3 );

// 

var defaultConfig = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: null,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false,
  i18n: null,
  i18nRootKey: 'validation',
};

var currentConfig = assign({}, defaultConfig);
var dependencies = {
  dictionary: new Dictionary({
    en: {
      messages: {},
      attributes: {},
      custom: {},
    },
  }),
};

var Config = function Config () {};

var staticAccessors = { default: { configurable: true },current: { configurable: true } };

staticAccessors.default.get = function () {
  return defaultConfig
};

staticAccessors.current.get = function () {
  return currentConfig
};

Config.dependency = function dependency (key) {
  return dependencies[key]
};

/**
 * Merges the config with a new one.
 */
Config.merge = function merge$$1 (config) {
  currentConfig = assign({}, currentConfig, config);
  if (currentConfig.i18n) {
    Config.register('dictionary', new I18nDictionary(currentConfig.i18n, currentConfig.i18nRootKey));
  }
};

/**
 * Registers a dependency.
 */
Config.register = function register (key, value) {
  dependencies[key] = value;
};

/**
 * Resolves the working config from a Vue instance.
 */
Config.resolve = function resolve (context) {
  var selfConfig = getPath('$options.$_reeValidate', context, {});

  return assign({}, Config.current, selfConfig)
};

Object.defineProperties( Config, staticAccessors );

// 

var RULES = {};
var STRICT_MODE = true;
var TARGET_RULES = ['confirmed', 'after', 'before'];
var ERRORS = []; // HOLD errors references to trigger regeneration.

var Validator = function Validator (validations, options) {
  var this$1 = this;
  if ( options === void 0 ) options = { vm: null, fastExit: true };

  this.strict = STRICT_MODE;
  this.errors = new ErrorBag();

  // We are running in SSR Mode. Do not keep a reference. It prevent garbage collection.
  if (typeof window !== 'undefined') {
    ERRORS.push(this.errors);
  }
  this.fields = new FieldBag();
  this.flags = {};
  this._createFields(validations);
  this.paused = false;
  this.fastExit = options.fastExit || false;
  this.ownerId = options.vm && options.vm._uid;
  // create it statically since we don't need constant access to the vm.
  this.reset = options.vm && isCallable(options.vm.$nextTick) ? function (matcher) {
    return new Promise(function (resolve) {
      options.vm.$nextTick(function () {
        options.vm.$nextTick(function () {
          resolve(this$1._reset(matcher));
        });
      });
    })
  } : this._reset;
};

var prototypeAccessors$4 = { dictionary: { configurable: true },locale: { configurable: true },rules: { configurable: true } };
var staticAccessors$1 = { dictionary: { configurable: true },locale: { configurable: true },rules: { configurable: true } };

/**
 * Getter for the dictionary.
 */
prototypeAccessors$4.dictionary.get = function () {
  return Config.dependency('dictionary')
};

/**
 * Static Getter for the dictionary.
 */
staticAccessors$1.dictionary.get = function () {
  return Config.dependency('dictionary')
};

/**
 * Getter for the current locale.
 */
prototypeAccessors$4.locale.get = function () {
  return this.dictionary.locale
};

/**
 * Setter for the validator locale.
 */
prototypeAccessors$4.locale.set = function (value) {
  Validator.locale = value;
};

/**
 * Static getter for the validator locale.
 */
staticAccessors$1.locale.get = function () {
  return Validator.dictionary.locale
};

/**
 * Static setter for the validator locale.
 */
staticAccessors$1.locale.set = function (value) {
  var hasChanged = value !== Validator.dictionary.locale;
  Validator.dictionary.locale = value;
  if (hasChanged) {
    Validator.regenerate();
  }
};

/**
 * Getter for the rules object.
 */
prototypeAccessors$4.rules.get = function () {
  return RULES
};

/**
 * Static Getter for the rules object.
 */
staticAccessors$1.rules.get = function () {
  return RULES
};

/**
 * Static constructor.
 */
Validator.create = function create (validations, options) {
  return new Validator(validations, options)
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
  if (options && options.hasTarget) {
    TARGET_RULES.push(name);
  }
};

/**
 * Regenerates error messages across all validators.
 */
Validator.regenerate = function regenerate () {
  ERRORS.forEach(function (errorBag) { return errorBag.regenerate(); });
};

/**
 * Removes a rule from the list of validators.
 */
Validator.remove = function remove (name) {
  delete RULES[name];
  var idx = TARGET_RULES.indexOf(name);
  if (idx === -1) { return }

  TARGET_RULES.splice(idx, 1);
};

/**
 * Checks if the given rule name is a rule that targets other fields.
 */
Validator.isTargetRule = function isTargetRule (name) {
  return TARGET_RULES.indexOf(name) !== -1
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 */
Validator.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.prototype.localize = function localize (lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.localize = function localize (lang, dictionary) {
    var obj;

  if (isObject(lang)) {
    Validator.dictionary.merge(lang);
    return
  }

  // merge the dictionary.
  if (dictionary) {
    var locale = lang || dictionary.name;
    dictionary = assign({}, dictionary);
    Validator.dictionary.merge(( obj = {}, obj[locale] = dictionary, obj));
  }

  if (lang) {
    // set the locale.
    Validator.locale = lang;
  }
};

/**
 * Registers a field to be validated.
 */
Validator.prototype.attach = function attach (field) {
  // deprecate: handle old signature.
  if (arguments.length > 1) {
    warn('This signature of the attach method has been deprecated, please consult the docs.');
    field = assign({}, {
      name: arguments[0],
      rules: arguments[1],
    }, arguments[2] || { vm: { $validator: this } });
  }

  // fixes initial value detection with v-model and select elements.
  var value = field.initialValue;
  if (!(field instanceof Field)) {
    field = new Field(field.el || null, field);
  }

  this.fields.push(field);

  // validate the field initially
  if (field.initial) {
    this.validate(("#" + (field.id)), value || field.value);
  } else {
    this._validate(field, value || field.value, true).then(function (result) {
      field.flags.valid = result.valid;
      field.flags.invalid = !result.valid;
    });
  }

  this._addFlag(field, field.scope);
  return field
};

/**
 * Sets the flags on a field.
 */
Validator.prototype.flag = function flag (name, flags) {
  var field = this._resolveField(name);
  if (!field || !flags) {
    return
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 */
Validator.prototype.detach = function detach (name, scope) {
  var field = name instanceof Field ? name : this._resolveField(name, scope);
  if (!field) { return }

  field.destroy();
  this.errors.remove(field.name, field.scope, field.id);
  this.fields.remove(field);
  var flags = this.flags;
  if (!isNullOrUndefined(field.scope) && flags[("$" + (field.scope))]) {
    delete flags[("$" + (field.scope))][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete flags[field.name];
  }

  this.flags = assign({}, flags);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.prototype.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator.extend(name, validator, options);
};

/**
 * Updates a field, updating both errors and flags.
 */
Validator.prototype.update = function update (id, ref) {
    var scope = ref.scope;

  var field = this._resolveField(("#" + id));
  if (!field) { return }

  // remove old scope.
  this.errors.update(id, { scope: scope });
  if (!isNullOrUndefined(field.scope) && this.flags[("$" + (field.scope))]) {
    delete this.flags[("$" + (field.scope))][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete this.flags[field.name];
  }

  this._addFlag(field, scope);
};

/**
 * Removes a rule from the list of validators.
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Validates a value against a registered field validations.
 */
Validator.prototype.validate = function validate (name, value, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = null;

  if (this.paused) { return Promise.resolve(true) }

  // overload to validate all.
  if (arguments.length === 0) {
    return this.validateScopes()
  }

  // overload to validate scope-less fields.
  if (arguments.length === 1 && arguments[0] === '*') {
    return this.validateAll()
  }

  // overload to validate a scope.
  if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
    var matched = arguments[0].match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched)
  }

  var field = this._resolveField(name, scope);
  if (!field) {
    return this._handleFieldNotFound(name, scope)
  }

  field.flags.pending = true;
  if (arguments.length === 1) {
    value = field.value;
  }

  var silentRun = field.isDisabled;

  return this._validate(field, value, silentRun).then(function (result) {
    this$1.errors.remove(field.name, field.scope, field.id);
    if (silentRun) {
      return Promise.resolve(true)
    } else if (result.errors) {
      result.errors.forEach(function (e) { return this$1.errors.add(e); });
    }

    field.setFlags({
      pending: false,
      valid: result.valid,
      validated: true,
    });

    return result.valid
  })
};

/**
 * Pauses the validator.
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this
};

/**
 * Resumes the validator.
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this
};

/**
 * Validates each value against the corresponding field validations.
 */
Validator.prototype.validateAll = function validateAll (values) {
    var arguments$1 = arguments;
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true) }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, scope: arguments$1[1] || null }
    });
    providedValues = true;
  } else if (arguments.length === 0) {
    matcher = { scope: null }; // global scope.
  } else if (Array.isArray(values)) {
    matcher = values.map(function (key) {
      return { name: key, scope: arguments$1[1] || null }
    });
  }

  var promises = this.fields.filter(matcher).map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    providedValues ? values[field.name] : field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); })
};

/**
 * Validates all scopes.
 */
Validator.prototype.validateScopes = function validateScopes () {
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true) }

  var promises = this.fields.map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); })
};

/**
 * Perform cleanup.
 */
Validator.prototype.destroy = function destroy () {
  // Remove ErrorBag instance.
  var idx = ERRORS.indexOf(this.errors);
  if (idx === -1) { return }

  ERRORS.splice(idx, 1);
};

/**
 * Creates the fields to be validated.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (!validations) { return }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existence of a format, so date_format must be supplied.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || this.dictionary.getDateFormat(this.locale)
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule (rule) {
  return !!~['after', 'before', 'date_between', 'date_format'].indexOf(rule)
};

/**
 * Formats an error message for field and a rule.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
    if ( data === void 0 ) data = {};
    if ( targetName === void 0 ) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);

  return this.dictionary.getFieldMessage(this.locale, field.name, rule.name, [name, params, data])
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
    if ( targetName === void 0 ) targetName = null;

  if (~TARGET_RULES.indexOf(rule.name) && rule.params && rule.params[0]) {
    var localizedName = targetName || this.dictionary.getAttribute(this.locale, rule.params[0], rule.params[0]);
    return [localizedName].concat(rule.params.slice(1))
  }

  return rule.params
};

/**
 * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.alias || this.dictionary.getAttribute(this.locale, field.name, field.name)
};

/**
 * Adds a field flags to the flags collection.
 */
Validator.prototype._addFlag = function _addFlag (field, scope) {
    var obj, obj$1, obj$2;

    if ( scope === void 0 ) scope = null;
  if (isNullOrUndefined(scope)) {
    this.flags = assign({}, this.flags, ( obj = {}, obj[("" + (field.name))] = field.flags, obj));
    return
  }

  var scopeObj = assign({}, this.flags[("$" + scope)] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1));
  this.flags = assign({}, this.flags, ( obj$2 = {}, obj$2[("$" + scope)] = scopeObj, obj$2));
};

/**
 * Resets fields that matches the matcher options or all fields if not specified.
 */
Validator.prototype._reset = function _reset (matcher) {
    var this$1 = this;

  return new Promise(function (resolve) {
    if (matcher) {
      this$1.fields.filter(matcher).forEach(function (field) {
        field.reset(); // reset field flags.
        this$1.errors.remove(field.name, field.scope, field.id);
      });

      return resolve()
    }

    this$1.fields.items.forEach(function (i) { return i.reset(); });
    this$1.errors.clear();
    resolve();
  })
};

/**
 * Tests a single input value against a rule.
 */
Validator.prototype._test = function _test (field, value, rule) {
    var this$1 = this;

  var validator = RULES[rule.name];
  var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    throw createError(("No such validator '" + (rule.name) + "' exists."))
  }

  // has field dependencies.
  if (TARGET_RULES.indexOf(rule.name) !== -1) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      targetName = target.field.alias;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (this._isADateRule(rule.name)) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, params);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      return {
        valid: allValid,
        error: allValid ? undefined : this$1._createFieldError(field, rule, data, targetName),
      }
    })
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  return {
    valid: result.valid,
    error: result.valid ? undefined : this._createFieldError(field, rule, result.data, targetName),
  }
};

/**
 * Merges a validator object into the RULES and Messages.
 */
Validator._merge = function _merge (name, validator) {
  if (isCallable(validator)) {
    RULES[name] = validator;
    return
  }

  RULES[name] = validator.validate;
  if (validator.getMessage) {
    Validator.dictionary.setMessage(this.locale, name, validator.getMessage);
  }
};

/**
 * Guards from extension violations.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return
  }

  if (!isCallable(validator.validate)) {
    throw createError(
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    )
  }

  if (!isCallable(validator.getMessage) && typeof validator.getMessage !== 'string') {
    throw createError(
      ("Extension Error: The validator '" + name + "' object must have a 'getMessage' method or string.")
    )
  }
};

/**
 * Creates a Field Error Object.
 */
Validator.prototype._createFieldError = function _createFieldError (field, rule, data, targetName) {
    var this$1 = this;

  return {
    id: field.id,
    field: field.name,
    msg: this._formatErrorMessage(field, rule, data, targetName),
    rule: rule.name,
    scope: field.scope,
    regenerate: function () {
      return this$1._formatErrorMessage(field, rule, data, targetName)
    },
  }
};

/**
 * Tries different strategies to find a field.
 */
Validator.prototype._resolveField = function _resolveField (name, scope) {
  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name: name, scope: scope })
  }

  if (name[0] === '#') {
    return this.fields.find({ id: name.slice(1) })
  }

  if (name.indexOf('.') > -1) {
    var ref = name.split('.');
      var fieldScope = ref[0];
      var fieldName = ref.slice(1);
    var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope });
    if (field) {
      return field
    }
  }

  return this.fields.find({ name: name, scope: null })
};

/**
 * Handles when a field is not found depending on the strict flag.
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  if (!this.strict) { return Promise.resolve(true) }

  var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);
  throw createError(
    ("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.")
  )
};

/**
 * Starts the validation process.
 */
Validator.prototype._validate = function _validate (field, value, silent) {
    var this$1 = this;
    if ( silent === void 0 ) silent = false;

  if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
    return Promise.resolve({ valid: true })
  }

  var promises = [];
  var errors = [];
  var isExitEarly = false;
  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).some(function (rule) {
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule] });
    if (isCallable(result.then)) {
      promises.push(result);
    } else if (this$1.fastExit && !result.valid) {
      errors.push(result.error);
      isExitEarly = true;
    } else {
      // promisify the result.
      promises.push(new Promise(function (resolve) {
        resolve(result);
      }));
    }

    return isExitEarly
  });

  if (isExitEarly) {
    return Promise.resolve({
      valid: false,
      errors: errors,
    })
  }

  return Promise.all(promises).then(function (values) { return values.map(function (v) {
    if (!v.valid) {
      errors.push(v.error);
    }

    return v.valid
  }).every(function (t) { return t; }); }
  ).then(function (result) {
    return {
      valid: result,
      errors: errors,
    }
  })
};

Object.defineProperties( Validator.prototype, prototypeAccessors$4 );
Object.defineProperties( Validator, staticAccessors$1 );

// 

function use (plugin, options) {
  if ( options === void 0 ) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function')
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument is null, it is treated as an invalid date.
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = Number(dirtyAmount);
  return new Date(timestamp + amount)
}

function cloneObject (dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object
}

var MILLISECONDS_IN_MINUTE$2 = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = Number(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions)
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

function buildShortLongFormat (format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1)
  })
}

/**
 * @name buildFormatLongFn
 * @category Locale Helpers
 * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 *
 * @description
 * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 * Returns a function which takes one of the following tokens as the argument:
 * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
 * and returns a long format string written as `format` token strings.
 * See [format]{@link https://date-fns.org/docs/format}
 *
 * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
 * by shortening some of the tokens from corresponding unshortened formats
 * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
 *
 * @param {Object} obj - the object with long formats written as `format` token strings
 * @param {String} obj.LT - time format: hours and minutes
 * @param {String} obj.LTS - time format: hours, minutes and seconds
 * @param {String} obj.L - short date format: numeric day, month and year
 * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
 * @param {String} obj.LL - long date format: day, month in words, and year
 * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
 * @param {String} obj.LLL - long date and time format
 * @param {String} [obj.lll] - long date and time format (shortened)
 * @param {String} obj.LLLL - long date, time and weekday format
 * @param {String} [obj.llll] - long date, time and weekday format (shortened)
 * @returns {Function} `formatLong` property of the locale
 *
 * @example
 * // For `en-US` locale:
 * locale.formatLong = buildFormatLongFn({
 *   LT: 'h:mm aa',
 *   LTS: 'h:mm:ss aa',
 *   L: 'MM/DD/YYYY',
 *   LL: 'MMMM D YYYY',
 *   LLL: 'MMMM D YYYY h:mm aa',
 *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
 * })
 */
function buildFormatLongFn (obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  };

  return function (token) {
    return formatLongLocale[token]
  }
}

var formatLong = buildFormatLongFn({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

/**
 * @name buildLocalizeFn
 * @category Locale Helpers
 * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
 * used by `format` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
 * `localize.month` takes the month index (0 - January).
 * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @param {Function} [indexCallback] - the callback which takes the resulting function argument
 *   and converts it into value array index
 * @returns {Function} the resulting function
 *
 * @example
 * var timeOfDayValues = {
 *   uppercase: ['AM', 'PM'],
 *   lowercase: ['am', 'pm'],
 *   long: ['a.m.', 'p.m.']
 * }
 * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
 *   // 0 is a.m. array index, 1 is p.m. array index
 *   return (hours / 12) >= 1 ? 1 : 0
 * })
 * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
 * locale.localize.timeOfDay(5) //=> 'a.m.'
 */
function buildLocalizeFn (values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var valuesArray = values[type] || values[defaultType];
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
    return valuesArray[index]
  }
}

/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
 * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
function buildLocalizeArrayFn (values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    return values[type] || values[defaultType]
  }
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

/**
 * @name buildMatchFn
 * @category Locale Helpers
 * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 * The result of the match function will be passed into corresponding parser function
 * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
 *
 * @param {Object} values - the object with RegExps
 * @param {String} defaultType - the default type for the match function
 * @returns {Function} the resulting function
 *
 * @example
 * var matchWeekdaysPatterns = {
 *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
 *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
 *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
 * }
 * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
 * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
 * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
 */
function buildMatchFn (patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var pattern = patterns[type] || patterns[defaultType];
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name buildParseFn
 * @category Locale Helpers
 * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
 * The argument of the resulting function is the result of the corresponding match function
 * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
 *
 * @param {Object} values - the object with arrays of RegExps
 * @param {String} defaultType - the default type for the parser function
 * @returns {Function} the resulting function
 *
 * @example
 * var parseWeekdayPatterns = {
 *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
 * }
 * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
 * var matchResult = locale.match.weekdays('Friday')
 * locale.match.weekday(matchResult) //=> 5
 */
function buildParseFn (patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var patternsArray = patterns[type] || patterns[defaultType];
    var string = matchResult[1];

    return patternsArray.findIndex(function (pattern) {
      return pattern.test(string)
    })
  }
}

/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn (pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name parseDecimal
 * @category Locale Helpers
 * @summary Parses the match result into decimal number.
 *
 * @description
 * Parses the match result into decimal number.
 * Uses the string matched with the first set of parentheses of match RegExp.
 *
 * @param {Array} matchResult - the object returned by matching function
 * @returns {Number} the parsed value
 *
 * @example
 * locale.match = {
 *   ordinalNumbers: (dirtyString) {
 *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
 *   },
 *   ordinalNumber: parseDecimal
 * }
 */
function parseDecimal (matchResult) {
  return parseInt(matchResult[1], 10)
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
};

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 */
var locale$1 = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY$1 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$2 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getUTCMonth() + 1
  },

  // Month: 1st, 2nd, ..., 12th
  'Mo': function (date, options) {
    var month = date.getUTCMonth() + 1;
    return options.locale.localize.ordinalNumber(month, {unit: 'month'})
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getUTCMonth() + 1, 2)
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'short'})
  },

  // Month: January, February, ..., December
  'MMMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'long'})
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getUTCMonth() + 1) / 3)
  },

  // Quarter: 1st, 2nd, 3rd, 4th
  'Qo': function (date, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    return options.locale.localize.ordinalNumber(quarter, {unit: 'quarter'})
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getUTCDate()
  },

  // Day of month: 1st, 2nd, ..., 31st
  'Do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDate(), {unit: 'dayOfMonth'})
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getUTCDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getUTCDayOfYear(date)
  },

  // Day of year: 1st, 2nd, ..., 366th
  'DDDo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), {unit: 'dayOfYear'})
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getUTCDayOfYear(date), 3)
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'narrow'})
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'short'})
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'long'})
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getUTCDay()
  },

  // Day of week: 0th, 1st, 2nd, ..., 6th
  'do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDay(), {unit: 'dayOfWeek'})
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getUTCDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getUTCISOWeek(date)
  },

  // ISO week: 1st, 2nd, ..., 53th
  'Wo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCISOWeek(date), {unit: 'isoWeek'})
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getUTCISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getUTCISOWeekYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getUTCISOWeekYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getUTCHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getUTCHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getUTCMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getUTCMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getUTCSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getUTCSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getUTCMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getUTCMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date, options) {
    var originalDate = options._originalDate || date;
    return Math.floor(originalDate.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date, options) {
    var originalDate = options._originalDate || date;
    return originalDate.getTime()
  },

  // AM, PM
  'A': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'uppercase'})
  },

  // am, pm
  'a': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'lowercase'})
  },

  // a.m., p.m.
  'aa': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'long'})
  }
};

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 * | Long format             | LT    | 05:30 a.m.                       |
 * |                         | LTS   | 05:30:15 a.m.                    |
 * |                         | L     | 07/02/1995                       |
 * |                         | l     | 7/2/1995                         |
 * |                         | LL    | July 2 1995                      |
 * |                         | ll    | Jul 2 1995                       |
 * |                         | LLL   | July 2 1995 05:30 a.m.           |
 * |                         | lll   | Jul 2 1995 05:30 a.m.            |
 * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
 * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var localeFormatters = locale.formatters || {};
  var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
  var formatLong = locale.formatLong;

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset();
  var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);

  var formatterOptions = cloneObject(options);
  formatterOptions.locale = locale;
  formatterOptions.formatters = formatters;

  // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
  // Right now, please don't use it in locales. If you have to use an original date,
  // please restore it from `date`, adding a timezone offset to it.
  formatterOptions._originalDate = originalDate;

  var result = formatStr
    .replace(longFormattingTokensRegExp, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString(substring)
      }

      return formatLong(substring)
    })
    .replace(formattingTokensRegExp, function (substring) {
      var formatter = localeFormatters[substring] || formatters[substring];

      if (formatter) {
        return formatter(utcDate, formatterOptions)
      } else {
        return cleanEscapedString(substring)
      }
    });

  return result
}

function cleanEscapedString (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = Number(dirtyAmount);
  return addMinutes(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1 (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

var patterns$1 = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
};

function parseDecimal$1 (matchResult) {
  return parseInt(matchResult[1], 10)
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) + 1900
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'quarter'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'quarter'})
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns$1.M,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'month'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'month'}) - 1
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.month(matchResult, {type: 'short'})
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'long'}) ||
        options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns$1.W,
    parse: parseDecimal$1
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'isoWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'isoWeek'})
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfWeek'})
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.weekday(matchResult, {type: 'narrow'})
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
      }

      return parseResult
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'long'}) ||
        options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
        }
      }

      return parseResult
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns$1.D,
    parse: parseDecimal$1
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfMonth'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfMonth'})
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns$1.DDD,
    parse: parseDecimal$1
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfYear'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfYear'})
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, {type: 'short'})
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'long'}) ||
        options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns$1.H,
    parse: parseDecimal$1
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns$1.M,
    parse: parseDecimal$1
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 100
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 10
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns$1.Z,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns$1.ZZ,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 1000
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: parseDecimal$1
  }
};

parsers['a'] = parsers['A'];

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = Number(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  var day = Number(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_DAY$3 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear (dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

var MILLISECONDS_IN_MINUTE$6 = 60000;

function setTimeOfDay (hours, timeOfDay) {
  var isAM = timeOfDay === 0;

  if (isAM) {
    if (hours === 12) {
      return 0
    }
  } else {
    if (hours !== 12) {
      return 12 + hours
    }
  }

  return hours
}

var units = {
  twoDigitYear: {
    priority: 10,
    set: function (dateValues, value) {
      var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
      var year = century * 100 + value;
      dateValues.date.setUTCFullYear(year, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  year: {
    priority: 10,
    set: function (dateValues, value) {
      dateValues.date.setUTCFullYear(value, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoYear: {
    priority: 10,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
      return dateValues
    }
  },

  quarter: {
    priority: 20,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth((value - 1) * 3, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  month: {
    priority: 30,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(value, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoWeek: {
    priority: 40,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
      return dateValues
    }
  },

  dayOfWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCDay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfISOWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCISODay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfMonth: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCDate(value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfYear: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(0, value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDay: {
    priority: 60,
    set: function (dateValues, value, options) {
      dateValues.timeOfDay = value;
      return dateValues
    }
  },

  hours: {
    priority: 70,
    set: function (dateValues, value, options) {
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDayHours: {
    priority: 70,
    set: function (dateValues, value, options) {
      var timeOfDay = dateValues.timeOfDay;
      if (timeOfDay != null) {
        value = setTimeOfDay(value, timeOfDay);
      }
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  minutes: {
    priority: 80,
    set: function (dateValues, value) {
      dateValues.date.setUTCMinutes(value, 0, 0);
      return dateValues
    }
  },

  seconds: {
    priority: 90,
    set: function (dateValues, value) {
      dateValues.date.setUTCSeconds(value, 0);
      return dateValues
    }
  },

  milliseconds: {
    priority: 100,
    set: function (dateValues, value) {
      dateValues.date.setUTCMilliseconds(value);
      return dateValues
    }
  },

  timezone: {
    priority: 110,
    set: function (dateValues, value) {
      dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$6);
      return dateValues
    }
  },

  timestamp: {
    priority: 120,
    set: function (dateValues, value) {
      dateValues.date = new Date(value);
      return dateValues
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$7 = 60000;

var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Time of day             | 60       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Hour                    | 70       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 90       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 120      | X     | 512969520                        |
 * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
 * | Token | Input examples                 |
 * |-------|--------------------------------|
 * | LT    | 05:30 a.m.                     |
 * | LTS   | 05:30:15 a.m.                  |
 * | L     | 07/02/1995                     |
 * | l     | 7/2/1995                       |
 * | LL    | July 2 1995                    |
 * | ll    | Jul 2 1995                     |
 * | LLL   | July 2 1995 05:30 a.m.         |
 * | lll   | Jul 2 1995 05:30 a.m.          |
 * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
 * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * import eoLocale from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse (dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present')
  }

  var dateString = String(dirtyDateString);
  var options = dirtyOptions || {};

  var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var locale = options.locale || locale$1;
  var localeParsers = locale.parsers || {};
  var localeUnits = locale.units || {};

  if (!locale.match) {
    throw new RangeError('locale must contain match property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var formatString = String(dirtyFormatString)
    .replace(longFormattingTokensRegExp$1, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString$1(substring)
      }

      return locale.formatLong(substring)
    });

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = cloneObject(options);
  subFnOptions.locale = locale;

  var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
  var tokensLength = tokens.length;

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i];
    var parser = localeParsers[token] || parsers[token];
    if (parser) {
      var matchResult;

      if (parser.match instanceof RegExp) {
        matchResult = parser.match.exec(dateString);
      } else {
        matchResult = parser.match(dateString, subFnOptions);
      }

      if (!matchResult) {
        return new Date(NaN)
      }

      var unitName = parser.unit;
      var unit = localeUnits[unitName] || units[unitName];

      setters.push({
        priority: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult, subFnOptions),
        index: setters.length
      });

      var substring = matchResult[0];
      dateString = dateString.slice(substring.length);
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  var uniquePrioritySetters = setters
    .map(function (setter) {
      return setter.priority
    })
    .sort(function (a, b) {
      return a - b
    })
    .filter(function (priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function (priority) {
      return setters
        .filter(function (setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function (setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMinutes(date, date.getTimezoneOffset());

  var dateValues = {date: utcDate};

  var settersLength = uniquePrioritySetters.length;
  for (i = 0; i < settersLength; i++) {
    var setter = uniquePrioritySetters[i];
    dateValues = setter.set(dateValues, setter.value, subFnOptions);
  }

  return dateValues.date
}

function dateToSystemTimezone (dateValues) {
  var date = dateValues.date;
  var time = date.getTime();

  // Get the system timezone offset at (moment of time - offset)
  var offset = date.getTimezoneOffset();

  // Get the system timezone offset at the exact moment of time
  offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$7).getTimezoneOffset();

  // Convert date in timezone "UTC+00:00" to the system timezone
  dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$7);

  return dateValues
}

function cleanEscapedString$1 (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

// 

/**
 * Custom parse behavior on top of date-fns parse function.
 */
function parseDate$1 (date, format$$1) {
  if (typeof date !== 'string') {
    return isValid(date) ? date : null
  }

  var parsed = parse(date, format$$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$$1) !== date) {
    return null
  }

  return parsed
}

function after (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false
  }

  return isAfter(value, otherValue) || (inclusion && isEqual$1(value, otherValue))
}

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); })
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); })
  }

  return (alpha[locale] || alpha.en).test(value)
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); })
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); })
  }

  return (alphaDash[locale] || alphaDash.en).test(value)
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); })
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); })
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value)
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); })
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); })
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value)
};

function before (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false
  }

  return isBefore(value, otherValue) || (inclusion && isEqual$1(value, otherValue))
}

var validate$4 = function (value, ref) {
  var min = ref[0];
  var max = ref[1];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$4(val, [min, max]); })
  }

  return Number(min) <= value && Number(max) >= value
};

function confirmed (value, other) { return String(value) === String(other); }

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

function credit_card (value) { return isCreditCard(String(value)); }

var validate$5 = function (value, params) {
  var decimals = Array.isArray(params) ? (params[0] || '*') : '*';
  var separator = Array.isArray(params) ? (params[1] || '.') : '.';
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, params); })
  }

  if (value === null || value === undefined || value === '') {
    return true
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value)
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$"));

  if (! regex.test(value)) {
    return false
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
    return parsedValue === parsedValue;
};

function date_between (value, params) {
  var assign, assign$1;

  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    (assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3]);
  } else {
    (assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2]);
  }

  var minDate = parseDate$1(min, format);
  var maxDate = parseDate$1(max, format);
  var dateVal = parseDate$1(value, format);

  if (!minDate || !maxDate || !dateVal) {
    return false
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate)
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate))
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate))
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) ||
        (isBefore(dateVal, maxDate) && isAfter(dateVal, minDate))
}

function date_format (value, ref) {
  var format = ref[0];

  return !!parseDate$1(value, format)
}

var validate$6 = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$6(val, [length]); })
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length)
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height),
    }); };

    image.src = URL.createObjectURL(file);
  })
};

function dimensions (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) { return validateImage(file, width, height); }))
}

var merge_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
});

unwrapExports(isByteLength_1);

var isFQDN_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

unwrapExports(isFQDN_1);

var isEmail_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);



var _isByteLength2 = _interopRequireDefault(isByteLength_1);



var _isFQDN2 = _interopRequireDefault(isFQDN_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var validate$7 = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val)); })
  }

  return isEmail(String(value))
};

function ext (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');

  return files.every(function (file) { return regex.test(file.name); })
}

function image (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }
); }

var validate$8 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$8(val, options); })
  }

  // eslint-disable-next-line
  return !! options.filter(function (option) { return option == value; }).length;
};

var isIP_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

function ip (value, ref) {
  if ( ref === void 0 ) ref = [4];
  var version = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, [version]); })
  }

  return isIP(value, version)
}

/**
 * @param {Array|String} value
 * @param {Number} length
 * @param {Number} max
 */
var compare = function (value, length, max) {
  if (max === undefined) {
    return value.length === length
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max
};

function length (value, ref) {
  var length = ref[0];
  var max = ref[1]; if ( max === void 0 ) max = undefined;

  length = Number(length);
  if (value === undefined || value === null) {
    return false
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max)
}

function integer (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); })
  }

  return /^-?[0-9]+$/.test(String(value))
}

function max$1 (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0
  }

  return String(value).length <= length
}

function max_value (value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false
  }

  return Number(value) <= max
}

function mimes (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');

  return files.every(function (file) { return regex.test(file.type); })
}

function min$1 (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false
  }
  return String(value).length >= length
}

function min_value (value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false
  }

  return Number(value) >= min
}

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$9(val, options); })
  }

  // eslint-disable-next-line
  return ! options.filter(function (option) { return option == value; }).length;
};

function numeric (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^[0-9]+$/.test(String(val)); })
  }

  return /^[0-9]+$/.test(String(value))
}

function regex (value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value)
  }

  return new RegExp(regex, flags).test(String(value))
}

function required (value, params) {
  if ( params === void 0 ) params = [false];

  if (Array.isArray(value)) {
    return !! value.length
  }

  // incase a field considers `false` as an empty value like checkboxes.
  var invalidateFalse = params[0];
  if (value === false && invalidateFalse) {
    return false
  }

  if (value === undefined || value === null) {
    return false
  }

  return !! String(value).trim().length
}

function size (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false
    }
  }

  return true
}

var isURL_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;



var _assertString2 = _interopRequireDefault(assertString_1);



var _isFQDN2 = _interopRequireDefault(isFQDN_1);



var _isIP2 = _interopRequireDefault(isIP_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

function url (value, ref) {
  if ( ref === void 0 ) ref = [true];
  var requireProtocol = ref[0];

  var options = { require_protocol: !!requireProtocol, allow_underscores: true };
  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, options); })
  }

  return isURL(value, options)
}

/* eslint-disable camelcase */
var Rules = {
  after: after,
  alpha_dash: validate$1,
  alpha_num: validate$2,
  alpha_spaces: validate$3,
  alpha: validate,
  before: before,
  between: validate$4,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: validate$5,
  digits: validate$6,
  dimensions: dimensions,
  email: validate$7,
  ext: ext,
  image: image,
  in: validate$8,
  integer: integer,
  length: length,
  ip: ip,
  max: max$1,
  max_value: max_value,
  mimes: mimes,
  min: min$1,
  min_value: min_value,
  not_in: validate$9,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url,
}

// 

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev
    }, {})
  }

  return fields
};

// Combines two flags using either AND or OR depending on the flag type.
var combine = function (lhs, rhs) {
  var mapper = {
    pristine: function (lhs, rhs) { return lhs && rhs; },
    dirty: function (lhs, rhs) { return lhs || rhs; },
    touched: function (lhs, rhs) { return lhs || rhs; },
    untouched: function (lhs, rhs) { return lhs && rhs; },
    valid: function (lhs, rhs) { return lhs && rhs; },
    invalid: function (lhs, rhs) { return lhs || rhs; },
    pending: function (lhs, rhs) { return lhs || rhs; },
    required: function (lhs, rhs) { return lhs || rhs; },
    validated: function (lhs, rhs) { return lhs && rhs; },
  };

  return Object.keys(mapper).reduce(function (flags, flag) {
    flags[flag] = mapper[flag](lhs[flag], rhs[flag]);

    return flags
  }, {})
};

var mapScope = function (scope, deep) {
  if ( deep === void 0 ) deep = true;

  return Object.keys(scope).reduce(function (flags, field) {
    if (!flags) {
      flags = assign({}, scope[field]);
      return flags
    }

    // scope.
    var isScope = field.indexOf('$') === 0;
    if (deep && isScope) {
      return combine(mapScope(scope[field]), flags)
    } else if (!deep && isScope) {
      return flags
    }

    flags = combine(flags, scope[field]);

    return flags
  }, null)
};

/**
 * Maps fields to computed functions.
 */
var mapFields = function (fields) {
  if (!fields) {
    return function () {
      return mapScope(this.$validator.flags)
    }
  }

  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      // if field exists
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field]
      }

      // scopeless fields were selected.
      if (normalized[curr] === '*') {
        return mapScope(this.$validator.flags, false)
      }

      // if it has a scope defined
      var index = field.indexOf('.');
      if (index <= 0) {
        return {}
      }

      var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);

      scope = this.$validator.flags[("$" + scope)];
      name = name.join('.');

      // an entire scope was selected: scope.*
      if (name === '*' && scope) {
        return mapScope(scope)
      }

      if (scope && scope[name]) {
        return scope[name]
      }

      return {}
    };

    return prev
  }, {})
};

var version = '2.0.3';

var rulesPlugin = function (ref) {
  var Validator$$1 = ref.Validator;

  Object.keys(Rules).forEach(function (rule) {
    Validator$$1.extend(rule, Rules[rule]);
  });

  // Merge the english messages.
  Validator$$1.localize('en', locale);
};

use(rulesPlugin);

/* harmony default export */ __webpack_exports__["default"] = (Validator);



/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(34);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRouterDom = __webpack_require__(6);

var _service = __webpack_require__(36);

var _reeValidate = __webpack_require__(344);

var _reeValidate2 = _interopRequireDefault(_reeValidate);

var _Form = __webpack_require__(489);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import libs


// import components


// initialize component
var Page = function (_Component) {
  _inherits(Page, _Component);

  // set name of the component
  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.validator = new _reeValidate2.default({
      email: 'required|email',
      password: 'required|min:6'
    });

    // set the state of the app
    _this.state = {
      credentials: {
        email: '',
        password: '',
        remember: false
      },
      errors: _this.validator.errors

      // bind component with event handlers
    };_this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  // after mounting the component add a style to the body


  // validate props


  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)('body').attr('style', 'background-color: #eee');
    }

    // remove body style before component leaves dom

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)('body').removeAttr('style');
    }

    // event to handle input change

  }, {
    key: 'handleChange',
    value: function handleChange(name, value) {
      var _this2 = this;

      var errors = this.validator.errors;


      this.setState({ credentials: _extends({}, this.state.credentials, _defineProperty({}, name, value)) });

      errors.remove(name);

      this.validator.validate(name, value).then(function () {
        _this2.setState({ errors: errors });
      });
    }

    // event to handle form submit

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var credentials = this.state.credentials;
      var errors = this.validator.errors;


      this.validator.validateAll(credentials).then(function (success) {
        if (success) {
          _this3.submit(credentials);
        } else {
          _this3.setState({ errors: errors });
        }
      });
    }
  }, {
    key: 'submit',
    value: function submit(credentials) {
      var _this4 = this;

      this.props.dispatch((0, _service.login)(credentials)).catch(function (_ref) {
        var error = _ref.error,
            statusCode = _ref.statusCode;
        var errors = _this4.validator.errors;


        if (statusCode === 422) {
          _lodash2.default.forOwn(error, function (message, field) {
            errors.add(field, message);
          });
        } else if (statusCode === 401) {
          errors.add('password', error);
        }

        _this4.setState({ errors: errors });
      });
    }

    // render component

  }, {
    key: 'render',
    value: function render() {

      // check if user is authenticated then redirect him to home page
      if (this.props.isAuthenticated) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      var props = {
        email: this.state.credentials.email,
        password: this.state.credentials.password,
        remember: this.state.credentials.remember,
        errors: this.state.errors,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      };

      return _react2.default.createElement(
        'div',
        { className: 'container py-5' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'mx-auto' },
                _react2.default.createElement('span', { className: 'anchor' }),
                _react2.default.createElement(
                  'div',
                  { className: 'card has-shadow' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(_Form2.default, props)
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.displayName = 'LoginPage';
Page.propTypes = {
  isAuthenticated: _propTypes2.default.bool.isRequired,
  dispatch: _propTypes2.default.func.isRequired
};
exports.default = Page;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var displayName = 'LoginForm';
var propTypes = {
  email: _propTypes2.default.string,
  password: _propTypes2.default.string,
  remember: _propTypes2.default.bool,
  errors: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  handleChange: _propTypes2.default.func.isRequired
};

var Form = function Form(_ref) {
  var email = _ref.email,
      password = _ref.password,
      remember = _ref.remember,
      errors = _ref.errors,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;
  return _react2.default.createElement(
    'form',
    { className: 'form', role: 'form', onSubmit: handleSubmit, noValidate: true },
    _react2.default.createElement(
      'h2',
      { className: 'card-title' },
      'Please sign in'
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'label',
        { htmlFor: 'email', className: 'sr-only' },
        'Email'
      ),
      _react2.default.createElement('input', { type: 'text',
        className: 'form-control form-control-lg rounded-0 ' + (errors.has('email') && 'is-invalid'),
        name: 'email',
        id: 'email',
        placeholder: 'Email address',
        value: email || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true,
        autoFocus: true }),
      errors.has('email') && _react2.default.createElement(
        'div',
        { className: 'invalid-feedback' },
        errors.first('email')
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
        'label',
        { htmlFor: 'password', className: 'sr-only' },
        'Password'
      ),
      _react2.default.createElement('input', { type: 'password',
        className: 'form-control form-control-lg rounded-0 ' + (errors.has('password') && 'is-invalid'),
        id: 'password',
        name: 'password',
        placeholder: 'Password',
        value: password || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true }),
      errors.has('password') && _react2.default.createElement(
        'div',
        { className: 'invalid-feedback' },
        errors.first('password')
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'custom-control custom-checkbox' },
        _react2.default.createElement('input', { type: 'checkbox',
          name: 'remember',
          className: 'custom-control-input',
          onChange: function onChange(e) {
            return handleChange(e.target.name, !remember);
          } }),
        _react2.default.createElement('span', { className: 'custom-control-indicator' }),
        _react2.default.createElement(
          'span',
          { className: 'custom-control-description small' },
          'Remember me on this computer'
        )
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn btn-lg btn-primary btn-block',
        type: 'submit',
        disabled: errors.any() },
      'Sign In'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Not a member? ',
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/register' },
        'Signup here'
      )
    )
  );
};

Form.displayName = displayName;
Form.propTypes = propTypes;

exports.default = Form;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVlLXZhbGlkYXRlL2Rpc3QvcmVlLXZhbGlkYXRlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9QYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2NvbXBvbmVudHMvRm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzdGF0ZSIsImF1dGgiLCJQYWdlIiwicHJvcHMiLCJ2YWxpZGF0b3IiLCJSZWVWYWxpZGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVkZW50aWFscyIsInJlbWVtYmVyIiwiZXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImF0dHIiLCJyZW1vdmVBdHRyIiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW1vdmUiLCJ2YWxpZGF0ZSIsInRoZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUFsbCIsInN1Y2Nlc3MiLCJzdWJtaXQiLCJkaXNwYXRjaCIsImNhdGNoIiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwiXyIsImZvck93biIsIm1lc3NhZ2UiLCJmaWVsZCIsImFkZCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwic3RyaW5nIiwib2JqZWN0IiwiRm9ybSIsImhhcyIsInRhcmdldCIsImZpcnN0IiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7Ozs7O0FBSkE7QUFNQSxJQUFNQSxrQkFBa0IsU0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixVQUFVLHFCQUFxQjs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0EsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsdUNBQXVDO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsUUFBUSxvREFBb0Q7QUFDdkUsV0FBVyxNQUFNLGlFQUFpRTtBQUNsRixXQUFXLE9BQU8sa0VBQWtFO0FBQ3BGLFdBQVcsY0FBYztBQUN6QixhQUFhLEtBQUs7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQ0FBZ0MsRUFBRTtBQUN6RTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELCtCQUErQixFQUFFO0FBQ3BGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGtDQUFrQyxFQUFFO0FBQzNFOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsbUNBQW1DLEVBQUU7QUFDNUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsa0NBQWtDLEVBQUU7QUFDM0U7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxzQ0FBc0MsRUFBRTtBQUNsRzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxrQ0FBa0MsRUFBRTtBQUMzRTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELHFDQUFxQyxFQUFFO0FBQ2hHOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLG9DQUFvQyxFQUFFO0FBQzdFOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLHdDQUF3Qzs7QUFFM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7OztBQUlBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLDZCQUE2QixHQUFHLFNBQVMsRUFBRSxlQUFlLEdBQUcsb0NBQW9DLEVBQUUsd0JBQXdCLEdBQUcsMkJBQTJCLEdBQUcsWUFBWSxHQUFHLDRCQUE0QixHQUFHLG1CQUFtQixFQUFFLElBQUksR0FBRyxTQUFTLEdBQUc7QUFDbFA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsOEJBQThCLG9DQUFvQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0NBQWdDLEVBQUU7QUFDekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxtQkFBbUI7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxrQ0FBa0MsRUFBRTtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCLGVBQWUsRUFBRTtBQUNuRSxnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQywyQ0FBMkMsRUFBRTtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7Ozs7QUFJQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7QUFJQTs7OztBQUlBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxHQUFHLGFBQWEsR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7QUFJQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsR0FBRyx5RUFBeUUsR0FBRztBQUNoSSxtREFBbUQsR0FBRztBQUN0RDtBQUNBLHVEQUF1RCxHQUFHO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsVUFBVSwyQ0FBMkMsV0FBVztBQUMxRztBQUNBOztBQUVBLHNDQUFzQyxtQ0FBbUM7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLDZCQUE2QixFQUFFO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsOEJBQThCLEVBQUU7QUFDdEU7O0FBRUEsd0JBQXdCLHFDQUFxQyx5REFBeUQ7QUFDdEgsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsdUNBQXVDLGlDQUFpQyxFQUFFO0FBQzFFOztBQUVBO0FBQ0EsOENBQThDLHdCQUF3QixFQUFFO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7OztBQUlBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixzQkFBc0IsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSTtBQUMzRCwyQkFBMkIsSUFBSTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsNkJBQTZCLEVBQUU7QUFDdEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLHVDQUF1QyxFQUFFO0FBQ2hGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLDhCQUE4QixFQUFFO0FBQ3RFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsaUNBQWlDLEVBQUU7QUFDMUU7O0FBRUE7QUFDQSw2Q0FBNkMsd0JBQXdCLEVBQUU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxxQ0FBcUMsRUFBRTtBQUM5RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBLHVDQUF1Qyw0QkFBNEIsRUFBRTtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CLEVBQUU7QUFDeEQsZ0NBQWdDLG1CQUFtQixFQUFFO0FBQ3JELGtDQUFrQyxtQkFBbUIsRUFBRTtBQUN2RCxvQ0FBb0MsbUJBQW1CLEVBQUU7QUFDekQsZ0NBQWdDLG1CQUFtQixFQUFFO0FBQ3JELGtDQUFrQyxtQkFBbUIsRUFBRTtBQUN2RCxrQ0FBa0MsbUJBQW1CLEVBQUU7QUFDdkQsbUNBQW1DLG1CQUFtQixFQUFFO0FBQ3hELG9DQUFvQyxtQkFBbUIsRUFBRTtBQUN6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2x2TVI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7K2VBVkE7OztBQVNBOzs7QUFHQTtJQUNNQSxJOzs7QUFDSjtBQVNBLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBZ0I7QUFDL0JDLGFBQU8sZ0JBRHdCO0FBRS9CQyxnQkFBVTtBQUZxQixLQUFoQixDQUFqQjs7QUFLQTtBQUNBLFVBQUtQLEtBQUwsR0FBYTtBQUNYUSxtQkFBYTtBQUNYRixlQUFPLEVBREk7QUFFWEMsa0JBQVUsRUFGQztBQUdYRSxrQkFBVTtBQUhDLE9BREY7QUFNWEMsY0FBUSxNQUFLTixTQUFMLENBQWVNOztBQUd6QjtBQVRhLEtBQWIsQ0FVQSxNQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQXBCaUI7QUFxQmxCOztBQUVEOzs7QUE3QkE7Ozs7O3dDQThCb0I7QUFDbEIsNEJBQUUsTUFBRixFQUFVRSxJQUFWLENBQWUsT0FBZixFQUF3Qix3QkFBeEI7QUFDRDs7QUFFRDs7OzsyQ0FDdUI7QUFDckIsNEJBQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCLE9BQXJCO0FBQ0Q7O0FBRUQ7Ozs7aUNBQ2FDLEksRUFBTUMsSyxFQUFPO0FBQUE7O0FBQUEsVUFDaEJQLE1BRGdCLEdBQ0wsS0FBS04sU0FEQSxDQUNoQk0sTUFEZ0I7OztBQUd4QixXQUFLUSxRQUFMLENBQWMsRUFBRVYsMEJBQWtCLEtBQUtSLEtBQUwsQ0FBV1EsV0FBN0Isc0JBQTJDUSxJQUEzQyxFQUFrREMsS0FBbEQsRUFBRixFQUFkOztBQUVBUCxhQUFPUyxNQUFQLENBQWNILElBQWQ7O0FBRUEsV0FBS1osU0FBTCxDQUFlZ0IsUUFBZixDQUF3QkosSUFBeEIsRUFBOEJDLEtBQTlCLEVBQ0dJLElBREgsQ0FDUSxZQUFNO0FBQ1YsZUFBS0gsUUFBTCxDQUFjLEVBQUVSLGNBQUYsRUFBZDtBQUNELE9BSEg7QUFJRDs7QUFFRDs7OztpQ0FDYVksQyxFQUFHO0FBQUE7O0FBQ2RBLFFBQUVDLGNBQUY7QUFEYyxVQUVOZixXQUZNLEdBRVUsS0FBS1IsS0FGZixDQUVOUSxXQUZNO0FBQUEsVUFHTkUsTUFITSxHQUdLLEtBQUtOLFNBSFYsQ0FHTk0sTUFITTs7O0FBS2QsV0FBS04sU0FBTCxDQUFlb0IsV0FBZixDQUEyQmhCLFdBQTNCLEVBQ0dhLElBREgsQ0FDUSxVQUFDSSxPQUFELEVBQWE7QUFDakIsWUFBSUEsT0FBSixFQUFhO0FBQ1gsaUJBQUtDLE1BQUwsQ0FBWWxCLFdBQVo7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBS1UsUUFBTCxDQUFjLEVBQUVSLGNBQUYsRUFBZDtBQUNEO0FBQ0YsT0FQSDtBQVFEOzs7MkJBRU1GLFcsRUFBYTtBQUFBOztBQUNsQixXQUFLTCxLQUFMLENBQVd3QixRQUFYLENBQW9CLG9CQUFNbkIsV0FBTixDQUFwQixFQUNHb0IsS0FESCxDQUNTLGdCQUEyQjtBQUFBLFlBQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxZQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQUEsWUFDeEJwQixNQUR3QixHQUNiLE9BQUtOLFNBRFEsQ0FDeEJNLE1BRHdCOzs7QUFHaEMsWUFBSW9CLGVBQWUsR0FBbkIsRUFBd0I7QUFDdEJDLDJCQUFFQyxNQUFGLENBQVNILEtBQVQsRUFBZ0IsVUFBQ0ksT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ2xDeEIsbUJBQU95QixHQUFQLENBQVdELEtBQVgsRUFBa0JELE9BQWxCO0FBQ0QsV0FGRDtBQUdELFNBSkQsTUFJTyxJQUFJSCxlQUFlLEdBQW5CLEVBQXdCO0FBQzdCcEIsaUJBQU95QixHQUFQLENBQVcsVUFBWCxFQUF1Qk4sS0FBdkI7QUFDRDs7QUFFRCxlQUFLWCxRQUFMLENBQWMsRUFBRVIsY0FBRixFQUFkO0FBQ0QsT0FiSDtBQWNEOztBQUVEOzs7OzZCQUNTOztBQUVQO0FBQ0EsVUFBSSxLQUFLUCxLQUFMLENBQVdKLGVBQWYsRUFBZ0M7QUFDOUIsZUFBTyw4QkFBQyx3QkFBRCxJQUFVLElBQUcsR0FBYixHQUFQO0FBQ0Q7QUFDRCxVQUFNSSxRQUFRO0FBQ1pHLGVBQU8sS0FBS04sS0FBTCxDQUFXUSxXQUFYLENBQXVCRixLQURsQjtBQUVaQyxrQkFBVSxLQUFLUCxLQUFMLENBQVdRLFdBQVgsQ0FBdUJELFFBRnJCO0FBR1pFLGtCQUFVLEtBQUtULEtBQUwsQ0FBV1EsV0FBWCxDQUF1QkMsUUFIckI7QUFJWkMsZ0JBQVEsS0FBS1YsS0FBTCxDQUFXVSxNQUpQO0FBS1pDLHNCQUFjLEtBQUtBLFlBTFA7QUFNWkUsc0JBQWMsS0FBS0E7QUFOUCxPQUFkOztBQVNBLGFBQVE7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNOO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQ0Usd0RBQU0sV0FBVSxRQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxXQUFmO0FBQ0Usa0RBQUMsY0FBRCxFQUFVVixLQUFWO0FBREY7QUFERjtBQUZGO0FBREY7QUFERjtBQURGO0FBRE0sT0FBUjtBQWdCRDs7OztFQTFIZ0JpQyxnQjs7QUFBYmxDLEksQ0FFR21DLFcsR0FBYyxXO0FBRmpCbkMsSSxDQUtHb0MsUyxHQUFZO0FBQ2pCdkMsbUJBQWlCd0Msb0JBQVVDLElBQVYsQ0FBZUMsVUFEZjtBQUVqQmQsWUFBVVksb0JBQVVHLElBQVYsQ0FBZUQ7QUFGUixDO2tCQXdITnZDLEk7Ozs7Ozs7Ozs7Ozs7O0FDMUlmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1tQyxjQUFjLFdBQXBCO0FBQ0EsSUFBTUMsWUFBWTtBQUNoQmhDLFNBQU9pQyxvQkFBVUksTUFERDtBQUVoQnBDLFlBQVVnQyxvQkFBVUksTUFGSjtBQUdoQmxDLFlBQVU4QixvQkFBVUMsSUFISjtBQUloQjlCLFVBQVE2QixvQkFBVUssTUFBVixDQUFpQkgsVUFKVDtBQUtoQjVCLGdCQUFjMEIsb0JBQVVHLElBQVYsQ0FBZUQsVUFMYjtBQU1oQjlCLGdCQUFjNEIsb0JBQVVHLElBQVYsQ0FBZUQ7QUFOYixDQUFsQjs7QUFTQSxJQUFNSSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHdkMsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JFLFFBQXBCLFFBQW9CQSxRQUFwQjtBQUFBLE1BQThCQyxNQUE5QixRQUE4QkEsTUFBOUI7QUFBQSxNQUFzQ0MsWUFBdEMsUUFBc0NBLFlBQXRDO0FBQUEsTUFBb0RFLFlBQXBELFFBQW9EQSxZQUFwRDtBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQU0sV0FBVSxNQUFoQixFQUF1QixNQUFLLE1BQTVCLEVBQW1DLFVBQVVBLFlBQTdDLEVBQTJELGdCQUEzRDtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZixFQUF1QixXQUFVLFNBQWpDO0FBQUE7QUFBQSxPQURGO0FBRUUsK0NBQU8sTUFBSyxNQUFaO0FBQ08sZ0VBQXFESCxPQUFPb0MsR0FBUCxDQUFXLE9BQVgsS0FBdUIsWUFBNUUsQ0FEUDtBQUVPLGNBQUssT0FGWjtBQUdPLFlBQUcsT0FIVjtBQUlPLHFCQUFZLGVBSm5CO0FBS08sZUFBT3hDLFNBQVMsRUFMdkI7QUFNTyxrQkFBVTtBQUFBLGlCQUFLSyxhQUFhVyxFQUFFeUIsTUFBRixDQUFTL0IsSUFBdEIsRUFBNEJNLEVBQUV5QixNQUFGLENBQVM5QixLQUFyQyxDQUFMO0FBQUEsU0FOakI7QUFPTyxzQkFQUDtBQVFPLHVCQVJQLEdBRkY7QUFXR1AsYUFBT29DLEdBQVAsQ0FBVyxPQUFYLEtBQXVCO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFBbUNwQyxlQUFPc0MsS0FBUCxDQUFhLE9BQWI7QUFBbkM7QUFYMUIsS0FGRjtBQWVFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFNBQVEsVUFBZixFQUEwQixXQUFVLFNBQXBDO0FBQUE7QUFBQSxPQURGO0FBRUUsK0NBQU8sTUFBSyxVQUFaO0FBQ08sZ0VBQXFEdEMsT0FBT29DLEdBQVAsQ0FBVyxVQUFYLEtBQTBCLFlBQS9FLENBRFA7QUFFTyxZQUFHLFVBRlY7QUFHTyxjQUFLLFVBSFo7QUFJTyxxQkFBWSxVQUpuQjtBQUtPLGVBQU92QyxZQUFZLEVBTDFCO0FBTU8sa0JBQVU7QUFBQSxpQkFBS0ksYUFBYVcsRUFBRXlCLE1BQUYsQ0FBUy9CLElBQXRCLEVBQTRCTSxFQUFFeUIsTUFBRixDQUFTOUIsS0FBckMsQ0FBTDtBQUFBLFNBTmpCO0FBT08sc0JBUFAsR0FGRjtBQVVHUCxhQUFPb0MsR0FBUCxDQUFXLFVBQVgsS0FBMEI7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUFtQ3BDLGVBQU9zQyxLQUFQLENBQWEsVUFBYjtBQUFuQztBQVY3QixLQWZGO0FBMkJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsZ0NBQWpCO0FBQ0UsaURBQU8sTUFBSyxVQUFaO0FBQ08sZ0JBQUssVUFEWjtBQUVPLHFCQUFVLHNCQUZqQjtBQUdPLG9CQUFVO0FBQUEsbUJBQUtyQyxhQUFhVyxFQUFFeUIsTUFBRixDQUFTL0IsSUFBdEIsRUFBNEIsQ0FBQ1AsUUFBN0IsQ0FBTDtBQUFBLFdBSGpCLEdBREY7QUFLRSxnREFBTSxXQUFVLDBCQUFoQixHQUxGO0FBTUU7QUFBQTtBQUFBLFlBQU0sV0FBVSxrQ0FBaEI7QUFBQTtBQUFBO0FBTkY7QUFERixLQTNCRjtBQXFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLGtDQUFsQjtBQUNRLGNBQUssUUFEYjtBQUVRLGtCQUFVQyxPQUFPdUMsR0FBUCxFQUZsQjtBQUFBO0FBQUEsS0FyQ0Y7QUF3Q0U7QUFBQTtBQUFBO0FBQUE7QUFBaUI7QUFBQyw0QkFBRDtBQUFBLFVBQU0sSUFBRyxXQUFUO0FBQUE7QUFBQTtBQUFqQjtBQXhDRixHQURXO0FBQUEsQ0FBYjs7QUE2Q0FKLEtBQUtSLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0FRLEtBQUtQLFNBQUwsR0FBaUJBLFNBQWpCOztrQkFFZU8sSSIsImZpbGUiOiJqcy9jaHVua3MvOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBsaWJzXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYWdlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2F1dGgvcGFnZXMvbG9naW4vaW5kZXguanMiLCIvKipcbiAgKiByZWUtdmFsaWRhdGUgdjIuMC4zXG4gICogKGMpIDIwMTggTW9lZW4gQmFzcmFcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cbi8qKlxuICogRm9ybWF0ZXMgZmlsZSBzaXplLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gc2l6ZVxuICovXG52YXIgZm9ybWF0RmlsZVNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICB2YXIgdW5pdHMgPSBbJ0J5dGUnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgdmFyIHRocmVzaG9sZCA9IDEwMjQ7XG4gIHNpemUgPSBOdW1iZXIoc2l6ZSkgKiB0aHJlc2hvbGQ7XG4gIHZhciBpID0gc2l6ZSA9PT0gMCA/IDAgOiBNYXRoLmZsb29yKE1hdGgubG9nKHNpemUpIC8gTWF0aC5sb2codGhyZXNob2xkKSk7XG4gIHJldHVybiAoKChzaXplIC8gTWF0aC5wb3codGhyZXNob2xkLCBpKSkudG9GaXhlZCgyKSAqIDEpICsgXCIgXCIgKyAodW5pdHNbaV0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHZlZS12YWxpZGF0ZSBpcyBkZWZpbmVkIGdsb2JhbGx5LlxuICovXG52YXIgaXNEZWZpbmVkR2xvYmFsbHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgVmVlVmFsaWRhdGUgIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIG9iajtcbnZhciBtZXNzYWdlcyA9IHtcbiAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiB2YWx1ZSBpcyBub3QgdmFsaWQuXCIpOyB9LFxuICBhZnRlcjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGFmdGVyIFwiICsgKGluY2x1c2lvbiA/ICdvciBlcXVhbCB0byAnIDogJycpICsgdGFyZ2V0ICsgXCIuXCIpO1xufSxcbiAgYWxwaGFfZGFzaDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGRhc2hlcyBhbmQgdW5kZXJzY29yZXMuXCIpOyB9LFxuICBhbHBoYV9udW06IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGFscGhhX3NwYWNlczogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgc3BhY2VzLlwiKTsgfSxcbiAgYWxwaGE6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGJlZm9yZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJlZm9yZSBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGJldHdlZW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcbiAgICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBiZXR3ZWVuIFwiICsgbWluICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xufSxcbiAgY29uZmlybWVkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoLlwiKTsgfSxcbiAgY3JlZGl0X2NhcmQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyBpbnZhbGlkLlwiKTsgfSxcbiAgZGF0ZV9iZXR3ZWVuOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgYmV0d2VlbiBcIiArIG1pbiArIFwiIGFuZCBcIiArIG1heCArIFwiLlwiKTtcbn0sXG4gIGRhdGVfZm9ybWF0OiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBmb3JtYXQgPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGluIHRoZSBmb3JtYXQgXCIgKyBmb3JtYXQgKyBcIi5cIik7XG59LFxuICBkZWNpbWFsOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbXTtcbiAgICB2YXIgZGVjaW1hbHMgPSByZWZbMF07IGlmICggZGVjaW1hbHMgPT09IHZvaWQgMCApIGRlY2ltYWxzID0gJyonO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBtYXkgY29udGFpbiBcIiArICghZGVjaW1hbHMgfHwgZGVjaW1hbHMgPT09ICcqJyA/ICcnIDogZGVjaW1hbHMpICsgXCIgZGVjaW1hbCBwb2ludHMuXCIpO1xufSxcbiAgZGlnaXRzOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIGV4YWN0bHkgY29udGFpbiBcIiArIGxlbmd0aCArIFwiIGRpZ2l0cy5cIik7XG59LFxuICBkaW1lbnNpb25zOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIHdpZHRoICsgXCIgcGl4ZWxzIGJ5IFwiICsgaGVpZ2h0ICsgXCIgcGl4ZWxzLlwiKTtcbn0sXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKTsgfSxcbiAgZXh0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGZpbGUuXCIpOyB9LFxuICBpbWFnZTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYW4gaW1hZ2UuXCIpOyB9LFxuICBpbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIGludGVnZXI6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGFuIGludGVnZXIuXCIpOyB9LFxuICBpcDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzLlwiKTsgfSxcbiAgbGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBiZSBiZXR3ZWVuIFwiICsgbGVuZ3RoICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBtdXN0IGJlIFwiICsgbGVuZ3RoICsgXCIuXCIpO1xuICB9LFxuICBtYXg6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtYXhfdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1heCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtYXggKyBcIiBvciBsZXNzLlwiKTtcbn0sXG4gIG1pbWVzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSB0eXBlLlwiKTsgfSxcbiAgbWluOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtaW5fdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtaW4gKyBcIiBvciBtb3JlLlwiKTtcbn0sXG4gIG5vdF9pbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIG51bWVyaWM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIG51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIHJlZ2V4OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgZm9ybWF0IGlzIGludmFsaWQuXCIpOyB9LFxuICByZXF1aXJlZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIHJlcXVpcmVkLlwiKTsgfSxcbiAgc2l6ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gXCIgKyAoZm9ybWF0RmlsZVNpemUoc2l6ZSkpICsgXCIuXCIpO1xufSxcbiAgdXJsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgbm90IGEgdmFsaWQgVVJMLlwiKTsgfVxufTtcblxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ2VuJyxcbiAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICBhdHRyaWJ1dGVzOiB7fVxufTtcblxuaWYgKGlzRGVmaW5lZEdsb2JhbGx5KCkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFZlZVZhbGlkYXRlLlZhbGlkYXRvci5sb2NhbGl6ZSgoIG9iaiA9IHt9LCBvYmpbbG9jYWxlLm5hbWVdID0gbG9jYWxlLCBvYmopKTtcbn1cblxuLy8gXG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuIHRoZSBuYW1lIG11c3QgYmUga2ViYWItY2FzZS5cbiAqL1xudmFyIGdldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUpIHsgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgZWl0aGVyIG51bGwgb3IgdW5kZWZpbmVkLlxuICovXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuXG4gKi9cbnZhciBzZXREYXRhQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWx1ZSkgeyByZXR1cm4gZWwuc2V0QXR0cmlidXRlKChcImRhdGEtdnYtXCIgKyBuYW1lKSwgdmFsdWUpOyB9O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgZmxhZ3Mgb2JqZWN0LlxuICovXG52YXIgY3JlYXRlRmxhZ3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICB1bnRvdWNoZWQ6IHRydWUsXG4gIHRvdWNoZWQ6IGZhbHNlLFxuICBkaXJ0eTogZmFsc2UsXG4gIHByaXN0aW5lOiB0cnVlLFxuICB2YWxpZDogbnVsbCxcbiAgaW52YWxpZDogbnVsbCxcbiAgdmFsaWRhdGVkOiBmYWxzZSxcbiAgcGVuZGluZzogZmFsc2UsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbn0pOyB9O1xuXG4vKipcbiAqIFNoYWxsb3cgb2JqZWN0IGNvbXBhcmlzb24uXG4gKi9cblxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIGlucHV0IGZpZWxkIHNjb3BlLlxuICovXG5cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBpbiBhbiBvYmplY3Qgc2FmZWx5LlxuICovXG52YXIgZ2V0UGF0aCA9IGZ1bmN0aW9uIChwYXRoLCB0YXJnZXQsIGRlZikge1xuICBpZiAoIGRlZiA9PT0gdm9pZCAwICkgZGVmID0gdW5kZWZpbmVkO1xuXG4gIGlmICghcGF0aCB8fCAhdGFyZ2V0KSB7IHJldHVybiBkZWYgfVxuXG4gIHZhciB2YWx1ZSA9IHRhcmdldDtcbiAgcGF0aC5zcGxpdCgnLicpLmV2ZXJ5KGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKCEgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBwcm9wKSAmJiB2YWx1ZVtwcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGRlZjtcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlXG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgcGF0aCBleGlzdHMgd2l0aGluIGFuIG9iamVjdC5cbiAqL1xuXG5cbi8qKlxuICogUGFyc2VzIGEgcnVsZSBzdHJpbmcgZXhwcmVzc2lvbi5cbiAqL1xudmFyIHBhcnNlUnVsZSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIG5hbWUgPSBydWxlLnNwbGl0KCc6JylbMF07XG5cbiAgaWYgKH5ydWxlLmluZGV4T2YoJzonKSkge1xuICAgIHBhcmFtcyA9IHJ1bGUuc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jykuc3BsaXQoJywnKTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWU6IG5hbWUsIHBhcmFtczogcGFyYW1zIH1cbn07XG5cbi8qKlxuICogRGVib3VuY2VzIGEgZnVuY3Rpb24uXG4gKi9cbnZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbiwgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGlmICggd2FpdCA9PT0gdm9pZCAwICkgd2FpdCA9IDA7XG4gIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSBmYWxzZTtcblxuICBpZiAod2FpdCA9PT0gMCkge1xuICAgIHJldHVybiBmblxuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChjYWxsTm93KSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgfVxufTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBydWxlcyBleHByZXNzaW9uLlxuICovXG52YXIgbm9ybWFsaXplUnVsZXMgPSBmdW5jdGlvbiAocnVsZXMpIHtcbiAgLy8gaWYgZmFsc3kgdmFsdWUgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgaWYgKCFydWxlcykge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHJ1bGVzKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocnVsZXMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgaWYgKHJ1bGVzW2N1cnJdID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJ1bGVzW2N1cnJdKSkge1xuICAgICAgICBwYXJhbXMgPSBydWxlc1tjdXJyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IFtydWxlc1tjdXJyXV07XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGlmIChydWxlc1tjdXJyXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcHJldltjdXJyXSA9IHBhcmFtcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZcbiAgICB9LCB7fSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgcnVsZXMgIT09ICdzdHJpbmcnKSB7XG4gICAgd2FybigncnVsZXMgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LicpO1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcmV0dXJuIHJ1bGVzLnNwbGl0KCd8JykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBydWxlKSB7XG4gICAgdmFyIHBhcnNlZFJ1bGUgPSBwYXJzZVJ1bGUocnVsZSk7XG4gICAgaWYgKCFwYXJzZWRSdWxlLm5hbWUpIHtcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfVxuXG4gICAgcHJldltwYXJzZWRSdWxlLm5hbWVdID0gcGFyc2VkUnVsZS5wYXJhbXM7XG4gICAgcmV0dXJuIHByZXZcbiAgfSwge30pXG59O1xuXG4vKipcbiAqIEVtaXRzIGEgd2FybmluZyB0byB0aGUgY29uc29sZS5cbiAqL1xudmFyIHdhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBjb25zb2xlLndhcm4oKFwiW3JlZS12YWxpZGF0ZV0gXCIgKyBtZXNzYWdlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJyYW5kZWQgZXJyb3Igb2JqZWN0LlxuICovXG52YXIgY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gbmV3IEVycm9yKChcIltyZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICEgQXJyYXkuaXNBcnJheShvYmopOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGZ1bmN0aW9uIGlzIGNhbGxhYmxlLlxuICovXG52YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmdW5jKSB7IHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGhhcyB0aGUgY3NzIGNsYXNzIG9uIGl0LlxuICovXG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gIH1cblxuICByZXR1cm4gISFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpKSlcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgcHJvdmlkZWQgY3NzIGNsYXNzTmFtZSB0byB0aGUgZWxlbWVudC5cbiAqL1xudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpKTtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkcyBvciByZW1vdmVzIGEgY2xhc3MgbmFtZSBvbiB0aGUgaW5wdXQgZGVwZW5kaW5nIG9uIHRoZSBzdGF0dXMgZmxhZy5cbiAqL1xudmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUsIHN0YXR1cykge1xuICBpZiAoIWVsIHx8ICFjbGFzc05hbWUpIHsgcmV0dXJuOyB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIGNsYXNzTmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiB0b2dnbGVDbGFzcyhlbCwgaXRlbSwgc3RhdHVzKTsgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHN0YXR1cykge1xuICAgIHJldHVybiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IHRvIGFycmF5LCBwcm92aWRlcyBhIHNpbXBsZSBwb2x5ZmlsbCBmb3IgQXJyYXkuZnJvbVxuICovXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgaWYgKGlzQ2FsbGFibGUoQXJyYXkuZnJvbSkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnJheUxpa2UpXG4gIH1cblxuICB2YXIgYXJyYXkgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKGFycmF5TGlrZVtpXSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlcbn07XG5cbi8qKlxuICogQXNzaWduIHBvbHlmaWxsIGZyb20gdGhlIG1kbi5cbiAqL1xudmFyIGFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgdmFyIG90aGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBvdGhlcnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGlzQ2FsbGFibGUoT2JqZWN0LmFzc2lnbikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIFsgdGFyZ2V0IF0uY29uY2F0KCBvdGhlcnMgKSlcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgIGlmIChhcmcgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGFyZ1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIHRvXG59O1xuXG52YXIgaWQgPSAwO1xudmFyIGlkVGVtcGxhdGUgPSAne2lkfSc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkLlxuICovXG52YXIgdW5pcUlkID0gZnVuY3Rpb24gKCkge1xuICAvLyBoYW5kbGUgdG9vIG1hbnkgdXNlcyBvZiB1bmlxSWQsIGFsdGhvdWdoIHVubGlrZWx5LlxuICBpZiAoaWQgPj0gOTk5OSkge1xuICAgIGlkID0gMDtcbiAgICAvLyBzaGlmdCB0aGUgdGVtcGxhdGUuXG4gICAgaWRUZW1wbGF0ZSA9IGlkVGVtcGxhdGUucmVwbGFjZSgne2lkfScsICdfe2lkfScpO1xuICB9XG5cbiAgaWQrKztcbiAgdmFyIG5ld0lkID0gaWRUZW1wbGF0ZS5yZXBsYWNlKCd7aWR9JywgU3RyaW5nKGlkKSk7XG5cbiAgcmV0dXJuIG5ld0lkXG59O1xuXG4vKipcbiAqIGZpbmRzIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgc2F0aXNmaWVzIHRoZSBwcmVkaWNhdGUgY2FsbGJhY2ssIHBvbHlmaWxscyBhcnJheS5maW5kXG4gKi9cbnZhciBmaW5kID0gZnVuY3Rpb24gKGFycmF5TGlrZSwgcHJlZGljYXRlKSB7XG4gIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoYXJyYXlMaWtlKSA/IGFycmF5TGlrZSA6IHRvQXJyYXkoYXJyYXlMaWtlKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gYXJyYXlbaV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBzdWl0YWJsZSBldmVudCBuYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudC5cbiAqL1xudmFyIGdldElucHV0RXZlbnROYW1lID0gZnVuY3Rpb24gKGVsKSB7XG4gIGlmIChlbCAmJiAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgflsncmFkaW8nLCAnY2hlY2tib3gnLCAnZmlsZSddLmluZGV4T2YoZWwudHlwZSkpKSB7XG4gICAgcmV0dXJuICdjaGFuZ2UnXG4gIH1cblxuICByZXR1cm4gJ2lucHV0J1xufTtcblxuXG5cbnZhciBtYWtlRXZlbnRzQXJyYXkgPSBmdW5jdGlvbiAoZXZlbnRzKSB7XG4gIHJldHVybiAodHlwZW9mIGV2ZW50cyA9PT0gJ3N0cmluZycgJiYgZXZlbnRzLmxlbmd0aCkgPyBldmVudHMuc3BsaXQoJ3wnKSA6IFtdXG59O1xuXG52YXIgbWFrZURlbGF5T2JqZWN0ID0gZnVuY3Rpb24gKGV2ZW50cywgZGVsYXksIGRlbGF5Q29uZmlnKSB7XG4gIGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGV2ZW50cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGUpIHtcbiAgICAgIHByZXZbZV0gPSBkZWxheTtcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfSwge30pXG4gIH1cblxuICByZXR1cm4gZXZlbnRzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZSkge1xuICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICdvYmplY3QnICYmIGUgaW4gZGVsYXkpIHtcbiAgICAgIHByZXZbZV0gPSBkZWxheVtlXTtcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWxheUNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHByZXZbZV0gPSBkZWxheUNvbmZpZztcbiAgICAgIHJldHVybiBwcmV2XG4gICAgfVxuXG4gICAgcHJldltlXSA9IChkZWxheUNvbmZpZyAmJiBkZWxheUNvbmZpZ1tlXSkgfHwgMDtcblxuICAgIHJldHVybiBwcmV2XG4gIH0sIHt9KVxufTtcblxuXG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoISAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSkge1xuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIG9iaiwgb2JqJDE7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICBpZiAoISB0YXJnZXRba2V5XSkge1xuICAgICAgICBhc3NpZ24odGFyZ2V0LCAoIG9iaiA9IHt9LCBvYmpba2V5XSA9IHt9LCBvYmopKTtcbiAgICAgIH1cblxuICAgICAgbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFzc2lnbih0YXJnZXQsICggb2JqJDEgPSB7fSwgb2JqJDFba2V5XSA9IHNvdXJjZVtrZXldLCBvYmokMSkpO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0XG59O1xuXG4vLyBcblxudmFyIEVycm9yQmFnID0gZnVuY3Rpb24gRXJyb3JCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gZXJyb3IgdG8gdGhlIGludGVybmFsIGFycmF5LlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChlcnJvcikge1xuICAvLyBoYW5kbGUgb2xkIHNpZ25hdHVyZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZXJyb3IgPSB7XG4gICAgICBmaWVsZDogYXJndW1lbnRzWzBdLFxuICAgICAgbXNnOiBhcmd1bWVudHNbMV0sXG4gICAgICBydWxlOiBhcmd1bWVudHNbMl0sXG4gICAgICBzY29wZTogIWlzTnVsbE9yVW5kZWZpbmVkKGFyZ3VtZW50c1szXSkgPyBhcmd1bWVudHNbM10gOiBudWxsLFxuICAgICAgcmVnZW5lcmF0ZTogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgZXJyb3Iuc2NvcGUgPSAhaXNOdWxsT3JVbmRlZmluZWQoZXJyb3Iuc2NvcGUpID8gZXJyb3Iuc2NvcGUgOiBudWxsO1xuICB0aGlzLml0ZW1zLnB1c2goZXJyb3IpO1xufTtcblxuLyoqXG4gKiBSZWdlbnJhdGVzIGVycm9yIG1lc3NhZ2VzIGlmIHRoZXkgaGF2ZSBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlZ2VuZXJhdGUgPSBmdW5jdGlvbiByZWdlbmVyYXRlICgpIHtcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaS5tc2cgPSBpc0NhbGxhYmxlKGkucmVnZW5lcmF0ZSkgPyBpLnJlZ2VuZXJhdGUoKSA6IGkubXNnO1xuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhIGZpZWxkIGVycm9yIHdpdGggdGhlIG5ldyBmaWVsZCBzY29wZS5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoaWQsIGVycm9yKSB7XG4gIHZhciBpdGVtID0gZmluZCh0aGlzLml0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZCA9PT0gaWQ7IH0pO1xuICBpZiAoIWl0ZW0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gIGl0ZW0uc2NvcGUgPSBlcnJvci5zY29wZTtcbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuLyoqXG4gKiBHZXRzIGFsbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIGFsbCAoc2NvcGUpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pXG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc2NvcGUgPT09IHNjb3BlOyB9KS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUubXNnOyB9KVxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMgaW4gdGhlIGludGVybmFsIGFycmF5LlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gYW55IChzY29wZSkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pdGVtcy5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiAhIXRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubGVuZ3RoXG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgc2NvcGUgPSBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5zY29wZSA9PT0gc2NvcGUpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENvbGxlY3RzIGVycm9ycyBpbnRvIGdyb3VwcyBvciBmb3IgYSBzcGVjaWZpYyBmaWVsZC5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNvbGxlY3QgPSBmdW5jdGlvbiBjb2xsZWN0IChmaWVsZCwgc2NvcGUsIG1hcCkge1xuICAgIGlmICggbWFwID09PSB2b2lkIDAgKSBtYXAgPSB0cnVlO1xuXG4gIGlmICghZmllbGQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHt9O1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFjb2xsZWN0aW9uW2UuZmllbGRdKSB7XG4gICAgICAgIGNvbGxlY3Rpb25bZS5maWVsZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbltlLmZpZWxkXS5wdXNoKG1hcCA/IGUubXNnIDogZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvblxuICB9XG5cbiAgZmllbGQgPSAhaXNOdWxsT3JVbmRlZmluZWQoZmllbGQpID8gU3RyaW5nKGZpZWxkKSA6IGZpZWxkO1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZDsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAobWFwID8gZS5tc2cgOiBlKTsgfSlcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGU7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gKG1hcCA/IGUubXNnIDogZSk7IH0pXG59O1xuLyoqXG4gKiBHZXRzIHRoZSBpbnRlcm5hbCBhcnJheSBsZW5ndGguXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50ICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoXG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCBmZXRjaGVzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkIGlkLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeUlkID0gZnVuY3Rpb24gZmlyc3RCeUlkIChpZCkge1xuICB2YXIgZXJyb3IgPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG5cbiAgcmV0dXJuIGVycm9yID8gZXJyb3IubXNnIDogbnVsbFxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiBmaXJzdCAoZmllbGQsIHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIGlmIChpc051bGxPclVuZGVmaW5lZChmaWVsZCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZmllbGQgPSBTdHJpbmcoZmllbGQpO1xuICB2YXIgc2VsZWN0b3IgPSB0aGlzLl9zZWxlY3RvcihmaWVsZCk7XG4gIHZhciBzY29wZWQgPSB0aGlzLl9zY29wZShmaWVsZCk7XG5cbiAgaWYgKHNjb3BlZCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmZpcnN0KHNjb3BlZC5uYW1lLCBzY29wZWQuc2NvcGUpO1xuICAgIC8vIGlmIHN1Y2ggcmVzdWx0IGV4aXN0LCByZXR1cm4gaXQuIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBhIGZpZWxkLlxuICAgIC8vIHdpdGggZG90IGluIGl0cyBuYW1lLlxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEJ5UnVsZShzZWxlY3Rvci5uYW1lLCBzZWxlY3Rvci5ydWxlLCBzY29wZSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzJDEuaXRlbXNbaV0uZmllbGQgPT09IGZpZWxkICYmICh0aGlzJDEuaXRlbXNbaV0uc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5pdGVtc1tpXS5tc2dcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlcnJvciBydWxlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdFJ1bGUgPSBmdW5jdGlvbiBmaXJzdFJ1bGUgKGZpZWxkLCBzY29wZSkge1xuICB2YXIgZXJyb3JzID0gdGhpcy5jb2xsZWN0KGZpZWxkLCBzY29wZSwgZmFsc2UpO1xuXG4gIHJldHVybiAoZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnNbMF0ucnVsZSkgfHwgbnVsbFxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGludGVybmFsIGFycmF5IGhhcyBhdCBsZWFzdCBvbmUgZXJyb3IgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGQuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGZpZWxkLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICByZXR1cm4gISF0aGlzLmZpcnN0KGZpZWxkLCBzY29wZSlcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgYSBzcGVjaWZpYyBmaWVsZCBhbmQgYSBydWxlLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeVJ1bGUgPSBmdW5jdGlvbiBmaXJzdEJ5UnVsZSAobmFtZSwgcnVsZSwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgdmFyIGVycm9yID0gdGhpcy5jb2xsZWN0KG5hbWUsIHNjb3BlLCBmYWxzZSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnJ1bGUgPT09IHJ1bGU7IH0pWzBdO1xuXG4gIHJldHVybiAoZXJyb3IgJiYgZXJyb3IubXNnKSB8fCBudWxsXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQgdGhhdCBub3QgbWF0Y2ggdGhlIHJ1bGUuXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdE5vdCA9IGZ1bmN0aW9uIGZpcnN0Tm90IChuYW1lLCBydWxlLCBzY29wZSkge1xuICAgIGlmICggcnVsZSA9PT0gdm9pZCAwICkgcnVsZSA9ICdyZXF1aXJlZCc7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIHZhciBlcnJvciA9IHRoaXMuY29sbGVjdChuYW1lLCBzY29wZSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5ydWxlICE9PSBydWxlOyB9KVswXTtcblxuICByZXR1cm4gKGVycm9yICYmIGVycm9yLm1zZykgfHwgbnVsbFxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGVycm9ycyBieSBtYXRjaGluZyBhZ2FpbnN0IHRoZSBpZC5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlbW92ZUJ5SWQgPSBmdW5jdGlvbiByZW1vdmVCeUlkIChpZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzJDEuaXRlbXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICB0aGlzJDEuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgLS1pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBlcnJvciBtZXNzYWdlcyBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBmaWVsZC5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoZmllbGQsIHNjb3BlLCBpZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZpZWxkID0gIWlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkKSA/IFN0cmluZyhmaWVsZCkgOiBmaWVsZDtcbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuaWQgJiYgaWQpIHtcbiAgICAgIHJldHVybiBlLmlkID09PSBpZFxuICAgIH1cblxuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoc2NvcGUpKSB7XG4gICAgICByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGVcbiAgICB9XG5cbiAgICByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gbnVsbFxuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChyZW1vdmVDb25kaXRpb24odGhpcyQxLml0ZW1zW2ldKSkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaWVsZCBhdHRyaWJ1dGVzIGlmIHRoZXJlJ3MgYSBydWxlIHNlbGVjdG9yLlxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuX3NlbGVjdG9yID0gZnVuY3Rpb24gX3NlbGVjdG9yIChmaWVsZCkge1xuICBpZiAoZmllbGQuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzBdO1xuICAgICAgdmFyIHJ1bGUgPSByZWZbMV07XG5cbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBydWxlOiBydWxlIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmllbGQgc2NvcGUgaWYgc3BlY2lmaWVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zY29wZSA9IGZ1bmN0aW9uIF9zY29wZSAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZi5zbGljZSgxKTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUuam9pbignLicpLCBzY29wZTogc2NvcGUgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn07XG5cbi8vIFxuXG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICB0YXJnZXRPZjogbnVsbCxcbiAgaW5pdGlhbDogZmFsc2UsXG4gIHNjb3BlOiBudWxsLFxuICBsaXN0ZW46IHRydWUsXG4gIG5hbWU6IG51bGwsXG4gIHJ1bGVzOiB7fSxcbiAgdm06IG51bGwsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICB2YWxpZGl0eTogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgZXZlbnRzOiAnaW5wdXR8Ymx1cicsXG4gIGRlbGF5OiAwLFxuICBjbGFzc05hbWVzOiB7XG4gICAgdG91Y2hlZDogJ3RvdWNoZWQnLCAvLyB0aGUgY29udHJvbCBoYXMgYmVlbiBibHVycmVkXG4gICAgdW50b3VjaGVkOiAndW50b3VjaGVkJywgLy8gdGhlIGNvbnRyb2wgaGFzbid0IGJlZW4gYmx1cnJlZFxuICAgIHZhbGlkOiAndmFsaWQnLCAvLyBtb2RlbCBpcyB2YWxpZFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJywgLy8gbW9kZWwgaXMgaW52YWxpZFxuICAgIHByaXN0aW5lOiAncHJpc3RpbmUnLCAvLyBjb250cm9sIGhhcyBub3QgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgICBkaXJ0eTogJ2RpcnR5JywgLy8gY29udHJvbCBoYXMgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgfSxcbn07XG5cbnZhciBGaWVsZCA9IGZ1bmN0aW9uIEZpZWxkIChlbCwgb3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmlkID0gdW5pcUlkKCk7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5ldmVudHMgPSBbXTtcbiAgdGhpcy5kZWxheSA9IDA7XG4gIHRoaXMucnVsZXMgPSB7fTtcbiAgdGhpcy5fY2FjaGVJZChvcHRpb25zKTtcbiAgdGhpcy5jbGFzc05hbWVzID0gYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMuY2xhc3NOYW1lcyk7XG4gIG9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG4gIHRoaXMuX2RlbGF5ID0gIWlzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuZGVsYXkpID8gb3B0aW9ucy5kZWxheSA6IDA7IC8vIGNhY2hlIGluaXRpYWwgZGVsYXlcbiAgdGhpcy52YWxpZGl0eSA9IG9wdGlvbnMudmFsaWRpdHk7XG4gIHRoaXMuYXJpYSA9IG9wdGlvbnMuYXJpYTtcbiAgdGhpcy5mbGFncyA9IGNyZWF0ZUZsYWdzKCk7XG4gIHRoaXMudm0gPSBvcHRpb25zLnZtO1xuICB0aGlzLmNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xuICB0aGlzLmN0b3JDb25maWcgPSB0aGlzLmNvbXBvbmVudCA/IGdldFBhdGgoJyRvcHRpb25zLiRfcmVlVmFsaWRhdGUnLCB0aGlzLmNvbXBvbmVudCkgOiB1bmRlZmluZWQ7XG4gIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHZhbGlkYXRvcjogeyBjb25maWd1cmFibGU6IHRydWUgfSxpc1JlcXVpcmVkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGlzRGlzYWJsZWQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sYWxpYXM6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sdmFsdWU6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0scmVqZWN0c0ZhbHNlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy52YWxpZGF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudm0gfHwgIXRoaXMudm0uJHZhbGlkYXRvcikge1xuICAgIHdhcm4oJ05vIHZhbGlkYXRvciBpbnN0YW5jZSBkZXRlY3RlZC4nKTtcbiAgICByZXR1cm4geyB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30gfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMudm0uJHZhbGlkYXRvclxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzUmVxdWlyZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLnJ1bGVzLnJlcXVpcmVkXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuaXNEaXNhYmxlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhISh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5kaXNhYmxlZCkgfHwgISEodGhpcy5lbCAmJiB0aGlzLmVsLmRpc2FibGVkKVxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkaXNwbGF5IG5hbWUgKHVzZXItZnJpZW5kbHkgbmFtZSkuXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5hbGlhcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9hbGlhcykge1xuICAgIHJldHVybiB0aGlzLl9hbGlhc1xuICB9XG5cbiAgdmFyIGFsaWFzID0gbnVsbDtcbiAgaWYgKHRoaXMuZWwpIHtcbiAgICBhbGlhcyA9IGdldERhdGFBdHRyaWJ1dGUodGhpcy5lbCwgJ2FzJyk7XG4gIH1cblxuICBpZiAoIWFsaWFzICYmIHRoaXMuY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LiRhdHRycyAmJiB0aGlzLmNvbXBvbmVudC4kYXR0cnNbJ2RhdGEtdnYtYXMnXVxuICB9XG5cbiAgcmV0dXJuIGFsaWFzXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGlucHV0IHZhbHVlLlxuICovXG5cbnByb3RvdHlwZUFjY2Vzc29ycy52YWx1ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghaXNDYWxsYWJsZSh0aGlzLmdldHRlcikpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXR0ZXIoKVxufTtcblxuLyoqXG4gKiBJZiB0aGUgZmllbGQgcmVqZWN0cyBmYWxzZSBhcyBhIHZhbGlkIHZhbHVlIGZvciB0aGUgcmVxdWlyZWQgcnVsZS5cbiAqL1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMucmVqZWN0c0ZhbHNlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY3RvckNvbmZpZykge1xuICAgIHJldHVybiAhIXRoaXMuY3RvckNvbmZpZy5yZWplY3RzRmFsc2VcbiAgfVxuXG4gIGlmICghdGhpcy5lbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWwudHlwZSA9PT0gJ2NoZWNrYm94J1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnN0YW5jZSBtYXRjaGVzIHRoZSBvcHRpb25zIHByb3ZpZGVkLlxuICovXG5GaWVsZC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIG1hdGNoZXMgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gb3B0aW9ucy5pZFxuICB9XG5cbiAgaWYgKG9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAob3B0aW9ucy5zY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gb3B0aW9ucy5uYW1lXG4gIH1cblxuICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZSA9PT0gb3B0aW9ucy5zY29wZVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMubmFtZSA9PT0gdGhpcy5uYW1lICYmIG9wdGlvbnMuc2NvcGUgPT09IHRoaXMuc2NvcGVcbn07XG5cbi8qKlxuICogQ2FjaGVzIHRoZSBmaWVsZCBpZC5cbiAqL1xuRmllbGQucHJvdG90eXBlLl9jYWNoZUlkID0gZnVuY3Rpb24gX2NhY2hlSWQgKG9wdGlvbnMpIHtcbiAgaWYgKHRoaXMuZWwgJiYgIW9wdGlvbnMudGFyZ2V0T2YpIHtcbiAgICBzZXREYXRhQXR0cmlidXRlKHRoaXMuZWwsICdpZCcsIHRoaXMuaWQpOyAvLyBjYWNoZSBmaWVsZCBpZCBpZiBpdCBpcyBpbmRlcGVuZGVudCBhbmQgaGFzIGEgcm9vdCBlbGVtZW50LlxuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGZpZWxkIHdpdGggY2hhbmdlZCBkYXRhLlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChvcHRpb25zKSB7XG4gIHRoaXMudGFyZ2V0T2YgPSBvcHRpb25zLnRhcmdldE9mIHx8IG51bGw7XG4gIHRoaXMuaW5pdGlhbCA9IG9wdGlvbnMuaW5pdGlhbCB8fCB0aGlzLmluaXRpYWwgfHwgZmFsc2U7XG5cbiAgLy8gdXBkYXRlIGVycm9ycyBzY29wZSBpZiB0aGUgZmllbGQgc2NvcGUgd2FzIGNoYW5nZWQuXG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5zY29wZSkgJiYgb3B0aW9ucy5zY29wZSAhPT0gdGhpcy5zY29wZSAmJiBpc0NhbGxhYmxlKHRoaXMudmFsaWRhdG9yLnVwZGF0ZSkpIHtcbiAgICB0aGlzLnZhbGlkYXRvci51cGRhdGUodGhpcy5pZCwgeyBzY29wZTogb3B0aW9ucy5zY29wZSB9KTtcbiAgfVxuICB0aGlzLnNjb3BlID0gIWlzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMuc2NvcGUpID8gb3B0aW9ucy5zY29wZVxuICAgIDogIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc2NvcGUpID8gdGhpcy5zY29wZSA6IG51bGw7XG4gIHRoaXMubmFtZSA9ICghaXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5uYW1lKSA/IFN0cmluZyhvcHRpb25zLm5hbWUpIDogb3B0aW9ucy5uYW1lKSB8fCB0aGlzLm5hbWUgfHwgbnVsbDtcbiAgdGhpcy5ydWxlcyA9IG9wdGlvbnMucnVsZXMgIT09IHVuZGVmaW5lZCA/IG5vcm1hbGl6ZVJ1bGVzKG9wdGlvbnMucnVsZXMpIDogdGhpcy5ydWxlcztcbiAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWwgfHwgdGhpcy5tb2RlbDtcbiAgdGhpcy5saXN0ZW4gPSBvcHRpb25zLmxpc3RlbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5saXN0ZW4gOiB0aGlzLmxpc3RlbjtcbiAgdGhpcy5jbGFzc2VzID0gKG9wdGlvbnMuY2xhc3NlcyB8fCB0aGlzLmNsYXNzZXMgfHwgZmFsc2UpICYmICF0aGlzLmNvbXBvbmVudDtcbiAgdGhpcy5jbGFzc05hbWVzID0gaXNPYmplY3Qob3B0aW9ucy5jbGFzc05hbWVzKSA/IG1lcmdlKHRoaXMuY2xhc3NOYW1lcywgb3B0aW9ucy5jbGFzc05hbWVzKSA6IHRoaXMuY2xhc3NOYW1lcztcbiAgdGhpcy5nZXR0ZXIgPSBpc0NhbGxhYmxlKG9wdGlvbnMuZ2V0dGVyKSA/IG9wdGlvbnMuZ2V0dGVyIDogdGhpcy5nZXR0ZXI7XG4gIHRoaXMuX2FsaWFzID0gb3B0aW9ucy5hbGlhcyB8fCB0aGlzLl9hbGlhcztcbiAgdGhpcy5ldmVudHMgPSAob3B0aW9ucy5ldmVudHMpID8gbWFrZUV2ZW50c0FycmF5KG9wdGlvbnMuZXZlbnRzKSA6IHRoaXMuZXZlbnRzO1xuICB0aGlzLmRlbGF5ID0gKG9wdGlvbnMuZGVsYXkpID8gbWFrZURlbGF5T2JqZWN0KHRoaXMuZXZlbnRzLCBvcHRpb25zLmRlbGF5LCB0aGlzLl9kZWxheSkgOiBtYWtlRGVsYXlPYmplY3QodGhpcy5ldmVudHMsIHRoaXMuZGVsYXksIHRoaXMuX2RlbGF5KTtcbiAgdGhpcy51cGRhdGVEZXBlbmRlbmNpZXMoKTtcbiAgdGhpcy5hZGRBY3Rpb25MaXN0ZW5lcnMoKTtcblxuICAvLyB1cGRhdGUgcmVxdWlyZWQgZmxhZyBmbGFnc1xuICBpZiAob3B0aW9ucy5ydWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5mbGFncy5yZXF1aXJlZCA9IHRoaXMuaXNSZXF1aXJlZDtcbiAgfVxuXG4gIC8vIHZhbGlkYXRlIGlmIGl0IHdhcyB2YWxpZGF0ZWQgYmVmb3JlIGFuZCBmaWVsZCB3YXMgdXBkYXRlZCBhbmQgdGhlcmUgd2FzIGEgcnVsZXMgbXV0YXRpb24uXG4gIGlmICh0aGlzLmZsYWdzLnZhbGlkYXRlZCAmJiBvcHRpb25zLnJ1bGVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy51cGRhdGVkKSB7XG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMuaWQpKSk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICB0aGlzLmFkZFZhbHVlTGlzdGVuZXJzKCk7XG5cbiAgLy8gbm8gbmVlZCB0byBjb250aW51ZS5cbiAgaWYgKCF0aGlzLmVsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgdGhpcy51cGRhdGVBcmlhQXR0cnMoKTtcbn07XG5cbi8qKlxuICogUmVzZXRzIGZpZWxkIGZsYWdzIGFuZCBlcnJvcnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgZGVmYXVsdHMgPSBjcmVhdGVGbGFncygpO1xuICBPYmplY3Qua2V5cyh0aGlzLmZsYWdzKS5maWx0ZXIoZnVuY3Rpb24gKGZsYWcpIHsgcmV0dXJuIGZsYWcgIT09ICdyZXF1aXJlZCc7IH0pLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICB0aGlzJDEuZmxhZ3NbZmxhZ10gPSBkZWZhdWx0c1tmbGFnXTtcbiAgfSk7XG5cbiAgdGhpcy5hZGRBY3Rpb25MaXN0ZW5lcnMoKTtcbiAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG4gIHRoaXMudXBkYXRlQ3VzdG9tVmFsaWRpdHkoKTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZmxhZ3MgYW5kIHRoZWlyIG5lZ2F0ZWQgY291bnRlcnBhcnRzLCBhbmQgdXBkYXRlcyB0aGUgY2xhc3NlcyBhbmQgcmUtYWRkcyBhY3Rpb24gbGlzdGVuZXJzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuc2V0RmxhZ3MgPSBmdW5jdGlvbiBzZXRGbGFncyAoZmxhZ3MpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgbmVnYXRlZCA9IHtcbiAgICBwcmlzdGluZTogJ2RpcnR5JyxcbiAgICBkaXJ0eTogJ3ByaXN0aW5lJyxcbiAgICB2YWxpZDogJ2ludmFsaWQnLFxuICAgIGludmFsaWQ6ICd2YWxpZCcsXG4gICAgdG91Y2hlZDogJ3VudG91Y2hlZCcsXG4gICAgdW50b3VjaGVkOiAndG91Y2hlZCcsXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICB0aGlzJDEuZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXTtcbiAgICAvLyBpZiBpdCBoYXMgYSBuZWdhdGlvbiBhbmQgd2FzIG5vdCBzcGVjaWZpZWQsIHNldCBpdCBhcyB3ZWxsLlxuICAgIGlmIChuZWdhdGVkW2ZsYWddICYmIGZsYWdzW25lZ2F0ZWRbZmxhZ11dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMkMS5mbGFnc1tuZWdhdGVkW2ZsYWddXSA9ICFmbGFnc1tmbGFnXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICBmbGFncy51bnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLmRpcnR5ICE9PSB1bmRlZmluZWQgfHxcbiAgICBmbGFncy5wcmlzdGluZSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG4gIH1cbiAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG4gIHRoaXMudXBkYXRlQ3VzdG9tVmFsaWRpdHkoKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZmllbGQgcmVxdWlyZXMgcmVmZXJlbmNlcyB0byB0YXJnZXQgZmllbGRzLlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlRGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gdXBkYXRlRGVwZW5kZW5jaWVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZXNldCBkZXBlbmRlbmNpZXMuXG4gIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZmllbGQuZGVzdHJveSgpOyB9KTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcblxuICAvLyB3ZSBnZXQgdGhlIHNlbGVjdG9ycyBmb3IgZWFjaCBmaWVsZC5cbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMucnVsZXMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgcikge1xuICAgIGlmIChWYWxpZGF0b3IuaXNUYXJnZXRSdWxlKHIpKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSB0aGlzJDEucnVsZXNbcl1bMF07XG4gICAgICBpZiAociA9PT0gJ2NvbmZpcm1lZCcgJiYgIXNlbGVjdG9yKSB7XG4gICAgICAgIHNlbGVjdG9yID0gKHRoaXMkMS5uYW1lKSArIFwiX2NvbmZpcm1hdGlvblwiO1xuICAgICAgfVxuXG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG5hbWU6IHIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZcbiAgfSwgW10pO1xuXG4gIGlmICghZmllbGRzLmxlbmd0aCB8fCAhdGhpcy52bSB8fCAhdGhpcy52bS4kZWwpIHsgcmV0dXJuIH1cblxuICAvLyBtdXN0IGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNhbWUgY29tcG9uZW50LCBzbyB3ZSB1c2UgdGhlIHZtIHJvb3QgZWxlbWVudCBjb25zdHJhaW4gb3VyIGRvbSBzZWFyY2guXG4gIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IHJlZi5zZWxlY3RvcjtcbiAgICAgIHZhciBuYW1lID0gcmVmLm5hbWU7XG5cbiAgICB2YXIgZWwgPSBudWxsO1xuICAgIC8vIHZ1ZSByZWYgc2VsZWN0b3IuXG4gICAgaWYgKHNlbGVjdG9yWzBdID09PSAnJCcpIHtcbiAgICAgIHZhciByZWYkMSA9IHRoaXMkMS52bS4kcmVmc1tzZWxlY3Rvci5zbGljZSgxKV07XG4gICAgICBlbCA9IEFycmF5LmlzQXJyYXkocmVmJDEpID8gcmVmJDFbMF0gOiByZWYkMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdHJ5IHF1ZXJ5IHNlbGVjdG9yXG4gICAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZWwgPSB0aGlzJDEudm0uJGVsLnF1ZXJ5U2VsZWN0b3IoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyBzZWxlY3RvciArIFwiXFxcIl1cIikpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHZtOiB0aGlzJDEudm0sXG4gICAgICBjbGFzc2VzOiB0aGlzJDEuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMkMS5jbGFzc05hbWVzLFxuICAgICAgZGVsYXk6IHRoaXMkMS5kZWxheSxcbiAgICAgIHNjb3BlOiB0aGlzJDEuc2NvcGUsXG4gICAgICBldmVudHM6IHRoaXMkMS5ldmVudHMuam9pbignfCcpLFxuICAgICAgaW5pdGlhbDogdGhpcyQxLmluaXRpYWwsXG4gICAgICB0YXJnZXRPZjogdGhpcyQxLmlkLFxuICAgIH07XG5cbiAgICB0aGlzJDEuZGVwZW5kZW5jaWVzLnB1c2goeyBuYW1lOiBuYW1lLCBmaWVsZDogbmV3IEZpZWxkKG9wdGlvbnMuZWwsIG9wdGlvbnMpIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsaXN0ZW5lcnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51bndhdGNoID0gZnVuY3Rpb24gdW53YXRjaCAodGFnKSB7XG4gICAgaWYgKCB0YWcgPT09IHZvaWQgMCApIHRhZyA9IG51bGw7XG5cbiAgaWYgKCF0YWcpIHtcbiAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gdGFnLnRlc3Qody50YWcpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gIXRhZy50ZXN0KHcudGFnKTsgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQgY2xhc3NlcyBkZXBlbmRpbmcgb24gZWFjaCBmaWVsZCBmbGFnIHN0YXR1cy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXMgPSBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzICgpIHtcbiAgaWYgKCF0aGlzLmNsYXNzZXMgfHwgdGhpcy5pc0Rpc2FibGVkKSB7IHJldHVybiB9XG5cbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLmRpcnR5LCB0aGlzLmZsYWdzLmRpcnR5KTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnByaXN0aW5lLCB0aGlzLmZsYWdzLnByaXN0aW5lKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnRvdWNoZWQsIHRoaXMuZmxhZ3MudG91Y2hlZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy51bnRvdWNoZWQsIHRoaXMuZmxhZ3MudW50b3VjaGVkKTtcbiAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNldCBhbnkgY2xhc3NlcyBpZiB0aGUgc3RhdGUgaXMgdW5kZXRlcm1pbmVkLlxuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuZmxhZ3MudmFsaWQpICYmIHRoaXMuZmxhZ3MudmFsaWRhdGVkKSB7XG4gICAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnZhbGlkLCB0aGlzLmZsYWdzLnZhbGlkKTtcbiAgfVxuXG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQodGhpcy5mbGFncy5pbnZhbGlkKSAmJiB0aGlzLmZsYWdzLnZhbGlkYXRlZCkge1xuICAgIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5pbnZhbGlkLCB0aGlzLmZsYWdzLmludmFsaWQpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGxpc3RlbmVycyByZXF1aXJlZCBmb3IgYXV0b21hdGljIGNsYXNzZXMgYW5kIHNvbWUgZmxhZ3MuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRBY3Rpb25MaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25MaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlbW92ZSBwcmV2aW91cyBsaXN0ZW5lcnMuXG4gIHRoaXMudW53YXRjaCgvY2xhc3MvKTtcblxuICB2YXIgb25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5mbGFncy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MudW50b3VjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMkMS5jbGFzc2VzKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLnRvdWNoZWQsIHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy51bnRvdWNoZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IG5lZWRlZCBvbmNlLlxuICAgIHRoaXMkMS51bndhdGNoKC9eY2xhc3NfYmx1ciQvKTtcbiAgfTtcblxuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICB2YXIgb25JbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMkMS5mbGFncy5wcmlzdGluZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5wcmlzdGluZSwgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5kaXJ0eSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2lucHV0JC8pO1xuICB9O1xuXG4gIGlmICh0aGlzLmNvbXBvbmVudCAmJiBpc0NhbGxhYmxlKHRoaXMuY29tcG9uZW50LiRvbmNlKSkge1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdpbnB1dCcsIG9uSW5wdXQpO1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdibHVyJywgb25CbHVyKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfaW5wdXQnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdjbGFzc19ibHVyJyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKCdibHVyJywgb25CbHVyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIXRoaXMuZWwpIHsgcmV0dXJuIH1cblxuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gIC8vIENoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgb24gTWFjIGRvbid0IGVtaXQgYmx1ciBuYXR1cmFsbHksIHNvIHdlIGxpc3RlbiBvbiBjbGljayBpbnN0ZWFkLlxuICB2YXIgYmx1ckV2ZW50ID0gWydyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodGhpcy5lbC50eXBlKSA9PT0gLTEgPyAnYmx1cicgOiAnY2xpY2snO1xuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoYmx1ckV2ZW50LCBvbkJsdXIpO1xuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2lucHV0JyxcbiAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihpbnB1dEV2ZW50LCBvbklucHV0KTtcbiAgICB9LFxuICB9KTtcblxuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgbGlzdGVuZXJzIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uLlxuICovXG5GaWVsZC5wcm90b3R5cGUuYWRkVmFsdWVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRWYWx1ZUxpc3RlbmVycyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy51bndhdGNoKC9eaW5wdXRfLisvKTtcbiAgaWYgKCF0aGlzLmxpc3RlbikgeyByZXR1cm4gfVxuXG4gIHZhciBmbiA9IHRoaXMudGFyZ2V0T2YgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcyQxLnRhcmdldE9mKSkpO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAvLyBpZiBpdHMgYSBET00gZXZlbnQsIHJlc29sdmUgdGhlIHZhbHVlLCBvdGhlcndpc2UgdXNlIHRoZSBmaXJzdCBwYXJhbWV0ZXIgYXMgdGhlIHZhbHVlLlxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCAoaXNDYWxsYWJsZShFdmVudCkgJiYgYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50KSB8fCAoYXJnc1swXSAmJiBhcmdzWzBdLnNyY0VsZW1lbnQpKSB7XG4gICAgICBhcmdzWzBdID0gdGhpcyQxLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS5pZCkpLCBhcmdzWzBdKTtcbiAgfTtcblxuICB2YXIgaW5wdXRFdmVudCA9IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sYXp5ID8gJ2NoYW5nZScgOiBnZXRJbnB1dEV2ZW50TmFtZSh0aGlzLmVsKTtcbiAgLy8gcmVwbGFjZSBpbnB1dCBldmVudCB3aXRoIHN1aXRhYmxlIG9uZS5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlID09PSAnaW5wdXQnID8gaW5wdXRFdmVudCA6IGVcbiAgfSk7XG5cbiAgLy8gaWYgdGhlcmUgaXMgYSB3YXRjaGFibGUgbW9kZWwgYW5kIGFuIG9uIGlucHV0IHZhbGlkYXRpb24gaXMgcmVxdWVzdGVkLlxuICBpZiAodGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmV4cHJlc3Npb24gJiYgZXZlbnRzLmluZGV4T2YoaW5wdXRFdmVudCkgIT09IC0xKSB7XG4gICAgdmFyIGRlYm91bmNlZEZuID0gZGVib3VuY2UoZm4sIHRoaXMuZGVsYXlbaW5wdXRFdmVudF0pO1xuICAgIHZhciB1bndhdGNoID0gdGhpcy52bS4kd2F0Y2godGhpcy5tb2RlbC5leHByZXNzaW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHRoaXMkMS5mbGFncy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgIGRlYm91bmNlZEZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfSk7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2lucHV0X21vZGVsJyxcbiAgICAgIHVud2F0Y2g6IHVud2F0Y2gsXG4gICAgfSk7XG4gICAgLy8gZmlsdGVyIG91dCBpbnB1dCBldmVudCBhcyBpdCBpcyBhbHJlYWR5IGhhbmRsZWQgYnkgdGhlIHdhdGNoZXIgQVBJLlxuICAgIGV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IGlucHV0RXZlbnQ7IH0pO1xuICB9XG5cbiAgLy8gQWRkIGV2ZW50cy5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZGVib3VuY2VkRm4gPSBkZWJvdW5jZShmbiwgdGhpcyQxLmRlbGF5W2VdKTtcbiAgICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHRoaXMkMS5mbGFncy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgIGRlYm91bmNlZEZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIHRoaXMkMS5fYWRkQ29tcG9uZW50RXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgdGhpcyQxLl9hZGRIVE1MRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gIH0pO1xufTtcblxuRmllbGQucHJvdG90eXBlLl9hZGRDb21wb25lbnRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZENvbXBvbmVudEV2ZW50TGlzdGVuZXIgKGV2dCwgdmFsaWRhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoIXRoaXMuY29tcG9uZW50KSB7IHJldHVybiB9XG5cbiAgdGhpcy5jb21wb25lbnQuJG9uKGV2dCwgdmFsaWRhdGUpO1xuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2lucHV0X3Z1ZScsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKGV2dCwgdmFsaWRhdGUpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuRmllbGQucHJvdG90eXBlLl9hZGRIVE1MRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9hZGRIVE1MRXZlbnRMaXN0ZW5lciAoZXZ0LCB2YWxpZGF0ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5lbCkgeyByZXR1cm4gfVxuXG4gIGlmICh+WydyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodGhpcy5lbC50eXBlKSkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKHRoaXMuZWwubmFtZSkgKyBcIlxcXCJdXCIpKTtcbiAgICB0b0FycmF5KGVscykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCB2YWxpZGF0ZSk7XG4gICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgIHRhZzogJ2lucHV0X25hdGl2ZScsXG4gICAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgdmFsaWRhdGUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIHZhbGlkYXRlKTtcbiAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICB0YWc6ICdpbnB1dF9uYXRpdmUnLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgdmFsaWRhdGUpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGFyaWEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudC5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUFyaWFBdHRycyA9IGZ1bmN0aW9uIHVwZGF0ZUFyaWFBdHRycyAoKSB7XG4gIGlmICghdGhpcy5hcmlhIHx8ICF0aGlzLmVsIHx8ICFpc0NhbGxhYmxlKHRoaXMuZWwuc2V0QXR0cmlidXRlKSkgeyByZXR1cm4gfVxuXG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgdGhpcy5pc1JlcXVpcmVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0aGlzLmZsYWdzLmludmFsaWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgY3VzdG9tIHZhbGlkaXR5IGZvciB0aGUgZmllbGQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVDdXN0b21WYWxpZGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbVZhbGlkaXR5ICgpIHtcbiAgaWYgKCF0aGlzLnZhbGlkaXR5IHx8ICF0aGlzLmVsIHx8ICFpc0NhbGxhYmxlKHRoaXMuZWwuc2V0Q3VzdG9tVmFsaWRpdHkpKSB7IHJldHVybiB9XG5cbiAgdGhpcy5lbC5zZXRDdXN0b21WYWxpZGl0eSh0aGlzLmZsYWdzLnZhbGlkID8gJycgOiAodGhpcy52YWxpZGF0b3IuZXJyb3JzLmZpcnN0QnlJZCh0aGlzLmlkKSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMudW53YXRjaCgpO1xuICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZpZWxkLmRlc3Ryb3koKTsgfSk7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuLy8gXG5cbnZhciBGaWVsZEJhZyA9IGZ1bmN0aW9uIEZpZWxkQmFnICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBsZW5ndGg6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50IGl0ZW1zIGxlbmd0aC5cbiAqL1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5sZW5ndGguZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGhcbn07XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QuXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCQxIChtYXRjaGVyKSB7XG4gIHJldHVybiBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pXG59O1xuXG4vKipcbiAqIEZpbHRlcnMgdGhlIGl0ZW1zIGRvd24gdG8gdGhlIG1hdGNoZWQgZmllbGRzLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gZmlsdGVyIChtYXRjaGVyKSB7XG4gIC8vIG11bHRpcGxlIG1hdGNoZXJzIHRvIGJlIHRyaWVkLlxuICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaGVyKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gbWF0Y2hlci5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobSk7IH0pOyB9KVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pXG59O1xuXG4vKipcbiAqIE1hcHMgdGhlIGZpZWxkIGl0ZW1zIHVzaW5nIHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwIChtYXBwZXIpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKG1hcHBlcilcbn07XG5cbi8qKlxuICogRmluZHMgYW5kIHJlbW92ZXMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QsIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbS5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobWF0Y2hlcikge1xuICB2YXIgaXRlbSA9IG51bGw7XG4gIGlmIChtYXRjaGVyIGluc3RhbmNlb2YgRmllbGQpIHtcbiAgICBpdGVtID0gbWF0Y2hlcjtcbiAgfSBlbHNlIHtcbiAgICBpdGVtID0gdGhpcy5maW5kKG1hdGNoZXIpO1xuICB9XG5cbiAgaWYgKCFpdGVtKSB7IHJldHVybiBudWxsIH1cblxuICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICByZXR1cm4gaXRlbVxufTtcblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgaXRlbSB0byB0aGUgbGlzdC5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChpdGVtKSB7XG4gIGlmICghIChpdGVtIGluc3RhbmNlb2YgRmllbGQpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkQmFnIG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRmllbGQgdGhhdCBoYXMgYW4gaWQgZGVmaW5lZC4nKVxuICB9XG5cbiAgaWYgKCFpdGVtLmlkKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkIGlkIG11c3QgYmUgZGVmaW5lZC4nKVxuICB9XG5cbiAgaWYgKHRoaXMuZmluZCh7IGlkOiBpdGVtLmlkIH0pKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoKFwiRmllbGQgd2l0aCBpZCBcIiArIChpdGVtLmlkKSArIFwiIGlzIGFscmVhZHkgYWRkZWQuXCIpKVxuICB9XG5cbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEZpZWxkQmFnLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxuLy8gXG5cbnZhciBMT0NBTEUgPSAnZW4nO1xuXG52YXIgRGljdGlvbmFyeSA9IGZ1bmN0aW9uIERpY3Rpb25hcnkgKGRpY3Rpb25hcnkpIHtcbiAgaWYgKCBkaWN0aW9uYXJ5ID09PSB2b2lkIDAgKSBkaWN0aW9uYXJ5ID0ge307XG5cbiAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgdGhpcy5tZXJnZShkaWN0aW9uYXJ5KTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMiA9IHsgbG9jYWxlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQyLmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBMT0NBTEVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQyLmxvY2FsZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgTE9DQUxFID0gdmFsdWUgfHwgJ2VuJztcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0xvY2FsZSA9IGZ1bmN0aW9uIGhhc0xvY2FsZSAobG9jYWxlKSB7XG4gIHJldHVybiAhIXRoaXMuY29udGFpbmVyW2xvY2FsZV1cbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBzZXREYXRlRm9ybWF0IChsb2NhbGUsIGZvcm1hdCkge1xuICBpZiAoIXRoaXMuY29udGFpbmVyW2xvY2FsZV0pIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge307XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQgPSBmb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gZ2V0RGF0ZUZvcm1hdCAobG9jYWxlKSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSB8fCAhdGhpcy5jb250YWluZXJbbG9jYWxlXS5kYXRlRm9ybWF0KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXRcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgZGF0YSkge1xuICB2YXIgbWVzc2FnZSA9IG51bGw7XG4gIGlmICghdGhpcy5oYXNNZXNzYWdlKGxvY2FsZSwga2V5KSkge1xuICAgIG1lc3NhZ2UgPSB0aGlzLl9nZXREZWZhdWx0TWVzc2FnZShsb2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2UgPSB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV07XG4gIH1cblxuICByZXR1cm4gaXNDYWxsYWJsZShtZXNzYWdlKSA/IG1lc3NhZ2UuYXBwbHkodm9pZCAwLCBkYXRhKSA6IG1lc3NhZ2Vcbn07XG5cbi8qKlxuICogR2V0cyBhIHNwZWNpZmljIG1lc3NhZ2UgZm9yIGZpZWxkLiBmYWxscyBiYWNrIHRvIHRoZSBydWxlIG1lc3NhZ2UuXG4gKi9cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldEZpZWxkTWVzc2FnZSA9IGZ1bmN0aW9uIGdldEZpZWxkTWVzc2FnZSAobG9jYWxlLCBmaWVsZCwga2V5LCBkYXRhKSB7XG4gIGlmICghdGhpcy5oYXNMb2NhbGUobG9jYWxlKSkge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXksIGRhdGEpXG4gIH1cblxuICB2YXIgZGljdCA9IHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tICYmIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tW2ZpZWxkXTtcbiAgaWYgKCFkaWN0IHx8ICFkaWN0W2tleV0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlKGxvY2FsZSwga2V5LCBkYXRhKVxuICB9XG5cbiAgdmFyIG1lc3NhZ2UgPSBkaWN0W2tleV07XG4gIHJldHVybiBpc0NhbGxhYmxlKG1lc3NhZ2UpID8gbWVzc2FnZS5hcHBseSh2b2lkIDAsIGRhdGEpIDogbWVzc2FnZVxufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX2dldERlZmF1bHRNZXNzYWdlID0gZnVuY3Rpb24gX2dldERlZmF1bHRNZXNzYWdlIChsb2NhbGUpIHtcbiAgaWYgKHRoaXMuaGFzTWVzc2FnZShsb2NhbGUsICdfZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMuX2RlZmF1bHRcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lci5lbi5tZXNzYWdlcy5fZGVmYXVsdFxufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgZmFsbGJhY2spIHtcbiAgICBpZiAoIGZhbGxiYWNrID09PSB2b2lkIDAgKSBmYWxsYmFjayA9ICcnO1xuXG4gIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrXG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV1cbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc01lc3NhZ2UgPSBmdW5jdGlvbiBoYXNNZXNzYWdlIChsb2NhbGUsIGtleSkge1xuICByZXR1cm4gISEgKFxuICAgIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldXG4gIClcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZSAobG9jYWxlLCBrZXkpIHtcbiAgcmV0dXJuICEhIChcbiAgICB0aGlzLmhhc0xvY2FsZShsb2NhbGUpICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV1cbiAgKVxufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSQxIChkaWN0aW9uYXJ5KSB7XG4gIG1lcmdlKHRoaXMuY29udGFpbmVyLCBkaWN0aW9uYXJ5KTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbiBzZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgbWVzc2FnZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIH07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV0gPSBtZXNzYWdlO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gc2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgYXR0cmlidXRlKSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge1xuICAgICAgbWVzc2FnZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldID0gYXR0cmlidXRlO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIERpY3Rpb25hcnkucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMiApO1xuXG4vLyBcblxudmFyIG5vcm1hbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZShmdW5jdGlvbiAocHJldiwga2V5KSB7XG4gICAgICBwcmV2W2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZVtrZXldKTtcblxuICAgICAgcmV0dXJuIHByZXZcbiAgICB9LCB7fSlcbiAgfVxuXG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZSgnezB9JywgWyd7MX0nLCAnezJ9JywgJ3szfSddKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59O1xuXG52YXIgbm9ybWFsaXplRm9ybWF0ID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAvLyBub3JtYWxpemUgbWVzc2FnZXNcbiAgdmFyIG1lc3NhZ2VzID0gbm9ybWFsaXplVmFsdWUobG9jYWxlLm1lc3NhZ2VzKTtcbiAgdmFyIGN1c3RvbSA9IG5vcm1hbGl6ZVZhbHVlKGxvY2FsZS5jdXN0b20pO1xuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgIGN1c3RvbTogY3VzdG9tLFxuICAgIGF0dHJpYnV0ZXM6IGxvY2FsZS5hdHRyaWJ1dGVzLFxuICAgIGRhdGVGb3JtYXQ6IGxvY2FsZS5kYXRlRm9ybWF0LFxuICB9XG59O1xuXG52YXIgSTE4bkRpY3Rpb25hcnkgPSBmdW5jdGlvbiBJMThuRGljdGlvbmFyeSAoaTE4biwgcm9vdEtleSkge1xuICB0aGlzLmkxOG4gPSBpMThuO1xuICB0aGlzLnJvb3RLZXkgPSByb290S2V5O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQzID0geyBsb2NhbGU6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDMubG9jYWxlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaTE4bi5sb2NhbGVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQzLmxvY2FsZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgd2FybignQ2Fubm90IHNldCBsb2NhbGUgZnJvbSB0aGUgdmFsaWRhdG9yIHdoZW4gdXNpbmcgdnVlLWkxOG4sIHVzZSBpMThuLmxvY2FsZSBzZXR0ZXIgaW5zdGVhZCcpO1xufTtcblxuSTE4bkRpY3Rpb25hcnkucHJvdG90eXBlLmdldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBnZXREYXRlRm9ybWF0IChsb2NhbGUpIHtcbiAgcmV0dXJuIHRoaXMuaTE4bi5nZXREYXRlVGltZUZvcm1hdChsb2NhbGUgfHwgdGhpcy5sb2NhbGUpXG59O1xuXG5JMThuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHNldERhdGVGb3JtYXQgKGxvY2FsZSwgdmFsdWUpIHtcbiAgdGhpcy5pMThuLnNldERhdGVUaW1lRm9ybWF0KGxvY2FsZSB8fCB0aGlzLmxvY2FsZSwgdmFsdWUpO1xufTtcblxuSTE4bkRpY3Rpb25hcnkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgZGF0YSkge1xuICB2YXIgcGF0aCA9ICh0aGlzLnJvb3RLZXkpICsgXCIubWVzc2FnZXMuXCIgKyBrZXk7XG4gIGlmICghdGhpcy5pMThuLnRlKHBhdGgpKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi50KCgodGhpcy5yb290S2V5KSArIFwiLm1lc3NhZ2VzLl9kZWZhdWx0XCIpLCBsb2NhbGUsIGRhdGEpXG4gIH1cblxuICByZXR1cm4gdGhpcy5pMThuLnQocGF0aCwgbG9jYWxlLCBkYXRhKVxufTtcblxuSTE4bkRpY3Rpb25hcnkucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIGZhbGxiYWNrKSB7XG4gICAgaWYgKCBmYWxsYmFjayA9PT0gdm9pZCAwICkgZmFsbGJhY2sgPSAnJztcblxuICB2YXIgcGF0aCA9ICh0aGlzLnJvb3RLZXkpICsgXCIuYXR0cmlidXRlcy5cIiArIGtleTtcbiAgaWYgKCF0aGlzLmkxOG4udGUocGF0aCkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2tcbiAgfVxuXG4gIHJldHVybiB0aGlzLmkxOG4udChwYXRoLCBsb2NhbGUpXG59O1xuXG5JMThuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0RmllbGRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0RmllbGRNZXNzYWdlIChsb2NhbGUsIGZpZWxkLCBrZXksIGRhdGEpIHtcbiAgdmFyIHBhdGggPSAodGhpcy5yb290S2V5KSArIFwiLmN1c3RvbS5cIiArIGZpZWxkICsgXCIuXCIgKyBrZXk7XG4gIGlmICh0aGlzLmkxOG4udGUocGF0aCkpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLnQocGF0aClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXksIGRhdGEpXG59O1xuXG5JMThuRGljdGlvbmFyeS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSQxIChkaWN0aW9uYXJ5KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgT2JqZWN0LmtleXMoZGljdGlvbmFyeSkuZm9yRWFjaChmdW5jdGlvbiAobG9jYWxlS2V5KSB7XG4gICAgICB2YXIgb2JqO1xuXG4gICAgLy8gaTE4biBkb2Vzbid0IGRlZXAgbWVyZ2VcbiAgICAvLyBmaXJzdCBjbG9uZSB0aGUgZXhpc3RpbmcgbG9jYWxlIChhdm9pZCBtdXRhdGlvbnMgdG8gbG9jYWxlKVxuICAgIHZhciBjbG9uZSA9IG1lcmdlKHt9LCBnZXRQYXRoKChsb2NhbGVLZXkgKyBcIi5cIiArICh0aGlzJDEucm9vdEtleSkpLCB0aGlzJDEuaTE4bi5tZXNzYWdlcywge30pKTtcbiAgICAvLyBNZXJnZSBjbG9uZWQgbG9jYWxlIHdpdGggbmV3IG9uZVxuICAgIHZhciBsb2NhbGUgPSBtZXJnZShjbG9uZSwgbm9ybWFsaXplRm9ybWF0KGRpY3Rpb25hcnlbbG9jYWxlS2V5XSkpO1xuICAgIHRoaXMkMS5pMThuLm1lcmdlTG9jYWxlTWVzc2FnZShsb2NhbGVLZXksICggb2JqID0ge30sIG9ialt0aGlzJDEucm9vdEtleV0gPSBsb2NhbGUsIG9iaikpO1xuICAgIGlmIChsb2NhbGUuZGF0ZUZvcm1hdCkge1xuICAgICAgdGhpcyQxLmkxOG4uc2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlS2V5LCBsb2NhbGUuZGF0ZUZvcm1hdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbkkxOG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRNZXNzYWdlID0gZnVuY3Rpb24gc2V0TWVzc2FnZSAobG9jYWxlLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG9iaiwgb2JqJDE7XG5cbiAgdGhpcy5tZXJnZSgoIG9iaiQxID0ge30sIG9iaiQxW2xvY2FsZV0gPSB7XG4gICAgICBtZXNzYWdlczogKCBvYmogPSB7fSwgb2JqW2tleV0gPSB2YWx1ZSwgb2JqKSxcbiAgICB9LCBvYmokMSkpO1xufTtcblxuSTE4bkRpY3Rpb25hcnkucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG9iaiwgb2JqJDE7XG5cbiAgdGhpcy5tZXJnZSgoIG9iaiQxID0ge30sIG9iaiQxW2xvY2FsZV0gPSB7XG4gICAgICBhdHRyaWJ1dGVzOiAoIG9iaiA9IHt9LCBvYmpba2V5XSA9IHZhbHVlLCBvYmopLFxuICAgIH0sIG9iaiQxKSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggSTE4bkRpY3Rpb25hcnkucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMyApO1xuXG4vLyBcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgZGVsYXk6IDAsXG4gIGVycm9yQmFnTmFtZTogJ2Vycm9ycycsXG4gIGRpY3Rpb25hcnk6IG51bGwsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZmllbGRzQmFnTmFtZTogJ2ZpZWxkcycsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICBjbGFzc05hbWVzOiBudWxsLFxuICBldmVudHM6ICdpbnB1dHxibHVyJyxcbiAgaW5qZWN0OiB0cnVlLFxuICBmYXN0RXhpdDogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgdmFsaWRpdHk6IGZhbHNlLFxuICBpMThuOiBudWxsLFxuICBpMThuUm9vdEtleTogJ3ZhbGlkYXRpb24nLFxufTtcblxudmFyIGN1cnJlbnRDb25maWcgPSBhc3NpZ24oe30sIGRlZmF1bHRDb25maWcpO1xudmFyIGRlcGVuZGVuY2llcyA9IHtcbiAgZGljdGlvbmFyeTogbmV3IERpY3Rpb25hcnkoe1xuICAgIGVuOiB7XG4gICAgICBtZXNzYWdlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIGN1c3RvbToge30sXG4gICAgfSxcbiAgfSksXG59O1xuXG52YXIgQ29uZmlnID0gZnVuY3Rpb24gQ29uZmlnICgpIHt9O1xuXG52YXIgc3RhdGljQWNjZXNzb3JzID0geyBkZWZhdWx0OiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGN1cnJlbnQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuc3RhdGljQWNjZXNzb3JzLmRlZmF1bHQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmYXVsdENvbmZpZ1xufTtcblxuc3RhdGljQWNjZXNzb3JzLmN1cnJlbnQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudENvbmZpZ1xufTtcblxuQ29uZmlnLmRlcGVuZGVuY3kgPSBmdW5jdGlvbiBkZXBlbmRlbmN5IChrZXkpIHtcbiAgcmV0dXJuIGRlcGVuZGVuY2llc1trZXldXG59O1xuXG4vKipcbiAqIE1lcmdlcyB0aGUgY29uZmlnIHdpdGggYSBuZXcgb25lLlxuICovXG5Db25maWcubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSQkMSAoY29uZmlnKSB7XG4gIGN1cnJlbnRDb25maWcgPSBhc3NpZ24oe30sIGN1cnJlbnRDb25maWcsIGNvbmZpZyk7XG4gIGlmIChjdXJyZW50Q29uZmlnLmkxOG4pIHtcbiAgICBDb25maWcucmVnaXN0ZXIoJ2RpY3Rpb25hcnknLCBuZXcgSTE4bkRpY3Rpb25hcnkoY3VycmVudENvbmZpZy5pMThuLCBjdXJyZW50Q29uZmlnLmkxOG5Sb290S2V5KSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgZGVwZW5kZW5jeS5cbiAqL1xuQ29uZmlnLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIgKGtleSwgdmFsdWUpIHtcbiAgZGVwZW5kZW5jaWVzW2tleV0gPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHdvcmtpbmcgY29uZmlnIGZyb20gYSBWdWUgaW5zdGFuY2UuXG4gKi9cbkNvbmZpZy5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSAoY29udGV4dCkge1xuICB2YXIgc2VsZkNvbmZpZyA9IGdldFBhdGgoJyRvcHRpb25zLiRfcmVlVmFsaWRhdGUnLCBjb250ZXh0LCB7fSk7XG5cbiAgcmV0dXJuIGFzc2lnbih7fSwgQ29uZmlnLmN1cnJlbnQsIHNlbGZDb25maWcpXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggQ29uZmlnLCBzdGF0aWNBY2Nlc3NvcnMgKTtcblxuLy8gXG5cbnZhciBSVUxFUyA9IHt9O1xudmFyIFNUUklDVF9NT0RFID0gdHJ1ZTtcbnZhciBUQVJHRVRfUlVMRVMgPSBbJ2NvbmZpcm1lZCcsICdhZnRlcicsICdiZWZvcmUnXTtcbnZhciBFUlJPUlMgPSBbXTsgLy8gSE9MRCBlcnJvcnMgcmVmZXJlbmNlcyB0byB0cmlnZ2VyIHJlZ2VuZXJhdGlvbi5cblxudmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvciAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHsgdm06IG51bGwsIGZhc3RFeGl0OiB0cnVlIH07XG5cbiAgdGhpcy5zdHJpY3QgPSBTVFJJQ1RfTU9ERTtcbiAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JCYWcoKTtcblxuICAvLyBXZSBhcmUgcnVubmluZyBpbiBTU1IgTW9kZS4gRG8gbm90IGtlZXAgYSByZWZlcmVuY2UuIEl0IHByZXZlbnQgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBFUlJPUlMucHVzaCh0aGlzLmVycm9ycyk7XG4gIH1cbiAgdGhpcy5maWVsZHMgPSBuZXcgRmllbGRCYWcoKTtcbiAgdGhpcy5mbGFncyA9IHt9O1xuICB0aGlzLl9jcmVhdGVGaWVsZHModmFsaWRhdGlvbnMpO1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmZhc3RFeGl0ID0gb3B0aW9ucy5mYXN0RXhpdCB8fCBmYWxzZTtcbiAgdGhpcy5vd25lcklkID0gb3B0aW9ucy52bSAmJiBvcHRpb25zLnZtLl91aWQ7XG4gIC8vIGNyZWF0ZSBpdCBzdGF0aWNhbGx5IHNpbmNlIHdlIGRvbid0IG5lZWQgY29uc3RhbnQgYWNjZXNzIHRvIHRoZSB2bS5cbiAgdGhpcy5yZXNldCA9IG9wdGlvbnMudm0gJiYgaXNDYWxsYWJsZShvcHRpb25zLnZtLiRuZXh0VGljaykgPyBmdW5jdGlvbiAobWF0Y2hlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgb3B0aW9ucy52bS4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBvcHRpb25zLnZtLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzJDEuX3Jlc2V0KG1hdGNoZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9IDogdGhpcy5fcmVzZXQ7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDQgPSB7IGRpY3Rpb25hcnk6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sbG9jYWxlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LHJ1bGVzOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG52YXIgc3RhdGljQWNjZXNzb3JzJDEgPSB7IGRpY3Rpb25hcnk6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sbG9jYWxlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LHJ1bGVzOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgZGljdGlvbmFyeS5cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDQuZGljdGlvbmFyeS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBDb25maWcuZGVwZW5kZW5jeSgnZGljdGlvbmFyeScpXG59O1xuXG4vKipcbiAqIFN0YXRpYyBHZXR0ZXIgZm9yIHRoZSBkaWN0aW9uYXJ5LlxuICovXG5zdGF0aWNBY2Nlc3NvcnMkMS5kaWN0aW9uYXJ5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIENvbmZpZy5kZXBlbmRlbmN5KCdkaWN0aW9uYXJ5Jylcbn07XG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgY3VycmVudCBsb2NhbGUuXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQ0LmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmRpY3Rpb25hcnkubG9jYWxlXG59O1xuXG4vKipcbiAqIFNldHRlciBmb3IgdGhlIHZhbGlkYXRvciBsb2NhbGUuXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQ0LmxvY2FsZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgVmFsaWRhdG9yLmxvY2FsZSA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBTdGF0aWMgZ2V0dGVyIGZvciB0aGUgdmFsaWRhdG9yIGxvY2FsZS5cbiAqL1xuc3RhdGljQWNjZXNzb3JzJDEubG9jYWxlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFZhbGlkYXRvci5kaWN0aW9uYXJ5LmxvY2FsZVxufTtcblxuLyoqXG4gKiBTdGF0aWMgc2V0dGVyIGZvciB0aGUgdmFsaWRhdG9yIGxvY2FsZS5cbiAqL1xuc3RhdGljQWNjZXNzb3JzJDEubG9jYWxlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgaGFzQ2hhbmdlZCA9IHZhbHVlICE9PSBWYWxpZGF0b3IuZGljdGlvbmFyeS5sb2NhbGU7XG4gIFZhbGlkYXRvci5kaWN0aW9uYXJ5LmxvY2FsZSA9IHZhbHVlO1xuICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgIFZhbGlkYXRvci5yZWdlbmVyYXRlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgcnVsZXMgb2JqZWN0LlxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkNC5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSVUxFU1xufTtcblxuLyoqXG4gKiBTdGF0aWMgR2V0dGVyIGZvciB0aGUgcnVsZXMgb2JqZWN0LlxuICovXG5zdGF0aWNBY2Nlc3NvcnMkMS5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSVUxFU1xufTtcblxuLyoqXG4gKiBTdGF0aWMgY29uc3RydWN0b3IuXG4gKi9cblZhbGlkYXRvci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgVmFsaWRhdG9yKHZhbGlkYXRpb25zLCBvcHRpb25zKVxufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICovXG5WYWxpZGF0b3IuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBWYWxpZGF0b3IuX2d1YXJkRXh0ZW5kKG5hbWUsIHZhbGlkYXRvcik7XG4gIFZhbGlkYXRvci5fbWVyZ2UobmFtZSwgdmFsaWRhdG9yKTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oYXNUYXJnZXQpIHtcbiAgICBUQVJHRVRfUlVMRVMucHVzaChuYW1lKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWdlbmVyYXRlcyBlcnJvciBtZXNzYWdlcyBhY3Jvc3MgYWxsIHZhbGlkYXRvcnMuXG4gKi9cblZhbGlkYXRvci5yZWdlbmVyYXRlID0gZnVuY3Rpb24gcmVnZW5lcmF0ZSAoKSB7XG4gIEVSUk9SUy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvckJhZykgeyByZXR1cm4gZXJyb3JCYWcucmVnZW5lcmF0ZSgpOyB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHJ1bGUgZnJvbSB0aGUgbGlzdCBvZiB2YWxpZGF0b3JzLlxuICovXG5WYWxpZGF0b3IucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gIGRlbGV0ZSBSVUxFU1tuYW1lXTtcbiAgdmFyIGlkeCA9IFRBUkdFVF9SVUxFUy5pbmRleE9mKG5hbWUpO1xuICBpZiAoaWR4ID09PSAtMSkgeyByZXR1cm4gfVxuXG4gIFRBUkdFVF9SVUxFUy5zcGxpY2UoaWR4LCAxKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBydWxlIG5hbWUgaXMgYSBydWxlIHRoYXQgdGFyZ2V0cyBvdGhlciBmaWVsZHMuXG4gKi9cblZhbGlkYXRvci5pc1RhcmdldFJ1bGUgPSBmdW5jdGlvbiBpc1RhcmdldFJ1bGUgKG5hbWUpIHtcbiAgcmV0dXJuIFRBUkdFVF9SVUxFUy5pbmRleE9mKG5hbWUpICE9PSAtMVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBvcGVyYXRpbmcgbW9kZSBmb3IgYWxsIG5ld2x5IGNyZWF0ZWQgdmFsaWRhdG9ycy5cbiAqIHN0cmljdE1vZGUgPSB0cnVlOiBWYWx1ZXMgd2l0aG91dCBhIHJ1bGUgYXJlIGludmFsaWQgYW5kIGNhdXNlIGZhaWx1cmUuXG4gKiBzdHJpY3RNb2RlID0gZmFsc2U6IFZhbHVlcyB3aXRob3V0IGEgcnVsZSBhcmUgdmFsaWQgYW5kIGFyZSBza2lwcGVkLlxuICovXG5WYWxpZGF0b3Iuc2V0U3RyaWN0TW9kZSA9IGZ1bmN0aW9uIHNldFN0cmljdE1vZGUgKHN0cmljdE1vZGUpIHtcbiAgICBpZiAoIHN0cmljdE1vZGUgPT09IHZvaWQgMCApIHN0cmljdE1vZGUgPSB0cnVlO1xuXG4gIFNUUklDVF9NT0RFID0gc3RyaWN0TW9kZTtcbn07XG5cbi8qKlxuICogQWRkcyBhbmQgc2V0cyB0aGUgY3VycmVudCBsb2NhbGUgZm9yIHRoZSB2YWxpZGF0b3IuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUubG9jYWxpemUgPSBmdW5jdGlvbiBsb2NhbGl6ZSAobGFuZywgZGljdGlvbmFyeSkge1xuICBWYWxpZGF0b3IubG9jYWxpemUobGFuZywgZGljdGlvbmFyeSk7XG59O1xuXG4vKipcbiAqIEFkZHMgYW5kIHNldHMgdGhlIGN1cnJlbnQgbG9jYWxlIGZvciB0aGUgdmFsaWRhdG9yLlxuICovXG5WYWxpZGF0b3IubG9jYWxpemUgPSBmdW5jdGlvbiBsb2NhbGl6ZSAobGFuZywgZGljdGlvbmFyeSkge1xuICAgIHZhciBvYmo7XG5cbiAgaWYgKGlzT2JqZWN0KGxhbmcpKSB7XG4gICAgVmFsaWRhdG9yLmRpY3Rpb25hcnkubWVyZ2UobGFuZyk7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBtZXJnZSB0aGUgZGljdGlvbmFyeS5cbiAgaWYgKGRpY3Rpb25hcnkpIHtcbiAgICB2YXIgbG9jYWxlID0gbGFuZyB8fCBkaWN0aW9uYXJ5Lm5hbWU7XG4gICAgZGljdGlvbmFyeSA9IGFzc2lnbih7fSwgZGljdGlvbmFyeSk7XG4gICAgVmFsaWRhdG9yLmRpY3Rpb25hcnkubWVyZ2UoKCBvYmogPSB7fSwgb2JqW2xvY2FsZV0gPSBkaWN0aW9uYXJ5LCBvYmopKTtcbiAgfVxuXG4gIGlmIChsYW5nKSB7XG4gICAgLy8gc2V0IHRoZSBsb2NhbGUuXG4gICAgVmFsaWRhdG9yLmxvY2FsZSA9IGxhbmc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgZmllbGQgdG8gYmUgdmFsaWRhdGVkLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAoZmllbGQpIHtcbiAgLy8gZGVwcmVjYXRlOiBoYW5kbGUgb2xkIHNpZ25hdHVyZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgd2FybignVGhpcyBzaWduYXR1cmUgb2YgdGhlIGF0dGFjaCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgcGxlYXNlIGNvbnN1bHQgdGhlIGRvY3MuJyk7XG4gICAgZmllbGQgPSBhc3NpZ24oe30sIHtcbiAgICAgIG5hbWU6IGFyZ3VtZW50c1swXSxcbiAgICAgIHJ1bGVzOiBhcmd1bWVudHNbMV0sXG4gICAgfSwgYXJndW1lbnRzWzJdIHx8IHsgdm06IHsgJHZhbGlkYXRvcjogdGhpcyB9IH0pO1xuICB9XG5cbiAgLy8gZml4ZXMgaW5pdGlhbCB2YWx1ZSBkZXRlY3Rpb24gd2l0aCB2LW1vZGVsIGFuZCBzZWxlY3QgZWxlbWVudHMuXG4gIHZhciB2YWx1ZSA9IGZpZWxkLmluaXRpYWxWYWx1ZTtcbiAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICBmaWVsZCA9IG5ldyBGaWVsZChmaWVsZC5lbCB8fCBudWxsLCBmaWVsZCk7XG4gIH1cblxuICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcblxuICAvLyB2YWxpZGF0ZSB0aGUgZmllbGQgaW5pdGlhbGx5XG4gIGlmIChmaWVsZC5pbml0aWFsKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgoXCIjXCIgKyAoZmllbGQuaWQpKSwgdmFsdWUgfHwgZmllbGQudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3ZhbGlkYXRlKGZpZWxkLCB2YWx1ZSB8fCBmaWVsZC52YWx1ZSwgdHJ1ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBmaWVsZC5mbGFncy52YWxpZCA9IHJlc3VsdC52YWxpZDtcbiAgICAgIGZpZWxkLmZsYWdzLmludmFsaWQgPSAhcmVzdWx0LnZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5fYWRkRmxhZyhmaWVsZCwgZmllbGQuc2NvcGUpO1xuICByZXR1cm4gZmllbGRcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZmxhZ3Mgb24gYSBmaWVsZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5mbGFnID0gZnVuY3Rpb24gZmxhZyAobmFtZSwgZmxhZ3MpIHtcbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUpO1xuICBpZiAoIWZpZWxkIHx8ICFmbGFncykge1xuICAgIHJldHVyblxuICB9XG5cbiAgZmllbGQuc2V0RmxhZ3MoZmxhZ3MpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgZmllbGQgZnJvbSB0aGUgdmFsaWRhdG9yLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCAobmFtZSwgc2NvcGUpIHtcbiAgdmFyIGZpZWxkID0gbmFtZSBpbnN0YW5jZW9mIEZpZWxkID8gbmFtZSA6IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmICghZmllbGQpIHsgcmV0dXJuIH1cblxuICBmaWVsZC5kZXN0cm95KCk7XG4gIHRoaXMuZXJyb3JzLnJlbW92ZShmaWVsZC5uYW1lLCBmaWVsZC5zY29wZSwgZmllbGQuaWQpO1xuICB0aGlzLmZpZWxkcy5yZW1vdmUoZmllbGQpO1xuICB2YXIgZmxhZ3MgPSB0aGlzLmZsYWdzO1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkLnNjb3BlKSAmJiBmbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0pIHtcbiAgICBkZWxldGUgZmxhZ3NbKFwiJFwiICsgKGZpZWxkLnNjb3BlKSldW2ZpZWxkLm5hbWVdO1xuICB9IGVsc2UgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkLnNjb3BlKSkge1xuICAgIGRlbGV0ZSBmbGFnc1tmaWVsZC5uYW1lXTtcbiAgfVxuXG4gIHRoaXMuZmxhZ3MgPSBhc3NpZ24oe30sIGZsYWdzKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGN1c3RvbSB2YWxpZGF0b3IgdG8gdGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBydWxlcy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKG5hbWUsIHZhbGlkYXRvciwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIFZhbGlkYXRvci5leHRlbmQobmFtZSwgdmFsaWRhdG9yLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhIGZpZWxkLCB1cGRhdGluZyBib3RoIGVycm9ycyBhbmQgZmxhZ3MuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChpZCwgcmVmKSB7XG4gICAgdmFyIHNjb3BlID0gcmVmLnNjb3BlO1xuXG4gIHZhciBmaWVsZCA9IHRoaXMuX3Jlc29sdmVGaWVsZCgoXCIjXCIgKyBpZCkpO1xuICBpZiAoIWZpZWxkKSB7IHJldHVybiB9XG5cbiAgLy8gcmVtb3ZlIG9sZCBzY29wZS5cbiAgdGhpcy5lcnJvcnMudXBkYXRlKGlkLCB7IHNjb3BlOiBzY29wZSB9KTtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChmaWVsZC5zY29wZSkgJiYgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0pIHtcbiAgICBkZWxldGUgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV1bZmllbGQubmFtZV07XG4gIH0gZWxzZSBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZmllbGQuc2NvcGUpKSB7XG4gICAgZGVsZXRlIHRoaXMuZmxhZ3NbZmllbGQubmFtZV07XG4gIH1cblxuICB0aGlzLl9hZGRGbGFnKGZpZWxkLCBzY29wZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgVmFsaWRhdG9yLnJlbW92ZShuYW1lKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBhIHJlZ2lzdGVyZWQgZmllbGQgdmFsaWRhdGlvbnMuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZSAobmFtZSwgdmFsdWUsIHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpIH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBhbGwuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVTY29wZXMoKVxuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgc2NvcGUtbGVzcyBmaWVsZHMuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGFyZ3VtZW50c1swXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbGwoKVxuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgYSBzY29wZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycgJiYgL14oLispXFwuXFwqJC8udGVzdChhcmd1bWVudHNbMF0pKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhcmd1bWVudHNbMF0ubWF0Y2goL14oLispXFwuXFwqJC8pWzFdO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKG1hdGNoZWQpXG4gIH1cblxuICB2YXIgZmllbGQgPSB0aGlzLl9yZXNvbHZlRmllbGQobmFtZSwgc2NvcGUpO1xuICBpZiAoIWZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZpZWxkTm90Rm91bmQobmFtZSwgc2NvcGUpXG4gIH1cblxuICBmaWVsZC5mbGFncy5wZW5kaW5nID0gdHJ1ZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICB9XG5cbiAgdmFyIHNpbGVudFJ1biA9IGZpZWxkLmlzRGlzYWJsZWQ7XG5cbiAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKGZpZWxkLCB2YWx1ZSwgc2lsZW50UnVuKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICB0aGlzJDEuZXJyb3JzLnJlbW92ZShmaWVsZC5uYW1lLCBmaWVsZC5zY29wZSwgZmllbGQuaWQpO1xuICAgIGlmIChzaWxlbnRSdW4pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMpIHtcbiAgICAgIHJlc3VsdC5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGhpcyQxLmVycm9ycy5hZGQoZSk7IH0pO1xuICAgIH1cblxuICAgIGZpZWxkLnNldEZsYWdzKHtcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxuICAgICAgdmFsaWQ6IHJlc3VsdC52YWxpZCxcbiAgICAgIHZhbGlkYXRlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQudmFsaWRcbiAgfSlcbn07XG5cbi8qKlxuICogUGF1c2VzIHRoZSB2YWxpZGF0b3IuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpc1xufTtcblxuLyoqXG4gKiBSZXN1bWVzIHRoZSB2YWxpZGF0b3IuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICByZXR1cm4gdGhpc1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgZWFjaCB2YWx1ZSBhZ2FpbnN0IHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkIHZhbGlkYXRpb25zLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlQWxsID0gZnVuY3Rpb24gdmFsaWRhdGVBbGwgKHZhbHVlcykge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKSB9XG5cbiAgdmFyIG1hdGNoZXIgPSBudWxsO1xuICB2YXIgcHJvdmlkZWRWYWx1ZXMgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogdmFsdWVzIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWVzKSkge1xuICAgIG1hdGNoZXIgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4geyBuYW1lOiBrZXksIHNjb3BlOiBhcmd1bWVudHMkMVsxXSB8fCBudWxsIH1cbiAgICB9KTtcbiAgICBwcm92aWRlZFZhbHVlcyA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIG1hdGNoZXIgPSB7IHNjb3BlOiBudWxsIH07IC8vIGdsb2JhbCBzY29wZS5cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICBtYXRjaGVyID0gdmFsdWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4geyBuYW1lOiBrZXksIHNjb3BlOiBhcmd1bWVudHMkMVsxXSB8fCBudWxsIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IHRoaXMuZmllbGRzLmZpbHRlcihtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiB0aGlzJDEudmFsaWRhdGUoXG4gICAgKFwiI1wiICsgKGZpZWxkLmlkKSksXG4gICAgcHJvdmlkZWRWYWx1ZXMgPyB2YWx1ZXNbZmllbGQubmFtZV0gOiBmaWVsZC52YWx1ZVxuICApOyB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHsgcmV0dXJuIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KVxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHNjb3Blcy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVNjb3BlcyA9IGZ1bmN0aW9uIHZhbGlkYXRlU2NvcGVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKSB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMubWFwKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gdGhpcyQxLnZhbGlkYXRlKFxuICAgIChcIiNcIiArIChmaWVsZC5pZCkpLFxuICAgIGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pXG59O1xuXG4vKipcbiAqIFBlcmZvcm0gY2xlYW51cC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIC8vIFJlbW92ZSBFcnJvckJhZyBpbnN0YW5jZS5cbiAgdmFyIGlkeCA9IEVSUk9SUy5pbmRleE9mKHRoaXMuZXJyb3JzKTtcbiAgaWYgKGlkeCA9PT0gLTEpIHsgcmV0dXJuIH1cblxuICBFUlJPUlMuc3BsaWNlKGlkeCwgMSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGZpZWxkcyB0byBiZSB2YWxpZGF0ZWQuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZUZpZWxkcyA9IGZ1bmN0aW9uIF9jcmVhdGVGaWVsZHMgKHZhbGlkYXRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCF2YWxpZGF0aW9ucykgeyByZXR1cm4gfVxuXG4gIE9iamVjdC5rZXlzKHZhbGlkYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCB7IG5hbWU6IGZpZWxkLCBydWxlczogdmFsaWRhdGlvbnNbZmllbGRdIH0pO1xuICAgIHRoaXMkMS5hdHRhY2gob3B0aW9ucyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEYXRlIHJ1bGVzIG5lZWQgdGhlIGV4aXN0ZW5jZSBvZiBhIGZvcm1hdCwgc28gZGF0ZV9mb3JtYXQgbXVzdCBiZSBzdXBwbGllZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIF9nZXREYXRlRm9ybWF0ICh2YWxpZGF0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gbnVsbDtcbiAgaWYgKHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gdmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXRbMF07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IHx8IHRoaXMuZGljdGlvbmFyeS5nZXREYXRlRm9ybWF0KHRoaXMubG9jYWxlKVxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBydWxlIGlzIGEgZGF0ZSBydWxlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9pc0FEYXRlUnVsZSA9IGZ1bmN0aW9uIF9pc0FEYXRlUnVsZSAocnVsZSkge1xuICByZXR1cm4gISF+WydhZnRlcicsICdiZWZvcmUnLCAnZGF0ZV9iZXR3ZWVuJywgJ2RhdGVfZm9ybWF0J10uaW5kZXhPZihydWxlKVxufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2Zvcm1hdEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIF9mb3JtYXRFcnJvck1lc3NhZ2UgKGZpZWxkLCBydWxlLCBkYXRhLCB0YXJnZXROYW1lKSB7XG4gICAgaWYgKCBkYXRhID09PSB2b2lkIDAgKSBkYXRhID0ge307XG4gICAgaWYgKCB0YXJnZXROYW1lID09PSB2b2lkIDAgKSB0YXJnZXROYW1lID0gbnVsbDtcblxuICB2YXIgbmFtZSA9IHRoaXMuX2dldEZpZWxkRGlzcGxheU5hbWUoZmllbGQpO1xuICB2YXIgcGFyYW1zID0gdGhpcy5fZ2V0TG9jYWxpemVkUGFyYW1zKHJ1bGUsIHRhcmdldE5hbWUpO1xuXG4gIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0RmllbGRNZXNzYWdlKHRoaXMubG9jYWxlLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUsIFtuYW1lLCBwYXJhbXMsIGRhdGFdKVxufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGUgcnVsZSAobWFpbmx5IGZvciB0YXJnZXQgZmllbGRzKS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0TG9jYWxpemVkUGFyYW1zID0gZnVuY3Rpb24gX2dldExvY2FsaXplZFBhcmFtcyAocnVsZSwgdGFyZ2V0TmFtZSkge1xuICAgIGlmICggdGFyZ2V0TmFtZSA9PT0gdm9pZCAwICkgdGFyZ2V0TmFtZSA9IG51bGw7XG5cbiAgaWYgKH5UQVJHRVRfUlVMRVMuaW5kZXhPZihydWxlLm5hbWUpICYmIHJ1bGUucGFyYW1zICYmIHJ1bGUucGFyYW1zWzBdKSB7XG4gICAgdmFyIGxvY2FsaXplZE5hbWUgPSB0YXJnZXROYW1lIHx8IHRoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUodGhpcy5sb2NhbGUsIHJ1bGUucGFyYW1zWzBdLCBydWxlLnBhcmFtc1swXSk7XG4gICAgcmV0dXJuIFtsb2NhbGl6ZWROYW1lXS5jb25jYXQocnVsZS5wYXJhbXMuc2xpY2UoMSkpXG4gIH1cblxuICByZXR1cm4gcnVsZS5wYXJhbXNcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgYW4gYXBwcm9wcmlhdGUgZGlzcGxheSBuYW1lLCBmaXJzdCBjaGVja2luZyAnZGF0YS1hcycgb3IgdGhlIHJlZ2lzdGVyZWQgJ3ByZXR0eU5hbWUnXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldEZpZWxkRGlzcGxheU5hbWUgPSBmdW5jdGlvbiBfZ2V0RmllbGREaXNwbGF5TmFtZSAoZmllbGQpIHtcbiAgcmV0dXJuIGZpZWxkLmFsaWFzIHx8IHRoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUodGhpcy5sb2NhbGUsIGZpZWxkLm5hbWUsIGZpZWxkLm5hbWUpXG59O1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCBmbGFncyB0byB0aGUgZmxhZ3MgY29sbGVjdGlvbi5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fYWRkRmxhZyA9IGZ1bmN0aW9uIF9hZGRGbGFnIChmaWVsZCwgc2NvcGUpIHtcbiAgICB2YXIgb2JqLCBvYmokMSwgb2JqJDI7XG5cbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChzY29wZSkpIHtcbiAgICB0aGlzLmZsYWdzID0gYXNzaWduKHt9LCB0aGlzLmZsYWdzLCAoIG9iaiA9IHt9LCBvYmpbKFwiXCIgKyAoZmllbGQubmFtZSkpXSA9IGZpZWxkLmZsYWdzLCBvYmopKTtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzY29wZU9iaiA9IGFzc2lnbih7fSwgdGhpcy5mbGFnc1soXCIkXCIgKyBzY29wZSldIHx8IHt9LCAoIG9iaiQxID0ge30sIG9iaiQxWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqJDEpKTtcbiAgdGhpcy5mbGFncyA9IGFzc2lnbih7fSwgdGhpcy5mbGFncywgKCBvYmokMiA9IHt9LCBvYmokMlsoXCIkXCIgKyBzY29wZSldID0gc2NvcGVPYmosIG9iaiQyKSk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBmaWVsZHMgdGhhdCBtYXRjaGVzIHRoZSBtYXRjaGVyIG9wdGlvbnMgb3IgYWxsIGZpZWxkcyBpZiBub3Qgc3BlY2lmaWVkLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uIF9yZXNldCAobWF0Y2hlcikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGlmIChtYXRjaGVyKSB7XG4gICAgICB0aGlzJDEuZmllbGRzLmZpbHRlcihtYXRjaGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICBmaWVsZC5yZXNldCgpOyAvLyByZXNldCBmaWVsZCBmbGFncy5cbiAgICAgICAgdGhpcyQxLmVycm9ycy5yZW1vdmUoZmllbGQubmFtZSwgZmllbGQuc2NvcGUsIGZpZWxkLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgdGhpcyQxLmZpZWxkcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLnJlc2V0KCk7IH0pO1xuICAgIHRoaXMkMS5lcnJvcnMuY2xlYXIoKTtcbiAgICByZXNvbHZlKCk7XG4gIH0pXG59O1xuXG4vKipcbiAqIFRlc3RzIGEgc2luZ2xlIGlucHV0IHZhbHVlIGFnYWluc3QgYSBydWxlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl90ZXN0ID0gZnVuY3Rpb24gX3Rlc3QgKGZpZWxkLCB2YWx1ZSwgcnVsZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciB2YWxpZGF0b3IgPSBSVUxFU1tydWxlLm5hbWVdO1xuICB2YXIgcGFyYW1zID0gQXJyYXkuaXNBcnJheShydWxlLnBhcmFtcykgPyB0b0FycmF5KHJ1bGUucGFyYW1zKSA6IFtdO1xuICB2YXIgdGFyZ2V0TmFtZSA9IG51bGw7XG4gIGlmICghdmFsaWRhdG9yIHx8IHR5cGVvZiB2YWxpZGF0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcigoXCJObyBzdWNoIHZhbGlkYXRvciAnXCIgKyAocnVsZS5uYW1lKSArIFwiJyBleGlzdHMuXCIpKVxuICB9XG5cbiAgLy8gaGFzIGZpZWxkIGRlcGVuZGVuY2llcy5cbiAgaWYgKFRBUkdFVF9SVUxFUy5pbmRleE9mKHJ1bGUubmFtZSkgIT09IC0xKSB7XG4gICAgdmFyIHRhcmdldCA9IGZpbmQoZmllbGQuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSBydWxlLm5hbWU7IH0pO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldE5hbWUgPSB0YXJnZXQuZmllbGQuYWxpYXM7XG4gICAgICBwYXJhbXMgPSBbdGFyZ2V0LmZpZWxkLnZhbHVlXS5jb25jYXQocGFyYW1zLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZS5uYW1lID09PSAncmVxdWlyZWQnICYmIGZpZWxkLnJlamVjdHNGYWxzZSkge1xuICAgIC8vIGludmFsaWRhdGUgZmFsc2UgaWYgbm8gYXJncyB3ZXJlIHNwZWNpZmllZCBhbmQgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYnkgZGVmYXVsdC5cbiAgICBwYXJhbXMgPSBwYXJhbXMubGVuZ3RoID8gcGFyYW1zIDogW3RydWVdO1xuICB9XG5cbiAgaWYgKHRoaXMuX2lzQURhdGVSdWxlKHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMuX2dldERhdGVGb3JtYXQoZmllbGQucnVsZXMpO1xuICAgIGlmIChydWxlLm5hbWUgIT09ICdkYXRlX2Zvcm1hdCcpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSB2YWxpZGF0b3IodmFsdWUsIHBhcmFtcyk7XG5cbiAgLy8gSWYgaXQgaXMgYSBwcm9taXNlLlxuICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGFsbFZhbGlkID0gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaXNPYmplY3QodCkgPyB0LnZhbGlkIDogdCk7IH0pO1xuICAgICAgfSBlbHNlIHsgLy8gSXMgYSBzaW5nbGUgb2JqZWN0L2Jvb2xlYW4uXG4gICAgICAgIGFsbFZhbGlkID0gaXNPYmplY3QodmFsdWVzKSA/IHZhbHVlcy52YWxpZCA6IHZhbHVlcztcbiAgICAgICAgZGF0YSA9IHZhbHVlcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogYWxsVmFsaWQsXG4gICAgICAgIGVycm9yOiBhbGxWYWxpZCA/IHVuZGVmaW5lZCA6IHRoaXMkMS5fY3JlYXRlRmllbGRFcnJvcihmaWVsZCwgcnVsZSwgZGF0YSwgdGFyZ2V0TmFtZSksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmICghaXNPYmplY3QocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IHsgdmFsaWQ6IHJlc3VsdCwgZGF0YToge30gfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHJlc3VsdC52YWxpZCxcbiAgICBlcnJvcjogcmVzdWx0LnZhbGlkID8gdW5kZWZpbmVkIDogdGhpcy5fY3JlYXRlRmllbGRFcnJvcihmaWVsZCwgcnVsZSwgcmVzdWx0LmRhdGEsIHRhcmdldE5hbWUpLFxuICB9XG59O1xuXG4vKipcbiAqIE1lcmdlcyBhIHZhbGlkYXRvciBvYmplY3QgaW50byB0aGUgUlVMRVMgYW5kIE1lc3NhZ2VzLlxuICovXG5WYWxpZGF0b3IuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yKSkge1xuICAgIFJVTEVTW25hbWVdID0gdmFsaWRhdG9yO1xuICAgIHJldHVyblxuICB9XG5cbiAgUlVMRVNbbmFtZV0gPSB2YWxpZGF0b3IudmFsaWRhdGU7XG4gIGlmICh2YWxpZGF0b3IuZ2V0TWVzc2FnZSkge1xuICAgIFZhbGlkYXRvci5kaWN0aW9uYXJ5LnNldE1lc3NhZ2UodGhpcy5sb2NhbGUsIG5hbWUsIHZhbGlkYXRvci5nZXRNZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHdWFyZHMgZnJvbSBleHRlbnNpb24gdmlvbGF0aW9ucy5cbiAqL1xuVmFsaWRhdG9yLl9ndWFyZEV4dGVuZCA9IGZ1bmN0aW9uIF9ndWFyZEV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNDYWxsYWJsZSh2YWxpZGF0b3IudmFsaWRhdGUpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgaGF2ZSBhICd2YWxpZGF0ZScgbWV0aG9kLlwiKVxuICAgIClcbiAgfVxuXG4gIGlmICghaXNDYWxsYWJsZSh2YWxpZGF0b3IuZ2V0TWVzc2FnZSkgJiYgdHlwZW9mIHZhbGlkYXRvci5nZXRNZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgb2JqZWN0IG11c3QgaGF2ZSBhICdnZXRNZXNzYWdlJyBtZXRob2Qgb3Igc3RyaW5nLlwiKVxuICAgIClcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgRmllbGQgRXJyb3IgT2JqZWN0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVGaWVsZEVycm9yID0gZnVuY3Rpb24gX2NyZWF0ZUZpZWxkRXJyb3IgKGZpZWxkLCBydWxlLCBkYXRhLCB0YXJnZXROYW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogZmllbGQuaWQsXG4gICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgbXNnOiB0aGlzLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIGRhdGEsIHRhcmdldE5hbWUpLFxuICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICBzY29wZTogZmllbGQuc2NvcGUsXG4gICAgcmVnZW5lcmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5fZm9ybWF0RXJyb3JNZXNzYWdlKGZpZWxkLCBydWxlLCBkYXRhLCB0YXJnZXROYW1lKVxuICAgIH0sXG4gIH1cbn07XG5cbi8qKlxuICogVHJpZXMgZGlmZmVyZW50IHN0cmF0ZWdpZXMgdG8gZmluZCBhIGZpZWxkLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9yZXNvbHZlRmllbGQgPSBmdW5jdGlvbiBfcmVzb2x2ZUZpZWxkIChuYW1lLCBzY29wZSkge1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcy5maW5kKHsgbmFtZTogbmFtZSwgc2NvcGU6IHNjb3BlIH0pXG4gIH1cblxuICBpZiAobmFtZVswXSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBpZDogbmFtZS5zbGljZSgxKSB9KVxuICB9XG5cbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgdmFyIGZpZWxkU2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgZmllbGROYW1lID0gcmVmLnNsaWNlKDEpO1xuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBmaWVsZE5hbWUuam9pbignLicpLCBzY29wZTogZmllbGRTY29wZSB9KTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIHJldHVybiBmaWVsZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmZpZWxkcy5maW5kKHsgbmFtZTogbmFtZSwgc2NvcGU6IG51bGwgfSlcbn07XG5cbi8qKlxuICogSGFuZGxlcyB3aGVuIGEgZmllbGQgaXMgbm90IGZvdW5kIGRlcGVuZGluZyBvbiB0aGUgc3RyaWN0IGZsYWcuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2hhbmRsZUZpZWxkTm90Rm91bmQgPSBmdW5jdGlvbiBfaGFuZGxlRmllbGROb3RGb3VuZCAobmFtZSwgc2NvcGUpIHtcbiAgaWYgKCF0aGlzLnN0cmljdCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpIH1cblxuICB2YXIgZnVsbE5hbWUgPSBpc051bGxPclVuZGVmaW5lZChzY29wZSkgPyBuYW1lIDogKFwiXCIgKyAoIWlzTnVsbE9yVW5kZWZpbmVkKHNjb3BlKSA/IHNjb3BlICsgJy4nIDogJycpICsgbmFtZSk7XG4gIHRocm93IGNyZWF0ZUVycm9yKFxuICAgIChcIlZhbGlkYXRpbmcgYSBub24tZXhpc3RlbnQgZmllbGQ6IFxcXCJcIiArIGZ1bGxOYW1lICsgXCJcXFwiLiBVc2UgXFxcImF0dGFjaCgpXFxcIiBmaXJzdC5cIilcbiAgKVxufTtcblxuLyoqXG4gKiBTdGFydHMgdGhlIHZhbGlkYXRpb24gcHJvY2Vzcy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGUgPSBmdW5jdGlvbiBfdmFsaWRhdGUgKGZpZWxkLCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzaWxlbnQgPT09IHZvaWQgMCApIHNpbGVudCA9IGZhbHNlO1xuXG4gIGlmICghZmllbGQuaXNSZXF1aXJlZCAmJiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSAnJykpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgdmFsaWQ6IHRydWUgfSlcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IFtdO1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciBpc0V4aXRFYXJseSA9IGZhbHNlO1xuICAvLyB1c2Ugb2YgJy5zb21lKCknIGlzIHRvIGJyZWFrIGl0ZXJhdGlvbiBpbiBtaWRkbGUgYnkgcmV0dXJuaW5nIHRydWVcbiAgT2JqZWN0LmtleXMoZmllbGQucnVsZXMpLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyQxLl90ZXN0KGZpZWxkLCB2YWx1ZSwgeyBuYW1lOiBydWxlLCBwYXJhbXM6IGZpZWxkLnJ1bGVzW3J1bGVdIH0pO1xuICAgIGlmIChpc0NhbGxhYmxlKHJlc3VsdC50aGVuKSkge1xuICAgICAgcHJvbWlzZXMucHVzaChyZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcyQxLmZhc3RFeGl0ICYmICFyZXN1bHQudmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICBpc0V4aXRFYXJseSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHByb21pc2lmeSB0aGUgcmVzdWx0LlxuICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXhpdEVhcmx5XG4gIH0pO1xuXG4gIGlmIChpc0V4aXRFYXJseSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7IHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKCF2LnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh2LmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdi52YWxpZFxuICB9KS5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH1cbiAgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHJlc3VsdCxcbiAgICAgIGVycm9yczogZXJyb3JzLFxuICAgIH1cbiAgfSlcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkNCApO1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZhbGlkYXRvciwgc3RhdGljQWNjZXNzb3JzJDEgKTtcblxuLy8gXG5cbmZ1bmN0aW9uIHVzZSAocGx1Z2luLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICghaXNDYWxsYWJsZShwbHVnaW4pKSB7XG4gICAgcmV0dXJuIHdhcm4oJ1RoZSBwbHVnaW4gbXVzdCBiZSBhIGNhbGxhYmxlIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHBsdWdpbih7IFZhbGlkYXRvcjogVmFsaWRhdG9yLCBFcnJvckJhZzogRXJyb3JCYWcsIFJ1bGVzOiBWYWxpZGF0b3IucnVsZXMgfSwgb3B0aW9ucyk7XG59XG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDA7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwO1xudmFyIERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgPSAyO1xuXG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1ldGVyOiAvW1QgXS8sXG4gIHBsYWluVGltZTogLzovLFxuXG4gIC8vIHllYXIgdG9rZW5zXG4gIFlZOiAvXihcXGR7Mn0pJC8sXG4gIFlZWTogW1xuICAgIC9eKFsrLV1cXGR7Mn0pJC8sIC8vIDAgYWRkaXRpb25hbCBkaWdpdHNcbiAgICAvXihbKy1dXFxkezN9KSQvLCAvLyAxIGFkZGl0aW9uYWwgZGlnaXRcbiAgICAvXihbKy1dXFxkezR9KSQvIC8vIDIgYWRkaXRpb25hbCBkaWdpdHNcbiAgXSxcbiAgWVlZWTogL14oXFxkezR9KS8sXG4gIFlZWVlZOiBbXG4gICAgL14oWystXVxcZHs0fSkvLCAvLyAwIGFkZGl0aW9uYWwgZGlnaXRzXG4gICAgL14oWystXVxcZHs1fSkvLCAvLyAxIGFkZGl0aW9uYWwgZGlnaXRcbiAgICAvXihbKy1dXFxkezZ9KS8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuICBdLFxuXG4gIC8vIGRhdGUgdG9rZW5zXG4gIE1NOiAvXi0oXFxkezJ9KSQvLFxuICBEREQ6IC9eLT8oXFxkezN9KSQvLFxuICBNTUREOiAvXi0/KFxcZHsyfSktPyhcXGR7Mn0pJC8sXG4gIFd3dzogL14tP1coXFxkezJ9KSQvLFxuICBXd3dEOiAvXi0/VyhcXGR7Mn0pLT8oXFxkezF9KSQvLFxuXG4gIEhIOiAvXihcXGR7Mn0oWy4sXVxcZCopPykkLyxcbiAgSEhNTTogL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvLFxuICBISE1NU1M6IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC8sXG5cbiAgLy8gdGltZXpvbmUgdG9rZW5zXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG4gIHRpbWV6b25lWjogL14oWikkLyxcbiAgdGltZXpvbmVISDogL14oWystXSkoXFxkezJ9KSQvLFxuICB0aW1lem9uZUhITU06IC9eKFsrLV0pKFxcZHsyfSk6PyhcXGR7Mn0pJC9cbn07XG5cbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIGFuIGFyZ3VtZW50IGlzIGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gdHJpZXMgdG8gcGFyc2UgaXQuXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG51bGwsIGl0IGlzIHRyZWF0ZWQgYXMgYW4gaW52YWxpZCBkYXRlLlxuICpcbiAqIElmIGFsbCBhYm92ZSBmYWlscywgdGhlIGZ1bmN0aW9uIHBhc3NlcyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqIEFsbCAqZGF0ZS1mbnMqIGZ1bmN0aW9ucyB3aWxsIHRocm93IGBSYW5nZUVycm9yYCBpZiBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBpcyBub3QgMCwgMSwgMiBvciB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHsqfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogdmFyIHJlc3VsdCA9IHRvRGF0ZSgnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSB0b0RhdGUoJyswMjAxNDEwMScsIHthZGRpdGlvbmFsRGlnaXRzOiAxfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHRvRGF0ZSAoYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG5cbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMgPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgOiBOdW1iZXIob3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKVxuICB9XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudClcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG5cbiAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgdmFyIHllYXIgPSBwYXJzZVllYXJSZXN1bHQueWVhcjtcbiAgdmFyIHJlc3REYXRlU3RyaW5nID0gcGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nO1xuXG4gIHZhciBkYXRlID0gcGFyc2VEYXRlKHJlc3REYXRlU3RyaW5nLCB5ZWFyKTtcblxuICBpZiAoZGF0ZSkge1xuICAgIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICB2YXIgdGltZSA9IDA7XG4gICAgdmFyIG9mZnNldDtcblxuICAgIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIH1cblxuICAgIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgb2Zmc2V0ID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudClcbiAgfVxufVxuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcgKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWV0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICBpZiAocGF0dGVybnMucGxhaW5UaW1lLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IG51bGw7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3Ncbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyIChkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciBwYXR0ZXJuWVlZID0gcGF0dGVybnMuWVlZW2FkZGl0aW9uYWxEaWdpdHNdO1xuICB2YXIgcGF0dGVybllZWVlZID0gcGF0dGVybnMuWVlZWVlbYWRkaXRpb25hbERpZ2l0c107XG5cbiAgdmFyIHRva2VuO1xuXG4gIC8vIFlZWVkgb3IgwrFZWVlZWVxuICB0b2tlbiA9IHBhdHRlcm5zLllZWVkuZXhlYyhkYXRlU3RyaW5nKSB8fCBwYXR0ZXJuWVlZWVkuZXhlYyhkYXRlU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIHllYXJTdHJpbmcgPSB0b2tlblsxXTtcbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogcGFyc2VJbnQoeWVhclN0cmluZywgMTApLFxuICAgICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoeWVhclN0cmluZy5sZW5ndGgpXG4gICAgfVxuICB9XG5cbiAgLy8gWVkgb3IgwrFZWVlcbiAgdG9rZW4gPSBwYXR0ZXJucy5ZWS5leGVjKGRhdGVTdHJpbmcpIHx8IHBhdHRlcm5ZWVkuZXhlYyhkYXRlU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIGNlbnR1cnlTdHJpbmcgPSB0b2tlblsxXTtcbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogcGFyc2VJbnQoY2VudHVyeVN0cmluZywgMTApICogMTAwLFxuICAgICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoY2VudHVyeVN0cmluZy5sZW5ndGgpXG4gICAgfVxuICB9XG5cbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlIChkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHZhciB0b2tlbjtcbiAgdmFyIGRhdGU7XG4gIHZhciBtb250aDtcbiAgdmFyIHdlZWs7XG5cbiAgLy8gWVlZWVxuICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyKTtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1NTVxuICB0b2tlbiA9IHBhdHRlcm5zLk1NLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgpO1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLURERCBvciBZWVlZREREXG4gIHRva2VuID0gcGF0dGVybnMuRERELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGRheU9mWWVhcik7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU0tREQgb3IgWVlZWU1NRERcbiAgdG9rZW4gPSBwYXR0ZXJucy5NTURELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIHZhciBkYXkgPSBwYXJzZUludCh0b2tlblsyXSwgMTApO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIGRheSk7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktV3d3IG9yIFlZWVlXd3dcbiAgdG9rZW4gPSBwYXR0ZXJucy5Xd3cuZXhlYyhkYXRlU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIHJldHVybiBkYXlPZklTT1llYXIoeWVhciwgd2VlaylcbiAgfVxuXG4gIC8vIFlZWVktV3d3LUQgb3IgWVlZWVd3d0RcbiAgdG9rZW4gPSBwYXR0ZXJucy5Xd3dELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHdlZWsgPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMTtcbiAgICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAtIDE7XG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgZGF0ZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUgKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuO1xuICB2YXIgaG91cnM7XG4gIHZhciBtaW51dGVzO1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGF0dGVybnMuSEguZXhlYyh0aW1lU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVJcbiAgfVxuXG4gIC8vIGhoOm1tIG9yIGhobW1cbiAgdG9rZW4gPSBwYXR0ZXJucy5ISE1NLmV4ZWModGltZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKTtcbiAgICBtaW51dGVzID0gcGFyc2VGbG9hdCh0b2tlblsyXS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIH1cblxuICAvLyBoaDptbTpzcyBvciBoaG1tc3NcbiAgdG9rZW4gPSBwYXR0ZXJucy5ISE1NU1MuZXhlYyh0aW1lU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApO1xuICAgIG1pbnV0ZXMgPSBwYXJzZUludCh0b2tlblsyXSwgMTApO1xuICAgIHZhciBzZWNvbmRzID0gcGFyc2VGbG9hdCh0b2tlblszXS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICtcbiAgICAgIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lICh0aW1lem9uZVN0cmluZykge1xuICB2YXIgdG9rZW47XG4gIHZhciBhYnNvbHV0ZU9mZnNldDtcblxuICAvLyBaXG4gIHRva2VuID0gcGF0dGVybnMudGltZXpvbmVaLmV4ZWModGltZXpvbmVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gwrFoaFxuICB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lSEguZXhlYyh0aW1lem9uZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwO1xuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZUhITU0uZXhlYyh0aW1lem9uZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwICsgcGFyc2VJbnQodG9rZW5bM10sIDEwKTtcbiAgICByZXR1cm4gKHRva2VuWzFdID09PSAnKycpID8gLWFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXRcbiAgfVxuXG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPWWVhciAoaXNvWWVhciwgd2VlaywgZGF5KSB7XG4gIHdlZWsgPSB3ZWVrIHx8IDA7XG4gIGRheSA9IGRheSB8fCAwO1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9IHdlZWsgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlXG59XG5cbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWRcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KVxufVxuXG5mdW5jdGlvbiBjbG9uZU9iamVjdCAoZGlydHlPYmplY3QpIHtcbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcbiAgdmFyIG9iamVjdCA9IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGRpcnR5T2JqZWN0KSB7XG4gICAgaWYgKGRpcnR5T2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqZWN0XG59XG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDIgPSA2MDAwMDtcblxuLyoqXG4gKiBAbmFtZSBhZGRNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWludXRlcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDMwIG1pbnV0ZXMgdG8gMTAgSnVseSAyMDE0IDEyOjAwOjAwOlxuICogdmFyIHJlc3VsdCA9IGFkZE1pbnV0ZXMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjozMDowMFxuICovXG5mdW5jdGlvbiBhZGRNaW51dGVzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMiBhcmd1bWVudHMgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBwcmVzZW50JylcbiAgfVxuXG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSQyLCBkaXJ0eU9wdGlvbnMpXG59XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQoJzIwMTQtMDItMzEnKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSlcbn1cblxudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG52YXIgdG9rZW5zVG9CZVNob3J0ZWRQYXR0ZXJuID0gL01NTU18TU18RER8ZGRkZC9nO1xuXG5mdW5jdGlvbiBidWlsZFNob3J0TG9uZ0Zvcm1hdCAoZm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSh0b2tlbnNUb0JlU2hvcnRlZFBhdHRlcm4sIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi5zbGljZSgxKVxuICB9KVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkRm9ybWF0TG9uZ0ZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBmb3JtYXRMb25nYCBwcm9wZXJ0eSBmb3IgbG9jYWxlIHVzZWQgYnkgYGZvcm1hdGAsIGBmb3JtYXRSZWxhdGl2ZWAgYW5kIGBwYXJzZWAgZnVuY3Rpb25zLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgYGZvcm1hdExvbmdgIHByb3BlcnR5IGZvciBsb2NhbGUgdXNlZCBieSBgZm9ybWF0YCwgYGZvcm1hdFJlbGF0aXZlYCBhbmQgYHBhcnNlYCBmdW5jdGlvbnMuXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgb25lIG9mIHRoZSBmb2xsb3dpbmcgdG9rZW5zIGFzIHRoZSBhcmd1bWVudDpcbiAqIGAnTFRTJ2AsIGAnTFQnYCwgYCdMJ2AsIGAnTEwnYCwgYCdMTEwnYCwgYCdsJ2AsIGAnbGwnYCwgYCdsbGwnYCwgYCdsbGxsJ2BcbiAqIGFuZCByZXR1cm5zIGEgbG9uZyBmb3JtYXQgc3RyaW5nIHdyaXR0ZW4gYXMgYGZvcm1hdGAgdG9rZW4gc3RyaW5ncy5cbiAqIFNlZSBbZm9ybWF0XXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2Zvcm1hdH1cbiAqXG4gKiBgJ2wnYCwgYCdsbCdgLCBgJ2xsbCdgIGFuZCBgJ2xsbGwnYCBmb3JtYXRzIGFyZSBidWlsdCBhdXRvbWF0aWNhbGx5XG4gKiBieSBzaG9ydGVuaW5nIHNvbWUgb2YgdGhlIHRva2VucyBmcm9tIGNvcnJlc3BvbmRpbmcgdW5zaG9ydGVuZWQgZm9ybWF0c1xuICogKGUuZy4sIGlmIGBMTGAgaXMgYCdNTU1NIEREIFlZWVknYCB0aGVuIGBsbGAgd2lsbCBiZSBgTU1NIEQgWVlZWWApXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3Qgd2l0aCBsb25nIGZvcm1hdHMgd3JpdHRlbiBhcyBgZm9ybWF0YCB0b2tlbiBzdHJpbmdzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLkxUIC0gdGltZSBmb3JtYXQ6IGhvdXJzIGFuZCBtaW51dGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLkxUUyAtIHRpbWUgZm9ybWF0OiBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MIC0gc2hvcnQgZGF0ZSBmb3JtYXQ6IG51bWVyaWMgZGF5LCBtb250aCBhbmQgeWVhclxuICogQHBhcmFtIHtTdHJpbmd9IFtvYmoubF0gLSBzaG9ydCBkYXRlIGZvcm1hdDogbnVtZXJpYyBkYXksIG1vbnRoIGFuZCB5ZWFyIChzaG9ydGVuZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLkxMIC0gbG9uZyBkYXRlIGZvcm1hdDogZGF5LCBtb250aCBpbiB3b3JkcywgYW5kIHllYXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2JqLmxsXSAtIGxvbmcgZGF0ZSBmb3JtYXQ6IGRheSwgbW9udGggaW4gd29yZHMsIGFuZCB5ZWFyIChzaG9ydGVuZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLkxMTCAtIGxvbmcgZGF0ZSBhbmQgdGltZSBmb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2JqLmxsbF0gLSBsb25nIGRhdGUgYW5kIHRpbWUgZm9ybWF0IChzaG9ydGVuZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLkxMTEwgLSBsb25nIGRhdGUsIHRpbWUgYW5kIHdlZWtkYXkgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gW29iai5sbGxsXSAtIGxvbmcgZGF0ZSwgdGltZSBhbmQgd2Vla2RheSBmb3JtYXQgKHNob3J0ZW5lZClcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYGZvcm1hdExvbmdgIHByb3BlcnR5IG9mIHRoZSBsb2NhbGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGBlbi1VU2AgbG9jYWxlOlxuICogbG9jYWxlLmZvcm1hdExvbmcgPSBidWlsZEZvcm1hdExvbmdGbih7XG4gKiAgIExUOiAnaDptbSBhYScsXG4gKiAgIExUUzogJ2g6bW06c3MgYWEnLFxuICogICBMOiAnTU0vREQvWVlZWScsXG4gKiAgIExMOiAnTU1NTSBEIFlZWVknLFxuICogICBMTEw6ICdNTU1NIEQgWVlZWSBoOm1tIGFhJyxcbiAqICAgTExMTDogJ2RkZGQsIE1NTU0gRCBZWVlZIGg6bW0gYWEnXG4gKiB9KVxuICovXG5mdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbiAob2JqKSB7XG4gIHZhciBmb3JtYXRMb25nTG9jYWxlID0ge1xuICAgIExUUzogb2JqLkxUUyxcbiAgICBMVDogb2JqLkxULFxuICAgIEw6IG9iai5MLFxuICAgIExMOiBvYmouTEwsXG4gICAgTExMOiBvYmouTExMLFxuICAgIExMTEw6IG9iai5MTExMLFxuICAgIGw6IG9iai5sIHx8IGJ1aWxkU2hvcnRMb25nRm9ybWF0KG9iai5MKSxcbiAgICBsbDogb2JqLmxsIHx8IGJ1aWxkU2hvcnRMb25nRm9ybWF0KG9iai5MTCksXG4gICAgbGxsOiBvYmoubGxsIHx8IGJ1aWxkU2hvcnRMb25nRm9ybWF0KG9iai5MTEwpLFxuICAgIGxsbGw6IG9iai5sbGxsIHx8IGJ1aWxkU2hvcnRMb25nRm9ybWF0KG9iai5MTExMKVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gZm9ybWF0TG9uZ0xvY2FsZVt0b2tlbl1cbiAgfVxufVxuXG52YXIgZm9ybWF0TG9uZyA9IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgTFQ6ICdoOm1tIGFhJyxcbiAgTFRTOiAnaDptbTpzcyBhYScsXG4gIEw6ICdNTS9ERC9ZWVlZJyxcbiAgTEw6ICdNTU1NIEQgWVlZWScsXG4gIExMTDogJ01NTU0gRCBZWVlZIGg6bW0gYWEnLFxuICBMTExMOiAnZGRkZCwgTU1NTSBEIFlZWVkgaDptbSBhYSdcbn0pO1xuXG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiAnW2xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gIHllc3RlcmRheTogJ1t5ZXN0ZXJkYXkgYXRdIExUJyxcbiAgdG9kYXk6ICdbdG9kYXkgYXRdIExUJyxcbiAgdG9tb3Jyb3c6ICdbdG9tb3Jyb3cgYXRdIExUJyxcbiAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxuICBvdGhlcjogJ0wnXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSAodG9rZW4sIGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl1cbn1cblxuLyoqXG4gKiBAbmFtZSBidWlsZExvY2FsaXplRm5cbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgQnVpbGQgYGxvY2FsaXplLndlZWtkYXlgLCBgbG9jYWxpemUubW9udGhgIGFuZCBgbG9jYWxpemUudGltZU9mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgYGxvY2FsaXplLndlZWtkYXlgLCBgbG9jYWxpemUubW9udGhgIGFuZCBgbG9jYWxpemUudGltZU9mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlXG4gKiB1c2VkIGJ5IGBmb3JtYXRgIGZ1bmN0aW9uLlxuICogSWYgbm8gYHR5cGVgIGlzIHN1cHBsaWVkIHRvIHRoZSBvcHRpb25zIG9mIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24sIGBkZWZhdWx0VHlwZWAgd2lsbCBiZSB1c2VkIChzZWUgZXhhbXBsZSkuXG4gKlxuICogYGxvY2FsaXplLndlZWtkYXlgIGZ1bmN0aW9uIHRha2VzIHRoZSB3ZWVrZGF5IGluZGV4IGFzIGFyZ3VtZW50ICgwIC0gU3VuZGF5KS5cbiAqIGBsb2NhbGl6ZS5tb250aGAgdGFrZXMgdGhlIG1vbnRoIGluZGV4ICgwIC0gSmFudWFyeSkuXG4gKiBgbG9jYWxpemUudGltZU9mRGF5YCB0YWtlcyB0aGUgaG91cnMuIFVzZSBgaW5kZXhDYWxsYmFja2AgdG8gY29udmVydCB0aGVtIHRvIGFuIGFycmF5IGluZGV4IChzZWUgZXhhbXBsZSkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSBvYmplY3Qgd2l0aCBhcnJheXMgb2YgdmFsdWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFR5cGUgLSB0aGUgZGVmYXVsdCB0eXBlIGZvciB0aGUgbG9jYWxpemUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpbmRleENhbGxiYWNrXSAtIHRoZSBjYWxsYmFjayB3aGljaCB0YWtlcyB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uIGFyZ3VtZW50XG4gKiAgIGFuZCBjb252ZXJ0cyBpdCBpbnRvIHZhbHVlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHRpbWVPZkRheVZhbHVlcyA9IHtcbiAqICAgdXBwZXJjYXNlOiBbJ0FNJywgJ1BNJ10sXG4gKiAgIGxvd2VyY2FzZTogWydhbScsICdwbSddLFxuICogICBsb25nOiBbJ2EubS4nLCAncC5tLiddXG4gKiB9XG4gKiBsb2NhbGUubG9jYWxpemUudGltZU9mRGF5ID0gYnVpbGRMb2NhbGl6ZUZuKHRpbWVPZkRheVZhbHVlcywgJ2xvbmcnLCBmdW5jdGlvbiAoaG91cnMpIHtcbiAqICAgLy8gMCBpcyBhLm0uIGFycmF5IGluZGV4LCAxIGlzIHAubS4gYXJyYXkgaW5kZXhcbiAqICAgcmV0dXJuIChob3VycyAvIDEyKSA+PSAxID8gMSA6IDBcbiAqIH0pXG4gKiBsb2NhbGUubG9jYWxpemUudGltZU9mRGF5KDE2LCB7dHlwZTogJ3VwcGVyY2FzZSd9KSAvLz0+ICdQTSdcbiAqIGxvY2FsZS5sb2NhbGl6ZS50aW1lT2ZEYXkoNSkgLy89PiAnYS5tLidcbiAqL1xuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuICh2YWx1ZXMsIGRlZmF1bHRUeXBlLCBpbmRleENhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHZhbHVlc1t0eXBlXSB8fCB2YWx1ZXNbZGVmYXVsdFR5cGVdO1xuICAgIHZhciBpbmRleCA9IGluZGV4Q2FsbGJhY2sgPyBpbmRleENhbGxiYWNrKE51bWJlcihkaXJ0eUluZGV4KSkgOiBOdW1iZXIoZGlydHlJbmRleCk7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XVxuICB9XG59XG5cbi8qKlxuICogQG5hbWUgYnVpbGRMb2NhbGl6ZUFycmF5Rm5cbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgQnVpbGQgYGxvY2FsaXplLndlZWtkYXlzYCwgYGxvY2FsaXplLm1vbnRoc2AgYW5kIGBsb2NhbGl6ZS50aW1lc09mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgYGxvY2FsaXplLndlZWtkYXlzYCwgYGxvY2FsaXplLm1vbnRoc2AgYW5kIGBsb2NhbGl6ZS50aW1lc09mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlLlxuICogSWYgbm8gYHR5cGVgIGlzIHN1cHBsaWVkIHRvIHRoZSBvcHRpb25zIG9mIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24sIGBkZWZhdWx0VHlwZWAgd2lsbCBiZSB1c2VkIChzZWUgZXhhbXBsZSkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSBvYmplY3Qgd2l0aCBhcnJheXMgb2YgdmFsdWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFR5cGUgLSB0aGUgZGVmYXVsdCB0eXBlIGZvciB0aGUgbG9jYWxpemUgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIHJlc3VsdGluZyBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgd2Vla2RheVZhbHVlcyA9IHtcbiAqICAgbmFycm93OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gKiAgIHNob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICogICBsb25nOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAqIH1cbiAqIGxvY2FsZS5sb2NhbGl6ZS53ZWVrZGF5cyA9IGJ1aWxkTG9jYWxpemVBcnJheUZuKHdlZWtkYXlWYWx1ZXMsICdsb25nJylcbiAqIGxvY2FsZS5sb2NhbGl6ZS53ZWVrZGF5cyh7dHlwZTogJ25hcnJvdyd9KSAvLz0+IFsnU3UnLCAnTW8nLCAuLi5dXG4gKiBsb2NhbGUubG9jYWxpemUud2Vla2RheXMoKSAvLz0+IFsnU3VuZGF5JywgJ01vbmRheScsIC4uLl1cbiAqL1xuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUFycmF5Rm4gKHZhbHVlcywgZGVmYXVsdFR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSA/IFN0cmluZyhvcHRpb25zLnR5cGUpIDogZGVmYXVsdFR5cGU7XG4gICAgcmV0dXJuIHZhbHVlc1t0eXBlXSB8fCB2YWx1ZXNbZGVmYXVsdFR5cGVdXG4gIH1cbn1cblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIHdlZWtkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBzaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgbG9uZzogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIHNob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIGxvbmc6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xuXG4vLyBgdGltZU9mRGF5YCBpcyB1c2VkIHRvIGRlc2lnbmF0ZSB3aGljaCBwYXJ0IG9mIHRoZSBkYXkgaXQgaXMsIHdoZW4gdXNlZCB3aXRoIDEyLWhvdXIgY2xvY2suXG4vLyBVc2UgdGhlIHN5c3RlbSB3aGljaCBpcyB1c2VkIHRoZSBtb3N0IGNvbW1vbmx5IGluIHRoZSBsb2NhbGUuXG4vLyBGb3IgZXhhbXBsZSwgaWYgdGhlIGNvdW50cnkgZG9lc24ndCB1c2UgYS5tLi9wLm0uLCB5b3UgY2FuIHVzZSBgbmlnaHRgL2Btb3JuaW5nYC9gYWZ0ZXJub29uYC9gZXZlbmluZ2A6XG4vL1xuLy8gICB2YXIgdGltZU9mRGF5VmFsdWVzID0ge1xuLy8gICAgIGFueTogWydpbiB0aGUgbmlnaHQnLCAnaW4gdGhlIG1vcm5pbmcnLCAnaW4gdGhlIGFmdGVybm9vbicsICdpbiB0aGUgZXZlbmluZyddXG4vLyAgIH1cbi8vXG4vLyBBbmQgbGF0ZXI6XG4vL1xuLy8gICB2YXIgbG9jYWxpemUgPSB7XG4vLyAgICAgLy8gVGhlIGNhbGxiYWNrIHRha2VzIHRoZSBob3VycyBhcyB0aGUgYXJndW1lbnQgYW5kIHJldHVybnMgdGhlIGFycmF5IGluZGV4XG4vLyAgICAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCAnYW55JywgZnVuY3Rpb24gKGhvdXJzKSB7XG4vLyAgICAgICBpZiAoaG91cnMgPj0gMTcpIHtcbi8vICAgICAgICAgcmV0dXJuIDNcbi8vICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbi8vICAgICAgICAgcmV0dXJuIDJcbi8vICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuLy8gICAgICAgICByZXR1cm4gMVxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIDBcbi8vICAgICAgIH1cbi8vICAgICB9KSxcbi8vICAgICB0aW1lc09mRGF5OiBidWlsZExvY2FsaXplQXJyYXlGbih0aW1lT2ZEYXlWYWx1ZXMsICdhbnknKVxuLy8gICB9XG52YXIgdGltZU9mRGF5VmFsdWVzID0ge1xuICB1cHBlcmNhc2U6IFsnQU0nLCAnUE0nXSxcbiAgbG93ZXJjYXNlOiBbJ2FtJywgJ3BtJ10sXG4gIGxvbmc6IFsnYS5tLicsICdwLm0uJ11cbn07XG5cbmZ1bmN0aW9uIG9yZGluYWxOdW1iZXIgKGRpcnR5TnVtYmVyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICdtb250aCcsICdxdWFydGVyJywgJ3dlZWsnLCAnaXNvV2VlaycsICdkYXlPZlllYXInLFxuICAvLyAnZGF5T2ZNb250aCcgb3IgJ2RheU9mV2VlaydcblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnXG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnXG59XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgd2Vla2RheTogYnVpbGRMb2NhbGl6ZUZuKHdlZWtkYXlWYWx1ZXMsICdsb25nJyksXG4gIHdlZWtkYXlzOiBidWlsZExvY2FsaXplQXJyYXlGbih3ZWVrZGF5VmFsdWVzLCAnbG9uZycpLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKG1vbnRoVmFsdWVzLCAnbG9uZycpLFxuICBtb250aHM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKG1vbnRoVmFsdWVzLCAnbG9uZycpLFxuICB0aW1lT2ZEYXk6IGJ1aWxkTG9jYWxpemVGbih0aW1lT2ZEYXlWYWx1ZXMsICdsb25nJywgZnVuY3Rpb24gKGhvdXJzKSB7XG4gICAgcmV0dXJuIChob3VycyAvIDEyKSA+PSAxID8gMSA6IDBcbiAgfSksXG4gIHRpbWVzT2ZEYXk6IGJ1aWxkTG9jYWxpemVBcnJheUZuKHRpbWVPZkRheVZhbHVlcywgJ2xvbmcnKVxufTtcblxuLyoqXG4gKiBAbmFtZSBidWlsZE1hdGNoRm5cbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgQnVpbGQgYG1hdGNoLndlZWtkYXlzYCwgYG1hdGNoLm1vbnRoc2AgYW5kIGBtYXRjaC50aW1lc09mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgYG1hdGNoLndlZWtkYXlzYCwgYG1hdGNoLm1vbnRoc2AgYW5kIGBtYXRjaC50aW1lc09mRGF5YCBwcm9wZXJ0aWVzIGZvciB0aGUgbG9jYWxlIHVzZWQgYnkgYHBhcnNlYCBmdW5jdGlvbi5cbiAqIElmIG5vIGB0eXBlYCBpcyBzdXBwbGllZCB0byB0aGUgb3B0aW9ucyBvZiB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uLCBgZGVmYXVsdFR5cGVgIHdpbGwgYmUgdXNlZCAoc2VlIGV4YW1wbGUpLlxuICogVGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWQgaW50byBjb3JyZXNwb25kaW5nIHBhcnNlciBmdW5jdGlvblxuICogKGBtYXRjaC53ZWVrZGF5YCwgYG1hdGNoLm1vbnRoYCBvciBgbWF0Y2gudGltZU9mRGF5YCByZXNwZWN0aXZlbHkuIFNlZSBgYnVpbGRQYXJzZUZuYCkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSBvYmplY3Qgd2l0aCBSZWdFeHBzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFR5cGUgLSB0aGUgZGVmYXVsdCB0eXBlIGZvciB0aGUgbWF0Y2ggZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIHJlc3VsdGluZyBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWF0Y2hXZWVrZGF5c1BhdHRlcm5zID0ge1xuICogICBuYXJyb3c6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICogICBzaG9ydDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICogICBsb25nOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxuICogfVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXlzID0gYnVpbGRNYXRjaEZuKG1hdGNoV2Vla2RheXNQYXR0ZXJucywgJ2xvbmcnKVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXlzKCdTdW5kYXknLCB7dHlwZTogJ25hcnJvdyd9KSAvLz0+IFsnU3UnLCAnU3UnLCAuLi5dXG4gKiBsb2NhbGUubWF0Y2gud2Vla2RheXMoJ1N1bmRheScpIC8vPT4gWydTdW5kYXknLCAnU3VuZGF5JywgLi4uXVxuICovXG5mdW5jdGlvbiBidWlsZE1hdGNoRm4gKHBhdHRlcm5zLCBkZWZhdWx0VHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSA/IFN0cmluZyhvcHRpb25zLnR5cGUpIDogZGVmYXVsdFR5cGU7XG4gICAgdmFyIHBhdHRlcm4gPSBwYXR0ZXJuc1t0eXBlXSB8fCBwYXR0ZXJuc1tkZWZhdWx0VHlwZV07XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKVxuICB9XG59XG5cbi8qKlxuICogQG5hbWUgYnVpbGRQYXJzZUZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBtYXRjaC53ZWVrZGF5YCwgYG1hdGNoLm1vbnRoYCBhbmQgYG1hdGNoLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBtYXRjaC53ZWVrZGF5YCwgYG1hdGNoLm1vbnRoYCBhbmQgYG1hdGNoLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZSB1c2VkIGJ5IGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBUaGUgYXJndW1lbnQgb2YgdGhlIHJlc3VsdGluZyBmdW5jdGlvbiBpcyB0aGUgcmVzdWx0IG9mIHRoZSBjb3JyZXNwb25kaW5nIG1hdGNoIGZ1bmN0aW9uXG4gKiAoYG1hdGNoLndlZWtkYXlzYCwgYG1hdGNoLm1vbnRoc2Agb3IgYG1hdGNoLnRpbWVzT2ZEYXlgIHJlc3BlY3RpdmVseS4gU2VlIGBidWlsZE1hdGNoRm5gKS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gdGhlIG9iamVjdCB3aXRoIGFycmF5cyBvZiBSZWdFeHBzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFR5cGUgLSB0aGUgZGVmYXVsdCB0eXBlIGZvciB0aGUgcGFyc2VyIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlV2Vla2RheVBhdHRlcm5zID0ge1xuICogICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG4gKiB9XG4gKiBsb2NhbGUubWF0Y2gud2Vla2RheSA9IGJ1aWxkUGFyc2VGbihtYXRjaFdlZWtkYXlzUGF0dGVybnMsICdsb25nJylcbiAqIHZhciBtYXRjaFJlc3VsdCA9IGxvY2FsZS5tYXRjaC53ZWVrZGF5cygnRnJpZGF5JylcbiAqIGxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0KSAvLz0+IDVcbiAqL1xuZnVuY3Rpb24gYnVpbGRQYXJzZUZuIChwYXR0ZXJucywgZGVmYXVsdFR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHZhciBwYXR0ZXJuc0FycmF5ID0gcGF0dGVybnNbdHlwZV0gfHwgcGF0dGVybnNbZGVmYXVsdFR5cGVdO1xuICAgIHZhciBzdHJpbmcgPSBtYXRjaFJlc3VsdFsxXTtcblxuICAgIHJldHVybiBwYXR0ZXJuc0FycmF5LmZpbmRJbmRleChmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChzdHJpbmcpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkTWF0Y2hQYXR0ZXJuRm5cbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgQnVpbGQgbWF0Y2ggZnVuY3Rpb24gZnJvbSBhIHNpbmdsZSBSZWdFeHAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBCdWlsZCBtYXRjaCBmdW5jdGlvbiBmcm9tIGEgc2luZ2xlIFJlZ0V4cC5cbiAqIFVzdWFsbHkgdXNlZCBmb3IgYnVpbGRpbmcgYG1hdGNoLm9yZGluYWxOdW1iZXJzYCBwcm9wZXJ0eSBvZiB0aGUgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXR0ZXJuIC0gdGhlIFJlZ0V4cFxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIGxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycyA9IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oL14oXFxkKykodGh8c3R8bmR8cmQpPy9pKVxuICogbG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKCczcmQnKSAvLz0+IFsnM3JkJywgJzMnLCAncmQnLCAuLi5dXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybilcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIHBhcnNlRGVjaW1hbFxuICogQGNhdGVnb3J5IExvY2FsZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZXMgdGhlIG1hdGNoIHJlc3VsdCBpbnRvIGRlY2ltYWwgbnVtYmVyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2VzIHRoZSBtYXRjaCByZXN1bHQgaW50byBkZWNpbWFsIG51bWJlci5cbiAqIFVzZXMgdGhlIHN0cmluZyBtYXRjaGVkIHdpdGggdGhlIGZpcnN0IHNldCBvZiBwYXJlbnRoZXNlcyBvZiBtYXRjaCBSZWdFeHAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hSZXN1bHQgLSB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IG1hdGNoaW5nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcGFyc2VkIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGxvY2FsZS5tYXRjaCA9IHtcbiAqICAgb3JkaW5hbE51bWJlcnM6IChkaXJ0eVN0cmluZykge1xuICogICAgIHJldHVybiBTdHJpbmcoZGlydHlTdHJpbmcpLm1hdGNoKC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaSlcbiAqICAgfSxcbiAqICAgb3JkaW5hbE51bWJlcjogcGFyc2VEZWNpbWFsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGVjaW1hbCAobWF0Y2hSZXN1bHQpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG1hdGNoUmVzdWx0WzFdLCAxMClcbn1cblxudmFyIG1hdGNoT3JkaW5hbE51bWJlcnNQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuXG52YXIgbWF0Y2hXZWVrZGF5c1BhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBzaG9ydDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICBsb25nOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcblxudmFyIHBhcnNlV2Vla2RheVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xuXG52YXIgbWF0Y2hNb250aHNQYXR0ZXJucyA9IHtcbiAgc2hvcnQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICBsb25nOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xuXG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xuXG4vLyBgdGltZU9mRGF5YCBpcyB1c2VkIHRvIGRlc2lnbmF0ZSB3aGljaCBwYXJ0IG9mIHRoZSBkYXkgaXQgaXMsIHdoZW4gdXNlZCB3aXRoIDEyLWhvdXIgY2xvY2suXG4vLyBVc2UgdGhlIHN5c3RlbSB3aGljaCBpcyB1c2VkIHRoZSBtb3N0IGNvbW1vbmx5IGluIHRoZSBsb2NhbGUuXG4vLyBGb3IgZXhhbXBsZSwgaWYgdGhlIGNvdW50cnkgZG9lc24ndCB1c2UgYS5tLi9wLm0uLCB5b3UgY2FuIHVzZSBgbmlnaHRgL2Btb3JuaW5nYC9gYWZ0ZXJub29uYC9gZXZlbmluZ2A6XG4vL1xuLy8gICB2YXIgbWF0Y2hUaW1lc09mRGF5UGF0dGVybnMgPSB7XG4vLyAgICAgbG9uZzogL14oKGluIHRoZSk/IChuaWdodHxtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nPykpL2lcbi8vICAgfVxuLy9cbi8vICAgdmFyIHBhcnNlVGltZU9mRGF5UGF0dGVybnMgPSB7XG4vLyAgICAgYW55OiBbLyhuaWdodHxtb3JuaW5nKS9pLCAvKGFmdGVybm9vbnxldmVuaW5nKS9pXVxuLy8gICB9XG52YXIgbWF0Y2hUaW1lc09mRGF5UGF0dGVybnMgPSB7XG4gIHNob3J0OiAvXihhbXxwbSkvaSxcbiAgbG9uZzogL14oW2FwXVxcLj9cXHM/bVxcLj8pL2lcbn07XG5cbnZhciBwYXJzZVRpbWVPZkRheVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmEvaSwgL15wL2ldXG59O1xuXG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXJzOiBidWlsZE1hdGNoUGF0dGVybkZuKG1hdGNoT3JkaW5hbE51bWJlcnNQYXR0ZXJuKSxcbiAgb3JkaW5hbE51bWJlcjogcGFyc2VEZWNpbWFsLFxuICB3ZWVrZGF5czogYnVpbGRNYXRjaEZuKG1hdGNoV2Vla2RheXNQYXR0ZXJucywgJ2xvbmcnKSxcbiAgd2Vla2RheTogYnVpbGRQYXJzZUZuKHBhcnNlV2Vla2RheVBhdHRlcm5zLCAnYW55JyksXG4gIG1vbnRoczogYnVpbGRNYXRjaEZuKG1hdGNoTW9udGhzUGF0dGVybnMsICdsb25nJyksXG4gIG1vbnRoOiBidWlsZFBhcnNlRm4ocGFyc2VNb250aFBhdHRlcm5zLCAnYW55JyksXG4gIHRpbWVzT2ZEYXk6IGJ1aWxkTWF0Y2hGbihtYXRjaFRpbWVzT2ZEYXlQYXR0ZXJucywgJ2xvbmcnKSxcbiAgdGltZU9mRGF5OiBidWlsZFBhcnNlRm4ocGFyc2VUaW1lT2ZEYXlQYXR0ZXJucywgJ2FueScpXG59O1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKi9cbnZhciBsb2NhbGUkMSA9IHtcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcblxudmFyIE1JTExJU0VDT05EU19JTl9EQVkkMSA9IDg2NDAwMDAwO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhciAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSQxKSArIDFcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcblxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMVxuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhclxuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMVxuICB9XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnksIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlXG59XG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyQyID0gNjA0ODAwMDAwO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlLCBkaXJ0eU9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlLCBkaXJ0eU9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUskMikgKyAxXG59XG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBNb250aDogMSwgMiwgLi4uLCAxMlxuICAnTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDTW9udGgoKSArIDFcbiAgfSxcblxuICAvLyBNb250aDogMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAnTW8nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGgsIHt1bml0OiAnbW9udGgnfSlcbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gICdNTSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxLCAyKVxuICB9LFxuXG4gIC8vIE1vbnRoOiBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgJ01NTSc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSwge3R5cGU6ICdzaG9ydCd9KVxuICB9LFxuXG4gIC8vIE1vbnRoOiBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAnTU1NTSc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSwge3R5cGU6ICdsb25nJ30pXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMSwgMiwgMywgNFxuICAnUSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDFzdCwgMm5kLCAzcmQsIDR0aFxuICAnUW8nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHt1bml0OiAncXVhcnRlcid9KVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMSwgMiwgLi4uLCAzMVxuICAnRCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxc3QsIDJuZCwgLi4uLCAzMXN0XG4gICdEbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHt1bml0OiAnZGF5T2ZNb250aCd9KVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMDEsIDAyLCAuLi4sIDMxXG4gICdERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgMilcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgJ0RERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFVUQ0RheU9mWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxc3QsIDJuZCwgLi4uLCAzNjZ0aFxuICAnREREbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIoZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpLCB7dW5pdDogJ2RheU9mWWVhcid9KVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAwMDEsIDAwMiwgLi4uLCAzNjZcbiAgJ0REREQnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpLCAzKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLiwgU2FcbiAgJ2RkJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUud2Vla2RheShkYXRlLmdldFVUQ0RheSgpLCB7dHlwZTogJ25hcnJvdyd9KVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW4sIE1vbiwgLi4uLCBTYXRcbiAgJ2RkZCc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLndlZWtkYXkoZGF0ZS5nZXRVVENEYXkoKSwge3R5cGU6ICdzaG9ydCd9KVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheVxuICAnZGRkZCc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLndlZWtkYXkoZGF0ZS5nZXRVVENEYXkoKSwge3R5cGU6ICdsb25nJ30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDAsIDEsIC4uLiwgNlxuICAnZCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF5KClcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMHRoLCAxc3QsIDJuZCwgLi4uLCA2dGhcbiAgJ2RvJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RheSgpLCB7dW5pdDogJ2RheU9mV2Vlayd9KVxuICB9LFxuXG4gIC8vIERheSBvZiBJU08gd2VlazogMSwgMiwgLi4uLCA3XG4gICdFJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXkoKSB8fCA3XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDEsIDIsIC4uLiwgNTNcbiAgJ1cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRVVENJU09XZWVrKGRhdGUpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDFzdCwgMm5kLCAuLi4sIDUzdGhcbiAgJ1dvJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihnZXRVVENJU09XZWVrKGRhdGUpLCB7dW5pdDogJ2lzb1dlZWsnfSlcbiAgfSxcblxuICAvLyBJU08gd2VlazogMDEsIDAyLCAuLi4sIDUzXG4gICdXVyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhnZXRVVENJU09XZWVrKGRhdGUpLCAyKVxuICB9LFxuXG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnWVknOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCA0KS5zdWJzdHIoMilcbiAgfSxcblxuICAvLyBZZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgJ1lZWVknOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCA0KVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ0dHJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gU3RyaW5nKGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpKS5zdWJzdHIoMilcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdHR0dHJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBIb3VyOiAwLCAxLCAuLi4gMjNcbiAgJ0gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0hvdXJzKClcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgJ0hIJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgMilcbiAgfSxcblxuICAvLyBIb3VyOiAxLCAyLCAuLi4sIDEyXG4gICdoJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICByZXR1cm4gMTJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIHJldHVybiBob3VycyAlIDEyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBob3Vyc1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyOiAwMSwgMDIsIC4uLiwgMTJcbiAgJ2hoJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZvcm1hdHRlcnNbJ2gnXShkYXRlKSwgMilcbiAgfSxcblxuICAvLyBNaW51dGU6IDAsIDEsIC4uLiwgNTlcbiAgJ20nOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ01pbnV0ZXMoKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gICdtbSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgMilcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAsIDEsIC4uLiwgNTlcbiAgJ3MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ1NlY29uZHMoKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMDAsIDAxLCAuLi4sIDU5XG4gICdzcyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgMilcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gICdTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIC8gMTAwKVxuICB9LFxuXG4gIC8vIDEvMTAwIG9mIHNlY29uZDogMDAsIDAxLCAuLi4sIDk5XG4gICdTUyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICAnU1NTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCksIDMpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwXG4gICdaJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpLCAnOicpXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTAwLCArMDAwMCwgLi4uICsxMjAwXG4gICdaWic6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZShvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSlcbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwXG4gICdYJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gICd4JzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgcmV0dXJuIG9yaWdpbmFsRGF0ZS5nZXRUaW1lKClcbiAgfSxcblxuICAvLyBBTSwgUE1cbiAgJ0EnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS50aW1lT2ZEYXkoZGF0ZS5nZXRVVENIb3VycygpLCB7dHlwZTogJ3VwcGVyY2FzZSd9KVxuICB9LFxuXG4gIC8vIGFtLCBwbVxuICAnYSc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheShkYXRlLmdldFVUQ0hvdXJzKCksIHt0eXBlOiAnbG93ZXJjYXNlJ30pXG4gIH0sXG5cbiAgLy8gYS5tLiwgcC5tLlxuICAnYWEnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS50aW1lT2ZEYXkoZGF0ZS5nZXRVVENIb3VycygpLCB7dHlwZTogJ2xvbmcnfSlcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUgKG9mZnNldCwgZGVsaW1ldGVyKSB7XG4gIGRlbGltZXRlciA9IGRlbGltZXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKGhvdXJzLCAyKSArIGRlbGltZXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKVxufVxuXG5mdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MgKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBvdXRwdXRcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBhZGRVVENNaW51dGVzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KTtcbiAgZGF0ZS5zZXRVVENNaW51dGVzKGRhdGUuZ2V0VVRDTWludXRlcygpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGVcbn1cblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gLyhcXFtbXltdKl0pfChcXFxcKT8oTFRTfExUfExMTEx8TExMfExMfEx8bGxsbHxsbGx8bGx8bCkvZztcbnZhciBkZWZhdWx0Rm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC8oXFxbW15bXSpdKXwoXFxcXCk/KHh8c3N8c3xtbXxtfGhofGh8ZG98ZGRkZHxkZGR8ZGR8ZHxhYXxhfFpafFp8WVlZWXxZWXxYfFdvfFdXfFd8U1NTfFNTfFN8UW98UXxNb3xNTU1NfE1NTXxNTXxNfEhIfEh8R0dHR3xHR3xFfERvfERERG98RERERHxERER8RER8RHxBfC4pL2c7XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuXG4gKlxuICogQWNjZXB0ZWQgdG9rZW5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICB8IFRva2VuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBNb250aCAgICAgICAgICAgICAgICAgICB8IE0gICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgfFxuICogfCBRdWFydGVyICAgICAgICAgICAgICAgICB8IFEgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICB8IEQgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICB8IERERCAgIHwgMSwgMiwgLi4uLCAzNjYgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IERERG8gIHwgMXN0LCAybmQsIC4uLiwgMzY2dGggICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgIHwgMDAxLCAwMDIsIC4uLiwgMzY2ICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICB8IGQgICAgIHwgMCwgMSwgLi4uLCA2ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgIHwgMHRoLCAxc3QsIC4uLiwgNnRoICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgIHwgU3UsIE1vLCAuLi4sIFNhICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkZCAgIHwgU3VuLCBNb24sIC4uLiwgU2F0ICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkZGQgIHwgU3VuZGF5LCBNb25kYXksIC4uLiwgU2F0dXJkYXkgICAgfFxuICogfCBEYXkgb2YgSVNPIHdlZWsgICAgICAgICB8IEUgICAgIHwgMSwgMiwgLi4uLCA3ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBJU08gd2VlayAgICAgICAgICAgICAgICB8IFcgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFdvICAgIHwgMXN0LCAybmQsIC4uLiwgNTNyZCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFdXICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgfFxuICogfCBZZWFyICAgICAgICAgICAgICAgICAgICB8IFlZICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgIHwgMTkwMCwgMTkwMSwgLi4uLCAyMDk5ICAgICAgICAgICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciB8IEdHICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgIHwgMTkwMCwgMTkwMSwgLi4uLCAyMDk5ICAgICAgICAgICAgfFxuICogfCBBTS9QTSAgICAgICAgICAgICAgICAgICB8IEEgICAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBIb3VyICAgICAgICAgICAgICAgICAgICB8IEggICAgIHwgMCwgMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgIHwgMDAsIDAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGggICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICB8IG0gICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICB8IHMgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgfFxuICogfCAxLzEwIG9mIHNlY29uZCAgICAgICAgICB8IFMgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAxLzEwMCBvZiBzZWNvbmQgICAgICAgICB8IFNTICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZCAgICAgICAgICAgICB8IFNTUyAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgfFxuICogfCBUaW1lem9uZSAgICAgICAgICAgICAgICB8IFogICAgIHwgLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IFpaICAgIHwgLTAxMDAsICswMDAwLCAuLi4sICsxMjAwICAgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICB8IFggICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICB8IHggICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBMb25nIGZvcm1hdCAgICAgICAgICAgICB8IExUICAgIHwgMDU6MzAgYS5tLiAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IExUUyAgIHwgMDU6MzA6MTUgYS5tLiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IEwgICAgIHwgMDcvMDIvMTk5NSAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGwgICAgIHwgNy8yLzE5OTUgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgIHwgSnVseSAyIDE5OTUgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGxsICAgIHwgSnVsIDIgMTk5NSAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgIHwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGxsbCAgIHwgSnVsIDIgMTk5NSAwNTozMCBhLm0uICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgIHwgU3VuZGF5LCBKdWx5IDIgMTk5NSAwNTozMCBhLm0uICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8IGxsbGwgIHwgU3VuLCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgICAgfFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgaW4gc3F1YXJlIGJyYWNrZXRzIGFyZSBlc2NhcGVkLlxuICpcbiAqIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KFxuICogICBuZXcgRGF0ZSgyMDE0LCAxLCAxMSksXG4gKiAgICdNTS9ERC9ZWVlZJ1xuICogKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgICdEbyBbZGVdIE1NTU0gWVlZWScsXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCAoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG5cbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGxvY2FsZSQxO1xuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKVxuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKVxuICB9XG5cbiAgdmFyIGxvY2FsZUZvcm1hdHRlcnMgPSBsb2NhbGUuZm9ybWF0dGVycyB8fCB7fTtcbiAgdmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSBsb2NhbGUuZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCB8fCBkZWZhdWx0Rm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cDtcbiAgdmFyIGZvcm1hdExvbmcgPSBsb2NhbGUuZm9ybWF0TG9uZztcblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSwgb3B0aW9ucykpIHtcbiAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIHZhciB1dGNEYXRlID0gYWRkVVRDTWludXRlcyhvcmlnaW5hbERhdGUsIC10aW1lem9uZU9mZnNldCwgb3B0aW9ucyk7XG5cbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgZm9ybWF0dGVyT3B0aW9ucy5sb2NhbGUgPSBsb2NhbGU7XG4gIGZvcm1hdHRlck9wdGlvbnMuZm9ybWF0dGVycyA9IGZvcm1hdHRlcnM7XG5cbiAgLy8gV2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB3aWxsIGxpa2VseSBiZSBhIHBhcnQgb2YgcHVibGljIEFQSS5cbiAgLy8gUmlnaHQgbm93LCBwbGVhc2UgZG9uJ3QgdXNlIGl0IGluIGxvY2FsZXMuIElmIHlvdSBoYXZlIHRvIHVzZSBhbiBvcmlnaW5hbCBkYXRlLFxuICAvLyBwbGVhc2UgcmVzdG9yZSBpdCBmcm9tIGBkYXRlYCwgYWRkaW5nIGEgdGltZXpvbmUgb2Zmc2V0IHRvIGl0LlxuICBmb3JtYXR0ZXJPcHRpb25zLl9vcmlnaW5hbERhdGUgPSBvcmlnaW5hbERhdGU7XG5cbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0clxuICAgIC5yZXBsYWNlKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwLCBmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgICBpZiAoc3Vic3RyaW5nWzBdID09PSAnWycpIHtcbiAgICAgICAgcmV0dXJuIHN1YnN0cmluZ1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Vic3RyaW5nWzBdID09PSAnXFxcXCcpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXRMb25nKHN1YnN0cmluZylcbiAgICB9KVxuICAgIC5yZXBsYWNlKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAsIGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBsb2NhbGVGb3JtYXR0ZXJzW3N1YnN0cmluZ10gfHwgZm9ybWF0dGVyc1tzdWJzdHJpbmddO1xuXG4gICAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgZm9ybWF0dGVyT3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKVxuICAgICAgfVxuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nIChpbnB1dCkge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xdJC9nLCAnJylcbiAgfVxuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJylcbn1cblxuLyoqXG4gKiBAbmFtZSBzdWJNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgc3VidHJhY3RlZFxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnR1ZXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMzAgbWludXRlcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjowMDowMDpcbiAqIHZhciByZXN1bHQgPSBzdWJNaW51dGVzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTE6MzA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViTWludXRlcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbnV0ZXMoZGlydHlEYXRlLCAtYW1vdW50LCBkaXJ0eU9wdGlvbnMpXG59XG5cbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiB2YXIgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc0FmdGVyIChkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUgKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMiBhcmd1bWVudHMgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBwcmVzZW50JylcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKVxufVxuXG4vKipcbiAqIEBuYW1lIGlzRXF1YWxcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGVxdWFsXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiB2YXIgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKVxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCQxIChkaXJ0eUxlZnREYXRlLCBkaXJ0eVJpZ2h0RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgcHJlc2VudCcpXG4gIH1cblxuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlMZWZ0RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eVJpZ2h0RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0LmdldFRpbWUoKVxufVxuXG52YXIgcGF0dGVybnMkMSA9IHtcbiAgJ00nOiAvXigxWzAtMl18MD9cXGQpLywgLy8gMCB0byAxMlxuICAnRCc6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLywgLy8gMCB0byAzMVxuICAnREREJzogL14oMzZbMC02XXwzWzAtNV1cXGR8WzAtMl0/XFxkP1xcZCkvLCAvLyAwIHRvIDM2NlxuICAnVyc6IC9eKDVbMC0zXXxbMC00XT9cXGQpLywgLy8gMCB0byA1M1xuICAnWVlZWSc6IC9eKFxcZHsxLDR9KS8sIC8vIDAgdG8gOTk5OVxuICAnSCc6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLywgLy8gMCB0byAyM1xuICAnbSc6IC9eKFswLTVdP1xcZCkvLCAvLyAwIHRvIDU5XG4gICdaJzogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KS8sXG4gICdaWic6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KS8sXG4gIHNpbmdsZURpZ2l0OiAvXihcXGQpLyxcbiAgdHdvRGlnaXRzOiAvXihcXGR7Mn0pLyxcbiAgdGhyZWVEaWdpdHM6IC9eKFxcZHszfSkvLFxuICBmb3VyRGlnaXRzOiAvXihcXGR7NH0pLyxcbiAgYW55RGlnaXRzOiAvXihcXGQrKS9cbn07XG5cbmZ1bmN0aW9uIHBhcnNlRGVjaW1hbCQxIChtYXRjaFJlc3VsdCkge1xuICByZXR1cm4gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMV0sIDEwKVxufVxuXG52YXIgcGFyc2VycyA9IHtcbiAgLy8gWWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gICdZWSc6IHtcbiAgICB1bml0OiAndHdvRGlnaXRZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KVxuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgJ1lZWVknOiB7XG4gICAgdW5pdDogJ3llYXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLllZWVksXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnR0cnOiB7XG4gICAgdW5pdDogJ2lzb1llYXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpICsgMTkwMFxuICAgIH1cbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdHR0dHJzoge1xuICAgIHVuaXQ6ICdpc29ZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ZWVlZLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgJ1EnOiB7XG4gICAgdW5pdDogJ3F1YXJ0ZXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgcXVhcnRlclxuICAnUW8nOiB7XG4gICAgdW5pdDogJ3F1YXJ0ZXInLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ3F1YXJ0ZXInfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ3F1YXJ0ZXInfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IDEsIDIsIC4uLiwgMTJcbiAgJ00nOiB7XG4gICAgdW5pdDogJ21vbnRoJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5NLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdCkgLSAxXG4gICAgfVxuICB9LFxuXG4gIC8vIE9yZGluYWwgbW9udGhcbiAgJ01vJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycyhzdHJpbmcsIHt1bml0OiAnbW9udGgnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ21vbnRoJ30pIC0gMVxuICAgIH1cbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gICdNTSc6IHtcbiAgICB1bml0OiAnbW9udGgnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpIC0gMVxuICAgIH1cbiAgfSxcblxuICAvLyBNb250aDogSmFuLCBGZWIsIC4uLiwgRGVjXG4gICdNTU0nOiB7XG4gICAgdW5pdDogJ21vbnRoJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm1vbnRocyhzdHJpbmcsIHt0eXBlOiAnc2hvcnQnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aChtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBNb250aDogSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgJ01NTU0nOiB7XG4gICAgdW5pdDogJ21vbnRoJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm1vbnRocyhzdHJpbmcsIHt0eXBlOiAnbG9uZyd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aHMoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aChtYXRjaFJlc3VsdCwge3R5cGU6ICdsb25nJ30pO1xuXG4gICAgICBpZiAocGFyc2VSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVJlc3VsdCA9IG9wdGlvbnMubG9jYWxlLm1hdGNoLm1vbnRoKG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VSZXN1bHRcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDEsIDIsIC4uLiwgNTNcbiAgJ1cnOiB7XG4gICAgdW5pdDogJ2lzb1dlZWsnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLlcsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gT3JkaW5hbCBJU08gd2Vla1xuICAnV28nOiB7XG4gICAgdW5pdDogJ2lzb1dlZWsnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ2lzb1dlZWsnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ2lzb1dlZWsnfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWs6IDAxLCAwMiwgLi4uLCA1M1xuICAnV1cnOiB7XG4gICAgdW5pdDogJ2lzb1dlZWsnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gICdkJzoge1xuICAgIHVuaXQ6ICdkYXlPZldlZWsnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgZGF5IG9mIHdlZWtcbiAgJ2RvJzoge1xuICAgIHVuaXQ6ICdkYXlPZldlZWsnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ2RheU9mV2Vlayd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXIobWF0Y2hSZXN1bHQsIHt1bml0OiAnZGF5T2ZXZWVrJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLiwgU2FcbiAgJ2RkJzoge1xuICAgIHVuaXQ6ICdkYXlPZldlZWsnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheXMoc3RyaW5nLCB7dHlwZTogJ25hcnJvdyd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbmFycm93J30pXG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW4sIE1vbiwgLi4uLCBTYXRcbiAgJ2RkZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICdzaG9ydCd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5cyhzdHJpbmcsIHt0eXBlOiAnbmFycm93J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pO1xuXG4gICAgICBpZiAocGFyc2VSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVJlc3VsdCA9IG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbmFycm93J30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VSZXN1bHRcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1bmRheSwgTW9uZGF5LCAuLi4sIFNhdHVyZGF5XG4gICdkZGRkJzoge1xuICAgIHVuaXQ6ICdkYXlPZldlZWsnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheXMoc3RyaW5nLCB7dHlwZTogJ2xvbmcnfSkgfHxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheXMoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pIHx8XG4gICAgICAgIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICduYXJyb3cnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBwYXJzZVJlc3VsdCA9IG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbG9uZyd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pO1xuXG4gICAgICAgIGlmIChwYXJzZVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ25hcnJvdyd9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VSZXN1bHRcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGF5IG9mIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDdcbiAgJ0UnOiB7XG4gICAgdW5pdDogJ2RheU9mSVNPV2VlaycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuc2luZ2xlRGlnaXQsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDEsIDIsIC4uLiwgMzFcbiAgJ0QnOiB7XG4gICAgdW5pdDogJ2RheU9mTW9udGgnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLkQsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gT3JkaW5hbCBkYXkgb2YgbW9udGhcbiAgJ0RvJzoge1xuICAgIHVuaXQ6ICdkYXlPZk1vbnRoJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdkYXlPZk1vbnRoJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdkYXlPZk1vbnRoJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMDEsIDAyLCAuLi4sIDMxXG4gICdERCc6IHtcbiAgICB1bml0OiAnZGF5T2ZNb250aCcsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxLCAyLCAuLi4sIDM2NlxuICAnREREJzoge1xuICAgIHVuaXQ6ICdkYXlPZlllYXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLkRERCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBPcmRpbmFsIGRheSBvZiB5ZWFyXG4gICdERERvJzoge1xuICAgIHVuaXQ6ICdkYXlPZlllYXInLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ2RheU9mWWVhcid9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXIobWF0Y2hSZXN1bHQsIHt1bml0OiAnZGF5T2ZZZWFyJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAwMDEsIDAwMiwgLi4uLCAzNjZcbiAgJ0REREQnOiB7XG4gICAgdW5pdDogJ2RheU9mWWVhcicsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudGhyZWVEaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gQU0sIFBNXG4gICdBJzoge1xuICAgIHVuaXQ6ICd0aW1lT2ZEYXknLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZXNPZkRheShzdHJpbmcsIHt0eXBlOiAnc2hvcnQnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lT2ZEYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnc2hvcnQnfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gYS5tLiwgcC5tLlxuICAnYWEnOiB7XG4gICAgdW5pdDogJ3RpbWVPZkRheScsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lc09mRGF5KHN0cmluZywge3R5cGU6ICdsb25nJ30pIHx8XG4gICAgICAgIG9wdGlvbnMubG9jYWxlLm1hdGNoLnRpbWVzT2ZEYXkoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lT2ZEYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbG9uZyd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lT2ZEYXkobWF0Y2hSZXN1bHQsIHt0eXBlOiAnc2hvcnQnfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZVJlc3VsdFxuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyOiAwLCAxLCAuLi4gMjNcbiAgJ0gnOiB7XG4gICAgdW5pdDogJ2hvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ILFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEhvdXI6IDAwLCAwMSwgLi4uLCAyM1xuICAnSEgnOiB7XG4gICAgdW5pdDogJ2hvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gSG91cjogMSwgMiwgLi4uLCAxMlxuICAnaCc6IHtcbiAgICB1bml0OiAndGltZU9mRGF5SG91cnMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLk0sXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gSG91cjogMDEsIDAyLCAuLi4sIDEyXG4gICdoaCc6IHtcbiAgICB1bml0OiAndGltZU9mRGF5SG91cnMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBNaW51dGU6IDAsIDEsIC4uLiwgNTlcbiAgJ20nOiB7XG4gICAgdW5pdDogJ21pbnV0ZXMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLm0sXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwMCwgMDEsIC4uLiwgNTlcbiAgJ21tJzoge1xuICAgIHVuaXQ6ICdtaW51dGVzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwLCAxLCAuLi4sIDU5XG4gICdzJzoge1xuICAgIHVuaXQ6ICdzZWNvbmRzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5tLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFNlY29uZDogMDAsIDAxLCAuLi4sIDU5XG4gICdzcyc6IHtcbiAgICB1bml0OiAnc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIDEvMTAgb2Ygc2Vjb25kOiAwLCAxLCAuLi4sIDlcbiAgJ1MnOiB7XG4gICAgdW5pdDogJ21pbGxpc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuc2luZ2xlRGlnaXQsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSAqIDEwMFxuICAgIH1cbiAgfSxcblxuICAvLyAxLzEwMCBvZiBzZWNvbmQ6IDAwLCAwMSwgLi4uLCA5OVxuICAnU1MnOiB7XG4gICAgdW5pdDogJ21pbGxpc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdCkgKiAxMFxuICAgIH1cbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZDogMDAwLCAwMDEsIC4uLiwgOTk5XG4gICdTU1MnOiB7XG4gICAgdW5pdDogJ21pbGxpc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudGhyZWVEaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwXG4gICdaJzoge1xuICAgIHVuaXQ6ICd0aW1lem9uZScsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuWixcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICB2YXIgc2lnbiA9IG1hdGNoUmVzdWx0WzFdO1xuICAgICAgdmFyIGhvdXJzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMl0sIDEwKTtcbiAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKTtcbiAgICAgIHZhciBhYnNvbHV0ZU9mZnNldCA9IGhvdXJzICogNjAgKyBtaW51dGVzO1xuICAgICAgcmV0dXJuIChzaWduID09PSAnKycpID8gYWJzb2x1dGVPZmZzZXQgOiAtYWJzb2x1dGVPZmZzZXRcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTAwLCArMDAwMCwgLi4uICsxMjAwXG4gICdaWic6IHtcbiAgICB1bml0OiAndGltZXpvbmUnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLlpaLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHZhciBzaWduID0gbWF0Y2hSZXN1bHRbMV07XG4gICAgICB2YXIgaG91cnMgPSBwYXJzZUludChtYXRjaFJlc3VsdFsyXSwgMTApO1xuICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludChtYXRjaFJlc3VsdFszXSwgMTApO1xuICAgICAgdmFyIGFic29sdXRlT2Zmc2V0ID0gaG91cnMgKiA2MCArIG1pbnV0ZXM7XG4gICAgICByZXR1cm4gKHNpZ24gPT09ICcrJykgPyBhYnNvbHV0ZU9mZnNldCA6IC1hYnNvbHV0ZU9mZnNldFxuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwXG4gICdYJzoge1xuICAgIHVuaXQ6ICd0aW1lc3RhbXAnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLmFueURpZ2l0cyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpICogMTAwMFxuICAgIH1cbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjA5MDBcbiAgJ3gnOiB7XG4gICAgdW5pdDogJ3RpbWVzdGFtcCcsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuYW55RGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9XG59O1xuXG5wYXJzZXJzWydhJ10gPSBwYXJzZXJzWydBJ107XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDRGF5IChkaXJ0eURhdGUsIGRpcnR5RGF5LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09PSB1bmRlZmluZWQgPyAwIDogTnVtYmVyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IE51bWJlcihvcHRpb25zLndlZWtTdGFydHNPbik7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpXG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXkgPSBOdW1iZXIoZGlydHlEYXkpO1xuXG4gIHZhciBjdXJyZW50RGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcblxuICB2YXIgZGlmZiA9IChkYXlJbmRleCA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIGN1cnJlbnREYXk7XG5cbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDSVNPRGF5IChkaXJ0eURhdGUsIGRpcnR5RGF5LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRheSA9IE51bWJlcihkaXJ0eURheSk7XG5cbiAgaWYgKGRheSAlIDcgPT09IDApIHtcbiAgICBkYXkgPSBkYXkgLSA3O1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGN1cnJlbnREYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gIHZhciByZW1haW5kZXIgPSBkYXkgJSA3O1xuICB2YXIgZGF5SW5kZXggPSAocmVtYWluZGVyICsgNykgJSA3O1xuXG4gIHZhciBkaWZmID0gKGRheUluZGV4IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gY3VycmVudERheTtcblxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGVcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBzZXRVVENJU09XZWVrIChkaXJ0eURhdGUsIGRpcnR5SVNPV2VlaywgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGlzb1dlZWsgPSBOdW1iZXIoZGlydHlJU09XZWVrKTtcbiAgdmFyIGRpZmYgPSBnZXRVVENJU09XZWVrKGRhdGUsIGRpcnR5T3B0aW9ucykgLSBpc29XZWVrO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBkYXRlXG59XG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZJDMgPSA4NjQwMDAwMDtcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBzZXRVVENJU09XZWVrWWVhciAoZGlydHlEYXRlLCBkaXJ0eUlTT1llYXIsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBpc29ZZWFyID0gTnVtYmVyKGRpcnR5SVNPWWVhcik7XG4gIHZhciBkYXRlU3RhcnRPZlllYXIgPSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRpZmYgPSBNYXRoLmZsb29yKChkYXRlLmdldFRpbWUoKSAtIGRhdGVTdGFydE9mWWVhci5nZXRUaW1lKCkpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSQzKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoaXNvWWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrWWVhcihmb3VydGhPZkphbnVhcnksIGRpcnR5T3B0aW9ucyk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZVxufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSQ2ID0gNjAwMDA7XG5cbmZ1bmN0aW9uIHNldFRpbWVPZkRheSAoaG91cnMsIHRpbWVPZkRheSkge1xuICB2YXIgaXNBTSA9IHRpbWVPZkRheSA9PT0gMDtcblxuICBpZiAoaXNBTSkge1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChob3VycyAhPT0gMTIpIHtcbiAgICAgIHJldHVybiAxMiArIGhvdXJzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhvdXJzXG59XG5cbnZhciB1bml0cyA9IHtcbiAgdHdvRGlnaXRZZWFyOiB7XG4gICAgcHJpb3JpdHk6IDEwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICB2YXIgY2VudHVyeSA9IE1hdGguZmxvb3IoZGF0ZVZhbHVlcy5kYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLyAxMDApO1xuICAgICAgdmFyIHllYXIgPSBjZW50dXJ5ICogMTAwICsgdmFsdWU7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgMSk7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB5ZWFyOiB7XG4gICAgcHJpb3JpdHk6IDEwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIDAsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgaXNvWWVhcjoge1xuICAgIHByaW9yaXR5OiAxMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKHNldFVUQ0lTT1dlZWtZZWFyKGRhdGVWYWx1ZXMuZGF0ZSwgdmFsdWUsIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIHF1YXJ0ZXI6IHtcbiAgICBwcmlvcml0eTogMjAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgbW9udGg6IHtcbiAgICBwcmlvcml0eTogMzAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgMSk7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBpc29XZWVrOiB7XG4gICAgcHJpb3JpdHk6IDQwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUgPSBzdGFydE9mVVRDSVNPV2VlayhzZXRVVENJU09XZWVrKGRhdGVWYWx1ZXMuZGF0ZSwgdmFsdWUsIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIGRheU9mV2Vlazoge1xuICAgIHByaW9yaXR5OiA1MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc2V0VVRDRGF5KGRhdGVWYWx1ZXMuZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgZGF5T2ZJU09XZWVrOiB7XG4gICAgcHJpb3JpdHk6IDUwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUgPSBzZXRVVENJU09EYXkoZGF0ZVZhbHVlcy5kYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBkYXlPZk1vbnRoOiB7XG4gICAgcHJpb3JpdHk6IDUwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSk7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBkYXlPZlllYXI6IHtcbiAgICBwcmlvcml0eTogNTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNb250aCgwLCB2YWx1ZSk7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB0aW1lT2ZEYXk6IHtcbiAgICBwcmlvcml0eTogNjAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMudGltZU9mRGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBob3Vyczoge1xuICAgIHByaW9yaXR5OiA3MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIHRpbWVPZkRheUhvdXJzOiB7XG4gICAgcHJpb3JpdHk6IDcwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdGltZU9mRGF5ID0gZGF0ZVZhbHVlcy50aW1lT2ZEYXk7XG4gICAgICBpZiAodGltZU9mRGF5ICE9IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSBzZXRUaW1lT2ZEYXkodmFsdWUsIHRpbWVPZkRheSk7XG4gICAgICB9XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDSG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgbWludXRlczoge1xuICAgIHByaW9yaXR5OiA4MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ01pbnV0ZXModmFsdWUsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgc2Vjb25kczoge1xuICAgIHByaW9yaXR5OiA5MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ1NlY29uZHModmFsdWUsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgbWlsbGlzZWNvbmRzOiB7XG4gICAgcHJpb3JpdHk6IDEwMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB0aW1lem9uZToge1xuICAgIHByaW9yaXR5OiAxMTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGVWYWx1ZXMuZGF0ZS5nZXRUaW1lKCkgLSB2YWx1ZSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNik7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB0aW1lc3RhbXA6IHtcbiAgICBwcmlvcml0eTogMTIwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfVxufTtcblxudmFyIFRJTUVaT05FX1VOSVRfUFJJT1JJVFkgPSAxMTA7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSQ3ID0gNjAwMDA7XG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCQxID0gLyhcXFtbXltdKl0pfChcXFxcKT8oTFRTfExUfExMTEx8TExMfExMfEx8bGxsbHxsbGx8bGx8bCkvZztcbnZhciBkZWZhdWx0UGFyc2luZ1Rva2Vuc1JlZ0V4cCA9IC8oXFxbW15bXSpdKXwoXFxcXCk/KHh8c3N8c3xtbXxtfGhofGh8ZG98ZGRkZHxkZGR8ZGR8ZHxhYXxhfFpafFp8WVlZWXxZWXxYfFdvfFdXfFd8U1NTfFNTfFN8UW98UXxNb3xNTU1NfE1NTXxNTXxNfEhIfEh8R0dHR3xHR3xFfERvfERERG98RERERHxERER8RER8RHxBfC4pL2c7XG5cbi8qKlxuICogQG5hbWUgcGFyc2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRhdGUgcGFyc2VkIGZyb20gc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmb3JtYXQuXG4gKlxuICogQWNjZXB0ZWQgZm9ybWF0IHRva2VuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgfCBQcmlvcml0eSB8IFRva2VuIHwgSW5wdXQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IFllYXIgICAgICAgICAgICAgICAgICAgIHwgMTAgICAgICAgfCBZWSAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFlZWVkgIHwgMTkwMCwgMTkwMSwgLi4uLCAyMDk5ICAgICAgICAgICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciB8IDEwICAgICAgIHwgR0cgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBHR0dHICB8IDE5MDAsIDE5MDEsIC4uLiwgMjA5OSAgICAgICAgICAgIHxcbiAqIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgfCAyMCAgICAgICB8IFEgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgUW8gICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICB8XG4gKiB8IE1vbnRoICAgICAgICAgICAgICAgICAgIHwgMzAgICAgICAgfCBNICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IE1vICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgTU0gICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBNTU0gICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IE1NTU0gIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgfFxuICogfCBJU08gd2VlayAgICAgICAgICAgICAgICB8IDQwICAgICAgIHwgVyAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBXbyAgICB8IDFzdCwgMm5kLCAuLi4sIDUzcmQgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFdXICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICB8IDUwICAgICAgIHwgZCAgICAgfCAwLCAxLCAuLi4sIDYgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBkbyAgICB8IDB0aCwgMXN0LCAuLi4sIDZ0aCAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGRkICAgIHwgU3UsIE1vLCAuLi4sIFNhICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgZGRkICAgfCBTdW4sIE1vbiwgLi4uLCBTYXQgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBkZGRkICB8IFN1bmRheSwgTW9uZGF5LCAuLi4sIFNhdHVyZGF5ICAgIHxcbiAqIHwgRGF5IG9mIElTTyB3ZWVrICAgICAgICAgfCA1MCAgICAgICB8IEUgICAgIHwgMSwgMiwgLi4uLCA3ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICB8IDUwICAgICAgIHwgRCAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBEbyAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IEREICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICB8IDUwICAgICAgIHwgREREICAgfCAxLCAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBERERvICB8IDFzdCwgMm5kLCAuLi4sIDM2NnRoICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IEREREQgIHwgMDAxLCAwMDIsIC4uLiwgMzY2ICAgICAgICAgICAgICAgfFxuICogfCBUaW1lIG9mIGRheSAgICAgICAgICAgICB8IDYwICAgICAgIHwgQSAgICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBIb3VyICAgICAgICAgICAgICAgICAgICB8IDcwICAgICAgIHwgSCAgICAgfCAwLCAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBISCAgICB8IDAwLCAwMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgVGltZSBvZiBkYXkgaG91ciAgICAgICAgfCA3MCAgICAgICB8IGggICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgaGggICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgIHwgODAgICAgICAgfCBtICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IG1tICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICB8IDkwICAgICAgIHwgcyAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBzcyAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgMS8xMCBvZiBzZWNvbmQgICAgICAgICAgfCAxMDAgICAgICB8IFMgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAxLzEwMCBvZiBzZWNvbmQgICAgICAgICB8IDEwMCAgICAgIHwgU1MgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kICAgICAgICAgICAgIHwgMTAwICAgICAgfCBTU1MgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgIHxcbiAqIHwgVGltZXpvbmUgICAgICAgICAgICAgICAgfCAxMTAgICAgICB8IFogICAgIHwgLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgWlogICAgfCAtMDEwMCwgKzAwMDAsIC4uLiwgKzEyMDAgICAgICAgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgIHwgMTIwICAgICAgfCBYICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgfCAxMjAgICAgICB8IHggICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIFZhbHVlcyB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBkYXRlIGluIHRoZSBhc2NlbmRpbmcgb3JkZXIgb2YgaXRzIHVuaXQncyBwcmlvcml0eS5cbiAqIFVuaXRzIG9mIGFuIGVxdWFsIHByaW9yaXR5IG92ZXJ3cml0ZSBlYWNoIG90aGVyIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlLlxuICpcbiAqIElmIG5vIHZhbHVlcyBvZiBoaWdoZXIgcHJpb3JpdHkgYXJlIHBhcnNlZCAoZS5nLiB3aGVuIHBhcnNpbmcgc3RyaW5nICdKYW51YXJ5IDFzdCcgd2l0aG91dCBhIHllYXIpLFxuICogdGhlIHZhbHVlcyB3aWxsIGJlIHRha2VuIGZyb20gM3JkIGFyZ3VtZW50IGBiYXNlRGF0ZWAgd2hpY2ggd29ya3MgYXMgYSBjb250ZXh0IG9mIHBhcnNpbmcuXG4gKlxuICogYGJhc2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgYmFzZURhdGVgIHRvIHN1cHBseSwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIERhdGU6XG4gKiBgcGFyc2UoJzAyLzExLzIwMTQnLCAnTU0vREQvWVlZWScsIG5ldyBEYXRlKCkpYFxuICogSW4gdGhpcyBjYXNlIHBhcnNpbmcgd2lsbCBiZSBkb25lIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IGRhdGUuXG4gKiBJZiBgYmFzZURhdGVgIGlzIGBJbnZhbGlkIERhdGVgIG9yIGEgdmFsdWUgbm90IGNvbnZlcnRpYmxlIHRvIHZhbGlkIGBEYXRlYCxcbiAqIHRoZW4gYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBBbHNvLCBgcGFyc2VgIHVuZm9sZHMgbG9uZyBmb3JtYXRzIGxpa2UgdGhvc2UgaW4gW2Zvcm1hdF17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXR9OlxuICogfCBUb2tlbiB8IElucHV0IGV4YW1wbGVzICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgTFQgICAgfCAwNTozMCBhLm0uICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBMVFMgICB8IDA1OjMwOjE1IGEubS4gICAgICAgICAgICAgICAgICB8XG4gKiB8IEwgICAgIHwgMDcvMDIvMTk5NSAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgbCAgICAgfCA3LzIvMTk5NSAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBMTCAgICB8IEp1bHkgMiAxOTk1ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGxsICAgIHwgSnVsIDIgMTk5NSAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTExMICAgfCBKdWx5IDIgMTk5NSAwNTozMCBhLm0uICAgICAgICAgfFxuICogfCBsbGwgICB8IEp1bCAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICAgICB8XG4gKiB8IExMTEwgIHwgU3VuZGF5LCBKdWx5IDIgMTk5NSAwNTozMCBhLm0uIHxcbiAqIHwgbGxsbCAgfCBTdW4sIEp1bCAyIDE5OTUgMDU6MzAgYS5tLiAgICAgfFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgaW4gc3F1YXJlIGJyYWNrZXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIGFyZSBlc2NhcGVkLlxuICpcbiAqIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqIElmIGBmb3JtYXRTdHJpbmdgIG1hdGNoZXMgd2l0aCBgZGF0ZVN0cmluZ2AgYnV0IGRvZXMgbm90IHByb3ZpZGVzIHRva2VucywgYGJhc2VEYXRlYCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIElmIHBhcnNpbmcgZmFpbGVkLCBgSW52YWxpZCBEYXRlYCB3aWxsIGJlIHJldHVybmVkLlxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVN0cmluZyAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRTdHJpbmcgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gdG9vayB0aGUgbWlzc2luZyBoaWdoZXIgcHJpb3JpdHkgdmFsdWVzIGZyb21cbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAzIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBtYXRjaGAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAxMSBGZWJydWFyeSAyMDE0IGZyb20gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoXG4gKiAgICcwMi8xMS8yMDE0JyxcbiAqICAgJ01NL0REL1lZWVknLFxuICogICBuZXcgRGF0ZSgpXG4gKiApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAyOHRoIG9mIEZlYnJ1YXJ5IGluIEVuZ2xpc2ggbG9jYWxlIGluIHRoZSBjb250ZXh0IG9mIDIwMTAgeWVhcjpcbiAqIGltcG9ydCBlb0xvY2FsZSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoXG4gKiAgICcyOC1hIGRlIGZlYnJ1YXJvJyxcbiAqICAgJ0RvIFtkZV0gTU1NTScsXG4gKiAgIG5ldyBEYXRlKDIwMTAsIDAsIDEpXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiBTdW4gRmViIDI4IDIwMTAgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gcGFyc2UgKGRpcnR5RGF0ZVN0cmluZywgZGlydHlGb3JtYXRTdHJpbmcsIGRpcnR5QmFzZURhdGUsIGRpcnR5T3B0aW9ucykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCczIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIHByZXNlbnQnKVxuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmcgPSBTdHJpbmcoZGlydHlEYXRlU3RyaW5nKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09PSB1bmRlZmluZWQgPyAwIDogTnVtYmVyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5JylcbiAgfVxuXG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBsb2NhbGUkMTtcbiAgdmFyIGxvY2FsZVBhcnNlcnMgPSBsb2NhbGUucGFyc2VycyB8fCB7fTtcbiAgdmFyIGxvY2FsZVVuaXRzID0gbG9jYWxlLnVuaXRzIHx8IHt9O1xuXG4gIGlmICghbG9jYWxlLm1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbWF0Y2ggcHJvcGVydHknKVxuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKVxuICB9XG5cbiAgdmFyIGZvcm1hdFN0cmluZyA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cmluZylcbiAgICAucmVwbGFjZShsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCQxLCBmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgICBpZiAoc3Vic3RyaW5nWzBdID09PSAnWycpIHtcbiAgICAgICAgcmV0dXJuIHN1YnN0cmluZ1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Vic3RyaW5nWzBdID09PSAnXFxcXCcpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyQxKHN1YnN0cmluZylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXRMb25nKHN1YnN0cmluZylcbiAgICB9KTtcblxuICBpZiAoZm9ybWF0U3RyaW5nID09PSAnJykge1xuICAgIGlmIChkYXRlU3RyaW5nID09PSAnJykge1xuICAgICAgcmV0dXJuIHRvRGF0ZShkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICAgIH1cbiAgfVxuXG4gIHZhciBzdWJGbk9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgc3ViRm5PcHRpb25zLmxvY2FsZSA9IGxvY2FsZTtcblxuICB2YXIgdG9rZW5zID0gZm9ybWF0U3RyaW5nLm1hdGNoKGxvY2FsZS5wYXJzaW5nVG9rZW5zUmVnRXhwIHx8IGRlZmF1bHRQYXJzaW5nVG9rZW5zUmVnRXhwKTtcbiAgdmFyIHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGg7XG5cbiAgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIHZhciBzZXR0ZXJzID0gW3tcbiAgICBwcmlvcml0eTogVElNRVpPTkVfVU5JVF9QUklPUklUWSxcbiAgICBzZXQ6IGRhdGVUb1N5c3RlbVRpbWV6b25lLFxuICAgIGluZGV4OiAwXG4gIH1dO1xuXG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgdmFyIHBhcnNlciA9IGxvY2FsZVBhcnNlcnNbdG9rZW5dIHx8IHBhcnNlcnNbdG9rZW5dO1xuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgIHZhciBtYXRjaFJlc3VsdDtcblxuICAgICAgaWYgKHBhcnNlci5tYXRjaCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICBtYXRjaFJlc3VsdCA9IHBhcnNlci5tYXRjaC5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2hSZXN1bHQgPSBwYXJzZXIubWF0Y2goZGF0ZVN0cmluZywgc3ViRm5PcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICAgICAgfVxuXG4gICAgICB2YXIgdW5pdE5hbWUgPSBwYXJzZXIudW5pdDtcbiAgICAgIHZhciB1bml0ID0gbG9jYWxlVW5pdHNbdW5pdE5hbWVdIHx8IHVuaXRzW3VuaXROYW1lXTtcblxuICAgICAgc2V0dGVycy5wdXNoKHtcbiAgICAgICAgcHJpb3JpdHk6IHVuaXQucHJpb3JpdHksXG4gICAgICAgIHNldDogdW5pdC5zZXQsXG4gICAgICAgIHZhbHVlOiBwYXJzZXIucGFyc2UobWF0Y2hSZXN1bHQsIHN1YkZuT3B0aW9ucyksXG4gICAgICAgIGluZGV4OiBzZXR0ZXJzLmxlbmd0aFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzdWJzdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKHN1YnN0cmluZy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaGVhZCA9IHRva2Vuc1tpXS5tYXRjaCgvXlxcWy4qXSQvKSA/IHRva2Vuc1tpXS5yZXBsYWNlKC9eXFxbfF0kL2csICcnKSA6IHRva2Vuc1tpXTtcbiAgICAgIGlmIChkYXRlU3RyaW5nLmluZGV4T2YoaGVhZCkgPT09IDApIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc2xpY2UoaGVhZC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVyc1xuICAgIC5tYXAoZnVuY3Rpb24gKHNldHRlcikge1xuICAgICAgcmV0dXJuIHNldHRlci5wcmlvcml0eVxuICAgIH0pXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYlxuICAgIH0pXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocHJpb3JpdHksIGluZGV4LCBhcnJheSkge1xuICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YocHJpb3JpdHkpID09PSBpbmRleFxuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBzZXR0ZXJzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNldHRlcikge1xuICAgICAgICAgIHJldHVybiBzZXR0ZXIucHJpb3JpdHkgPT09IHByaW9yaXR5XG4gICAgICAgIH0pXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKHNldHRlckFycmF5KSB7XG4gICAgICByZXR1cm4gc2V0dGVyQXJyYXlbMF1cbiAgICB9KTtcblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKTtcblxuICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3XG4gIHZhciB1dGNEYXRlID0gc3ViTWludXRlcyhkYXRlLCBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXG4gIHZhciBkYXRlVmFsdWVzID0ge2RhdGU6IHV0Y0RhdGV9O1xuXG4gIHZhciBzZXR0ZXJzTGVuZ3RoID0gdW5pcXVlUHJpb3JpdHlTZXR0ZXJzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IHNldHRlcnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBzZXR0ZXIgPSB1bmlxdWVQcmlvcml0eVNldHRlcnNbaV07XG4gICAgZGF0ZVZhbHVlcyA9IHNldHRlci5zZXQoZGF0ZVZhbHVlcywgc2V0dGVyLnZhbHVlLCBzdWJGbk9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVWYWx1ZXMuZGF0ZVxufVxuXG5mdW5jdGlvbiBkYXRlVG9TeXN0ZW1UaW1lem9uZSAoZGF0ZVZhbHVlcykge1xuICB2YXIgZGF0ZSA9IGRhdGVWYWx1ZXMuZGF0ZTtcbiAgdmFyIHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcblxuICAvLyBHZXQgdGhlIHN5c3RlbSB0aW1lem9uZSBvZmZzZXQgYXQgKG1vbWVudCBvZiB0aW1lIC0gb2Zmc2V0KVxuICB2YXIgb2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gIC8vIEdldCB0aGUgc3lzdGVtIHRpbWV6b25lIG9mZnNldCBhdCB0aGUgZXhhY3QgbW9tZW50IG9mIHRpbWVcbiAgb2Zmc2V0ID0gbmV3IERhdGUodGltZSArIG9mZnNldCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNykuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAvLyBDb252ZXJ0IGRhdGUgaW4gdGltZXpvbmUgXCJVVEMrMDA6MDBcIiB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIGRhdGVWYWx1ZXMuZGF0ZSA9IG5ldyBEYXRlKHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDcpO1xuXG4gIHJldHVybiBkYXRlVmFsdWVzXG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyQxIChpbnB1dCkge1xuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xdJC9nLCAnJylcbiAgfVxuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJylcbn1cblxuLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5IGJ5IGBzY3JpcHRzL2J1aWxkL2luZGljZXMuanNgLiBQbGVhc2UsIGRvbid0IGNoYW5nZSBpdC5cblxuLy8gXG5cbi8qKlxuICogQ3VzdG9tIHBhcnNlIGJlaGF2aW9yIG9uIHRvcCBvZiBkYXRlLWZucyBwYXJzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gcGFyc2VEYXRlJDEgKGRhdGUsIGZvcm1hdCQkMSkge1xuICBpZiAodHlwZW9mIGRhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQoZGF0ZSkgPyBkYXRlIDogbnVsbFxuICB9XG5cbiAgdmFyIHBhcnNlZCA9IHBhcnNlKGRhdGUsIGZvcm1hdCQkMSwgbmV3IERhdGUoKSk7XG5cbiAgLy8gaWYgZGF0ZSBpcyBub3QgdmFsaWQgb3IgdGhlIGZvcm1hdHRlZCBvdXRwdXQgYWZ0ZXIgcGFyc2luZyBkb2VzIG5vdCBtYXRjaFxuICAvLyB0aGUgc3RyaW5nIHZhbHVlIHBhc3NlZCBpbiAoYXZvaWRzIG92ZXJmbG93cylcbiAgaWYgKCFpc1ZhbGlkKHBhcnNlZCkgfHwgZm9ybWF0KHBhcnNlZCwgZm9ybWF0JCQxKSAhPT0gZGF0ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gcGFyc2VkXG59XG5cbmZ1bmN0aW9uIGFmdGVyICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBvdGhlclZhbHVlID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuICB2YWx1ZSA9IHBhcnNlRGF0ZSQxKHZhbHVlLCBmb3JtYXQpO1xuICBvdGhlclZhbHVlID0gcGFyc2VEYXRlJDEob3RoZXJWYWx1ZSwgZm9ybWF0KTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoIXZhbHVlIHx8ICFvdGhlclZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gaXNBZnRlcih2YWx1ZSwgb3RoZXJWYWx1ZSkgfHwgKGluY2x1c2lvbiAmJiBpc0VxdWFsJDEodmFsdWUsIG90aGVyVmFsdWUpKVxufVxuXG4vKipcbiAqIFNvbWUgQWxwaGEgUmVnZXggaGVscGVycy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc28vdmFsaWRhdG9yLmpzL2Jsb2IvbWFzdGVyL3NyYy9saWIvYWxwaGEuanNcbiAqL1xuXG52YXIgYWxwaGEgPSB7XG4gIGVuOiAvXltBLVpdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1dKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnF0qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xbldKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV0qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkF0qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0qJC8sXG59O1xuXG52YXIgYWxwaGFTcGFjZXMgPSB7XG4gIGVuOiAvXltBLVpcXHNdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvVxcc10qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXFxzXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn1xcc10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xcXHNdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XFxzXSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1cXHNdKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnFxcc10qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXFxzXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xblcXHNdKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXFxzXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXFxzXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvVxcc10qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkFxcc10qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xcXHNdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBcXHNdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsFxcc10qJC8sXG59O1xuXG52YXIgYWxwaGFudW1lcmljID0ge1xuICBlbjogL15bMC05QS1aXSokL2ksXG4gIGNzOiAvXlswLTlBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKiQvaSxcbiAgZGE6IC9eWzAtOUEtWsOGw5jDhV0kL2ksXG4gIGRlOiAvXlswLTlBLVrDhMOWw5zDn10qJC9pLFxuICBlczogL15bMC05QS1aw4HDicONw5HDk8Oaw5xdKiQvaSxcbiAgZnI6IC9eWzAtOUEtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSokL2ksXG4gIGx0OiAvXlswLTlBLVrEhMSMxJjElsSuxaDFssWqxb1dKiQvaSxcbiAgaHU6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF0qJC9pLFxuICBubDogL15bMC05QS1aw4nDi8OPw5PDlsOcXSokL2ksXG4gIHBsOiAvXlswLTlBLVrEhMSGxJjFmsWBxYPDk8W7xbldKiQvaSxcbiAgcHQ6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSokL2ksXG4gIHJ1OiAvXlswLTnQkC3Qr9CBXSokL2ksXG4gIHNrOiAvXlswLTlBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV0qJC9pLFxuICBzcjogL15bMC05QS1axIzEhsW9xaDEkF0qJC9pLFxuICB0cjogL15bMC05QS1aw4fEnsSwxLHDlsWew5xdKiQvaSxcbiAgdWs6IC9eWzAtOdCQLdCp0KzQrtCv0ITQhtCH0pBdKiQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXSokLyxcbn07XG5cbnZhciBhbHBoYURhc2ggPSB7XG4gIGVuOiAvXlswLTlBLVpfLV0qJC9pLFxuICBjczogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9Xy1dKiQvaSxcbiAgZGE6IC9eWzAtOUEtWsOGw5jDhV8tXSokL2ksXG4gIGRlOiAvXlswLTlBLVrDhMOWw5zDn18tXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF8tXSokL2ksXG4gIGZyOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF8tXSokL2ksXG4gIGx0OiAvXlswLTlBLVrEhMSMxJjElsSuxaDFssWqxb1fLV0qJC9pLFxuICBubDogL15bMC05QS1aw4nDi8OPw5PDlsOcXy1dKiQvaSxcbiAgaHU6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF8tXSokL2ksXG4gIHBsOiAvXlswLTlBLVrEhMSGxJjFmsWBxYPDk8W7xblfLV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xfLV0qJC9pLFxuICBydTogL15bMC050JAt0K/QgV8tXSokL2ksXG4gIHNrOiAvXlswLTlBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV8tXSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXy1dKiQvaSxcbiAgdHI6IC9eWzAtOUEtWsOHxJ7EsMSxw5bFnsOcXy1dKiQvaSxcbiAgdWs6IC9eWzAtOdCQLdCp0KzQrtCv0ITQhtCH0pBfLV0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBfLV0qJC8sXG59O1xuXG52YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSh2YWwsIFtsb2NhbGVdKTsgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYSkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYVtsb2NdLnRlc3QodmFsdWUpOyB9KVxuICB9XG5cbiAgcmV0dXJuIChhbHBoYVtsb2NhbGVdIHx8IGFscGhhLmVuKS50ZXN0KHZhbHVlKVxufTtcblxudmFyIHZhbGlkYXRlJDEgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQxKHZhbCwgW2xvY2FsZV0pOyB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhRGFzaCkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYURhc2hbbG9jXS50ZXN0KHZhbHVlKTsgfSlcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFEYXNoW2xvY2FsZV0gfHwgYWxwaGFEYXNoLmVuKS50ZXN0KHZhbHVlKVxufTtcblxudmFyIHZhbGlkYXRlJDIgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQyKHZhbCwgW2xvY2FsZV0pOyB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhbnVtZXJpYykuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYW51bWVyaWNbbG9jXS50ZXN0KHZhbHVlKTsgfSlcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFudW1lcmljW2xvY2FsZV0gfHwgYWxwaGFudW1lcmljLmVuKS50ZXN0KHZhbHVlKVxufTtcblxudmFyIHZhbGlkYXRlJDMgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQzKHZhbCwgW2xvY2FsZV0pOyB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhU3BhY2VzKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhU3BhY2VzW2xvY10udGVzdCh2YWx1ZSk7IH0pXG4gIH1cblxuICByZXR1cm4gKGFscGhhU3BhY2VzW2xvY2FsZV0gfHwgYWxwaGFTcGFjZXMuZW4pLnRlc3QodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBiZWZvcmUgKHZhbHVlLCByZWYpIHtcbiAgdmFyIG90aGVyVmFsdWUgPSByZWZbMF07XG4gIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG4gIHZhciBmb3JtYXQgPSByZWZbMl07XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9ybWF0ID0gaW5jbHVzaW9uO1xuICAgIGluY2x1c2lvbiA9IGZhbHNlO1xuICB9XG4gIHZhbHVlID0gcGFyc2VEYXRlJDEodmFsdWUsIGZvcm1hdCk7XG4gIG90aGVyVmFsdWUgPSBwYXJzZURhdGUkMShvdGhlclZhbHVlLCBmb3JtYXQpO1xuXG4gIC8vIGlmIGVpdGhlciBpcyBub3QgdmFsaWQuXG4gIGlmICghdmFsdWUgfHwgIW90aGVyVmFsdWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBpc0JlZm9yZSh2YWx1ZSwgb3RoZXJWYWx1ZSkgfHwgKGluY2x1c2lvbiAmJiBpc0VxdWFsJDEodmFsdWUsIG90aGVyVmFsdWUpKVxufVxuXG52YXIgdmFsaWRhdGUkNCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtaW4gPSByZWZbMF07XG4gIHZhciBtYXggPSByZWZbMV07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDQodmFsLCBbbWluLCBtYXhdKTsgfSlcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIobWluKSA8PSB2YWx1ZSAmJiBOdW1iZXIobWF4KSA+PSB2YWx1ZVxufTtcblxuZnVuY3Rpb24gY29uZmlybWVkICh2YWx1ZSwgb3RoZXIpIHsgcmV0dXJuIFN0cmluZyh2YWx1ZSkgPT09IFN0cmluZyhvdGhlcik7IH1cblxuZnVuY3Rpb24gdW53cmFwRXhwb3J0cyAoeCkge1xuXHRyZXR1cm4geCAmJiB4Ll9fZXNNb2R1bGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdkZWZhdWx0JykgPyB4WydkZWZhdWx0J10gOiB4O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGFzc2VydFN0cmluZ18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFzc2VydFN0cmluZztcbmZ1bmN0aW9uIGFzc2VydFN0cmluZyhpbnB1dCkge1xuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuXG4gIGlmICghaXNTdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIGxpYnJhcnkgKHZhbGlkYXRvci5qcykgdmFsaWRhdGVzIHN0cmluZ3Mgb25seScpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGFzc2VydFN0cmluZ18xKTtcblxudmFyIGlzQ3JlZGl0Q2FyZF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3JlZGl0Q2FyZDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgY3JlZGl0Q2FyZCA9IC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9fDYyWzAtOV17MTR9KSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvWy0gXSsvZywgJycpO1xuICBpZiAoIWNyZWRpdENhcmQudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQgPSB2b2lkIDA7XG4gIHZhciB0bXBOdW0gPSB2b2lkIDA7XG4gIHZhciBzaG91bGREb3VibGUgPSB2b2lkIDA7XG4gIGZvciAodmFyIGkgPSBzYW5pdGl6ZWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkaWdpdCA9IHNhbml0aXplZC5zdWJzdHJpbmcoaSwgaSArIDEpO1xuICAgIHRtcE51bSA9IHBhcnNlSW50KGRpZ2l0LCAxMCk7XG4gICAgaWYgKHNob3VsZERvdWJsZSkge1xuICAgICAgdG1wTnVtICo9IDI7XG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cbiAgICBzaG91bGREb3VibGUgPSAhc2hvdWxkRG91YmxlO1xuICB9XG4gIHJldHVybiAhIShzdW0gJSAxMCA9PT0gMCA/IHNhbml0aXplZCA6IGZhbHNlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0NyZWRpdENhcmQgPSB1bndyYXBFeHBvcnRzKGlzQ3JlZGl0Q2FyZF8xKTtcblxuZnVuY3Rpb24gY3JlZGl0X2NhcmQgKHZhbHVlKSB7IHJldHVybiBpc0NyZWRpdENhcmQoU3RyaW5nKHZhbHVlKSk7IH1cblxudmFyIHZhbGlkYXRlJDUgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgZGVjaW1hbHMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyAocGFyYW1zWzBdIHx8ICcqJykgOiAnKic7XG4gIHZhciBzZXBhcmF0b3IgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyAocGFyYW1zWzFdIHx8ICcuJykgOiAnLic7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ1KHZhbCwgcGFyYW1zKTsgfSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBpZiBpcyAwLlxuICBpZiAoTnVtYmVyKGRlY2ltYWxzKSA9PT0gMCkge1xuICAgIHJldHVybiAvXi0/XFxkKiQvLnRlc3QodmFsdWUpXG4gIH1cblxuICB2YXIgcmVnZXhQYXJ0ID0gZGVjaW1hbHMgPT09ICcqJyA/ICcrJyA6IChcInsxLFwiICsgZGVjaW1hbHMgKyBcIn1cIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiXi0/XFxcXGQqKFxcXFxcIiArIHNlcGFyYXRvciArIFwiXFxcXGRcIiArIHJlZ2V4UGFydCArIFwiKT8kXCIpKTtcblxuICBpZiAoISByZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlID09PSBwYXJzZWRWYWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGRhdGVfYmV0d2VlbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgYXNzaWduLCBhc3NpZ24kMTtcblxuICB2YXIgbWluO1xuICB2YXIgbWF4O1xuICB2YXIgZm9ybWF0O1xuICB2YXIgaW5jbHVzaXZpdHkgPSAnKCknO1xuXG4gIGlmIChwYXJhbXMubGVuZ3RoID4gMykge1xuICAgIChhc3NpZ24gPSBwYXJhbXMsIG1pbiA9IGFzc2lnblswXSwgbWF4ID0gYXNzaWduWzFdLCBpbmNsdXNpdml0eSA9IGFzc2lnblsyXSwgZm9ybWF0ID0gYXNzaWduWzNdKTtcbiAgfSBlbHNlIHtcbiAgICAoYXNzaWduJDEgPSBwYXJhbXMsIG1pbiA9IGFzc2lnbiQxWzBdLCBtYXggPSBhc3NpZ24kMVsxXSwgZm9ybWF0ID0gYXNzaWduJDFbMl0pO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBwYXJzZURhdGUkMShtaW4sIGZvcm1hdCk7XG4gIHZhciBtYXhEYXRlID0gcGFyc2VEYXRlJDEobWF4LCBmb3JtYXQpO1xuICB2YXIgZGF0ZVZhbCA9IHBhcnNlRGF0ZSQxKHZhbHVlLCBmb3JtYXQpO1xuXG4gIGlmICghbWluRGF0ZSB8fCAhbWF4RGF0ZSB8fCAhZGF0ZVZhbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGluY2x1c2l2aXR5ID09PSAnKCknKSB7XG4gICAgcmV0dXJuIGlzQWZ0ZXIoZGF0ZVZhbCwgbWluRGF0ZSkgJiYgaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSlcbiAgfVxuXG4gIGlmIChpbmNsdXNpdml0eSA9PT0gJyhdJykge1xuICAgIHJldHVybiBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpICYmIChpc0VxdWFsJDEoZGF0ZVZhbCwgbWF4RGF0ZSkgfHwgaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSkpXG4gIH1cblxuICBpZiAoaW5jbHVzaXZpdHkgPT09ICdbKScpIHtcbiAgICByZXR1cm4gaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSkgJiYgKGlzRXF1YWwkMShkYXRlVmFsLCBtaW5EYXRlKSB8fCBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpKVxuICB9XG5cbiAgcmV0dXJuIGlzRXF1YWwkMShkYXRlVmFsLCBtYXhEYXRlKSB8fCBpc0VxdWFsJDEoZGF0ZVZhbCwgbWluRGF0ZSkgfHxcbiAgICAgICAgKGlzQmVmb3JlKGRhdGVWYWwsIG1heERhdGUpICYmIGlzQWZ0ZXIoZGF0ZVZhbCwgbWluRGF0ZSkpXG59XG5cbmZ1bmN0aW9uIGRhdGVfZm9ybWF0ICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBmb3JtYXQgPSByZWZbMF07XG5cbiAgcmV0dXJuICEhcGFyc2VEYXRlJDEodmFsdWUsIGZvcm1hdClcbn1cblxudmFyIHZhbGlkYXRlJDYgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ2KHZhbCwgW2xlbmd0aF0pOyB9KVxuICB9XG4gIHZhciBzdHJWYWwgPSBTdHJpbmcodmFsdWUpO1xuXG4gIHJldHVybiAvXlswLTldKiQvLnRlc3Qoc3RyVmFsKSAmJiBzdHJWYWwubGVuZ3RoID09PSBOdW1iZXIobGVuZ3RoKVxufTtcblxudmFyIHZhbGlkYXRlSW1hZ2UgPSBmdW5jdGlvbiAoZmlsZSwgd2lkdGgsIGhlaWdodCkge1xuICB2YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7IHZhbGlkOiBmYWxzZSB9KTsgfTtcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHtcbiAgICAgIHZhbGlkOiBpbWFnZS53aWR0aCA9PT0gTnVtYmVyKHdpZHRoKSAmJiBpbWFnZS5oZWlnaHQgPT09IE51bWJlcihoZWlnaHQpLFxuICAgIH0pOyB9O1xuXG4gICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIGRpbWVuc2lvbnMgKGZpbGVzLCByZWYpIHtcbiAgdmFyIHdpZHRoID0gcmVmWzBdO1xuICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gIHZhciBsaXN0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBpZiBmaWxlIGlzIG5vdCBhbiBpbWFnZSwgcmVqZWN0LlxuICAgIGlmICghIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGVzW2ldLm5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsaXN0LnB1c2goZmlsZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB2YWxpZGF0ZUltYWdlKGZpbGUsIHdpZHRoLCBoZWlnaHQpOyB9KSlcbn1cblxudmFyIG1lcmdlXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50c1sxXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudW53cmFwRXhwb3J0cyhtZXJnZV8xKTtcblxudmFyIGlzQnl0ZUxlbmd0aF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0J5dGVMZW5ndGg7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0J5dGVMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbWluID0gdm9pZCAwO1xuICB2YXIgbWF4ID0gdm9pZCAwO1xuICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuICB2YXIgbGVuID0gZW5jb2RlVVJJKHN0cikuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudW53cmFwRXhwb3J0cyhpc0J5dGVMZW5ndGhfMSk7XG5cbnZhciBpc0ZRRE5fMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ZRRE47XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfZnFkbl9vcHRpb25zID0ge1xuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0ZRRE4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9mcWRuX29wdGlvbnMpO1xuXG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgdHJhaWxpbmcgZG90IGJlZm9yZSBjaGVja2luZyB2YWxpZGl0eSAqL1xuICBpZiAob3B0aW9ucy5hbGxvd190cmFpbGluZ19kb3QgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy4nKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJyk7XG4gIGlmIChvcHRpb25zLnJlcXVpcmVfdGxkKSB7XG4gICAgdmFyIHRsZCA9IHBhcnRzLnBvcCgpO1xuICAgIGlmICghcGFydHMubGVuZ3RoIHx8ICEvXihbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH18eG5bYS16MC05LV17Mix9KSQvaS50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gZGlzYWxsb3cgc3BhY2VzXG4gICAgaWYgKC9bXFxzXFx1MjAwMi1cXHUyMDBCXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRlxcdURCNDBcXHVEQzIwXS8udGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAodmFyIHBhcnQsIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0ID0gcGFydHNbaV07XG4gICAgaWYgKG9wdGlvbnMuYWxsb3dfdW5kZXJzY29yZXMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL18vZywgJycpO1xuICAgIH1cbiAgICBpZiAoIS9eW2EtelxcdTAwYTEtXFx1ZmZmZjAtOS1dKyQvaS50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGRpc2FsbG93IGZ1bGwtd2lkdGggY2hhcnNcbiAgICBpZiAoL1tcXHVmZjAxLVxcdWZmNWVdLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJ0WzBdID09PSAnLScgfHwgcGFydFtwYXJ0Lmxlbmd0aCAtIDFdID09PSAnLScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGlzRlFETl8xKTtcblxudmFyIGlzRW1haWxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtYWlsO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cblxuXG52YXIgX2lzQnl0ZUxlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzQnl0ZUxlbmd0aF8xKTtcblxuXG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNGUUROXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICByZXF1aXJlX2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBkaXNwbGF5TmFtZSA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStbYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXCxcXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHNdKjwoLispPiQvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKGRpc3BsYXlOYW1lKTtcbiAgICBpZiAoZGlzcGxheV9lbWFpbCkge1xuICAgICAgc3RyID0gZGlzcGxheV9lbWFpbFsxXTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHBhcnRzLnBvcCgpO1xuICB2YXIgdXNlciA9IHBhcnRzLmpvaW4oJ0AnKTtcblxuICB2YXIgbG93ZXJfZG9tYWluID0gZG9tYWluLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsb3dlcl9kb21haW4gPT09ICdnbWFpbC5jb20nIHx8IGxvd2VyX2RvbWFpbiA9PT0gJ2dvb2dsZW1haWwuY29tJykge1xuICAgIHVzZXIgPSB1c2VyLnJlcGxhY2UoL1xcLi9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKHVzZXIsIHsgbWF4OiA2NCB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKGRvbWFpbiwgeyBtYXg6IDI1NCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0ZRRE4yLmRlZmF1bHQpKGRvbWFpbiwgeyByZXF1aXJlX3RsZDogb3B0aW9ucy5yZXF1aXJlX3RsZCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1c2VyWzBdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuXG4gIHZhciBwYXR0ZXJuID0gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBlbWFpbFVzZXJVdGY4UGFydCA6IGVtYWlsVXNlclBhcnQ7XG5cbiAgdmFyIHVzZXJfcGFydHMgPSB1c2VyLnNwbGl0KCcuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcGF0dGVybi50ZXN0KHVzZXJfcGFydHNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNFbWFpbCA9IHVud3JhcEV4cG9ydHMoaXNFbWFpbF8xKTtcblxudmFyIHZhbGlkYXRlJDcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbCkpOyB9KVxuICB9XG5cbiAgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbHVlKSlcbn07XG5cbmZ1bmN0aW9uIGV4dCAoZmlsZXMsIGV4dGVuc2lvbnMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgoXCIuKFwiICsgKGV4dGVuc2lvbnMuam9pbignfCcpKSArIFwiKSRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUubmFtZSk7IH0pXG59XG5cbmZ1bmN0aW9uIGltYWdlIChmaWxlcykgeyByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGUubmFtZSk7IH1cbik7IH1cblxudmFyIHZhbGlkYXRlJDggPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDgodmFsLCBvcHRpb25zKTsgfSlcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgaXNJUF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVA7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlwdjRNYXliZSA9IC9eKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KSQvO1xudmFyIGlwdjZCbG9jayA9IC9eWzAtOUEtRl17MSw0fSQvaTtcblxuZnVuY3Rpb24gaXNJUChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJUChzdHIsIDQpIHx8IGlzSVAoc3RyLCA2KTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNCcpIHtcbiAgICBpZiAoIWlwdjRNYXliZS50ZXN0KHN0cikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0c1szXSA8PSAyNTU7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzYnKSB7XG4gICAgdmFyIGJsb2NrcyA9IHN0ci5zcGxpdCgnOicpO1xuICAgIHZhciBmb3VuZE9taXNzaW9uQmxvY2sgPSBmYWxzZTsgLy8gbWFya2VyIHRvIGluZGljYXRlIDo6XG5cbiAgICAvLyBBdCBsZWFzdCBzb21lIE9TIGFjY2VwdCB0aGUgbGFzdCAzMiBiaXRzIG9mIGFuIElQdjYgYWRkcmVzc1xuICAgIC8vIChpLmUuIDIgb2YgdGhlIGJsb2NrcykgaW4gSVB2NCBub3RhdGlvbiwgYW5kIFJGQyAzNDkzIHNheXNcbiAgICAvLyB0aGF0ICc6OmZmZmY6YS5iLmMuZCcgaXMgdmFsaWQgZm9yIElQdjQtbWFwcGVkIElQdjYgYWRkcmVzc2VzLFxuICAgIC8vIGFuZCAnOjphLmIuYy5kJyBpcyBkZXByZWNhdGVkLCBidXQgYWxzbyB2YWxpZC5cbiAgICB2YXIgZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID0gaXNJUChibG9ja3NbYmxvY2tzLmxlbmd0aCAtIDFdLCA0KTtcbiAgICB2YXIgZXhwZWN0ZWROdW1iZXJPZkJsb2NrcyA9IGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA/IDcgOiA4O1xuXG4gICAgaWYgKGJsb2Nrcy5sZW5ndGggPiBleHBlY3RlZE51bWJlck9mQmxvY2tzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGluaXRpYWwgb3IgZmluYWwgOjpcbiAgICBpZiAoc3RyID09PSAnOjonKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIC8vIHRlc3QgZm9yIGEgOjogd2hpY2ggY2FuIG5vdCBiZSBhdCB0aGUgc3RyaW5nIHN0YXJ0L2VuZFxuICAgICAgLy8gc2luY2UgdGhvc2UgY2FzZXMgaGF2ZSBiZWVuIGhhbmRsZWQgYWJvdmVcbiAgICAgIGlmIChibG9ja3NbaV0gPT09ICcnICYmIGkgPiAwICYmIGkgPCBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBtdWx0aXBsZSA6OiBpbiBhZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrICYmIGkgPT09IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIGl0IGhhcyBiZWVuIGNoZWNrZWQgYmVmb3JlIHRoYXQgdGhlIGxhc3RcbiAgICAgICAgLy8gYmxvY2sgaXMgYSB2YWxpZCBJUHY0IGFkZHJlc3NcbiAgICAgIH0gZWxzZSBpZiAoIWlwdjZCbG9jay50ZXN0KGJsb2Nrc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA9PT0gZXhwZWN0ZWROdW1iZXJPZkJsb2NrcztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNJUCA9IHVud3JhcEV4cG9ydHMoaXNJUF8xKTtcblxuZnVuY3Rpb24gaXAgKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFs0XTtcbiAgdmFyIHZlcnNpb24gPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzSVAodmFsLCBbdmVyc2lvbl0pOyB9KVxuICB9XG5cbiAgcmV0dXJuIGlzSVAodmFsdWUsIHZlcnNpb24pXG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4XG4gKi9cbnZhciBjb21wYXJlID0gZnVuY3Rpb24gKHZhbHVlLCBsZW5ndGgsIG1heCkge1xuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSBsZW5ndGhcbiAgfVxuXG4gIC8vIGNhc3QgdG8gbnVtYmVyLlxuICBtYXggPSBOdW1iZXIobWF4KTtcblxuICByZXR1cm4gdmFsdWUubGVuZ3RoID49IGxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPD0gbWF4XG59O1xuXG5mdW5jdGlvbiBsZW5ndGggKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcbiAgdmFyIG1heCA9IHJlZlsxXTsgaWYgKCBtYXggPT09IHZvaWQgMCApIG1heCA9IHVuZGVmaW5lZDtcblxuICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmUodmFsdWUsIGxlbmd0aCwgbWF4KVxufVxuXG5mdW5jdGlvbiBpbnRlZ2VyICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gL14tP1swLTldKyQvLnRlc3QoU3RyaW5nKHZhbCkpOyB9KVxuICB9XG5cbiAgcmV0dXJuIC9eLT9bMC05XSskLy50ZXN0KFN0cmluZyh2YWx1ZSkpXG59XG5cbmZ1bmN0aW9uIG1heCQxICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbGVuZ3RoID49IDBcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA8PSBsZW5ndGhcbn1cblxuZnVuY3Rpb24gbWF4X3ZhbHVlICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtYXggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlKSA8PSBtYXhcbn1cblxuZnVuY3Rpb24gbWltZXMgKGZpbGVzLCBtaW1lcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCgobWltZXMuam9pbignfCcpLnJlcGxhY2UoJyonLCAnLisnKSkgKyBcIiRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUudHlwZSk7IH0pXG59XG5cbmZ1bmN0aW9uIG1pbiQxICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPj0gbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIG1pbl92YWx1ZSAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPj0gbWluXG59XG5cbnZhciB2YWxpZGF0ZSQ5ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ5KHZhbCwgb3B0aW9ucyk7IH0pXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuICEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG5mdW5jdGlvbiBudW1lcmljICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWwpKTsgfSlcbiAgfVxuXG4gIHJldHVybiAvXlswLTldKyQvLnRlc3QoU3RyaW5nKHZhbHVlKSlcbn1cblxuZnVuY3Rpb24gcmVnZXggKHZhbHVlLCByZWYpIHtcbiAgdmFyIHJlZ2V4ID0gcmVmWzBdO1xuICB2YXIgZmxhZ3MgPSByZWYuc2xpY2UoMSk7XG5cbiAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgZmxhZ3MpLnRlc3QoU3RyaW5nKHZhbHVlKSlcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWQgKHZhbHVlLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IFtmYWxzZV07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICEhIHZhbHVlLmxlbmd0aFxuICB9XG5cbiAgLy8gaW5jYXNlIGEgZmllbGQgY29uc2lkZXJzIGBmYWxzZWAgYXMgYW4gZW1wdHkgdmFsdWUgbGlrZSBjaGVja2JveGVzLlxuICB2YXIgaW52YWxpZGF0ZUZhbHNlID0gcGFyYW1zWzBdO1xuICBpZiAodmFsdWUgPT09IGZhbHNlICYmIGludmFsaWRhdGVGYWxzZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAhISBTdHJpbmcodmFsdWUpLnRyaW0oKS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gc2l6ZSAoZmlsZXMsIHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICBpZiAoaXNOYU4oc2l6ZSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciBuU2l6ZSA9IE51bWJlcihzaXplKSAqIDEwMjQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZmlsZXNbaV0uc2l6ZSA+IG5TaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG52YXIgaXNVUkxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VSTDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE5fMSk7XG5cblxuXG52YXIgX2lzSVAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0lQXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlXG59O1xuXG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICBpZiAoaG9zdCA9PT0gbWF0Y2ggfHwgaXNSZWdFeHAobWF0Y2gpICYmIG1hdGNoLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVVJMKHVybCwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkodXJsKTtcbiAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA+PSAyMDgzIHx8IC9bXFxzPD5dLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHVybC5pbmRleE9mKCdtYWlsdG86JykgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfdXJsX29wdGlvbnMpO1xuICB2YXIgcHJvdG9jb2wgPSB2b2lkIDAsXG4gICAgICBhdXRoID0gdm9pZCAwLFxuICAgICAgaG9zdCA9IHZvaWQgMCxcbiAgICAgIGhvc3RuYW1lID0gdm9pZCAwLFxuICAgICAgcG9ydCA9IHZvaWQgMCxcbiAgICAgIHBvcnRfc3RyID0gdm9pZCAwLFxuICAgICAgc3BsaXQgPSB2b2lkIDAsXG4gICAgICBpcHY2ID0gdm9pZCAwO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnOi8vJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgcHJvdG9jb2wgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVfdmFsaWRfcHJvdG9jb2wgJiYgb3B0aW9ucy5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9wcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHMgJiYgdXJsLnN1YnN0cigwLCAyKSA9PT0gJy8vJykge1xuICAgIHNwbGl0WzBdID0gdXJsLnN1YnN0cigyKTtcbiAgfVxuICB1cmwgPSBzcGxpdC5qb2luKCc6Ly8nKTtcblxuICBpZiAodXJsID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgaWYgKHVybCA9PT0gJycgJiYgIW9wdGlvbnMucmVxdWlyZV9ob3N0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnQCcpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGF1dGggPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGhvc3RuYW1lID0gc3BsaXQuam9pbignQCcpO1xuXG4gIHBvcnRfc3RyID0gbnVsbDtcbiAgaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcbiAgaWYgKGlwdjZfbWF0Y2gpIHtcbiAgICBob3N0ID0gJyc7XG4gICAgaXB2NiA9IGlwdjZfbWF0Y2hbMV07XG4gICAgcG9ydF9zdHIgPSBpcHY2X21hdGNoWzJdIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc3BsaXQgPSBob3N0bmFtZS5zcGxpdCgnOicpO1xuICAgIGhvc3QgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChzcGxpdC5sZW5ndGgpIHtcbiAgICAgIHBvcnRfc3RyID0gc3BsaXQuam9pbignOicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3J0X3N0ciAhPT0gbnVsbCkge1xuICAgIHBvcnQgPSBwYXJzZUludChwb3J0X3N0ciwgMTApO1xuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAyLmRlZmF1bHQpKGhvc3QpICYmICEoMCwgX2lzRlFETjIuZGVmYXVsdCkoaG9zdCwgb3B0aW9ucykgJiYgKCFpcHY2IHx8ICEoMCwgX2lzSVAyLmRlZmF1bHQpKGlwdjYsIDYpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdCAmJiBjaGVja0hvc3QoaG9zdCwgb3B0aW9ucy5ob3N0X2JsYWNrbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc1VSTCA9IHVud3JhcEV4cG9ydHMoaXNVUkxfMSk7XG5cbmZ1bmN0aW9uIHVybCAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW3RydWVdO1xuICB2YXIgcmVxdWlyZVByb3RvY29sID0gcmVmWzBdO1xuXG4gIHZhciBvcHRpb25zID0geyByZXF1aXJlX3Byb3RvY29sOiAhIXJlcXVpcmVQcm90b2NvbCwgYWxsb3dfdW5kZXJzY29yZXM6IHRydWUgfTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzVVJMKHZhbCwgb3B0aW9ucyk7IH0pXG4gIH1cblxuICByZXR1cm4gaXNVUkwodmFsdWUsIG9wdGlvbnMpXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xudmFyIFJ1bGVzID0ge1xuICBhZnRlcjogYWZ0ZXIsXG4gIGFscGhhX2Rhc2g6IHZhbGlkYXRlJDEsXG4gIGFscGhhX251bTogdmFsaWRhdGUkMixcbiAgYWxwaGFfc3BhY2VzOiB2YWxpZGF0ZSQzLFxuICBhbHBoYTogdmFsaWRhdGUsXG4gIGJlZm9yZTogYmVmb3JlLFxuICBiZXR3ZWVuOiB2YWxpZGF0ZSQ0LFxuICBjb25maXJtZWQ6IGNvbmZpcm1lZCxcbiAgY3JlZGl0X2NhcmQ6IGNyZWRpdF9jYXJkLFxuICBkYXRlX2JldHdlZW46IGRhdGVfYmV0d2VlbixcbiAgZGF0ZV9mb3JtYXQ6IGRhdGVfZm9ybWF0LFxuICBkZWNpbWFsOiB2YWxpZGF0ZSQ1LFxuICBkaWdpdHM6IHZhbGlkYXRlJDYsXG4gIGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMsXG4gIGVtYWlsOiB2YWxpZGF0ZSQ3LFxuICBleHQ6IGV4dCxcbiAgaW1hZ2U6IGltYWdlLFxuICBpbjogdmFsaWRhdGUkOCxcbiAgaW50ZWdlcjogaW50ZWdlcixcbiAgbGVuZ3RoOiBsZW5ndGgsXG4gIGlwOiBpcCxcbiAgbWF4OiBtYXgkMSxcbiAgbWF4X3ZhbHVlOiBtYXhfdmFsdWUsXG4gIG1pbWVzOiBtaW1lcyxcbiAgbWluOiBtaW4kMSxcbiAgbWluX3ZhbHVlOiBtaW5fdmFsdWUsXG4gIG5vdF9pbjogdmFsaWRhdGUkOSxcbiAgbnVtZXJpYzogbnVtZXJpYyxcbiAgcmVnZXg6IHJlZ2V4LFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHNpemU6IHNpemUsXG4gIHVybDogdXJsLFxufVxuXG4vLyBcblxudmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICBpZiAofmN1cnIuaW5kZXhPZignLicpKSB7XG4gICAgICAgIHByZXZbY3Vyci5zcGxpdCgnLicpWzFdXSA9IGN1cnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2W2N1cnJdID0gY3VycjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZcbiAgICB9LCB7fSlcbiAgfVxuXG4gIHJldHVybiBmaWVsZHNcbn07XG5cbi8vIENvbWJpbmVzIHR3byBmbGFncyB1c2luZyBlaXRoZXIgQU5EIG9yIE9SIGRlcGVuZGluZyBvbiB0aGUgZmxhZyB0eXBlLlxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiAobGhzLCByaHMpIHtcbiAgdmFyIG1hcHBlciA9IHtcbiAgICBwcmlzdGluZTogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgJiYgcmhzOyB9LFxuICAgIGRpcnR5OiBmdW5jdGlvbiAobGhzLCByaHMpIHsgcmV0dXJuIGxocyB8fCByaHM7IH0sXG4gICAgdG91Y2hlZDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgfHwgcmhzOyB9LFxuICAgIHVudG91Y2hlZDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgJiYgcmhzOyB9LFxuICAgIHZhbGlkOiBmdW5jdGlvbiAobGhzLCByaHMpIHsgcmV0dXJuIGxocyAmJiByaHM7IH0sXG4gICAgaW52YWxpZDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgfHwgcmhzOyB9LFxuICAgIHBlbmRpbmc6IGZ1bmN0aW9uIChsaHMsIHJocykgeyByZXR1cm4gbGhzIHx8IHJoczsgfSxcbiAgICByZXF1aXJlZDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgfHwgcmhzOyB9LFxuICAgIHZhbGlkYXRlZDogZnVuY3Rpb24gKGxocywgcmhzKSB7IHJldHVybiBsaHMgJiYgcmhzOyB9LFxuICB9O1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtYXBwZXIpLnJlZHVjZShmdW5jdGlvbiAoZmxhZ3MsIGZsYWcpIHtcbiAgICBmbGFnc1tmbGFnXSA9IG1hcHBlcltmbGFnXShsaHNbZmxhZ10sIHJoc1tmbGFnXSk7XG5cbiAgICByZXR1cm4gZmxhZ3NcbiAgfSwge30pXG59O1xuXG52YXIgbWFwU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUsIGRlZXApIHtcbiAgaWYgKCBkZWVwID09PSB2b2lkIDAgKSBkZWVwID0gdHJ1ZTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMoc2NvcGUpLnJlZHVjZShmdW5jdGlvbiAoZmxhZ3MsIGZpZWxkKSB7XG4gICAgaWYgKCFmbGFncykge1xuICAgICAgZmxhZ3MgPSBhc3NpZ24oe30sIHNjb3BlW2ZpZWxkXSk7XG4gICAgICByZXR1cm4gZmxhZ3NcbiAgICB9XG5cbiAgICAvLyBzY29wZS5cbiAgICB2YXIgaXNTY29wZSA9IGZpZWxkLmluZGV4T2YoJyQnKSA9PT0gMDtcbiAgICBpZiAoZGVlcCAmJiBpc1Njb3BlKSB7XG4gICAgICByZXR1cm4gY29tYmluZShtYXBTY29wZShzY29wZVtmaWVsZF0pLCBmbGFncylcbiAgICB9IGVsc2UgaWYgKCFkZWVwICYmIGlzU2NvcGUpIHtcbiAgICAgIHJldHVybiBmbGFnc1xuICAgIH1cblxuICAgIGZsYWdzID0gY29tYmluZShmbGFncywgc2NvcGVbZmllbGRdKTtcblxuICAgIHJldHVybiBmbGFnc1xuICB9LCBudWxsKVxufTtcblxuLyoqXG4gKiBNYXBzIGZpZWxkcyB0byBjb21wdXRlZCBmdW5jdGlvbnMuXG4gKi9cbnZhciBtYXBGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gIGlmICghZmllbGRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtYXBTY29wZSh0aGlzLiR2YWxpZGF0b3IuZmxhZ3MpXG4gICAgfVxuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemUoZmllbGRzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgIHZhciBmaWVsZCA9IG5vcm1hbGl6ZWRbY3Vycl07XG4gICAgcHJldltjdXJyXSA9IGZ1bmN0aW9uIG1hcHBlZEZpZWxkICgpIHtcbiAgICAgIC8vIGlmIGZpZWxkIGV4aXN0c1xuICAgICAgaWYgKHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF1cbiAgICAgIH1cblxuICAgICAgLy8gc2NvcGVsZXNzIGZpZWxkcyB3ZXJlIHNlbGVjdGVkLlxuICAgICAgaWYgKG5vcm1hbGl6ZWRbY3Vycl0gPT09ICcqJykge1xuICAgICAgICByZXR1cm4gbWFwU2NvcGUodGhpcy4kdmFsaWRhdG9yLmZsYWdzLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXQgaGFzIGEgc2NvcGUgZGVmaW5lZFxuICAgICAgdmFyIGluZGV4ID0gZmllbGQuaW5kZXhPZignLicpO1xuICAgICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgdmFyIHNjb3BlID0gcmVmWzBdO1xuICAgICAgdmFyIG5hbWUgPSByZWYuc2xpY2UoMSk7XG5cbiAgICAgIHNjb3BlID0gdGhpcy4kdmFsaWRhdG9yLmZsYWdzWyhcIiRcIiArIHNjb3BlKV07XG4gICAgICBuYW1lID0gbmFtZS5qb2luKCcuJyk7XG5cbiAgICAgIC8vIGFuIGVudGlyZSBzY29wZSB3YXMgc2VsZWN0ZWQ6IHNjb3BlLipcbiAgICAgIGlmIChuYW1lID09PSAnKicgJiYgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIG1hcFNjb3BlKHNjb3BlKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NvcGUgJiYgc2NvcGVbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlW25hbWVdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fVxuICAgIH07XG5cbiAgICByZXR1cm4gcHJldlxuICB9LCB7fSlcbn07XG5cbnZhciB2ZXJzaW9uID0gJzIuMC4zJztcblxudmFyIHJ1bGVzUGx1Z2luID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgVmFsaWRhdG9yJCQxID0gcmVmLlZhbGlkYXRvcjtcblxuICBPYmplY3Qua2V5cyhSdWxlcykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIFZhbGlkYXRvciQkMS5leHRlbmQocnVsZSwgUnVsZXNbcnVsZV0pO1xuICB9KTtcblxuICAvLyBNZXJnZSB0aGUgZW5nbGlzaCBtZXNzYWdlcy5cbiAgVmFsaWRhdG9yJCQxLmxvY2FsaXplKCdlbicsIGxvY2FsZSk7XG59O1xuXG51c2UocnVsZXNQbHVnaW4pO1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3I7XG5leHBvcnQgeyB1c2UsIG1hcEZpZWxkcywgRXJyb3JCYWcsIFJ1bGVzLCB2ZXJzaW9uIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWUtdmFsaWRhdGUvZGlzdC9yZWUtdmFsaWRhdGUuZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNiA3IDgiLCIvLyBpbXBvcnQgbGlic1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi9zZXJ2aWNlJ1xuaW1wb3J0IFJlZVZhbGlkYXRlIGZyb20gJ3JlZS12YWxpZGF0ZSdcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9Gb3JtJ1xuXG4vLyBpbml0aWFsaXplIGNvbXBvbmVudFxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHNldCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0xvZ2luUGFnZSdcblxuICAvLyB2YWxpZGF0ZSBwcm9wc1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFJlZVZhbGlkYXRlKHtcbiAgICAgIGVtYWlsOiAncmVxdWlyZWR8ZW1haWwnLFxuICAgICAgcGFzc3dvcmQ6ICdyZXF1aXJlZHxtaW46NidcbiAgICB9KVxuXG4gICAgLy8gc2V0IHRoZSBzdGF0ZSBvZiB0aGUgYXBwXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICByZW1lbWJlcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB0aGlzLnZhbGlkYXRvci5lcnJvcnNcbiAgICB9XG5cbiAgICAvLyBiaW5kIGNvbXBvbmVudCB3aXRoIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyBhZnRlciBtb3VudGluZyB0aGUgY29tcG9uZW50IGFkZCBhIHN0eWxlIHRvIHRoZSBib2R5XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlJylcbiAgfVxuXG4gIC8vIHJlbW92ZSBib2R5IHN0eWxlIGJlZm9yZSBjb21wb25lbnQgbGVhdmVzIGRvbVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAkKCdib2R5JykucmVtb3ZlQXR0cignc3R5bGUnKVxuICB9XG5cbiAgLy8gZXZlbnQgdG8gaGFuZGxlIGlucHV0IGNoYW5nZVxuICBoYW5kbGVDaGFuZ2UobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy52YWxpZGF0b3JcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcmVkZW50aWFsczogeyAuLi50aGlzLnN0YXRlLmNyZWRlbnRpYWxzLCBbbmFtZV06IHZhbHVlIH0gfSlcblxuICAgIGVycm9ycy5yZW1vdmUobmFtZSlcblxuICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICB9KVxuICB9XG5cbiAgLy8gZXZlbnQgdG8gaGFuZGxlIGZvcm0gc3VibWl0XG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBjcmVkZW50aWFscyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB0aGlzLnZhbGlkYXRvclxuXG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGVBbGwoY3JlZGVudGlhbHMpXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc3VibWl0KGNyZWRlbnRpYWxzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHN1Ym1pdChjcmVkZW50aWFscykge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9naW4oY3JlZGVudGlhbHMpKVxuICAgICAgLmNhdGNoKCh7IGVycm9yLCBzdGF0dXNDb2RlIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMudmFsaWRhdG9yXG5cbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgIF8uZm9yT3duKGVycm9yLCAobWVzc2FnZSwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGVycm9ycy5hZGQoZmllbGQsIG1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgIGVycm9ycy5hZGQoJ3Bhc3N3b3JkJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIHJlbmRlciBjb21wb25lbnRcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gY2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkIHRoZW4gcmVkaXJlY3QgaGltIHRvIGhvbWUgcGFnZVxuICAgIGlmICh0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPlxuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUuY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICByZW1lbWJlcjogdGhpcy5zdGF0ZS5jcmVkZW50aWFscy5yZW1lbWJlcixcbiAgICAgIGVycm9yczogdGhpcy5zdGF0ZS5lcnJvcnMsXG4gICAgICBoYW5kbGVDaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCxcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmNob3JcIi8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoYXMtc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2F1dGgvcGFnZXMvbG9naW4vUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBkaXNwbGF5TmFtZSA9ICdMb2dpbkZvcm0nXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXNzd29yZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVtZW1iZXI6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IEZvcm0gPSAoeyBlbWFpbCwgcGFzc3dvcmQsIHJlbWVtYmVyLCBlcnJvcnMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIHJvbGU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZT5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlBsZWFzZSBzaWduIGluPC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIHJvdW5kZWQtMCAke2Vycm9ycy5oYXMoJ2VtYWlsJykgJiYgJ2lzLWludmFsaWQnfWB9XG4gICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgIHZhbHVlPXtlbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgYXV0b0ZvY3VzLz5cbiAgICAgIHtlcnJvcnMuaGFzKCdlbWFpbCcpICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMuZmlyc3QoJ2VtYWlsJyl9PC9kaXY+fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIHJvdW5kZWQtMCAke2Vycm9ycy5oYXMoJ3Bhc3N3b3JkJykgJiYgJ2lzLWludmFsaWQnfWB9XG4gICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQgfHwgJyd9XG4gICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICB7ZXJyb3JzLmhhcygncGFzc3dvcmQnKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpfTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG4gICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQubmFtZSwgIXJlbWVtYmVyKX0vPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvbiBzbWFsbFwiPlJlbWVtYmVyIG1lIG9uIHRoaXMgY29tcHV0ZXI8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17ZXJyb3JzLmFueSgpfT5TaWduIEluPC9idXR0b24+XG4gICAgPHA+Tm90IGEgbWVtYmVyPyA8TGluayB0bz0nL3JlZ2lzdGVyJz5TaWdudXAgaGVyZTwvTGluaz48L3A+XG4gIDwvZm9ybT5cbilcblxuRm9ybS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9jb21wb25lbnRzL0Zvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9