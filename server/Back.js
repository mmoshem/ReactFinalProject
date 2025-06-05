const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();
mongoose.connect('mongodb+srv://kaza1286:aYwbWDmQRhDRxmE2@clusterfinalproject.rq6qxuh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFinalProject')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
    
app.use(cors());
app.use(express.json());

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

app.post('/api/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Registration failed', details: err.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});