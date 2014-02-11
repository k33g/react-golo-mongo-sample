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
        urlRoot : "postits"
    });

    return Postit;
});

