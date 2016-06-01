///////////////////////////
// Map Globals           //
///////////////////////////
var tileHeight = 32,
	tileWidth = 32,
	mapWidth = 15,
	mapHeight = 15,
	mapScale = 2,
	collisionsIndex = [],
	entrances = [],
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
	keyW = false,
	keyEnter = false,
	moving = true, // set to false to stop character from moving
	facing;  // 1 up, 2 right, 3 down, 4 left

/////////////////////////
// Global Containers   //
/////////////////////////
var stage = new PIXI.Container(),
	gameScreenContainer = new PIXI.Container(),
	mapContainer = new PIXI.Container(),
	fontContainer = new PIXI.Container(),
	forestContainer = new PIXI.Container(),
	desertContainer = new PIXI.Container(),
	plainsContainer = new PIXI.Container(),
	dungeonContainer = new PIXI.Container();

/////////////////////////////
// Globals for LoadNPC()   //
/////////////////////////////
var npcArray = [],
	npcStartArray = [],
	npcRangeArray = [];



/////////////////////////////
// Globals for Text   //
/////////////////////////////

var text;

var width = 600,
	height = 600;

///////////////////////////////////////
// Globals for map transitions      //
///////////////////////////////////////
var currentMap,
	previousMap;
var forest;
var desert;
var plains;
