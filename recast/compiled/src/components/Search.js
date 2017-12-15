"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { className: "form-control", type: "text" }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down", onClick: function onClick() {
          return props.search($('input').val());
        } },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2giLCIkIiwidmFsIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0UsbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFVO0FBQUEsaUJBQU9BLE1BQU1DLE1BQU4sQ0FBYUMsRUFBRSxPQUFGLEVBQVdDLEdBQVgsRUFBYixDQUFQO0FBQUEsU0FBakQ7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBRkYsR0FEVztBQUFBLENBQWI7O0FBU0E7QUFDQTtBQUNBQyxPQUFPTCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPSB7KCkgPT4gKHByb3BzLnNlYXJjaCgkKCdpbnB1dCcpLnZhbCgpKSl9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PiBcbik7XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19