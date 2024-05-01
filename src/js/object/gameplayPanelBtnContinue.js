(function(){
// Put user code here //

//  End of user code  //

game.object.gameplayPanelBtnContinue = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"panel_BtnContinue"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 42;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
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
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

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

            this.click = false; this.container.panelBtnRestart.click = false;
            this.container.AdsError();

            me.timer.setTimeout(()=>{
                this.click = true;
                this.container.panelBtnRestart.click = true;
            }, 2000);
        }
    },
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();