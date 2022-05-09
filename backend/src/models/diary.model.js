const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diarySchema = new Schema(
  {
    
    date: { type: Date, require: true },
    work: { type: String, require: true },
    starttime: { type: String, require: true },
    endtime: { type: String, require: true },
    reviews: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
