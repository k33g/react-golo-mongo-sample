/** @jsx React.DOM */
define([
  "react",
  "models/Postit",
  "models/Postits"
], function (React, Postit, Postits) {
  /*--- Postit Form ---*/
  var PostitForm = React.createClass({

    getInitialState: function() {
      return {data : [], message : ""};
    },
    componentDidMount: function() {},
    componentWillMount: function() {},

    handleSubmit : function() {

      var text = this.refs.text.getDOMNode().value.trim();
      var star = false;
      
      if (!text) {return false;}
      
      this.setState({
        message : "Please wait ..."
      });

      var tmpPostit = new Postit({text : text,star : star}).save({},{
        success: function(data) {
          this.setState({
            message : data.id + " added!"
          });

          this.refs.text.getDOMNode().value = '';

          this.refs.text.getDOMNode().focus();
          
        }.bind(this),
        error : function(err) {
          this.setState({
            message  : err.responseText + " " + err.statusText
          });
        }
      });

      return false;
    },

    styles : {},

    render: function() {

      return (
        <div>
        <h3>Postit Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="text" ref="text"/>          
          <input type="submit" value="Add Postit" />
          <br></br>
          <strong>{this.state.message}</strong>
        </form>
        </div>
      );

    }
  });
  return PostitForm;

});


