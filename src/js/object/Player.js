(function(){
// Put user code here //

//  End of user code  //

game.object.Player = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"playerParachute_Broke - 00","playerParachute_Broke - 01","playerParachute_Broke - 02",
			"playerParachute_Broke - 03","playerParachute_Broke - 04","playerParachute_Broke - 05",
			"playerParachute_Broke - 06","playerParachute_Glide - 00","playerParachute_Glide - 01",
			"playerParachute_Glide - 02","playerParachute_Glide - 03","playerParachute_Glide - 04",
			"playerParachute_Glide - 05","playerParachute_Glide - 06","playerParachute_Glide - 07",
			"playerParachute_Glide - 08","playerParachute_Glide - 09","playerParachute_Glide - 10",
			"playerParachute_Glide - 11","playerParachute_Glide - 12","playerParachute_Glide - 13",
			"playerParachute_Glide - 14","playerParachute_Happy - 00","playerParachute_Happy - 01",
			"playerParachute_Happy - 02","playerParachute_Happy - 03","playerParachute_Happy - 04",
			"playerParachute_Happy - 05","playerParachute_Happy - 06","playerParachute_Happy - 07",
			"playerParachute_Happy - 08","playerParachute_Happy - 09","playerParachute_Happy - 10",
			"playerParachute_Happy - 11","playerParachute_Happy - 12","playerParachute_Jump - 00",
			"playerParachute_Jump - 01","playerParachute_Jump - 02","playerParachute_Jump - 03",
			"playerParachute_Jump - 04","playerParachute_Jump - 05","playerParachute_Jump - 06",
			"playerParachute_Jump - 07","playerParachute_Jump - 08","playerParachute_Jump - 09",
			"playerParachute_Jump - 10","playerParachute_Jump - 11","playerParachute_Jump - 12",
			"playerParachute_Jump - 13","playerParachute_Jump - 14","playerParachute_Stand - 00",
			"playerParachute_Stand - 01","playerParachute_Stand - 02","playerParachute_Stand - 03",
			"playerParachute_Stand - 04","playerParachute_Stand - 05","playerParachute_Stand - 06",
			"playerParachute_Stand - 07"
		], settings);
		settings.framewidth = settings.framewidth || 452;
		settings.frameheight = settings.frameheight || 406;
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

		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

		this.addAnimation('idle', [{ name: "playerParachute_Glide - 00", delay: 80 },{ name: "playerParachute_Glide - 01", delay: 80 },{ name: "playerParachute_Glide - 02", delay: 80 },{ name: "playerParachute_Glide - 03", delay: 80 },{ name: "playerParachute_Glide - 04", delay: 80 },{ name: "playerParachute_Glide - 05", delay: 80 },{ name: "playerParachute_Glide - 06", delay: 80 },{ name: "playerParachute_Glide - 07", delay: 80 },{ name: "playerParachute_Glide - 08", delay: 80 },{ name: "playerParachute_Glide - 09", delay: 80 },{ name: "playerParachute_Glide - 10", delay: 80 },{ name: "playerParachute_Glide - 11", delay: 80 },{ name: "playerParachute_Glide - 12", delay: 80 },{ name: "playerParachute_Glide - 13", delay: 80 },{ name: "playerParachute_Glide - 14", delay: 80 }]);
		this.addAnimation('happy', [{ name: "playerParachute_Happy - 00", delay: 80 },{ name: "playerParachute_Happy - 01", delay: 80 },{ name: "playerParachute_Happy - 02", delay: 80 },{ name: "playerParachute_Happy - 03", delay: 80 },{ name: "playerParachute_Happy - 04", delay: 80 },{ name: "playerParachute_Happy - 05", delay: 80 },{ name: "playerParachute_Happy - 06", delay: 80 },{ name: "playerParachute_Happy - 07", delay: 80 },{ name: "playerParachute_Happy - 08", delay: 80 },{ name: "playerParachute_Happy - 09", delay: 80 },{ name: "playerParachute_Happy - 10", delay: 80 },{ name: "playerParachute_Happy - 11", delay: 80 },{ name: "playerParachute_Happy - 12", delay: 80 }]);
		this.addAnimation('broke', [{ name: "playerParachute_Broke - 00", delay: 80 },{ name: "playerParachute_Broke - 01", delay: 80 },{ name: "playerParachute_Broke - 02", delay: 80 },{ name: "playerParachute_Broke - 03", delay: 80 },{ name: "playerParachute_Broke - 04", delay: 80 },{ name: "playerParachute_Broke - 05", delay: 80 },{ name: "playerParachute_Broke - 06", delay: 80 }]);
		this.addAnimation('jump', [{ name: "playerParachute_Jump - 00", delay: 60 },{ name: "playerParachute_Jump - 01", delay: 60 },{ name: "playerParachute_Jump - 02", delay: 60 },{ name: "playerParachute_Jump - 03", delay: 60 },{ name: "playerParachute_Jump - 04", delay: 60 },{ name: "playerParachute_Jump - 05", delay: 60 },{ name: "playerParachute_Jump - 06", delay: 60 },{ name: "playerParachute_Jump - 07", delay: 60 },{ name: "playerParachute_Jump - 08", delay: 60 },{ name: "playerParachute_Jump - 09", delay: 60 },{ name: "playerParachute_Jump - 10", delay: 60 },{ name: "playerParachute_Jump - 11", delay: 60 },{ name: "playerParachute_Jump - 12", delay: 60 },{ name: "playerParachute_Jump - 13", delay: 60 },{ name: "playerParachute_Jump - 14", delay: 60 }]);
		this.addAnimation('stand', [{ name: "playerParachute_Stand - 00", delay: 70 },{ name: "playerParachute_Stand - 01", delay: 70 },{ name: "playerParachute_Stand - 02", delay: 70 },{ name: "playerParachute_Stand - 03", delay: 70 },{ name: "playerParachute_Stand - 04", delay: 70 },{ name: "playerParachute_Stand - 05", delay: 70 },{ name: "playerParachute_Stand - 06", delay: 70 },{ name: "playerParachute_Stand - 07", delay: 70 }]);
		this.setCurrentAnimation('jump');
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape( me.pool.pull("me.Rect", 0 - bodyShapePos.x, 202 - bodyShapePos.y, 141, 203) );
		this.body.collisionType = game.collisionTypes.PLAYER_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ENEMY_OBJECT);
		this.body.gravity.y = 0;

		this.body.shapes[0].getBounds().x = 0;
		this.body.shapes[0].getBounds().y = 202;

		this.var = {};

        // Put user code here //
	    this.over = false;
        this.onHit = false;
        this.onFly = false;
        this.getCoin = false;
        this.startPosX = this.pos.x;
        this.limitLeft = this.startPosX - 1030;
        this.limitRight = this.startPosX + 1080;
        this.speed = FALL_SPEED;
        this.body.vel.y = 15;
        this.setAnimationFrame(0);
        this.ready = true;
        this.audioPlay = true;
        this.audioPlayHit = true;
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
        // Put user code here //
        isSolid = false;
        //  End of user code  //
		return isSolid;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
	},

	onActivateEvent : function() {
	},

	onDeactivateEvent : function() {

        // Put user code here //
        me.timer.clearTimeout(this.flyTimout);
        me.timer.clearInterval(this.intervalPlayer);
        me.timer.clearTimeout(this.waitSpawn);
        //  End of user code  //
	},

    // Put user code here //
    ColEff : function(other){
        //console.log(other);
    },

    Hit(){
        if(this.onHit == false && this.onFly == false){
            //sound
            if(this.audioPlayHit){
                this.audioPlayHit = false;
                me.audio.play("sfx-kena turun", false,()=>{this.audioPlayHit = true}, 1);
            }
            //--
            this.onHit = true;
            this.setCurrentAnimation("broke");
            game.var.speed = HIT_SPEED;
            this.alphaDuration = 0;
            this.alphaInterval = me.timer.setInterval(()=>{
                if(this.alpha == 1){
                    this.alpha = 0;
                }
                else{
                    this.alpha = 1;
                }
                this.alphaDuration += 1;

                if(this.alphaDuration >= 40){
                    this.alpha = 1;
                    if(this.alphaInterval != undefined){
                        me.timer.clearInterval(this.alphaInterval);
                    }
                }
            }, 100);
        }
    },

    Heal : function(){
        //sound
        if(this.audioPlay){
            this.audioPlay = false;
            me.audio.play("sfx-kena naik", false,()=>{
                this.audioPlay = true;
            }, 1);
        }
        //--
        if(this.onHit){
            this.alpha = 1;
            if(this.alphaInterval != undefined){
                me.timer.clearInterval(this.alphaInterval);
            }

            this.setCurrentAnimation("idle");
            this.onHit = false;
            game.var.speed = NORMAL_SPEED;
        }
    },

    Fly : function(){
        if(this.onFly == false){
            this.container.waitEffect = true;
            this.Heal();
            this.onFly = true;
            this.setCurrentAnimation("happy");
            game.var.speed = FLY_SPEED;

            // this.alphaInterval = me.timer.setInterval(()=>{
            //     if(this.alpha == 1){
            //         this.alpha = 0;
            //     }
            //     else{
            //         this.alpha = 1;
            //     }
            // }, 200);

            let onceOut = true;
            this.flyTimout = me.timer.setTimeout(()=>{
                if(onceOut){
                    onceOut = false;
                    this.alpha = 1;
                    // me.timer.clearInterval(this.alphaInterval);
                    this.setCurrentAnimation("idle");
                    this.onHit = false;
                    this.onFly = false;
                    game.var.speed = NORMAL_SPEED;
                }
            }, FLY_DURATION);
            this.waitSpawn = me.timer.setTimeout(()=>{
                this.container.waitEffect = false;
                this.container.delaySpawnObs = 0;
                this.container.timeOtherObs = 0;
                this.container.delaySpawnCoin = 0;
            }, FLY_DURATION*3);

        }
    },
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();