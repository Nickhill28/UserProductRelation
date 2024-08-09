import { INTEGER, STRING } from 'sequelize';

import { define } from '../util/database';

const User = define('user', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: STRING,
  email: STRING
});

export default User;