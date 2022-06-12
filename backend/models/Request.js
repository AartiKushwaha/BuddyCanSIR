const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    hospital_details: {
        type: Array,
    },
    address: {
        type: String,
        default: "",
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
    funded_doc: {
        type: String,
        default: "",
    },
    marksheet: {
        type: String,
        default: "",
    },
    attendance_record: {
        type: String,
        default: "",
    },
    education_fee_record: {
        type: String,
        default: "",
    },
    hospital_doc: {
        type: String,
        default: "",
    }
    },
    { timestamps : true }
);

module.exports = mongoose.model("Request", RequestSchema);