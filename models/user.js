module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.STRING(100),
      unique: true
    },
    password: {
      type: DataTypes.STRING(200)
    },
    profileDisplay: {
      type: DataTypes.STRING(500)
    }
  });

  user.associate = models => {
    user.hasMany(models.post);
    user.hasMany(models.comment);
    user.belongsToMany(models.user, {
      through: models.friend,
      as: 'requestTo',
      foreignKey: 'requestToId'
    });
    user.belongsToMany(models.user, {
      through: models.friend,
      as: 'requestFrom',
      foreignKey: 'requestFromId'
    });
  };

  return user;
};
