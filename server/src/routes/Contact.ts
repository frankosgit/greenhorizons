import express from 'express';
import controller from '../controllers/Contact';

const router = express.Router();
router.post('/create/', controller.createContact);

export default router;