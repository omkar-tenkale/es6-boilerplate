(function(){
// Put user code here //

//  End of user code  //

game.object.Landing = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gameplay_landing"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //

        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "gameplay_landing", delay: 1 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

        // Put user code here //
        this.body.removeShapeAt(0);
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //

        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //

        //  End of user code  //
		return isSolid;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //

        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //

        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //

        //  End of user code  //
	},

    // Put user code here //

    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();