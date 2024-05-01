// Put user code here //
game.font = {};

game.font.para = function(x, y, settings = {}){
    settings.font = "arialBlack";
    return me.pool.pull("me.BitmapText", x, y, settings);
};
game.font.paraColor = function(x, y, settings = {}){
    settings.font = "arialBlackColor";
    return me.pool.pull("me.BitmapText", x, y, settings);
};
game.font.paraTCM = function(x, y, settings = {}){
    settings.font = "tcm";
    return me.pool.pull("me.BitmapText", x, y, settings);
};
//  End of user code  //
