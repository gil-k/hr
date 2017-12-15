'use strict';

var searchYouTube = function searchYouTube(options, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: options.query,
      type: 'video',
      maxResults: 10,
      videoEmbeddable: 'true'
    },
    success: function success(data) {
      console.log(data);
      callback(data);
    },
    error: function (_error) {
      function error(_x) {
        return _error.apply(this, arguments);
      }

      error.toString = function () {
        return _error.toString();
      };

      return error;
    }(function (data) {
      callback(error);
    })
  });
};
var searchYouTubeTwo = function searchYouTubeTwo(newOptions, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {
      part: 'statistics',
      id: newOptions.id,
      key: window.YOUTUBE_API_KEY,
      q: newOptions.query,
      type: 'video',
      maxResults: 10,
      videoEmbeddable: 'true'
    },
    success: function success(data) {
      console.log(data);
      callback(data);
    },
    error: function error(data) {
      console.log('FAIL');
    }
  });
};
window.searchYouTube = searchYouTube;
window.searchYouTubeTwo = searchYouTubeTwo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwib3B0aW9ucyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInBhcnQiLCJrZXkiLCJ3aW5kb3ciLCJZT1VUVUJFX0FQSV9LRVkiLCJxIiwicXVlcnkiLCJtYXhSZXN1bHRzIiwidmlkZW9FbWJlZGRhYmxlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNlYXJjaFlvdVR1YmVUd28iLCJuZXdPcHRpb25zIiwiaWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDekNDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxTQUFLLDhDQURBO0FBRUxDLFVBQU0sS0FGRDtBQUdMQyxVQUFNO0FBQ0pDLFlBQU0sU0FERjtBQUVKQyxXQUFLQyxPQUFPQyxlQUZSO0FBR0pDLFNBQUdYLFFBQVFZLEtBSFA7QUFJSlAsWUFBTSxPQUpGO0FBS0pRLGtCQUFZLEVBTFI7QUFNSkMsdUJBQWlCO0FBTmIsS0FIRDtBQVdMQyxhQUFTLGlCQUFTVCxJQUFULEVBQWU7QUFDdEJVLGNBQVFDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBTCxlQUFTSyxJQUFUO0FBQ0QsS0FkSTtBQWVMWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxNQUFPLFVBQVNaLElBQVQsRUFBZTtBQUNwQkwsZUFBU2lCLEtBQVQ7QUFDRCxLQUZEO0FBZkssR0FBUDtBQW1CRCxDQXBCRDtBQXFCQSxJQUFJQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxVQUFELEVBQWFuQixRQUFiLEVBQTBCO0FBQy9DQyxJQUFFQyxJQUFGLENBQU87QUFDTEMsU0FBSyw4Q0FEQTtBQUVMQyxVQUFNLEtBRkQ7QUFHTEMsVUFBTTtBQUNKQyxZQUFNLFlBREY7QUFFSmMsVUFBSUQsV0FBV0MsRUFGWDtBQUdKYixXQUFLQyxPQUFPQyxlQUhSO0FBSUpDLFNBQUdTLFdBQVdSLEtBSlY7QUFLSlAsWUFBTSxPQUxGO0FBTUpRLGtCQUFZLEVBTlI7QUFPSkMsdUJBQWlCO0FBUGIsS0FIRDtBQVlMQyxhQUFTLGlCQUFTVCxJQUFULEVBQWU7QUFDdEJVLGNBQVFDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBTCxlQUFTSyxJQUFUO0FBQ0QsS0FmSTtBQWdCTFksV0FBTyxlQUFTWixJQUFULEVBQWU7QUFDcEJVLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFsQkksR0FBUDtBQW9CRCxDQXJCRDtBQXNCQVIsT0FBT1YsYUFBUCxHQUF1QkEsYUFBdkI7QUFDQVUsT0FBT1UsZ0JBQVAsR0FBMEJBLGdCQUExQiIsImZpbGUiOiJzZWFyY2hZb3VUdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaFlvdVR1YmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgJC5hamF4KHtcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCcsXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgZGF0YToge1xuICAgICAgcGFydDogJ3NuaXBwZXQnLFxuICAgICAga2V5OiB3aW5kb3cuWU9VVFVCRV9BUElfS0VZLFxuICAgICAgcTogb3B0aW9ucy5xdWVyeSxcbiAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICBtYXhSZXN1bHRzOiAxMCxcbiAgICAgIHZpZGVvRW1iZWRkYWJsZTogJ3RydWUnLFxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICB9KTtcbn07XG52YXIgc2VhcmNoWW91VHViZVR3byA9IChuZXdPcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBkYXRhOiB7XG4gICAgICBwYXJ0OiAnc3RhdGlzdGljcycsXG4gICAgICBpZDogbmV3T3B0aW9ucy5pZCxcbiAgICAgIGtleTogd2luZG93LllPVVRVQkVfQVBJX0tFWSxcbiAgICAgIHE6IG5ld09wdGlvbnMucXVlcnksXG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgbWF4UmVzdWx0czogMTAsXG4gICAgICB2aWRlb0VtYmVkZGFibGU6ICd0cnVlJyxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0ZBSUwnKTtcbiAgICB9XG4gIH0pO1xufTtcbndpbmRvdy5zZWFyY2hZb3VUdWJlID0gc2VhcmNoWW91VHViZTtcbndpbmRvdy5zZWFyY2hZb3VUdWJlVHdvID0gc2VhcmNoWW91VHViZVR3bztcbiJdfQ==