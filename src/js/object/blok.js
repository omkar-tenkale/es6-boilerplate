(function(){
// Put user code here //

//  End of user code  //

game.object.blok = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"blok_background"
		], settings);
		settings.framewidth = settings.framewidth || 2080;
		settings.frameheight = settings.frameheight || 2340;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};


		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
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

    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();