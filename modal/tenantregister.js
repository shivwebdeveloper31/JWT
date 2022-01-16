const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantRegisterSchema = new Schema({

    fName: {
        type: String,
    },

    lName: {
        type: String,
    },

    occupation: {
        type: String,
    },

    email: {
        type: String,
    },

    gender: {
        type: String,
    },

    contact: {
        type: String,
    },
   
    city: {
        type: String,
    },

    state: {
        type: String,
    },

    pincode: {
        type: String,
    },

    password: {
        type: String,
    },

    avatar: {
        type: String,
    },

    emailVerify: {
        type: String,
    },

    contactVerify: {
        type: String,
    },

    identityType: {
        type: String,
    },

    identityNo: {
        type: String,
    },

    status: {
        type: String,
    }

});

module.exports = mongoose.model('TenantRegister', tenantRegisterSchema);