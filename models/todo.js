module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Todo;
};
