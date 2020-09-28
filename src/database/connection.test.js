import sequelize from './connection.js';

test('Test sequelize database connection connection', async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    expect(error).toMatch('error');
  }
});
