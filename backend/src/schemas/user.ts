import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    valid: boolean;
}

const userSchema = new Schema<IUser>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "basic"},
    valid: {type: Boolean, default: false}
})

const UserModel = model<IUser>('User', userSchema);

export default UserModel;