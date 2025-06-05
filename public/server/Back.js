const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();
mongoose.connect(' mongodb+srv://kaza1286:aYwbWDmQRhDRxmE2@clusterfinalproject.rq6qxuh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFinalProject')


const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
     last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Optional: auto-convert email to lowercase
        trim: true,      // Optional: removes whitespace from ends
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
});

const User= mongoose.model('User',UserSchema)
