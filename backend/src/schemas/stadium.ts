import { Document, Schema, model } from "mongoose";

interface IStadium extends Document {
    title: string;
    body: string;
    location: string;
}

const stadiumSchema = new Schema<IStadium>({
    title: {type: String, required: true},
    body: {type: String, required: true},
    location: {type: String, required: true},
})

const StadiumModel = model<IStadium>('User', stadiumSchema);

export default StadiumModel;