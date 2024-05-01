(function(){

game.object.gamePlayAwan = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"awan - 00","awan - 01","awan - 02"
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('0', [{ name: "awan - 00", delay: 1 }]);
		this.addAnimation('1', [{ name: "awan - 01", delay: 1 }]);
		this.addAnimation('2', [{ name: "awan - 02", delay: 1 }]);
		this.setCurrentAnimation('0');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.NO_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.NO_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos.y <= -1170){
            this.randX = Math.floor(Math.random() * 600)-300;
            this.jenis = Math.floor(Math.random() * 3);
            this.pos.x = me.game.viewport.width*0.5+this.randX;
            this.pos.y = me.game.viewport.height*0.5+1170;
            this.setCurrentAnimation(this.jenis);
            if(this.container.landing.pos.y <= me.game.viewport.height+me.game.viewport.height/2){
                this.alpha = 0;
            }
        }

        if(this.container.landing.pos.y <= me.game.viewport.height){
            this.container.removeChild(this);
        }

        if(this.container.player.over == false && !this.container.paused){
            this.body.vel.y = game.var.speed;
        }
        else{
            this.body.vel.y = 0;
        }
        //  End of user code  //
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