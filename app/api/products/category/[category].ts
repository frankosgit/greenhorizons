import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category } = req.query;

    try {
        const response = await fetch(`http://localhost:9090/products/get/category/${category}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
