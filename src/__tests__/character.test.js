/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import Zombie from '../zombie';

test('Zombie', () => {
  expect(() => {
    const result = new Zombie('O', 'Zombie');
  }).toThrow('Неверно передано имя персонажа');
});

test('Zombie', () => {
  expect(() => {
    const result = new Zombie('Oleg', 'Human');
  }).toThrow('Неверно передан тип персонажа');
});
