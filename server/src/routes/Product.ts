import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();
router.post('/create/', controller.createProduct);
router.get('/get/', controller.getProducts);
router.get('/category/:category/:productId', controller.getProduct);
router.get('/get/category/:category', controller.getProductsByCategory);
router.get('/random-products/', controller.getRandomProducts);
router.get('/search', controller.searchProducts);

export default router;