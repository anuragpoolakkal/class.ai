import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        type: {
            type: String,
            enum: ["student", "teacher"], 
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;