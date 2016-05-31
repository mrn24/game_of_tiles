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
	colliders = world.getObject("Environment").data;
	DisplayGameScreen();
}
var collisionsIndex = [];
function MapStuff() {
	stage.addChild(mapContainer);
	mapContainer.scale.x = mapScale;
	mapContainer.scale.y = mapScale;
	
	//Creating collisions array
	for (var i = 0; i < colliders.length; i++) {
		if (colliders[i] == 2) {
			collisionsIndex.push(i);
		}
	}
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