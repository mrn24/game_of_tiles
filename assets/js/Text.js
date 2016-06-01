window.addEventListener("keydown", function (e) {
    e.preventDefault();
    if(e.keyCode == 13){
    	keyEnter = true;
    }

});

function textHandler(inputText, inputSize){
	moving = false;
	TextBackgroundTex = new PIXI.Texture.fromImage("./assets/Font/TextBackground.png");
	TextBackground = new PIXI.Sprite(TextBackgroundTex);
	TextBackground.position.x = 20;
	TextBackground.position.y = 200;
	world.addChild(TextBackground);
	text = new PIXI.extras.BitmapText(inputText, {font: inputSize + "px myfont"});
	text.position.x = 30;
	text.position.y = 210;
	fontContainer.addChild(text);
	world.addChild(fontContainer);
	waitForUser();
}

function waitForUser(){
	if(keyEnter == false){
		setTimeout(function(){waitForUser();}, 250);
	}
	else{
		fontContainer.removeChild(text);
		world.removeChild(TextBackground);
		moving = true;
		keyEnter = false;
	}
}




