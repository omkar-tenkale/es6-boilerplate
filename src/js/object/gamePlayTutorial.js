(function(){

game.object.gamePlayTutorial = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "gameplay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gameplay_tutorial 0","gameplay_tutorial 1"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.container = settings.container;
        this.first = settings.first;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 0;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1', [{ name: "gameplay_tutorial 0", delay: 1 }]);
		this.addAnimation('2', [{ name: "gameplay_tutorial 1", delay: 1 }]);
		this.setCurrentAnimation('1');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        this.haveClick = false;
        this.once = true;
        //  End of user code  //
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
	},

	onClick : function(pointer) {
        // Put user code here //
        if(this.haveClick){
            this.haveClick = false;
            if(this.first == 1){
                this.tweenClose1();
            }
            if(this.first == 2){
                this.tweenClose2();
            }
            return false;
        }
        //  End of user code  //
	},

    // Put user code here //
    tweenOpen: function(){
        let tween = new me.Tween(this)
            .to({alpha:1}, 800)
            .onComplete(()=>{
                this.haveClick = true;
            });
        tween.start();
    },
    tweenClose1:function(){
        let tween = new me.Tween(this)
            .to({alpha:0}, 1000);
        tween.start();

        let tween2 = new me.Tween(this.pos)
            .to({y:this.pos.y+700}, 500)
            .repeat(1)
            .yoyo(true)
            .onComplete(()=>{
                this.container.tutorial2.haveClick = true;
                this.container.removeChild(this);
            });
        tween2.start();

        let tween3 = new me.Tween(this.container.tutorial2)
            .to({alpha:1}, 800);
        tween3.start();
    },
    tweenClose2:function(){
        let tween = new me.Tween(this)
            .to({alpha:0}, 500)
            .onComplete(()=>{
                this.container.removeChild(this);
                if(this.once){
                    this.once = false;
                    this.container.playGame();
                }
            });
        tween.start();
    },
    //  End of user code  //
});

})();