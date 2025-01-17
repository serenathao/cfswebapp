import React, { Component } from 'react';
import TablePagination from '@mui/material/TablePagination';

class FusionDataPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{marginRight: '10px'}}>
                <TablePagination
                    component='div'
                    count={100000}  // hard-coded. In real application, needs to be dynamic
                    page={this.props.currentPage}
                    onPageChange={this.props.selectPage}
                    rowsPerPage={this.props.limit}
                    onRowsPerPageChange={this.props.selectRowsPerPage}
                    rowsPerPageOptions={[100, 50]}
                />
            </div>
        );
    }
}

export default FusionDataPagination;