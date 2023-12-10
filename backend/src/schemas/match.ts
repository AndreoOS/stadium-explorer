import { Document, Schema, model } from "mongoose";

interface IMatch extends Document {
    title: string;
    body: string;
    winningTeam: string;
    losingTeam: string;
    stadium_id: Schema.Types.ObjectId;
}

const matchSchema = new Schema<IMatch>({
    title: {type: String, required: true},
    body: {type: String, required: true},
    winningTeam: {type: String, required: true},
    losingTeam: {type: String, required: true},
    stadium_id: {type: Schema.Types.ObjectId, required: true, ref: 'StadiumModel'},
})

const MatchModel = model<IMatch>('Match', matchSchema);

export default MatchModel;