'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       name:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       description: {
         type:Sequelize.STRING,
         allowNull: true,
       },
       poster: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       watched: {
         type: Sequelize.BOOLEAN,
         default: false
       },
       createdAt: Sequelize.DATE,
       modifiedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('movies');
  }
};
