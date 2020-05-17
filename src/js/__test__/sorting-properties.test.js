import orderByProps from '../sorting-properties';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('Порядок сортировки с учётом заданного порядка в массиве', () => {
  expect(orderByProps(obj, ['name', 'level'])).toStrictEqual([
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ]);
});

test('Порядок сортировки с параметром, которого нет в объекте ', () => {
  expect(orderByProps(obj, ['accuracy'])).toStrictEqual([
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ]);
});
