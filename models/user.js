module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.STRING(100)
    },
    password: {
      type: DataTypes.STRING(100)
    },
    profileDisplay: {
      type: DataTypes.STRING
    }
  });

  user.associate = models => {
    user.hasMany(models.post);
    user.hasMany(models.comment);
    user.belongsToMany(models.user, {
      as: 'requestToId',
      through: models.friend,
      foreignKey: 'requestFromId'
    });
    user.belongsToMany(models.user, {
      as: 'requestFromId',
      through: models.friend,
      foreignKey: 'requestToId'
    });
  };

  return user;
};
