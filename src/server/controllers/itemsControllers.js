const Item = require("../../database/models/Item");

const listItems = async (req, res) => {
  const { userId } = req;
  const items = await Item.find({ user: userId });
  res.json({ items });
};

module.exports = listItems;
