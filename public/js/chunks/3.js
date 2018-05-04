webpackJsonp([3],{

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Page = __webpack_require__(479);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import libs
exports.default = (0, _reactRedux.connect)()(_Page2.default);

// import components

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

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Article = __webpack_require__(337);

var _Article2 = _interopRequireDefault(_Article);

var _Articles = __webpack_require__(386);

var _Articles2 = _interopRequireDefault(_Articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // libs


// components


var mapStateToProps = function mapStateToProps(state) {
  var _state$articles = state.articles,
      data = _state$articles.data,
      meta = _objectWithoutProperties(_state$articles, ['data']);

  return {
    articles: data.map(function (article) {
      return new _Article2.default(article);
    }),
    meta: Object.assign({}, meta)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Articles2.default);

/***/ }),

/***/ 386:
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

var _Article = __webpack_require__(387);

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Articles = function (_Component) {
  _inherits(Articles, _Component);

  function Articles(props) {
    _classCallCheck(this, Articles);

    var _this = _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this, props));

    _this.state = {
      //
    };
    return _this;
  }

  _createClass(Articles, [{
    key: 'renderArticles',
    value: function renderArticles() {
      return this.props.articles.map(function (article, index) {
        return _react2.default.createElement(_Article2.default, { key: 'article-' + index,
          index: index,
          article: article });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'components-articles' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.props.articles && this.renderArticles()
          )
        )
      );
    }
  }]);

  return Articles;
}(_react.Component);

Articles.displayName = 'Articles';
Articles.propTypes = {
  articles: _propTypes2.default.array.isRequired,
  dispatch: _propTypes2.default.func.isRequired
};
exports.default = Articles;

/***/ }),

/***/ 387:
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

var displayName = 'ArticleComponent';

// import components
// import libs

var propTypes = {
  index: _propTypes2.default.number.isRequired,
  article: _propTypes2.default.object.isRequired

  // const renderAuthor = (article) => {
  //   return article.user && `By ${ article.user.name }`
  // }

};var renderPublishedAt = function renderPublishedAt(article) {
  return article.publishedAt && 'at ' + article.publishedAt.format('MMMM D, YYYY');
};

function render(_ref) {
  var article = _ref.article;

  return _react2.default.createElement(
    'div',
    { className: 'col-12 col-sm-9 mb-5 mx-auto' },
    _react2.default.createElement(
      'div',
      { className: 'card' },
      _react2.default.createElement(
        'div',
        { className: 'card-body' },
        _react2.default.createElement(
          'h4',
          { className: 'card-title' },
          article.title
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2 text-muted' },
          renderPublishedAt(article)
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          article.description
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: 'blog/' + article.slug, className: 'card-link' },
          'Read More'
        )
      )
    )
  );
}

render.displayName = displayName;
render.propTypes = propTypes;

exports.default = render;

/***/ }),

/***/ 479:
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

var _Header = __webpack_require__(480);

var _Header2 = _interopRequireDefault(_Header);

var _listing = __webpack_require__(385);

var _listing2 = _interopRequireDefault(_listing);

var _service = __webpack_require__(338);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import components


// import services


var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch((0, _service.articleListRequest)({ url: '/articles/published' }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_listing2.default, null)
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.displayName = "HomePage";
Page.propTypes = {
  dispatch: _propTypes2.default.func.isRequired
};
exports.default = Page;

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var displayName = "HomePageHeader";

function Header() {
  return _react2.default.createElement(
    "header",
    { className: "bg-primary text-white" },
    _react2.default.createElement(
      "div",
      { className: "container text-center" },
      _react2.default.createElement("img", { width: "125", height: "125", src: "/img/moeen.jpg", alt: "...", className: "rounded-circle" }),
      _react2.default.createElement(
        "h1",
        null,
        "Moeen Farooq Basra"
      ),
      _react2.default.createElement(
        "p",
        { className: "lead" },
        "Master in Information Technology"
      ),
      _react2.default.createElement(
        "p",
        { className: "lead" },
        "Fullstack Developer at\xA0",
        _react2.default.createElement(
          "a",
          { className: "text-white",
            href: "http://awok.com",
            target: "_blank",
            rel: "noreferrer noopener" },
          "Awok.com"
        )
      ),
      _react2.default.createElement(
        "p",
        { className: "lead" },
        _react2.default.createElement("i", { className: "fa fa-heart text-danger" }),
        "{ PHP, JavaScript, Python, MySQL, MongoDB }"
      )
    )
  );
}
Header.displayName = displayName;

exports.default = Header;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21tb24vYXJ0aWNsZXMvbGlzdGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21tb24vYXJ0aWNsZXMvbGlzdGluZy9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL3dlYi9wYWdlcy9ob21lL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL3dlYi9wYWdlcy9ob21lL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJBcnRpY2xlIiwicHJvcHMiLCJpbml0aWFsaXplIiwic2x1ZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwicHVibGlzaGVkIiwicHVibGlzaGVkQXQiLCJ1c2VyIiwiVXNlciIsIk1vZGVsIiwiYXJ0aWNsZUFkZFJlcXVlc3QiLCJhcnRpY2xlVXBkYXRlUmVxdWVzdCIsImFydGljbGVSZW1vdmVSZXF1ZXN0IiwiYXJ0aWNsZUxpc3RSZXF1ZXN0IiwiYXJ0aWNsZUVkaXRSZXF1ZXN0IiwiYXJ0aWNsZUZldGNoUmVxdWVzdCIsImFydGljbGVBY3Rpb25zIiwidHJhbnNmb3JtUmVxdWVzdCIsInBhcm1zIiwiVHJhbnNmb3JtZXIiLCJzZW5kIiwidHJhbnNmb3JtUmVzcG9uc2UiLCJwYXJhbXMiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiSHR0cCIsInBvc3QiLCJ0aGVuIiwiZGlzcGF0Y2giLCJhZGQiLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXNDb2RlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsInJlc2V0RXJyb3JzIiwiZXJyb3JzIiwicmVwbGFjZSIsInNlYXJjaFN0ciIsInJlcGxhY2VTdHIiLCJyZXNldFZhbGlkYXRpb25GaWVsZHMiLCJtZXNzYWdlIiwicGF0Y2giLCJpZCIsImRlbGV0ZSIsInJlbW92ZSIsImNvbnNvbGUiLCJwYWdlTnVtYmVyIiwidXJsIiwiZ2V0IiwibGlzdCIsInVwZGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiQVJUSUNMRV9BREQiLCJBUlRJQ0xFX1VQREFURSIsIkFSVElDTEVfUkVNT1ZFIiwiQVJUSUNMRV9MSVNUIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcnRpY2xlcyIsIm1ldGEiLCJtYXAiLCJhcnRpY2xlIiwiT2JqZWN0IiwiYXNzaWduIiwiQXJ0aWNsZXMiLCJpbmRleCIsInJlbmRlckFydGljbGVzIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyUHVibGlzaGVkQXQiLCJmb3JtYXQiLCJyZW5kZXIiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOzs7Ozs7QUFKQTtrQkFNZSwyQkFBVUEsY0FBVixDOztBQUhmLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVN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Q0c4RSxXLEdBQWMsVTtBQURqQjlFLEksQ0FFRytFLFMsR0FBWTtBQUNqQjlDLFlBQVUrQyxvQkFBVUcsSUFBVixDQUFlRDtBQURSLEM7a0JBZ0JObEYsSTs7Ozs7Ozs7Ozs7Ozs7QUM1QmY7Ozs7OztBQUVBLElBQU04RSxjQUFjLGdCQUFwQjs7QUFFQSxTQUFTVyxNQUFULEdBQWtCO0FBQ2hCLFNBQU87QUFBQTtBQUFBLE1BQVEsV0FBVSx1QkFBbEI7QUFDTDtBQUFBO0FBQUEsUUFBSyxXQUFVLHVCQUFmO0FBQ0UsNkNBQUssT0FBTSxLQUFYLEVBQWlCLFFBQU8sS0FBeEIsRUFBOEIsS0FBSSxnQkFBbEMsRUFBbUQsS0FBSSxLQUF2RCxFQUE2RCxXQUFVLGdCQUF2RSxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQTtBQUFBLFVBQUcsV0FBVSxNQUFiO0FBQUE7QUFBQSxPQUhGO0FBSUU7QUFBQTtBQUFBLFVBQUcsV0FBVSxNQUFiO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFVLFlBQWI7QUFDRyxrQkFBSyxpQkFEUjtBQUVHLG9CQUFPLFFBRlY7QUFHRyxpQkFBSSxxQkFIUDtBQUFBO0FBQUE7QUFERixPQUpGO0FBVUU7QUFBQTtBQUFBLFVBQUcsV0FBVSxNQUFiO0FBQW9CLDZDQUFHLFdBQVUseUJBQWIsR0FBcEI7QUFBQTtBQUFBO0FBVkY7QUFESyxHQUFQO0FBY0Q7QUFDREEsT0FBT1gsV0FBUCxHQUFxQkEsV0FBckI7O2tCQUVlVyxNIiwiZmlsZSI6ImpzL2NodW5rcy8zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGxpYnNcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShQYWdlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL3dlYi9wYWdlcy9ob21lL2luZGV4LmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdXRpbHMvTW9kZWwnXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXIvVXNlcidcblxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShwcm9wcylcbiAgfVxuXG4gIGluaXRpYWxpemUocHJvcHMpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKHByb3BzKVxuXG4gICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZyB8fCAnJ1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZSB8fCAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbiB8fCAnJ1xuICAgIHRoaXMuY29udGVudCA9IHByb3BzLmNvbnRlbnQgfHwgJydcbiAgICB0aGlzLnB1Ymxpc2hlZCA9IHByb3BzLnB1Ymxpc2hlZCB8fCBmYWxzZVxuICAgIHRoaXMucHVibGlzaGVkQXQgPSBwcm9wcy5wdWJsaXNoZWRBdCA/IG1vbWVudChwcm9wcy5wdWJsaXNoZWRBdCkgOiBudWxsXG5cbiAgICAvLyByZWxhdGUgdXNlciBtb2RlbFxuICAgIHRoaXMudXNlciA9IHByb3BzLnVzZXIgPyBuZXcgVXNlcihwcm9wcy51c2VyKSA6IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwiaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vdXRpbHMvSHR0cCdcbmltcG9ydCBUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91dGlscy9UcmFuc2Zvcm1lcidcbmltcG9ydCAqIGFzIGFydGljbGVBY3Rpb25zIGZyb20gJy4vc3RvcmUvYWN0aW9ucydcblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChwYXJtcykge1xuICByZXR1cm4gVHJhbnNmb3JtZXIuc2VuZChwYXJtcylcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UocGFyYW1zKSB7XG4gIHJldHVybiBUcmFuc2Zvcm1lci5mZXRjaChwYXJhbXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlQWRkUmVxdWVzdChwYXJhbXMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IChcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIdHRwLnBvc3QoJy9hcnRpY2xlcycsIHRyYW5zZm9ybVJlcXVlc3QocGFyYW1zKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVyci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRFcnJvcnMgPSB7XG4gICAgICAgICAgICAgIGVycm9yczogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWFyY2hTdHI6ICcnLFxuICAgICAgICAgICAgICByZXBsYWNlU3RyOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gVHJhbnNmb3JtZXIucmVzZXRWYWxpZGF0aW9uRmllbGRzKHJlc2V0RXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgICAgZGF0YS5lcnJvciA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWplY3QoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZVVwZGF0ZVJlcXVlc3QocGFyYW1zKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiAoXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSHR0cC5wYXRjaChgYXJ0aWNsZXMvJHtwYXJhbXMuaWR9YCwgdHJhbnNmb3JtUmVxdWVzdChwYXJhbXMpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDIyKSB7XG4gICAgICAgICAgICBjb25zdCByZXNldEVycm9ycyA9IHtcbiAgICAgICAgICAgICAgZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlYXJjaFN0cjogJycsXG4gICAgICAgICAgICAgIHJlcGxhY2VTdHI6ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBUcmFuc2Zvcm1lci5yZXNldFZhbGlkYXRpb25GaWVsZHMocmVzZXRFcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlUmVtb3ZlUmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZGVsZXRlKGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLnJlbW92ZShpZCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVMaXN0UmVxdWVzdCh7cGFnZU51bWJlciA9IDEsIHVybCA9ICcvYXJ0aWNsZXMnfSkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChwYWdlTnVtYmVyID4gMSkge1xuICAgICAgdXJsID0gdXJsICsgYD9wYWdlPSR7cGFnZU51bWJlcn1gXG4gICAgfVxuXG4gICAgSHR0cC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5saXN0KHRyYW5zZm9ybVJlc3BvbnNlKHJlcy5kYXRhKSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVFZGl0UmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZ2V0KGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlRmV0Y2hSZXF1ZXN0KHNsdWcpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBIdHRwLmdldChgYXJ0aWNsZXMvcHVibGlzaGVkLyR7c2x1Z31gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlKVxuICAgICAgfSlcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3NlcnZpY2UuanMiLCIvKiA9PT09PT09PT09PT1cbiAqIEFjdGlvbnMgZm9yIHRoZSBhcnRpY2xlIG1vZHVsZVxuICogPT09PT09PT09PT09XG4gKlxuICogVGhlIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIHRoZVxuICogYXJ0aWNsZSBtb2R1bGUuXG4gKi9cblxuaW1wb3J0IHtcbiAgQVJUSUNMRV9BREQsXG4gIEFSVElDTEVfVVBEQVRFLFxuICBBUlRJQ0xFX1JFTU9WRSxcbiAgQVJUSUNMRV9MSVNULFxufSBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFSVElDTEVfQURELFxuICAgIHBheWxvYWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX1VQREFURSxcbiAgICBwYXlsb2FkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJUSUNMRV9SRU1PVkUsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX0xJU1QsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc3RvcmUvYWN0aW9ucy5qcyIsIi8vIGxpYnNcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlJ1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVzJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHtkYXRhLCAuLi5tZXRhfSA9IHN0YXRlLmFydGljbGVzXG4gIFxuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBkYXRhLm1hcCgoYXJ0aWNsZSkgPT4gbmV3IEFydGljbGUoYXJ0aWNsZSkpLFxuICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFydGljbGVzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21tb24vYXJ0aWNsZXMvbGlzdGluZy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnXG5cbmNsYXNzIEFydGljbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0FydGljbGVzJ1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFydGljbGVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy9cbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlckFydGljbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8QXJ0aWNsZSBrZXk9e2BhcnRpY2xlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT17YXJ0aWNsZX0vPlxuICAgIH0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxzZWN0aW9uIGlkPVwiY29tcG9uZW50cy1hcnRpY2xlc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuYXJ0aWNsZXMgJiYgdGhpcy5yZW5kZXJBcnRpY2xlcygpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2NvbXBvbmVudHMvQXJ0aWNsZXMuanMiLCIvLyBpbXBvcnQgbGlic1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0FydGljbGVDb21wb25lbnQnXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGFydGljbGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuLy8gY29uc3QgcmVuZGVyQXV0aG9yID0gKGFydGljbGUpID0+IHtcbi8vICAgcmV0dXJuIGFydGljbGUudXNlciAmJiBgQnkgJHsgYXJ0aWNsZS51c2VyLm5hbWUgfWBcbi8vIH1cblxuY29uc3QgcmVuZGVyUHVibGlzaGVkQXQgPSAoYXJ0aWNsZSkgPT4ge1xuICByZXR1cm4gYXJ0aWNsZS5wdWJsaXNoZWRBdCAmJiBgYXQgJHthcnRpY2xlLnB1Ymxpc2hlZEF0LmZvcm1hdCgnTU1NTSBELCBZWVlZJyl9YFxufVxuXG5mdW5jdGlvbiByZW5kZXIgKHsgYXJ0aWNsZSB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOSBtYi01IG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9oND5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+e3JlbmRlclB1Ymxpc2hlZEF0KGFydGljbGUpfTwvaDY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnsgYXJ0aWNsZS5kZXNjcmlwdGlvbiB9PC9wPlxuICAgICAgICA8TGluayB0bz17YGJsb2cvJHthcnRpY2xlLnNsdWd9YH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+UmVhZCBNb3JlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG5yZW5kZXIuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZVxucmVuZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tbW9uL2FydGljbGVzL2xpc3RpbmcvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXJ0aWNsZXMvbGlzdGluZ1wiXG5cbi8vIGltcG9ydCBzZXJ2aWNlc1xuaW1wb3J0IHsgYXJ0aWNsZUxpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uL2FydGljbGUvc2VydmljZVwiXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIkhvbWVQYWdlXCJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXJ0aWNsZUxpc3RSZXF1ZXN0KHsgdXJsOiAnL2FydGljbGVzL3B1Ymxpc2hlZCcgfSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxBcnRpY2xlcy8+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL3dlYi9wYWdlcy9ob21lL1BhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgZGlzcGxheU5hbWUgPSBcIkhvbWVQYWdlSGVhZGVyXCJcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGltZyB3aWR0aD1cIjEyNVwiIGhlaWdodD1cIjEyNVwiIHNyYz1cIi9pbWcvbW9lZW4uanBnXCIgYWx0PVwiLi4uXCIgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiAvPlxuICAgICAgPGgxPk1vZWVuIEZhcm9vcSBCYXNyYTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+TWFzdGVyIGluIEluZm9ybWF0aW9uIFRlY2hub2xvZ3k8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+RnVsbHN0YWNrIERldmVsb3BlciBhdCZuYnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9hd29rLmNvbVwiXG4gICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5Bd29rLmNvbTwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydCB0ZXh0LWRhbmdlclwiIC8+e2B7IFBIUCwgSmF2YVNjcmlwdCwgUHl0aG9uLCBNeVNRTCwgTW9uZ29EQiB9YH08L3A+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxufVxuSGVhZGVyLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9