import orderByProps from '../sorting-properties';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('checking the decimal number', () => {
  expect(orderByProps(obj, ['name', 'level'])).toStrictEqual([
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ]);
});

test('checking the decimal number', () => {
  expect(orderByProps(obj, ['accuracy'])).toStrictEqual([
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ]);
});
