///////////////////////////
// Map Globals           //
///////////////////////////
var tileHeight = 32,
	tileWidth = 32,
	mapWidth = 15,
	mapHeight = 15,
	mapScale = 2;
///////////////////////////
// Globals For Character() //
///////////////////////////
var mainCharacter,
	mainCharacterScale = 1.1,
	startX = 16 + 32*4,
	startY = 7 + 32*4;
///////////////////////////////////////
// Globals for CharacterController() //
///////////////////////////////////////
var keyA = false,
	keyD = false,
	keyS = false,
	keyW = false;
	
/////////////////////////
// Global Containers   //
/////////////////////////
var stage = new PIXI.Container(),
	gameScreenContainer = new PIXI.Container(),
	mapContainer = new PIXI.Container();