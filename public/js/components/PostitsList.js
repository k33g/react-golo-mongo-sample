/** @jsx React.DOM */
define([
  "react",
  "models/Postit",
  "models/Postits"
], function (React, Postit, Postits) {
  /*--- Postits List ---*/
  var PostitsList = React.createClass({

    getInitialState: function() {
      return {data : [], message : "..."};
    },
    getAllPostits : function() {
      var postitsCollection = new Postits();

      postitsCollection.fetch({
        success : function(data) {
          //console.log(postitsCollection.toJSON())
          this.setState({data : data.toJSON(), message : Date()});
        }.bind(this),
        error : function(err) {
          this.setState({
            message  : err.responseText + " " + err.statusText
          });
        }
      })
    },
    componentWillMount: function() {
      this.getAllPostits();
      setInterval(this.getAllPostits, this.props.pollInterval);
    },

    componentDidMount: function() {
      var Router = Backbone.Router.extend({
        routes : {
          "delete_postit/:id" : "deletePostit"
        },
        initialize : function() {

        },
        deletePostit : function(id){
          console.log("=== delete Postit ===", id);
          var tmpPostit = new Postit({_id:id}).destroy();
          this.navigate('/');
        }
      });
      this.router = new Router()
    },

    styles : {
      ul: {
        class:"square"
      }
    },
    render: function() {

      var postitsNodes = this.state.data.map(function(postit){
        var deleteLink = "#delete_postit/" + postit._id;
        return (<li>
           {postit.text} {" "} {postit.star} {" "}<a href={deleteLink}>delete</a>
        </li>);
      });

      return (
        <div><h3>Postits List</h3>
          <strong>{this.state.message}</strong>
          <ul className={this.styles.ul.class}>
            {postitsNodes}
          </ul>
        </div>
      );

    }
  });
  return PostitsList;

});

