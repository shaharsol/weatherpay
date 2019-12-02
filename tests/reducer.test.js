const reducer = require('../reducer');

test('flatten forecasts', () => {
  const forecasts = [[{ city: 'London' }], [{ city: 'Jerusalem' }]];
  const result = reducer.flattenForecasts(forecasts);
  expect(result).toMatchObject([{ city: 'London' }, { city: 'Jerusalem' }]);
});
