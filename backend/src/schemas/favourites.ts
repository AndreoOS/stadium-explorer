import { Document, Schema, model } from "mongoose";

interface IFavourite extends Document {
    user_id: Schema.Types.ObjectId;
    stadium_id: Schema.Types.ObjectId;
}

const favouriteSchema = new Schema<IFavourite>({
    user_id: {type: Schema.Types.ObjectId, required: true, ref: 'UserModel'},
    stadium_id: {type: Schema.Types.ObjectId, required: true, ref: 'StadiumModel'},
})

const FavouriteModel = model<IFavourite>('Favourites', favouriteSchema);

export default FavouriteModel;