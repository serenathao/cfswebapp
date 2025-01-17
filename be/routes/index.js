const express = require('express');
const fusionDataRoutes = require('./fusionDataRoutes');

const router = express.Router();

// Mount each route category
router.use('/fusion_data', fusionDataRoutes);

module.exports = router;