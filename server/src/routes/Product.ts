import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();
router.post('/create/', controller.createProduct);
router.get('/get/', controller.getProducts);
router.get('/get/:productId', controller.getProduct);
router.get('/get/category/:category', controller.getProductsByCategory);
router.get('/random-products/', controller.getRandomProducts);

export default router;