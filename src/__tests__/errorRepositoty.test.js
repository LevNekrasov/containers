/* eslint-disable linebreak-style */
import ErrorRepository from '../errorRepository';

test('error checking', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(1)).toBe('Данный персонаж уже есть в команде');
});

test('an error not found', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(3)).toBe('Unknow error');
});
