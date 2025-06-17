import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

// GET all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 