/*--- Postit Model ---*/
define([
    'backbone'
], function(Backbone){

    var Postit = Backbone.Model.extend({
        defaults : function (){
          return {
            text:"???", star:false
          }
        },
        idAttribute: "_id",
        urlRoot : "postits"
    });

    return Postit;
});

