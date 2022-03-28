const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
<<<<<<< HEAD
      port: 3306, 
=======
      port: 3306,
>>>>>>> 966a04ede7299b385d0a50eef38d2b4039c3a625
      logging: false
    }
  );
}


module.exports = sequelize;
