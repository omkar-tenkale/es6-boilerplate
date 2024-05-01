(function(){
// Put user code here //

//  End of user code  //

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

    // Put user code here //

    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();