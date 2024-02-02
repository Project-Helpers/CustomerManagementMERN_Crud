import mongoose from "mongoose";

const Customer = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },
    
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});

export default mongoose.model('Customers', Customer);