// Put user code here //
game.data = {};
game.controller = {};
game.user = null;

var sub = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.controller.data = new DataController();

    me.event.unsubscribe(sub);
});
//  End of user code  //
