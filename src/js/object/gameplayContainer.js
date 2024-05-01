(function(){

game.object.gameplayContainer = me.Container.extend({
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
        //Init
            this.pos.z = 1;
            this.score = game.var.lastScore;
            this.paused = false;
            this.showPanel = false;
            this.delayPauseButton = true;

            let background = me.pool.pull("gameplayBackground", 0, 0);
            this.addChild(background, this.pos.z+2);

            if(TutorPlay){
                this.tutorial1 = me.pool.pull("gamePlayTutorial", 0, 0,{container: this, first:1});
                this.addChild(this.tutorial1, 100);
                this.tutorial2 = me.pool.pull("gamePlayTutorial", 0, 0,{container: this, first:2});
                this.addChild(this.tutorial2, 110);
                this.tutorial2.setCurrentAnimation('2');
                this.tutorial1.tweenOpen();
            }else{
                this.playGame();
            }
        //--

        //Sound
            this.bgmPlay = false;
            me.audio.play("bgm - gameplay", false,()=>{this.bgmPlay = true}, 0.5);
            this.audioInterval = me.timer.setInterval(()=>{
                if(this.bgmPlay){
                    this.bgmPlay = false;
                    me.audio.play("bgm - gameplay", false,()=>{this.bgmPlay = true}, 0.5);
                }
            }, 100);
        //--
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
        me.audio.stop("bgm - gameplay");
        me.timer.clearInterval(this.audioInterval);
        me.timer.clearInterval(this.interval);
        //  End of user code  //
	},

    // Put user code here //
    playGame: function(){
        TutorPlay = false;
        game.var.speed = NORMAL_SPEED;

        //Gameplay UI
        let scoreUI = me.pool.pull("gameplayScoreUI", 250, -1070),
            pauseUI = me.pool.pull("gameplayUIpause", -440, -1070,{container:this});
        this.addChild(scoreUI, this.pos.z+3);
        this.addChild(pauseUI, this.pos.z+3);
        this.scoreUIText = game.font.para(me.game.viewport.width/2+67, me.game.viewport.height/2-1062, {
            size : 1.6,
            text : this.score,
            textAlign : 'left',
            textBaseAlign : 'middle'
        });
        this.addChild(this.scoreUIText, this.pos.z+4);
        //--

        //Panel Tampilin Skor pas kalah
        this.panel = [];
        this.panelButtonList = [];
        this.panelNumber = 0;
        let panelFrame = me.pool.pull("gameplayPanelFrame", 0, -45+5000),
            panelOverlay = me.pool.pull("gameplayPanelOverlay", 0, 5000);
        this.panelBtnRestart = me.pool.pull("gameplayPanelBtnPlayAgain", -250, 300+5000,{container:this});
        this.panelBtnContinue = me.pool.pull("gameplayPanelBtnContinue", 250, 310+5000,{container:this});
        this.panelAdsError = me.pool.pull("panelAdsError", 99999, 0);
        this.addChild(this.panelAdsError, this.pos.z + 51);
        this.panel.push(panelFrame);
        this.panel.push(this.panelBtnRestart);
        this.panel.push(this.panelBtnContinue);
        this.panelButtonList.push(this.panelBtnContinue);
        this.panelButtonList.push(this.panelBtnRestart);

        this.addChild(panelFrame, this.pos.z+50);
        this.addChild(this.panelBtnRestart, this.pos.z+51);
        this.addChild(this.panelBtnContinue, this.pos.z+51);
        this.addChild(panelOverlay, this.pos.z+49);

        this.highScoreText = game.font.paraColor(me.game.viewport.width/2+55, me.game.viewport.height/2-120+5000, {
            size : 2.5,
            text : "New High Score",
            textAlign : 'center',
            textBaseAlign : 'middle'
        });
        this.addChild(this.highScoreText, this.pos.z+51);
        this.scoreText = game.font.para(me.game.viewport.width/2+50, me.game.viewport.height/2-10+5000, {
            size : 2.3,
            text : this.score,
            textAlign : 'center',
            textBaseAlign : 'middle'
        });
        this.addChild(this.scoreText, this.pos.z+51);
        this.panel.push(this.scoreText);
        this.panel.push(this.highScoreText);
        this.panel.push(panelOverlay);
        // this.gameOverPanel();
        //--

        // Pause game
        this.pausePress = true;
        this.pauseObj = [];
        this.pauseButtonList = [];
        this.pauseNumber = 0;
        let pauseOverlay = me.pool.pull("gameplayPauseOverlay", 0, 0+5000);
        this.pauseButton = me.pool.pull("gameplayPauseBtn", 0, -378+5000,{container:this});
        this.pauseRestart = me.pool.pull("gamePlayPauseRestart", 0, 0+5000);
        this.pauseExit = me.pool.pull("gameplayPauseExit", 0, 338+5000);
        this.addChild(pauseOverlay, this.pos.z+40);
        this.addChild(this.pauseButton, this.pos.z+41);
        this.addChild(this.pauseRestart, this.pos.z+41);
        this.addChild(this.pauseExit, this.pos.z+41);
        this.pauseObj.push(this.pauseRestart);
        this.pauseObj.push(this.pauseExit);
        this.pauseObj.push(this.pauseButton);
        this.pauseObj.push(pauseOverlay);
        this.pauseButtonList.push(this.pauseButton);
        this.pauseButtonList.push(this.pauseRestart);
        this.pauseButtonList.push(this.pauseExit);
        // this.pausePanel();
        //--
        this.audioPlay = true;

        this.landing = me.pool.pull("Landing", 0, 2340*20);
        this.addChild(this.landing, this.pos.z+3);
        //this.landingTarget = me.pool.pull("LandingTarget", 0, 2340*20 + me.game.viewport.height/2+85)
        //this.addChild(this.landingTarget, this.pos.z+4);

        this.player = me.pool.pull("Player", 0, -1300,{container:this});
        this.addChild(this.player, this.pos.z+6);

        //init coin 1
            this.spawnCoin = true;
            this.delaySpawnCoin = 0;
        //--

        //init Obstacle 1
            this.waitEffect = false;
            this.delaySpawnObs = 0;
            this.timeOtherObs = 0;
            this.spawnObstacle = true;
            this.listObs = ["Toucan", "blackBird","brownBird","Kite"];
            this.side = ["left", "right"];
            this.xSpawn = [-550, 550];
            this.rndm = Math.floor(Math.random() * this.listObs.length);
            this.rndmSide = Math.floor(Math.random() * this.side.length);
        //--

        //controller
        this.controller = me.pool.pull("gameplayController", 0, 0,{container:this});
        this.addChild(this.controller, this.pos.z+1);
        //--

        //awan
            this.spawnAwan = true;
            this.randX = Math.floor(Math.random() * 600)-300;
            this.randX1 = Math.floor(Math.random() * 600)-300;
            this.randX2 = Math.floor(Math.random() * 600)-300;
            this.jenis = Math.floor(Math.random() * 3);
            this.jenis1 = Math.floor(Math.random() * 3);
            this.jenis2 = Math.floor(Math.random() * 3);
            this.awan = me.pool.pull("gamePlayAwan", 0+this.randX, 1170, {container : this});
            this.addChild(this.awan, this.pos.z+3);
            this.awan1 = me.pool.pull("gamePlayAwan", 0+this.randX1, 1170*2, {container : this});
            this.addChild(this.awan1, this.pos.z+3);
            this.awan2 = me.pool.pull("gamePlayAwan", 0+this.randX2, 1170*3, {container : this});
            this.addChild(this.awan2, this.pos.z+3);
            this.awan.setCurrentAnimation(this.jenis);
            this.awan1.setCurrentAnimation(this.jenis1);
            this.awan2.setCurrentAnimation(this.jenis2);
        //--

        this.allFuncInterval();
    },

    gameOverPanel: function(callback){
        if(this.showPanel){
            this.showPanel = false;
            let tween1 = new me.Tween(this.panel[1])
            .to({alpha:0}, 100)
            .onComplete(()=>{
                for(let i in this.panel){
                    let tween = new me.Tween(this.panel[i].pos)
                        .to({y:this.panel[i].pos.y+5000}, 600);
                    tween.start();
                }
                callback();
            });
            tween1.start();

            //reset
            this.score = 0;
            this.scoreUIText.setText(this.score);
            //--
        }else{
            //sound
            me.audio.play("sfx-mendarat", false,()=>{}, 1);
            //--
            this.showPanel = true;
            this.GetLandingScore();
            if(this.score <= dataHighScore){
                this.highScoreText.setText("Score");
            }else{
                this.highScoreText.setText("New High Score");
            }
            for(let i in this.panel){
                let tween = new me.Tween(this.panel[i].pos)
                    .to({y:this.panel[i].pos.y-5000}, 600)
                    .onComplete(()=>{
                        if(i >= this.panel.length-1){
                            let tween1 = new me.Tween(this.panel[this.panel.length-1])
                            .to({alpha:0.7}, 100);
                            tween1.start();
                        }
                    });
                tween.start();
            }
            dataHighScore = this.score;
            me.timer.setTimeout(()=>{
                this.scoreText.setText(this.score);
                console.log(dataHighScore);
            }, 500);
        }
    },

    pausePanel: function(){
        if(this.paused){
            this.paused = false;
            this.pausePress = true;
            let tween1 = new me.Tween(this.pauseObj[this.pauseObj.length-1])
                .to({alpha:0}, 100)
                .onComplete(()=>{
                    for(let i in this.pauseObj){
                        let tween = new me.Tween(this.pauseObj[i].pos)
                            .to({y:this.pauseObj[i].pos.y+5000}, 600);
                        tween.start();
                    }
                });
            tween1.start();
        }else{
            for(let i in this.pauseObj){
                let tween = new me.Tween(this.pauseObj[i].pos)
                    .to({y:this.pauseObj[i].pos.y-5000}, 600)
                    .onComplete(()=>{
                        if(i >= this.pauseObj.length-1){
                            let tween1 = new me.Tween(this.pauseObj[this.pauseObj.length-1])
                            .to({alpha:0.7}, 100);
                            tween1.start();
                        }
                        this.paused = true;
                    });
                tween.start();
            }
        }
    },

    GetLandingScore: function(){
        if(this.player.pos.x < (me.game.viewport.width / 2) + 310 &&
            this.player.pos.x > (me.game.viewport.width / 2) - 310){
                this.score += LANDING_BONUS;
                this.scoreUIText.setText(this.score);
        }
    },

    GetScore: function(){
        //sound
        if(this.audioPlay){
            this.audioPlay = false;
            me.audio.play("sfx-coin", false,()=>{this.audioPlay = true}, 1);
        }
        //--
        this.score += 10;
        this.scoreUIText.setText(this.score);
    },

    allFuncInterval: function(){
        this.interval = me.timer.setInterval(()=>{
            if(this.paused == false){
                //Landing Update Func
                    if(this.landing.pos.y > me.game.viewport.height / 2 - 110){
                        this.landing.body.vel.y = game.var.speed;
                        //this.landingTarget.body.vel.y = game.var.speed;
                    }else{
                        this.landing.body.vel.y = 0;
                        //this.landingTarget.body.vel.y = 0;
                        this.landing.pos.y = me.game.viewport.height / 2- 110;
                        this.player.body.vel.y = -game.var.speed;
                    }
                //--

                //Player Update Func
                    if(this.player.pos.y >= 785 && this.player.ready){
                        this.player.ready = false;
                        this.player.body.vel.y = 0;
                        this.player.getCoin = true;
                        if (!this.player.isCurrentAnimation("idle")){
                            this.player.setCurrentAnimation("idle");
                        }
                    }
                    if(!this.player.over && !this.paused){
                        if(this.player.isCurrentAnimation("idle") || this.player.isCurrentAnimation("broke") || this.player.isCurrentAnimation("happy")){
                            if (this.player.pos.x < this.player.startPosX && this.paused == false && this.showPanel == false){
                                // this.player.body.vel.x = -PLAYER_H_SPEED;
                                this.player.pos.x = Math.max(this.player.pos.x, this.player.limitLeft);

                            }else if (this.player.pos.x > this.player.startPosX &&this.paused == false && this.showPanel == false){
                                // this.player.body.vel.x = PLAYER_H_SPEED;
                                this.player.pos.x = Math.min(this.player.pos.x, this.player.limitRight);
                            }else{
                                this.player.body.vel.x = 0;
                            }
                        }
                        else{
                            this.player.body.vel.x = 0;
                        }

                        if(this.player.pos.y >= 1995){
                            game.var.speed = 0;
                            this.player.body.vel.y = 0;
                            this.player.body.vel.x = 0;
                            if (!this.player.isCurrentAnimation("stand")) {
                                this.player.setCurrentAnimation("stand");
                            }
                            this.player.pos.y = 2110;
                            this.player.over = true;
                            this.controller.dragEnd();
                            this.controller.dragging = false;
                            this.gameOverPanel();
                            adsOnceRun = true;
                            me.timer.clearInterval(this.interval);
                        }
                    }
                    else{
                        this.player.body.vel.x = 0;
                    }
                //--

                //Coin Update Func
                    // coin 1
                        this.delaySpawnCoin += 1;
                        if(this.spawnCoin && this.waitEffect == false){
                            this.spawnCoin = false;

                            this.randX = Math.floor(Math.random() * 900)-450;
                            this.coin = me.pool.pull("Coin", 0+this.randX, 1170, {container : this});
                            this.addChild(this.coin, this.pos.z+4);
                        }

                        if(this.landing.pos.y <= me.game.viewport.height){
                            this.spawnCoin = false;
                            this.coin.alpha = 0;
                            this.delaySpawnCoin = 0;
                        }else{
                            if(this.delaySpawnCoin >= 10){
                                this.delaySpawnCoin = 0;
                                this.spawnCoin = true;
                            }
                        }
                    //--
                //--

                //Obstacle Update Func
                    this.delaySpawnObs += 1;
                    this.timeOtherObs += 1;
                    if(this.spawnObstacle && this.waitEffect == false){
                        this.spawnObstacle = false;

                        if(this.player.onHit){
                            this.listObs = ["HealingPatch"];
                        }else{
                            this.listObs = ["Toucan", "blackBird","brownBird"];
                        }

                        if(this.timeOtherObs >= 20){
                            this.timeOtherObs = 0;
                            this.listObs = ["Unicorn", "Kite"];
                        }

                        this.rndm = Math.floor(Math.random() * this.listObs.length);
                        this.rndmSide = Math.floor(Math.random() * this.side.length);

                        this.obst = me.pool.pull(this.listObs[this.rndm] , 0+this.xSpawn[this.rndmSide], 1400,{
                            container:this,
                            side:(this.rndmSide == 0) ? "left" : "right"
                        });
                        this.addChild(this.obst, this.pos.z+5);
                    }

                    if(this.landing.pos.y <= me.game.viewport.height+me.game.viewport.height/2){
                        this.delaySpawnObs = 0;
                        this.spawnObstacle = false;
                    }else{
                        if(this.delaySpawnObs >= 10){
                            this.delaySpawnObs = 0;
                            this.spawnObstacle = true;
                        }
                    }
                //--
            }
        }, 100);
    },

    AdsError: function(){
        for(let i in this.panel){
            this.panel[i].pos.x = 9999;
        }

        this.panel[0].pos.x = me.game.viewport.width / 2;
        this.panel[5].pos.x = me.game.viewport.width / 2;
        this.panelAdsError.pos.x = me.game.viewport.width / 2;
        this.panelBtnRestart.pos.x = me.game.viewport.width / 2;
        this.panelBtnRestart.click = true;
    }
    //  End of user code  //
});

})();