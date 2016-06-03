mapContainer.visible = false;

var background = new PIXI.Texture.fromImage("./assets/img/GSBK.png");
var backgroundSprite = new PIXI.Sprite(background);

var title = new PIXI.Texture.fromImage("./assets/img/Title.png");
var titleSprite = new PIXI.Sprite(title);
titleSprite.position.y = 900;
titleSprite.position.x = 80;
createjs.Tween.get(titleSprite.position).to({x: 40, y: 60}, 3000, createjs.Ease.ElasticIn);

var swordtitle = new PIXI.Texture.fromImage("./assets/img/swordtitle.png");
var swordtitleSprite = new PIXI.Sprite(swordtitle);
swordtitleSprite.position.x = 1200;
swordtitleSprite.position.y = 220;

createjs.Tween.get(swordtitleSprite.position).to({x:-10, y: 220}, 3200, createjs.Ease.quartIn);


var StartGame = new PIXI.Text("Start Game", {font:"50px Castellar", fill:"white"});
StartGame.position.x = 1200;
StartGame.position.y = 350;
createjs.Tween.get(StartGame.position).to({x:125, y: 350}, 5000, createjs.Ease.ElasticIn);


var Instructions = new PIXI.Text("Instructions", {font:"50px Castellar", fill:"white"});
Instructions.x = -1200;
Instructions.y = 450;
createjs.Tween.get(Instructions.position).to({x:125, y: 425}, 5000, createjs.Ease.ElasticIn);


var Credits = new PIXI.Text("Credits", {font:"50px Castellar", fill:"white"});
Credits.x = 1200;
Credits.y = 500;
createjs.Tween.get(Credits.position).to({x:125, y: 500}, 5000, createjs.Ease.ElasticIn);


var swordbullet = new PIXI.Texture.fromImage("./assets/img/swordtitlebullet.png");
var swordbulletSprite = new PIXI.Sprite(swordbullet);
swordbulletSprite.visible = false;

StartGame.interactive = true;
StartGame.on('mousedown', onDownStartGame);
StartGame.on('mouseover', onHoverStartGame);
StartGame.on('mouseout', offHoverStartGame);

Instructions.interactive = true;
Instructions.on('mousedown', onDownInstructions);
Instructions.on('mouseover', onHoverInstructions);
Instructions.on('mouseout', offHoverInstructions);

Credits.interactive = true;
Credits.on('mousedown', onDownCredits);
Credits.on('mouseover', onHoverCredits);
Credits.on('mouseout', offHoverCredits);

function onDownStartGame(e){
  if(this == StartGame){
    stage.removeChild(menuScreenContainer);
    mapContainer.visible = true;

  }
}

function onDownInstructions(e){
  if (this == Instructions){
    stage.removeChild(menuScreenContainer);
    stage.addChild(instructionsScreenContainer);
  }

}

function onDownCredits(e){
  if (this == Credits){
    stage.removeChild(menuScreenContainer);
    stage.addChild(creditsScreenContainer);

  }

}

function onHoverStartGame(e){
	if(this == StartGame ){
		swordbulletSprite.visible = true;
    swordbulletSprite.position.x = 30;
    swordbulletSprite.position.y = 350;
	}
}

function offHoverStartGame(e){
	if(this == StartGame){
    swordbulletSprite.visible = false;

	}
}

function onHoverInstructions(e){
	if(this == Instructions ){
		swordbulletSprite.visible = true;
    swordbulletSprite.position.x = 30;
    swordbulletSprite.position.y = 425;
	}
}

function offHoverInstructions(e){
	if(this == Instructions){
    swordbulletSprite.visible = false

	}
}

function onHoverCredits(e){
	if(this == Credits ){
		swordbulletSprite.visible = true;
    swordbulletSprite.position.x = 30;
    swordbulletSprite.position.y = 500;
	}
}

function offHoverCredits(e){
	if(this == Credits){
    swordbulletSprite.visible = false

	}
}



menuScreenContainer.addChild(backgroundSprite);
menuScreenContainer.addChild(titleSprite);
menuScreenContainer.addChild(swordtitleSprite);
menuScreenContainer.addChild(swordbulletSprite);
menuScreenContainer.addChild(StartGame);
menuScreenContainer.addChild(Instructions);
menuScreenContainer.addChild(Credits);
stage.addChild(menuScreenContainer);



var InstructionsScreen = new PIXI.Texture.fromImage("./assets/img/InstructionsScreen.png")
var InstructionsScreenSprite = new PIXI.Sprite(InstructionsScreen);



var CreditsScreen = new PIXI.Texture.fromImage("./assets/img/CreditsScreen.png");
var CreditsScreenSprite = new PIXI.Sprite(CreditsScreen);

var swordback = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackSprite = new PIXI.Sprite(swordback);

swordbackSprite.interactive = true;
swordbackSprite.on('mousedown', onbackDown);


var swordbackb = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackbSprite = new PIXI.Sprite(swordbackb);

swordbackbSprite.interactive = true;
swordbackbSprite.on('mousedown', onbackDown);


var swordbackc = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackcSprite = new PIXI.Sprite(swordbackc);

swordbackcSprite.interactive = true;
swordbackcSprite.on('mousedown', onbackDown);


var swordbackm = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackmSprite = new PIXI.Sprite(swordbackm);

swordbackmSprite.interactive = true;
swordbackmSprite.on('mousedown', onbackDown);



var swordbackj = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackjSprite = new PIXI.Sprite(swordbackj);

swordbackjSprite.interactive = true;
swordbackjSprite.on('mousedown', onbackDown);

var swordbacki = new PIXI.Texture.fromImage("./assets/img/swordback.png");
var swordbackiSprite = new PIXI.Sprite(swordbacki);

swordbackiSprite.interactive = true;
swordbackiSprite.on('mousedown', onbackDown);



function onbackDown(e){
  if(this == swordbackSprite){
    stage.addChild(menuScreenContainer);
    stage.removeChild(creditsScreenContainer);
    stage.removeChild(personalBlazerContainer);
    stage.removeChild(personalCurtisContainer);
    stage.removeChild(personalMattContainer);
    stage.removeChild(personalJohnContainer);

  }
  if(this == swordbackbSprite){
    stage.addChild(creditsScreenContainer);
    stage.removeChild(personalBlazerContainer);

  }
  if(this == swordbackcSprite){
    stage.addChild(creditsScreenContainer);
    stage.removeChild(personalCurtisContainer);

  }
  if(this == swordbackmSprite){
    stage.addChild(creditsScreenContainer);
    stage.removeChild(personalMattContainer);

  }
  if(this == swordbackjSprite){
    stage.addChild(creditsScreenContainer);
    stage.removeChild(personalJohnContainer);

  }
  if(this == swordbackiSprite){
    stage.removeChild(instructionsScreenContainer);
    stage.addChild(menuScreenContainer);
  }
}





var blazerFace = new PIXI.Texture.fromImage("./assets/img/blazerCredits.png");
var blazerFaceSprite = new PIXI.Sprite(blazerFace);

var personalBlazer = new PIXI.Texture.fromImage("./assets/img/personalBlazerCredits.png");
var personalBlazerSprite = new PIXI.Sprite(personalBlazer);

blazerFaceSprite.interactive = true;
blazerFaceSprite.on('mousedown', onblazerDown);
blazerFaceSprite.position.x = 130;
blazerFaceSprite.position.y = 79;

function onblazerDown(e){
  if(this == blazerFaceSprite){
    stage.removeChild(creditsScreenContainer);
    HiBlazerSound.play();
    stage.addChild(personalBlazerContainer);
  }
}

var curtisFace = new PIXI.Texture.fromImage("./assets/img/curtisCredits.png");
var curtisFaceSprite = new PIXI.Sprite(curtisFace);


var personalCurtis = new PIXI.Texture.fromImage("./assets/img/personalCurtisCredits.png");
var personalCurtisSprite = new PIXI.Sprite(personalCurtis);

curtisFaceSprite.interactive = true;
curtisFaceSprite.on('mousedown', oncurtisDown);
curtisFaceSprite.position.x = 350;
curtisFaceSprite.position.y = 79;

function oncurtisDown(e){
  if(this == curtisFaceSprite){
    stage.removeChild(creditsScreenContainer);
    HiCurtisSound.play();
    stage.addChild(personalCurtisContainer);
  }
}


var mattFace = new PIXI.Texture.fromImage("./assets/img/mattCredits.png");
var mattFaceSprite = new PIXI.Sprite(mattFace);

var personalMatt = new PIXI.Texture.fromImage("./assets/img/personalMattCredits.png");
var personalMattSprite = new PIXI.Sprite(personalMatt);

mattFaceSprite.interactive = true;
mattFaceSprite.on('mousedown', onmattDown);
mattFaceSprite.position.x = 110;
mattFaceSprite.position.y = 400;

function onmattDown(e){
  if(this == mattFaceSprite){
    stage.removeChild(creditsScreenContainer);
    HiMattSound.play();
    stage.addChild(personalMattContainer);
  }
}


var johnFace = new PIXI.Texture.fromImage("./assets/img/johnCredits.png");
var johnFaceSprite = new PIXI.Sprite(johnFace);

var personalJohn = new PIXI.Texture.fromImage("./assets/img/personalJohnCredits.png");
var personalJohnSprite = new PIXI.Sprite(personalJohn);

johnFaceSprite.interactive = true;
johnFaceSprite.on('mousedown', onjohnDown);
johnFaceSprite.position.x = 352;
johnFaceSprite.position.y = 385;

function onjohnDown(e){
  if(this == johnFaceSprite){
    stage.removeChild(creditsScreenContainer);
    HiJohnSound.play();
    stage.addChild(personalJohnContainer);
  }
}







instructionsScreenContainer.addChild(InstructionsScreenSprite);
instructionsScreenContainer.addChild(swordbackiSprite);


creditsScreenContainer.addChild(CreditsScreenSprite);
creditsScreenContainer.addChild(blazerFaceSprite);
creditsScreenContainer.addChild(curtisFaceSprite);
creditsScreenContainer.addChild(mattFaceSprite);
creditsScreenContainer.addChild(johnFaceSprite);
creditsScreenContainer.addChild(swordbackSprite);

personalBlazerContainer.addChild(personalBlazerSprite);
personalBlazerContainer.addChild(swordbackbSprite);
personalCurtisContainer.addChild(personalCurtisSprite);
personalCurtisContainer.addChild(swordbackcSprite);
personalMattContainer.addChild(personalMattSprite);
personalMattContainer.addChild(swordbackmSprite);
personalJohnContainer.addChild(personalJohnSprite);
personalJohnContainer.addChild(swordbackjSprite);
