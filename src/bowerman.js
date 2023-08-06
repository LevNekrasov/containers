/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
