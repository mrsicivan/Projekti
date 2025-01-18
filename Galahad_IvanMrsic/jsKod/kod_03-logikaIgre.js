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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "map-1")
    Map1();
  if (GAME.activeWorldMap.name == "map-2")
    Map2();
  if (GAME.activeWorldMap.name == "map-3")
    Map3();

  GAME.update();

};

function Map1() {
  if (SENSING.right.active) {
    Postavke.galahad.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.galahad.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.galahad.jump(60);
  }

  //kretanje nep1
  if (Postavke.nep1.dodir) {
    if (Postavke.nep1.x <= 130) {
      Postavke.nep1.moveRight();
    }
    else {
      Postavke.nep1.dodir = false;
    }
  }
  if (Postavke.nep1.dodir == false) {
    if (Postavke.nep1.x > 75) {
      Postavke.nep1.moveLeft();
    }
    else {
      Postavke.nep1.dodir = true;
    }
  } //kretanje drugog
  if (Postavke.nep2.dodir) {
    if (Postavke.nep2.x <= 14 * 32) {
      Postavke.nep2.moveRight();
    }
    else {
      Postavke.nep2.dodir = false;
    }
  }
  if (Postavke.nep2.dodir == false) {
    if (Postavke.nep2.x > 12 * 32) {
      Postavke.nep2.moveLeft();
    }
    else {
      Postavke.nep2.dodir = true;
    }
  }
  //kretanje treceg
  if (Postavke.nep3.dodir) {
    if (Postavke.nep3.x <= 24 * 32) {
      Postavke.nep3.moveRight();
    }
    else {
      Postavke.nep3.dodir = false;
    }
  }
  if (Postavke.nep3.dodir == false) {
    if (Postavke.nep3.x > 22 * 32) {
      Postavke.nep3.moveLeft();
    }
    else {
      Postavke.nep3.dodir = true;
    }
  }

  //kretanje cetvrtog
  if (Postavke.nep4.dodir) {
    if (Postavke.nep4.x <= 23 * 32) {
      Postavke.nep4.moveRight();
    }
    else {
      Postavke.nep4.dodir = false;
    }
  }
  if (Postavke.nep4.dodir == false) {
    if (Postavke.nep4.x > 21 * 32) {
      Postavke.nep4.moveLeft();
    }
    else {
      Postavke.nep4.dodir = true;
    }
  }

  //ako dotakne protivnika
  if (Postavke.galahad.touching(Postavke.nep1)) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }
  //ako dotakne drugog protivnika
  if (Postavke.galahad.touching(Postavke.nep2)) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako dotakne treceg protivnika
  if (Postavke.galahad.touching(Postavke.nep3)) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako takne cetvrtog protivnika
  if (Postavke.galahad.touching(Postavke.nep4)) {

    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }

  //pucanje
  if (SENSING.keyS.active) {
    Postavke.galahad.pucaj(Postavke.projektil);
  }

  //ubijanje
  if (Postavke.projektil.touching(Postavke.nep1)) {
    Postavke.nep1.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep2)) {
    Postavke.nep2.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep3)) {
    Postavke.nep3.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep4)) {
    Postavke.nep4.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }

  //coins
  if (Postavke.galahad.touching(Postavke.coin1)) {
    Postavke.galahad.collect(Postavke.coin1);
    Postavke.coin1.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin2)) {
    Postavke.galahad.collect(Postavke.coin2);
    Postavke.coin2.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin3)) {
    Postavke.galahad.collect(Postavke.coin3);
    Postavke.coin3.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin4)) {
    Postavke.galahad.collect(Postavke.coin4);
    Postavke.coin4.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }

  //vrata
  if (Postavke.galahad.touching(Postavke.vrata)) {
    Postavke.galahad.bodovi += 100;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
    alert("Čestitamo! Prešli ste level")
    GameSettings.output("Presli ste level");
    btnStop_click();
    setupMap2();
    btnStart_click();
    alert("Ako si spreman? Krenimo :)")

  }
  //ako dodirne dno
  if (Postavke.galahad.y == 19.5 * 32) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }

}

function Map2() {
  if (SENSING.right.active) {
    Postavke.galahad.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.galahad.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.galahad.jump(60);
  }

  //kretanje nep1
  if (Postavke.nep1.dodir) {
    if (Postavke.nep1.x <= 10 * 32) {
      Postavke.nep1.moveRight();
    }
    else {
      Postavke.nep1.dodir = false;
    }
  }
  if (Postavke.nep1.dodir == false) {
    if (Postavke.nep1.x > 3 * 32) {
      Postavke.nep1.moveLeft();
    }
    else {
      Postavke.nep1.dodir = true;
    }
  } //kretanje drugog
  if (Postavke.nep2.dodir) {
    if (Postavke.nep2.x <= 14 * 32) {
      Postavke.nep2.moveRight();
    }
    else {
      Postavke.nep2.dodir = false;
    }
  }
  if (Postavke.nep2.dodir == false) {
    if (Postavke.nep2.x > 12 * 32) {
      Postavke.nep2.moveLeft();
    }
    else {
      Postavke.nep2.dodir = true;
    }
  }
  //kretanje treceg
  if (Postavke.nep3.dodir) {
    if (Postavke.nep3.x <= 25 * 32) {
      Postavke.nep3.moveRight();
    }
    else {
      Postavke.nep3.dodir = false;
    }
  }
  if (Postavke.nep3.dodir == false) {
    if (Postavke.nep3.x > 23 * 32) {
      Postavke.nep3.moveLeft();
    }
    else {
      Postavke.nep3.dodir = true;
    }
  }

  //kretanje cetvrtog
  if (Postavke.nep4.dodir) {
    if (Postavke.nep4.x <= 23 * 32) {
      Postavke.nep4.moveRight();
    }
    else {
      Postavke.nep4.dodir = false;
    }
  }
  if (Postavke.nep4.dodir == false) {
    if (Postavke.nep4.x > 21 * 32) {
      Postavke.nep4.moveLeft();
    }
    else {
      Postavke.nep4.dodir = true;
    }
  }

  //ako dotakne protivnika
  if (Postavke.galahad.touching(Postavke.nep1)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }
  //ako dotakne drugog protivnika
  if (Postavke.galahad.touching(Postavke.nep2)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako dotakne treceg protivnika
  if (Postavke.galahad.touching(Postavke.nep3)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako takne cetvrtog protivnika
  if (Postavke.galahad.touching(Postavke.nep4)) {

    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }

  //pucanje
  if (SENSING.keyS.active) {
    Postavke.galahad.pucaj(Postavke.projektil);
  }

  //ubijanje
  if (Postavke.projektil.touching(Postavke.nep1)) {
    Postavke.nep1.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep2)) {
    Postavke.nep2.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep3)) {
    Postavke.nep3.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep4)) {
    Postavke.nep4.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }

  //coins
  if (Postavke.galahad.touching(Postavke.coin1)) {
    Postavke.galahad.collect(Postavke.coin1);
    Postavke.coin1.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin2)) {
    Postavke.galahad.collect(Postavke.coin2);
    Postavke.coin2.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin3)) {
    Postavke.galahad.collect(Postavke.coin3);
    Postavke.coin3.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin4)) {
    Postavke.galahad.collect(Postavke.coin4);
    Postavke.coin4.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }

  //health
  if (Postavke.galahad.touching(Postavke.health1)) {
    Postavke.galahad.zivoti += 2;
    Postavke.health1.visible = false;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
  }
  //ako dodirne dno
  if (Postavke.galahad.y == 19.5 * 32) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }


  //vrata
  if (Postavke.galahad.touching(Postavke.vrata)) {
    Postavke.galahad.bodovi += 100;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
    alert("Čestitamo! Prešli ste level")
    GameSettings.output("Presli ste level");

    btnStop_click();
    setupMap3();
    btnStart_click();
    alert("Ako si spreman? Krenimo :)")

  }

}


function Map3() {
  if (SENSING.right.active) {
    Postavke.galahad.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.galahad.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.galahad.jump(60);
  }

  //kretanje nep1
  if (Postavke.nep1.dodir) {
    if (Postavke.nep1.x <= 11 * 32) {
      Postavke.nep1.moveRight();
    }
    else {
      Postavke.nep1.dodir = false;
    }
  }
  if (Postavke.nep1.dodir == false) {
    if (Postavke.nep1.x >= 3 * 32) {
      Postavke.nep1.moveLeft();
    }
    else {
      Postavke.nep1.dodir = true;
    }
  } //kretanje drugog
  if (Postavke.nep2.dodir) {
    if (Postavke.nep2.x <= 20.5 * 32) {
      Postavke.nep2.moveRight();
    }
    else {
      Postavke.nep2.dodir = false;
    }
  }
  if (Postavke.nep2.dodir == false) {
    if (Postavke.nep2.x >= 14 * 32) {
      Postavke.nep2.moveLeft();
    }
    else {
      Postavke.nep2.dodir = true;
    }
  }
  //kretanje treceg
  if (Postavke.nep3.dodir) {
    if (Postavke.nep3.x <= 24 * 32) {
      Postavke.nep3.moveRight();
    }
    else {
      Postavke.nep3.dodir = false;
    }
  }
  if (Postavke.nep3.dodir == false) {
    if (Postavke.nep3.x >= 22 * 32) {
      Postavke.nep3.moveLeft();
    }
    else {
      Postavke.nep3.dodir = true;
    }
  }

  //kretanje cetvrtog
  if (Postavke.nep4.dodir) {
    if (Postavke.nep4.x <= 28.8 * 32) {
      Postavke.nep4.moveRight();
    }
    else {
      Postavke.nep4.dodir = false;
    }
  }
  if (Postavke.nep4.dodir == false) {
    if (Postavke.nep4.x >= 27 * 32) {
      Postavke.nep4.moveLeft();
    }
    else {
      Postavke.nep4.dodir = true;
    }
  }

  //kretanje petog
  if (Postavke.nep5.dodir) {
    if (Postavke.nep5.x <= 21 * 32) {
      Postavke.nep5.moveRight();
    }
    else {
      Postavke.nep5.dodir = false;
    }
  }
  if (Postavke.nep5.dodir == false) {
    if (Postavke.nep5.x >= 10 * 32) {
      Postavke.nep5.moveLeft();
    }
    else {
      Postavke.nep5.dodir = true;
    }
  }

  //kretanje boss
  if (Postavke.boss.dodir) {
    if (Postavke.boss.x <= 19 * 32) {
      Postavke.boss.moveRight();
    }
    else {
      Postavke.boss.dodir = false;
    }
  }
  if (Postavke.boss.dodir == false) {
    if (Postavke.boss.x >= 11 * 32) {
      Postavke.boss.moveLeft();
    }
    else {
      Postavke.boss.dodir = true;
    }
  }
  //ako dotakne protivnika
  if (Postavke.galahad.touching(Postavke.nep1)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }
  //ako dotakne drugog protivnika
  if (Postavke.galahad.touching(Postavke.nep2)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako dotakne treceg protivnika
  if (Postavke.galahad.touching(Postavke.nep3)) {
    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();

  }
  //ako takne cetvrtog protivnika
  if (Postavke.galahad.touching(Postavke.nep4)) {

    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }

  //ako takne petog protivnika
  if (Postavke.galahad.touching(Postavke.nep5)) {

    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }

  // ako takne BOSSa
  if (Postavke.galahad.touching(Postavke.boss)) {

    Postavke.galahad.zivoti -= 2;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }
  //pucanje
  if (SENSING.keyS.active) {
    Postavke.galahad.pucaj(Postavke.projektil);
  }

  //ubijanje
  if (Postavke.projektil.touching(Postavke.nep1)) {
    Postavke.nep1.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep2)) {
    Postavke.nep2.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep3)) {
    Postavke.nep3.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep4)) {
    Postavke.nep4.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.nep5)) {
    Postavke.nep5.visible = false;
    Postavke.projektil.stop();
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

  }

  if (Postavke.projektil.touching(Postavke.boss)) {
    Postavke.projektil.start(0,0);
    Postavke.projektil.stop();
    Postavke.boss.brojacUdaraca++;
    Postavke.galahad.bodovi += 20;
    GameSettings.output("score: " + Postavke.galahad.bodovi);

    GameSettings.output("Broj udaraca Thanastosa: " +Postavke.boss.brojacUdaraca);
    if (Postavke.boss.brojacUdaraca % 4 == 0) {
      Postavke.boss.visible = false;
     
      GameSettings.output("score: " + Postavke.galahad.bodovi);
      alert("BRAVO! Kralj Arthur ce biti ponosan. Spasio si princezu Luciannu. Zasluzujes vjecnu slavu. ");
      Postavke.projektil.stop();
      Postavke.galahad.bodovi += 1000;
      btnStop_click();

    }

  

  }


  //coins
  if (Postavke.galahad.touching(Postavke.coin1)) {
    Postavke.galahad.collect(Postavke.coin1);
    Postavke.coin1.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin2)) {
    Postavke.galahad.collect(Postavke.coin2);
    Postavke.coin2.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin3)) {
    Postavke.galahad.collect(Postavke.coin3);
    Postavke.coin3.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }
  if (Postavke.galahad.touching(Postavke.coin4)) {
    Postavke.galahad.collect(Postavke.coin4);
    Postavke.coin4.visible = false;
    GameSettings.output("score: " + Postavke.galahad.bodovi);
  }

  //health
  if (Postavke.galahad.touching(Postavke.health1)) {
    Postavke.galahad.zivoti += 2;
    Postavke.health1.visible = false;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
  }


  //ako dodirne dno
  if (Postavke.galahad.y >= 19.9* 32) {
    Postavke.galahad.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.galahad.zivoti);
    Postavke.galahad.zivot();
    Postavke.galahad.start();
  }
  if (Postavke.boss.y >= 18* 32) {
    Postavke.boss.postavi(4*32,0);
  }

}
