(function(){
// Put user code here //

//  End of user code  //

game.object.gamePlayPauseRestart = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gameplay_pausedRestart"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 42;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //

        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        this.click = true;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //

        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //

        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //

        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

        // Put user code here //

        //  End of user code  //
	},

    // Put user code here //
    onClick : function(event){
        if(this.click){
            this.currentTransform.translate(this.pos.x, this.pos.x);
            this.currentTransform.scale(1, 0.99);
            this.currentTransform.translate(-this.pos.x, -this.pos.x);
            me.game.repaint();
            //sound
            me.audio.play("sfx-button", false,()=>{}, 1);
            //--
            game.util.resumeGame();
            let once = true;
            me.timer.setTimeout(()=>{
                if(once){
                    once = false;
                    this.onRelease();
                }
            }, 100);
        }
    },
    onRelease : function(event){
        if(this.click){
            this.click = false;
            this.currentTransform.identity();
            me.game.repaint();
            console.log("Pause Restart");
            game.var.lastScore = 0;
            game.util.reloadLevel();
            me.timer.setTimeout(()=>{
                this.click = true;
            }, 1000);
        }
    },
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();