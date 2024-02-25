import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();
router.post('/create/', controller.createProduct);
router.get('/get/', controller.getProducts);
router.get('/get/:productId', controller.getProduct);
router.get('/get/category/:category', controller.getProductsByCategory);

export default router;