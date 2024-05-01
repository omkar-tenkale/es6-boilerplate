// Put user code here //
var DataController = me.Object.extend({
    init: function(){
        this.dbController = new testDatabase();
    },

    initDatabase: async function(callback){
      game.user = await this.dbController.loadDatabase();

    //   console.log(game.user);

      let isDatabaseEmpty = !game.user || game.user.userData.name === "";
      if(isDatabaseEmpty) {
            // console.log("returned db is empty");
            this.createDatabase();
            if(typeof callback !== "undefined") callback(false);
            return;
      }

        if(typeof callback !== 'undefined') callback(true);
    },

    createDatabase: function(){
        this.dbController.createDatabase();
    },
    setScore: function(value){
        this.dbController.setData(["userData", "score"], value);
        game.user.userData.score = value;
    },
    setHighScore: async function(value, callback){
        let oldValue = await this.dbController.getData(["userData", "highScore"]);
        if(value > oldValue){
            this.dbController.setData(["userData", "highScore"], value);
            game.user.userData.highScore = value;
        }
        callback();
    },
});
//  End of user code  //
