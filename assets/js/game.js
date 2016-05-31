var gameport = document.getElementById("gameport");
var width = 600,
	height = 600,
	renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: 0xFFFFFF});
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
  .load(Ready);
function Ready() {
	tu = new TileUtilities(PIXI);
	world = tu.makeTiledWorld("map_json", "./assets/Plains/Tileset/16SpriteSet.png");
	mapContainer.addChild(world);
	mapContainer.position.x = -20;
	mapContainer.position.y = -20;
	LoadCharacter();
	mapContainer.addChild(mainCharacter);
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