"use strict";

var VideoListEntry = function VideoListEntry(props) {
  //console.log('----------->', props.click);
  //$('.video-list-entry-title').onClick(props.click(props.video));
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { onClick: function onClick() {
            return props.click(props.video);
          }, className: "video-list-entry-title" },
        props.video.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        props.video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwidmlkZW8iLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJjbGljayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUI7QUFDQTtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0EsTUFBTUMsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxVQUFwQixDQUErQkMsT0FBL0IsQ0FBdUNDLEdBQTFFLEVBQStFLEtBQUksRUFBbkY7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssU0FBUztBQUFBLG1CQUFNTCxNQUFNTSxLQUFOLENBQVlOLE1BQU1DLEtBQWxCLENBQU47QUFBQSxXQUFkLEVBQThDLFdBQVUsd0JBQXhEO0FBQWtGRCxjQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JLO0FBQXRHLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQTBDUCxjQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JNO0FBQTlEO0FBRkY7QUFKRixHQURGO0FBV0QsQ0FkRDs7QUFnQkE7QUFDQTtBQUNBVCxlQUFlVSxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9mLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvTGlzdEVudHJ5ID0gKHByb3BzKSA9PiB7XG4gIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tPicsIHByb3BzLmNsaWNrKTtcbiAgLy8kKCcudmlkZW8tbGlzdC1lbnRyeS10aXRsZScpLm9uQ2xpY2socHJvcHMuY2xpY2socHJvcHMudmlkZW8pKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9e3Byb3BzLnZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuY2xpY2socHJvcHMudmlkZW8pfSBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LXRpdGxlXCI+e3Byb3BzLnZpZGVvLnNuaXBwZXQudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvTGlzdEVudHJ5ID0gVmlkZW9MaXN0RW50cnk7XG4iXX0=