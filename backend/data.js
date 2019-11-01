const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this is the database structure
const DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    { timestamps: true }
);

// export the new Schema so we could mofify it using NOde.js
module.exports = mongoose.model("Data", DataSchema)