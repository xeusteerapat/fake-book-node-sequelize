module.exports = (sequelize, DataTypes) => {
  let post = sequelize.define('post', {
    text: {
      type: DataTypes.STRING(500)
    },
    picture: {
      type: DataTypes.STRING(500)
    },
    timeStamp: {
      type: DataTypes.DATE
    }
  });

  post.associate = models => {
    post.belongsTo(models.user);
    post.hasMany(models.comment);
  };

  return post;
};
