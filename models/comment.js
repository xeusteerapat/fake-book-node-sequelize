module.exports = (sequelize, DataTypes) => {
  let comment = sequelize.define('comment', {
    message: {
      type: DataTypes.STRING
    }
  });

  comment.associat = models => {
    comment.belongsTo(models.user);
    comment.belongsTo(models.post);
  };

  return comment;
};
