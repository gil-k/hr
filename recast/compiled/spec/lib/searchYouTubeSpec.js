'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var getURLSearchParams = function getURLSearchParams(url) {
  return url.split('?')[1].split('&').reduce(function (map, params) {
    var _params$split = params.split('='),
        _params$split2 = _slicedToArray(_params$split, 2),
        key = _params$split2[0],
        value = _params$split2[1];

    map[key] = value;
    return map;
  }, {});
};

var hasSameShape = function hasSameShape(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }

  for (var key in objectOne) {
    if (!key in objectTwo) {
      return false;
    }

    if (_typeof(objectOne[key]) !== _typeof(objectTwo[key])) {
      return false;
    }

    if (Object.prototype.toString.call(objectOne[key]) === '[object Object]') {
      return hasSameShape(objectOne[key], objectTwo[key]);
    }
  }

  return true;
};

describe('searchYouTube', function () {
  var requests, xhr;

  // Sinon temporarily hijacks all outgoing AJAX requests with `useFakeXMLHttpRequest`
  // letting us synchronously inspect any request made by `searchYouTube`

  beforeEach(function () {
    requests = [];
    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = function (req) {
      requests.push(req);
    };
  });

  afterEach(function () {
    if (xhr.restore) {
      xhr.restore();
    }
  });

  it('should send a GET request', function () {
    searchYouTube({}, function () {});

    expect(requests[0].method).to.equal('GET');
  });

  it('should accept `key`, `query`, and `max` options and send them in GET request', function () {
    searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, function () {});

    var params = getURLSearchParams(requests[0].url);
    expect(params.key).to.equal('API_KEY');
    expect(params.q).to.equal('cats');
    expect(params.maxResults).to.equal('10');
  });

  // Same shape means that the data should have the same keys, nested the same way as `exampleVideoData`,
  // though it will not necessarily have the same values.
  it('should GET videos with the same shape as `exampleVideoData`', function (done) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };

    // We want this test to make a real AJAX request
    xhr.restore();

    searchYouTube(options, function (data) {
      expect(hasSameShape(data, window.exampleVideoData)).to.be.true;
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvbGliL3NlYXJjaFlvdVR1YmVTcGVjLmpzIl0sIm5hbWVzIjpbImdldFVSTFNlYXJjaFBhcmFtcyIsInVybCIsInNwbGl0IiwicmVkdWNlIiwibWFwIiwicGFyYW1zIiwia2V5IiwidmFsdWUiLCJoYXNTYW1lU2hhcGUiLCJvYmplY3RPbmUiLCJvYmplY3RUd28iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZGVzY3JpYmUiLCJyZXF1ZXN0cyIsInhociIsImJlZm9yZUVhY2giLCJzaW5vbiIsInVzZUZha2VYTUxIdHRwUmVxdWVzdCIsIm9uQ3JlYXRlIiwicmVxIiwicHVzaCIsImFmdGVyRWFjaCIsInJlc3RvcmUiLCJpdCIsInNlYXJjaFlvdVR1YmUiLCJleHBlY3QiLCJtZXRob2QiLCJ0byIsImVxdWFsIiwicXVlcnkiLCJtYXgiLCJxIiwibWF4UmVzdWx0cyIsImRvbmUiLCJvcHRpb25zIiwid2luZG93IiwiWU9VVFVCRV9BUElfS0VZIiwiZGF0YSIsImV4YW1wbGVWaWRlb0RhdGEiLCJiZSIsInRydWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQVNDLEdBQVQsRUFBYztBQUNyQyxTQUFPQSxJQUNKQyxLQURJLENBQ0UsR0FERixFQUNPLENBRFAsRUFFSkEsS0FGSSxDQUVFLEdBRkYsRUFHSkMsTUFISSxDQUdHLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUFBLHdCQUNKQSxPQUFPSCxLQUFQLENBQWEsR0FBYixDQURJO0FBQUE7QUFBQSxRQUNsQkksR0FEa0I7QUFBQSxRQUNiQyxLQURhOztBQUV2QkgsUUFBSUUsR0FBSixJQUFXQyxLQUFYO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBUEksRUFPRixFQVBFLENBQVA7QUFRRCxDQVREOztBQVdBLElBQUlJLGVBQWUsU0FBZkEsWUFBZSxDQUFTQyxTQUFULEVBQW9CQyxTQUFwQixFQUErQjtBQUNoRCxNQUFJQyxPQUFPQyxJQUFQLENBQVlILFNBQVosRUFBdUJJLE1BQXZCLEtBQWtDRixPQUFPQyxJQUFQLENBQVlGLFNBQVosRUFBdUJHLE1BQTdELEVBQXFFO0FBQ25FLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSVAsR0FBVCxJQUFnQkcsU0FBaEIsRUFBMkI7QUFDekIsUUFBSSxDQUFDSCxHQUFELElBQVFJLFNBQVosRUFBdUI7QUFDckIsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBSSxRQUFPRCxVQUFVSCxHQUFWLENBQVAsY0FBaUNJLFVBQVVKLEdBQVYsQ0FBakMsQ0FBSixFQUFxRDtBQUNuRCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxRQUFJSyxPQUFPRyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JQLFVBQVVILEdBQVYsQ0FBL0IsTUFBbUQsaUJBQXZELEVBQTBFO0FBQ3hFLGFBQU9FLGFBQWFDLFVBQVVILEdBQVYsQ0FBYixFQUE2QkksVUFBVUosR0FBVixDQUE3QixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXBCRDs7QUFzQkFXLFNBQVMsZUFBVCxFQUEwQixZQUFXO0FBQ25DLE1BQUlDLFFBQUosRUFBY0MsR0FBZDs7QUFFQTtBQUNBOztBQUVBQyxhQUFXLFlBQVc7QUFDcEJGLGVBQVcsRUFBWDtBQUNBQyxVQUFNRSxNQUFNQyxxQkFBTixFQUFOO0FBQ0FILFFBQUlJLFFBQUosR0FBZSxVQUFTQyxHQUFULEVBQWM7QUFBRU4sZUFBU08sSUFBVCxDQUFjRCxHQUFkO0FBQXFCLEtBQXBEO0FBQ0QsR0FKRDs7QUFNQUUsWUFBVSxZQUFXO0FBQ25CLFFBQUlQLElBQUlRLE9BQVIsRUFBaUI7QUFDZlIsVUFBSVEsT0FBSjtBQUNEO0FBQ0YsR0FKRDs7QUFNQUMsS0FBRywyQkFBSCxFQUFnQyxZQUFXO0FBQ3pDQyxrQkFBYyxFQUFkLEVBQWtCLFlBQU0sQ0FBRSxDQUExQjs7QUFFQUMsV0FBT1osU0FBUyxDQUFULEVBQVlhLE1BQW5CLEVBQTJCQyxFQUEzQixDQUE4QkMsS0FBOUIsQ0FBb0MsS0FBcEM7QUFDRCxHQUpEOztBQU1BTCxLQUFHLDhFQUFILEVBQW1GLFlBQVc7QUFDNUZDLGtCQUFjLEVBQUV2QixLQUFLLFNBQVAsRUFBa0I0QixPQUFPLE1BQXpCLEVBQWlDQyxLQUFLLEVBQXRDLEVBQWQsRUFBMEQsWUFBTSxDQUFFLENBQWxFOztBQUVBLFFBQUk5QixTQUFTTCxtQkFBbUJrQixTQUFTLENBQVQsRUFBWWpCLEdBQS9CLENBQWI7QUFDQTZCLFdBQU96QixPQUFPQyxHQUFkLEVBQW1CMEIsRUFBbkIsQ0FBc0JDLEtBQXRCLENBQTRCLFNBQTVCO0FBQ0FILFdBQU96QixPQUFPK0IsQ0FBZCxFQUFpQkosRUFBakIsQ0FBb0JDLEtBQXBCLENBQTBCLE1BQTFCO0FBQ0FILFdBQU96QixPQUFPZ0MsVUFBZCxFQUEwQkwsRUFBMUIsQ0FBNkJDLEtBQTdCLENBQW1DLElBQW5DO0FBQ0QsR0FQRDs7QUFTQTtBQUNBO0FBQ0FMLEtBQUcsNkRBQUgsRUFBa0UsVUFBU1UsSUFBVCxFQUFlO0FBQy9FLFFBQUlDLFVBQVU7QUFDWmpDLFdBQUtrQyxPQUFPQyxlQURBO0FBRVpQLGFBQU8sT0FGSztBQUdaQyxXQUFLO0FBSE8sS0FBZDs7QUFNQTtBQUNBaEIsUUFBSVEsT0FBSjs7QUFFQUUsa0JBQWNVLE9BQWQsRUFBdUIsVUFBQ0csSUFBRCxFQUFVO0FBQy9CWixhQUFPdEIsYUFBYWtDLElBQWIsRUFBbUJGLE9BQU9HLGdCQUExQixDQUFQLEVBQW9EWCxFQUFwRCxDQUF1RFksRUFBdkQsQ0FBMERDLElBQTFEO0FBQ0FQO0FBQ0QsS0FIRDtBQUlELEdBZEQ7QUFlRCxDQWxERCIsImZpbGUiOiJzZWFyY2hZb3VUdWJlU3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnZXRVUkxTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbih1cmwpIHtcbiAgcmV0dXJuIHVybFxuICAgIC5zcGxpdCgnPycpWzFdXG4gICAgLnNwbGl0KCcmJylcbiAgICAucmVkdWNlKChtYXAsIHBhcmFtcykgPT4ge1xuICAgICAgdmFyIFtrZXksIHZhbHVlXSA9IHBhcmFtcy5zcGxpdCgnPScpO1xuICAgICAgbWFwW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xufTtcblxudmFyIGhhc1NhbWVTaGFwZSA9IGZ1bmN0aW9uKG9iamVjdE9uZSwgb2JqZWN0VHdvKSB7XG4gIGlmIChPYmplY3Qua2V5cyhvYmplY3RPbmUpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqZWN0VHdvKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0T25lKSB7XG4gICAgaWYgKCFrZXkgaW4gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmplY3RPbmVba2V5XSAhPT0gdHlwZW9mIG9iamVjdFR3b1trZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3RPbmVba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICByZXR1cm4gaGFzU2FtZVNoYXBlKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5kZXNjcmliZSgnc2VhcmNoWW91VHViZScsIGZ1bmN0aW9uKCkge1xuICB2YXIgcmVxdWVzdHMsIHhocjtcblxuICAvLyBTaW5vbiB0ZW1wb3JhcmlseSBoaWphY2tzIGFsbCBvdXRnb2luZyBBSkFYIHJlcXVlc3RzIHdpdGggYHVzZUZha2VYTUxIdHRwUmVxdWVzdGBcbiAgLy8gbGV0dGluZyB1cyBzeW5jaHJvbm91c2x5IGluc3BlY3QgYW55IHJlcXVlc3QgbWFkZSBieSBgc2VhcmNoWW91VHViZWBcblxuICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgIHJlcXVlc3RzID0gW107XG4gICAgeGhyID0gc2lub24udXNlRmFrZVhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9uQ3JlYXRlID0gZnVuY3Rpb24ocmVxKSB7IHJlcXVlc3RzLnB1c2gocmVxKTsgfTtcbiAgfSk7XG5cbiAgYWZ0ZXJFYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmICh4aHIucmVzdG9yZSkge1xuICAgICAgeGhyLnJlc3RvcmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgc2VuZCBhIEdFVCByZXF1ZXN0JywgZnVuY3Rpb24oKSB7XG4gICAgc2VhcmNoWW91VHViZSh7fSwgKCkgPT4ge30pO1xuXG4gICAgZXhwZWN0KHJlcXVlc3RzWzBdLm1ldGhvZCkudG8uZXF1YWwoJ0dFVCcpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGFjY2VwdCBga2V5YCwgYHF1ZXJ5YCwgYW5kIGBtYXhgIG9wdGlvbnMgYW5kIHNlbmQgdGhlbSBpbiBHRVQgcmVxdWVzdCcsIGZ1bmN0aW9uKCkge1xuICAgIHNlYXJjaFlvdVR1YmUoeyBrZXk6ICdBUElfS0VZJywgcXVlcnk6ICdjYXRzJywgbWF4OiAxMCB9LCAoKSA9PiB7fSk7XG5cbiAgICB2YXIgcGFyYW1zID0gZ2V0VVJMU2VhcmNoUGFyYW1zKHJlcXVlc3RzWzBdLnVybCk7XG4gICAgZXhwZWN0KHBhcmFtcy5rZXkpLnRvLmVxdWFsKCdBUElfS0VZJyk7XG4gICAgZXhwZWN0KHBhcmFtcy5xKS50by5lcXVhbCgnY2F0cycpO1xuICAgIGV4cGVjdChwYXJhbXMubWF4UmVzdWx0cykudG8uZXF1YWwoJzEwJyk7XG4gIH0pO1xuXG4gIC8vIFNhbWUgc2hhcGUgbWVhbnMgdGhhdCB0aGUgZGF0YSBzaG91bGQgaGF2ZSB0aGUgc2FtZSBrZXlzLCBuZXN0ZWQgdGhlIHNhbWUgd2F5IGFzIGBleGFtcGxlVmlkZW9EYXRhYCxcbiAgLy8gdGhvdWdoIGl0IHdpbGwgbm90IG5lY2Vzc2FyaWx5IGhhdmUgdGhlIHNhbWUgdmFsdWVzLlxuICBpdCgnc2hvdWxkIEdFVCB2aWRlb3Mgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgZXhhbXBsZVZpZGVvRGF0YWAnLCBmdW5jdGlvbihkb25lKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBrZXk6IHdpbmRvdy5ZT1VUVUJFX0FQSV9LRVksXG4gICAgICBxdWVyeTogJ3JlYWN0JyxcbiAgICAgIG1heDogNVxuICAgIH07XG5cbiAgICAvLyBXZSB3YW50IHRoaXMgdGVzdCB0byBtYWtlIGEgcmVhbCBBSkFYIHJlcXVlc3RcbiAgICB4aHIucmVzdG9yZSgpO1xuXG4gICAgc2VhcmNoWW91VHViZShvcHRpb25zLCAoZGF0YSkgPT4ge1xuICAgICAgZXhwZWN0KGhhc1NhbWVTaGFwZShkYXRhLCB3aW5kb3cuZXhhbXBsZVZpZGVvRGF0YSkpLnRvLmJlLnRydWU7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xufSk7Il19