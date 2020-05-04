const { Schema } = require("mongoose");

const TestSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    difficulty_level: {
      type: String,
      require: true
    },
    attempts: {
      type: Number,
      default: 0
    },
    wpm: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: "Default Description for this content"
    },
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = TestSchema;
