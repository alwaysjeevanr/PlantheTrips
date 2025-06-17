import express from 'express';
import Package from '../models/Package.js';

const router = express.Router();

// GET top selling packages
router.get('/top-selling', async (req, res) => {
  try {
    const packages = await Package.find().sort({ sales: -1 }).limit(6);
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 