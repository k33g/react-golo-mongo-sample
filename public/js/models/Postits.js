/*--- Postits Collection ---*/
define([
    'backbone',
    'models/Postit'
], function(Backbone, Postit){

    var Postits = Backbone.Collection.extend({
        model : Postit,
        url : "postits"
    });

    return Postits;
});

