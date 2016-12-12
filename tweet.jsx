var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event){
    this.setState({ text: event.target.value });
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{140 - this.state.text.length}</span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
        <button className="btn btn-default pull-right">Add Photo</button>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
