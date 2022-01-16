const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({

    roomType: {
        type: String,
    },

    roomAddress: {
        type: String,
    },

    price: {
        type: String,
    },

    capacity: {
        type: String,
    },

    bathroomAttach: {
        type: String,
    },

    area: {
        type: String,
    },
   
    kitchenAvailable: {
        type: String,
    },

    waterBillInclude: {
        type: String,
    },

    electricBillInclude: {
        type: String,
    },

    remark: {
        type: String,
    },

    imageId: {
        type: [String],
    },

    uploadDate: {
        type: String,
    },

    uploadTime: {
        type: String,
    },

    status: {
        type: String,
    },
    city: {
        type: String,
    }

});

module.exports = mongoose.model('Room', roomSchema);