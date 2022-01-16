const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({


    contact: {
        type: String,
    },

    
});

module.exports = mongoose.model('admin', adminSchema);