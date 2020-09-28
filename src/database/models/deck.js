import sequelize from '../connection.js';
import Sequelize from 'sequelize';

import CardModel from './card.js';

const DeckModel = sequelize.define('deck', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
  },
});

DeckModel.hasMany(CardModel);

export default DeckModel;
