// Put user code here //
// Put user code here //
// Put user code here //
game.util = {};

game.util.spread = function(obj, clone, keys){
    for(var x in clone){
        if(keys.includes(x)){
            obj[x] = clone[x];
        }
    }
}

verify = function(obj, keys){
    keys.forEach(function(key){
        if(typeof obj[key] === "undefined"){
            throw `This object ${obj} must have variable ${key}`;
        }
    })
}

game.util.scale = function(obj, val){
    // obj.currentTransform.translate(obj.pos.x, obj.pos.y);
    obj.scale(val, val);
    // obj.currentTransform.translate(-obj.pos.x, -obj.pos.y);

    let bounds = obj.getBounds();
    obj.width = bounds.width;
    obj.height = bounds.height;
};

impose = function(obj, key, defaultVal){
    if(typeof obj[key] === "undefined"){
        if(typeof defaultVal === "undefined"){
            throw `This variable ${key} cannot be undefined inside ${obj}`;
        }
        obj[key] = defaultVal;
    }
}

game.util.spreadAll = function(obj, clone){
    for(var x in clone){
        obj[x] = clone[x];
    }
}

game.util.populateAtlasIndices = function(texture, names){
    let atlas = [], atlasIndices = {},
        framewidth = 0, frameheight = 0;

    for (let i = 0; i < names.length; i++) {
        //console.log(names[i]);
        let region = texture.getRegion(names[i]);
        if (region == null) {
            // throw an error
            throw new me.video.renderer.Texture.Error(
                    "Texture - region for " + names[i] + " not found");
        }

        atlas[i] = region;
        atlasIndices[names[i]] = i;
        framewidth = Math.max(region.width, framewidth);
        frameheight = Math.max(region.height, frameheight);
    }

    return {
        framewidth, frameheight,
        atlas, atlasIndices
    };
};

game.util.getFullMotionList = function(id, motions){
    let keys = [];
    motions.forEach((motion) => {
            if(typeof motion === "object"){
                let nm = game.util.getFullMotion(id, motion.name);

                keys.push({
                    name: nm,
                    delay: motion.delay,
                    count: motion.count
                });
                // console.log(nm);
            } else if(typeof motion === "string"){
                let nm = game.util.getFullMotion(id, motion);
                keys.push(nm);
                // console.log(nm);
            } else {
              throw `typeof motion ${motion} is not recognized.`;
            }
    });
    // console.log(keys);
    return keys;
};

game.util.getFullMotion = function(id, motion){
    return `${id}_${motion}`;
};

game.util.createImageNameList = function(name, count){
    if(count === 1){
        return [name];
    }else{
        let arr = [];
        for(let i = 0; i < count; i++){
            arr.push(name + "_" + i);
        }
        // console.log(arr);
        return arr;
    }
};

game.util.reloadLevel = function(){
    me.state.change(game.state.temp);
};

game.util.rotate = function(obj, sudutX, sudutY, posX, posY){
    obj.currentTransform.identity();
    obj.currentTransform.translate(obj.pos.x+posX, obj.pos.y+posY);
    let angle = -Math.atan2(sudutX, sudutY);
    obj.currentTransform.rotate(angle);
    obj.currentTransform.translate(-obj.pos.x, -obj.pos.y);
    obj.pos.set(posX, posY, obj.pos.z);
};

game.util.pauseGame = function(){
    me.sys.pauseOnBlur = true;
    me.sys.resumeOnFocus = false;
    me.state.pause(true);
};

game.util.resumeGame = function(){
    me.state.resume(true);
    me.sys.pauseOnBlur = true;
    me.sys.resumeOnFocus = true;
};

game.util.muteBgm = function(){
    me.audio.mute("bgm - gameplay");
    me.audio.mute("bgm - main menu");
};

game.util.muteSfx = function(){
    me.audio.mute("sfx-button");
    me.audio.mute("sfx-coin");
    me.audio.mute("sfx-kena naik");
    me.audio.mute("sfx-kena turun");
    me.audio.mute("sfx-mendarat");
};

game.util.unmuteBgm = function(){
    me.audio.unmute("bgm - gameplay");
    me.audio.unmute("bgm - main menu");
};

game.util.unmuteSfx = function(){
    me.audio.unmute("sfx-button");
    me.audio.unmute("sfx-coin");
    me.audio.unmute("sfx-kena naik");
    me.audio.unmute("sfx-kena turun");
    me.audio.unmute("sfx-mendarat");
};
//  End of user code  //

//  End of user code  //

//  End of user code  //
