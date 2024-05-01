(function(){

game.object.LandingTarget = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gameplay_landingTarget"
		], settings);
		settings.framewidth = settings.framewidth || 898;
		settings.frameheight = settings.frameheight || 334;
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
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.NO_OBJECT;
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
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
		return isSolid;
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