const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String
})
module.exports = mongoose.model("Student", personSchema);