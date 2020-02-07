module.exports = function(sequelize, DataTypes) {
    var Profession = sequelize.define("Profession", {
      // Giving the Author model a name of type STRING
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      role: DataTypes.STRING,
      business: DataTypes.STRING,
      email: DataTypes.STRING,

    });
  
    Profession.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Profession.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Profession;
  };

  