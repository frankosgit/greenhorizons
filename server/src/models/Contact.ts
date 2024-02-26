import mongoose, { Document, Schema } from "mongoose";

export interface IContact {
    name: String
    email: String
    message: String
}

export interface IContactModel extends IContact, Document { }

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
},
    {
        versionKey: false
    }
);

export default mongoose.model<IContactModel>('Contact', ContactSchema);