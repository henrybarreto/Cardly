import sequelize from '../connection.js';
import Sequelize from 'sequelize';

const CardModel = sequelize.define('card', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    allowNull: false,
  },
  front: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  back: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  difficult: {
    type: Sequelize.NUMBER,
    defaultValue: 0,
  },
});

export default CardModel;
