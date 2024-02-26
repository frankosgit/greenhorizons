import mongoose, { Document, Schema } from "mongoose";

export interface IProduct {
    title: String
    description: String
    url: String
    priceOnQuote: Boolean
    category: String
    company: String
    stock: Boolean
}

export interface IProductModel extends IProduct, Document { }

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    priceOnQuote: { type: Boolean, required: true },
    category: { type: String, required: true },
    company: { type: String, required: true },
    stock: { type: Boolean, required: true }
},
    {
        versionKey: false
    }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);