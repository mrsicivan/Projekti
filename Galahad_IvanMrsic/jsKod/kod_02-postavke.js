//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "map-1":
      setupMap1();
      break;
    case "map-2":
      setupMap2();
      break;
    case "map-3":
      setupMap3();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */ //1
function setupMap1() {
  
  alert("Kretanje sa strelicama. Pucanje sa slovo S!");
  alert("Porazi sve zloceste orche koje je poslao zlocesti carobnjak Thanatos. Skupi sto vise coina i dodi do krajnih vrata. ");
 

  GAME.clearSprites();
  GAME.setActiveWorldMap("map-1");
  GAME.activeWorldMap.setCollisions("Platforma");

  let r = new Galahad(0, 0, GAME.getSpriteLayer("GlavniLik"));
  GAME.addSprite(r);
  Postavke.galahad = r;

  //neprijatelj1
  let d1 = new Protivnik(2, 5, GAME.getSpriteLayer("Neprijatelj1"));
  GAME.addSprite(d1);
  Postavke.nep1 = d1;
  Postavke.nep1.postavi();

  //neprijatelj2
  let d2 = new Protivnik(12, 1, GAME.getSpriteLayer("Neprijatelj2"));
  GAME.addSprite(d2);
  Postavke.nep2 = d2;
  Postavke.nep2.postavi();

  //neprijatelj 3
  let d3 = new Protivnik(22, 6, GAME.getSpriteLayer("Neprijatelj3"));
  GAME.addSprite(d3);
  Postavke.nep3 = d3;
  Postavke.nep3.postavi();

  //neprijatelj 4
  let d4 = new Protivnik(21, 13, GAME.getSpriteLayer("Neprijatelj4"));
  GAME.addSprite(d4);
  Postavke.nep4 = d4;
  Postavke.nep4.postavi();

  //projektil:
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("projektil"));
  GAME.addSprite(Postavke.projektil);

  //coins
  Postavke.coin1 = new Coin(GAME.getSpriteLayer("coin1"));
  GAME.addSprite(Postavke.coin1);

  Postavke.coin2 = new Coin(GAME.getSpriteLayer("coin2"));
  GAME.addSprite(Postavke.coin2);

  Postavke.coin3 = new Coin(GAME.getSpriteLayer("coin3"));
  GAME.addSprite(Postavke.coin3);

  Postavke.coin4 = new Coin(GAME.getSpriteLayer("coin4"));
  GAME.addSprite(Postavke.coin4);

  //vrata
  Postavke.vrata = new Item(GAME.getSpriteLayer("vrata"));
  Postavke.vrata.visible = true;
  
  GAME.addSprite(Postavke.vrata);



}

//LEVEL 2

function setupMap2() {

  alert("Ovo je opasnija razina. Tvoji su neprijatelji iskusni shamani orche. Moras biti oprezniji jer oduzimaju 2 zivota! Nastavi sve si blize princezi Lucanni :) ");
  
  GAME.clearSprites();
  GAME.setActiveWorldMap("map-2");
  
  GAME.activeWorldMap.setCollisions("Platforma");
//var 
  let r = new Galahad(0, 0, GAME.getSpriteLayer("GlavniLik"));
  GAME.addSprite(r);
  Postavke.galahad = r;

  //neprijatelj1
  let d1 = new Protivnik(2, 1, GAME.getSpriteLayer("Neprijatelj1"));
  GAME.addSprite(d1);
  Postavke.nep1 = d1;
  Postavke.nep1.postavi();

  //neprijatelj2
  let d2 = new Protivnik(3, 2, GAME.getSpriteLayer("Neprijatelj2"));
  GAME.addSprite(d2);
  Postavke.nep2 = d2;
  Postavke.nep2.postavi();

  //neprijatelj 3
  let d3 = new Protivnik(23, 8, GAME.getSpriteLayer("Neprijatelj3"));
  GAME.addSprite(d3);
  Postavke.nep3 = d3;
  Postavke.nep3.postavi();

  //neprijatelj 4
  let d4 = new Protivnik(5, 4, GAME.getSpriteLayer("Neprijatelj4"));
  GAME.addSprite(d4);
  Postavke.nep4 = d4;
  Postavke.nep4.postavi();

  //projektil:
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("projektil"));
  GAME.addSprite(Postavke.projektil);

  //coins
  Postavke.coin1 = new Coin(GAME.getSpriteLayer("coin1"));
  GAME.addSprite(Postavke.coin1);

  Postavke.coin2 = new Coin(GAME.getSpriteLayer("coin2"));
  GAME.addSprite(Postavke.coin2);

  Postavke.coin3 = new Coin(GAME.getSpriteLayer("coin3"));
  GAME.addSprite(Postavke.coin3);

  Postavke.coin4 = new Coin(GAME.getSpriteLayer("coin4"));
  GAME.addSprite(Postavke.coin4);

  Postavke.health1 = new Coin(GAME.getSpriteLayer("health1"));
  GAME.addSprite(Postavke.health1);

  //vrata
  Postavke.vrata = new Item(GAME.getSpriteLayer("vrata"));
  Postavke.vrata.visible = true;
  
  GAME.addSprite(Postavke.vrata);


}


function setupMap3() {
  alert("Zadnja razina! Pazi kad porazis sve neprijatelje doci ce zlogasni carobnjak Thanatos ");


  GAME.clearSprites();
  
  GAME.setActiveWorldMap("map-3");
  GAME.activeWorldMap.setCollisions("Platforma");

 
  let r = new Galahad(0, 0, GAME.getSpriteLayer("GlavniLik"));
  GAME.addSprite(r);
  Postavke.galahad = r;

  //neprijatelj1
  let d1 = new Protivnik(2, 0, GAME.getSpriteLayer("Neprijatelj1"));
  GAME.addSprite(d1);
  Postavke.nep1 = d1;
  Postavke.nep1.postavi();

  //neprijatelj2
  let d2 = new Protivnik(14, 1, GAME.getSpriteLayer("Neprijatelj2"));
  GAME.addSprite(d2);
  Postavke.nep2 = d2;
  Postavke.nep2.postavi();

  //neprijatelj 3
  let d3 = new Protivnik(22, 6, GAME.getSpriteLayer("Neprijatelj3"));
  GAME.addSprite(d3);
  Postavke.nep3 = d3;
  Postavke.nep3.postavi();

  //neprijatelj 4
  let d4 = new Protivnik(28, 1, GAME.getSpriteLayer("Neprijatelj4"));
  GAME.addSprite(d4);
  Postavke.nep4 = d4;
  Postavke.nep4.postavi();

  let d5 = new Protivnik(5, 5, GAME.getSpriteLayer("Neprijatelj5"));
  GAME.addSprite(d5);
  Postavke.nep5 = d5;
  Postavke.nep5.postavi();

 let d6 = new Protivnik(10,6, GAME.getSpriteLayer("Boss"));
  GAME.addSprite(d6);
  Postavke.boss = d6;
  Postavke.boss.postavi();
 
 


  //projektil:
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("projektil"));
  GAME.addSprite(Postavke.projektil);

  //coins
  Postavke.coin1 = new Coin(GAME.getSpriteLayer("coin1"));
  GAME.addSprite(Postavke.coin1);

  Postavke.coin2 = new Coin(GAME.getSpriteLayer("coin2"));
  GAME.addSprite(Postavke.coin2);

  Postavke.coin3 = new Coin(GAME.getSpriteLayer("coin3"));
  GAME.addSprite(Postavke.coin3);

  Postavke.coin4 = new Coin(GAME.getSpriteLayer("coin4"));
  GAME.addSprite(Postavke.coin4);

  Postavke.health1 = new Coin(GAME.getSpriteLayer("health1"));
  GAME.addSprite(Postavke.health1);

  

 
}
