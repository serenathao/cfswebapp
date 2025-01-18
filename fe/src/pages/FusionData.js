import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FusionDataTable from '../components/FusionDataTable';
import FusionDataPagination from '../components/FusionDataPagination';

const FusionDataPage = () => {
    const [limit, setLimit] = useState(100);
    const [currentPage, setCurrentPage] = useState(0);
    const [storedData, setStoredData] = useState([]);

    // Whenever the user updates limit or current page, fetch new data
    useEffect(() => {
        fetchData();
    }, [limit, currentPage]);

    const fetchData = () => {
        const params = {
            pageStart: currentPage * limit, 
            limit: limit,
        };
        
        axios.get('/api/fusion_data', { params }).then((response) => {
            setStoredData( response.data.data );
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    const selectPage = (e, newPage) => {
        setCurrentPage( newPage );
    }

    const selectRowsPerPage = (e) => {
        setLimit( e.target.value );
    }

    return (
        <div>
            <FusionDataPagination
                currentPage={currentPage}
                selectPage={selectPage}
                limit={limit}
                selectRowsPerPage={selectRowsPerPage}
            />

            <FusionDataTable
                tableData={storedData}
            />
        </div>
    );
}

export default FusionDataPage;