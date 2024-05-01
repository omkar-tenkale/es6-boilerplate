(function(){

game.object.menuSprite = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"menu_background","menu_logo"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('background', [{ name: "menu_background", delay: 100 }]);
		this.addAnimation('logo', [{ name: "menu_logo", delay: 100 }]);
		this.setCurrentAnimation('background');
		this.var = {};

	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
	},

	onActivateEvent : function() {
	},

	onDeactivateEvent : function() {

	},

    // Put user code here //
    tweenPlay: function(){
        let tween = new me.Tween(this.pos)
            .to({y:this.pos.y+1100}, 1500)
            .easing(me.Tween.Easing.Linear.None)
            .onComplete(()=>{
                this.container.playSpawn();
            });

        tween.start();
    }
    //  End of user code  //
});

})();