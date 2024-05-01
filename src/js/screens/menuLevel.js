(function(){

game.level.menuLevel = me.Stage.extend({
	onResetEvent: function() {
		me.levelDirector.loadLevel("menuLevel");
		this.var = {};
        // Put user code here //
        me.video.renderer.settings.scaleMethod = "fit";
        game.var.lastScore = 0;
        this.mainMenuContainer = me.pool.pull("menuContainer", 0, 0);
        me.game.world.addChild(this.mainMenuContainer, this.mainMenuContainer.pos.z);

        //Sound
        this.bgmPlay = false;
        me.audio.play("bgm - main menu", false,()=>{this.bgmPlay = true}, 0.5);
        this.audioInterval = me.timer.setInterval(()=>{
            if(this.bgmPlay){
                this.bgmPlay = false;
                me.audio.play("bgm - main menu", false,()=>{this.bgmPlay = true}, 0.5);
            }
        }, 100);
        //--
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm - main menu");
        me.timer.clearInterval(this.audioInterval);
        //  End of user code  //
	},

});

})();