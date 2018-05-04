webpackJsonp([4],{

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Page = __webpack_require__(481);

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

/***/ 481:
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

var _index = __webpack_require__(385);

var _index2 = _interopRequireDefault(_index);

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
        _react2.default.createElement(_index2.default, null)
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2Jsb2cvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tbW9uL2FydGljbGVzL2xpc3RpbmcvY29tcG9uZW50cy9BcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2NvbXBvbmVudHMvQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2Jsb2cvbGlzdC9QYWdlLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJBcnRpY2xlIiwicHJvcHMiLCJpbml0aWFsaXplIiwic2x1ZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwicHVibGlzaGVkIiwicHVibGlzaGVkQXQiLCJ1c2VyIiwiVXNlciIsIk1vZGVsIiwiYXJ0aWNsZUFkZFJlcXVlc3QiLCJhcnRpY2xlVXBkYXRlUmVxdWVzdCIsImFydGljbGVSZW1vdmVSZXF1ZXN0IiwiYXJ0aWNsZUxpc3RSZXF1ZXN0IiwiYXJ0aWNsZUVkaXRSZXF1ZXN0IiwiYXJ0aWNsZUZldGNoUmVxdWVzdCIsImFydGljbGVBY3Rpb25zIiwidHJhbnNmb3JtUmVxdWVzdCIsInBhcm1zIiwiVHJhbnNmb3JtZXIiLCJzZW5kIiwidHJhbnNmb3JtUmVzcG9uc2UiLCJwYXJhbXMiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiSHR0cCIsInBvc3QiLCJ0aGVuIiwiZGlzcGF0Y2giLCJhZGQiLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXNDb2RlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsInJlc2V0RXJyb3JzIiwiZXJyb3JzIiwicmVwbGFjZSIsInNlYXJjaFN0ciIsInJlcGxhY2VTdHIiLCJyZXNldFZhbGlkYXRpb25GaWVsZHMiLCJtZXNzYWdlIiwicGF0Y2giLCJpZCIsImRlbGV0ZSIsInJlbW92ZSIsImNvbnNvbGUiLCJwYWdlTnVtYmVyIiwidXJsIiwiZ2V0IiwibGlzdCIsInVwZGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiQVJUSUNMRV9BREQiLCJBUlRJQ0xFX1VQREFURSIsIkFSVElDTEVfUkVNT1ZFIiwiQVJUSUNMRV9MSVNUIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcnRpY2xlcyIsIm1ldGEiLCJtYXAiLCJhcnRpY2xlIiwiT2JqZWN0IiwiYXNzaWduIiwiQXJ0aWNsZXMiLCJpbmRleCIsInJlbmRlckFydGljbGVzIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyUHVibGlzaGVkQXQiLCJmb3JtYXQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOzs7Ozs7QUFKQTtrQkFNZSwyQkFBVUEsY0FBVixDOztBQUhmLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUdqQixVQUFLQyxVQUFMLENBQWdCRCxL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anMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbGlic1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFBhZ2UpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvd2ViL3BhZ2VzL2Jsb2cvbGlzdC9pbmRleC5qcyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3V0aWxzL01vZGVsJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kdWxlcy91c2VyL1VzZXInXG5cbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmluaXRpYWxpemUocHJvcHMpXG4gIH1cblxuICBpbml0aWFsaXplKHByb3BzKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZShwcm9wcylcblxuICAgIHRoaXMuc2x1ZyA9IHByb3BzLnNsdWcgfHwgJydcbiAgICB0aGlzLnRpdGxlID0gcHJvcHMudGl0bGUgfHwgJydcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24gfHwgJydcbiAgICB0aGlzLmNvbnRlbnQgPSBwcm9wcy5jb250ZW50IHx8ICcnXG4gICAgdGhpcy5wdWJsaXNoZWQgPSBwcm9wcy5wdWJsaXNoZWQgfHwgZmFsc2VcbiAgICB0aGlzLnB1Ymxpc2hlZEF0ID0gcHJvcHMucHVibGlzaGVkQXQgPyBtb21lbnQocHJvcHMucHVibGlzaGVkQXQpIDogbnVsbFxuXG4gICAgLy8gcmVsYXRlIHVzZXIgbW9kZWxcbiAgICB0aGlzLnVzZXIgPSBwcm9wcy51c2VyID8gbmV3IFVzZXIocHJvcHMudXNlcikgOiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvQXJ0aWNsZS5qcyIsImltcG9ydCBIdHRwIGZyb20gJy4uLy4uL3V0aWxzL0h0dHAnXG5pbXBvcnQgVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXRpbHMvVHJhbnNmb3JtZXInXG5pbXBvcnQgKiBhcyBhcnRpY2xlQWN0aW9ucyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QocGFybXMpIHtcbiAgcmV0dXJuIFRyYW5zZm9ybWVyLnNlbmQocGFybXMpXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKHBhcmFtcykge1xuICByZXR1cm4gVHJhbnNmb3JtZXIuZmV0Y2gocGFyYW1zKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZUFkZFJlcXVlc3QocGFyYW1zKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiAoXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSHR0cC5wb3N0KCcvYXJ0aWNsZXMnLCB0cmFuc2Zvcm1SZXF1ZXN0KHBhcmFtcykpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZUFjdGlvbnMuYWRkKHRyYW5zZm9ybVJlc3BvbnNlKHJlcy5kYXRhKSkpXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSBlcnIucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHN0YXR1c0NvZGUsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MjIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0RXJyb3JzID0ge1xuICAgICAgICAgICAgICBlcnJvcnM6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VhcmNoU3RyOiAnJyxcbiAgICAgICAgICAgICAgcmVwbGFjZVN0cjogJycsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5lcnJvciA9IFRyYW5zZm9ybWVyLnJlc2V0VmFsaWRhdGlvbkZpZWxkcyhyZXNldEVycm9ycyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSA0MDEpIHtcbiAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGRhdGEpO1xuICAgICAgICB9KVxuICAgIH0pXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVVcGRhdGVSZXF1ZXN0KHBhcmFtcykge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4gKFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEh0dHAucGF0Y2goYGFydGljbGVzLyR7cGFyYW1zLmlkfWAsIHRyYW5zZm9ybVJlcXVlc3QocGFyYW1zKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVyci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRFcnJvcnMgPSB7XG4gICAgICAgICAgICAgIGVycm9yczogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWFyY2hTdHI6ICcnLFxuICAgICAgICAgICAgICByZXBsYWNlU3RyOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gVHJhbnNmb3JtZXIucmVzZXRWYWxpZGF0aW9uRmllbGRzKHJlc2V0RXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgICAgZGF0YS5lcnJvciA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWplY3QoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZVJlbW92ZVJlcXVlc3QoaWQpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBIdHRwLmRlbGV0ZShgYXJ0aWNsZXMvJHtpZH1gKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5yZW1vdmUoaWQpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlTGlzdFJlcXVlc3Qoe3BhZ2VOdW1iZXIgPSAxLCB1cmwgPSAnL2FydGljbGVzJ30pIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBpZiAocGFnZU51bWJlciA+IDEpIHtcbiAgICAgIHVybCA9IHVybCArIGA/cGFnZT0ke3BhZ2VOdW1iZXJ9YFxuICAgIH1cblxuICAgIEh0dHAuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZUFjdGlvbnMubGlzdCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlRWRpdFJlcXVlc3QoaWQpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBIdHRwLmdldChgYXJ0aWNsZXMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlKVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZUZldGNoUmVxdWVzdChzbHVnKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgSHR0cC5nZXQoYGFydGljbGVzL3B1Ymxpc2hlZC8ke3NsdWd9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZUFjdGlvbnMuYWRkKHRyYW5zZm9ybVJlc3BvbnNlKHJlcy5kYXRhKSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9zZXJ2aWNlLmpzIiwiLyogPT09PT09PT09PT09XG4gKiBBY3Rpb25zIGZvciB0aGUgYXJ0aWNsZSBtb2R1bGVcbiAqID09PT09PT09PT09PVxuICpcbiAqIFRoZSBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiB0aGVcbiAqIGFydGljbGUgbW9kdWxlLlxuICovXG5cbmltcG9ydCB7XG4gIEFSVElDTEVfQURELFxuICBBUlRJQ0xFX1VQREFURSxcbiAgQVJUSUNMRV9SRU1PVkUsXG4gIEFSVElDTEVfTElTVCxcbn0gZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX0FERCxcbiAgICBwYXlsb2FkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJUSUNMRV9VUERBVEUsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUocGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFSVElDTEVfUkVNT1ZFLFxuICAgIHBheWxvYWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdChwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJUSUNMRV9MSVNULFxuICAgIHBheWxvYWRcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3N0b3JlL2FjdGlvbnMuanMiLCIvLyBsaWJzXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2FydGljbGUvQXJ0aWNsZSdcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IEFydGljbGVzIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlcydcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBjb25zdCB7ZGF0YSwgLi4ubWV0YX0gPSBzdGF0ZS5hcnRpY2xlc1xuICBcbiAgcmV0dXJuIHtcbiAgICBhcnRpY2xlczogZGF0YS5tYXAoKGFydGljbGUpID0+IG5ldyBBcnRpY2xlKGFydGljbGUpKSxcbiAgICBtZXRhOiBPYmplY3QuYXNzaWduKHt9LCBtZXRhKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcnRpY2xlcylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tbW9uL2FydGljbGVzL2xpc3RpbmcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJ1xuXG5jbGFzcyBBcnRpY2xlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdBcnRpY2xlcydcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhcnRpY2xlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXJBcnRpY2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEFydGljbGUga2V5PXtgYXJ0aWNsZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9Lz5cbiAgICB9KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8c2VjdGlvbiBpZD1cImNvbXBvbmVudHMtYXJ0aWNsZXNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmFydGljbGVzICYmIHRoaXMucmVuZGVyQXJ0aWNsZXMoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21tb24vYXJ0aWNsZXMvbGlzdGluZy9jb21wb25lbnRzL0FydGljbGVzLmpzIiwiLy8gaW1wb3J0IGxpYnNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBkaXNwbGF5TmFtZSA9ICdBcnRpY2xlQ29tcG9uZW50J1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBhcnRpY2xlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbi8vIGNvbnN0IHJlbmRlckF1dGhvciA9IChhcnRpY2xlKSA9PiB7XG4vLyAgIHJldHVybiBhcnRpY2xlLnVzZXIgJiYgYEJ5ICR7IGFydGljbGUudXNlci5uYW1lIH1gXG4vLyB9XG5cbmNvbnN0IHJlbmRlclB1Ymxpc2hlZEF0ID0gKGFydGljbGUpID0+IHtcbiAgcmV0dXJuIGFydGljbGUucHVibGlzaGVkQXQgJiYgYGF0ICR7YXJ0aWNsZS5wdWJsaXNoZWRBdC5mb3JtYXQoJ01NTU0gRCwgWVlZWScpfWBcbn1cblxuZnVuY3Rpb24gcmVuZGVyICh7IGFydGljbGUgfSkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTkgbWItNSBteC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnthcnRpY2xlLnRpdGxlfTwvaDQ+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPntyZW5kZXJQdWJsaXNoZWRBdChhcnRpY2xlKX08L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57IGFydGljbGUuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgPExpbmsgdG89e2BibG9nLyR7YXJ0aWNsZS5zbHVnfWB9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbn1cblxucmVuZGVyLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVcbnJlbmRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2NvbXBvbmVudHMvQXJ0aWNsZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hcnRpY2xlcy9saXN0aW5nL2luZGV4XCJcblxuLy8gaW1wb3J0IHNlcnZpY2VzXG5pbXBvcnQgeyBhcnRpY2xlTGlzdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vYXJ0aWNsZS9zZXJ2aWNlXCJcblxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiSG9tZVBhZ2VcIlxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcnRpY2xlTGlzdFJlcXVlc3QoeyB1cmw6ICcvYXJ0aWNsZXMvcHVibGlzaGVkJyB9KSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxBcnRpY2xlcy8+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL3dlYi9wYWdlcy9ibG9nL2xpc3QvUGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=