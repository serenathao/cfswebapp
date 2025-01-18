import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const FusionDataPagination = ({ currentPage, selectPage, limit, selectRowsPerPage }) => {
    return (
        <div style={{marginRight: '10px'}}>
            <TablePagination
                component='div'
                count={100000}  // hard-coded. In real application, needs to be dynamic
                page={currentPage}
                onPageChange={selectPage}
                rowsPerPage={limit}
                onRowsPerPageChange={selectRowsPerPage}
                rowsPerPageOptions={[100, 50]}
            />
        </div>
    );
}

export default FusionDataPagination;