const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profile:{
        type: String,
        default: "",   
    },
    phone_no:{
        type: Number,
        unique: true,
        required: true
    },
    education: {
        type: String,
    },
    address: {
        type: String,
    },
    hospital_details: {
        type: Array,
    }
    },
    { timestamps : true }
);

module.exports = mongoose.model("User", UserSchema);