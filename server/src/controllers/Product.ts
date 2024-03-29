import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/Product";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, url, priceOnQuote, category, company, stock } = req.body;
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        url,
        priceOnQuote,
        category,
        company,
        stock
    });
    return product
        .save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ message: err.message }));
};



const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { category, productId } = req.params;
    try {
        const product = await Product.findOne({ _id: productId, category });
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    return Product.find()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json({ message: err.message }));
};


const getProductsByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category });
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'No products found for the specified category' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchQuery: string = req.query.q as string;
        const products = await Product.find({ $text: { $search: searchQuery, $caseSensitive: false } });
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'No products found for the specified search query' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRandomProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.aggregate([{ $sample: { size: 5 } }]);
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'No products found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export default { getProduct, getProducts, createProduct, getProductsByCategory, getRandomProducts, searchProducts };



