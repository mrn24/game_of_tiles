var mainCharacter;
var mainCharacterScale = 1.1;
var startX = 16 + 32*4,
	startY = 7 + 32*4;
var mainCharacterScale = 1.1;

function LoadCharacter() {
	//console.log("Loading Character");
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Character/Character"+i+".png");
		textureArray.push(texture);
	}
	mainCharacter = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.anchor.x = 0.5;
	mainCharacter.anchor.y = 0.5;
	mainCharacter.position.x = startX;
	mainCharacter.position.y = startY;
	mainCharacter.scale.x = mainCharacterScale;
	mainCharacter.scale.y = mainCharacterScale;
	mainCharacter.play();
	mainCharacter.animationSpeed = 0.075;
	//return mainCharacter;
}
