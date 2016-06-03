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


  npcMoving = setInterval(NPCMovement, npcSpeed);


	mapContainer.position.x = -20;
	mapContainer.position.y = -20;


	//textHandler("hello world", 12);
	controlling = setInterval(mainCharacterController, 30);
	//ForestLoader();
	PlainsLoader();
}

function CharacterDead(){
  mapContainer.visible = false;
  
  var background = PIXI.Sprite.fromImage("./assets/Character/Dead.png");
  background.scale.x = 4.8;
  background.scale.y = 4.8;
  stage.addChild(background);
  textHandler("You have died a most unfortunate death\nThe king continued to rule your\nrightful kingdom.\nUncle Benjin also got Dementia.", 12);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
