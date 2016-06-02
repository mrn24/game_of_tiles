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
  .add('./assets/Font/myfont.fnt')
  .add('Forest_json', './assets/Forest/img/forest.json')
  .add('ForestTileset', './assets/Forest/img/forest_tileset.png')
  .add('Desert_json', './assets/Desert/DesertMap.json')
  .add('DesertTileset', './assets/Desert/DesertTileset.png')
  .add('desertdungeon', './assets/Dungeon/desertdungeon.json')
  .add('desertdungeontileset', './assets/Dungeon/desertdungeon.png')
  .add('forestdungeon', './assets/Dungeon/forestdungeon.json')
  .add('forestdungeontileset', './assets/Dungeon/forestdungeon.png')
  .add('plainsdungeon', './assets/Dungeon/plainsdungeon.json')
  .add('plainsdungeontileset', './assets/Dungeon/plainsdungeon.png')
  .add('Plains_json', './assets/Plains/Map/Plains.json')
  .add('PlainsTileset', './assets/Plains/Tileset/Plains.png')
  .load(Ready);
function Ready() {
	LoadCharacter();
	stage.addChild(mapContainer);
	mainCharacter.width = 35.2;
	mapContainer.scale.x = mapScale;
	mapContainer.scale.y = mapScale;
	tu = new TileUtilities(PIXI);
	
	forest = tu.makeTiledWorld("Forest_json", "./assets/Forest/img/forest_tileset.png");
	desert = tu.makeTiledWorld("Desert_json", "./assets/Desert/DesertTileset.png");
	plains = tu.makeTiledWorld("Plains_json", "./assets/Plains/Tileset/Plains.png");
	forestDungeon = tu.makeTiledWorld("forestdungeon",'./assets/Dungeon/forestdungeon.png' );
	desertDungeon = tu.makeTiledWorld("desertdungeon",'./assets/Dungeon/desertdungeon.png' );
	plainsDungeon = tu.makeTiledWorld("plainsdungeon",'./assets/Dungeon/plainsdungeon.png' );
	
	forestContainer.addChild(forest);
	desertContainer.addChild(desert);
	plainsContainer.addChild(plains);
	forestDungeonContainer.addChild(forestDungeon);
	desertDungeonContainer.addChild(desertDungeon);
	plainsDungeonContainer.addChild(plainsDungeon);
	
	FirstForestLoader();
	FirstDesertLoader();
	FirstPlainsLoader()
	FirstDesertDungeonLoader();
	FirstForestDungeonLoader();
	FirstPlainsDungeonLoader();



	mapContainer.position.x = -20;
	mapContainer.position.y = -20;


	//textHandler("hello world", 12);
	controlling = setInterval(mainCharacterController, 30);
	//ForestLoader();
	PlainsLoader();
}

/*
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
*/
/////////////////////////////////////////////
// Display Game Screen                     //
/////////////////////////////////////////////
/*
function DisplayGameScreen() {
	//MapStuff();
	gameScreenContainer.visible = true;
	stage.addChild(gameScreenContainer);
}
*/

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
