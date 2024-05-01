(function(){
// Put user code here //

//  End of user code  //

game.object.Toucan = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"obstacle_toucan - 00","obstacle_toucan - 01","obstacle_toucan - 02",
			"obstacle_toucan - 03","obstacle_toucan - 04","obstacle_toucan - 05",
			"obstacle_toucan - 06","obstacle_toucan - 07","obstacle_toucan - 08",
			"obstacle_toucan - 09","obstacle_toucan - 10","obstacle_toucan - 11",
			"obstacle_toucan - 12","obstacle_toucan - 13","obstacle_toucan - 14"
		], settings);
		settings.framewidth = settings.framewidth || 314;
		settings.frameheight = settings.frameheight || 138;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
        this.side = settings.side;
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

		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

		this.addAnimation('idle', [{ name: "obstacle_toucan - 00", delay: 35 },{ name: "obstacle_toucan - 01", delay: 35 },{ name: "obstacle_toucan - 02", delay: 35 },{ name: "obstacle_toucan - 03", delay: 35 },{ name: "obstacle_toucan - 04", delay: 35 },{ name: "obstacle_toucan - 05", delay: 35 },{ name: "obstacle_toucan - 06", delay: 35 },{ name: "obstacle_toucan - 07", delay: 35 },{ name: "obstacle_toucan - 08", delay: 35 },{ name: "obstacle_toucan - 09", delay: 35 },{ name: "obstacle_toucan - 10", delay: 35 },{ name: "obstacle_toucan - 11", delay: 35 },{ name: "obstacle_toucan - 12", delay: 35 },{ name: "obstacle_toucan - 13", delay: 35 },{ name: "obstacle_toucan - 14", delay: 35 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape( me.pool.pull("me.Rect", 0 - bodyShapePos.x, 0 - bodyShapePos.y, 175, 86) );
		this.body.setCollisionMask(game.collisionTypes.PLAYER_OBJECT);
		this.body.gravity.y = 0;

		this.body.shapes[0].getBounds().x = 0;
		this.body.shapes[0].getBounds().y = 0;

		this.var = {};

	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos.y <= -100){
            this.container.removeChild(this);
        }

        if(this.container.player.pos.y >= 1995){
            this.alpha = 0;
        }

        if(this.container.player.over == false && !this.container.paused){
            if(this.side == "left"){
                this.flipX(true);
                this.body.vel.y = game.var.speed;
                this.body.vel.x = OBS_H_SPEED;
            }
            if(this.side == "right"){
                this.flipX(false);
                this.body.vel.y = game.var.speed;
                this.body.vel.x = -OBS_H_SPEED;
            }
        }
        else{
            this.body.vel.y = 0;
            this.body.vel.x = 0;
        }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        other.Hit();
        //  End of user code  //
		return isSolid;
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