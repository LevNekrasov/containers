/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(data) {
    if (this.members.has(data)) {
      throw new Error('Данный персонаж уже есть в команде');
    }
    this.members.add(data);
  }

  addAll(...data) {
    data.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
