webpackJsonp([2],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Article = __webpack_require__(337);

var _Article2 = _interopRequireDefault(_Article);

var _Page = __webpack_require__(482);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, router) {
  var params = router.match.params;

  var article = state.articles.data.find(function (article) {
    return article.slug === params.slug;
  });
  return {
    article: article ? new _Article2.default(article) : new _Article2.default({})
  };
};

// import components
exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Page2.default);

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _Model2 = __webpack_require__(194);

var _Model3 = _interopRequireDefault(_Model2);

var _User = __webpack_require__(191);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_Model) {
  _inherits(Article, _Model);

  function Article(props) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

    _this.initialize(props);
    return _this;
  }

  _createClass(Article, [{
    key: 'initialize',
    value: function initialize(props) {
      _get(Article.prototype.__proto__ || Object.getPrototypeOf(Article.prototype), 'initialize', this).call(this, props);

      this.slug = props.slug || '';
      this.title = props.title || '';
      this.description = props.description || '';
      this.content = props.content || '';
      this.published = props.published || false;
      this.publishedAt = props.publishedAt ? (0, _moment2.default)(props.publishedAt) : null;

      // relate user model
      this.user = props.user ? new _User2.default(props.user) : null;
    }
  }]);

  return Article;
}(_Model3.default);

exports.default = Article;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articleAddRequest = articleAddRequest;
exports.articleUpdateRequest = articleUpdateRequest;
exports.articleRemoveRequest = articleRemoveRequest;
exports.articleListRequest = articleListRequest;
exports.articleEditRequest = articleEditRequest;
exports.articleFetchRequest = articleFetchRequest;

var _Http = __webpack_require__(33);

var _Http2 = _interopRequireDefault(_Http);

var _Transformer = __webpack_require__(192);

var _Transformer2 = _interopRequireDefault(_Transformer);

var _actions = __webpack_require__(339);

var articleActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformRequest(parms) {
  return _Transformer2.default.send(parms);
}

function transformResponse(params) {
  return _Transformer2.default.fetch(params);
}

function articleAddRequest(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _Http2.default.post('/articles', transformRequest(params)).then(function (res) {
        dispatch(articleActions.add(transformResponse(res.data)));
        return resolve();
      }).catch(function (err) {
        var statusCode = err.response.status;
        var data = {
          error: null,
          statusCode: statusCode
        };

        if (statusCode === 422) {
          var resetErrors = {
            errors: err.response.data,
            replace: false,
            searchStr: '',
            replaceStr: ''
          };
          data.error = _Transformer2.default.resetValidationFields(resetErrors);
        } else if (statusCode === 401) {
          data.error = err.response.data.message;
        }
        return reject(data);
      });
    });
  };
}

function articleUpdateRequest(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _Http2.default.patch('articles/' + params.id, transformRequest(params)).then(function (res) {
        dispatch(articleActions.add(transformResponse(res.data)));
        return resolve();
      }).catch(function (err) {
        var statusCode = err.response.status;
        var data = {
          error: null,
          statusCode: statusCode
        };

        if (statusCode === 422) {
          var resetErrors = {
            errors: err.response.data,
            replace: false,
            searchStr: '',
            replaceStr: ''
          };
          data.error = _Transformer2.default.resetValidationFields(resetErrors);
        } else if (statusCode === 401) {
          data.error = err.response.data.message;
        }
        return reject(data);
      });
    });
  };
}

function articleRemoveRequest(id) {
  return function (dispatch) {
    _Http2.default.delete('articles/' + id).then(function () {
      dispatch(articleActions.remove(id));
    }).catch(function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

function articleListRequest(_ref) {
  var _ref$pageNumber = _ref.pageNumber,
      pageNumber = _ref$pageNumber === undefined ? 1 : _ref$pageNumber,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '/articles' : _ref$url;

  return function (dispatch) {
    if (pageNumber > 1) {
      url = url + ('?page=' + pageNumber);
    }

    _Http2.default.get(url).then(function (res) {
      dispatch(articleActions.list(transformResponse(res.data)));
    }).catch(function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

function articleEditRequest(id) {
  return function (dispatch) {
    _Http2.default.get('articles/' + id).then(function (res) {
      dispatch(articleActions.add(transformResponse(res.data)));
    }).catch(function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

function articleFetchRequest(slug) {
  return function (dispatch) {
    _Http2.default.get('articles/published/' + slug).then(function (res) {
      dispatch(articleActions.add(transformResponse(res.data)));
    }).catch(function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.update = update;
exports.remove = remove;
exports.list = list;

var _actionTypes = __webpack_require__(195);

function add(payload) {
  return {
    type: _actionTypes.ARTICLE_ADD,
    payload: payload
  };
} /* ============
   * Actions for the article module
   * ============
   *
   * The actions that are available on the
   * article module.
   */

function update(payload) {
  return {
    type: _actionTypes.ARTICLE_UPDATE,
    payload: payload
  };
}

function remove(payload) {
  return {
    type: _actionTypes.ARTICLE_REMOVE,
    payload: payload
  };
}

function list(payload) {
  return {
    type: _actionTypes.ARTICLE_LIST,
    payload: payload
  };
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDocumentTitle = __webpack_require__(483);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _service = __webpack_require__(338);

var _index = __webpack_require__(487);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import libs


var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = {
      //
    };
    return _this;
  }

  _createClass(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.loadArticle();
    }
  }, {
    key: 'loadArticle',
    value: function loadArticle() {
      var _props = this.props,
          match = _props.match,
          article = _props.article,
          dispatch = _props.dispatch;


      if (!article.slug) {
        dispatch((0, _service.articleFetchRequest)(match.params.slug));
      }
    }
  }, {
    key: 'renderPublishedDate',
    value: function renderPublishedDate() {
      var publishedAt = this.props.article.publishedAt;


      if (publishedAt) {
        return 'at ' + publishedAt.format('MMMM d, YYYY');
      }
    }
  }, {
    key: 'renderAuthor',
    value: function renderAuthor() {
      var user = this.props.article.user;


      if (user) {
        return 'by ' + user.name;
      }
    }
  }, {
    key: 'createMarkup',
    value: function createMarkup() {
      return { __html: this.props.article.content };
    }
  }, {
    key: 'renderArticle',
    value: function renderArticle() {
      var article = this.props.article;

      return _react2.default.createElement(
        'div',
        { className: 'col-12 col-sm-9 mb-5 mx-auto' },
        _react2.default.createElement(
          'h2',
          null,
          article.title
        ),
        _react2.default.createElement(
          'small',
          { className: 'text-muted mb-5' },
          this.renderPublishedDate(),
          ' ',
          this.renderAuthor()
        ),
        _react2.default.createElement(
          'p',
          { className: 'text-muted mb-5' },
          article.description
        ),
        _react2.default.createElement('div', { dangerouslySetInnerHTML: this.createMarkup() })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: this.props.article.title + ' - ' + _index.APP_TITLE },
        _react2.default.createElement(
          'section',
          { id: 'components-articles' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              this.renderArticle()
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.displayName = 'ArticleShowPage';
Page.propTypes = {
  match: _propTypes2.default.object.isRequired,
  article: _propTypes2.default.object.isRequired,
  dispatch: _propTypes2.default.func.isRequired
};
exports.default = Page;

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1),
    PropTypes = __webpack_require__(2),
    withSideEffect = __webpack_require__(484);

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title) {
  var nextTitle = title || '';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

function DocumentTitle() {}
DocumentTitle.prototype = Object.create(React.Component.prototype);

DocumentTitle.displayName = 'DocumentTitle';
DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
};

DocumentTitle.prototype.render = function() {
  if (this.props.children) {
    return React.Children.only(this.props.children);
  } else {
    return null;
  }
};

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(1);
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(485));
var shallowEqual = _interopDefault(__webpack_require__(486));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var APP_TITLE = 'Your Blog Name';

exports.APP_TITLE = APP_TITLE;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2Jsb2cvZGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2Jsb2cvZGV0YWlscy9QYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb2N1bWVudC10aXRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdmFsdWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicm91dGVyIiwicGFyYW1zIiwibWF0Y2giLCJhcnRpY2xlIiwiYXJ0aWNsZXMiLCJkYXRhIiwiZmluZCIsInNsdWciLCJBcnRpY2xlIiwiUGFnZSIsInByb3BzIiwiaW5pdGlhbGl6ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwicHVibGlzaGVkIiwicHVibGlzaGVkQXQiLCJ1c2VyIiwiVXNlciIsIk1vZGVsIiwiYXJ0aWNsZUFkZFJlcXVlc3QiLCJhcnRpY2xlVXBkYXRlUmVxdWVzdCIsImFydGljbGVSZW1vdmVSZXF1ZXN0IiwiYXJ0aWNsZUxpc3RSZXF1ZXN0IiwiYXJ0aWNsZUVkaXRSZXF1ZXN0IiwiYXJ0aWNsZUZldGNoUmVxdWVzdCIsImFydGljbGVBY3Rpb25zIiwidHJhbnNmb3JtUmVxdWVzdCIsInBhcm1zIiwiVHJhbnNmb3JtZXIiLCJzZW5kIiwidHJhbnNmb3JtUmVzcG9uc2UiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiSHR0cCIsInBvc3QiLCJ0aGVuIiwiZGlzcGF0Y2giLCJhZGQiLCJyZXMiLCJjYXRjaCIsImVyciIsInN0YXR1c0NvZGUiLCJyZXNwb25zZSIsInN0YXR1cyIsImVycm9yIiwicmVzZXRFcnJvcnMiLCJlcnJvcnMiLCJyZXBsYWNlIiwic2VhcmNoU3RyIiwicmVwbGFjZVN0ciIsInJlc2V0VmFsaWRhdGlvbkZpZWxkcyIsIm1lc3NhZ2UiLCJwYXRjaCIsImlkIiwiZGVsZXRlIiwicmVtb3ZlIiwiY29uc29sZSIsInBhZ2VOdW1iZXIiLCJ1cmwiLCJnZXQiLCJsaXN0IiwidXBkYXRlIiwicGF5bG9hZCIsInR5cGUiLCJBUlRJQ0xFX0FERCIsIkFSVElDTEVfVVBEQVRFIiwiQVJUSUNMRV9SRU1PVkUiLCJBUlRJQ0xFX0xJU1QiLCJsb2FkQXJ0aWNsZSIsImZvcm1hdCIsIm5hbWUiLCJfX2h0bWwiLCJyZW5kZXJQdWJsaXNoZWREYXRlIiwicmVuZGVyQXV0aG9yIiwiY3JlYXRlTWFya3VwIiwiQVBQX1RJVExFIiwicmVuZGVyQXJ0aWNsZSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsTUFDakNDLE1BRGlDLEdBQ3RCRCxPQUFPRSxLQURlLENBQ2pDRCxNQURpQzs7QUFFekMsTUFBTUUsVUFBVUosTUFBTUssUUFBTixDQUFlQyxJQUFmLENBQW9CQyxJQUFwQixDQUF5QjtBQUFBLFdBQVdILFFBQVFJLElBQVIsS0FBaUJOLE9BQU9NLElBQW5DO0FBQUEsR0FBekIsQ0FBaEI7QUFDQSxTQUFPO0FBQ0xKLGFBQVNBLFVBQVUsSUFBSUssaUJBQUosQ0FBWUwsT0FBWixDQUFWLEdBQWlDLElBQUlLLGlCQUFKLENBQVksRUFBWjtBQURyQyxHQUFQO0FBR0QsQ0FORDs7QUFIQTtrQkFXZSx5QkFBUVYsZUFBUixFQUF5QlcsY0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUQsTzs7O0FBQ0osbUJBQVlFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsVUFBTCxDQUFnQkQsS0FBaEI7QUFIaUI7QUFJbEI7Ozs7K0JBRVVBLEssRUFBTztBQUNoQixtSEFBaUJBLEtBQWpCOztBQUVBLFdBQUtILElBQUwsR0FBWUcsTUFBTUgsSUFBTixJQUFjLEVBQTFCO0FBQ0EsV0FBS0ssS0FBTCxHQUFhRixNQUFNRSxLQUFOLElBQWUsRUFBNUI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CSCxNQUFNRyxXQUFOLElBQXFCLEVBQXhDO0FBQ0EsV0FBS0MsT0FBTCxHQUFlSixNQUFNSSxPQUFOLElBQWlCLEVBQWhDO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQkwsTUFBTUssU0FBTixJQUFtQixLQUFwQztBQUNBLFdBQUtDLFdBQUwsR0FBbUJOLE1BQU1NLFdBQU4sR0FBb0Isc0JBQU9OLE1BQU1NLFdBQWIsQ0FBcEIsR0FBZ0QsSUFBbkU7O0FBRUE7QUFDQSxXQUFLQyxJQUFMLEdBQVlQLE1BQU1PLElBQU4sR0FBYSxJQUFJQyxjQUFKLENBQVNSLE1BQU1PLElBQWYsQ0FBYixHQUFvQyxJQUFoRDtBQUNEOzs7O0VBbkJtQkUsZTs7a0JBc0JQWCxPOzs7Ozs7Ozs7Ozs7O1FDZENZLGlCLEdBQUFBLGlCO1FBZ0NBQyxvQixHQUFBQSxvQjtRQWdDQUMsb0IsR0FBQUEsb0I7UUFhQUMsa0IsR0FBQUEsa0I7UUFpQkFDLGtCLEdBQUFBLGtCO1FBYUFDLG1CLEdBQUFBLG1COztBQXZIaEI7Ozs7QUFDQTs7OztBQUNBOztJQUFZQyxjOzs7Ozs7QUFFWixTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsU0FBT0Msc0JBQVlDLElBQVosQ0FBaUJGLEtBQWpCLENBQVA7QUFDRDs7QUFFRCxTQUFTRyxpQkFBVCxDQUEyQjlCLE1BQTNCLEVBQW1DO0FBQ2pDLFNBQU80QixzQkFBWUcsS0FBWixDQUFrQi9CLE1BQWxCLENBQVA7QUFDRDs7QUFFTSxTQUFTbUIsaUJBQVQsQ0FBMkJuQixNQUEzQixFQUFtQztBQUN4QyxTQUFPO0FBQUEsV0FDTCxJQUFJZ0MsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMscUJBQUtDLElBQUwsQ0FBVSxXQUFWLEVBQXVCVixpQkFBaUIxQixNQUFqQixDQUF2QixFQUNHcUMsSUFESCxDQUNRLGVBQU87QUFDWEMsaUJBQVNiLGVBQWVjLEdBQWYsQ0FBbUJULGtCQUFrQlUsSUFBSXBDLElBQXRCLENBQW5CLENBQVQ7QUFDQSxlQUFPNkIsU0FBUDtBQUNELE9BSkgsRUFLR1EsS0FMSCxDQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkLFlBQU1DLGFBQWFELElBQUlFLFFBQUosQ0FBYUMsTUFBaEM7QUFDQSxZQUFNekMsT0FBTztBQUNYMEMsaUJBQU8sSUFESTtBQUVYSDtBQUZXLFNBQWI7O0FBS0EsWUFBSUEsZUFBZSxHQUFuQixFQUF3QjtBQUN0QixjQUFNSSxjQUFjO0FBQ2xCQyxvQkFBUU4sSUFBSUUsUUFBSixDQUFheEMsSUFESDtBQUVsQjZDLHFCQUFTLEtBRlM7QUFHbEJDLHVCQUFXLEVBSE87QUFJbEJDLHdCQUFZO0FBSk0sV0FBcEI7QUFNQS9DLGVBQUswQyxLQUFMLEdBQWFsQixzQkFBWXdCLHFCQUFaLENBQWtDTCxXQUFsQyxDQUFiO0FBQ0QsU0FSRCxNQVFPLElBQUlKLGVBQWUsR0FBbkIsRUFBd0I7QUFDN0J2QyxlQUFLMEMsS0FBTCxHQUFhSixJQUFJRSxRQUFKLENBQWF4QyxJQUFiLENBQWtCaUQsT0FBL0I7QUFDRDtBQUNELGVBQU9uQixPQUFPOUIsSUFBUCxDQUFQO0FBQ0QsT0F4Qkg7QUF5QkQsS0ExQkQsQ0FESztBQUFBLEdBQVA7QUE2QkQ7O0FBRU0sU0FBU2dCLG9CQUFULENBQThCcEIsTUFBOUIsRUFBc0M7QUFDM0MsU0FBTztBQUFBLFdBQ0wsSUFBSWdDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0JDLHFCQUFLbUIsS0FBTCxlQUF1QnRELE9BQU91RCxFQUE5QixFQUFvQzdCLGlCQUFpQjFCLE1BQWpCLENBQXBDLEVBQ0dxQyxJQURILENBQ1EsZUFBTztBQUNYQyxpQkFBU2IsZUFBZWMsR0FBZixDQUFtQlQsa0JBQWtCVSxJQUFJcEMsSUFBdEIsQ0FBbkIsQ0FBVDtBQUNBLGVBQU82QixTQUFQO0FBQ0QsT0FKSCxFQUtHUSxLQUxILENBS1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2QsWUFBTUMsYUFBYUQsSUFBSUUsUUFBSixDQUFhQyxNQUFoQztBQUNBLFlBQU16QyxPQUFPO0FBQ1gwQyxpQkFBTyxJQURJO0FBRVhIO0FBRlcsU0FBYjs7QUFLQSxZQUFJQSxlQUFlLEdBQW5CLEVBQXdCO0FBQ3RCLGNBQU1JLGNBQWM7QUFDbEJDLG9CQUFRTixJQUFJRSxRQUFKLENBQWF4QyxJQURIO0FBRWxCNkMscUJBQVMsS0FGUztBQUdsQkMsdUJBQVcsRUFITztBQUlsQkMsd0JBQVk7QUFKTSxXQUFwQjtBQU1BL0MsZUFBSzBDLEtBQUwsR0FBYWxCLHNCQUFZd0IscUJBQVosQ0FBa0NMLFdBQWxDLENBQWI7QUFDRCxTQVJELE1BUU8sSUFBSUosZUFBZSxHQUFuQixFQUF3QjtBQUM3QnZDLGVBQUswQyxLQUFMLEdBQWFKLElBQUlFLFFBQUosQ0FBYXhDLElBQWIsQ0FBa0JpRCxPQUEvQjtBQUNEO0FBQ0QsZUFBT25CLE9BQU85QixJQUFQLENBQVA7QUFDRCxPQXhCSDtBQXlCRCxLQTFCRCxDQURLO0FBQUEsR0FBUDtBQTZCRDs7QUFFTSxTQUFTaUIsb0JBQVQsQ0FBOEJrQyxFQUE5QixFQUFrQztBQUN2QyxTQUFPLG9CQUFZO0FBQ2pCcEIsbUJBQUtxQixNQUFMLGVBQXdCRCxFQUF4QixFQUNHbEIsSUFESCxDQUNRLFlBQU07QUFDVkMsZUFBU2IsZUFBZWdDLE1BQWYsQ0FBc0JGLEVBQXRCLENBQVQ7QUFDRCxLQUhILEVBSUdkLEtBSkgsQ0FJUyxVQUFDQyxHQUFELEVBQVM7QUFDZDtBQUNBZ0IsY0FBUVosS0FBUixDQUFjSixJQUFJRSxRQUFsQjtBQUNELEtBUEg7QUFRRCxHQVREO0FBVUQ7O0FBRU0sU0FBU3RCLGtCQUFULE9BQWlFO0FBQUEsNkJBQXBDcUMsVUFBb0M7QUFBQSxNQUFwQ0EsVUFBb0MsbUNBQXZCLENBQXVCO0FBQUEsc0JBQXBCQyxHQUFvQjtBQUFBLE1BQXBCQSxHQUFvQiw0QkFBZCxXQUFjOztBQUN0RSxTQUFPLG9CQUFZO0FBQ2pCLFFBQUlELGFBQWEsQ0FBakIsRUFBb0I7QUFDbEJDLFlBQU1BLGtCQUFlRCxVQUFmLENBQU47QUFDRDs7QUFFRHhCLG1CQUFLMEIsR0FBTCxDQUFTRCxHQUFULEVBQ0d2QixJQURILENBQ1EsVUFBQ0csR0FBRCxFQUFTO0FBQ2JGLGVBQVNiLGVBQWVxQyxJQUFmLENBQW9CaEMsa0JBQWtCVSxJQUFJcEMsSUFBdEIsQ0FBcEIsQ0FBVDtBQUNELEtBSEgsRUFJR3FDLEtBSkgsQ0FJUyxVQUFDQyxHQUFELEVBQVM7QUFDZDtBQUNBZ0IsY0FBUVosS0FBUixDQUFjSixJQUFJRSxRQUFsQjtBQUNELEtBUEg7QUFRRCxHQWJEO0FBY0Q7O0FBRU0sU0FBU3JCLGtCQUFULENBQTRCZ0MsRUFBNUIsRUFBZ0M7QUFDckMsU0FBTyxvQkFBWTtBQUNqQnBCLG1CQUFLMEIsR0FBTCxlQUFxQk4sRUFBckIsRUFDR2xCLElBREgsQ0FDUSxVQUFDRyxHQUFELEVBQVM7QUFDYkYsZUFBU2IsZUFBZWMsR0FBZixDQUFtQlQsa0JBQWtCVSxJQUFJcEMsSUFBdEIsQ0FBbkIsQ0FBVDtBQUNELEtBSEgsRUFJR3FDLEtBSkgsQ0FJUyxVQUFDQyxHQUFELEVBQVM7QUFDZDtBQUNBZ0IsY0FBUVosS0FBUixDQUFjSixJQUFJRSxRQUFsQjtBQUNELEtBUEg7QUFRRCxHQVREO0FBVUQ7O0FBRU0sU0FBU3BCLG1CQUFULENBQTZCbEIsSUFBN0IsRUFBbUM7QUFDeEMsU0FBTyxvQkFBWTtBQUNqQjZCLG1CQUFLMEIsR0FBTCx5QkFBK0J2RCxJQUEvQixFQUNHK0IsSUFESCxDQUNRLFVBQUNHLEdBQUQsRUFBUztBQUNiRixlQUFTYixlQUFlYyxHQUFmLENBQW1CVCxrQkFBa0JVLElBQUlwQyxJQUF0QixDQUFuQixDQUFUO0FBQ0QsS0FISCxFQUlHcUMsS0FKSCxDQUlTLFVBQUNDLEdBQUQsRUFBUztBQUNkO0FBQ0FnQixjQUFRWixLQUFSLENBQWNKLElBQUlFLFFBQWxCO0FBQ0QsS0FQSDtBQVFELEdBVEQ7QUFVRCxDOzs7Ozs7Ozs7Ozs7O1FDbkhlTCxHLEdBQUFBLEc7UUFPQXdCLE0sR0FBQUEsTTtRQU9BTixNLEdBQUFBLE07UUFPQUssSSxHQUFBQSxJOztBQTVCaEI7O0FBT08sU0FBU3ZCLEdBQVQsQ0FBYXlCLE9BQWIsRUFBc0I7QUFDM0IsU0FBTztBQUNMQyxVQUFNQyx3QkFERDtBQUVMRjtBQUZLLEdBQVA7QUFJRCxDLENBcEJEOzs7Ozs7OztBQXNCTyxTQUFTRCxNQUFULENBQWdCQyxPQUFoQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xDLFVBQU1FLDJCQUREO0FBRUxIO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVNQLE1BQVQsQ0FBZ0JPLE9BQWhCLEVBQXlCO0FBQzlCLFNBQU87QUFDTEMsVUFBTUcsMkJBREQ7QUFFTEo7QUFGSyxHQUFQO0FBSUQ7O0FBRU0sU0FBU0YsSUFBVCxDQUFjRSxPQUFkLEVBQXVCO0FBQzVCLFNBQU87QUFDTEMsVUFBTUkseUJBREQ7QUFFTEw7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7K2VBTEE7OztJQU9NeEQsSTs7O0FBUUosZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFHakIsVUFBS1gsS0FBTCxHQUFhO0FBQ1g7QUFEVyxLQUFiO0FBSGlCO0FBTWxCOzs7O3lDQUVvQjtBQUNuQixXQUFLd0UsV0FBTDtBQUNEOzs7a0NBRWE7QUFBQSxtQkFDdUIsS0FBSzdELEtBRDVCO0FBQUEsVUFDTFIsS0FESyxVQUNMQSxLQURLO0FBQUEsVUFDRUMsT0FERixVQUNFQSxPQURGO0FBQUEsVUFDV29DLFFBRFgsVUFDV0EsUUFEWDs7O0FBR1osVUFBSSxDQUFDcEMsUUFBUUksSUFBYixFQUFtQjtBQUNqQmdDLGlCQUFTLGtDQUFvQnJDLE1BQU1ELE1BQU4sQ0FBYU0sSUFBakMsQ0FBVDtBQUNEO0FBQ0Y7OzswQ0FFcUI7QUFBQSxVQUNiUyxXQURhLEdBQ0UsS0FBS04sS0FBTCxDQUFXUCxPQURiLENBQ2JhLFdBRGE7OztBQUdwQixVQUFJQSxXQUFKLEVBQWlCO0FBQ2YsdUJBQWFBLFlBQVl3RCxNQUFaLENBQW1CLGNBQW5CLENBQWI7QUFDRDtBQUNGOzs7bUNBRWM7QUFBQSxVQUNOdkQsSUFETSxHQUNFLEtBQUtQLEtBQUwsQ0FBV1AsT0FEYixDQUNOYyxJQURNOzs7QUFHYixVQUFJQSxJQUFKLEVBQVU7QUFDUix1QkFBYUEsS0FBS3dELElBQWxCO0FBQ0Q7QUFFRjs7O21DQUVjO0FBQ2IsYUFBTyxFQUFDQyxRQUFRLEtBQUtoRSxLQUFMLENBQVdQLE9BQVgsQ0FBbUJXLE9BQTVCLEVBQVA7QUFDRDs7O29DQUVlO0FBQUEsVUFDUFgsT0FETyxHQUNJLEtBQUtPLEtBRFQsQ0FDUFAsT0FETzs7QUFFZCxhQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVUsOEJBQWY7QUFDTjtBQUFBO0FBQUE7QUFBS0Esa0JBQVFTO0FBQWIsU0FETTtBQUVOO0FBQUE7QUFBQSxZQUFPLFdBQVUsaUJBQWpCO0FBQW9DLGVBQUsrRCxtQkFBTCxFQUFwQztBQUFBO0FBQWlFLGVBQUtDLFlBQUw7QUFBakUsU0FGTTtBQUdOO0FBQUE7QUFBQSxZQUFHLFdBQVUsaUJBQWI7QUFBZ0N6RSxrQkFBUVU7QUFBeEMsU0FITTtBQUlOLCtDQUFLLHlCQUF5QixLQUFLZ0UsWUFBTCxFQUE5QjtBQUpNLE9BQVI7QUFNRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFDLG9DQUFEO0FBQUEsVUFBZSxPQUFVLEtBQUtuRSxLQUFMLENBQVdQLE9BQVgsQ0FBbUJTLEtBQTdCLFdBQXdDa0UsZ0JBQXZEO0FBQ0U7QUFBQTtBQUFBLFlBQVMsSUFBRyxxQkFBWjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRyxtQkFBS0MsYUFBTDtBQURIO0FBREY7QUFERjtBQURGLE9BREY7QUFXRDs7OztFQXZFZ0JDLGdCOztBQUFidkUsSSxDQUNHd0UsVyxHQUFjLGlCO0FBRGpCeEUsSSxDQUVHeUUsUyxHQUFZO0FBQ2pCaEYsU0FBT2lGLG9CQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRWpCbEYsV0FBU2dGLG9CQUFVQyxNQUFWLENBQWlCQyxVQUZUO0FBR2pCOUMsWUFBVTRDLG9CQUFVRyxJQUFWLENBQWVEO0FBSFIsQztrQkF3RU41RSxJOzs7Ozs7OztBQ2pGZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3ZDQTs7QUFFQSwrQkFBK0IsaUZBQWlGOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUN2Q0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pEQSxJQUFNcUUsWUFBWSxnQkFBbEI7O1FBR0lBLFMsR0FBQUEsUyIsImZpbGUiOiJqcy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uLy4uLy4uLy4uL2FydGljbGUvQXJ0aWNsZSdcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBQYWdlIGZyb20gJy4vUGFnZSdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCByb3V0ZXIpID0+IHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IHJvdXRlci5tYXRjaFxuICBjb25zdCBhcnRpY2xlID0gc3RhdGUuYXJ0aWNsZXMuZGF0YS5maW5kKGFydGljbGUgPT4gYXJ0aWNsZS5zbHVnID09PSBwYXJhbXMuc2x1ZylcbiAgcmV0dXJuIHtcbiAgICBhcnRpY2xlOiBhcnRpY2xlID8gbmV3IEFydGljbGUoYXJ0aWNsZSkgOiBuZXcgQXJ0aWNsZSh7fSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy93ZWIvcGFnZXMvYmxvZy9kZXRhaWxzL2luZGV4LmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdXRpbHMvTW9kZWwnXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXIvVXNlcidcblxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShwcm9wcylcbiAgfVxuXG4gIGluaXRpYWxpemUocHJvcHMpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKHByb3BzKVxuXG4gICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZyB8fCAnJ1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZSB8fCAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbiB8fCAnJ1xuICAgIHRoaXMuY29udGVudCA9IHByb3BzLmNvbnRlbnQgfHwgJydcbiAgICB0aGlzLnB1Ymxpc2hlZCA9IHByb3BzLnB1Ymxpc2hlZCB8fCBmYWxzZVxuICAgIHRoaXMucHVibGlzaGVkQXQgPSBwcm9wcy5wdWJsaXNoZWRBdCA/IG1vbWVudChwcm9wcy5wdWJsaXNoZWRBdCkgOiBudWxsXG5cbiAgICAvLyByZWxhdGUgdXNlciBtb2RlbFxuICAgIHRoaXMudXNlciA9IHByb3BzLnVzZXIgPyBuZXcgVXNlcihwcm9wcy51c2VyKSA6IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwiaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vdXRpbHMvSHR0cCdcbmltcG9ydCBUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91dGlscy9UcmFuc2Zvcm1lcidcbmltcG9ydCAqIGFzIGFydGljbGVBY3Rpb25zIGZyb20gJy4vc3RvcmUvYWN0aW9ucydcblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChwYXJtcykge1xuICByZXR1cm4gVHJhbnNmb3JtZXIuc2VuZChwYXJtcylcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UocGFyYW1zKSB7XG4gIHJldHVybiBUcmFuc2Zvcm1lci5mZXRjaChwYXJhbXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlQWRkUmVxdWVzdChwYXJhbXMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IChcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIdHRwLnBvc3QoJy9hcnRpY2xlcycsIHRyYW5zZm9ybVJlcXVlc3QocGFyYW1zKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVyci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRFcnJvcnMgPSB7XG4gICAgICAgICAgICAgIGVycm9yczogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWFyY2hTdHI6ICcnLFxuICAgICAgICAgICAgICByZXBsYWNlU3RyOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gVHJhbnNmb3JtZXIucmVzZXRWYWxpZGF0aW9uRmllbGRzKHJlc2V0RXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgICAgZGF0YS5lcnJvciA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWplY3QoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZVVwZGF0ZVJlcXVlc3QocGFyYW1zKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiAoXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSHR0cC5wYXRjaChgYXJ0aWNsZXMvJHtwYXJhbXMuaWR9YCwgdHJhbnNmb3JtUmVxdWVzdChwYXJhbXMpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDIyKSB7XG4gICAgICAgICAgICBjb25zdCByZXNldEVycm9ycyA9IHtcbiAgICAgICAgICAgICAgZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlYXJjaFN0cjogJycsXG4gICAgICAgICAgICAgIHJlcGxhY2VTdHI6ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBUcmFuc2Zvcm1lci5yZXNldFZhbGlkYXRpb25GaWVsZHMocmVzZXRFcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlUmVtb3ZlUmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZGVsZXRlKGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLnJlbW92ZShpZCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVMaXN0UmVxdWVzdCh7cGFnZU51bWJlciA9IDEsIHVybCA9ICcvYXJ0aWNsZXMnfSkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChwYWdlTnVtYmVyID4gMSkge1xuICAgICAgdXJsID0gdXJsICsgYD9wYWdlPSR7cGFnZU51bWJlcn1gXG4gICAgfVxuXG4gICAgSHR0cC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5saXN0KHRyYW5zZm9ybVJlc3BvbnNlKHJlcy5kYXRhKSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVFZGl0UmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZ2V0KGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlRmV0Y2hSZXF1ZXN0KHNsdWcpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBIdHRwLmdldChgYXJ0aWNsZXMvcHVibGlzaGVkLyR7c2x1Z31gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlKVxuICAgICAgfSlcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3NlcnZpY2UuanMiLCIvKiA9PT09PT09PT09PT1cbiAqIEFjdGlvbnMgZm9yIHRoZSBhcnRpY2xlIG1vZHVsZVxuICogPT09PT09PT09PT09XG4gKlxuICogVGhlIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIHRoZVxuICogYXJ0aWNsZSBtb2R1bGUuXG4gKi9cblxuaW1wb3J0IHtcbiAgQVJUSUNMRV9BREQsXG4gIEFSVElDTEVfVVBEQVRFLFxuICBBUlRJQ0xFX1JFTU9WRSxcbiAgQVJUSUNMRV9MSVNULFxufSBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFSVElDTEVfQURELFxuICAgIHBheWxvYWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX1VQREFURSxcbiAgICBwYXlsb2FkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJUSUNMRV9SRU1PVkUsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX0xJU1QsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc3RvcmUvYWN0aW9ucy5qcyIsIi8vIGltcG9ydCBsaWJzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IERvY3VtZW50VGl0bGUgZnJvbSAncmVhY3QtZG9jdW1lbnQtdGl0bGUnO1xuaW1wb3J0IHthcnRpY2xlRmV0Y2hSZXF1ZXN0fSBmcm9tICcuLi8uLi8uLi8uLi9hcnRpY2xlL3NlcnZpY2UnXG5pbXBvcnQge0FQUF9USVRMRX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdmFsdWVzL2luZGV4J1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0FydGljbGVTaG93UGFnZSdcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtYXRjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFydGljbGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvL1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRBcnRpY2xlKClcbiAgfVxuXG4gIGxvYWRBcnRpY2xlKCkge1xuICAgIGNvbnN0IHttYXRjaCwgYXJ0aWNsZSwgZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKCFhcnRpY2xlLnNsdWcpIHtcbiAgICAgIGRpc3BhdGNoKGFydGljbGVGZXRjaFJlcXVlc3QobWF0Y2gucGFyYW1zLnNsdWcpKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclB1Ymxpc2hlZERhdGUoKSB7XG4gICAgY29uc3Qge3B1Ymxpc2hlZEF0fSA9IHRoaXMucHJvcHMuYXJ0aWNsZVxuXG4gICAgaWYgKHB1Ymxpc2hlZEF0KSB7XG4gICAgICByZXR1cm4gYGF0ICR7cHVibGlzaGVkQXQuZm9ybWF0KCdNTU1NIGQsIFlZWVknKX1gXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQXV0aG9yKCkge1xuICAgIGNvbnN0IHt1c2VyfSA9IHRoaXMucHJvcHMuYXJ0aWNsZVxuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiBgYnkgJHt1c2VyLm5hbWV9YFxuICAgIH1cblxuICB9XG5cbiAgY3JlYXRlTWFya3VwKCkge1xuICAgIHJldHVybiB7X19odG1sOiB0aGlzLnByb3BzLmFydGljbGUuY29udGVudH07XG4gIH1cblxuICByZW5kZXJBcnRpY2xlKCkge1xuICAgIGNvbnN0IHthcnRpY2xlfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS05IG1iLTUgbXgtYXV0b1wiPlxuICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XG4gICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtYi01XCI+e3RoaXMucmVuZGVyUHVibGlzaGVkRGF0ZSgpfSB7dGhpcy5yZW5kZXJBdXRob3IoKX08L3NtYWxsPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtYi01XCI+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5jcmVhdGVNYXJrdXAoKX0vPlxuICAgIDwvZGl2PilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50VGl0bGUgdGl0bGU9e2Ake3RoaXMucHJvcHMuYXJ0aWNsZS50aXRsZX0gLSAke0FQUF9USVRMRX1gfT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb21wb25lbnRzLWFydGljbGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFydGljbGUoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0RvY3VtZW50VGl0bGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy93ZWIvcGFnZXMvYmxvZy9kZXRhaWxzL1BhZ2UuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpLFxuICAgIHdpdGhTaWRlRWZmZWN0ID0gcmVxdWlyZSgncmVhY3Qtc2lkZS1lZmZlY3QnKTtcblxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICB2YXIgaW5uZXJtb3N0UHJvcHMgPSBwcm9wc0xpc3RbcHJvcHNMaXN0Lmxlbmd0aCAtIDFdO1xuICBpZiAoaW5uZXJtb3N0UHJvcHMpIHtcbiAgICByZXR1cm4gaW5uZXJtb3N0UHJvcHMudGl0bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCh0aXRsZSkge1xuICB2YXIgbmV4dFRpdGxlID0gdGl0bGUgfHwgJyc7XG4gIGlmIChuZXh0VGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBuZXh0VGl0bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gRG9jdW1lbnRUaXRsZSgpIHt9XG5Eb2N1bWVudFRpdGxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbkRvY3VtZW50VGl0bGUuZGlzcGxheU5hbWUgPSAnRG9jdW1lbnRUaXRsZSc7XG5Eb2N1bWVudFRpdGxlLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuRG9jdW1lbnRUaXRsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFNpZGVFZmZlY3QoXG4gIHJlZHVjZVByb3BzVG9TdGF0ZSxcbiAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudFxuKShEb2N1bWVudFRpdGxlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvY3VtZW50LXRpdGxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnZXhlbnYnKSk7XG52YXIgc2hhbGxvd0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQsIG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZWR1Y2VQcm9wc1RvU3RhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG4gIGlmICh0eXBlb2YgbWFwU3RhdGVPblNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG1hcFN0YXRlT25TZXJ2ZXIgdG8gZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgV3JhcHBlZENvbXBvbmVudCB0byBiZSBhIFJlYWN0IGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgIHZhciBzdGF0ZSA9IHZvaWQgMDtcblxuICAgIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgICBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShtb3VudGVkSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzO1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAoU2lkZUVmZmVjdC5jYW5Vc2VET00pIHtcbiAgICAgICAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChzdGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgICAgICAgc3RhdGUgPSBtYXBTdGF0ZU9uU2VydmVyKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU2lkZUVmZmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNpZGVFZmZlY3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaWRlRWZmZWN0KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgLy8gRXhwb3NlIGNhblVzZURPTSBzbyB0ZXN0cyBjYW4gbW9ua2V5cGF0Y2ggaXRcblxuXG4gICAgICBTaWRlRWZmZWN0LnJld2luZCA9IGZ1bmN0aW9uIHJld2luZCgpIHtcbiAgICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG9ubHkgY2FsbCByZXdpbmQoKSBvbiB0aGUgc2VydmVyLiBDYWxsIHBlZWsoKSB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlY29yZGVkU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIHJlY29yZGVkU3RhdGU7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBtb3VudGVkSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIFNpZGVFZmZlY3QuZGlzcGxheU5hbWUgPSAnU2lkZUVmZmVjdCgnICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gICAgU2lkZUVmZmVjdC5jYW5Vc2VET00gPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET007XG5cblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTaWRlRWZmZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcblxuICAgIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICAgIGlmKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiAhIXJldDtcbiAgICB9XG5cbiAgICBpZihvYmpBID09PSBvYmpCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCAhb2JqQSB8fFxuICAgICAgIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCAhb2JqQikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgICBpZihrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAgIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gICAgZm9yKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG5cbiAgICAgICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICAgICAgaWYoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgICAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgICAgIGlmKHJldCA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgcmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJjb25zdCBBUFBfVElUTEUgPSAnWW91ciBCbG9nIE5hbWUnXG5cbmV4cG9ydCB7XG4gICAgQVBQX1RJVExFLFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmFsdWVzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==