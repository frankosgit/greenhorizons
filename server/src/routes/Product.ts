import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();
router.post('/create/', controller.createProduct);
router.get('/get/', controller.getProducts);
router.get('/get/:productId', controller.getProduct);

export default router;