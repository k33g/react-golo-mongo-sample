/**
 * @jsx React.DOM
 */
define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'react'
  , 'models/Postit'
  , 'models/Postits'
  , 'jsx!components/BigTitle'
  , 'jsx!components/PostitForm'
  , 'jsx!components/PostitsList'

], function($, _, Backbone, React, Postit, Postits, BigTitle, PostitForm, PostitsList) {
  //"use strict";

  var Application = Backbone.Router.extend({ // application is a router

    routes : {
      "": "home",
      "help/:id" : "help",
      '*actions': 'defaultAction'
    },
    initialize : function() { //initialize models, collections and views ...
      console.log("=== Initialize application ===")
      var messageTitle = "React M33Ki Mongo Sample", version="0.0 (Golo powered)";

      React.renderComponent(
        <BigTitle message={messageTitle} version={version}/>,
        document.querySelector('big-title')
      );

      React.renderComponent(
        <PostitForm/>,
        document.querySelector('.postit-form')
      );

      React.renderComponent(
        <PostitsList pollInterval={500}/>,
        document.querySelector('.postits-list')
      );

    },
    // when routes
    home : function(){
      console.log("=== home ===");
    },
    help : function(id){
      console.log("=== help ===", id);
    },
    defaultAction: function(action) {
      console.log("defaultAction", action)
    }
  });

  return Application;
});
