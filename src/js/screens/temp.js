(function(){

game.level.temp = me.Stage.extend({
	onResetEvent: function() {
		me.levelDirector.loadLevel("temp");
		this.var = {};
        // Put user code here //
        me.state.change(game.state.gameplayLevel);
        //  End of user code  //
	},

	onDestroyEvent: function() {
	},

});

})();