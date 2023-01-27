module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Addresses', 'CnpjInstalation', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
