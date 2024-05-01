var game = {
	var : {},

	object : {},

	level : {},

	state : {},

	util : {},

	collisionTypes : me.collision.types,

	onload : function () {
		// Initialize the video.
		if (!me.video.init(1080, 2340, {wrapper : "screen", scale : "auto", scaleMethod: "fit" , antiAlias: true, doubleBuffering: false, subpixel: false, transparent: false, powerPreference: 'default'})) {
			alert("Your browser does not support HTML5 canvas.");
			return;
		}
		me.audio.init("mp3,ogg");

		// set and load all resources.
		// (this will also automatically switch to the loading screen)
		me.loader.preload(game.resources, this.loaded.bind(this));
	},

	// Run on game resources loaded.
	loaded : function () {
		game.state.gameplayLevel = "gameplayLevel";
		me.state.set("gameplayLevel", new game.level.gameplayLevel());
		game.state.loadDataLevel = "loadDataLevel";
		me.state.set("loadDataLevel", new game.level.loadDataLevel());
		game.state.menuLevel = "menuLevel";
		me.state.set("menuLevel", new game.level.menuLevel());
		game.state.temp = "temp";
		me.state.set("temp", new game.level.temp());

		me.pool.register('Coin', game.object.Coin);
		me.pool.register('CoinSpawner', game.object.CoinSpawner);
		me.pool.register('gamePlayAwan', game.object.gamePlayAwan);
		me.pool.register('gameplayBackground', game.object.gameplayBackground);
		me.pool.register('gameplayContainer', game.object.gameplayContainer);
		me.pool.register('gameplayController', game.object.gameplayController);
		me.pool.register('gameplayPanelBtnContinue', game.object.gameplayPanelBtnContinue);
		me.pool.register('gameplayPanelBtnPlayAgain', game.object.gameplayPanelBtnPlayAgain);
		me.pool.register('gameplayPanelFrame', game.object.gameplayPanelFrame);
		me.pool.register('gameplayPanelOverlay', game.object.gameplayPanelOverlay);
		me.pool.register('gameplayPauseBtn', game.object.gameplayPauseBtn);
		me.pool.register('gameplayPauseExit', game.object.gameplayPauseExit);
		me.pool.register('gameplayPauseOverlay', game.object.gameplayPauseOverlay);
		me.pool.register('gamePlayPauseRestart', game.object.gamePlayPauseRestart);
		me.pool.register('gameplayScoreUI', game.object.gameplayScoreUI);
		me.pool.register('gamePlayTutorial', game.object.gamePlayTutorial);
		me.pool.register('gameplayUIpause', game.object.gameplayUIpause);
		me.pool.register('HealingPatch', game.object.HealingPatch);
		me.pool.register('panelAdsError', game.object.panelAdsError);
		me.pool.register('Player', game.object.Player);
		me.pool.register('Unicorn', game.object.Unicorn);
		me.pool.register('menuAnimate', game.object.menuAnimate);
		me.pool.register('menuBtnPlay', game.object.menuBtnPlay);
		me.pool.register('menuContainer', game.object.menuContainer);
		me.pool.register('menuSprite', game.object.menuSprite);
		me.pool.register('blackBird', game.object.blackBird);
		me.pool.register('brownBird', game.object.brownBird);
		me.pool.register('Kite', game.object.Kite);
		me.pool.register('ObstacleSpawner', game.object.ObstacleSpawner);
		me.pool.register('Toucan', game.object.Toucan);
		me.pool.register('blok', game.object.blok);
		me.pool.register('blokGameplay', game.object.blokGameplay);
		me.pool.register('Collider', game.object.Collider);
		me.pool.register('Landing', game.object.Landing);
		me.pool.register('LandingTarget', game.object.LandingTarget);
		me.pool.register('testCol', game.object.testCol);

		game.textureMap = new Map();
		game.textureMap.set("gameplay", new me.video.renderer.Texture([
			me.loader.getJSON("texture_gameplay_0"),
			me.loader.getJSON("texture_gameplay_1"),
			me.loader.getJSON("texture_gameplay_2"),
			me.loader.getJSON("texture_gameplay_3")
		], undefined, false));

		game.textureMap.set("menu", new me.video.renderer.Texture([
			me.loader.getJSON("texture_menu_0")
		], undefined, false));

		game.imageLocation = {
			"arialBlack": "font",
			"arialBlackColor": "font",
			"tcm": "font",
			"awan - 00": "gameplay",
			"awan - 01": "gameplay",
			"awan - 02": "gameplay",
			"CoinAnimate - 00": "gameplay",
			"CoinAnimate - 01": "gameplay",
			"CoinAnimate - 02": "gameplay",
			"CoinAnimate - 03": "gameplay",
			"CoinAnimate - 04": "gameplay",
			"CoinAnimate - 05": "gameplay",
			"CoinAnimate - 06": "gameplay",
			"CoinAnimate - 07": "gameplay",
			"CoinAnimate - 08": "gameplay",
			"CoinAnimate - 09": "gameplay",
			"CoinAnimate - 10": "gameplay",
			"CoinAnimate - 11": "gameplay",
			"CoinAnimate - 12": "gameplay",
			"CoinAnimate - 13": "gameplay",
			"CoinAnimate - 14": "gameplay",
			"CoinAnimate - 15": "gameplay",
			"gameplay_background": "gameplay",
			"gameplay_blok": "gameplay",
			"gameplay_landing": "gameplay",
			"gameplay_landingTarget": "gameplay",
			"gameplay_pause": "gameplay",
			"gameplay_pausedButton": "gameplay",
			"gameplay_pausedMainmenu": "gameplay",
			"gameplay_pausedRestart": "gameplay",
			"gameplay_score": "gameplay",
			"gameplay_tutorial 0": "gameplay",
			"gameplay_tutorial 1": "gameplay",
			"obstacles_blackBird - 00": "gameplay",
			"obstacles_blackBird - 01": "gameplay",
			"obstacles_blackBird - 02": "gameplay",
			"obstacles_blackBird - 03": "gameplay",
			"obstacles_blackBird - 04": "gameplay",
			"obstacles_blackBird - 05": "gameplay",
			"obstacles_blackBird - 06": "gameplay",
			"obstacles_blackBird - 07": "gameplay",
			"obstacles_blackBird - 08": "gameplay",
			"obstacles_blackBird - 09": "gameplay",
			"obstacles_blackBird - 10": "gameplay",
			"obstacles_blackBird - 11": "gameplay",
			"obstacles_blackBird - 12": "gameplay",
			"obstacles_blackBird - 13": "gameplay",
			"obstacles_blackBird - 14": "gameplay",
			"obstacles_brownBird - 00": "gameplay",
			"obstacles_brownBird - 01": "gameplay",
			"obstacles_brownBird - 02": "gameplay",
			"obstacles_brownBird - 03": "gameplay",
			"obstacles_brownBird - 04": "gameplay",
			"obstacles_brownBird - 05": "gameplay",
			"obstacles_brownBird - 06": "gameplay",
			"obstacles_brownBird - 07": "gameplay",
			"obstacles_brownBird - 08": "gameplay",
			"obstacles_brownBird - 09": "gameplay",
			"obstacles_brownBird - 10": "gameplay",
			"obstacles_brownBird - 11": "gameplay",
			"obstacles_brownBird - 12": "gameplay",
			"obstacles_brownBird - 13": "gameplay",
			"obstacles_brownBird - 14": "gameplay",
			"obstacles_heal": "gameplay",
			"obstacles_layangan": "gameplay",
			"obstacles_unicorn - 00": "gameplay",
			"obstacles_unicorn - 01": "gameplay",
			"obstacles_unicorn - 02": "gameplay",
			"obstacles_unicorn - 03": "gameplay",
			"obstacles_unicorn - 04": "gameplay",
			"obstacles_unicorn - 05": "gameplay",
			"obstacles_unicorn - 06": "gameplay",
			"obstacles_unicorn - 07": "gameplay",
			"obstacles_unicorn - 08": "gameplay",
			"obstacles_unicorn - 09": "gameplay",
			"obstacles_unicorn - 10": "gameplay",
			"obstacles_unicorn - 11": "gameplay",
			"obstacles_unicorn - 12": "gameplay",
			"obstacles_unicorn - 13": "gameplay",
			"obstacles_unicorn - 14": "gameplay",
			"obstacle_toucan - 00": "gameplay",
			"obstacle_toucan - 01": "gameplay",
			"obstacle_toucan - 02": "gameplay",
			"obstacle_toucan - 03": "gameplay",
			"obstacle_toucan - 04": "gameplay",
			"obstacle_toucan - 05": "gameplay",
			"obstacle_toucan - 06": "gameplay",
			"obstacle_toucan - 07": "gameplay",
			"obstacle_toucan - 08": "gameplay",
			"obstacle_toucan - 09": "gameplay",
			"obstacle_toucan - 10": "gameplay",
			"obstacle_toucan - 11": "gameplay",
			"obstacle_toucan - 12": "gameplay",
			"obstacle_toucan - 13": "gameplay",
			"obstacle_toucan - 14": "gameplay",
			"panel_adsError": "gameplay",
			"panel_BtnContinue": "gameplay",
			"panel_BtnPlayAgain": "gameplay",
			"panel_gameOverFrame": "gameplay",
			"panel_overlay": "gameplay",
			"playerParachute_Broke - 00": "gameplay",
			"playerParachute_Broke - 01": "gameplay",
			"playerParachute_Broke - 02": "gameplay",
			"playerParachute_Broke - 03": "gameplay",
			"playerParachute_Broke - 04": "gameplay",
			"playerParachute_Broke - 05": "gameplay",
			"playerParachute_Broke - 06": "gameplay",
			"playerParachute_Broke - 07": "gameplay",
			"playerParachute_Broke - 08": "gameplay",
			"playerParachute_Broke - 09": "gameplay",
			"playerParachute_Glide - 00": "gameplay",
			"playerParachute_Glide - 01": "gameplay",
			"playerParachute_Glide - 02": "gameplay",
			"playerParachute_Glide - 03": "gameplay",
			"playerParachute_Glide - 04": "gameplay",
			"playerParachute_Glide - 05": "gameplay",
			"playerParachute_Glide - 06": "gameplay",
			"playerParachute_Glide - 07": "gameplay",
			"playerParachute_Glide - 08": "gameplay",
			"playerParachute_Glide - 09": "gameplay",
			"playerParachute_Glide - 10": "gameplay",
			"playerParachute_Glide - 11": "gameplay",
			"playerParachute_Glide - 12": "gameplay",
			"playerParachute_Glide - 13": "gameplay",
			"playerParachute_Glide - 14": "gameplay",
			"playerParachute_Happy - 00": "gameplay",
			"playerParachute_Happy - 01": "gameplay",
			"playerParachute_Happy - 02": "gameplay",
			"playerParachute_Happy - 03": "gameplay",
			"playerParachute_Happy - 04": "gameplay",
			"playerParachute_Happy - 05": "gameplay",
			"playerParachute_Happy - 06": "gameplay",
			"playerParachute_Happy - 07": "gameplay",
			"playerParachute_Happy - 08": "gameplay",
			"playerParachute_Happy - 09": "gameplay",
			"playerParachute_Happy - 10": "gameplay",
			"playerParachute_Happy - 11": "gameplay",
			"playerParachute_Happy - 12": "gameplay",
			"playerParachute_Jump - 00": "gameplay",
			"playerParachute_Jump - 01": "gameplay",
			"playerParachute_Jump - 02": "gameplay",
			"playerParachute_Jump - 03": "gameplay",
			"playerParachute_Jump - 04": "gameplay",
			"playerParachute_Jump - 05": "gameplay",
			"playerParachute_Jump - 06": "gameplay",
			"playerParachute_Jump - 07": "gameplay",
			"playerParachute_Jump - 08": "gameplay",
			"playerParachute_Jump - 09": "gameplay",
			"playerParachute_Jump - 10": "gameplay",
			"playerParachute_Jump - 11": "gameplay",
			"playerParachute_Jump - 12": "gameplay",
			"playerParachute_Jump - 13": "gameplay",
			"playerParachute_Jump - 14": "gameplay",
			"playerParachute_Stand - 00": "gameplay",
			"playerParachute_Stand - 01": "gameplay",
			"playerParachute_Stand - 02": "gameplay",
			"playerParachute_Stand - 03": "gameplay",
			"playerParachute_Stand - 04": "gameplay",
			"playerParachute_Stand - 05": "gameplay",
			"playerParachute_Stand - 06": "gameplay",
			"playerParachute_Stand - 07": "gameplay",
			"blok_background": "menu",
			"menuObs_blackBird - 00": "menu",
			"menuObs_blackBird - 01": "menu",
			"menuObs_blackBird - 02": "menu",
			"menuObs_blackBird - 03": "menu",
			"menuObs_blackBird - 04": "menu",
			"menuObs_blackBird - 05": "menu",
			"menuObs_blackBird - 06": "menu",
			"menuObs_blackBird - 07": "menu",
			"menuObs_blackBird - 08": "menu",
			"menuObs_blackBird - 09": "menu",
			"menuObs_blackBird - 10": "menu",
			"menuObs_blackBird - 11": "menu",
			"menuObs_blackBird - 12": "menu",
			"menuObs_blackBird - 13": "menu",
			"menuObs_blackBird - 14": "menu",
			"menuObs_brownBird - 00": "menu",
			"menuObs_brownBird - 01": "menu",
			"menuObs_brownBird - 02": "menu",
			"menuObs_brownBird - 03": "menu",
			"menuObs_brownBird - 04": "menu",
			"menuObs_brownBird - 05": "menu",
			"menuObs_brownBird - 06": "menu",
			"menuObs_brownBird - 07": "menu",
			"menuObs_brownBird - 08": "menu",
			"menuObs_brownBird - 09": "menu",
			"menuObs_brownBird - 10": "menu",
			"menuObs_brownBird - 11": "menu",
			"menuObs_brownBird - 12": "menu",
			"menuObs_brownBird - 13": "menu",
			"menuObs_brownBird - 14": "menu",
			"menuObs_toucan - 00": "menu",
			"menuObs_toucan - 01": "menu",
			"menuObs_toucan - 02": "menu",
			"menuObs_toucan - 03": "menu",
			"menuObs_toucan - 04": "menu",
			"menuObs_toucan - 05": "menu",
			"menuObs_toucan - 06": "menu",
			"menuObs_toucan - 07": "menu",
			"menuObs_toucan - 08": "menu",
			"menuObs_toucan - 09": "menu",
			"menuObs_toucan - 10": "menu",
			"menuObs_toucan - 11": "menu",
			"menuObs_toucan - 12": "menu",
			"menuObs_toucan - 13": "menu",
			"menuObs_toucan - 14": "menu",
			"menuObs_unicorn - 00": "menu",
			"menuObs_unicorn - 01": "menu",
			"menuObs_unicorn - 02": "menu",
			"menuObs_unicorn - 03": "menu",
			"menuObs_unicorn - 04": "menu",
			"menuObs_unicorn - 05": "menu",
			"menuObs_unicorn - 06": "menu",
			"menuObs_unicorn - 07": "menu",
			"menuObs_unicorn - 08": "menu",
			"menuObs_unicorn - 09": "menu",
			"menuObs_unicorn - 10": "menu",
			"menuObs_unicorn - 11": "menu",
			"menuObs_unicorn - 12": "menu",
			"menuObs_unicorn - 13": "menu",
			"menuObs_unicorn - 14": "menu",
			"menu_background": "menu",
			"menu_BtnPlay": "menu",
			"menu_logo": "menu",
		};


		game.util.__populateAtlasIndices = function(animationKeys, settings){
			let tpAtlas = [], indices = {},
				width = 0, height = 0,
				texture = game.textureMap.get(settings.texture);
			for (let i = 0; i < animationKeys.length; i++) {
				let region = texture.getRegion(animationKeys[i]);
				if (region == null) {
					// throw an error
					throw new me.video.renderer.Texture.Error(
						"Texture - region for " + animationKeys[i] + " not found");
				}
				tpAtlas[i] = region;
				indices[animationKeys[i]] = i;
				width = Math.max(region.width, width);
				height = Math.max(region.height, height);
			}
			settings.framewidth = width;
			settings.frameheight = height;
			settings.atlas = tpAtlas;
			settings.atlasIndices = indices;
		}

		game.object.__spriteTP = me.Sprite.extend({
			init: function(x, y, settings = {}){
				settings.image = (settings.texture) ? game.textureMap.get(settings.texture) : settings.region;
				settings.anchorPoint = settings.anchorPoint || {
					x : 0.5,
					y: 0.5
				}
			this._super(me.Sprite, 'init', [x, y, settings]);

			this.alpha = 1;
			this.floating = false;
			this.alwaysUpdate = false;
			this.updateWhenPaused = false;
			this.isPersistent = false;

			this.imageName = settings.region;

			},
		});

		game.object.__collisionTP = me.Renderable.extend({
			init: function(x, y, settings = {}) {
				this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

				var shape = settings.shapes;
				if (typeof shape === "undefined") {
					shape = me.pool.pull("Polygon", 0, 0, [
						me.pool.pull("Vector2d", 0,          0),
						me.pool.pull("Vector2d", this.width, 0),
						me.pool.pull("Vector2d", this.width, this.height)
					]);
				}
				this.anchorPoint.set(0, 0);
				this.name = settings.name;
				this.type = settings.type;
				// for backward compatibility
				this.class = settings.class || settings.type;
				this.id = settings.id;
				this.body = new me.Body(this, shape);
				this.resize(this.body.getBounds().width, this.body.getBounds().height);

				this.body.collisionType = me.collision.types.WORLD_SHAPE;

				// configure the body accordingly
				if(settings.collisionType != undefined) {
					this.body.collisionType = (game.collisionTypes[settings.collisionType]) ? game.collisionTypes[settings.collisionType] : me.collision.types[settings.collisionType];
				}
				// mark collision shapes as static
				this.body.isStatic = true;
			}
		});

        // Put user code here //

        //  End of user code  //
		me.pool.register('spriteTP', game.object.__spriteTP);
		me.pool.register('collisionTP', game.object.__collisionTP);
		me.state.change("loadDataLevel");
	}
};
