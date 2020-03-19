module.exports = (sequelize, DataTypes) => {
  let post = sequelize.define('post', {
    text: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
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
