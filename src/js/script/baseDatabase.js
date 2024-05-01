// Put user code here //
var baseDatabase = me.Object.extend({
    init: function(){

    },

    createDatabase: function(){
        throw "this function must be created in the child object";
    },

    loadDatabase: function(){
        throw "this function must be created in the child object";
    },

    saveToDatabase: function(obj, callback){
        throw "this function must be created in the child object";
    }
});
//  End of user code  //
