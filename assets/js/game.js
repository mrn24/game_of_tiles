var gameport = document.getElementById("gameport");
var	renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0xFFFFFF});
gameport.appendChild(renderer.view);
document.addEventListener("keydown", checkKeyPressed, false);
document.addEventListener("keyup", checkKeyReleased, false);
/////////////////////////////////////////////
// Map Stuff                               //
/////////////////////////////////////////////
var world;
var tu;
var controlling;
var colliders;

PIXI.loader
  .add('map_json', './assets/Plains/Map/Map.json')
  .add('tileset', './assets/Plains/Tileset/16SpriteSet.png')
  .add('./assets/Font/myfont.fnt')
  .add('Forest_json', './assets/Forest/img/forest.json')
  .add('ForestTileset', './assets/Forest/img/forest_tileset.png')
  .load(Ready);
function Ready() {

	tu = new TileUtilities(PIXI);
	world = tu.makeTiledWorld("map_json", "./assets/Plains/Tileset/16SpriteSet.png");
  forest = tu.makeTiledWorld("Forest_json", "./assets/Forest/img/forest_tileset.png");
  FirstForestLoader();
  //desert =
  //first desert loader
  //dungeon =
  //first dungeon loader
	mapContainer.addChild(world);
	mapContainer.position.x = -20;
	mapContainer.position.y = -20;
	LoadCharacter();
	mapContainer.addChild(mainCharacter);

	//textHandler("hello world", 12);

	controlling = setInterval(mainCharacterController, 30);
	DisplayGameScreen();
}

function MapStuff() {
	stage.addChild(mapContainer);
	mapArray = world.getObject("Environment").data;
	colliders = world.getObject("Mountains").data;
	//Creating collisionsIndex array
	for (var i = 0; i < colliders.length; i++) {
		if (colliders[i] != 0) {
			collisionsIndex.push(i);
		}
	}
	mapContainer.scale.x = mapScale;
	mapContainer.scale.y = mapScale;
	LoadNPC(50, 2, "./assets/Characters/NPCs/Enemy", 4);
	mapContainer.addChild(npcArray[0]);
	NPCMovement();
}

/////////////////////////////////////////////
// Display Game Screen                     //
/////////////////////////////////////////////
function DisplayGameScreen() {
	MapStuff();
	gameScreenContainer.visible = true;
	stage.addChild(gameScreenContainer);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();

function Start() {
	//DisplayGameScreen();
}
Start();
