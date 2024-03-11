import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    sexuality: {
        type: String
    },
})

export const Form = mongoose.model('Form', formSchema)