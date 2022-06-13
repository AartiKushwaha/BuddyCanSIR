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
        default: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",   
    },
    phone_no:{
        type: String,
        unique: true,
        required: true
    },
    education: {
        type: String,
    },
    address: {
        type: String,
    }
    },
    { timestamps : true }
);

module.exports = mongoose.model("User", UserSchema);