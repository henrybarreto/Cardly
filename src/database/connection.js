import Sequelize from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

sequelize.sync({force: true});
export default sequelize;
