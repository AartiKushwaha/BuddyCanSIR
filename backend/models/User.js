const UserSchema = new mongoose.Schema({
    uid:{
        type: Number,
        required: true,
        unique: true,
    },
    name:{
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
    phone:{
        type: Number,
        unique: true,
    },
    status:{
        type: String,
        default: "",
    },
    document:{
        type: Array,
        required: false
    }
    },
    { timestamps : true }
);