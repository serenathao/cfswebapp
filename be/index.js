const express = require('express');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3010;

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
// GET /api/fusion_data

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});