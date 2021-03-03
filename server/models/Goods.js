const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    radio: { type: String },
    image: { type: String },
    name: { type: String },
    description: { type: String },
    date: { type: String },
    address: { type: String },
    contact: { type: String },
    userId: { type: String },
    status: { type: String },
})

module.exports = mongoose.model('Goods', schema)