window.addEventListener("keydown", function (e) {
    e.preventDefault();
    if(e.keyCode == 13){
    	keyEnter = true;
    }

});

function textHandler(inputText, inputSize){
  if(!isText){
    isText = true;
  	moving = false;
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
	if(keyEnter == false){
		setTimeout(function(){waitForUser();}, 250);
	}
	else{
		fontContainer.removeChild(text);
		stage.removeChild(TextBackground);
		moving = true;
		keyEnter = false;
    isText = false;
	}
}
