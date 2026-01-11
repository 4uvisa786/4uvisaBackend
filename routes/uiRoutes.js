import express from 'express';
import { getUIConfig } from '../controllers/uiController.js';

const router = express.Router();

// -------------------- PUBLIC ROUTES --------------------
router.get('/ui-config', getUIConfig);

export default router;