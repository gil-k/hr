'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: _this.props.videos,
      videoPlaying: _this.props.videos[0],
      query: 'coding for dummies',
      extraData: {},
      id: 'snSWukRJcQI'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleSearch(this.state.query);
    }
  }, {
    key: 'onVideoListClick',
    value: function onVideoListClick(videoObj) {
      this.setState({
        videoPlaying: videoObj
      });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(queryString) {
      var _this2 = this;

      var options = { query: queryString };
      var newOptions = { query: queryString, id: this.state.id };
      this.props.searchYT(options, function (videos) {
        _this2.setState({
          videos: videos.items,
          videoPlaying: videos.items[0],
          id: videos.items[0].id.videoId
        });
      });
      this.props.searchYTT(newOptions, function (videos) {
        _this2.setState({
          extraData: videos.statistics
        });
      });
    }
  }, {
    key: 'searchText',
    value: function searchText(input) {
      this.setState({
        query: input
      });
      this.handleSearch(this.state.query);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'nav',
          { className: 'navbar' },
          React.createElement(
            'div',
            { className: 'col-md-6 offset-md-3' },
            React.createElement(Search, { search: this.searchText.bind(this) })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-7' },
            React.createElement(VideoPlayer, { video: this.state.videoPlaying, data: this.state.extraData })
          ),
          React.createElement(
            'div',
            { className: 'col-md-5' },
            React.createElement(VideoList, { click: this.onVideoListClick.bind(this), videos: this.state.videos })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsInZpZGVvUGxheWluZyIsInF1ZXJ5IiwiZXh0cmFEYXRhIiwiaWQiLCJoYW5kbGVTZWFyY2giLCJ2aWRlb09iaiIsInNldFN0YXRlIiwicXVlcnlTdHJpbmciLCJvcHRpb25zIiwibmV3T3B0aW9ucyIsInNlYXJjaFlUIiwiaXRlbXMiLCJ2aWRlb0lkIiwic2VhcmNoWVRUIiwic3RhdGlzdGljcyIsImlucHV0Iiwic2VhcmNoVGV4dCIsImJpbmQiLCJvblZpZGVvTGlzdENsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxNQUFLRixLQUFMLENBQVdFLE1BRFI7QUFFWEMsb0JBQWMsTUFBS0gsS0FBTCxDQUFXRSxNQUFYLENBQWtCLENBQWxCLENBRkg7QUFHWEUsYUFBTyxvQkFISTtBQUlYQyxpQkFBVyxFQUpBO0FBS1hDLFVBQUk7QUFMTyxLQUFiO0FBRmlCO0FBU2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLQyxZQUFMLENBQWtCLEtBQUtOLEtBQUwsQ0FBV0csS0FBN0I7QUFFRDs7O3FDQUVnQkksUSxFQUFVO0FBQ3pCLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixzQkFBY0s7QUFERixPQUFkO0FBR0Q7OztpQ0FFWUUsVyxFQUFhO0FBQUE7O0FBQ3hCLFVBQUlDLFVBQVUsRUFBQ1AsT0FBT00sV0FBUixFQUFkO0FBQ0EsVUFBSUUsYUFBYSxFQUFDUixPQUFPTSxXQUFSLEVBQXFCSixJQUFJLEtBQUtMLEtBQUwsQ0FBV0ssRUFBcEMsRUFBakI7QUFDQSxXQUFLTixLQUFMLENBQVdhLFFBQVgsQ0FBb0JGLE9BQXBCLEVBQTZCLFVBQUNULE1BQUQsRUFBWTtBQUN2QyxlQUFLTyxRQUFMLENBQWM7QUFDWlAsa0JBQVFBLE9BQU9ZLEtBREg7QUFFWlgsd0JBQWNELE9BQU9ZLEtBQVAsQ0FBYSxDQUFiLENBRkY7QUFHWlIsY0FBSUosT0FBT1ksS0FBUCxDQUFhLENBQWIsRUFBZ0JSLEVBQWhCLENBQW1CUztBQUhYLFNBQWQ7QUFLRCxPQU5EO0FBT0EsV0FBS2YsS0FBTCxDQUFXZ0IsU0FBWCxDQUFxQkosVUFBckIsRUFBaUMsVUFBQ1YsTUFBRCxFQUFZO0FBQzNDLGVBQUtPLFFBQUwsQ0FBYztBQUNaSixxQkFBV0gsT0FBT2U7QUFETixTQUFkO0FBR0QsT0FKRDtBQUtEOzs7K0JBRVVDLEssRUFBTztBQUNoQixXQUFLVCxRQUFMLENBQWM7QUFDWkwsZUFBT2M7QUFESyxPQUFkO0FBR0EsV0FBS1gsWUFBTCxDQUFrQixLQUFLTixLQUFMLENBQVdHLEtBQTdCO0FBQ0Q7Ozs2QkFLUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFLGdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtlLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWhCO0FBREY7QUFERixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS25CLEtBQUwsQ0FBV0UsWUFBL0IsRUFBNkMsTUFBTSxLQUFLRixLQUFMLENBQVdJLFNBQTlEO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFNBQUQsSUFBVyxPQUFPLEtBQUtnQixnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbEIsRUFBb0QsUUFBUSxLQUFLbkIsS0FBTCxDQUFXQyxNQUF2RTtBQURGO0FBSkY7QUFORixPQURGO0FBaUJEOzs7O0VBcEVlb0IsTUFBTUMsUztBQXNFeEI7QUFDQTs7O0FBQ0FDLE9BQU96QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZGVvczogdGhpcy5wcm9wcy52aWRlb3MsXG4gICAgICB2aWRlb1BsYXlpbmc6IHRoaXMucHJvcHMudmlkZW9zWzBdLFxuICAgICAgcXVlcnk6ICdjb2RpbmcgZm9yIGR1bW1pZXMnLFxuICAgICAgZXh0cmFEYXRhOiB7fSxcbiAgICAgIGlkOiAnc25TV3VrUkpjUUknXG4gICAgfTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2godGhpcy5zdGF0ZS5xdWVyeSk7XG4gICAgXG4gIH1cbiAgXG4gIG9uVmlkZW9MaXN0Q2xpY2sodmlkZW9PYmopIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZGVvUGxheWluZzogdmlkZW9PYmpcbiAgICB9KTtcbiAgfVxuICBcbiAgaGFuZGxlU2VhcmNoKHF1ZXJ5U3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7cXVlcnk6IHF1ZXJ5U3RyaW5nfTtcbiAgICB2YXIgbmV3T3B0aW9ucyA9IHtxdWVyeTogcXVlcnlTdHJpbmcsIGlkOiB0aGlzLnN0YXRlLmlkfTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFlUKG9wdGlvbnMsICh2aWRlb3MpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aWRlb3M6IHZpZGVvcy5pdGVtcyxcbiAgICAgICAgdmlkZW9QbGF5aW5nOiB2aWRlb3MuaXRlbXNbMF0sXG4gICAgICAgIGlkOiB2aWRlb3MuaXRlbXNbMF0uaWQudmlkZW9JZFxuICAgICAgfSk7ICAgXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hZVFQobmV3T3B0aW9ucywgKHZpZGVvcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4dHJhRGF0YTogdmlkZW9zLnN0YXRpc3RpY3MsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc2VhcmNoVGV4dChpbnB1dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnk6IGlucHV0XG4gICAgfSk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2godGhpcy5zdGF0ZS5xdWVyeSk7XG4gIH1cbiAgICBcbiAgXG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U2VhcmNoIHNlYXJjaD17dGhpcy5zZWFyY2hUZXh0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvPXt0aGlzLnN0YXRlLnZpZGVvUGxheWluZ30gZGF0YT17dGhpcy5zdGF0ZS5leHRyYURhdGF9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8VmlkZW9MaXN0IGNsaWNrPXt0aGlzLm9uVmlkZW9MaXN0Q2xpY2suYmluZCh0aGlzKX0gdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==