const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    hospital_details: {
        type: Array,
    },
    address: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    status: {
        type: String,
        default: "",
    },
    },
    { timestamps : true }
);

module.exports = mongoose.model("Request", RequestSchema);