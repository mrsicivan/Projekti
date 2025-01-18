class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Galahad} */
  static galahad = null;

  /** @type {Coin} */
  static coin1;
  static coin2;
  static coin3;
  static coin4;
  static health1;

  /** @type {Protivnik} */
  static nep1;
  static nep2;
  static nep3;
  static nep4;
  static nep5;
  static boss;

  /** @type {Vrata} */
  static vrata;

  /** @type {Projektil} */
  static projektil;



  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}