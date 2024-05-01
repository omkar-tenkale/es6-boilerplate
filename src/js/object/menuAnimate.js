(function(){
// Put user code here //

//  End of user code  //

game.object.menuAnimate = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "menu";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"menuObs_blackBird - 00","menuObs_blackBird - 01","menuObs_blackBird - 02",
			"menuObs_blackBird - 03","menuObs_blackBird - 04","menuObs_blackBird - 05",
			"menuObs_blackBird - 06","menuObs_blackBird - 07","menuObs_blackBird - 08",
			"menuObs_blackBird - 09","menuObs_blackBird - 10","menuObs_blackBird - 11",
			"menuObs_blackBird - 12","menuObs_blackBird - 13","menuObs_blackBird - 14",
			"menuObs_brownBird - 00","menuObs_brownBird - 01","menuObs_brownBird - 02",
			"menuObs_brownBird - 03","menuObs_brownBird - 04","menuObs_brownBird - 05",
			"menuObs_brownBird - 06","menuObs_brownBird - 07","menuObs_brownBird - 08",
			"menuObs_brownBird - 09","menuObs_brownBird - 10","menuObs_brownBird - 11",
			"menuObs_brownBird - 12","menuObs_brownBird - 13","menuObs_brownBird - 14",
			"menuObs_toucan - 00","menuObs_toucan - 01","menuObs_toucan - 02",
			"menuObs_toucan - 03","menuObs_toucan - 04","menuObs_toucan - 05",
			"menuObs_toucan - 06","menuObs_toucan - 07","menuObs_toucan - 08",
			"menuObs_toucan - 09","menuObs_toucan - 10","menuObs_toucan - 11",
			"menuObs_toucan - 12","menuObs_toucan - 13","menuObs_toucan - 14",
			"menuObs_unicorn - 00","menuObs_unicorn - 01","menuObs_unicorn - 02",
			"menuObs_unicorn - 03","menuObs_unicorn - 04","menuObs_unicorn - 05",
			"menuObs_unicorn - 06","menuObs_unicorn - 07","menuObs_unicorn - 08",
			"menuObs_unicorn - 09","menuObs_unicorn - 10","menuObs_unicorn - 11",
			"menuObs_unicorn - 12","menuObs_unicorn - 13","menuObs_unicorn - 14"
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('0', [{ name: "menuObs_blackBird - 00", delay: 35 },{ name: "menuObs_blackBird - 01", delay: 35 },{ name: "menuObs_blackBird - 02", delay: 35 },{ name: "menuObs_blackBird - 03", delay: 35 },{ name: "menuObs_blackBird - 04", delay: 35 },{ name: "menuObs_blackBird - 05", delay: 35 },{ name: "menuObs_blackBird - 06", delay: 35 },{ name: "menuObs_blackBird - 07", delay: 35 },{ name: "menuObs_blackBird - 08", delay: 35 },{ name: "menuObs_blackBird - 09", delay: 35 },{ name: "menuObs_blackBird - 10", delay: 35 },{ name: "menuObs_blackBird - 11", delay: 35 },{ name: "menuObs_blackBird - 12", delay: 35 },{ name: "menuObs_blackBird - 13", delay: 35 },{ name: "menuObs_blackBird - 14", delay: 35 }]);
		this.addAnimation('1', [{ name: "menuObs_brownBird - 00", delay: 35 },{ name: "menuObs_brownBird - 01", delay: 35 },{ name: "menuObs_brownBird - 02", delay: 35 },{ name: "menuObs_brownBird - 03", delay: 35 },{ name: "menuObs_brownBird - 04", delay: 35 },{ name: "menuObs_brownBird - 05", delay: 35 },{ name: "menuObs_brownBird - 06", delay: 35 },{ name: "menuObs_brownBird - 07", delay: 35 },{ name: "menuObs_brownBird - 08", delay: 35 },{ name: "menuObs_brownBird - 09", delay: 35 },{ name: "menuObs_brownBird - 10", delay: 35 },{ name: "menuObs_brownBird - 11", delay: 35 },{ name: "menuObs_brownBird - 12", delay: 35 },{ name: "menuObs_brownBird - 13", delay: 35 },{ name: "menuObs_brownBird - 14", delay: 35 }]);
		this.addAnimation('2', [{ name: "menuObs_toucan - 00", delay: 35 },{ name: "menuObs_toucan - 01", delay: 35 },{ name: "menuObs_toucan - 02", delay: 35 },{ name: "menuObs_toucan - 03", delay: 35 },{ name: "menuObs_toucan - 04", delay: 35 },{ name: "menuObs_toucan - 05", delay: 35 },{ name: "menuObs_toucan - 06", delay: 35 },{ name: "menuObs_toucan - 07", delay: 35 },{ name: "menuObs_toucan - 08", delay: 35 },{ name: "menuObs_toucan - 09", delay: 35 },{ name: "menuObs_toucan - 10", delay: 35 },{ name: "menuObs_toucan - 11", delay: 35 },{ name: "menuObs_toucan - 12", delay: 35 },{ name: "menuObs_toucan - 13", delay: 35 },{ name: "menuObs_toucan - 14", delay: 35 }]);
		this.addAnimation('3', [{ name: "menuObs_unicorn - 00", delay: 40 },{ name: "menuObs_unicorn - 01", delay: 40 },{ name: "menuObs_unicorn - 02", delay: 40 },{ name: "menuObs_unicorn - 03", delay: 40 },{ name: "menuObs_unicorn - 04", delay: 40 },{ name: "menuObs_unicorn - 05", delay: 40 },{ name: "menuObs_unicorn - 06", delay: 40 },{ name: "menuObs_unicorn - 07", delay: 40 },{ name: "menuObs_unicorn - 08", delay: 40 },{ name: "menuObs_unicorn - 09", delay: 40 },{ name: "menuObs_unicorn - 10", delay: 40 },{ name: "menuObs_unicorn - 11", delay: 40 },{ name: "menuObs_unicorn - 12", delay: 40 },{ name: "menuObs_unicorn - 13", delay: 40 },{ name: "menuObs_unicorn - 14", delay: 40 }]);
		this.setCurrentAnimation('3');
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
    tweenPlay: function(){
        let tween = new me.Tween(this.pos)
            .to({x:this.pos.x+this.container.moveValue, y:this.pos.y-500}, 1500)
            .easing(me.Tween.Easing.Linear.None)
            .onComplete(()=>{
                this.container.animatePlay = true;
            });

        tween.start();
    }
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();