const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to fetch data
router.get('/', dataController.getFusionDataPage);

module.exports = router;