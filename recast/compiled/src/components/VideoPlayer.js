"use strict";

var VideoPlayer = function VideoPlayer(props) {
  return React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/" + props.video.id.videoId + "?autoplay=1", allowFullScreen: true })
    ),
    React.createElement(
      "div",
      { className: "video-player-details" },
      React.createElement(
        "h3",
        null,
        props.video.snippet.title
      ),
      React.createElement(
        "div",
        null,
        props.video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;

//<h4>{props.data.statistics.dislikeCount}</h4>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwidmlkZW8iLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUNBQWY7QUFDRSxzQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyx3Q0FBc0NBLE1BQU1DLEtBQU4sQ0FBWUMsRUFBWixDQUFlQyxPQUFyRCxnQkFBMUMsRUFBcUgscUJBQXJIO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBS0gsY0FBTUMsS0FBTixDQUFZRyxPQUFaLENBQW9CQztBQUF6QixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1MLGNBQU1DLEtBQU4sQ0FBWUcsT0FBWixDQUFvQkU7QUFBMUI7QUFGRjtBQUpGLEdBRGdCO0FBQUEsQ0FBbEI7O0FBWUE7QUFDQTtBQUNBUCxZQUFZUSxTQUFaLEdBQXdCO0FBQ3RCTixTQUFPTyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9iLFdBQVAsR0FBcUJBLFdBQXJCOztBQUVBIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Byb3BzLnZpZGVvLmlkLnZpZGVvSWR9P2F1dG9wbGF5PTFgfSBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XG4gICAgPC9kaXY+ICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllci1kZXRhaWxzXCI+XG4gICAgICA8aDM+e3Byb3BzLnZpZGVvLnNuaXBwZXQudGl0bGV9PC9oMz5cbiAgICAgIDxkaXY+e3Byb3BzLnZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvUGxheWVyID0gVmlkZW9QbGF5ZXI7XG5cbi8vPGg0Pntwcm9wcy5kYXRhLnN0YXRpc3RpY3MuZGlzbGlrZUNvdW50fTwvaDQ+Il19