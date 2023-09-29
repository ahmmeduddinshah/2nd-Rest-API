const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: { type: String, required: [true, "ID must be Required."] },
    username: {
      type: String,
      minlength: [5, "Minimum User Name Length must be 5"],
      maxlength: [25, "Maximum User Name Length must be 25"],
      trim: true,
      required: [true, "User Name must be Required."],
    },
    email: {
      type: String,
      minlength: [5, "Minimum E-mail Length must be 5"],
      maxlength: [25, "Maximum E-mail Length must be 25"],
      trim: true,
      required: [true, "E-mail must be Required."],
    },
    phone: {
      type: String,
      minlength: [5, "Minimum Phone No Length must be 5"],
      maxlength: [25, "Maximum Phone No Length must be 25"],
      trim: true,
      required: [true, "Phone No must be Required."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Men", userSchema);
