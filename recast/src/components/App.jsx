class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      videoPlaying: this.props.videos[0],
      query: 'coding for dummies',
      extraData: {},
      id: 'snSWukRJcQI'
    };
  }
  
  componentDidMount() {
    this.handleSearch(this.state.query);
    
  }
  
  onVideoListClick(videoObj) {
    this.setState({
      videoPlaying: videoObj
    });
  }
  
  handleSearch(queryString) {
    var options = {query: queryString};
    var newOptions = {query: queryString, id: this.state.id};
    this.props.searchYT(options, (videos) => {
      this.setState({
        videos: videos.items,
        videoPlaying: videos.items[0],
        id: videos.items[0].id.videoId
      });   
    });
    this.props.searchYTT(newOptions, (videos) => {
      this.setState({
        extraData: videos.statistics,
      });
    });
  }
  
  searchText(input) {
    this.setState({
      query: input
    });
    this.handleSearch(this.state.query);
  }
    
  
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.searchText.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying} data={this.state.extraData}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.onVideoListClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
