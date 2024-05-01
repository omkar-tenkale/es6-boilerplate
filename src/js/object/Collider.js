(function(){
// Put user code here //

//  End of user code  //

game.object.Collider = me.Renderable.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};



		this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.isKinematic = false;

		this.body = new me.Body(this);
		var bodyShapePos = {x: (this.anchorPoint.x * this.width), y:(this.anchorPoint.y * this.height)}
		this.body.addShape(me.pool.pull("me.Rect", 0 - bodyShapePos.y, 0 - bodyShapePos.y, this.width, this.height) );
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;

		this.var = {};

        // Put user code here //
        //let vars = ["container", "type", "mask", "colEff", "width", "height"];
        let vars = ["container", "colType", "colMask", "colEff", "width", "height"];
        verify(settings, vars);
	    game.util.spread(this, settings, vars);

		this.body.removeShapeAt(0);
		this.body.addShape(me.pool.pull("me.Rect",  0, 0, 20, 20));//this.width, this.height));
	    this.body.collisionType = this.colType;
		this.body.setCollisionMask(this.colMask);
		this.onCol = false;//*/
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Renderable, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        this.colEff(other);
        //  End of user code  //
		return isSolid;
	},

	draw : function(renderer, rect) {
		this._super(me.Renderable, 'draw', [renderer, rect]);
        // Put user code here //
        if(COL){
            renderer.setColor("white");
            renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        }
        //  End of user code  //
	},

	onActivateEvent : function() {
	},

	onDeactivateEvent : function() {

	},

    // Put user code here //

    //  End of user code  //
});

// Put user code here //

//  End of user code  //
})();