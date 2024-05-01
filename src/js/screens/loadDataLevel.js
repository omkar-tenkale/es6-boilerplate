(function(){

game.level.loadDataLevel = me.Stage.extend({
	onResetEvent: function() {
		me.levelDirector.loadLevel("loadDataLevel");
		this.var = {};
        // Put user code here //
        console.log("load data");
        // game.controller.data.initDatabase(() => {
            me.state.change(game.state.menuLevel);
        // });

        document.addEventListener("visibilitychange", () => {
          if(document.visibilityState === "visible") {
            me.audio.unmuteAll();
          }else{
            me.audio.muteAll();
          }
        });
        //  End of user code  //
	},

	onDestroyEvent: function() {
	},

});

})();