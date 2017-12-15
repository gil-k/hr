class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.value);
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange}/>
        <button className="btn hidden-sm-down" onClick= {this.handleSubmit}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
