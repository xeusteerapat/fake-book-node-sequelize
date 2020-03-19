module.exports = (sequelize, DataTypes) => {
  let friend = sequelize.define('friend', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    requestStatus: {
      type: DataTypes.ENUM('requested', 'friended', 'blocked')
    }
  });
  return friend;
};
