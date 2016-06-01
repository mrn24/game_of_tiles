window.addEventListener("keydown", function (e) {
    e.preventDefault();
    if(e.keyCode == 13){
    	keyEnter = true;
    	console.log('enter');
    }

});

function textHandler(inputText, inputSize){
	moving = false;
	text = new PIXI.extras.BitmapText(inputText, {font: inputSize + "px WLM Carton"});
	world.addChild(text);
	text.position.x = 100;
	text.position.y = 100;
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
		moving = true;
		keyEnter = false;
	}
}




