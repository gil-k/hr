"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.search(this.state.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        React.createElement("input", { className: "form-control", type: "text", onChange: this.handleChange }),
        React.createElement(
          "button",
          { className: "btn hidden-sm-down", onClick: this.handleSubmit },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
        )
      );
    }
  }]);

  return Search;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4dHJhLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7O0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFQaUI7QUFRbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDWkwsZUFBT0ksTUFBTUUsTUFBTixDQUFhTjtBQURSLE9BQWQ7QUFHRDs7O2lDQUVZSSxLLEVBQU87QUFDbEJBLFlBQU1HLGNBQU47QUFDQSxXQUFLVCxLQUFMLENBQVdVLE1BQVgsQ0FBa0IsS0FBS1QsS0FBTCxDQUFXQyxLQUE3QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRSx1Q0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssTUFBckMsRUFBNEMsVUFBVSxLQUFLQyxZQUEzRCxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsV0FBVSxvQkFBbEIsRUFBdUMsU0FBVSxLQUFLRSxZQUF0RDtBQUNFLHdDQUFNLFdBQVUsNEJBQWhCO0FBREY7QUFGRixPQURGO0FBUUQ7Ozs7RUEvQmtCTSxNQUFNQyxTOztBQWtDM0I7QUFDQTs7O0FBQ0FDLE9BQU9kLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6ImV4dHJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gICAgXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cbiAgXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2godGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9IHt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+IFxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=