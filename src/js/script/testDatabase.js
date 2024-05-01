// Put user code here //
var testDatabase = baseDatabase.extend({
    init: function(){

    },

    createDatabase: function(){
        let db = game.data.initUser;

        console.log("[TEST] database created.");
        // callback();
    },

    loadDatabase: function(){
        console.log("[TEST DATABASE] load database");
        let db = game.data.initUser;

        db.userData.name = "Melon";

        return new Promise((resolve, reject) => {
            resolve(db);
        });
    },

    saveToDatabase: function(obj, callback){
        // console.log("[TEST DATABASE] success save to database, this is the object that you save");
        console.log(obj);
    },

    getData: function(sequence){
        let res = game.user;
        // console.log(res);
        for(let i = 0; i < sequence.length; i++){
            if(res != null) res = res[sequence[i]];
        }
        return new Promise((resolve, reject) => {
            resolve(res);
        });
    },

    setData: function(sequence, value){
        // success set data
        let res = game.data.initUser;
        for(let i = 0; i < sequence.length; i++){
            let temp = res[sequence[i]];
            if(typeof temp === "undefined"){
                res = value;
                break;
            }
            res = temp;
        }
        return res;
    }
});
//  End of user code  //
