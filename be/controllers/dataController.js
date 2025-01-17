const databaseService = require('../services/dataService');

const getFusionDataPage = async (req, res) => {
    console.log("Received query parameters:", req.query);
    /* 
    REQ: 
    The current implementation requires the FE assuming the field names of the SQLITE file ("hard-coded").
    The individual fields can be abstracted by having the FE getting the fields from the database and populating the fieldNames accordingly.
        {
            getAllFields: bool indicating whether to fetch all fields of db entries
            fieldNames: { array of fields names to be included in results } or {}
            pageStart: number indicating the starting entry to return
            offset: numer indicating the number of entries to return
        }
    The function returns the only the entries and field names requested by the FE
    */

    // Simple parameter validation
    const pageStart = parseInt(req.query.pageStart);  // Default to 0 if not provided
    const limit = parseInt(req.query.limit);
    if ( typeof pageStart !== 'number' || typeof limit !== 'number' ) {
        return res.status(400).json({ error: 'Invalid parameters. The parameters pageStart and limit must be numbers' });
    }
    // Further parameter validation:
    // Each field name in the fieldNames must exist in the table and pageStart and offset must be valid.
    
    try {
        const data = await databaseService.runQuery(`SELECT * FROM fusion_experiments LIMIT ${limit} OFFSET ${pageStart} `);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch data', error: error.message });
    }
};

module.exports = { getFusionDataPage };