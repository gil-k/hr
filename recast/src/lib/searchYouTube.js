var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: options.query,
      type: 'video',
      maxResults: 10,
      videoEmbeddable: 'true',
    },
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(data) {
      callback(error);
    }
  });
};
var searchYouTubeTwo = (newOptions, callback) => {
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
      videoEmbeddable: 'true',
    },
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(data) {
      console.log('FAIL');
    }
  });
};
window.searchYouTube = searchYouTube;
window.searchYouTubeTwo = searchYouTubeTwo;
