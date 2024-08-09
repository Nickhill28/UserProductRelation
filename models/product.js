import { INTEGER, STRING, DOUBLE } from 'sequelize';

import { define } from '../util/database';

const Product = define('product', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: STRING,
  price: {
    type: DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false
  }
});

export default Product;

