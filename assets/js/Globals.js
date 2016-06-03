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
var mainCharacter = new PIXI.Container(),
	mainCharacterScale = 1.1,
	npcCharacterScale = 1.1,
	xOffset = 16,
	yOffset = 7,
	startX = xOffset + 32*4,
	startY = yOffset + 32*4,
	healthbar;
///////////////////////////////////////
// Globals for CharacterController() //
///////////////////////////////////////
var keyA = false,
	keyD = false,
	keyS = false,
	keyW = false,
	keyEnter = false,
	keySpace = false,
	moving = true, // set to false to stop character from moving
	facing;  // 1 up, 2 right, 3 down, 4 left

/////////////////////////
// Global Containers   //
/////////////////////////
var stage = new PIXI.Container(),
	gameScreenContainer = new PIXI.Container(),
	menuScreenContainer = new PIXI.Container(),
	creditsScreenContainer = new PIXI.Container(),
	instructionsScreenContainer = new PIXI.Container(),
	personalBlazerContainer = new PIXI.Container(),
	personalCurtisContainer = new PIXI.Container(),
	personalMattContainer = new PIXI.Container(),
	personalJohnContainer = new PIXI.Container(),
	mapContainer = new PIXI.Container(),
	fontContainer = new PIXI.Container(),
	forestContainer = new PIXI.Container(),
	desertContainer = new PIXI.Container(),
	plainsContainer = new PIXI.Container(),
	desertDungeonContainer = new PIXI.Container();
	forestDungeonContainer = new PIXI.Container();
	plainsDungeonContainer = new PIXI.Container();

/////////////////////////////
// Globals for LoadNPC()   //
/////////////////////////////
var npcArray = [],
	npcStartArray = [],
	npcRangeArray = [],
	npcMoving,
	npcSpeed = 4000;


/////////////////////////////
// Globals for LoadEnemy()   //
/////////////////////////////
var enemyArray = [],
	enemyStartArray = [],
	enemyRangeArray = [],
	enemyDyingArray = [],
	enemyAttackingArray = [];


/////////////////////////////
// Globals for Text   //
/////////////////////////////

var text;
var isText;
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
var desertDungeon;
var forestDungeon;
var plainsDungeon;

///////////////////////////////////////
// Globals for story progression    //
///////////////////////////////////////
//<<<<<<< HEAD
var hasSword = true;
	hasShield = true;
	hasPotato = true;
// =======
// var hasSword = false;
// 	hasShield = false;
// 	hasPotato = false;
// >>>>>>> origin
