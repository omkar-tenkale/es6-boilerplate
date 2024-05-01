(function(){
// Put user code here //

//  End of user code  //

game.object.Coin = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"CoinAnimate - 00","CoinAnimate - 01","CoinAnimate - 02",
			"CoinAnimate - 03","CoinAnimate - 04","CoinAnimate - 05",
			"CoinAnimate - 06","CoinAnimate - 07","CoinAnimate - 08",
			"CoinAnimate - 09","CoinAnimate - 10","CoinAnimate - 11",
			"CoinAnimate - 12","CoinAnimate - 13","CoinAnimate - 14",
			"CoinAnimate - 15"
		], settings);
		settings.framewidth = settings.framewidth || 84;
		settings.frameheight = settings.frameheight || 84;
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

		this.addAnimation('idle', [{ name: "CoinAnimate - 00", delay: 60 },{ name: "CoinAnimate - 01", delay: 60 },{ name: "CoinAnimate - 02", delay: 60 },{ name: "CoinAnimate - 03", delay: 60 },{ name: "CoinAnimate - 04", delay: 60 },{ name: "CoinAnimate - 05", delay: 60 },{ name: "CoinAnimate - 06", delay: 60 },{ name: "CoinAnimate - 07", delay: 60 },{ name: "CoinAnimate - 08", delay: 60 },{ name: "CoinAnimate - 09", delay: 60 },{ name: "CoinAnimate - 10", delay: 60 },{ name: "CoinAnimate - 11", delay: 60 },{ name: "CoinAnimate - 12", delay: 60 },{ name: "CoinAnimate - 13", delay: 60 },{ name: "CoinAnimate - 14", delay: 60 },{ name: "CoinAnimate - 15", delay: 60 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape( me.pool.pull("me.Rect", 0 - bodyShapePos.x, 0 - bodyShapePos.y, 84, 84) );
		this.body.setCollisionMask(game.collisionTypes.PLAYER_OBJECT);
		this.body.gravity.y = 0;

		this.body.shapes[0].getBounds().x = 0;
		this.body.shapes[0].getBounds().y = 0;

		this.var = {};

        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
	    game.util.spread(this, settings, vars);
        //  End of user code  //
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
        // Put user code here //
        isSolid = false;
        if(this.alpha == 1){
            this.alpha = 0;
            this.container.GetScore();
        }
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