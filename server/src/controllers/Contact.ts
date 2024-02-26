import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact";

const createContact = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, message } = req.body;
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        message
    });
    return contact
        .save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ message: err.message }));
};


export default { createContact };



