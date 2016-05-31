///////////////////////////
// Map Globals           //
///////////////////////////
var tileHeight = 32,
	tileWidth = 32,
	mapWidth = 15,
	mapHeight = 15,
	mapScale = 2,
	collisionsIndex = [],
	mapArray = [];
///////////////////////////
// Globals For Character() //
///////////////////////////
var mainCharacter,
	mainCharacterScale = 1.1,
	npcCharacterScale = 1.1,
	xOffset = 16,
	yOffset = 7,
	startX = xOffset + 32*4,
	startY = yOffset + 32*4;
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
	
/////////////////////////////
// Globals for LoadNPC()   //
/////////////////////////////
var npcArray = [],
	npcStartArray = [],
	npcRangeArray = [];