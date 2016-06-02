function textHandler(inputText, inputSize){
  if(!isText){
    isText = true;
  	moving = false;
    talking = true;
  	TextBackgroundTex = new PIXI.Texture.fromImage("./assets/Font/TextBackground.png");
  	TextBackground = new PIXI.Sprite(TextBackgroundTex);
    //TextBackground.anchor.x = .5;
    //TextBackground.anchor.y = 1;
    TextBackground.scale.x = 2;
    TextBackground.scale.y = 2;
  	TextBackground.position.x = 16;
  	TextBackground.position.y = 400;
  	stage.addChild(TextBackground);
  	text = new PIXI.extras.BitmapText(inputText, {font: inputSize + "px myfont"});
  	text.position.x = 5;
  	text.position.y = 5;
  	TextBackground.addChild(text);
  	stage.addChild(fontContainer);
  	waitForUser();
  }
}

function waitForUser(){
	if(talking){
		setTimeout(function(){waitForUser();}, 100);
	}
	else{
		fontContainer.removeChild(text);
		stage.removeChild(TextBackground);
		moving = true;
		isText = false;
	}
}
