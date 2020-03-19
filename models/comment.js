module.exports = (sequelize, DataTypes) => {
  let comment = sequelize.define('comment', {
    message: {
      type: DataTypes.STRING(200)
    }
  });

  comment.associat = models => {
    comment.belongsTo(models.user);
    comment.belongsTo(models.post);
  };

  return comment;
};
