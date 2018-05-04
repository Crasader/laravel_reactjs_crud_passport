webpackJsonp([5],{

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Article = __webpack_require__(337);

var _Article2 = _interopRequireDefault(_Article);

var _Page = __webpack_require__(496);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // import libs


// import components


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

/***/ 496:
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

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _service = __webpack_require__(338);

var _ArticleRow = __webpack_require__(497);

var _ArticleRow2 = _interopRequireDefault(_ArticleRow);

var _Pagination = __webpack_require__(498);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import libs


// import components


var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.togglePublish = _this.togglePublish.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.pageChange = _this.pageChange.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;


      dispatch((0, _service.articleListRequest)({}));
    }
  }, {
    key: 'pageChange',
    value: function pageChange(pageNumber) {
      this.props.dispatch((0, _service.articleListRequest)({ pageNumber: pageNumber }));
    }
  }, {
    key: 'togglePublish',
    value: function togglePublish(id) {
      var article = this.props.articles.find(function (article) {
        return article.id === id;
      });

      if (!article) return;

      article.published = !article.published;
      if (article.published) {
        article.publishedAt = (0, _moment2.default)();
      } else {
        article.publishedAt = null;
      }

      this.props.dispatch((0, _service.articleUpdateRequest)(article.toJson()));
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(id) {
      this.props.dispatch((0, _service.articleRemoveRequest)(id));
    }
  }, {
    key: 'renderArticles',
    value: function renderArticles() {
      var _this2 = this;

      return this.props.articles.map(function (article, index) {
        return _react2.default.createElement(_ArticleRow2.default, { key: index,
          article: article,
          index: index,
          togglePublish: _this2.togglePublish,
          handleRemove: _this2.handleRemove });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: 'col-sm-9 ml-sm-auto col-md-10 pt-3', role: 'main' },
        _react2.default.createElement(
          'h1',
          null,
          'Articles'
        ),
        _react2.default.createElement(
          'table',
          { className: 'table table-responsive table-striped' },
          _react2.default.createElement(
            'thead',
            { className: 'thead-inverse' },
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '#'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Title'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Description'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Created At'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Updated At'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Published At'
              ),
              _react2.default.createElement(
                'th',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/articles/create', className: 'btn btn-success' },
                  'Add'
                )
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.renderArticles()
          )
        ),
        _react2.default.createElement(_Pagination2.default, { meta: this.props.meta, onChange: this.pageChange })
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.displayName = 'ArticlesPage';
Page.propTypes = {
  meta: _propTypes2.default.object.isRequired,
  articles: _propTypes2.default.array.isRequired,
  dispatch: _propTypes2.default.func.isRequired
};
exports.default = Page;

/***/ }),

/***/ 497:
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

var displayName = 'ArticleRow';
var propTypes = {
  index: _propTypes2.default.number.isRequired,
  article: _propTypes2.default.object.isRequired,
  togglePublish: _propTypes2.default.func.isRequired,
  handleRemove: _propTypes2.default.func.isRequired
};

var ArticleRow = function ArticleRow(_ref) {
  var index = _ref.index,
      article = _ref.article,
      togglePublish = _ref.togglePublish,
      handleRemove = _ref.handleRemove;

  return _react2.default.createElement(
    'tr',
    { key: index },
    _react2.default.createElement(
      'th',
      { scope: 'row' },
      index + 1
    ),
    _react2.default.createElement(
      'td',
      null,
      article.title
    ),
    _react2.default.createElement(
      'td',
      null,
      article.description
    ),
    _react2.default.createElement(
      'td',
      null,
      article.createdAt && article.createdAt.format('MMMM, DD YYYY')
    ),
    _react2.default.createElement(
      'td',
      null,
      article.updatedAt && article.updatedAt.format('MMMM, DD YYYY')
    ),
    _react2.default.createElement(
      'td',
      null,
      article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { className: 'btn-group', role: 'group', 'aria-label': 'Actions' },
        article.published ? _react2.default.createElement(
          'button',
          { className: 'btn btn-warning', onClick: function onClick() {
              return togglePublish(article.id);
            } },
          'Un Published'
        ) : _react2.default.createElement(
          'button',
          { className: 'btn btn-success', onClick: function onClick() {
              return togglePublish(article.id);
            } },
          'Publish'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'btn btn-primary', to: 'articles/' + article.id + '/edit' },
          'Edit'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-danger', onClick: function onClick() {
              return handleRemove(article.id);
            } },
          'Delete'
        )
      )
    )
  );
};

ArticleRow.displayName = displayName;
ArticleRow.propTypes = propTypes;

exports.default = ArticleRow;

/***/ }),

/***/ 498:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.state = {
      //
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'renderLinks',
    value: function renderLinks() {
      var _this2 = this;

      var meta = this.props.meta;

      var range = [].concat(_toConsumableArray(Array(meta.lastPage).keys()));

      return range.map(function (n) {
        var className = meta.currentPage === n + 1 ? 'primary' : 'light';

        return _react2.default.createElement(
          'button',
          { key: n,
            type: 'button',
            className: 'btn btn-' + className,
            onClick: function onClick() {
              return _this2.props.onChange(n + 1);
            } },
          n + 1
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'btn-toolbar', role: 'toolbar', 'aria-label': 'Toolbar with button groups' },
        _react2.default.createElement(
          'div',
          { className: 'btn-group mr-2', role: 'group', 'aria-label': 'First group' },
          this.renderLinks()
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  meta: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired
};
exports.default = Pagination;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9wYWdlcy9saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2xpc3QvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9wYWdlcy9saXN0L2NvbXBvbmVudHMvQXJ0aWNsZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9wYWdlcy9saXN0L2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFydGljbGVzIiwiZGF0YSIsIm1ldGEiLCJtYXAiLCJhcnRpY2xlIiwiQXJ0aWNsZSIsIk9iamVjdCIsImFzc2lnbiIsIlBhZ2UiLCJwcm9wcyIsImluaXRpYWxpemUiLCJzbHVnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJwdWJsaXNoZWQiLCJwdWJsaXNoZWRBdCIsInVzZXIiLCJVc2VyIiwiTW9kZWwiLCJhcnRpY2xlQWRkUmVxdWVzdCIsImFydGljbGVVcGRhdGVSZXF1ZXN0IiwiYXJ0aWNsZVJlbW92ZVJlcXVlc3QiLCJhcnRpY2xlTGlzdFJlcXVlc3QiLCJhcnRpY2xlRWRpdFJlcXVlc3QiLCJhcnRpY2xlRmV0Y2hSZXF1ZXN0IiwiYXJ0aWNsZUFjdGlvbnMiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwicGFybXMiLCJUcmFuc2Zvcm1lciIsInNlbmQiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInBhcmFtcyIsImZldGNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJIdHRwIiwicG9zdCIsInRoZW4iLCJkaXNwYXRjaCIsImFkZCIsInJlcyIsImNhdGNoIiwiZXJyIiwic3RhdHVzQ29kZSIsInJlc3BvbnNlIiwic3RhdHVzIiwiZXJyb3IiLCJyZXNldEVycm9ycyIsImVycm9ycyIsInJlcGxhY2UiLCJzZWFyY2hTdHIiLCJyZXBsYWNlU3RyIiwicmVzZXRWYWxpZGF0aW9uRmllbGRzIiwibWVzc2FnZSIsInBhdGNoIiwiaWQiLCJkZWxldGUiLCJyZW1vdmUiLCJjb25zb2xlIiwicGFnZU51bWJlciIsInVybCIsImdldCIsImxpc3QiLCJ1cGRhdGUiLCJwYXlsb2FkIiwidHlwZSIsIkFSVElDTEVfQUREIiwiQVJUSUNMRV9VUERBVEUiLCJBUlRJQ0xFX1JFTU9WRSIsIkFSVElDTEVfTElTVCIsInRvZ2dsZVB1Ymxpc2giLCJiaW5kIiwiaGFuZGxlUmVtb3ZlIiwicGFnZUNoYW5nZSIsImZpbmQiLCJ0b0pzb24iLCJpbmRleCIsInJlbmRlckFydGljbGVzIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiQXJ0aWNsZVJvdyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInVwZGF0ZWRBdCIsIlBhZ2luYXRpb24iLCJyYW5nZSIsIkFycmF5IiwibGFzdFBhZ2UiLCJrZXlzIiwiY2xhc3NOYW1lIiwiY3VycmVudFBhZ2UiLCJuIiwib25DaGFuZ2UiLCJyZW5kZXJMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQTs7Ozs7OzZOQUxBOzs7QUFJQTs7O0FBR0EsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFT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LFVBQ0pHLElBREksR0FDSyxLQUFLTyxLQURWLENBQ0pQLElBREk7O0FBRVosVUFBTTRGLHFDQUFZQyxNQUFNN0YsS0FBSzhGLFFBQVgsRUFBcUJDLElBQXJCLEVBQVosRUFBTjs7QUFFQSxhQUFPSCxNQUFNM0YsR0FBTixDQUFVLGFBQUs7QUFDcEIsWUFBTStGLFlBQVloRyxLQUFLaUcsV0FBTCxLQUFzQkMsSUFBRSxDQUF4QixHQUE2QixTQUE3QixHQUF5QyxPQUEzRDs7QUFFQSxlQUFPO0FBQUE7QUFBQSxZQUFRLEtBQUtBLENBQWI7QUFDUSxrQkFBSyxRQURiO0FBRVEsb0NBQXNCRixTQUY5QjtBQUdRLHFCQUFTO0FBQUEscUJBQU0sT0FBS3pGLEtBQUwsQ0FBVzRGLFFBQVgsQ0FBb0JELElBQUUsQ0FBdEIsQ0FBTjtBQUFBLGFBSGpCO0FBR2tEQSxjQUFFO0FBSHBELFNBQVA7QUFJRCxPQVBNLENBQVA7QUFRRDs7OzZCQUVRO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWYsRUFBNkIsTUFBSyxTQUFsQyxFQUE0QyxjQUFXLDRCQUF2RDtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsTUFBSyxPQUFyQyxFQUE2QyxjQUFXLGFBQXhEO0FBQ0csZUFBS0UsV0FBTDtBQURIO0FBREssT0FBUDtBQUtEOzs7O0VBbkNzQnRCLGdCOztBQUFuQmEsVSxDQUNHWixXLEdBQWMsWTtBQURqQlksVSxDQUVHWCxTLEdBQVk7QUFDakJoRixRQUFNaUYsb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRE47QUFFakJnQixZQUFVbEIsb0JBQVVJLElBQVYsQ0FBZUY7QUFGUixDO2tCQW9DTlEsVSIsImZpbGUiOiJqcy9jaHVua3MvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBsaWJzXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9BcnRpY2xlJ1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9QYWdlJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHtkYXRhLCAuLi5tZXRhfSA9IHN0YXRlLmFydGljbGVzXG4gIFxuICByZXR1cm4ge1xuICAgIGFydGljbGVzOiBkYXRhLm1hcCgoYXJ0aWNsZSkgPT4gbmV3IEFydGljbGUoYXJ0aWNsZSkpLFxuICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9wYWdlcy9saXN0L2luZGV4LmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdXRpbHMvTW9kZWwnXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXIvVXNlcidcblxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaW5pdGlhbGl6ZShwcm9wcylcbiAgfVxuXG4gIGluaXRpYWxpemUocHJvcHMpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKHByb3BzKVxuXG4gICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZyB8fCAnJ1xuICAgIHRoaXMudGl0bGUgPSBwcm9wcy50aXRsZSB8fCAnJ1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbiB8fCAnJ1xuICAgIHRoaXMuY29udGVudCA9IHByb3BzLmNvbnRlbnQgfHwgJydcbiAgICB0aGlzLnB1Ymxpc2hlZCA9IHByb3BzLnB1Ymxpc2hlZCB8fCBmYWxzZVxuICAgIHRoaXMucHVibGlzaGVkQXQgPSBwcm9wcy5wdWJsaXNoZWRBdCA/IG1vbWVudChwcm9wcy5wdWJsaXNoZWRBdCkgOiBudWxsXG5cbiAgICAvLyByZWxhdGUgdXNlciBtb2RlbFxuICAgIHRoaXMudXNlciA9IHByb3BzLnVzZXIgPyBuZXcgVXNlcihwcm9wcy51c2VyKSA6IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vZHVsZXMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwiaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vdXRpbHMvSHR0cCdcbmltcG9ydCBUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91dGlscy9UcmFuc2Zvcm1lcidcbmltcG9ydCAqIGFzIGFydGljbGVBY3Rpb25zIGZyb20gJy4vc3RvcmUvYWN0aW9ucydcblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChwYXJtcykge1xuICByZXR1cm4gVHJhbnNmb3JtZXIuc2VuZChwYXJtcylcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UocGFyYW1zKSB7XG4gIHJldHVybiBUcmFuc2Zvcm1lci5mZXRjaChwYXJhbXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlQWRkUmVxdWVzdChwYXJhbXMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IChcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIdHRwLnBvc3QoJy9hcnRpY2xlcycsIHRyYW5zZm9ybVJlcXVlc3QocGFyYW1zKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVyci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQyMikge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRFcnJvcnMgPSB7XG4gICAgICAgICAgICAgIGVycm9yczogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWFyY2hTdHI6ICcnLFxuICAgICAgICAgICAgICByZXBsYWNlU3RyOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gVHJhbnNmb3JtZXIucmVzZXRWYWxpZGF0aW9uRmllbGRzKHJlc2V0RXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgICAgZGF0YS5lcnJvciA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWplY3QoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZVVwZGF0ZVJlcXVlc3QocGFyYW1zKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiAoXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSHR0cC5wYXRjaChgYXJ0aWNsZXMvJHtwYXJhbXMuaWR9YCwgdHJhbnNmb3JtUmVxdWVzdChwYXJhbXMpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gZXJyLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDIyKSB7XG4gICAgICAgICAgICBjb25zdCByZXNldEVycm9ycyA9IHtcbiAgICAgICAgICAgICAgZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgcmVwbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlYXJjaFN0cjogJycsXG4gICAgICAgICAgICAgIHJlcGxhY2VTdHI6ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBUcmFuc2Zvcm1lci5yZXNldFZhbGlkYXRpb25GaWVsZHMocmVzZXRFcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICBkYXRhLmVycm9yID0gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlUmVtb3ZlUmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZGVsZXRlKGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLnJlbW92ZShpZCkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVMaXN0UmVxdWVzdCh7cGFnZU51bWJlciA9IDEsIHVybCA9ICcvYXJ0aWNsZXMnfSkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGlmIChwYWdlTnVtYmVyID4gMSkge1xuICAgICAgdXJsID0gdXJsICsgYD9wYWdlPSR7cGFnZU51bWJlcn1gXG4gICAgfVxuXG4gICAgSHR0cC5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5saXN0KHRyYW5zZm9ybVJlc3BvbnNlKHJlcy5kYXRhKSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGVFZGl0UmVxdWVzdChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIEh0dHAuZ2V0KGBhcnRpY2xlcy8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVBY3Rpb25zLmFkZCh0cmFuc2Zvcm1SZXNwb25zZShyZXMuZGF0YSkpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSBlcnJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlRmV0Y2hSZXF1ZXN0KHNsdWcpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBIdHRwLmdldChgYXJ0aWNsZXMvcHVibGlzaGVkLyR7c2x1Z31gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlQWN0aW9ucy5hZGQodHJhbnNmb3JtUmVzcG9uc2UocmVzLmRhdGEpKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlKVxuICAgICAgfSlcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3NlcnZpY2UuanMiLCIvKiA9PT09PT09PT09PT1cbiAqIEFjdGlvbnMgZm9yIHRoZSBhcnRpY2xlIG1vZHVsZVxuICogPT09PT09PT09PT09XG4gKlxuICogVGhlIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIHRoZVxuICogYXJ0aWNsZSBtb2R1bGUuXG4gKi9cblxuaW1wb3J0IHtcbiAgQVJUSUNMRV9BREQsXG4gIEFSVElDTEVfVVBEQVRFLFxuICBBUlRJQ0xFX1JFTU9WRSxcbiAgQVJUSUNMRV9MSVNULFxufSBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFSVElDTEVfQURELFxuICAgIHBheWxvYWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX1VQREFURSxcbiAgICBwYXlsb2FkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJUSUNMRV9SRU1PVkUsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBUlRJQ0xFX0xJU1QsXG4gICAgcGF5bG9hZFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvc3RvcmUvYWN0aW9ucy5qcyIsIi8vIGltcG9ydCBsaWJzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGFydGljbGVMaXN0UmVxdWVzdCwgYXJ0aWNsZVVwZGF0ZVJlcXVlc3QsIGFydGljbGVSZW1vdmVSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZSdcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBBcnRpY2xlUm93IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlUm93J1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1BhZ2luYXRpb24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdBcnRpY2xlc1BhZ2UnXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFydGljbGVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBcbiAgICB0aGlzLnRvZ2dsZVB1Ymxpc2ggPSB0aGlzLnRvZ2dsZVB1Ymxpc2guYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUmVtb3ZlID0gdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMucGFnZUNoYW5nZSA9IHRoaXMucGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzXG4gIFxuICAgIGRpc3BhdGNoKGFydGljbGVMaXN0UmVxdWVzdCh7fSkpXG4gIH1cbiAgXG4gIHBhZ2VDaGFuZ2UocGFnZU51bWJlcikge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXJ0aWNsZUxpc3RSZXF1ZXN0KHsgcGFnZU51bWJlciB9KSlcbiAgfVxuICBcbiAgdG9nZ2xlUHVibGlzaChpZCkge1xuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLnByb3BzLmFydGljbGVzLmZpbmQoYXJ0aWNsZSA9PiAoYXJ0aWNsZS5pZCA9PT0gaWQpKVxuICAgIFxuICAgIGlmICghYXJ0aWNsZSlcbiAgICAgIHJldHVyblxuICBcbiAgICBhcnRpY2xlLnB1Ymxpc2hlZCA9ICFhcnRpY2xlLnB1Ymxpc2hlZFxuICAgIGlmIChhcnRpY2xlLnB1Ymxpc2hlZCkge1xuICAgICAgYXJ0aWNsZS5wdWJsaXNoZWRBdCA9IG1vbWVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFydGljbGUucHVibGlzaGVkQXQgPSBudWxsXG4gICAgfVxuICAgIFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXJ0aWNsZVVwZGF0ZVJlcXVlc3QoYXJ0aWNsZS50b0pzb24oKSkpXG4gIH1cbiAgXG4gIGhhbmRsZVJlbW92ZShpZCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXJ0aWNsZVJlbW92ZVJlcXVlc3QoaWQpKVxuICB9XG4gIFxuICByZW5kZXJBcnRpY2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEFydGljbGVSb3cga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVQdWJsaXNoPXt0aGlzLnRvZ2dsZVB1Ymxpc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZX0vPlxuICAgIH0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPG1haW4gY2xhc3NOYW1lPVwiY29sLXNtLTkgbWwtc20tYXV0byBjb2wtbWQtMTAgcHQtM1wiIHJvbGU9XCJtYWluXCI+XG4gICAgICA8aDE+QXJ0aWNsZXM8L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtaW52ZXJzZVwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPiM8L3RoPlxuICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICA8dGg+Q3JlYXRlZCBBdDwvdGg+XG4gICAgICAgICAgPHRoPlVwZGF0ZWQgQXQ8L3RoPlxuICAgICAgICAgIDx0aD5QdWJsaXNoZWQgQXQ8L3RoPlxuICAgICAgICAgIDx0aD48TGluayB0bz0nL2FydGljbGVzL2NyZWF0ZScgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkPC9MaW5rPjwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgeyB0aGlzLnJlbmRlckFydGljbGVzKCkgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxQYWdpbmF0aW9uIG1ldGE9e3RoaXMucHJvcHMubWV0YX0gb25DaGFuZ2U9e3RoaXMucGFnZUNoYW5nZX0vPlxuICAgICAgPC9tYWluPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbW9kdWxlcy9hcnRpY2xlL3BhZ2VzL2xpc3QvUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBkaXNwbGF5TmFtZSA9ICdBcnRpY2xlUm93J1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBhcnRpY2xlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRvZ2dsZVB1Ymxpc2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuY29uc3QgQXJ0aWNsZVJvdyA9ICh7IGluZGV4LCBhcnRpY2xlLCB0b2dnbGVQdWJsaXNoLCBoYW5kbGVSZW1vdmUgfSkgPT4ge1xuICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXgrMX08L3RoPlxuICAgIDx0ZD57YXJ0aWNsZS50aXRsZX08L3RkPlxuICAgIDx0ZD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3RkPlxuICAgIDx0ZD57YXJ0aWNsZS5jcmVhdGVkQXQgJiYgYXJ0aWNsZS5jcmVhdGVkQXQuZm9ybWF0KCdNTU1NLCBERCBZWVlZJyl9PC90ZD5cbiAgICA8dGQ+e2FydGljbGUudXBkYXRlZEF0ICYmIGFydGljbGUudXBkYXRlZEF0LmZvcm1hdCgnTU1NTSwgREQgWVlZWScpfTwvdGQ+XG4gICAgPHRkPnthcnRpY2xlLnB1Ymxpc2hlZEF0ICYmIGFydGljbGUucHVibGlzaGVkQXQuZm9ybWF0KCdNTU1NLCBERCBZWVlZJyl9PC90ZD5cbiAgICA8dGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJBY3Rpb25zXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBhcnRpY2xlLnB1Ymxpc2hlZFxuICAgICAgICAgID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQdWJsaXNoKGFydGljbGUuaWQpfT5VbiBQdWJsaXNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlUHVibGlzaChhcnRpY2xlLmlkKX0+UHVibGlzaDwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPXtgYXJ0aWNsZXMvJHthcnRpY2xlLmlkfS9lZGl0YH0+RWRpdDwvTGluaz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShhcnRpY2xlLmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICA8L3RyPilcbn1cblxuQXJ0aWNsZVJvdy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lXG5BcnRpY2xlUm93LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUm93XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvcGFnZXMvbGlzdC9jb21wb25lbnRzL0FydGljbGVSb3cuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUGFnaW5hdGlvbidcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXJMaW5rcygpIHtcbiAgICBjb25zdCB7IG1ldGEgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCByYW5nZSA9IFsuLi5BcnJheShtZXRhLmxhc3RQYWdlKS5rZXlzKCldXG4gICAgXG4gICAgcmV0dXJuIHJhbmdlLm1hcChuID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG1ldGEuY3VycmVudFBhZ2UgPT09IChuKzEpID8gJ3ByaW1hcnknIDogJ2xpZ2h0J1xuICAgICAgXG4gICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e259XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DaGFuZ2UobisxKX0+e24rMX08L2J1dHRvbj5cbiAgICB9KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIiByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJUb29sYmFyIHdpdGggYnV0dG9uIGdyb3Vwc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGaXJzdCBncm91cFwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJMaW5rcygpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb2R1bGVzL2FydGljbGUvcGFnZXMvbGlzdC9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9