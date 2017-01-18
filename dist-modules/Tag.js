'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemTypes = { TAG: 'tag' };

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this2 = _this,
          props = _this2.props;

      var label = props.tag[props.labelField];
      var readOnly = props.readOnly;

      var CustomRemoveComponent = props.removeComponent;
      var RemoveComponent = _react2.default.createClass({
        displayName: 'RemoveComponent',
        render: function render() {
          if (readOnly) {
            return _react2.default.createElement('span', null);
          }
          if (CustomRemoveComponent) {
            return _react2.default.createElement(CustomRemoveComponent, this.props);
          }
          return _react2.default.createElement(
            'a',
            this.props,
            String.fromCharCode(215)
          );
        }
      });
      var tagComponent = _react2.default.createElement(
        'span',
        { style: { opacity: 1 }, className: props.classNames.tag },
        label,
        _react2.default.createElement(RemoveComponent, { className: props.classNames.remove, onClick: props.onDelete })
      );
      return tagComponent;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tag;
}(_react.Component);

Tag.propTypes = {
  labelField: _react2.default.PropTypes.string,
  onDelete: _react2.default.PropTypes.func.isRequired,
  tag: _react2.default.PropTypes.object.isRequired,
  moveTag: _react2.default.PropTypes.func,
  removeComponent: _react2.default.PropTypes.func,
  classNames: _react2.default.PropTypes.object,
  readOnly: _react2.default.PropTypes.bool,
  connectDropTarget: _react2.default.PropTypes.func.isRequired
};
Tag.defaultProps = {
  labelField: 'text',
  readOnly: false
};
exports.default = Tag;