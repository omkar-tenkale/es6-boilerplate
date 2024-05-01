(function(){

game.level.gameplayLevel = me.Stage.extend({
	onResetEvent: function() {
		me.levelDirector.loadLevel("gameplayLevel");
		this.var = {};
        // Put user code here //
        this.gameplayContainer = me.pool.pull("gameplayContainer", 0, 0);
        me.game.world.addChild(this.gameplayContainer, this.gameplayContainer.pos.z);
        let blok = me.pool.pull("blokGameplay", 0, 0);
        me.game.world.addChild(blok, 100);
        //  End of user code  //
	},

	onDestroyEvent: function() {
	},

});

})();