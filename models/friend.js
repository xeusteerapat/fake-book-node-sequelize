module.exports = (sequelize, DataTypes) => {
  let friend = sequelize.define('friend', {
    requestStatus: {
      type: DataTypes.STRING
    }
  });

  return friend;
};
