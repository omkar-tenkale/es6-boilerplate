(function(){

game.object.menuContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};


		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.pos.z = 1;
        let background = me.pool.pull("menuSprite", 0, 0,{container:this});
            logo = me.pool.pull("menuSprite", 0, -1570,{container:this});
            logo.setCurrentAnimation('logo');
        let blok = me.pool.pull("blok", 0, 0);
        this.addChild(blok, this.pos.z + 5);

        this.buttonPlay = me.pool.pull("menuBtnPlay", 0, 400);
        this.animateSprite = me.pool.pull("menuAnimate", -700, 200,{container:this});

        this.addChild(background, this.pos.z+1);
        this.addChild(logo, this.pos.z+3);
        logo.tweenPlay();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        me.timer.clearInterval(this.intervalAnimasi);
        //  End of user code  //
	},

    // Put user code here //
    playSpawn: function(){
        this.addChild(this.buttonPlay, this.pos.z+3);
        this.addChild(this.animateSprite, this.pos.z+2);
        this.buttonPlay.tweenPlay();

        //animasi obstacle terbang
            this.animatePlay = true;
            this.fromLeft = 0;
            this.moveValue;
            let randomSide = Math.floor(Math.random() * 2),
                randY = Math.floor(Math.random() * 1000)-500,
                anim = Math.floor(Math.random() * 4);
            if(this.fromLeft == randomSide){
                this.animateSprite.setCurrentAnimation(anim);
                this.animateSprite.pos.set(me.game.viewport.width/2-700, me.game.viewport.height/2+randY, this.pos.z+2);
                this.moveValue = 1400;
                this.animateSprite.flipX(true);
                this.animateSprite.tweenPlay();
            }else{
                this.animateSprite.setCurrentAnimation(anim);
                this.animateSprite.pos.set(me.game.viewport.width/2+700, me.game.viewport.height/2+randY, this.pos.z+2);
                this.moveValue = -1400;
                this.animateSprite.flipX(false);
                this.animateSprite.tweenPlay();
            }
            this.intervalAnimasi = me.timer.setInterval(()=>{
                if(this.animatePlay){
                    this.animatePlay = false;
                        randomSide = Math.floor(Math.random() * 2),
                        randY = Math.floor(Math.random() * 1000)-500,
                        anim = Math.floor(Math.random() * 4);
                    if(this.fromLeft == randomSide){
                        this.animateSprite.setCurrentAnimation(anim);
                        this.animateSprite.pos.set(me.game.viewport.width/2-700, me.game.viewport.height/2+randY, this.pos.z+2);
                        this.moveValue = 1400;
                        this.animateSprite.flipX(true);
                        this.animateSprite.tweenPlay();
                    }else{
                        this.animateSprite.setCurrentAnimation(anim);
                        this.animateSprite.pos.set(me.game.viewport.width/2+700, me.game.viewport.height/2+randY, this.pos.z+2);
                        this.moveValue = -1400;
                        this.animateSprite.flipX(false);
                        this.animateSprite.tweenPlay();
                    }
                }
            },2000);
        //--
    }
    //  End of user code  //
});

})();