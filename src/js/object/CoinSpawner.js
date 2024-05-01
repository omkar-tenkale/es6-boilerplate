(function(){

game.object.CoinSpawner = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};


		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
	    game.util.spread(this, settings, vars);

        this.index = 0; this.maxCoin = 3;
        this.coin = [];
        this.randX = 0;

        if(Math.floor(Math.random() * 2) == 0){
            this.randX = 1;
        }
        else{
            this.randX = -1;
        }

        for(let i = 0; i < this.maxCoin; i++){
            let coin = me.pool.pull("Coin", 0, 3000, {
                container : this
            });
            me.game.world.addChild(coin, 5);
            this.coin.push(coin);
        }

        this.Spawn();
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

	},

    // Put user code here //
    Spawn : function(){
        if(this.container.landing.pos.y > 405){
            this.coin[this.index].alpha = 1;
            this.coin[this.index].spawnNext = false;
            this.coin[this.index].pos.y = 370;
            if(this.randX < 0){
                this.randX = Math.random() * (90 - (20)) + 20;
            }
            else if(this.randX > 0){
                this.randX = (Math.random() * (90 - (15)) + 15) * -1;
            }
            this.coin[this.index].pos.x = this.pos.x + this.randX;

            this.index++;
            if(this.index == this.maxCoin)
                this.index = 0;
        }
    }
    //  End of user code  //
});

})();