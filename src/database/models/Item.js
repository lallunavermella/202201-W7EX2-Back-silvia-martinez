const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  kind: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Kind = model("Item", ItemSchema, "items");

module.exports = Kind;
