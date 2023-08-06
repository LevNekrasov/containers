/* eslint-disable linebreak-style */
export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Данный персонаж уже есть в команде'],
      [2, 'Неверно передано имя персонажа'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknow error';
    }
    return this.errors.get(code);
  }
}
