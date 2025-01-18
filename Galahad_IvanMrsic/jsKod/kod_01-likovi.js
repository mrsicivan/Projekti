//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase

class Galahad extends Sprite {
  constructor(x, y, layer) {
    super(x, y, 30, 30);
    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [31, 32, 33, 34, 35, 36],
      "down": [1],
      "walk-down": [1],
      "left": [5],
      "walk-left": [61, 62, 63, 64, 65, 66]
    };

    this.layer = layer;
    this.visible = true; //tek kad se postavi layer
    this.bodovi = 0;
    this.zivoti = 5;
    this.direction = 90;
  


  }//konstruktor
  updatePosition() {
    super.updatePosition(2, 0.8);

    if (this.y >= 18 * 32) {
      this.start();
      this.zivoti--;
      this.zivot();
    }

  }
//primjer preopterecenja
  // jump() {
  //   if (!this.jumping) {
  //     this.jumping = true;
  //     this.velocity_y -= 30;
  //   }
  // }

  jump(h) {
    if (!this.jumping) {
      this.jumping = true;
      this.velocity_y -= h;
    }
  }
  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.5;
  }
  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.5;
  }
  collect(c) {
    this.bodovi += c.value;
    c.start();
    console.log(this.bodovi);
  }

  start() {
    this.x = 0;
    this.y = 0;
  }
  zivot() {
    if (this.zivoti <= 0) {

      alert("Rezultat:" + this.bodovi + " Life:" + this.zivoti + " Izgubili ste!");
      btnGame.dispatch(gameoverEvent);
   //   btnStop_click();
     

    }
  }
  pucaj(p) {
    if (this.direction == 90) {

      p.put = 0;
      p.x = this.x;
      p.y = this.y;
      p.visible = true;
      p.move = true;

    }
    else if (this.direction == 270) {

      p.put = 0;
      p.x = this.x;
      p.y = this.y;
      p.visible = true;
      p.moveL = true;
    }
  }
}

class Collectable extends Item {
  constructor(layer) {
    super(layer);
    this.visible = true;
  }
  updatePosition() {

  }
  getType() {
    return this.constructor.name;
  }
}

class Coin extends Collectable {
  constructor(layer) {
    super(layer);
    this.value = 10;

  }
  start(a, b) {
    this.x = a;
    this.y = b;
  }

}
class Projektil extends Item {
  constructor(layer) {
    super(layer);

    this.visible = false;
    this.put = 0;
    this.move = true;
    this.moveL = true;
    this.width = 30;
    this.height = 20;
    this.broji = 0;
  }
  start(a, b) {
    this.x = a;
    this.y = b;

  }
  get put() {
    return this._put;
  }
  set put(v) {
    if (v >= 600) {
      this._put = 0;
      this.move = false;
      this.moveL = false;
      this.visible = false;
    }
    else {
      this._put = v;
    }
  }
  updatePosition() {

    if (this.move) {
      this.x += 20;
      this.put += 20;
    }
    if (this.moveL) {
      this.x -= 20;
      this.put += 20;
    }
  }
  stop() {
    this.visible = false;
    this.move = false;
    this.broji++;
    if (this.broji % 5 == 0) {

      alert("O ne! Carobnjak je koristio caroliju da se ponovno ozivi!");
      Postavke.boss.visible=true;
    }
   
  }

}

class Vrata extends Collectable {
  constructor(layer) {
    super(layer);
    this.visible = false;
  }
  start(a, b) {
    this.visible = true;
    this.x = a;
    this.y = b;
  }
}

class Protivnik extends Sprite {
  constructor(x, y, layer) {
    super(x, y, 32, 32);
    this.frame_sets = {
      "up": [121],
      "walk-up": [121],
      "right": [121],
      "walk-right": [151, 152, 153, 154, 155, 156],
      "down": [121],
      "walk-down": [121],
      "left": [125],
      "walk-left": [181, 182, 183, 184, 185, 186]
    };

    this.layer = layer;
    this.visible = true;
    this.zivoti = 1;

    this.pozicije = [[x, y]];
    this.t = 0;
    this.dodir = true;
    this.brojacUdaraca=0;

  }
  postavi() {
    let poz = this.pozicije[this.t];
    this.x = poz[0] * 32;
    this.y = poz[1] * 32;

    this.t++;
    if (this.t >= this.pozicije.length) {
      this.t = 0;
    }
    this.visible = true;
  }
  moveRight() {
    this.direction = 90;
    this.velocity_x += 1;
  }
  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1;
  }
  jump(h = 60) {
    if (!this.jumping) {
      this.jumping = true;
      this.velocity_y -= h;
    }
  }
  start() {
    this.x = 0;
    this.y = 0;
  }
}  
  