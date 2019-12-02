const model = require('../model');

test('checkColder on empty data', () => {
  const result = model.checkColder({}, '2019-01-01', 'London', 12.12);
  expect(result).toMatchObject({
    '2019-01-01': {
      coldest_city: {
        name: 'London',
      },
    },
  });
});

test('checkColder changes city', () => {
  const result = model.checkColder({
    '2019-01-01': {
      coldest_city: {
        name: 'Singapore',
        temp: 29.9,
      },
    },
  }, '2019-01-01', 'London', 12.12);
  expect(result).toMatchObject({
    '2019-01-01': {
      coldest_city: {
        name: 'London',
      },
    },
  });
});
