function addText(inputText, inputSize){
	text = new PIXI.extras.BitmapText(inputText, {font: inputSize + "px WLM Carton"});
	world.addChild(text);
	//text.pivot = 0.5;
	text.position.x = 100;
	text.position.y = 100;
	fontContainer.addChild(text);
	world.addChild(fontContainer);
}


