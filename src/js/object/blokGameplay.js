(function(){

game.object.blokGameplay = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || 'gameplay_blok';
		settings.framewidth = settings.framewidth || 4160;
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
		this.alwaysUpdate = true;
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

});

})();