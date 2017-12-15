// TODO: Render the `App` component to the DOM
ReactDOM.render(<App 
  videos={window.exampleVideoData} 
  searchYT={window.searchYouTube}
  searchYTT={window.searchYouTubeTwo}/>, 
document.getElementById('app'));