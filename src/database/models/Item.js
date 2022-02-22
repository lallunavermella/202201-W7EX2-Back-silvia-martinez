const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Item = model("Item", ItemSchema, "items");

module.exports = Item;
