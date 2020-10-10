/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export default class Character {
  constructor(name) {
    this.name = name
    this._attack = 100
    this._stoned = false
    this.distance = 1
  }

  set attack(value) {
    this._attack = value
  }

  get attack() {
    const dMultiplier = 1 - ((this.distance - 1) / 10)
    const sMultiplier = this.stoned ? Math.log2(this.distance) * 5 : 0
    return dMultiplier >= 0 ? Math.ceil(this._attack * dMultiplier - sMultiplier) : 0
  }

  set stoned(value) {
    this._stoned = value
  }

  get stoned() {
    return this._stoned
  }
}

export class Magician extends Character {
  constructor(name, _attack, _stoned, distance) {
    super(name, _stoned, distance)
    this.type = 'Magician'
    this._attack = 75
  }
}

export class Daemon extends Character {
  constructor(name, _attack, _stoned, distance) {
    super(name, _stoned, distance)
    this.type = 'Daemon'
    this._attack = 60
  }
}
