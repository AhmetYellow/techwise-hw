import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    quranPagesRead: { type: Number, default: 0 },
    bookPagesRead: { type: Number, default: 0 },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const User = mongoose.model("User", userSchema);

export default User;