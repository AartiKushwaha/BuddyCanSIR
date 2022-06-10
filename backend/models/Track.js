const mongoose = require("mongoose")

const TrackSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
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

module.exports = mongoose.model("Track", TrackSchema);