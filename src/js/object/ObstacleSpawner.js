(function(){
// Put user code here //

//  End of user code  //

game.object.ObstacleSpawner = me.Container.extend({
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

		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        let vars = ["container"];
        verify(settings, vars);
	    game.util.spread(this, settings, vars);

        let obstacle = ["Toucan", "Kite", "Unicorn", "HealingPatch"];
        this.list = {};
        this.index = {};
        this.startPosY = 100; this.lastObs = "";
        this.notUnicorn = 0; this.notPatch = 0;
        let posY = this.startPosY;
        let leftRight = "";
        for(let i in obstacle){
            this.list[obstacle[i]] = [];
            this.index[obstacle[i]] = 0;
            for(let j = 0; j < 5; j++){
                let obs = me.pool.pull(obstacle[i], 1000, 0, {
                    container : this
                });
                me.game.world.addChild(obs, 4);
                this.list[obstacle[i]].push(obs);
            }
        }

        let randLeft = Math.floor(Math.random() * 2);
        if(randLeft == 1 ){
            leftRight = "left";
        }
        else{
            leftRight = "right";
        }

        this.rightPosX = this.pos.x + 130;
        this.leftPosX = this.pos.x - 110;

        this.interval = me.timer.setInterval(()=>{
            if(this.container.landing.pos.y > 405 && !this.container.paused){
                this.obsList = [];
                if(this.container.player.onHit == false){
                    if(this.container.landing.pos.y < 3200){
                        let random = Math.random();
                        if(this.notUnicorn == 10 || (this.notUnicorn <= 8 && random < 0.3)){
                            this.notUnicorn = 0;
                            this.obsList = ["Unicorn"];
                        }
                        else{
                            this.notUnicorn ++;
                            this.obsList = ["Toucan", "Kite"];
                        }
                    }
                    else{
                        this.obsList = ["Toucan", "Kite"];
                    }
                }
                else if(this.container.player.onHit == true){
                    let random = Math.random();
                    if(random < 0.25 && (this.lastObs == "HealingPatch" || this.lastObs == "Unicorn")){
                        this.obsList = ["Toucan", "Kite"];
                    }
                    else{
                        if(this.container.landing.pos.y < 3200){
                            if(random < 0.85){
                                this.obsList = ["HealingPatch"];
                            }
                            else{
                                this.obsList = ["Unicorn"];
                            }
                        }
                        else{
                            this.obsList = ["HealingPatch"];
                        }
                    }

                }

                let rand = Math.floor(Math.random() * this.obsList.length);
                let name = this.obsList[rand];
                this.lastObs = name;

                if(leftRight == "right"){
                    this.list[name][this.index[name]].pos.x = this.rightPosX;
                    this.list[name][this.index[name]].speedX = -OBS_H_SPEED;
                    //this.list[name][this.index[name]].speedX = -2;
                    leftRight = "left";
                    if(name != "Kite")
                        this.list[name][this.index[name]].flipX(false);
                    else
                        this.list[name][this.index[name]].flipX(true);
                }
                else{
                    this.list[name][this.index[name]].pos.x = this.leftPosX;
                    this.list[name][this.index[name]].speedX = OBS_H_SPEED;
                    //this.list[name][this.index[name]].speedX = 2;
                    leftRight = "right";

                    if(name != "Kite")
                        this.list[name][this.index[name]].flipX(true);
                    else
                        this.list[name][this.index[name]].flipX(false);
                }
                this.list[name][this.index[name]].pos.y = posY;
                this.list[name][this.index[name]].alpha = 1;
                posY += 50;
                if(posY >= 400)
                    posY = this.startPosY;

                this.index[name] ++;
                if(this.index[name] == 5){
                    this.index[name] = 0;
                }
            }
        }, 1000);
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
        me.timer.clearInterval(this.interval);
        //  End of user code  //
	},

    // Put user code here //
    RemoveObs : function(){
        for(let i in this.list){
            for(let j in this.list[i]){
                if(this.list[i][j].pos.x < this.leftPosX + 15 ||
                    this.list[i][j].pos.x > this.rightPosX - 15){
                            this.list[i][j].pos.y = - 3000;
                }
            }
        }
    }
    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();