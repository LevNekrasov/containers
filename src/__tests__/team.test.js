/* eslint-disable linebreak-style */
import Team from '../team';
import Daemon from '../daemon';
import Magician from '../magician';

test('adding to the team', () => {
  const oleg = new Daemon('Oleg', 'Daemon');
  const olga = new Magician('Olga', 'Magician');
  const team = new Team();
  team.add(oleg);
  team.add(olga);
  expect(team.members.size).toEqual(2);
});

test('adding error', () => {
  const oleg = new Daemon('Oleg', 'Daemon');
  const olga = new Magician('Olga', 'Magician');
  const team = new Team();
  team.add(oleg);
  team.add(olga);
  expect(() => {
    team.add(oleg);
  }).toThrow('Данный персонаж уже есть в команде');
});

test('adding multiple team members', () => {
  const oleg = new Daemon('Oleg', 'Daemon');
  const olga = new Magician('Olga', 'Magician');
  const team = new Team();
  team.addAll(oleg, olga);
  expect(team.members.size).toEqual(2);
});

test('converting to an array', () => {
  const oleg = new Daemon('Oleg', 'Daemon');
  const olga = new Magician('Olga', 'Magician');
  const team = new Team();
  team.addAll(oleg, olga);
  expect(team.toArray()).toEqual([
    [
      {
        name: 'Oleg',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
        type: 'Daemon',
      },
      {
        name: 'Olga',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
        type: 'Magician',
      },
    ],
  ]);
});
