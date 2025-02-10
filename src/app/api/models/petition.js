import mongoose from "mongoose";

const petitionSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    location: { 
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    petition_type: { type: String, required: true },
    description: { type: String },
    image_url: { type: String },
    status: {type: String, enum: ['pending', 'approved', 'rejected', 'resolved'], default: 'pending'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    votes: { type: Number, default: 0 },
});

// Check if the model already exists, otherwise define it
const Petition = mongoose.models.Petition || mongoose.model("Petition", petitionSchema);

export default Petition;
