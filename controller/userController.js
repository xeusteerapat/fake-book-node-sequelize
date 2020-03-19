exports.addFiveFromId = (req, res) => {
  res.send(`Result: ${Number(req.params.id) + 5}`);
};
